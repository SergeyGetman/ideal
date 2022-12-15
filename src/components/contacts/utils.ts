import { t } from 'ttag';

import {
  TELEGRAM_SUPPORT_URL,
  TELEGRAM_SUPPORT,
  GMAIL_URL,
  TELEGRAM_SOCIAL_URL,
  FACEBOOK_SOCIAL_URL,
  YOUTUBE_SOCIAL_URL,
  TWITTER_SOCIAL_URL,
  INSTAGRAM_SOCIAL_URL,
  TELEGRAM_SOCIAL,
  FACEBOOK_SOCIAL,
  INSTAGRAM_SOCIAL,
  TWITTER_SOCIAL,
  YOUTUBE_SOCIAL,
} from '@utils/constants';

// images
import FacebookSvg from './images/facebook.svg';
import GmailSvg from './images/gmail.svg';
import InstagramSvg from './images/instagram.svg';
import TelegramSvg from './images/telegram.svg';
import TwitterSvg from './images/twitter.svg';
import YoutubeSvg from './images/youtube.svg';

export const SUPPORT_CONTACTS = [
  {
    title: `Telegram`,
    url: TELEGRAM_SUPPORT_URL,
    caption: TELEGRAM_SUPPORT,
    icon: TelegramSvg,
  },
  {
    title: t`Email`,
    url: `mailto:${GMAIL_URL}`,
    caption: GMAIL_URL,
    icon: GmailSvg,
  },
];

export const CONTACTS = [
  {
    title: `Telegram`,
    url: TELEGRAM_SOCIAL_URL,
    caption: TELEGRAM_SOCIAL,
    icon: TelegramSvg,
  },
  {
    title: `Youtube`,
    url: YOUTUBE_SOCIAL_URL,
    caption: YOUTUBE_SOCIAL,
    icon: YoutubeSvg,
  },
  {
    title: `Instagram`,
    url: INSTAGRAM_SOCIAL_URL,
    caption: INSTAGRAM_SOCIAL,
    icon: InstagramSvg,
  },
  {
    title: `Facebook`,
    url: FACEBOOK_SOCIAL_URL,
    caption: FACEBOOK_SOCIAL,
    icon: FacebookSvg,
  },
  {
    title: `Twitter`,
    url: TWITTER_SOCIAL_URL,
    caption: TWITTER_SOCIAL,
    icon: TwitterSvg,
  },
];
