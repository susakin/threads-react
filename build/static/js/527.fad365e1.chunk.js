'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [527],
  {
    5527: function (n, i, o) {
      o.r(i),
        o.d(i, {
          default: function () {
            return C;
          },
        });
      var e = o(4165),
        t = o(5861),
        l = o(9439),
        d = o(7313),
        u = o(3301),
        s = o(6975),
        a = o(8467),
        c = o(4814),
        v = o(8048),
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
        g = o(6417),
        x = 'post',
        C = function () {
          var n,
            i,
            o,
            C,
            y,
            j,
            S = (0, a.UO)().code,
            P = (0, d.useState)(!1),
            Z = (0, l.Z)(P, 2),
            k = Z[0],
            w = Z[1],
            T = (0, f.Z)(void 0, ''.concat(S, '-detail')),
            q = (0, l.Z)(T, 2),
            z = q[0],
            b = q[1],
            I = (0, d.useState)(!1),
            L = (0, l.Z)(I, 2),
            M = L[0],
            N = L[1],
            D = (0, v.i)(c.si, {
              manual: !0,
              onSuccess: function (n) {
                b(n), w(!n.length);
              },
              onError: function () {
                w(!0);
              },
            }),
            U = D.loading,
            E = D.run,
            F = null === z || void 0 === z ? void 0 : z[0],
            K = (0, d.useState)(!1),
            O = (0, l.Z)(K, 2),
            R = O[0],
            _ = O[1],
            B = (0, d.useState)(!1),
            W = (0, l.Z)(B, 2),
            X = W[0],
            J = W[1],
            Y = (0, d.useRef)(null),
            A = (0, d.useRef)(),
            G = (0, d.useState)(),
            H = (0, l.Z)(G, 2),
            Q = H[0],
            V = H[1];
          (0, d.useLayoutEffect)(
            function () {
              z
                ? w(!(null !== z && void 0 !== z && z.length))
                : (V(null), _(!1), E(S));
            },
            [S, z],
          );
          var $ = (0, d.useMemo)(
              function () {
                return [{ id: (0, r.uniqueId)(), posts: z }];
              },
              [z],
            ),
            nn = (function () {
              var n = (0, t.Z)(
                (0, e.Z)().mark(function n(i) {
                  var o, t, l, d, u, s, a, v;
                  return (0, e.Z)().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (o = i.page),
                            (t = i.pageSize),
                            (l = i.id),
                            (d = i.excludePostCode),
                            (n.next = 3),
                            (0, c.ru)(l, {
                              page: o,
                              pageSize: t,
                              excludePostCode: d,
                            })
                          );
                        case 3:
                          return (
                            (u = n.sent),
                            (s = u.code),
                            (a = u.msg),
                            (v = u.data),
                            n.abrupt('return', {
                              success: 200 == s,
                              msg: a,
                              data: (
                                (null === v || void 0 === v
                                  ? void 0
                                  : v.posts) || []
                              ).map(function (n) {
                                return { id: (0, r.uniqueId)(), posts: n };
                              }),
                              total:
                                null === v || void 0 === v ? void 0 : v.total,
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
            on = (0, d.useMemo)(
              function () {
                return { id: null === Q || void 0 === Q ? void 0 : Q.id };
              },
              [null === Q || void 0 === Q ? void 0 : Q.id],
            ),
            en = (0, d.useMemo)(
              function () {
                return {
                  id: null === F || void 0 === F ? void 0 : F.id,
                  excludePostCode: S,
                };
              },
              [null === F || void 0 === F ? void 0 : F.id],
            );
          (0, (0, h.Z)().setTitle)(
            F
              ? '@'
                  .concat(
                    (null === F ||
                    void 0 === F ||
                    null === (n = F.user) ||
                    void 0 === n
                      ? void 0
                      : n.username) || '',
                    ' \u2022 ',
                  )
                  .concat(
                    (null === F || void 0 === F ? void 0 : F.caption) ||
                      '\u5e16\u5b50',
                  )
              : '',
          );
          var tn = (0, v.i)(c.Xe, {
              manual: !0,
              onSuccess: function (n) {
                var i, o;
                null === Y ||
                  void 0 === Y ||
                  null === (i = Y.current) ||
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
            ln = tn.run,
            dn = tn.loading,
            un =
              ((null === Q || void 0 === Q ? void 0 : Q.repostCount) || 0) >
                0 ||
              ((null === Q || void 0 === Q ? void 0 : Q.likeCount) || 0) > 0 ||
              ((null === Q || void 0 === Q ? void 0 : Q.commentCount) || 0) > 0;
          return (0, g.jsx)(u._z, {
            children: (0, g.jsxs)('div', {
              className: p[''.concat(x)],
              children: [
                (0, g.jsx)(u.ly, {
                  loading: dn,
                  children: U
                    ? (0, g.jsx)(s.yC, { spinning: !0, height: 150 })
                    : k
                    ? (0, g.jsx)(u.jC, {})
                    : (0, g.jsxs)(g.Fragment, {
                        children: [
                          (0, g.jsx)(u.p_, {
                            hasPaddingTop: !1,
                            data: $,
                            lastChildLineType: 'none',
                            lastChildHasSummaryUserPreview: !1,
                            ignoreMutingUser: !1,
                            indent: !0,
                            hasPin: !0,
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
                              V(
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.code) === S
                                  ? e
                                  : F,
                              );
                            },
                            onCommentCountClick: function () {
                              null !== on &&
                                void 0 !== on &&
                                on.id &&
                                R &&
                                ln(
                                  null === on || void 0 === on ? void 0 : on.id,
                                  { pageSize: 5, replyId: A.current },
                                );
                            },
                            actionRef: Y,
                          }),
                          un &&
                            (0, g.jsxs)('div', {
                              className: p[''.concat(x, '-activity')],
                              children: [
                                ((null === Q || void 0 === Q
                                  ? void 0
                                  : Q.commentCount) || 0) > 0 &&
                                  (0, g.jsx)('div', {
                                    className:
                                      p[''.concat(x, '-activity-text')],
                                    children: '\u56de\u590d',
                                  }),
                                (0, g.jsxs)(s.zx, {
                                  type: 'text',
                                  className:
                                    p[''.concat(x, '-activity-button')],
                                  onClick: function () {
                                    N(!0);
                                  },
                                  children: [
                                    '\u67e5\u770b\u52a8\u6001',
                                    (0, g.jsx)(m.Nm, {
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
                          (null === on || void 0 === on ? void 0 : on.id) &&
                            (0, g.jsx)(
                              u.p_,
                              {
                                pinToWhere: 'comment',
                                ignoreMutingUser: !1,
                                hasPin:
                                  (null === F ||
                                  void 0 === F ||
                                  null === (i = F.user) ||
                                  void 0 === i ||
                                  null === (o = i.friendshipStatus) ||
                                  void 0 === o
                                    ? void 0
                                    : o.isOwn) &&
                                  (null === F || void 0 === F
                                    ? void 0
                                    : F.id) ===
                                    (null === on || void 0 === on
                                      ? void 0
                                      : on.id),
                                hasPinSign: !0,
                                replyToPostId:
                                  null === F || void 0 === F ? void 0 : F.id,
                                params: on,
                                request: nn,
                                actionRef: Y,
                                cacheKey: ''
                                  .concat(
                                    null === on || void 0 === on
                                      ? void 0
                                      : on.id,
                                    '-',
                                  )
                                  .concat(S, '-last-post-reply'),
                                onFetchEnd: function () {
                                  _(!0);
                                },
                                onDataChange: function (n) {
                                  var i, o, e;
                                  A.current = n
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
                              null === on || void 0 === on ? void 0 : on.id,
                            ),
                          (null === z || void 0 === z ? void 0 : z.length) >
                            1 &&
                            F &&
                            R &&
                            (0, g.jsxs)(g.Fragment, {
                              children: [
                                X &&
                                  (0, g.jsxs)('div', {
                                    className: p[''.concat(x, '-split')],
                                    children: [
                                      '\u53d1\u7ed9 ',
                                      null === F ||
                                      void 0 === F ||
                                      null === (C = F.user) ||
                                      void 0 === C
                                        ? void 0
                                        : C.username,
                                      ' \u7684\u66f4\u591a\u56de\u590d',
                                    ],
                                  }),
                                (0, g.jsx)(
                                  u.p_,
                                  {
                                    onDataChange: function (n) {
                                      J(!!n.length);
                                    },
                                    pinToWhere: 'comment',
                                    hasPin:
                                      null === F ||
                                      void 0 === F ||
                                      null === (y = F.user) ||
                                      void 0 === y ||
                                      null === (j = y.friendshipStatus) ||
                                      void 0 === j
                                        ? void 0
                                        : j.isOwn,
                                    hasPinSign: !0,
                                    replyToPostId:
                                      null === en || void 0 === en
                                        ? void 0
                                        : en.id,
                                    params: en,
                                    cacheKey: ''
                                      .concat(
                                        null === en || void 0 === en
                                          ? void 0
                                          : en.id,
                                        '-',
                                      )
                                      .concat(S, '-first-post-reply'),
                                    request: nn,
                                    ignoreMutingUser: !1,
                                    indent: !0,
                                  },
                                  ''
                                    .concat(
                                      null === en || void 0 === en
                                        ? void 0
                                        : en.id,
                                      '-',
                                    )
                                    .concat(S),
                                ),
                              ],
                            }),
                        ],
                      }),
                }),
                (0, g.jsx)(u.oL, {
                  post: Q,
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
