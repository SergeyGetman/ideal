import { useCallback } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { thousandSeparator } from '@utils/common';
import {
  FACEBOOK_SOCIAL_URL,
  YOUTUBE_SOCIAL_URL,
  TWITTER_SOCIAL_URL,
  INSTAGRAM_SOCIAL_URL,
  TELEGRAM_SOCIAL_URL,
} from '@utils/constants';

// icons
import FacebookIcon from '@svg_icons/facebook.svg';
import InstagramIcon from '@svg_icons/instagram.svg';
import TwitterIcon from '@svg_icons/twitter.svg';
import YoutubeIcon from '@svg_icons/youtube.svg';
import TelegramIcon from '@svg_icons/telegram.svg';

const API_URL = '';
// TODO delete
const INITIAL_DATA = {
  instagram: 356725,
  facebook: 218415,
  twitter: 196846,
  youtube: 207027,
  online: 14970,
  telegram: 0,
};

const getSocialCount = (number) => {
  if (!number) return '';
  const thousand = Math.round(number / 1000);
  if (thousand < 20) {
    return thousandSeparator(number);
  } else {
    return `${thousand}k`;
  }
};

// hook
// TODO need fixes - use 'react-query'
export function useSocials() {
  const getSocials = useCallback((socialsData) => {
    if (!socialsData) return [];
    const { telegram, instagram, facebook, twitter, youtube } = socialsData;
    return [
      {
        id: 'instagram',
        count: getSocialCount(instagram),
        icon: InstagramIcon,
        url: INSTAGRAM_SOCIAL_URL,
      },
      {
        id: 'facebook',
        count: getSocialCount(facebook),
        icon: FacebookIcon,
        url: FACEBOOK_SOCIAL_URL,
      },
      {
        id: 'twitter',
        count: getSocialCount(twitter),
        icon: TwitterIcon,
        url: TWITTER_SOCIAL_URL,
      },
      {
        id: 'youtube',
        count: getSocialCount(youtube),
        icon: YoutubeIcon,
        url: YOUTUBE_SOCIAL_URL,
      },
      {
        id: 'telegram',
        count: getSocialCount(telegram),
        icon: TelegramIcon,
        url: TELEGRAM_SOCIAL_URL,
      },
    ];
  }, []);

  const { data, isLoading } = useQuery(
    'socials',
    async () => {
      const { data } = await axios.get(API_URL);
      return data;
    },
    {
      initialData: INITIAL_DATA,
    },
  );

  return {
    loading: isLoading,
    socials: !!data ? getSocials(data) : [],
    online: getSocialCount(data?.online),
  };
}
