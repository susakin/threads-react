import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.less';
import { CircleButton } from '..';
import { Arrow } from '@components/Icon';
import { useThrottleFn } from 'ahooks';
import { isSupportTouch } from '@utils/index';
import cs from 'classnames';

const classNamePrefix = 'scroll-container';

function getContainerRect(container: Element) {
  const rect = container.getBoundingClientRect();
  const childCards = Array.from(container.children).filter(function (child) {
    return child.tagName === 'DIV';
  });
  return {
    childCards,
    containerLeft: rect?.left,
    containerRight: rect?.right,
    containerWidth: rect?.width,
  };
}

function smoothScrollTo(
  element: Element,
  { left, top }: { left?: number; top?: number },
) {
  const hasScrollBehavior = 'scrollBehavior' in document.documentElement.style;
  hasScrollBehavior
    ? element.scrollTo({
        behavior: 'smooth',
        left: left ?? 0,
        top: top ?? 0,
      })
    : element.scrollTo(left ?? 0, top ?? 0);
}

type ScrollContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const ScrollContainer: React.FC<ScrollContainerProps> = ({
  className,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [maxScrollLeft, setMaxScrollLeft] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      if (containerRef.current) {
        setMaxScrollLeft(
          containerRef.current.scrollWidth - containerRef.current.clientWidth,
        );
      }
    });
  }, [children]);

  const { run } = useThrottleFn(
    () => {
      setScrollLeft(containerRef?.current?.scrollLeft || 0);
    },
    {
      wait: 50,
      leading: true,
    },
  );

  function scrollToLeft(element: HTMLElement) {
    const { childCards, containerLeft, containerRight } =
      getContainerRect(element);
    let childRect;
    for (let i = childCards.length - 1; i >= 0; i--) {
      const rect = childCards[i]?.getBoundingClientRect();
      if (rect.left <= containerLeft - 10) {
        childRect = rect;
        break;
      }
    }

    if (!childRect) return;
    const scrollLeft = childRect?.right - containerRight;
    scrollLeft &&
      smoothScrollTo(element, { left: element.scrollLeft + scrollLeft });
  }

  function scrollToRight(element: HTMLElement) {
    const { childCards, containerLeft, containerRight } =
      getContainerRect(element);
    let childRect;

    for (let i = 0; i < childCards.length; i++) {
      const rect = childCards[i]?.getBoundingClientRect();
      if (rect.right >= containerRight + 10) {
        childRect = rect;
        break;
      }
    }

    if (!childRect) return;
    const scrollLeft = childRect?.left - containerLeft;
    scrollLeft &&
      smoothScrollTo(element, { left: element.scrollLeft + scrollLeft });
  }

  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      {scrollLeft !== 0 && (
        <div className={styles[`${classNamePrefix}-prev`]}>
          <CircleButton
            className={styles[`${classNamePrefix}-prev-button`]}
            size={44}
            onClick={() => {
              scrollToLeft(containerRef?.current as any);
            }}
          >
            <Arrow size={16} viewBox="0 0 24 24" />
          </CircleButton>
        </div>
      )}
      <div
        className={styles[`${classNamePrefix}-inner`]}
        ref={containerRef}
        onScroll={isSupportTouch ? undefined : run}
      >
        <span className={styles[`${classNamePrefix}-inner-placeholder`]} />
        {children}
        <span className={styles[`${classNamePrefix}-inner-placeholder`]} />
      </div>
      {maxScrollLeft !== Math.ceil(scrollLeft) && (
        <div className={styles[`${classNamePrefix}-next`]}>
          <CircleButton
            className={styles[`${classNamePrefix}-next-button`]}
            size={44}
            onClick={() => {
              scrollToRight(containerRef?.current as any);
            }}
          >
            <Arrow
              size={16}
              viewBox="0 0 24 24"
              style={{ transform: 'rotate(180deg)' }}
            />
          </CircleButton>
        </div>
      )}
    </div>
  );
};

export default ScrollContainer;
