import React from 'react';
import styles from './deleteButton.module.less';
import { CircleButton } from '../../../components';
import { CircleButtonProps } from '@components/Button/CircleButton';
import { CloseStrong } from '@components/Icon';
import cs from 'classnames';

const classNamePrefix = 'delete-button';

const DeleteButton: React.FC<CircleButtonProps> = props => {
  return (
    <CircleButton
      className={cs(styles[`${classNamePrefix}`], props.className)}
      size={26}
      {...props}
    >
      <CloseStrong size={12} viewBox="0 0 24 24" />
    </CircleButton>
  );
};

export default DeleteButton;
