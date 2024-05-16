import React, { useRef } from 'react';
import { Spin } from '@components/Icon';
import { useInView } from 'react-intersection-observer';
import styles from './index.module.less';
import cs from 'classnames';

const classNamePrefix = 'preload-with-observer';

type PreloadWithObserverProps = {
  size?: number;
  onLoad?: () => Promise<void>;
  rootMargin?: number;
  visible?: boolean;
  className?: string;
  spin?: React.ReactNode;
};

const PreloadWithObserver: React.FC<PreloadWithObserverProps> = ({
  size = 24,
  onLoad,
  rootMargin = 100,
  visible,
  className,
  spin,
}) => {
  const fetchingRef = useRef<boolean>(false);

  const [inViewRef] = useInView({
    threshold: 0.1,
    rootMargin: `${rootMargin}px 0px`,
    onChange(inView) {
      if (inView) {
        if (fetchingRef.current) return;
        fetchingRef.current = true;
        Promise.resolve(onLoad?.()).finally(() => {
          fetchingRef.current = false;
        });
      }
    },
  });

  if (!visible) return null;

  return (
    <>
      {spin ? (
        <div ref={inViewRef}>{spin}</div>
      ) : (
        <div className={cs(styles[`${classNamePrefix}`], className)}>
          <div className={styles[`${classNamePrefix}-spin`]} ref={inViewRef}>
            <Spin size={size} viewBox="0 0 100 100" />
          </div>
        </div>
      )}
    </>
  );
};

export default PreloadWithObserver;
