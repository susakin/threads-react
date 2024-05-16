import React from 'react';
import styles from './unavailableTomstone.module.less';

const classNamePrefix = 'unavailable-tomstone';

const UnavailableTomstone: React.FC = () => {
  return <div className={styles[`${classNamePrefix}`]}>内容无法显示</div>;
};

export default UnavailableTomstone;
