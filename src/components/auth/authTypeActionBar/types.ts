import { AuthType } from '@components/auth/utils';

export interface AuthTypeActionBarItemProps {
  setAuthType: (authType: AuthType) => void;
}

export interface AuthTypeActionBarProps extends AuthTypeActionBarItemProps {
  authType: AuthType;
}

export interface AuthTypeActionBarContainerProps {
  defaultAuthType?: AuthType;
}
