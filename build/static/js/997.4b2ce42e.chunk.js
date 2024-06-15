'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [997],
  {
    9997: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return Pe;
          },
        });
      var o = i(1413),
        l = i(9439),
        t = i(7313),
        r = i(8467),
        a = i(1049),
        s = i(6401),
        c = i(813),
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
        j = function (e) {
          var n = e.label,
            i = e.count,
            o = 'tabs-title';
          return (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)('span', {
                className: m[''.concat(o, '-label')],
                children: n,
              }),
              (0, x.jsx)('span', {
                className: m[''.concat(o, '-count')],
                children: (0, x.jsx)(s.T0, { value: i || 0 }),
              }),
            ],
          });
        },
        b = 'follower-tabs',
        g = function (e) {
          var n = e.user,
            i = n || {},
            o = i.followerCount,
            l = i.followingCount,
            r = i.username,
            c = (0, t.useMemo)(function () {
              return { uid: null === n || void 0 === n ? void 0 : n.id };
            }, []),
            u = (function () {
              var e = (0, p.Z)(
                (0, f.Z)().mark(function e(n) {
                  var i, o, l, t, r, a, s, c;
                  return (0, f.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = n.page),
                            (l = n.pageSize),
                            (t = n.uid),
                            (e.next = 3),
                            (0, h.$e)(t, { page: o, pageSize: l })
                          );
                        case 3:
                          return (
                            (r = e.sent),
                            (a = r.data),
                            (s = r.code),
                            (c = r.msg),
                            e.abrupt('return', {
                              success: 200 == s,
                              msg: c,
                              data:
                                null === a ||
                                void 0 === a ||
                                null === (i = a.users) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return { user: e, id: e.id };
                                    }),
                              total:
                                null === a || void 0 === a ? void 0 : a.total,
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
                  var i, o, l, t, r, a, s, c;
                  return (0, f.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = n.page),
                            (l = n.pageSize),
                            (t = n.uid),
                            (e.next = 3),
                            (0, h.nX)(t, { page: o, pageSize: l })
                          );
                        case 3:
                          return (
                            (r = e.sent),
                            (a = r.data),
                            (s = r.code),
                            (c = r.msg),
                            e.abrupt('return', {
                              success: 200 == s,
                              msg: c,
                              data:
                                null === a ||
                                void 0 === a ||
                                null === (i = a.users) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return { user: e, id: e.id };
                                    }),
                              total:
                                null === a || void 0 === a ? void 0 : a.total,
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
            className: m[''.concat(b)],
            children: (0, x.jsxs)(s.mQ, {
              tabClassName: m[''.concat(b, '-header')],
              disabledContentScroll: !1,
              children: [
                (0, x.jsx)(
                  s.mQ.Tab,
                  {
                    title: (0, x.jsx)(j, { label: '\u7c89\u4e1d', count: o }),
                    children: (0, x.jsx)(a.Z7, {
                      request: u,
                      params: c,
                      hasFollower: !1,
                      hasFollow: !0,
                      emptyPlaceholder: ''.concat(
                        r,
                        '\u8fd8\u6ca1\u6709\u4efb\u4f55\u7c89\u4e1d\u3002',
                      ),
                      itemClassName: m[''.concat(b, '-user')],
                    }),
                  },
                  'follower',
                ),
                (0, x.jsx)(
                  s.mQ.Tab,
                  {
                    title: (0, x.jsx)(j, {
                      label: '\u5df2\u5173\u6ce8',
                      count: l,
                    }),
                    children: (0, x.jsx)(a.Z7, {
                      request: d,
                      hasFollower: !1,
                      hasFollow: !0,
                      params: c,
                      emptyPlaceholder: ''.concat(
                        r,
                        '\u8fd8\u6ca1\u6709\u4efb\u4f55\u5173\u6ce8\u8005\u3002',
                      ),
                      itemClassName: m[''.concat(b, '-user')],
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
            o = e.user,
            l = (0, w.Z)().viewportWidth < 700 ? s.GI : v.Z;
          return (0, x.jsx)(l, {
            visible: n,
            onClose: i,
            style: { width: 520 },
            children: (0, x.jsx)(g, { user: o }),
          });
        },
        C = i(6123),
        k = i.n(C),
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
        S = i(658),
        N = i.n(S),
        U = function (e) {
          var n = e.label,
            i = e.value,
            o = e.className,
            l = 'profile-item';
          return (0, x.jsxs)('div', {
            className: k()(y[''.concat(l)], o),
            children: [
              (0, x.jsx)('div', {
                className: y[''.concat(l, '-label')],
                children: n,
              }),
              !!i &&
                (0, x.jsx)('div', {
                  className: y[''.concat(l, '-value')],
                  children: i,
                }),
            ],
          });
        },
        B = 'profile-modal',
        z = function (e) {
          var n = e.visible,
            i = e.onClose,
            o = e.user || {},
            l = o.fullName,
            t = o.username,
            r = o.isVerified,
            a = o.profilePicUrl,
            u = o.createdAt,
            f = o.rank,
            p = o.location,
            m = (0, w.Z)().viewportWidth <= 699,
            h = [
              {
                label: '\u540d\u79f0',
                value: (0, x.jsxs)(x.Fragment, {
                  children: [
                    l,
                    '(@',
                    t,
                    r &&
                      (0, x.jsx)(c.we, {
                        fill: 'rgb(0, 149, 246)',
                        size: 12,
                        viewBox: '0 0 40 40',
                        className: y[''.concat(B, '-inner-item-badge')],
                      }),
                    ')',
                  ],
                }),
                suffix: (0, x.jsx)('div', {
                  className: y[''.concat(B, '-inner-item-avatar')],
                  children: (0, x.jsx)(s.qE, { url: a, size: 54 }),
                }),
              },
              {
                label: '\u52a0\u5165\u65f6\u95f4',
                value: (0, x.jsxs)(x.Fragment, {
                  children: [
                    N()(u).format('YYYY\u5e74MM\u6708'),
                    ' \xb7 #',
                    ' ',
                    (0, x.jsx)(s.T0, { value: f }),
                  ],
                }),
              },
              { label: '\u6240\u5728\u5730', value: p },
            ],
            j = (0, x.jsx)('div', {
              className: y[''.concat(B, '-inner')],
              children: h.map(function (e, n) {
                var i = e.label,
                  o = e.value,
                  l = e.suffix;
                return (0, x.jsxs)(
                  'div',
                  {
                    className: y[''.concat(B, '-inner-item')],
                    children: [
                      (0, x.jsx)(U, {
                        label: i,
                        value: o,
                        className: k()(
                          (0, d.Z)(
                            {},
                            y[''.concat(B, '-inner-item-last')],
                            n === h.length - 1,
                          ),
                        ),
                      }),
                      l,
                    ],
                  },
                  n,
                );
              }),
            });
          return m
            ? (0, x.jsx)(s.Wb, { visible: n, onClose: i, children: j })
            : (0, x.jsx)(v.Z, {
                className: y[''.concat(B)],
                visible: n,
                onClose: i,
                animationType: 'scale-in',
                children: j,
              });
        },
        F = {
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
        L = i(6515),
        P = i(8048),
        q = i(5146),
        R = i(1040),
        T = i(5306),
        W = i(1595),
        E = function (e) {
          return (0, x.jsxs)(
            W.Z,
            (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                children: [
                  (0, x.jsx)('title', { children: e.ariaLabel }),
                  (0, x.jsx)('circle', {
                    strokeWidth: 2,
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    cx: '12.001',
                    cy: '12.005',
                    r: '10.5',
                  }),
                  (0, x.jsx)('circle', {
                    cx: '11.819',
                    cy: '7.709',
                    r: '1.25',
                  }),
                  (0, x.jsx)('line', {
                    strokeWidth: 2,
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    x1: '10.569',
                    x2: '13.432',
                    y1: '16.777',
                    y2: '16.777',
                  }),
                  (0, x.jsx)('polyline', {
                    strokeWidth: 2,
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    points: '10.569 11.05 12 11.05 12 16.777',
                  }),
                ],
              },
            ),
          );
        },
        V = function (e) {
          return (0, x.jsxs)(
            W.Z,
            (0, o.Z)(
              (0, o.Z)({ fill: 'currentColor' }, e),
              {},
              {
                children: [
                  (0, x.jsx)('title', {
                    children: null === e || void 0 === e ? void 0 : e.ariaLabel,
                  }),
                  (0, x.jsx)('path', {
                    d: 'M2.10352 18.4167L7.76037 12.7599',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.5',
                  }),
                  (0, x.jsx)('path', {
                    d: 'M7.67188 18.3284L2.01502 12.6715',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.5',
                  }),
                  (0, x.jsx)('circle', {
                    cx: '10',
                    cy: '4.5',
                    fill: 'none',
                    r: '3.75',
                    stroke: 'currentColor',
                    strokeWidth: '1.5',
                  }),
                  (0, x.jsx)('path', {
                    clipRule: 'evenodd',
                    d: 'M10 19C10 19.4142 10.3358 19.75 10.75 19.75H16.5C17.7426 19.75 18.75 18.7426 18.75 17.5V16.5C18.75 13.6005 16.3995 11.25 13.5 11.25H10.75C10.3358 11.25 10 11.5858 10 12V12C10 12.4142 10.3358 12.75 10.75 12.75H13.5C15.5711 12.75 17.25 14.4289 17.25 16.5V17.5C17.25 17.9142 16.9142 18.25 16.5 18.25H10.75C10.3358 18.25 10 18.5858 10 19V19Z',
                    fill: 'currentColor',
                    fillRule: 'evenodd',
                  }),
                ],
              },
            ),
          );
        },
        A = i(9910),
        M = i(1114),
        O = i(8885),
        Q = i(6205),
        D = 'profile-follower',
        H = function (e) {
          var n,
            i,
            r,
            u,
            v = e.user,
            f = e.onUserFieldUpdate,
            p = (0, t.useState)(!1),
            m = (0, l.Z)(p, 2),
            j = m[0],
            b = m[1],
            g = (0, t.useState)(!1),
            w = (0, l.Z)(g, 2),
            C = w[0],
            y = w[1],
            S =
              null === v ||
              void 0 === v ||
              null === (n = v.friendshipStatus) ||
              void 0 === n
                ? void 0
                : n.isOwn,
            N =
              (null === v || void 0 === v ? void 0 : v.isPrivate) &&
              !S &&
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
              null === (r = v.friendshipStatus) ||
              void 0 === r
                ? void 0
                : r.restricting,
            B = v || {},
            W = B.followerCount,
            H = B.profileContextFacepileUsers,
            K = B.bioLink,
            Y = (0, t.useState)(!1),
            J = (0, l.Z)(Y, 2),
            I = J[0],
            X = J[1],
            _ = {
              user: v,
              onUserFriendshipStatusUpdate: function (e, n) {
                null === f ||
                  void 0 === f ||
                  f({
                    friendshipStatus: (0, o.Z)(
                      (0, o.Z)(
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
            G = (0, T.l)(_).item,
            $ = (0, R.r)(_).item,
            ee = (0, P.i)(h.VR, {
              manual: !0,
              onSuccess: function () {
                q.Z.show('\u5df2\u79fb\u9664'),
                  null === f ||
                    void 0 === f ||
                    f({
                      friendshipStatus: (0, o.Z)(
                        (0, o.Z)(
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
            ne = (0, P.i)(h.as, {
              manual: !0,
              onSuccess: function () {
                q.Z.show('\u5df2\u9650\u5236'),
                  null === f ||
                    void 0 === f ||
                    f({
                      friendshipStatus: (0, o.Z)(
                        (0, o.Z)(
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
            ie = (0, P.i)(h.ce, {
              manual: !0,
              onSuccess: function () {
                q.Z.show('\u5df2\u53d6\u6d88\u9650\u5236'),
                  null === f ||
                    void 0 === f ||
                    f({
                      friendshipStatus: (0, o.Z)(
                        (0, o.Z)(
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
            oe = (0, t.useMemo)(
              function () {
                var e,
                  n = [
                    {
                      label: '\u590d\u5236\u94fe\u63a5',
                      icon: (0, x.jsx)(c.rU, {
                        viewBox: '0 0 18 18',
                        size: 21,
                        fill: 'transparent',
                      }),
                      onClick: function () {
                        (0, A.zp)(
                          ''
                            .concat(window.location.origin, '/@')
                            .concat(
                              null === v || void 0 === v ? void 0 : v.username,
                            ),
                        );
                      },
                    },
                    {
                      label: '\u5173\u4e8e\u8fd9\u4e2a\u4e3b\u9875',
                      onClick: function () {
                        y(!0);
                      },
                      icon: (0, x.jsx)(E, { viewBox: '0 0 24 24', size: 20 }),
                      split: !0,
                    },
                  ];
                return (
                  S ||
                    n.push(G, {
                      label: ''.concat(
                        U ? '\u53d6\u6d88' : '',
                        '\u9650\u5236 ',
                      ),
                      onClick: function () {
                        U
                          ? ie(null === v || void 0 === v ? void 0 : v.id)
                          : ne(null === v || void 0 === v ? void 0 : v.id);
                      },
                      icon: U
                        ? (0, x.jsx)(c.F5, { viewBox: '0 0 20 20', size: 20 })
                        : (0, x.jsx)(c.De, { viewBox: '0 0 20 20', size: 20 }),
                    }),
                  null !== v &&
                    void 0 !== v &&
                    null !== (e = v.friendshipStatus) &&
                    void 0 !== e &&
                    e.followedBy &&
                    n.push({
                      label: '\u79fb\u9664\u7c89\u4e1d',
                      onClick: function () {
                        L.Z.confirm({
                          title: '\u79fb\u9664\u7c89\u4e1d\uff1f',
                          content:
                            '\u6211\u4eec\u4e0d\u4f1a\u544a\u8bc9'.concat(
                              null === v || void 0 === v ? void 0 : v.username,
                              '\u4f60\u5c06 TA \u79fb\u9664\u4e86\u3002',
                            ),
                          okText: '\u79fb\u9664',
                          okType: 'danger',
                          onOk: function () {
                            ee(null === v || void 0 === v ? void 0 : v.id);
                          },
                        });
                      },
                      icon: (0, x.jsx)(V, { viewBox: '0 0 20 20', size: 20 }),
                      split: !0,
                    }),
                  S || n.push($),
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
                $,
              ],
            );
          return (0, x.jsxs)('div', {
            className: F[''.concat(D)],
            children: [
              (0, x.jsxs)('div', {
                className: F[''.concat(D, '-preview')],
                onClick: function () {
                  !N && b(!0);
                },
                role: 'button',
                tabIndex: 0,
                children: [
                  (0, x.jsx)(a.EA, {
                    urls:
                      null === H || void 0 === H
                        ? void 0
                        : H.map(function (e) {
                            return e.profilePicUrl;
                          }),
                  }),
                  (0, x.jsxs)('span', {
                    className: k()(
                      (0, d.Z)({}, F[''.concat(D, '-preview-count')], !N),
                    ),
                    children: [
                      (0, x.jsx)(s.T0, { value: W }),
                      ' \u4f4d\u7c89\u4e1d',
                    ],
                  }),
                ],
              }),
              K &&
                (0, x.jsxs)('div', {
                  className: F[''.concat(D, '-bio')],
                  children: [
                    (0, x.jsx)('span', {
                      className: F[''.concat(D, '-bio-split')],
                      children: '\xb7',
                    }),
                    (0, x.jsx)(s.rU, {
                      className: F[''.concat(D, '-bio-link')],
                      href: K,
                    }),
                  ],
                }),
              (0, x.jsxs)('div', {
                className: F[''.concat(D, '-action')],
                children: [
                  (0, x.jsx)(s.vC, {
                    size: 24,
                    className: F[''.concat(D, '-action-button')],
                    children: (0, x.jsx)(c.mr, {
                      size: 24,
                      viewBox: '0 0 24 24',
                    }),
                  }),
                  !S &&
                    (0, x.jsx)(s.vC, {
                      size: 24,
                      className: F[''.concat(D, '-action-button')],
                      onClick: function () {
                        M.Y && X(!0);
                      },
                      children: (0, x.jsx)(s.J2, {
                        hideWhenContentClick: !0,
                        enabled: !M.Y,
                        placement: 'bottom-end',
                        content: (0, x.jsx)(s.mX, { items: oe }),
                        children: (0, x.jsx)(c.gC, {
                          size: 24,
                          viewBox: '0 0 24 24',
                        }),
                      }),
                    }),
                ],
              }),
              (0, x.jsx)(Z, {
                user: v,
                visible: j,
                onClose: function () {
                  b(!1);
                },
              }),
              (0, x.jsx)(z, {
                user: v,
                visible: C,
                onClose: function () {
                  y(!1);
                },
              }),
              (0, x.jsx)(O.Z, {
                visible: I,
                onClose: function () {
                  X(!1);
                },
                items: (0, Q.J)(oe),
              }),
            ],
          });
        },
        K = 'profile-summary',
        Y = function (e) {
          var n = e.user,
            o = e.onUserFieldUpdate,
            r = (0, t.useState)(!1),
            d = (0, l.Z)(r, 2),
            v = d[0],
            f = d[1],
            p = n || {},
            m = p.fullName,
            h = p.username,
            j = p.profilePicUrl,
            b = p.isVerified,
            g = p.biography,
            w = (0, t.useState)(!1),
            Z = (0, l.Z)(w, 2),
            C = Z[0],
            k = Z[1],
            y = j || i(9389);
          return (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsxs)('div', {
                className: u[''.concat(K)],
                children: [
                  (0, x.jsxs)('div', {
                    className: u[''.concat(K, '-header')],
                    children: [
                      (0, x.jsxs)('div', {
                        className: u[''.concat(K, '-header-name')],
                        children: [
                          (0, x.jsx)('div', {
                            className:
                              u[''.concat(K, '-header-name-full-name')],
                            children: (0, x.jsx)('span', {
                              onClick: function () {
                                k(!0);
                              },
                              role: 'button',
                              tabIndex: 0,
                              className:
                                u[''.concat(K, '-header-name-full-name-text')],
                              children: m,
                            }),
                          }),
                          (0, x.jsx)('div', {
                            className: u[''.concat(K, '-header-name-username')],
                            children: h,
                          }),
                        ],
                      }),
                      (0, x.jsxs)('div', {
                        className: u[''.concat(K, '-header-avatar')],
                        onClick: function () {
                          f(!0);
                        },
                        role: 'button',
                        tabIndex: 0,
                        children: [
                          (0, x.jsx)(s.qE, { url: y, size: '100%' }),
                          b &&
                            (0, x.jsx)('div', {
                              className:
                                u[''.concat(K, '-header-avatar-badge')],
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
                    className: u[''.concat(K, '-biography')],
                    children: (0, x.jsx)(a.uR, { text: g }),
                  }),
                  (0, x.jsx)(H, { user: n, onUserFieldUpdate: o }),
                ],
              }),
              (0, x.jsx)(s.N1, {
                url: y,
                visible: v,
                onClose: function () {
                  f(!1);
                },
              }),
              (0, x.jsx)(z, {
                visible: C,
                user: n,
                onClose: function () {
                  k(!1);
                },
              }),
            ],
          });
        },
        J = {
          media: 'lRlL8',
          'media-viewer-content': 'h8O8o',
          'fade-in': 'CUMXt',
          'scroll-in': 'jp_Yt',
          'scale-in': 'fBndC',
          focus: 'MiqIA',
          'profile-action': 'ehwQ4',
          'profile-action-button': 'VLhMQ',
        },
        I = i(6867),
        X = {
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
        _ = i(9236),
        G = i(4925),
        $ = {
          media: 't8xDy',
          'media-viewer-content': 'A1cIV',
          'fade-in': 'Bftt_',
          'scroll-in': 'mU1D9',
          'scale-in': 'lJbi_',
          focus: 'X_I8q',
          'avatar-selector': 'yiHsr',
          'avatar-selector-empty': 'OSVjG',
        },
        ee = i(9904),
        ne = i(2568),
        ie = i(2116),
        oe = ['onUrlChange'],
        le = 'avatar-selector',
        te = function (e) {
          var n = e.onUrlChange,
            i = (0, G.Z)(e, oe),
            o = (0, t.useState)(null === i || void 0 === i ? void 0 : i.url),
            r = (0, l.Z)(o, 2),
            s = r[0],
            u = r[1];
          (0, t.useEffect)(
            function () {
              u(i.url);
            },
            [i.url],
          );
          var d = [
            {
              label: (0, x.jsx)(a.p0, {
                onFileChange: function (e) {
                  var i,
                    o =
                      null === e ||
                      void 0 === e ||
                      null === (i = e[0]) ||
                      void 0 === i
                        ? void 0
                        : i.url;
                  u(o), null === n || void 0 === n || n(o);
                },
                children: (0, x.jsx)('div', {
                  className: $[''.concat(le, '-upload')],
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
            (0, x.jsx)(ne.Z, {
              placement: 'bottom-end',
              content: (0, x.jsx)(ie.Z, { items: d }),
              children: (0, x.jsx)('div', {
                className: $[''.concat(le)],
                children: s
                  ? (0, x.jsx)(ee.Z, { size: 52, url: s })
                  : (0, x.jsx)('div', {
                      className: $[''.concat(le, '-empty')],
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
        re = 'profile-edit',
        ae = function (e) {
          var n = e.className,
            i = e.label,
            o = e.children,
            l = e.labelAction,
            t = 'profile-edit-item';
          return (0, x.jsxs)('div', {
            className: k()(X[''.concat(t)], n),
            children: [
              (0, x.jsxs)('div', {
                className: X[''.concat(t, '-label')],
                children: [
                  (0, x.jsx)('div', {
                    className: X[''.concat(t, '-label-inner')],
                    children: i,
                  }),
                  (0, x.jsx)('div', {
                    className: X[''.concat(t, '-label-action')],
                    children: l,
                  }),
                ],
              }),
              !!o &&
                (0, x.jsx)('div', {
                  className: X[''.concat(t, '-inner')],
                  children: o,
                }),
            ],
          });
        },
        se = (0, t.forwardRef)(function (e, n) {
          var i = e.user,
            r = e.onUserFieldUpdate,
            a = e.onSubmitLoading,
            u = (0, w.Z)().viewportWidth < 700,
            v = i || {},
            f = v.fullName,
            p = v.username,
            m = v.profilePicUrl,
            j = v.bioLink,
            b = v.biography,
            g = v.isPrivate,
            Z = (0, t.useState)(),
            C = (0, l.Z)(Z, 2),
            y = C[0],
            S = C[1];
          (0, t.useEffect)(function () {
            S({ profilePicUrl: m, bioLink: j, biography: b, isPrivate: g });
          }, []);
          var N = (0, P.i)(h.Nq, {
              manual: !0,
              onSuccess: function () {
                null === r || void 0 === r || r(y);
              },
            }),
            U = N.run,
            B = N.loading;
          (0, t.useEffect)(
            function () {
              null === a || void 0 === a || a(B);
            },
            [B],
          );
          var z = (0, t.useMemo)(
            function () {
              return [
                {
                  label: '\u59d3\u540d',
                  children: (0, x.jsxs)('div', {
                    className: X[''.concat(re, '-inner-name')],
                    children: [
                      (0, x.jsx)(c.HE, {
                        className: X[''.concat(re, '-inner-name-icon')],
                        size: 14,
                        viewBox: '0 0 14 21',
                      }),
                      f,
                      '(@',
                      p,
                      ')',
                    ],
                  }),
                  suffix: (0, x.jsx)(te, {
                    url: null === y || void 0 === y ? void 0 : y.profilePicUrl,
                    onUrlChange: function (e) {
                      S(function (n) {
                        return (0, o.Z)(
                          (0, o.Z)({}, n),
                          {},
                          { profilePicUrl: e },
                        );
                      });
                    },
                  }),
                },
                {
                  label: '\u4e2a\u6027\u7b7e\u540d',
                  children: (0, x.jsx)(I.Z, {
                    placeholder: '\u7559\u4e0b\u4e2a\u6027\u7b7e\u540d',
                    value: null === y || void 0 === y ? void 0 : y.biography,
                    onChange: function (e) {
                      S(function (n) {
                        var i;
                        return (0, o.Z)(
                          (0, o.Z)({}, n),
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
                    className: X[''.concat(re, '-inner-textarea')],
                  }),
                },
                {
                  label: '\u94fe\u63a5',
                  children: (0, x.jsx)(I.Z, {
                    placeholder: 'https://www.example.com',
                    maxLength: 240,
                    value: null === y || void 0 === y ? void 0 : y.bioLink,
                    onChange: function (e) {
                      S(function (n) {
                        var i;
                        return (0, o.Z)(
                          (0, o.Z)({}, n),
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
                    className: k()(
                      X[''.concat(re, '-inner-textarea')],
                      X[''.concat(re, '-inner-link')],
                    ),
                  }),
                },
                {
                  label: '\u79c1\u5bc6\u4e3b\u9875',
                  labelAction: (0, x.jsx)(s.rs, {
                    checked: null === y || void 0 === y ? void 0 : y.isPrivate,
                    onChange: function (e) {
                      L.Z.confirm({
                        title: e
                          ? '\u5207\u6362\u4e3a\u79c1\u5bc6\u4e3b\u9875\uff1f'
                          : '\u5207\u6362\u4e3a\u516c\u5f00\u4e3b\u9875\uff1f',
                        content: e
                          ? '\u53ea\u6709\u6279\u51c6\u7684\u7c89\u4e1d\u624d\u80fd\u67e5\u770b\u4f60\u7684\u5185\u5bb9\u5e76\u4e0e\u4e4b\u4e92\u52a8\u3002'
                          : 'Threads \u5185\u5916\u7684\u4efb\u4f55\u4eba\u90fd\u80fd\u770b\u5230\u4f60\u7684\u5185\u5bb9\u5e76\u4e0e\u4e4b\u4e92\u52a8\u3002',
                        onOk: function () {
                          S(function (n) {
                            return (0, o.Z)(
                              (0, o.Z)({}, n),
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
          function F() {
            var e = (y || {}).bioLink;
            if (null !== y && void 0 !== y && y.bioLink && !_.Bu(e, 'url'))
              return void q.Z.show(
                '\u8bf7\u8f93\u5165\u6709\u6548\u7f51\u5740',
              );
            U(y);
          }
          return (
            (0, t.useImperativeHandle)(n, function () {
              return { submit: F };
            }),
            (0, x.jsxs)('div', {
              className: X[''.concat(re)],
              children: [
                z.map(function (e, n) {
                  var i = e.label,
                    o = e.children,
                    l = e.suffix,
                    t = e.labelAction;
                  return (0, x.jsxs)(
                    'div',
                    {
                      className: X[''.concat(re, '-inner')],
                      children: [
                        (0, x.jsx)(ae, {
                          label: i,
                          labelAction: t,
                          className: k()(
                            (0, d.Z)(
                              {},
                              X[''.concat(re, '-inner-last')],
                              n === z.length - 1,
                            ),
                          ),
                          children: o,
                        }),
                        l,
                      ],
                    },
                    n,
                  );
                }),
                !u &&
                  (0, x.jsx)(s.zx, {
                    type: 'primary',
                    size: 'large',
                    onClick: F,
                    loading: B,
                    children: '\u5b8c\u6210',
                  }),
              ],
            })
          );
        });
      se.displayName = 'ProfileEdit';
      var ce = se,
        ue = { 'profile-edit-modal': 'AZEI7' },
        de = function (e) {
          var n = e.visible,
            i = e.onClose,
            o = e.user,
            r = e.onUserFieldUpdate,
            a = (0, t.useState)(!1),
            c = (0, l.Z)(a, 2),
            u = c[0],
            d = c[1],
            f = (0, w.Z)().viewportWidth < 700,
            p = (0, t.useRef)(null);
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
                  className: ue[''.concat('profile-edit-modal')],
                  children: (0, x.jsx)(ce, {
                    onSubmitLoading: function (e) {
                      d(e);
                    },
                    ref: p,
                    user: o,
                    onUserFieldUpdate: function (e) {
                      null === r || void 0 === r || r(e),
                        null === i || void 0 === i || i();
                    },
                  }),
                }),
              })
            : (0, x.jsx)(v.Z, {
                visible: n,
                onClose: i,
                style: { width: 520 },
                children: (0, x.jsx)(ce, {
                  user: o,
                  onUserFieldUpdate: function (e) {
                    null === r || void 0 === r || r(e),
                      null === i || void 0 === i || i();
                  },
                }),
              });
        },
        ve = i(6021),
        fe = 'profile-action',
        pe = function (e) {
          var n = e.user,
            i = e.onUserFieldUpdate,
            r = (0, t.useState)(!1),
            c = (0, l.Z)(r, 2),
            u = c[0],
            d = c[1],
            v = (0, t.useState)(!1),
            f = (0, l.Z)(v, 2),
            p = f[0],
            m = f[1],
            h = n || {},
            j = h.friendshipStatus,
            b = h.username,
            g = h.mentionAuth,
            w = null === j || void 0 === j ? void 0 : j.isOwn,
            Z = null === j || void 0 === j ? void 0 : j.blocking,
            C =
              'everyone' === g ||
              ('following' === g &&
                (null === j || void 0 === j ? void 0 : j.following)),
            y = (0, t.useMemo)(
              function () {
                return {
                  type: 'mention',
                  displayText: '@'.concat(
                    null === n || void 0 === n ? void 0 : n.username,
                  ),
                };
              },
              [n],
            );
          var S = {
              user: n,
              onUserFriendshipStatusUpdate: function (e, l) {
                null === i ||
                  void 0 === i ||
                  i({
                    friendshipStatus: (0, o.Z)(
                      (0, o.Z)(
                        {},
                        null === n || void 0 === n
                          ? void 0
                          : n.friendshipStatus,
                      ),
                      l,
                    ),
                  });
              },
            },
            N = (0, R.r)(S),
            U = N.item,
            B = N.unblockLoading;
          return (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)('div', {
                className: k()(J[''.concat(fe)]),
                children: Z
                  ? (0, x.jsx)(s.zx, {
                      loading: B,
                      className: J[''.concat(fe, '-button')],
                      onClick: function () {
                        U.onClick();
                      },
                      children: '\u53d6\u6d88\u62c9\u9ed1',
                    })
                  : w
                  ? (0, x.jsxs)(x.Fragment, {
                      children: [
                        (0, x.jsx)(s.zx, {
                          className: J[''.concat(fe, '-button')],
                          onClick: function () {
                            d(!0);
                          },
                          children: '\u7f16\u8f91\u4e3b\u9875',
                        }),
                        M.Y &&
                          (0, x.jsx)(s.zx, {
                            className: J[''.concat(fe, '-button')],
                            onClick: function () {
                              var e,
                                n = ''
                                  .concat(window.location.origin, '/@')
                                  .concat(b);
                              null !== (e = navigator) &&
                              void 0 !== e &&
                              e.share
                                ? navigator.share({ title: b, url: n })
                                : (0, A.zp)(n);
                            },
                            children: '\u5206\u4eab\u4e3b\u9875',
                          }),
                      ],
                    })
                  : (0, x.jsxs)(x.Fragment, {
                      children: [
                        (0, x.jsx)(ve.Z, {
                          user: n,
                          className: J[''.concat(fe, '-button')],
                          type:
                            (null !== j && void 0 !== j && j.following) ||
                            (null !== j && void 0 !== j && j.followedBy)
                              ? 'default'
                              : 'primary',
                          onFollowingChange: function (e, n) {
                            var l = n.following,
                              t = n.outgoingRequest;
                            null === i ||
                              void 0 === i ||
                              i({
                                friendshipStatus: (0, o.Z)(
                                  (0, o.Z)({}, j),
                                  {},
                                  { following: l, outgoingRequest: t },
                                ),
                              });
                          },
                        }),
                        C &&
                          (0, x.jsx)(s.zx, {
                            className: J[''.concat(fe, '-button')],
                            onClick: function () {
                              m(!0);
                            },
                            children: '\u63d0\u53ca',
                          }),
                      ],
                    }),
              }),
              (0, x.jsx)(de, {
                user: n,
                visible: u,
                onUserFieldUpdate: i,
                onClose: function () {
                  d(!1);
                },
              }),
              (0, x.jsx)(a.K2, {
                visible: p,
                textEntity: y,
                onClose: function () {
                  m(!1);
                },
              }),
            ],
          });
        },
        me = i(4814),
        he = i(6031),
        xe = {
          'profile-posts-header': 'nJzs4',
          'profile-posts-create-post': 'gGRHI',
        },
        je = i(4747),
        be = 'profile-posts',
        ge = function (e) {
          var n,
            i,
            c,
            u,
            d = e.user,
            v = e.activeKey,
            m = e.onUserFieldUpdate,
            h = e.isBanned,
            j = (0, t.useRef)(null),
            b = (0, t.useRef)(null),
            g = (0, t.useRef)(null),
            w = (0, t.useContext)(je.k).state.navigationEmitter,
            Z = (0, t.useMemo)(
              function () {
                return { uid: null === d || void 0 === d ? void 0 : d.id };
              },
              [null === d || void 0 === d ? void 0 : d.id],
            ),
            C = (0, r.s0)(),
            k = (0, t.useState)(!1),
            y = (0, l.Z)(k, 2),
            S = y[0],
            N = y[1],
            U = (function () {
              var e = (0, p.Z)(
                (0, f.Z)().mark(function e(n) {
                  var i, o, l, t, r, a, s, c;
                  return (0, f.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = n.page),
                            (l = n.pageSize),
                            (t = n.uid),
                            (e.next = 3),
                            (0, me.O$)(t, { page: o, pageSize: l })
                          );
                        case 3:
                          return (
                            (r = e.sent),
                            (a = r.code),
                            (s = r.data),
                            (c = r.msg),
                            e.abrupt('return', {
                              success: 200 === a,
                              msg: c,
                              data:
                                (null === s ||
                                void 0 === s ||
                                null === (i = s.posts) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return {
                                        id: (0, he.uniqueId)(),
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
                  var i, o, l, t, r, a, s, c;
                  return (0, f.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = n.page),
                            (l = n.pageSize),
                            (t = n.uid),
                            (e.next = 3),
                            (0, me.M4)(t, { page: o, pageSize: l })
                          );
                        case 3:
                          return (
                            (r = e.sent),
                            (a = r.code),
                            (s = r.data),
                            (c = r.msg),
                            e.abrupt('return', {
                              success: 200 === a,
                              msg: c,
                              data:
                                (null === s ||
                                void 0 === s ||
                                null === (i = s.posts) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return {
                                        id: (0, he.uniqueId)(),
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
            z = (function () {
              var e = (0, p.Z)(
                (0, f.Z)().mark(function e(n) {
                  var i, o, l, t, r, a, s, c;
                  return (0, f.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = n.page),
                            (l = n.pageSize),
                            (t = n.uid),
                            (e.next = 3),
                            (0, me.j4)(t, { page: o, pageSize: l })
                          );
                        case 3:
                          return (
                            (r = e.sent),
                            (a = r.code),
                            (s = r.data),
                            (c = r.msg),
                            e.abrupt('return', {
                              success: 200 === a,
                              msg: c,
                              data:
                                (null === s ||
                                void 0 === s ||
                                null === (i = s.posts) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return {
                                        id: (0, he.uniqueId)(),
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
          function F() {
            return (
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : []
            ).map(function (e) {
              var n;
              return (0, o.Z)(
                (0, o.Z)({}, e),
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
                            ? (0, o.Z)(
                                (0, o.Z)({}, e),
                                {},
                                { user: (0, o.Z)((0, o.Z)({}, e.user), d) },
                              )
                            : e;
                        }),
                },
              );
            });
          }
          function L() {
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
                        friendshipStatus: (0, o.Z)(
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
          function P() {
            var e, n;
            if (window.scrollY) return window.scrollTo(0, 0);
            null === (e = j.current) ||
              void 0 === e ||
              null === (n = e.reload) ||
              void 0 === n ||
              n.call(e, !0);
          }
          return (
            (0, t.useEffect)(
              function () {
                var e, n, i;
                null === (e = j.current) || void 0 === e || e.updateData(F),
                  null === (n = b.current) || void 0 === n || n.updateData(F),
                  null === (i = g.current) || void 0 === i || i.updateData(F);
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
                  (null === (n = j.current) ||
                    void 0 === n ||
                    null === (i = n.reload) ||
                    void 0 === i ||
                    i.call(n));
              }),
            null === w ||
              void 0 === w ||
              w.useSubscription(function (e) {
                'profile' === e.type && P();
              }),
            (0, x.jsxs)(x.Fragment, {
              children: [
                (0, x.jsxs)(s.mQ, {
                  activeKey: v || '',
                  onChange: function (e) {
                    var n;
                    (n = e ? '/'.concat(e) : ''),
                      C(
                        '/@'
                          .concat(
                            null === d || void 0 === d ? void 0 : d.username,
                          )
                          .concat(n),
                        { replace: !0 },
                      );
                  },
                  onTabClick: function (e) {
                    var n,
                      i,
                      o,
                      l,
                      t,
                      r,
                      a = e === v;
                    if (a && window.scrollY) return window.scrollTo(0, 0);
                    switch (e) {
                      case '':
                        a &&
                          (null === (n = j.current) ||
                            void 0 === n ||
                            null === (i = n.reload) ||
                            void 0 === i ||
                            i.call(n, !0));
                        break;
                      case 'replies':
                        a &&
                          (null === (o = b.current) ||
                            void 0 === o ||
                            null === (l = o.reload) ||
                            void 0 === l ||
                            l.call(o, !0));
                        break;
                      case 'reposts':
                        a &&
                          (null === (t = g.current) ||
                            void 0 === t ||
                            null === (r = t.reload) ||
                            void 0 === r ||
                            r.call(t, !0));
                    }
                  },
                  tabClassName: xe[''.concat(be, '-header')],
                  children: [
                    (0, x.jsx)(
                      s.mQ.Tab,
                      {
                        title: '\u4e32\u6587',
                        children:
                          !h &&
                          (0, x.jsx)(a.p_, {
                            actionRef: j,
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
                            onDataChange: L,
                            onPostSuccess: function () {
                              var e, n;
                              null === (e = j.current) ||
                                void 0 === e ||
                                null === (n = e.reload) ||
                                void 0 === n ||
                                n.call(e, !0);
                            },
                            onUsernameClick: function (e) {
                              (null === e || void 0 === e
                                ? void 0
                                : e.username) ===
                                (null === d || void 0 === d
                                  ? void 0
                                  : d.username) && P();
                            },
                            emptyPlaceholder:
                              null !== d &&
                              void 0 !== d &&
                              null !== (u = d.friendshipStatus) &&
                              void 0 !== u &&
                              u.isOwn
                                ? (0, x.jsx)(s.zx, {
                                    className:
                                      xe[''.concat(be, '-create-post')],
                                    onClick: function () {
                                      N(!0);
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
                          (0, x.jsx)(a.p_, {
                            hasBorderTop: !1,
                            params: Z,
                            hasReplyTo: !0,
                            hasLoadingContainer: !0,
                            indent: !0,
                            request: B,
                            onDataChange: L,
                            emptyPlaceholder:
                              '\u8fd8\u6ca1\u6709\u56de\u590d\u3002',
                            actionRef: b,
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
                          (0, x.jsx)(a.p_, {
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
                            request: z,
                            onDataChange: L,
                            emptyPlaceholder: '\u6682\u65e0\u8f6c\u53d1\u3002',
                            actionRef: g,
                          }),
                      },
                      'reposts',
                    ),
                  ],
                }),
                (0, x.jsx)(a.K2, {
                  visible: S,
                  onSuccess: function () {
                    var e, n;
                    null === (e = j.current) ||
                      void 0 === e ||
                      null === (n = e.reload) ||
                      void 0 === n ||
                      n.call(e);
                  },
                  onClose: function () {
                    N(!1);
                  },
                }),
              ],
            })
          );
        },
        we = { 'profile-error': 'saBsa', 'profile-loading': 'NBqDS' },
        Ze = i(8420),
        Ce = {
          media: 'RtLCb',
          'media-viewer-content': 'PLSce',
          'fade-in': 'WHRqB',
          'scroll-in': 'f4tkm',
          'scale-in': 'ZXZJD',
          focus: 'VmFLx',
          'error-hint': 'OaioN',
        },
        ke = function (e) {
          var n = e.hint;
          return (0, x.jsx)('div', {
            className: Ce[''.concat('error-hint')],
            children: n,
          });
        },
        ye = i(3479),
        Se = {
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
        Ne = i(6023),
        Ue = 'following-request',
        Be = function (e) {
          var n,
            i = e.user,
            l = e.onUserFieldUpdate,
            t = (0, P.i)(h.aj, {
              manual: !0,
              onSuccess: function () {
                null === l ||
                  void 0 === l ||
                  l({
                    friendshipStatus: (0, o.Z)(
                      (0, o.Z)(
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
            r = t.run,
            a = t.loading,
            s = (0, P.i)(h.Sp, {
              manual: !0,
              onSuccess: function () {
                null === l ||
                  void 0 === l ||
                  l({
                    friendshipStatus: (0, o.Z)(
                      (0, o.Z)(
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
                className: Se[''.concat(Ue)],
                children: (0, x.jsxs)('div', {
                  className: Se[''.concat(Ue, '-inner')],
                  children: [
                    (0, x.jsxs)('div', {
                      className: Se[''.concat(Ue, '-inner-hint')],
                      children: [
                        (0, x.jsx)('div', {
                          className: Se[''.concat(Ue, '-inner-hint-username')],
                          children:
                            null === i || void 0 === i ? void 0 : i.username,
                        }),
                        (0, x.jsx)('div', {
                          className: Se[''.concat(Ue, '-inner-hint-text')],
                          children: '\u8bf7\u6c42\u5173\u6ce8\u4f60',
                        }),
                      ],
                    }),
                    (0, x.jsxs)('div', {
                      className: Se[''.concat(Ue, '-inner-action')],
                      children: [
                        (0, x.jsx)(Ne.Z, {
                          className: Se[''.concat(Ue, '-inner-action-button')],
                          loading: u,
                          onClick: function () {
                            c(null === i || void 0 === i ? void 0 : i.id);
                          },
                          children: '\u62d2\u7edd',
                        }),
                        (0, x.jsx)(Ne.Z, {
                          className: Se[''.concat(Ue, '-inner-action-button')],
                          type: 'primary',
                          loading: a,
                          onClick: function () {
                            r(null === i || void 0 === i ? void 0 : i.id);
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
        ze = i(2298),
        Fe = function () {
          (0, t.useEffect)(function () {
            window.scrollTo({ top: 0, left: 0 });
          }, []);
        },
        Le = 'profile',
        Pe = function () {
          var e,
            n,
            i,
            s,
            u,
            d,
            v = (0, t.useState)(!1),
            f = (0, l.Z)(v, 2),
            p = f[0],
            m = f[1],
            j = (0, t.useContext)(Ze.Vo),
            b = j.dispatch,
            g = j.state,
            w = (0, r.UO)(),
            Z = w.username,
            C = w.action,
            k = (0, ze.Z)(
              (null === (e = g.user) || void 0 === e ? void 0 : e.username) ===
                Z
                ? g.user
                : void 0,
              'profile-'.concat(Z),
            ),
            y = (0, l.Z)(k, 2),
            S = y[0],
            N = y[1];
          Fe();
          var U = null === Z || void 0 === Z ? void 0 : Z.substring(1),
            B =
              (((null === S || void 0 === S ? void 0 : S.isPrivate) &&
                !(
                  null !== S &&
                  void 0 !== S &&
                  null !== (n = S.friendshipStatus) &&
                  void 0 !== n &&
                  n.following
                )) ||
                (null === S ||
                void 0 === S ||
                null === (i = S.friendshipStatus) ||
                void 0 === i
                  ? void 0
                  : i.blocking) ||
                (null === S ||
                void 0 === S ||
                null === (s = S.friendshipStatus) ||
                void 0 === s
                  ? void 0
                  : s.blockedBy)) &&
              !(
                null !== S &&
                void 0 !== S &&
                null !== (u = S.friendshipStatus) &&
                void 0 !== u &&
                u.isOwn
              ),
            z = (0, P.i)(h.dQ, {
              manual: !0,
              onSuccess: function (e) {
                N(e);
              },
              onError: function () {
                m(!0);
              },
              ignoreErrorMsg: !0,
            }),
            F = z.loading,
            L = z.run;
          return (
            (0, (0, ye.Z)().setTitle)(
              S
                ? ''
                    .concat(
                      null === S || void 0 === S ? void 0 : S.fullName,
                      '(@',
                    )
                    .concat(
                      null === S || void 0 === S ? void 0 : S.username,
                      ')',
                    )
                : '',
            ),
            (0, t.useEffect)(
              function () {
                var e, n;
                null !== S &&
                  void 0 !== S &&
                  null !== (e = S.friendshipStatus) &&
                  void 0 !== e &&
                  e.isOwn &&
                  (null === (n = g.user) || void 0 === n
                    ? void 0
                    : n.isPrivate) !==
                    (null === S || void 0 === S ? void 0 : S.isPrivate) &&
                  S &&
                  N(function (e) {
                    var n;
                    return (
                      (e.isPrivate =
                        null === (n = g.user) || void 0 === n
                          ? void 0
                          : n.isPrivate),
                      (0, o.Z)({}, e)
                    );
                  });
              },
              [g.user, S],
            ),
            (0, t.useLayoutEffect)(
              function () {
                !S && L(U);
              },
              [U, S],
            ),
            F
              ? (0, x.jsx)('div', {
                  className: we[''.concat(Le, '-loading')],
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
              ? (0, x.jsx)(a.jC, { className: we[''.concat(Le, '-error')] })
              : (0, x.jsxs)(a._z, {
                  children: [
                    (0, x.jsx)(Be, {
                      user: S,
                      onUserFieldUpdate: function (e) {
                        N(function (n) {
                          return (0, o.Z)((0, o.Z)({}, n), e);
                        });
                      },
                    }),
                    (0, x.jsx)(Y, {
                      user: S,
                      onUserFieldUpdate: function (e) {
                        N(function (n) {
                          return (0, o.Z)((0, o.Z)({}, n), e);
                        });
                      },
                    }),
                    (0, x.jsx)(pe, {
                      user: S,
                      onUserFieldUpdate: function (e) {
                        N(function (n) {
                          return (0, o.Z)((0, o.Z)({}, n), e);
                        }),
                          b({ type: 'UPDATE_USER', payload: { user: e } });
                      },
                    }),
                    (0, x.jsx)(ge, {
                      isBanned: B,
                      user: S,
                      activeKey: C || '',
                      onUserFieldUpdate: function (e) {
                        N(function (n) {
                          return (0, o.Z)((0, o.Z)({}, n), e);
                        });
                      },
                    }),
                    B &&
                      (0, x.jsx)(ke, {
                        hint:
                          null !== S &&
                          void 0 !== S &&
                          null !== (d = S.friendshipStatus) &&
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
