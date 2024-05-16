import React from 'react';
import Svg, { SvgProps } from './Svg';

const Arrow: React.FC<SvgProps> = props => {
  return (
    <Svg fill="currentColor" {...props}>
      <title>{props?.ariaLabel}</title>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="2.909"
        x2="22.001"
        y1="12.004"
        y2="12.004"
      ></line>
      <polyline
        fill="none"
        points="9.276 4.726 2.001 12.004 9.276 19.274"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polyline>
    </Svg>
  );
};

export default Arrow;
