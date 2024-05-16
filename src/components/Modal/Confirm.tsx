import React from 'react';
import Mask from '@components/Mask';
import cs from 'classnames';
import ActiveShadowButton from '@components/Button/ActiveShadowButon';
import styles from './confirm.module.less';

export type ConfirmProps = {
  visible?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  title?: React.ReactNode;
  content?: React.ReactNode;
  cancelText?: React.ReactNode;
  okText?: React.ReactNode;
  okType?: 'default' | 'danger';
};

const classNamePrefix = 'confirm';

const Confirm: React.FC<ConfirmProps> = ({
  title,
  visible,
  onCancel,
  content,
  cancelText = '取消',
  okText = '确定',
  okType = 'dagger',
  onOk,
}) => {
  return (
    <Mask
      visible={visible}
      onClose={onCancel}
      color="rgba(0,0,0,.7)"
      hasClose={false}
    >
      <div className={styles[`${classNamePrefix}`]} role="dialog">
        <div className={styles[`${classNamePrefix}-title`]}>{title}</div>
        {!!content && (
          <div className={styles[`${classNamePrefix}-inner`]}>{content}</div>
        )}
        <div className={styles[`${classNamePrefix}-footer`]}>
          {!!cancelText && (
            <ActiveShadowButton
              className={cs(
                styles[`${classNamePrefix}-footer-button`],
                styles[`${classNamePrefix}-footer-button-cancel`],
              )}
              onClick={onCancel}
            >
              {cancelText}
            </ActiveShadowButton>
          )}
          {!!okText && (
            <ActiveShadowButton
              danger={okType === 'danger'}
              className={cs(
                styles[`${classNamePrefix}-footer-button`],
                styles[`${classNamePrefix}-footer-button-ok`],
              )}
              onClick={onOk}
            >
              {okText}
            </ActiveShadowButton>
          )}
        </div>
      </div>
    </Mask>
  );
};

export default Confirm;
