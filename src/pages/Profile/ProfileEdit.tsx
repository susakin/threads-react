import React, {
  useMemo,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';
import cs from 'classnames';
import { Button, Switch } from '@components/index';
import { Lock } from '@components/Icon';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './profileEdit.module.less';
import useViewport from '@hooks/useViewport';
import { User } from '@typings/index';
import * as linkify from 'linkifyjs';
import Toast from '@components/Toast';
import { useFetch } from '@hooks/useFetch';
import { updateUser } from '@services/profile';
import AvatarSelector from './AvatarSelector';
import Modal from '@components/Modal';

const classNamePrefix = 'profile-edit';

type ProfileEditItemProps = {
  label?: React.ReactNode;
  labelAction?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

const ProfileEditItem: React.FC<ProfileEditItemProps> = ({
  className,
  label,
  children,
  labelAction,
}) => {
  const classNamePrefix = 'profile-edit-item';
  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      <div className={styles[`${classNamePrefix}-label`]}>
        <div className={styles[`${classNamePrefix}-label-inner`]}>{label}</div>
        <div className={styles[`${classNamePrefix}-label-action`]}>
          {labelAction}
        </div>
      </div>
      {!!children && (
        <div className={styles[`${classNamePrefix}-inner`]}>{children}</div>
      )}
    </div>
  );
};

export type ProfileEditRef = {
  submit?: () => void;
};

type ProfileEditProps = {
  user?: User;
  onUserFieldUpdate?: (user: Partial<User>) => void;
  onSubmitLoading?: (loading: boolean) => void;
};

const ProfileEdit = forwardRef<ProfileEditRef, ProfileEditProps>(
  ({ user, onUserFieldUpdate, onSubmitLoading }, ref) => {
    const { viewportWidth } = useViewport();
    const inSamllScreen = viewportWidth < 700;
    const { fullName, username, profilePicUrl, bioLink, biography, isPrivate } =
      user || {};
    const [updateFields, setUpdateFields] =
      useState<
        Pick<User, 'bioLink' | 'biography' | 'profilePicUrl' | 'isPrivate'>
      >();

    useEffect(() => {
      setUpdateFields({
        profilePicUrl,
        bioLink,
        biography,
        isPrivate,
      });
    }, []);

    const { run, loading } = useFetch(updateUser, {
      manual: true,
      onSuccess() {
        onUserFieldUpdate?.(updateFields as any);
      },
    });

    useEffect(() => {
      onSubmitLoading?.(loading);
    }, [loading]);

    const profileEditItems = useMemo(() => {
      return [
        {
          label: '姓名',
          children: (
            <div className={styles[`${classNamePrefix}-inner-name`]}>
              <Lock
                className={styles[`${classNamePrefix}-inner-name-icon`]}
                size={14}
                viewBox="0 0 14 21"
              />
              {fullName}(@{username})
            </div>
          ),
          suffix: (
            <AvatarSelector
              url={updateFields?.profilePicUrl}
              onUrlChange={profilePicUrl => {
                setUpdateFields(v => ({
                  ...v,
                  profilePicUrl,
                }));
              }}
            />
          ),
        },
        {
          label: '个性签名',
          children: (
            <TextareaAutosize
              placeholder="留下个性签名"
              value={updateFields?.biography}
              onChange={e => {
                setUpdateFields(v => ({
                  ...v,
                  biography: e.target.value?.trim(),
                }));
              }}
              maxLength={150}
              className={styles[`${classNamePrefix}-inner-textarea`]}
            />
          ),
        },
        {
          label: '链接',
          children: (
            <TextareaAutosize
              placeholder="https://www.example.com"
              maxLength={240}
              value={updateFields?.bioLink}
              onChange={e => {
                setUpdateFields(v => ({
                  ...v,
                  bioLink: e.target.value?.trim(),
                }));
              }}
              className={cs(
                styles[`${classNamePrefix}-inner-textarea`],
                styles[`${classNamePrefix}-inner-link`],
              )}
            />
          ),
        },
        {
          label: '私密主页',
          labelAction: (
            <Switch
              checked={updateFields?.isPrivate}
              onChange={isPrivate => {
                Modal.confirm({
                  title: isPrivate ? '切换为私密主页？' : '切换为公开主页？',
                  content: isPrivate
                    ? '只有批准的粉丝才能查看你的内容并与之互动。'
                    : 'Threads 内外的任何人都能看到你的内容并与之互动。',
                  onOk() {
                    setUpdateFields(v => ({
                      ...v,
                      isPrivate,
                    }));
                  },
                });
              }}
            />
          ),
        },
      ];
    }, [user, updateFields]);

    function onSubmit() {
      const { bioLink } = updateFields || {};
      if (updateFields?.bioLink) {
        const isValid = linkify.test(bioLink as string, 'url');
        if (!isValid) {
          Toast.show('请输入有效网址');
          return;
        }
      }
      run(updateFields as any);
    }

    useImperativeHandle(ref, () => {
      return {
        submit: onSubmit,
      };
    });

    return (
      <div className={styles[`${classNamePrefix}`]}>
        {profileEditItems.map(
          ({ label, children, suffix, labelAction }, index) => {
            return (
              <div className={styles[`${classNamePrefix}-inner`]} key={index}>
                <ProfileEditItem
                  label={label}
                  labelAction={labelAction}
                  className={cs({
                    [styles[`${classNamePrefix}-inner-last`]]:
                      index === profileEditItems.length - 1,
                  })}
                >
                  {children}
                </ProfileEditItem>
                {suffix}
              </div>
            );
          },
        )}
        {!inSamllScreen && (
          <Button
            type="primary"
            size="large"
            onClick={onSubmit}
            loading={loading}
          >
            完成
          </Button>
        )}
      </div>
    );
  },
);

ProfileEdit.displayName = 'ProfileEdit';

export default ProfileEdit;
