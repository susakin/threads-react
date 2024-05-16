import React from 'react';
import Svg, { SvgProps } from './Svg';

const Menu: React.FC<SvgProps> = props => {
  const ariaLabel = '更多';
  return (
    <Svg ariaLabel={ariaLabel} {...props}>
      <title>{ariaLabel}</title>
      <rect height="2.5" rx="1.25" width="21" x="3" y="7"></rect>
      <rect height="2.5" rx="1.25" width="14" x="10" y="15"></rect>
    </Svg>
  );
};

export default Menu;
