import React, { useEffect } from 'react';
import PostActivity, { Activities } from './PostActivity';
import Modal from '@components/Modal/Modal';
import useViewport from '@hooks/useViewport';
import Popup from '@components/Popup';
import { Post } from '@typings/index';
import { postActivitySummary } from '@services/activity';
import { useFetch } from '@hooks/useFetch';

type PostActivityModalProps = {
  visible?: boolean;
  onClose?: () => void;
  post?: Post;
};

const PostActivityModal: React.FC<PostActivityModalProps> = ({
  visible,
  onClose,
  post,
}) => {
  const { viewportWidth } = useViewport();

  const Container = viewportWidth < 700 ? Popup : Modal;

  const { loading, data, run } = useFetch<Activities, any>(
    postActivitySummary,
    {
      manual: true,
    },
  );

  useEffect(() => {
    visible && run(post?.code as string, { activityCount: 20 });
  }, [visible]);

  return (
    <Container visible={visible} onClose={onClose} loading={loading}>
      <PostActivity post={post} activities={data?.data} onNavigate={onClose} />
    </Container>
  );
};

export default PostActivityModal;
