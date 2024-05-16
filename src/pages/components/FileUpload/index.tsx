import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from '@components/Popover/Wrapper';
import styles from './index.module.less';
import Toast from '@components/Toast';
import { Media } from '@typings/index';
import { upload } from '@services/upload';

type FileUploadProps = {
  multiple?: boolean;
  children?: React.ReactNode;
};

const classNamePrefix = 'file-upload';

export type useFileUploadProps = {
  uploadedLength?: number;
  accept?: string;
  maxSize?: number;
  maxLength?: number;
  onFileChange?: (files: Media[]) => void;
  onUploadingChange?: (loading: boolean) => void;
};

export const useFileUpload = ({
  maxSize,
  onFileChange,
  onUploadingChange,
  uploadedLength = 0,
  maxLength = 10,
  accept = 'image/jpeg,image/png,video/mp4,video/quicktime',
}: useFileUploadProps) => {
  const fileSizeLimit = maxSize ? maxSize * 1024 * 1024 : null;
  const [uploading, setUploading] = useState<boolean>(false);

  useEffect(() => {
    onUploadingChange?.(uploading);
  }, [uploading]);

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await upload(formData);
    if (res.code === 200) {
      const { url, width, height, type } = res.data;
      return {
        url,
        mediaHeight: height,
        mediaWidth: width,
        type,
        tempUrl: URL.createObjectURL(file),
      };
    } else {
      Toast.show(res.msg);
    }
  };

  function checkVideoDuration(file: File, maxDuration: number) {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.src = URL.createObjectURL(file);
      video.addEventListener('loadedmetadata', function () {
        if (this.duration > maxDuration) {
          reject(`视频过长。试试使用更短的片段。`);
        } else {
          resolve(file);
        }
      });
    });
  }

  const handleFileChange = async (files: File[]) => {
    const remainingLength = maxLength - uploadedLength;
    if (files?.length > remainingLength) {
      Toast.show(`你最多只能添加${maxLength}个附件。`);
      files = files.slice(0, remainingLength);
    }
    setUploading(true);
    try {
      const _files: any = [];
      for (const file of files) {
        if (fileSizeLimit && file.size > fileSizeLimit) {
          Toast.show(`File ${file.name} exceeds the maximum size limit.`);
        } else {
          const acceptedTypes = accept.split(',');
          if (!acceptedTypes.includes(file.type)) {
            Toast.show(
              `Unsupported file type for ${file.name}. Only images and videos are allowed.`,
            );
          } else {
            if (file.type.startsWith('video/')) {
              try {
                await checkVideoDuration(file, 300);
                _files.push(file);
              } catch (error: any) {
                Toast.show(error);
              }
            } else {
              _files.push(file);
            }
          }
        }
      }

      const processedUploads = await Promise.allSettled(_files.map(uploadFile));
      const successfulUploads: any = [];
      const failedUploads: any = [];

      processedUploads.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          successfulUploads.push(result.value);
        } else {
          failedUploads.push(files[index].name);
        }
      });

      if (failedUploads.length > 0) {
        Toast.show(`以下文件上传失败：${failedUploads.join('、')}`);
      }

      onFileChange?.(successfulUploads);
    } finally {
      setUploading(false);
    }
  };

  return { handleFileChange, uploading };
};

const FileUpload: React.FC<FileUploadProps & useFileUploadProps> = ({
  multiple = true,
  children,
  accept = 'image/jpeg,image/png,video/mp4,video/quicktime',
  uploadedLength,
  maxLength = 10,
  ...rest
}) => {
  const targetRef = useRef<Wrapper>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { uploading, handleFileChange } = useFileUpload({
    accept,
    uploadedLength,
    maxLength,
    ...rest,
  });
  useEffect(() => {
    const element = targetRef.current?.element;
    const input = inputRef?.current;
    const onClick = () => {
      if (input) {
        if ((uploadedLength && uploadedLength >= maxLength) || uploading)
          return;
        input?.click();
        input.value = '';
      }
    };
    element?.addEventListener('click', onClick);
    return () => {
      element?.removeEventListener('click', onClick);
    };
  }, [targetRef.current, uploadedLength, maxLength, uploading]);

  return (
    <>
      <input
        className={styles[`${classNamePrefix}`]}
        type="file"
        ref={inputRef}
        onChange={event => {
          const files = Array.from(event.target.files || []);
          handleFileChange?.(files);
        }}
        multiple={multiple}
        accept={accept}
      />
      <Wrapper ref={targetRef}>{children}</Wrapper>
    </>
  );
};

export default FileUpload;
