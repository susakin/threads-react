import React from 'react';
import { User } from '@typings/index';
import { PostHeaderActionProps } from './PostHeaderAction';
import { useFetch } from '@hooks/useFetch';
import { Toast } from '@components/index';
import { mute, unmute } from '@services/post';
import Mute from '@components/Icon/Mute';
import Muted from '@components/Icon/Muted';

export type UseMuteProps = {
  user?: User;
} & Pick<PostHeaderActionProps, 'onUserFriendshipStatusUpdate'>;

export const useMute = ({
  user,
  onUserFriendshipStatusUpdate,
}: UseMuteProps) => {
  const friendshipStatus = user?.friendshipStatus;
  const muting = friendshipStatus?.muting;
  const { run: _mute } = useFetch(mute, {
    manual: true,
    onSuccess() {
      Toast.show('已不看');
      onUserFriendshipStatusUpdate?.(user?.id as string, { muting: true });
    },
  });

  const { run: _unmute } = useFetch(unmute, {
    manual: true,
    onSuccess() {
      Toast.show('已重新看');
      onUserFriendshipStatusUpdate?.(user?.id as string, { muting: false });
    },
  });

  const item = {
    icon: muting ? (
      <Mute viewBox="0 0 20 20" size={20} />
    ) : (
      <Muted viewBox="0 0 20 20" size={20} />
    ),
    label: `${muting ? '重新看' : '不看'}`,
    onClick() {
      muting ? _unmute(user?.id as string) : _mute(user?.id as string);
    },
  };

  return { item };
};
