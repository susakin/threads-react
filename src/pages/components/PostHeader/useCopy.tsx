import { Link } from '@components/Icon';
import { copyText } from '@utils/clipboard';
import React from 'react';

export type UseCopyProps = {
  postCode?: string;
};

export const useCopy = ({ postCode }: UseCopyProps) => {
  const postUrl = `${window.location.origin}/post/${postCode}`;

  const item = {
    label: '复制链接',
    onClick() {
      copyText(postUrl);
    },
    icon: <Link viewBox="0 0 18 18" size={21} fill="transparent" />,
  };
  return { item };
};
