import clsx from 'clsx';
import { isNotEmptyArray } from '@utils/common';
import { CommentsItem } from '../item';

// styles
import { useStyles } from './styles';

export const CommentsList = ({ parent, list, type, ownerId }) => {
  const classes = useStyles({});

  return isNotEmptyArray(list) ? (
    <ul className={clsx(classes.list, !!parent && classes.listInner)}>
      {list.map((item) => (
        <li key={item.id} className={classes.item}>
          <CommentsItem data={item} parent={parent} type={type} ownerId={ownerId} />
        </li>
      ))}
    </ul>
  ) : null;
};

CommentsList.defaultProps = {
  parent: null,
  type: '',
  ownerId: 0,
};
