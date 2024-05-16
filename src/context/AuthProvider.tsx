import React, { Dispatch, useContext, useEffect, useReducer } from 'react';
import { User } from '@typings/index';
import { createContext } from 'react';
import { useFetch } from '@hooks/useFetch';
import { getUser } from '@services/auth';

type Store = {
  user?: User;
  isFetchingAuth?: boolean;
};

type Action =
  | { type: 'SET_USER'; payload: { user: User } }
  | { type: 'UPDATE_USER'; payload: { user: Partial<Omit<User, 'id'>> } }
  | { type: 'SET_IS_FETCHING_AUTH'; payload: { isFetchingAuth: boolean } };

type ContextType = {
  state: Store;
  dispatch: Dispatch<Action>;
};

export const useCurrentUser = () => {
  const { state } = useContext(AuthContext);
  const { user } = state;
  return user;
};

const reducer: Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_USER': {
      const { user } = payload;
      return {
        ...state,
        user,
      };
    }
    case 'UPDATE_USER': {
      const { user } = payload;
      return {
        ...state,
        user: {
          ...state.user,
          ...(user as any),
        },
      };
    }
    case 'SET_IS_FETCHING_AUTH': {
      const { isFetchingAuth } = payload;
      return {
        ...state,
        isFetchingAuth,
      };
    }
    default:
      return state;
  }
};

export const ThemeContext = createContext<ContextType>({
  dispatch: () => {},
  state: {},
});

export type Reducer = (state: Store, action: Action) => Store;

type AuthProviderProps = {
  children?: React.ReactNode;
};

export const AuthContext = createContext<ContextType>({
  dispatch: () => {},
  state: {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer>(reducer, {
    isFetchingAuth: true,
  });

  const { loading } = useFetch<{ user: User }, any>(getUser, {
    onSuccess({ user }) {
      dispatch({
        type: 'SET_USER',
        payload: {
          user,
        },
      });
    },
    ignoreErrorMsg: true,
  });

  useEffect(() => {
    dispatch({
      type: 'SET_IS_FETCHING_AUTH',
      payload: {
        isFetchingAuth: loading,
      },
    });
  }, [loading]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
