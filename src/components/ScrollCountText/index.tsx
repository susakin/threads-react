import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import cs from 'classnames';
const classNamePrefix = 'scroll-count-text';

type ScrollCountTextProps = {
  count?: number;
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

const ScrollCountText: React.FC<ScrollCountTextProps> = ({
  children,
  className,
  onClick,
  ...rest
}) => {
  const [count, setCount] = useState<number>(rest?.count as number);

  useEffect(() => {
    (rest.count as number) > count
      ? setTimeout(() => {
          setCount(rest.count as number);
        }, 200)
      : setCount(rest.count as number);
  }, [rest.count]);

  const increment = (rest?.count as number) > count;

  return (
    <span
      className={cs(styles[`${classNamePrefix}`], className)}
      onClick={onClick}
      style={
        {
          lineHeight: 'var(--base-line-clamp-line-height)',
          '--base-line-clamp-line-height': 'calc(1.4 * 1em)',
        } as any
      }
    >
      <div
        className={cs(styles[`${classNamePrefix}-inner`], {
          [styles[`${classNamePrefix}-inner-changing`]]: increment,
        })}
      >
        <div>{count}</div>
        {increment && <div>{rest.count}</div>}
      </div>
      {children}
    </span>
  );
};

export default ScrollCountText;
