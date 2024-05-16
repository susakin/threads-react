import React from 'react';
import styles from './postLine.module.less';
import cs from 'classnames';
const classNamePrefix = 'post-line';

export type PostLineProps = {
  innerClassName?: string;
  barClassName?: string;
};

const PostLine: React.FC<PostLineProps> = ({
  innerClassName,
  barClassName,
}) => {
  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={cs(styles[`${classNamePrefix}-inner`], innerClassName)}>
        <div
          className={cs(styles[`${classNamePrefix}-inner-bar`], barClassName)}
        />
      </div>
    </div>
  );
};

export default PostLine;
