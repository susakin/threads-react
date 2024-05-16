import React from 'react';
import { Mask } from '..';
import cs from 'classnames';
import styles from './modal.module.less';

type ModalProps = {
  visible?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  animationType?: 'scale-in' | 'none' | 'scale-out';
  className?: string;
  onClosePlaceholderClick?: () => void;
  loading?: boolean;
  style?: React.CSSProperties;
  hasContentStyle?: boolean;
};

const classNamePrefix = 'modal';

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
  className,
  animationType = 'none',
  onClosePlaceholderClick,
  loading,
  hasContentStyle = true,
  style,
}) => {
  return (
    <Mask
      hasClose={false}
      color="rgba(0,0,0,.7)"
      visible={visible}
      onClose={onClose}
      loading={loading}
      onClosePlaceholderClick={onClosePlaceholderClick}
      renderToBody
    >
      <div
        className={cs(
          styles[`${classNamePrefix}`],
          styles[`${classNamePrefix}-${animationType}`],
        )}
        style={style}
        role="dialog"
      >
        <div
          className={cs(
            { [styles[`${classNamePrefix}-inner`]]: hasContentStyle },
            className,
          )}
        >
          {children}
        </div>
      </div>
    </Mask>
  );
};

export default Modal;
