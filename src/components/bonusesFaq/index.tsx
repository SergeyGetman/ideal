import { CollapseList } from '@components/collapseList';
import { useData } from './data';

export const BonusesFaq = () => {
  const { isLoading, data } = useData();

  return <CollapseList isLoading={isLoading} list={data} collapse={false} />;
};
