import React, { useState } from 'react';
import styles from './dragFile.module.less';
import { DragFile as DragFileIcon } from '@components/Icon';
import { useFileUploadProps, useFileUpload } from '../FileUpload';
import { useDrop } from 'ahooks';

const classNamePrefix = 'drag-file';

const DragFile: React.FC<useFileUploadProps> = props => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { handleFileChange } = useFileUpload(props);

  useDrop(() => window as any, {
    onFiles: files => {
      setIsHovering(false);
      handleFileChange(files);
    },
    onDragEnter: () => setIsHovering(true),
    onDragLeave: () => setIsHovering(false),
  });
  return (
    <>
      {isHovering && (
        <div className={styles[`${classNamePrefix}`]}>
          <DragFileIcon viewBox="0 0 24 24" size={84} />
        </div>
      )}
    </>
  );
};

export default DragFile;
