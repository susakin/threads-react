'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [751],
  {
    1751: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return N;
          },
        });
      var i = t(7313),
        o = t(813),
        s = {
          auth: 'BVUnl',
          'auth-inner': 'dgYgz',
          'auth-inner-logo': 'tUGUm',
        },
        a = t(8420),
        c = t(8467),
        u = t(1413),
        l = t(9439),
        r = {
          media: 'y8Yjv',
          'media-viewer-content': 'wpN3t',
          'fade-in': 'YCoLA',
          'scroll-in': 'gVtVW',
          'scale-in': 'bMmAe',
          focus: '_480vC',
          login: 'MyYsQ',
          'login-title': 'ia2d_',
          'login-item': 'lmuPR',
          'login-item-input': 'zmVjf',
          'login-submit-button': 'Apuf_',
        },
        d = t(738),
        m = t.n(d),
        v = t(8048),
        f = t(5681),
        h = t(6975),
        p = t(6417),
        g = 'login',
        x = function (n) {
          var e = n.onLoginSuccess,
            t = (0, i.useState)({}),
            o = (0, l.Z)(t, 2),
            s = o[0],
            c = o[1],
            d = (0, i.useRef)(null),
            x = (0, i.useRef)(null),
            j = (0, i.useContext)(a.Vo).dispatch,
            N = (0, v.i)(f.x4, {
              manual: !0,
              onSuccess: function (n) {
                m().setItem('token', n.token),
                  j({
                    type: 'SET_USER',
                    payload: {
                      user: null === n || void 0 === n ? void 0 : n.user,
                    },
                  }),
                  null === e || void 0 === e || e();
              },
            }),
            b = N.run,
            w = N.loading;
          return (0, p.jsxs)('div', {
            className: r[''.concat(g)],
            children: [
              (0, p.jsx)('div', {
                className: r[''.concat(g, '-title')],
                children: '\u8d26\u6237\u767b\u5f55',
              }),
              (0, p.jsx)('div', {
                className: r[''.concat(g, '-item')],
                children: (0, p.jsx)('input', {
                  className: r[''.concat(g, '-item-input')],
                  placeholder: '\u8d26\u53f7',
                  autoComplete: 'account',
                  ref: d,
                  onChange: function (n) {
                    c(function (e) {
                      return (0, u.Z)(
                        (0, u.Z)({}, e),
                        {},
                        { account: n.target.value },
                      );
                    });
                  },
                }),
              }),
              (0, p.jsx)('div', {
                className: r[''.concat(g, '-item')],
                children: (0, p.jsx)('input', {
                  className: r[''.concat(g, '-item-input')],
                  autoComplete: 'current-password',
                  placeholder: '\u5bc6\u7801',
                  ref: x,
                  type: 'password',
                  onChange: function (n) {
                    c(function (e) {
                      return (0, u.Z)(
                        (0, u.Z)({}, e),
                        {},
                        { password: n.target.value },
                      );
                    });
                  },
                }),
              }),
              (0, p.jsx)('div', {
                className: r[''.concat(g, '-submit')],
                children: (0, p.jsx)(h.zx, {
                  type: 'primary',
                  disabled:
                    !(null !== s && void 0 !== s && s.account) || !s.password,
                  disableClickWhenDisabled: !1,
                  className: r[''.concat(g, '-submit-button')],
                  onClick: function () {
                    var n, e;
                    return s.account
                      ? s.password
                        ? void b(s)
                        : (null === x ||
                            void 0 === x ||
                            null === (e = x.current) ||
                            void 0 === e ||
                            e.focus(),
                          void h.FN.show(
                            '\u8bf7\u8f93\u5165\u4f60\u7684\u5bc6\u7801',
                          ))
                      : (null === d ||
                          void 0 === d ||
                          null === (n = d.current) ||
                          void 0 === n ||
                          n.focus(),
                        void h.FN.show(
                          '\u8bf7\u8f93\u5165\u4f60\u7684\u8d26\u53f7',
                        ));
                  },
                  loading: w,
                  size: 'large',
                  children: '\u767b\u5f55',
                }),
              }),
            ],
          });
        },
        j = 'auth',
        N = function () {
          var n = (0, i.useContext)(a.Vo).state,
            e = (0, c.s0)();
          return (
            (0, i.useLayoutEffect)(
              function () {
                n.user && e('/');
              },
              [n.user],
            ),
            (0, p.jsx)('div', {
              className: s[''.concat(j)],
              children: (0, p.jsxs)('div', {
                className: s[''.concat(j, '-inner')],
                children: [
                  (0, p.jsx)('div', {
                    className: s[''.concat(j, '-inner-logo')],
                    children: (0, p.jsx)(o.US, {
                      fill: 'var(--barcelona-primary-icon)',
                      size: '100%',
                      viewBox: '0 0 192 192',
                    }),
                  }),
                  (0, p.jsx)(x, {
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
