import React from 'react';
import Svg, { SvgProps } from './Svg';

const Create: React.FC<SvgProps> = props => {
  const ariaLabel = '创建';
  return (
    <Svg ariaLabel={ariaLabel} {...props}>
      <title>{ariaLabel}</title>
      <path
        d="M22.75 13L22.75 13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75L12.85 22.75C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15L3.25 12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25L13 3.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      ></path>
      <path
        d="M21.75 4.25L13.75 12.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      ></path>
    </Svg>
  );
};

export default Create;
