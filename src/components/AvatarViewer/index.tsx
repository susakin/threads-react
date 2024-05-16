import React from 'react';
import Mask from '../Mask';
import Avatar from '../Avatar';

type AvatarViewerProps = {
  visible?: boolean;
  onClose?: () => void;
  avatarSize?: number;
  url?: string;
};

const AvatarViewer: React.FC<AvatarViewerProps> = ({
  visible,
  onClose,
  avatarSize = 262,
  url,
}) => {
  return (
    <Mask color="blur" visible={visible} onClose={onClose} renderToBody={true}>
      <Avatar size={avatarSize} url={url} />
    </Mask>
  );
};

export default AvatarViewer;
