import { ArticlesList } from '@components/articles';

export const RecommendArticles = ({ limit, articleList }) => {
  return <ArticlesList showAsBanner={false} limit={limit} list={articleList} />;
};

RecommendArticles.defaultProps = {
  limit: 3,
  articleList: [],
};
