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
        { url: '/index.html', revision: '15e45f4332b17c4ce6a36573c500a225' },
        { url: '/static/css/152.d247877b.chunk.css', revision: null },
        { url: '/static/css/527.3a054278.chunk.css', revision: null },
        { url: '/static/css/596.7100a5cc.chunk.css', revision: null },
        { url: '/static/css/849.662ac0d3.chunk.css', revision: null },
        { url: '/static/css/864.c745ec70.chunk.css', revision: null },
        { url: '/static/css/9.59340105.chunk.css', revision: null },
        { url: '/static/css/997.45eb6d00.chunk.css', revision: null },
        { url: '/static/css/main.bb4c226e.css', revision: null },
        { url: '/static/js/152.acde5de1.chunk.js', revision: null },
        { url: '/static/js/27.e116c24e.chunk.js', revision: null },
        { url: '/static/js/527.741a76af.chunk.js', revision: null },
        { url: '/static/js/596.63c38699.chunk.js', revision: null },
        { url: '/static/js/653.0ad22251.chunk.js', revision: null },
        { url: '/static/js/69.cba7f6df.chunk.js', revision: null },
        { url: '/static/js/849.6956374b.chunk.js', revision: null },
        { url: '/static/js/864.d3455417.chunk.js', revision: null },
        { url: '/static/js/9.c5fabb72.chunk.js', revision: null },
        { url: '/static/js/997.e2316830.chunk.js', revision: null },
        { url: '/static/js/main.e1c7b40f.js', revision: null },
        {
          url: '/static/js/main.e1c7b40f.js.LICENSE.txt',
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
