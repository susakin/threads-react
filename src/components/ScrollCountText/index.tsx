import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import styles from './index.module.less';
import cs from 'classnames';
import numberFormat from '@utils/numberFormat';
import { usePrevious } from 'ahooks';

type ScrollTextProps = {
  count?: number;
  increment?: boolean;
};

const ScrollText: React.FC<ScrollTextProps> = ({ ...rest }) => {
  const classNamePrefix = 'scroll-text';

  const [count, setCount] = useState<number>(rest?.count as number);
  const [increment, setIncrement] = useState<boolean>(
    rest?.increment as boolean,
  );

  useLayoutEffect(() => {
    setIncrement(rest?.increment as boolean);
  }, [rest?.count]);

  useEffect(() => {
    rest?.increment
      ? setTimeout(() => {
          setCount(rest.count as number);
          setIncrement(false);
        }, 210)
      : setCount(rest.count as number);
  }, [rest.count]);

  return (
    <span
      className={styles[`${classNamePrefix}`]}
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
    </span>
  );
};

type ScrollCountTextProps = {
  count?: number;
  className?: string;

  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

const ScrollCountText: React.FC<ScrollCountTextProps> = ({
  className,
  onClick,
  ...rest
}) => {
  const classNamePrefix = 'scroll-count-text';
  const previous = usePrevious(rest?.count);
  const count = rest?.count as number;
  const increment = count > (previous as number);

  const formatCount = (
    count > 9999
      ? numberFormat.formatLargeNumberForCJKLocale(count)
      : numberFormat.withThousandDelimiters(count)
  ).split('');
  const suffix = numberFormat.getSuffixForCJKLocale(count);

  const scrollCount = useMemo(() => {
    const regex = /^\d$/;
    const len = formatCount.length;
    return formatCount.map((num, i) => {
      console.log(len - i);
      if (regex.test(num)) {
        return (
          <ScrollText count={Number(num)} key={len - i} increment={increment} />
        );
      }
      return num;
    });
  }, [formatCount]);

  return (
    <span
      className={cs(className, styles[`${classNamePrefix}`])}
      onClick={onClick}
    >
      {scrollCount}
      {suffix}
    </span>
  );
};

export default ScrollCountText;
