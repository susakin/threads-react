import React from 'react';
import Confirm, { ConfirmProps } from './Confirm';
import renderToContainer from '@utils/renderToContainer';

const Modal = {
  confirm({ onCancel, onOk, ...props }: ConfirmProps) {
    const unmount = renderToContainer(
      <Confirm
        visible={true}
        onCancel={() => {
          unmount();
          onCancel?.();
        }}
        onOk={() => {
          unmount();
          onOk?.();
        }}
        {...props}
      />,
    );
  },
};

export default Modal;
