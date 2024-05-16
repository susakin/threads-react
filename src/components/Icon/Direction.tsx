import React from 'react';
import Svg, { SvgProps } from './Svg';

const Direction: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title>{props?.ariaLabel}</title>
      <polyline
        fill="none"
        points="16.502 3 7.498 12 16.502 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polyline>
    </Svg>
  );
};

export default Direction;
