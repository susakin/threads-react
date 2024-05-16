import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import { Search, Clear } from '@components/Icon';
import styles from './searchInput.module.less';
import useViewport from '@hooks/useViewport';
import { Button } from '@components/index';
import { useKeyPress, useClickAway } from 'ahooks';
import { useNavigate, useSearchParams } from 'react-router-dom';

import cs from 'classnames';

const classNamePrefix = 'search-input';

export type SearchInputActionRefType = {
  changeFocusedStatus: (focused: boolean) => void;
};

type SearchInputProps = {
  placeholder?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  children?: React.ReactNode;
  onFocusedChange?: (focused: boolean) => void;
  actionRef?: React.MutableRefObject<SearchInputActionRefType | undefined>;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = '搜索',
  onValueChange,
  defaultValue,
  children,
  onFocusedChange,
  actionRef,
}) => {
  const [value, setValue] = useState<string>(defaultValue || '');
  const [focused, setFocused] = useState<boolean>(false);
  const { viewportWidth } = useViewport();
  const viewportWidth699 = viewportWidth <= 699;
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');

  useEffect(() => {
    onValueChange?.(value);
  }, [value]);

  useEffect(() => {
    onFocusedChange?.(focused);
  }, [focused]);

  useKeyPress(
    27,
    () => {
      setFocused(false);
    },
    {
      events: ['keyup'],
      target: inputRef,
    },
  );

  useKeyPress(
    'enter',
    () => {
      const trimValue = value?.trim();
      if (q !== trimValue && trimValue?.length) {
        navigate(`/search?serp_type=default&q=${trimValue}`);
        setFocused(false);
        inputRef.current?.blur();
      }
    },
    {
      target: inputRef,
    },
  );
  const active = value?.length && focused;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (q) {
      inputRef?.current?.blur();
      setFocused(false);
    }
  }, [q]);

  useClickAway(() => {
    setFocused(false);
  }, ref);

  useEffect(() => {
    if (!defaultValue) {
      !viewportWidth699 &&
        setTimeout(() => {
          inputRef?.current?.focus();
        });
    }
    setValue(defaultValue || '');
  }, [defaultValue]);

  useImperativeHandle(actionRef, () => {
    return {
      changeFocusedStatus: (focused: boolean) => {
        setFocused(focused);
      },
    };
  });

  return (
    <div className={styles[`${classNamePrefix}`]} ref={ref}>
      <div className={styles[`${classNamePrefix}-inner`]}>
        {!viewportWidth699 && (
          <div
            className={cs(styles[`${classNamePrefix}-inner-placeholder`], {
              [styles[`${classNamePrefix}-inner-placeholder-small`]]: active,
            })}
          />
        )}
        <label
          className={cs(styles[`${classNamePrefix}-inner-label`], {
            [styles[`${classNamePrefix}-inner-label-focus`]]:
              focused && !viewportWidth699,
            [styles[`${classNamePrefix}-inner-label-searching`]]:
              active && !viewportWidth699,
          })}
        >
          <div className={styles[`${classNamePrefix}-inner-label-icon`]}>
            <Search size={16} viewBox="0 0 26 26" />
          </div>
          <input
            className={styles[`${classNamePrefix}-inner-label-input`]}
            autoComplete="off"
            spellCheck="false"
            placeholder={placeholder}
            value={value}
            ref={inputRef}
            onClick={() => {
              setFocused(true);
            }}
            onFocus={() => {
              setFocused(true);
            }}
            onChange={e => {
              const val = e.target.value;
              val?.length && setFocused(true);
              setValue(val);
            }}
          />
          {value.length !== 0 && (
            <div className={styles[`${classNamePrefix}-inner-label-clear`]}>
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
        </label>
        {!viewportWidth699 && (
          <div
            className={cs(styles[`${classNamePrefix}-inner-placeholder`], {
              [styles[`${classNamePrefix}-inner-placeholder-small`]]: active,
            })}
          />
        )}
        {focused && viewportWidth699 && (
          <Button
            className={styles[`${classNamePrefix}-inner-cancel`]}
            type="text"
            onClick={() => {
              setFocused(false);
              setValue('');
            }}
          >
            取消
          </Button>
        )}
      </div>
      {children}
    </div>
  );
};

export default SearchInput;
