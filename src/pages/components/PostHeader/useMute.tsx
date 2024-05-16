import { User } from '@typings/index';
import { PostHeaderActionProps } from './PostHeaderAction';
import { useFetch } from '@hooks/useFetch';
import { Toast } from '@components/index';
import { mute, unmute } from '@services/post';

export type UseMuteProps = {
  user?: User;
} & Pick<PostHeaderActionProps, 'onUserFriendshipStatusUpdate'>;

export const useMute = ({
  user,
  onUserFriendshipStatusUpdate,
}: UseMuteProps) => {
  const friendshipStatus = user?.friendshipStatus;

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
    label: `${friendshipStatus?.muting ? '重新看' : '不看'}`,
    onClick() {
      friendshipStatus?.muting
        ? _unmute(user?.id as string)
        : _mute(user?.id as string);
    },
  };

  return { item };
};
