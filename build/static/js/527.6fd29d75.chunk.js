'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [527],
  {
    5527: function (n, i, o) {
      o.r(i),
        o.d(i, {
          default: function () {
            return y;
          },
        });
      var e = o(4165),
        t = o(5861),
        d = o(9439),
        l = o(7313),
        u = o(706),
        s = o(7176),
        a = o(8467),
        v = o(4814),
        c = o(8048),
        r = o(6031),
        p = {
          media: 'AXYqt',
          'media-viewer-content': 'eSJc6',
          'fade-in': 'JQKOj',
          'scroll-in': 'f3aza',
          'scale-in': 'GfSYk',
          focus: 'llVxh',
          post: 'mixLD',
          'post-activity': 'd16fB',
          'post-activity-text': 'fnL1x',
          'post-activity-button': 'XyEeq',
          'post-split': 'FKCC0',
        },
        h = o(3479),
        f = o(2298),
        m = o(813),
        g = o(340),
        x = o(6417),
        C = 'post',
        y = function () {
          var n,
            i,
            o,
            y,
            j,
            S,
            P = (0, a.UO)().code,
            Z = (0, l.useState)(!1),
            k = (0, d.Z)(Z, 2),
            w = k[0],
            T = k[1],
            q = (0, f.Z)(void 0, ''.concat(P, '-detail')),
            z = (0, d.Z)(q, 2),
            b = z[0],
            D = z[1],
            I = (0, l.useState)(!1),
            L = (0, d.Z)(I, 2),
            M = L[0],
            N = L[1],
            U = (0, c.i)(v.si, {
              manual: !0,
              onSuccess: function (n) {
                D(n), T(!n.length);
              },
              onError: function () {
                T(!0);
              },
            }),
            E = U.loading,
            F = U.run,
            K = null === b || void 0 === b ? void 0 : b[0],
            O = (0, l.useState)(!1),
            R = (0, d.Z)(O, 2),
            _ = R[0],
            B = R[1],
            W = (0, l.useState)(!1),
            X = (0, d.Z)(W, 2),
            J = X[0],
            Y = X[1],
            A = (0, l.useRef)(null),
            G = (0, l.useRef)(),
            H = (0, l.useState)(),
            Q = (0, d.Z)(H, 2),
            V = Q[0],
            $ = Q[1],
            nn = (0, a.s0)(),
            on = (0, g.v)();
          (0, l.useLayoutEffect)(
            function () {
              b
                ? T(!(null !== b && void 0 !== b && b.length))
                : ($(null), B(!1), F(P));
            },
            [P, b],
          );
          var en = (0, l.useMemo)(
              function () {
                return [{ id: (0, r.uniqueId)(), posts: b }];
              },
              [b],
            ),
            tn = (function () {
              var n = (0, t.Z)(
                (0, e.Z)().mark(function n(i) {
                  var o, t, d, l, u, s, a, c;
                  return (0, e.Z)().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (o = i.page),
                            (t = i.pageSize),
                            (d = i.id),
                            (l = i.excludePostCode),
                            (n.next = 3),
                            (0, v.ru)(d, {
                              page: o,
                              pageSize: t,
                              excludePostCode: l,
                            })
                          );
                        case 3:
                          return (
                            (u = n.sent),
                            (s = u.code),
                            (a = u.msg),
                            (c = u.data),
                            n.abrupt('return', {
                              success: 200 == s,
                              msg: a,
                              data: (
                                (null === c || void 0 === c
                                  ? void 0
                                  : c.posts) || []
                              ).map(function (n) {
                                return { id: (0, r.uniqueId)(), posts: n };
                              }),
                              total:
                                null === c || void 0 === c ? void 0 : c.total,
                            })
                          );
                        case 8:
                        case 'end':
                          return n.stop();
                      }
                  }, n);
                }),
              );
              return function (i) {
                return n.apply(this, arguments);
              };
            })(),
            dn = (0, l.useMemo)(
              function () {
                return { id: null === V || void 0 === V ? void 0 : V.id };
              },
              [null === V || void 0 === V ? void 0 : V.id],
            ),
            ln = (0, l.useMemo)(
              function () {
                return {
                  id: null === K || void 0 === K ? void 0 : K.id,
                  excludePostCode: P,
                };
              },
              [null === K || void 0 === K ? void 0 : K.id],
            );
          (0, (0, h.Z)().setTitle)(
            K
              ? '@'
                  .concat(
                    (null === K ||
                    void 0 === K ||
                    null === (n = K.user) ||
                    void 0 === n
                      ? void 0
                      : n.username) || '',
                    ' \u2022 ',
                  )
                  .concat(
                    (null === K || void 0 === K ? void 0 : K.caption) ||
                      '\u5e16\u5b50',
                  )
              : '',
          );
          var un = (0, c.i)(v.Xe, {
              manual: !0,
              onSuccess: function (n) {
                var i, o;
                null === A ||
                  void 0 === A ||
                  null === (i = A.current) ||
                  void 0 === i ||
                  null === (o = i.appendData) ||
                  void 0 === o ||
                  o.call(
                    i,
                    ((null === n || void 0 === n ? void 0 : n.posts) || []).map(
                      function (n) {
                        return { id: (0, r.uniqueId)(), posts: n };
                      },
                    ),
                  );
              },
            }),
            sn = un.run,
            an = un.loading,
            vn =
              ((null === V || void 0 === V ? void 0 : V.repostCount) || 0) >
                0 ||
              ((null === V || void 0 === V ? void 0 : V.likeCount) || 0) > 0 ||
              ((null === V || void 0 === V ? void 0 : V.commentCount) || 0) > 0;
          return (0, x.jsx)(u._z, {
            children: (0, x.jsxs)('div', {
              className: p[''.concat(C)],
              children: [
                (0, x.jsx)(u.ly, {
                  loading: an,
                  children: E
                    ? (0, x.jsx)(s.yC, { spinning: !0, height: 150 })
                    : w
                    ? (0, x.jsx)(u.jC, {})
                    : (0, x.jsxs)(x.Fragment, {
                        children: [
                          (0, x.jsx)(u.p_, {
                            hasPaddingTop: !1,
                            data: en,
                            lastChildLineType: 'none',
                            lastChildHasSummaryUserPreview: !1,
                            ignoreMutingUser: !1,
                            indent: !0,
                            hasPin: !0,
                            onDelete: function (n) {
                              n ===
                                (null === K || void 0 === K ? void 0 : K.id) &&
                                (on.length > 0 ? nn(-1) : nn('/'));
                            },
                            pinToWhere: 'profile',
                            onDataChange: function (n) {
                              var i,
                                o =
                                  null ===
                                    (i =
                                      n[
                                        (null === n || void 0 === n
                                          ? void 0
                                          : n.length) - 1
                                      ]) || void 0 === i
                                    ? void 0
                                    : i.posts,
                                e =
                                  null === o || void 0 === o
                                    ? void 0
                                    : o[
                                        (null === o || void 0 === o
                                          ? void 0
                                          : o.length) - 1
                                      ];
                              $(
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.code) === P
                                  ? e
                                  : K,
                              );
                            },
                            onCommentCountClick: function () {
                              null !== dn &&
                                void 0 !== dn &&
                                dn.id &&
                                _ &&
                                sn(
                                  null === dn || void 0 === dn ? void 0 : dn.id,
                                  { pageSize: 5, replyId: G.current },
                                );
                            },
                            actionRef: A,
                          }),
                          vn &&
                            (0, x.jsxs)('div', {
                              className: p[''.concat(C, '-activity')],
                              children: [
                                ((null === V || void 0 === V
                                  ? void 0
                                  : V.commentCount) || 0) > 0 &&
                                  (0, x.jsx)('div', {
                                    className:
                                      p[''.concat(C, '-activity-text')],
                                    children: '\u56de\u590d',
                                  }),
                                (0, x.jsxs)(s.zx, {
                                  type: 'text',
                                  className:
                                    p[''.concat(C, '-activity-button')],
                                  onClick: function () {
                                    N(!0);
                                  },
                                  children: [
                                    '\u67e5\u770b\u52a8\u6001',
                                    (0, x.jsx)(m.Nm, {
                                      viewBox: '0 0 24 24',
                                      size: 12,
                                      style: {
                                        marginLeft: 4,
                                        transform: 'rotate(180deg)',
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          (null === dn || void 0 === dn ? void 0 : dn.id) &&
                            (0, x.jsx)(
                              u.p_,
                              {
                                pinToWhere: 'comment',
                                ignoreMutingUser: !1,
                                hasPin:
                                  (null === K ||
                                  void 0 === K ||
                                  null === (i = K.user) ||
                                  void 0 === i ||
                                  null === (o = i.friendshipStatus) ||
                                  void 0 === o
                                    ? void 0
                                    : o.isOwn) &&
                                  (null === K || void 0 === K
                                    ? void 0
                                    : K.id) ===
                                    (null === dn || void 0 === dn
                                      ? void 0
                                      : dn.id),
                                hasPinSign: !0,
                                replyToPostId:
                                  null === K || void 0 === K ? void 0 : K.id,
                                params: dn,
                                request: tn,
                                actionRef: A,
                                cacheKey: ''
                                  .concat(
                                    null === dn || void 0 === dn
                                      ? void 0
                                      : dn.id,
                                    '-',
                                  )
                                  .concat(P, '-last-post-reply'),
                                onFetchEnd: function () {
                                  B(!0);
                                },
                                onDataChange: function (n) {
                                  var i, o, e;
                                  G.current = n
                                    ? null === n ||
                                      void 0 === n ||
                                      null ===
                                        (i =
                                          n[
                                            (null === n || void 0 === n
                                              ? void 0
                                              : n.length) - 1
                                          ]) ||
                                      void 0 === i ||
                                      null === (o = i.posts) ||
                                      void 0 === o ||
                                      null === (e = o[0]) ||
                                      void 0 === e
                                      ? void 0
                                      : e.id
                                    : void 0;
                                },
                                indent: !0,
                                hasBorderTop: !0,
                              },
                              null === dn || void 0 === dn ? void 0 : dn.id,
                            ),
                          (null === b || void 0 === b ? void 0 : b.length) >
                            1 &&
                            (null === ln || void 0 === ln ? void 0 : ln.id) !==
                              (null === dn || void 0 === dn ? void 0 : dn.id) &&
                            K &&
                            _ &&
                            (0, x.jsxs)(x.Fragment, {
                              children: [
                                J &&
                                  (0, x.jsxs)('div', {
                                    className: p[''.concat(C, '-split')],
                                    children: [
                                      '\u53d1\u7ed9 ',
                                      null === K ||
                                      void 0 === K ||
                                      null === (y = K.user) ||
                                      void 0 === y
                                        ? void 0
                                        : y.username,
                                      ' \u7684\u66f4\u591a\u56de\u590d',
                                    ],
                                  }),
                                (0, x.jsx)(
                                  u.p_,
                                  {
                                    onDataChange: function (n) {
                                      Y(!!n.length);
                                    },
                                    pinToWhere: 'comment',
                                    hasPin:
                                      null === K ||
                                      void 0 === K ||
                                      null === (j = K.user) ||
                                      void 0 === j ||
                                      null === (S = j.friendshipStatus) ||
                                      void 0 === S
                                        ? void 0
                                        : S.isOwn,
                                    hasPinSign: !0,
                                    replyToPostId:
                                      null === ln || void 0 === ln
                                        ? void 0
                                        : ln.id,
                                    params: ln,
                                    cacheKey: ''
                                      .concat(
                                        null === ln || void 0 === ln
                                          ? void 0
                                          : ln.id,
                                        '-',
                                      )
                                      .concat(P, '-first-post-reply'),
                                    request: tn,
                                    ignoreMutingUser: !1,
                                    indent: !0,
                                  },
                                  ''
                                    .concat(
                                      null === ln || void 0 === ln
                                        ? void 0
                                        : ln.id,
                                      '-',
                                    )
                                    .concat(P),
                                ),
                              ],
                            }),
                        ],
                      }),
                }),
                (0, x.jsx)(u.oL, {
                  post: V,
                  visible: M,
                  onClose: function () {
                    N(!1);
                  },
                }),
              ],
            }),
          });
        };
    },
  },
]);
