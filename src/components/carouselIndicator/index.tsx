// styles
import clsx from 'clsx';

const CarouselIndicator = ({ activeItemIndex, itemList, styles }) => {
  return (
    <div className={styles.carouselIndicator}>
      {itemList.map((item, index) => {
        return (
          <span
            key={index}
            className={clsx(styles.carouselEclipse, { [styles.activeCarouselEclipse]: activeItemIndex === index })}
          ></span>
        );
      })}
    </div>
  );
};

export default CarouselIndicator;
