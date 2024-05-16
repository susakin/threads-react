import React from 'react';
import styles from './errorHint.module.less';

const classNamePrefix = 'error-hint';

type ErrorHintProps = {
  hint?: React.ReactNode;
};

const ErrorHint: React.FC<ErrorHintProps> = ({ hint }) => {
  return <div className={styles[`${classNamePrefix}`]}>{hint}</div>;
};

export default ErrorHint;
