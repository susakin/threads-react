import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Modal from '@components/Modal/Modal';
import { ScrollInModal, Toast } from '@components/index';
import { default as ModalFn } from '@components/Modal';
import PostEdit from './PostEdit';
import styles from './index.module.less';
import useViewport from '@hooks/useViewport';
import { AuthContext } from '@context/AuthProvider';
import { uniqueId, cloneDeep } from 'lodash';
import { createPost, updatePost } from '@services/post';
import { Media, Post, ReplyAuth, TextEntity } from '@typings/index';
import { useCountDown } from 'ahooks';
import { useNavigate } from 'react-router-dom';
import { OnFollowingChange } from '../FollowButton';
import AccessibilityModal from './AccessibilityModal';

type PostEditModalProps = {
  visible?: boolean;
  onClose?: () => void;
  replyPost?: Post;
  title?: React.ReactNode;
  quotedPost?: Post;
  editPost?: Post;
  textEntity?: TextEntity;
  onUpdate?: (
    id: string,
    updateFiled: Pick<
      Post,
      'caption' | 'medias' | 'captionIsEdited' | 'textEntities'
    >,
  ) => void;
  onSuccess?: (firstPost: Post) => void;
} & OnFollowingChange;

export type EditPost = Partial<Post>;

type UploadPostProps = {
  posts?: EditPost[];
  replyToPostId?: string;
  retryCount?: number;
  onSuccess?: (postCode: string, firstPost: Post) => void;
  onError?: (msg: string) => void;
  firstPostCode?: string;
  firstPost?: Post;
};

type UseCountDownProps = {
  leftTime: number;
  onEnd?: () => void;
};

const UseCountDown: React.FC<UseCountDownProps> = ({ leftTime, onEnd }) => {
  useCountDown({
    leftTime,
    onEnd,
  });
  return null;
};

const classNamePrefix = 'post-edit-modal';

