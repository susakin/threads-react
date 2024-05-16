import React, { useState } from 'react';
import styles from './accessibility.module.less';
import { Media } from '@typings/index';
import { VideoPlayer, Button } from '@components/index';
import TextareaAutosize from 'react-textarea-autosize';
import cs from 'classnames';

const classNamePrefix = 'accessibility';

type AccessibilityProps = {
  media?: Media;
  onOk?: (accessibilityCaption: string) => void;
};

const Accessibility: React.FC<AccessibilityProps> = ({ media, onOk }) => {
  const url = media?.tempUrl || media?.url;
  const maxLength = 1000;
  const hintLength = 50;
  const [accessibilityCaption, setAccessibilityCaption] = useState<string>(
    media?.accessibilityCaption || '',
  );

  const length = maxLength - accessibilityCaption.length;

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-inner`]}>
        <div className={styles[`${classNamePrefix}-inner-priview`]}>
          <div className={styles[`${classNamePrefix}-inner-priview-media`]}>
            {media?.type === 'image' ? (
              <img src={url} />
            ) : (
              <VideoPlayer url={url as string} playWhenInView />
            )}
          </div>
        </div>

        <div className={styles[`${classNamePrefix}-inner-textarea`]}>
          <TextareaAutosize
            placeholder="为视障人士描述这一内容..."
            defaultValue={media?.accessibilityCaption || ''}
            onChange={e => {
              setAccessibilityCaption(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles[`${classNamePrefix}-action`]}>
        <div
          className={cs(styles[`${classNamePrefix}-action-hint`], {
            [styles[`${classNamePrefix}-action-hint-error`]]: length < 0,
          })}
        >
          {length <= hintLength ? length : ''}
        </div>
        <Button
          type="default"
          onClick={() => {
            onOk?.(accessibilityCaption);
          }}
          disabled={accessibilityCaption?.length > maxLength}
        >
          完成
        </Button>
      </div>
    </div>
  );
};

export default Accessibility;
