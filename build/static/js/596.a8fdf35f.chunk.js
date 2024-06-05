'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [596],
  {
    6596: function (n, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return h;
          },
        });
      var a = s(7313),
        t = s(813),
        c = {
          auth: 'BVUnl',
          'auth-inner': 'dgYgz',
          'auth-inner-logo': 'tUGUm',
        },
        r = s(8420),
        i = s(8467),
        u = s(8889),
        o = s(6417),
        l = 'auth',
        h = function () {
          var n = (0, a.useContext)(r.Vo).state,
            e = (0, i.s0)();
          return (
            (0, a.useLayoutEffect)(
              function () {
                n.user && e('/');
              },
              [n.user],
            ),
            (0, o.jsx)('div', {
              className: c[''.concat(l)],
              children: (0, o.jsxs)('div', {
                className: c[''.concat(l, '-inner')],
                children: [
                  (0, o.jsx)('div', {
                    className: c[''.concat(l, '-inner-logo')],
                    children: (0, o.jsx)(t.US, {
                      fill: 'var(--barcelona-primary-icon)',
                      size: '100%',
                      viewBox: '0 0 192 192',
                    }),
                  }),
                  (0, o.jsx)(u.Z, {
                    onLoginSuccess: function () {
                      e('/');
                    },
                  }),
                ],
              }),
            })
          );
        };
    },
  },
]);
