import { User } from '@typings/index';
import { PostHeaderActionProps } from './PostHeaderAction';
import { useFetch } from '@hooks/useFetch';
import { block, unblock } from '@services/profile';
import { Toast } from '@components/index';
import Modal from '@components/Modal';

type UseBlockProps = {
  user?: User;
} & Pick<PostHeaderActionProps, 'onUserFriendshipStatusUpdate'>;

export const useBlock = ({
  user,
  onUserFriendshipStatusUpdate,
}: UseBlockProps) => {
  const isBlocking = user?.friendshipStatus?.blocking;

  const { run: _block } = useFetch(block, {
    manual: true,
    onSuccess() {
      Toast.show('已拉黑');
      onUserFriendshipStatusUpdate?.(user?.id as string, { blocking: true });
    },
  });

  const { run: _unblock, loading: unblockLoading } = useFetch(unblock, {
    manual: true,
    onSuccess() {
      Toast.show('已取消拉黑');
      onUserFriendshipStatusUpdate?.(user?.id as string, { blocking: false });
    },
  });

  const confirmText = `${isBlocking ? '取消' : ''}`;

  const item = {
    label: `${confirmText}拉黑`,
    danger: true,
    onClick() {
      Modal.confirm({
        title: `${confirmText}拉黑${user?.username}？`,
        content: isBlocking
          ? `${user?.username}及其可能拥有的其他帐户将可以查看你在 Threads 中的主页和内容，但不会收到自己已被取消拉黑的通知。`
          : `${user?.username}将无法在 Threads上找到你的主页或内容。无人能看到 TA 对你帖子的回复，TA 也不会收到自己被你拉黑的通知。`,
        okText: `${confirmText}拉黑`,
        okType: isBlocking ? 'default' : 'danger',
        onOk() {
          !isBlocking ? _block(user?.id as any) : _unblock(user?.id as string);
        },
      });
    },
  };

  return { item, unblockLoading };
};
