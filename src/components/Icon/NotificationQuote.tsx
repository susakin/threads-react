import React from 'react';
import Svg, { SvgProps } from './Svg';

const NotificationQuote: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title>{props.ariaLabel}</title>
      <path d="M5 8.6658C5 8.3518 5.07633 8.07013 5.22899 7.82078C5.38407 7.56912 5.59367 7.36941 5.85779 7.22165C6.12191 7.07388 6.42117 7 6.75557 7C7.09481 7 7.40618 7.08081 7.68969 7.24242C7.97562 7.40404 8.2046 7.63838 8.37665 7.94545C8.54869 8.25022 8.63471 8.61847 8.63471 9.05022C8.63471 9.43348 8.56323 9.78557 8.42026 10.1065C8.27972 10.4274 8.08829 10.7091 7.84598 10.9515C7.67151 11.127 7.47282 11.2817 7.24989 11.4156C7.02938 11.5472 6.79434 11.6522 6.54475 11.7307C6.46479 11.7538 6.39936 11.7711 6.34848 11.7827C6.29759 11.7942 6.24186 11.8 6.18128 11.8C6.09647 11.8 6.02862 11.7769 5.97774 11.7307C5.92685 11.6846 5.90141 11.6257 5.90141 11.5541C5.90141 11.5149 5.90868 11.4802 5.92322 11.4502C5.93776 11.4202 5.95956 11.3948 5.98864 11.374C6.01287 11.3532 6.04559 11.3348 6.08678 11.3186C6.1304 11.3025 6.18128 11.2851 6.23944 11.2667C6.43813 11.2113 6.62472 11.1362 6.79918 11.0416C6.97607 10.9469 7.136 10.8384 7.27896 10.716C7.42193 10.5913 7.5443 10.4551 7.64607 10.3074C7.75027 10.1596 7.82902 10.0038 7.88233 9.83983H7.78419C7.63395 9.99913 7.45949 10.1192 7.26079 10.2C7.06209 10.2808 6.85491 10.3212 6.63925 10.3212C6.33152 10.3212 6.05407 10.2473 5.80691 10.0996C5.55975 9.9518 5.36347 9.75325 5.21808 9.5039C5.07269 9.25224 5 8.97287 5 8.6658ZM9.36529 8.6658C9.36529 8.3518 9.44162 8.07013 9.59428 7.82078C9.74936 7.56912 9.95896 7.36941 10.2231 7.22165C10.4872 7.07388 10.7865 7 11.1209 7C11.4601 7 11.7715 7.08081 12.055 7.24242C12.3409 7.40404 12.5699 7.63838 12.7419 7.94545C12.914 8.25022 13 8.61847 13 9.05022C13 9.43348 12.9285 9.78557 12.7856 10.1065C12.645 10.4274 12.4512 10.7091 12.204 10.9515C12.032 11.127 11.8345 11.2817 11.6115 11.4156C11.391 11.5472 11.156 11.6522 10.9064 11.7307C10.8289 11.7538 10.7634 11.7711 10.7101 11.7827C10.6592 11.7942 10.6059 11.8 10.5502 11.8C10.4654 11.8 10.3963 11.7769 10.343 11.7307C10.2897 11.6846 10.2631 11.6257 10.2631 11.5541C10.2631 11.5149 10.2703 11.4802 10.2849 11.4502C10.3018 11.4202 10.3249 11.3948 10.3539 11.374C10.3782 11.3532 10.4109 11.3348 10.4521 11.3186C10.4933 11.3025 10.5429 11.2851 10.6011 11.2667C10.7998 11.2113 10.9876 11.1362 11.1645 11.0416C11.3414 10.9469 11.5013 10.8384 11.6443 10.716C11.7872 10.5913 11.9096 10.4551 12.0114 10.3074C12.1156 10.1596 12.1931 10.0038 12.244 9.83983H12.1495C11.9968 9.99913 11.8211 10.1192 11.6224 10.2C11.4262 10.2808 11.2202 10.3212 11.0045 10.3212C10.6968 10.3212 10.4194 10.2473 10.1722 10.0996C9.92503 9.9518 9.72876 9.75325 9.58337 9.5039C9.43798 9.25224 9.36529 8.97287 9.36529 8.6658Z"></path>
    </Svg>
  );
};

export default NotificationQuote;