const PostEditModal: React.FC<PostEditModalProps> = ({
  visible,
  onClose,
  replyPost,
  title,
  quotedPost,
  editPost,
  onUpdate,
  onFollowingChange,
  textEntity,
  onSuccess,
}) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [editPosts, setEditPosts] = useState<EditPost[]>(() => {
    return [
      editPost
        ? editPost
        : {
            caption: textEntity ? `${textEntity.displayText} ` : '',
            id: uniqueId(),
            quotedPost,
          },
    ];
  });
  const { viewportWidth } = useViewport();
  const { state } = useContext(AuthContext);
  const now = Date.now();
  const editCountDown = 5 * 60 * 1000;
  const editTimeGap = editCountDown - (now - (editPost?.createdAt || 0));
  const [editTimeUp, setEditTimeUp] = useState<boolean>(false);
  const navigate = useNavigate();
  const replyAuthRef = useRef<ReplyAuth>('everyone');

  const canSubmit =
    editPosts?.length !== 0 &&
    editPosts?.every(
      post =>
        post.caption?.trim()?.length ||
        post.medias?.length ||
        (post?.poll?.tallies?.length || 0) >= 2,
    );

  useEffect(() => {
    const handleBeforeUnload = (event: Event) => {
      if (canSubmit) {
        event.preventDefault();
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [canSubmit]);

  const inSmallScreen = viewportWidth <= 699;

  const uploadPost = async ({
    posts,
    replyToPostId,
    retryCount = 3, // 添加重试次数参数，默认为3次
    onSuccess,
    onError,
    firstPost,
    firstPostCode,
  }: UploadPostProps) => {
    const _posts = cloneDeep(posts);
    const post = posts?.shift();
    try {
      const isEdit = editPost && _posts?.length === editPosts.length;
      const tallies = post?.poll?.tallies?.filter?.(
        item => item?.text?.trim?.()?.length,
      );
      const { code, data, msg }: any = await (isEdit ? updatePost : createPost)(
        {
          ...post,
          replyToPostId,
          quotedPostId: post?.quotedPost?.id,
          replyAuth: replyAuthRef.current,
          medias: post?.medias?.map((item: any) => {
            delete item.tempUrl;
            return item;
          }),
          caption: post?.caption?.replace(
            /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            '',
          ),
          poll: (tallies?.length || 0) >= 2 ? { tallies } : null,
        },
      );
      if (code === 200) {
        isEdit &&
          onUpdate?.(post?.id as string, {
            caption: post?.caption,
            medias: post?.medias,
            captionIsEdited: true,
            textEntities: post?.textEntities,
          }); //编辑成功之后抛出事件
        if (!firstPostCode) {
          firstPostCode = data?.code;
          firstPost = data as any;
        }
        if (posts?.length) {
          await uploadPost({
            posts,
            replyToPostId: data?.id,
            retryCount,
            onSuccess,
            onError,
            firstPostCode,
          });
        } else {
          onSuccess?.(firstPostCode as string, firstPost as Post);
        }
      } else if (retryCount > 0) {
        await uploadPost({
          posts: _posts,
          replyToPostId,
          retryCount: retryCount - 1,
          onSuccess,
          onError,
        });
      } else {
        onError?.(msg);
      }
    } catch (e: any) {
      if (retryCount > 0) {
        await uploadPost({
          posts: _posts,
          replyToPostId,
          retryCount: retryCount - 1,
          onSuccess,
          onError,
        });
      } else {
        onError?.(e?.response?.data?.msg || e?.message);
      }
    }
  };

  async function onSubmit() {
    setIsUploading(true);
    onClose?.();
    const toastRef = await Toast.show({
      duration: 0,
      content: editPost ? '正在编辑' : '正在发布...',
      icon: 'spin',
      hasMinWith: true,
    });

    await uploadPost({
      posts: [...editPosts],
      replyToPostId: replyPost?.id,
      onError(content) {
        setIsUploading(false);
        toastRef?.update?.({
          duration: 5000,
          hasMinWith: true,
          content,
          icon: undefined,
        });
      },
      onSuccess(postCode, post) {
        setIsUploading(false);
        onSuccess?.(post);
        toastRef?.update?.({
          duration: 5000,
          icon: 'done',
          action: '查看',
          onActionClick() {
            navigate(`/post/${postCode}`);
            toastRef?.close?.();
          },
          content: editPost ? '已编辑' : '已发布',
          hasMinWith: true,
        });
      },
    });
  }

  useLayoutEffect(() => {
    if (visible) {
      !isUploading &&
        setEditPosts([
          editPost
            ? editPost
            : {
                caption: textEntity ? `${textEntity.displayText} ` : '',
                id: uniqueId(),
                quotedPost,
                textEntities: textEntity
                  ? [
                      {
                        type: textEntity?.type,
                        displayText: textEntity.displayText,
                        blockOffset: 0,
                        blockIndex: 0,
                      },
                    ]
                  : [],
              },
        ]);
    } else {
      setEditPosts([]);
    }
  }, [visible]);

  const [_visible, setVisible] = useState<boolean>(false);
  const [media, setMedia] = useState<Media>();
  const idRef = useRef<string>();
  const postEdit = (
    <PostEdit
      onFollowingChange={onFollowingChange}
      editing={!!editPost}
      replyPost={replyPost}
      user={state.user}
      editPosts={editPosts}
      onReplyAuthChange={replyAuth => {
        replyAuthRef.current = replyAuth;
      }}
      onAccessibilityClick={(id, media) => {
        setVisible(true);
        setMedia(media);
        idRef.current = id;
      }}
      onUpdatePost={(post, id) => {
        setEditPosts(v => {
          return v.map(k => {
            if (k.id === id) {
              return {
                ...k,
                ...post,
              };
            }
            return k;
          });
        });
      }}
      onDeletePost={id => {
        setEditPosts(v => {
          return v.filter(m => id !== m?.id);
        });
      }}
      onAddPost={() => {
        setEditPosts(v => [...v, { caption: '', id: uniqueId() }]);
      }}
      canSubmit={!!canSubmit && !editTimeUp}
      onSubmit={onSubmit}
      isUploading={isUploading}
    />
  );

  const onMaskClick = () => {
    if (!canSubmit) {
      return onClose?.();
    }
    ModalFn.confirm({
      title: '放弃串文？',
      okText: '放弃',
      okType: 'danger',
      onOk() {
        onClose?.();
      },
    });
  };

  if (visible && !state.user) {
    Toast.show('Not Allowed');
    onClose?.();
    return null;
  }

  return (
    <>
      {!inSmallScreen ? (
        <Modal
          onClosePlaceholderClick={onMaskClick}
          visible={visible && !inSmallScreen}
          onClose={onClose}
          animationType="scale-out"
          hasContentStyle={false}
        >
          <div>
            <div className={styles[`${classNamePrefix}-title`]}>{title}</div>
            <div className={styles[`${classNamePrefix}`]}>
              {!inSmallScreen ? postEdit : null}
            </div>
          </div>
        </Modal>
      ) : (
        <ScrollInModal
          title={title}
          okText={null}
          visible={visible}
          onCancel={() => {
            if (!canSubmit) {
              return onClose?.();
            }
            ModalFn.confirm({
              title: '放弃串文？',
              okText: '放弃',
              okType: 'danger',
              onOk() {
                onClose?.();
              },
            });
          }}
        >
          {postEdit}
        </ScrollInModal>
      )}
      <UseCountDown
        leftTime={editTimeGap > 0 && visible ? editTimeGap : 0}
        onEnd={() => {
          setEditTimeUp(true);
          ModalFn.confirm({
            title: '编辑内容的 5 分钟时限已过',
            okText: '确定',
            okType: 'default',
            cancelText: null,
          });
        }}
      />
      <AccessibilityModal
        media={media}
        visible={_visible}
        onUpdateAccessibilityCaption={accessibilityCaption => {
          setEditPosts(v => {
            return v.map(k => {
              if (k.id === idRef.current) {
                return {
                  ...k,
                  medias: k.medias?.map(item => {
                    if (
                      item.url === media?.url ||
                      item.tempUrl === media?.tempUrl
                    ) {
                      item.accessibilityCaption = accessibilityCaption;
                    }
                    return item;
                  }),
                };
              }
              return k;
            });
          });
        }}
        onClose={() => {
          setMedia(undefined);
          setVisible(false);
        }}
      />
    </>
  );
};

export default PostEditModal;
