import { NewsList } from '@components/news';

export const RecommendNews = ({ limit, newsList }) => {
  return <NewsList gridLayout={false} limit={limit} list={newsList} />;
};

RecommendNews.defaultProps = {
  limit: 4,
  newsList: [],
};
