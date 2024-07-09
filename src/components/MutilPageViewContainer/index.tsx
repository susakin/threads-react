/* eslint-disable react/display-name */
import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import styles from './index.module.less';
import cs from 'classnames';
import PageViewItem from './PageViewItem';
import { attachPropertiesToComponent } from '@utils/attachPropertiesToComponent';
import { usePrevious } from 'ahooks';

const classNamePrefix = 'mutil-page-view-container';

type MutilPageViewContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export type MutilPageViewContainerRef = {
  swipeNext: () => Promise<unknown>;
  swipePrev: () => Promise<unknown>;
};

function cycleModifier(a: number) {
  return Math.cos((a + 1) * Math.PI) / 2 + 0.5;
}

const MutilPageViewContainer = forwardRef<
  MutilPageViewContainerRef,
  MutilPageViewContainerProps
>((props, ref) => {
  const [current, setCurrent] = useState<number>(0);
  const [transition, setTransition] = useState<boolean>(false);
  const previous = usePrevious(current);
  const rootRef = useRef<HTMLDivElement>(null);
  const lastCurrentRef = useRef<HTMLDivElement>();
  const rectRef = useRef<any>();
  const resolveRef = useRef<any>();

  const increment = (previous || 0) < current;

  const { className } = props;

  const { validChildren, count } = useMemo(() => {
    let count = 0;
    const validChildren = React.Children.map(props.children, child => {
      if (!React.isValidElement(child)) return null;
      if (child.type !== PageViewItem) {
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

  function getRect() {
    lastCurrentRef.current! == null
      ? (rectRef.current = (
          lastCurrentRef.current as any
        ).getBoundingClientRect())
      : rootRef?.current != null &&
        (rectRef.current = rootRef.current.getBoundingClientRect());
  }

  function swipeNext() {
    return new Promise(resolve => {
      getRect();
      setCurrent(v => v + 1);
      resolveRef.current = resolve;
    });
  }

  function swipePrev() {
    return new Promise(resolve => {
      getRect();
      setCurrent(v => v - 1);
      resolveRef.current = resolve;
    });
  }

  useEffect(() => {
    getRect();
  }, []);

  useImperativeHandle(ref, () => ({
    swipeNext,
    swipePrev,
  }));

  if (count === 0 || !validChildren) {
    return null;
  }

  const setRef = useCallback(
    (div: HTMLDivElement) => {
      const lastCurrent = lastCurrentRef.current;
      const root = rootRef.current;
      const duration = 300;
      const rect = rectRef.current;

      if (div !== null) {
        if (div && lastCurrent && root) {
          const currentRect = div.getBoundingClientRect();

          const direction = increment ? 1 : -1;
          lastCurrent.style.cssText = '';
          div.style.cssText = '';
          lastCurrent.style.setProperty('display', 'flex');
          lastCurrent.style.setProperty('width', rect?.width + 'px');
          lastCurrent.style.setProperty('height', rect?.height + 'px');

          div.style.removeProperty('display');
          div.style.removeProperty('width');
          div.style.removeProperty('height');

          const h = Math.round(60 * (duration / 1000));
          const j = [];
          const k = [];
          const l = [];
          for (let m = 0; m <= h; m++) {
            const n = m / h;
            let o = cycleModifier(n);
            let p = (rect?.width as any) / currentRect.width;
            let s = (rect?.height as any) / currentRect.height;
            p = p + (1 - p) * o;
            s = s + (1 - s) * o;

            let u = rect.left - currentRect.left,
              v = rect.top - currentRect.top;
            u = u * (1 - o);
            const w = v * (1 - o);
            let x = Math.min(rect.width, currentRect.width);
            const y = x * -direction * o;
            x = x * direction * (1 - o);
            o = v - w;
            v = -w;
            j.push({
              easing: 'step-end',
              offset: n,
              transform:
                'translateX(' +
                u +
                'px) translateY(' +
                w +
                'px) scaleX(' +
                p +
                ') scaleY(' +
                s +
                ')',
            });
            k.push({
              easing: 'step-end',
              offset: n,
              transform:
                'scaleX(' +
                1 / p +
                ') scaleY(' +
                1 / s +
                ') translateX(' +
                y +
                'px) translateY(' +
                o +
                'px)',
            });
            l.push({
              easing: 'step-end',
              offset: n,
              transform:
                'scaleX(' +
                1 / p +
                ') scaleY(' +
                1 / s +
                ') translateX(' +
                x +
                'px) translateY(' +
                v +
                'px)',
            });
          }
          div.animate(l, duration);
          root.animate(j, duration);
          setTransition(true);
          lastCurrent.animate(k, duration);
          div.animate(
            [
              {
                opacity: 0,
              },
              {
                opacity: 1,
              },
            ],
            duration,
          );
          lastCurrent.animate(
            [
              {
                opacity: 1,
              },
              {
                opacity: 0,
              },
            ],
            duration,
          ).onfinish = function () {
            lastCurrent.style.cssText = '';
            setTransition(false);
            resolveRef.current?.(undefined);
            resolveRef.current = undefined;
          };
        }
        lastCurrentRef.current = div;
      }
    },
    [current],
  );

  function renderTrackInner() {
    return (
      <>
        {React.Children.map(validChildren, (child, index) => {
          const isCurrent = current === index;
          return (
            <div
              className={cs(styles[`${classNamePrefix}-item`], {
                [styles[`${classNamePrefix}-item-inactive`]]: index !== current,
              })}
              ref={isCurrent ? setRef : null}
              key={index}
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
    <div className={cs(styles[`${classNamePrefix}`], className)} ref={rootRef}>
      {renderTrackInner()}
    </div>
  );
});

export default attachPropertiesToComponent(MutilPageViewContainer, {
  Item: PageViewItem,
});
