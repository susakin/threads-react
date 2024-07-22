import React from 'react';
import Menu, { MenuItem } from './Menu';
import Popover, { PopoverProps } from '.';

type PopoverMenuProps = {
  menus?: Array<MenuItem[]>;
} & PopoverProps;

const PopoverMenu: React.FC<PopoverMenuProps> = ({ menus, ...rest }) => {
  return (
    <Popover
      {...rest}
      content={placement => {
        return (
          <Menu
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
