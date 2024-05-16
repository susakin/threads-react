import React from 'react';
import { Button } from '@components/index';
import { useNavigate } from 'react-router-dom';
import cs from 'classnames';
import styles from './index.module.less';

const classNamePrefix = 'access-error';

type AccessErrorProps = {
  message?: React.ReactNode;
  reason?: React.ReactNode;
  className?: string;
};

const AccessError: React.FC<AccessErrorProps> = ({
  message = '很抱歉，无法访问此页面',
  reason = '链接可能已损坏，或页面已被移除。',
  className,
}) => {
  const navigate = useNavigate();

  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      <div className={styles[`${classNamePrefix}-inner`]}>
        <span className={styles[`${classNamePrefix}-inner-message`]}>
          {message}
        </span>
        <span className={styles[`${classNamePrefix}-inner-reason`]}>
          {reason}
        </span>
        <Button
          className={styles[`${classNamePrefix}-inner-button`]}
          onClick={() => {
            navigate(-1);
          }}
        >
          返回
        </Button>
      </div>
    </div>
  );
};

export default AccessError;
