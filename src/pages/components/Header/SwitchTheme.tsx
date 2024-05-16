import React, { useContext } from 'react';
import styles from './switchTheme.module.less';
import { Arrow } from '@components/Icon';
import Light from '@components/Icon/Light';
import Moon from '@components/Icon/Moon';
import { ThemeContext } from '@context/ThemeProvider';
import cs from 'classnames';
const classNamePrefix = 'switch-theme';

type SwitchThemeProps = {
  onBack?: () => void;
};

const SwitchTheme: React.FC<SwitchThemeProps> = ({ onBack }) => {
  const { state, dispatch } = useContext(ThemeContext);
  const { theme } = state;

  const actions = [
    {
      label: <Light viewBox="0 0 17 17" size={18} fill="currentColor" />,
      key: 'light',
    },
    {
      label: <Moon viewBox="0 0 17 17" size={18} fill="currentColor" />,
      key: 'dark',
    },
    {
      label: (
        <div
          className={styles[`${classNamePrefix}-action-inner-item-icon-text`]}
        >
          自动
        </div>
      ),
      key: 'auto',
    },
  ];

  return (
    <div
      className={styles[`${classNamePrefix}`]}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <div className={styles[`${classNamePrefix}-header`]}>
        <div
          className={styles[`${classNamePrefix}-header-back`]}
          onClick={onBack}
        >
          <Arrow viewBox="0 0 24 24" size={16} />
        </div>
        <div className={styles[`${classNamePrefix}-header-title`]}>外观</div>
        <div className={styles[`${classNamePrefix}-header-placeholder`]} />
      </div>
      <div className={styles[`${classNamePrefix}-action`]}>
        <div className={styles[`${classNamePrefix}-action-inner`]}>
          {actions.map((item, index) => {
            const active = item.key === theme;
            const activeIndex = actions.findIndex(item => item.key === theme);
            return (
              <div
                className={cs(styles[`${classNamePrefix}-action-inner-item`], {
                  [styles[`${classNamePrefix}-action-inner-item-active`]]:
                    active,
                })}
                key={item.key}
                onClick={() => {
                  dispatch({
                    type: 'CHANGE_THEME',
                    payload: {
                      theme: item.key as any,
                    },
                  });
                }}
              >
                {!index && (
                  <div
                    style={{
                      transform: `translateX(${activeIndex * 100}%)`,
                    }}
                    className={
                      styles[`${classNamePrefix}-action-inner-item-placeholder`]
                    }
                  />
                )}
                <div
                  className={
                    styles[`${classNamePrefix}-action-inner-item-icon`]
                  }
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SwitchTheme;
