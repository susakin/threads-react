import React from 'react';
import Svg, { SvgProps } from './Svg';

const More: React.FC<SvgProps> = props => {
  const ariaLabel = '更多';
  return (
    <Svg ariaLabel={ariaLabel} {...props}>
      <title>{ariaLabel}</title>
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </Svg>
  );
};

export default More;
