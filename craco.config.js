const { CracoAliasPlugin } = require('react-app-alias');
const CSS_MODULE_LOCAL_IDENT_NAME = '[hash:base64:5]';
const StylexPlugin = require('@stylexjs/webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  babel: {
    plugins: [
      [
        '@stylexjs/babel-plugin',
        {
          dev: true,
        },
      ],
    ],
  },
  devServer: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
    },
  },
  webpack: {
    plugins: {
      add: [
        new WorkboxWebpackPlugin.GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          exclude: [/\.map$/, /asset-manifest\.json$/],
          runtimeCaching: [
            {
              urlPattern: /\.(mp4|mov)(?:\?([^#]*))?(?:#(.*))?$/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'threads-media',
                expiration: {
                  maxEntries: 1000,
                  maxAgeSeconds: 7 * 24 * 60 * 60, // 缓存一周
                },
              },
            },
          ],
        }),
      ],
    },
    configure: webpackConfig => {
      webpackConfig.output = {
        ...webpackConfig.output,
        publicPath: '/',
      };
      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: require('craco-less'),
      options: {
        noIeCompat: true,
      },
    },
    {
      plugin: new StylexPlugin({
        filename: 'styles.[contenthash].css',
        // get webpack mode and set value for dev
        dev: true,
      }),
    },
    {
      plugin: CracoAliasPlugin,
    },
  ],
  style: {
    modules: {
      localIdentName: CSS_MODULE_LOCAL_IDENT_NAME,
    },
  },
};
