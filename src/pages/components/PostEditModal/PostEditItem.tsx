import React, { useRef, useState } from 'react';
import { Avatar, Media } from '@components/index';
import cs from 'classnames';
import { Username, PostLine, RichText, QuotedPost } from '..';
import styles from './postEditItem.module.less';
import { Close } from '@components/Icon';
import { Media as MediaItem, User } from '@typings/index';
import { EditPost } from '.';
import { ActionRefType, RichTextProps } from '../RichText';
import { OnFollowingChange } from '../FollowButton';
import Poll from './Poll';
import { uniqueId } from 'lodash';
import { useDrop } from 'ahooks';
import { useFileUpload } from '../FileUpload';
import PostEditAction from './PostEditAction';

const classNamePrefix = 'post-edit-item';

type PostEditItemProps = {
  user?: User;
  className?: string;
  onDelete?: () => void;
  onlyOne?: boolean;
  hasDelete?: boolean;
  onAdd?: () => void;
  hasAdd?: boolean;
  hasTime?: boolean;
  post?: EditPost;
  onUpdate?: (post: EditPost) => void;
  placeholder?: string;
  onAccessibilityClick?: (media: MediaItem) => void;
} & Pick<RichTextProps, 'onBlur' | 'onFocus'> &
  OnFollowingChange;

const PostEditItem: React.FC<PostEditItemProps> = ({
  className,
  user,
  hasDelete,
  hasAdd,
  onDelete,
  onAdd,
  post,
  onUpdate,
  onFollowingChange,
  placeholder = '详细说说...',
  onlyOne,
  onAccessibilityClick,
  ...rest
}) => {
  const { medias, poll, caption } = post || {};
  const hasMedia = medias && medias?.length !== 0;
  const hasPoll = poll && poll?.tallies?.length !== 0;
  const containerRef = useRef<HTMLDivElement>(null);
  const [fileDragging, setFileDragging] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const { profilePicUrl } = user || {};
  const eidtorActionRef = useRef<ActionRefType>(null);
  const disabledAdd =
    caption?.trim()?.length === 0 &&
    ((poll &&
      poll?.tallies?.filter(item => item.text?.trim().length).length < 2) ||
      !poll) &&
    !hasMedia;

  const _medias = medias?.map(item => {
    return {
      ...item,
      url: item.tempUrl || item.url,
    };
  });

  const { handleFileChange } = useFileUpload({
    uploadedLength: medias?.length,
    onFileChange: files => {
      onUpdate?.({ medias: [...(medias || []), ...files] });
    },
    onUploadingChange: uploading => {
      setUploading(uploading);
    },
  });

  useDrop(onlyOne ? undefined : containerRef, {
    onFiles: files => {
      setFileDragging(false);
      handleFileChange(files);
    },
    onDragEnter: () => setFileDragging(true),
    onDragLeave: () => setFileDragging(false),
  });

  return (
    <div
      className={cs(styles[`${classNamePrefix}`], className)}
      ref={containerRef}
    >
      <div className={styles[`${classNamePrefix}-avatar`]}>
        <Avatar size={36} url={profilePicUrl} />
      </div>
      <div className={styles[`${classNamePrefix}-header`]}>
        <Username
          user={user}
          disableLink
          className={styles[`${classNamePrefix}-header-username`]}
        />
        {hasDelete && (
          <div
            className={styles[`${classNamePrefix}-header-delete`]}
            onClick={onDelete}
          >
            <Close size={12} viewBox="0 0 24 24" />
          </div>
        )}
      </div>
      <div className={styles[`${classNamePrefix}-inner`]}>
        <div className={styles[`${classNamePrefix}-inner-caption`]}>
          <RichText
            value={post?.caption}
            placeholder={placeholder}
            actionRef={eidtorActionRef}
            textEntity={post?.textEntities}
            onTextEntityChange={textEntities => {
              onUpdate?.({
                textEntities: [...textEntities],
              });
            }}
            onChange={caption => {
              onUpdate?.({
                caption,
              });
            }}
            {...rest}
          />
        </div>
        {hasMedia && (
          <div className={styles[`${classNamePrefix}-inner-media`]}>
            <Media
              medias={_medias}
              hasDelete
              actionButtonInContainer
              disableViewer
              hasAccessibilityButton
              onAccessibilityClick={onAccessibilityClick}
              onDelete={media => {
                onUpdate?.({
                  medias: medias?.filter(
                    item => item.tempUrl !== media.tempUrl,
                  ),
                });
              }}
            />
          </div>
        )}
        {hasPoll && (
          <Poll
            tallies={poll?.tallies}
            onTalliesUpdate={tallies => {
              onUpdate?.({
                poll: {
                  tallies,
                },
              });
            }}
            onDelete={() => {
              onUpdate?.({ poll: undefined });
            }}
          />
        )}
        {!hasPoll && (
          <PostEditAction
            onAddHashTag={() => {
              eidtorActionRef.current?.addHashTag();
            }}
            uploadedLength={medias?.length}
            fileDragging={fileDragging}
            uploading={uploading}
            onFileChange={files => {
              onUpdate?.({ medias: [...(medias || []), ...files] });
            }}
            onAddPoll={() => {
              onUpdate?.({
                poll: {
                  tallies: [
                    {
                      text: '',
                      id: uniqueId(),
                    },
                    {
                      text: '',
                      id: uniqueId(),
                    },
                    {
                      text: '',
                      id: uniqueId(),
                    },
                  ],
                },
              });
            }}
            onlyOne={onlyOne}
          />
        )}
        {post?.quotedPost && (
          <div className={styles[`${classNamePrefix}-inner-quoted-post`]}>
            <QuotedPost
              post={post?.quotedPost}
              onFollowingChange={onFollowingChange}
              canNavigate={false}
              actionButtonInContainer
            />
          </div>
        )}
      </div>
      <PostLine lineType="line" />
      {hasAdd && (
        <div
          onClick={disabledAdd ? undefined : onAdd}
          className={cs(styles[`${classNamePrefix}-add`], {
            [styles[`${classNamePrefix}-add-disabled`]]: disabledAdd,
          })}
        >
          <div className={styles[`${classNamePrefix}-add-avatar`]}>
            <Avatar size={16} url={profilePicUrl} />
          </div>
          <div className={styles[`${classNamePrefix}-add-text`]}>
            添加到串文
          </div>
        </div>
      )}
    </div>
  );
};

export default PostEditItem;
