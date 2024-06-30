import React from 'react';
import Svg, { SvgProps } from './Svg';

const RemoveFollower: React.FC<SvgProps> = props => {
  return (
    <Svg fill="currentColor" {...props}>
      <title>{props?.ariaLabel}</title>
      <path
        d="M2.10352 18.4167L7.76037 12.7599"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></path>
      <path
        d="M7.67188 18.3284L2.01502 12.6715"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></path>
      <circle
        cx="10"
        cy="4.5"
        fill="none"
        r="3.75"
        stroke="currentColor"
        strokeWidth="1.5"
      ></circle>
      <path
        clipRule="evenodd"
        d="M10 19C10 19.4142 10.3358 19.75 10.75 19.75H16.5C17.7426 19.75 18.75 18.7426 18.75 17.5V16.5C18.75 13.6005 16.3995 11.25 13.5 11.25H10.75C10.3358 11.25 10 11.5858 10 12V12C10 12.4142 10.3358 12.75 10.75 12.75H13.5C15.5711 12.75 17.25 14.4289 17.25 16.5V17.5C17.25 17.9142 16.9142 18.25 16.5 18.25H10.75C10.3358 18.25 10 18.5858 10 19V19Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </Svg>
  );
};

export default RemoveFollower;
