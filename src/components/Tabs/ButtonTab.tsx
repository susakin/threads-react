import React from 'react';
import styles from './buttonTab.module.less';
import { TabProps } from './Tab';
import cs from 'classnames';
import Button from '@components/Button';
const classNamePrefix = 'button-tab';

const ButtonTab: React.FC<Omit<TabProps, 'keyToIndex'>> = ({
  className,
  panes,
  onClick,
  activeKey,
}) => {
  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      {panes?.map(pane => {
        const { key } = pane;
        return (
          <Button
            key={key}
            disabled={pane.props.disabled}
            onClick={() => {
              if (key === undefined || key === null) {
                return;
              }
              onClick?.(key);
            }}
            className={styles[`${classNamePrefix}-item`]}
            type={pane.key === activeKey ? 'primary' : 'default'}
          >
            {pane?.props?.title}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonTab;
