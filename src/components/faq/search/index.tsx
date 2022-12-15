import { t } from 'ttag';
import { Formik, Form } from 'formik';
import { useUrlQueries } from '@hooks/useUrlQueries';
import { TextField } from '@components/form';
import { InputAdornment, Button, SvgIcon } from '@ui';

// colors
import { grey } from '@utils/colors';

// styles
import { useStyles } from './styles';

// icons
import SearchIcon from '@svg_icons/search.svg';

export const Search = () => {
  const classes = useStyles({});
  const { urlQueries, onSetQueries } = useUrlQueries();

  const handleSubmit = ({ search }) => {
    onSetQueries({ search });
  };

  const formikConfig = {
    initialValues: { search: urlQueries['search'] || '' },
    enableReinitialize: true,
    onSubmit: handleSubmit,
  };

  return (
    <Formik {...formikConfig}>
      <Form>
        <TextField
          classes={{
            root: classes.inputWrapper,
            input: classes.input,
          }}
          showError={false}
          showHelper={false}
          placeholder={t`Ask a question...`}
          name="search"
          startAdornment={
            <InputAdornment position="start" className={classes.iconHolder}>
              <SvgIcon size={20} color={grey[500]} glyph={SearchIcon} />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <span className={classes.buttonHolder}>
                <Button type="submit" size="small" color="secondary" fullWidth>
                  {t`Search`}
                </Button>
              </span>
            </InputAdornment>
          }
        />
      </Form>
    </Formik>
  );
};
