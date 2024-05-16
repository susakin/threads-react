import React from 'react';
import styles from './sign.module.less';

const classNamePrefix = 'sign';

type SignProps = {
  icon?: React.ReactNode;
  text?: React.ReactNode;
};

const Sign: React.FC<SignProps> = ({ icon, text }) => {
  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-icon`]}>{icon}</div>
      <div className={styles[`${classNamePrefix}-text`]}>{text}</div>
    </div>
  );
};

export default Sign;
