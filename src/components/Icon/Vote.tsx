import React from 'react';
import Svg, { SvgProps } from './Svg';

const Vote: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title>{props.ariaLabel}</title>
      <rect
        fill="currentColor"
        height="1.5"
        rx="0.75"
        width="8"
        x="4"
        y="5.5"
      ></rect>
      <rect
        fill="currentColor"
        height="1.5"
        rx="0.75"
        width="16"
        x="4"
        y="11.25"
      ></rect>
      <rect
        fill="currentColor"
        height="1.5"
        rx="0.75"
        width="11"
        x="4"
        y="17"
      ></rect>
    </Svg>
  );
};

export default Vote;
