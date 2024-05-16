import React from 'react';
import { Image } from '..';
import { Link } from 'react-router-dom';
import styles from './index.stylex';
import * as stylex from '@stylexjs/stylex';
import { type StyleXStyles } from '@stylexjs/stylex';

type AvatarProps = {
  size?: number | string;
  url?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | unknown;
  className?: string;
  style?: React.CSSProperties;
  linkTo?: string;
  stylexStyles?: StyleXStyles;
};

const Avatar: React.FC<AvatarProps> = ({
  size,
  url,
  onClick,
  stylexStyles,
  style,
  linkTo,
}) => {
  const img = (
    <Image
      hasSpin={false}
      stylexStyles={styles.avatarImg}
      draggable={false}
      src={url || require('@assets/images/avatar.jpg')}
    />
  );

  return (
    <div
      style={{ ...style, width: size, height: size }}
      onClick={onClick}
      {...stylex.props(styles.avatar, stylexStyles)}
    >
      {linkTo ? (
        <Link to={linkTo} {...stylex.props(styles.link)}>
          {img}
        </Link>
      ) : (
        img
      )}
    </div>
  );
};

export default Avatar;
