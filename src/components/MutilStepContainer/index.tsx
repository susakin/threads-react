/* eslint-disable react/display-name */
import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
  useRef,
} from 'react';
import styles from './index.module.less';
import cs from 'classnames';
import StepItem from './StepItem';
import { attachPropertiesToComponent } from '@utils/attachPropertiesToComponent';
import { useUpdateEffect, usePrevious } from 'ahooks';
import useResizeObserver from 'use-resize-observer';

const classNamePrefix = 'mutil-step-container';

type MutilStepContainerProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export type MutilStepContainerRef = {
  swipeNext: () => void;
  swipePrev: () => void;
};

const MutilStepContainer = forwardRef<
  MutilStepContainerRef,
  MutilStepContainerProps
>((props, ref) => {
  const [current, setCurrent] = useState<number>(0);
  const [transition, setTransition] = useState<boolean>(false);
  const previous = usePrevious(current);
  const rootRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLDivElement>(null);
  const increment = (previous || 0) < current;
  const { className, style } = props;
  const { validChildren, count } = useMemo(() => {
    let count = 0;
    const validChildren = React.Children.map(props.children, child => {
      if (!React.isValidElement(child)) return null;
      if (child.type !== StepItem) {
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

  function swipeNext() {
    setCurrent(v => v + 1);
  }

  function swipePrev() {
    setCurrent(v => v - 1);
  }

  useImperativeHandle(ref, () => ({
    swipeNext,
    swipePrev,
  }));

  useUpdateEffect(() => {
    setTransition(true);
  }, [current]);

  if (count === 0 || !validChildren) {
    return null;
  }

  const { width, height } = useResizeObserver({
    ref: currentRef,
  });

  function renderTrackInner() {
    return (
      <>
        {React.Children.map(validChildren, (child, index) => {
          const isCurrent = current === index;
          return (
            <div
              className={cs(styles[`${classNamePrefix}-item`], {
                [styles[`${classNamePrefix}-item-active`]]: isCurrent,
              })}
              ref={isCurrent ? currentRef : null}
              style={{
                transform: `translateX(${
                  (index - current) * 100
                }%) translateZ(1px) translateY(-50%)`,
              }}
              onTransitionEnd={() => {
                requestAnimationFrame(() => {
                  setTransition(false);
                });
              }}
            >
              {(index <= current ||
                (index === current + 1 && !increment && transition)) &&
                child}
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div
      className={cs(styles[`${classNamePrefix}`], className)}
      style={{ width, height, ...style }}
      ref={rootRef}
    >
      {renderTrackInner()}
    </div>
  );
});

export default attachPropertiesToComponent(MutilStepContainer, {
  Item: StepItem,
});
