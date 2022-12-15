import { useState } from 'react';
import { t } from 'ttag';
import { flatList } from '@utils/common';
import { useAuthContext } from '@contexts/authContext';
import { Grid, Text, Pseudolink, Collapse, SvgIcon } from '@ui';
import { CommentsList } from './list';
import { CommentsForm } from './form';

// styles
import { useStyles } from './styles';

// icons
import UpIcon from '@svg_icons/up.svg';
import DownIcon from '@svg_icons/down.svg';
import CommentsIcon from '@svg_icons/comment-fill.svg';

export const Comments = ({ list, type, ownerId }) => {
  const classes = useStyles({});
  const [showComments, toggleComments] = useState(false);
  const { user } = useAuthContext();

  const handleToggle = () => toggleComments(!showComments);

  const flatCommentsLength = flatList(list, 'id', 'children', null)?.length;

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Grid container alignItems="center" spacing={5}>
          <Grid item xs>
            <Grid container alignItems="flex-end" spacing={3} wrap="nowrap">
              <Grid item>
                <Text variant="h3">{t`Comments`}</Text>
              </Grid>
              <Grid item>
                <SvgIcon size={28} color="#40CE8A" glyph={CommentsIcon} />
              </Grid>
              {!!flatCommentsLength && (
                <Grid item>
                  <Text color="#656C91" style={{ fontSize: 18 }}>
                    {flatCommentsLength}
                  </Text>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item>
            <Pseudolink
              className={classes.toggleButton}
              endIcon={showComments ? UpIcon : DownIcon}
              iconSize={24}
              onClick={handleToggle}
            >
              {showComments ? t`Hide all comments` : t`Show all comments`}
            </Pseudolink>
          </Grid>
        </Grid>
      </div>
      <Collapse in={showComments} timeout={200}>
        <div className={classes.wrapper}>
          <div className={classes.listHolder}>
            <CommentsList list={list} type={type} ownerId={ownerId} />
          </div>
          {!!user && (
            <div className={classes.formHolder}>
              <CommentsForm user={user} type={type} ownerId={ownerId} />
            </div>
          )}
        </div>
      </Collapse>
    </div>
  );
};

Comments.defaultProps = {
  list: [],
  type: '',
  ownerId: 0,
};
