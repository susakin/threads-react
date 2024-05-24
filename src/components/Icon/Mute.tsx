import React from 'react';
import Svg, { SvgProps } from './Svg';

const Mute: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title></title>
      <circle
        cx="10"
        cy="4.5"
        fill="none"
        r="3.75"
        stroke="currentColor"
        strokeWidth="1.5"
      ></circle>
      <path d="M10 12C10 12.4142 10.3358 12.75 10.75 12.75H12.75C13.4705 12.75 13.7581 12.7516 13.9895 12.7821C15.6722 13.0036 16.9964 14.3278 17.2179 16.0105C17.2484 16.2419 17.25 16.5295 17.25 17.25C17.25 17.5061 17.2484 17.5614 17.2436 17.5979C17.1993 17.9345 16.9344 18.1993 16.5979 18.2436C16.5614 18.2484 16.506 18.25 16.25 18.25H12.75C12.3358 18.25 12 18.5858 12 19V19C12 19.4142 12.3358 19.75 12.75 19.75H16.25L16.2919 19.75C16.4823 19.7501 16.6459 19.7502 16.7937 19.7308C17.8033 19.5978 18.5978 18.8033 18.7308 17.7937C18.7502 17.646 18.7501 17.4823 18.75 17.292V17.292L18.75 17.25L18.75 17.1844C18.7501 16.5504 18.7501 16.1566 18.7051 15.8147C18.3949 13.4589 16.5411 11.6051 14.1853 11.2949C13.8435 11.2499 13.4497 11.25 12.8156 11.25L12.75 11.25H10.75C10.3358 11.25 10 11.5858 10 12V12Z"></path>
      <path
        d="M9.67859 15.4265L9.67859 15.4265C9.80959 15.0264 9.60635 14.6807 9.3748 14.5182C9.14085 14.3541 8.73272 14.2784 8.39838 14.5588C8.00033 14.8927 7.3258 15.1492 6.67146 15.1232C6.12745 15.1016 5.60071 14.7228 5.27564 14.094C4.95018 13.4643 4.91366 12.7417 5.18479 12.2126C5.2292 12.126 5.28288 12.0404 5.36407 11.9124L5.36741 11.9072C5.44401 11.7864 5.53932 11.6362 5.63571 11.4569C5.96639 10.8416 5.39228 10.0925 4.68842 10.3197L4.91883 11.0334L4.68842 10.3197C3.07583 10.8403 1.45517 12.3652 1.26765 14.3326C1.09773 16.1155 2.1977 17.925 3.85499 18.5991C4.76781 18.9704 5.92954 19.1116 7.04056 18.6508C8.17268 18.1813 9.11634 17.1436 9.67859 15.4265Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      ></path>
    </Svg>
  );
};

export default Mute;