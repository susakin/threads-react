import React from 'react';
import styles from './settingActions.module.less';

const classNamePrefix = 'setting-actions';

type SettingAction = {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

type SettingActionsProps = {
  items?: SettingAction[];
};

const SettingActions: React.FC<SettingActionsProps> = ({ items }) => {
  return (
    <>
      <div className={styles[`${classNamePrefix}`]}>
        {items?.map((item, index) => {
          return (
            <div
              className={styles[`${classNamePrefix}-item`]}
              key={index}
              style={{ cursor: item.onClick ? 'pointer' : '' }}
              onClick={item.onClick}
            >
              {item.icon && (
                <div className={styles[`${classNamePrefix}-item-icon`]}>
                  {item.icon}
                </div>
              )}
              <div className={styles[`${classNamePrefix}-item-label`]}>
                {item.label}
              </div>
              <div className={styles[`${classNamePrefix}-item-action`]}>
                {item.action}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles[`${classNamePrefix}-split`]}>
        <hr />
      </div>
    </>
  );
};

export default SettingActions;
