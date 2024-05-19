import React, {
  SyntheticEvent,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import Draft, {
  ContentState,
  EditorState,
  Modifier,
  SelectionState,
} from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import cs from 'classnames';
import styles from './index.module.less';
import 'draft-js/dist/Draft.css';
import '@draft-js-plugins/linkify/lib/plugin.css';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import Mention, { mentionPlugin } from './Mention';
import Tag, { tagPlugin } from './Tag';
import Toast from '@components/Toast';
import { TextEntity } from '@typings/index';
import { useUpdateEffect } from 'ahooks';

const classNamePrefix = 'rich-text';

export type ActionRefType = {
  addHashTag: () => void;
};

const linkifyPlugin = createLinkifyPlugin();

export type RichTextProps = {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: (e: SyntheticEvent) => void;
  onBlur?: (e: SyntheticEvent) => void;
  actionRef?: React.RefObject<ActionRefType>;
  maxTagLength?: number;
  onTextEntityChange?: (textEntity: TextEntity[]) => void;
  textEntity?: TextEntity[];
};

const RichText: React.FC<RichTextProps> = ({
  placeholder,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  actionRef,
  maxTagLength = 1,
  onTextEntityChange,
  ...rest
}) => {
  const [editorState, setEditorState] = useState(() => {
    const state = EditorState.createWithContent(
      Draft.ContentState.createFromText(value || ''),
    );
    return state;
  });
  const [textEntities, setTextEntities] = useState<TextEntity[]>(
    rest.textEntity || [],
  );

  const editorRef = useRef<any>(null);

  const moveSelectionToEnd = (editorState: EditorState) => {
    const content = editorState.getCurrentContent();
    const blockMap = content.getBlockMap();

    const key = blockMap.last().getKey();
    const length = blockMap.last().getLength();

    const selection = new SelectionState({
      anchorKey: key,
      anchorOffset: length,
      focusKey: key,
      focusOffset: length,
    });
    return EditorState.forceSelection(editorState, selection);
  };

  const applyEntity = (item: TextEntity) => {
    setEditorState(editorState => {
      const contentState = editorState.getCurrentContent();

      const blocks = contentState.getBlocksAsArray();
      const blockKey = blocks[item.blockIndex].getKey();
      const selection = new SelectionState({
        anchorKey: blockKey,
        anchorOffset: item.blockOffset,
        focusKey: blockKey,
        focusOffset: item.blockOffset + item.displayText?.length,
      });
      const entityType = item.type === 'mention' ? 'mention' : '#mention';
      const entity = contentState.createEntity(entityType, 'IMMUTABLE', {
        name: item.displayText?.substring(1),
      });

      const entityKey = entity.getLastCreatedEntityKey();
      const newContentState = Modifier.applyEntity(
        contentState,
        selection,
        entityKey,
      );
      return EditorState.set(editorState, {
        currentContent: newContentState,
      });
    });
  };

  const createEntities = () => {
    const copyEntities = [...(rest.textEntity || [])];
    const applyNextEntity = () => {
      if (copyEntities.length > 0) {
        const entity = copyEntities.pop();
        applyEntity(entity as any);
        setTimeout(applyNextEntity); // Adjust delay time as needed
      }
    };

    applyNextEntity();
  };

  useEffect(() => {
    setTimeout(() => {
      createEntities();
      setEditorState(moveSelectionToEnd);
    });
  }, []);

  const tagsLength = useMemo(() => {
    return textEntities.filter(item => item.type === 'tag').length;
  }, [textEntities]);

  const addHashTag = () => {
    if (tagsLength >= maxTagLength) {
      return Toast.show(`标记达限 (${maxTagLength})`);
    }
    setEditorState(editorState => {
      const contentState = editorState.getCurrentContent();
      const selection = editorState.getSelection();
      // 在光标位置后插入#字符
      const contentStateWithHash = Modifier.insertText(
        contentState,
        selection,
        ' #',
      );
      const updatedEditorState = EditorState.push(
        editorState,
        contentStateWithHash,
        'insert-characters',
      );

      // 将光标移动到新插入字符的后面
      const newSelection = selection.merge({
        anchorOffset: selection.getFocusOffset() + 2,
        focusOffset: selection.getFocusOffset() + 2,
      });

      const newEditorState = EditorState.forceSelection(
        updatedEditorState,
        newSelection,
      );
      setTimeout(() => {
        editorRef.current.focus();
      }, 0);
      return newEditorState;
    });
  };

  useImperativeHandle(actionRef, () => {
    return {
      addHashTag,
    };
  });

  useUpdateEffect(() => {
    onTextEntityChange?.(textEntities);
  }, [textEntities]);

  const getAllEntities = (editorState: any) => {
    const contentState: ContentState = editorState.getCurrentContent();
    const formatedEntities: TextEntity[] = [];
    const blocks = contentState.getBlocksAsArray();
    const notEmptyBlockIndex = blocks.findIndex(block => {
      const trimmedText = block.getText().trimStart();
      return trimmedText !== '';
    });
    let offset = 0;
    blocks.slice(notEmptyBlockIndex).forEach((block, index) => {
      const text = block.getText();
      const trimmedText = text?.trimStart();
      block?.findEntityRanges(
        char => {
          const entityKey = char?.getEntity();
          return entityKey !== null;
        },
        (start, end) => {
          const isFirst = index === 0;
          const trimmedStart = isFirst
            ? start - (text.length - trimmedText.length)
            : start;

          const entityKey = block.getEntityAt(start);
          const entity = contentState.getEntity(entityKey);
          const entityType = entity.getType();
          const entityData = entity.getData();
          const entityText = text.slice(
            isFirst ? text.length - trimmedText.length : trimmedStart,
            end,
          );
          const entityTypeMap: Record<string, string> = {
            '#mention': 'tag',
            mention: 'mention',
          };

          const type = entityTypeMap[entityType] as any;
          (entityData?.mention?.name === entityText?.substring(1) ||
            !entityData?.mention?.name) &&
            formatedEntities.push({
              type,
              displayText: entityText,
              blockOffset: trimmedStart,
              blockIndex: index,
              offset: trimmedStart + offset,
            });
        },
      );
      index === 0
        ? (offset += trimmedText.length + 1)
        : (offset += text.length + 1);
    });
    setTextEntities(entities => {
      if (JSON.stringify(entities) !== JSON.stringify(formatedEntities)) {
        return formatedEntities;
      }
      return entities;
    });
  };

  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      <Editor
        editorState={editorState}
        placeholder={placeholder}
        onChange={e => {
          setEditorState(e);
          const contentState = e.getCurrentContent();
          const text = contentState?.getPlainText();
          text !== value && onChange?.(text);
          getAllEntities(e);
        }}
        plugins={[linkifyPlugin, mentionPlugin, tagPlugin]}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={editorRef}
        stripPastedStyles={true}
      />
      <Mention />
      <Tag maxLength={maxTagLength} addedLength={tagsLength} />
    </div>
  );
};

export default RichText;
