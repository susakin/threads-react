import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Direction, Arrow, Heart, Repost, Quote } from '@components/Icon';
import QuotedPost from '../QuotedPost';
import UserList from '../UserList';
import styles from './postActivity.module.less';
import { Post } from '@typings/index';
import { postActivity } from '@services/activity';
import { useFetch } from '@hooks/useFetch';
import { UserActivity } from '../User';
import Spin from '@components/Spin';
import ShortenNumber, { shortenNumber } from '@components/ShortenNumber';
import { useNavigate } from 'react-router-dom';

type PostActivityHeaderProps = {
  hasBack?: boolean;
  title?: React.ReactNode;
  onBackClick?: () => void;
};

const PostActivityHeader: React.FC<PostActivityHeaderProps> = ({
  hasBack,
  onBackClick,
  title,
}) => {
  const classNamePrefix = 'post-activity-header';
  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-back`]}>
        {hasBack && (
          <Arrow size={20} viewBox="0 0 24 24" onClick={onBackClick} />
        )}
      </div>
      <div className={styles[`${classNamePrefix}-title`]}>{title}</div>
    </div>
  );
};

type PostActivityItem = {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  num?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

type PostActivityItemsProps = {
  items?: PostActivityItem[];
};

const PostActivities: React.FC<PostActivityItemsProps> = ({ items }) => {
  const classNamePrefix = `post-activities`;

  return (
    <div className={styles[`${classNamePrefix}`]}>
      {items?.map(({ icon, label, num, onClick }, index) => {
        return (
          <div
            className={styles[`${classNamePrefix}-item`]}
            key={index}
            onClick={onClick}
          >
            <div className={styles[`${classNamePrefix}-item-icon`]}>{icon}</div>
            <div className={styles[`${classNamePrefix}-item-inner`]}>
              <div className={styles[`${classNamePrefix}-item-inner-text`]}>
                {label}
              </div>
              <div className={styles[`${classNamePrefix}-item-inner-num`]}>
                <div
                  className={styles[`${classNamePrefix}-item-inner-num-text`]}
                >
                  {num}
                </div>
                <div
                  className={styles[`${classNamePrefix}-item-inner-num-icon`]}
                >
                  <Direction
                    fill="currentColor"
                    size={16}
                    viewBox="0 0 24 24"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const classNamePrefix = 'post-activity';

export type PostActivityData = {
  likeCount?: number;
  quoteCount?: number;
  repostCount?: number;
  recentActivities?: UserActivity[];
};

type PostActivityProps = {
  post?: Post;
  postActivityData?: PostActivityData;
  onNavigate?: () => void;
};

const PostActivity: React.FC<PostActivityProps> = ({
  post,
  postActivityData,
  onNavigate,
}) => {
  const items = useMemo(() => {
    const items: any = [];

    if (postActivityData?.repostCount) {
      items.push({
        icon: <Repost viewBox="0 0 18 18" size={24} />,
        label: '转发',
        num: <ShortenNumber value={postActivityData?.repostCount} />,
        onClick() {
          setActivityType('repost');
        },
      });
    }

    if (postActivityData?.quoteCount) {
      items.push({
        icon: <Quote viewBox="0 0 20 20" size={24} />,
        label: '引用',
        num: <ShortenNumber value={postActivityData?.quoteCount} />,
        onClick() {
          setActivityType('quote');
        },
      });
    }

    if (items.length && postActivityData?.likeCount) {
      items.unshift({
        icon: (
          <Heart
            viewBox="0 0 18 18"
            width={24}
            height="22"
            strokeWidth={2}
            stroke="currentColor"
            fill="transparent"
          />
        ),
        label: '赞',
        num: <ShortenNumber value={postActivityData?.likeCount} />,
        onClick() {
          setActivityType('like');
        },
      });
    }
    return items;
  }, [postActivityData]);

  const [activityType, setActivityType] = useState<
    'all' | 'like' | 'repost' | 'quote'
  >('all');

  const title = useMemo(() => {
    const quoteCount = shortenNumber(postActivityData?.quoteCount);
    const repostCount = shortenNumber(postActivityData?.repostCount);
    const likeCount = shortenNumber(postActivityData?.likeCount);

    switch (activityType) {
      case 'all':
        return !quoteCount && !repostCount && likeCount
          ? `${likeCount}次赞`
          : '帖子动态';
      case 'like':
        return `${likeCount}次赞`;
      case 'repost':
        return `${repostCount}次转发`;
      case 'quote':
        return `${quoteCount}次引用`;
    }
  }, [activityType, postActivityData]);

  function formatAvticities(activties: any = []) {
    return activties?.map((activty: any) => {
      const { type, createdAt, context, content, relatePostCode } = activty;
      return {
        id: activty?.user?.id,
        user: activty.fromUser,
        activity: {
          type,
          createdAt,
          context,
          content,
          relatePostCode,
        },
      };
    });
  }

  const { run, loading } = useFetch(postActivity, {
    manual: true,
    onSuccess(data: any) {
      setData(formatAvticities(data?.activities as any));
    },
  });

  const [data, setData] = useState<UserActivity[]>([]);
  const isAllActivityType = activityType === 'all';
  const naviagte = useNavigate();

  useLayoutEffect(() => {
    if (activityType === 'all') {
      setData(formatAvticities(postActivityData?.recentActivities as any));
    } else {
      run(post?.code as string, activityType, { page: 1, pageSize: 20 });
    }
  }, [activityType, postActivityData]);

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <PostActivityHeader
        title={title}
        hasBack={!isAllActivityType}
        onBackClick={() => {
          setActivityType('all');
        }}
      />
      <div className={styles[`${classNamePrefix}-inner`]}>
        <div className={styles[`${classNamePrefix}-inner-placeholder`]}></div>
        <div className={styles[`${classNamePrefix}-inner-post`]}>
          <QuotedPost
            post={post}
            isSummary={true}
            hasReplyTo
            style={{ marginTop: 0 }}
          />
        </div>
        {isAllActivityType && <PostActivities items={items} />}
        {loading ? (
          <Spin spinning height={150} />
        ) : (
          <UserList
            className={styles[`${classNamePrefix}-inner-user`]}
            hasFollower={false}
            itemClassName={styles[`${classNamePrefix}-inner-user-item`]}
            data={data}
            onClick={({ activity }) => {
              if (activity?.type === 'quote') {
                onNavigate?.();
                naviagte(`/post/${activity?.relatePostCode}`);
              }
            }}
            canNavigate={(user, activity) => {
              if (activity?.type === 'quote') {
                return true;
              }
              return false;
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PostActivity;
