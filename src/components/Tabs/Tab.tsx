import React from 'react';
import styles from './tab.module.less';
import { TabItemProps } from '.';
import cs from 'classnames';

const classNamePrefix = 'tab';

export type TabProps = {
  panes?: React.ReactElement<TabItemProps>[];
  className?: string;
  activeKey?: string;
  onClick?: (key: string) => void;
  keyToIndex?: number;
};

const Tab: React.FC<TabProps> = ({
  panes,
  className,
  activeKey,
  onClick,
  keyToIndex,
}) => {
  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      {panes?.map(pane => {
        const { key } = pane;
        return (
          <div
            className={cs(styles[`${classNamePrefix}-item`], {
              [styles[`${classNamePrefix}-item-active`]]:
                pane.key === activeKey,
            })}
            role="tab"
            key={pane.key}
            aria-selected={pane.key === activeKey}
            tabIndex={0}
            onClick={() => {
              if (pane.props.disabled) return;
              if (key === undefined || key === null) {
                return;
              }
              onClick?.(key);
            }}
          >
            {pane?.props?.title}
          </div>
        );
      })}
      {panes?.length !== 0 && (
        <div
          className={styles[`${classNamePrefix}-line`]}
          style={{
            width: `${(1 / (panes?.length || 0)) * 100}%`,
            transform: `translateX(${(keyToIndex as any) * 100}%)`,
          }}
        />
      )}
    </div>
  );
};

export default Tab;
