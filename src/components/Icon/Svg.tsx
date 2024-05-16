import React from 'react';

export type SvgProps = {
  ariaLabel?: string;
  className?: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
  children?: React.ReactNode;
  viewBox?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  style?: React.CSSProperties;
} & React.SVGAttributes<SVGSVGElement>;

const Svg: React.FC<SvgProps> = ({
  ariaLabel,
  className,
  children,
  size,
  width,
  height,
  viewBox,
  onClick,
  style,
  ...rest
}) => {
  return (
    <svg
      aria-label={ariaLabel}
      className={className}
      width={width || size}
      height={height || size}
      viewBox={viewBox}
      onClick={onClick}
      style={style}
      {...rest}
    >
      {children}
    </svg>
  );
};

export default Svg;
