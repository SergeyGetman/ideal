//@ts-nocheck
import { t } from 'ttag';

export const COUNTRY_TEXT = {
  au: t`Australia`,
  be: t`Belgium`,
  br: t`Brazil`,
  nl: t`Netherlands`,
  us: t`USA`,
};

export const isoToCountryName = (iso) => {
  return COUNTRY_TEXT[iso] || iso;
};

export const isoToFlag = (iso) => {
  return typeof String.fromCodePoint !== 'undefined'
    ? iso.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : iso;
};

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
