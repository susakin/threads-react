import React, { useContext, useRef } from 'react';
import { Direction, Menu as MenuIcon } from '@components/Icon';
import cs from 'classnames';
import { Popover, PopoverMenu, MutilStepContainer } from '@components/index';
import styles from './menu.module.less';
import { logout } from '@services/auth';
import { useFetch } from '@hooks/useFetch';
import localforage from 'localforage';
import { AuthContext } from '@context/AuthProvider';
import { MenuItem } from '@components/Popover/Menu';
import { Link } from 'react-router-dom';
import { MutilStepContainerRef } from '@components/MutilStepContainer';
import SwitchTheme from './SwitchTheme';
import { Placement } from '@floating-ui/react';

const classNamePrefix = 'menu';

const Menu: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const { state: _state } = useContext(AuthContext);
  const { user } = _state;
  const mutilStepRef = useRef<MutilStepContainerRef>(null);

  const { runAsync } = useFetch(logout, {
    manual: true,
    onSuccess() {
      localforage.removeItem('token', () => {
        window.location.reload();
      });
    },
  });

  const items: MenuItem[] = [
    {
      label: '外观',
      onClick(e) {
        e.stopPropagation();
        mutilStepRef.current?.swipeNext();
      },
      icon: (
        <Direction
          viewBox="0 0 24 24"
          size={16}
          style={{
            transform: 'rotate(180deg)',
            color: 'var(--barcelona-secondary-icon)',
          }}
        />
      ),
    },
    {
      label: (
        <Link to="/saved" className={styles[`${classNamePrefix}-link`]}>
          已收藏
        </Link>
      ),
      style: { padding: 0 },
    },
    {
      label: (
        <Link to="/liked" className={styles[`${classNamePrefix}-link`]}>
          你点赞过的内容
        </Link>
      ),
      style: { padding: 0 },
    },
  ];

  if (user) {
    items.splice(1, 0, {
      label: (
        <Link
          to="/settings/privacy"
          className={styles[`${classNamePrefix}-link`]}
        >
          设置
        </Link>
      ),
      style: { padding: 0 },
    });

    items.push({
      label: '退出',
      async onClick(e) {
        e.stopPropagation();
        await runAsync();
      },
    });
  }
  const content = (placement: Placement) => {
    return (
      <MutilStepContainer
        ref={mutilStepRef}
        className={styles[`${classNamePrefix}-menu`]}
        style={{
          transformOrigin: placement?.includes('start')
            ? 'left top'
            : 'right top',
        }}
      >
        <MutilStepContainer.Item>
          <PopoverMenu items={[items]} shadow={false} />
        </MutilStepContainer.Item>
        <MutilStepContainer.Item>
          <SwitchTheme
            onBack={() => {
              mutilStepRef.current?.swipePrev();
            }}
          />
        </MutilStepContainer.Item>
      </MutilStepContainer>
    );
  };

  return (
    <Popover
      content={content}
      onOpenChange={v => setVisible(v)}
      strategy={'fixed'}
      hideWhenContentClick
      placement="bottom-end"
      floatingStyle={{ zIndex: 3 }}
    >
      <div className={styles[`${classNamePrefix}`]}>
        <div className={styles[`${classNamePrefix}-outer`]}>
          <MenuIcon fill="currentColor" size={24} viewBox="0 0 24 24" />
        </div>
        <div
          className={cs(styles[`${classNamePrefix}-inner`], {
            [styles[`${classNamePrefix}-inner-active`]]: visible,
          })}
        >
          <MenuIcon fill="currentColor" size={24} viewBox="0 0 24 24" />
        </div>
      </div>
    </Popover>
  );
};

export default Menu;
