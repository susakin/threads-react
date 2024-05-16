import React from 'react';
import styles from './poll.module.less';
import Button from '@components/Button';
import { Tally } from '@typings/index';
import cs from 'classnames';
import { uniqueId } from 'lodash';

const classNamePrefix = 'poll';

type PollProps = {
  onDelete?: () => void;
  tallies?: Tally[];
  onTalliesUpdate?: (tallies: Tally[]) => void;
};

const Poll: React.FC<PollProps> = ({ onDelete, tallies, onTalliesUpdate }) => {
  const placeholders = ['是', '否', '添加另一选项', '添加另一选项'];
  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-option`]}>
        {tallies?.map((item, index) => {
          return (
            <input
              key={item.id}
              value={item.text}
              maxLength={25}
              className={cs(styles[`${classNamePrefix}-option-item`], {
                [styles[`${classNamePrefix}-option-item-dashed`]]:
                  index === tallies.length - 1 && !item.text?.length,
              })}
              placeholder={placeholders[index]}
              onChange={e => {
                const value = e.target.value;
                onTalliesUpdate?.(
                  tallies?.map(it => {
                    if (it.id === item.id) {
                      it.text = value;
                    }
                    return it;
                  }),
                );
                if (index === 2 && tallies.length === 3 && value?.length) {
                  onTalliesUpdate?.([...tallies, { text: '', id: uniqueId() }]);
                }
                if (
                  ((index === 2 && !tallies?.[3]?.text.length) ||
                    (index === 3 && !tallies?.[2]?.text.length)) &&
                  tallies.length === 4 &&
                  !value?.length
                ) {
                  const updatedTrallies = [...tallies];
                  updatedTrallies.splice(2, 1);
                  onTalliesUpdate?.(updatedTrallies);
                }
              }}
            />
          );
        })}
      </div>
      <div className={styles[`${classNamePrefix}-hint`]}>
        <div className={styles[`${classNamePrefix}-hint-text`]}>
          24 小时后结束
        </div>
        <Button
          onClick={onDelete}
          type="text"
          className={styles[`${classNamePrefix}-hint-button`]}
        >
          移除投票
        </Button>
      </div>
    </div>
  );
};

export default Poll;
