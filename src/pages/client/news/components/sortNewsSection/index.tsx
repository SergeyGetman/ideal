import { Grid } from '@ui';
import { NewsSort, SORT_BY } from '@components/news';
import { useUrlQueries } from '@hooks/useUrlQueries';

const SortCategoriesList = () => {
  const { urlQueries, onSetQueries } = useUrlQueries();
  const handleSetSortValue = (sort) => onSetQueries({ ...urlQueries, sort });

  const sortBy = urlQueries['sort'] || SORT_BY[0].value;
  return (
    <Grid item>
      <NewsSort value={sortBy} onChange={handleSetSortValue} />
    </Grid>
  );
};

export default SortCategoriesList;
