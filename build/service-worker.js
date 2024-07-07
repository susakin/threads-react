if (!self.define) {
  let s,
    i = {};
  const n = (n, c) => (
    (n = new URL(n + '.js', c).href),
    i[n] ||
      new Promise(i => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = n), (s.onload = i), document.head.appendChild(s);
        } else (s = n), importScripts(n), i();
      }).then(() => {
        let s = i[n];
        if (!s) throw new Error(`Module ${n} didn’t register its module`);
        return s;
      })
  );
  self.define = (c, e) => {
    const l =
      s ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (i[l]) return;
    let t = {};
    const u = s => n(s, l),
      r = { module: { uri: l }, exports: t, require: u };
    i[l] = Promise.all(c.map(s => r[s] || u(s))).then(s => (e(...s), t));
  };
}
define(['./workbox-f5b72648'], function (s) {
  'use strict';
  self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        { url: '/index.html', revision: '0dd32a5d1332261753cd3128389e8859' },
        { url: '/static/css/152.fa984b05.chunk.css', revision: null },
        { url: '/static/css/458.45eb6d00.chunk.css', revision: null },
        { url: '/static/css/527.3a054278.chunk.css', revision: null },
        { url: '/static/css/596.3ea640d4.chunk.css', revision: null },
        { url: '/static/css/849.2e35b7a7.chunk.css', revision: null },
        { url: '/static/css/864.c745ec70.chunk.css', revision: null },
        { url: '/static/css/9.59340105.chunk.css', revision: null },
        { url: '/static/css/main.c27af225.css', revision: null },
        { url: '/static/js/152.9035cd79.chunk.js', revision: null },
        { url: '/static/js/27.e116c24e.chunk.js', revision: null },
        { url: '/static/js/458.a34fe0a8.chunk.js', revision: null },
        { url: '/static/js/527.6fd29d75.chunk.js', revision: null },
        { url: '/static/js/596.29f338d8.chunk.js', revision: null },
        { url: '/static/js/653.29e2c007.chunk.js', revision: null },
        { url: '/static/js/69.8f3324a9.chunk.js', revision: null },
        { url: '/static/js/849.1fbb0063.chunk.js', revision: null },
        { url: '/static/js/864.6b152e0f.chunk.js', revision: null },
        { url: '/static/js/9.31c46002.chunk.js', revision: null },
        { url: '/static/js/main.35854d0c.js', revision: null },
        {
          url: '/static/js/main.35854d0c.js.LICENSE.txt',
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
