import React from 'react';
import Svg, { SvgProps } from './Svg';

const Info: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title>{props.ariaLabel}</title>
      <circle
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="12.001"
        cy="12.005"
        r="10.5"
      ></circle>
      <circle cx="11.819" cy="7.709" r="1.25"></circle>
      <line
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="10.569"
        x2="13.432"
        y1="16.777"
        y2="16.777"
      ></line>
      <polyline
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="10.569 11.05 12 11.05 12 16.777"
      ></polyline>
    </Svg>
  );
};

export default Info;
