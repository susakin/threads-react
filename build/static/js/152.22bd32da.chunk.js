'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [152],
  {
    2152: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return F;
          },
        });
      var a = n(4165),
        s = n(5861),
        r = n(9439),
        c = n(7313),
        i = n(1959),
        o = {
          search: 'Td5z1',
          'search-input': 'CTH8z',
          'search-input-inner': 'HQOj2',
          'search-post-list': 'D9qmX',
        },
        u = n(2135),
        l = n(8467),
        d = n(8420),
        p = n(4942),
        m = {
          recommend: 'Z4ukF',
          'recommend-hidden': 'EPGFp',
          'recommend-item': 'C6Bnc',
        },
        h = n(3703),
        v = n(6123),
        f = n.n(v),
        x = n(4747),
        g = n(6417),
        w = 'recommend',
        j = function (e) {
          var t = e.hidden,
            n = e.style,
            r = (0, c.useRef)(null),
            o = (0, c.useContext)(x.k).state.navigationEmitter,
            u = (function () {
              var e = (0, s.Z)(
                (0, a.Z)().mark(function e(t) {
                  var n, s, r, c, i, o, u;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (s = t.page),
                            (r = t.pageSize),
                            (e.next = 3),
                            (0, h.o)({ page: s, pageSize: r })
                          );
                        case 3:
                          return (
                            (c = e.sent),
                            (i = c.code),
                            (o = c.data),
                            (u = c.msg),
                            e.abrupt('return', {
                              success: 200 === i,
                              msg: u,
                              data:
                                (null === o ||
                                void 0 === o ||
                                null === (n = o.users) ||
                                void 0 === n
                                  ? void 0
                                  : n.map(function (e) {
                                      return { user: e };
                                    })) || [],
                              total:
                                null === o || void 0 === o ? void 0 : o.total,
                            })
                          );
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            null === o ||
              void 0 === o ||
              o.useSubscription(function (e) {
                var t, n;
                'search' === e.type &&
                  (null === (t = r.current) ||
                    void 0 === t ||
                    null === (n = t.reload) ||
                    void 0 === n ||
                    n.call(t, !0));
              }),
            (0, g.jsx)(i.Z7, {
              actionRef: r,
              hasLoadingContainer: !0,
              hasFollower: !0,
              request: u,
              cacheKey: 'search-recommend',
              hasLastItemSplit: !0,
              style: n,
              className: f()(
                m[''.concat(w)],
                (0, p.Z)({}, m[''.concat(w, '-hidden')], t),
              ),
              itemClassName: m[''.concat(w, '-item')],
            })
          );
        },
        Z = n(4814),
        y = n(6031),
        N = n(6879),
        q = {
          media: '_qeR8',
          'media-viewer-content': 'qyKXg',
          'fade-in': 'a7tgW',
          'scroll-in': 'mcFmx',
          'scale-in': 'ZtlzR',
          focus: 'p0uqw',
          'search-result': 'cztXh',
          'search-result-title': 'wK3JV',
          'search-result-title-icon': 'frilI',
          'search-result-title-text': 'qrSZY',
          'search-result-title-text-inner': 'g9FsJ',
          'search-result-title-text-icon': 'X6h5M',
          'search-result-user': 'FaaFa',
          'search-result-user-item': 'aGJwH',
          'search-result-user-item-follow': '_OAT2',
        },
        z = n(813),
        C = 'search-result',
        S = function (e) {
          var t = e.className,
            n = e.searchVal,
            r = null === n || void 0 === n ? void 0 : n.trim(),
            o = (function () {
              var e = (0, s.Z)(
                (0, a.Z)().mark(function e(t) {
                  var n, s, r, c, i, o, u;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.page),
                            (s = t.pageSize),
                            (r = t.query),
                            (e.next = 3),
                            (0, h.v)({ page: n, pageSize: s, query: r })
                          );
                        case 3:
                          return (
                            (c = e.sent),
                            (i = c.code),
                            (o = c.data),
                            (u = c.msg),
                            e.abrupt('return', {
                              success: 200 === i,
                              msg: u,
                              data: (
                                (null === o || void 0 === o
                                  ? void 0
                                  : o.users) || []
                              ).map(function (e) {
                                return { user: e };
                              }),
                              total:
                                null === o || void 0 === o ? void 0 : o.total,
                            })
                          );
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            l = (0, c.useMemo)(
              function () {
                return { query: r };
              },
              [r],
            );
          return (0, g.jsxs)('div', {
            className: f()(q[''.concat(C)], t),
            children: [
              (0, g.jsxs)(u.rU, {
                to: '/search?serp_type=default&q='.concat(r),
                className: q[''.concat(C, '-title')],
                children: [
                  (0, g.jsx)('div', {
                    className: q[''.concat(C, '-title-icon')],
                    children: (0, g.jsx)(z.ol, {
                      size: 16,
                      viewBox: '0 0 26 26',
                    }),
                  }),
                  (0, g.jsxs)('div', {
                    className: q[''.concat(C, '-title-text')],
                    children: [
                      (0, g.jsxs)('div', {
                        className: q[''.concat(C, '-title-text-inner')],
                        children: ['\u641c\u7d22\u201c', r, '\u201d'],
                      }),
                      (0, g.jsx)('div', {
                        className: q[''.concat(C, '-title-text-icon')],
                        children: (0, g.jsx)(z.Nm, {
                          size: 16,
                          viewBox: '0 0 26 26',
                          style: { transform: 'rotate(180deg)' },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, g.jsx)(i.Z7, {
                hasFollower: !0,
                params: l,
                debounceWait: 1e3,
                request: o,
                hasLastItemSplit: !0,
                className: q[''.concat(C, '-user')],
                itemClassName: q[''.concat(C, '-user-item')],
                followButtonClassName: q[''.concat(C, '-user-item-follow')],
              }),
            ],
          });
        },
        k = 'search',
        F = function () {
          var e = (0, u.lr)(),
            t = (0, r.Z)(e, 1)[0],
            n = t.get('q'),
            p = (0, c.useState)(''.concat(n || '')),
            m = (0, r.Z)(p, 2),
            h = m[0],
            v = m[1],
            x = (0, l.s0)(),
            w = t.get('serp_type'),
            q = (0, c.useContext)(d.Vo).state.user,
            z = (function () {
              var e = (0, s.Z)(
                (0, a.Z)().mark(function e(t) {
                  var n, s, r, c, i, o, u, l, d;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (s = t.page),
                            (r = t.pageSize),
                            (c = t.caption),
                            (i = t.tag),
                            (e.next = 3),
                            (0, Z.Bf)({
                              page: s,
                              pageSize: r,
                              caption: c,
                              tag: i,
                            })
                          );
                        case 3:
                          return (
                            (o = e.sent),
                            (u = o.code),
                            (l = o.data),
                            (d = o.msg),
                            e.abrupt('return', {
                              success: 200 === u,
                              msg: d,
                              data:
                                (null === l ||
                                void 0 === l ||
                                null === (n = l.posts) ||
                                void 0 === n
                                  ? void 0
                                  : n.map(function (e) {
                                      return {
                                        id: (0, y.uniqueId)(),
                                        posts: [e],
                                      };
                                    })) || [],
                              total:
                                null === l || void 0 === l ? void 0 : l.total,
                            })
                          );
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            C = (0, c.useMemo)(
              function () {
                switch (w) {
                  case 'default':
                    return { caption: n };
                  case 'tag':
                    return { tag: '#'.concat(n) };
                }
              },
              [n, w],
            );
          return (0, g.jsx)(i._z, {
            children: (0, g.jsxs)('div', {
              className: o[''.concat(k)],
              children: [
                (0, g.jsx)('div', {
                  className: o[''.concat(k, '-input')],
                  children: (0, g.jsx)(N.Z, {
                    value: h,
                    onChange: function (e) {
                      v(e);
                    },
                    className: o[''.concat(k, '-input-inner')],
                    onESC: function () {
                      v('');
                    },
                    placeholder: '\u641c\u7d22',
                    onEnter: function () {
                      var e = null === h || void 0 === h ? void 0 : h.trim();
                      n !== e &&
                        null !== e &&
                        void 0 !== e &&
                        e.length &&
                        x('/search?serp_type=default&q='.concat(e));
                    },
                  }),
                }),
                (0, g.jsx)(j, {
                  currentUid: null === q || void 0 === q ? void 0 : q.id,
                  hidden: null !== n || !!h,
                }),
                null !== n &&
                  (0, g.jsx)(i.p_, {
                    indent: !0,
                    emptyPlaceholder: '\u6ca1\u6709\u7ed3\u679c',
                    hasBorderTop: !1,
                    request: z,
                    cacheKey: 'search-'.concat(w, '-').concat(n),
                    params: C,
                    className: f()(o[''.concat(k, '-post-list')]),
                  }),
                null === n &&
                  0 !== (null === h || void 0 === h ? void 0 : h.length) &&
                  (0, g.jsx)(S, { searchVal: h }),
              ],
            }),
          });
        };
    },
  },
]);
