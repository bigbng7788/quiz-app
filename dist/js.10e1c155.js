parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire
        if (!n && i) return i(t, !0)
        if (o) return o(t, !0)
        if (u && 'string' == typeof t) return u(t)
        var c = new Error("Cannot find module '" + t + "'")
        throw ((c.code = 'MODULE_NOT_FOUND'), c)
      }
      ;(p.resolve = function (r) {
        return e[t][1][r] || r
      }),
        (p.cache = {})
      var l = (r[t] = new f.Module(t))
      e[t][0].call(l.exports, p, l, l.exports, this)
    }
    return r[t].exports
    function p(e) {
      return f(p.resolve(e))
    }
  }
  ;(f.isParcelRequire = !0),
    (f.Module = function (e) {
      ;(this.id = e), (this.bundle = f), (this.exports = {})
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t
        },
        {},
      ]
    })
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c])
    } catch (e) {
      i || (i = e)
    }
  if (t.length) {
    var l = f(t[t.length - 1])
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l
        })
      : n && (this[n] = l)
  }
  if (((parcelRequire = f), i)) throw i
  return f
})(
  {
    mahc: [
      function (require, module, exports) {
        function e(e) {
          return document.querySelectorAll(e)
        }
        var s = e('.bookmark')
        function t(e) {
          e.addEventListener('click', function () {
            e.classList.toggle('card__bookmark--on')
          })
        }
        s.forEach(t)
        var c = document.querySelector('#maindashboard'),
          d = document.querySelector('#mainbookmark'),
          n = document.querySelector('#maincreate'),
          a = document.querySelector('#mainprofile'),
          r = document.querySelector('#nav_home'),
          o = document.querySelector('#nav_bookmark'),
          i = document.querySelector('#nav_create'),
          l = document.querySelector('#nav_profile'),
          u = function () {
            c.classList.add('dn'),
              d.classList.add('dn'),
              n.classList.add('dn'),
              a.classList.add('dn')
          },
          v = function () {
            r.classList.remove('nav--active'),
              o.classList.remove('nav--active'),
              i.classList.remove('nav--active'),
              l.classList.remove('nav--active')
          }
        r.addEventListener('click', function () {
          u(), v(), c.classList.remove('dn'), r.classList.add('nav--active')
        }),
          o.addEventListener('click', function () {
            u(), v(), d.classList.remove('dn'), o.classList.add('nav--active')
          }),
          i.addEventListener('click', function () {
            u(), v(), n.classList.remove('dn'), i.classList.add('nav--active')
          }),
          l.addEventListener('click', function () {
            u(), v(), a.classList.remove('dn'), l.classList.add('nav--active')
          })
        var m = document.querySelector('.card__showanswer1'),
          L = document.querySelector('.card__answer1'),
          _ = document.querySelector('.card__hideanswer1')
        m.addEventListener('click', function () {
          L.classList.remove('dn'),
            m.classList.add('dn'),
            _.classList.remove('dn')
        }),
          _.addEventListener('click', function () {
            L.classList.add('dn'),
              m.classList.remove('dn'),
              _.classList.add('dn')
          })
        var y = document.querySelector('.card__showanswer2'),
          q = document.querySelector('.card__answer2'),
          S = document.querySelector('.card__hideanswer2')
        y.addEventListener('click', function () {
          q.classList.remove('dn'),
            y.classList.add('dn'),
            S.classList.remove('dn')
        }),
          S.addEventListener('click', function () {
            q.classList.add('dn'),
              y.classList.remove('dn'),
              S.classList.add('dn')
          })
        var f = document.querySelector('.card__showanswer3'),
          k = document.querySelector('.card__answer3'),
          w = document.querySelector('.card__hideanswer3')
        f.addEventListener('click', function () {
          k.classList.remove('dn'),
            f.classList.add('dn'),
            w.classList.remove('dn')
        }),
          w.addEventListener('click', function () {
            k.classList.add('dn'),
              f.classList.remove('dn'),
              w.classList.add('dn')
          })
        var E = document.querySelector('.card__showanswer4'),
          h = document.querySelector('.card__answer4'),
          b = document.querySelector('.card__hideanswer4')
        E.addEventListener('click', function () {
          h.classList.remove('dn'),
            E.classList.add('dn'),
            b.classList.remove('dn')
        }),
          b.addEventListener('click', function () {
            h.classList.add('dn'),
              E.classList.remove('dn'),
              b.classList.add('dn')
          })
        var g = document.querySelector('.card__showanswer5'),
          p = document.querySelector('.card__answer5'),
          x = document.querySelector('.card__hideanswer5')
        g.addEventListener('click', function () {
          p.classList.remove('dn'),
            g.classList.add('dn'),
            x.classList.remove('dn')
        }),
          x.addEventListener('click', function () {
            p.classList.add('dn'),
              g.classList.remove('dn'),
              x.classList.add('dn')
          })
        var A = document.querySelector('.card__question1'),
          D = document.querySelector('.answer1'),
          j = document.querySelector('.tags1'),
          z = document.querySelector('.formular__createcard')
        z.addEventListener('submit', function (e) {
          e.preventDefault(), form.reset()
        })
        var B = document.querySelector('.readmore__button'),
          C = document.querySelector('.readmorebio__text'),
          F = document.querySelector('.readless__button')
        B.addEventListener('click', function () {
          C.classList.remove('dn'),
            B.classList.add('dn'),
            F.classList.remove('dn')
        }),
          F.addEventListener('click', function () {
            C.classList.add('dn'),
              B.classList.remove('dn'),
              F.classList.add('dn')
          })
        var G = document.querySelector('body'),
          H = document.querySelector('.button--light'),
          I = document.querySelector('.button--dark')
        H.addEventListener('click', function () {
          G.classList.add('body--lightmode'),
            I.classList.remove('dn'),
            H.classList.add('dn')
        }),
          I.addEventListener('click', function () {
            G.classList.remove('body--lightmode'),
              I.classList.add('dn'),
              H.classList.remove('dn')
          })
      },
      {},
    ],
  },
  {},
  ['mahc'],
  null
)
//# sourceMappingURL=js.10e1c155.js.map
