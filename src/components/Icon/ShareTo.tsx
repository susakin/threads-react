import React from 'react';
import Svg, { SvgProps } from './Svg';

const ShareTo: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title></title>
      <path
        d="M3.25 10L3.25 14.3C3.25 15.4201 3.25 15.9802 3.46799 16.408C3.65973 16.7843 3.96569 17.0903 4.34202 17.282C4.76984 17.5 5.32989 17.5 6.45 17.5H13.55C14.6701 17.5 15.2302 17.5 15.658 17.282C16.0343 17.0903 16.3403 16.7843 16.532 16.408C16.75 15.9802 16.75 15.4201 16.75 14.3V10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      ></path>
      <path
        d="M6.5 6L10 2.5M10 2.5L13.5 6M10 2.5V12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      ></path>
    </Svg>
  );
};

export default ShareTo;
