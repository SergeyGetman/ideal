// styles
import { useStyles } from '../styles';
import { AdvantageItem } from '@components/advantageItem';

export const AdvantageListDesktop = ({ LIST }) => {
  const classes = useStyles({});

  return (
    <ul className={classes.list}>
      {LIST.map((item) => {
        return (
          <li key={item.id} className={classes.item}>
            <AdvantageItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};
