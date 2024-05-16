import React from 'react';
import { PostList, PageContainer, RequestType } from '@pages/components';
import { getUserLikedPost } from '@services/post';
import { uniqueId } from 'lodash';

const Liked: React.FC = () => {
  const fetchRepost: RequestType = async ({ page, pageSize }) => {
    const { code, data, msg }: any = await getUserLikedPost({
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
        cacheKey="liked"
        request={fetchRepost}
        emptyPlaceholder="你还没有点赞帖子。"
        indent
        ignoreMutingUser={false}
      />
    </PageContainer>
  );
};

export default Liked;
