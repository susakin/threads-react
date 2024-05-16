'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [596],
  {
    6596: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return x;
          },
        });
      var i = t(1413),
        a = t(9439),
        o = t(7313),
        r = t(9659),
        s = t(4113),
        c = {
          media: 'MQOIJ',
          'media-viewer-content': 'Q1RUU',
          'fade-in': 'JCOie',
          'scroll-in': 'mn9cY',
          'scale-in': 'gl44a',
          focus: 'PtFdy',
          auth: 'BVUnl',
          'auth-inner': 'dgYgz',
          'auth-inner-logo': 'tUGUm',
          'auth-inner-form': 'TPii7',
          'auth-inner-form-title': 's4NFc',
          'auth-inner-form-item': 'onlif',
          'auth-inner-form-item-input': 'WTUsT',
          'auth-inner-form-submit-button': 'IoVZg',
        },
        u = t(8048),
        l = t(5681),
        d = t(8420),
        m = t(738),
        f = t.n(m),
        h = t(8467),
        v = t(6417),
        p = 'auth',
        x = function () {
          var n = (0, o.useState)({}),
            e = (0, a.Z)(n, 2),
            t = e[0],
            m = e[1],
            x = (0, o.useRef)(null),
            N = (0, o.useRef)(null),
            g = (0, o.useContext)(d.Vo).state,
            j = (0, h.s0)(),
            b = (0, o.useContext)(d.Vo).dispatch,
            w = (0, u.i)(l.x4, {
              manual: !0,
              onSuccess: function (n) {
                f().setItem('token', n.token),
                  b({
                    type: 'SET_USER',
                    payload: {
                      user: null === n || void 0 === n ? void 0 : n.user,
                    },
                  }),
                  j('/');
              },
            }),
            C = w.run,
            k = w.loading;
          return (
            (0, o.useLayoutEffect)(
              function () {
                g.user && j('/');
              },
              [g.user],
            ),
            (0, v.jsx)('div', {
              className: c[''.concat(p)],
              children: (0, v.jsxs)('div', {
                className: c[''.concat(p, '-inner')],
                children: [
                  (0, v.jsx)('div', {
                    className: c[''.concat(p, '-inner-logo')],
                    children: (0, v.jsx)(r.US, {
                      fill: 'var(--barcelona-primary-icon)',
                      size: '100%',
                      viewBox: '0 0 192 192',
                    }),
                  }),
                  (0, v.jsxs)('div', {
                    className: c[''.concat(p, '-inner-form')],
                    children: [
                      (0, v.jsx)('div', {
                        className: c[''.concat(p, '-inner-form-title')],
                        children: '\u8d26\u6237\u767b\u5f55',
                      }),
                      (0, v.jsx)('div', {
                        className: c[''.concat(p, '-inner-form-item')],
                        children: (0, v.jsx)('input', {
                          className: c[''.concat(p, '-inner-form-item-input')],
                          placeholder: '\u8d26\u53f7',
                          autoComplete: 'account',
                          ref: x,
                          onChange: function (n) {
                            m(function (e) {
                              return (0, i.Z)(
                                (0, i.Z)({}, e),
                                {},
                                { account: n.target.value },
                              );
                            });
                          },
                        }),
                      }),
                      (0, v.jsx)('div', {
                        className: c[''.concat(p, '-inner-form-item')],
                        children: (0, v.jsx)('input', {
                          className: c[''.concat(p, '-inner-form-item-input')],
                          autoComplete: 'current-password',
                          placeholder: '\u5bc6\u7801',
                          ref: N,
                          type: 'password',
                          onChange: function (n) {
                            m(function (e) {
                              return (0, i.Z)(
                                (0, i.Z)({}, e),
                                {},
                                { password: n.target.value },
                              );
                            });
                          },
                        }),
                      }),
                      (0, v.jsx)('div', {
                        className: c[''.concat(p, '-inner-form-submit')],
                        children: (0, v.jsx)(s.zx, {
                          type: 'primary',
                          disabled:
                            !(null !== t && void 0 !== t && t.account) ||
                            !t.password,
                          disableClickWhenDisabled: !1,
                          className:
                            c[''.concat(p, '-inner-form-submit-button')],
                          onClick: function () {
                            var n, e;
                            return t.account
                              ? t.password
                                ? void C(t)
                                : (null === N ||
                                    void 0 === N ||
                                    null === (e = N.current) ||
                                    void 0 === e ||
                                    e.focus(),
                                  void s.FN.show(
                                    '\u8bf7\u8f93\u5165\u4f60\u7684\u5bc6\u7801',
                                  ))
                              : (null === x ||
                                  void 0 === x ||
                                  null === (n = x.current) ||
                                  void 0 === n ||
                                  n.focus(),
                                void s.FN.show(
                                  '\u8bf7\u8f93\u5165\u4f60\u7684\u8d26\u53f7',
                                ));
                          },
                          loading: k,
                          size: 'large',
                          children: '\u767b\u5f55',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
    },
  },
]);
