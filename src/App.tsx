import React, {
  Suspense,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import routes from '@routes/index';
import { Header, Footer, Auth } from '@pages/components';
import { progress } from '@components/index';
import { Threads } from '@components/Icon';
import styles from './app.module.less';
import { AuthContext } from '@context/AuthProvider';
import { NavigationContext } from '@context/NavigationProvider';
import { useTitle } from '@hooks/useTitle';

const LoadingBar = () => {
  useEffect(() => {
    progress.start();
    return () => {
      progress.done();
    };
  }, []);
  return null;
};

const classNamePrefix = 'app';
const RouteTitleMap: Record<string, string> = {};
const NavigationHidenMap: Record<string, boolean> = {};

function App() {
  const [hideNavigation, setHideNavigation] = useState<boolean>(false);
  const { state: _state } = useContext(NavigationContext);
  const { unreadNotificationNum } = _state;

  const { state } = useContext(AuthContext);

  useLayoutEffect(() => {
    const iconUrl = unreadNotificationNum > 0 ? '-new' : '';
    const iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.href = `/threads${iconUrl}.ico`;

    const head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(iconLink);
  }, [unreadNotificationNum]);

  const location = useLocation();

  const { setTitle } = useTitle();

  useLayoutEffect(() => {
    const pathName = location.pathname;
    const title = RouteTitleMap[pathName];
    if (title) {
      setTitle(title);
    }
    setHideNavigation(NavigationHidenMap[pathName]);
  }, [location]);

  const routeContent = useRoutes(
    routes.map(({ Component, path, title, hideNavigation, shouldAuth }) => {
      RouteTitleMap[path] = title as any;
      NavigationHidenMap[path] = hideNavigation as boolean;

      return {
        path,
        element: (
          <Suspense fallback={<LoadingBar />}>
            {shouldAuth ? (
              <Auth>
                <Component />
              </Auth>
            ) : (
              <Component />
            )}
          </Suspense>
        ),
      };
    }),
  );

  if (state.isFetchingAuth) {
    return (
      <div className={styles[`${classNamePrefix}-placeholder`]}>
        <Threads
          className={styles[`${classNamePrefix}-placeholder-logo`]}
          fill="currentColor"
          size={45}
          viewBox="0 0 192 192"
        />
      </div>
    );
  }

  return (
    <div>
      {!hideNavigation && <Header />}
      {!hideNavigation && <Footer />}
      {routeContent}
    </div>
  );
}

export default App;
