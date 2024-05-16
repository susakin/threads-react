import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Button } from '@components/index';
import styles from './toolbar.module.less';
import { useNavigate, useParams } from 'react-router-dom';
import { EventEmitter } from 'ahooks/lib/useEventEmitter';
import { NavigationContext } from '@context/NavigationProvider';

const classNamePrefix = 'toolbar';

type ToolbarProps = {
  onChange?: (activeKey: string) => void;
  emitter?: EventEmitter<string | undefined>;
};

export const toolbarItems = [
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

const Toolbar: React.FC<ToolbarProps> = ({ onChange, emitter }) => {
  const { action } = useParams<{ action?: string }>();
  const [activePath, setActivePath] = useState<string>(
    action ? `/${action}` : ('' as any),
  );
  const { state } = useContext(NavigationContext);
  const { navigationEmitter } = state;
  const navigate = useNavigate();

  useEffect(() => {
    onChange?.(activePath);
  }, [activePath]);

  useLayoutEffect(() => {
    navigationEmitter?.emit({
      type: 'activity',
      path: action ? `/${action}` : ('' as any),
    });
  }, [action]);

  function onClick(path?: string) {
    const _path = path || '';
    emitter?.emit?.(_path);
    setActivePath(_path);
    navigate(`/activity${_path}`, { replace: true });
  }

  return (
    <div className={styles[`${classNamePrefix}`]}>
      {toolbarItems.map(({ label, key, path }) => {
        return (
          <Button
            key={key}
            onClick={() => {
              onClick(path);
            }}
            className={styles[`${classNamePrefix}-item`]}
            type={activePath === path ? 'primary' : 'default'}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
};

export default Toolbar;
