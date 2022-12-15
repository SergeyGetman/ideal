import { t } from 'ttag';
import { useAuthContext } from '@contexts/authContext';
import { Tooltip, IconButton } from '@ui';

// icons
import LogoutIcon from '@svg_icons/logout.svg';

export const LogoutButton = () => {
  const { onLogout } = useAuthContext();

  return (
    <Tooltip title={t`Logout`}>
      <span>
        <IconButton color="inherit" glyph={LogoutIcon} onClick={onLogout} />
      </span>
    </Tooltip>
  );
};
