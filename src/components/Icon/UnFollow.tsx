import React from 'react';
import Svg, { SvgProps } from './Svg';

const UnFollow: React.FC<SvgProps> = props => {
  return (
    <Svg fill="currentColor" {...props}>
      <title></title>
      <circle
        cx="10"
        cy="4.5"
        fill="none"
        r="3.75"
        stroke="currentColor"
        strokeWidth="1.5"
      ></circle>
      <path
        d="M11.5 19C11.5 19.4142 11.8358 19.75 12.25 19.75H16.5C17.7426 19.75 18.75 18.7426 18.75 17.5V16.5C18.75 13.6005 16.3995 11.25 13.5 11.25H12.25C11.8358 11.25 11.5 11.5858 11.5 12V12C11.5 12.4142 11.8358 12.75 12.25 12.75H13.5C15.5711 12.75 17.25 14.4289 17.25 16.5V17.5C17.25 17.9142 16.9142 18.25 16.5 18.25H12.25C11.8358 18.25 11.5 18.5858 11.5 19V19Z"
        fill="currentColor"
      ></path>
      <rect
        fill="none"
        height="8.5"
        rx="4.25"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(-180 9.25 19)"
        width="8.5"
        x="9.25"
        y="19"
      ></rect>
      <path
        d="M3.40918 14.75H6.591"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></path>
    </Svg>
  );
};

export default UnFollow;
