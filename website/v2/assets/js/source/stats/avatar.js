var k = "ns_",
r = "",
u = {};
function x() {
	y || z();
	return r
}
function z(a) {
	var b = !1;
	a || (a = document.domain, b = !0);
	"." === a.substr(0, 1) && (a = a.substr(1));
	"www." === a.substr(0, 4) && b && (a = a.substr(4));
	r = "." + a;
	y = !0
}
function A(a) {
	u.w[a] = {
		expiration: 3600,
		length: "",
		format: "assoc"
	}
}
function B(a, b) {
	return u.get(a, b)
}
var y;
function C() {
	this.D = D.ka();
	this.Ca = !0
}
C.prototype = {
	Ca: !1,
	D: "",
	g: {},
	N: {},
	w: {},
	set: function(a, b, d, e, g, h) {
		F(this, a) || this.load(a);
		F(this, a) || (this.g[a] = {});
		b ? this.g[a][b] = d: this.g[a] = d; (g = G(this, a)) || this.N.hasOwnProperty(a) && (g = this.N[a]);
		b = "";
		b = "json" === g ? JSON.stringify(this.g[a]) : D.V(this.g[a]); (h = H(this, a)) || e && (h = 3600);
		e = x();
		D.v(k + a, b, h, "/", e)
	},
	get: function(a, b) {
		F(this, a) || this.load(a);
		if (F(this, a)) if (b) {
			if (this.g[a].hasOwnProperty(b)) return this.g[a][b]
		} else return this.g[a];
		else return ""
	},
	load: function(a) {
		var b = "",
		d = I(this, k + a);
		if (d) for (var e = 0; e < d.length; e++) {
			var g = unescape(d[e]),
			h = D.fb(g),
			g = D.za(g);
			e === d.length - 1 && (b = h)
		}
		b && (this.g[a] = b, this.N[a] = g, JSON.stringify(b))
	},
	clear: function(a, b) {
		if (b) {
			var d = this.get(a);
			d && d.hasOwnProperty(b) && (delete d.key, J(this, a, d, G(this, a), H(this, a)))
		} else delete this.g[a],
		D.wa(k + a),
		this.D = D.ka()
	}
};
function I(a, b) {
	if (a.D.hasOwnProperty(b)) return a.D[b]
}
function J(a, b, d, e, g) {
	JSON.stringify(d);
	b && (d && (e = G(a, b), a.g[b] = d, a.N[b] = e, cookie_value = "json" === e ? JSON.stringify(d) : D.V(d)), d = x(), g = H(a, b), D.v(k + b, cookie_value, g, "/", d))
}
function F(a, b) {
	if (a.g.hasOwnProperty(b)) return ! 0
}
function G(a, b) {
	if (a.w.hasOwnProperty(b)) return a.w[b].format
}
function H(a, b) {
	if (a.w.hasOwnProperty(b)) return a.w[b].pc
}
function K(a) {
	this.$ = {};
	this.options = {
		Ob: !1,
		key: "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
		ja: {
			name: "queryKey",
			L: /(?:^|&)([^&=]*)=?([^&]*)/g
		},
		L: {
			Nb: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
			Db: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
		}
	};
	a && (this.$ = L(this, a))
}
K.prototype = {};
function M(a) {
	if (a.$.hasOwnProperty("host")) return a.$.host
}
function L(a, b) {
	for (var d = a.options,
	e = d.Ob ? d.L.Nb.exec(b) : d.L.Db.exec(b), g = {},
	h = 14; h--;) g[d.key[h]] = e[h] || "";
	g[d.ja.name] = {};
	g[d.key[12]].replace(d.ja.L,
	function(a, b, h) {
		b && (g[d.ja.name][b] = h)
	});
	return g
}
var D = {
	kc: function(a, b, d) {
		if (d) {
			var e = new Date;
			e.setTime(e.getTime() + 864E5 * d);
			d = "; expires=" + e.toGMTString()
		} else d = "";
		document.cookie = a + "=" + b + d + "; path=/"
	},
	v: function(a, b, d, e, g, h) {
		var q = new Date;
		q.setTime(q.getTime() + 864E5 * d);
		document.cookie = a + "=" + escape(b) + (d ? "; expires=" + q.toGMTString() : "") + (e ? "; path=" + e: "") + (g ? "; domain=" + g: "") + (h ? "; secure": "")
	},
	ka: function() {
		var a = {},
		b = document.cookie.split(";");
		if (b) {
			for (var d = 0; d < b.length; d++) {
				var e = D.trim(b[d]),
				g = D.Ka(e, "="),
				h = e.substring(0, g),
				e = e.substring(g + 1, e.length);
				a.hasOwnProperty(h) || (a[h] = []);
				a[h].push(e)
			}
			JSON.stringify(a);
			return a
		}
	},
	Ha: function(a) {
		var b = D.ka();
		if (b) return b.hasOwnProperty(a) ? b[a] : ""
	},
	wa: function(a, b) {
		b || (b = x());
		D.v(a, "", -1, "/", b);
		D.Ha(a) && ("." === b.substr(0, 1) ? D.v(a, "", -2, "/", b.substr(1)) : D.v(a, "", -2, "/", b))
	},
	nc: function(a, b) {
		for (var d = 0; d < a.length; d++) D.wa(a[d], b)
	},
	vc: function(a) {
		var b = [];
		a = unescape(a).split("|||");
		for (var d in a) if (a.hasOwnProperty(d)) {
			var e = a[d].split("=>");
			b[e[0]] = e[1]
		}
		return b
	},
	wc: function(a) {
		var b = {};
		a = unescape(a).split("|||");
		for (var d in a) if (a.hasOwnProperty(d)) {
			var e = a[d].split("=>");
			b[e[0]] = e[1]
		}
		return b
	},
	xc: function() {
		for (var a = {},
		b, d, e, g, h, q, m = location.href.split(/[?&]/), l = m.length, n = 1; n < l; n++) if ((e = m[n].match(/(.*?)(\..*?|\[.*?\])?=([^#]*)/)) && 4 == e.length) {
			g = decodeURI(e[1]).toLowerCase();
			h = a;
			q = decodeURI(e[3]);
			if (e[2]) for (d = decodeURI(e[2]).replace(/\[\s*\]/g, "[-1]").split(/[\.\[\]]/), b = 0; b < d.length; b++) h = h[g] ? h[g] : h[g] = parseInt(d[b]) == d[b] ? [] : {},
			g = d[b].replace(/^["\'](.*)["\']$/, "$1");
			"-1" != g ? h[g] = q: h[h.length] = q
		}
		return a
	},
	Ka: function(a, b, d) {
		a = (a + "").indexOf(b, d || 0);
		return - 1 === a ? !1 : a
	},
	zc: function(a, b) {
		return a.split(b).length - 1
	},
	sc: function(a, b) {
		var d = "",
		e = "",
		g = "";
		1 === arguments.length && (b = a, a = "");
		if ("object" === typeof b) {
			if (b instanceof Array) return b.join(a);
			for (d in b) e += g + b[d],
			g = a;
			return e
		}
		return b
	},
	hc: function(a) {
		return F(u, a)
	},
	yc: function(a, b, d, e, g, h) {
		return u.set(a, b, d, e, g, h)
	},
	replaceState: function(a, b, d, e, g) {
		return J(u, a, b, e, g)
	},
	rc: function(a) {
		a = unescape(D.Ha(k + a));
		return a ? a: void 0
	},
	Aa: function(a, b) {
		return B(a, b)
	},
	jc: function(a, b) {
		return u.clear(a, b)
	},
	za: function(a) {
		var b = "";
		return b = "{" === a.substr(0, 1) ? "json": "assoc"
	},
	fb: function(a) {
		var b = "",
		b = "json" === D.za(a) ? JSON.parse(a) : D.xb(a);
		JSON.stringify(b);
		return b
	},
	mc: function(a, b) {
		return "json" === (b || "assoc") ? JSON.stringify(a) : D.V(a)
	},
	tc: function(a) {
		return "object" == typeof a && a instanceof Array
	},
	wb: function(a) {
		return a instanceof Array ? !1 : null !== a && "object" == typeof a
	},
	bb: function(a) {
		var b = 0,
		d;
		for (d in a) a.hasOwnProperty(d) && b++;
		return b
	},
	xb: function(a, b, d) {
		b = b || "=>";
		if (a) {
			if (D.Ka(a, b)) {
				var e = {};
				a = a.split(d || "|||");
				d = 0;
				for (var g = a.length; d < g; d++) {
					var h = a[d].split(b);
					e[h[0]] = h[1]
				}
			} else return a;
			return e
		}
	},
	V: function(a) {
		var b = "",
		d = 0,
		e = D.bb(a),
		g;
		for (g in a) d++,
		b += g + "=>" + a[g],
		d < e && (b += "|||");
		return b
	},
	Pb: function(a) {
		return "www" === a.split(".")[0] ? a.substring(4) : a
	},
	trim: function(a, b) {
		var d, e = 0,
		g = 0;
		a += "";
		d = b ? (b + "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1") : " \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
		e = a.length;
		for (g = 0; g < e; g++) if ( - 1 === d.indexOf(a.charAt(g))) {
			a = a.substring(g);
			break
		}
		e = a.length;
		for (g = e - 1; 0 <= g; g--) if ( - 1 === d.indexOf(a.charAt(g))) {
			a = a.substring(0, g + 1);
			break
		}
		return - 1 === d.indexOf(a.charAt(0)) ? a: ""
	},
	Ga: function(a, b) {
		var d = arguments.length;
		if (0 === d) a = 0,
		b = 2147483647;
		else if (1 === d) throw Error("Warning: rand() expects exactly 2 parameters, 1 given");
		return Math.floor(Math.random() * (b - a + 1)) + a
	},
	pa: function() {
		function a(a, e, g, l, n, s, t) {
			a >>>= 0;
			g = g && a && {
				2 : "0b",
				8 : "0",
				16 : "0x"
			} [e] || "";
			a = g + d(a.toString(e), s || 0, "0", !1);
			return b(a, g, l, n, t)
		}
		function b(a, b, e, g, n, s) {
			var t = g - a.length;
			0 < t && (a = e || !n ? d(a, g, s, e) : a.slice(0, b.length) + d("", t, "0", !0) + a.slice(b.length));
			return a
		}
		function d(a, b, d, e) {
			d || (d = " ");
			b = a.length >= b ? "": Array(1 + b - a.length >>> 0).join(d);
			return e ? a + b: b + a
		}
		var e = arguments,
		g = 0;
		return e[g++].replace(/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g,
		function(h, q, m, l, n, s, t) {
			var c, f;
			if ("%%" == h) return "%";
			n = !1;
			c = "";
			var p = !1,
			w = !1;
			f = " ";
			for (var E = m.length,
			v = 0; m && v < E; v++) switch (m.charAt(v)) {
			case " ":
				c = " ";
				break;
			case "+":
				c = "+";
				break;
			case "-":
				n = !0;
				break;
			case "'":
				f = m.charAt(v + 1);
				break;
			case "0":
				p = !0;
				break;
			case "#":
				w = !0
			}
			l = l ? "*" == l ? +e[g++] : "*" == l.charAt(0) ? +e[l.slice(1, -1)] : +l: 0;
			0 > l && (l = -l, n = !0);
			if (!isFinite(l)) throw Error("sprintf: (minimum-)width must be finite");
			s = s ? "*" == s ? +e[g++] : "*" == s.charAt(0) ? +e[s.slice(1, -1)] : +s: -1 < "fFeE".indexOf(t) ? 6 : "d" == t ? 0 : void 0;
			q = q ? e[q.slice(0, -1)] : e[g++];
			switch (t) {
			case "s":
				return t = String(q),
				null != s && (t = t.slice(0, s)),
				b(t, "", n, l, p, f);
			case "c":
				return t = String.fromCharCode( + q),
				null != s && (t = t.slice(0, s)),
				b(t, "", n, l, p, void 0);
			case "b":
				return a(q, 2, w, n, l, s, p);
			case "o":
				return a(q, 8, w, n, l, s, p);
			case "x":
				return a(q, 16, w, n, l, s, p);
			case "X":
				return a(q, 16, w, n, l, s, p).toUpperCase();
			case "u":
				return a(q, 10, w, n, l, s, p);
			case "i":
			case "d":
				return h = parseInt( + q, 10),
				c = 0 > h ? "-": c,
				q = c + d(String(Math.abs(h)), s, "0", !1),
				b(q, c, n, l, p);
			case "e":
			case "E":
			case "f":
			case "F":
			case "g":
			case "G":
				return h = +q,
				c = 0 > h ? "-": c,
				f = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(t.toLowerCase())],
				t = ["toString", "toUpperCase"]["eEfFgG".indexOf(t) % 2],
				q = c + Math.abs(h)[f](s),
				b(q, c, n, l, p)[t]();
			default:
				return h
			}
		})
	},
	fa: function() {
		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) return ! 0
	},
	ea: function() {
		var a = -1;
		if ("Microsoft Internet Explorer" == navigator.appName) {
			var b = navigator.userAgent.match(/MSIE ([0-9]{1,}[.0-9]{0,})/);
			b && (a = parseFloat(b[1]))
		}
		return a
	}
};
function N() {
	this.u = {};
	this.M = this.id = "";
	this.set("timestamp", D.r())
}
N.prototype = {
	get: function(a) {
		if (this.u.hasOwnProperty(a)) return this.u[a]
	},
	set: function(a, b) {
		this.u[a] = b
	}
};
function O(a) {
	this.startTime = D.r();
	A("v");
	A("s");
	this.options = {
		la: 0,
		na: 1800,
		va: !1,
		h: "",
		ha: 2E3
	};
	if (a) for (var b in a) this.options[b] = a[b];
	this.page = new N
}
O.prototype = {
	id: "",
	M: "",
	Ca: 0,
	d: {},
	startTime: null,
	J: !1,
	getTime: function() {
		return Math.round((new Date).getTime())
	}
};
function P(a, b) {
	if (a.d.hasOwnProperty(b)) return a.d[b]
}
function Q(a, b, d) {
	b || (b = D.r());
	d || (d = 0);
	return b - d < a.options.na ? !1 : !0
}
function R(a) {
	var b = B("v", "vid");
	if (!b) {
		var d = B("v");
		D.wb(d) || (b = d, u.clear("v", void 0), u.set("v", "vid", b, !0, void 0, void 0))
	}
	b || (b = D.xa(15), a.d.is_new_visitor = !0, u.set("v", "vid", b, !0, void 0, void 0));
	a.d.visitor_id = b
};
var S = document.createElement("iframe");
S.style.display = "none";
document.body.appendChild(S); (function(a, b, d) {
	function e() {
		var c = {};
		this.lb(c);
		this.qb(c);
		this.mb(c);
		return c
	}
	var g;
	function h(c) {
		return function() {
			return c.apply(m, arguments)
		}
	}
	var q;
	"object" == typeof a.Avatar && a.Avatar instanceof Array && (q = a.Avatar, a.Avatar = null);
	var m = {
		a: null,
		j: null,
		ga: null,
		Q: null,
		Z: null,
		Pa: {},
		A: [],
		ra: [],
		ia: [],
		s: !0,
		f: {
			Xa: {
				b: "ak",
				get: function() {
					return this.b
				},
				set: function(c) {
					this.b = c
				}
			},
			G: {
				b: 2E3,
				get: function() {
					return this.b
				},
				set: function(c) {
					this.b = c
				}
			},
			La: {
				b: 500,
				get: function() {
					return this.b
				},
				set: function(c) {
					this.b = c
				}
			},
			startTime: {
				b: 0,
				get: function() {
					return this.b
				},
				set: function(c) {
					this.b = c
				}
			},
			Oa: {
				b: !0,
				get: function() {
					return this.b
				},
				set: function(c) {
					this.b = c
				}
			},
			ta: {
				b: null,
				get: function() {
					return this.b
				},
				set: function(c) {
					this.b = c
				}
			},
			ab: {
				b: "00001",
				get: function() {
					return this.b
				},
				set: function(c) {
					this.b = c
				}
			},
			Rb: {
				b: null,
				get: function() {
					return this.b
				},
				set: function(c) {
					this.b = c
				}
			},
			Tb: {
				b: null,
				get: function() {
					return this.b
				},
				set: function(c) {
					this.b = c
				}
			},
			Sb: {
				b: null,
				get: function() {
					return this.b
				},
				set: function(c) {
					this.b = c
				}
			},
			prefix: {
				get: function() {
					return k
				},
				set: function(c) {
					void 0 === c && (c = "ln_");
					k = c
				}
			},
			va: {
				get: function() {
					return r
				},
				set: function(c) {
					z(c)
				}
			},
			h: {
				get: function(c) {
					return c.a.options.h
				},
				set: function(c, f) {
					void 0 === c && (c = "http://fsr.lenovomm.com/reaper/server/image2/_t.gif");
					f.a.options.h = c
				}
			},
			Jb: {
				get: function(c) {
					return c.a.options.na
				},
				set: function(c, f) {
					void 0 === c && (c = 1800);
					f.a.options.na = c
				}
			},
			ob: {
				get: function(c) {
					return c.a.options.ha
				},
				set: function(c, f) {
					void 0 === c && (c = 2E3);
					f.a.options.ha = c
				}
			},
			repeat: {
				get: function(c) {
					return c.a.options.la
				},
				set: function(c, f) {
					void 0 === c && (c = 3);
					f.a.options.la = c
				}
			}
		},
		F: {
			gc: "",
			hb: {
				Ta: "",
				q: "",
				Sa: "",
				sa: "",
				C: "",
				Va: "",
				ua: "",
				Ua: "",
				U: "",
				T: ""
			},
			Ub: {
				cc: "visitor_id",
				ac: "session_id",
				Wb: "",
				Zb: "page_type",
				ec: "tsps",
				Xb: "timestamp",
				$b: "residence_time",
				fc: "page_url",
				dc: "serial",
				bc: "source",
				Yb: "extraWebInfo"
			},
			ic: null,
			Za: {
				Qa: "",
				Ra: "",
				S: "",
				Wa: ""
			}
		},
		pb: function(c) {
			if (c) return this.f[c].get(this)
		},
		Ia: function(c, f, a) {
			switch (c) {
			case "trackers":
				this.zb(f);
				break;
			case "appKey":
				f = D.R(f, 12, "_");
				this.F.ak = f;
				a || this.Na();
				break;
			case "trackStayTime":
				a || f && this.Ma()
			}
			this.f[c].set(f, this)
		},
		Ja: function(c, f) {
			for (var a in c) this.Ia(a, c[a], f)
		},
		Aa: function(c, f) {
			return B(c, f) || ""
		},
		nb: function(c) {
			return P(this.a, c) || ""
		},
		Kb: function(c, f) {
			this.a.d[c] = f
		},
		oa: function(c) {
			u.hasOwnProperty("init") || (u = new C);
			this.a || this.eb();
			var f = this.f,
			a;
			for (a in f) void 0 === f[a].b && f[a].set(void 0, this);
			c && this.Ja(c, !0);
			c = this.a;
			f = document.referrer;
			a = "leNoteWeb";
			if (f) {
				var b = new K(f);
				document.domain != M(b) && (a = D.Pb(M(b)))
			}
			u.set("s", "referer", f || "", void 0, void 0, void 0);
			c.d.referer = f || "";
			u.set("s", "source", a, void 0, void 0, void 0);
			c.d.source = a;
			this.j = new e;
			this.ub(); (c = B("s", "referer")) && (this.a.d.pre_referer = c);
			if (c = this.f.startTime.get()) this.a.startTime = c,
			this.a.page.set("timestamp", c);
			this.f.Oa.get() && this.Ma();
			this.Na();
			c && this.Qb()
		},
		eb: function() {
			this.a = new O
		},
		Ba: function() {
			this.a || this.lc();
			R(this.a);
			return P(this.a, "visitor_id")
		},
		cb: function(c, f) {
			var a = {
				Y: void 0 != f.Y ? f.Y: "",
				action: void 0 != f.action ? f.action: "",
				label: void 0 != f.label ? f.label: "",
				K: void 0 != f.K ? f.K: {},
				value: void 0 != f.value ? f.value: ""
			},
			b = 5,
			d = a.K,
			e;
			for (e in d) b--;
			for (; 0 < b;) d["k" + b] = "",
			b--;
			c.set("ci", a)
		},
		ub: function() {
			var c = this.F,
			f = c.hb,
			p = a.lestore,
			w = !1;
			if (p && p.getDeviceInfo) {
				var e = JSON.parse(p.getDeviceInfo());
				try {
					e = JSON.parse(e)
				} catch(g) {
					e = null
				}
				e && (w = !0, f.sa = e.osVersion, f.Ta = e.deviceIdType, f.q = e.deviceId, f.C = e.deviceModel, f.Va = e.manufacture, f.ua = e.resolution, f.Ua = e.imsi)
			}
			w || (p && p.getApp5IMEI ? f.q = p.getApp5IMEI() : (p = window.App5) && p.getApp5IMEI && (f.q = p.getApp5IMEI()), f.q || (f.q = I(u, "appLenovo3gUUID") || this.Ba()), f.ua = a.screen.width + "x" + a.screen.height, f.sa = this.j.t + " " + this.j.Da, f.C = this.j.H);
			f.C || (f.C = "unknown");
			f.Sa = B("s", "source"); (p = window.lestore || window.App5 || window.uc) && "function" == typeof p.rb && (f.U = p.rb(), "function" == typeof p.sb && (f.T = p.sb()));
			f.U || (f.U = this.j.m + "_" + this.j.W);
			f.T || (f.T = 0);
			c.ib = this.p(f);
			f = c.Za;
			f.Wa = d.language || d.browserLanguage || "?";
			d.hasOwnProperty("cookieEnabled") ? f.S = d.cookieEnabled ? 1 : 0 : (b.cookie = "testCookie=", -1 == b.cookie.indexOf("testCookie=") ? f.S = 0 : (f.S = 1, b.cookie = "testCookie=;expires=" + (new Date(0)).toUTCString()));
			f.Qa = this.j.m;
			f.Ra = this.j.W;
			c.$a = this.p(f)
		},
		p: function(c) {
			var f = "",
			a;
			for (a in c) {
				var b = c[a];
				if (b instanceof Array) {
					for (var d = "",
					e = 0,
					g = b.length; e < g; e++) d += "\u0002" + (void 0 == b[e] ? "": D.ba(b[e]));
					d = d.substr(1);
					f += "\u0001" + d
				} else if (b instanceof Object) {
					var d = "",
					h;
					for (h in b) d += "\u0002" + h + "\u0003" + (void 0 == b[h] ? "": D.ba(b[h]));
					d = d.substr(1);
					f += "\u0001" + d
				} else f += "\u0001" + (void 0 == c[a] ? "": D.ba(c[a]))
			}
			return f.substr(1)
		},
		jb: function(c) {
			var f = c.wi = {},
			a = this.F.Ub,
			b;
			for (b in a) f[b] = c[a[b]]
		},
		Gb: function() {
			for (var c in t) D[c] = t[c];
			for (c in s) O.prototype[c] = s[c];
			var f;
			if (q) {
				c = 0;
				for (f = q.length; c < f; c++) if ("[object Object]" == Object.prototype.toString.call(q[c])) {
					f = q[c];
					q.splice(c, 1);
					this.oa(f);
					break
				}
				c = 0;
				for (f = q.length; c < f; c++) this.push(q[c])
			}
		},
		push: function(c) {
			var f = a.Avatar;
			if (c instanceof Array) {
				var b;
				f[c[0]] && "function" == typeof f[c[0]] ? b = f: this.a && this.a[c[0]] && "function" == typeof this.a[c[0]] && (b = this.a);
				b && b[c[0]].apply(b, Array.prototype.slice.call(c, 1))
			} else if ("object" == typeof c) this.oa(c);
			else if ("function" == typeof c) try {
				c()
			} catch(d) {}
		},
		gb: function() {
			D.detachEvent(b, "click", this.Z);
			D.detachEvent(a, "load", this.ga);
			D.detachEvent(a, "unload", this.Q);
			delete a.Vb
		},
		zb: function(c) {
			c instanceof Array || (c = [c]);
			for (var f = 0,
			a = c.length; f < a; f++) this.yb(c[f])
		},
		yb: function(c) {
			var f = document.createElement("script");
			f.type = "text/javascript";
			f.async = !0;
			f.src = c;
			document.head.appendChild(f)
		},
		Na: function() {
			var c = this.a.page;
			c.set("page_type", 2);
			var f = this.f.ta.get();
			f ? (c.set("extraWebInfo", f), this.a.P(c), c.set("extraWebInfo", null)) : this.a.P(c)
		},
		Qb: function() {
			function c() {
				p && (p = !1, c = function() {},
				f.Cb())
			}
			var f = this,
			p = !0;
			if (b.addEventListener) {
				if ("interactive" === b.readyState || "complete" === b.readyState || "loaded" === b.readyState) return c();
				b.addEventListener("DOMContentLoaded",
				function E() {
					b.removeEventListener("DOMContentLoaded", E, !1);
					c()
				},
				!1)
			} else if (b.attachEvent) {
				if ("complete" === b.readyState) return c();
				b.attachEvent("onreadystatechange",
				function v() {
					"complete" === b.readyState && c();
					p || b.detachEvent("onreadystatechange", v)
				});
				b.documentElement.doScroll && a === a.top &&
				function T() {
					if (p) {
						try {
							b.documentElement.doScroll("left")
						} catch(f) {
							return setTimeout(T, 0)
						}
						c()
					}
				} ()
			}
			/WebKit/.test("userAgent") && setTimeout(function U() {
				p && (/loaded|complete/.test(b.readyState) ? c() : setTimeout(U, 10))
			},
			10);
			this.ga = function() {
				c()
			};
			D.l(a, "load", this.ga)
		},
		Ma: function() {
			var c = this;
			this.Q || (this.Q = function() {
				c.Ab()
			},
			D.l(a, "unload", this.Q))
		},
		Cb: function() {
			this.qa(["", "LOADTIME", "", [D.r() - this.a.startTime]])
		},
		Ab: function() {
			this.s = !1;
			this.f.G.set(0);
			var c = this.a.page;
			c.set("page_type", 3);
			c.set("ci", null);
			var f = D.r();
			c.set("timestamp", f);
			c.set("residence_time", f - this.a.startTime);
			this.a.P(c)
		},
		qa: function(c, f, a) {
			var b = new N;
			b.set("page_type", 0);
			b.set("noDelay", f);
			this.cb(b, {
				Y: c[0],
				action: c[1],
				label: c[2],
				K: c[3],
				value: c[4]
			});
			b.set("extraWebInfo", c[5]);
			this.s = !a;
			this.a.P(b)
		},
		register: function(c, f, a, b, d, e) {
			this.A.length || this.tb();
			c = [c, f, a, b, d];
			if (e) {
				if (this.Pa[e] = c, f = this.ra, f.length && (e = f.indexOf(e), -1 < e)) {
					this.A.push(c);
					f.splice(e, 1);
					e = this.ia;
					if (e.length) for (a = 0, b = e.length; a < b; a++) this.Fa(c, e[a]);
					f.length || (this.ia = null)
				}
			} else this.A.push(c)
		},
		apply: function(c) {
			c instanceof Array || (c = [c]);
			for (var f = 0,
			a = c.length; f < a; f++) {
				var b = this.Pa[c[f]];
				b ? this.A.push(b) : this.ra.push(c[f])
			}
		},
		tb: function() {
			var c = this,
			f = null,
			p = 0;
			this.Z = function(b) {
				var d = (new Date).getTime(),
				e = b.target;
				e === f && d - p < m.f.La.get() || (f = e, p = d, a.setTimeout(function() {
					c.click.call(c, b)
				},
				0))
			};
			D.l(b, "click", this.Z)
		},
		click: function(c) {
			var f = this.A;
			if (f.length) for (var a = 0,
			b = f.length; a < b; a++) this.Fa(f[a], c);
			this.ra.length && this.ia.push(c)
		},
		Fa: function(c, f) {
			var a = this.match(c[0], f);
			a && (c[2] ? (args = c[2], args = [f, a].concat(args), a = c[1].apply(null, args)) : a = c[1](f, a), a && this.qa(a, c[3], c[4]))
		},
		match: function(c, a) {
			for (var p = this.Fb[c.charAt(0)], d = c.substr(1), e = a.target; e && e != b;) {
				if (p(e, d)) return e;
				e = e.parentNode
			}
			return ! 1
		},
		Fb: {
			".": function(c, a) {
				return (new RegExp("\\b" + a + "\\b")).test(c.className)
			},
			"#": function(c, a) {
				return c.getAttribute("id") == a
			},
			"*": function(c, a) {
				return null != c.getAttribute(a)
			}
		}
	},
	l = a.Avatar = {};
	l.push = h(m.push);
	l.setup = h(m.oa);
	l.destroy = h(m.gb);
	l.register = h(m.register);
	l.apply = h(m.apply);
	l.track = h(m.qa);
	l.getUserId = h(m.Ba);
	l.getOption = h(m.pb);
	l.setOption = h(m.Ia);
	l.setOptions = h(m.Ja);
	l.getState = h(m.Aa);
	l.getGlobalProperty = h(m.nb);
	l.setGlobalProperty = h(m.Kb);
	var n = m.f,
	l = l.config = {
		appKey: n.Xa,
		delay: n.G,
		throttle: n.La,
		repeat: n.repeat,
		startTime: n.startTime,
		trackStayTime: n.Oa,
		PVInfo: n.ta,
		channel: n.ab,
		trackers: n.Rb,
		versionName: n.Tb,
		versionCode: n.Sb,
		prefix: n.prefix,
		cookieDomain: n.va,
		serverUrl: n.h,
		session: n.Jb,
		getLimit: n.ob
	};
	for (g in l) n[g] = l[g];
	var s = {
		X: null,
		O: null,
		i: null,
		B: [],
		send: function(c) {
			if (this.options.h) {
				var a = !0,
				b = "";
				m.s && (a = D.ca(c), b = this.options.h, b = -1 === b.indexOf("?") ? b + "?": b + "&", b += a, a = b.length > this.options.ha);
				a ? this.n(c) : this.I(b)
			}
		},
		I: function(c) {
			this.i ? (this.I = function(c) {
				var a = this.options.la,
				b = this; (function v(d, e) {
					e < a && (c += "&times" + e);
					e--;
					var g = new Image(1, 1);
					g.onload = function() {
						b.i.removeChild(g)
					};
					g.onerror = function() {
						e && v(d, e);
						b.i.removeChild(g)
					};
					b.i.appendChild(g);
					g.src = c
				})(c, a)
			},
			this.I(c)) : (this.B.push(c), this.aa(this.I))
		},
		da: function(c) {
			this.i ? (this.da = function(c) {
				var a = document.createElement("iframe"),
				b = this;
				a.onload = function() {
					b.i.removeChild(a)
				};
				a.src = c;
				this.i.appendChild(a)
			},
			this.da(c)) : (this.B.push(c), this.aa(this.da))
		},
		aa: function(c) {
			if (document.body && !this.i) {
				var a = this.i = document.createElement("div");
				a.style.width = "0";
				a.style.height = "0";
				a.style.overflow = "hidden";
				a.style.position = "absolute";
				a.style.top = "-2000px";
				a.style.left = "-2000px";
				document.body.appendChild(a);
				if (this.B.length) for (var b in this.B) c.call(this, this.B[b])
			} else {
				var d = this;
				window.setTimeout(function() {
					d.aa(c)
				},
				200)
			}
		},
		Bb: function(c) {
			m.jb(c);
			if (m.s && !c.noDelay && m.f.G.get()) {
				if (this.O) {
					a.clearTimeout(this.O);
					var f = this.X;
					f.wi.push(m.p(c.wi));
					f.ci.push(m.p(c.ci))
				} else this.X = this.Ea(c);
				this.vb()
			} else this.send(this.Ea(c))
		},
		vb: function() {
			var c = this;
			this.O = a.setTimeout(function() {
				c.O = null;
				c.send(c.X)
			},
			m.f.G.get())
		},
		Ea: function(a) {
			var f = m.F,
			b = {
				ak: f.ak,
				di: f.ib
			};
			b.wi = [m.p(a.wi)];
			var d = null;
			a.ci && (d = m.p(a.ci));
			b.ci = [d];
			b.bi = f.$a;
			b.ts = a.timestamp;
			return b
		},
		n: function(c) {
			a.XMLHttpRequest && "withCredentials" in new a.XMLHttpRequest ? this.n = function(c, b) {
				void 0 == b && (b = m.f.repeat.get(m));
				b--;
				var d = new a.XMLHttpRequest;
				d.open("POST", this.options.h, m.s);
				d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				var e = this;
				d.onreadystatechange = function() {
					4 == d.readyState && 200 != d.status && b && e.n(c, b)
				};
				d.send(D.ca(c))
			}: this.n = a.XDomainRequest ?
			function(c, b) {
				void 0 == b && (b = m.f.repeat.get());
				b--;
				var d = new a.XDomainRequest;
				d.open("POST", this.options.h);
				var e = this;
				d.onerror = function() {
					b && e.n(c, b)
				};
				d.send(D.ca(c))
			}: function(a) {
				this.Hb(a)
			};
			this.n(c)
		},
		kb: function() {
			if (D.fa() && 9 > D.ea()) var a = b.createElement('<iframe name="owa-tracker-post-iframe" src="about:blank" width="1" height="1"></iframe>');
			else a = b.createElement("iframe"),
			a.setAttribute("name", "owa-tracker-post-iframe"),
			a.setAttribute("src", "about:blank"),
			a.setAttribute("width", 1),
			a.setAttribute("height", 1);
			a.setAttribute("class", "owa-tracker-post-iframe");
			a.setAttribute("style", "border: none;");
			b.body.appendChild(a);
			return a
		},
		Hb: function(c) {
			function b(c) {
				function f(a, c) {
					if (D.fa() && 9 > D.ea()) var b = e.createElement("<input type='hidden' name='" + a + "' />");
					else b = e.createElement("input"),
					b.setAttribute("name", a),
					b.setAttribute("type", "hidden");
					b.setAttribute("value", c);
					return b
				}
				var g = this.options.h,
				h = "post_form" + Math.random();
				if (D.fa() && 9 > D.ea()) var l = e.createElement('<form name="' + h + '"></form>');
				else l = e.createElement("form"),
				l.setAttribute("name", h);
				l.setAttribute("id", h);
				l.setAttribute("action", g);
				l.setAttribute("method", "POST");
				for (var m in c) if (c.hasOwnProperty(m)) if (g = c[m], g instanceof Array) for (var n = 0,
				q = g.length; n < q; n++) l.appendChild(f(m, g[n]));
				else l.appendChild(f(m, g));
				e.body.appendChild(l);
				e.forms[h].submit();
				e.body.removeChild(l);
				a.setTimeout(function() {
					document.body.removeChild(d)
				},
				1E3)
			}
			var d = this.kb(),
			e; (function v() {
				var g = null;
				d.contentDocument ? g = d.contentDocument: d.contentWindow && d.contentWindow.document ? g = d.contentWindow.document: d.document && (g = d.document);
				g.open();
				g.close(); (e = g) ? b.call(this, c) : a.setTimeout(v, 10)
			}).call(this)
		},
		P: function(a) {
			Q(this, a.get("timestamp"), P(this, "last_req")) && this.Eb(a);
			JSON.stringify(this.d);
			for (var b in this.d) {
				var d;
				if (d = this.d.hasOwnProperty(b)) d = a.u.hasOwnProperty(b) ? !0 : void 0,
				d = !d;
				d && a.set(b, this.d[b])
			}
			a.get("page_url") || a.set("page_url", document.URL);
			a.get("HTTP_REFERER") || a.set("HTTP_REFERER", document.referrer);
			a.get("page_title") || a.set("page_title", D.trim(document.title));
			this.Bb(a.u)
		},
		Eb: function(a) {
			a || (a = this.page);
			R(this);
			var b = a,
			d = B("v", "fsts");
			d || (d = b.get("timestamp"), u.set("v", "fsts", d, !0, void 0, void 0));
			this.d.fsts = d;
			b = Math.round((b.get("timestamp") - d) / 86400);
			u.set("v", "dsfs", b, void 0, void 0, void 0);
			this.d.dsfs = b;
			b = a;
			d = B("s", "last_req");
			d || (d = D.pa("%s_%s", "ss", this.M), d = B(d, "last_req"));
			this.d.last_req = d;
			b = b.get("timestamp");
			u.set("s", "last_req", b, !0, void 0, void 0);
			b = b = "";
			Q(this, a.get("timestamp"), P(this, "last_req")) ? (b = B("s", "sid"), b || (b = D.pa("%s_%s", "ss", this.M), b = B(b, "s")), b && (this.d.prior_session_id = b), b = B("s", "last_req"), u.clear("s", void 0), u.set("s", "last_req", b, void 0, void 0, void 0), b = D.ya(10), this.d.session_id = b, this.J = this.d.is_new_session = !0, u.set("s", "sid", b, !0, void 0, void 0)) : (b = B("s", "sid"), b || (b = D.pa("%s_%s", "ss", this.M), b = B(b, "s"), u.set("s", "sid", b, !0, void 0, void 0)), this.d.session_id = b);
			P(this, "session_id") || (b = D.ya(20), this.d.session_id = b, this.J = this.d.is_new_session = !0, u.set("s", "sid", b, !0, void 0, void 0)); (b = B("v", "nps")) || (b = "0"); ! 0 === this.J && (b *= 1, b++, u.set("v", "nps", b, !0, void 0, void 0));
			this.d.nps = b;
			this.Lb(a);
			this.Mb(a)
		},
		qc: function() {
			return this.options.h
		},
		Mb: function() {
			var a = 1;
			if (!this.J) {
				var b = B("s", "vs");
				b && (b++, a = b)
			}
			u.set("s", "vs", a, void 0, void 0, void 0);
			this.d.serial = a
		},
		Lb: function(a) {
			var b = "";
			P(this, "is_new_session") && (a.get("timestamp"), b = P(this, "last_req") || a.get("timestamp"), b = a.get("timestamp") - b, u.set("s", "tsps", b, void 0, void 0, void 0));
			b || (b = B("s", "tsps") || 0);
			this.d.tsps = b
		}
	},
	t = {
		l: function(b, f, d) {
			b.addEventListener ? D.l = function(a, b, c) {
				a.addEventListener(b, c, !1)
			}: b.attachEvent && (D.l = function(b, c, f) {
				var d = f.Ya = function() {
					var b = a.oc;
					b.target = b.srcElement;
					f(b)
				};
				b.attachEvent("on" + c, d)
			});
			D.l(b, f, d)
		},
		detachEvent: function(a, b, d) {
			a.addEventListener ? D.detachEvent = function(a, b, c) {
				a.removeEventListener(b, c, !1)
			}: a.attachEvent && (D.detachEvent = function(a, b, c) {
				a.attachEvent("on" + b, c.Ya)
			});
			D.detachEvent(a, b, d)
		},
		ca: function() {
			function a(b) { (b = null == b ? "": b.toString()) && (b = encodeURIComponent(b));
				return b
			}
			return function(b) {
				var d = "",
				e;
				for (e in b) if (b[e] instanceof Array) for (var g = 0,
				h = b[e].length; g < h; g++) d += "&" + e + "=" + a(b[e][g]);
				else d += "&" + e + "=" + a(b[e]);
				return d.substr(1)
			}
		} (),
		r: function() {
			return (new Date).getTime()
		},
		R: function(a, b, d) {
			a || (a = "");
			if (!b) return a;
			b -= a.length;
			0 < b ? a = Array(b + 1).join(d || "0") + a: 0 > b && (a = a.substr( - b));
			return a
		},
		ya: function(a) {
			return this.xa(a, 10)
		},
		xa: function(a, b) {
			b || (b = 16);
			var d = (new Date).getTime().toString(b),
			e = d.length;
			if (isNaN(a) || a == e) return d;
			a < e && (e = a / 2, d = this.R(d, e));
			var g = Math.round((a - e) / 2),
			h = Math.pow(10, g) - 1,
			l = this.R(this.Ga(0, h).toString(b), g),
			g = a - e - g,
			h = Math.pow(10, g) - 1,
			e = this.R(this.Ga(0, h).toString(b), g);
			return d + l + e
		},
		ba: function(a) {
			return "string" != typeof a ? a: (a + "").replace(/./g,
			function(a) {
				return 255 < a.charCodeAt(0) ? encodeURIComponent(a) : a
			})
		}
	};
	e.prototype = {
		lb: function(b) {
			b.m = "";
			b.W = "";
			var d = this.ma(this.data.m);
			if ( - 1 < d.index) {
				dataFound = this.data.m[d.index];
				b.m = d.o;
				var e = dataFound.k || dataFound.c,
				d = function(a) {
					return a && -1 < a.indexOf(e) && (a = a.match(new RegExp(e + "\\/(.+?)[\\s)]|$"))) && 1 < a.length ? (b.W = a[1], !0) : !1
				};
				d(a.navigator.userAgent) || d(a.navigator.appVersion)
			}
		},
		qb: function(b) {
			b.t = "";
			b.Da = "";
			var d = this.ma(this.data.t);
			if ( - 1 < d.index) {
				dataFound = this.data.t[d.index];
				b.t = d.o;
				var e = dataFound.k || dataFound.c,
				d = function(a) {
					return - 1 < a.indexOf(e) && (a = a.match(new RegExp(e + "\\s+(.+?)[;)]"))) && 1 < a.length ? (b.Da = a[1], !0) : !1
				};
				d(a.navigator.userAgent) || d(a.navigator.appVersion)
			}
		},
		mb: function(a) {
			a.H = "";
			var b = this.ma(this.data.H); - 1 < b.index && (a.H = b.o)
		},
		ma: function(b) {
			for (var d = {
				index: -1,
				o: ""
			},
			e = 0; e < b.length; e++) {
				var g = b[e],
				h = a.navigator[g.key],
				l = g.Ib;
				if (h) {
					if (h.match(new RegExp(g.e, "i"))) if (g.c instanceof RegExp) {
						if (g = h.match(g.c)) {
							d.o = g[1];
							d.index = e;
							break
						}
					} else {
						d.o = g.c;
						d.index = e;
						break
					}
				} else if (l) {
					d.o = g.c;
					d.index = e;
					break
				}
			}
			return d
		},
		data: {
			m: [{
				key: "userAgent",
				e: "chrome",
				c: "Chrome"
			},
			{
				key: "userAgent",
				e: "silk",
				c: "Silk"
			},
			{
				key: "userAgent",
				e: "omniweb",
				k: "OmniWeb/",
				c: "OmniWeb"
			},
			{
				key: "vendor",
				e: "apple",
				c: "Safari",
				k: "Version"
			},
			{
				Ib: a.opera,
				c: "Opera",
				k: "Version"
			},
			{
				key: "vendor",
				e: "icab",
				c: "iCab"
			},
			{
				key: "vendor",
				e: "kde",
				c: "Konqueror"
			},
			{
				key: "userAgent",
				e: "firefox",
				c: "Firefox"
			},
			{
				key: "vendor",
				e: "camino",
				c: "Camino"
			},
			{
				key: "userAgent",
				e: "netscape",
				c: "Netscape"
			},
			{
				key: "userAgent",
				e: "msie",
				c: "Explorer",
				k: "MSIE"
			},
			{
				key: "userAgent",
				e: "gecko",
				c: "Mozilla",
				k: "rv"
			},
			{
				key: "userAgent",
				e: "mozilla",
				c: "Netscape",
				k: "Mozilla"
			}],
			t: [{
				key: "platform",
				e: "win",
				c: "Windows",
				k: ""
			},
			{
				key: "platform",
				e: "mac",
				c: "Mac"
			},
			{
				key: "userAgent",
				e: "iphone",
				c: "iPhone/iPod"
			},
			{
				key: "userAgent",
				e: "ipad",
				c: "iPad"
			},
			{
				key: "userAgent",
				e: "android",
				c: "Android"
			},
			{
				key: "platform",
				e: "linux",
				c: "Linux"
			}],
			H: [{
				key: "userAgent",
				e: "Lenovo",
				c: /.+ \(.+; (Lenovo .+?) .*?\) /
			}]
		}
	};
	m.Gb()
})(window, document, navigator);