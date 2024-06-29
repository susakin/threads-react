import React from 'react';
import styles from './pairMedia.module.less';
const classNamePrefix = 'pair-media';

type PairMediaProps = {
  children?: React.ReactNode;
  firstRatio: number;
  secondRatio: number;
};

const PairMedia: React.FC<PairMediaProps> = ({
  children,
  firstRatio,
  secondRatio,
}) => {
  const firstMinMax = `minmax(0, ${Math.floor(firstRatio * 100)}fr)`;
  const secondMinMax = `minmax(0, ${Math.floor(secondRatio * 100)}fr)`;
  return (
    <div
      className={styles[`${classNamePrefix}`]}
      style={{
        aspectRatio: firstRatio + secondRatio,
        gridTemplateColumns: `${firstMinMax} ${secondMinMax}`,
      }}
    >
      {children}
    </div>
  );
};

export default PairMedia;
