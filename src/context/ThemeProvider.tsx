import React, { createContext, useReducer, Dispatch, useContext } from 'react';

type Theme = 'light' | 'dark' | 'auto';

type Store = {
  theme?: Theme;
};

type Action = { type: 'CHANGE_THEME'; payload: { theme: Theme } };

type ContextType = {
  state: Store;
  dispatch: Dispatch<Action>;
};

export const ThemeContext = createContext<ContextType>({
  dispatch: () => {},
  state: {},
});

export type Reducer = (state: Store, action: Action) => Store;

export const getTheme = () => {
  const theme = localStorage.getItem('THEME');
  if (
    theme === 'dark' ||
    (theme === 'auto' &&
      window?.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    return 'dark';
  } else {
    return 'light';
  }
};

export const useTheme = () => {
  const { state } = useContext(ThemeContext);
  return state.theme === 'auto'
    ? window?.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    : state.theme;
};

function changeTheme(theme: Theme) {
  const lightModeClassName = 'light-mode';
  const darkModeClassName = 'dark-mode';
  const root = document.documentElement;
  localStorage.setItem('THEME', theme);
  let isDark: boolean;

  const toggleTieme = () => {
    const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    if (!theme) {
      localStorage.setItem('THEME', 'light');
    }
    if (
      theme === 'dark' ||
      (theme === 'auto' &&
        window?.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      root.classList.remove(lightModeClassName);
      root.classList.add(darkModeClassName);
      colorSchemeMeta?.setAttribute('content', 'dark');
      themeColorMeta?.setAttribute('content', '#242526');
    } else {
      root.classList.remove(darkModeClassName);
      root.classList.add(lightModeClassName);
      colorSchemeMeta?.setAttribute('content', 'light');
      themeColorMeta?.setAttribute('content', '#ffffff');
    }
  };

  // @ts-ignore
  if (!document.startViewTransition) {
    toggleTieme();
    return;
  }

  // @ts-ignore
  const transition = document.startViewTransition(toggleTieme);

  transition.ready.then(() => {
    document.documentElement.animate({
      duration: 500,
      easing: 'ease-in',
      pseudoElement: isDark
        ? '::view-transition-old(root)'
        : '::view-transition-new(root)',
    });
  });
}

const reducer: Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_THEME': {
      const { theme } = payload;
      changeTheme(theme);
      return {
        ...state,
        theme,
      };
    }

    default:
      return state;
  }
};

type ThemeProviderProps = {
  children?: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer>(reducer, {
    theme: localStorage.getItem('THEME') as Theme,
  });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
