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
        { url: '/index.html', revision: 'af0b5cac2f9e525ae193fdb02d2e6f05' },
        { url: '/static/css/1.a8679152.chunk.css', revision: null },
        { url: '/static/css/499.d9e962a6.chunk.css', revision: null },
        { url: '/static/css/527.3a054278.chunk.css', revision: null },
        { url: '/static/css/596.7100a5cc.chunk.css', revision: null },
        { url: '/static/css/849.a3846555.chunk.css', revision: null },
        { url: '/static/css/9.59340105.chunk.css', revision: null },
        { url: '/static/css/997.45eb6d00.chunk.css', revision: null },
        { url: '/static/css/main.04917ab0.css', revision: null },
        { url: '/static/js/1.d85d49c2.chunk.js', revision: null },
        { url: '/static/js/27.e116c24e.chunk.js', revision: null },
        { url: '/static/js/499.c5fa7992.chunk.js', revision: null },
        { url: '/static/js/527.2f1e8f20.chunk.js', revision: null },
        { url: '/static/js/596.d51fc462.chunk.js', revision: null },
        { url: '/static/js/653.6c304b63.chunk.js', revision: null },
        { url: '/static/js/69.a06e20da.chunk.js', revision: null },
        { url: '/static/js/849.807c21b9.chunk.js', revision: null },
        { url: '/static/js/9.fddbe371.chunk.js', revision: null },
        { url: '/static/js/997.e1649319.chunk.js', revision: null },
        { url: '/static/js/main.f8227a15.js', revision: null },
        {
          url: '/static/js/main.f8227a15.js.LICENSE.txt',
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
