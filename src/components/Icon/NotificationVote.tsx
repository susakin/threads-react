import React from 'react';
import Svg, { SvgProps } from './Svg';

const NotificationVote: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title>{props.ariaLabel}</title>
      <rect height="1.5" rx="0.75" width="4.92308" x="4.5" y="4.75"></rect>
      <rect height="1.5" rx="0.75" width="9.84615" x="4.5" y="8"></rect>
      <rect height="1.5" rx="0.75" width="6.76923" x="4.5" y="11.25"></rect>
    </Svg>
  );
};

export default NotificationVote;
