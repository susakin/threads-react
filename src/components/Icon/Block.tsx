import React from 'react';
import Svg, { SvgProps } from './Svg';

const Block: React.FC<SvgProps> = props => {
  return (
    <Svg fill="currentColor" {...props}>
      <title>{props?.ariaLabel}</title>
      <path
        d="M13.7971 12.8357C13.4231 12.7543 12.9528 12.75 11.7728 12.75H7.75003C7.02956 12.75 6.74196 12.7516 6.51056 12.7821C4.82781 13.0036 3.50365 14.3278 3.28211 16.0105C3.25165 16.2419 3.25003 16.5295 3.25003 17.25C3.25003 17.5061 3.25165 17.5615 3.25645 17.5979C3.30075 17.9345 3.56558 18.1993 3.90213 18.2436C3.93859 18.2484 3.99398 18.25 4.25003 18.25H16.2273C16.3596 18.25 16.4384 18.2499 16.4976 18.2477C16.5537 18.2456 16.5622 18.2423 16.5532 18.2443C16.6488 18.2235 16.7235 18.1488 16.7443 18.0532C16.7424 18.0622 16.7456 18.0537 16.7477 17.9976C16.7499 17.9383 16.75 17.8596 16.75 17.7273C16.75 16.5473 16.7457 16.077 16.6643 15.7029C16.3523 14.2683 15.2317 13.1478 13.7971 12.8357ZM11.8801 11.25C12.9182 11.2499 13.5634 11.2498 14.116 11.37C16.1244 11.8069 17.6931 13.3756 18.1301 15.3841C18.2503 15.9366 18.2502 16.5818 18.25 17.6199C18.25 17.6553 18.25 17.691 18.25 17.7273C18.25 17.7447 18.2501 17.7622 18.2501 17.7798C18.2504 17.9782 18.2507 18.1849 18.21 18.372C18.0644 19.0415 17.5415 19.5644 16.872 19.71C16.6849 19.7507 16.4782 19.7504 16.2798 19.7501C16.2622 19.75 16.2447 19.75 16.2273 19.75H4.25003C4.2359 19.75 4.22192 19.75 4.20809 19.75C4.01777 19.7501 3.8541 19.7502 3.70635 19.7308C2.69669 19.5978 1.9022 18.8034 1.76928 17.7937C1.74983 17.6459 1.74991 17.4823 1.75001 17.292C1.75002 17.2781 1.75003 17.2641 1.75003 17.25C1.75003 17.2279 1.75003 17.206 1.75003 17.1844C1.74997 16.5504 1.74994 16.1566 1.79494 15.8148C2.1051 13.4589 3.95892 11.6051 6.31477 11.2949C6.65658 11.2499 7.05037 11.25 7.68445 11.25C7.70603 11.25 7.72789 11.25 7.75003 11.25H11.7728C11.809 11.25 11.8448 11.25 11.8801 11.25Z"
        fill="currentColor"
      ></path>
      <circle
        cx="10"
        cy="4.5"
        fill="none"
        r="3.75"
        stroke="currentColor"
        strokeWidth="1.5"
      ></circle>
    </Svg>
  );
};

export default Block;