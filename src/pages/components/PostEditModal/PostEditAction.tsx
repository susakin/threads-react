import React, { useState } from 'react';
import styles from './postEditAction.module.less';
import FileUpload from '../FileUpload';
import DragFile from './DragFile';
import cs from 'classnames';
import Spin from '@components/Spin';
import { File, Vote, Tag } from '@components/Icon';
import { Media } from '@typings/index';

const classNamePrefix = 'post-edit-action';

type PostEditActionProps = {
  onlyOne?: boolean;
  fileDragging?: boolean;
  uploadedLength?: number;
  onFileChange?: (medias: Media[]) => void;
  onAddPoll?: () => void;
  onAddHashTag?: () => void;
  uploading?: boolean;
};

const PostEditAction: React.FC<PostEditActionProps> = ({
  onlyOne,
  fileDragging,
  onFileChange,
  uploadedLength = 0,
  onAddPoll,
  onAddHashTag,
  ...rest
}) => {
  const [uploading, setUploading] = useState<boolean>(false);

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <FileUpload
        uploadedLength={uploadedLength}
        onFileChange={files => {
          onFileChange?.(files);
        }}
        onUploadingChange={uploading => {
          setUploading(uploading);
        }}
      >
        <div
          className={cs(styles[`${classNamePrefix}-item`], {
            [styles[`${classNamePrefix}-item-disabled`]]: uploadedLength === 10,
          })}
        >
          <div className={styles[`${classNamePrefix}-item-icon`]}>
            {uploading || rest.uploading ? (
              <Spin size={20} spinning={true} />
            ) : (
              <File size={20} viewBox="0 0 24 24" ariaLabel="附加影音内容" />
            )}
          </div>

          {uploadedLength !== 0 && !uploading && (
            <span className={styles[`${classNamePrefix}-item-text`]}>添加</span>
          )}
        </div>
      </FileUpload>
      <div className={styles[`${classNamePrefix}-item`]} onClick={onAddHashTag}>
        <Tag
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          size={20}
          viewBox="0 0 24 24"
          ariaLabel="添加标记"
        />
      </div>
      {uploadedLength === 0 && (
        <div className={styles[`${classNamePrefix}-item`]} onClick={onAddPoll}>
          <Vote size={20} viewBox="0 0 24 24" ariaLabel="添加投票" />
        </div>
      )}
      {fileDragging && (
        <div className={styles[`${classNamePrefix}-dragging-line`]} />
      )}
      {onlyOne && (
        <DragFile
          uploadedLength={uploadedLength}
          onFileChange={files => {
            onFileChange?.(files);
          }}
          onUploadingChange={uploading => {
            setUploading(uploading);
          }}
        />
      )}
    </div>
  );
};

export default PostEditAction;
