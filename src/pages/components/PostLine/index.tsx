import React, { useRef } from 'react';
import { Line, Squiggle } from '@components/Icon';
import useResizeObserver from 'use-resize-observer';
import cs from 'classnames';
import styles from './index.module.less';

const classNamePrefix = 'post-line';

export type PostLineProps = {
  lineType?: 'squiggle' | 'line';
  placeholderHeight?: number;
  indent?: boolean;
  className?: string;
};

const PostLine: React.FC<PostLineProps> = ({
  lineType,
  placeholderHeight = 0,
  className,
  indent,
}) => {
  const isSquiggle = lineType === 'squiggle';
  const Icon = isSquiggle ? Squiggle : Line;
  const ref = useRef<HTMLDivElement>(null);
  const { height = 0 } = useResizeObserver({ ref });
  const offsetHeight = 2;

  return (
    <div
      className={cs(styles[`${classNamePrefix}`], className, {
        [styles[`${classNamePrefix}-in-line`]]: !isSquiggle,
        [styles[`${classNamePrefix}-indent`]]: indent || isSquiggle,
      })}
      ref={ref}
    >
      <div className={styles[`${classNamePrefix}-inner`]}>
        <Icon
          width={21}
          height={height + placeholderHeight + offsetHeight}
          viewBox={`0 0 21 ${height + placeholderHeight + offsetHeight}`}
          fill="none"
        />
      </div>
    </div>
  );
};

export default PostLine;
