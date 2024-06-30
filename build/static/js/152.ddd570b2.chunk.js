'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [152],
  {
    2152: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        });
      var a = n(1413),
        r = n(4165),
        s = n(5861),
        c = n(9439),
        i = n(7313),
        o = n(2589),
        l = {
          search: 'Td5z1',
          'search-input': 'CTH8z',
          'search-input-inner': 'HQOj2',
          'search-post': 'F380r',
          'search-post-list': 'D9qmX',
          'search-post-tab': 'byHDD',
        },
        u = n(2135),
        d = n(8467),
        p = n(8420),
        h = n(4942),
        m = {
          recommend: 'Z4ukF',
          'recommend-hidden': 'EPGFp',
          'recommend-item': 'C6Bnc',
        },
        v = n(3703),
        f = n(6123),
        g = n.n(f),
        x = n(4747),
        y = n(6417),
        Z = 'recommend',
        j = function (e) {
          var t = e.hidden,
            n = e.style,
            a = (0, i.useRef)(null),
            c = (0, i.useContext)(x.k).state.navigationEmitter,
            l = (function () {
              var e = (0, s.Z)(
                (0, r.Z)().mark(function e(t) {
                  var n, a, s, c, i, o, l;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = t.page),
                            (s = t.pageSize),
                            (e.next = 3),
                            (0, v.o)({ page: a, pageSize: s })
                          );
                        case 3:
                          return (
                            (c = e.sent),
                            (i = c.code),
                            (o = c.data),
                            (l = c.msg),
                            e.abrupt('return', {
                              success: 200 === i,
                              msg: l,
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
            null === c ||
              void 0 === c ||
              c.useSubscription(function (e) {
                var t, n;
                'search' === e.type &&
                  (null === (t = a.current) ||
                    void 0 === t ||
                    null === (n = t.reload) ||
                    void 0 === n ||
                    n.call(t, !0));
              }),
            (0, y.jsx)(o.Z7, {
              actionRef: a,
              hasLoadingContainer: !0,
              hasFollower: !0,
              request: l,
              cacheKey: 'search-recommend',
              hasLastItemSplit: !0,
              style: n,
              className: g()(
                m[''.concat(Z)],
                (0, h.Z)({}, m[''.concat(Z, '-hidden')], t),
              ),
              itemClassName: m[''.concat(Z, '-item')],
            })
          );
        },
        w = n(4814),
        N = n(6031),
        q = n(6879),
        b = {
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
        },
        C = n(813),
        z = 'search-result',
        S = function (e) {
          var t = e.className,
            n = e.searchVal,
            a = null === n || void 0 === n ? void 0 : n.trim(),
            c = (function () {
              var e = (0, s.Z)(
                (0, r.Z)().mark(function e(t) {
                  var n, a, s, c, i, o, l;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.page),
                            (a = t.pageSize),
                            (s = t.query),
                            (e.next = 3),
                            (0, v.v)({ page: n, pageSize: a, query: s })
                          );
                        case 3:
                          return (
                            (c = e.sent),
                            (i = c.code),
                            (o = c.data),
                            (l = c.msg),
                            e.abrupt('return', {
                              success: 200 === i,
                              msg: l,
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
            l = (0, i.useMemo)(
              function () {
                return { query: a };
              },
              [a],
            );
          return (0, y.jsxs)('div', {
            className: g()(b[''.concat(z)], t),
            children: [
              (0, y.jsxs)(u.rU, {
                to: '/search?serp_type=default&q='.concat(a),
                className: b[''.concat(z, '-title')],
                children: [
                  (0, y.jsx)('div', {
                    className: b[''.concat(z, '-title-icon')],
                    children: (0, y.jsx)(C.ol, {
                      size: 16,
                      viewBox: '0 0 26 26',
                    }),
                  }),
                  (0, y.jsxs)('div', {
                    className: b[''.concat(z, '-title-text')],
                    children: [
                      (0, y.jsxs)('div', {
                        className: b[''.concat(z, '-title-text-inner')],
                        children: ['\u641c\u7d22\u201c', a, '\u201d'],
                      }),
                      (0, y.jsx)('div', {
                        className: b[''.concat(z, '-title-text-icon')],
                        children: (0, y.jsx)(C.Nm, {
                          size: 16,
                          viewBox: '0 0 26 26',
                          style: { transform: 'rotate(180deg)' },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsx)(o.Z7, {
                hasFollower: !0,
                params: l,
                debounceWait: 1e3,
                request: c,
                hasLastItemSplit: !0,
                className: b[''.concat(z, '-user')],
                itemClassName: b[''.concat(z, '-user-item')],
              }),
            ],
          });
        },
        T = n(4733),
        k = 'search',
        R = function () {
          var e = (0, u.lr)(),
            t = (0, c.Z)(e, 2),
            n = t[0],
            h = t[1],
            m = n.get('q'),
            v = n.get('filter'),
            f = (0, i.useState)(''.concat(m || '')),
            x = (0, c.Z)(f, 2),
            Z = x[0],
            b = x[1],
            C = (0, d.s0)(),
            z = n.get('serp_type'),
            R = (0, i.useContext)(p.Vo).state.user,
            F = (0, i.useRef)(null),
            _ = (0, i.useRef)(null),
            B = (0, i.useState)(v || ''),
            K = (0, c.Z)(B, 2),
            L = K[0],
            E = K[1],
            H = (function () {
              var e = (0, s.Z)(
                (0, r.Z)().mark(function e(t) {
                  var n, a, s, c, i, o, l, u, d, p;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = t.page),
                            (s = t.pageSize),
                            (c = t.caption),
                            (i = t.tag),
                            (o = t.filter),
                            (e.next = 3),
                            (0, w.Bf)({
                              page: a,
                              pageSize: s,
                              caption: c,
                              tag: i,
                              filter: o,
                            })
                          );
                        case 3:
                          return (
                            (l = e.sent),
                            (u = l.code),
                            (d = l.data),
                            (p = l.msg),
                            e.abrupt('return', {
                              success: 200 === u,
                              msg: p,
                              data:
                                (null === d ||
                                void 0 === d ||
                                null === (n = d.posts) ||
                                void 0 === n
                                  ? void 0
                                  : n.map(function (e) {
                                      return {
                                        id: (0, N.uniqueId)(),
                                        posts: [e],
                                      };
                                    })) || [],
                              total:
                                null === d || void 0 === d ? void 0 : d.total,
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
            I = (0, i.useMemo)(
              function () {
                switch (z) {
                  case 'default':
                    return { caption: m };
                  case 'tag':
                    return { tag: '#'.concat(m) };
                }
              },
              [m, z],
            ),
            M = (0, i.useMemo)(
              function () {
                return (0, a.Z)((0, a.Z)({}, I), {}, { filter: 'recent' });
              },
              [I],
            );
          return (0, y.jsx)(o._z, {
            children: (0, y.jsxs)('div', {
              className: l[''.concat(k)],
              children: [
                (0, y.jsx)('div', {
                  className: l[''.concat(k, '-input')],
                  children: (0, y.jsx)(q.Z, {
                    value: Z,
                    onChange: function (e) {
                      b(e);
                    },
                    className: l[''.concat(k, '-input-inner')],
                    onESC: function () {
                      b('');
                    },
                    placeholder: '\u641c\u7d22',
                    onEnter: function () {
                      var e = null === Z || void 0 === Z ? void 0 : Z.trim();
                      m !== e &&
                        null !== e &&
                        void 0 !== e &&
                        e.length &&
                        C('/search?serp_type=default&q='.concat(e));
                    },
                  }),
                }),
                (0, y.jsx)(j, {
                  currentUid: null === R || void 0 === R ? void 0 : R.id,
                  hidden: null !== m || !!Z,
                }),
                null !== m &&
                  (0, y.jsx)('div', {
                    className: l[''.concat(k, '-post')],
                    children: (0, y.jsxs)(T.Z, {
                      tabType: 'button',
                      activeKey: L,
                      onChange: function (e) {
                        E(e);
                      },
                      onTabClick: function (e) {
                        !(function (e) {
                          var t, n, a, r;
                          h(
                            { q: m, serp_type: z, filter: e || '' },
                            { replace: !0 },
                          ),
                            e === L &&
                              (window.scrollY
                                ? window.scrollTo(0, 0)
                                : L
                                ? null === _ ||
                                  void 0 === _ ||
                                  null === (a = _.current) ||
                                  void 0 === a ||
                                  null === (r = a.reload) ||
                                  void 0 === r ||
                                  r.call(a, !0)
                                : null === F ||
                                  void 0 === F ||
                                  null === (t = F.current) ||
                                  void 0 === t ||
                                  null === (n = t.reload) ||
                                  void 0 === n ||
                                  n.call(t, !0));
                        })(e);
                      },
                      tabClassName: l[''.concat(k, '-post-tab')],
                      children: [
                        (0, y.jsx)(
                          T.Z.Tab,
                          {
                            title: '\u70ed\u95e8',
                            children: (0, y.jsx)(o.p_, {
                              indent: !0,
                              emptyPlaceholder: '\u6ca1\u6709\u7ed3\u679c',
                              hasBorderTop: !1,
                              hasLoadingContainer: !0,
                              request: H,
                              cacheKey: 'search-'.concat(z, '-').concat(m),
                              hasReplyTo: !0,
                              actionRef: F,
                              pageSize: 10,
                              params: I,
                              className: g()(l[''.concat(k, '-post-list')]),
                            }),
                          },
                          '',
                        ),
                        (0, y.jsx)(
                          T.Z.Tab,
                          {
                            title: '\u8fd1\u671f',
                            children: (0, y.jsx)(o.p_, {
                              indent: !0,
                              hasLoadingContainer: !0,
                              emptyPlaceholder: '\u6ca1\u6709\u7ed3\u679c',
                              hasBorderTop: !1,
                              pageSize: 10,
                              request: H,
                              cacheKey: 'search-recent-'
                                .concat(z, '-')
                                .concat(m),
                              hasReplyTo: !0,
                              actionRef: _,
                              params: M,
                              className: g()(l[''.concat(k, '-post-list')]),
                            }),
                          },
                          'recent',
                        ),
                      ],
                    }),
                  }),
                null === m &&
                  0 !== (null === Z || void 0 === Z ? void 0 : Z.length) &&
                  (0, y.jsx)(S, { searchVal: Z }),
              ],
            }),
          });
        };
    },
  },
]);
