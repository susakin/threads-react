import React from 'react';
import { PostList, PageContainer, RequestType } from '@pages/components';
import { getUserSavedPost } from '@services/post';
import { uniqueId } from 'lodash';

const Liked: React.FC = () => {
  const fetchRepost: RequestType = async ({ page, pageSize }) => {
    const { code, data, msg }: any = await getUserSavedPost({
      page,
      pageSize,
    });

    return {
      success: code === 200,
      msg,
      data:
        data?.posts?.map((post: any) => {
          return {
            id: uniqueId(),
            posts: [post],
          };
        }) || [],
      total: data?.total,
    };
  };

  return (
    <PageContainer>
      <PostList
        cacheKey="saved"
        request={fetchRepost}
        emptyPlaceholder="你收藏的帖子会显示在这里。"
        indent
        ignoreMutingUser={false}
      />
    </PageContainer>
  );
};

export default Liked;
