import React from 'react';
import Svg, { SvgProps } from './Svg';

const Line: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <path
        d={`M18 1L18 ${(props.height as number) - 1}`}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </Svg>
  );
};

export default Line;
