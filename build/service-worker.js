if (!self.define) {
  let s,
    i = {};
  const c = (c, n) => (
    (c = new URL(c + '.js', n).href),
    i[c] ||
      new Promise(i => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = c), (s.onload = i), document.head.appendChild(s);
        } else (s = c), importScripts(c), i();
      }).then(() => {
        let s = i[c];
        if (!s) throw new Error(`Module ${c} didn’t register its module`);
        return s;
      })
  );
  self.define = (n, e) => {
    const l =
      s ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (i[l]) return;
    let t = {};
    const u = s => c(s, l),
      r = { module: { uri: l }, exports: t, require: u };
    i[l] = Promise.all(n.map(s => r[s] || u(s))).then(s => (e(...s), t));
  };
}
define(['./workbox-f5b72648'], function (s) {
  'use strict';
  self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        { url: '/index.html', revision: 'c2b2c557a2528ce75112634d6438cd0a' },
        { url: '/static/css/1.a8679152.chunk.css', revision: null },
        { url: '/static/css/499.d9e962a6.chunk.css', revision: null },
        { url: '/static/css/527.3a054278.chunk.css', revision: null },
        { url: '/static/css/596.7100a5cc.chunk.css', revision: null },
        { url: '/static/css/849.a3846555.chunk.css', revision: null },
        { url: '/static/css/9.59340105.chunk.css', revision: null },
        { url: '/static/css/997.45eb6d00.chunk.css', revision: null },
        { url: '/static/css/main.7384035f.css', revision: null },
        { url: '/static/js/1.c8582f5f.chunk.js', revision: null },
        { url: '/static/js/27.e116c24e.chunk.js', revision: null },
        { url: '/static/js/499.51e104db.chunk.js', revision: null },
        { url: '/static/js/527.3fb37387.chunk.js', revision: null },
        { url: '/static/js/596.2b7ccf5d.chunk.js', revision: null },
        { url: '/static/js/653.56db5f35.chunk.js', revision: null },
        { url: '/static/js/69.465299b6.chunk.js', revision: null },
        { url: '/static/js/849.284ff43a.chunk.js', revision: null },
        { url: '/static/js/9.b9aca148.chunk.js', revision: null },
        { url: '/static/js/997.28ecd5ed.chunk.js', revision: null },
        { url: '/static/js/main.c8cc31ea.js', revision: null },
        {
          url: '/static/js/main.c8cc31ea.js.LICENSE.txt',
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
