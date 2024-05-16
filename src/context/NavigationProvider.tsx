import React, { Dispatch, useReducer } from 'react';
import { createContext } from 'react';
import { useEventEmitter } from 'ahooks';
import { EventEmitter } from 'ahooks/lib/useEventEmitter';

type NavigationEmitterParams =
  | {
      type: 'main';
      path?: '/' | '/following';
    }
  | { type: 'newPost' }
  | {
      type: 'activity';
      path?:
        | ''
        | '/follows'
        | '/replies'
        | '/mentions'
        | '/quotes'
        | '/reposts'
        | '/verified';
    }
  | { type: 'profile' }
  | { type: 'search' };

type Store = {
  unreadNotificationNum: number;
  navigationEmitter?: EventEmitter<NavigationEmitterParams>;
};

type Action = {
  type: 'SET_UNREAD_NOTIFICATION_NUM';
  payload: { unreadNotificationNum: number };
};

type ContextType = {
  state: Store;
  dispatch: Dispatch<Action>;
};

type NavigationProviderProps = {
  children?: React.ReactNode;
};

export const NavigationContext = createContext<ContextType>({
  dispatch: () => {},
  state: {
    unreadNotificationNum: 0,
  },
});

type Reducer = (state: Store, action: Action) => Store;

const reducer: Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_UNREAD_NOTIFICATION_NUM': {
      const { unreadNotificationNum } = payload;
      return {
        ...state,
        unreadNotificationNum,
      };
    }

    default:
      return state;
  }
};

const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const navigationEmitter = useEventEmitter<NavigationEmitterParams>();

  const [state, dispatch] = useReducer<Reducer>(reducer, {
    unreadNotificationNum: 0,
    navigationEmitter,
  });
  return (
    <NavigationContext.Provider value={{ state, dispatch }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
