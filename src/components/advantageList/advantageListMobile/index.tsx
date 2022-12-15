import CarouselIndicator from '@components/carouselIndicator';
import ItemsCarousel from 'react-items-carousel';

// styles
import { useStyles } from '../styles';
import { AdvantageItem } from '@components/advantageItem';

export const AdvantageListMobile = ({ LIST, activeItemIndex, changeActiveItem }) => {
  const classes = useStyles({});

  return (
    <>
      <ItemsCarousel
        classes={classes.list}
        requestToChangeActive={changeActiveItem}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={5}
      >
        {LIST.map((item) => {
          return (
            <div key={item.id} className={classes.item}>
              <AdvantageItem item={item} />
            </div>
          );
        })}
      </ItemsCarousel>
      <CarouselIndicator activeItemIndex={activeItemIndex} itemList={LIST.slice(1)} styles={classes} />
    </>
  );
};
