import React from 'react';
import Svg, { SvgProps } from './Svg';

const Back: React.FC<SvgProps> = props => {
  const ariaLabel = '关闭';
  return (
    <Svg ariaLabel={ariaLabel} {...props}>
      <title>{ariaLabel}</title>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="21"
        x2="3"
        y1="3"
        y2="21"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="21"
        x2="3"
        y1="21"
        y2="3"
      ></line>
    </Svg>
  );
};

export default Back;
