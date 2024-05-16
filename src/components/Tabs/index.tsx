import React, { isValidElement } from 'react';
import cs from 'classnames';
import { traverseReactNode } from '@utils/traverseReactNode';
import { usePropsValue } from 'hooks/usePropsValue';
import { attachPropertiesToComponent } from '@utils/attachPropertiesToComponent';
import styles from './index.module.less';
import { ShouldRender } from '@utils/ShouldRender';

export type TabProps = {
  title: React.ReactNode;
  disabled?: boolean;
  forceRender?: boolean;
  children?: React.ReactNode;
  destroyOnClose?: boolean;
};

export const Tab: React.FC<TabProps> = () => {
  return null;
};

export type TabsProps = {
  activeKey?: string | null;
  defaultActiveKey?: string | null;
  onChange?: (key: string) => void;
  children?: React.ReactNode;
  headerClassName?: string;
  disabledContentScroll?: boolean;
  onTabTitleClick?: (key: string) => void;
};

const classNamePrefix = 'tabs';

const Tabs: React.FC<TabsProps> = props => {
  const keyToIndexRecord: Record<string, number> = {};
  let firstActiveKey: string | null = null;

  const panes: React.ReactElement<TabProps>[] = [];

  traverseReactNode(props.children, (child, index) => {
    if (!isValidElement<TabProps>(child)) return;

    const key = child.key;
    if (typeof key !== 'string') return;
    if (index === 0) {
      firstActiveKey = key;
    }
    const length = panes.push(child);
    keyToIndexRecord[key] = length - 1;
  });

  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? firstActiveKey,
    onChange: v => {
      if (v === null) return;
      props.onChange?.(v);
    },
  });

  return (
    <>
      <div
        className={cs(styles[`${classNamePrefix}`], {
          [styles[`${classNamePrefix}-content-scroll`]]:
            !props.disabledContentScroll,
        })}
      >
        <div
          className={cs(
            styles[`${classNamePrefix}-header`],
            props.headerClassName,
          )}
        >
          {panes.map(pane => {
            return (
              <div
                className={cs(styles[`${classNamePrefix}-header-item`], {
                  [styles[`${classNamePrefix}-header-item-active`]]:
                    pane.key === activeKey,
                })}
                role="tab"
                key={pane.key}
                aria-selected={pane.key === activeKey}
                tabIndex={0}
                onClick={() => {
                  const { key } = pane;
                  if (pane.props.disabled) return;
                  if (key === undefined || key === null) {
                    return;
                  }
                  props?.onTabTitleClick?.(key);
                  setActiveKey(key.toString());
                }}
              >
                {pane?.props?.title}
              </div>
            );
          })}
          {panes.length !== 0 && (
            <div
              className={styles[`${classNamePrefix}-header-line`]}
              style={{
                width: `${(1 / panes.length) * 100}%`,
                transform: `translateX(${
                  keyToIndexRecord[activeKey as any] * 100
                }%)`,
              }}
            />
          )}
        </div>
        {panes.map(pane => {
          if (pane.props.children === undefined) {
            return null;
          }
          const active = pane.key === activeKey;
          return (
            <ShouldRender
              key={pane.key}
              active={active}
              forceRender={pane.props.forceRender}
              destroyOnClose={pane.props?.destroyOnClose}
            >
              <div
                className={styles[`${classNamePrefix}-content`]}
                style={{ display: active ? 'block' : 'none' }}
              >
                {pane.props.children}
              </div>
            </ShouldRender>
          );
        })}
      </div>
    </>
  );
};

export default attachPropertiesToComponent(Tabs, {
  Tab,
});
