import { BONUS_CONFIG_API_URL } from '@utils/constants';
import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { BonusConfigContext } from './context';

type ResMutation = {
  currency_sign: string;
  deposit_bonus_size: number;
  rakeback_bonus_percentage: number;
  referral_bonus_percentage: number;
  spin_n_go_buy_in: number;
  spin_n_go_max_prize: number;
};
export const BonusConfigContextProvider = ({ children }) => {
  const [bonusConfig, setBonusConfig] = useState({
    currency_sign: '£',
    deposit_bonus_size: 0,
    rakeback_bonus_percentage: 0,
    referral_bonus_percentage: 0,
    spin_n_go_buy_in: 0,
    spin_n_go_max_prize: 0,
  });

  useQuery('fetchBonusConfig', async () => {
    const { data } = await axios.get(BONUS_CONFIG_API_URL);
    data.deposit_bonus_size /= 100;
    data.spin_n_go_max_prize /= 100;
    setBonusConfig(data as ResMutation);
  });
  return (
    <BonusConfigContext.Provider
      value={{
        bonusConfig,
      }}
    >
      {children}
    </BonusConfigContext.Provider>
  );
};
