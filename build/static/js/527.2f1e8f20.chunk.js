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
      var t = o(4165),
        e = o(5861),
        l = o(9439),
        d = o(7313),
        u = o(949),
        s = o(4113),
        a = o(8467),
        c = o(4814),
        r = o(8048),
        v = o(6031),
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
        f = o(3479),
        h = o(2298),
        m = o(4666),
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
            q = (0, h.Z)(void 0, ''.concat(S, '-detail')),
            z = (0, l.Z)(q, 2),
            T = z[0],
            b = z[1],
            I = (0, d.useState)(!1),
            L = (0, l.Z)(I, 2),
            M = L[0],
            N = L[1],
            D = (0, r.i)(c.si, {
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
            F = null === T || void 0 === T ? void 0 : T[0],
            K = (0, d.useState)(!1),
            O = (0, l.Z)(K, 2),
            R = O[0],
            _ = O[1],
            B = (0, d.useState)(!1),
            X = (0, l.Z)(B, 2),
            J = X[0],
            Y = X[1],
            A = (0, d.useRef)(null),
            G = (0, d.useRef)(),
            H = (0, d.useState)(),
            Q = (0, l.Z)(H, 2),
            V = Q[0],
            W = Q[1];
          (0, d.useLayoutEffect)(
            function () {
              T
                ? w(!(null !== T && void 0 !== T && T.length))
                : (W(null), _(!1), E(S));
            },
            [S, T],
          );
          var $ = (0, d.useMemo)(
              function () {
                return [{ id: (0, v.uniqueId)(), posts: T }];
              },
              [T],
            ),
            nn = (function () {
              var n = (0, e.Z)(
                (0, t.Z)().mark(function n(i) {
                  var o, e, l, d, u, s, a, r;
                  return (0, t.Z)().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (o = i.page),
                            (e = i.pageSize),
                            (l = i.id),
                            (d = i.excludePostCode),
                            (n.next = 3),
                            (0, c.ru)(l, {
                              page: o,
                              pageSize: e,
                              excludePostCode: d,
                            })
                          );
                        case 3:
                          return (
                            (u = n.sent),
                            (s = u.code),
                            (a = u.msg),
                            (r = u.data),
                            n.abrupt('return', {
                              success: 200 == s,
                              msg: a,
                              data: (
                                (null === r || void 0 === r
                                  ? void 0
                                  : r.posts) || []
                              ).map(function (n) {
                                return { id: (0, v.uniqueId)(), posts: n };
                              }),
                              total:
                                null === r || void 0 === r ? void 0 : r.total,
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
                return { id: null === V || void 0 === V ? void 0 : V.id };
              },
              [null === V || void 0 === V ? void 0 : V.id],
            ),
            tn = (0, d.useMemo)(
              function () {
                return {
                  id: null === F || void 0 === F ? void 0 : F.id,
                  excludePostCode: S,
                };
              },
              [null === F || void 0 === F ? void 0 : F.id],
            );
          (0, (0, f.Z)().setTitle)(
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
          var en = (0, r.i)(c.Xe, {
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
                        return { id: (0, v.uniqueId)(), posts: n };
                      },
                    ),
                  );
              },
            }),
            ln = en.run,
            dn = en.loading,
            un =
              ((null === V || void 0 === V ? void 0 : V.repostCount) || 0) >
                0 ||
              ((null === V || void 0 === V ? void 0 : V.likeCount) || 0) > 0 ||
              ((null === V || void 0 === V ? void 0 : V.commentCount) || 0) > 0;
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
                                    : i.posts;
                              W(
                                null === o || void 0 === o
                                  ? void 0
                                  : o[
                                      (null === o || void 0 === o
                                        ? void 0
                                        : o.length) - 1
                                    ],
                              );
                            },
                            onCommentCountClick: function () {
                              null !== on &&
                                void 0 !== on &&
                                on.id &&
                                R &&
                                ln(
                                  null === on || void 0 === on ? void 0 : on.id,
                                  { pageSize: 5, replyId: G.current },
                                );
                            },
                            actionRef: A,
                          }),
                          un &&
                            (0, g.jsxs)('div', {
                              className: p[''.concat(x, '-activity')],
                              children: [
                                ((null === V || void 0 === V
                                  ? void 0
                                  : V.commentCount) || 0) > 0 &&
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
                                  null === F ||
                                  void 0 === F ||
                                  null === (i = F.user) ||
                                  void 0 === i ||
                                  null === (o = i.friendshipStatus) ||
                                  void 0 === o
                                    ? void 0
                                    : o.isOwn,
                                hasPinSign: !0,
                                replyToPostId:
                                  null === F || void 0 === F ? void 0 : F.id,
                                params: on,
                                request: nn,
                                actionRef: A,
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
                                  var i, o, t;
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
                                      null === (t = o[0]) ||
                                      void 0 === t
                                      ? void 0
                                      : t.id
                                    : void 0;
                                },
                                indent: !0,
                                hasBorderTop: !0,
                              },
                              null === on || void 0 === on ? void 0 : on.id,
                            ),
                          (null === T || void 0 === T ? void 0 : T.length) >
                            1 &&
                            F &&
                            R &&
                            (0, g.jsxs)(g.Fragment, {
                              children: [
                                J &&
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
                                      Y(!!n.length);
                                    },
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
                                      null === tn || void 0 === tn
                                        ? void 0
                                        : tn.id,
                                    params: tn,
                                    cacheKey: ''
                                      .concat(
                                        null === tn || void 0 === tn
                                          ? void 0
                                          : tn.id,
                                        '-',
                                      )
                                      .concat(S, '-first-post-reply'),
                                    request: nn,
                                    ignoreMutingUser: !1,
                                    indent: !0,
                                  },
                                  ''
                                    .concat(
                                      null === tn || void 0 === tn
                                        ? void 0
                                        : tn.id,
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
