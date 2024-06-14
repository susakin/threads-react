'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [849],
  {
    2849: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return G;
          },
        });
      var i = t(4165),
        r = t(5861),
        o = t(9439),
        l = t(7313),
        a = t(463),
        c = t(6975),
        s = {
          media: 'Ksrat',
          'media-viewer-content': 'nWJBe',
          'fade-in': 'KvTbk',
          'scroll-in': 'tYIBL',
          'scale-in': 'x0AiX',
          focus: 'tvEDB',
          'post-composer': 'H4Pe9',
          'post-composer-inner': 'C8spY',
          'post-composer-inner-hint': 'Ms_GT',
          'post-composer-split': 'J45oc',
        },
        u = t(8420),
        d = t(6417),
        v = 'post-composer',
        f = function () {
          var n = (0, l.useContext)(u.Vo).state.user,
            e = (0, l.useState)(!1),
            t = (0, o.Z)(e, 2),
            i = t[0],
            r = t[1];
          return (0, d.jsxs)('div', {
            className: s[''.concat(v)],
            children: [
              (0, d.jsxs)('div', {
                className: s[''.concat(v, '-inner')],
                children: [
                  (0, d.jsx)(c.qE, {
                    url: null === n || void 0 === n ? void 0 : n.profilePicUrl,
                    size: 36,
                    linkTo: '/@'.concat(
                      (null === n || void 0 === n ? void 0 : n.username) || '',
                    ),
                  }),
                  (0, d.jsx)('div', {
                    className: s[''.concat(v, '-inner-hint')],
                    onClick: function () {
                      r(!0);
                    },
                    role: 'button',
                    tabIndex: 0,
                    children: '\u5199\u5199\u4e32\u6587...',
                  }),
                  (0, d.jsx)(c.zx, {
                    onClick: function () {
                      r(!0);
                    },
                    children: '\u53d1\u5e03',
                  }),
                ],
              }),
              (0, d.jsx)('hr', { className: s[''.concat(v, '-split')] }),
              (0, d.jsx)(a.K2, {
                visible: i,
                onClose: function () {
                  r(!1);
                },
                title: '\u53d1\u5e03\u4e32\u6587',
              }),
            ],
          });
        },
        m = { 'main-tabs': 'g1fyS' },
        p = t(4728),
        h = t(6031),
        x = t(4747),
        g = t(8467),
        j = t(1413),
        w = {
          media: 'HtRj4',
          'media-viewer-content': 'cA6DZ',
          'fade-in': 'erSPz',
          'scroll-in': 'EbIOo',
          'scale-in': 'NVTv1',
          focus: 'gAGYd',
          recommend: 'mSKqW',
          'recommend-title': 'FlOY5',
          'recommend-title-text': 'WzFUz',
          'recommend-scroll-container': 'QqhOJ',
          'recommend-user': 'UIl7S',
        },
        N = {
          'scroll-container': '_IBF2',
          'scroll-container-prev': 'nDGK1',
          'scroll-container-next': 'eip9l',
          'scroll-container-prev-button': 'XdlOT',
          'scroll-container-next-button': 'POQ4L',
          'scroll-container-inner': 'wX3CM',
          'scroll-container-inner-placeholder': 'EN5c3',
        },
        b = t(813),
        C = t(5330),
        k = t(1909),
        Z = t.n(k),
        y = t(3168),
        S = t(6881),
        z = t(2320),
        T = t(9391);
      var B = function (n, e) {
          var t;
          T.Z &&
            ((0, z.mf)(n) ||
              console.error(
                'useThrottleFn expected parameter is a function, got '.concat(
                  typeof n,
                ),
              ));
          var i = (0, y.Z)(n),
            r =
              null !== (t = null === e || void 0 === e ? void 0 : e.wait) &&
              void 0 !== t
                ? t
                : 1e3,
            o = (0, l.useMemo)(function () {
              return Z()(
                function () {
                  for (var n = [], e = 0; e < arguments.length; e++)
                    n[e] = arguments[e];
                  return i.current.apply(i, (0, C.ev)([], (0, C.CR)(n), !1));
                },
                r,
                e,
              );
            }, []);
          return (
            (0, S.Z)(function () {
              o.cancel();
            }),
            { run: o, cancel: o.cancel, flush: o.flush }
          );
        },
        R = t(1114),
        E = t(6123),
        I = t.n(E),
        L = 'scroll-container';
      function P(n) {
        var e = n.getBoundingClientRect();
        return {
          childCards: Array.from(n.children).filter(function (n) {
            return 'DIV' === n.tagName;
          }),
          containerLeft: null === e || void 0 === e ? void 0 : e.left,
          containerRight: null === e || void 0 === e ? void 0 : e.right,
          containerWidth: null === e || void 0 === e ? void 0 : e.width,
        };
      }
      function D(n, e) {
        var t = e.left,
          i = e.top;
        'scrollBehavior' in document.documentElement.style
          ? n.scrollTo({
              behavior: 'smooth',
              left: null !== t && void 0 !== t ? t : 0,
              top: null !== i && void 0 !== i ? i : 0,
            })
          : n.scrollTo(
              null !== t && void 0 !== t ? t : 0,
              null !== i && void 0 !== i ? i : 0,
            );
      }
      var F = function (n) {
          var e = n.className,
            t = n.children,
            i = (0, l.useRef)(null),
            r = (0, l.useState)(0),
            a = (0, o.Z)(r, 2),
            s = a[0],
            u = a[1],
            v = (0, l.useState)(0),
            f = (0, o.Z)(v, 2),
            m = f[0],
            p = f[1];
          (0, l.useEffect)(
            function () {
              setTimeout(function () {
                i.current && p(i.current.scrollWidth - i.current.clientWidth);
              });
            },
            [t],
          );
          var h = B(
            function () {
              var n;
              u(
                (null === i ||
                void 0 === i ||
                null === (n = i.current) ||
                void 0 === n
                  ? void 0
                  : n.scrollLeft) || 0,
              );
            },
            { wait: 50, leading: !0 },
          ).run;
          return (0, d.jsxs)('div', {
            className: I()(N[''.concat(L)], e),
            children: [
              0 !== s &&
                (0, d.jsx)('div', {
                  className: N[''.concat(L, '-prev')],
                  children: (0, d.jsx)(c.ZJ, {
                    className: N[''.concat(L, '-prev-button')],
                    size: 44,
                    onClick: function () {
                      !(function (n) {
                        for (
                          var e,
                            t,
                            i = P(n),
                            r = i.childCards,
                            o = i.containerLeft,
                            l = i.containerRight,
                            a = r.length - 1;
                          a >= 0;
                          a--
                        ) {
                          var c,
                            s =
                              null === (c = r[a]) || void 0 === c
                                ? void 0
                                : c.getBoundingClientRect();
                          if (s.left <= o - 10) {
                            t = s;
                            break;
                          }
                        }
                        if (t) {
                          var u =
                            (null === (e = t) || void 0 === e
                              ? void 0
                              : e.right) - l;
                          u && D(n, { left: n.scrollLeft + u });
                        }
                      })(null === i || void 0 === i ? void 0 : i.current);
                    },
                    children: (0, d.jsx)(b.Eh, {
                      size: 16,
                      viewBox: '0 0 24 24',
                    }),
                  }),
                }),
              (0, d.jsxs)('div', {
                className: N[''.concat(L, '-inner')],
                ref: i,
                onScroll: R.Y ? void 0 : h,
                children: [
                  (0, d.jsx)('span', {
                    className: N[''.concat(L, '-inner-placeholder')],
                  }),
                  t,
                  (0, d.jsx)('span', {
                    className: N[''.concat(L, '-inner-placeholder')],
                  }),
                ],
              }),
              m !== Math.ceil(s) &&
                (0, d.jsx)('div', {
                  className: N[''.concat(L, '-next')],
                  children: (0, d.jsx)(c.ZJ, {
                    className: N[''.concat(L, '-next-button')],
                    size: 44,
                    onClick: function () {
                      !(function (n) {
                        for (
                          var e,
                            t,
                            i = P(n),
                            r = i.childCards,
                            o = i.containerLeft,
                            l = i.containerRight,
                            a = 0;
                          a < r.length;
                          a++
                        ) {
                          var c,
                            s =
                              null === (c = r[a]) || void 0 === c
                                ? void 0
                                : c.getBoundingClientRect();
                          if (s.right >= l + 10) {
                            t = s;
                            break;
                          }
                        }
                        if (t) {
                          var u =
                            (null === (e = t) || void 0 === e
                              ? void 0
                              : e.left) - o;
                          u && D(n, { left: n.scrollLeft + u });
                        }
                      })(null === i || void 0 === i ? void 0 : i.current);
                    },
                    children: (0, d.jsx)(b.Eh, {
                      size: 16,
                      viewBox: '0 0 24 24',
                      style: { transform: 'rotate(180deg)' },
                    }),
                  }),
                }),
            ],
          });
        },
        K = {
          media: 'ZDlKP',
          'media-viewer-content': 'PMWbU',
          'fade-in': 'cJRBt',
          'scroll-in': 'eIZhQ',
          'scale-in': 'eg6XD',
          focus: 'xEWIa',
          'user-card': 'd90aj',
          'user-card-inner': 'vnfME',
          'user-card-inner-avatar': 'R6f7o',
          'user-card-inner-avatar-badge': 'UO6TN',
          'user-card-inner-profile': 'NMIlk',
          'user-card-inner-profile-inner': 'EXw_H',
          'user-card-inner-profile-inner-full-name': 'XDafC',
          'user-card-inner-profile-inner-username': 'qjHV7',
          'user-card-inner-profile-follow-button': 'wBKRF',
          'user-card-delete': 'cPyG1',
          'user-card-delete-button': 'XFB1f',
        },
        M = t(9904),
        U = t(2135),
        W = t(6023),
        q = t(2568),
        X = 'user-card',
        _ = function (n) {
          var e = n.user,
            t = n.className,
            i = n.onDelete,
            r = n.onFollowingChange,
            o = e.isVerified;
          return (0, d.jsxs)('div', {
            className: I()(K[''.concat(X)], t),
            children: [
              (0, d.jsxs)(U.rU, {
                to: '/@'.concat(
                  null === e || void 0 === e ? void 0 : e.username,
                ),
                className: K[''.concat(X, '-inner')],
                children: [
                  (0, d.jsxs)('div', {
                    className: K[''.concat(X, '-inner-avatar')],
                    children: [
                      (0, d.jsx)(M.Z, {
                        size: 80,
                        url:
                          null === e || void 0 === e ? void 0 : e.profilePicUrl,
                      }),
                      o &&
                        (0, d.jsx)('div', {
                          className: K[''.concat(X, '-inner-avatar-badge')],
                          children: (0, d.jsx)(b.sA, {
                            viewBox: '-4 0 27 19',
                            size: 25,
                          }),
                        }),
                    ],
                  }),
                  (0, d.jsx)('div', {
                    className: K[''.concat(X, '-inner-profile')],
                    children: (0, d.jsx)(
                      q.Z,
                      {
                        openDelay: 300,
                        content: R.Y
                          ? null
                          : (0, d.jsx)(a.Oe, { user: e, onFollowingChange: r }),
                        trigger: 'hover',
                        placement: 'bottom-start',
                        children: (0, d.jsxs)('div', {
                          className: K[''.concat(X, '-inner-profile-inner')],
                          children: [
                            (0, d.jsx)('span', {
                              className:
                                K[
                                  ''.concat(X, '-inner-profile-inner-full-name')
                                ],
                              children:
                                null === e || void 0 === e
                                  ? void 0
                                  : e.fullName,
                            }),
                            (0, d.jsx)('span', {
                              className:
                                K[
                                  ''.concat(X, '-inner-profile-inner-username')
                                ],
                              children:
                                null === e || void 0 === e
                                  ? void 0
                                  : e.username,
                            }),
                          ],
                        }),
                      },
                      null === e || void 0 === e ? void 0 : e.id,
                    ),
                  }),
                  (0, d.jsx)(a.eg, {
                    className: K[''.concat(X, '-inner-profile-follow-button')],
                    user: e,
                    type: 'primary',
                    onFollowingChange: r,
                  }),
                ],
              }),
              (0, d.jsx)('div', {
                className: K[''.concat(X, '-delete')],
                children: (0, d.jsx)(W.Z, {
                  type: 'text',
                  className: K[''.concat(X, '-delete-button')],
                  onClick: function (n) {
                    n.stopPropagation(),
                      n.preventDefault(),
                      null === i || void 0 === i || i(e.id);
                  },
                  children: (0, d.jsx)(b.ZI, { viewBox: '0 0 24 24', size: 8 }),
                }),
              }),
            ],
          });
        },
        J = t(8048),
        O = t(3703),
        Q = 'recommend',
        V = function () {
          var n = (0, l.useState)([]),
            e = (0, o.Z)(n, 2),
            t = e[0],
            i = e[1];
          return (0, J.i)(O.o, {
            onSuccess: function (n) {
              i(null === n || void 0 === n ? void 0 : n.users);
            },
            defaultParams: [{ page: 1, pageSize: 20 }],
          }).loading || !t.length
            ? null
            : (0, d.jsxs)('div', {
                className: w[''.concat(Q)],
                children: [
                  (0, d.jsx)('div', {
                    className: w[''.concat(Q, '-title')],
                    children: (0, d.jsx)('span', {
                      className: w[''.concat(Q, '-title-text')],
                      children: '\u4e3a\u4f60\u63a8\u8350',
                    }),
                  }),
                  (0, d.jsx)(F, {
                    className: w[''.concat(Q, '-scroll-container')],
                    children: t.map(function (n) {
                      return (0, d.jsx)(
                        _,
                        {
                          user: n,
                          className: w[''.concat(Q, '-user')],
                          onDelete: function (n) {
                            i(function (e) {
                              return e.filter(function (e) {
                                return e.id !== n;
                              });
                            });
                          },
                          onFollowingChange: function (n, e) {
                            i(function (t) {
                              return t.map(function (t) {
                                return (
                                  t.id === n &&
                                    (t.friendshipStatus = (0, j.Z)(
                                      (0, j.Z)({}, t.friendshipStatus),
                                      e,
                                    )),
                                  t
                                );
                              });
                            });
                          },
                        },
                        n.id,
                      );
                    }),
                  }),
                ],
              });
        },
        Y = {
          media: 'bljwE',
          'media-viewer-content': 'Q1_CE',
          'fade-in': 'ErXMj',
          'scroll-in': 'f0y4A',
          'scale-in': '_xgay',
          focus: 'hNqgu',
          'switch-button': 'CiIVX',
          'switch-button-link': 'h2gVd',
          'switch-button-link-text': 'hgpzh',
          'switch-button-link-icon': 'uJoSk',
        },
        A = 'switch-button',
        H = function () {
          var n = (0, g.TH)().pathname,
            e = null === n || void 0 === n ? void 0 : n.includes('following'),
            t = (0, l.useContext)(x.k).state.navigationEmitter;
          return (0, d.jsx)('div', {
            className: Y[''.concat(A)],
            children: (0, d.jsxs)(U.rU, {
              to: e ? '/' : 'following',
              replace: !0,
              className: Y[''.concat(A, '-link')],
              onClick: function () {
                null === t ||
                  void 0 === t ||
                  t.emit({ type: 'main', path: e ? '/' : '/following' });
              },
              children: [
                (0, d.jsx)('div', {
                  className: Y[''.concat(A, '-link-text')],
                  children: e
                    ? '\u5df2\u5173\u6ce8'
                    : '\u4e3a\u4f60\u63a8\u8350',
                }),
                (0, d.jsx)('div', {
                  className: Y[''.concat(A, '-link-icon')],
                  children: (0, d.jsx)(b.rs, {
                    viewBox: '0 0 12 16',
                    width: 12,
                    height: 16,
                  }),
                }),
              ],
            }),
          });
        },
        G = function () {
          var n = (0, l.useRef)(null),
            e = (0, l.useRef)(null),
            t = (0, g.TH)().pathname,
            s = (0, l.useState)('/'),
            u = (0, o.Z)(s, 2),
            v = u[0],
            j = u[1];
          (0, l.useLayoutEffect)(
            function () {
              var n = '/following' === t ? '/following' : '/';
              j(n),
                null === b || void 0 === b || b.emit({ type: 'main', path: n });
            },
            [t],
          );
          var w = (0, g.s0)(),
            N = (0, l.useCallback)(
              (function () {
                var n = (0, r.Z)(
                  (0, i.Z)().mark(function n(e) {
                    var t, r, o, l, a, c;
                    return (0, i.Z)().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (t = e.page),
                              (r = e.pageSize),
                              (n.next = 3),
                              (i = { page: t, pageSize: r }),
                              (0, p.Z)({
                                url: '/post/timeline',
                                method: 'get',
                                params: i,
                              })
                            );
                          case 3:
                            return (
                              (o = n.sent),
                              (l = o.code),
                              (a = o.msg),
                              (c = o.data),
                              n.abrupt('return', {
                                success: 200 == l,
                                msg: a,
                                data: (
                                  (null === c || void 0 === c
                                    ? void 0
                                    : c.posts) || []
                                ).map(function (n) {
                                  return { id: (0, h.uniqueId)(), posts: [n] };
                                }),
                                total:
                                  null === c || void 0 === c ? void 0 : c.total,
                              })
                            );
                          case 8:
                          case 'end':
                            return n.stop();
                        }
                      var i;
                    }, n);
                  }),
                );
                return function (e) {
                  return n.apply(this, arguments);
                };
              })(),
              [],
            ),
            b = (0, l.useContext)(x.k).state.navigationEmitter;
          function C(t) {
            if (window.scrollY) window.scrollTo(0, 0);
            else {
              if (t !== v) return;
              var i, r, o, l;
              if ('/' === v)
                null === (i = n.current) ||
                  void 0 === i ||
                  null === (r = i.reload) ||
                  void 0 === r ||
                  r.call(i, !0);
              else
                null === e ||
                  void 0 === e ||
                  null === (o = e.current) ||
                  void 0 === o ||
                  null === (l = o.reload) ||
                  void 0 === l ||
                  l.call(o, !0);
            }
          }
          var k = (0, l.useCallback)(
            (function () {
              var n = (0, r.Z)(
                (0, i.Z)().mark(function n(e) {
                  var t, r, o, l, a, c;
                  return (0, i.Z)().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (t = e.page),
                            (r = e.pageSize),
                            (n.next = 3),
                            (i = { page: t, pageSize: r }),
                            (0, p.Z)({
                              url: '/post/following-posts',
                              method: 'get',
                              params: i,
                            })
                          );
                        case 3:
                          return (
                            (o = n.sent),
                            (l = o.code),
                            (a = o.msg),
                            (c = o.data),
                            n.abrupt('return', {
                              success: 200 == l,
                              msg: a,
                              data: (
                                (null === c || void 0 === c
                                  ? void 0
                                  : c.posts) || []
                              ).map(function (n) {
                                return { id: (0, h.uniqueId)(), posts: [n] };
                              }),
                              total:
                                null === c || void 0 === c ? void 0 : c.total,
                            })
                          );
                        case 8:
                        case 'end':
                          return n.stop();
                      }
                    var i;
                  }, n);
                }),
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
            [],
          );
          return (
            null === b ||
              void 0 === b ||
              b.useSubscription(function (n) {
                'main' === n.type && void 0 === n.path && C(t);
              }),
            (0, d.jsx)(d.Fragment, {
              children: (0, d.jsxs)(a._z, {
                children: [
                  (0, d.jsx)(f, {}),
                  (0, d.jsxs)(c.mQ, {
                    activeKey: v,
                    tabClassName: m[''.concat('main', '-tabs')],
                    onTabClick: function (n) {
                      null === b ||
                        void 0 === b ||
                        b.emit({ type: 'main', path: n }),
                        C(n),
                        j(n),
                        w(''.concat(n), { replace: !0 });
                    },
                    children: [
                      (0, d.jsx)(
                        c.mQ.Tab,
                        {
                          title: '\u4e3a\u4f60\u63a8\u8350',
                          children: (0, d.jsx)(a.p_, {
                            randomRender: function (n) {
                              return 9 === n ? (0, d.jsx)(V, {}) : null;
                            },
                            spin: function (n) {
                              return n ? null : (0, d.jsx)(c.N7, {});
                            },
                            cacheKey: 'recommend',
                            indentWhenTransparentLine: !0,
                            hasBorderTop: !1,
                            ignoreMutingUser: !1,
                            actionRef: n,
                            pageSize: 10,
                            request: N,
                            emptyPlaceholder:
                              '\u6682\u65f6\u8fd8\u6ca1\u6709\u5e16\u5b50\u3002',
                            hasLoadingContainer: !0,
                          }),
                        },
                        '/',
                      ),
                      (0, d.jsx)(
                        c.mQ.Tab,
                        {
                          title: '\u5df2\u5173\u6ce8',
                          children: (0, d.jsx)(a.p_, {
                            cacheKey: 'following',
                            hasBorderTop: !1,
                            indentWhenTransparentLine: !0,
                            ignoreMutingUser: !1,
                            actionRef: e,
                            hasLoadingContainer: !0,
                            hasRepostSign: !0,
                            spin: function (n) {
                              return n ? null : (0, d.jsx)(c.N7, {});
                            },
                            pageSize: 10,
                            request: k,
                            emptyPlaceholder:
                              '\u6682\u65f6\u8fd8\u6ca1\u6709\u5e16\u5b50\u3002',
                          }),
                        },
                        '/following',
                      ),
                    ],
                  }),
                  (0, d.jsx)(H, {}),
                ],
              }),
            })
          );
        };
    },
  },
]);
