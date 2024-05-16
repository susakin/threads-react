import React from 'react';
import cs from 'classnames';
import styles from './index.module.less';
import { usePropsValue } from '@hooks/usePropsValue';

const classNamePrefix = 'switch';

type SwitchProps = {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  size?: 'small' | 'default';
};

const Switch: React.FC<SwitchProps> = props => {
  const [checked, setChecked] = usePropsValue({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: v => {
      if (v === null) return;
      props.onChange?.(v as boolean);
    },
  });

  return (
    <div
      className={cs(
        styles[`${classNamePrefix}`],
        styles[`${classNamePrefix}-${props.size || 'default'}`],
      )}
    >
      <div
        className={cs(styles[`${classNamePrefix}-overlay`], {
          [styles[`${classNamePrefix}-overlay-checked`]]: checked,
        })}
      />
      <div
        className={cs(styles[`${classNamePrefix}-handle`], {
          [styles[`${classNamePrefix}-handle-checked`]]: checked,
        })}
      />
      <input
        checked={checked}
        onChange={e => {
          const value = e.target.checked;
          setChecked(value);
        }}
        type="checkbox"
        className={styles[`${classNamePrefix}-checkbox`]}
      />
    </div>
  );
};

export default Switch;
