import React from 'react';
import { Popup } from '..';
import cs from 'classnames';
import styles from './index.module.less';

export type MenuItem = {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  danger?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

type MenuProps = {
  items?: MenuItem[];
  className?: string;
} & Pick<MenuItem, 'onClick'>;

const Menu: React.FC<MenuProps> = ({ items, className, onClick }) => {
  const classNamePrefix = 'menu';

  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      {items?.map((item, index) => {
        return (
          <div
            className={cs(styles[`${classNamePrefix}-item`], {
              [styles[`${classNamePrefix}-item-danger`]]: item.danger,
            })}
            key={index}
            onClick={e => {
              item.onClick?.(e);
              onClick?.(e);
            }}
          >
            <span className={styles[`${classNamePrefix}-item-label`]}>
              {item.label}
            </span>
            <span className={styles[`${classNamePrefix}-item-icon`]}>
              {item.icon}
            </span>
          </div>
        );
      })}
    </div>
  );
};

type PopupMenuProps = {
  visible?: boolean;
  onClose?: () => void;
  items?: Array<MenuItem[]>;
};

const classNamePrefix = 'popup-menu';

const PopupMenu: React.FC<PopupMenuProps> = ({ visible, onClose, items }) => {
  return (
    <Popup visible={visible} onClose={onClose}>
      <div className={styles[`${classNamePrefix}`]}>
        {items?.map((item, index) => {
          return <Menu items={item} key={index} onClick={onClose} />;
        })}
      </div>
    </Popup>
  );
};

export default PopupMenu;
