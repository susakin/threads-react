import React from 'react';
import Svg, { SvgProps } from './Svg';

const Tag: React.FC<SvgProps> = props => {
  return (
    <Svg fill="currentColor" {...props}>
      <title>{props?.ariaLabel}</title>
      <path d="M5 8.50012H20"></path>
      <path d="M4 15.0001H20"></path>
      <path d="M7.59985 19.9399L10.3999 4.06036"></path>
      <path d="M13.5999 19.9399L16.3999 4.06036"></path>
    </Svg>
  );
};

export default Tag;
