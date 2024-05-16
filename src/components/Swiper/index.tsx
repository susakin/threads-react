/* eslint-disable react/display-name */
import React, {
  useMemo,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import cs from 'classnames';
import SwiperItem from './SwiperItem';
import { useSpring, animated } from '@react-spring/web';
import { useRefState } from '@hooks/useRefState';
import { useDrag } from '@use-gesture/react';
import { bound } from '@utils/bound';
import { useIsomorphicLayoutEffect, useGetState } from 'ahooks';
import { mergeProps } from '@utils/withDefaultProps';
import { mergeFuncProps } from '@utils/withFuncProps';
import styles from './index.module.less';
import { attachPropertiesToComponent } from '@utils/attachPropertiesToComponent';

const eventToPropRecord = {
  mousedown: 'onMouseDown',
  mousemove: 'onMouseMove',
  mouseup: 'onMouseUp',
} as const;

export type SwiperRef = {
  swipeTo: (index: number) => void;
  swipeNext: () => void;
  swipePrev: () => void;
};

type ValuesToUnion<T, K extends keyof T = keyof T> = K extends keyof T
  ? T[K]
  : never;

type PropagationEvent = keyof typeof eventToPropRecord;

export type SwiperProps = {
  defaultIndex?: number;
  allowTouchMove?: boolean;
  direction?: 'horizontal' | 'vertical';
  onIndexChange?: (index: number) => void;
  slideSize?: number;
  trackOffset?: number;
  stuckAtBoundary?: boolean;
  rubberband?: boolean;
  stopPropagation?: PropagationEvent[];
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
};

function modulus(value: number, division: number) {
  const remainder = value % division;
  return remainder < 0 ? remainder + division : remainder;
}

const defaultProps = {
  defaultIndex: 0,
  allowTouchMove: true,
  loop: false,
  direction: 'horizontal',
  slideSize: 100,
  trackOffset: 0,
  stuckAtBoundary: true,
  rubberband: false,
  stopPropagation: [] as PropagationEvent[],
};

let currentUid: undefined | Record<string, any>;

const Swiper = forwardRef<SwiperRef, SwiperProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const [uid] = useState({});
  const isVertical = props.direction === 'vertical';

  const slideRatio = props.slideSize / 100;
  const offsetRatio = props.trackOffset / 100;

  const { validChildren, count } = useMemo(() => {
    let count = 0;
    const validChildren = React.Children.map(props.children, child => {
      if (!React.isValidElement(child)) return null;
      if (child.type !== SwiperItem) {
        return null;
      }
      count++;
      return child;
    });
    return {
      validChildren,
      count,
    };
  }, [props.children]);

  if (count === 0 || !validChildren) {
    return null;
  }

  const trackRef = useRef<HTMLDivElement>(null);
  function getSlidePixels() {
    const track = trackRef.current;
    if (!track) return 0;
    const trackPixels = isVertical ? track.offsetHeight : track.offsetWidth;
    return (trackPixels * props.slideSize) / 100;
  }
  const [current, setCurrent, getCurrent] = useGetState(props.defaultIndex);

  const [, setDragging, draggingRef] = useRefState(false);

  function boundIndex(current: number) {
    let min = 0;
    let max = count - 1;
    if (props.stuckAtBoundary) {
      min += offsetRatio / slideRatio;
      max -= (1 - slideRatio - offsetRatio) / slideRatio;
    }
    return bound(current, min, max);
  }

  const [{ position }, api] = useSpring(
    () => ({
      position: boundIndex(current) * 100,
      config: { tension: 200, friction: 30 },
      onRest: () => {
        if (draggingRef.current) return;
        const rawX = position.get();
        const totalWidth = 100 * count;
        const standardPosition = modulus(rawX, totalWidth);
        if (standardPosition === rawX) return;
        api.start({
          position: standardPosition,
          immediate: true,
        });
      },
    }),
    [count],
  );

  const dragCancelRef = useRef<(() => void) | null>(null);
  function forceCancelDrag() {
    dragCancelRef.current?.();
    draggingRef.current = false;
  }

  const bind = useDrag(
    state => {
      dragCancelRef.current = state.cancel;
      if (!state.intentional) return;
      if (state.first && !currentUid) {
        currentUid = uid;
      }
      if (currentUid !== uid) return;
      currentUid = state.last ? undefined : uid;
      const slidePixels = getSlidePixels();
      if (!slidePixels) return;
      const paramIndex = isVertical ? 1 : 0;
      const offset = state.offset[paramIndex];
      const direction = state.direction[paramIndex];
      const velocity = state.velocity[paramIndex];
      setDragging(true);
      if (!state.last) {
        api.start({
          position: (offset * 100) / slidePixels,
          immediate: true,
        });
      } else {
        const minIndex = Math.floor(offset / slidePixels);
        const maxIndex = minIndex + 1;
        const index = Math.round(
          (offset + velocity * 2000 * direction) / slidePixels,
        );
        swipeTo(bound(index, minIndex, maxIndex));
        window.setTimeout(() => {
          setDragging(false);
        });
      }
    },
    {
      transform: ([x, y]) => [-x, -y],
      from: () => {
        const slidePixels = getSlidePixels();
        return [
          (position.get() / 100) * slidePixels,
          (position.get() / 100) * slidePixels,
        ];
      },
      triggerAllEvents: true,
      bounds: () => {
        const slidePixels = getSlidePixels();
        const lowerBound = boundIndex(0) * slidePixels;
        const upperBound = boundIndex(count - 1) * slidePixels;
        return isVertical
          ? {
              top: lowerBound,
              bottom: upperBound,
            }
          : {
              left: lowerBound,
              right: upperBound,
            };
      },
      rubberband: props.rubberband,
      axis: isVertical ? 'y' : 'x',
      preventScroll: !isVertical,
      pointer: {
        touch: true,
      },
    },
  );

  function swipeTo(index: number, immediate = false) {
    const roundedIndex = Math.round(index);
    const targetIndex = bound(roundedIndex, 0, count - 1);

    if (targetIndex !== getCurrent()) {
      props.onIndexChange?.(targetIndex);
    }

    setCurrent(targetIndex);

    api.start({
      position: boundIndex(roundedIndex) * 100,
      immediate,
    });
  }

  function swipeNext() {
    swipeTo(Math.round(position.get() / 100) + 1);
  }

  function swipePrev() {
    swipeTo(Math.round(position.get() / 100) - 1);
  }

  useImperativeHandle(ref, () => ({
    swipeTo,
    swipeNext,
    swipePrev,
  }));

  useIsomorphicLayoutEffect(() => {
    const maxIndex = validChildren.length - 1;
    if (current > maxIndex) {
      swipeTo(maxIndex, true);
    }
  });

  function renderTrackInner() {
    return (
      <animated.div
        className={styles[`swiper-track-inner`]}
        style={{
          [isVertical ? 'y' : 'x']: position.to(position => `${-position}%`),
        }}
      >
        {React.Children.map(validChildren, (child, index) => {
          return (
            <div
              className={cs(styles[`swiper-slide`], {
                [styles[`swiper-slide-active`]]: current === index,
              })}
            >
              {child}
            </div>
          );
        })}
      </animated.div>
    );
  }

  const style: React.CSSProperties &
    Record<'--slide-size' | '--track-offset', string> = {
    '--slide-size': `${props.slideSize}%`,
    '--track-offset': `${props.trackOffset}%`,
  };

  const dragProps = { ...(props.allowTouchMove ? bind() : {}) };
  const stopPropagationProps: Partial<
    Record<ValuesToUnion<typeof eventToPropRecord>, any>
  > = {};
  for (const key of props.stopPropagation) {
    const prop = eventToPropRecord[key];
    stopPropagationProps[prop] = function (e: Event) {
      e.stopPropagation();
    };
  }

  const mergedProps = mergeFuncProps(dragProps, stopPropagationProps);

  return (
    <div
      className={cs(
        styles['swiper'],
        p.className,
        styles[`swiper-${props.direction}`],
      )}
      style={{ ...p.style, ...style }}
    >
      <div
        ref={trackRef}
        className={cs(styles[`swiper-track`], {
          [styles[`swiper-track-allow-touch-move`]]: props.allowTouchMove,
        })}
        onClickCapture={e => {
          if (draggingRef.current) {
            e.stopPropagation();
          }
          forceCancelDrag();
        }}
        {...mergedProps}
      >
        {renderTrackInner()}
      </div>
    </div>
  );
});

export default attachPropertiesToComponent(Swiper, {
  Item: SwiperItem,
});
