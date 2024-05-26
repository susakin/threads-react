import React, { useContext, useLayoutEffect, useState } from 'react';
import styles from './index.module.less';
import { useHeaderHeightStyle } from '@hooks/useHeaderHeightStyle';
import { useEventEmitter } from 'ahooks';
import { useTitle } from '@hooks/useTitle';
import Tabs from '@components/Tabs';
import ActivityList from './ActivityList';
import { useNavigate, useParams } from 'react-router-dom';
import { NavigationContext } from '@context/NavigationProvider';

const classNamePrefix = 'activity';
const toolbarItems = [
  {
    label: '全部',
    key: '',
    path: '',
  },
  {
    label: '关注',
    key: 'follow',
    path: '/follows',
  },
  {
    label: '回复',
    key: 'reply',
    path: '/replies',
  },
  {
    label: '提及',
    key: 'mention',
    path: '/mentions',
  },
  {
    label: '引用',
    key: 'quote',
    path: '/quotes',
  },
  {
    label: '转发',
    key: 'repost',
    path: '/reposts',
  },
  {
    label: '已认证',
    key: 'verified',
    path: '/verified',
  },
];

const Activity: React.FC = () => {
  const style = useHeaderHeightStyle();
  const tabEmitter = useEventEmitter<string | undefined>();

  const { action } = useParams<{ action?: string }>();
  const [activeTab, setActiveTab] = useState<string>(() => {
    const path = action ? `/${action}` : ('' as any);
    return path as any;
  });

  const { state } = useContext(NavigationContext);
  const { navigationEmitter } = state;
  const navigate = useNavigate();

  const { setTitle } = useTitle();

  setTitle('动态 • Threads');

  useLayoutEffect(() => {
    navigationEmitter?.emit({
      type: 'activity',
      path: action ? `/${action}` : ('' as any),
    });
  }, [action]);

  function onClick(path?: string) {
    const _path = path || '';
    path === activeTab && tabEmitter?.emit?.(_path);
    navigate(`/activity${_path}`, { replace: true });
  }

  return (
    <div className={styles[`${classNamePrefix}`]} style={style}>
      <Tabs
        onTabClick={path => {
          setActiveTab(path);
          onClick(path);
        }}
        activeKey={activeTab}
        tabClassName={styles[`${classNamePrefix}-tab`]}
        contentClassName={styles[`${classNamePrefix}-inner`]}
        tabType="button"
      >
        {toolbarItems.map(({ label, key, path }) => {
          return (
            <Tabs.Tab title={label} key={path} forceRender={false}>
              <ActivityList
                type={key}
                emitter={tabEmitter}
                path={path}
                active={path === activeTab}
              />
            </Tabs.Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Activity;
