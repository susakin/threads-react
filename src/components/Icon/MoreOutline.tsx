import React from 'react';
import Svg, { SvgProps } from './Svg';

const MoreOutline: React.FC<SvgProps> = props => {
  const ariaLabel = '更多';
  return (
    <Svg ariaLabel={ariaLabel} {...props}>
      <title>{ariaLabel}</title>
      <circle
        cx="12"
        cy="12"
        fill="none"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
      ></circle>
      <path
        clipRule="evenodd"
        d="M7.5 13.5C6.67157 13.5 6 12.8284 6 12C6 11.1716 6.67157 10.5 7.5 10.5C8.32843 10.5 9 11.1716 9 12C9 12.8284 8.32843 13.5 7.5 13.5Z"
        fillRule="evenodd"
        fill="currentColor"
      ></path>
      <path
        clipRule="evenodd"
        d="M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5Z"
        fillRule="evenodd"
        fill="currentColor"
      ></path>
      <path
        clipRule="evenodd"
        d="M16.5 13.5C15.6716 13.5 15 12.8284 15 12C15 11.1716 15.6716 10.5 16.5 10.5C17.3284 10.5 18 11.1716 18 12C18 12.8284 17.3284 13.5 16.5 13.5Z"
        fillRule="evenodd"
        fill="currentColor"
      ></path>
    </Svg>
  );
};

export default MoreOutline;
