'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [753],
  {
    2753: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return Ue;
          },
        });
      var l = i(1413),
        o = i(9439),
        a = i(7313),
        t = i(8467),
        r = i(4134),
        s = i(4113),
        c = i(9659),
        u = {
          media: 'myphf',
          'media-viewer-content': 'PYbOk',
          'fade-in': 'aiVqj',
          'scroll-in': 'ksJV2',
          'scale-in': 'JSQnG',
          focus: 'ESMRO',
          'profile-summary': 'YxTot',
          'profile-summary-header': 'AVHXs',
          'profile-summary-header-name': 'xMHB6',
          'profile-summary-header-name-full-name': 'rmJ0A',
          'profile-summary-header-name-full-name-text': 'lC3zZ',
          'profile-summary-header-name-username': 'jOGmx',
          'profile-summary-header-avatar': 'KcUBC',
          'profile-summary-header-avatar-badge': '_wTQ_',
          'profile-summary-header-biography': 'ByxAh',
          'profile-summary-biography': 'Qxgjj',
        },
        d = i(4942),
        v = i(4110),
        f = i(4165),
        p = i(5861),
        m = {
          media: 'TEOn3',
          'media-viewer-content': 'Q8F8D',
          'fade-in': 'JBbz9',
          'scroll-in': 'tShwl',
          'scale-in': 'WZRtS',
          focus: 'XZSL4',
          'follower-tabs': 'BNPTX',
          'follower-tabs-header': 'XtrVu',
          'follower-tabs-user': 'NcNup',
          'tabs-title-label': 'SiMA7',
          'tabs-title-count': 'tQm9q',
        },
        h = i(3201),
        x = i(6417),
        b = function (e) {
          var n = e.label,
            i = e.count,
            l = 'tabs-title';
          return (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)('span', {
                className: m[''.concat(l, '-label')],
                children: n,
              }),
              (0, x.jsx)('span', {
                className: m[''.concat(l, '-count')],
                children: (0, x.jsx)(s.T0, { value: i || 0 }),
              }),
            ],
          });
        },
        g = 'follower-tabs',
        j = function (e) {
          var n = e.user,
            i = n || {},
            l = i.followerCount,
            o = i.followingCount,
            t = i.username,
            c = (0, a.useMemo)(function () {
              return { uid: null === n || void 0 === n ? void 0 : n.id };
            }, []),
            u = (function () {
              var e = (0, p.Z)(
                (0, f.Z)().mark(function e(n) {
                  var i, l, o, a, t, r, s, c;
                  return (0, f.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (l = n.page),
                            (o = n.pageSize),
                            (a = n.uid),
                            (e.next = 3),
                            (0, h.$e)(a, { page: l, pageSize: o })
                          );
                        case 3:
                          return (
                            (t = e.sent),
                            (r = t.data),
                            (s = t.code),
                            (c = t.msg),
                            e.abrupt('return', {
                              success: 200 == s,
                              msg: c,
                              data:
                                null === r ||
                                void 0 === r ||
                                null === (i = r.users) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return { user: e, id: e.id };
                                    }),
                              total:
                                null === r || void 0 === r ? void 0 : r.total,
                            })
                          );
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            d = (function () {
              var e = (0, p.Z)(
                (0, f.Z)().mark(function e(n) {
                  var i, l, o, a, t, r, s, c;
                  return (0, f.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (l = n.page),
                            (o = n.pageSize),
                            (a = n.uid),
                            (e.next = 3),
                            (0, h.nX)(a, { page: l, pageSize: o })
                          );
                        case 3:
                          return (
                            (t = e.sent),
                            (r = t.data),
                            (s = t.code),
                            (c = t.msg),
                            e.abrupt('return', {
                              success: 200 == s,
                              msg: c,
                              data:
                                null === r ||
                                void 0 === r ||
                                null === (i = r.users) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return { user: e, id: e.id };
                                    }),
                              total:
                                null === r || void 0 === r ? void 0 : r.total,
                            })
                          );
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (0, x.jsx)('div', {
            className: m[''.concat(g)],
            children: (0, x.jsxs)(s.mQ, {
              headerClassName: m[''.concat(g, '-header')],
              disabledContentScroll: !1,
              children: [
                (0, x.jsx)(
                  s.mQ.Tab,
                  {
                    title: (0, x.jsx)(b, { label: '\u7c89\u4e1d', count: l }),
                    children: (0, x.jsx)(r.Z7, {
                      request: u,
                      params: c,
                      hasFollower: !1,
                      hasFollow: !0,
                      emptyPlaceholder: ''.concat(
                        t,
                        '\u8fd8\u6ca1\u6709\u4efb\u4f55\u7c89\u4e1d\u3002',
                      ),
                      itemClassName: m[''.concat(g, '-user')],
                    }),
                  },
                  'follower',
                ),
                (0, x.jsx)(
                  s.mQ.Tab,
                  {
                    title: (0, x.jsx)(b, {
                      label: '\u5df2\u5173\u6ce8',
                      count: o,
                    }),
                    children: (0, x.jsx)(r.Z7, {
                      request: d,
                      hasFollower: !1,
                      hasFollow: !0,
                      params: c,
                      emptyPlaceholder: ''.concat(
                        t,
                        '\u8fd8\u6ca1\u6709\u4efb\u4f55\u5173\u6ce8\u8005\u3002',
                      ),
                      itemClassName: m[''.concat(g, '-user')],
                    }),
                  },
                  'followed',
                ),
              ],
            }),
          });
        },
        w = i(2706),
        Z = function (e) {
          var n = e.visible,
            i = e.onClose,
            l = e.user,
            o = (0, w.Z)().viewportWidth < 700 ? s.GI : v.Z;
          return (0, x.jsx)(o, {
            visible: n,
            onClose: i,
            style: { width: 520 },
            children: (0, x.jsx)(j, { user: l }),
          });
        },
        N = i(6123),
        S = i.n(N),
        y = {
          media: 'UcyVj',
          'media-viewer-content': 'nCblV',
          'fade-in': 'bBmxF',
          'scroll-in': 'huu7_',
          'scale-in': 's68pk',
          focus: 'GVtwK',
          'profile-item': 'iHr1x',
          'profile-item-label': 'xGyOX',
          'profile-item-value': 'fC878',
          'profile-modal': 'MHdQf',
          'profile-modal-inner': 'wMwxP',
          'profile-modal-inner-item': 'W7vJB',
          'profile-modal-inner-item-badge': 'uqK9I',
          'profile-modal-inner-item-avatar': 'dBd5a',
          'profile-modal-inner-item-last': 'WQ6VW',
        },
        C = i(658),
        k = i.n(C),
        U = function (e) {
          var n = e.label,
            i = e.value,
            l = e.className,
            o = 'profile-item';
          return (0, x.jsxs)('div', {
            className: S()(y[''.concat(o)], l),
            children: [
              (0, x.jsx)('div', {
                className: y[''.concat(o, '-label')],
                children: n,
              }),
              !!i &&
                (0, x.jsx)('div', {
                  className: y[''.concat(o, '-value')],
                  children: i,
                }),
            ],
          });
        },
        F = 'profile-modal',
        B = function (e) {
          var n = e.visible,
            i = e.onClose,
            l = e.user || {},
            o = l.fullName,
            a = l.username,
            t = l.isVerified,
            r = l.profilePicUrl,
            u = l.createdAt,
            f = l.rank,
            p = l.location,
            m = (0, w.Z)().viewportWidth <= 699,
            h = [
              {
                label: '\u540d\u79f0',
                value: (0, x.jsxs)(x.Fragment, {
                  children: [
                    o,
                    '(@',
                    a,
                    t &&
                      (0, x.jsx)(c.we, {
                        fill: 'rgb(0, 149, 246)',
                        size: 12,
                        viewBox: '0 0 40 40',
                        className: y[''.concat(F, '-inner-item-badge')],
                      }),
                    ')',
                  ],
                }),
                suffix: (0, x.jsx)('div', {
                  className: y[''.concat(F, '-inner-item-avatar')],
                  children: (0, x.jsx)(s.qE, { url: r, size: 54 }),
                }),
              },
              {
                label: '\u52a0\u5165\u65f6\u95f4',
                value: (0, x.jsxs)(x.Fragment, {
                  children: [
                    k()(u).format('YYYY\u5e74MM\u6708'),
                    ' \xb7 #',
                    ' ',
                    (0, x.jsx)(s.T0, { value: f }),
                  ],
                }),
              },
              { label: '\u6240\u5728\u5730', value: p },
            ],
            b = (0, x.jsx)('div', {
              className: y[''.concat(F, '-inner')],
              children: h.map(function (e, n) {
                var i = e.label,
                  l = e.value,
                  o = e.suffix;
                return (0, x.jsxs)(
                  'div',
                  {
                    className: y[''.concat(F, '-inner-item')],
                    children: [
                      (0, x.jsx)(U, {
                        label: i,
                        value: l,
                        className: S()(
                          (0, d.Z)(
                            {},
                            y[''.concat(F, '-inner-item-last')],
                            n === h.length - 1,
                          ),
                        ),
                      }),
                      o,
                    ],
                  },
                  n,
                );
              }),
            });
          return m
            ? (0, x.jsx)(s.Wb, { visible: n, onClose: i, children: b })
            : (0, x.jsx)(v.Z, {
                className: y[''.concat(F)],
                visible: n,
                onClose: i,
                animationType: 'scale-in',
                children: b,
              });
        },
        P = {
          media: 'npAvx',
          'media-viewer-content': 'kDa5m',
          'fade-in': 'LMR1d',
          'scroll-in': 'xbGcm',
          'scale-in': 'WJc34',
          focus: 'Wn3m5',
          'profile-follower': 'Y4vc5',
          'profile-follower-preview': 'FqVtH',
          'profile-follower-preview-count': 'RQl_h',
          'profile-follower-action': 'JMyRV',
          'profile-follower-action-button': 'DTAri',
          'profile-follower-bio': 'v6cb7',
          'profile-follower-bio-split': 'J7Roi',
          'profile-follower-bio-link': 'PAAHB',
        },
        q = i(6515),
        z = i(8048),
        R = i(5146),
        T = i(7193),
        L = i(3113),
        A = 'profile-follower',
        E = function (e) {
          var n,
            i,
            t,
            u,
            v = e.user,
            f = e.onUserFieldUpdate,
            p = (0, a.useState)(!1),
            m = (0, o.Z)(p, 2),
            b = m[0],
            g = m[1],
            j = (0, a.useState)(!1),
            w = (0, o.Z)(j, 2),
            N = w[0],
            y = w[1],
            C =
              null === v ||
              void 0 === v ||
              null === (n = v.friendshipStatus) ||
              void 0 === n
                ? void 0
                : n.isOwn,
            k =
              (null === v || void 0 === v ? void 0 : v.isPrivate) &&
              !C &&
              !(
                null !== v &&
                void 0 !== v &&
                null !== (i = v.friendshipStatus) &&
                void 0 !== i &&
                i.following
              ),
            U =
              null === v ||
              void 0 === v ||
              null === (t = v.friendshipStatus) ||
              void 0 === t
                ? void 0
                : t.restricting,
            F = v || {},
            E = F.followerCount,
            O = F.profileContextFacepileUsers,
            Q = F.bioLink,
            V = {
              user: v,
              onUserFriendshipStatusUpdate: function (e, n) {
                null === f ||
                  void 0 === f ||
                  f({
                    friendshipStatus: (0, l.Z)(
                      (0, l.Z)(
                        {},
                        null === v || void 0 === v
                          ? void 0
                          : v.friendshipStatus,
                      ),
                      n,
                    ),
                  });
              },
            },
            M = (0, L.l)(V).item,
            W = (0, T.r)(V).item,
            D = (0, z.i)(h.VR, {
              manual: !0,
              onSuccess: function () {
                R.Z.show('\u5df2\u79fb\u9664'),
                  null === f ||
                    void 0 === f ||
                    f({
                      friendshipStatus: (0, l.Z)(
                        (0, l.Z)(
                          {},
                          null === v || void 0 === v
                            ? void 0
                            : v.friendshipStatus,
                        ),
                        {},
                        { followedBy: !1 },
                      ),
                    });
              },
            }).run,
            K = (0, z.i)(h.as, {
              manual: !0,
              onSuccess: function () {
                R.Z.show('\u5df2\u9650\u5236'),
                  null === f ||
                    void 0 === f ||
                    f({
                      friendshipStatus: (0, l.Z)(
                        (0, l.Z)(
                          {},
                          null === v || void 0 === v
                            ? void 0
                            : v.friendshipStatus,
                        ),
                        {},
                        { restricting: !0 },
                      ),
                    });
              },
            }).run,
            H = (0, z.i)(h.ce, {
              manual: !0,
              onSuccess: function () {
                R.Z.show('\u5df2\u53d6\u6d88\u9650\u5236'),
                  null === f ||
                    void 0 === f ||
                    f({
                      friendshipStatus: (0, l.Z)(
                        (0, l.Z)(
                          {},
                          null === v || void 0 === v
                            ? void 0
                            : v.friendshipStatus,
                        ),
                        {},
                        { restricting: !1 },
                      ),
                    });
              },
            }).run,
            I = (0, a.useMemo)(
              function () {
                var e,
                  n = [
                    {
                      label: '\u5173\u4e8e\u8fd9\u4e2a\u4e3b\u9875',
                      onClick: function () {
                        y(!0);
                      },
                    },
                  ];
                return (
                  null !== v &&
                    void 0 !== v &&
                    null !== (e = v.friendshipStatus) &&
                    void 0 !== e &&
                    e.followedBy &&
                    n.push({
                      label: '\u79fb\u9664\u7c89\u4e1d',
                      onClick: function () {
                        q.Z.confirm({
                          title: '\u79fb\u9664\u7c89\u4e1d\uff1f',
                          content:
                            '\u6211\u4eec\u4e0d\u4f1a\u544a\u8bc9'.concat(
                              null === v || void 0 === v ? void 0 : v.username,
                              '\u4f60\u5c06 TA \u79fb\u9664\u4e86\u3002',
                            ),
                          okText: '\u79fb\u9664',
                          okType: 'danger',
                          onOk: function () {
                            D(null === v || void 0 === v ? void 0 : v.id);
                          },
                        });
                      },
                    }),
                  C ||
                    n.push(
                      M,
                      {
                        label: ''.concat(
                          U ? '\u53d6\u6d88' : '',
                          '\u9650\u5236 ',
                        ),
                        onClick: function () {
                          U
                            ? H(null === v || void 0 === v ? void 0 : v.id)
                            : K(null === v || void 0 === v ? void 0 : v.id);
                        },
                      },
                      W,
                    ),
                  n
                );
              },
              [
                null === v ||
                void 0 === v ||
                null === (u = v.friendshipStatus) ||
                void 0 === u
                  ? void 0
                  : u.followedBy,
                U,
                W,
              ],
            );
          return (0, x.jsxs)('div', {
            className: P[''.concat(A)],
            children: [
              (0, x.jsxs)('div', {
                className: P[''.concat(A, '-preview')],
                onClick: function () {
                  !k && g(!0);
                },
                role: 'button',
                tabIndex: 0,
                children: [
                  (0, x.jsx)(r.EA, {
                    urls:
                      null === O || void 0 === O
                        ? void 0
                        : O.map(function (e) {
                            return e.profilePicUrl;
                          }),
                  }),
                  (0, x.jsxs)('span', {
                    className: S()(
                      (0, d.Z)({}, P[''.concat(A, '-preview-count')], !k),
                    ),
                    children: [
                      (0, x.jsx)(s.T0, { value: E }),
                      ' \u4f4d\u7c89\u4e1d',
                    ],
                  }),
                ],
              }),
              Q &&
                (0, x.jsxs)('div', {
                  className: P[''.concat(A, '-bio')],
                  children: [
                    (0, x.jsx)('span', {
                      className: P[''.concat(A, '-bio-split')],
                      children: '\xb7',
                    }),
                    (0, x.jsx)(s.rU, {
                      className: P[''.concat(A, '-bio-link')],
                      href: Q,
                    }),
                  ],
                }),
              (0, x.jsxs)('div', {
                className: P[''.concat(A, '-action')],
                children: [
                  (0, x.jsx)(s.vC, {
                    size: 24,
                    className: P[''.concat(A, '-action-button')],
                    children: (0, x.jsx)(c.mr, {
                      size: 24,
                      viewBox: '0 0 24 24',
                    }),
                  }),
                  !C &&
                    (0, x.jsx)(s.vC, {
                      size: 24,
                      className: P[''.concat(A, '-action-button')],
                      children: (0, x.jsx)(s.J2, {
                        hideWhenContentClick: !0,
                        placement: 'bottom-end',
                        content: (0, x.jsx)(s.mX, { items: I }),
                        children: (0, x.jsx)(c.HG, {
                          size: 24,
                          viewBox: '0 0 24 24',
                        }),
                      }),
                    }),
                ],
              }),
              (0, x.jsx)(Z, {
                user: v,
                visible: b,
                onClose: function () {
                  g(!1);
                },
              }),
              (0, x.jsx)(B, {
                user: v,
                visible: N,
                onClose: function () {
                  y(!1);
                },
              }),
            ],
          });
        },
        O = 'profile-summary',
        Q = function (e) {
          var n = e.user,
            l = e.onUserFieldUpdate,
            t = (0, a.useState)(!1),
            d = (0, o.Z)(t, 2),
            v = d[0],
            f = d[1],
            p = n || {},
            m = p.fullName,
            h = p.username,
            b = p.profilePicUrl,
            g = p.isVerified,
            j = p.biography,
            w = (0, a.useState)(!1),
            Z = (0, o.Z)(w, 2),
            N = Z[0],
            S = Z[1],
            y = b || i(9389);
          return (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsxs)('div', {
                className: u[''.concat(O)],
                children: [
                  (0, x.jsxs)('div', {
                    className: u[''.concat(O, '-header')],
                    children: [
                      (0, x.jsxs)('div', {
                        className: u[''.concat(O, '-header-name')],
                        children: [
                          (0, x.jsx)('div', {
                            className:
                              u[''.concat(O, '-header-name-full-name')],
                            children: (0, x.jsx)('span', {
                              onClick: function () {
                                S(!0);
                              },
                              role: 'button',
                              tabIndex: 0,
                              className:
                                u[''.concat(O, '-header-name-full-name-text')],
                              children: m,
                            }),
                          }),
                          (0, x.jsx)('div', {
                            className: u[''.concat(O, '-header-name-username')],
                            children: h,
                          }),
                        ],
                      }),
                      (0, x.jsxs)('div', {
                        className: u[''.concat(O, '-header-avatar')],
                        onClick: function () {
                          f(!0);
                        },
                        role: 'button',
                        tabIndex: 0,
                        children: [
                          (0, x.jsx)(s.qE, { url: y, size: '100%' }),
                          g &&
                            (0, x.jsx)('div', {
                              className:
                                u[''.concat(O, '-header-avatar-badge')],
                              children: (0, x.jsx)(c.sA, {
                                viewBox: '-4 0 27 19',
                                size: 25,
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, x.jsx)('div', {
                    className: u[''.concat(O, '-biography')],
                    children: (0, x.jsx)(r.uR, { text: j }),
                  }),
                  (0, x.jsx)(E, { user: n, onUserFieldUpdate: l }),
                ],
              }),
              (0, x.jsx)(s.N1, {
                url: y,
                visible: v,
                onClose: function () {
                  f(!1);
                },
              }),
              (0, x.jsx)(B, {
                visible: N,
                user: n,
                onClose: function () {
                  S(!1);
                },
              }),
            ],
          });
        },
        V = {
          media: 'lRlL8',
          'media-viewer-content': 'h8O8o',
          'fade-in': 'CUMXt',
          'scroll-in': 'jp_Yt',
          'scale-in': 'fBndC',
          focus: 'MiqIA',
          'profile-action': 'ehwQ4',
          'profile-action-button': 'VLhMQ',
        },
        M = i(6867),
        W = {
          media: 'DyeXe',
          'media-viewer-content': 'haYbK',
          'fade-in': 'vKa2h',
          'scroll-in': 'iKRWv',
          'scale-in': 'CCpQy',
          focus: 'fdAOZ',
          'profile-edit': 'jjckK',
          'profile-edit-item': 'FoKhE',
          'profile-edit-item-label': 'hfXA8',
          'profile-edit-item-inner': 'aZqmv',
          'profile-edit-inner': 'njemU',
          'profile-edit-inner-last': 'kNNaH',
          'profile-edit-inner-name': 'ibuvs',
          'profile-edit-inner-name-icon': 'LC4D5',
          'profile-edit-inner-name-lock': 'JOPqs',
          'profile-edit-inner-textarea': 'Z4yXG',
          'profile-edit-inner-link': 'eiWCi',
        },
        D = i(9236),
        K = i(4925),
        H = {
          media: 't8xDy',
          'media-viewer-content': 'A1cIV',
          'fade-in': 'Bftt_',
          'scroll-in': 'mU1D9',
          'scale-in': 'lJbi_',
          focus: 'X_I8q',
          'avatar-selector': 'yiHsr',
          'avatar-selector-empty': 'OSVjG',
        },
        I = i(9904),
        J = i(2568),
        X = i(2116),
        Y = ['onUrlChange'],
        _ = 'avatar-selector',
        G = function (e) {
          var n = e.onUrlChange,
            i = (0, K.Z)(e, Y),
            l = (0, a.useState)(null === i || void 0 === i ? void 0 : i.url),
            t = (0, o.Z)(l, 2),
            s = t[0],
            u = t[1];
          (0, a.useEffect)(
            function () {
              u(i.url);
            },
            [i.url],
          );
          var d = [
            {
              label: (0, x.jsx)(r.p0, {
                onFileChange: function (e) {
                  var i,
                    l =
                      null === e ||
                      void 0 === e ||
                      null === (i = e[0]) ||
                      void 0 === i
                        ? void 0
                        : i.url;
                  u(l), null === n || void 0 === n || n(l);
                },
                children: (0, x.jsx)('div', {
                  className: H[''.concat(_, '-upload')],
                  children: '\u4e0a\u4f20\u56fe\u7247',
                }),
              }),
            },
          ];
          return (
            s &&
              d.push({
                label: '\u79fb\u9664\u5f53\u524d\u5934\u50cf',
                danger: !0,
                onClick: function () {
                  u(''), null === n || void 0 === n || n('');
                },
              }),
            (0, x.jsx)(J.Z, {
              placement: 'bottom-end',
              content: (0, x.jsx)(X.Z, { items: d }),
              children: (0, x.jsx)('div', {
                className: H[''.concat(_)],
                children: s
                  ? (0, x.jsx)(I.Z, { size: 52, url: s })
                  : (0, x.jsx)('div', {
                      className: H[''.concat(_, '-empty')],
                      children: (0, x.jsx)(c.ZP, {
                        fill: 'currentColor',
                        size: 32,
                        viewBox: '0 0 30 30',
                      }),
                    }),
              }),
            })
          );
        },
        $ = 'profile-edit',
        ee = function (e) {
          var n = e.className,
            i = e.label,
            l = e.children,
            o = e.labelAction,
            a = 'profile-edit-item';
          return (0, x.jsxs)('div', {
            className: S()(W[''.concat(a)], n),
            children: [
              (0, x.jsxs)('div', {
                className: W[''.concat(a, '-label')],
                children: [
                  (0, x.jsx)('div', {
                    className: W[''.concat(a, '-label-inner')],
                    children: i,
                  }),
                  (0, x.jsx)('div', {
                    className: W[''.concat(a, '-label-action')],
                    children: o,
                  }),
                ],
              }),
              !!l &&
                (0, x.jsx)('div', {
                  className: W[''.concat(a, '-inner')],
                  children: l,
                }),
            ],
          });
        },
        ne = (0, a.forwardRef)(function (e, n) {
          var i = e.user,
            t = e.onUserFieldUpdate,
            r = e.onSubmitLoading,
            u = (0, w.Z)().viewportWidth < 700,
            v = i || {},
            f = v.fullName,
            p = v.username,
            m = v.profilePicUrl,
            b = v.bioLink,
            g = v.biography,
            j = v.isPrivate,
            Z = (0, a.useState)(),
            N = (0, o.Z)(Z, 2),
            y = N[0],
            C = N[1];
          (0, a.useEffect)(function () {
            C({ profilePicUrl: m, bioLink: b, biography: g, isPrivate: j });
          }, []);
          var k = (0, z.i)(h.Nq, {
              manual: !0,
              onSuccess: function () {
                null === t || void 0 === t || t(y);
              },
            }),
            U = k.run,
            F = k.loading;
          (0, a.useEffect)(
            function () {
              null === r || void 0 === r || r(F);
            },
            [F],
          );
          var B = (0, a.useMemo)(
            function () {
              return [
                {
                  label: '\u59d3\u540d',
                  children: (0, x.jsxs)('div', {
                    className: W[''.concat($, '-inner-name')],
                    children: [
                      (0, x.jsx)(c.HE, {
                        className: W[''.concat($, '-inner-name-icon')],
                        size: 14,
                        viewBox: '0 0 14 21',
                      }),
                      f,
                      '(@',
                      p,
                      ')',
                    ],
                  }),
                  suffix: (0, x.jsx)(G, {
                    url: null === y || void 0 === y ? void 0 : y.profilePicUrl,
                    onUrlChange: function (e) {
                      C(function (n) {
                        return (0, l.Z)(
                          (0, l.Z)({}, n),
                          {},
                          { profilePicUrl: e },
                        );
                      });
                    },
                  }),
                },
                {
                  label: '\u4e2a\u6027\u7b7e\u540d',
                  children: (0, x.jsx)(M.Z, {
                    placeholder: '\u7559\u4e0b\u4e2a\u6027\u7b7e\u540d',
                    value: null === y || void 0 === y ? void 0 : y.biography,
                    onChange: function (e) {
                      C(function (n) {
                        var i;
                        return (0, l.Z)(
                          (0, l.Z)({}, n),
                          {},
                          {
                            biography:
                              null === (i = e.target.value) || void 0 === i
                                ? void 0
                                : i.trim(),
                          },
                        );
                      });
                    },
                    maxLength: 150,
                    className: W[''.concat($, '-inner-textarea')],
                  }),
                },
                {
                  label: '\u94fe\u63a5',
                  children: (0, x.jsx)(M.Z, {
                    placeholder: 'https://www.example.com',
                    maxLength: 240,
                    value: null === y || void 0 === y ? void 0 : y.bioLink,
                    onChange: function (e) {
                      C(function (n) {
                        var i;
                        return (0, l.Z)(
                          (0, l.Z)({}, n),
                          {},
                          {
                            bioLink:
                              null === (i = e.target.value) || void 0 === i
                                ? void 0
                                : i.trim(),
                          },
                        );
                      });
                    },
                    className: S()(
                      W[''.concat($, '-inner-textarea')],
                      W[''.concat($, '-inner-link')],
                    ),
                  }),
                },
                {
                  label: '\u79c1\u5bc6\u4e3b\u9875',
                  labelAction: (0, x.jsx)(s.rs, {
                    checked: null === y || void 0 === y ? void 0 : y.isPrivate,
                    onChange: function (e) {
                      q.Z.confirm({
                        title: e
                          ? '\u5207\u6362\u4e3a\u79c1\u5bc6\u4e3b\u9875\uff1f'
                          : '\u5207\u6362\u4e3a\u516c\u5f00\u4e3b\u9875\uff1f',
                        content: e
                          ? '\u53ea\u6709\u6279\u51c6\u7684\u7c89\u4e1d\u624d\u80fd\u67e5\u770b\u4f60\u7684\u5185\u5bb9\u5e76\u4e0e\u4e4b\u4e92\u52a8\u3002'
                          : 'Threads \u5185\u5916\u7684\u4efb\u4f55\u4eba\u90fd\u80fd\u770b\u5230\u4f60\u7684\u5185\u5bb9\u5e76\u4e0e\u4e4b\u4e92\u52a8\u3002',
                        onOk: function () {
                          C(function (n) {
                            return (0, l.Z)(
                              (0, l.Z)({}, n),
                              {},
                              { isPrivate: e },
                            );
                          });
                        },
                      });
                    },
                  }),
                },
              ];
            },
            [i, y],
          );
          function P() {
            var e = (y || {}).bioLink;
            if (null !== y && void 0 !== y && y.bioLink && !D.Bu(e, 'url'))
              return void R.Z.show(
                '\u8bf7\u8f93\u5165\u6709\u6548\u7f51\u5740',
              );
            U(y);
          }
          return (
            (0, a.useImperativeHandle)(n, function () {
              return { submit: P };
            }),
            (0, x.jsxs)('div', {
              className: W[''.concat($)],
              children: [
                B.map(function (e, n) {
                  var i = e.label,
                    l = e.children,
                    o = e.suffix,
                    a = e.labelAction;
                  return (0, x.jsxs)(
                    'div',
                    {
                      className: W[''.concat($, '-inner')],
                      children: [
                        (0, x.jsx)(ee, {
                          label: i,
                          labelAction: a,
                          className: S()(
                            (0, d.Z)(
                              {},
                              W[''.concat($, '-inner-last')],
                              n === B.length - 1,
                            ),
                          ),
                          children: l,
                        }),
                        o,
                      ],
                    },
                    n,
                  );
                }),
                !u &&
                  (0, x.jsx)(s.zx, {
                    type: 'primary',
                    size: 'large',
                    onClick: P,
                    loading: F,
                    children: '\u5b8c\u6210',
                  }),
              ],
            })
          );
        });
      ne.displayName = 'ProfileEdit';
      var ie = ne,
        le = { 'profile-edit-modal': 'AZEI7' },
        oe = function (e) {
          var n = e.visible,
            i = e.onClose,
            l = e.user,
            t = e.onUserFieldUpdate,
            r = (0, a.useState)(!1),
            c = (0, o.Z)(r, 2),
            u = c[0],
            d = c[1],
            f = (0, w.Z)().viewportWidth < 700,
            p = (0, a.useRef)(null);
          return f
            ? (0, x.jsx)(s.pH, {
                title: '\u7f16\u8f91\u4e3b\u9875',
                loading: u,
                visible: n,
                onCancel: i,
                onOk: function () {
                  var e, n;
                  null === p ||
                    void 0 === p ||
                    null === (e = p.current) ||
                    void 0 === e ||
                    null === (n = e.submit) ||
                    void 0 === n ||
                    n.call(e);
                },
                children: (0, x.jsx)('div', {
                  className: le[''.concat('profile-edit-modal')],
                  children: (0, x.jsx)(ie, {
                    onSubmitLoading: function (e) {
                      d(e);
                    },
                    ref: p,
                    user: l,
                    onUserFieldUpdate: function (e) {
                      null === t || void 0 === t || t(e),
                        null === i || void 0 === i || i();
                    },
                  }),
                }),
              })
            : (0, x.jsx)(v.Z, {
                visible: n,
                onClose: i,
                style: { width: 520 },
                children: (0, x.jsx)(ie, {
                  user: l,
                  onUserFieldUpdate: function (e) {
                    null === t || void 0 === t || t(e),
                      null === i || void 0 === i || i();
                  },
                }),
              });
        },
        ae = i(6021),
        te = i(9910),
        re = i(1114),
        se = 'profile-action',
        ce = function (e) {
          var n = e.user,
            i = e.onUserFieldUpdate,
            t = (0, a.useState)(!1),
            c = (0, o.Z)(t, 2),
            u = c[0],
            d = c[1],
            v = (0, a.useState)(!1),
            f = (0, o.Z)(v, 2),
            p = f[0],
            m = f[1],
            h = n || {},
            b = h.friendshipStatus,
            g = h.username,
            j = h.mentionAuth,
            w = null === b || void 0 === b ? void 0 : b.isOwn,
            Z = null === b || void 0 === b ? void 0 : b.blocking,
            N =
              'everyone' === j ||
              ('following' === j &&
                (null === b || void 0 === b ? void 0 : b.following));
          var y = {
              user: n,
              onUserFriendshipStatusUpdate: function (e, o) {
                null === i ||
                  void 0 === i ||
                  i({
                    friendshipStatus: (0, l.Z)(
                      (0, l.Z)(
                        {},
                        null === n || void 0 === n
                          ? void 0
                          : n.friendshipStatus,
                      ),
                      o,
                    ),
                  });
              },
            },
            C = (0, T.r)(y),
            k = C.item,
            U = C.unblockLoading;
          return (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)('div', {
                className: S()(V[''.concat(se)]),
                children: Z
                  ? (0, x.jsx)(s.zx, {
                      loading: U,
                      className: V[''.concat(se, '-button')],
                      onClick: function () {
                        k.onClick();
                      },
                      children: '\u53d6\u6d88\u62c9\u9ed1',
                    })
                  : w
                  ? (0, x.jsxs)(x.Fragment, {
                      children: [
                        (0, x.jsx)(s.zx, {
                          className: V[''.concat(se, '-button')],
                          onClick: function () {
                            d(!0);
                          },
                          children: '\u7f16\u8f91\u4e3b\u9875',
                        }),
                        re.Y &&
                          (0, x.jsx)(s.zx, {
                            className: V[''.concat(se, '-button')],
                            onClick: function () {
                              var e,
                                n = ''
                                  .concat(window.location.origin, '/@')
                                  .concat(g);
                              null !== (e = navigator) &&
                              void 0 !== e &&
                              e.share
                                ? navigator.share({ title: g, url: n })
                                : (0, te.zp)(n);
                            },
                            children: '\u5206\u4eab\u4e3b\u9875',
                          }),
                      ],
                    })
                  : (0, x.jsxs)(x.Fragment, {
                      children: [
                        (0, x.jsx)(ae.Z, {
                          user: n,
                          className: V[''.concat(se, '-button')],
                          type:
                            (null !== b && void 0 !== b && b.following) ||
                            (null !== b && void 0 !== b && b.followedBy)
                              ? 'default'
                              : 'primary',
                          onFollowingChange: function (e, n) {
                            var o = n.following,
                              a = n.outgoingRequest;
                            null === i ||
                              void 0 === i ||
                              i({
                                friendshipStatus: (0, l.Z)(
                                  (0, l.Z)({}, b),
                                  {},
                                  { following: o, outgoingRequest: a },
                                ),
                              });
                          },
                        }),
                        N &&
                          (0, x.jsx)(s.zx, {
                            className: V[''.concat(se, '-button')],
                            onClick: function () {
                              m(!0);
                            },
                            children: '\u63d0\u53ca',
                          }),
                      ],
                    }),
              }),
              (0, x.jsx)(oe, {
                user: n,
                visible: u,
                onUserFieldUpdate: i,
                onClose: function () {
                  d(!1);
                },
              }),
              (0, x.jsx)(r.K2, {
                visible: p,
                mentionUser: n,
                onClose: function () {
                  m(!1);
                },
              }),
            ],
          });
        },
        ue = i(4814),
        de = i(6031),
        ve = {
          'profile-posts-header': 'nJzs4',
          'profile-posts-create-post': 'gGRHI',
        },
        fe = i(4747),
        pe = 'profile-posts',
        me = function (e) {
          var n,
            i,
            c,
            u,
            d = e.user,
            v = e.activeKey,
            m = e.onUserFieldUpdate,
            h = e.isBanned,
            b = (0, a.useRef)(null),
            g = (0, a.useRef)(null),
            j = (0, a.useRef)(null),
            w = (0, a.useContext)(fe.k).state.navigationEmitter,
            Z = (0, a.useMemo)(
              function () {
                return { uid: null === d || void 0 === d ? void 0 : d.id };
              },
              [null === d || void 0 === d ? void 0 : d.id],
            ),
            N = (0, t.s0)(),
            S = (0, a.useState)(!1),
            y = (0, o.Z)(S, 2),
            C = y[0],
            k = y[1],
            U = (function () {
              var e = (0, p.Z)(
                (0, f.Z)().mark(function e(n) {
                  var i, l, o, a, t, r, s, c;
                  return (0, f.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (l = n.page),
                            (o = n.pageSize),
                            (a = n.uid),
                            (e.next = 3),
                            (0, ue.O$)(a, { page: l, pageSize: o })
                          );
                        case 3:
                          return (
                            (t = e.sent),
                            (r = t.code),
                            (s = t.data),
                            (c = t.msg),
                            e.abrupt('return', {
                              success: 200 === r,
                              msg: c,
                              data:
                                (null === s ||
                                void 0 === s ||
                                null === (i = s.posts) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return {
                                        id: (0, de.uniqueId)(),
                                        posts: e,
                                      };
                                    })) || [],
                              total:
                                null === s || void 0 === s ? void 0 : s.total,
                            })
                          );
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            F = (function () {
              var e = (0, p.Z)(
                (0, f.Z)().mark(function e(n) {
                  var i, l, o, a, t, r, s, c;
                  return (0, f.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (l = n.page),
                            (o = n.pageSize),
                            (a = n.uid),
                            (e.next = 3),
                            (0, ue.M4)(a, { page: l, pageSize: o })
                          );
                        case 3:
                          return (
                            (t = e.sent),
                            (r = t.code),
                            (s = t.data),
                            (c = t.msg),
                            e.abrupt('return', {
                              success: 200 === r,
                              msg: c,
                              data:
                                (null === s ||
                                void 0 === s ||
                                null === (i = s.posts) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return {
                                        id: (0, de.uniqueId)(),
                                        posts: e,
                                      };
                                    })) || [],
                              total:
                                null === s || void 0 === s ? void 0 : s.total,
                            })
                          );
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            B = (function () {
              var e = (0, p.Z)(
                (0, f.Z)().mark(function e(n) {
                  var i, l, o, a, t, r, s, c;
                  return (0, f.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (l = n.page),
                            (o = n.pageSize),
                            (a = n.uid),
                            (e.next = 3),
                            (0, ue.j4)(a, { page: l, pageSize: o })
                          );
                        case 3:
                          return (
                            (t = e.sent),
                            (r = t.code),
                            (s = t.data),
                            (c = t.msg),
                            e.abrupt('return', {
                              success: 200 === r,
                              msg: c,
                              data:
                                (null === s ||
                                void 0 === s ||
                                null === (i = s.posts) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return {
                                        id: (0, de.uniqueId)(),
                                        posts: [e],
                                      };
                                    })) || [],
                              total:
                                null === s || void 0 === s ? void 0 : s.total,
                            })
                          );
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          function P() {
            return (
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : []
            ).map(function (e) {
              var n;
              return (0, l.Z)(
                (0, l.Z)({}, e),
                {},
                {
                  posts:
                    null === e ||
                    void 0 === e ||
                    null === (n = e.posts) ||
                    void 0 === n
                      ? void 0
                      : n.map(function (e) {
                          return (null === e || void 0 === e
                            ? void 0
                            : e.uid) === d.id
                            ? (0, l.Z)(
                                (0, l.Z)({}, e),
                                {},
                                { user: (0, l.Z)((0, l.Z)({}, e.user), d) },
                              )
                            : e;
                        }),
                },
              );
            });
          }
          function q() {
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : []
            ).forEach(function (e) {
              var n;
              null === e ||
                void 0 === e ||
                null === (n = e.posts) ||
                void 0 === n ||
                n.forEach(function (e) {
                  var n;
                  (null === e || void 0 === e ? void 0 : e.uid) === d.id &&
                    (null === m ||
                      void 0 === m ||
                      m({
                        friendshipStatus: (0, l.Z)(
                          {},
                          null === e ||
                            void 0 === e ||
                            null === (n = e.user) ||
                            void 0 === n
                            ? void 0
                            : n.friendshipStatus,
                        ),
                      }));
                });
            });
          }
          return (
            (0, a.useEffect)(
              function () {
                var e, n, i;
                null === (e = b.current) || void 0 === e || e.updateData(P),
                  null === (n = g.current) || void 0 === n || n.updateData(P),
                  null === (i = j.current) || void 0 === i || i.updateData(P);
              },
              [
                null === d ||
                void 0 === d ||
                null === (n = d.friendshipStatus) ||
                void 0 === n
                  ? void 0
                  : n.following,
                null === d ||
                void 0 === d ||
                null === (i = d.friendshipStatus) ||
                void 0 === i
                  ? void 0
                  : i.outgoingRequest,
                null === d ||
                void 0 === d ||
                null === (c = d.friendshipStatus) ||
                void 0 === c
                  ? void 0
                  : c.muting,
                null === d || void 0 === d ? void 0 : d.profilePicUrl,
                null === d || void 0 === d ? void 0 : d.biography,
              ],
            ),
            null === w ||
              void 0 === w ||
              w.useSubscription(function (e) {
                var n, i;
                'newPost' === e.type &&
                  (null === (n = b.current) ||
                    void 0 === n ||
                    null === (i = n.reload) ||
                    void 0 === i ||
                    i.call(n));
              }),
            null === w ||
              void 0 === w ||
              w.useSubscription(function (e) {
                var n, i;
                if ('profile' === e.type)
                  return window.scrollY
                    ? window.scrollTo(0, 0)
                    : void (
                        null === (n = b.current) ||
                        void 0 === n ||
                        null === (i = n.reload) ||
                        void 0 === i ||
                        i.call(n, !0)
                      );
              }),
            (0, x.jsxs)(x.Fragment, {
              children: [
                (0, x.jsxs)(s.mQ, {
                  activeKey: v || '',
                  onChange: function (e) {
                    var n;
                    (n = e ? '/'.concat(e) : ''),
                      N(
                        '/@'
                          .concat(
                            null === d || void 0 === d ? void 0 : d.username,
                          )
                          .concat(n),
                        { replace: !0 },
                      );
                  },
                  onTabTitleClick: function (e) {
                    var n,
                      i,
                      l,
                      o,
                      a,
                      t,
                      r = e === v;
                    if (r && window.scrollY) return window.scrollTo(0, 0);
                    switch (e) {
                      case '':
                        r &&
                          (null === (n = b.current) ||
                            void 0 === n ||
                            null === (i = n.reload) ||
                            void 0 === i ||
                            i.call(n, !0));
                        break;
                      case 'replies':
                        r &&
                          (null === (l = g.current) ||
                            void 0 === l ||
                            null === (o = l.reload) ||
                            void 0 === o ||
                            o.call(l, !0));
                        break;
                      case 'reposts':
                        r &&
                          (null === (a = j.current) ||
                            void 0 === a ||
                            null === (t = a.reload) ||
                            void 0 === t ||
                            t.call(a, !0));
                    }
                  },
                  headerClassName: ve[''.concat(pe, '-header')],
                  children: [
                    (0, x.jsx)(
                      s.mQ.Tab,
                      {
                        title: '\u4e32\u6587',
                        children:
                          !h &&
                          (0, x.jsx)(r.p_, {
                            actionRef: b,
                            hasBorderTop: !1,
                            params: Z,
                            pinToWhere: 'profile',
                            cacheKey: ''.concat(
                              null === d || void 0 === d ? void 0 : d.id,
                              '-posts',
                            ),
                            hasPin: !0,
                            hasPinSign: !0,
                            hasFirstSign: !0,
                            indent: !0,
                            hasLoadingContainer: !0,
                            request: U,
                            onDataChange: q,
                            emptyPlaceholder:
                              null !== d &&
                              void 0 !== d &&
                              null !== (u = d.friendshipStatus) &&
                              void 0 !== u &&
                              u.isOwn
                                ? (0, x.jsx)(s.zx, {
                                    className:
                                      ve[''.concat(pe, '-create-post')],
                                    onClick: function () {
                                      k(!0);
                                    },
                                    children:
                                      '\u53d1\u5e03\u4f60\u7684\u9996\u7bc7\u4e32\u6587',
                                  })
                                : '\u6682\u65f6\u8fd8\u6ca1\u6709\u5e16\u5b50\u3002',
                          }),
                      },
                      '',
                    ),
                    (0, x.jsx)(
                      s.mQ.Tab,
                      {
                        title: '\u56de\u590d',
                        children:
                          !h &&
                          (0, x.jsx)(r.p_, {
                            hasBorderTop: !1,
                            params: Z,
                            hasReplyTo: !0,
                            hasLoadingContainer: !0,
                            indent: !0,
                            request: F,
                            onDataChange: q,
                            emptyPlaceholder:
                              '\u8fd8\u6ca1\u6709\u56de\u590d\u3002',
                            actionRef: g,
                            cacheKey: ''.concat(
                              null === d || void 0 === d ? void 0 : d.id,
                              '-reply',
                            ),
                            ignoreUnavailablePost: !0,
                          }),
                      },
                      'replies',
                    ),
                    (0, x.jsx)(
                      s.mQ.Tab,
                      {
                        title: '\u8f6c\u53d1',
                        children:
                          !h &&
                          (0, x.jsx)(r.p_, {
                            hasBorderTop: !1,
                            params: Z,
                            hasLoadingContainer: !0,
                            hasRepostSign: !0,
                            hasReplyTo: !0,
                            indent: !0,
                            cacheKey: ''.concat(
                              null === d || void 0 === d ? void 0 : d.id,
                              '-repost',
                            ),
                            request: B,
                            onDataChange: q,
                            emptyPlaceholder: '\u6682\u65e0\u8f6c\u53d1\u3002',
                            actionRef: j,
                          }),
                      },
                      'reposts',
                    ),
                  ],
                }),
                (0, x.jsx)(r.K2, {
                  visible: C,
                  onSuccess: function () {
                    var e, n;
                    null === (e = b.current) ||
                      void 0 === e ||
                      null === (n = e.reload) ||
                      void 0 === n ||
                      n.call(e);
                  },
                  onClose: function () {
                    k(!1);
                  },
                }),
              ],
            })
          );
        },
        he = { 'profile-error': 'saBsa', 'profile-loading': 'NBqDS' },
        xe = i(8420),
        be = {
          media: 'RtLCb',
          'media-viewer-content': 'PLSce',
          'fade-in': 'WHRqB',
          'scroll-in': 'f4tkm',
          'scale-in': 'ZXZJD',
          focus: 'VmFLx',
          'error-hint': 'OaioN',
        },
        ge = function (e) {
          var n = e.hint;
          return (0, x.jsx)('div', {
            className: be[''.concat('error-hint')],
            children: n,
          });
        },
        je = i(3479),
        we = {
          media: 'NKBvZ',
          'media-viewer-content': 'uWJYO',
          'fade-in': 'CcUVL',
          'scroll-in': '_fLkW',
          'scale-in': 'Skpcs',
          focus: 'BlQXo',
          'following-request': 'yxVrR',
          'following-request-inner': 'qglnb',
          'following-request-inner-hint-username': 'Cw6ed',
          'following-request-inner-hint-text': 'YkDyf',
          'following-request-inner-action-button': 'sMZF2',
        },
        Ze = i(6023),
        Ne = 'following-request',
        Se = function (e) {
          var n,
            i = e.user,
            o = e.onUserFieldUpdate,
            a = (0, z.i)(h.aj, {
              manual: !0,
              onSuccess: function () {
                null === o ||
                  void 0 === o ||
                  o({
                    friendshipStatus: (0, l.Z)(
                      (0, l.Z)(
                        {},
                        null === i || void 0 === i
                          ? void 0
                          : i.friendshipStatus,
                      ),
                      {},
                      { followedBy: !0, outgoingRequestedBy: !1 },
                    ),
                  });
              },
            }),
            t = a.run,
            r = a.loading,
            s = (0, z.i)(h.Sp, {
              manual: !0,
              onSuccess: function () {
                null === o ||
                  void 0 === o ||
                  o({
                    friendshipStatus: (0, l.Z)(
                      (0, l.Z)(
                        {},
                        null === i || void 0 === i
                          ? void 0
                          : i.friendshipStatus,
                      ),
                      {},
                      { outgoingRequestedBy: !1 },
                    ),
                  });
              },
            }),
            c = s.run,
            u = s.loading;
          return null !== i &&
            void 0 !== i &&
            null !== (n = i.friendshipStatus) &&
            void 0 !== n &&
            n.outgoingRequestedBy
            ? (0, x.jsx)('div', {
                className: we[''.concat(Ne)],
                children: (0, x.jsxs)('div', {
                  className: we[''.concat(Ne, '-inner')],
                  children: [
                    (0, x.jsxs)('div', {
                      className: we[''.concat(Ne, '-inner-hint')],
                      children: [
                        (0, x.jsx)('div', {
                          className: we[''.concat(Ne, '-inner-hint-username')],
                          children:
                            null === i || void 0 === i ? void 0 : i.username,
                        }),
                        (0, x.jsx)('div', {
                          className: we[''.concat(Ne, '-inner-hint-text')],
                          children: '\u8bf7\u6c42\u5173\u6ce8\u4f60',
                        }),
                      ],
                    }),
                    (0, x.jsxs)('div', {
                      className: we[''.concat(Ne, '-inner-action')],
                      children: [
                        (0, x.jsx)(Ze.Z, {
                          className: we[''.concat(Ne, '-inner-action-button')],
                          loading: u,
                          onClick: function () {
                            c(null === i || void 0 === i ? void 0 : i.id);
                          },
                          children: '\u62d2\u7edd',
                        }),
                        (0, x.jsx)(Ze.Z, {
                          className: we[''.concat(Ne, '-inner-action-button')],
                          type: 'primary',
                          loading: r,
                          onClick: function () {
                            t(null === i || void 0 === i ? void 0 : i.id);
                          },
                          children: '\u786e\u8ba4',
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null;
        },
        ye = i(2298),
        Ce = function () {
          (0, a.useEffect)(function () {
            window.scrollTo({ top: 0, left: 0 });
          }, []);
        },
        ke = 'profile',
        Ue = function () {
          var e,
            n,
            i,
            s,
            u,
            d,
            v = (0, a.useState)(!1),
            f = (0, o.Z)(v, 2),
            p = f[0],
            m = f[1],
            b = (0, a.useContext)(xe.Vo),
            g = b.dispatch,
            j = b.state,
            w = (0, t.UO)(),
            Z = w.username,
            N = w.action,
            S = (0, ye.Z)(
              (null === (e = j.user) || void 0 === e ? void 0 : e.username) ===
                Z
                ? j.user
                : void 0,
              'profile-'.concat(Z),
            ),
            y = (0, o.Z)(S, 2),
            C = y[0],
            k = y[1];
          Ce();
          var U = null === Z || void 0 === Z ? void 0 : Z.substring(1),
            F =
              (((null === C || void 0 === C ? void 0 : C.isPrivate) &&
                !(
                  null !== C &&
                  void 0 !== C &&
                  null !== (n = C.friendshipStatus) &&
                  void 0 !== n &&
                  n.following
                )) ||
                (null === C ||
                void 0 === C ||
                null === (i = C.friendshipStatus) ||
                void 0 === i
                  ? void 0
                  : i.blocking) ||
                (null === C ||
                void 0 === C ||
                null === (s = C.friendshipStatus) ||
                void 0 === s
                  ? void 0
                  : s.blockedBy)) &&
              !(
                null !== C &&
                void 0 !== C &&
                null !== (u = C.friendshipStatus) &&
                void 0 !== u &&
                u.isOwn
              ),
            B = (0, z.i)(h.dQ, {
              manual: !0,
              onSuccess: function (e) {
                k(e);
              },
              onError: function () {
                m(!0);
              },
              ignoreErrorMsg: !0,
            }),
            P = B.loading,
            q = B.run;
          return (
            (0, (0, je.Z)().setTitle)(
              C
                ? ''
                    .concat(
                      null === C || void 0 === C ? void 0 : C.fullName,
                      '(@',
                    )
                    .concat(
                      null === C || void 0 === C ? void 0 : C.username,
                      ')',
                    )
                : '',
            ),
            (0, a.useEffect)(
              function () {
                var e, n;
                null !== C &&
                  void 0 !== C &&
                  null !== (e = C.friendshipStatus) &&
                  void 0 !== e &&
                  e.isOwn &&
                  (null === (n = j.user) || void 0 === n
                    ? void 0
                    : n.isPrivate) !==
                    (null === C || void 0 === C ? void 0 : C.isPrivate) &&
                  C &&
                  k(function (e) {
                    var n;
                    return (
                      (e.isPrivate =
                        null === (n = j.user) || void 0 === n
                          ? void 0
                          : n.isPrivate),
                      (0, l.Z)({}, e)
                    );
                  });
              },
              [j.user, C],
            ),
            (0, a.useLayoutEffect)(
              function () {
                !C && q(U);
              },
              [U, C],
            ),
            P
              ? (0, x.jsx)('div', {
                  className: he[''.concat(ke, '-loading')],
                  children: (0, x.jsx)(c.yC, {
                    size: 20,
                    viewBox: '0 0 100 100',
                  }),
                })
              : null === Z ||
                void 0 === Z ||
                !Z.startsWith('@') ||
                '@' === Z ||
                p
              ? (0, x.jsx)(r.jC, { className: he[''.concat(ke, '-error')] })
              : (0, x.jsxs)(r._z, {
                  children: [
                    (0, x.jsx)(Se, {
                      user: C,
                      onUserFieldUpdate: function (e) {
                        k(function (n) {
                          return (0, l.Z)((0, l.Z)({}, n), e);
                        });
                      },
                    }),
                    (0, x.jsx)(Q, {
                      user: C,
                      onUserFieldUpdate: function (e) {
                        k(function (n) {
                          return (0, l.Z)((0, l.Z)({}, n), e);
                        });
                      },
                    }),
                    (0, x.jsx)(ce, {
                      user: C,
                      onUserFieldUpdate: function (e) {
                        k(function (n) {
                          return (0, l.Z)((0, l.Z)({}, n), e);
                        }),
                          g({ type: 'UPDATE_USER', payload: { user: e } });
                      },
                    }),
                    (0, x.jsx)(me, {
                      isBanned: F,
                      user: C,
                      activeKey: N || '',
                      onUserFieldUpdate: function (e) {
                        k(function (n) {
                          return (0, l.Z)((0, l.Z)({}, n), e);
                        });
                      },
                    }),
                    F &&
                      (0, x.jsx)(ge, {
                        hint:
                          null !== C &&
                          void 0 !== C &&
                          null !== (d = C.friendshipStatus) &&
                          void 0 !== d &&
                          d.blocking
                            ? '\u5185\u5bb9\u65e0\u6cd5\u663e\u793a'
                            : '\u8fd9\u662f\u79c1\u5bc6\u4e3b\u9875\u3002',
                      }),
                  ],
                })
          );
        };
    },
  },
]);
