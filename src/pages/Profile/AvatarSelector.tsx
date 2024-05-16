import React, { useEffect, useState } from 'react';
import styles from './avatarSelector.module.less';
import { AddAvatar } from '@components/Icon';
import Avatar from '@components/Avatar';
import Popover from '@components/Popover';
import Menu, { MenuItem } from '@components/Popover/Menu';
import { FileUpload } from '@pages/components';

const classNamePrefix = 'avatar-selector';

type AvatarSelectorProps = {
  url?: string;
  onUrlChange?: (url: string) => void;
};

const AvatarSelector: React.FC<AvatarSelectorProps> = ({
  onUrlChange,
  ...rest
}) => {
  const [url, setUrl] = useState<string | undefined>(rest?.url);

  useEffect(() => {
    setUrl(rest.url);
  }, [rest.url]);

  const items: MenuItem[] = [
    {
      label: (
        <FileUpload
          onFileChange={file => {
            const url = file?.[0]?.url;
            setUrl(url);
            onUrlChange?.(url);
          }}
        >
          <div className={styles[`${classNamePrefix}-upload`]}>上传图片</div>
        </FileUpload>
      ),
    },
  ];

  if (url) {
    items.push({
      label: '移除当前头像',
      danger: true,
      onClick() {
        setUrl('');
        onUrlChange?.('');
      },
    });
  }

  return (
    <Popover placement="bottom-end" content={<Menu items={items} />}>
      <div className={styles[`${classNamePrefix}`]}>
        {url ? (
          <Avatar size={52} url={url} />
        ) : (
          <div className={styles[`${classNamePrefix}-empty`]}>
            <AddAvatar fill="currentColor" size={32} viewBox="0 0 30 30" />
          </div>
        )}
      </div>
    </Popover>
  );
};

export default AvatarSelector;
