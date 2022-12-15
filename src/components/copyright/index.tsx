import { INITIAL_YEAR } from '@utils/constants';

export const Copyright = () => {
  const initialYear = INITIAL_YEAR;
  const currentYear = new Date().getFullYear();
  const textYear = initialYear === currentYear ? initialYear : `${initialYear}-${currentYear}`;

  return <span>{`Copyright © ${textYear}. DOPAMINE LABS LTD, all rights reserved.`}</span>;
};
