import { useState } from 'react';
import { t } from 'ttag';
import { getDateTimeTextISO } from '@utils/date';
import { isNotEmptyArray } from '@utils/common';
import { useAuthContext } from '@contexts/authContext';
import { Grid, Text, Link, Collapse, SvgIcon } from '@ui';
import { CommentsList } from '../list';
import { CommentsForm } from '../form';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { breakpoints } from '@utils/styles';

// styles
import { useStyles } from './styles';

// images
import UserPng from '../images/user.png';

// icon
import ReplyIcon from '@svg_icons/reply.svg';

export const CommentsItem = ({ data, parent, type, ownerId }) => {
  const [showForm, setShowForm] = useState(false);
  const classes = useStyles({});
  const isDesktop = useMediaQuery(`(min-width:${breakpoints['lg']}px)`);
  const { user } = useAuthContext();

  const handleShowForm = () => setShowForm(true);
  const handleHideForm = () => setShowForm(false);

  return (
    <>
      <Grid container className={classes.root}>
        {isDesktop && (
          <Grid item>
            <div className={classes.imageHolder}>
              <img className={classes.image} src={data.image || UserPng} alt={data.name} />
            </div>
          </Grid>
        )}
        <Grid item xs>
          <div className={classes.head}>
            <Grid container alignItems="center" spacing={2} wrap="wrap">
              <Grid item>
                {!parent ? (
                  <b>{data.name}</b>
                ) : (
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <b>{data.name}</b>
                    </Grid>
                    <Grid item>
                      <SvgIcon size={12} color="#63B4FF" glyph={ReplyIcon} />
                    </Grid>
                    <Grid item>
                      <b>{parent.name}</b>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              <Grid item>
                <span style={{ opacity: 0.5 }}>{'/'}</span>
              </Grid>
              <Grid item xs>
                <span className={classes.date}>{getDateTimeTextISO(data.date)}</span>
              </Grid>
              {isDesktop && !!user && !showForm ? (
                <Grid item>
                  <Link color="secondary" onClick={handleShowForm} className={classes.replyLink}>
                    {t`Reply`}
                  </Link>
                </Grid>
              ) : null}
            </Grid>
          </div>
          <Text color="#656C91">{data.text}</Text>
          {!isDesktop && !!user && !showForm ? (
            <Link color="secondary" onClick={handleShowForm} className={classes.replyLink}>
              {t`Reply`}
            </Link>
          ) : null}
        </Grid>
      </Grid>
      {!!user && (
        <Collapse in={showForm} timeout={200}>
          <div className={classes.formHolder}>
            <CommentsForm user={user} parentId={data.id} onClose={handleHideForm} type={type} ownerId={ownerId} />
          </div>
        </Collapse>
      )}
      {isNotEmptyArray(data.children) && (
        <div className={classes.replyHolder}>
          <CommentsList parent={{ name: data.name, id: data.id }} list={data.children} type={type} ownerId={ownerId} />
        </div>
      )}
    </>
  );
};

CommentsItem.defaultProps = {
  parent: null,
  type: '',
  ownerId: 0,
};
