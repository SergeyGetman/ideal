import { Comments } from '@components/comments';

export const ArticlesComments = ({ commentList, articleId }) => {
  return <Comments list={commentList} type="article" ownerId={articleId} />;
};
