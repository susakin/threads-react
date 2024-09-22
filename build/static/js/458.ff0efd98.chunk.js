'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [458],
  {
    8458: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return Le;
          },
        });
      var o = i(1413),
        l = i(9439),
        t = i(7313),
        r = i(8467),
        a = i(8568),
        s = i(5421),
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
        v = i(9599),
        f = i(4110),
        p = i(4165),
        m = i(5861),
        h = {
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
        x = i(3201),
        j = i(6611),
        b = i(6417),
        g = function (e) {
          var n = e.label,
            i = e.count,
            o = 'tabs-title';
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)('span', {
                className: h[''.concat(o, '-label')],
                children: n,
              }),
              (0, b.jsx)('span', {
                className: h[''.concat(o, '-count')],
                children: (0, j.z)(i),
              }),
            ],
          });
        },
        w = 'follower-tabs',
        Z = function (e) {
          var n = e.user,
            i = n || {},
            o = i.followerCount,
            l = i.followingCount,
            r = i.username,
            c = (0, t.useMemo)(function () {
              return { uid: null === n || void 0 === n ? void 0 : n.id };
            }, []),
            u = (function () {
              var e = (0, m.Z)(
                (0, p.Z)().mark(function e(n) {
                  var i, o, l, t, r, a, s, c;
                  return (0, p.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = n.page),
                            (l = n.pageSize),
                            (t = n.uid),
                            (e.next = 3),
                            (0, x.$e)(t, { page: o, pageSize: l })
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
              var e = (0, m.Z)(
                (0, p.Z)().mark(function e(n) {
                  var i, o, l, t, r, a, s, c;
                  return (0, p.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = n.page),
                            (l = n.pageSize),
                            (t = n.uid),
                            (e.next = 3),
                            (0, x.nX)(t, { page: o, pageSize: l })
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
          return (0, b.jsx)('div', {
            className: h[''.concat(w)],
            children: (0, b.jsxs)(s.mQ, {
              tabClassName: h[''.concat(w, '-header')],
              disabledContentScroll: !1,
              children: [
                (0, b.jsx)(
                  s.mQ.Tab,
                  {
                    title: (0, b.jsx)(g, { label: '\u7c89\u4e1d', count: o }),
                    children: (0, b.jsx)(a.Z7, {
                      request: u,
                      params: c,
                      hasFollower: !1,
                      hasFollow: !0,
                      emptyPlaceholder: ''.concat(
                        r,
                        '\u8fd8\u6ca1\u6709\u4efb\u4f55\u7c89\u4e1d\u3002',
                      ),
                      itemClassName: h[''.concat(w, '-user')],
                    }),
                  },
                  'follower',
                ),
                (0, b.jsx)(
                  s.mQ.Tab,
                  {
                    title: (0, b.jsx)(g, {
                      label: '\u5df2\u5173\u6ce8',
                      count: l,
                    }),
                    children: (0, b.jsx)(a.Z7, {
                      request: d,
                      hasFollower: !1,
                      hasFollow: !0,
                      params: c,
                      emptyPlaceholder: ''.concat(
                        r,
                        '\u8fd8\u6ca1\u6709\u4efb\u4f55\u5173\u6ce8\u8005\u3002',
                      ),
                      itemClassName: h[''.concat(w, '-user')],
                    }),
                  },
                  'followed',
                ),
              ],
            }),
          });
        },
        C = i(2706),
        y = function (e) {
          var n = e.visible,
            i = e.onClose,
            o = e.user,
            l = (0, C.Z)().viewportWidth < 700 ? s.GI : f.Z;
          return (0, b.jsx)(l, {
            visible: n,
            onClose: i,
            style: { width: 520 },
            children: (0, b.jsx)(Z, { user: o }),
          });
        },
        k = i(6123),
        S = i.n(k),
        N = {
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
        U = i(658),
        z = i.n(U),
        B = function (e) {
          var n = e.label,
            i = e.value,
            o = e.className,
            l = 'profile-item';
          return (0, b.jsxs)('div', {
            className: S()(N[''.concat(l)], o),
            children: [
              (0, b.jsx)('div', {
                className: N[''.concat(l, '-label')],
                children: n,
              }),
              !!i &&
                (0, b.jsx)('div', {
                  className: N[''.concat(l, '-value')],
                  children: i,
                }),
            ],
          });
        },
        F = 'profile-modal',
        L = function (e) {
          var n = e.visible,
            i = e.onClose,
            o = e.user || {},
            l = o.fullName,
            t = o.username,
            r = o.isVerified,
            a = o.profilePicUrl,
            u = o.createdAt,
            v = o.rank,
            p = o.location,
            m = (0, C.Z)().viewportWidth <= 699,
            h = [
              {
                label: '\u540d\u79f0',
                value: (0, b.jsxs)(b.Fragment, {
                  children: [
                    l,
                    '(@',
                    t,
                    r &&
                      (0, b.jsx)(c.we, {
                        fill: 'rgb(0, 149, 246)',
                        size: 12,
                        viewBox: '0 0 40 40',
                        className: N[''.concat(F, '-inner-item-badge')],
                      }),
                    ')',
                  ],
                }),
                suffix: (0, b.jsx)('div', {
                  className: N[''.concat(F, '-inner-item-avatar')],
                  children: (0, b.jsx)(s.qE, { url: a, size: 54 }),
                }),
              },
              {
                label: '\u52a0\u5165\u65f6\u95f4',
                value: (0, b.jsxs)(b.Fragment, {
                  children: [
                    z()(u).format('YYYY\u5e74MM\u6708'),
                    ' \xb7 # ',
                    (0, j.z)(v),
                  ],
                }),
              },
              { label: '\u6240\u5728\u5730', value: p },
            ],
            x = (0, b.jsx)('div', {
              className: N[''.concat(F, '-inner')],
              children: h.map(function (e, n) {
                var i = e.label,
                  o = e.value,
                  l = e.suffix;
                return (0, b.jsxs)(
                  'div',
                  {
                    className: N[''.concat(F, '-inner-item')],
                    children: [
                      (0, b.jsx)(B, {
                        label: i,
                        value: o,
                        className: S()(
                          (0, d.Z)(
                            {},
                            N[''.concat(F, '-inner-item-last')],
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
            ? (0, b.jsx)(s.Wb, { visible: n, onClose: i, children: x })
            : (0, b.jsx)(f.Z, {
                className: N[''.concat(F)],
                visible: n,
                onClose: i,
                animationType: 'scale-in',
                children: x,
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
        R = i(8048),
        T = i(5146),
        W = i(1040),
        E = i(5306),
        V = i(1595),
        A = function (e) {
          return (0, b.jsxs)(
            V.Z,
            (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                children: [
                  (0, b.jsx)('title', { children: e.ariaLabel }),
                  (0, b.jsx)('circle', {
                    strokeWidth: 2,
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    cx: '12.001',
                    cy: '12.005',
                    r: '10.5',
                  }),
                  (0, b.jsx)('circle', {
                    cx: '11.819',
                    cy: '7.709',
                    r: '1.25',
                  }),
                  (0, b.jsx)('line', {
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
                  (0, b.jsx)('polyline', {
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
        M = function (e) {
          return (0, b.jsxs)(
            V.Z,
            (0, o.Z)(
              (0, o.Z)({ fill: 'currentColor' }, e),
              {},
              {
                children: [
                  (0, b.jsx)('title', {
                    children: null === e || void 0 === e ? void 0 : e.ariaLabel,
                  }),
                  (0, b.jsx)('path', {
                    d: 'M2.10352 18.4167L7.76037 12.7599',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.5',
                  }),
                  (0, b.jsx)('path', {
                    d: 'M7.67188 18.3284L2.01502 12.6715',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.5',
                  }),
                  (0, b.jsx)('circle', {
                    cx: '10',
                    cy: '4.5',
                    fill: 'none',
                    r: '3.75',
                    stroke: 'currentColor',
                    strokeWidth: '1.5',
                  }),
                  (0, b.jsx)('path', {
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
        O = i(9910),
        Q = i(1114),
        D = i(8885),
        H = 'profile-follower',
        K = function (e) {
          var n,
            i,
            r,
            u,
            f = e.user,
            p = e.onUserFieldUpdate,
            m = (0, t.useState)(!1),
            h = (0, l.Z)(m, 2),
            g = h[0],
            w = h[1],
            Z = (0, t.useState)(!1),
            C = (0, l.Z)(Z, 2),
            k = C[0],
            N = C[1],
            U =
              null === f ||
              void 0 === f ||
              null === (n = f.friendshipStatus) ||
              void 0 === n
                ? void 0
                : n.isOwn,
            z =
              (null === f || void 0 === f ? void 0 : f.isPrivate) &&
              !U &&
              !(
                null !== f &&
                void 0 !== f &&
                null !== (i = f.friendshipStatus) &&
                void 0 !== i &&
                i.following
              ),
            B =
              null === f ||
              void 0 === f ||
              null === (r = f.friendshipStatus) ||
              void 0 === r
                ? void 0
                : r.restricting,
            F = f || {},
            V = F.followerCount,
            K = F.profileContextFacepileUsers,
            Y = F.bioLink,
            I = (0, t.useState)(!1),
            _ = (0, l.Z)(I, 2),
            J = _[0],
            X = _[1],
            G = {
              user: f,
              onUserFriendshipStatusUpdate: function (e, n) {
                null === p ||
                  void 0 === p ||
                  p({
                    friendshipStatus: (0, o.Z)(
                      (0, o.Z)(
                        {},
                        null === f || void 0 === f
                          ? void 0
                          : f.friendshipStatus,
                      ),
                      n,
                    ),
                  });
              },
            },
            $ = (0, E.l)(G).item,
            ee = (0, W.r)(G).item,
            ne = (0, R.i)(x.VR, {
              manual: !0,
              onSuccess: function () {
                T.Z.show('\u5df2\u79fb\u9664'),
                  null === p ||
                    void 0 === p ||
                    p({
                      friendshipStatus: (0, o.Z)(
                        (0, o.Z)(
                          {},
                          null === f || void 0 === f
                            ? void 0
                            : f.friendshipStatus,
                        ),
                        {},
                        { followedBy: !1 },
                      ),
                    });
              },
            }).run,
            ie = (0, R.i)(x.as, {
              manual: !0,
              onSuccess: function () {
                T.Z.show('\u5df2\u9650\u5236'),
                  null === p ||
                    void 0 === p ||
                    p({
                      friendshipStatus: (0, o.Z)(
                        (0, o.Z)(
                          {},
                          null === f || void 0 === f
                            ? void 0
                            : f.friendshipStatus,
                        ),
                        {},
                        { restricting: !0 },
                      ),
                    });
              },
            }).run,
            oe = (0, R.i)(x.ce, {
              manual: !0,
              onSuccess: function () {
                T.Z.show('\u5df2\u53d6\u6d88\u9650\u5236'),
                  null === p ||
                    void 0 === p ||
                    p({
                      friendshipStatus: (0, o.Z)(
                        (0, o.Z)(
                          {},
                          null === f || void 0 === f
                            ? void 0
                            : f.friendshipStatus,
                        ),
                        {},
                        { restricting: !1 },
                      ),
                    });
              },
            }).run,
            le = (0, t.useMemo)(
              function () {
                var e,
                  n = [
                    {
                      label: '\u590d\u5236\u94fe\u63a5',
                      icon: (0, b.jsx)(c.rU, {
                        viewBox: '0 0 18 18',
                        size: 21,
                        fill: 'transparent',
                      }),
                      onClick: function () {
                        (0, O.zp)(
                          ''
                            .concat(window.location.origin, '/@')
                            .concat(
                              null === f || void 0 === f ? void 0 : f.username,
                            ),
                        );
                      },
                    },
                    {
                      label: '\u5173\u4e8e\u8fd9\u4e2a\u4e3b\u9875',
                      onClick: function () {
                        N(!0);
                      },
                      icon: (0, b.jsx)(A, { viewBox: '0 0 24 24', size: 20 }),
                    },
                  ],
                  i = {
                    label: ''.concat(B ? '\u53d6\u6d88' : '', '\u9650\u5236 '),
                    onClick: function () {
                      B
                        ? oe(null === f || void 0 === f ? void 0 : f.id)
                        : ie(null === f || void 0 === f ? void 0 : f.id);
                    },
                    icon: B
                      ? (0, b.jsx)(c.F5, { viewBox: '0 0 20 20', size: 20 })
                      : (0, b.jsx)(c.De, { viewBox: '0 0 20 20', size: 20 }),
                  },
                  o = {
                    label: '\u79fb\u9664\u7c89\u4e1d',
                    onClick: function () {
                      q.Z.confirm({
                        title: '\u79fb\u9664\u7c89\u4e1d\uff1f',
                        content: '\u6211\u4eec\u4e0d\u4f1a\u544a\u8bc9'.concat(
                          null === f || void 0 === f ? void 0 : f.username,
                          '\u4f60\u5c06 TA \u79fb\u9664\u4e86\u3002',
                        ),
                        okText: '\u79fb\u9664',
                        okType: 'danger',
                        onOk: function () {
                          ne(null === f || void 0 === f ? void 0 : f.id);
                        },
                      });
                    },
                    icon: (0, b.jsx)(M, { viewBox: '0 0 20 20', size: 20 }),
                    split: !0,
                  };
                return [
                  n,
                  [
                    U ? void 0 : $,
                    U ? void 0 : i,
                    null !== f &&
                    void 0 !== f &&
                    null !== (e = f.friendshipStatus) &&
                    void 0 !== e &&
                    e.followedBy
                      ? o
                      : void 0,
                  ],
                  [U ? void 0 : ee],
                ];
              },
              [
                null === f ||
                void 0 === f ||
                null === (u = f.friendshipStatus) ||
                void 0 === u
                  ? void 0
                  : u.followedBy,
                B,
                ee,
              ],
            );
          return (0, b.jsxs)('div', {
            className: P[''.concat(H)],
            children: [
              (0, b.jsxs)('div', {
                className: P[''.concat(H, '-preview')],
                onClick: function () {
                  !z && w(!0);
                },
                role: 'button',
                tabIndex: 0,
                children: [
                  (0, b.jsx)(a.EA, {
                    urls:
                      null === K || void 0 === K
                        ? void 0
                        : K.map(function (e) {
                            return e.profilePicUrl;
                          }),
                  }),
                  (0, b.jsxs)('span', {
                    className: S()(
                      (0, d.Z)({}, P[''.concat(H, '-preview-count')], !z),
                    ),
                    children: [(0, j.z)(V), ' \u4f4d\u7c89\u4e1d'],
                  }),
                ],
              }),
              Y &&
                (0, b.jsxs)('div', {
                  className: P[''.concat(H, '-bio')],
                  children: [
                    (0, b.jsx)('span', {
                      className: P[''.concat(H, '-bio-split')],
                      children: '\xb7',
                    }),
                    (0, b.jsx)(s.rU, {
                      className: P[''.concat(H, '-bio-link')],
                      href: Y,
                    }),
                  ],
                }),
              (0, b.jsxs)('div', {
                className: P[''.concat(H, '-action')],
                children: [
                  (0, b.jsx)(s.vC, {
                    size: 24,
                    className: P[''.concat(H, '-action-button')],
                    children: (0, b.jsx)(c.mr, {
                      size: 24,
                      viewBox: '0 0 24 24',
                    }),
                  }),
                  !U &&
                    (0, b.jsx)(s.vC, {
                      size: 24,
                      className: P[''.concat(H, '-action-button')],
                      onClick: function () {
                        Q.Y && X(!0);
                      },
                      children: (0, b.jsx)(v.Z, {
                        hideWhenContentClick: !0,
                        enabled: !Q.Y,
                        placement: 'bottom-end',
                        menus: le,
                        children: (0, b.jsx)(c.gC, {
                          size: 24,
                          viewBox: '0 0 24 24',
                        }),
                      }),
                    }),
                ],
              }),
              (0, b.jsx)(y, {
                user: f,
                visible: g,
                onClose: function () {
                  w(!1);
                },
              }),
              (0, b.jsx)(L, {
                user: f,
                visible: k,
                onClose: function () {
                  N(!1);
                },
              }),
              (0, b.jsx)(D.Z, {
                visible: J,
                onClose: function () {
                  X(!1);
                },
                items: le,
              }),
            ],
          });
        },
        Y = 'profile-summary',
        I = function (e) {
          var n = e.user,
            o = e.onUserFieldUpdate,
            r = (0, t.useState)(!1),
            d = (0, l.Z)(r, 2),
            v = d[0],
            f = d[1],
            p = n || {},
            m = p.fullName,
            h = p.username,
            x = p.profilePicUrl,
            j = p.isVerified,
            g = p.biography,
            w = (0, t.useState)(!1),
            Z = (0, l.Z)(w, 2),
            C = Z[0],
            y = Z[1],
            k = x || i(9389);
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsxs)('div', {
                className: u[''.concat(Y)],
                children: [
                  (0, b.jsxs)('div', {
                    className: u[''.concat(Y, '-header')],
                    children: [
                      (0, b.jsxs)('div', {
                        className: u[''.concat(Y, '-header-name')],
                        children: [
                          (0, b.jsx)('div', {
                            className:
                              u[''.concat(Y, '-header-name-full-name')],
                            children: (0, b.jsx)('span', {
                              onClick: function () {
                                y(!0);
                              },
                              role: 'button',
                              tabIndex: 0,
                              className:
                                u[''.concat(Y, '-header-name-full-name-text')],
                              children: m,
                            }),
                          }),
                          (0, b.jsx)('div', {
                            className: u[''.concat(Y, '-header-name-username')],
                            children: h,
                          }),
                        ],
                      }),
                      (0, b.jsxs)('div', {
                        className: u[''.concat(Y, '-header-avatar')],
                        onClick: function () {
                          f(!0);
                        },
                        role: 'button',
                        tabIndex: 0,
                        children: [
                          (0, b.jsx)(s.qE, { url: k, size: '100%' }),
                          j &&
                            (0, b.jsx)('div', {
                              className:
                                u[''.concat(Y, '-header-avatar-badge')],
                              children: (0, b.jsx)(c.sA, {
                                viewBox: '-4 0 27 19',
                                size: 25,
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, b.jsx)('div', {
                    className: u[''.concat(Y, '-biography')],
                    children: (0, b.jsx)(a.uR, { text: g }),
                  }),
                  (0, b.jsx)(K, { user: n, onUserFieldUpdate: o }),
                ],
              }),
              (0, b.jsx)(s.N1, {
                url: k,
                visible: v,
                onClose: function () {
                  f(!1);
                },
              }),
              (0, b.jsx)(L, {
                visible: C,
                user: n,
                onClose: function () {
                  y(!1);
                },
              }),
            ],
          });
        },
        _ = {
          media: 'lRlL8',
          'media-viewer-content': 'h8O8o',
          'fade-in': 'CUMXt',
          'scroll-in': 'jp_Yt',
          'scale-in': 'fBndC',
          focus: 'MiqIA',
          'profile-action': 'ehwQ4',
          'profile-action-button': 'VLhMQ',
        },
        J = i(6867),
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
        G = i(9236),
        $ = i(4925),
        ee = {
          media: 't8xDy',
          'media-viewer-content': 'A1cIV',
          'fade-in': 'Bftt_',
          'scroll-in': 'mU1D9',
          'scale-in': 'lJbi_',
          focus: 'X_I8q',
          'avatar-selector': 'yiHsr',
          'avatar-selector-empty': 'OSVjG',
        },
        ne = i(9904),
        ie = ['onUrlChange'],
        oe = 'avatar-selector',
        le = function (e) {
          var n = e.onUrlChange,
            i = (0, $.Z)(e, ie),
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
              label: (0, b.jsx)(a.p0, {
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
                children: (0, b.jsx)('div', {
                  className: ee[''.concat(oe, '-upload')],
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
            (0, b.jsx)(v.Z, {
              placement: 'bottom-end',
              menus: [d],
              floatingStyles: { zIndex: 3 },
              children: (0, b.jsx)('div', {
                className: ee[''.concat(oe)],
                children: s
                  ? (0, b.jsx)(ne.Z, { size: 52, url: s })
                  : (0, b.jsx)('div', {
                      className: ee[''.concat(oe, '-empty')],
                      children: (0, b.jsx)(c.ZP, {
                        fill: 'currentColor',
                        size: 32,
                        viewBox: '0 0 30 30',
                      }),
                    }),
              }),
            })
          );
        },
        te = 'profile-edit',
        re = function (e) {
          var n = e.className,
            i = e.label,
            o = e.children,
            l = e.labelAction,
            t = 'profile-edit-item';
          return (0, b.jsxs)('div', {
            className: S()(X[''.concat(t)], n),
            children: [
              (0, b.jsxs)('div', {
                className: X[''.concat(t, '-label')],
                children: [
                  (0, b.jsx)('div', {
                    className: X[''.concat(t, '-label-inner')],
                    children: i,
                  }),
                  (0, b.jsx)('div', {
                    className: X[''.concat(t, '-label-action')],
                    children: l,
                  }),
                ],
              }),
              !!o &&
                (0, b.jsx)('div', {
                  className: X[''.concat(t, '-inner')],
                  children: o,
                }),
            ],
          });
        },
        ae = (0, t.forwardRef)(function (e, n) {
          var i = e.user,
            r = e.onUserFieldUpdate,
            a = e.onSubmitLoading,
            u = (0, C.Z)().viewportWidth < 700,
            v = i || {},
            f = v.fullName,
            p = v.username,
            m = v.profilePicUrl,
            h = v.bioLink,
            j = v.biography,
            g = v.isPrivate,
            w = (0, t.useState)(),
            Z = (0, l.Z)(w, 2),
            y = Z[0],
            k = Z[1];
          (0, t.useEffect)(function () {
            k({ profilePicUrl: m, bioLink: h, biography: j, isPrivate: g });
          }, []);
          var N = (0, R.i)(x.Nq, {
              manual: !0,
              onSuccess: function () {
                null === r || void 0 === r || r(y);
              },
            }),
            U = N.run,
            z = N.loading;
          (0, t.useEffect)(
            function () {
              null === a || void 0 === a || a(z);
            },
            [z],
          );
          var B = (0, t.useMemo)(
            function () {
              return [
                {
                  label: '\u59d3\u540d',
                  children: (0, b.jsxs)('div', {
                    className: X[''.concat(te, '-inner-name')],
                    children: [
                      (0, b.jsx)(c.HE, {
                        className: X[''.concat(te, '-inner-name-icon')],
                        size: 14,
                        viewBox: '0 0 14 21',
                      }),
                      f,
                      '(@',
                      p,
                      ')',
                    ],
                  }),
                  suffix: (0, b.jsx)(le, {
                    url: null === y || void 0 === y ? void 0 : y.profilePicUrl,
                    onUrlChange: function (e) {
                      k(function (n) {
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
                  children: (0, b.jsx)(J.Z, {
                    placeholder: '\u7559\u4e0b\u4e2a\u6027\u7b7e\u540d',
                    value: null === y || void 0 === y ? void 0 : y.biography,
                    onChange: function (e) {
                      k(function (n) {
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
                    className: X[''.concat(te, '-inner-textarea')],
                  }),
                },
                {
                  label: '\u94fe\u63a5',
                  children: (0, b.jsx)(J.Z, {
                    placeholder: 'https://www.example.com',
                    maxLength: 240,
                    value: null === y || void 0 === y ? void 0 : y.bioLink,
                    onChange: function (e) {
                      k(function (n) {
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
                    className: S()(
                      X[''.concat(te, '-inner-textarea')],
                      X[''.concat(te, '-inner-link')],
                    ),
                  }),
                },
                {
                  label: '\u79c1\u5bc6\u4e3b\u9875',
                  labelAction: (0, b.jsx)(s.rs, {
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
                          k(function (n) {
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
            if (null !== y && void 0 !== y && y.bioLink && !G.Bu(e, 'url'))
              return void T.Z.show(
                '\u8bf7\u8f93\u5165\u6709\u6548\u7f51\u5740',
              );
            U(y);
          }
          return (
            (0, t.useImperativeHandle)(n, function () {
              return { submit: F };
            }),
            (0, b.jsxs)('div', {
              className: X[''.concat(te)],
              children: [
                B.map(function (e, n) {
                  var i = e.label,
                    o = e.children,
                    l = e.suffix,
                    t = e.labelAction;
                  return (0, b.jsxs)(
                    'div',
                    {
                      className: X[''.concat(te, '-inner')],
                      children: [
                        (0, b.jsx)(re, {
                          label: i,
                          labelAction: t,
                          className: S()(
                            (0, d.Z)(
                              {},
                              X[''.concat(te, '-inner-last')],
                              n === B.length - 1,
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
                  (0, b.jsx)(s.zx, {
                    type: 'primary',
                    size: 'large',
                    onClick: F,
                    loading: z,
                    children: '\u5b8c\u6210',
                  }),
              ],
            })
          );
        });
      ae.displayName = 'ProfileEdit';
      var se = ae,
        ce = { 'profile-edit-modal': 'AZEI7' },
        ue = function (e) {
          var n = e.visible,
            i = e.onClose,
            o = e.user,
            r = e.onUserFieldUpdate,
            a = (0, t.useState)(!1),
            c = (0, l.Z)(a, 2),
            u = c[0],
            d = c[1],
            v = (0, C.Z)().viewportWidth < 700,
            p = (0, t.useRef)(null);
          return v
            ? (0, b.jsx)(s.pH, {
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
                children: (0, b.jsx)('div', {
                  className: ce[''.concat('profile-edit-modal')],
                  children: (0, b.jsx)(se, {
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
            : (0, b.jsx)(f.Z, {
                visible: n,
                onClose: i,
                style: { width: 520 },
                children: (0, b.jsx)(se, {
                  user: o,
                  onUserFieldUpdate: function (e) {
                    null === r || void 0 === r || r(e),
                      null === i || void 0 === i || i();
                  },
                }),
              });
        },
        de = i(6021),
        ve = 'profile-action',
        fe = function (e) {
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
            x = h.friendshipStatus,
            j = h.username,
            g = h.mentionAuth,
            w = null === x || void 0 === x ? void 0 : x.isOwn,
            Z = null === x || void 0 === x ? void 0 : x.blocking,
            C =
              'everyone' === g ||
              ('following' === g &&
                (null === x || void 0 === x ? void 0 : x.following)),
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
          var k = {
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
            N = (0, W.r)(k),
            U = N.item,
            z = N.unblockLoading;
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)('div', {
                className: S()(_[''.concat(ve)]),
                children: Z
                  ? (0, b.jsx)(s.zx, {
                      loading: z,
                      className: _[''.concat(ve, '-button')],
                      onClick: function () {
                        U.onClick();
                      },
                      children: '\u53d6\u6d88\u62c9\u9ed1',
                    })
                  : w
                  ? (0, b.jsxs)(b.Fragment, {
                      children: [
                        (0, b.jsx)(s.zx, {
                          className: _[''.concat(ve, '-button')],
                          onClick: function () {
                            d(!0);
                          },
                          children: '\u7f16\u8f91\u4e3b\u9875',
                        }),
                        Q.Y &&
                          (0, b.jsx)(s.zx, {
                            className: _[''.concat(ve, '-button')],
                            onClick: function () {
                              var e,
                                n = ''
                                  .concat(window.location.origin, '/@')
                                  .concat(j);
                              null !== (e = navigator) &&
                              void 0 !== e &&
                              e.share
                                ? navigator.share({ title: j, url: n })
                                : (0, O.zp)(n);
                            },
                            children: '\u5206\u4eab\u4e3b\u9875',
                          }),
                      ],
                    })
                  : (0, b.jsxs)(b.Fragment, {
                      children: [
                        (0, b.jsx)(de.Z, {
                          user: n,
                          className: _[''.concat(ve, '-button')],
                          type:
                            (null !== x && void 0 !== x && x.following) ||
                            (null !== x && void 0 !== x && x.followedBy)
                              ? 'default'
                              : 'primary',
                          onFollowingChange: function (e, n) {
                            var l = n.following,
                              t = n.outgoingRequest;
                            null === i ||
                              void 0 === i ||
                              i({
                                friendshipStatus: (0, o.Z)(
                                  (0, o.Z)({}, x),
                                  {},
                                  { following: l, outgoingRequest: t },
                                ),
                              });
                          },
                        }),
                        C &&
                          (0, b.jsx)(s.zx, {
                            className: _[''.concat(ve, '-button')],
                            onClick: function () {
                              m(!0);
                            },
                            children: '\u63d0\u53ca',
                          }),
                      ],
                    }),
              }),
              (0, b.jsx)(ue, {
                user: n,
                visible: u,
                onUserFieldUpdate: i,
                onClose: function () {
                  d(!1);
                },
              }),
              (0, b.jsx)(a.K2, {
                visible: p,
                textEntity: y,
                onClose: function () {
                  m(!1);
                },
              }),
            ],
          });
        },
        pe = i(4814),
        me = i(6031),
        he = {
          'profile-posts-header': 'nJzs4',
          'profile-posts-create-post': 'gGRHI',
        },
        xe = i(4747),
        je = 'profile-posts',
        be = function (e) {
          var n,
            i,
            c,
            u,
            d = e.user,
            v = e.activeKey,
            f = e.onUserFieldUpdate,
            h = e.isBanned,
            x = (0, t.useRef)(null),
            j = (0, t.useRef)(null),
            g = (0, t.useRef)(null),
            w = (0, t.useContext)(xe.k).state.navigationEmitter,
            Z = (0, t.useMemo)(
              function () {
                return { uid: null === d || void 0 === d ? void 0 : d.id };
              },
              [null === d || void 0 === d ? void 0 : d.id],
            ),
            C = (0, r.s0)(),
            y = (0, t.useState)(!1),
            k = (0, l.Z)(y, 2),
            S = k[0],
            N = k[1],
            U = (function () {
              var e = (0, m.Z)(
                (0, p.Z)().mark(function e(n) {
                  var i, o, l, t, r, a, s, c;
                  return (0, p.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = n.page),
                            (l = n.pageSize),
                            (t = n.uid),
                            (e.next = 3),
                            (0, pe.O$)(t, { page: o, pageSize: l })
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
                                        id: (0, me.uniqueId)(),
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
              var e = (0, m.Z)(
                (0, p.Z)().mark(function e(n) {
                  var i, o, l, t, r, a, s, c;
                  return (0, p.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = n.page),
                            (l = n.pageSize),
                            (t = n.uid),
                            (e.next = 3),
                            (0, pe.M4)(t, { page: o, pageSize: l })
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
                                        id: (0, me.uniqueId)(),
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
              var e = (0, m.Z)(
                (0, p.Z)().mark(function e(n) {
                  var i, o, l, t, r, a, s, c;
                  return (0, p.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = n.page),
                            (l = n.pageSize),
                            (t = n.uid),
                            (e.next = 3),
                            (0, pe.j4)(t, { page: o, pageSize: l })
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
                                        id: (0, me.uniqueId)(),
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
                    (null === f ||
                      void 0 === f ||
                      f({
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
            null === (e = x.current) ||
              void 0 === e ||
              null === (n = e.reload) ||
              void 0 === n ||
              n.call(e, !0);
          }
          return (
            (0, t.useEffect)(
              function () {
                var e, n, i;
                null === (e = x.current) || void 0 === e || e.updateData(F),
                  null === (n = j.current) || void 0 === n || n.updateData(F),
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
                var n, i, o;
                'newPost' === e.type &&
                  (null === d ||
                  void 0 === d ||
                  null === (n = d.friendshipStatus) ||
                  void 0 === n
                    ? void 0
                    : n.isOwn) &&
                  (null === (i = x.current) ||
                    void 0 === i ||
                    null === (o = i.reload) ||
                    void 0 === o ||
                    o.call(i));
              }),
            null === w ||
              void 0 === w ||
              w.useSubscription(function (e) {
                'profile' === e.type && P();
              }),
            (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsxs)(s.mQ, {
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
                          (null === (n = x.current) ||
                            void 0 === n ||
                            null === (i = n.reload) ||
                            void 0 === i ||
                            i.call(n, !0));
                        break;
                      case 'replies':
                        a &&
                          (null === (o = j.current) ||
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
                  tabClassName: he[''.concat(je, '-header')],
                  children: [
                    (0, b.jsx)(
                      s.mQ.Tab,
                      {
                        title: '\u4e32\u6587',
                        children:
                          !h &&
                          (0, b.jsx)(a.p_, {
                            actionRef: x,
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
                              null === (e = x.current) ||
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
                                ? (0, b.jsx)(s.zx, {
                                    className:
                                      he[''.concat(je, '-create-post')],
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
                    (0, b.jsx)(
                      s.mQ.Tab,
                      {
                        title: '\u56de\u590d',
                        children:
                          !h &&
                          (0, b.jsx)(a.p_, {
                            hasBorderTop: !1,
                            params: Z,
                            hasReplyTo: !0,
                            hasLoadingContainer: !0,
                            indent: !0,
                            request: z,
                            onDataChange: L,
                            emptyPlaceholder:
                              '\u8fd8\u6ca1\u6709\u56de\u590d\u3002',
                            actionRef: j,
                            cacheKey: ''.concat(
                              null === d || void 0 === d ? void 0 : d.id,
                              '-reply',
                            ),
                            ignoreUnavailablePost: !0,
                          }),
                      },
                      'replies',
                    ),
                    (0, b.jsx)(
                      s.mQ.Tab,
                      {
                        title: '\u8f6c\u53d1',
                        children:
                          !h &&
                          (0, b.jsx)(a.p_, {
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
                            onDataChange: L,
                            emptyPlaceholder: '\u6682\u65e0\u8f6c\u53d1\u3002',
                            actionRef: g,
                          }),
                      },
                      'reposts',
                    ),
                  ],
                }),
                (0, b.jsx)(a.K2, {
                  visible: S,
                  onSuccess: function () {
                    var e, n;
                    null === (e = x.current) ||
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
        ge = { 'profile-error': 'saBsa', 'profile-loading': 'NBqDS' },
        we = i(8420),
        Ze = {
          media: 'RtLCb',
          'media-viewer-content': 'PLSce',
          'fade-in': 'WHRqB',
          'scroll-in': 'f4tkm',
          'scale-in': 'ZXZJD',
          focus: 'VmFLx',
          'error-hint': 'OaioN',
        },
        Ce = function (e) {
          var n = e.hint;
          return (0, b.jsx)('div', {
            className: Ze[''.concat('error-hint')],
            children: n,
          });
        },
        ye = i(3479),
        ke = {
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
        Se = i(6023),
        Ne = 'following-request',
        Ue = function (e) {
          var n,
            i = e.user,
            l = e.onUserFieldUpdate,
            t = (0, R.i)(x.aj, {
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
            s = (0, R.i)(x.Sp, {
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
            ? (0, b.jsx)('div', {
                className: ke[''.concat(Ne)],
                children: (0, b.jsxs)('div', {
                  className: ke[''.concat(Ne, '-inner')],
                  children: [
                    (0, b.jsxs)('div', {
                      className: ke[''.concat(Ne, '-inner-hint')],
                      children: [
                        (0, b.jsx)('div', {
                          className: ke[''.concat(Ne, '-inner-hint-username')],
                          children:
                            null === i || void 0 === i ? void 0 : i.username,
                        }),
                        (0, b.jsx)('div', {
                          className: ke[''.concat(Ne, '-inner-hint-text')],
                          children: '\u8bf7\u6c42\u5173\u6ce8\u4f60',
                        }),
                      ],
                    }),
                    (0, b.jsxs)('div', {
                      className: ke[''.concat(Ne, '-inner-action')],
                      children: [
                        (0, b.jsx)(Se.Z, {
                          className: ke[''.concat(Ne, '-inner-action-button')],
                          loading: u,
                          onClick: function () {
                            c(null === i || void 0 === i ? void 0 : i.id);
                          },
                          children: '\u62d2\u7edd',
                        }),
                        (0, b.jsx)(Se.Z, {
                          className: ke[''.concat(Ne, '-inner-action-button')],
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
        Be = function () {
          (0, t.useEffect)(function () {
            window.scrollTo({ top: 0, left: 0 });
          }, []);
        },
        Fe = 'profile',
        Le = function () {
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
            h = (0, t.useContext)(we.Vo),
            j = h.dispatch,
            g = h.state,
            w = (0, r.UO)(),
            Z = w.username,
            C = w.action,
            y = (0, ze.Z)(
              (null === (e = g.user) || void 0 === e ? void 0 : e.username) ===
                Z
                ? g.user
                : void 0,
              'profile-'.concat(Z),
            ),
            k = (0, l.Z)(y, 2),
            S = k[0],
            N = k[1];
          Be();
          var U = null === Z || void 0 === Z ? void 0 : Z.substring(1),
            z =
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
            B = (0, R.i)(x.dQ, {
              manual: !0,
              onSuccess: function (e) {
                N(e);
              },
              onError: function () {
                m(!0);
              },
              ignoreErrorMsg: !0,
            }),
            F = B.loading,
            L = B.run;
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
              ? (0, b.jsx)('div', {
                  className: ge[''.concat(Fe, '-loading')],
                  children: (0, b.jsx)(c.yC, {
                    size: 20,
                    viewBox: '0 0 100 100',
                  }),
                })
              : null === Z ||
                void 0 === Z ||
                !Z.startsWith('@') ||
                '@' === Z ||
                p
              ? (0, b.jsx)(a.jC, { className: ge[''.concat(Fe, '-error')] })
              : (0, b.jsxs)(a._z, {
                  children: [
                    (0, b.jsx)(Ue, {
                      user: S,
                      onUserFieldUpdate: function (e) {
                        N(function (n) {
                          return (0, o.Z)((0, o.Z)({}, n), e);
                        });
                      },
                    }),
                    (0, b.jsx)(I, {
                      user: S,
                      onUserFieldUpdate: function (e) {
                        N(function (n) {
                          return (0, o.Z)((0, o.Z)({}, n), e);
                        });
                      },
                    }),
                    (0, b.jsx)(fe, {
                      user: S,
                      onUserFieldUpdate: function (e) {
                        N(function (n) {
                          return (0, o.Z)((0, o.Z)({}, n), e);
                        }),
                          j({ type: 'UPDATE_USER', payload: { user: e } });
                      },
                    }),
                    (0, b.jsx)(be, {
                      isBanned: z,
                      user: S,
                      activeKey: C || '',
                      onUserFieldUpdate: function (e) {
                        N(function (n) {
                          return (0, o.Z)((0, o.Z)({}, n), e);
                        });
                      },
                    }),
                    z &&
                      (0, b.jsx)(Ce, {
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
