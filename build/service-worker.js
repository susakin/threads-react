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
        { url: '/index.html', revision: '523e46bd44621265cfd0c3be58bbb14c' },
        { url: '/static/css/1.a8679152.chunk.css', revision: null },
        { url: '/static/css/499.d9e962a6.chunk.css', revision: null },
        { url: '/static/css/527.3a054278.chunk.css', revision: null },
        { url: '/static/css/596.7100a5cc.chunk.css', revision: null },
        { url: '/static/css/753.45eb6d00.chunk.css', revision: null },
        { url: '/static/css/849.a3846555.chunk.css', revision: null },
        { url: '/static/css/9.59340105.chunk.css', revision: null },
        { url: '/static/css/main.9b9f04fc.css', revision: null },
        { url: '/static/js/1.ca95923a.chunk.js', revision: null },
        { url: '/static/js/27.e116c24e.chunk.js', revision: null },
        { url: '/static/js/499.51e104db.chunk.js', revision: null },
        { url: '/static/js/527.2b4245ba.chunk.js', revision: null },
        { url: '/static/js/596.fc58b245.chunk.js', revision: null },
        { url: '/static/js/653.56db5f35.chunk.js', revision: null },
        { url: '/static/js/69.465299b6.chunk.js', revision: null },
        { url: '/static/js/753.14d43cf3.chunk.js', revision: null },
        { url: '/static/js/849.f9d58d34.chunk.js', revision: null },
        { url: '/static/js/9.2e8686ce.chunk.js', revision: null },
        { url: '/static/js/main.742d7ef9.js', revision: null },
        {
          url: '/static/js/main.742d7ef9.js.LICENSE.txt',
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
