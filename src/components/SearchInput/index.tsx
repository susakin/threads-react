import React, { useRef } from 'react';
import cs from 'classnames';
import { useKeyPress } from 'ahooks';
import styles from './index.module.less';
import { Clear, Search } from '@components/Icon';
import { usePropsValue } from '@hooks/usePropsValue';

const classNamePrefix = 'search-input';

type SearchInputProps = {
  className?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  onESC?: () => void;
  onEnter?: () => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  className,
  placeholder,
  onESC,
  onEnter,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const keyCallbackMap: any = {
    Escape: onESC,
    Enter: onEnter,
  };

  useKeyPress(
    ['esc', 'enter'],
    e => {
      keyCallbackMap[e.code]?.();
    },
    {
      target: inputRef,
    },
  );

  const [value, setValue] = usePropsValue({
    value: rest.value,
    defaultValue: rest.defaultValue,
    onChange: v => {
      if (v === null) return;
      rest.onChange?.(v as string);
    },
  });

  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      <div className={styles[`${classNamePrefix}-icon`]}>
        <Search size={16} viewBox="0 0 26 26" />
      </div>
      <input
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        className={styles[`${classNamePrefix}-input`]}
      />
      {(value?.length || 0) > 0 && (
        <div className={styles[`${classNamePrefix}-clear`]}>
          <Clear
            size={16}
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={() => {
              setValue('');
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
