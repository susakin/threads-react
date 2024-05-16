import React from 'react';
import Navigation from '../Navigation';
import styles from './index.module.less';

const classNamePrefix = 'footer';

const Footer: React.FC = () => {
  return <Navigation className={styles[`${classNamePrefix}`]} />;
};

export default Footer;
