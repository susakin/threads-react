if (!self.define) {
  let s,
    i = {};
  const e = (e, n) => (
    (e = new URL(e + '.js', n).href),
    i[e] ||
      new Promise(i => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = e), (s.onload = i), document.head.appendChild(s);
        } else (s = e), importScripts(e), i();
      }).then(() => {
        let s = i[e];
        if (!s) throw new Error(`Module ${e} didn’t register its module`);
        return s;
      })
  );
  self.define = (n, c) => {
    const l =
      s ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (i[l]) return;
    let t = {};
    const u = s => e(s, l),
      r = { module: { uri: l }, exports: t, require: u };
    i[l] = Promise.all(n.map(s => r[s] || u(s))).then(s => (c(...s), t));
  };
}
define(['./workbox-f5b72648'], function (s) {
  'use strict';
  self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        { url: '/index.html', revision: '9b175375c38af13cd8ea6811778958f6' },
        { url: '/static/css/152.fa984b05.chunk.css', revision: null },
        { url: '/static/css/458.45eb6d00.chunk.css', revision: null },
        { url: '/static/css/527.3a054278.chunk.css', revision: null },
        { url: '/static/css/596.3ea640d4.chunk.css', revision: null },
        { url: '/static/css/849.2e35b7a7.chunk.css', revision: null },
        { url: '/static/css/864.c745ec70.chunk.css', revision: null },
        { url: '/static/css/9.59340105.chunk.css', revision: null },
        { url: '/static/css/main.9838ce26.css', revision: null },
        { url: '/static/js/152.9fb0f7c9.chunk.js', revision: null },
        { url: '/static/js/27.e116c24e.chunk.js', revision: null },
        { url: '/static/js/458.75f63a9e.chunk.js', revision: null },
        { url: '/static/js/527.0f7e9298.chunk.js', revision: null },
        { url: '/static/js/596.29f338d8.chunk.js', revision: null },
        { url: '/static/js/653.7ecf6234.chunk.js', revision: null },
        { url: '/static/js/69.02e8c4a8.chunk.js', revision: null },
        { url: '/static/js/849.0126bd0e.chunk.js', revision: null },
        { url: '/static/js/864.f674818e.chunk.js', revision: null },
        { url: '/static/js/9.7449a4fd.chunk.js', revision: null },
        { url: '/static/js/main.cf5a92ee.js', revision: null },
        {
          url: '/static/js/main.cf5a92ee.js.LICENSE.txt',
          revision: 'aea7f4df688f3af28d40817a22eb579f',
        },
        {
          url: '/static/media/avatar.7fe14f0accd9979e3303.jpg',
          revision: null,
        },
      ],
      {},
    ),
    s.registerRoute(
      /\.(mp4|mov)(?:\?([^#]*))?(?:#(.*))?$/i,
      new s.CacheFirst({
        cacheName: 'threads-media',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 1e3, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    );
});
