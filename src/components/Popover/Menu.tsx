import React, { useState } from 'react';
import { Spin } from '@components/Icon';
import cs from 'classnames';
import styles from './menu.module.less';

export type MenuItem = {
  label: React.ReactNode;
  icon?: React.ReactNode;
  key?: string;
  danger?: boolean;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void | Promise<void | never>;
};

type MenuItemsProps = {
  items?: MenuItem[];
  style?: React.CSSProperties;
  className?: string;
  onClick?: (
    item: MenuItem,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
};

const MenuItems: React.FC<MenuItemsProps> = ({
  items,
  style,
  className,
  onClick,
}) => {
  const classNamePrefix = 'menu-items';

  return (
    <div className={cs(styles[`${classNamePrefix}`], className)} style={style}>
      {items?.map(item => {
        if (!item) {
          return null;
        }
        return (
          <>
            <MenuItem
              {...item}
              onClick={item?.onClick || (e => onClick?.(item, e))}
            />
          </>
        );
      })}
    </div>
  );
};

const MenuItem: React.FC<MenuItem> = ({
  label,
  icon,
  onClick,
  danger,
  className,
  disabled,
  style,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const classNamePrefix = 'menu-item';
  const _disabled = disabled || loading;

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setLoading(true);
    Promise.resolve(onClick?.(event)).finally(() => {
      setLoading(false);
    });
  }

  return (
    <>
      <div
        className={cs(
          styles[`${classNamePrefix}`],
          {
            [styles[`${classNamePrefix}-danger`]]: danger,
            [styles[`${classNamePrefix}-disabled`]]: _disabled,
          },
          className,
        )}
        onClick={_disabled ? undefined : handleClick}
        style={style}
      >
        <div className={styles[`${classNamePrefix}-inner`]}>
          <span className={styles[`${classNamePrefix}-inner-label`]}>
            {label}
          </span>
          {icon && (
            <span className={styles[`${classNamePrefix}-inner-icon`]}>
              {icon}
            </span>
          )}
          {loading && (
            <span className={styles[`${classNamePrefix}-inner-loading`]}>
              <Spin viewBox="0 0 100 100" size={14} />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

type MenuProps = Pick<MenuItemsProps, 'onClick'> & {
  shadow?: boolean;
  items?: Array<MenuItem[]>;
};

const Menu: React.FC<MenuProps> = ({ items, onClick, shadow = true }) => {
  const classNamePrefix = 'menu';
  return (
    <div
      className={cs(styles[`${classNamePrefix}`], {
        [styles[`${classNamePrefix}-shadow`]]: shadow,
      })}
    >
      {items?.map((item, index) => {
        const _item = item?.filter(i => i);
        if (!_item || _item?.length === 0) return null;
        return (
          <div className={cs(styles[`${classNamePrefix}-group`])} key={index}>
            <MenuItems items={item} onClick={onClick} />
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
