import { clientRouts } from '@routing/routs';
import { Link as RouteLink } from 'react-router-dom';

// styles
import { useStyles } from './styles';
import { useCallback } from 'react';

export const AdvantageItem = ({ item }) => {
  const classes = useStyles({});

  const getItemText = useCallback((text) => {
    const spaceIndex = text.indexOf(' ');
    const firstWord = text.substring(0, spaceIndex);
    const otherText = text.substring(spaceIndex);
    return (
      <>
        <span className={classes.firstWord}>{firstWord}</span>
        <span className={classes.otherText}>{otherText}</span>
      </>
    );
  }, []);

  return (
    <RouteLink className={classes.itemLink} to={!!item.rout ? item.rout : `${clientRouts.bonuses}/${item.id}`}>
      <img className={classes.image} src={item.image} alt="" />
      <div className={classes.text}>{getItemText(item.text)}</div>
    </RouteLink>
  );
};
