import React from 'react';
import Svg, { SvgProps } from './Svg';

const Clear: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title>{props.ariaLabel}</title>
      <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm5.139 16.056a.766.766 0 1 1-1.083 1.083L12 13.083 7.944 17.14a.766.766 0 0 1-1.083-1.083L10.917 12 6.86 7.944a.766.766 0 0 1 1.083-1.083L12 10.917l4.056-4.056a.766.766 0 0 1 1.083 1.083L13.083 12Z"></path>
    </Svg>
  );
};

export default Clear;
