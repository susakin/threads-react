'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [499],
  {
    5499: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return S;
          },
        });
      var i = n(9439),
        a = n(7313),
        o = n(4113),
        r = { toolbar: 'dFx4H', 'toolbar-item': 'LAi9P' },
        c = n(8467),
        l = n(4747),
        u = n(6417),
        s = 'toolbar',
        d = [
          { label: '\u5168\u90e8', key: '', path: '' },
          { label: '\u5173\u6ce8', key: 'follow', path: '/follows' },
          { label: '\u56de\u590d', key: 'reply', path: '/replies' },
          { label: '\u63d0\u53ca', key: 'mention', path: '/mentions' },
          { label: '\u5f15\u7528', key: 'quote', path: '/quotes' },
          { label: '\u8f6c\u53d1', key: 'repost', path: '/reposts' },
          { label: '\u5df2\u8ba4\u8bc1', key: 'verified', path: '/verified' },
        ],
        v = function (t) {
          var e = t.onChange,
            n = t.emitter,
            v = (0, c.UO)().action,
            p = (0, a.useState)(v ? '/'.concat(v) : ''),
            f = (0, i.Z)(p, 2),
            h = f[0],
            m = f[1],
            y = (0, a.useContext)(l.k).state.navigationEmitter,
            g = (0, c.s0)();
          return (
            (0, a.useEffect)(
              function () {
                null === e || void 0 === e || e(h);
              },
              [h],
            ),
            (0, a.useLayoutEffect)(
              function () {
                null === y ||
                  void 0 === y ||
                  y.emit({ type: 'activity', path: v ? '/'.concat(v) : '' });
              },
              [v],
            ),
            (0, u.jsx)('div', {
              className: r[''.concat(s)],
              children: d.map(function (t) {
                var e = t.label,
                  i = t.key,
                  a = t.path;
                return (0, u.jsx)(
                  o.zx,
                  {
                    onClick: function () {
                      !(function (t) {
                        var e,
                          i = t || '';
                        null === n ||
                          void 0 === n ||
                          null === (e = n.emit) ||
                          void 0 === e ||
                          e.call(n, i),
                          m(i),
                          g('/activity'.concat(i), { replace: !0 });
                      })(a);
                    },
                    className: r[''.concat(s, '-item')],
                    type: h === a ? 'primary' : 'default',
                    children: e,
                  },
                  i,
                );
              }),
            })
          );
        },
        p = { activity: 'G0PbM' },
        f = n(8654),
        h = n(432),
        m = n(4165),
        y = n(5861),
        g = n(4134),
        x = n(8549),
        k = { 'activity-list-user': 'q5COu' },
        b = n(8048),
        C = function (t) {
          var e,
            n = t.type,
            i = t.path,
            o = t.emitter,
            r = t.active,
            c = (0, a.useContext)(l.k),
            s = c.dispatch,
            d = c.state,
            v = d.navigationEmitter,
            p = d.unreadNotificationNum,
            f = (0, a.useRef)(null),
            h = (0, b.i)(x.vk, {
              manual: !0,
              ignoreErrorMsg: !0,
              onSuccess: function (t) {
                s({
                  type: 'SET_UNREAD_NOTIFICATION_NUM',
                  payload: { unreadNotificationNum: t },
                });
              },
            }),
            C = h.run;
          function j(t) {
            return null === t || void 0 === t
              ? void 0
              : t.map(function (t) {
                  var e = t.fromUser,
                    n = t.context,
                    i = t.createdAt,
                    a = t.id;
                  return {
                    user: e,
                    activity: {
                      context: n,
                      createdAt: i,
                      type: t.type,
                      content: t.content,
                      postCode: t.postCode,
                      relatePostCode: t.relatePostCode,
                    },
                    id: a,
                  };
                });
          }
          var N = (0, b.i)(x.zJ, {
              manual: !0,
              onSuccess: function () {
                (p || 0) > 0 && C();
              },
              ignoreErrorMsg: !0,
            }).run,
            w = (function () {
              var t = (0, y.Z)(
                (0, m.Z)().mark(function t(e) {
                  var n, i, a, o, r, c, l, u, s;
                  return (0, m.Z)().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (i = e.page),
                            (a = e.pageSize),
                            (o = e.type),
                            (t.next = 3),
                            (0, x.Ue)(o, { page: i, pageSize: a })
                          );
                        case 3:
                          return (
                            (r = t.sent),
                            (c = r.code),
                            (l = r.msg),
                            (u = r.data),
                            (s =
                              null === u ||
                              void 0 === u ||
                              null === (n = u.activities) ||
                              void 0 === n
                                ? void 0
                                : n.map(function (t) {
                                    return t.id;
                                  })).length && N({ ids: s }),
                            t.abrupt('return', {
                              success: 200 == c,
                              msg: l,
                              data: j(
                                null === u || void 0 === u
                                  ? void 0
                                  : u.activities,
                              ),
                              total:
                                null === u || void 0 === u ? void 0 : u.total,
                            })
                          );
                        case 10:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          function S(t) {
            var e, n;
            i === t &&
              (window.scrollY
                ? window.scrollTo(0, 0)
                : null === f ||
                  void 0 === f ||
                  null === (e = f.current) ||
                  void 0 === e ||
                  null === (n = e.reload) ||
                  void 0 === n ||
                  n.call(e, !0));
          }
          null === v ||
            void 0 === v ||
            v.useSubscription(function (t) {
              'activity' === (null === t || void 0 === t ? void 0 : t.type) &&
                S(null === t || void 0 === t ? void 0 : t.path);
            }),
            null === o ||
              void 0 === o ||
              null === (e = o.useSubscription) ||
              void 0 === e ||
              e.call(o, function (t) {
                r && S(t);
              });
          var E = (0, a.useMemo)(
            function () {
              return { type: n };
            },
            [n],
          );
          return (0, u.jsx)(u.Fragment, {
            children: (0, u.jsx)(g.Z7, {
              actionRef: f,
              hasLoadingContainer: !0,
              cacheKey: 'activity-'.concat(n),
              ignoreErrorMsg: !0,
              pageSize: 15,
              hasLastItemSplit: !0,
              hasFollower: !1,
              params: E,
              emptyPlaceholder: '\u8fd8\u6ca1\u6709\u52a8\u6001\u3002',
              request: w,
              itemClassName: k[''.concat('activity-list', '-user')],
            }),
          });
        },
        j = function (t) {
          var e = t.activePath,
            n = t.emitter;
          return (0, u.jsx)(u.Fragment, {
            children: d.map(function (t) {
              var i = t.path,
                a = t.key,
                o = e === i;
              return (0, u.jsx)(
                h.m,
                {
                  active: o,
                  forceRender: !1,
                  children: (0, u.jsx)('div', {
                    style: { display: o ? 'block' : 'none' },
                    children: (0, u.jsx)(C, {
                      type: a,
                      emitter: n,
                      path: i,
                      active: o,
                    }),
                  }),
                },
                i,
              );
            }),
          });
        },
        N = n(4933),
        w = n(3479),
        S = function () {
          var t = (0, a.useState)(''),
            e = (0, i.Z)(t, 2),
            n = e[0],
            o = e[1],
            r = (0, f.E)(),
            c = (0, N.Z)();
          return (
            (0, (0, w.Z)().setTitle)('\u52a8\u6001 \u2022 Threads'),
            (0, u.jsxs)('div', {
              className: p[''.concat('activity')],
              style: r,
              children: [
                (0, u.jsx)(v, {
                  emitter: c,
                  onChange: function (t) {
                    o(t);
                  },
                }),
                (0, u.jsx)(g._z, {
                  hasTop: !1,
                  children: (0, u.jsx)(j, { activePath: n, emitter: c }),
                }),
              ],
            })
          );
        };
    },
  },
]);
