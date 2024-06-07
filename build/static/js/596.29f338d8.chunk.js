'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [596],
  {
    6596: function (n, e, c) {
      c.r(e),
        c.d(e, {
          default: function () {
            return f;
          },
        });
      var a = c(7313),
        i = c(813),
        s = {
          media: 'MQOIJ',
          'media-viewer-content': 'Q1RUU',
          'fade-in': 'JCOie',
          'scroll-in': 'mn9cY',
          'scale-in': 'gl44a',
          focus: 'PtFdy',
          auth: 'BVUnl',
          'auth-inner': 'dgYgz',
          'auth-inner-logo': 'tUGUm',
        },
        t = c(8420),
        o = c(8467),
        r = c(8889),
        u = c(340),
        l = c(6417),
        d = 'auth',
        f = function () {
          var n = (0, a.useContext)(t.Vo).state,
            e = (0, u.v)(),
            c = (0, o.s0)();
          return (
            (0, a.useLayoutEffect)(
              function () {
                n.user && c('/');
              },
              [n.user],
            ),
            (0, l.jsx)('div', {
              className: s[''.concat(d)],
              children: (0, l.jsxs)('div', {
                className: s[''.concat(d, '-inner')],
                children: [
                  (0, l.jsx)('div', {
                    className: s[''.concat(d, '-inner-logo')],
                    onClick: function () {
                      e.length > 0 ? c(-1) : c('/');
                    },
                    children: (0, l.jsx)(i.US, {
                      fill: 'var(--barcelona-primary-icon)',
                      size: '100%',
                      viewBox: '0 0 192 192',
                    }),
                  }),
                  (0, l.jsx)(r.Z, {
                    onLoginSuccess: function () {
                      c('/');
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
