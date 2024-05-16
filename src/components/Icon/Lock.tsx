import React from 'react';
import Svg, { SvgProps } from './Svg';

const Lock: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title>{props.ariaLabel}</title>
      <path
        d="M2.43 20.432c-.743 0-1.306-.202-1.69-.606-.384-.397-.576-.996-.576-1.797v-6.924c0-.794.192-1.39.576-1.787.384-.397.948-.595 1.69-.595h9.14c.742 0 1.306.198 1.69.595.384.397.576.993.576 1.787v6.924c0 .801-.192 1.4-.576 1.797-.384.404-.947.606-1.69.606H2.43Zm.273-1.758h8.594c.202 0 .358-.062.469-.186.11-.117.166-.293.166-.527v-6.777c0-.235-.056-.41-.166-.528-.111-.117-.267-.176-.47-.176H2.704a.634.634 0 0 0-.469.176c-.11.117-.166.293-.166.528v6.777c0 .234.056.41.166.527a.615.615 0 0 0 .47.186Zm-.752-9.131V6.438c0-1.205.235-2.21.703-3.018.476-.814 1.097-1.426 1.866-1.836A5.187 5.187 0 0 1 7 .969c.885 0 1.712.205 2.48.615.769.41 1.387 1.022 1.856 1.836.475.807.713 1.813.713 3.018v3.105h-1.826V6.262c0-.762-.15-1.403-.45-1.924a3.019 3.019 0 0 0-1.171-1.201A3.223 3.223 0 0 0 7 2.727c-.58 0-1.113.136-1.602.41a3.019 3.019 0 0 0-1.171 1.2c-.293.522-.44 1.163-.44 1.925v3.281H1.951Z"
        fill="currentColor"
      ></path>
    </Svg>
  );
};

export default Lock;
