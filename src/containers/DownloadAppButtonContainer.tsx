import { ReactNode, useCallback } from 'react';
import { clientRouts } from '@routing/routs';
import { Link as RouteLink, useLocation } from 'react-router-dom';
import { handleAutoDownload } from '@utils/downloadApp';

export interface DownloadAppButtonContainerProps {
  children: ReactNode | ReactNode[];
  className?: string;
}
const DownloadAppButtonContainer = ({ children, className }: DownloadAppButtonContainerProps) => {
  const location = useLocation();

  const handleDownloadLinkClick = useCallback(() => {
    if (location.pathname === clientRouts.download) {
      handleAutoDownload();
    }
  }, [location]);

  return (
    <RouteLink to={clientRouts.download} onClick={handleDownloadLinkClick} className={className}>
      {children}
    </RouteLink>
  );
};

export default DownloadAppButtonContainer;
