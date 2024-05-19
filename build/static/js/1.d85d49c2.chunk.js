'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [1],
  {
    8001: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return K;
          },
        });
      var a = t(4942),
        r = t(4165),
        c = t(5861),
        s = t(9439),
        i = t(7313),
        l = t(4666),
        o = {
          media: 'kuSYb',
          'media-viewer-content': 'CkC5c',
          'fade-in': 'B9RQi',
          'scroll-in': 'Miqgb',
          'scale-in': 'iS9Kn',
          focus: 'SvHzd',
          'search-input': 'zlNEQ',
          'search-input-inner': 'EfYQs',
          'search-input-inner-placeholder': 'URTWf',
          'search-input-inner-placeholder-small': 's7SlL',
          'search-input-inner-label': 'lTeYK',
          'search-input-inner-label-focus': 'RsTHy',
          'search-input-inner-label-searching': '_w_WQ',
          'search-input-inner-label-icon': 'Fh2Eq',
          'search-input-inner-label-clear': 'NhKgs',
          'search-input-inner-label-input': 'djj8C',
          'search-input-inner-cancel': 'QxPG2',
        },
        u = t(2706),
        d = t(4113),
        h = t(2389),
        f = t(3168),
        v = t(1548),
        p = function (e) {
          if (!e || !document.getRootNode) return document;
          var n,
            t = Array.isArray(e) ? e : [e];
          return (function (e) {
            return e.every(function (e) {
              var n = (0, v.n)(e);
              return !!n && (n.getRootNode() instanceof ShadowRoot || void 0);
            });
          })(t) && (n = (0, v.n)(t[0]))
            ? n.getRootNode()
            : document;
        },
        m = t(7707);
      var g = t(8467),
        x = t(2135),
        y = t(6123),
        N = t.n(y),
        Z = t(6417),
        j = 'search-input',
        C = function (e) {
          var n,
            t = e.placeholder,
            r = void 0 === t ? '\u641c\u7d22' : t,
            c = e.onValueChange,
            y = e.defaultValue,
            C = e.children,
            w = e.onFocusedChange,
            b = e.actionRef,
            S = (0, i.useState)(y || ''),
            k = (0, s.Z)(S, 2),
            q = k[0],
            z = k[1],
            R = (0, i.useState)(!1),
            F = (0, s.Z)(R, 2),
            E = F[0],
            B = F[1],
            V = (0, u.Z)().viewportWidth <= 699,
            _ = (0, i.useRef)(null),
            A = (0, g.s0)(),
            T = (0, x.lr)(),
            K = (0, s.Z)(T, 1)[0].get('q');
          (0, i.useEffect)(
            function () {
              null === c || void 0 === c || c(q);
            },
            [q],
          ),
            (0, i.useEffect)(
              function () {
                null === w || void 0 === w || w(E);
              },
              [E],
            ),
            (0, h.Z)(
              27,
              function () {
                B(!1);
              },
              { events: ['keyup'], target: _ },
            ),
            (0, h.Z)(
              'enter',
              function () {
                var e,
                  n = null === q || void 0 === q ? void 0 : q.trim();
                K !== n &&
                  null !== n &&
                  void 0 !== n &&
                  n.length &&
                  (A('/search?serp_type=default&q='.concat(n)),
                  B(!1),
                  null === (e = _.current) || void 0 === e || e.blur());
              },
              { target: _ },
            );
          var L = (null === q || void 0 === q ? void 0 : q.length) && E,
            H = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(
              function () {
                var e;
                K &&
                  (null === _ ||
                    void 0 === _ ||
                    null === (e = _.current) ||
                    void 0 === e ||
                    e.blur(),
                  B(!1));
              },
              [K],
            ),
            (function (e, n, t) {
              void 0 === t && (t = 'click');
              var a = (0, f.Z)(e);
              (0, m.Z)(
                function () {
                  var e = function (e) {
                      (Array.isArray(n) ? n : [n]).some(function (n) {
                        var t = (0, v.n)(n);
                        return !t || t.contains(e.target);
                      }) || a.current(e);
                    },
                    r = p(n),
                    c = Array.isArray(t) ? t : [t];
                  return (
                    c.forEach(function (n) {
                      return r.addEventListener(n, e);
                    }),
                    function () {
                      c.forEach(function (n) {
                        return r.removeEventListener(n, e);
                      });
                    }
                  );
                },
                Array.isArray(t) ? t : [t],
                n,
              );
            })(function () {
              B(!1);
            }, H),
            (0, i.useEffect)(
              function () {
                y ||
                  (!V &&
                    setTimeout(function () {
                      var e;
                      null === _ ||
                        void 0 === _ ||
                        null === (e = _.current) ||
                        void 0 === e ||
                        e.focus();
                    })),
                  z(y || '');
              },
              [y],
            ),
            (0, i.useImperativeHandle)(b, function () {
              return {
                changeFocusedStatus: function (e) {
                  B(e);
                },
              };
            }),
            (0, Z.jsxs)('div', {
              className: o[''.concat(j)],
              ref: H,
              children: [
                (0, Z.jsxs)('div', {
                  className: o[''.concat(j, '-inner')],
                  children: [
                    !V &&
                      (0, Z.jsx)('div', {
                        className: N()(
                          o[''.concat(j, '-inner-placeholder')],
                          (0, a.Z)(
                            {},
                            o[''.concat(j, '-inner-placeholder-small')],
                            L,
                          ),
                        ),
                      }),
                    (0, Z.jsxs)('label', {
                      className: N()(
                        o[''.concat(j, '-inner-label')],
                        ((n = {}),
                        (0, a.Z)(
                          n,
                          o[''.concat(j, '-inner-label-focus')],
                          E && !V,
                        ),
                        (0, a.Z)(
                          n,
                          o[''.concat(j, '-inner-label-searching')],
                          L && !V,
                        ),
                        n),
                      ),
                      children: [
                        (0, Z.jsx)('div', {
                          className: o[''.concat(j, '-inner-label-icon')],
                          children: (0, Z.jsx)(l.ol, {
                            size: 16,
                            viewBox: '0 0 26 26',
                          }),
                        }),
                        (0, Z.jsx)('input', {
                          className: o[''.concat(j, '-inner-label-input')],
                          autoComplete: 'off',
                          spellCheck: 'false',
                          placeholder: r,
                          value: q,
                          ref: _,
                          onClick: function () {
                            B(!0);
                          },
                          onFocus: function () {
                            B(!0);
                          },
                          onChange: function (e) {
                            var n = e.target.value;
                            (null === n || void 0 === n ? void 0 : n.length) &&
                              B(!0),
                              z(n);
                          },
                        }),
                        0 !== q.length &&
                          (0, Z.jsx)('div', {
                            className: o[''.concat(j, '-inner-label-clear')],
                            children: (0, Z.jsx)(l.UZ, {
                              size: 16,
                              viewBox: '0 0 24 24',
                              fill: 'currentColor',
                              onClick: function () {
                                z('');
                              },
                            }),
                          }),
                      ],
                    }),
                    !V &&
                      (0, Z.jsx)('div', {
                        className: N()(
                          o[''.concat(j, '-inner-placeholder')],
                          (0, a.Z)(
                            {},
                            o[''.concat(j, '-inner-placeholder-small')],
                            L,
                          ),
                        ),
                      }),
                    E &&
                      V &&
                      (0, Z.jsx)(d.zx, {
                        className: o[''.concat(j, '-inner-cancel')],
                        type: 'text',
                        onClick: function () {
                          B(!1), z('');
                        },
                        children: '\u53d6\u6d88',
                      }),
                  ],
                }),
                C,
              ],
            })
          );
        },
        w = t(949),
        b = {
          search: 'Td5z1',
          'search-post-list': 'D9qmX',
          'search-post-list-hidden': 'XhNCj',
          'search-input': 'CTH8z',
          'search-input-result': 'w_bpH',
          'scale-in': 'ToVBe',
          'search-result': 'LdhyI',
        },
        S = {
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
        k = t(3703),
        q = 'search-result',
        z = function (e) {
          var n = e.className,
            t = e.searchVal,
            a = e.onSearchPostClick,
            s = null === t || void 0 === t ? void 0 : t.trim(),
            o = (function () {
              var e = (0, c.Z)(
                (0, r.Z)().mark(function e(n) {
                  var t, a, c, s, i, l, o;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = n.page),
                            (a = n.pageSize),
                            (c = n.query),
                            (e.next = 3),
                            (0, k.v)({ page: t, pageSize: a, query: c })
                          );
                        case 3:
                          return (
                            (s = e.sent),
                            (i = s.code),
                            (l = s.data),
                            (o = s.msg),
                            e.abrupt('return', {
                              success: 200 === i,
                              msg: o,
                              data: (
                                (null === l || void 0 === l
                                  ? void 0
                                  : l.users) || []
                              ).map(function (e) {
                                return { user: e };
                              }),
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
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            u = (0, i.useMemo)(
              function () {
                return { query: s };
              },
              [s],
            );
          return (0, Z.jsxs)('div', {
            className: N()(S[''.concat(q)], n),
            children: [
              (0, Z.jsxs)(x.rU, {
                to: '/search?serp_type=default&q='.concat(s),
                className: S[''.concat(q, '-title')],
                onClick: a,
                children: [
                  (0, Z.jsx)('div', {
                    className: S[''.concat(q, '-title-icon')],
                    children: (0, Z.jsx)(l.ol, {
                      size: 16,
                      viewBox: '0 0 26 26',
                    }),
                  }),
                  (0, Z.jsxs)('div', {
                    className: S[''.concat(q, '-title-text')],
                    children: [
                      (0, Z.jsxs)('div', {
                        className: S[''.concat(q, '-title-text-inner')],
                        children: ['\u641c\u7d22\u201c', s, '\u201d'],
                      }),
                      (0, Z.jsx)('div', {
                        className: S[''.concat(q, '-title-text-icon')],
                        children: (0, Z.jsx)(l.Nm, {
                          size: 16,
                          viewBox: '0 0 26 26',
                          style: { transform: 'rotate(180deg)' },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Z.jsx)(w.Z7, {
                hasFollower: !0,
                params: u,
                debounceWait: 1e3,
                request: o,
                hasLastItemSplit: !0,
                className: S[''.concat(q, '-user')],
                itemClassName: S[''.concat(q, '-user-item')],
                followButtonClassName: S[''.concat(q, '-user-item-follow')],
              }),
            ],
          });
        },
        R = t(8420),
        F = {
          recommend: 'Z4ukF',
          'recommend-gray': 'UnN5l',
          'recommend-hidden': 'EPGFp',
          'recommend-item': 'C6Bnc',
        },
        E = t(4747),
        B = 'recommend',
        V = function (e) {
          var n,
            t = e.gray,
            s = e.hidden,
            l = e.style,
            o = (0, i.useRef)(null),
            u = (0, i.useContext)(E.k).state.navigationEmitter,
            d = (function () {
              var e = (0, c.Z)(
                (0, r.Z)().mark(function e(n) {
                  var t, a, c, s, i, l, o;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = n.page),
                            (c = n.pageSize),
                            (e.next = 3),
                            (0, k.o)({ page: a, pageSize: c })
                          );
                        case 3:
                          return (
                            (s = e.sent),
                            (i = s.code),
                            (l = s.data),
                            (o = s.msg),
                            e.abrupt('return', {
                              success: 200 === i,
                              msg: o,
                              data:
                                (null === l ||
                                void 0 === l ||
                                null === (t = l.users) ||
                                void 0 === t
                                  ? void 0
                                  : t.map(function (e) {
                                      return { user: e };
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
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (
            null === u ||
              void 0 === u ||
              u.useSubscription(function (e) {
                var n, t;
                'search' === e.type &&
                  (null === (n = o.current) ||
                    void 0 === n ||
                    null === (t = n.reload) ||
                    void 0 === t ||
                    t.call(n, !0));
              }),
            (0, Z.jsx)(w.Z7, {
              actionRef: o,
              hasLoadingContainer: !0,
              hasFollower: !0,
              request: d,
              cacheKey: 'search-recommend',
              hasLastItemSplit: !0,
              style: l,
              className: N()(
                F[''.concat(B)],
                ((n = {}),
                (0, a.Z)(n, F[''.concat(B, '-gray')], t),
                (0, a.Z)(n, F[''.concat(B, '-hidden')], s),
                n),
              ),
              itemClassName: F[''.concat(B, '-item')],
            })
          );
        },
        _ = t(4814),
        A = t(6031),
        T = 'search',
        K = function () {
          var e = (0, i.useState)(''),
            n = (0, s.Z)(e, 2),
            t = n[0],
            l = n[1],
            o = (0, u.Z)().viewportWidth,
            d = (0, i.useState)(!1),
            h = (0, s.Z)(d, 2),
            f = h[0],
            v = h[1],
            p = o <= 699,
            m = (0, x.lr)(),
            g = (0, s.Z)(m, 1)[0],
            y = g.get('q'),
            j = g.get('serp_type'),
            S = (0, i.useContext)(R.Vo).state.user,
            k = 0 !== (null === t || void 0 === t ? void 0 : t.length) && f,
            q = (function () {
              var e = (0, c.Z)(
                (0, r.Z)().mark(function e(n) {
                  var t, a, c, s, i, l, o, u, d;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = n.page),
                            (c = n.pageSize),
                            (s = n.caption),
                            (i = n.tag),
                            (e.next = 3),
                            (0, _.Bf)({
                              page: a,
                              pageSize: c,
                              caption: s,
                              tag: i,
                            })
                          );
                        case 3:
                          return (
                            (l = e.sent),
                            (o = l.code),
                            (u = l.data),
                            (d = l.msg),
                            e.abrupt('return', {
                              success: 200 === o,
                              msg: d,
                              data:
                                (null === u ||
                                void 0 === u ||
                                null === (t = u.posts) ||
                                void 0 === t
                                  ? void 0
                                  : t.map(function (e) {
                                      return {
                                        id: (0, A.uniqueId)(),
                                        posts: [e],
                                      };
                                    })) || [],
                              total:
                                null === u || void 0 === u ? void 0 : u.total,
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
            F = (0, i.useMemo)(
              function () {
                switch (j) {
                  case 'default':
                    return { caption: y };
                  case 'tag':
                    return { tag: '#'.concat(y) };
                }
              },
              [y, j],
            ),
            E = k && p,
            B = (0, i.useRef)();
          return (0, Z.jsx)(w._z, {
            children: (0, Z.jsxs)('div', {
              className: b[''.concat(T)],
              children: [
                (0, Z.jsx)('div', {
                  className: b[''.concat(T, '-input')],
                  children: (0, Z.jsx)(C, {
                    actionRef: B,
                    defaultValue: y,
                    onValueChange: function (e) {
                      l(e);
                    },
                    onFocusedChange: function (e) {
                      v(e);
                    },
                    children:
                      k &&
                      !p &&
                      (0, Z.jsx)(z, {
                        onSearchPostClick: function () {
                          var e;
                          null === B ||
                            void 0 === B ||
                            null === (e = B.current) ||
                            void 0 === e ||
                            e.changeFocusedStatus(!1);
                        },
                        searchVal: t,
                        className: b[''.concat(T, '-input-result')],
                      }),
                  }),
                }),
                (0, Z.jsx)(V, {
                  currentUid: null === S || void 0 === S ? void 0 : S.id,
                  gray: k && !p,
                  hidden: E || null !== y,
                }),
                k &&
                  p &&
                  (0, Z.jsx)(z, {
                    onSearchPostClick: function () {
                      var e;
                      null === B ||
                        void 0 === B ||
                        null === (e = B.current) ||
                        void 0 === e ||
                        e.changeFocusedStatus(!1);
                    },
                    searchVal: t,
                    className: b[''.concat(T, '-result')],
                  }),
                null !== y &&
                  (0, Z.jsx)(w.p_, {
                    indent: !0,
                    emptyPlaceholder: '\u6ca1\u6709\u7ed3\u679c',
                    hasBorderTop: !1,
                    request: q,
                    cacheKey: 'search-'.concat(j, '-').concat(y),
                    params: F,
                    className: N()(
                      b[''.concat(T, '-post-list')],
                      (0, a.Z)({}, b[''.concat(T, '-post-list-hidden')], E),
                    ),
                  }),
              ],
            }),
          });
        };
    },
  },
]);
