import React, { isValidElement } from 'react';
import cs from 'classnames';
import { traverseReactNode } from '@utils/traverseReactNode';
import { usePropsValue } from 'hooks/usePropsValue';
import { attachPropertiesToComponent } from '@utils/attachPropertiesToComponent';
import styles from './index.module.less';
import { ShouldRender } from '@utils/ShouldRender';
import TabHeader from './Tab';
import ButtonTab from './ButtonTab';

export type TabItemProps = {
  title: React.ReactNode;
  disabled?: boolean;
  forceRender?: boolean;
  children?: React.ReactNode;
  destroyOnClose?: boolean;
};

export const Tab: React.FC<TabItemProps> = () => {
  return null;
};

export type TabsProps = {
  activeKey?: string | null;
  defaultActiveKey?: string | null;
  onChange?: (key: string) => void;
  children?: React.ReactNode;
  tabClassName?: string;
  contentClassName?: string;
  disabledContentScroll?: boolean;
  onTabClick?: (key: string) => void;
  tabType?: 'default' | 'button';
};

const classNamePrefix = 'tabs';

const Tabs: React.FC<TabsProps> = props => {
  const keyToIndexRecord: Record<string, number> = {};
  const { tabType = 'default' } = props;
  let firstActiveKey: string | null = null;

  const panes: React.ReactElement<TabItemProps>[] = [];

  traverseReactNode(props.children, (child, index) => {
    if (!isValidElement<TabItemProps>(child)) return;

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

  const tabProps = {
    panes,
    activeKey: activeKey as any,
    className: props.tabClassName,
    onClick: (key: string) => {
      props?.onTabClick?.(key);
      setActiveKey(key.toString());
    },
  };

  return (
    <>
      <div
        className={cs(styles[`${classNamePrefix}`], {
          [styles[`${classNamePrefix}-content-scroll`]]:
            !props.disabledContentScroll,
        })}
      >
        {tabType === 'default' ? (
          <TabHeader
            keyToIndex={keyToIndexRecord[activeKey as any]}
            {...tabProps}
          />
        ) : (
          <ButtonTab {...tabProps} />
        )}
        <div className={props?.contentClassName}>
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
      </div>
    </>
  );
};

export default attachPropertiesToComponent(Tabs, {
  Tab,
});
