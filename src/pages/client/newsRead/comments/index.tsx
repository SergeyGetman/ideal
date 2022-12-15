import { Comments } from '@components/comments';

export const NewsComments = ({ commentList, newsId }) => {
  return <Comments list={commentList} type="news" ownerId={newsId} />;
};
