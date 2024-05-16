import React, { useState } from 'react';
import cs from 'classnames';
import { isSupportTouch } from '@utils/index';
import styles from './activeScaleButton.module.less';

export type ActiveScaleButtonProps = {
  children?: React.ReactNode;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  scaleType?: 'circle' | 'square';
  layerOffset?:
    | number
    | {
        x?: number;
        y?: number;
      };
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | unknown;
  accessibility?: boolean;
  contentClassName?: string;
};

const classPrefix = 'active-scale-button';

const ActiveScaleButton: React.FC<ActiveScaleButtonProps> = ({
  style,
  className,
  size,
  children,
  onClick,
  scaleType = 'circle',
  layerOffset = 12,
  accessibility = true,
  contentClassName,
}) => {
  const isCircle = scaleType === 'circle';
  const layerOffsetX =
    typeof layerOffset === 'number' ? layerOffset : layerOffset?.x || 0;
  const layerOffsetY =
    typeof layerOffset === 'number' ? layerOffset : layerOffset?.y || 0;
  const width = `calc(100% + ${layerOffsetX}px)`;
  const height = `calc(100% + ${layerOffsetY}px)`;
  const top = `-${layerOffsetY / 2}px`;
  const left = `-${layerOffsetX / 2}px`;
  const [actived, setActived] = useState<boolean>(false);
  const accessibilityProps = accessibility
    ? { role: 'button', tabIndex: 0 }
    : null;
  return (
    <div
      className={cs(
        styles[`${classPrefix}`],
        className,
        styles[`${classPrefix}-${scaleType}`],
      )}
      {...accessibilityProps}
      style={{ ...style, minWidth: size, height: size }}
      onClick={onClick}
      onMouseEnter={() => {
        setActived(true);
      }}
      onMouseLeave={() => {
        setActived(false);
      }}
    >
      <div
        className={cs(styles[`${classPrefix}-layer`], {
          [styles[`${classPrefix}-layer-actived`]]: actived && !isSupportTouch,
        })}
        style={
          isCircle
            ? {
                top,
                left,
                width,
                height,
              }
            : undefined
        }
      />
      <div className={cs(styles[`${classPrefix}-inner`], contentClassName)}>
        {children}
      </div>
    </div>
  );
};

export default ActiveScaleButton;
