import React, { useState, useLayoutEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useResizeObserver from 'use-resize-observer';
import { useDrag } from 'react-use-gesture';
//import cs from 'classnames';
import stylex, { type StyleXStyles } from '@stylexjs/stylex';
import styles from './index.stylex';

type AnimateScrollAreaProps = {
  containerRef?: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
  stylexStyles?: StyleXStyles;
  onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  style?: React.CSSProperties;
  disabledScroll?: boolean;
  disabledInit?: boolean;
};

//const classPrefix = 'animated-scroll-area';

const decay = 0.995;
const dis = 1;
const AnimateScrollArea: React.FC<AnimateScrollAreaProps> = ({
  containerRef,
  children,
  onScroll,
  disabledScroll,
  disabledInit,
  style,
}) => {
  const spring = useSpring(() => {
    return {
      elasticValue: 0,
      immediate: !0,
    };
  });
  const _containerRef = useRef<HTMLDivElement>(null);
  const { width } = useResizeObserver({ ref: _containerRef });

  const elasticValue = spring[0].elasticValue;
  const springRef = spring[1];

  const [clientWidth, setClientWidth] = useState<number>(() => {
    return _containerRef?.current === null
      ? 0
      : (_containerRef?.current?.clientWidth as any);
  });
  useLayoutEffect(() => {
    setClientWidth(width as any);
  }, [width]);

  const _spring = useSpring(() => {
    return {
      config: {
        decay,
      },
      x: 0,
    };
  });

  const _width = clientWidth - 40;

  const bind = useDrag(
    state => {
      if (disabledInit) return;
      const down = state.down;
      const mx = state.movement[0];
      const vx = state.vxvy[0];
      _spring[1].start({
        config: {
          decay,
          velocity: -vx,
        },
        immediate: down,
        x: -mx,
      });

      const el = _containerRef?.current;

      if (el === null || disabledScroll) return;
      const scrollLeft = Math.abs(el?.scrollLeft as number);
      const graped = scrollLeft < dis && mx > 0;
      const _graped =
        Math.abs(
          (el?.scrollWidth as any) - (el?.offsetWidth as any) - scrollLeft,
        ) < dis && mx < 0;

      if (down) {
        if (graped) {
          const g = 2.5 + Math.abs(mx) * 0.002;
          springRef.start({
            elasticValue: Math.min(_width, mx / g),
            immediate: true,
          });
        } else if (_graped) {
          const b = 2.5 + Math.abs(mx + (el?.scrollLeft as any)) * 0.002;
          springRef.start({
            elasticValue: Math.max(
              (mx + (el?.scrollLeft as any)) / b,
              -1 * _width,
            ),
            immediate: true,
          });
        }
      } else {
        springRef.start({
          elasticValue: 0,
        });
      }
    },
    {
      axis: 'x',
      filterTaps: true,
      initial: () => {
        return [
          _containerRef.current ? -_containerRef.current.scrollLeft : 0,
          0,
        ];
      },
    },
  );

  const disabled = disabledInit || disabledScroll;

  return (
    <animated.div
      // className={cs(styles[classPrefix], className, {
      //   [styles[`${classPrefix}-disabled`]]: disabled,
      // })}
      {...stylex.props(
        styles.animatedScrollArea,
        disabled && styles.animatedScrollAreaDisabled,
        !disabled && styles.animatedScrollAreaNotDisabledCusor,
      )}
      ref={el => {
        if (_containerRef) {
          //@ts-ignore
          _containerRef.current = el;
        }
        if (containerRef) {
          //@ts-ignore
          containerRef.current = el;
        }
      }}
      scrollLeft={_spring[0].x}
      style={{
        ...style,
        transform: elasticValue.to(x => {
          return `translateX(${x}px)`;
        }),
      }}
      onScroll={onScroll}
      {...bind()}
    >
      {children}
    </animated.div>
  );
};

export default AnimateScrollArea;
