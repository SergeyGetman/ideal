import { t } from 'ttag';
import { Formik, Form } from 'formik';
import { TextField } from '@components/form';
import { Grid, Box, InputAdornment, Button, Link } from '@ui';
import { sendAxiosPost } from '@utils/sendAxiosPost';
import { SEND_NEWS_COMMENT_API_URL, SEND_ARTICLE_COMMENT_API_URL } from '@utils/constants';
import { useMutation } from 'react-query';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { breakpoints } from '@utils/styles';

// styles
import { useStyles } from './styles';

// images
import UserPng from '../images/user.png';
import { notify } from '@utils/notify';
import { useMemo } from 'react';

export const CommentsForm = ({ user, parentId, onClose, type, ownerId }) => {
  const classes = useStyles({});
  const isDesktop = useMediaQuery(`(min-width:${breakpoints['lg']}px)`);

  let SEND_URL = '';
  if (type === 'news') SEND_URL = SEND_NEWS_COMMENT_API_URL;
  if (type === 'article') SEND_URL = SEND_ARTICLE_COMMENT_API_URL;

  const { mutateAsync: sendCommentMutation } = useMutation((data) => sendAxiosPost(SEND_URL, data));

  const handleSubmit = (values, { resetForm }) => {
    if (values.text && SEND_URL) {
      const token = localStorage.getItem('token');
      sendCommentMutation(
        // @ts-ignore
        { text: values.text, parentId, ownerId, token },
        {
          onSuccess: ({ data }) => {
            if (!!data?.data?.save) {
              notify(t`Your comment saved successfully! Will be shown after moderator checked.`, { type: 'success' });
              resetForm();
            }
          },
          onError: () => {
            //
          },
        },
      );
    }
  };

  const formikConfig = useMemo(
    () => ({
      initialValues: { text: '' },
      enableReinitialize: true,
      onSubmit: handleSubmit,
    }),
    [handleSubmit],
  );

  if (!user) {
    return null;
  }
  return (
    <Grid container spacing={4} className={classes.root}>
      {isDesktop && (
        <Grid item>
          <div className={classes.imageHolder}>
            <img className={classes.image} src={user.image || UserPng} alt={user.name} />
          </div>
        </Grid>
      )}
      <Grid item xs>
        <Box sx={{ mb: '8px' }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              <b>{t`Your comment`}</b>
            </Grid>
            {!!onClose && (
              <Grid item>
                <Link color="secondary" onClick={onClose} className={classes.closeLink}>
                  {t`Cancel`}
                </Link>
              </Grid>
            )}
          </Grid>
        </Box>
        <Formik {...formikConfig}>
          <Form>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  showError={false}
                  showHelper={false}
                  placeholder={t`Write a comment...`}
                  name="text"
                  endAdornment={
                    isDesktop && (
                      <InputAdornment position="end">
                        <span className={classes.buttonHolder}>
                          <Button type="submit" size="small" color="primary" fullWidth>
                            {t`Submit`}
                          </Button>
                        </span>
                      </InputAdornment>
                    )
                  }
                />
              </Grid>
              {!isDesktop && (
                <Grid item>
                  <Button type="submit" size="small" color="primary" fullWidth>
                    {t`Submit`}
                  </Button>
                </Grid>
              )}
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

CommentsForm.defaultProps = {
  parentId: null,
  onClose: null,
  type: '',
  ownerId: 0,
};
