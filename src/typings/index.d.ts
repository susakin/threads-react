export type FriendshipStatus = {
  followedBy?: boolean;
  following?: boolean;
  blocking?: boolean;
  blockedBy?: boolean;
  muting?: boolean;
  isOwn?: boolean;
  outgoingRequest?: boolean;
  outgoingRequestedBy?: boolean;
  isBanned?: boolean;
  restricting?: boolean;
  restrictedBy?: boolean;
};
export type User = {
  biography?: string; //个人描述
  followerCount?: number; //关注人数
  fullName?: string; // 全名
  id: string; // 用户id
  isVerified?: boolean; //
  username?: string; // 用户名
  friendshipStatus: FriendshipStatus;
  profilePicUrl?: string; // 头像
  //共同相关用户
  profileContextFacepileUsers?: Omit<
    User,
    'profileContextFacepileUsers' | 'friendshipStatus'
  >[];
  bioLink?: string; // blog link
  rank?: number;
  createdAt?: number;
  followingCount?: number;
  followerCount?: number;
  rank?: number;
  location?: string;
  isPrivate?: boolean;
  mentionAuth?: 'everyone' | 'following' | 'nobody';
};

export type MediaDimensions = {
  mediaHeight: number;
  mediaWidth: number;
};

export type Media = {
  url: string;
  tempUrl?: string;
  type: 'image' | 'video';
  accessibilityCaption?: string;
} & MediaDimensions;

export type ReplyAuth = 'everyone' | 'followedBy' | 'mention';

export type Tally = {
  id?: string;
  text: string;
  count?: number;
  voteUserAvatar?: string[];
};

export type Poll = {
  id?: string;
  uid?: string;
  tallies: Tally[];
  expiresAt?: number;
  finished?: boolean;
  viewerIsOwner?: boolean;
  viewerCanVote?: boolean;
  viewerVote?: boolean;
  createdAt?: number;
};

export type Post = {
  caption?: string;
  user: User;
  replyUsersProfilePicUrl?: string[];
  likeCount?: number;
  commentCount?: number;
  repostCount?: number;
  medias?: Media[];
  id: string;
  isLikedByViewer?: boolean;
  isHiddenByViewer?: boolean;
  isViewedByViewer?: boolean;
  quotedPost?: Post;
  quotedPostId?: string;
  isRepostedByViewer?: boolean;
  isSavedByViewer?: boolean;
  lineType?: 'line' | 'squiggle' | 'none';
  captionIsEdited?: boolean;
  canReply?: boolean;
  isPinnedToProfile?: boolean; // 是否置顶
  likeAndViewCountsDisabled?: boolean;
  code: string; //断链
  createdAt: number;
  caption?: string;
  replyToPostId?: string;
  replyToUid?: string;
  replyToUser?: User;
  uid: string;
  isUnavailable?: boolean;
  replyAuth?: ReplyAuth;
  isPinnedToComment?: boolean;
  viewCount?: number;
  pollId?: string;
  poll?: Poll;
  textEntities?: TextEntity[];
  isFirst?: boolean;
  repostedBy?: {
    user?: User;
    createdAt?: number;
  };
};

export type TextEntity = {
  type: 'tag' | 'mention';
  id?: string;
  displayText: string;
  blockOffset: number;
  blockIndex: number;
  offset?: number;
};

export type CombinedPost = {
  id: string;
  posts?: Post[];
};
