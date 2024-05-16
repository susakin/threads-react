import React, { useState } from 'react';
import ActiveShadowButton from '@components/Button/ActiveShadowButon';
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
  return (
    <div className={cs(styles['menu-items'], className)} style={style}>
      {items?.map((item, index) => {
        if (!item) {
          return null;
        }
        return (
          <>
            <MenuItem
              {...item}
              onClick={item?.onClick || (e => onClick?.(item, e))}
            />
            {index !== items?.length - 1 && (
              <hr className={styles['menu-item-split']} />
            )}
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
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const classNamePrefix = 'menu-item';
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setLoading(true);
    Promise.resolve(onClick?.(event)).finally(() => {
      setLoading(false);
    });
  }

  return (
    <ActiveShadowButton
      className={cs(
        styles[`${classNamePrefix}`],
        {
          [styles[`${classNamePrefix}-danger`]]: danger,
          [styles[`${classNamePrefix}-disabled`]]: disabled,
        },
        className,
      )}
      disabled={loading}
      onClick={handleClick}
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
    </ActiveShadowButton>
  );
};

const Menu: React.FC<
  Pick<MenuItemsProps, 'items' | 'onClick'> & { shadow?: boolean }
> = ({ items, onClick, shadow = true }) => {
  const classNamePrefix = 'menu';
  return (
    <div
      className={cs(styles[`${classNamePrefix}`], {
        [styles[`${classNamePrefix}-shadow`]]: shadow,
      })}
    >
      <MenuItems items={items} onClick={onClick} />
    </div>
  );
};

export default Menu;
