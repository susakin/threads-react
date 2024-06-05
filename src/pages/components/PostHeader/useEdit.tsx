import React, { useMemo } from 'react';
import styles from './useEdit.module.less';
import { useCountDown } from 'ahooks';
import dayjs from 'dayjs';

export type UseEditProps = {
  createdAt: number;
  onEditClick?: () => void;
  isOwn?: boolean;
};

const classNamePrefix = 'use-edit';

export const useEdit = ({ createdAt, onEditClick, isOwn }: UseEditProps) => {
  const leftTime = useMemo(() => {
    const step = 5 * 60 * 1000;

    if (Date.now() - createdAt < step) {
      return createdAt + step - Date.now();
    }
    return 0;
  }, [createdAt]);

  const [countdown] = useCountDown({ leftTime });
  let item;
  if (countdown > 0 && leftTime && isOwn) {
    item = {
      label: (
        <div className={styles[`${classNamePrefix}`]}>
          <div className={styles[`${classNamePrefix}-lable`]}>编辑</div>
          <div className={styles[`${classNamePrefix}-value`]}>
            {dayjs(countdown).format('mm:ss')}
          </div>
        </div>
      ),
      onClick: () => {
        onEditClick?.();
      },
      split: true,
    };
  }
  return { item };
};
