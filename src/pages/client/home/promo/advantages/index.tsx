import { useCallback, useState } from 'react';
import { PageBody } from '@components/page';
import { LIST } from './utils';

// styles
import { AdvantageListDesktop } from '@components/advantageList/advantageListDesktop';
import { AdvantageListMobile } from '@components/advantageList/advantageListMobile';

export const Advantages = ({ isMobileSmall }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const changeActiveItem = useCallback(
    (activeItemIndex) => {
      if (activeItemIndex > LIST.length - 2) {
        return;
      }
      if (activeItemIndex < 0) {
        setActiveItemIndex(0);
        return;
      }
      setActiveItemIndex(activeItemIndex);
    },
    [activeItemIndex],
  );

  return (
    <PageBody>
      {!!isMobileSmall ? (
        <AdvantageListDesktop LIST={LIST} />
      ) : (
        <AdvantageListMobile activeItemIndex={activeItemIndex} LIST={LIST} changeActiveItem={changeActiveItem} />
      )}
    </PageBody>
  );
};
