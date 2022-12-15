import { CollapseItem } from './item';
import { Skeleton } from '@ui';

// styles
import { useStyles } from './styles';

const SKELETON_COUNT = 5;

export const CollapseList = ({ isLoading, searchValue, list, collapse }) => {
  const classes = useStyles({});

  return isLoading ? (
    <ul>
      {[...Array(SKELETON_COUNT)].map((item, index) => {
        return (
          <li key={index} className={classes.item}>
            <div className={classes.button}>
              <span className={classes.peak}>
                <Skeleton variant="rectangular" width={14} height={14} />
              </span>
              <span className={classes.caption}>
                <Skeleton variant="text" width={`${Math.random() * 50 + 40}%`} />
              </span>
              <span className={classes.control}>
                <Skeleton variant="rectangular" width={20} height={20} />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  ) : (
    <ul>
      {list?.map((item, index) => (
        <li key={item.id || index} className={classes.item}>
          <CollapseItem data={item} searchValue={searchValue} collapse={collapse} />
        </li>
      ))}
    </ul>
  );
};

CollapseList.defaultProps = {
  isLoading: false,
  searchValue: null,
  collapse: false,
};
