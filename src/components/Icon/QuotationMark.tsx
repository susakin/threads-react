import React from 'react';
import Svg, { SvgProps } from './Svg';

const QuotationMark: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title>{props.ariaLabel}</title>
      <path
        d="M3.63471 3.1342C3.63471 3.4482 3.55717 3.731 3.40209 3.9827C3.24943 4.232 3.03983 4.4306 2.77328 4.5784C2.50916 4.7261 2.21112 4.8 1.87915 4.8C1.53991 4.8 1.22732 4.7192 0.94139 4.5576C0.65788 4.396 0.43011 4.1628 0.25806 3.858C0.08602 3.5509 0 3.1815 0 2.74978C0 2.36652 0.0702702 2.01443 0.21081 1.69351C0.35378 1.37258 0.54763 1.09091 0.79237 0.84848C0.96683 0.67302 1.16432 0.51948 1.38483 0.38788C1.60533 0.25397 1.84159 0.14776 2.09359 0.0692601C2.17113 0.0461801 2.23535 0.0288602 2.28623 0.0173202C2.33954 0.00577016 2.39406 0 2.4498 0C2.53461 0 2.60367 0.0230901 2.65697 0.0692601C2.71028 0.11544 2.73694 0.17431 2.73694 0.24589C2.73694 0.28514 2.72846 0.31977 2.71149 0.34978C2.69696 0.3798 2.67515 0.40519 2.64607 0.42597C2.62184 0.44675 2.58913 0.46522 2.54793 0.48139C2.50674 0.49755 2.45706 0.51486 2.39891 0.53333C2.20021 0.58874 2.01242 0.66378 1.83553 0.75844C1.65864 0.8531 1.49871 0.96277 1.35575 1.08745C1.21278 1.20981 1.0892 1.34488 0.98501 1.49264C0.88323 1.6404 0.80569 1.79625 0.75239 1.96017H0.85052C1.00318 1.80087 1.17765 1.68081 1.37392 1.6C1.57262 1.51919 1.7798 1.47879 1.99546 1.47879C2.3032 1.47879 2.58065 1.55267 2.82781 1.70043C3.07497 1.8482 3.27124 2.04791 3.41663 2.29957C3.56202 2.54892 3.63471 2.82713 3.63471 3.1342ZM8 3.1342C8 3.4482 7.9225 3.731 7.7674 3.9827C7.6147 4.232 7.4063 4.4306 7.1422 4.5784C6.8781 4.7261 6.5788 4.8 6.2444 4.8C5.9052 4.8 5.5926 4.7192 5.3067 4.5576C5.0232 4.396 4.7954 4.1628 4.62335 3.858C4.45131 3.5509 4.36529 3.1815 4.36529 2.74978C4.36529 2.36652 4.43556 2.01443 4.5761 1.69351C4.71907 1.37258 4.91171 1.09091 5.154 0.84848C5.3285 0.67302 5.526 0.51948 5.7465 0.38788C5.9694 0.25397 6.2057 0.14776 6.4552 0.0692601C6.5352 0.0461801 6.6006 0.0288602 6.6515 0.0173202C6.7024 0.00577016 6.7569 0 6.8151 0C6.9023 0 6.9714 0.0230901 7.0223 0.0692601C7.0731 0.11544 7.0986 0.17431 7.0986 0.24589C7.0986 0.28514 7.0913 0.31977 7.0768 0.34978C7.0622 0.3798 7.0404 0.40519 7.0114 0.42597C6.9871 0.44675 6.9532 0.46522 6.9096 0.48139C6.8684 0.49755 6.8187 0.51486 6.7606 0.53333C6.5619 0.58874 6.3741 0.66378 6.1972 0.75844C6.0227 0.8531 5.8628 0.96277 5.7174 1.08745C5.5744 1.20981 5.4509 1.34488 5.3467 1.49264C5.2449 1.6404 5.1686 1.79625 5.1177 1.96017H5.2158C5.366 1.80087 5.5405 1.68081 5.7392 1.6C5.9379 1.51919 6.1451 1.47879 6.3607 1.47879C6.6685 1.47879 6.9459 1.55267 7.1931 1.70043C7.4403 1.8482 7.6365 2.04791 7.7819 2.29957C7.9273 2.54892 8 2.82713 8 3.1342Z"
        fill="currentColor"
      ></path>
    </Svg>
  );
};

export default QuotationMark;
