import React from 'react';
import Svg, { SvgProps } from './Svg';

const Squiggle: React.FC<SvgProps> = props => {
  const { height = 0 } = props;
  const _height = height as number;
  const i = _height - 11;
  const f = i - 14;
  return (
    <Svg {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={`M18 1L18 ${f}`}
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d={`M18 ${i}C18 ${f} 4 ${f} 4 ${
          f + 7
        }.12777C4 ${i}.2555 18 ${i}.9513 18 ${f}`}
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={`M18 ${i}L18 ${_height - 1}`}
      ></path>
    </Svg>
  );
};

export default Squiggle;
