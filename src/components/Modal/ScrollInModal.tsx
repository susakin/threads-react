import React from 'react';
import { Button, Mask } from '@components/index';
import styles from './scrollInModal.module.less';

type ScrollInModalProps = {
  visible?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  loading?: boolean;
  title?: React.ReactNode;
  cancelText?: React.ReactNode;
  okText?: React.ReactNode;
  children?: React.ReactNode;
};

const classNamePrefix = 'scroll-in-modal';

const ScrollInModal: React.FC<ScrollInModalProps> = ({
  visible,
  onCancel,
  onOk,
  loading,
  title,
  cancelText = '取消',
  okText = '确定',
  children,
}) => {
  return (
    <Mask
      visible={visible}
      onClose={onCancel}
      renderToBody={true}
      hasClose={false}
      color="rgba(0,0,0,0.07)"
    >
      <div className={styles[`${classNamePrefix}`]} role="dialog">
        <div className={styles[`${classNamePrefix}-header`]}>
          <div className={styles[`${classNamePrefix}-header-cancel`]}>
            <Button loading={loading} type="text" onClick={onCancel}>
              {cancelText}
            </Button>
          </div>
          <span className={styles[`${classNamePrefix}-header-title`]}>
            {title}
          </span>
          {!!okText && (
            <div className={styles[`${classNamePrefix}-header-ok`]}>
              <Button loading={loading} type="text" onClick={onOk}>
                {okText}
              </Button>
            </div>
          )}
        </div>
        <div className={styles[`${classNamePrefix}-inner`]}>{children}</div>
      </div>
    </Mask>
  );
};

export default ScrollInModal;
