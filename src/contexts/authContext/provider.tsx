import { useEffect, useCallback, useReducer } from 'react';
import { useMutation } from 'react-query';
import { sha256 } from 'js-sha256';
import { AuthContext } from './context';
import { VERIFY_API_URL, SIGN_IN_API_URL, SIGN_UP_API_URL } from '@utils/constants';
import { sendAxiosPost } from '@utils/sendAxiosPost';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { AuthType } from '@components/auth/utils';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_DATA':
      return { loading: false, data: action.data };
    default:
      return state;
  }
}

const useParsedSearch = () => {
  const { search } = useLocation();
  return queryString.parse(search);
};

const useGetAuthType = (): AuthType | null => {
  const { authType } = useParsedSearch();

  if (!authType || Array.isArray(authType)) {
    return null;
  }

  return authType as AuthType;
};

const useAuthModal = () => {
  const history = useHistory();
  const parsedSearch = useParsedSearch();

  const authType = useGetAuthType();

  const showAuthModal = useCallback(
    (authType: AuthType) => {
      history.push({
        search: queryString.stringify({
          ...parsedSearch,
          authType,
        }),
      });
    },
    [authType, history, parsedSearch],
  );

  const hideAuthModal = useCallback(() => {
    const { authType: _, ...searchWithoutAuthType } = parsedSearch;

    history.push({
      search: queryString.stringify(searchWithoutAuthType),
    });
  }, [parsedSearch, history]);

  return {
    authType,
    showAuthModal,
    hideAuthModal,
  };
};

// TODO need fixes - use 'react-query'
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { loading: true, data: null });
  const fpPromise = FingerprintJS.load();

  const handleClearAuthData = useCallback(() => {
    localStorage.removeItem('token');
  }, []);

  const { mutateAsync: verifyMutation } = useMutation((data) => sendAxiosPost(VERIFY_API_URL, data));
  const { mutateAsync: signInMutation, isLoading: signInLoading } = useMutation((data) =>
    sendAxiosPost(SIGN_IN_API_URL, data),
  );
  const { mutateAsync: signUpMutation, isLoading: signUpLoading } = useMutation((data) =>
    sendAxiosPost(SIGN_UP_API_URL, data),
  );

  const authModal = useAuthModal();

  const handleCheckAuth = useCallback(() => {
    const token = localStorage.getItem('token');
    !!token
      ? verifyMutation(
          //@ts-ignore
          { token },
          {
            onSuccess: ({ data }) => {
              const userData = data?.data?.userData;
              if (!!userData) {
                dispatch({ type: 'SET_DATA', data: userData });
              } else {
                handleClearAuthData();
              }
            },
            onError: () => {
              handleClearAuthData();
            },
          },
        )
      : dispatch({ type: 'SET_LOADING', loading: false });
  }, []);

  const handleSignIn = async (values) => {
    const fp = await fpPromise;
    const result = await fp.get();
    // @ts-ignore
    result.components.canvas = '';

    const postData = {
      email: values.email,
      password: sha256(values.password),
      fPrint: JSON.stringify(result),
    };
    signInMutation(
      //@ts-ignore
      postData,
      {
        onSuccess: ({ data }) => {
          const token = data?.data?.token;
          if (!!token) {
            localStorage.setItem('token', token);
            window.location.reload();
          }
        },
      },
    );
  };

  const handleSignUp = async (values) => {
    signUpMutation(
      //@ts-ignore
      { data: values },
      {
        onSuccess: ({ data }) => {
          const token = data?.token;
          if (!!token) {
            localStorage.setItem('token', token);
            window.location.reload();
          }
        },
      },
    );
  };

  const handleLogout = () => {
    handleClearAuthData();
    window.location.reload();
  };

  useEffect(() => {
    handleCheckAuth();
  }, []);

  return (
    <AuthContext.Provider
      // @ts-ignore
      value={{
        signInLoading,
        signUpLoading,
        user: state.data,
        onSignIn: handleSignIn,
        onSignUp: handleSignUp,
        onLogout: handleLogout,
        ...authModal,
      }}
    >
      {!state.loading ? children : null}
    </AuthContext.Provider>
  );
};
