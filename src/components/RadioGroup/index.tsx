import React from 'react';
import styles from './index.module.less';
import cs from 'classnames';
import { usePropsValue } from '@hooks/usePropsValue';
const classNamePrefix = 'radio-group';

type option = {
  label: React.ReactNode;
  value: string;
};

type RadioGroupProps = {
  value?: string;
  defaultValue?: string;
  options?: option[];
  onChange?: (value: string) => void;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  defaultValue,
  onChange,
  options,
  ...rest
}) => {
  const [value, setValue] = usePropsValue({
    value: rest.value,
    defaultValue,
    onChange: v => {
      if (v === null) return;
      onChange?.(v as string);
    },
  });

  return (
    <div className={styles[`${classNamePrefix}`]}>
      {options?.map(item => {
        const checked = item.value === value;
        return (
          <div
            className={cs(styles[`${classNamePrefix}-item`], {
              [styles[`${classNamePrefix}-item-checked`]]: checked,
            })}
            key={item.value}
          >
            <input
              value={item.value}
              type="radio"
              checked={checked}
              onChange={e => {
                const value = e.target.value;
                setValue(value);
              }}
            />
            <label className={styles[`${classNamePrefix}-item-label`]}>
              {item.label}
            </label>
            <div className={styles[`${classNamePrefix}-item-radio`]}>
              <span className={styles[`${classNamePrefix}-item-radio-dot`]} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
