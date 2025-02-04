import React, { useContext, useState } from 'react';
import styles from './index.module.less';
import Avatar from '@components/Avatar';
import cs from 'classnames';
import { Poll as PollItem } from '@typings/index';
import { useCountDown } from 'ahooks';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { vote } from '@services/post';
import { useFetch } from '@hooks/useFetch';
import { AuthContext } from '@context/AuthProvider';

dayjs.extend(duration);

const classNamePrefix = 'poll';

type PollProps = {
  poll?: PollItem;
  onUpdate?: (poll: PollItem) => void;
};

const Poll: React.FC<PollProps> = ({ poll, onUpdate }) => {
  const {
    tallies = [],
    viewerVote,
    expiresAt,
    viewerCanVote,
    viewerIsOwner,
  } = poll || {};
  const [finished, setFinished] = useState<boolean>(!!poll?.finished);
  const over = finished || viewerVote;
  const { state } = useContext(AuthContext);

  const { run, loading } = useFetch(vote, {
    manual: true,
    onSuccess(data, [params]) {
      onUpdate?.({
        ...poll,
        viewerVote: true,
        tallies: tallies?.map(item => {
          if (item.id === params.pollItemId) {
            (item.count as number)++;
            item.voteUserAvatar = [state?.user?.profilePicUrl as string];
          }
          return item;
        }),
      });
    },
  });

  const totalCount = tallies.reduce(
    (total, item) => total + (item.count || 0),
    0,
  );
  const maxCount = Math.max(...tallies.map(item => item.count || 0));

  const [countdown] = useCountDown({
    leftTime: finished ? 0 : (expiresAt || 0) - Date.now(),
    interval: 1000,
    onEnd() {
      setFinished(true);
    },
  });

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-option`]}>
        {tallies.map(item => {
          const per = (item.count || 0) / totalCount || 0;
          return (
            <div
              onClick={e => {
                if (!over && viewerCanVote) {
                  e.stopPropagation();
                  !loading && run({ pollId: poll?.id, pollItemId: item.id });
                }
              }}
              className={cs(styles[`${classNamePrefix}-option-item`], {
                [styles[`${classNamePrefix}-option-item-over`]]: over,
                [styles[`${classNamePrefix}-option-item-can-vote`]]:
                  viewerCanVote && !over,
                [styles[`${classNamePrefix}-option-item-hightlighted`]]:
                  viewerIsOwner || finished
                    ? item.count === maxCount && maxCount !== 0
                    : item.voteUserAvatar?.length !== 0,
              })}
              key={item.id}
              style={{ cursor: !viewerCanVote ? 'default' : '' }}
            >
              {!over && viewerCanVote && (
                <div
                  className={styles[`${classNamePrefix}-option-item-overlay`]}
                />
              )}

              <div
                className={styles[`${classNamePrefix}-option-item-meter`]}
                style={{
                  transform: `scaleX(${over || viewerIsOwner ? per : 0})`,
                }}
              />

              <div className={styles[`${classNamePrefix}-option-item-text`]}>
                {item.text}
              </div>
              <div
                className={styles[`${classNamePrefix}-option-item-avatar`]}
                style={{ transform: `scale(${over || viewerIsOwner ? 1 : 0})` }}
              >
                {item.voteUserAvatar?.length !== 0 && (
                  <Avatar size={16} url={item.voteUserAvatar?.[0]} />
                )}
              </div>

              <div
                className={styles[`${classNamePrefix}-option-item-percentage`]}
                style={{ transform: `scale(${over || viewerIsOwner ? 1 : 0})` }}
              >
                {Math.round(per * 100) || 0}%
              </div>
            </div>
          );
        })}
      </div>
      {finished ? (
        <div className={styles[`${classNamePrefix}-hint`]}>
          {totalCount}票 · 最终结果
        </div>
      ) : (
        <div className={styles[`${classNamePrefix}-countdown`]}>
          {(viewerVote || viewerIsOwner) && totalCount
            ? `${totalCount}票 · `
            : ''}
          {dayjs.duration(countdown).format('HH:mm:ss')}后结束
        </div>
      )}
    </div>
  );
};

export default Poll;
