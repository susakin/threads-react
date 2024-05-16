import { lazy } from 'react';
const routes = [
  {
    path: '/',
    Component: lazy(() => import('@pages/Main')),
    title: 'Threads',
  },
  {
    path: '/following',
    Component: lazy(() => import('@pages/Main')),
    title: 'Threads',
  },
  {
    path: '/search',
    Component: lazy(() => import('@pages/Search')),
    title: '搜索 • Threads',
  },
  {
    path: '/auth',
    Component: lazy(() => import('@pages/Auth')),
    hideNavigation: true,
    title: '登录Threads',
  },
  {
    path: '/activity/:action?',
    Component: lazy(() => import('@pages/Activity')),
  },
  {
    path: '/post/:code',
    Component: lazy(() => import('@pages/Post')),
  },
  {
    path: '/:username/:action?',
    Component: lazy(() => import('@pages/Profile')),
  },
  {
    path: '/settings/:action?',
    Component: lazy(() => import('@pages/Settings')),
    shouldAuth: true,
  },
  {
    path: '/liked',
    Component: lazy(() => import('@pages/Liked')),
    shouldAuth: true,
    title: '你赞过的内容 • Threads',
  },
  {
    path: '/saved',
    Component: lazy(() => import('@pages/Saved')),
    shouldAuth: true,
    title: '收藏夹 • Threads',
  },
];

export default routes;
