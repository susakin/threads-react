import React, { ReactElement, useState } from 'react';
import { EntryComponentProps } from '@draft-js-plugins/mention/lib/MentionSuggestions/Entry/Entry';
import cs from 'classnames';
import createMentionPlugin from '@draft-js-plugins/mention';
import { Popover } from '@draft-js-plugins/mention';
import ReactDOM from 'react-dom';
import tagTheme from './tagTheme.module.less';
import styles from './tag.module.less';
import { Spin, CloseStrong } from '@components/Icon';
import { useFetch } from '@hooks/useFetch';
import { getTags } from '@services/post';

function Entry(props: EntryComponentProps): ReactElement {
  const {
    mention, // eslint-disable-line @typescript-eslint/no-unused-vars
    searchValue, // eslint-disable-line @typescript-eslint/no-unused-vars
    isFocused, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...rest
  } = props;

  return (
    <div
      id={rest.id}
      className={cs(tagTheme.tagSuggestionsEntry, {
        [tagTheme.tagSuggestionsEntryFocused]: isFocused,
      })}
      onMouseDown={rest.onMouseDown}
      onMouseUp={rest.onMouseUp}
    >
      <div className={styles[`${classNamePrefix}-item`]}>
        <div className={styles[`${classNamePrefix}-item-text`]}>
          {mention.name}
        </div>
        {mention.new && (
          <div className={styles[`${classNamePrefix}-item-hint`]}>
            + 标记新话题
          </div>
        )}
      </div>
    </div>
  );
}

const classNamePrefix = 'tag';

export const tagPlugin = createMentionPlugin({
  mentionPrefix: '#',
  mentionTrigger: '#',
  supportWhitespace: false,
  theme: tagTheme,
  mentionComponent({ children }) {
    return (
      <span className={styles[`${classNamePrefix}-text`]}>{children}</span>
    );
  },
});

const { MentionSuggestions } = tagPlugin;

type TagProps = {
  maxLength?: number;
  addedLength?: number;
};

const Tag: React.FC<TagProps> = ({ maxLength = 0, addedLength = 0 }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const { run, loading } = useFetch<any, any>(getTags, {
    manual: true,
    onSuccess(data, [, text]) {
      const tags = data?.tags || [];
      if (
        (tags.every((tag: any) => tag.displayText !== `#${text}`) ||
          !tags.length) &&
        text?.length > 0
      ) {
        tags.push({
          displayText: `#${text}`,
          new: true,
        });
      }
      setSuggestions(
        tags.map((item: any) => {
          item.name = item.displayText?.substring(1);
          return item;
        }),
      );
    },
  });

  return (
    <MentionSuggestions
      open={open}
      suggestions={suggestions}
      popoverContainer={({ children, ...props }) => {
        if (addedLength >= maxLength || (!suggestions?.length && !loading))
          return null;
        const node = (
          <Popover {...props}>
            <div className={styles[`${classNamePrefix}-popover`]}>
              <div className={styles[`${classNamePrefix}-popover-close`]}>
                <CloseStrong viewBox="0 0 24 24" size={10} />
                <div
                  className={
                    styles[`${classNamePrefix}-popover-close-placeholder`]
                  }
                />
              </div>
              {loading ? (
                <div className={styles[`${classNamePrefix}-popover-spin`]}>
                  <Spin size={18} viewBox="0 0 100 100" />
                </div>
              ) : (
                children
              )}
            </div>
          </Popover>
        );
        return ReactDOM.createPortal(node, document.body);
      }}
      onOpenChange={v => {
        setOpen(v);
      }}
      renderEmptyPopup={true}
      entryComponent={props => {
        const onMouseDown = (e: any) => {
          if (addedLength >= maxLength) return;
          props.onMouseDown(e);
        };
        return <Entry {...props} onMouseDown={onMouseDown} />;
      }}
      onSearchChange={v => {
        setSuggestions([]);
        addedLength < maxLength && run({ page: 1, pageSize: 10 }, v?.value);
      }}
    />
  );
};

export default Tag;
