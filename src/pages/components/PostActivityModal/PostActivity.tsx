import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Heart, Repost, Quote } from '@components/Icon';
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
import ActivityHeader from './ActivityHeader';
import Activities from './Activities';
import Eye from '@components/Icon/Eye';
import numberFormat from '@components/ShortenNumber/numberFormat';

const classNamePrefix = 'post-activity';

export type Activities = {
  likeCount?: number;
  quoteCount?: number;
  repostCount?: number;
  viewCount?: number;
  recentActivities?: UserActivity[];
};

type PostActivityProps = {
  post?: Post;
  activities?: Activities;
  onNavigate?: () => void;
};

const PostActivity: React.FC<PostActivityProps> = ({
  post,
  activities,
  onNavigate,
}) => {
  const items = useMemo(() => {
    const items: any = [];

    if (activities?.repostCount) {
      items.push({
        icon: <Repost viewBox="0 0 18 18" size={24} />,
        label: '转发',
        num: <ShortenNumber value={activities?.repostCount} />,
        onClick() {
          setActivityType('repost');
        },
      });
    }

    if (activities?.quoteCount) {
      items.push({
        icon: <Quote viewBox="0 0 20 20" size={24} />,
        label: '引用',
        num: <ShortenNumber value={activities?.quoteCount} />,
        onClick() {
          setActivityType('quote');
        },
      });
    }
    if (activities?.viewCount) {
      items.unshift({
        icon: <Eye viewBox="0 0 24 24" size={24} />,
        label: '浏览量',
        num: numberFormat.withThousandDelimiters(activities?.viewCount),
        hasMore: false,
      });
    }

    if (activities?.likeCount) {
      const likeItem = {
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
        num: <ShortenNumber value={activities?.likeCount} />,
        onClick() {
          setActivityType('like');
        },
      };
      if (items.length > 0) {
        items.splice(1, 0, likeItem);
      } else {
        items.push(likeItem);
      }
      items.unshift();
    }

    return items;
  }, [activities]);

  const [activityType, setActivityType] = useState<
    'all' | 'like' | 'repost' | 'quote'
  >('all');

  const title = useMemo(() => {
    const quoteCount = shortenNumber(activities?.quoteCount);
    const repostCount = shortenNumber(activities?.repostCount);
    const likeCount = shortenNumber(activities?.likeCount);

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
  }, [activityType, activities]);

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
      setData(formatAvticities(activities?.recentActivities as any));
    } else {
      run(post?.code as string, activityType, { page: 1, pageSize: 20 });
    }
  }, [activityType, activities]);

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <ActivityHeader
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
        {isAllActivityType && <Activities items={items} />}
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
