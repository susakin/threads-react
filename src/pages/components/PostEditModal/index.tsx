import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Modal from '@components/Modal/Modal';
import { default as ModalFn } from '@components/Modal';
import styles from './index.module.less';
import useViewport from '@hooks/useViewport';
import { AuthContext } from '@context/AuthProvider';
import { uniqueId } from 'lodash';
import { Media, Post, TextEntity } from '@typings/index';
import AccessibilityPanel from './AccessibilityPanel';
import { useLogin } from '@pages/components/Login/LoginModal';
import { Mask } from '@components/index';
import { ConfirmPanel } from '@components/Modal/ScrollInModal';
import Accessibility from './Accessibility';
import PostEditForm, { PostEditFormProps } from './PostEditForm';
import MutilPageViewContainer, {
  MutilPageViewContainerRef,
} from '@components/MutilPageViewContainer';

type PostEditModalProps = {
  visible?: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  textEntity?: TextEntity;
  onSuccess?: (post: Post) => void;
  quotedPost?: Post;
} & Pick<
  PostEditFormProps,
  'onUpdate' | 'replyPost' | 'editPost' | 'onSuccess' | 'onFollowingChange'
>;

export type EditPost = Partial<Post>;

const classNamePrefix = 'post-edit-modal';

const PostEditModal: React.FC<PostEditModalProps> = ({
  visible,
  onClose,
  title,
  quotedPost,
  editPost,
  textEntity,
  onSuccess,
  ...rest
}) => {
  const { viewportWidth } = useViewport();
  const { state } = useContext(AuthContext);
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

  useLayoutEffect(() => {
    if (visible) {
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

  const [media, setMedia] = useState<Media>();
  const idRef = useRef<string>();
  const mutilPageContainerRef = useRef<MutilPageViewContainerRef>(null);
  const smallPageContainerRef = useRef<MutilPageViewContainerRef>(null);

  const postEditForm = (
    <PostEditForm
      onSubmit={onClose}
      canSubmit={canSubmit}
      onAccessibilityClick={(id, media) => {
        setMedia(media);
        idRef.current = id;
        (inSmallScreen
          ? smallPageContainerRef
          : mutilPageContainerRef
        ).current?.swipeNext();
      }}
      user={state.user}
      editPosts={editPosts}
      active={visible}
      onSuccess={onSuccess}
      editPost={editPost}
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
      {...rest}
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
  const { showLogin } = useLogin();

  if (visible && !state.user) {
    showLogin();
    onClose?.();
    return null;
  }

  const accessibilityProps = {
    media,
    onClose() {
      (inSmallScreen ? smallPageContainerRef : mutilPageContainerRef).current
        ?.swipePrev()
        .then(() => {
          setMedia(undefined);
        });
    },
    onUpdateAccessibilityCaption(accessibilityCaption: string) {
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
    },
  };

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
            <MutilPageViewContainer ref={mutilPageContainerRef}>
              <MutilPageViewContainer.Item>
                <div className={styles[`${classNamePrefix}-title`]}>
                  {title}
                </div>
                <div className={styles[`${classNamePrefix}`]}>
                  {!inSmallScreen ? postEditForm : null}
                </div>
              </MutilPageViewContainer.Item>
              <MutilPageViewContainer.Item>
                <AccessibilityPanel {...accessibilityProps} />
              </MutilPageViewContainer.Item>
            </MutilPageViewContainer>
          </div>
        </Modal>
      ) : (
        <Mask
          visible={visible}
          hasClose={false}
          color="rgba(0,0,0,.7)"
          renderToBody
          onClose={() => {
            onClose?.();
          }}
        >
          <div className={styles[`${classNamePrefix}-small`]}>
            <MutilPageViewContainer ref={smallPageContainerRef}>
              <MutilPageViewContainer.Item>
                <ConfirmPanel
                  title={title}
                  okText={null}
                  animate={false}
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
                  {postEditForm}
                </ConfirmPanel>
              </MutilPageViewContainer.Item>
              <MutilPageViewContainer.Item>
                <ConfirmPanel
                  title={'添加替代文字'}
                  okText={null}
                  animate={false}
                  onCancel={() => {
                    smallPageContainerRef?.current?.swipePrev();
                  }}
                >
                  <Accessibility {...accessibilityProps} />
                </ConfirmPanel>
              </MutilPageViewContainer.Item>
            </MutilPageViewContainer>
          </div>
        </Mask>
      )}
    </>
  );
};

export default PostEditModal;
