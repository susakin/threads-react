'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [9],
  {
    9009: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return D;
          },
        });
      var t = i(9439),
        c = i(7313),
        s = {
          media: 'ebGUI',
          'media-viewer-content': 'DpaSM',
          'fade-in': 'JpsYf',
          'scroll-in': 'wcgEU',
          'scale-in': 'ks462',
          focus: 'QlNig',
          'settings-title': 'UePeV',
          settings: 'd_0v6',
        },
        a = i(1049),
        o = i(8467),
        l = i(4733),
        r = {
          media: 'R6ib8',
          'media-viewer-content': 'Y73mS',
          'fade-in': 'lMHE5',
          'scroll-in': 'uvtzx',
          'scale-in': 'c6j5T',
          focus: 'MLZn1',
          privacy: 'BGpB9',
          'privacy-mention': 'MUKIL',
          'privacy-mention-text': 'YniuD',
        },
        d = i(6098),
        u = i(813),
        m = i(8420),
        v = i(6515),
        f = i(8048),
        h = i(3201),
        x = i(5146),
        j = {
          media: 'bCmu0',
          'media-viewer-content': 'n0tW8',
          'fade-in': 'P7EsI',
          'scroll-in': 'fdaPf',
          'scale-in': 'RrrTl',
          focus: 'zsVNf',
          'setting-actions': 'fFstc',
          'setting-actions-item': 'B8ksY',
          'setting-actions-item-icon': 'qRQWO',
          'setting-actions-item-label': 'iBgCA',
          'setting-actions-split': 'Gfx3Q',
        },
        N = i(6417),
        p = 'setting-actions',
        b = function (e) {
          var n = e.items;
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)('div', {
                className: j[''.concat(p)],
                children:
                  null === n || void 0 === n
                    ? void 0
                    : n.map(function (e, n) {
                        return (0, N.jsxs)(
                          'div',
                          {
                            className: j[''.concat(p, '-item')],
                            style: { cursor: e.onClick ? 'pointer' : '' },
                            onClick: e.onClick,
                            children: [
                              e.icon &&
                                (0, N.jsx)('div', {
                                  className: j[''.concat(p, '-item-icon')],
                                  children: e.icon,
                                }),
                              (0, N.jsx)('div', {
                                className: j[''.concat(p, '-item-label')],
                                children: e.label,
                              }),
                              (0, N.jsx)('div', {
                                className: j[''.concat(p, '-item-action')],
                                children: e.action,
                              }),
                            ],
                          },
                          n,
                        );
                      }),
              }),
              (0, N.jsx)('div', {
                className: j[''.concat(p, '-split')],
                children: (0, N.jsx)('hr', {}),
              }),
            ],
          });
        },
        C = { 'mention-modal': 'MeNYh' },
        g = i(2706),
        w = i(9477),
        Z = {
          media: 'fAsfF',
          'media-viewer-content': 'QACJh',
          'fade-in': 'WP9f8',
          'scroll-in': 'BytaP',
          'scale-in': 'KKFS7',
          focus: 'rXNkl',
          'mention-auth': 'c1T8b',
          'mention-auth-title': 'F53NB',
          'mention-auth-title-text': 'e_di1',
          'mention-auth-hint': 'YqlAp',
          'mention-auth-hint-title': 'aX6cf',
          'mention-auth-hint-text': 'rBzHr',
        },
        y = 'mention-auth',
        k = function (e) {
          var n = e.hiddenTitle,
            i = (0, m.xJ)(),
            s = (0, c.useContext)(m.Vo).dispatch,
            a = (0, f.i)(h.Nq, {
              manual: !0,
              onSuccess: function (e, n) {
                var i = (0, t.Z)(n, 1)[0];
                s({
                  type: 'UPDATE_USER',
                  payload: { user: { mentionAuth: i.mentionAuth } },
                });
              },
            }).run;
          return (0, N.jsxs)('div', {
            className: Z[''.concat(y)],
            children: [
              !n &&
                (0, N.jsx)('div', {
                  className: Z[''.concat(y, '-title')],
                  children: (0, N.jsx)('div', {
                    className: Z[''.concat(y, '-title-text')],
                    children: '\u63d0\u53ca',
                  }),
                }),
              (0, N.jsxs)('div', {
                className: Z[''.concat(y, '-hint')],
                children: [
                  (0, N.jsx)('div', {
                    className: Z[''.concat(y, '-hint-title')],
                    children:
                      '\u5141\u8bb8\u4ee5\u4e0b\u7528\u6237 @ \u63d0\u53ca\u4f60',
                  }),
                  (0, N.jsx)('div', {
                    className: Z[''.concat(y, '-hint-text')],
                    children:
                      '\u9009\u62e9\u8c01\u80fd\u591f\u5728\u4e32\u6587\u3001\u56de\u590d\u6216\u4e2a\u6027\u7b7e\u540d\u4e2d @ \u63d0\u53ca\u4f60\uff0c\u4ee5\u5173\u8054\u4f60\u7684\u4e3b\u9875\u3002\u5f53\u7528\u6237\u5c1d\u8bd5 @ \u63d0\u53ca\u4f60\u65f6\uff0cTA \u4f1a\u770b\u5230\u4f60\u4e0d\u5141\u8bb8\u522b\u4eba @ \u63d0\u53ca\u4f60\u3002',
                  }),
                ],
              }),
              (0, N.jsx)(w.Z, {
                defaultValue:
                  (null === i || void 0 === i ? void 0 : i.mentionAuth) ||
                  'everyone',
                onChange: function (e) {
                  a({ mentionAuth: e });
                },
                options: [
                  { label: '\u6240\u6709\u4eba', value: 'everyone' },
                  {
                    value: 'following',
                    label: '\u4f60\u5173\u6ce8\u7684\u4e3b\u9875',
                  },
                  { value: 'noboby', label: '\u65e0\u4eba' },
                ],
              }),
            ],
          });
        },
        T = i(6401),
        z = i(4110),
        B = function (e) {
          var n = e.visible,
            i = e.onClose,
            t = (0, g.Z)().viewportWidth <= 699,
            c = (0, N.jsx)(k, { hiddenTitle: t });
          return t
            ? (0, N.jsx)(T.pH, {
                visible: n,
                onCancel: i,
                title: '\u63d0\u53ca',
                okText: null,
                children: c,
              })
            : (0, N.jsx)(z.Z, {
                visible: n,
                onClose: i,
                animationType: 'scale-in',
                className: C[''.concat('mention-modal')],
                children: c,
              });
        },
        A = 'privacy',
        E = function () {
          var e = (0, c.useContext)(m.Vo),
            n = e.state,
            i = e.dispatch,
            s = n.user,
            a = (0, c.useState)(!1),
            o = (0, t.Z)(a, 2),
            l = o[0],
            j = o[1],
            p = (0, f.i)(h.Nq, {
              manual: !0,
              onSuccess: function (e, n) {
                var c = (0, t.Z)(n, 1)[0];
                x.Z.show('\u8bbe\u7f6e\u5df2\u4fdd\u5b58\u3002'),
                  i({
                    type: 'UPDATE_USER',
                    payload: { user: { isPrivate: c.isPrivate } },
                  });
              },
            }).run,
            C = [
              {
                icon: (0, N.jsx)(u.HE, { viewBox: '0 0 14 21', size: 24 }),
                label: '\u79c1\u5bc6\u4e3b\u9875',
                action: (0, N.jsx)(d.Z, {
                  size: 'small',
                  checked: null === s || void 0 === s ? void 0 : s.isPrivate,
                  onChange: function (e) {
                    v.Z.confirm({
                      title: e
                        ? '\u5207\u6362\u4e3a\u79c1\u5bc6\u4e3b\u9875\uff1f'
                        : '\u5207\u6362\u4e3a\u516c\u5f00\u4e3b\u9875\uff1f',
                      content: e
                        ? '\u53ea\u6709\u6279\u51c6\u7684\u7c89\u4e1d\u624d\u80fd\u67e5\u770b\u4f60\u7684\u5185\u5bb9\u5e76\u4e0e\u4e4b\u4e92\u52a8\u3002'
                        : 'Threads \u5185\u5916\u7684\u4efb\u4f55\u4eba\u90fd\u80fd\u770b\u5230\u4f60\u7684\u5185\u5bb9\u5e76\u4e0e\u4e4b\u4e92\u52a8\u3002',
                      onOk: function () {
                        p({ isPrivate: e });
                      },
                    });
                  },
                }),
              },
              {
                icon: (0, N.jsx)(u.US, { viewBox: '0 0 192 192', size: 24 }),
                label: '\u63d0\u53ca',
                action: (0, N.jsxs)('div', {
                  className: r[''.concat(A, '-mention')],
                  children: [
                    (0, N.jsx)('div', {
                      className: r[''.concat(A, '-mention-text')],
                      children: {
                        everyone: '\u6240\u6709\u4eba',
                        noboby: '\u65e0\u4eba',
                        following: '\u4f60\u5173\u6ce8\u7684\u4e3b\u9875',
                      }[null === s || void 0 === s ? void 0 : s.mentionAuth],
                    }),
                    (0, N.jsx)(u.Nm, {
                      viewBox: '0 0 24 24',
                      size: 16,
                      style: {
                        transform: 'rotate(180deg)',
                        color: 'var(--barcelona-secondary-icon)',
                      },
                    }),
                  ],
                }),
                onClick: function () {
                  j(!0);
                },
              },
            ];
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)('div', {
                className: r[''.concat(A)],
                children: (0, N.jsx)(b, { items: C }),
              }),
              (0, N.jsx)(B, {
                visible: l,
                onClose: function () {
                  j(!1);
                },
              }),
            ],
          });
        },
        P = { account: 'bH4fi' },
        S = { 'delete-modal': 'wybzv' },
        U = {
          media: 'air4e',
          'media-viewer-content': 'mBPjA',
          'fade-in': 'X36ua',
          'scroll-in': 'UzRkN',
          'scale-in': 'C4zzA',
          focus: 'WvfSQ',
          'delete-account': 'wnOQZ',
          'delete-account-title': 'CPTcV',
          'delete-account-user': 'lpf06',
          'delete-account-user-avatar': 'Ec99V',
          'delete-account-user-profile': 'h8TMd',
          'delete-account-user-profile-username': 'dgjjI',
          'delete-account-user-profile-full-name': 'n9mob',
          'delete-account-hint': 'FtsUh',
          'delete-account-hint-item': '_r7oX',
          'delete-account-hint-item-title': 'XGGBu',
          'delete-account-hint-item-text': 'JI2FK',
          'delete-account-action': 'DBEN6',
          'delete-account-action-button': 'qpUz2',
        },
        V = i(9904),
        F = i(6023),
        M = i(6123),
        Y = i.n(M),
        _ = 'delete-account',
        I = function (e) {
          var n = e.hiddenTitle,
            i = void 0 !== n && n,
            t = e.className,
            s = e.onConfirm,
            a = (0, c.useContext)(m.Vo).state.user;
          return (0, N.jsxs)('div', {
            className: Y()(U[''.concat(_)], t),
            children: [
              !i &&
                (0, N.jsx)('div', {
                  className: U[''.concat(_, '-title')],
                  children: '\u5220\u9664\u4e3b\u9875',
                }),
              (0, N.jsxs)('div', {
                className: U[''.concat(_, '-user')],
                children: [
                  (0, N.jsx)('div', {
                    className: U[''.concat(_, '-user-avatar')],
                    children: (0, N.jsx)(V.Z, {
                      size: 44,
                      url:
                        null === a || void 0 === a ? void 0 : a.profilePicUrl,
                    }),
                  }),
                  (0, N.jsxs)('div', {
                    className: U[''.concat(_, '-user-profile')],
                    children: [
                      (0, N.jsxs)('div', {
                        className: U[''.concat(_, '-user-profile-username')],
                        children: [
                          '@',
                          null === a || void 0 === a ? void 0 : a.username,
                        ],
                      }),
                      (0, N.jsx)('div', {
                        className: U[''.concat(_, '-user-profile-full-name')],
                        children:
                          null === a || void 0 === a ? void 0 : a.fullName,
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsx)('div', {
                className: U[''.concat(_, '-hint')],
                children: (0, N.jsxs)('div', {
                  className: U[''.concat(_, '-hint-item')],
                  children: [
                    (0, N.jsx)('div', {
                      className: U[''.concat(_, '-hint-item-title')],
                      children:
                        '\u5220\u9664\u4e3b\u9875\u662f\u6c38\u4e45\u6027\u64cd\u4f5c',
                    }),
                    (0, N.jsx)('div', {
                      className: U[''.concat(_, '-hint-item-text')],
                      children:
                        '\u4f60\u7684 Threads \u4e3b\u9875\u3001\u5185\u5bb9\u3001\u8d5e\u548c\u7c89\u4e1d\u5c06\u9690\u85cf\uff0c\u8d26\u53f7\u4f1a\u88ab\u7acb\u5373\u5220\u9664\u3002',
                    }),
                  ],
                }),
              }),
              (0, N.jsx)('div', {
                className: U[''.concat(_, '-action')],
                children: (0, N.jsx)(F.Z, {
                  className: U[''.concat(_, '-action-button')],
                  onClick: s,
                  children: '\u5220\u9664\u4e3b\u9875',
                }),
              }),
            ],
          });
        },
        O = i(4942),
        R = {
          media: 'PIAjp',
          'media-viewer-content': 'vR4GE',
          'fade-in': 'eMuNc',
          'scroll-in': 'oSKeo',
          'scale-in': 'NCIuV',
          focus: 'FR0rQ',
          'delete-confirm': 'C3pOJ',
          'delete-confirm-title': 'pkYoV',
          'delete-confirm-title-action': 'CBzps',
          'delete-confirm-title-text': 'KWomV',
          'delete-confirm-form': 'jiaW9',
          'delete-confirm-form-user': 'X5YFo',
          'delete-confirm-form-user-profile': 'NkD6r',
          'delete-confirm-form-user-profile-label': 'h27Zq',
          'delete-confirm-form-user-profile-username': 'Owss_',
          'delete-confirm-form-user-password': 'V_zYO',
          'delete-confirm-form-user-password-input': 'u4uG1',
          'delete-confirm-submit': 'Y_dZ0',
          'delete-confirm-submit-button': 'iMZd8',
          'delete-confirm-submit-button-disabled': 'MCArI',
        },
        W = 'delete-confirm',
        G = function (e) {
          var n = e.className,
            i = e.hiddenTitle,
            s = e.onBack,
            a = (0, c.useState)(''),
            o = (0, t.Z)(a, 2),
            l = o[0],
            r = o[1],
            d = (0, c.useContext)(m.Vo).state.user,
            x = (0, f.i)(h.h8, {
              manual: !0,
              ignoreErrorMsg: !0,
              onSuccess: function () {
                window.location.reload();
              },
              onError: function () {
                r(''),
                  v.Z.confirm({
                    title: '\u5bc6\u7801\u6709\u8bef',
                    content:
                      '\u4f60\u8f93\u5165\u7684\u5bc6\u7801\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u3002',
                    cancelText: null,
                    okText: '\u91cd\u8bd5',
                  });
              },
            }),
            j = x.run,
            p = x.loading,
            b = 0 === (null === l || void 0 === l ? void 0 : l.length);
          return (0, N.jsxs)('div', {
            className: Y()(R[''.concat(W)], n),
            children: [
              !i &&
                (0, N.jsxs)('div', {
                  className: R[''.concat(W, '-title')],
                  children: [
                    (0, N.jsx)('div', {
                      className: R[''.concat(W, '-title-action')],
                      onClick: s,
                      children: (0, N.jsx)(u.Eh, {
                        viewBox: '0 0 24 24',
                        size: 20,
                      }),
                    }),
                    (0, N.jsx)('div', {
                      className: R[''.concat(W, '-title-text')],
                      children:
                        '\u767b\u5f55\u4ee5\u6c38\u4e45\u5220\u9664\u4f60\u7684 Threads \u4e3b\u9875',
                    }),
                  ],
                }),
              (0, N.jsxs)('div', {
                className: R[''.concat(W, '-form')],
                children: [
                  (0, N.jsxs)('div', {
                    className: R[''.concat(W, '-form-user')],
                    children: [
                      (0, N.jsxs)('div', {
                        className: R[''.concat(W, '-form-user-profile')],
                        children: [
                          (0, N.jsx)('div', {
                            className:
                              R[''.concat(W, '-form-user-profile-label')],
                            children: '\u8d26\u53f7',
                          }),
                          (0, N.jsxs)('div', {
                            className:
                              R[''.concat(W, '-form-user-profile-username')],
                            children: [
                              '@',
                              null === d || void 0 === d ? void 0 : d.username,
                            ],
                          }),
                        ],
                      }),
                      (0, N.jsx)('div', {
                        className: R[''.concat(W, '-form-user-avatar')],
                        children: (0, N.jsx)(V.Z, {
                          size: 44,
                          url:
                            null === d || void 0 === d
                              ? void 0
                              : d.profilePicUrl,
                        }),
                      }),
                    ],
                  }),
                  (0, N.jsxs)('div', {
                    className: R[''.concat(W, '-form-user-password')],
                    children: [
                      (0, N.jsx)('div', {
                        className: R[''.concat(W, '-form-user-password-label')],
                        children: '\u5bc6\u7801',
                      }),
                      (0, N.jsx)('input', {
                        value: l,
                        onChange: function (e) {
                          r(e.target.value);
                        },
                        placeholder: '\u8bf7\u8f93\u5165\u5bc6\u7801',
                        className: R[''.concat(W, '-form-user-password-input')],
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsx)('div', {
                className: R[''.concat(W, '-submit')],
                children: (0, N.jsx)(F.Z, {
                  loading: p,
                  className: Y()(
                    R[''.concat(W, '-submit-button')],
                    (0, O.Z)({}, R[''.concat(W, '-submit-button-disabled')], b),
                  ),
                  disabled: b,
                  onClick: function () {
                    j(l);
                  },
                  children: '\u5220\u9664 Threads \u4e3b\u9875',
                }),
              }),
            ],
          });
        },
        K = function (e) {
          var n = e.visible,
            i = e.onClose,
            s = (0, g.Z)().viewportWidth <= 699,
            a = (0, c.useState)(!1),
            o = (0, t.Z)(a, 2),
            l = o[0],
            r = o[1];
          (0, c.useEffect)(
            function () {
              !n && r(!1);
            },
            [n],
          );
          var d = l
            ? (0, N.jsx)(G, {
                hiddenTitle: s,
                onBack: function () {
                  r(!1);
                },
              })
            : (0, N.jsx)(I, {
                onConfirm: function () {
                  r(!0);
                },
                hiddenTitle: s,
              });
          return s
            ? (0, N.jsx)(T.pH, {
                visible: n,
                onCancel: i,
                title: '\u5220\u9664\u4e3b\u9875',
                onOk: function () {
                  r(!1);
                },
                okText: l ? '\u8fd4\u56de' : null,
                children: d,
              })
            : (0, N.jsx)(z.Z, {
                visible: n,
                onClose: i,
                animationType: 'scale-in',
                className: S[''.concat('delete-modal')],
                children: d,
              });
        },
        Q = function () {
          var e = (0, c.useState)(!1),
            n = (0, t.Z)(e, 2),
            i = n[0],
            s = n[1],
            a = [
              {
                label: '\u5220\u9664\u4e3b\u9875',
                action: (0, N.jsx)(u.Nm, {
                  viewBox: '0 0 24 24',
                  size: 16,
                  style: {
                    transform: 'rotate(180deg)',
                    color: 'var(--barcelona-secondary-icon)',
                  },
                }),
                onClick: function () {
                  s(!0);
                },
              },
            ];
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)('div', {
                className: P[''.concat('account')],
                children: (0, N.jsx)(b, { items: a }),
              }),
              (0, N.jsx)(K, {
                visible: i,
                onClose: function () {
                  s(!1);
                },
              }),
            ],
          });
        },
        q = 'settings',
        D = function () {
          var e = (0, o.UO)().action,
            n = (0, o.s0)(),
            i = ['privacy', 'account'],
            r = (0, c.useState)(),
            d = (0, t.Z)(r, 2),
            u = d[0],
            m = d[1];
          return (
            (0, c.useEffect)(function () {
              i.includes(e)
                ? m(e)
                : (n('/settings/privacy', { replace: !0 }), m('privacy'));
            }, []),
            (0, N.jsx)(a._z, {
              children: (0, N.jsxs)('div', {
                className: s[''.concat(q)],
                children: [
                  (0, N.jsx)('div', {
                    className: s[''.concat(q, '-title')],
                    children: '\u8bbe\u7f6e',
                  }),
                  (0, N.jsxs)(l.Z, {
                    activeKey: u,
                    onChange: function (e) {
                      !(function (e) {
                        m(e), n('/settings/'.concat(e), { replace: !0 });
                      })(e);
                    },
                    children: [
                      (0, N.jsx)(
                        l.Z.Tab,
                        { title: '\u9690\u79c1', children: (0, N.jsx)(E, {}) },
                        'privacy',
                      ),
                      (0, N.jsx)(
                        l.Z.Tab,
                        { title: '\u8d26\u6237', children: (0, N.jsx)(Q, {}) },
                        'account',
                      ),
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
