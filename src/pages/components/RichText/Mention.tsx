import React, { ReactElement, useRef, useState } from 'react';
import { EntryComponentProps } from '@draft-js-plugins/mention/lib/MentionSuggestions/Entry/Entry';
import cs from 'classnames';
import User from '../User';
import createMentionPlugin from '@draft-js-plugins/mention';
import { Popover } from '@draft-js-plugins/mention';
import ReactDOM from 'react-dom';
import mentionTheme from './mentionTheme.module.less';
import styles from './mention.module.less';
import { Spin } from '@components/Icon';
import { useFetch } from '@hooks/useFetch';
import { getUsersByQuery } from '@services/serach';

function Entry(props: EntryComponentProps): ReactElement {
  const {
    mention, // eslint-disable-line @typescript-eslint/no-unused-vars
    searchValue, // eslint-disable-line @typescript-eslint/no-unused-vars
    isFocused, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...rest
  } = props;

  return (
    <div
      onMouseDown={rest.onMouseDown}
      onMouseUp={rest.onMouseUp}
      id={rest.id}
      className={cs(mentionTheme.mentionSuggestionsEntry, {
        [mentionTheme.mentionSuggestionsEntryFocused]: isFocused,
      })}
    >
      <User
        key={mention?.user?.id}
        canNavigate={false}
        hasAction={false}
        disabledUsernameLink
        user={mention?.user as any}
        hasFollower={false}
        hasSplitLine={false}
      />
    </div>
  );
}

const classNamePrefix = 'mention';

export const mentionPlugin = createMentionPlugin({
  mentionPrefix: '@',
  supportWhitespace: false,
  theme: mentionTheme,
  mentionComponent({ children }) {
    return <span className={styles[`${classNamePrefix}`]}>{children}</span>;
  },
});

const { MentionSuggestions } = mentionPlugin;

const Mention: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const searchValueRef = useRef<string>('');

  const { run, loading } = useFetch<any, any>(getUsersByQuery, {
    manual: true,
    onSuccess(data) {
      setSuggestions(
        data?.users?.map((user: any) => {
          return {
            user,
            name: user?.username,
          };
        }),
      );
    },
  });

  return (
    <MentionSuggestions
      open={open}
      suggestions={suggestions}
      popoverContainer={({ children, ...props }) => {
        if (
          (!loading && !suggestions?.length) ||
          !searchValueRef?.current?.length
        ) {
          return null;
        }
        console.log(props.store.getReferenceElement(), 'props');
        const node = (
          <Popover {...props}>
            {loading ? (
              <div className={styles[`${classNamePrefix}-spin`]}>
                <Spin size={18} viewBox="0 0 100 100" />
              </div>
            ) : (
              children
            )}
          </Popover>
        );
        return ReactDOM.createPortal(node, document.body);
      }}
      onOpenChange={v => {
        setOpen(v);
      }}
      renderEmptyPopup={true}
      entryComponent={Entry}
      onSearchChange={v => {
        setSuggestions([]);
        searchValueRef.current = v?.value;
        v?.value.length && run({ page: 1, pageSize: 10, query: v?.value });
      }}
    />
  );
};

export default Mention;
