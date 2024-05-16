import React from 'react';
import Svg, { SvgProps } from './Svg';

type HomeProps = {
  pathFill?: string;
};

const Home: React.FC<SvgProps & HomeProps> = ({ pathFill, ...props }) => {
  return (
    <Svg {...props}>
      <title>{props?.ariaLabel}</title>
      <path
        d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H9.25C9.52614 22.7497 9.75 22.5258 9.75 22.2497V17.6822V16.4997C9.75 14.7048 11.2051 13.2497 13 13.2497C14.7949 13.2497 16.25 14.7048 16.25 16.4997V17.6822V22.2497C16.25 22.5258 16.4739 22.7497 16.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94814 21.8954 8.99882L16.1454 4.34539C14.3112 2.86094 11.6888 2.86094 9.85455 4.34539L4.10455 8.99882C2.93153 9.94814 2.25 11.3765 2.25 12.8855Z"
        fill={pathFill}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      ></path>
    </Svg>
  );
};

export default Home;
