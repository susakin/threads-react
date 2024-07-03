/* eslint-disable react/display-name */
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
  useRef,
  useLayoutEffect,
} from 'react';
import styles from './index.module.less';
import cs from 'classnames';
import StepItem from './StepItem';
import { attachPropertiesToComponent } from '@utils/attachPropertiesToComponent';

const classNamePrefix = 'mutil-step-container';

type MutilStepContainerProps = {
  className?: string;
  children?: React.ReactNode;
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
  const [mounted, setMounted] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<{
    width?: number | string;
    height?: number | string;
  }>({});
  const { className } = props;
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

  if (count === 0 || !validChildren) {
    return null;
  }

  useLayoutEffect(() => {
    const div = rootRef.current;
    if (div) {
      const hasAnimation =
        window.getComputedStyle(div).animationName !== 'none';
      hasAnimation &&
        div.addEventListener('animationend', () => {
          setMounted(true);
          setTimeout(() => {
            setMounted(true);
          });
        });
    } else {
      setTimeout(() => {
        setMounted(true);
      });
    }
  }, []);

  useEffect(() => {
    const el = document.querySelector(
      `.${styles[`${classNamePrefix}-item-active`]}`,
    );
    if (el && mounted) {
      const rect = el.getBoundingClientRect();
      setRect({
        width: rect.width || 'auto',
        height: rect.height || 'auto',
      });
    }
  }, [current, mounted]);

  function renderTrackInner() {
    return (
      <>
        {React.Children.map(validChildren, (child, index) => {
          if (!mounted && index) return null;
          return (
            <div
              className={cs(styles[`${classNamePrefix}-item`], {
                [styles[`${classNamePrefix}-item-active`]]: current === index,
                [styles[`${classNamePrefix}-item-mounted`]]: mounted,
              })}
              style={{
                transform: `translateX(${
                  (index - current) * 100
                }%) translateZ(1px)`,
              }}
            >
              {child}
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div
      className={cs(styles[`${classNamePrefix}`], className)}
      style={rect}
      ref={rootRef}
    >
      {renderTrackInner()}
    </div>
  );
});

export default attachPropertiesToComponent(MutilStepContainer, {
  Item: StepItem,
});
