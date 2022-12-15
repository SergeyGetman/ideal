import { isAndroid, isIOS, isMacOs, isWindows } from 'react-device-detect';
import {
  ANDROID_DOWNLOAD_URL,
  IOS_DOWNLOAD_URL,
  MACOS_DOWNLOAD_URL,
  WINDOWS_ONLINE_DOWNLOAD_URL,
} from '@utils/constants';

const getDownloadUrl = () => {
  switch (true) {
    case isIOS: {
      return IOS_DOWNLOAD_URL;
    }
    case isAndroid: {
      return ANDROID_DOWNLOAD_URL;
    }
    case isWindows: {
      return WINDOWS_ONLINE_DOWNLOAD_URL;
    }
    case isMacOs: {
      return MACOS_DOWNLOAD_URL;
    }
    default: {
      return null;
    }
  }
};

export const handleAutoDownload = () => {
  const downloadUrl = getDownloadUrl();

  if (!downloadUrl) {
    return;
  }

  window.location.href = downloadUrl;
};
