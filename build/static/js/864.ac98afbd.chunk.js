'use strict';
(self.webpackChunkthreads = self.webpackChunkthreads || []).push([
  [864],
  {
    2864: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return x;
          },
        });
      var i = n(9439),
        a = n(7313),
        o = {
          'page-container': 'GI32C',
          'page-container-has-top': 'ftt8e',
          activity: 'G0PbM',
          'activity-tab': 'Fp4Bi',
          'activity-inner': 'U6nbT',
          'activity-inner-has-top': 'uCzuv',
        },
        r = n(8654),
        c = n(4933),
        l = n(3479),
        u = n(4733),
        s = n(4165),
        d = n(5861),
        v = n(2589),
        p = n(8549),
        f = { 'activity-list-user': 'q5COu' },
        y = n(4747),
        h = n(8048),
        m = n(9393),
        b = n(6417),
        g = function (t) {
          var e,
            n = t.type,
            i = t.path,
            o = t.emitter,
            r = t.active,
            c = (0, a.useContext)(y.k),
            l = c.dispatch,
            u = c.state,
            g = u.navigationEmitter,
            k = u.unreadNotificationNum,
            C = (0, a.useRef)(null),
            N = (0, h.i)(p.vk, {
              manual: !0,
              ignoreErrorMsg: !0,
              onSuccess: function (t) {
                l({
                  type: 'SET_UNREAD_NOTIFICATION_NUM',
                  payload: { unreadNotificationNum: t },
                });
              },
            }),
            x = N.run;
          function w(t) {
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
          var S = (0, h.i)(p.zJ, {
              manual: !0,
              onSuccess: function () {
                (k || 0) > 0 && x();
              },
              ignoreErrorMsg: !0,
            }).run,
            T = (function () {
              var t = (0, d.Z)(
                (0, s.Z)().mark(function t(e) {
                  var n, i, a, o, r, c, l, u, d;
                  return (0, s.Z)().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (i = e.page),
                            (a = e.pageSize),
                            (o = e.type),
                            (t.next = 3),
                            (0, p.Ue)(o, { page: i, pageSize: a })
                          );
                        case 3:
                          return (
                            (r = t.sent),
                            (c = r.code),
                            (l = r.msg),
                            (u = r.data),
                            (d =
                              null === u ||
                              void 0 === u ||
                              null === (n = u.activities) ||
                              void 0 === n
                                ? void 0
                                : n.map(function (t) {
                                    return t.id;
                                  })).length && S({ ids: d }),
                            t.abrupt('return', {
                              success: 200 == c,
                              msg: l,
                              data: w(
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
          function E(t) {
            var e, n;
            i === t &&
              (window.scrollY
                ? window.scrollTo(0, 0)
                : null === C ||
                  void 0 === C ||
                  null === (e = C.current) ||
                  void 0 === e ||
                  null === (n = e.reload) ||
                  void 0 === n ||
                  n.call(e, !0));
          }
          null === g ||
            void 0 === g ||
            g.useSubscription(function (t) {
              'activity' === (null === t || void 0 === t ? void 0 : t.type) &&
                (null === t || void 0 === t ? void 0 : t.fromNavigation) &&
                E(null === t || void 0 === t ? void 0 : t.path);
            }),
            null === o ||
              void 0 === o ||
              null === (e = o.useSubscription) ||
              void 0 === e ||
              e.call(o, function (t) {
                r && E(t);
              });
          var Z = (0, a.useMemo)(
            function () {
              return { type: n };
            },
            [n],
          );
          return (0, b.jsx)(b.Fragment, {
            children: (0, b.jsx)(v.Z7, {
              actionRef: C,
              hasLoadingContainer: !0,
              cacheKey: 'activity-'.concat(n),
              ignoreErrorMsg: !0,
              pageSize: 15,
              hasLastItemSplit: !0,
              hasFollower: !1,
              params: Z,
              spin: function (t) {
                return t ? null : (0, b.jsx)(m.N7, { hasBadge: !0 });
              },
              emptyPlaceholder: '\u8fd8\u6ca1\u6709\u52a8\u6001\u3002',
              request: T,
              itemClassName: f[''.concat('activity-list', '-user')],
            }),
          });
        },
        k = n(8467),
        C = 'activity',
        N = [
          { label: '\u5168\u90e8', key: '', path: '' },
          { label: '\u5173\u6ce8', key: 'follow', path: '/follows' },
          { label: '\u56de\u590d', key: 'reply', path: '/replies' },
          { label: '\u63d0\u53ca', key: 'mention', path: '/mentions' },
          { label: '\u5f15\u7528', key: 'quote', path: '/quotes' },
          { label: '\u8f6c\u53d1', key: 'repost', path: '/reposts' },
          { label: '\u5df2\u8ba4\u8bc1', key: 'verified', path: '/verified' },
        ],
        x = function () {
          var t = (0, r.E)(),
            e = (0, c.Z)(),
            n = (0, k.UO)().action,
            s = (0, a.useState)(function () {
              return n ? '/'.concat(n) : '';
            }),
            d = (0, i.Z)(s, 2),
            v = d[0],
            p = d[1],
            f = (0, a.useContext)(y.k).state.navigationEmitter,
            h = (0, k.s0)();
          return (
            (0, (0, l.Z)().setTitle)('\u52a8\u6001 \u2022 Threads'),
            (0, a.useLayoutEffect)(
              function () {
                null === f ||
                  void 0 === f ||
                  f.emit({ type: 'activity', path: n ? '/'.concat(n) : '' });
              },
              [n],
            ),
            (0, b.jsx)('div', {
              className: o[''.concat(C)],
              style: t,
              children: (0, b.jsx)(u.Z, {
                onTabClick: function (t) {
                  p(t),
                    (function (t) {
                      var n,
                        i = t || '';
                      t === v &&
                        (null === e ||
                          void 0 === e ||
                          null === (n = e.emit) ||
                          void 0 === n ||
                          n.call(e, i)),
                        h('/activity'.concat(i), { replace: !0 });
                    })(t);
                },
                activeKey: v,
                tabClassName: o[''.concat(C, '-tab')],
                contentClassName: o[''.concat(C, '-inner')],
                tabType: 'button',
                children: N.map(function (t) {
                  var n = t.label,
                    i = t.key,
                    a = t.path;
                  return (0, b.jsx)(
                    u.Z.Tab,
                    {
                      title: n,
                      forceRender: !1,
                      children: (0, b.jsx)(g, {
                        type: i,
                        emitter: e,
                        path: a,
                        active: a === v,
                      }),
                    },
                    a,
                  );
                }),
              }),
            })
          );
        };
    },
  },
]);
