import React from 'react';
import { Button, Mask } from '@components/index';
import styles from './scrollInModal.module.less';
import cs from 'classnames';

type ScrollInModalProps = {
  visible?: boolean;
} & ScrollInProps;

const ScrollInModal: React.FC<ScrollInModalProps> = ({
  visible,
  onCancel,
  ...rest
}) => {
  return (
    <Mask
      visible={visible}
      onClose={onCancel}
      renderToBody={true}
      hasClose={false}
      color="rgba(0,0,0,0.07)"
    >
      <ConfirmPanel onCancel={onCancel} {...rest} />
    </Mask>
  );
};

type ScrollInProps = {
  onCancel?: () => void;
  onOk?: () => void;
  loading?: boolean;
  title?: React.ReactNode;
  cancelText?: React.ReactNode;
  okText?: React.ReactNode;
  children?: React.ReactNode;
  animate?: boolean;
};

export const ConfirmPanel: React.FC<ScrollInProps> = ({
  onCancel,
  loading,
  title,
  cancelText = '取消',
  okText = '确定',
  onOk,
  animate = true,
  children,
}) => {
  const classNamePrefix = 'confirm-panel';
  return (
    <div
      className={cs(styles[`${classNamePrefix}`], {
        [styles[`${classNamePrefix}-animate`]]: animate,
      })}
      role="dialog"
    >
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
  );
};

export default ScrollInModal;
