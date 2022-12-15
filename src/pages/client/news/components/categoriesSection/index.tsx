import { Grid } from '@ui';
import { NewsTags } from '@components/news';
import { useUrlQueries } from '@hooks/useUrlQueries';

const CategoriesList = () => {
  const { urlQueries, onSetQueries } = useUrlQueries();
  const handleSetTagValue = (tag) => onSetQueries({ ...urlQueries, tag });
  return (
    <Grid item xs>
      <NewsTags value={urlQueries['tag']} onChange={handleSetTagValue} />
    </Grid>
  );
};

export default CategoriesList;
