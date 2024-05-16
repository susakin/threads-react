import React, { useEffect, useState } from 'react';
import { ActiveScaleButton } from '@components/index';
import { Arrow } from '@components/Icon';
import useViewport from '@hooks/useViewport';
import cs from 'classnames';
import { useNavigate } from 'react-router-dom';
import styles from './navigationBack.module.less';

const classNamePrefix = 'navigation-back';

type NavigationBackProps = {
  hidden?: boolean;
};

const NavigationBack: React.FC<NavigationBackProps> = ({ hidden }) => {
  const { viewportWidth } = useViewport();
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  function onAnimationEnd({ animationName }: React.AnimationEvent) {
    if (animationName === styles['slide-out']) {
      setVisible(false);
    }
  }

  useEffect(() => {
    if (!hidden) {
      setVisible(true);
    }
  }, [hidden]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={cs(styles[`${classNamePrefix}`], {
        [styles[`${classNamePrefix}-slide-in`]]: !hidden,
        [styles[`${classNamePrefix}-slide-out`]]: hidden,
      })}
      onAnimationEnd={onAnimationEnd}
    >
      <ActiveScaleButton
        className={styles[`${classNamePrefix}-button`]}
        size={52}
        layerOffset={0}
        onClick={() => {
          navigate(-1);
        }}
      >
        <Arrow viewBox="0 0 24 24" size={viewportWidth < 699 ? 20 : 23} />
      </ActiveScaleButton>
    </div>
  );
};

export default NavigationBack;
