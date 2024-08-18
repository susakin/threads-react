import React from 'react';
import Menu, { MenuItem } from './Menu';
import Popover, { PopoverProps } from '.';

type PopoverMenuProps = {
  menus?: Array<MenuItem[]>;
  onMenuClick?: (menu: MenuItem) => void;
} & PopoverProps;

const PopoverMenu: React.FC<PopoverMenuProps> = ({
  menus,
  onMenuClick,
  ...rest
}) => {
  return (
    <Popover
      {...rest}
      content={placement => {
        return (
          <Menu
            onClick={onMenuClick}
            items={menus}
            style={{
              transformOrigin: placement?.includes('start')
                ? 'left top'
                : 'right top',
            }}
          />
        );
      }}
    >
      {rest.children}
    </Popover>
  );
};

export default PopoverMenu;
