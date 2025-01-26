import React, { useState, useLayoutEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useResizeObserver from 'use-resize-observer';
import { useDrag } from 'react-use-gesture';
//import cs from 'classnames';
import stylex, { type StyleXStyles } from '@stylexjs/stylex';
import styles from './index.stylex';
import mergeRefs from 'merge-refs';

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
  children,
  onScroll,
  disabledScroll,
  disabledInit,
  style,
  ...rest
}) => {
  //管理弹性效果
  const spring = useSpring(() => {
    return {
      elasticValue: 0,
      immediate: !0,
    };
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useResizeObserver({ ref: containerRef });

  const elasticValue = spring[0].elasticValue;
  const springRef = spring[1];

  const [clientWidth, setClientWidth] = useState<number>(() => {
    return containerRef?.current === null
      ? 0
      : (containerRef?.current?.clientWidth as any);
  });
  useLayoutEffect(() => {
    setClientWidth(width as any);
  }, [width]);

  //管理滚动位置
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
      const mx = state.movement[0]; //x方向移动位移
      const vx = state.vxvy[0]; //x方向速度
      //更新滚动位置的动画
      _spring[1].start({
        config: {
          decay,
          velocity: -vx,
        },
        immediate: down,
        x: -mx,
      });

      const el = containerRef?.current;
      //是否禁用滚动
      if (el === null || disabledScroll) return;
      //计算当前滚动位置
      const scrollLeft = Math.abs(el?.scrollLeft as number);
      // 判断是否滚动到左边界
      const nearLeft = scrollLeft < dis && mx > 0;
      //判断是否滚动到右边界
      const nearRight =
        Math.abs(
          (el?.scrollWidth as any) - (el?.offsetWidth as any) - scrollLeft,
        ) < dis && mx < 0;
      //如果正在拖拽
      if (down) {
        // 靠近左边界
        if (nearLeft) {
          //计算弹性系数
          const g = 2.5 + Math.abs(mx) * 0.002;
          //进行弹性动画。
          springRef.start({
            elasticValue: Math.min(_width, mx / g),
            immediate: true,
          });
        } else if (nearRight) {
          // 靠近右边界
          //计算弹性系数
          const b = 2.5 + Math.abs(mx + (el?.scrollLeft as any)) * 0.002;
          //进行弹性动画。
          springRef.start({
            elasticValue: Math.max(
              (mx + (el?.scrollLeft as any)) / b,
              -1 * _width,
            ),
            immediate: true,
          });
        }
      } else {
        // 拖拽结束时重置弹性值
        springRef.start({
          elasticValue: 0,
        });
      }
    },
    {
      axis: 'x',
      filterTaps: true,
      initial: () => {
        return [containerRef.current ? -containerRef.current.scrollLeft : 0, 0];
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
      ref={mergeRefs(rest.containerRef, containerRef)}
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
