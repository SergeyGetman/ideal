import { useContext } from 'react';
import { BonusConfigContext } from './context';

export const useBonusConfig = () => useContext(BonusConfigContext);
