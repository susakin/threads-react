import React from 'react';
import Svg, { SvgProps } from './Svg';

const UnPin: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title>{props.ariaLabel}</title>
      <path
        d="M1.5 1.5L18.5 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      ></path>
      <path
        d="M13.042 16.6009C13.2083 16.2216 13.0355 15.7792 12.6562 15.613C12.2768 15.4467 11.8345 15.6194 11.6682 15.9988C11.5692 16.2247 11.4386 16.4611 11.2692 16.7069C11.2219 16.7755 11.1548 16.8121 11.0601 16.8145C10.9561 16.817 10.8295 16.774 10.7287 16.6731L7.01635 12.9608L3.30404 9.24848C3.20281 9.14725 3.16146 9.02123 3.16451 8.9232C3.16719 8.83724 3.19951 8.78413 3.25972 8.74626C3.47914 8.60828 3.69527 8.50153 3.90671 8.42044C4.29346 8.27212 4.48674 7.83836 4.33842 7.45161C4.19009 7.06486 3.75633 6.87158 3.36959 7.01991C3.06549 7.13653 2.76194 7.28735 2.46121 7.47646C1.36312 8.167 1.50933 9.57509 2.24338 10.3091L5.42536 13.4911L1.83783 17.0786C1.54494 17.3715 1.54494 17.8464 1.83783 18.1393C2.13073 18.4322 2.6056 18.4322 2.89849 18.1393L6.48602 14.5518L9.668 17.7338C10.4123 18.478 11.789 18.5952 12.504 17.5584C12.7246 17.2386 12.9026 16.919 13.042 16.6009Z"
        fill="currentColor"
      ></path>
      <path
        d="M12.2197 0.943994C11.5745 0.298831 10.4793 0.845617 10.6073 1.749L11.081 5.0926L10.325 5.69426C10.0009 5.95219 9.94725 6.42403 10.2052 6.74813C10.4631 7.07223 10.935 7.12587 11.2591 6.86794L12.3508 5.99908C12.5588 5.83354 12.6636 5.57026 12.6263 5.30705L12.3235 3.16911L16.808 7.65364L14.6701 7.35077C14.4069 7.31348 14.1436 7.41832 13.978 7.62632L13.178 8.63162C12.92 8.95572 12.9737 9.42756 13.2978 9.68549C13.6219 9.94343 14.0937 9.88979 14.3517 9.56569L14.8845 8.89613L18.2281 9.3698C19.1315 9.49778 19.6783 8.4026 19.0331 7.75744L12.2197 0.943994Z"
        fill="currentColor"
      ></path>
    </Svg>
  );
};

export default UnPin;
