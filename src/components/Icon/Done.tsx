import React from 'react';
import Svg, { SvgProps } from './Svg';

const Done: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title>{props.ariaLabel}</title>
      <polyline
        points="21.648 5.352 9.002 17.998 2.358 11.358"
        strokeWidth={3}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></polyline>
    </Svg>
  );
};

export default Done;
