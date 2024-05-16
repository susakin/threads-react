import React from 'react';
import Svg, { SvgProps } from './Svg';
import cs from 'classnames';
import styles from './spin.module.less';

const Spin: React.FC<SvgProps> = props => {
  const ariaLabel = '正在加载中...';
  return (
    <Svg
      ariaLabel={ariaLabel}
      className={cs(props.className, styles['spinning'])}
      {...props}
    >
      <title>{ariaLabel}</title>
      <rect
        fill="currentColor"
        height="10"
        opacity="0"
        rx="5"
        ry="5"
        transform="rotate(-90 50 50)"
        width="28"
        x="67"
        y="45"
      ></rect>
      <rect
        fill="currentColor"
        height="10"
        opacity="0.125"
        rx="5"
        ry="5"
        transform="rotate(-45 50 50)"
        width="28"
        x="67"
        y="45"
      ></rect>
      <rect
        fill="currentColor"
        height="10"
        opacity="0.25"
        rx="5"
        ry="5"
        transform="rotate(0 50 50)"
        width="28"
        x="67"
        y="45"
      ></rect>
      <rect
        fill="currentColor"
        height="10"
        opacity="0.375"
        rx="5"
        ry="5"
        transform="rotate(45 50 50)"
        width="28"
        x="67"
        y="45"
      ></rect>
      <rect
        fill="currentColor"
        height="10"
        opacity="0.5"
        rx="5"
        ry="5"
        transform="rotate(90 50 50)"
        width="28"
        x="67"
        y="45"
      ></rect>
      <rect
        fill="currentColor"
        height="10"
        opacity="0.625"
        rx="5"
        ry="5"
        transform="rotate(135 50 50)"
        width="28"
        x="67"
        y="45"
      ></rect>
      <rect
        fill="currentColor"
        height="10"
        opacity="0.75"
        rx="5"
        ry="5"
        transform="rotate(180 50 50)"
        width="28"
        x="67"
        y="45"
      ></rect>
      <rect
        fill="currentColor"
        height="10"
        opacity="0.875"
        rx="5"
        ry="5"
        transform="rotate(225 50 50)"
        width="28"
        x="67"
        y="45"
      ></rect>
    </Svg>
  );
};

export default Spin;
