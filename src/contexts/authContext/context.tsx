/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { AuthType } from '@components/auth/utils';

export interface SignInPayload {
  email: string;
  password: string;
}

export interface AuthContextValue {
  resetEmailForm: boolean;
  signInLoading: boolean;
  signUpLoading: boolean;
  user: any; // TODO: fix types
  authType: AuthType | null;
  onSignIn: (values: SignInPayload) => void;
  onSignUp: (values: any) => Promise<void>; // TODO: Fix types
  onResetForm: (values: any) => Promise<void>; // TODO: Fix types
  onLogout: () => void;
  showAuthModal: (authType: AuthType) => void;
  hideAuthModal: () => void;
}

export const AuthContext = createContext<AuthContextValue>({
  authType: null,
  user: null,
  resetEmailForm: false,
  signInLoading: false,
  signUpLoading: false,
  onSignIn: () => {},
  onSignUp: () => {
    return Promise.resolve();
  },
  onResetForm: () => {
    return Promise.resolve();
  },
  onLogout: () => {},
  showAuthModal: () => {},
  hideAuthModal: () => {},
});
