(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {return s;}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				//t.setDate(t.getDate() + days);
				t.setHours(t.getHours() + days + 8); //+ 8解决时区误差问题并以小时为单位设置过期时间
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -24 }));
			return true;
		}
		return false;
	};
	
	$.refreshCookie = function(key, isJson, expires, path){
	    if ($.cookie(key) !== undefined){
	        if(isJson) $.cookie.json = true;
	        expires = expires? expires : 2;
	        path = path? path : '/';
	        $.cookie(key, $.cookie(key), {expires: expires, path: path});
	    }
	};
	
   $.setCookie = function(k, v, isJson, expires, path){
       if(isJson) $.cookie.json = true;
       expires = expires? expires : 2;
       path = path? path : '/';
       $.cookie(k, v, {expires: expires, path: path});
   };
   
   $.getCookie = function(key, isJson){
       if(isJson) $.cookie.json = true;
       return $.cookie(key);
   }
}));(function () {    
    var URL= "/assets/js/ueditor/";
    
    window.UEDITOR_CONFIG = {
        UEDITOR_HOME_URL : URL
        
        ,imageUrl: '/uploads/'
        ,fileUrl: '/uploads/'
        ,iframeCssUrl: '/assets/css/lib/editor_expand.css'
        ,catchRemoteImageEnable: false
        
        , toolbars:[
            ['undo', 'redo', 'insertimage', 'attachment', '|',
             'fontfamily', 'fontsize', 'forecolor', 'backcolor', 'bold', 'italic', 'underline',
             'justifyleft', 'justifycenter', 'justifyright',
             'insertunorderedlist', 'insertorderedlist',
             'removeformat', 'formatmatch'
            ]
        ]
        
        ,allowDivTransToP: false
        ,charset:"utf-8"
        ,autoClearEmptyNode : true
        ,focus:false
        ,allHtmlEnabled:false
        ,wordCount: false
        ,tabSize:4
        ,tabNode:'&nbsp;'
        ,elementPathEnabled : false
        ,maxUndoCount:20
        ,maxInputCount:1
        ,autoHeightEnabled:false
        ,serialize: {
           blackList: {script : 1, meta : 1, iframe : 1, embed : 1, object : 1}
        }
        ,autotypeset:{
            mergeEmptyline : true,
            removeEmptyline : true,
            removeEmptyNode : true,
            removeTagNames : {script: 1, link: 1, html: 1, header: 1, body: 1, meta: 1, style: 1}
        }
    };
})();(function(){function aa(g,a,d){var c;a=a.toLowerCase();return(c=g.__allListeners||d&&(g.__allListeners={}))&&(c[a]||d&&(c[a]=[]))}function W(g,a,d,c,b,h){c=c&&g[a];var f;for(!c&&(c=g[d]);!c&&(f=(f||g).parentNode);){if("BODY"==f.tagName||h&&!h(f))return null;c=f[d]}return c&&b&&!b(c)?W(c,a,d,!1,b):c}UEDITOR_CONFIG=window.UEDITOR_CONFIG||{};var p=window.baidu||{};window.baidu=p;window.UE=p.editor={};UE.plugins={};UE.commands={};UE.instants={};UE.I18N={};UE.version="1.2.6.1";var J=UE.dom={},r=UE.browser=
function(){var g=navigator.userAgent.toLowerCase(),a=window.opera,d={ie:!!window.ActiveXObject,allie:/(msie\s|trident.*rv:)([\w.]+)/.test(g),opera:!!a&&a.version,webkit:-1<g.indexOf(" applewebkit/"),mac:-1<g.indexOf("macintosh"),quirks:"BackCompat"==document.compatMode};d.gecko="Gecko"==navigator.product&&!d.webkit&&!d.opera&&!d.allie;var c=0;d.allie&&(c=1*(g.match(/(msie\s|trident.*rv:)([\w.]+)/)[2]||0),d.ie11Compat=11==document.documentMode,d.ie9Compat=9==document.documentMode,d.ie8=!!document.documentMode,
d.ie8Compat=8==document.documentMode,d.ie7Compat=7==c&&!document.documentMode||7==document.documentMode,d.ie6Compat=7>c||d.quirks,d.ie9above=8<c,d.ie9below=9>c);if(d.gecko){var b=g.match(/rv:([\d\.]+)/);b&&(b=b[1].split("."),c=1E4*b[0]+100*(b[1]||0)+1*(b[2]||0))}/chrome\/(\d+\.\d)/i.test(g)&&(d.chrome=+RegExp.$1);/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(g)&&!/chrome/i.test(g)&&(d.safari=+(RegExp.$1||RegExp.$2));d.opera&&(c=parseFloat(a.version()));d.webkit&&(c=parseFloat(g.match(/ applewebkit\/(\d+)/)[1]));
d.version=c;d.isCompatible=!d.mobile&&(d.ie&&6<=c||d.gecko&&10801<=c||d.opera&&9.5<=c||d.air&&1<=c||d.webkit&&522<=c||!1);return d}(),I=r.ie,ia=r.opera,q=UE.utils={each:function(g,a,d){if(null!=g)if(g.length===+g.length)for(var c=0,b=g.length;c<b;c++){if(!1===a.call(d,g[c],c,g))return!1}else for(c in g)if(g.hasOwnProperty(c)&&!1===a.call(d,g[c],c,g))return!1},makeInstance:function(g){var a=new Function;a.prototype=g;g=new a;a.prototype=null;return g},extend:function(g,a,d){if(a)for(var c in a)d&&
g.hasOwnProperty(c)||(g[c]=a[c]);return g},extend2:function(g){for(var a=arguments,d=1;d<a.length;d++){var c=a[d],b;for(b in c)g.hasOwnProperty(b)||(g[b]=c[b])}return g},inherits:function(g,a){var d=g.prototype,c=q.makeInstance(a.prototype);q.extend(c,d,!0);g.prototype=c;return c.constructor=g},bind:function(g,a){return function(){return g.apply(a,arguments)}},defer:function(g,a,d){var c;return function(){d&&clearTimeout(c);c=setTimeout(g,a)}},indexOf:function(g,a,d){var c=-1;d=this.isNumber(d)?d:
0;this.each(g,function(b,h){if(h>=d&&b===a)return c=h,!1});return c},removeItem:function(g,a){for(var d=0,c=g.length;d<c;d++)g[d]===a&&(g.splice(d,1),d--)},trim:function(g){return g.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g,"")},listToMap:function(g){if(!g)return{};g=q.isArray(g)?g:g.split(",");for(var a=0,d,c={};d=g[a++];)c[d.toUpperCase()]=c[d]=1;return c},unhtml:function(g,a){return g?g.replace(a||/[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g,function(a,c){return c?a:{"<":"&lt;","&":"&amp;",'"':"&quot;",
">":"&gt;","'":"&#39;"}[a]}):""},html:function(g){return g?g.replace(/&((g|l|quo)t|amp|#39);/g,function(a){return{"&lt;":"<","&amp;":"&","&quot;":'"',"&gt;":">","&#39;":"'"}[a]}):""},cssStyleToDomStyle:function(){var g=document.createElement("div").style,a={"float":void 0!=g.cssFloat?"cssFloat":void 0!=g.styleFloat?"styleFloat":"float"};return function(d){return a[d]||(a[d]=d.toLowerCase().replace(/-./g,function(a){return a.charAt(1).toUpperCase()}))}}(),loadFile:function(){function g(d,c){try{for(var b=
0,h;h=a[b++];)if(h.doc===d&&h.url==(c.src||c.href))return h}catch(f){return null}}var a=[];return function(d,c,b){var h=g(d,c);if(h)h.ready?b&&b():h.funs.push(b);else if(a.push({doc:d,url:c.src||c.href,funs:[b]}),!d.body){b=[];for(var f in c)"tag"!=f&&b.push(f+'="'+c[f]+'"');d.write("<"+c.tag+" "+b.join(" ")+" ></"+c.tag+">")}else if(!c.id||!d.getElementById(c.id)){var l=d.createElement(c.tag);delete c.tag;for(f in c)l.setAttribute(f,c[f]);l.onload=l.onreadystatechange=function(){if(!this.readyState||
/loaded|complete/.test(this.readyState)){h=g(d,c);if(0<h.funs.length){h.ready=1;for(var f;f=h.funs.pop();)f()}l.onload=l.onreadystatechange=null}};l.onerror=function(){throw Error("The load "+(c.href||c.src)+" fails,check the url settings of file ueditor.config.js ");};d.getElementsByTagName("head")[0].appendChild(l)}}}(),isEmptyObject:function(g){if(null==g)return!0;if(this.isArray(g)||this.isString(g))return 0===g.length;for(var a in g)if(g.hasOwnProperty(a))return!1;return!0},fixColor:function(g,
a){if(/color/i.test(g)&&/rgba?/.test(a)){var d=a.split(",");if(3<d.length)return"";a="#";for(var c=0,b;b=d[c++];)b=parseInt(b.replace(/[^\d]/gi,""),10).toString(16),a+=1==b.length?"0"+b:b;a=a.toUpperCase()}return a},optCss:function(g){function a(a,c){if(!a)return"";var f=a.top,l=a.bottom,k=a.left,d=a.right,g="";if(f&&k&&l&&d)g+=";"+c+":"+(f==l&&l==k&&k==d?f:f==l&&k==d?f+" "+k:k==d?f+" "+k+" "+l:f+" "+d+" "+l+" "+k)+";";else for(var e in a)g+=";"+c+"-"+e+":"+a[e]+";";return g}var d,c;g=g.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi,
function(a,h,f,l){if(1==l.split(" ").length)switch(h){case "padding":return!d&&(d={}),d[f]=l,"";case "margin":return!c&&(c={}),c[f]=l,"";case "border":return"initial"==l?"":a}return a});g+=a(d,"padding")+a(c,"margin");return g.replace(/^[ \n\r\t;]*|[ \n\r\t]*$/,"").replace(/;([ \n\r\t]+)|\1;/g,";").replace(/(&((l|g)t|quot|#39))?;{2,}/g,function(a,c){return c?c+";;":";"})},clone:function(g,a){var d;a=a||{};for(var c in g)g.hasOwnProperty(c)&&(d=g[c],"object"==typeof d?(a[c]=q.isArray(d)?[]:{},q.clone(g[c],
a[c])):a[c]=d);return a},transUnitToPx:function(g){if(!/(pt|cm)/.test(g))return g;var a;g.replace(/([\d.]+)(\w+)/,function(d,c,b){g=c;a=b});switch(a){case "cm":g=25*parseFloat(g);break;case "pt":g=Math.round(96*parseFloat(g)/72)}return g+(g?"px":"")},domReady:function(){function g(d){for(d.isReady=!0;d=a.pop();d());}var a=[];return function(d,c){c=c||window;var b=c.document;d&&a.push(d);"complete"===b.readyState?g(b):(b.isReady&&g(b),r.ie?(function(){if(!b.isReady){try{b.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,
0);return}g(b)}}(),c.attachEvent("onload",function(){g(b)})):(b.addEventListener("DOMContentLoaded",function(){b.removeEventListener("DOMContentLoaded",arguments.callee,!1);g(b)},!1),c.addEventListener("load",function(){g(b)},!1)))}}(),cssRule:r.ie?function(g,a,d){var c;d=d||document;c=d.indexList?d.indexList:d.indexList={};var b;if(c[g])b=d.styleSheets[c[g]];else{if(void 0===a)return"";b=d.createStyleSheet("",d=d.styleSheets.length);c[g]=d}if(void 0===a)return b.cssText;b.cssText=a||""}:function(g,
a,d){d=d||document;var c=d.getElementsByTagName("head")[0],b;if(!(b=d.getElementById(g))){if(void 0===a)return"";b=d.createElement("style");b.id=g;c.appendChild(b)}if(void 0===a)return b.innerHTML;""!==a?b.innerHTML=a:c.removeChild(b)},sort:function(g,a){a=a||function(f,a){return f.localeCompare(a)};for(var d=0,c=g.length;d<c;d++)for(var b=d,h=g.length;b<h;b++)if(0<a(g[d],g[b])){var f=g[d];g[d]=g[b];g[b]=f}return g}};q.each("String Function Array Number RegExp Object".split(" "),function(g){UE.utils["is"+
g]=function(a){return Object.prototype.toString.apply(a)=="[object "+g+"]"}});var V=UE.EventBase=function(){};V.prototype={addListener:function(g,a){g=q.trim(g).split(" ");for(var d=0,c;c=g[d++];)aa(this,c,!0).push(a)},removeListener:function(g,a){g=q.trim(g).split(" ");for(var d=0,c;c=g[d++];)q.removeItem(aa(this,c)||[],a)},fireEvent:function(){for(var g=arguments[0],g=q.trim(g).split(" "),a=0,d;d=g[a++];){var c=aa(this,d),b,h,f;if(c)for(f=c.length;f--;)if(c[f]){h=c[f].apply(this,arguments);if(!0===
h)return h;void 0!==h&&(b=h)}if(h=this["on"+d.toLowerCase()])b=h.apply(this,arguments)}return b}};var w=J.dtd=function(){function g(f){for(var a in f)f[a.toUpperCase()]=f[a];return f}var a=q.extend2,d=g({isindex:1,fieldset:1}),c=g({input:1,button:1,select:1,textarea:1,label:1}),b=a(g({a:1}),c),h=a({iframe:1},b),f=g({hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1}),l=g({ins:1,del:1,script:1,style:1}),k=a(g({b:1,
acronym:1,bdo:1,"var":1,"#":1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1}),l),n=a(g({sub:1,img:1,embed:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1}),k),m=a(g({p:1}),n),c=a(g({iframe:1}),n,c),n=g({img:1,embed:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,"#":1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,
noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,"var":1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1}),e=a(g({a:0}),c),u=g({tr:1}),v=g({"#":1}),t=a(g({param:1}),n),x=a(g({form:1}),d,h,f,m),F=g({li:1,ol:1,ul:1}),O=g({style:1,script:1}),G=g({base:1,link:1,meta:1,title:1}),O=a(G,O),D=g({head:1,body:1}),r=g({html:1}),p=g({address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,
form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1}),E=g({area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1});return g({$nonBodyContent:a(r,D,G),$block:p,$inline:e,$inlineWithA:a(g({a:1}),e),$body:a(g({script:1,style:1}),p),$cdata:g({script:1,style:1}),$empty:E,$nonChild:g({iframe:1,textarea:1}),$listItem:g({dd:1,dt:1,li:1}),$list:g({ul:1,ol:1,dl:1}),$isNotEmpty:g({table:1,
ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1}),$removeEmpty:g({a:1,abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1}),$removeEmptyBlock:g({p:1,div:1}),$tableContent:g({caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,table:1}),$notTransContent:g({pre:1,script:1,style:1,textarea:1}),
html:D,head:O,style:v,script:v,body:x,base:{},link:{},meta:{},title:v,col:{},tr:g({td:1,th:1}),img:{},embed:{},colgroup:g({thead:1,col:1,tbody:1,tr:1,tfoot:1}),noscript:x,td:x,br:{},th:x,center:x,kbd:e,button:a(m,f),basefont:{},h5:e,h4:e,samp:e,h6:e,ol:F,h1:e,h3:e,option:v,h2:e,form:a(d,h,f,m),select:g({optgroup:1,option:1}),font:e,ins:e,menu:F,abbr:e,label:e,table:g({thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1}),code:e,tfoot:u,cite:e,li:x,input:{},iframe:x,strong:e,textarea:v,noframes:x,
big:e,small:e,span:g({"#":1,br:1,b:1,strong:1,u:1,i:1,em:1,sub:1,sup:1,strike:1,span:1}),hr:e,dt:e,sub:e,optgroup:g({option:1}),param:{},bdo:e,"var":e,div:x,object:t,sup:e,dd:x,strike:e,area:{},dir:F,map:a(g({area:1,form:1,p:1}),d,l,f),applet:t,dl:g({dt:1,dd:1}),del:e,isindex:{},fieldset:a(g({legend:1}),n),thead:u,ul:F,acronym:e,b:e,a:a(g({a:1}),c),blockquote:a(g({td:1,tr:1,tbody:1,li:1}),x),caption:e,i:e,u:e,tbody:u,s:e,address:a(h,m),tt:e,legend:e,q:e,pre:a(k,b),p:a(g({a:1}),e),em:e,dfn:e})}(),
ba=I&&9>r.version?{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder"}:{tabindex:"tabIndex",readonly:"readOnly"},oa=q.listToMap("-webkit-box -moz-box block list-item table table-row-group table-header-group table-footer-group table-row table-column-group table-column table-cell table-caption".split(" ")),e=J.domUtils={NODE_ELEMENT:1,
NODE_DOCUMENT:9,NODE_TEXT:3,NODE_COMMENT:8,NODE_DOCUMENT_FRAGMENT:11,POSITION_IDENTICAL:0,POSITION_DISCONNECTED:1,POSITION_FOLLOWING:2,POSITION_PRECEDING:4,POSITION_IS_CONTAINED:8,POSITION_CONTAINS:16,fillChar:I&&"6"==r.version?"\ufeff":"\u200b",keys:{8:1,46:1,16:1,17:1,18:1,37:1,38:1,39:1,40:1,13:1},getPosition:function(e,a){if(e===a)return 0;var d,c=[e],b=[a];for(d=e;d=d.parentNode;){if(d===a)return 10;c.push(d)}for(d=a;d=d.parentNode;){if(d===e)return 20;b.push(d)}c.reverse();b.reverse();if(c[0]!==
b[0])return 1;for(d=-1;d++,c[d]===b[d];);e=c[d];for(a=b[d];e=e.nextSibling;)if(e===a)return 4;return 2},getNodeIndex:function(e,a){for(var d=e,c=0;d=d.previousSibling;)a&&3==d.nodeType?d.nodeType!=d.nextSibling.nodeType&&c++:c++;return c},inDoc:function(g,a){return 10==e.getPosition(g,a)},findParent:function(g,a,d){if(g&&!e.isBody(g))for(g=d?g:g.parentNode;g;){if(!a||a(g)||e.isBody(g))return a&&!a(g)&&e.isBody(g)?null:g;g=g.parentNode}return null},findParentByTagName:function(g,a,d,c){a=q.listToMap(q.isArray(a)?
a:[a]);return e.findParent(g,function(b){return a[b.tagName]&&!(c&&c(b))},d)},findParents:function(g,a,d,c){for(a=a&&(d&&d(g)||!d)?[g]:[];g=e.findParent(g,d);)a.push(g);return c?a:a.reverse()},insertAfter:function(e,a){return e.parentNode.insertBefore(a,e.nextSibling)},remove:function(e,a){var d=e.parentNode,c;if(d){if(a&&e.hasChildNodes())for(;c=e.firstChild;)d.insertBefore(c,e);d.removeChild(e)}return e},getNextDomNode:function(e,a,d,c){return W(e,"firstChild","nextSibling",a,d,c)},isBookmarkNode:function(e){return 1==
e.nodeType&&e.id&&/^_baidu_bookmark_/i.test(e.id)},getWindow:function(e){e=e.ownerDocument||e;return e.defaultView||e.parentWindow},getCommonAncestor:function(e,a){if(e===a)return e;for(var d=[e],c=[a],b=e,h=-1;b=b.parentNode;){if(b===a)return b;d.push(b)}for(b=a;b=b.parentNode;){if(b===e)return b;c.push(b)}d.reverse();for(c.reverse();h++,d[h]===c[h];);return 0==h?null:d[h-1]},clearEmptySibling:function(g,a,d){function c(a,c){for(var f;a&&!e.isBookmarkNode(a)&&(e.isEmptyInlineElement(a)||!RegExp("[^\t\n\r"+
e.fillChar+"]").test(a.nodeValue));)f=a[c],e.remove(a),a=f}!a&&c(g.nextSibling,"nextSibling");!d&&c(g.previousSibling,"previousSibling")},split:function(g,a){var d=g.ownerDocument;if(r.ie&&a==g.nodeValue.length){var c=d.createTextNode("");return e.insertAfter(g,c)}c=g.splitText(a);r.ie8&&(d=d.createTextNode(""),e.insertAfter(c,d),e.remove(d));return c},isWhitespace:function(g){return!RegExp("[^ \t\n\r"+e.fillChar+"]").test(g.nodeValue)},getXY:function(e){for(var a=0,d=0;e.offsetParent;)d+=e.offsetTop,
a+=e.offsetLeft,e=e.offsetParent;return{x:a,y:d}},on:function(e,a,d){var c=q.isArray(a)?a:[a],b=c.length;if(b)for(;b--;)if(a=c[b],e.addEventListener)e.addEventListener(a,d,!1);else{d._d||(d._d={els:[]});var h=a+d.toString(),f=q.indexOf(d._d.els,e);d._d[h]&&-1!=f||(-1==f&&d._d.els.push(e),d._d[h]||(d._d[h]=function(f){return d.call(f.srcElement,f||window.event)}),e.attachEvent("on"+a,d._d[h]))}e=null},un:function(e,a,d){var c=q.isArray(a)?a:[a],b=c.length;if(b)for(;b--;)if(a=c[b],e.removeEventListener)e.removeEventListener(a,
d,!1);else{var h=a+d.toString();try{e.detachEvent("on"+a,d._d?d._d[h]:d)}catch(f){}d._d&&d._d[h]&&(a=q.indexOf(d._d.els,e),-1!=a&&d._d.els.splice(a,1),0==d._d.els.length&&delete d._d[h])}},isSameElement:function(g,a){if(g.tagName!=a.tagName)return!1;var d=g.attributes,c=a.attributes;if(!I&&d.length!=c.length)return!1;for(var b,h,f=0,l=0,k=0;b=d[k++];){if("style"==b.nodeName)if(b.specified&&f++,e.isSameStyle(g,a))continue;else return!1;if(I)if(b.specified)f++,h=c.getNamedItem(b.nodeName);else continue;
else h=a.attributes[b.nodeName];if(!h.specified||b.nodeValue!=h.nodeValue)return!1}if(I){for(k=0;h=c[k++];)h.specified&&l++;if(f!=l)return!1}return!0},isSameStyle:function(e,a){var d=e.style.cssText.replace(/( ?; ?)/g,";").replace(/( ?: ?)/g,":"),c=a.style.cssText.replace(/( ?; ?)/g,";").replace(/( ?: ?)/g,":");if(r.opera){d=e.style;c=a.style;if(d.length!=c.length)return!1;for(var b in d)if(!/^(\d+|csstext)$/i.test(b)&&d[b]!=c[b])return!1;return!0}if(!d||!c)return d==c;d=d.split(";");c=c.split(";");
if(d.length!=c.length)return!1;b=0;for(var h;h=d[b++];)if(-1==q.indexOf(c,h))return!1;return!0},isBlockElm:function(g){return 1==g.nodeType&&(w.$block[g.tagName]||oa[e.getComputedStyle(g,"display")])&&!w.$nonChild[g.tagName]},isBody:function(e){return e&&1==e.nodeType&&"body"==e.tagName.toLowerCase()},breakParent:function(g,a){var d,c=g,b=g,h,f;do{c=c.parentNode;h?(d=c.cloneNode(!1),d.appendChild(h),h=d,d=c.cloneNode(!1),d.appendChild(f),f=d):(h=c.cloneNode(!1),f=h.cloneNode(!1));for(;d=b.previousSibling;)h.insertBefore(d,
h.firstChild);for(;d=b.nextSibling;)f.appendChild(d);b=c}while(a!==c);d=a.parentNode;d.insertBefore(h,a);d.insertBefore(f,a);d.insertBefore(g,f);e.remove(a);return g},isEmptyInlineElement:function(g){if(1!=g.nodeType||!w.$removeEmpty[g.tagName])return 0;for(g=g.firstChild;g;){if(e.isBookmarkNode(g)||1==g.nodeType&&!e.isEmptyInlineElement(g)||3==g.nodeType&&!e.isWhitespace(g))return 0;g=g.nextSibling}return 1},trimWhiteTextNode:function(g){function a(a){for(var c;(c=g[a])&&3==c.nodeType&&e.isWhitespace(c);)g.removeChild(c)}
a("firstChild");a("lastChild")},mergeChild:function(g,a,d){a=e.getElementsByTagName(g,g.tagName.toLowerCase());for(var c=0,b;b=a[c++];)if(b.parentNode&&!e.isBookmarkNode(b))if("span"==b.tagName.toLowerCase()){if(g===b.parentNode&&(e.trimWhiteTextNode(g),1==g.childNodes.length)){g.style.cssText=b.style.cssText+";"+g.style.cssText;e.remove(b,!0);continue}b.style.cssText=g.style.cssText+";"+b.style.cssText;if(d){var h=d.style;if(h)for(var h=h.split(";"),f=0,l;l=h[f++];)b.style[q.cssStyleToDomStyle(l.split(":")[0])]=
l.split(":")[1]}e.isSameStyle(b,g)&&e.remove(b,!0)}else e.isSameElement(g,b)&&e.remove(b,!0)},getElementsByTagName:function(g,a,d){if(d&&q.isString(d)){var c=d;d=function(f){return e.hasClass(f,c)}}a=q.trim(a).replace(/[ ]{2,}/g," ").split(" ");for(var b=[],h=0,f;f=a[h++];){f=g.getElementsByTagName(f);for(var l=0,k;k=f[l++];)d&&!d(k)||b.push(k)}return b},mergeToParent:function(g){for(var a=g.parentNode;a&&w.$removeEmpty[a.tagName];){if(a.tagName==g.tagName||"A"==a.tagName){e.trimWhiteTextNode(a);
if("SPAN"==a.tagName&&!e.isSameStyle(a,g)||"A"==a.tagName&&"SPAN"==g.tagName)if(1<a.childNodes.length||a!==g.parentNode){g.style.cssText=a.style.cssText+";"+g.style.cssText;a=a.parentNode;continue}else a.style.cssText+=";"+g.style.cssText,"A"==a.tagName&&(a.style.textDecoration="underline");if("A"!=a.tagName){a===g.parentNode&&e.remove(g,!0);break}}a=a.parentNode}},mergeSibling:function(g,a,d){function c(a,c,f){var l;if((l=f[a])&&!e.isBookmarkNode(l)&&1==l.nodeType&&e.isSameElement(f,l)){for(;l.firstChild;)"firstChild"==
c?f.insertBefore(l.lastChild,f.firstChild):f.appendChild(l.firstChild);e.remove(l)}}!a&&c("previousSibling","firstChild",g);!d&&c("nextSibling","lastChild",g)},unSelectable:I||r.opera?function(e){e.onselectstart=function(){return!1};e.onclick=e.onkeyup=e.onkeydown=function(){return!1};e.unselectable="on";e.setAttribute("unselectable","on");for(var a=0,d;d=e.all[a++];)switch(d.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:d.unselectable="on",e.setAttribute("unselectable",
"on")}}:function(e){e.style.MozUserSelect=e.style.webkitUserSelect=e.style.KhtmlUserSelect="none"},removeAttributes:function(e,a){a=q.isArray(a)?a:q.trim(a).replace(/[ ]{2,}/g," ").split(" ");for(var d=0,c;c=a[d++];){c=ba[c]||c;switch(c){case "className":e[c]="";break;case "style":e.style.cssText="";var b=e.getAttributeNode("style");!r.ie&&b&&e.removeAttributeNode(b)}e.removeAttribute(c)}},createElement:function(g,a,d){return e.setAttributes(g.createElement(a),d)},setAttributes:function(e,a){for(var d in a)if(a.hasOwnProperty(d)){var c=
a[d];switch(d){case "class":e.className=c;break;case "style":e.style.cssText=e.style.cssText+";"+c;break;case "innerHTML":e[d]=c;break;case "value":e.value=c;break;default:e.setAttribute(ba[d]||d,c)}}return e},getComputedStyle:function(g,a){if(-1<"width height top left".indexOf(a))return g["offset"+a.replace(/^\w/,function(a){return a.toUpperCase()})]+"px";3==g.nodeType&&(g=g.parentNode);if(r.ie&&9>r.version&&"font-size"==a&&!g.style.fontSize&&!w.$empty[g.tagName]&&!w.$nonChild[g.tagName]){var d=
g.ownerDocument.createElement("span");d.style.cssText="padding:0;border:0;font-family:simsun;";d.innerHTML=".";g.appendChild(d);var c=d.offsetHeight;g.removeChild(d);d=null;return c+"px"}try{d=e.getStyle(g,a)||(window.getComputedStyle?e.getWindow(g).getComputedStyle(g,"").getPropertyValue(a):(g.currentStyle||g.style)[q.cssStyleToDomStyle(a)])}catch(b){return""}return q.transUnitToPx(q.fixColor(a,d))},removeClasses:function(g,a){a=q.isArray(a)?a:q.trim(a).replace(/[ ]{2,}/g," ").split(" ");for(var d=
0,c,b=g.className;c=a[d++];)b=b.replace(RegExp("\\b"+c+"\\b"),"");(b=q.trim(b).replace(/[ ]{2,}/g," "))?g.className=b:e.removeAttributes(g,["class"])},addClass:function(e,a){if(e){a=q.trim(a).replace(/[ ]{2,}/g," ").split(" ");for(var d=0,c,b=e.className;c=a[d++];)RegExp("\\b"+c+"\\b").test(b)||(e.className+=" "+c)}},hasClass:function(e,a){if(q.isRegExp(a))return a.test(e.className);a=q.trim(a).replace(/[ ]{2,}/g," ").split(" ");for(var d=0,c,b=e.className;c=a[d++];)if(!RegExp("\\b"+c+"\\b","i").test(b))return!1;
return d-1==a.length},preventDefault:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},removeStyle:function(g,a){r.ie?("color"==a&&(a="(^|;)"+a),g.style.cssText=g.style.cssText.replace(RegExp(a+"[^:]*:[^;]+;?","ig"),"")):g.style.removeProperty?g.style.removeProperty(a):g.style.removeAttribute(q.cssStyleToDomStyle(a));g.style.cssText||e.removeAttributes(g,["style"])},getStyle:function(e,a){var d=e.style[q.cssStyleToDomStyle(a)];return q.fixColor(a,d)},setStyle:function(e,a,d){e.style[q.cssStyleToDomStyle(a)]=
d;q.trim(e.style.cssText)||this.removeAttributes(e,"style")},setStyles:function(g,a){for(var d in a)a.hasOwnProperty(d)&&e.setStyle(g,d,a[d])},removeDirtyAttr:function(e){for(var a=0,d,c=e.getElementsByTagName("*");d=c[a++];)d.removeAttribute("_moz_dirty");e.removeAttribute("_moz_dirty")},getChildCount:function(e,a){var d=0,c=e.firstChild;for(a=a||function(){return 1};c;)a(c)&&d++,c=c.nextSibling;return d},isEmptyNode:function(g){return!g.firstChild||0==e.getChildCount(g,function(a){return!e.isBr(a)&&
!e.isBookmarkNode(a)&&!e.isWhitespace(a)})},clearSelectedArr:function(g){for(var a;a=g.pop();)e.removeAttributes(a,["class"])},scrollToView:function(g,a,d){var c=function(){var c=a.document,d="CSS1Compat"==c.compatMode;return{width:(d?c.documentElement.clientWidth:c.body.clientWidth)||0,height:(d?c.documentElement.clientHeight:c.body.clientHeight)||0}}().height;d=-1*c+d+(g.offsetHeight||0);g=e.getXY(g);d+=g.y;g=function(a){if("pageXOffset"in a)return{x:a.pageXOffset||0,y:a.pageYOffset||0};a=a.document;
return{x:a.documentElement.scrollLeft||a.body.scrollLeft||0,y:a.documentElement.scrollTop||a.body.scrollTop||0}}(a).y;(d>g||d<g-c)&&a.scrollTo(0,d+(0>d?-20:20))},isBr:function(e){return 1==e.nodeType&&"BR"==e.tagName},isFillChar:function(g,a){return 3==g.nodeType&&!g.nodeValue.replace(RegExp((a?"^":"")+e.fillChar),"").length},isStartInblock:function(g){g=g.cloneRange();var a=0,d=g.startContainer,c;if(1==d.nodeType&&d.childNodes[g.startOffset])for(var d=d.childNodes[g.startOffset],b=d.previousSibling;b&&
e.isFillChar(b);)d=b,b=b.previousSibling;this.isFillChar(d,!0)&&1==g.startOffset&&(g.setStartBefore(d),d=g.startContainer);for(;d&&e.isFillChar(d);)c=d,d=d.previousSibling;c&&(g.setStartBefore(c),d=g.startContainer);for(1==d.nodeType&&(e.isEmptyNode(d)&&1==g.startOffset)&&g.setStart(d,0).collapse(!0);!g.startOffset;){d=g.startContainer;if(e.isBlockElm(d)||e.isBody(d)){a=1;break}var b=g.startContainer.previousSibling,h;if(b){for(;b&&e.isFillChar(b);)h=b,b=b.previousSibling;h?g.setStartBefore(h):g.setStartBefore(g.startContainer)}else g.setStartBefore(g.startContainer)}return a&&
!e.isBody(g.startContainer)?1:0},isEmptyBlock:function(g,a){if(1!=g.nodeType)return 0;a=a||RegExp("[ \t\r\n"+e.fillChar+"]","g");if(0<g[r.ie?"innerText":"textContent"].replace(a,"").length)return 0;for(var d in w.$isNotEmpty)if(g.getElementsByTagName(d).length)return 0;return 1},setViewportOffset:function(e,a){var d=parseInt(e.style.left)|0,c=parseInt(e.style.top)|0,b=e.getBoundingClientRect(),h=a.left-b.left,b=a.top-b.top;h&&(e.style.left=d+h+"px");b&&(e.style.top=c+b+"px")},fillNode:function(g,
a){var d=r.ie?g.createTextNode(e.fillChar):g.createElement("br");a.innerHTML="";a.appendChild(d)},moveChild:function(e,a,d){for(;e.firstChild;)d&&a.firstChild?a.insertBefore(e.lastChild,a.firstChild):a.appendChild(e.firstChild)},hasNoAttributes:function(e){return r.ie?/^<\w+\s*?>/.test(e.outerHTML):0==e.attributes.length},isCustomeNode:function(e){return 1==e.nodeType&&e.getAttribute("_ue_custom_node_")},isTagNode:function(e,a){return 1==e.nodeType&&RegExp("\\b"+e.tagName+"\\b","i").test(a)},filterNodeList:function(e,
a,d){var c=[];if(!q.isFunction(a)){var b=a;a=function(a){return-1!=q.indexOf(q.isArray(b)?b:b.split(" "),a.tagName.toLowerCase())}}q.each(e,function(b){a(b)&&c.push(b)});return 0==c.length?null:1!=c.length&&d?c:c[0]},isInNodeEndBoundary:function(e,a){var d=e.startContainer;if(3==d.nodeType&&e.startOffset!=d.nodeValue.length||1==d.nodeType&&e.startOffset!=d.childNodes.length)return 0;for(;d!==a;){if(d.nextSibling)return 0;d=d.parentNode}return 1},isBoundaryNode:function(g,a){for(var d;!e.isBody(g);)if(d=
g,g=g.parentNode,d!==g[a])return!1;return!0}},R=RegExp(e.fillChar,"g");(function(){function g(f){return!f.collapsed&&1==f.startContainer.nodeType&&f.startContainer===f.endContainer&&1==f.endOffset-f.startOffset}function a(f,a,c,b){1==a.nodeType&&(w.$empty[a.tagName]||w.$nonChild[a.tagName])&&(c=e.getNodeIndex(a)+(f?0:1),a=a.parentNode);f?(b.startContainer=a,b.startOffset=c,b.endContainer||b.collapse(!0)):(b.endContainer=a,b.endOffset=c,b.startContainer||b.collapse(!1));b.collapsed=b.startContainer&&
b.endContainer&&b.startContainer===b.endContainer&&b.startOffset==b.endOffset;return b}function d(f,a){var c=f.startContainer,b=f.endContainer,k=f.startOffset,l=f.endOffset,d=f.document,h=d.createDocumentFragment(),g,G;1==c.nodeType&&(c=c.childNodes[k]||(g=c.appendChild(d.createTextNode(""))));1==b.nodeType&&(b=b.childNodes[l]||(G=b.appendChild(d.createTextNode(""))));if(c===b&&3==c.nodeType)return h.appendChild(d.createTextNode(c.substringData(k,l-k))),a&&(c.deleteData(k,l-k),f.collapse(!0)),h;for(var q,
r,p=h,E=e.findParents(c,!0),w=e.findParents(b,!0),z=0;E[z]==w[z];)z++;for(var A=z,K;K=E[A];A++){q=K.nextSibling;K==c?g||(3==f.startContainer.nodeType?(p.appendChild(d.createTextNode(c.nodeValue.slice(k))),a&&c.deleteData(k,c.nodeValue.length-k)):p.appendChild(a?c:c.cloneNode(!0))):(r=K.cloneNode(!1),p.appendChild(r));for(;q&&q!==b&&q!==w[A];)K=q.nextSibling,p.appendChild(a?q:q.cloneNode(!0)),q=K;p=r}p=h;E[z]||(p.appendChild(E[z-1].cloneNode(!1)),p=p.firstChild);for(A=z;k=w[A];A++){q=k.previousSibling;
k==b?G||3!=f.endContainer.nodeType||(p.appendChild(d.createTextNode(b.substringData(0,l))),a&&b.deleteData(0,l)):(r=k.cloneNode(!1),p.appendChild(r));if(A!=z||!E[z])for(;q&&q!==c;)k=q.previousSibling,p.insertBefore(a?q:q.cloneNode(!0),p.firstChild),q=k;p=r}a&&f.setStartBefore(w[z]?E[z]?w[z]:E[z-1]:w[z-1]).collapse(!0);g&&e.remove(g);G&&e.remove(G);return h}function c(f,a){try{if(l&&e.inDoc(l,f))if(l.nodeValue.replace(R,"").length)l.nodeValue=l.nodeValue.replace(R,"");else{var c=l.parentNode;for(e.remove(l);c&&
e.isEmptyInlineElement(c)&&(r.safari?!(e.getPosition(c,a)&e.POSITION_CONTAINS):!c.contains(a));)l=c.parentNode,e.remove(c),c=l}}catch(b){}}function b(f,a){var c;for(f=f[a];f&&e.isFillChar(f);)c=f[a],e.remove(f),f=c}var h=0,f=e.fillChar,l,k=J.Range=function(f){this.startContainer=this.startOffset=this.endContainer=this.endOffset=null;this.document=f;this.collapsed=!0};k.prototype={cloneContents:function(){return this.collapsed?null:d(this,0)},deleteContents:function(){var f;this.collapsed||d(this,
1);r.webkit&&(f=this.startContainer,3!=f.nodeType||f.nodeValue.length||(this.setStartBefore(f).collapse(!0),e.remove(f)));return this},extractContents:function(){return this.collapsed?null:d(this,2)},setStart:function(f,c){return a(!0,f,c,this)},setEnd:function(f,c){return a(!1,f,c,this)},setStartAfter:function(f){return this.setStart(f.parentNode,e.getNodeIndex(f)+1)},setStartBefore:function(f){return this.setStart(f.parentNode,e.getNodeIndex(f))},setEndAfter:function(f){return this.setEnd(f.parentNode,
e.getNodeIndex(f)+1)},setEndBefore:function(f){return this.setEnd(f.parentNode,e.getNodeIndex(f))},setStartAtFirst:function(f){return this.setStart(f,0)},setStartAtLast:function(f){return this.setStart(f,3==f.nodeType?f.nodeValue.length:f.childNodes.length)},setEndAtFirst:function(f){return this.setEnd(f,0)},setEndAtLast:function(f){return this.setEnd(f,3==f.nodeType?f.nodeValue.length:f.childNodes.length)},selectNode:function(f){return this.setStartBefore(f).setEndAfter(f)},selectNodeContents:function(f){return this.setStart(f,
0).setEndAtLast(f)},cloneRange:function(){return(new k(this.document)).setStart(this.startContainer,this.startOffset).setEnd(this.endContainer,this.endOffset)},collapse:function(f){f?(this.endContainer=this.startContainer,this.endOffset=this.startOffset):(this.startContainer=this.endContainer,this.startOffset=this.endOffset);this.collapsed=!0;return this},shrinkBoundary:function(f){function a(f){return 1==f.nodeType&&!e.isBookmarkNode(f)&&!w.$empty[f.tagName]&&!w.$nonChild[f.tagName]}for(var c,b=
this.collapsed;1==this.startContainer.nodeType&&(c=this.startContainer.childNodes[this.startOffset])&&a(c);)this.setStart(c,0);if(b)return this.collapse(!0);if(!f)for(;1==this.endContainer.nodeType&&0<this.endOffset&&(c=this.endContainer.childNodes[this.endOffset-1])&&a(c);)this.setEnd(c,c.childNodes.length);return this},getCommonAncestor:function(f,a){var c=this.startContainer,b=this.endContainer;return c===b?f&&g(this)&&(c=c.childNodes[this.startOffset],1==c.nodeType)?c:a&&3==c.nodeType?c.parentNode:
c:e.getCommonAncestor(c,b)},trimBoundary:function(f){this.txtToElmBoundary();var a=this.startContainer,c=this.startOffset,b=this.collapsed,k=this.endContainer;if(3==a.nodeType){if(0==c)this.setStartBefore(a);else if(c>=a.nodeValue.length)this.setStartAfter(a);else{var l=e.split(a,c);a===k?this.setEnd(l,this.endOffset-c):a.parentNode===k&&(this.endOffset+=1);this.setStartBefore(l)}if(b)return this.collapse(!0)}f||(c=this.endOffset,k=this.endContainer,3==k.nodeType&&(0==c?this.setEndBefore(k):(c<k.nodeValue.length&&
e.split(k,c),this.setEndAfter(k))));return this},txtToElmBoundary:function(f){function a(f,c){var b=f[c+"Container"],k=f[c+"Offset"];if(3==b.nodeType)if(!k)f["set"+c.replace(/(\w)/,function(f){return f.toUpperCase()})+"Before"](b);else if(k>=b.nodeValue.length)f["set"+c.replace(/(\w)/,function(f){return f.toUpperCase()})+"After"](b)}if(f||!this.collapsed)a(this,"start"),a(this,"end");return this},insertNode:function(f){var a=f,c=1;11==f.nodeType&&(a=f.firstChild,c=f.childNodes.length);this.trimBoundary(!0);
var b=this.startContainer,k=b.childNodes[this.startOffset];k?b.insertBefore(f,k):b.appendChild(f);a.parentNode===this.endContainer&&(this.endOffset+=c);return this.setStartBefore(a)},setCursor:function(f,a){return this.collapse(!f).select(a)},createBookmark:function(f,a){var c,b=this.document.createElement("span");b.style.cssText="display:none;line-height:0px;";b.appendChild(this.document.createTextNode("\u200d"));b.id="_baidu_bookmark_start_"+(a?"":h++);this.collapsed||(c=b.cloneNode(!0),c.id="_baidu_bookmark_end_"+
(a?"":h++));this.insertNode(b);c&&this.collapse().insertNode(c).setEndBefore(c);this.setStartAfter(b);return{start:f?b.id:b,end:c?f?c.id:c:null,id:f}},moveToBookmark:function(f){var a=f.id?this.document.getElementById(f.start):f.start;f=f.end&&f.id?this.document.getElementById(f.end):f.end;this.setStartBefore(a);e.remove(a);f?(this.setEndBefore(f),e.remove(f)):this.collapse(!0);return this},enlarge:function(f,a){var c=e.isBody,b,k,l=this.document.createTextNode("");if(f){k=this.startContainer;1==
k.nodeType?k.childNodes[this.startOffset]?b=k=k.childNodes[this.startOffset]:(k.appendChild(l),b=k=l):b=k;for(;;){if(e.isBlockElm(k)){for(k=b;(b=k.previousSibling)&&!e.isBlockElm(b);)k=b;this.setStartBefore(k);break}b=k;k=k.parentNode}k=this.endContainer;1==k.nodeType?((b=k.childNodes[this.endOffset])?k.insertBefore(l,b):k.appendChild(l),b=k=l):b=k;for(;;){if(e.isBlockElm(k)){for(k=b;(b=k.nextSibling)&&!e.isBlockElm(b);)k=b;this.setEndAfter(k);break}b=k;k=k.parentNode}l.parentNode===this.endContainer&&
this.endOffset--;e.remove(l)}if(!this.collapsed){for(;!(0!=this.startOffset||a&&a(this.startContainer)||c(this.startContainer));)this.setStartBefore(this.startContainer);for(;!(this.endOffset!=(1==this.endContainer.nodeType?this.endContainer.childNodes.length:this.endContainer.nodeValue.length)||a&&a(this.endContainer)||c(this.endContainer));)this.setEndAfter(this.endContainer)}return this},adjustmentBoundary:function(){if(!this.collapsed){for(;!e.isBody(this.startContainer)&&this.startOffset==this.startContainer[3==
this.startContainer.nodeType?"nodeValue":"childNodes"].length&&this.startContainer[3==this.startContainer.nodeType?"nodeValue":"childNodes"].length;)this.setStartAfter(this.startContainer);for(;!e.isBody(this.endContainer)&&!this.endOffset&&this.endContainer[3==this.endContainer.nodeType?"nodeValue":"childNodes"].length;)this.setEndBefore(this.endContainer)}return this},applyInlineStyle:function(f,a,c){if(this.collapsed)return this;this.trimBoundary().enlarge(!1,function(f){return 1==f.nodeType&&
e.isBlockElm(f)}).adjustmentBoundary();for(var b=this.createBookmark(),k=b.end,l=function(f){return 1==f.nodeType?"br"!=f.tagName.toLowerCase():!e.isWhitespace(f)},d=e.getNextDomNode(b.start,!1,l),h,g,G=this.cloneRange();d&&e.getPosition(d,k)&e.POSITION_PRECEDING;)if(3==d.nodeType||w[f][d.tagName]){G.setStartBefore(d);for(h=d;h&&(3==h.nodeType||w[f][h.tagName])&&h!==k;)g=h,h=e.getNextDomNode(h,1==h.nodeType,null,function(a){return w[f][a.tagName]});var d=G.setEndAfter(g).extractContents(),q;if(c&&
0<c.length){var r;r=q=c[0].cloneNode(!1);for(var p=1,E;E=c[p++];)q.appendChild(E.cloneNode(!1)),q=q.firstChild}else q=G.document.createElement(f);a&&e.setAttributes(q,a);q.appendChild(d);G.insertNode(c?r:q);var C;"span"==f&&a.style&&/text\-decoration/.test(a.style)&&(C=e.findParentByTagName(q,"a",!0))?(e.setAttributes(C,a),e.remove(q,!0),q=C):(e.mergeSibling(q),e.clearEmptySibling(q));try{e.mergeChild(q,f,a)}catch(z){e.mergeChild(q,a)}d=e.getNextDomNode(q,!1,l);e.mergeToParent(q);if(h===k)break}else d=
e.getNextDomNode(d,!0,l);return this.moveToBookmark(b)},removeInlineStyle:function(f){if(this.collapsed)return this;f=q.isArray(f)?f:[f];this.shrinkBoundary().adjustmentBoundary();for(var a=this.startContainer,c=this.endContainer;;){if(1==a.nodeType){if(-1<q.indexOf(f,a.tagName.toLowerCase()))break;if("body"==a.tagName.toLowerCase()){a=null;break}}a=a.parentNode}for(;;){if(1==c.nodeType){if(-1<q.indexOf(f,c.tagName.toLowerCase()))break;if("body"==c.tagName.toLowerCase()){c=null;break}}c=c.parentNode}var b=
this.createBookmark(),k,l;a&&(l=this.cloneRange().setEndBefore(b.start).setStartBefore(a),k=l.extractContents(),l.insertNode(k),e.clearEmptySibling(a,!0),a.parentNode.insertBefore(b.start,a));c&&(l=this.cloneRange().setStartAfter(b.end).setEndAfter(c),k=l.extractContents(),l.insertNode(k),e.clearEmptySibling(c,!1,!0),c.parentNode.insertBefore(b.end,c.nextSibling));for(a=e.getNextDomNode(b.start,!1,function(f){return 1==f.nodeType});a&&a!==b.end;)c=e.getNextDomNode(a,!0,function(f){return 1==f.nodeType}),
-1<q.indexOf(f,a.tagName.toLowerCase())&&e.remove(a,!0),a=c;return this.moveToBookmark(b)},getClosedNode:function(){var f;if(!this.collapsed){var a=this.cloneRange().adjustmentBoundary().shrinkBoundary();g(a)&&(a=a.startContainer.childNodes[a.startOffset])&&(1==a.nodeType&&(w.$empty[a.tagName]||w.$nonChild[a.tagName]))&&(f=a)}return f},select:r.ie?function(a,k){var d;this.collapsed||this.shrinkBoundary();var h=this.getClosedNode();if(h&&!k){try{d=this.document.body.createControlRange(),d.addElement(h),
d.select()}catch(g){}return this}var h=this.createBookmark(),t=h.start;d=this.document.body.createTextRange();d.moveToElementText(t);d.moveStart("character",1);if(!this.collapsed){var x=this.document.body.createTextRange(),t=h.end;x.moveToElementText(t);d.setEndPoint("EndToEnd",x)}else if(!a&&3!=this.startContainer.nodeType){var x=this.document.createTextNode(f),F=this.document.createElement("span");F.appendChild(this.document.createTextNode(f));t.parentNode.insertBefore(F,t);t.parentNode.insertBefore(x,
t);c(this.document,x);l=x;b(F,"previousSibling");b(t,"nextSibling");d.moveStart("character",-1);d.collapse(!0)}this.moveToBookmark(h);F&&e.remove(F);try{d.select()}catch(q){}return this}:function(a){function k(f){function a(c,b,k){3==c.nodeType&&c.nodeValue.length<b&&(f[k+"Offset"]=c.nodeValue.length)}a(f.startContainer,f.startOffset,"start");a(f.endContainer,f.endOffset,"end")}var d=e.getWindow(this.document),h=d.getSelection();r.gecko?this.document.body.focus():d.focus();if(h){h.removeAllRanges();
this.collapsed&&!a&&(a=d=this.startContainer,1==d.nodeType&&(a=d.childNodes[this.startOffset]),3==d.nodeType&&this.startOffset||(a?a.previousSibling&&3==a.previousSibling.nodeType:d.lastChild&&3==d.lastChild.nodeType)||(a=this.document.createTextNode(f),this.insertNode(a),c(this.document,a),b(a,"previousSibling"),b(a,"nextSibling"),l=a,this.setStart(a,r.webkit?1:0).collapse(!0)));d=this.document.createRange();if(this.collapsed&&r.opera&&1==this.startContainer.nodeType)if(a=this.startContainer.childNodes[this.startOffset]){for(;a&&
e.isBlockElm(a);)if(1==a.nodeType&&a.childNodes[0])a=a.childNodes[0];else break;a&&this.setStartBefore(a).collapse(!0)}else(a=this.startContainer.lastChild)&&e.isBr(a)&&this.setStartBefore(a).collapse(!0);k(this);d.setStart(this.startContainer,this.startOffset);d.setEnd(this.endContainer,this.endOffset);h.addRange(d)}return this},scrollToView:function(f,a){f=f?window:e.getWindow(this.document);var c=this.document.createElement("span");c.innerHTML="&nbsp;";this.cloneRange().insertNode(c);e.scrollToView(c,
f,a);e.remove(c);return this},inFillChar:function(){var f=this.startContainer;return this.collapsed&&3==f.nodeType&&f.nodeValue.replace(RegExp("^"+e.fillChar),"").length+1==f.nodeValue.length?!0:!1},createAddress:function(f,a){function c(f){for(var b=f?k.startContainer:k.endContainer,l=e.findParents(b,!0,function(f){return!e.isBody(f)}),d=[],h=0,n;n=l[h++];)d.push(e.getNodeIndex(n,a));l=0;if(a)if(3==b.nodeType){for(b=b.previousSibling;b&&3==b.nodeType;)l+=b.nodeValue.replace(R,"").length,b=b.previousSibling;
l+=f?k.startOffset:k.endOffset}else if(b=b.childNodes[f?k.startOffset:k.endOffset])l=e.getNodeIndex(b,a);else for(b=f?k.startContainer:k.endContainer,f=b.firstChild;f;)if(e.isFillChar(f))f=f.nextSibling;else if(l++,3==f.nodeType)for(;f&&3==f.nodeType;)f=f.nextSibling;else f=f.nextSibling;else l=f?e.isFillChar(b)?0:k.startOffset:k.endOffset;0>l&&(l=0);d.push(l);return d}var b={},k=this;b.startAddress=c(!0);f||(b.endAddress=k.collapsed?[].concat(b.startAddress):c());return b},moveToAddress:function(f,
a){function c(f,a){for(var k=b.document.body,l,d,e=0,h,n=f.length;e<n;e++)if(h=f[e],l=k,k=k.childNodes[h],!k){d=h;break}a?k?b.setStartBefore(k):b.setStart(l,d):k?b.setEndBefore(k):b.setEnd(l,d)}var b=this;c(f.startAddress,!0);!a&&f.endAddress&&c(f.endAddress);return b},equals:function(f){for(var a in this)if(this.hasOwnProperty(a)&&this[a]!==f[a])return!1;return!0},traversal:function(f,a){if(this.collapsed)return this;for(var c=this.createBookmark(),b=c.end,k=e.getNextDomNode(c.start,!1,a);k&&k!==
b&&e.getPosition(k,b)&e.POSITION_PRECEDING;){var l=e.getNextDomNode(k,!1,a);f(k);k=l}return this.moveToBookmark(c)}}})();(function(){function g(a,b){var d=e.getNodeIndex;a=a.duplicate();a.collapse(b);var f=a.parentElement();if(!f.hasChildNodes())return{container:f,offset:0};for(var l=f.children,k,n=a.duplicate(),m=0,g=l.length-1,u=-1;m<=g;){u=Math.floor((m+g)/2);k=l[u];n.moveToElementText(k);var v=n.compareEndPoints("StartToStart",a);if(0<v)g=u-1;else if(0>v)m=u+1;else return{container:f,offset:d(k)}}if(-1==
u){n.moveToElementText(f);n.setEndPoint("StartToStart",a);n=n.text.replace(/(\r\n|\r)/g,"\n").length;l=f.childNodes;if(!n)return k=l[l.length-1],{container:k,offset:k.nodeValue.length};for(d=l.length;0<n;)n-=l[--d].nodeValue.length;return{container:l[d],offset:-n}}n.collapse(0<v);n.setEndPoint(0<v?"StartToStart":"EndToStart",a);n=n.text.replace(/(\r\n|\r)/g,"\n").length;if(!n)return w.$empty[k.tagName]||w.$nonChild[k.tagName]?{container:f,offset:d(k)+(0<v?0:1)}:{container:k,offset:0<v?0:k.childNodes.length};
for(;0<n;)try{l=k,k=k[0<v?"previousSibling":"nextSibling"],n-=k.nodeValue.length}catch(t){return{container:f,offset:d(l)}}return{container:k,offset:0<v?-n:k.nodeValue.length+n}}function a(a,b){if(a.item)b.selectNode(a.item(0));else{var d=g(a,!0);b.setStart(d.container,d.offset);0!=a.compareEndPoints("StartToEnd",a)&&(d=g(a,!1),b.setEnd(d.container,d.offset))}return b}function d(a){var b;try{b=a.getNative().createRange()}catch(d){return null}var f=b.item?b.item(0):b.parentElement();return(f.ownerDocument||
f)===a.document?b:null}(J.Selection=function(a){var b=this;b.document=a;I&&(a=e.getWindow(a).frameElement,e.on(a,"beforedeactivate",function(){b._bakIERange=b.getIERange()}),e.on(a,"activate",function(){try{!d(b)&&b._bakIERange&&b._bakIERange.select()}catch(a){}b._bakIERange=null}));a=a=null}).prototype={getNative:function(){var a=this.document;try{return a?I&&9>r.ie?a.selection:e.getWindow(a).getSelection():null}catch(b){return null}},getIERange:function(){var a=d(this);return!a&&this._bakIERange?
this._bakIERange:a},cache:function(){this.clear();this._cachedRange=this.getRange();this._cachedStartElement=this.getStart();this._cachedStartElementPath=this.getStartElementPath()},getStartElementPath:function(){if(this._cachedStartElementPath)return this._cachedStartElementPath;var a=this.getStart();return a?e.findParents(a,!0,null,!0):[]},clear:function(){this._cachedStartElementPath=this._cachedRange=this._cachedStartElement=null},isFocus:function(){try{return r.ie&&d(this)||!r.ie&&this.getNative().rangeCount?
!0:!1}catch(a){return!1}},getRange:function(){function c(f){for(var a=b.document.body.firstChild,c=f.collapsed;a&&a.firstChild;)f.setStart(a,0),a=a.firstChild;f.startContainer||f.setStart(b.document.body,0);c&&f.collapse(!0)}var b=this;if(null!=b._cachedRange)return this._cachedRange;var d=new p.editor.dom.Range(b.document);if(I&&9>r.ie){var f=b.getIERange();if(f)try{a(f,d)}catch(l){c(d)}else c(d)}else{var k=b.getNative();if(k&&k.rangeCount)f=k.getRangeAt(0),k=k.getRangeAt(k.rangeCount-1),d.setStart(f.startContainer,
f.startOffset).setEnd(k.endContainer,k.endOffset),d.collapsed&&(e.isBody(d.startContainer)&&!d.startOffset)&&c(d);else{if(this._bakRange&&e.inDoc(this._bakRange.startContainer,this.document))return this._bakRange;c(d)}}return this._bakRange=d},getStart:function(){if(this._cachedStartElement)return this._cachedStartElement;var a=I?this.getIERange():this.getRange(),b,d;if(I){if(!a)return this.document.body.firstChild;if(a.item)return a.item(0);b=a.duplicate();0<b.text.length&&b.moveStart("character",
1);b.collapse(1);b=b.parentElement();for(d=a=a.parentElement();a=a.parentNode;)if(a==b){b=d;break}}else if(a.shrinkBoundary(),b=a.startContainer,1==b.nodeType&&b.hasChildNodes()&&(b=b.childNodes[Math.min(b.childNodes.length-1,a.startOffset)]),3==b.nodeType)return b.parentNode;return b},getText:function(){var a;return this.isFocus()&&(a=this.getNative())?(a=r.ie?a.createRange():a.getRangeAt(0),r.ie?a.text:a.toString()):""},clearRange:function(){this.getNative()[r.ie?"empty":"removeAllRanges"]()}}})();
(function(){function g(f,a){var b;if(a.textarea)if(q.isString(a.textarea))for(var c=0,d,h=e.getElementsByTagName(f,"textarea");d=h[c++];){if(d.id=="ueditor_textarea_"+a.options.textarea){b=d;break}}else b=a.textarea;b||(f.appendChild(b=e.createElement(document,"textarea",{name:a.options.textarea,id:"ueditor_textarea_"+a.options.textarea,style:"display:none"})),a.textarea=b);b.value=a.hasContents()?a.options.allHtmlEnabled?a.getAllHtml():a.getContent(null,null,!0):""}function a(a){for(var b in UE.plugins)UE.plugins[b].call(a);
a.langIsReady=!0;a.fireEvent("langReady")}function d(a){for(var b in a)return b}var c=0,b,h=UE.Editor=function(f){var b=this;b.uid=c++;V.call(b);b.commands={};b.options=q.extend(q.clone(f||{}),UEDITOR_CONFIG,!0);b.shortcutkeys={};b.inputRules=[];b.outputRules=[];b.setOpt({isShow:!0,initialContent:"",initialStyle:"",autoClearinitialContent:!1,iframeCssUrl:b.options.UEDITOR_HOME_URL+"themes/iframe.css",textarea:"editorValue",focus:!1,focusInEnd:!0,autoClearEmptyNode:!0,fullscreen:!1,readonly:!1,zIndex:999,
imagePopup:!0,enterTag:"p",customDomain:!1,lang:"zh-cn",langPath:b.options.UEDITOR_HOME_URL+"lang/",theme:"default",themePath:b.options.UEDITOR_HOME_URL+"themes/",allHtmlEnabled:!1,scaleEnabled:!1,tableNativeEditInFF:!1,autoSyncData:!0});q.isEmptyObject(UE.I18N)?q.loadFile(document,{src:b.options.langPath+b.options.lang+"/"+b.options.lang+".js",tag:"script",type:"text/javascript",defer:"defer"},function(){a(b)}):(b.options.lang=d(UE.I18N),a(b));UE.instants["ueditorInstant"+b.uid]=b};h.prototype={ready:function(a){a&&
(this.isReady?a.apply(this):this.addListener("ready",a))},setOpt:function(a,b){var c={};q.isString(a)?c[a]=b:c=a;q.extend(this.options,c,!0)},destroy:function(){this.fireEvent("destroy");var a=this.container.parentNode,b=this.textarea;b?b.style.display="":(b=document.createElement("textarea"),a.parentNode.insertBefore(b,a));b.style.width=this.iframe.offsetWidth+"px";b.style.height=this.iframe.offsetHeight+"px";b.value=this.getContent();b.id=this.key;a.innerHTML="";e.remove(a);var a=this.key,c;for(c in this)this.hasOwnProperty(c)&&
delete this[c];UE.delEditor(a)},render:function(a){var b=this.options;q.isString(a)&&(a=document.getElementById(a));if(a){b.minFrameWidth=b.initialFrameWidth?b.initialFrameWidth:b.initialFrameWidth=a.offsetWidth;b.initialFrameHeight?b.minFrameHeight=b.initialFrameHeight:b.initialFrameHeight=b.minFrameHeight=a.offsetHeight;a.style.width=/%$/.test(b.initialFrameWidth)?"100%":b.initialFrameWidth-parseInt(e.getComputedStyle(a,"padding-left"))-parseInt(e.getComputedStyle(a,"padding-right"))+"px";a.style.height=
/%$/.test(b.initialFrameHeight)?"100%":b.initialFrameHeight-parseInt(e.getComputedStyle(a,"padding-top"))-parseInt(e.getComputedStyle(a,"padding-bottom"))+"px";a.style.zIndex=b.zIndex;var c=(I&&9>r.version?"":"<!DOCTYPE html>")+"<html xmlns='http://www.w3.org/1999/xhtml' class='view' ><head><style type='text/css'>.view{word-wrap:break-word;cursor:text;height:90%;}\nbody{margin:8px;font-family:sans-serif;font-size:16px;}p{margin:5px 0;}</style>"+(b.iframeCssUrl?"<link rel='stylesheet' type='text/css' href='"+
q.unhtml(b.iframeCssUrl)+"'/>":"")+(b.initialStyle?"<style>"+b.initialStyle+"</style>":"")+"</head><body class='view' ></body><script type='text/javascript' "+(I?"defer='defer'":"")+" id='_initialScript'>setTimeout(function(){window.parent.UE.instants['ueditorInstant"+this.uid+"']._setup(document);},0);var _tmpScript = document.getElementById('_initialScript');_tmpScript.parentNode.removeChild(_tmpScript);\x3c/script></html>";a.appendChild(e.createElement(document,"iframe",{id:"ueditor_"+this.uid,
width:"100%",height:"100%",frameborder:"0",src:"javascript:void(function(){document.open();"+(b.customDomain&&document.domain!=location.hostname?'document.domain="'+document.domain+'";':"")+'document.write("'+c+'");document.close();}())'}));a.style.overflow="hidden";setTimeout(function(){/%$/.test(b.initialFrameWidth)&&(b.minFrameWidth=b.initialFrameWidth=a.offsetWidth,a.style.width=b.initialFrameWidth+"px");/%$/.test(b.initialFrameHeight)&&(b.minFrameHeight=b.initialFrameHeight=a.offsetHeight,a.style.height=
b.initialFrameHeight+"px")})}},_setup:function(a){var b=this,c=b.options;I?(a.body.disabled=!0,a.body.contentEditable=!0,a.body.disabled=!1):a.body.contentEditable=!0;a.body.spellcheck=!1;b.document=a;b.window=a.defaultView||a.parentWindow;b.iframe=b.window.frameElement;b.body=a.body;b.selection=new J.Selection(a);var d;r.gecko&&(d=this.selection.getNative())&&d.removeAllRanges();this._initEvents();for(var h=this.iframe.parentNode;!e.isBody(h);h=h.parentNode)if("FORM"==h.tagName){b.form=h;if(b.options.autoSyncData)e.on(b.window,
"blur",function(){g(h,b)});else e.on(h,"submit",function(){g(this,b)});break}if(c.initialContent)if(c.autoClearinitialContent){var s=b.execCommand;b.execCommand=function(){b.fireEvent("firstBeforeExecCommand");return s.apply(b,arguments)};this._setDefaultContent(c.initialContent)}else this.setContent(c.initialContent,!1,!0);e.isEmptyNode(b.body)&&(b.body.innerHTML="<p>"+(r.ie?"":"<br/>")+"</p>");c.focus&&setTimeout(function(){b.focus(b.options.focusInEnd);!b.options.autoClearinitialContent&&b._selectionChange()},
0);b.container||(b.container=this.iframe.parentNode);c.fullscreen&&b.ui&&b.ui.setFullScreen(!0);try{b.document.execCommand("2D-position",!1,!1)}catch(u){}try{b.document.execCommand("enableInlineTableEditing",!1,!1)}catch(v){}try{b.document.execCommand("enableObjectResizing",!1,!1)}catch(t){}b._bindshortcutKeys();b.isReady=1;b.fireEvent("ready");c.onready&&c.onready.call(b);if(!r.ie)e.on(b.window,["blur","focus"],function(a){if("blur"==a.type){b._bakRange=b.selection.getRange();try{b._bakNativeRange=
b.selection.getNative().getRangeAt(0),b.selection.getNative().removeAllRanges()}catch(f){b._bakNativeRange=null}}else try{b._bakRange&&b._bakRange.select()}catch(c){}});r.gecko&&10902>=r.version&&(b.body.contentEditable=!1,setTimeout(function(){b.body.contentEditable=!0},100),setInterval(function(){b.body.style.height=b.iframe.offsetHeight-20+"px"},100));!c.isShow&&b.setHide();c.readonly&&b.setDisabled()},sync:function(a){(a=a?document.getElementById(a):e.findParent(this.iframe.parentNode,function(a){return"FORM"==
a.tagName},!0))&&g(a,this)},setHeight:function(a,b){a!==parseInt(this.iframe.parentNode.style.height)&&(this.iframe.parentNode.style.height=a+"px");!b&&(this.options.minFrameHeight=this.options.initialFrameHeight=a);this.body.style.height=a+"px"},addshortcutkey:function(a,b){var c={};b?c[a]=b:c=a;q.extend(this.shortcutkeys,c)},_bindshortcutKeys:function(){var a=this,b=this.shortcutkeys;a.addListener("keydown",function(c,d){var h=d.keyCode||d.which,g;for(g in b)for(var u=b[g].split(","),v=0,t;t=u[v++];){t=
t.split(":");var x=t[0];t=t[1];if(/^(ctrl)(\+shift)?\+(\d+)$/.test(x.toLowerCase())||/^(\d+)$/.test(x))if("ctrl"==RegExp.$1&&(d.ctrlKey||d.metaKey)&&(""!=RegExp.$2?d[RegExp.$2.slice(1)+"Key"]:1)&&h==RegExp.$3||h==RegExp.$1)-1!=a.queryCommandState(g,t)&&a.execCommand(g,t),e.preventDefault(d)}})},getContent:function(a,b,c,d,e){a&&q.isFunction(a)&&(b=a,a="");if(b?!b():!this.hasContents())return"";this.fireEvent("beforegetcontent");b=UE.htmlparser(this.body.innerHTML,d);this.filterOutputRule(b);this.fireEvent("aftergetcontent",
a);return b.toHtml(e)},getAllHtml:function(){var a=[];this.fireEvent("getAllHtml",a);if(r.ie&&8<r.version){var b="";q.each(this.document.styleSheets,function(a){b+=a.href?'<link rel="stylesheet" type="text/css" href="'+a.href+'" />':"<style>"+a.cssText+"</style>"});q.each(this.document.getElementsByTagName("script"),function(a){b+=a.outerHTML})}return"<html><head>"+(this.options.charset?'<meta http-equiv="Content-Type" content="text/html; charset='+this.options.charset+'"/>':"")+(b||this.document.getElementsByTagName("head")[0].innerHTML)+
a.join("\n")+"</head><body "+(I&&9>r.version?'class="view"':"")+">"+this.getContent(null,null,!0)+"</body></html>"},getPlainTxt:function(){var a=RegExp(e.fillChar,"g"),b=this.body.innerHTML.replace(/[\n\r]/g,""),b=b.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi,"\n").replace(/<br\/?>/gi,"\n").replace(/<[^>/]+>/g,"").replace(/(\n)?<\/([^>]+)>/g,function(a,f,b){return w.$block[b]?"\n":f?f:""});return b.replace(a,"").replace(/\u00a0/g," ").replace(/&nbsp;/g," ")},getContentTxt:function(){return this.body[r.ie?
"innerText":"textContent"].replace(RegExp(e.fillChar,"g"),"").replace(/\u00a0/g," ")},setContent:function(a,b,c){this.fireEvent("beforesetcontent",a);a=UE.htmlparser(a);this.filterInputRule(a);a=a.toHtml();this.body.innerHTML=(b?this.body.innerHTML:"")+a;if("p"==this.options.enterTag)if(b=this.body.firstChild,!b||1==b.nodeType&&(w.$cdata[b.tagName]||"DIV"==b.tagName&&b.getAttribute("cdata_tag")||e.isCustomeNode(b))&&b===this.body.lastChild)this.body.innerHTML="<p>"+(r.ie?"&nbsp;":"<br/>")+"</p>"+
this.body.innerHTML;else for(var d=this.document.createElement("p");b;){for(;b&&(3==b.nodeType||1==b.nodeType&&w.p[b.tagName]&&!w.$cdata[b.tagName]);)a=b.nextSibling,d.appendChild(b),b=a;if(d.firstChild)if(b)b.parentNode.insertBefore(d,b),d=this.document.createElement("p");else{this.body.appendChild(d);break}b=b.nextSibling}this.fireEvent("aftersetcontent");this.fireEvent("contentchange");!c&&this._selectionChange();this._bakRange=this._bakIERange=this._bakNativeRange=null;var h;r.gecko&&(h=this.selection.getNative())&&
h.removeAllRanges();this.options.autoSyncData&&this.form&&g(this.form,this)},focus:function(a){try{var b=this.selection.getRange();a?b.setStartAtLast(this.body.lastChild).setCursor(!1,!0):b.select(!0);this.fireEvent("focus")}catch(c){}},_initEvents:function(){var a=this,b=a.document,c=a.window;a._proxyDomEvent=q.bind(a._proxyDomEvent,a);e.on(b,"click mousedown keydown keyup keypress mouseup mouseover mouseout selectstart".split(" "),a._proxyDomEvent);e.on(c,["focus","blur"],a._proxyDomEvent);e.on(b,
["mouseup","keydown"],function(b){"keydown"==b.type&&(b.ctrlKey||b.metaKey||b.shiftKey||b.altKey)||2!=b.button&&a._selectionChange(250,b)})},_proxyDomEvent:function(a){return this.fireEvent(a.type.replace(/^on/,""),a)},_selectionChange:function(a,c){var k=this,d=!1,e,h;r.ie&&(9>r.version&&c&&"mouseup"==c.type)&&!this.selection.getRange().collapsed&&(d=!0,e=c.clientX,h=c.clientY);clearTimeout(b);b=setTimeout(function(){if(k.selection.getNative()){var a;if(d&&"None"==k.selection.getNative().type){a=
k.document.body.createTextRange();try{a.moveToPoint(e,h)}catch(b){a=null}}var f;a&&(f=k.selection.getIERange,k.selection.getIERange=function(){return a});k.selection.cache();f&&(k.selection.getIERange=f);k.selection._cachedRange&&k.selection._cachedStartElement&&(k.fireEvent("beforeselectionchange"),k.fireEvent("selectionchange",!!c),k.fireEvent("afterselectionchange"),k.selection.clear())}},a||50)},_callCmdFn:function(a,b){var c=b[0].toLowerCase(),d;d=(c=this.commands[c]||UE.commands[c])&&c[a];if(!(c&&
d||"queryCommandState"!=a))return 0;if(d)return d.apply(this,b)},execCommand:function(a){a=a.toLowerCase();var b,c=this.commands[a]||UE.commands[a],d=this.selection.getRange(),e=this.selection.getText();if(!c||!c.execCommand)return null;c.notNeedUndo||this.__hasEnterExecCommand?(b=this._callCmdFn("execCommand",arguments),this._ignoreContentChange||(""==e||"underline"!=a||"font"==e)||this.fireEvent("contentchange")):(this.__hasEnterExecCommand=!0,-1!=this.queryCommandState.apply(this,arguments)&&(this.fireEvent("beforeexeccommand",
a),b=this._callCmdFn("execCommand",arguments),this._ignoreContentChange||("insertimage"==a||"attachment"==a||d.collapsed||""==e)&&"insertorderedlist"!=a&&"insertunorderedlist"!=a&&"removeformat"!=a&&"justify"!=a||this.fireEvent("contentchange"),this.fireEvent("afterexeccommand",a)),this.__hasEnterExecCommand=!1);!this._ignoreContentChange&&this._selectionChange();return b},queryCommandState:function(a){return this._callCmdFn("queryCommandState",arguments)},queryCommandValue:function(a){return this._callCmdFn("queryCommandValue",
arguments)},hasContents:function(a){if(a)for(var b=0,c;c=a[b++];)if(0<this.document.getElementsByTagName(c).length)return!0;if(!e.isEmptyBlock(this.body))return!0;a=["div"];for(b=0;c=a[b++];){c=e.getElementsByTagName(this.document,c);for(var d=0,h;h=c[d++];)if(e.isCustomeNode(h))return!0}return!1},reset:function(){this.fireEvent("reset")},setEnabled:function(){var a;if("false"==this.body.contentEditable){this.body.contentEditable=!0;a=this.selection.getRange();try{a.moveToBookmark(this.lastBk),delete this.lastBk}catch(b){a.setStartAtFirst(this.body).collapse(!0)}a.select(!0);
this.bkqueryCommandState&&(this.queryCommandState=this.bkqueryCommandState,delete this.bkqueryCommandState);this.fireEvent("selectionchange")}},enable:function(){return this.setEnabled()},setDisabled:function(a){var b=this;a=a?q.isArray(a)?a:[a]:[];"true"==b.body.contentEditable&&(b.lastBk||(b.lastBk=b.selection.getRange().createBookmark(!0)),b.body.contentEditable=!1,b.bkqueryCommandState=b.queryCommandState,b.queryCommandState=function(c){return-1!=q.indexOf(a,c)?b.bkqueryCommandState.apply(b,arguments):
-1},b.fireEvent("selectionchange"))},disable:function(a){return this.setDisabled(a)},_setDefaultContent:function(){function a(){var b=this;b.document.getElementById("initContent")&&(b.body.innerHTML="<p>"+(I?"":"<br/>")+"</p>",b.removeListener("firstBeforeExecCommand focus",a),setTimeout(function(){b.focus();b._selectionChange()},0))}return function(b){this.body.innerHTML='<p id="initContent">'+b+"</p>";this.addListener("firstBeforeExecCommand focus",a)}}(),setShow:function(){var a=this.selection.getRange();
if("none"==this.container.style.display){try{a.moveToBookmark(this.lastBk),delete this.lastBk}catch(b){a.setStartAtFirst(this.body).collapse(!0)}setTimeout(function(){a.select(!0)},100);this.container.style.display=""}},show:function(){return this.setShow()},setHide:function(){this.lastBk||(this.lastBk=this.selection.getRange().createBookmark(!0));this.container.style.display="none"},hide:function(){return this.setHide()},getLang:function(a){var b=UE.I18N[this.options.lang];if(!b)throw Error("not import language file");
a=(a||"").split(".");for(var c=0,d;(d=a[c++])&&(b=b[d],b););return b},getContentLength:function(a,b){var c=this.getContent(!1,!1,!0).length;if(a){b=(b||[]).concat(["hr","img","iframe"]);for(var c=this.getContentTxt().replace(/[\t\r\n]+/g,"").length,d=0,e;e=b[d++];)c+=this.document.getElementsByTagName(e).length}return c},addInputRule:function(a){this.inputRules.push(a)},filterInputRule:function(a){for(var b=0,c;c=this.inputRules[b++];)c.call(this,a)},addOutputRule:function(a){this.outputRules.push(a)},
filterOutputRule:function(a){for(var b=0,c;c=this.outputRules[b++];)c.call(this,a)}};q.inherits(h,V)})();UE.ajax=function(){function e(a){var b=[],c;for(c in a)"method"!=c&&"timeout"!=c&&"async"!=c&&"function"!=(typeof a[c]).toLowerCase()&&"object"!=(typeof a[c]).toLowerCase()&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")}var a="XMLHttpRequest()";try{new ActiveXObject("Msxml2.XMLHTTP"),a="ActiveXObject('Msxml2.XMLHTTP')"}catch(d){try{new ActiveXObject("Microsoft.XMLHTTP"),
a="ActiveXObject('Microsoft.XMLHTTP')"}catch(c){}}var b=new Function("return new "+a);return{request:function(a,c){var d=b(),k=!1,n={method:"POST",timeout:5E3,async:!0,data:{},onsuccess:function(){},onerror:function(){}};"object"===typeof a&&(c=a,a=c.url);if(d&&a){var m=c?q.extend(n,c):n,n=e(m);q.isEmptyObject(m.data)||(n+=(n?"&":"")+e(m.data));var s=setTimeout(function(){4!=d.readyState&&(k=!0,d.abort(),clearTimeout(s))},m.timeout),u=m.method.toUpperCase(),v=a+(-1==a.indexOf("?")?"?":"&")+("POST"==
u?"":n+"&noCache="+ +new Date);d.open(u,v,m.async);d.onreadystatechange=function(){if(4==d.readyState)if(k||200!=d.status)m.onerror(d);else m.onsuccess(d)};"POST"==u?(d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),d.send(n)):d.send(null)}}}}();UE.filterWord=function(){function e(a){return a=a.replace(/[\d.]+\w+/g,function(a){return q.transUnitToPx(a)})}function a(a){return a.replace(/[\t\r\n]+/g,"").replace(/\x3c!--[\s\S]*?--\x3e/ig,"").replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi,
function(a){if(r.opera)return"";try{var b=a.match(/width:([ \d.]*p[tx])/i)[1],d=a.match(/height:([ \d.]*p[tx])/i)[1],f=a.match(/src=\s*"([^"]*)"/i)[1];return'<img width="'+e(b)+'" height="'+e(d)+'" src="'+f+'" />'}catch(l){return""}}).replace(/<\/?div[^>]*>/g,"").replace(/v:\w+=(["']?)[^'"]+\1/g,"").replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi,"").replace(/<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi,"<p><strong>$1</strong></p>").replace(/\s+(class|lang|align)\s*=\s*(['"]?)([\w-]+)\2/ig,
function(a,b,d,f){return"class"==b&&"MsoListParagraph"==f?a:""}).replace(/<(font|span)[^>]*>\s*<\/\1>/gi,"").replace(/(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi,function(a,b,d,f){a=[];f=f.replace(/^\s+|\s+$/,"").replace(/&#39;/g,"'").replace(/&quot;/gi,"'").split(/;\s*/g);d=0;for(var l;l=f[d];d++){var k,n=l.split(":");if(2==n.length&&(l=n[0].toLowerCase(),k=n[1].toLowerCase(),!(/^(background)\w*/.test(l)&&0==k.replace(/(initial|\s)/g,"").length||/^(margin)\w*/.test(l)&&/^0\w+$/.test(k)))){switch(l){case "mso-padding-alt":case "mso-padding-top-alt":case "mso-padding-right-alt":case "mso-padding-bottom-alt":case "mso-padding-left-alt":case "mso-margin-alt":case "mso-margin-top-alt":case "mso-margin-right-alt":case "mso-margin-bottom-alt":case "mso-margin-left-alt":case "mso-height":case "mso-width":case "mso-vertical-align-alt":/<table/.test(b)||
(a[d]=l.replace(/^mso-|-alt$/g,"")+":"+e(k));continue;case "horiz-align":a[d]="text-align:"+k;continue;case "vert-align":a[d]="vertical-align:"+k;continue;case "font-color":case "mso-foreground":a[d]="color:"+k;continue;case "mso-background":case "mso-highlight":a[d]="background:"+k;continue;case "mso-default-height":a[d]="min-height:"+e(k);continue;case "mso-default-width":a[d]="min-width:"+e(k);continue;case "mso-padding-between-alt":a[d]="border-collapse:separate;border-spacing:"+e(k);continue;
case "text-line-through":if("single"==k||"double"==k)a[d]="text-decoration:line-through";continue;case "mso-zero-height":"yes"==k&&(a[d]="display:none");continue;case "margin":if(!/[1-9]/.test(k))continue}/^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test(l)||/text\-indent|padding|margin/.test(l)&&/\-[\d.]+/.test(k)||(a[d]=l+":"+n[1])}}return b+(a.length?' style="'+a.join(";").replace(/;{2,}/g,
";")+'"':"")}).replace(/[\d.]+(cm|pt)/g,function(a){return q.transUnitToPx(a)})}return function(d){return/(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<v:)/ig.test(d)?a(d):d}}();(function(){function e(a,b,f){a.push(k);return b+(f?1:-1)}function a(a,b){for(var f=0;f<b;f++)a.push(l)}function d(b,f,c,k){switch(b.type){case "root":for(var h=0,l;l=b.children[h++];)c&&("element"==l.type&&!w.$inlineWithA[l.tagName]&&1<h)&&(e(f,k,!0),a(f,k)),d(l,f,c,k);break;case "text":f.push("pre"==b.parentNode.tagName?
b.data:b.data.replace(/[ ]{2}/g," &nbsp;"));break;case "element":l="";if(b.attrs){l=[];var x=b.attrs;for(h in x)l.push(h+(void 0!==x[h]?'="'+q.unhtml(x[h])+'"':""));l=l.join(" ")}f.push("<"+b.tagName+(l?" "+l:"")+(w.$empty[b.tagName]?"/":"")+">");c&&(!w.$inlineWithA[b.tagName]&&"pre"!=b.tagName)&&(b.children&&b.children.length)&&(k=e(f,k,!0),a(f,k));if(b.children&&b.children.length)for(h=0;l=b.children[h++];)c&&("element"==l.type&&!w.$inlineWithA[l.tagName]&&1<h)&&(e(f,k),a(f,k)),d(l,f,c,k);w.$empty[b.tagName]||
(c&&(!w.$inlineWithA[b.tagName]&&"pre"!=b.tagName)&&(b.children&&b.children.length)&&(k=e(f,k),a(f,k)),f.push("</"+b.tagName+">"));break;case "comment":f.push("\x3c!--"+b.data+"--\x3e")}return f}function c(a,b){var f;if("element"==a.type&&a.getAttr("id")==b)return a;if(a.children&&a.children.length)for(var d=0;f=a.children[d++];)if(f=c(f,b))return f}function b(a,f,c){"element"==a.type&&a.tagName==f&&c.push(a);if(a.children&&a.children.length)for(var d=0,k;k=a.children[d++];)b(k,f,c)}function h(a,
b){if(a.children&&a.children.length)for(var f=0,c;c=a.children[f];)h(c,b),c.parentNode&&(c.children&&c.children.length&&b(c),c.parentNode&&f++);else b(a)}var f=UE.uNode=function(a){this.type=a.type;this.data=a.data;this.tagName=a.tagName;this.parentNode=a.parentNode;this.attrs=a.attrs||{};this.children=a.children},l="    ",k="\n";f.createElement=function(a){return/[<>]/.test(a)?UE.htmlparser(a).children[0]:new f({type:"element",children:[],tagName:a})};f.createText=function(a){return new UE.uNode({type:"text",
data:q.unhtml(a||"")})};f.prototype={toHtml:function(a){var b=[];d(this,b,a,0);return b.join("")},innerHTML:function(a){if("element"!=this.type||w.$empty[this.tagName])return this;if(q.isString(a)){if(this.children)for(var b=0,f;f=this.children[b++];)f.parentNode=null;this.children=[];a=UE.htmlparser(a);for(b=0;f=a.children[b++];)this.children.push(f),f.parentNode=this;return this}a=new UE.uNode({type:"root",children:this.children});return a.toHtml()},innerText:function(a){if("element"!=this.type||
w.$empty[this.tagName])return this;if(a){if(this.children)for(var b=0,c;c=this.children[b++];)c.parentNode=null;this.children=[];this.appendChild(f.createText(a));return this}return this.toHtml().replace(/<[^>]+>/g,"")},getData:function(){return"element"==this.type?"":this.data},firstChild:function(){return this.children?this.children[0]:null},lastChild:function(){return this.children?this.children[this.children.length-1]:null},previousSibling:function(){for(var a=this.parentNode,b=0,f;f=a.children[b];b++)if(f===
this)return 0==b?null:a.children[b-1]},nextSibling:function(){for(var a=this.parentNode,b=0,f;f=a.children[b++];)if(f===this)return a.children[b]},replaceChild:function(a,b){if(this.children){a.parentNode&&a.parentNode.removeChild(a);for(var f=0,c;c=this.children[f];f++)if(c===b)return this.children.splice(f,1,a),b.parentNode=null,a.parentNode=this,a}},appendChild:function(a){if("root"==this.type||"element"==this.type&&!w.$empty[this.tagName]){this.children||(this.children=[]);a.parentNode&&a.parentNode.removeChild(a);
for(var b=0,f;f=this.children[b];b++)if(f===a){this.children.splice(b,1);break}this.children.push(a);a.parentNode=this;return a}},insertBefore:function(a,b){if(this.children){a.parentNode&&a.parentNode.removeChild(a);for(var f=0,c;c=this.children[f];f++)if(c===b)return this.children.splice(f,0,a),a.parentNode=this,a}},insertAfter:function(a,b){if(this.children){a.parentNode&&a.parentNode.removeChild(a);for(var f=0,c;c=this.children[f];f++)if(c===b)return this.children.splice(f+1,0,a),a.parentNode=
this,a}},removeChild:function(a,b){if(this.children)for(var f=0,c;c=this.children[f];f++)if(c===a){this.children.splice(f,1);c.parentNode=null;if(b&&c.children&&c.children.length)for(var d=0,k;k=c.children[d];d++)this.children.splice(f+d,0,k),k.parentNode=this;return c}},getAttr:function(a){return this.attrs&&this.attrs[a.toLowerCase()]},setAttr:function(a,b){if(a)if(this.attrs||(this.attrs={}),q.isObject(a))for(var f in a)a[f]?this.attrs[f.toLowerCase()]=a[f]:delete this.attrs[f];else b?this.attrs[a.toLowerCase()]=
b:delete this.attrs[a];else delete this.attrs},removeAttr:function(a){if(a&&"string"==typeof a){a=a.replace(/\s+/g,"-").split("-");for(var b=0;b<a.length;b++){var f=a[b];this.attrs[f]&&delete this.attrs[f]}}},getIndex:function(){for(var a=this.parentNode,b=0,f;f=a.children[b];b++)if(f===this)return b;return-1},getNodeById:function(a){var b;if(this.children&&this.children.length)for(var f=0;b=this.children[f++];)if(b=c(b,a))return b},getNodesByTagName:function(a){a=q.trim(a).replace(/[ ]{2,}/g," ").split(" ");
var f=[],c=this;q.each(a,function(a){if(c.children&&c.children.length)for(var d=0,k;k=c.children[d++];)b(k,a,f)});return f},getStyle:function(a){var b=this.getAttr("style");return b?(a=b.match(RegExp(a+":([^;]+)","i")))&&a[0]?a[1]:"":""},setStyle:function(a,b){function f(a,b){c=c.replace(RegExp(a+":([^;]+;?)","gi"),"");b&&(c=a+":"+q.unhtml(b)+";"+c)}var c=this.getAttr("style");c||(c="");if(q.isObject(a))for(var d in a)f(d,a[d]);else f(a,b);this.setAttr("style",q.trim(c))},traversal:function(a){this.children&&
this.children.length&&h(this,a);return this}}})();UE.htmlparser=function(g,a){function d(a,b){if(n[a.tagName]){var f=l.createElement(n[a.tagName]);a.appendChild(f);f.appendChild(l.createText(b))}else a.appendChild(l.createText(b))}function c(a,b,f){var d;if(d=k[b]){for(var e=a,g;"root"!=e.type;){if(q.isArray(d)?-1!=q.indexOf(d,e.tagName):d==e.tagName){a=e;g=!0;break}e=e.parentNode}g||(a=c(a,q.isArray(d)?d[0]:d))}d=new l({parentNode:a,type:"element",tagName:b.toLowerCase(),children:w.$empty[b]?null:
[]});if(f){for(e={};g=h.exec(f);)e[g[1].toLowerCase()]=q.unhtml(g[2]||g[3]||g[4]);d.attrs=e}a.children.push(d);return w.$empty[b]?a:d}var b=/<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\x3e)|(?:([^\s\/>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,h=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,f={b:1,code:1,i:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,span:1,sub:1,img:1,sup:1,font:1,big:1,small:1,iframe:1,a:1,br:1,pre:1};g=g.replace(RegExp(e.fillChar,"g"),
"");a||(g=g.replace(RegExp("[\\r\\t\\n"+(a?"":" ")+"]*</?(\\w+)\\s*(?:[^>]*)>[\\r\\t\\n"+(a?"":" ")+"]*","g"),function(b,c){return c&&f[c.toLowerCase()]?b.replace(/(^[\n\r]+)|([\n\r]+$)/g,""):b.replace(RegExp("^[\\r\\n"+(a?"":" ")+"]+"),"").replace(RegExp("[\\r\\n"+(a?"":" ")+"]+$"),"")}));for(var l=UE.uNode,k={td:"tr",tr:["tbody","thead","tfoot"],tbody:"table",th:"tr",thead:"table",tfoot:"table",caption:"table",li:["ul","ol"],dt:"dl",dd:"dl",option:"select"},n={ol:"li",ul:"li"},m,s=0,u=0,v=new l({type:"root",
children:[]}),t=v;m=b.exec(g);){s=m.index;try{if(s>u&&d(t,g.slice(u,s)),m[3])t=c(t,m[3].toLowerCase(),m[4]);else if(m[1]){if("root"!=t.type){for(s=t;"element"==t.type&&t.tagName!=m[1].toLowerCase();)if(t=t.parentNode,"root"==t.type)throw t=s,"break";t=t.parentNode}}else m[2]&&t.children.push(new l({type:"comment",data:m[2],parentNode:t}))}catch(x){}u=b.lastIndex}u<g.length&&d(t,g.slice(u));return v};UE.filterNode=function(){function e(a,d){switch(a.type){case "element":var c;if(c=d[a.tagName])if("-"===
c)a.parentNode.removeChild(a);else if(q.isFunction(c)){var b=a.parentNode,h=a.getIndex();c(a);if(a.parentNode){if(a.children)for(c=0;h=a.children[c];)e(h,d),h.parentNode&&c++}else for(c=h;h=b.children[c];)e(h,d),h.parentNode&&c++}else{if((c=c.$)&&a.attrs){var h={},f;for(b in c){f=a.getAttr(b);if("style"==b&&q.isArray(c[b])){var l=[];q.each(c[b],function(b){var f;(f=a.getStyle(b))&&l.push(b+":"+f)});f=l.join(";")}f&&(h[b]=f)}a.attrs=h}if(a.children)for(c=0;h=a.children[c];)e(h,d),h.parentNode&&c++}else if(w.$cdata[a.tagName])a.parentNode.removeChild(a);
else for(b=a.parentNode,h=a.getIndex(),a.parentNode.removeChild(a,!0),c=h;h=b.children[c];)e(h,d),h.parentNode&&c++;break;case "comment":a.parentNode.removeChild(a)}}return function(a,d){if(q.isEmptyObject(d))return a;var c;(c=d["-"])&&q.each(c.split(" "),function(a){d[a]="-"});c=0;for(var b;b=a.children[c];)e(b,d),b.parentNode&&c++;return a}}();UE.plugins.attachment=function(){this.commands.attachment={execCommand:function(e,a){},queryCommandState:function(){var e=!1;try{var a=this.queryCommandValue("link"),
e=a&&a.getAttribute("resource")}catch(d){}return e?-1:0}}};UE.plugins.defaultfilter=function(){var e=this;e.setOpt("allowDivTransToP",!0);e.addInputRule(function(a){var d=this.options.allowDivTransToP,c;a.traversal(function(a){if("element"==a.type){if(!w.$cdata[a.tagName]&&e.options.autoClearEmptyNode&&w.$inline[a.tagName]&&!w.$empty[a.tagName]&&(!a.attrs||q.isEmptyObject(a.attrs))){a.firstChild()?"span"!=a.tagName||a.attrs&&!q.isEmptyObject(a.attrs)||a.parentNode.removeChild(a,!0):a.parentNode.removeChild(a);
return}switch(a.tagName){case "style":case "script":a.setAttr({cdata_tag:a.tagName,cdata_data:encodeURIComponent(a.innerText()||"")});a.tagName="div";a.removeChild(a.firstChild());break;case "a":(c=a.getAttr("href"))&&a.setAttr("_href",c);break;case "img":if((c=a.getAttr("src"))&&/^data:/.test(c)){a.parentNode.removeChild(a);break}a.setAttr("_src",a.getAttr("src"));break;case "span":r.webkit&&(c=a.getStyle("white-space"))&&/nowrap|normal/.test(c)&&(a.setStyle("white-space",""),e.options.autoClearEmptyNode&&
q.isEmptyObject(a.attrs)&&a.parentNode.removeChild(a,!0));break;case "p":if(c=a.getAttr("align"))a.setAttr("align"),a.setStyle("text-align",c);a.firstChild()||a.innerHTML(r.ie?"&nbsp;":"<br/>");break;case "div":if(a.getAttr("cdata_tag"))break;if((c=a.getAttr("class"))&&/^line number\d+/.test(c))break;if(!d)break;for(var h,f=UE.uNode.createElement("p");h=a.firstChild();)"text"!=h.type&&UE.dom.dtd.$block[h.tagName]?f.firstChild()?(a.parentNode.insertBefore(f,a),f=UE.uNode.createElement("p")):a.parentNode.insertBefore(h,
a):f.appendChild(h);f.firstChild()&&a.parentNode.insertBefore(f,a);a.parentNode.removeChild(a);break;case "dl":a.tagName="ul";break;case "dt":case "dd":a.tagName="li";break;case "li":(h=a.getAttr("class"))&&/list\-/.test(h)||a.setAttr();h=a.getNodesByTagName("ol ul");UE.utils.each(h,function(f){a.parentNode.insertAfter(f,a)});break;case "td":case "th":case "caption":a.children&&a.children.length||a.appendChild(r.ie?UE.uNode.createText(" "):UE.uNode.createElement("br"))}}"comment"==a.type&&a.parentNode.removeChild(a)})});
e.addOutputRule(function(a){var d;a.traversal(function(a){if("element"==a.type)if(!e.options.autoClearEmptyNode||!w.$inline[a.tagName]||w.$empty[a.tagName]||a.attrs&&!q.isEmptyObject(a.attrs))switch(a.tagName){case "div":if(d=a.getAttr("cdata_tag"))a.tagName=d,a.appendChild(UE.uNode.createText(a.getAttr("cdata_data"))),a.setAttr({cdata_tag:"",cdata_data:""});break;case "a":(d=a.getAttr("_href"))&&a.setAttr({href:d,_href:""});break;case "img":(d=a.getAttr("_src"))&&a.setAttr({src:a.getAttr("_src"),
_src:""})}else a.firstChild()?"span"!=a.tagName||a.attrs&&!q.isEmptyObject(a.attrs)||a.parentNode.removeChild(a,!0):a.parentNode.removeChild(a)})})};UE.commands.inserthtml={execCommand:function(g,a,d){var c=this,b;if(a&&!0!==c.fireEvent("beforeinserthtml",a)){b=c.selection.getRange();g=b.document.createElement("div");g.style.display="inline";d||(a=UE.htmlparser(a),c.options.filterRules&&UE.filterNode(a,c.options.filterRules),c.filterInputRule(a),a=a.toHtml());g.innerHTML=q.trim(a);if(!b.collapsed&&
(a=b.startContainer,e.isFillChar(a)&&b.setStartBefore(a),a=b.endContainer,e.isFillChar(a)&&b.setEndAfter(a),b.txtToElmBoundary(),b.endContainer&&1==b.endContainer.nodeType&&(a=b.endContainer.childNodes[b.endOffset])&&e.isBr(a)&&b.setEndAfter(a),0==b.startOffset&&(a=b.startContainer,e.isBoundaryNode(a,"firstChild")&&(a=b.endContainer,b.endOffset==(3==a.nodeType?a.nodeValue.length:a.childNodes.length)&&e.isBoundaryNode(a,"lastChild")&&(c.body.innerHTML="<p>"+(r.ie?"":"<br/>")+"</p>",b.setStart(c.body.firstChild,
0).collapse(!0)))),!b.collapsed&&b.deleteContents(),1==b.startContainer.nodeType)){a=b.startContainer.childNodes[b.startOffset];var h;if(a&&e.isBlockElm(a)&&(h=a.previousSibling)&&e.isBlockElm(h)){for(b.setEnd(h,h.childNodes.length).collapse();a.firstChild;)h.appendChild(a.firstChild);e.remove(a)}}var f,l;d=0;var k;b.inFillChar()&&(a=b.startContainer,e.isFillChar(a)?(b.setStartBefore(a).collapse(!0),e.remove(a)):e.isFillChar(a,!0)&&(a.nodeValue=a.nodeValue.replace(R,""),b.startOffset--,b.collapsed&&
b.collapse(!0)));var n=e.findParentByTagName(b.startContainer,"li",!0);if(n){for(var m;a=g.firstChild;){for(;a&&(3==a.nodeType||!e.isBlockElm(a)||"HR"==a.tagName);)m=a.nextSibling,b.insertNode(a).collapse(),f=a,a=m;if(a)if(/^(ol|ul)$/i.test(a.tagName)){for(;a.firstChild;)f=a.firstChild,e.insertAfter(n,a.firstChild),n=n.nextSibling;e.remove(a)}else m=a.nextSibling,h=c.document.createElement("li"),e.insertAfter(n,h),h.appendChild(a),f=a,a=m,n=h}n=e.findParentByTagName(b.startContainer,"li",!0);e.isEmptyBlock(n)&&
e.remove(n);f&&b.setStartAfter(f).collapse(!0).select(!0)}else{for(;a=g.firstChild;){if(d){for(f=c.document.createElement("p");a&&(3==a.nodeType||!w.$block[a.tagName]);)k=a.nextSibling,f.appendChild(a),a=k;f.firstChild&&(a=f)}b.insertNode(a);k=a.nextSibling;if(!d&&a.nodeType==e.NODE_ELEMENT&&e.isBlockElm(a)&&(f=e.findParent(a,function(a){return e.isBlockElm(a)}))&&"body"!=f.tagName.toLowerCase()&&(!w[f.tagName][a.nodeName]||a.parentNode!==f)){if(w[f.tagName][a.nodeName])for(l=a.parentNode;l!==f;)h=
l,l=l.parentNode;else h=f;e.breakParent(a,h||l);h=a.previousSibling;e.trimWhiteTextNode(h);h.childNodes.length||e.remove(h);!r.ie&&((m=a.nextSibling)&&e.isBlockElm(m)&&m.lastChild&&!e.isBr(m.lastChild))&&m.appendChild(c.document.createElement("br"));d=1}m=a.nextSibling;if(!g.firstChild&&m&&e.isBlockElm(m)){b.setStart(m,0).collapse(!0);break}b.setEndAfter(a).collapse()}a=b.startContainer;k&&e.isBr(k)&&e.remove(k);if(e.isBlockElm(a)&&e.isEmptyNode(a))if(k=a.nextSibling)e.remove(a),1==k.nodeType&&w.$block[k.tagName]&&
b.setStart(k,0).collapse(!0).shrinkBoundary();else try{a.innerHTML=r.ie?e.fillChar:"<br/>"}catch(s){b.setStartBefore(a),e.remove(a)}try{b.select(!0)}catch(u){}}setTimeout(function(){b=c.selection.getRange();b.scrollToView(c.autoHeightEnabled,c.autoHeightEnabled?e.getXY(c.iframe).y:0);c.fireEvent("afterinserthtml")},200)}}};UE.plugins.autotypeset=function(){function g(a,b){if(!a||3==a.nodeType)return 0;if(e.isBr(a))return 1;if(a&&a.parentNode&&l[a.tagName.toLowerCase()])return k&&k.contains(a)||a.getAttribute("pagebreak")?
0:b?!e.isEmptyBlock(a):e.isEmptyBlock(a,RegExp("[\\s"+e.fillChar+"]","g"))}function a(a){a.style.cssText||(e.removeAttributes(a,["style"]),"span"==a.tagName.toLowerCase()&&e.hasNoAttributes(a)&&e.remove(a,!0))}function d(c,d){var l;if(d){if(!b.pasteFilter)return;l=this.document.createElement("div");l.innerHTML=d.html}else l=this.document.body;for(var u=e.getElementsByTagName(l,"*"),v=0,t;t=u[v++];)if(!0!==this.fireEvent("excludeNodeinautotype",t)){b.clearFontSize&&t.style.fontSize&&(e.removeStyle(t,
"font-size"),a(t));b.clearFontFamily&&t.style.fontFamily&&(e.removeStyle(t,"font-family"),a(t));if(g(t)){if(b.mergeEmptyline)for(var x=t.nextSibling,F,q=e.isBr(t);g(x);){F=x;x=F.nextSibling;if(q&&(!x||x&&!e.isBr(x)))break;e.remove(F)}if(b.removeEmptyline&&e.inDoc(t,l)&&!f[t.parentNode.tagName.toLowerCase()]){if(e.isBr(t)&&(x=t.nextSibling)&&!e.isBr(x))continue;e.remove(t);continue}}g(t,!0)&&"SPAN"!=t.tagName&&(b.indent&&(t.style.textIndent=b.indentValue),b.textAlign&&(t.style.textAlign=b.textAlign));
if(b.removeClass&&t.className&&!h[t.className.toLowerCase()]){if(k&&k.contains(t))continue;e.removeAttributes(t,["class"])}if(b.imageBlockLine&&"img"==t.tagName.toLowerCase()&&!t.getAttribute("emotion"))if(d)switch(q=t,b.imageBlockLine){case "left":case "right":case "none":for(var x=q.parentNode,G;w.$inline[x.tagName]||"A"==x.tagName;)x=x.parentNode;F=x;if("P"==F.tagName&&"center"==e.getStyle(F,"text-align")&&!e.isBody(F)&&1==e.getChildCount(F,function(a){return!e.isBr(a)&&!e.isWhitespace(a)}))if(G=
F.previousSibling,x=F.nextSibling,G&&x&&1==G.nodeType&&1==x.nodeType&&G.tagName==x.tagName&&e.isBlockElm(G)){for(G.appendChild(F.firstChild);x.firstChild;)G.appendChild(x.firstChild);e.remove(F);e.remove(x)}else e.setStyle(F,"text-align","");e.setStyle(q,"float",b.imageBlockLine);break;case "center":if("center"!=this.queryCommandValue("imagefloat")){x=q.parentNode;e.setStyle(q,"float","none");for(F=q;x&&1==e.getChildCount(x,function(a){return!e.isBr(a)&&!e.isWhitespace(a)})&&(w.$inline[x.tagName]||
"A"==x.tagName);)F=x,x=x.parentNode;x=this.document.createElement("p");e.setAttributes(x,{style:"text-align:center"});F.parentNode.insertBefore(x,F);x.appendChild(F);e.setStyle(F,"float","")}}else this.selection.getRange().selectNode(t).select(),this.execCommand("imagefloat",b.imageBlockLine);b.removeEmptyNode&&b.removeTagNames[t.tagName.toLowerCase()]&&(e.hasNoAttributes(t)&&e.isEmptyBlock(t))&&e.remove(t)}d&&(d.html=l.innerHTML)}this.setOpt({autotypeset:{mergeEmptyline:!0,removeClass:!0,removeEmptyline:!1,
textAlign:"left",imageBlockLine:"center",pasteFilter:!1,clearFontSize:!1,clearFontFamily:!1,removeEmptyNode:!1,removeTagNames:q.extend({div:1},w.$removeEmpty),indent:!1,indentValue:"2em"}});var c=this,b=c.options.autotypeset,h={selectTdClass:1,pagebreak:1,anchorclass:1},f={li:1},l={div:1,p:1,blockquote:1,center:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,span:1},k;b&&(b.pasteFilter&&c.addListener("beforepaste",d),c.commands.autotypeset={execCommand:function(){c.removeListener("beforepaste",d);b.pasteFilter&&
c.addListener("beforepaste",d);d.call(c)}})};UE.plugins.autosubmit=function(){this.commands.autosubmit={execCommand:function(){var g=e.findParentByTagName(this.iframe,"form",!1);g&&!1!==this.fireEvent("beforesubmit")&&(this.sync(),g.submit())}};this.addshortcutkey({autosubmit:"ctrl+13"})};UE.plugins.background=function(){var g=this;g.addListener("getAllHtml",function(a,d){var c=this.body,b=e.getComputedStyle(c,"background-image"),h="",h=0<b.indexOf(g.options.imagePath)?b.substring(b.indexOf(g.options.imagePath),
b.length-1).replace(/"|\(|\)/ig,""):"none"!=b?b.replace(/url\("?|"?\)/ig,""):"",b='<style type="text/css">body{',c={"background-color":e.getComputedStyle(c,"background-color")||"#ffffff","background-image":h?"url("+h+")":"","background-repeat":e.getComputedStyle(c,"background-repeat")||"","background-position":r.ie?e.getComputedStyle(c,"background-position-x")+" "+e.getComputedStyle(c,"background-position-y"):e.getComputedStyle(c,"background-position"),height:e.getComputedStyle(c,"height")},f;for(f in c)c.hasOwnProperty(f)&&
(b+=f+":"+c[f]+";");d.push(b+"}</style> ")})};UE.commands.imagefloat={execCommand:function(g,a){var d=this.selection.getRange();if(!d.collapsed){var c=d.getClosedNode();if(c&&"IMG"==c.tagName)switch(a){case "left":case "right":case "none":for(var b=c.parentNode,h,f;w.$inline[b.tagName]||"A"==b.tagName;)b=b.parentNode;h=b;if("P"==h.tagName&&"center"==e.getStyle(h,"text-align")){if(!e.isBody(h)&&1==e.getChildCount(h,function(a){return!e.isBr(a)&&!e.isWhitespace(a)}))if(b=h.previousSibling,f=h.nextSibling,
b&&f&&1==b.nodeType&&1==f.nodeType&&b.tagName==f.tagName&&e.isBlockElm(b)){for(b.appendChild(h.firstChild);f.firstChild;)b.appendChild(f.firstChild);e.remove(h);e.remove(f)}else e.setStyle(h,"text-align","");d.selectNode(c).select()}e.setStyle(c,"float","none"==a?"":a);"none"==a&&e.removeAttributes(c,"align");break;case "center":if("center"!=this.queryCommandValue("imagefloat")){b=c.parentNode;e.setStyle(c,"float","");e.removeAttributes(c,"align");for(h=c;b&&1==e.getChildCount(b,function(a){return!e.isBr(a)&&
!e.isWhitespace(a)})&&(w.$inline[b.tagName]||"A"==b.tagName);)h=b,b=b.parentNode;d.setStartBefore(h).setCursor(!1);b=this.document.createElement("div");b.appendChild(h);e.setStyle(h,"float","");this.execCommand("insertHtml",'<p id="_img_parent_tmp" style="text-align:center">'+b.innerHTML+"</p>");h=this.document.getElementById("_img_parent_tmp");h.removeAttribute("id");h=h.firstChild;d.selectNode(h).select();(f=h.parentNode.nextSibling)&&e.isEmptyNode(f)&&e.remove(f)}}}},queryCommandValue:function(){var g=
this.selection.getRange(),a;return g.collapsed?"none":(g=g.getClosedNode())&&1==g.nodeType&&"IMG"==g.tagName?(a=g.getAttribute("align")||e.getComputedStyle(g,"float"),"none"==a&&(a="center"==e.getComputedStyle(g.parentNode,"text-align")?"center":a),{left:1,right:1,center:1}[a]?a:"none"):"none"},queryCommandState:function(){var e=this.selection.getRange();return e.collapsed?-1:(e=e.getClosedNode())&&1==e.nodeType&&"IMG"==e.tagName?0:-1}};UE.commands.insertimage={execCommand:function(g,a){a=q.isArray(a)?
a:[a];if(a.length){var d=this.selection.getRange(),c=d.getClosedNode();if(c&&/img/i.test(c.tagName)&&"edui-faked-video"!=c.className&&!c.getAttribute("word_img")){var b=a.shift(),h=b.floatStyle;delete b.floatStyle;e.setAttributes(c,b);this.execCommand("imagefloat",h);0<a.length&&(d.setStartAfter(c).setCursor(!1,!0),this.execCommand("insertimage",a))}else{d=[];h="";c=a[0];if(1==a.length)h=c.islocal_attachment?' resource="image" key="'+c.localID+'"':"",h='<img src="'+c.src+'" '+(c._src?' _src="'+c._src+
'" ':"")+(c.width?'width="'+c.width+'" ':"")+(c.height?' height="'+c.height+'" ':"")+("left"==c.floatStyle||"right"==c.floatStyle?' style="float:'+c.floatStyle+';"':"")+(c.title&&""!=c.title?' title="'+c.title+'"':"")+(c.border&&"0"!=c.border?' border="'+c.border+'"':"")+(c.alt&&""!=c.alt?' alt="'+c.alt+'"':"")+(c.hspace&&"0"!=c.hspace?' hspace = "'+c.hspace+'"':"")+(c.vspace&&"0"!=c.vspace?' vspace = "'+c.vspace+'"':"")+h+" onerror=\"this.src='/assets/images/img404.png'\"/>","center"==c.floatStyle&&
(h='<p style="text-align: center">'+h+"</p>"),d.push(h);else for(b=0;c=a[b++];)h=c.islocal_attachment?' resource="image" key="'+c.localID+'"':"",h="<p "+("center"==c.floatStyle?'style="text-align: center" ':"")+'><img src="'+c.src+'" '+(c.width?'width="'+c.width+'" ':"")+(c._src?' _src="'+c._src+'" ':"")+(c.height?' height="'+c.height+'" ':"")+' style="'+(c.floatStyle&&"center"!=c.floatStyle?"float:"+c.floatStyle+";":"")+(c.border||"")+'" '+(c.title?' title="'+c.title+'"':"")+h+" onerror=\"this.src='/assets/images/img404.png'\"/></p>",
d.push(h);this.execCommand("insertHtml",d.join(""))}}},queryCommandState:function(){var e=!1;try{var a=this.queryCommandValue("link"),e=a&&a.getAttribute("resource")}catch(d){}return e?-1:0}};UE.plugins.justify=function(){var g=e.isBlockElm,a={left:1,right:1,center:1,justify:1},d=function(a,b){var d=a.createBookmark(),f=function(a){return 1==a.nodeType?"br"!=a.tagName.toLowerCase()&&!e.isBookmarkNode(a):!e.isWhitespace(a)};a.enlarge(!0);for(var l=a.createBookmark(),k=e.getNextDomNode(l.start,!1,f),
n=a.cloneRange(),m;k&&!(e.getPosition(k,l.end)&e.POSITION_FOLLOWING);)if(3!=k.nodeType&&g(k))k=e.getNextDomNode(k,!0,f);else{for(n.setStartBefore(k);k&&k!==l.end&&!g(k);)m=k,k=e.getNextDomNode(k,!1,null,function(a){return!g(a)});n.setEndAfter(m);k=n.getCommonAncestor();if(!e.isBody(k)&&g(k))e.setStyles(k,q.isString(b)?{"text-align":b}:b);else{k=a.document.createElement("p");e.setStyles(k,q.isString(b)?{"text-align":b}:b);var s=n.extractContents();k.appendChild(s);n.insertNode(k)}k=e.getNextDomNode(k,
!1,f)}return a.moveToBookmark(l).moveToBookmark(d)};UE.commands.justify={execCommand:function(a,b){var h=this.selection.getRange(),f;h.collapsed&&(f=this.document.createTextNode("p"),h.insertNode(f));d(h,b);f&&(h.setStartBefore(f).collapse(!0),e.remove(f));h.select();return!0},queryCommandValue:function(){var c=this.selection.getStart(),c=e.getComputedStyle(c,"text-align");return a[c]?c:"left"},queryCommandState:function(){var a=this.selection.getStart();return a&&e.findParentByTagName(a,["td","th",
"caption"],!0)?-1:0}}};UE.plugins.font=function(){function g(a){for(var b;b=a.parentNode;)if("SPAN"==b.tagName&&1==e.getChildCount(b,function(a){return!e.isBookmarkNode(a)&&!e.isBr(a)}))b.style.cssText+=a.style.cssText,e.remove(a,!0),a=b;else break}function a(a,b,f){if(h[b]&&(a.adjustmentBoundary(),!a.collapsed&&1==a.startContainer.nodeType)){var c=a.startContainer.childNodes[a.startOffset];if(c&&e.isTagNode(c,"span")){var d=a.createBookmark();q.each(e.getElementsByTagName(c,"span"),function(a){!a.parentNode||
e.isBookmarkNode(a)||"backcolor"==b&&e.getComputedStyle(a,"background-color").toLowerCase()===f||(e.removeStyle(a,h[b]),0==a.style.cssText.replace(/^\s+$/,"").length&&e.remove(a,!0))});a.moveToBookmark(d)}}}function d(b,f,c){var d=b.collapsed,h=b.createBookmark();if(d)for(d=h.start.parentNode;w.$inline[d.tagName];)d=d.parentNode;else d=e.getCommonAncestor(h.start,h.end);q.each(e.getElementsByTagName(d,"span"),function(a){if(a.parentNode&&!e.isBookmarkNode(a))if(/\s*border\s*:\s*none;?\s*/i.test(a.style.cssText))/^\s*border\s*:\s*none;?\s*$/.test(a.style.cssText)?
e.remove(a,!0):e.removeStyle(a,"border");else{/border/i.test(a.style.cssText)&&("SPAN"==a.parentNode.tagName&&/border/i.test(a.parentNode.style.cssText))&&(a.style.cssText=a.style.cssText.replace(/border[^:]*:[^;]+;?/gi,""));if("fontborder"!=f||"none"!=c)for(var b=a.nextSibling;b&&1==b.nodeType&&"SPAN"==b.tagName;){if(e.isBookmarkNode(b)&&"fontborder"==f)a.appendChild(b);else if(b.style.cssText==a.style.cssText&&(e.moveChild(b,a),e.remove(b)),a.nextSibling===b)break;b=a.nextSibling}g(a);r.ie&&8<r.version&&
(b=e.findParent(a,function(a){return"SPAN"==a.tagName&&/background-color/.test(a.style.cssText)}))&&!/background-color/.test(a.style.cssText)&&(a.style.backgroundColor=b.style.backgroundColor)}});b.moveToBookmark(h);a(b,f,c)}var c={forecolor:"color",backcolor:"background-color",fontsize:"font-size",fontfamily:"font-family",underline:"text-decoration",strikethrough:"text-decoration",fontborder:"border"},b={underline:1,strikethrough:1,fontborder:1},h={forecolor:"color",backcolor:"background-color",
fontsize:"font-size",fontfamily:"font-family"};this.setOpt({fontfamily:[{name:"songti",val:"\u5b8b\u4f53,SimSun"},{name:"yahei",val:"\u5fae\u8f6f\u96c5\u9ed1,Microsoft YaHei"},{name:"kaiti",val:"\u6977\u4f53,\u6977\u4f53_GB2312, SimKai"},{name:"heiti",val:"\u9ed1\u4f53, SimHei"},{name:"lishu",val:"\u96b6\u4e66, SimLi"},{name:"tahoma",val:"Tahoma"},{name:"andaleMono",val:"andale mono"},{name:"arial",val:"arial, helvetica,sans-serif"},{name:"arialBlack",val:"arial black,avant garde"},{name:"comicSansMs",
val:"comic sans ms"},{name:"impact",val:"impact,chicago"},{name:"timesNewRoman",val:"times new roman"}],fontsize:[10,11,12,14,16,18,20,24,36]});this.addInputRule(function(a){q.each(a.getNodesByTagName("u s del font strike"),function(a){if("font"==a.tagName){var b=[],f;for(f in a.attrs)switch(f){case "size":switch(a.attrs[f]){case "1":b.push("font-size:10px;");break;case "2":b.push("font-size:13px;");break;case "3":b.push("font-size:16px;");break;case "4":b.push("font-size:18px;");break;case "5":b.push("font-size:24px;");
break;case "6":b.push("font-size:32px;");break;case "7":b.push("font-size:48px;")}break;case "color":b.push("color:"+a.attrs[f]);break;case "face":b.push("font-family:"+a.attrs[f]);break;case "style":b.push(a.attrs[f])}a.attrs={style:b.join(";")}}else b="u"==a.tagName?"underline":"line-through",a.attrs={style:(a.getAttr("style")||"")+"text-decoration:"+b+";"};a.tagName="span"})});for(var f in c)(function(a,f){UE.commands[a]={execCommand:function(c,h){h=h||(this.queryCommandState(c)?"none":"underline"==
c?"underline":"fontborder"==c?"1px solid #000":"line-through");var g=this.selection.getRange(),u;if("default"==h)g.collapsed&&(u=this.document.createTextNode("font"),g.insertNode(u).select()),this.execCommand("removeFormat","span,a",f),u&&(g.setStartBefore(u).collapse(!0),e.remove(u)),d(g,c,h),g.select();else if(g.collapsed){var v=e.findParentByTagName(g.startContainer,"span",!0);u=this.document.createTextNode("font");if(!v||v.children.length||v[r.ie?"innerText":"textContent"].replace(R,"").length){g.insertNode(u);
g.selectNode(u).select();v=g.document.createElement("span");if(b[a]){if(e.findParentByTagName(u,"a",!0)){g.setStartBefore(u).setCursor();e.remove(u);return}this.execCommand("removeFormat","span,a",f)}v.style.cssText=f+":"+h;u.parentNode.insertBefore(v,u);if(!r.ie||r.ie&&9==r.version)for(var t=v.parentNode;!e.isBlockElm(t);)"SPAN"==t.tagName&&(v.style.cssText=t.style.cssText+";"+v.style.cssText),t=t.parentNode;ia?setTimeout(function(){g.setStart(v,0).collapse(!0);d(g,c,h);g.select()}):(g.setStart(v,
0).collapse(!0),d(g,c,h),g.select())}else g.insertNode(u),b[a]&&(g.selectNode(u).select(),this.execCommand("removeFormat","span,a",f,null),v=e.findParentByTagName(u,"span",!0),g.setStartBefore(u)),v&&(v.style.cssText+=";"+f+":"+h),g.collapse(!0).select();e.remove(u)}else b[a]&&this.queryCommandValue(a)&&this.execCommand("removeFormat","span,a",f),g=this.selection.getRange(),g.applyInlineStyle("span",{style:f+":"+h}),d(g,c,h),g.select();return!0},queryCommandValue:function(a){var b=this.selection.getStart();
if("underline"==a||"strikethrough"==a){for(var c=b;c&&!e.isBlockElm(c)&&!e.isBody(c);){if(1==c.nodeType&&(a=e.getComputedStyle(c,f),"none"!=a))return a;c=c.parentNode}return"none"}if("fontborder"==a){for(a=b;a&&w.$inline[a.tagName];){if((c=e.getComputedStyle(a,"border"))&&/1px/.test(c)&&/solid/.test(c))return c;a=a.parentNode}return""}return"FontSize"==a?(c=e.getComputedStyle(b,f),(a=/^([\d\.]+)(\w+)$/.exec(c))?Math.floor(a[1])+a[2]:c):e.getComputedStyle(b,f)},queryCommandState:function(a){if(!b[a])return 0;
var f=this.queryCommandValue(a);return"fontborder"==a?/1px/.test(f)&&/solid/.test(f):f==("underline"==a?"underline":"line-through")}}})(f,c[f])};UE.plugins.link=function(){function g(a){var d=a.startContainer,c=a.endContainer;(d=e.findParentByTagName(d,"a",!0))&&a.setStartBefore(d);(c=e.findParentByTagName(c,"a",!0))&&a.setEndAfter(c)}UE.commands.unlink={execCommand:function(){var a=this.selection.getRange(),d;if(!a.collapsed||e.findParentByTagName(a.startContainer,"a",!0))d=a.createBookmark(),g(a),
a.removeInlineStyle("a").moveToBookmark(d).select()},queryCommandState:function(){var a=this.queryCommandValue("link"),d=!0;try{d=a&&a.getAttribute("resource")?!1:!0}catch(c){}return!this.highlight&&a&&d?0:-1}};UE.commands.link={execCommand:function(a,d){var c;d._href&&(d._href=q.unhtml(d._href,/[<">]/g));d.href&&(d.href=q.unhtml(d.href,/[<">]/g));d.textValue&&(d.textValue=q.unhtml(d.textValue,/[<">]/g));var b=c=this.selection.getRange(),h=b.cloneRange(),f=this.queryCommandValue("link");g(b=b.adjustmentBoundary());
var l=b.startContainer;1==l.nodeType&&f&&(l=l.childNodes[b.startOffset])&&(1==l.nodeType&&"A"==l.tagName&&/^(?:https?|ftp|file)\s*:\s*\/\//.test(l[r.ie?"innerText":"textContent"]))&&(l[r.ie?"innerText":"textContent"]=q.html(d.textValue||d.href));if(!h.collapsed||f)b.removeInlineStyle("a"),h=b.cloneRange();if(h.collapsed){var f=b.document.createElement("a"),k="";d.textValue?(k=q.html(d.textValue),delete d.textValue):k=q.html(d.href);e.setAttributes(f,d);(l=e.findParentByTagName(h.startContainer,"a",
!0))&&e.isInNodeEndBoundary(h,l)&&b.setStartAfter(l).collapse(!0);f[r.ie?"innerText":"textContent"]=k;b.insertNode(f).selectNode(f)}else b.applyInlineStyle("a",d);c.collapse().select(!0)},queryCommandValue:function(){var a=this.selection.getRange(),d;if(a.collapsed){if(d=a.startContainer,(d=1==d.nodeType?d:d.parentNode)&&(d=e.findParentByTagName(d,"a",!0))&&!e.isInNodeEndBoundary(a,d))return d}else{a.shrinkBoundary();var c=3!=a.startContainer.nodeType&&a.startContainer.childNodes[a.startOffset]?a.startContainer.childNodes[a.startOffset]:
a.startContainer,b=3==a.endContainer.nodeType||0==a.endOffset?a.endContainer:a.endContainer.childNodes[a.endOffset-1],a=a.getCommonAncestor();d=e.findParentByTagName(a,"a",!0);if(!d&&1==a.nodeType)for(var a=a.getElementsByTagName("a"),h,f,l=0,k;k=a[l++];)if(h=e.getPosition(k,c),f=e.getPosition(k,b),(h&e.POSITION_FOLLOWING||h&e.POSITION_CONTAINS)&&(f&e.POSITION_PRECEDING||f&e.POSITION_CONTAINS)){d=k;break}return d}},queryCommandState:function(){var a=this.selection.getRange().getClosedNode(),a=a&&
"edui-faked-video"==a.className;if(!a){var d=this.queryCommandValue("link");try{a=d&&d.getAttribute("resource")}catch(c){}}return a?-1:0}}};UE.plugins.insertframe=function(){var e=this;e.addListener("selectionchange",function(){e._iframe&&delete e._iframe})};UE.commands.scrawl={queryCommandState:function(){return r.ie&&8>=r.version?-1:0}};UE.plugins.removeformat=function(){this.setOpt({removeFormatTags:"b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var",removeFormatAttributes:"class,style,lang,width,height,align,hspace,valign"});
this.commands.removeformat={execCommand:function(g,a,d,c,b){function h(a){if(3==a.nodeType||"span"!=a.tagName.toLowerCase())return 0;if(r.ie){var b=a.attributes;if(b.length){a=0;for(var f=b.length;a<f;a++)if(b[a].specified)return 0;return 1}}return!a.attributes.length}var f=RegExp("^(?:"+(a||this.options.removeFormatTags).replace(/,/g,"|")+")$","i"),l=d?[]:(c||this.options.removeFormatAttributes).split(",");g=new J.Range(this.document);var k,n,m=function(a){return 1==a.nodeType};g=this.selection.getRange();
(function(a){var c=a.createBookmark();a.collapsed&&a.enlarge(!0);if(!b){var g=e.findParentByTagName(a.startContainer,"a",!0);g&&a.setStartBefore(g);(g=e.findParentByTagName(a.endContainer,"a",!0))&&a.setEndAfter(g)}k=a.createBookmark();for(g=k.start;(n=g.parentNode)&&!e.isBlockElm(n);)e.breakParent(g,n),e.clearEmptySibling(g);if(k.end){for(g=k.end;(n=g.parentNode)&&!e.isBlockElm(n);)e.breakParent(g,n),e.clearEmptySibling(g);for(var g=e.getNextDomNode(k.start,!1,m),t;g&&g!=k.end;)t=e.getNextDomNode(g,
!0,m),w.$empty[g.tagName.toLowerCase()]||e.isBookmarkNode(g)||(f.test(g.tagName)?d?(e.removeStyle(g,d),h(g)&&"text-decoration"!=d&&e.remove(g,!0)):e.remove(g,!0):w.$tableContent[g.tagName]||w.$list[g.tagName]||(e.removeAttributes(g,l),h(g)&&e.remove(g,!0))),g=t}g=k.start.parentNode;!e.isBlockElm(g)||(w.$tableContent[g.tagName]||w.$list[g.tagName])||e.removeAttributes(g,l);g=k.end.parentNode;k.end&&(e.isBlockElm(g)&&!w.$tableContent[g.tagName]&&!w.$list[g.tagName])&&e.removeAttributes(g,l);a.moveToBookmark(k).moveToBookmark(c);
g=a.startContainer;for(t=a.collapsed;1==g.nodeType&&e.isEmptyNode(g)&&w.$removeEmpty[g.tagName];)c=g.parentNode,a.setStartBefore(g),a.startContainer===a.endContainer&&a.endOffset--,e.remove(g),g=c;if(!t)for(g=a.endContainer;1==g.nodeType&&e.isEmptyNode(g)&&w.$removeEmpty[g.tagName];)c=g.parentNode,a.setEndBefore(g),e.remove(g),g=c})(g);g.select()},queryCommandState:function(){var e=!1;try{var a=this.queryCommandValue("link"),e=a&&a.getAttribute("resource")}catch(d){}return e?-1:0}}};UE.plugins.blockquote=
function(){this.commands.blockquote={execCommand:function(g,a){var d=this.selection.getRange(),c=e.filterNodeList(this.selection.getStartElementPath(),"blockquote"),b=w.blockquote,h=d.createBookmark();if(c){var b=d.startContainer,b=e.isBlockElm(b)?b:e.findParent(b,function(a){return e.isBlockElm(a)}),f=d.endContainer,f=e.isBlockElm(f)?f:e.findParent(f,function(a){return e.isBlockElm(a)}),b=e.findParentByTagName(b,"li",!0)||b,f=e.findParentByTagName(f,"li",!0)||f;"LI"==b.tagName||"TD"==b.tagName||
b===c||e.isBody(b)?e.remove(c,!0):e.breakParent(b,c);b!==f&&(c=e.findParentByTagName(f,"blockquote"))&&("LI"==f.tagName||"TD"==f.tagName||e.isBody(f)?c.parentNode&&e.remove(c,!0):e.breakParent(f,c));for(var l=e.getElementsByTagName(this.document,"blockquote"),c=0,k;k=l[c++];)k.childNodes.length?e.getPosition(k,b)&e.POSITION_FOLLOWING&&e.getPosition(k,f)&e.POSITION_PRECEDING&&e.remove(k,!0):e.remove(k)}else{c=d.cloneRange();l=f=1==c.startContainer.nodeType?c.startContainer:c.startContainer.parentNode;
for(k=1;;){if(e.isBody(f)){l!==f?d.collapsed?(c.selectNode(l),k=0):c.setStartBefore(l):c.setStart(f,0);break}if(!b[f.tagName]){d.collapsed?c.selectNode(l):c.setStartBefore(l);break}l=f;f=f.parentNode}if(k)for(l=f=f=1==c.endContainer.nodeType?c.endContainer:c.endContainer.parentNode;;){if(e.isBody(f)){l!==f?c.setEndAfter(l):c.setEnd(f,f.childNodes.length);break}if(!b[f.tagName]){c.setEndAfter(l);break}l=f;f=f.parentNode}f=d.document.createElement("blockquote");e.setAttributes(f,a);f.appendChild(c.extractContents());
c.insertNode(f);b=e.getElementsByTagName(f,"blockquote");for(c=0;f=b[c++];)f.parentNode&&e.remove(f,!0)}d.moveToBookmark(h).select()},queryCommandState:function(){return e.filterNodeList(this.selection.getStartElementPath(),"blockquote")?1:0}}};UE.commands.touppercase=UE.commands.tolowercase={execCommand:function(g){var a=this.selection.getRange();if(a.collapsed)return a;for(var d=a.createBookmark(),c=d.end,b=function(a){return!e.isBr(a)&&!e.isWhitespace(a)},h=e.getNextDomNode(d.start,!1,b);h&&e.getPosition(h,
c)&e.POSITION_PRECEDING&&(3==h.nodeType&&(h.nodeValue=h.nodeValue["touppercase"==g?"toUpperCase":"toLowerCase"]()),h=e.getNextDomNode(h,!0,b),h!==c););a.moveToBookmark(d).select()}};UE.commands.indent={execCommand:function(){var e=this.queryCommandState("indent")?"0em":this.options.indentValue||"2em";this.execCommand("Paragraph","p",{style:"text-indent:"+e})},queryCommandState:function(){var g=e.filterNodeList(this.selection.getStartElementPath(),"p h1 h2 h3 h4 h5 h6");return g&&g.style.textIndent&&
parseInt(g.style.textIndent)?1:0}};UE.commands.print={execCommand:function(){this.window.print()},notNeedUndo:1};UE.commands.preview={execCommand:function(){var e=window.open("","_blank","").document;e.open();e.write('<html><head><script src="'+this.options.UEDITOR_HOME_URL+"ueditor.parse.js\">\x3c/script><script>setTimeout(function(){uParse('div',{    'highlightJsUrl':'"+this.options.UEDITOR_HOME_URL+"third-party/SyntaxHighlighter/shCore.js',    'highlightCssUrl':'"+this.options.UEDITOR_HOME_URL+
"third-party/SyntaxHighlighter/shCoreDefault.css'})},300)\x3c/script></head><body><div>"+this.getContent(null,null,!0)+"</div></body></html>");e.close()},notNeedUndo:1};UE.plugins.selectall=function(){this.commands.selectall={execCommand:function(){var g=this.body,a=this.selection.getRange();a.selectNodeContents(g);e.isEmptyBlock(g)&&(r.opera&&(g.firstChild&&1==g.firstChild.nodeType)&&a.setStartAtFirst(g.firstChild),a.collapse(!0));a.select(!0)},notNeedUndo:1};this.addshortcutkey({selectAll:"ctrl+65"})};
UE.plugins.paragraph=function(){var g=e.isBlockElm,a=["TD","LI","PRE"],d=function(c,b,d,f){var l=c.createBookmark(),k=function(a){return 1==a.nodeType?"br"!=a.tagName.toLowerCase()&&!e.isBookmarkNode(a):!e.isWhitespace(a)},n;c.enlarge(!0);var m=c.createBookmark();n=e.getNextDomNode(m.start,!1,k);for(var s=c.cloneRange(),u;n&&!(e.getPosition(n,m.end)&e.POSITION_FOLLOWING);)if(3!=n.nodeType&&g(n))n=e.getNextDomNode(n,!0,k);else{for(s.setStartBefore(n);n&&n!==m.end&&!g(n);)u=n,n=e.getNextDomNode(n,!1,
null,function(a){return!g(a)});s.setEndAfter(u);n=c.document.createElement(b);d&&(e.setAttributes(n,d),f&&("customstyle"==f&&d.style)&&(n.style.cssText=d.style));n.appendChild(s.extractContents());e.isEmptyNode(n)&&e.fillChar(c.document,n);s.insertNode(n);var v=n.parentNode;g(v)&&(!e.isBody(n.parentNode)&&-1==q.indexOf(a,v.tagName))&&(f&&"customstyle"==f||(v.getAttribute("dir")&&n.setAttribute("dir",v.getAttribute("dir")),v.style.cssText&&(n.style.cssText=v.style.cssText+";"+n.style.cssText),v.style.textAlign&&
!n.style.textAlign&&(n.style.textAlign=v.style.textAlign),v.style.textIndent&&!n.style.textIndent&&(n.style.textIndent=v.style.textIndent),v.style.padding&&!n.style.padding&&(n.style.padding=v.style.padding)),d&&/h\d/i.test(v.tagName)&&!/h\d/i.test(n.tagName)?(e.setAttributes(v,d),f&&("customstyle"==f&&d.style)&&(v.style.cssText=d.style),e.remove(n,!0),n=v):e.remove(n.parentNode,!0));n=-1!=q.indexOf(a,v.tagName)?v:n;n=e.getNextDomNode(n,!1,k)}return c.moveToBookmark(m).moveToBookmark(l)};this.setOpt("paragraph",
{p:"",h1:"",h2:"",h3:"",h4:"",h5:"",h6:""});this.commands.paragraph={execCommand:function(a,b,h,f){a=this.selection.getRange();if(a.collapsed){var l=this.document.createTextNode("p");a.insertNode(l);if(r.ie){var k=l.previousSibling;k&&e.isWhitespace(k)&&e.remove(k);(k=l.nextSibling)&&e.isWhitespace(k)&&e.remove(k)}}a=d(a,b,h,f);l&&(a.setStartBefore(l).collapse(!0),pN=l.parentNode,e.remove(l),e.isBlockElm(pN)&&e.isEmptyNode(pN)&&e.fillNode(this.document,pN));r.gecko&&a.collapsed&&1==a.startContainer.nodeType&&
(h=a.startContainer.childNodes[a.startOffset])&&(1==h.nodeType&&h.tagName.toLowerCase()==b)&&a.setStart(h,0).collapse(!0);a.select();return!0},queryCommandValue:function(){var a=e.filterNodeList(this.selection.getStartElementPath(),"p h1 h2 h3 h4 h5 h6");return a?a.tagName.toLowerCase():""}}};(function(){var g=e.isBlockElm,a=function(a){return e.filterNodeList(a.selection.getStartElementPath(),function(a){return a.getAttribute("dir")})},d=function(c,b,d){var f=function(a){return 1==a.nodeType?!e.isBookmarkNode(a):
!e.isWhitespace(a)};if((b=a(b))&&c.collapsed)return b.setAttribute("dir",d),c;b=c.createBookmark();c.enlarge(!0);for(var l=c.createBookmark(),k=e.getNextDomNode(l.start,!1,f),n=c.cloneRange(),m;k&&!(e.getPosition(k,l.end)&e.POSITION_FOLLOWING);)if(3!=k.nodeType&&g(k))k=e.getNextDomNode(k,!0,f);else{for(n.setStartBefore(k);k&&k!==l.end&&!g(k);)m=k,k=e.getNextDomNode(k,!1,null,function(a){return!g(a)});n.setEndAfter(m);k=n.getCommonAncestor();if(!e.isBody(k)&&g(k))k.setAttribute("dir",d);else{k=c.document.createElement("p");
k.setAttribute("dir",d);var s=n.extractContents();k.appendChild(s);n.insertNode(k)}k=e.getNextDomNode(k,!1,f)}return c.moveToBookmark(l).moveToBookmark(b)};UE.commands.directionality={execCommand:function(a,b){var h=this.selection.getRange();if(h.collapsed){var f=this.document.createTextNode("d");h.insertNode(f)}d(h,this,b);f&&(h.setStartBefore(f).collapse(!0),e.remove(f));h.select();return!0},queryCommandValue:function(){var c=a(this);return c?c.getAttribute("dir"):"ltr"}}})();UE.plugins.horizontal=
function(){this.commands.horizontal={execCommand:function(e){if(-1!==this.queryCommandState(e)){this.execCommand("insertHtml","<hr>");e=this.selection.getRange();var a=e.startContainer;if(1==a.nodeType&&!a.childNodes[e.startOffset]){var d;(d=a.childNodes[e.startOffset-1])&&(1==d.nodeType&&"HR"==d.tagName)&&("p"==this.options.enterTag?(d=this.document.createElement("p"),e.insertNode(d),e.setStart(d,0).setCursor()):(d=this.document.createElement("br"),e.insertNode(d),e.setStartBefore(d).setCursor()))}return!0}},
queryCommandState:function(){return e.filterNodeList(this.selection.getStartElementPath(),"table")?-1:0}};this.addListener("delkeydown",function(g,a){var d=this.selection.getRange();d.txtToElmBoundary(!0);if(e.isStartInblock(d)){var c=d.startContainer.previousSibling;if(c&&e.isTagNode(c,"hr"))return e.remove(c),d.select(),e.preventDefault(a),!0}})};UE.commands.time=UE.commands.date={execCommand:function(e){var a=new Date;this.execCommand("insertHtml","time"==e?a.getHours()+":"+(10>a.getMinutes()?
"0"+a.getMinutes():a.getMinutes())+":"+(10>a.getSeconds()?"0"+a.getSeconds():a.getSeconds()):a.getFullYear()+"-"+(10>a.getMonth()+1?"0"+(a.getMonth()+1):a.getMonth()+1)+"-"+(10>a.getDate()?"0"+a.getDate():a.getDate()))}};UE.plugins.rowspacing=function(){this.setOpt({rowspacingtop:["5","10","15","20","25"],rowspacingbottom:["5","10","15","20","25"]});this.commands.rowspacing={execCommand:function(e,a,d){this.execCommand("paragraph","p",{style:"margin-"+d+":"+a+"px"});return!0},queryCommandValue:function(g,
a){var d=e.filterNodeList(this.selection.getStartElementPath(),function(a){return e.isBlockElm(a)});return d?(d=e.getComputedStyle(d,"margin-"+a).replace(/[^\d]/g,""))?d:0:0}}};UE.plugins.lineheight=function(){this.setOpt({lineheight:"1 1.5 1.75 2 3 4 5".split(" ")});this.commands.lineheight={execCommand:function(e,a){this.execCommand("paragraph","p",{style:"line-height:"+("1"==a?"normal":a+"em")});return!0},queryCommandValue:function(){var g=e.filterNodeList(this.selection.getStartElementPath(),
function(a){return e.isBlockElm(a)});if(g)return g=e.getComputedStyle(g,"line-height"),"normal"==g?1:g.replace(/[^\d.]*/ig,"")}}};UE.plugins.insertcode=function(){var g=this;g.ready(function(){q.cssRule("pre","pre{margin:.5em 0;padding:.4em .6em;border-radius:8px;background:#f8f8f8;}",g.document)});g.setOpt("insertcode",{as3:"ActionScript3",bash:"Bash/Shell",cpp:"C/C++",css:"Css",cf:"CodeFunction","c#":"C#",delphi:"Delphi",diff:"Diff",erlang:"Erlang",groovy:"Groovy",html:"Html",java:"Java",jfx:"JavaFx",
js:"Javascript",pl:"Perl",php:"Php",plain:"Plain Text",ps:"PowerShell",python:"Python",ruby:"Ruby",scala:"Scala",sql:"Sql",vb:"Vb",xml:"Xml"});g.commands.insertcode={execCommand:function(a,d){var c=this.selection.getRange(),b=e.findParentByTagName(c.startContainer,"pre",!0);if(b)b.className="brush:"+d+";toolbar:false;";else{var h="";c.collapsed?h=r.ie?8<r.version?"":"&nbsp;":"<br/>":(b=c.extractContents(),c=this.document.createElement("div"),c.appendChild(b),q.each(UE.filterNode(UE.htmlparser(c.innerHTML.replace(/[\r\t]/g,
"")),this.options.filterTxtRules).children,function(a){r.ie&&8<r.version?("element"==a.type?"br"==a.tagName?h+="\n":w.$empty[a.tagName]||(q.each(a.children,function(b){"element"==b.type?"br"==b.tagName?h+="\n":w.$empty[a.tagName]||(h+=b.innerText()):h+=b.data}),/\n$/.test(h)||(h+="\n")):h+=a.data+"\n",!a.nextSibling()&&/\n$/.test(h)&&(h=h.replace(/\n$/,""))):r.ie?("element"==a.type?"br"==a.tagName?h+="<br>":w.$empty[a.tagName]||(q.each(a.children,function(b){"element"==b.type?"br"==b.tagName?h+="<br>":
w.$empty[a.tagName]||(h+=b.innerText()):h+=b.data}),/br>$/.test(h)||(h+="<br>")):h+=a.data+"<br>",!a.nextSibling()&&/<br>$/.test(h)&&(h=h.replace(/<br>$/,""))):(h+="element"==a.type?w.$empty[a.tagName]?"":a.innerText():a.data,!/br\/?\s*>$/.test(h)&&a.nextSibling()&&(h+="<br>"))}));this.execCommand("inserthtml",'<pre id="coder"class="brush:'+d+';toolbar:false">'+h+"</pre>",!0);b=this.document.getElementById("coder");e.removeAttributes(b,"id");(c=b.previousSibling)&&(3==c.nodeType&&1==c.nodeValue.length&&
r.ie&&6==r.version||e.isEmptyBlock(c))&&e.remove(c);c=this.selection.getRange();e.isEmptyBlock(b)?c.setStart(b,0).setCursor(!1,!0):c.selectNodeContents(b).select()}},queryCommandValue:function(){var a=this.selection.getStartElementPath(),d="";q.each(a,function(a){if("PRE"==a.nodeName)return d=(a=a.className.match(/brush:([^;]+)/))&&a[1]?a[1]:"",!1});return d}};g.addInputRule(function(a){q.each(a.getNodesByTagName("pre"),function(a){var c=a.getNodesByTagName("br");c.length?r.ie&&8<r.version&&q.each(c,
function(a){var c=UE.uNode.createText("\n");a.parentNode.insertBefore(c,a);a.parentNode.removeChild(a)}):r.ie&&8<r.version||(c=a.innerText().split(/\n/),a.innerHTML(""),q.each(c,function(b){b.length&&a.appendChild(UE.uNode.createText(b));a.appendChild(UE.uNode.createElement("br"))}))})});g.addOutputRule(function(a){q.each(a.getNodesByTagName("pre"),function(a){var c="";q.each(a.children,function(a){c="text"==a.type?c+a.data.replace(/[ ]/g,"&nbsp;").replace(/\n$/,""):"br"==a.tagName?c+"\n":c+(w.$empty[a.tagName]?
a.innerText():"")});a.innerText(c.replace(/(&nbsp;|\n)+$/,""))})});g.notNeedCodeQuery={help:1,undo:1,redo:1,source:1,print:1,searchreplace:1,fullscreen:1,preview:1,insertparagraph:1,elementpath:1,highlightcode:1,insertcode:1,inserthtml:1,selectall:1};g.queryCommandState=function(a){return!this.notNeedCodeQuery[a.toLowerCase()]&&this.selection&&this.queryCommandValue("insertcode")?-1:UE.Editor.prototype.queryCommandState.apply(this,arguments)};g.addListener("beforeenterkeydown",function(){var a=g.selection.getRange(),
d=e.findParentByTagName(a.startContainer,"pre",!0);if(d){g.fireEvent("saveScene");a.collapsed||a.deleteContents();if(r.ie)if(8<r.version){var d=g.document.createTextNode("\n"),c=a.startContainer;if(0==a.startOffset){if(c.previousSibling){a.insertNode(d);var b=g.document.createTextNode(" ");a.setStartAfter(d).insertNode(b).setStart(b,0).collapse(!0).select(!0)}}else a.insertNode(d).setStartAfter(d),b=g.document.createTextNode(" "),(c=a.startContainer.childNodes[a.startOffset])&&!/^\n/.test(c.nodeValue)&&
a.setStartBefore(d),a.insertNode(b).setStart(b,0).collapse(!0).select(!0)}else{d=g.document.createElement("br");a.insertNode(d);a.insertNode(g.document.createTextNode(e.fillChar));a.setStartAfter(d);for(d=d.previousSibling;d;)if(c=d,d=d.previousSibling,!d||"BR"==d.nodeName){d=c;break}if(d){for(c="";d&&"BR"!=d.nodeName&&RegExp("^[ "+e.fillChar+"]*$").test(d.nodeValue);)c+=d.nodeValue,d=d.nextSibling;"BR"!=d.nodeName&&(d=d.nodeValue.match(RegExp("^([ "+e.fillChar+"]+)")))&&d[1]&&(c+=d[1]);c=g.document.createTextNode(c);
a.insertNode(c).setStartAfter(c)}a.collapse(!0).select()}else{d=g.document.createElement("br");a.insertNode(d).setStartAfter(d).collapse(!0);d.nextSibling?a.setStartAfter(d):a.insertNode(d.cloneNode(!1));for(d=d.previousSibling;d;)if(c=d,d=d.previousSibling,!d||"BR"==d.nodeName){d=c;break}if(d){for(c="";d&&"BR"!=d.nodeName&&RegExp("^[\\s"+e.fillChar+"]*$").test(d.nodeValue);)c+=d.nodeValue,d=d.nextSibling;"BR"!=d.nodeName&&(d=d.nodeValue.match(RegExp("^([\\s"+e.fillChar+"]+)")))&&d[1]&&(c+=d[1]);
c&&(c=g.document.createTextNode(c),a.insertNode(c).setStartAfter(c))}a.collapse(!0).select(!0)}g.fireEvent("saveScene");return!0}});g.addListener("tabkeydown",function(a,d){var c=g.selection.getRange(),b=e.findParentByTagName(c.startContainer,"pre",!0);if(b){g.fireEvent("saveScene");if(!d.shiftKey)if(c.collapsed)b=g.document.createTextNode("    "),c.insertNode(b).setStartAfter(b).collapse(!0).select(!0);else{for(var h=c.createBookmark(),f=h.start.previousSibling;f;){if(b.firstChild===f&&!e.isBr(f)){b.insertBefore(g.document.createTextNode("    "),
f);break}if(e.isBr(f)){b.insertBefore(g.document.createTextNode("    "),f.nextSibling);break}f=f.previousSibling}var l=h.end,f=h.start.nextSibling;for(b.firstChild===h.start&&b.insertBefore(g.document.createTextNode("    "),f.nextSibling);f&&f!==l;){if(e.isBr(f)&&f.nextSibling){if(f.nextSibling===l)break;b.insertBefore(g.document.createTextNode("    "),f.nextSibling)}f=f.nextSibling}c.moveToBookmark(h).select()}g.fireEvent("saveScene");return!0}});g.addListener("beforeinserthtml",function(a,d){var c=
this,b=c.selection.getRange();if(e.findParentByTagName(b.startContainer,"pre",!0)){b.collapsed||b.deleteContents();var h="";if(r.ie&&8<r.version){q.each(UE.filterNode(UE.htmlparser(d),c.options.filterTxtRules).children,function(a){"element"==a.type?"br"==a.tagName?h+="\n":w.$empty[a.tagName]||(q.each(a.children,function(b){"element"==b.type?"br"==b.tagName?h+="\n":w.$empty[a.tagName]||(h+=b.innerText()):h+=b.data}),/\n$/.test(h)||(h+="\n")):h+=a.data+"\n";!a.nextSibling()&&/\n$/.test(h)&&(h=h.replace(/\n$/,
""))});var f=c.document.createTextNode(q.html(h.replace(/&nbsp;/g," ")));b.insertNode(f).selectNode(f).select()}else{var l=c.document.createDocumentFragment();q.each(UE.filterNode(UE.htmlparser(d),c.options.filterTxtRules).children,function(a){"element"==a.type?"br"==a.tagName?l.appendChild(c.document.createElement("br")):w.$empty[a.tagName]||(q.each(a.children,function(b){"element"==b.type?"br"==b.tagName?l.appendChild(c.document.createElement("br")):w.$empty[a.tagName]||l.appendChild(c.document.createTextNode(q.html(b.innerText().replace(/&nbsp;/g,
" ")))):l.appendChild(c.document.createTextNode(q.html(b.data.replace(/&nbsp;/g," "))))}),"BR"!=l.lastChild.nodeName&&l.appendChild(c.document.createElement("br"))):l.appendChild(c.document.createTextNode(q.html(a.data.replace(/&nbsp;/g," "))));a.nextSibling()||"BR"!=l.lastChild.nodeName||l.removeChild(l.lastChild)});b.insertNode(l).select()}return!0}});g.addListener("keydown",function(a,d){if(40==(d.keyCode||d.which)){var c=this.selection.getRange(),b,h=c.startContainer;if(c.collapsed&&(b=e.findParentByTagName(c.startContainer,
"pre",!0))&&!b.nextSibling){for(var f=b.lastChild;f&&"BR"==f.nodeName;)f=f.previousSibling;if(f===h||c.startContainer===b&&c.startOffset==b.childNodes.length)this.execCommand("insertparagraph"),e.preventDefault(d)}}});g.addListener("delkeydown",function(a,d){var c=this.selection.getRange();c.txtToElmBoundary(!0);var b=c.startContainer;if(e.isTagNode(b,"pre")&&c.collapsed&&e.isStartInblock(c)){var h=g.document.createElement("p");e.fillNode(g.document,h);b.parentNode.insertBefore(h,b);e.remove(b);c.setStart(h,
0).setCursor(!1,!0);e.preventDefault(d);return!0}})};UE.commands.cleardoc={execCommand:function(e){var a=this;e=a.options.enterTag;var d=a.selection.getRange();"br"==e?(a.body.innerHTML="<br/>",d.setStart(a.body,0).setCursor()):(a.body.innerHTML="<p>"+(I?"":"<br/>")+"</p>",d.setStart(a.body.firstChild,0).setCursor(!1,!0));setTimeout(function(){a.fireEvent("clearDoc")},0)}};UE.plugins.anchor=function(){var g=this;g.ready(function(){q.cssRule("anchor",".anchorclass{background: url('"+g.options.UEDITOR_HOME_URL+
"themes/default/images/anchor.gif') no-repeat scroll left center transparent;border: 1px dotted #0000FF;cursor: auto;display: inline-block;height: 16px;width: 15px;}",g.document)});g.addOutputRule(function(a){q.each(a.getNodesByTagName("img"),function(a){var c;if(c=a.getAttr("anchorname"))a.tagName="a",a.setAttr({anchorname:"",name:c,"class":""})})});g.addInputRule(function(a){q.each(a.getNodesByTagName("a"),function(a){a.getAttr("name")&&!a.getAttr("href")&&(a.tagName="img",a.setAttr({anchorname:a.getAttr("name"),
"class":"anchorclass"}),a.setAttr("name"))})});g.commands.anchor={execCommand:function(a,d){var c=this.selection.getRange(),b=c.getClosedNode();b&&b.getAttribute("anchorname")?d?b.setAttribute("anchorname",d):(c.setStartBefore(b).setCursor(),e.remove(b)):d&&(b=this.document.createElement("img"),c.collapse(!0),e.setAttributes(b,{anchorname:d,"class":"anchorclass"}),c.insertNode(b).setStartAfter(b).setCursor(!1,!0))},queryCommandState:function(){var a=!1;try{var d=this.queryCommandValue("link"),a=d&&
d.getAttribute("resource")}catch(c){}return a?-1:0}}};UE.plugins.wordcount=function(){var g=this;g.addListener("contentchange",function(){g.fireEvent("wordcount")});var a;g.addListener("ready",function(){var d=this;e.on(d.body,"keyup",function(c){(c.keyCode||c.which)in{16:1,18:1,20:1,37:1,38:1,39:1,40:1}||(clearTimeout(a),a=setTimeout(function(){d.fireEvent("wordcount")},200))})})};UE.plugins.pagebreak=function(){function g(a){if(e.isEmptyBlock(a)){for(var c=a.firstChild,f;c&&1==c.nodeType&&e.isEmptyBlock(c);)f=
c,c=c.firstChild;!f&&(f=a);e.fillNode(d.document,f)}}function a(a){return a&&1==a.nodeType&&"HR"==a.tagName&&"pagebreak"==a.className}var d=this,c=["td"];d.setOpt("pageBreakTag","_ueditor_page_break_tag_");d.ready(function(){q.cssRule("pagebreak",".pagebreak{display:block;clear:both !important;cursor:default !important;width: 100% !important;margin:0;}",d.document)});d.addInputRule(function(a){a.traversal(function(a){if("text"==a.type&&a.data==d.options.pageBreakTag){var b=UE.uNode.createElement('<hr class="pagebreak" noshade="noshade" size="5" style="-webkit-user-select: none;">');
a.parentNode.insertBefore(b,a);a.parentNode.removeChild(a)}})});d.addOutputRule(function(a){q.each(a.getNodesByTagName("hr"),function(a){if("pagebreak"==a.getAttr("class")){var b=UE.uNode.createText(d.options.pageBreakTag);a.parentNode.insertBefore(b,a);a.parentNode.removeChild(a)}})});d.commands.pagebreak={execCommand:function(){var b=d.selection.getRange(),h=d.document.createElement("hr");e.setAttributes(h,{"class":"pagebreak",noshade:"noshade",size:"5"});e.unSelectable(h);var f=e.findParentByTagName(b.startContainer,
c,!0),l=[];if(f)switch(f.tagName){case "TD":f=f.parentNode,f.previousSibling?(f.parentNode.insertBefore(h,f),l=e.findParents(h)):(b=e.findParentByTagName(f,"table"),b.parentNode.insertBefore(h,b),l=e.findParents(h,!0)),f=l[1],h!==f&&e.breakParent(h,f),d.fireEvent("afteradjusttable",d.document)}else{if(!b.collapsed)for(b.deleteContents(),f=b.startContainer;!e.isBody(f)&&e.isBlockElm(f)&&e.isEmptyNode(f);)b.setStartBefore(f).collapse(!0),e.remove(f),f=b.startContainer;b.insertNode(h);for(f=h.parentNode;!e.isBody(f);)e.breakParent(h,
f),(f=h.nextSibling)&&e.isEmptyBlock(f)&&e.remove(f),f=h.parentNode;f=h.nextSibling;l=h.previousSibling;a(l)?e.remove(l):l&&g(l);f?(a(f)?e.remove(f):g(f),b.setEndAfter(h).collapse(!1)):(f=d.document.createElement("p"),h.parentNode.appendChild(f),e.fillNode(d.document,f),b.setStart(f,0).collapse(!0));b.select(!0)}}}};UE.plugins.wordimage=function(){var g=this,a;g.addInputRule(function(a){q.each(a.getNodesByTagName("img"),function(a){var b=a.attrs,d=128>parseInt(b.width)||43>parseInt(b.height),f=g.options,
e=f.UEDITOR_HOME_URL+"themes/default/images/spacer.gif";b._src&&-1!==b._src.indexOf("file:///")&&a.setAttr({width:b.width,height:b.height,alt:b.alt,word_img:b._src,src:e,_src:e,style:"background:url("+(d?f.themePath+f.theme+"/images/word.gif":f.langPath+f.lang+"/images/localimage.png")+") no-repeat center center;border:1px solid #ddd"})})});g.commands.wordimage={execCommand:function(){a=e.getElementsByTagName(g.document.body,"img");for(var d=[],c=0,b;b=a[c++];)(b=b.getAttribute("word_img"))&&d.push(b);
a.length&&(this.word_img=d)},queryCommandState:function(){a=e.getElementsByTagName(g.document.body,"img");for(var d=0,c;c=a[d++];)if(c.getAttribute("word_img"))return 1;return-1}}};UE.plugins.dragdrop=function(){var g=this;g.ready(function(){e.on(this.body,"dragend",function(){var a=g.selection.getRange(),d=a.getClosedNode()||g.selection.getStart();if(d&&"IMG"==d.tagName){for(var c=d.previousSibling,b;(b=d.nextSibling)&&1==b.nodeType&&"SPAN"==b.tagName&&!b.firstChild;)e.remove(b);(!c||1!=c.nodeType||
e.isEmptyBlock(c))&&c||b&&(!b||e.isEmptyBlock(b))||(c&&"P"==c.tagName&&!e.isEmptyBlock(c)?(c.appendChild(d),e.moveChild(b,c),e.remove(b)):b&&("P"==b.tagName&&!e.isEmptyBlock(b))&&b.insertBefore(d,b.firstChild),c&&("P"==c.tagName&&e.isEmptyBlock(c))&&e.remove(c),b&&("P"==b.tagName&&e.isEmptyBlock(b))&&e.remove(b),a.selectNode(d).select(),g.fireEvent("saveScene"))}})});g.addListener("keyup",function(a,d){if(13==(d.keyCode||d.which)){var c=g.selection.getRange(),b;(b=e.findParentByTagName(c.startContainer,
"p",!0))&&"center"==e.getComputedStyle(b,"text-align")&&e.removeStyle(b,"text-align")}})};UE.plugins.undo=function(){function g(a,b){if(a.length!=b.length)return 0;for(var f=0,c=a.length;f<c;f++)if(a[f]!=b[f])return 0;return 1}function a(){this.undoManger.save()}var d,c=this.options.maxUndoCount||20,b=this.options.maxInputCount||20,h=RegExp(e.fillChar+"|</hr>","gi"),f={ol:1,ul:1,table:1,tbody:1,tr:1,body:1},l=this.options.autoClearEmptyNode;this.undoManger=new function(){this.list=[];this.index=0;
this.hasRedo=this.hasUndo=!1;this.undo=function(){if(this.hasUndo)if(this.list[this.index-1]||1!=this.list.length){for(;this.list[this.index].content==this.list[this.index-1].content;)if(this.index--,0==this.index)return this.restore(0);this.restore(--this.index)}else this.reset()};this.redo=function(){if(this.hasRedo){for(;this.list[this.index].content==this.list[this.index+1].content;)if(this.index++,this.index==this.list.length-1)return this.restore(this.index);this.restore(++this.index)}};this.restore=
function(){var a=this.editor,b=this.list[this.index],c=UE.htmlparser(b.content.replace(h,""));a.options.autoClearEmptyNode=!1;a.filterInputRule(c);a.options.autoClearEmptyNode=l;a.document.body.innerHTML=c.toHtml();a.fireEvent("afterscencerestore");r.ie&&q.each(e.getElementsByTagName(a.document,"td th caption p"),function(b){e.isEmptyNode(b)&&e.fillNode(a.document,b)});try{var d=(new J.Range(a.document)).moveToAddress(b.address);d.select(f[d.startContainer.nodeName.toLowerCase()])}catch(k){}this.update();
this.clearKey();a.fireEvent("reset",!0);a.fireEvent("contentchange")};this.getScene=function(){var a=this.editor,b=a.selection.getRange().createAddress(!1,!0);a.fireEvent("beforegetscene");var f=UE.htmlparser(a.body.innerHTML);a.options.autoClearEmptyNode=!1;a.filterOutputRule(f);a.options.autoClearEmptyNode=l;f=f.toHtml();a.fireEvent("aftergetscene");return{address:b,content:f}};this.save=function(a,b){clearTimeout(d);var f=this.getScene(b),e=this.list[this.index],k;if(k=e)if(k=e.content==f.content)a?
e=1:(e=e.address,k=f.address,e=e.collapsed!=k.collapsed?0:g(e.startAddress,k.startAddress)&&g(e.endAddress,k.endAddress)?1:0),k=e;k||(this.list=this.list.slice(0,this.index+1),this.list.push(f),this.list.length>c&&this.list.shift(),this.index=this.list.length-1,this.clearKey(),this.update())};this.update=function(){this.hasRedo=!!this.list[this.index+1];this.hasUndo=!!this.list[this.index-1]};this.reset=function(){this.list=[];this.index=0;this.hasRedo=this.hasUndo=!1;this.clearKey()};this.clearKey=
function(){n=0}};this.undoManger.editor=this;this.addListener("saveScene",function(){var a=Array.prototype.splice.call(arguments,1);this.undoManger.save.apply(this.undoManger,a)});this.addListener("beforeexeccommand",a);this.addListener("afterexeccommand",a);this.addListener("reset",function(a,b){b||this.undoManger.reset()});this.commands.redo=this.commands.undo={execCommand:function(a){this.undoManger[a]()},queryCommandState:function(a){return this.undoManger["has"+("undo"==a.toLowerCase()?"Undo":
"Redo")]?0:-1},notNeedUndo:1};var k={16:1,17:1,18:1,37:1,38:1,39:1,40:1},n=0,m=!1;this.addListener("ready",function(){e.on(this.body,"compositionstart",function(){m=!0});e.on(this.body,"compositionend",function(){m=!1})});this.addshortcutkey({Undo:"ctrl+90",Redo:"ctrl+89"});var s=!0;this.addListener("keydown",function(a,f){var c=this;if(!(k[f.keyCode||f.which]||(f.ctrlKey||f.metaKey||f.shiftKey||f.altKey)||m))if(c.selection.getRange().collapsed){0==c.undoManger.list.length&&c.undoManger.save(!0);
clearTimeout(d);var e=function(a){a.selection.getRange().collapsed&&a.fireEvent("contentchange");a.undoManger.save(!1,!0);a.fireEvent("selectionchange")};d=setTimeout(function(){if(m)var a=setInterval(function(){m||(e(c),clearInterval(a))},300);else e(c)},200);n++;n>=b&&e(c)}else c.undoManger.save(!1,!0),s=!1});this.addListener("keyup",function(a,b){k[b.keyCode||b.which]||(b.ctrlKey||b.metaKey||b.shiftKey||b.altKey)||m||s||(this.undoManger.save(!1,!0),s=!0)})};UE.plugins.paste=function(){function g(a){var b=
this.document;if(!b.getElementById("baidu_pastebin")){var c=this.selection.getRange(),d=c.createBookmark(),h=b.createElement("div");h.id="baidu_pastebin";r.webkit&&h.appendChild(b.createTextNode(e.fillChar+e.fillChar));b.body.appendChild(h);d.start.style.display="";h.style.cssText="position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:"+e.getXY(d.start).y+"px";c.selectNodeContents(h).select(!0);setTimeout(function(){if(r.webkit)for(var g=0,u=b.querySelectorAll("#baidu_pastebin"),
v;v=u[g++];)if(e.isEmptyNode(v))e.remove(v);else{h=v;break}try{h.parentNode.removeChild(h)}catch(t){}c.moveToBookmark(d).select(!0);a(h)},0)}}function a(a){var l;if(a.firstChild){var k=e.getElementsByTagName(a,"span");l=0;for(var g;g=k[l++];)"_baidu_cut_start"!=g.id&&"_baidu_cut_end"!=g.id||e.remove(g);if(r.webkit){g=a.querySelectorAll("div br");for(l=0;k=g[l++];)k=k.parentNode,"DIV"==k.tagName&&1==k.childNodes.length&&(k.innerHTML="<p><br/></p>",e.remove(k));k=a.querySelectorAll("#baidu_pastebin");
for(l=0;g=k[l++];){var m=d.document.createElement("p");for(g.parentNode.insertBefore(m,g);g.firstChild;)m.appendChild(g.firstChild);e.remove(g)}g=a.querySelectorAll("meta");for(l=0;k=g[l++];)e.remove(k);g=a.querySelectorAll("br");for(l=0;k=g[l++];)/^apple-/i.test(k.className)&&e.remove(k)}if(r.gecko)for(g=a.querySelectorAll("[_moz_dirty]"),l=0;k=g[l++];)k.removeAttribute("_moz_dirty");if(!r.ie)for(g=a.querySelectorAll("span.Apple-style-span"),l=0;k=g[l++];)e.remove(k,!0);l=a.innerHTML;l=UE.filterWord(l);
a=UE.htmlparser(l);d.options.filterRules&&UE.filterNode(a,d.options.filterRules);d.filterInputRule(a);r.webkit&&((l=a.lastChild())&&("element"==l.type&&"br"==l.tagName)&&a.removeChild(l),q.each(d.body.querySelectorAll("div"),function(a){e.isEmptyBlock(a)&&e.remove(a)}));l={html:a.toHtml()};d.fireEvent("beforepaste",l,a);l.html&&(a=UE.htmlparser(l.html,!0),1===d.queryCommandState("pasteplain")?d.execCommand("insertHtml",UE.filterNode(a,d.options.filterTxtRules).toHtml(),!0):(UE.filterNode(a,d.options.filterTxtRules),
c=a.toHtml(),b=l.html,h=d.selection.getRange().createAddress(!0),d.execCommand("insertHtml",b,!0)),d.selection.getRange().setCursor(!0),d.fireEvent("afterpaste",l))}}var d=this,c,b,h;d.addListener("pasteTransfer",function(a,l){if(h&&c&&b&&c!=b){var k=d.selection.getRange();k.moveToAddress(h,!0);if(!k.collapsed){for(;!e.isBody(k.startContainer);){var g=k.startContainer;if(1==g.nodeType){g=g.childNodes[k.startOffset];if(!g){k.setStartBefore(k.startContainer);continue}(g=g.previousSibling)&&(3==g.nodeType&&
RegExp("^[\n\r\t "+e.fillChar+"]*$").test(g.nodeValue))&&k.setStartBefore(g)}if(0==k.startOffset)k.setStartBefore(k.startContainer);else break}for(;!e.isBody(k.endContainer);){g=k.endContainer;if(1==g.nodeType){g=g.childNodes[k.endOffset];if(!g){k.setEndAfter(k.endContainer);continue}(g=g.nextSibling)&&(3==g.nodeType&&RegExp("^[\n\r\t"+e.fillChar+"]*$").test(g.nodeValue))&&k.setEndAfter(g)}if(k.endOffset==k.endContainer[3==k.endContainer.nodeType?"nodeValue":"childNodes"].length)k.setEndAfter(k.endContainer);
else break}}k.deleteContents();k.select(!0);d.__hasEnterExecCommand=!0;k=b;2===l?k=k.replace(/<(\/?)([\w\-]+)([^>]*)>/gi,function(a,b,f,c){f=f.toLowerCase();if({img:1}[f])return a;c=c.replace(/([\w\-]*?)\s*=\s*(("([^"]*)")|('([^']*)')|([^\s>]+))/gi,function(a,b,f){return{src:1,href:1,name:1}[b.toLowerCase()]?b+"="+f+" ":""});return{span:1,div:1}[f]?"":"<"+b+f+" "+q.trim(c)+">"}):l&&(k=c);d.execCommand("inserthtml",k,!0);d.__hasEnterExecCommand=!1;for(k=d.selection.getRange();!e.isBody(k.startContainer)&&
!k.startOffset&&k.startContainer[3==k.startContainer.nodeType?"nodeValue":"childNodes"].length;)k.setStartBefore(k.startContainer);k=k.createAddress(!0);h.endAddress=k.startAddress}});d.addListener("ready",function(){e.on(d.body,"cut",function(){!d.selection.getRange().collapsed&&d.undoManger&&(d.undoManger.save(),d.fireEvent("selectionchange"))});e.on(d.body,r.ie||r.opera?"keydown":"paste",function(b){(!r.ie&&!r.opera||(b.ctrlKey||b.metaKey)&&"86"==b.keyCode)&&g.call(d,function(b){a(b)})})})};UE.plugins.list=
function(){function g(a){var b=[],f;for(f in a)b.push(f);return b}function a(a){var b=a.className;return e.hasClass(a,/custom_/)?b.match(/custom_(\w+)/)[1]:e.getStyle(a,"list-style-type")}function d(b,f,c,d){var k=b.nextSibling;k&&(1==k.nodeType&&k.tagName.toLowerCase()==f&&(a(k)||e.getStyle(k,"list-style-type")||("ol"==f?"decimal":"disc"))==c)&&(e.moveChild(k,b),0==k.childNodes.length&&e.remove(k));k&&e.isFillChar(k)&&e.remove(k);(k=b.previousSibling)&&(1==k.nodeType&&k.tagName.toLowerCase()==f&&
(a(k)||e.getStyle(k,"list-style-type")||("ol"==f?"decimal":"disc"))==c)&&e.moveChild(b,k);k&&e.isFillChar(k)&&e.remove(k);!d&&e.isEmptyBlock(b)&&e.remove(b)}function c(a,b){k[b]&&(a.className="custom_"+b);try{e.setStyle(a,"list-style-type",b)}catch(f){}}function b(a){var b=a.previousSibling;b&&e.isEmptyBlock(b)&&e.remove(b);(b=a.nextSibling)&&e.isEmptyBlock(b)&&e.remove(b)}function h(a){for(;a&&!e.isBody(a);){if("TABLE"==a.nodeName)return null;if("LI"==a.nodeName)return a;a=a.parentNode}}var f=this,
l={TD:1,PRE:1,BLOCKQUOTE:1},k={cn:"cn-1-",cn1:"cn-2-",cn2:"cn-3-",num:"num-1-",num1:"num-2-",num2:"num-3-",dash:"dash",dot:"dot"};f.setOpt({insertorderedlist:{num:"",num1:"",num2:"",cn:"",cn1:"",cn2:"","lower-alpha":"","lower-roman":"","upper-alpha":"","upper-roman":""},insertunorderedlist:{circle:"",disc:"",square:"",dash:"",dot:""},listDefaultPaddingLeft:"30",listiconpath:"http://bs.baidu.com/listicon/",maxListLevel:-1});var n={OL:g(f.options.insertorderedlist),UL:g(f.options.insertunorderedlist)},
m;for(m in k)f.options.insertorderedlist.hasOwnProperty(m)||f.options.insertunorderedlist.hasOwnProperty(m)||delete k[m];f.ready(function(){});f.ready(function(){e.on(f.body,"cut",function(){setTimeout(function(){var a=f.selection.getRange(),b;if(!a.collapsed&&(b=e.findParentByTagName(a.startContainer,"li",!0))&&!b.nextSibling&&e.isEmptyBlock(b)){b=b.parentNode;var c;(c=b.previousSibling)?(e.remove(b),a.setStartAtLast(c).collapse(!0)):(c=b.nextSibling)?(e.remove(b),a.setStartAtFirst(c).collapse(!0)):
(c=f.document.createElement("p"),e.fillNode(f.document,c),b.parentNode.insertBefore(c,b),e.remove(b),a.setStart(c,0).collapse(!0));a.select(!0)}})})});f.addListener("beforepaste",function(b,f){var c=this.selection.getRange(),d=UE.htmlparser(f.html,!0);if(c=e.findParentByTagName(c.startContainer,"li",!0)){var h=c.parentNode;q.each(d.getNodesByTagName("OL"==h.tagName?"ul":"ol"),function(f){f.tagName=h.tagName;f.setAttr();if(f.parentNode===d)b=a(h)||("OL"==h.tagName?"decimal":"disc");else{var c=f.parentNode.getAttr("class");
(b=c&&/custom_/.test(c)?c.match(/custom_(\w+)/)[1]:f.parentNode.getStyle("list-style-type"))||(b="OL"==h.tagName?"decimal":"disc")}c=q.indexOf(n[h.tagName],b);f.parentNode!==d&&(c=c+1==n[h.tagName].length?0:c+1);c=n[h.tagName][c];k[c]?f.setAttr("class","custom_"+c):f.setStyle("list-style-type",c)})}f.html=d.toHtml()});f.addInputRule(function(a){function b(a,f){var e=f.firstChild();if(e&&"element"==e.type&&"span"==e.tagName&&/Wingdings|Symbol/.test(e.getStyle("font-family"))){for(var k in d)if(d[k]==
e.data)return k;return"disc"}for(k in c)if(c[k].test(a))return k}q.each(a.getNodesByTagName("ul ol"),function(a){a.removeAttr("style")});q.each(a.getNodesByTagName("li"),function(a){for(var b=UE.uNode.createElement("p"),f=0,c;c=a.children[f];)"text"==c.type||w.p[c.tagName]?b.appendChild(c):b.firstChild()?(a.insertBefore(b,c),b=UE.uNode.createElement("p"),f+=2):f++;(b.firstChild()&&!b.parentNode||!a.firstChild())&&a.appendChild(b);b.firstChild()||b.innerHTML(r.ie?"&nbsp;":"<br/>");a=a.firstChild();
(b=a.lastChild())&&("text"==b.type&&/^\s*$/.test(b.data))&&a.removeChild(b)});var c={num1:/^\d+\)/,decimal:/^\d+\./,"lower-alpha":/^[a-z]+\)/,"upper-alpha":/^[A-Z]+\./,cn:/^[\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+[\u3001]/,cn2:/^\([\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+\)/},d={square:"n"};q.each(a.getNodesByTagName("p"),function(a){if("MsoListParagraph"==a.getAttr("class")){a.setStyle("margin","");a.setStyle("margin-left","");a.setAttr("class","");var d=a,e,h=a;
if("li"!=a.parentNode.tagName&&(e=b(a.innerText(),a))){var l=UE.uNode.createElement(f.options.insertorderedlist.hasOwnProperty(e)?"ol":"ul");for(k[e]?l.setAttr("class","custom_"+e):l.setStyle("list-style-type",e);a&&"li"!=a.parentNode.tagName&&b(a.innerText(),a);){(d=a.nextSibling())||a.parentNode.insertBefore(l,a);var g=l,m=e;if("ol"==g.tagName)if(r.ie){var n=a.firstChild();"element"==n.type&&("span"==n.tagName&&c[m].test(n.innerText()))&&a.removeChild(n)}else a.innerHTML(a.innerHTML().replace(c[m],
""));else a.removeChild(a.firstChild());m=UE.uNode.createElement("li");m.appendChild(a);g.appendChild(m);a=d}!l.parentNode&&(a&&a.parentNode)&&a.parentNode.insertBefore(l,a)}(d=h.firstChild())&&("element"==d.type&&"span"==d.tagName&&/^\s*(&nbsp;)+\s*$/.test(d.innerText()))&&d.parentNode.removeChild(d)}})});f.addListener("keydown",function(a,c){function d(){c.preventDefault?c.preventDefault():c.returnValue=!1;f.selection.getRange().scrollToView(null,5);f.fireEvent("contentchange");f.undoManger&&f.undoManger.save()}
function k(a,b){for(;!(!a||e.isBody(a)||b&&b(a));){if(1==a.nodeType&&/[ou]l/i.test(a.tagName))return a;a=a.parentNode}return null}var h=c.keyCode||c.which;if(13==h&&!c.shiftKey){var l=f.selection.getRange(),g=e.findParent(l.startContainer,function(a){return e.isBlockElm(a)},!0),m=e.findParentByTagName(l.startContainer,"li",!0);g&&("PRE"!=g.tagName&&!m)&&(m=g.innerHTML.replace(RegExp(e.fillChar,"g"),""),/^\s*1\s*\.[^\d]/.test(m)&&(g.innerHTML=m.replace(/^\s*1\s*\./,""),l.setStartAtLast(g).collapse(!0).select(),
f.__hasEnterExecCommand=!0,f.execCommand("insertorderedlist"),f.__hasEnterExecCommand=!1));if(l.collapsed){var n=f.document.createElement("span"),q;l.insertNode(n);if(m=k(n)){q=e.getElementsByTagName(m,"p");for(var r=0;r<q.length;r++){var p=q[r],g=p.parentNode,C=p.nextSibling;e.isEmptyBlock(p)?g.removeChild(p):"LI"!=p.parentNode.tagName&&(m=f.document.createElement("li"),m.appendChild(p),g.insertBefore(m,C),l.setStart(p.lastChild,"#text"==p.lastChild.nodeType?p.lastChild.nodeValue.length:0).collapse(!0).select(!0))}}n.parentNode.removeChild(n)}l=
f.selection.getRange();p=k(l.startContainer,function(a){return"TABLE"==a.tagName});m=l.collapsed?p:k(l.endContainer,function(a){return"TABLE"==a.tagName});if(p&&m&&p===m){if(!l.collapsed)if(p=e.findParentByTagName(l.startContainer,"li",!0),m=e.findParentByTagName(l.endContainer,"li",!0),p&&m&&p===m){if(l.deleteContents(),(m=e.findParentByTagName(l.startContainer,"li",!0))&&e.isEmptyBlock(m)){z=m.previousSibling;C=m.nextSibling;p=f.document.createElement("p");e.fillNode(f.document,p);n=m.parentNode;
z&&C?(l.setStart(C,0).collapse(!0).select(!0),e.remove(m)):((z||C)&&z?m.parentNode.parentNode.insertBefore(p,n.nextSibling):n.parentNode.insertBefore(p,n),e.remove(m),n.firstChild||e.remove(n),l.setStart(p,0).setCursor());d();return}}else{n=l.cloneRange();C=n.collapse(!1).createBookmark();l.deleteContents();n.moveToBookmark(C);m=e.findParentByTagName(n.startContainer,"li",!0);b(m);n.select();d();return}if(m=e.findParentByTagName(l.startContainer,"li",!0)){if(e.isEmptyBlock(m)){C=l.createBookmark();
n=m.parentNode;m!==n.lastChild?(e.breakParent(m,n),b(m)):(n.parentNode.insertBefore(m,n.nextSibling),e.isEmptyNode(n)&&e.remove(n));if(!w.$list[m.parentNode.tagName])if(e.isBlockElm(m.firstChild))e.remove(m,!0);else{p=f.document.createElement("p");for(m.parentNode.insertBefore(p,m);m.firstChild;)p.appendChild(m.firstChild);e.remove(m)}l.moveToBookmark(C).select()}else{p=m.firstChild;if(!p||!e.isBlockElm(p)){p=f.document.createElement("p");for(!m.firstChild&&e.fillNode(f.document,p);m.firstChild;)p.appendChild(m.firstChild);
m.appendChild(p)}n=f.document.createElement("span");l.insertNode(n);e.breakParent(n,m);z=n.nextSibling;p=z.firstChild;p||(p=f.document.createElement("p"),e.fillNode(f.document,p),z.appendChild(p));e.isEmptyNode(p)&&(p.innerHTML="",e.fillNode(f.document,p));l.setStart(p,0).collapse(!0).shrinkBoundary().select();e.remove(n);var z=z.previousSibling;z&&e.isEmptyBlock(z)&&(z.innerHTML="<p></p>",e.fillNode(f.document,z.firstChild))}d()}}}if(8==h&&(l=f.selection.getRange(),l.collapsed&&e.isStartInblock(l)&&
(n=l.cloneRange().trimBoundary(),(m=e.findParentByTagName(l.startContainer,"li",!0))&&e.isStartInblock(n))))if((p=e.findParentByTagName(l.startContainer,"p",!0)||e.findParentByTagName(l.startContainer,"div",!0))&&p!==m.firstChild)n=e.findParentByTagName(p,["ol","ul"]),e.breakParent(p,n),b(p),f.fireEvent("contentchange"),l.setStart(p,0).setCursor(!1,!0),f.fireEvent("saveScene"),e.preventDefault(c);else if(m&&(z=m.previousSibling)){if(46!=h||!m.childNodes.length){for(;w.$list[z.tagName];)z=z.lastChild;
f.undoManger&&f.undoManger.save();p=m.firstChild;if(e.isBlockElm(p))if(C=z.lastChild,h=function(a){if(a&&a.parentNode){if("#text"==a.nodeName)return a;if(!UE.dom.dtd.$empty[a.tagName]){for(var b=document.createDocumentFragment();a.firstChild;)b.appendChild(a.removeChild(a.firstChild));a.parentNode.removeChild(a);return b}}},e.isEmptyNode(p)){for(n=f.document.createElement("span");C;){if(!C.lastChild){"#text"==C.nodeName?l.setEnd(C,C.nodeValue.length).shrinkBoundary().collapse().select(!0):"BR"==C.tagName?
(l.setEndBefore(C),C.parentNode.removeChild(C)):l.setEndAfter(C).collapse(!0).select(!0);l.insertNode(n);break}C=C.lastChild}e.isEmptyBlock(z)&&(z.innerHTML="");for(z.appendChild(p);m.firstChild;)z.appendChild(m.firstChild);z=n.parentNode;for(C=z.nextSibling;C;)z.appendChild(h(C)),C=C.nextSibling;l.setStartBefore(n).collapse(!0).select(!0)}else{n=f.document.createElement("span");l.insertNode(n);e.isEmptyBlock(z)&&(z.innerHTML="");e.moveChild(m,z);for(C=n.parentNode;C;)C.previousSibling.appendChild(h(C)),
C=C.nextSibling;l.setStartBefore(n).collapse(!0).select(!0);e.remove(n)}else if(e.isEmptyNode(m))p=f.document.createElement("p"),z.appendChild(p),l.setStart(p,0).setCursor();else for(l.setEnd(z,z.childNodes.length).collapse().select(!0);m.firstChild;)z.appendChild(m.firstChild);e.remove(m);f.fireEvent("contentchange");f.fireEvent("saveScene");e.preventDefault(c)}}else if(m&&!m.previousSibling){n=m.parentNode;C=l.createBookmark();if(e.isTagNode(n.parentNode,"ol ul"))n.parentNode.insertBefore(m,n);
else{for(;m.firstChild;)n.parentNode.insertBefore(m.firstChild,n);e.remove(m)}e.isEmptyNode(n)&&e.remove(n);l.moveToBookmark(C).setCursor(!1,!0);f.fireEvent("contentchange");f.fireEvent("saveScene");e.preventDefault(c)}});f.addListener("keyup",function(b,c){if(8==(c.keyCode||c.which)){var k=f.selection.getRange(),h;(h=e.findParentByTagName(k.startContainer,["ol","ul"],!0))&&d(h,h.tagName.toLowerCase(),a(h)||e.getComputedStyle(h,"list-style-type"),!0)}});f.addListener("tabkeydown",function(){function b(a){if(-1!=
f.options.maxListLevel){a=a.parentNode;for(var c=0;/[ou]l/i.test(a.tagName);)c++,a=a.parentNode;if(c>=f.options.maxListLevel)return!0}}var k=f.selection.getRange(),h=e.findParentByTagName(k.startContainer,"li",!0);if(h){var l;if(k.collapsed){if(b(h))return!0;var g=h.parentNode,m=f.document.createElement(g.tagName),p=q.indexOf(n[m.tagName],a(g)||e.getComputedStyle(g,"list-style-type")),p=p+1==n[m.tagName].length?0:p+1,p=n[m.tagName][p];c(m,p);if(e.isStartInblock(k))return f.fireEvent("saveScene"),
l=k.createBookmark(),g.insertBefore(m,h),m.appendChild(h),d(m,m.tagName.toLowerCase(),p),f.fireEvent("contentchange"),k.moveToBookmark(l).select(!0),!0}else{f.fireEvent("saveScene");l=k.createBookmark();for(var g=0,r,m=e.findParents(h),D;D=m[g++];)if(e.isTagNode(D,"ol ul")){r=D;break}D=h;if(l.end)for(;D&&!(e.getPosition(D,l.end)&e.POSITION_FOLLOWING);)if(b(D))D=e.getNextDomNode(D,!1,null,function(a){return a!==r});else{g=D.parentNode;m=f.document.createElement(g.tagName);p=q.indexOf(n[m.tagName],
a(g)||e.getComputedStyle(g,"list-style-type"));p=n[m.tagName][p+1==n[m.tagName].length?0:p+1];c(m,p);for(g.insertBefore(m,D);D&&!(e.getPosition(D,l.end)&e.POSITION_FOLLOWING);){h=D.nextSibling;m.appendChild(D);if(!h||e.isTagNode(h,"ol ul")){if(h)for(;(h=h.firstChild)&&"LI"!=h.tagName;);else h=e.getNextDomNode(D,!1,null,function(a){return a!==r});break}D=h}d(m,m.tagName.toLowerCase(),p);D=(g=h?e.isTagNode(h,"ol ul")?h:e.getNextDomNode(h,!1,null,function(a){return a!==r&&w.$list[a.tagName]}):h)?g.firstChild:
g}f.fireEvent("contentchange");k.moveToBookmark(l).select();return!0}}});f.commands.insertorderedlist=f.commands.insertunorderedlist={execCommand:function(b,f){f||(f="insertorderedlist"==b.toLowerCase()?"decimal":"disc");var k=this.selection.getRange(),g=function(a){return 1==a.nodeType?"br"!=a.tagName.toLowerCase():!e.isWhitespace(a)},m="insertorderedlist"==b.toLowerCase()?"ol":"ul",n=this.document.createDocumentFragment();k.adjustmentBoundary().shrinkBoundary();var p=k.createBookmark(!0),r=h(this.document.getElementById(p.start)),
D=0,B=h(this.document.getElementById(p.end)),ka=0,E,C,z,A;if(r||B){r&&(E=r.parentNode);p.end||(B=r);B&&(C=B.parentNode);if(E===C){for(;r!==B;){A=r;r=r.nextSibling;if(!e.isBlockElm(A.firstChild)){for(g=this.document.createElement("p");A.firstChild;)g.appendChild(A.firstChild);A.appendChild(g)}n.appendChild(A)}A=this.document.createElement("span");E.insertBefore(A,B);if(!e.isBlockElm(B.firstChild)){for(g=this.document.createElement("p");B.firstChild;)g.appendChild(B.firstChild);B.appendChild(g)}n.appendChild(B);
e.breakParent(A,E);e.isEmptyNode(A.previousSibling)&&e.remove(A.previousSibling);e.isEmptyNode(A.nextSibling)&&e.remove(A.nextSibling);g=a(E)||e.getComputedStyle(E,"list-style-type")||("insertorderedlist"==b.toLowerCase()?"decimal":"disc");if(E.tagName.toLowerCase()==m&&g==f){for(var K=this.document.createDocumentFragment();n.firstChild;)e.isTagNode(n.firstChild,"ol ul")?(q.each(e.getElementsByTagName(n.firstChild,"li"),function(a){K.appendChild(a)}),e.remove(n.firstChild)):K.appendChild(n.firstChild);
n=A.parentNode;g=this.document.createDocumentFragment();if(w.$list[n.tagName])g=K;else for(n=0;n<K.childNodes.length;n++)for(;K.childNodes[n].firstChild;)g.appendChild(K.childNodes[n].firstChild);A.parentNode.insertBefore(g,A)}else z=this.document.createElement(m),c(z,f),z.appendChild(n),A.parentNode.insertBefore(z,A);e.remove(A);z&&d(z,m,f);k.moveToBookmark(p).select();return}if(r){for(;r;)A=r.nextSibling,e.isTagNode(r,"ol ul"),n.appendChild(r),r=A;E.parentNode.insertBefore(n,E.nextSibling);e.isEmptyNode(E)?
(k.setStartBefore(E),e.remove(E)):k.setStartAfter(E);D=1}if(B&&e.inDoc(C,this.document)){for(r=C.firstChild;r&&r!==B;)A=r.nextSibling,e.isTagNode(r,"ol ul"),n.appendChild(r),r=A;z=e.createElement(this.document,"div",{tmpDiv:1});e.moveChild(B,z);n.appendChild(z);e.remove(B);C.parentNode.insertBefore(n,C);k.setEndBefore(C);e.isEmptyNode(C)&&e.remove(C);ka=1}}D||k.setStartBefore(this.document.getElementById(p.start));p.end&&!ka&&k.setEndAfter(this.document.getElementById(p.end));k.enlarge(!0,function(a){return l[a.tagName]});
n=this.document.createDocumentFragment();z=k.createBookmark();B=e.getNextDomNode(z.start,!1,g);E=k.cloneRange();for(r=e.isBlockElm;B&&B!==z.end&&e.getPosition(B,z.end)&e.POSITION_PRECEDING;)if(3==B.nodeType||w.li[B.tagName])if(1==B.nodeType&&w.$list[B.tagName]){for(;B.firstChild;)n.appendChild(B.firstChild);D=e.getNextDomNode(B,!1,g);e.remove(B);B=D}else{D=B;for(E.setStartBefore(B);B&&B!==z.end&&(!r(B)||e.isBookmarkNode(B));)D=B,B=e.getNextDomNode(B,!1,null,function(a){return!l[a.tagName]});B&&r(B)&&
(A=e.getNextDomNode(D,!1,g))&&e.isBookmarkNode(A)&&(B=e.getNextDomNode(A,!1,g),D=A);E.setEndAfter(D);B=e.getNextDomNode(D,!1,g);A=k.document.createElement("li");A.appendChild(E.extractContents());if(e.isEmptyNode(A)){for(D=k.document.createElement("p");A.firstChild;)D.appendChild(A.firstChild);A.appendChild(D)}n.appendChild(A)}else A=B,B=e.getNextDomNode(B,!1,g),n.appendChild(A);k.moveToBookmark(z).collapse(!0);z=this.document.createElement(m);c(z,f);z.appendChild(n);k.insertNode(z);n=0;for(g=e.getElementsByTagName(z,
"div");A=g[n++];)A.getAttribute("tmpDiv")&&(B=this.document.createElement("li"),E=A.nextSibling,r=A.parentNode,"LI"==r.tagName?e.remove(A,!0):(B.appendChild(A.firstChild),e.remove(A),E?r.insertBefore(B,E):r.appendChild(B)));d(z,m,f);k.moveToBookmark(p).select()},queryCommandState:function(a){a="insertorderedlist"==a.toLowerCase()?"ol":"ul";for(var b=this.selection.getStartElementPath(),f=0,c;(c=b[f++])&&"TABLE"!=c.nodeName;)if(a==c.nodeName.toLowerCase())return 1;return 0},queryCommandValue:function(b){b=
"insertorderedlist"==b.toLowerCase()?"ol":"ul";for(var f=this.selection.getStartElementPath(),c,d=0,k;k=f[d++];){if("TABLE"==k.nodeName){c=null;break}if(b==k.nodeName.toLowerCase()){c=k;break}}return c?a(c)||e.getComputedStyle(c,"list-style-type"):null}}};(function(){var g={textarea:function(a,d){var c=d.ownerDocument.createElement("textarea");c.style.cssText="position:absolute;resize:none;width:100%;height:100%;border:0;padding:0;margin:0;overflow-y:auto;";r.ie&&8>r.version&&(c.style.width=d.offsetWidth+
"px",c.style.height=d.offsetHeight+"px",d.onresize=function(){c.style.width=d.offsetWidth+"px";c.style.height=d.offsetHeight+"px"});d.appendChild(c);return{setContent:function(a){c.value=a},getContent:function(){return c.value},select:function(){var a;r.ie?(a=c.createTextRange(),a.collapse(!0),a.select()):(c.setSelectionRange(0,0),c.focus())},dispose:function(){d.removeChild(c);d=c=d.onresize=null}}},codemirror:function(a,d){var c=window.CodeMirror(d,{mode:"text/html",tabMode:"indent",lineNumbers:!0,
lineWrapping:!0}),b=c.getWrapperElement();b.style.cssText='position:absolute;left:0;top:0;width:100%;height:100%;font-family:consolas,"Courier new",monospace;font-size:13px;';c.getScrollerElement().style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;";c.refresh();return{getCodeMirror:function(){return c},setContent:function(a){c.setValue(a)},getContent:function(){return c.getValue()},select:function(){c.focus()},dispose:function(){d.removeChild(b);c=b=null}}}};UE.plugins.source=function(){var a=
this,d=this.options,c=!1,b;d.sourceEditor=r.ie?"textarea":d.sourceEditor||"codemirror";a.setOpt({sourceEditorFirst:!1});var h,f=a.getContent,l;a.commands.source={execCommand:function(){if(c=!c){l=a.selection.getRange().createAddress(!1,!0);a.undoManger&&a.undoManger.save(!0);r.gecko&&(a.body.contentEditable=!1);h=a.iframe.style.cssText;a.iframe.style.cssText+="position:absolute;left:-32768px;top:-32768px;";a.fireEvent("beforegetcontent");var k=UE.htmlparser(a.body.innerHTML);a.filterOutputRule(k);
k.traversal(function(a){if("element"==a.type)switch(a.tagName){case "td":case "th":case "caption":a.children&&1==a.children.length&&"br"==a.firstChild().tagName&&a.removeChild(a.firstChild());break;case "pre":a.innerText(a.innerText().replace(/&nbsp;/g," "))}});a.fireEvent("aftergetcontent");k=k.toHtml(!0);b=g["codemirror"==d.sourceEditor&&window.CodeMirror?"codemirror":"textarea"](a,a.iframe.parentNode);b.setContent(k);setTimeout(function(){b.select();a.addListener("fullscreenchanged",function(){try{b.getCodeMirror().refresh()}catch(a){}})});
a.getContent=function(){return b.getContent()||"<p>"+(r.ie?"":"<br/>")+"</p>"}}else if(a.iframe.style.cssText=h,k=b.getContent()||"<p>"+(r.ie?"":"<br/>")+"</p>",k=k.replace(RegExp("[\\r\\t\\n ]*</?(\\w+)\\s*(?:[^>]*)>","g"),function(a,b){return b&&!w.$inlineWithA[b.toLowerCase()]?a.replace(/(^[\n\r\t ]*)|([\n\r\t ]*$)/g,""):a.replace(/(^[\n\r\t]*)|([\n\r\t]*$)/g,"")}),a.setContent(k),b.dispose(),b=null,a.getContent=f,k=a.body.firstChild,k||(a.body.innerHTML="<p>"+(r.ie?"":"<br/>")+"</p>",k=a.body.firstChild),
a.undoManger&&a.undoManger.save(!0),r.gecko){var m=document.createElement("input");m.style.cssText="position:absolute;left:0;top:-32768px";document.body.appendChild(m);a.body.contentEditable=!1;setTimeout(function(){e.setViewportOffset(m,{left:-32768,top:0});m.focus();setTimeout(function(){a.body.contentEditable=!0;a.selection.getRange().moveToAddress(l).select(!0);e.remove(m)})})}else try{a.selection.getRange().moveToAddress(l).select(!0)}catch(s){}this.fireEvent("sourcemodechanged",c)},queryCommandState:function(){return c|
0},notNeedUndo:1};var k=a.queryCommandState;a.queryCommandState=function(a){a=a.toLowerCase();return c?a in{source:1,fullscreen:1}?1:-1:k.apply(this,arguments)};"codemirror"==d.sourceEditor&&a.addListener("ready",function(){q.loadFile(document,{src:d.codeMirrorJsUrl||d.UEDITOR_HOME_URL+"third-party/codemirror/codemirror.js",tag:"script",type:"text/javascript",defer:"defer"},function(){d.sourceEditorFirst&&setTimeout(function(){a.execCommand("source")},0)});q.loadFile(document,{tag:"link",rel:"stylesheet",
type:"text/css",href:d.codeMirrorCssUrl||d.UEDITOR_HOME_URL+"third-party/codemirror/codemirror.css"})})}})();UE.plugins.enterkey=function(){var g,a=this,d=a.options.enterTag;a.addListener("keyup",function(c,b){if(13==(b.keyCode||b.which)){var d=a.selection.getRange(),f=d.startContainer,l;if(r.ie)a.fireEvent("saveScene",!0,!0);else{if(/h\d/i.test(g)){if(r.gecko)e.findParentByTagName(f,"h1 h2 h3 h4 h5 h6 blockquote caption table".split(" "),!0)||(a.document.execCommand("formatBlock",!1,"<p>"),l=1);
else if(1==f.nodeType){var f=a.document.createTextNode(""),k;d.insertNode(f);if(k=e.findParentByTagName(f,"div",!0)){for(l=a.document.createElement("p");k.firstChild;)l.appendChild(k.firstChild);k.parentNode.insertBefore(l,k);e.remove(k);d.setStartBefore(f).setCursor();l=1}e.remove(f)}a.undoManger&&l&&a.undoManger.save()}r.opera&&d.select()}}});a.addListener("keydown",function(c,b){if(13==(b.keyCode||b.which))if(a.fireEvent("beforeenterkeydown"))e.preventDefault(b);else{a.fireEvent("saveScene",!0,
!0);g="";var h=a.selection.getRange();if(!h.collapsed){var f=h.startContainer,l=h.endContainer,f=e.findParentByTagName(f,"td",!0),l=e.findParentByTagName(l,"td",!0);if(f&&l&&f!==l||!f&&l||f&&!l){b.preventDefault?b.preventDefault():b.returnValue=!1;return}}if("p"==d)r.ie||((f=e.findParentByTagName(h.startContainer,"ol ul p h1 h2 h3 h4 h5 h6 blockquote caption".split(" "),!0))||r.opera?(g=f.tagName,"p"==f.tagName.toLowerCase()&&r.gecko&&e.removeDirtyAttr(f)):(a.document.execCommand("formatBlock",!1,
"<p>"),r.gecko&&(h=a.selection.getRange(),(f=e.findParentByTagName(h.startContainer,"p",!0))&&e.removeDirtyAttr(f))));else if(b.preventDefault?b.preventDefault():b.returnValue=!1,h.collapsed)l=h.document.createElement("br"),h.insertNode(l),l.parentNode.lastChild===l?(l.parentNode.insertBefore(l.cloneNode(!0),l),h.setStartBefore(l)):h.setStartAfter(l),h.setCursor();else if(h.deleteContents(),f=h.startContainer,1==f.nodeType&&(f=f.childNodes[h.startOffset])){for(;1==f.nodeType;){if(w.$empty[f.tagName])return h.setStartBefore(f).setCursor(),
a.undoManger&&a.undoManger.save(),!1;if(!f.firstChild)return l=h.document.createElement("br"),f.appendChild(l),h.setStart(f,0).setCursor(),a.undoManger&&a.undoManger.save(),!1;f=f.firstChild}f===h.startContainer.childNodes[h.startOffset]?(l=h.document.createElement("br"),h.insertNode(l).setCursor()):h.setStart(f,0).setCursor()}else l=h.document.createElement("br"),h.insertNode(l).setStartAfter(l).setCursor()}})};UE.plugins.keystrokes=function(){var g=this,a=!0;g.addListener("keydown",function(d,c){var b=
c.keyCode||c.which,h=g.selection.getRange();if(!h.collapsed&&!(c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)&&(65<=b&&90>=b||48<=b&&57>=b||96<=b&&111>=b||{13:1,8:1,46:1}[b])){var f=h.startContainer;e.isFillChar(f)&&h.setStartBefore(f);f=h.endContainer;e.isFillChar(f)&&h.setEndAfter(f);h.txtToElmBoundary();h.endContainer&&1==h.endContainer.nodeType&&(f=h.endContainer.childNodes[h.endOffset])&&e.isBr(f)&&h.setEndAfter(f);if(0==h.startOffset&&(f=h.startContainer,e.isBoundaryNode(f,"firstChild")&&(f=h.endContainer,
h.endOffset==(3==f.nodeType?f.nodeValue.length:f.childNodes.length)&&e.isBoundaryNode(f,"lastChild")))){g.fireEvent("saveScene");g.body.innerHTML="<p>"+(r.ie?"":"<br/>")+"</p>";h.setStart(g.body.firstChild,0).setCursor(!1,!0);g._selectionChange();return}}if(8==b){h=g.selection.getRange();a=h.collapsed;if(g.fireEvent("delkeydown",c))return;var l,k;h.collapsed&&h.inFillChar()&&(l=h.startContainer,e.isFillChar(l)?(h.setStartBefore(l).shrinkBoundary(!0).collapse(!0),e.remove(l),e.preventDefault(c)):(l.nodeValue=
l.nodeValue.replace(RegExp("^"+e.fillChar),""),h.startOffset--),h.collapse(!0).select(!0));if(l=h.getClosedNode()){g.fireEvent("saveScene");h.setStartBefore(l);e.remove(l);h.setCursor();g.fireEvent("saveScene");e.preventDefault(c);return}if(!r.ie&&(l=e.findParentByTagName(h.startContainer,"table",!0),k=e.findParentByTagName(h.endContainer,"table",!0),l&&!k||!l&&k||l!==k)){c.preventDefault();return}}if(9==b){var n={ol:1,ul:1,table:1};if(g.fireEvent("tabkeydown",c)){e.preventDefault(c);return}h=g.selection.getRange();
g.fireEvent("saveScene");var f=0,m="";l=g.options.tabSize||4;for(k=g.options.tabNode||"&nbsp;";f<l;f++)m+=k;f=g.document.createElement("span");f.innerHTML=m+e.fillChar;if(h.collapsed)h.insertNode(f.cloneNode(!0).firstChild).setCursor(!0);else if(m=function(a){return e.isBlockElm(a)&&!n[a.tagName.toLowerCase()]},l=e.findParent(h.startContainer,m,!0),k=e.findParent(h.endContainer,m,!0),l&&k&&l===k)h.deleteContents(),h.insertNode(f.cloneNode(!0).firstChild).setCursor(!0);else{l=h.createBookmark();h.enlarge(!0);
k=h.createBookmark();for(var s=e.getNextDomNode(k.start,!1,m);s&&!(e.getPosition(s,k.end)&e.POSITION_FOLLOWING);)s.insertBefore(f.cloneNode(!0).firstChild,s.firstChild),s=e.getNextDomNode(s,!1,m);h.moveToBookmark(k).moveToBookmark(l).select()}e.preventDefault(c)}if(r.gecko&&46==b&&(h=g.selection.getRange(),h.collapsed&&(l=h.startContainer,e.isEmptyBlock(l)))){for(b=l.parentNode;1==e.getChildCount(b)&&!e.isBody(b);)l=b,b=b.parentNode;l===b.lastChild&&c.preventDefault()}});g.addListener("keyup",function(d,
c){var b;if(8==(c.keyCode||c.which)&&!this.fireEvent("delkeyup")){b=this.selection.getRange();if(b.collapsed){var h;if((h=e.findParentByTagName(b.startContainer,"h1 h2 h3 h4 h5 h6".split(" "),!0))&&e.isEmptyBlock(h)){var f=h.previousSibling;if(f&&"TABLE"!=f.nodeName){e.remove(h);b.setStartAtLast(f).setCursor(!1,!0);return}if((f=h.nextSibling)&&"TABLE"!=f.nodeName){e.remove(h);b.setStartAtFirst(f).setCursor(!1,!0);return}}e.isBody(b.startContainer)&&(h=e.createElement(this.document,"p",{innerHTML:r.ie?
e.fillChar:"<br/>"}),b.insertNode(h).setStart(h,0).setCursor(!1,!0))}!a&&(3==b.startContainer.nodeType||1==b.startContainer.nodeType&&e.isEmptyBlock(b.startContainer))&&(r.ie?(h=b.document.createElement("span"),b.insertNode(h).setStartBefore(h).collapse(!0),b.select(),e.remove(h)):b.select())}})};UE.plugins.fiximgclick=function(){var e=this;r.webkit&&e.addListener("click",function(a,d){"IMG"==d.target.tagName&&(new J.Range(e.document)).selectNode(d.target).select()})};UE.plugins.autolink=function(){if(!r.ie){var g=
this;g.addListener("reset",function(){});g.addListener("keydown",function(a,d){var c=d.keyCode||d.which;if(32==c||13==c){for(var c=g.selection.getNative(),b=c.getRangeAt(0).cloneRange(),h,f=b.startContainer;1==f.nodeType&&0<b.startOffset;){f=b.startContainer.childNodes[b.startOffset-1];if(!f)break;b.setStart(f,1==f.nodeType?f.childNodes.length:f.nodeValue.length);b.collapse(!0);f=b.startContainer}do{if(0==b.startOffset){for(f=b.startContainer.previousSibling;f&&1==f.nodeType;)f=f.lastChild;if(!f||
e.isFillChar(f))break;h=f.nodeValue.length}else f=b.startContainer,h=b.startOffset;b.setStart(f,h-1);h=b.toString().charCodeAt(0)}while(160!=h&&32!=h);if(b.toString().replace(RegExp(e.fillChar,"g"),"").match(/(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i)){for(;b.toString().length&&!/^(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i.test(b.toString());)try{b.setStart(b.startContainer,b.startOffset+1)}catch(l){for(f=b.startContainer;!(next=f.nextSibling);){if(e.isBody(f))return;f=f.parentNode}b.setStart(next,
0)}if(!e.findParentByTagName(b.startContainer,"a",!0)){h=g.document.createElement("a");var f=g.document.createTextNode(" "),k;g.undoManger&&g.undoManger.save();h.appendChild(b.extractContents());h.href=h.innerHTML=h.innerHTML.replace(/<[^>]+>/g,"");k=h.getAttribute("href").replace(RegExp(e.fillChar,"g"),"");k=/^(?:https?:\/\/)/ig.test(k)?k:"http://"+k;h.setAttribute("_src",q.html(k));h.href=q.html(k);b.insertNode(h);h.parentNode.insertBefore(f,h.nextSibling);b.setStart(f,0);b.collapse(!0);c.removeAllRanges();
c.addRange(b);g.undoManger&&g.undoManger.save()}}}})}};UE.plugins.autoheight=function(){function g(){var a=this;clearTimeout(k);n||(k=setTimeout(function(){if(!a.queryCommandState||a.queryCommandState&&1!=a.queryCommandState("source"))c||(c=a.document.createElement("span"),c.style.cssText="display:block;width:0;margin:0;padding:0;border:0;clear:both;",c.innerHTML="."),b=c.cloneNode(!0),a.body.appendChild(b),l=Math.max(e.getXY(b).y+b.offsetHeight,Math.max(f.minFrameHeight,f.initialFrameHeight)),l!=
h&&(a.setHeight(l,!0),h=l),e.remove(b)},50))}var a=this;a.autoHeightEnabled=!1!==a.options.autoHeightEnabled;if(a.autoHeightEnabled){var d,c,b,h=0,f=a.options,l,k,n;a.addListener("fullscreenchanged",function(a,b){n=b});a.addListener("destroy",function(){a.removeListener("contentchange afterinserthtml keyup mouseup",g)});a.enableAutoHeight=function(){var a=this;if(a.autoHeightEnabled){var b=a.document;a.autoHeightEnabled=!0;d=b.body.style.overflowY;b.body.style.overflowY="hidden";a.addListener("contentchange afterinserthtml keyup mouseup",
g);setTimeout(function(){g.call(a)},r.gecko?100:0);a.fireEvent("autoheightchanged",a.autoHeightEnabled)}};a.disableAutoHeight=function(){a.body.style.overflowY=d||"";a.removeListener("contentchange",g);a.removeListener("keyup",g);a.removeListener("mouseup",g);a.autoHeightEnabled=!1;a.fireEvent("autoheightchanged",a.autoHeightEnabled)};a.addListener("ready",function(){a.enableAutoHeight();var b;e.on(r.ie?a.body:a.document,r.webkit?"dragover":"drop",function(){clearTimeout(b);b=setTimeout(function(){g.call(this)},
100)})})}};UE.plugins.autofloat=function(){function g(){var a=document.body.style;a.backgroundImage='url("about:blank")';a.backgroundAttachment="fixed"}function a(){t=!0;m.parentNode&&m.parentNode.removeChild(m);s.style.cssText=n}function d(){var b=v(c.container),f=c.options.toolbarTopOffset||0;if(0>b.top&&b.bottom-s.offsetHeight>f){var b=e.getXY(s),f=e.getComputedStyle(s,"position"),d=e.getComputedStyle(s,"left");s.style.width=s.offsetWidth+"px";s.style.zIndex=1*c.options.zIndex+1;s.parentNode.insertBefore(m,
s);l||k&&r.ie?("absolute"!=s.style.position&&(s.style.position="absolute"),s.style.top=(document.body.scrollTop||document.documentElement.scrollTop)-u+h+"px"):(r.ie7Compat&&t&&(t=!1,s.style.left=e.getXY(s).x-document.documentElement.getBoundingClientRect().left+2+"px"),"fixed"!=s.style.position&&(s.style.position="fixed",s.style.top=h+"px",("absolute"==f||"relative"==f)&&parseFloat(d)&&(s.style.left=b.x+"px")))}else a()}var c=this,b=c.getLang();c.setOpt({topOffset:0});var h=c.options.topOffset;if(!1!==
c.options.autoFloatEnabled){var f=UE.ui.uiUtils,l=r.ie&&6>=r.version,k=r.quirks,n,m=document.createElement("div"),s,u,v,t=!0,p=q.defer(function(){d()},r.ie?200:100,!0);c.addListener("destroy",function(){e.un(window,["scroll","resize"],d);c.removeListener("keydown",p)});c.addListener("ready",function(){var k;UE.ui?k=1:(alert(b.autofloatMsg),k=0);k&&(v=f.getClientRect,s=c.ui.getDom("toolbarbox"),u=v(s).top,n=s.style.cssText,m.style.height=s.offsetHeight+"px",l&&g(),e.on(window,["scroll","resize"],d),
c.addListener("keydown",p),c.addListener("beforefullscreenchange",function(b,f){f&&a()}),c.addListener("fullscreenchanged",function(a,b){b||d()}),c.addListener("sourcemodechanged",function(a,b){setTimeout(function(){d()},0)}),c.addListener("clearDoc",function(){setTimeout(function(){d()},0)}))})}};UE.plugins.pasteplain=function(){this.setOpt({pasteplain:!1,filterTxtRules:function(){function a(a){a.tagName="p";a.setStyle()}function d(a){a.parentNode.removeChild(a,!0)}return{"-":"script style object iframe embed input select",
p:{$:{}},br:{$:{}},div:function(a){for(var b,d=UE.uNode.createElement("p");b=a.firstChild();)"text"!=b.type&&UE.dom.dtd.$block[b.tagName]?d.firstChild()?(a.parentNode.insertBefore(d,a),d=UE.uNode.createElement("p")):a.parentNode.insertBefore(b,a):d.appendChild(b);d.firstChild()&&a.parentNode.insertBefore(d,a);a.parentNode.removeChild(a)},ol:d,ul:d,dl:d,dt:d,dd:d,li:d,caption:a,th:a,tr:a,h1:a,h2:a,h3:a,h4:a,h5:a,h6:a,td:function(a){a.innerText()&&a.parentNode.insertAfter(UE.uNode.createText(" &nbsp; &nbsp;"),
a);a.parentNode.removeChild(a,a.innerText())}}}()});var e=this.options.pasteplain;this.commands.pasteplain={queryCommandState:function(){return e?1:0},execCommand:function(){e=!e|0},notNeedUndo:1}};UE.plugins.video=function(){function g(a,b,e,f,l,k){return k?'<embed type="application/x-shockwave-flash" class="edui-faked-video" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+a+'" width="'+b+'" height="'+e+'"'+(l?' style="float:'+l+'"':"")+' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >':
"<img "+(f?'id="'+f+'"':"")+' width="'+b+'" height="'+e+'" _url="'+a+'" class="edui-faked-video" src="'+d.options.UEDITOR_HOME_URL+'themes/default/images/spacer.gif" style="background:url('+d.options.UEDITOR_HOME_URL+"themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;"+(l?"float:"+l+";":"")+'" />'}function a(a,b){q.each(a.getNodesByTagName(b?"img":"embed"),function(a){if("edui-faked-video"==a.getAttr("class")){var f=g(b?a.getAttr("_url"):a.getAttr("src"),a.getAttr("width"),
a.getAttr("height"),null,a.getStyle("float")||"",b);a.parentNode.replaceChild(UE.uNode.createElement(f),a)}})}var d=this;d.addOutputRule(function(c){a(c,!0)});d.addInputRule(function(c){a(c)});d.commands.insertvideo={execCommand:function(a,b){b=q.isArray(b)?b:[b];for(var h=[],f=0,l,k=b.length;f<k;f++)l=b[f],h.push(g(l.url,l.width||420,l.height||280,"tmpVedio"+f,null,!1));d.execCommand("inserthtml",h.join(""),!0);h=this.selection.getRange();f=0;for(k=b.length;f<k;f++)l=this.document.getElementById("tmpVedio"+
f),e.removeAttributes(l,"id"),h.selectNode(l).select(),d.execCommand("imagefloat",b[f].align)},queryCommandState:function(){var a=d.selection.getRange().getClosedNode();return a&&"edui-faked-video"==a.className?1:0}}};(function(){var g=UE.UETable=function(a){this.table=a;this.indexTable=[];this.selectedTds=[];this.cellsRange={};this.update(a)};g.removeSelectedClass=function(a){q.each(a,function(a){e.removeClasses(a,"selectTdClass")})};g.addSelectedClass=function(a){q.each(a,function(a){e.addClass(a,
"selectTdClass")})};g.isEmptyBlock=function(a){var d=RegExp(e.fillChar,"g");if(0<a[r.ie?"innerText":"textContent"].replace(/^\s*$/,"").replace(d,"").length)return 0;for(var c in w.$isNotEmpty)if(w.$isNotEmpty.hasOwnProperty(c)&&a.getElementsByTagName(c).length)return 0;return 1};g.getWidth=function(a){return a?parseInt(e.getComputedStyle(a,"width"),10):0};g.getTableCellAlignState=function(a){!q.isArray(a)&&(a=[a]);var d={},c=["align","valign"],b=null,e=!0;q.each(a,function(a){q.each(c,function(c){b=
a.getAttribute(c);if(!d[c]&&b)d[c]=b;else if(!d[c]||b!==d[c])return e=!1});return e});return e?d:null};g.getTableItemsByRange=function(a){var d=a.selection.getStart();d&&(d.id&&0===d.id.indexOf("_baidu_bookmark_start_"))&&(d=d.nextSibling);var c=(a=d&&e.findParentByTagName(d,["td","th"],!0))&&a.parentNode,d=d&&e.findParentByTagName(d,"caption",!0);return{cell:a,tr:c,table:d?d.parentNode:c&&c.parentNode.parentNode,caption:d}};g.getUETableBySelected=function(a){return(a=g.getTableItemsByRange(a).table)&&
a.ueTable&&a.ueTable.selectedTds.length?a.ueTable:null};g.getDefaultValue=function(a,d){var c={thin:"0px",medium:"1px",thick:"2px"},b,h,f;if(d)l=d.getElementsByTagName("td")[0],f=e.getComputedStyle(d,"border-left-width"),b=parseInt(c[f]||f,10),f=e.getComputedStyle(l,"padding-left"),h=parseInt(c[f]||f,10),f=e.getComputedStyle(l,"border-left-width"),c=parseInt(c[f]||f,10);else{d=a.document.createElement("table");d.insertRow(0).insertCell(0).innerHTML="xxx";a.body.appendChild(d);var l=d.getElementsByTagName("td")[0];
f=e.getComputedStyle(d,"border-left-width");b=parseInt(c[f]||f,10);f=e.getComputedStyle(l,"padding-left");h=parseInt(c[f]||f,10);f=e.getComputedStyle(l,"border-left-width");c=parseInt(c[f]||f,10);e.remove(d)}return{tableBorder:b,tdPadding:h,tdBorder:c}};g.getUETable=function(a){var d=a.tagName.toLowerCase();a="td"==d||"th"==d||"caption"==d?e.findParentByTagName(a,"table",!0):a;a.ueTable||(a.ueTable=new g(a));return a.ueTable};g.cloneCell=function(a,d,c){if(!a||q.isString(a))return this.table.ownerDocument.createElement(a||
"td");var b=e.hasClass(a,"selectTdClass");b&&e.removeClasses(a,"selectTdClass");var h=a.cloneNode(!0);d&&(h.rowSpan=h.colSpan=1);!c&&e.removeAttributes(h,"width height");!c&&e.removeAttributes(h,"style");h.style.borderLeftStyle="";h.style.borderTopStyle="";h.style.borderLeftColor=a.style.borderRightColor;h.style.borderLeftWidth=a.style.borderRightWidth;h.style.borderTopColor=a.style.borderBottomColor;h.style.borderTopWidth=a.style.borderBottomWidth;b&&e.addClass(a,"selectTdClass");return h};g.prototype=
{getMaxRows:function(){for(var a=this.table.rows,d=1,c=0,b;b=a[c];c++){for(var e=1,f=0,l;l=b.cells[f++];)e=Math.max(l.rowSpan||1,e);d=Math.max(e+c,d)}return d},getMaxCols:function(){for(var a=this.table.rows,d=0,c={},b=0,e;e=a[b];b++){for(var f=0,l=0,k;k=e.cells[l++];)if(f+=k.colSpan||1,k.rowSpan&&1<k.rowSpan)for(var g=1;g<k.rowSpan;g++)c["row_"+(b+g)]?c["row_"+(b+g)]++:c["row_"+(b+g)]=k.colSpan||1;f+=c["row_"+b]||0;d=Math.max(f,d)}return d},getCellColIndex:function(a){},getHSideCell:function(a,d){try{var c=
this.getCellInfo(a),b,e,f=this.selectedTds.length,l=this.cellsRange;if(!d&&(f?!l.beginColIndex:!c.colIndex)||d&&(f?l.endColIndex==this.colsNum-1:c.colIndex==this.colsNum-1))return null;b=f?l.beginRowIndex:c.rowIndex;e=d?f?l.endColIndex+1:c.colIndex+1:f?l.beginColIndex-1:1>c.colIndex?0:c.colIndex-1;return this.getCell(this.indexTable[b][e].rowIndex,this.indexTable[b][e].cellIndex)}catch(k){}},getTabNextCell:function(a,d){var c=this.getCellInfo(a),b=d||c.rowIndex,c=c.colIndex+1+(c.colSpan-1),e;try{e=
this.getCell(this.indexTable[b][c].rowIndex,this.indexTable[b][c].cellIndex)}catch(f){try{b=1*b+1,c=0,e=this.getCell(this.indexTable[b][c].rowIndex,this.indexTable[b][c].cellIndex)}catch(l){}}return e},getVSideCell:function(a,d,c){try{var b=this.getCellInfo(a),e,f,l=this.selectedTds.length&&!c,k=this.cellsRange;if(!d&&0==b.rowIndex||d&&(l?k.endRowIndex==this.rowsNum-1:b.rowIndex+b.rowSpan>this.rowsNum-1))return null;e=d?l?k.endRowIndex+1:b.rowIndex+b.rowSpan:l?k.beginRowIndex-1:b.rowIndex-1;f=l?k.beginColIndex:
b.colIndex;return this.getCell(this.indexTable[e][f].rowIndex,this.indexTable[e][f].cellIndex)}catch(g){}},getSameEndPosCells:function(a,d){try{for(var c="x"===d.toLowerCase(),b=e.getXY(a)[c?"x":"y"]+a["offset"+(c?"Width":"Height")],h=this.table.rows,f=null,l=[],k=0;k<this.rowsNum;k++)for(var f=h[k].cells,g=0,m;m=f[g++];){var s=e.getXY(m)[c?"x":"y"]+m["offset"+(c?"Width":"Height")];if(s>b&&c)break;if(a==m||b==s)if(1==m[c?"colSpan":"rowSpan"]&&l.push(m),c)break}return l}catch(u){}},setCellContent:function(a,
d){a.innerHTML=d||(r.ie?e.fillChar:"<br />")},cloneCell:g.cloneCell,getSameStartPosXCells:function(a){try{var d=e.getXY(a).x+a.offsetWidth,c=this.table.rows,b;a=[];for(var h=0;h<this.rowsNum;h++){b=c[h].cells;for(var f=0,l;l=b[f++];){var k=e.getXY(l).x;if(k>d)break;if(k==d&&1==l.colSpan){a.push(l);break}}}return a}catch(g){}},update:function(a){this.table=a||this.table;this.selectedTds=[];this.cellsRange={};this.indexTable=[];a=this.table.rows;for(var d=this.getMaxRows(),c=d-a.length,b=this.getMaxCols();c--;)this.table.insertRow(a.length);
this.rowsNum=d;this.colsNum=b;for(var c=0,h=a.length;c<h;c++)this.indexTable[c]=Array(b);for(var c=0,f;f=a[c];c++){var h=0,l;for(f=f.cells;l=f[h];h++){l.rowSpan>d&&(l.rowSpan=d);var k=h,g=l.rowSpan||1;for(l=l.colSpan||1;this.indexTable[c][k];)k++;for(var m=0;m<g;m++)for(var s=0;s<l;s++)this.indexTable[c+m][k+s]={rowIndex:c,cellIndex:h,colIndex:k,rowSpan:g,colSpan:l}}}for(m=0;m<d;m++)for(s=0;s<b;s++)void 0===this.indexTable[m][s]&&(f=a[m],l=(l=f.cells[f.cells.length-1])?l.cloneNode(!0):this.table.ownerDocument.createElement("td"),
this.setCellContent(l),1!==l.colSpan&&(l.colSpan=1),1!==l.rowSpan&&(l.rowSpan=1),f.appendChild(l),this.indexTable[m][s]={rowIndex:m,cellIndex:l.cellIndex,colIndex:s,rowSpan:1,colSpan:1});a=e.getElementsByTagName(this.table,"td");var u=[];q.each(a,function(a){e.hasClass(a,"selectTdClass")&&u.push(a)});u.length&&(d=u[u.length-1],a=this.getCellInfo(u[0]),d=this.getCellInfo(d),this.selectedTds=u,this.cellsRange={beginRowIndex:a.rowIndex,beginColIndex:a.colIndex,endRowIndex:d.rowIndex+d.rowSpan-1,endColIndex:d.colIndex+
d.colSpan-1})},getCellInfo:function(a){if(a){var d=a.cellIndex;a=a.parentNode.rowIndex;for(var c=this.indexTable[a],b=this.colsNum,e=d;e<b;e++){var f=c[e];if(f.rowIndex===a&&f.cellIndex===d)return f}}},getCell:function(a,d){return a<this.rowsNum&&this.table.rows[a].cells[d]||null},deleteCell:function(a,d){d="number"==typeof d?d:a.parentNode.rowIndex;this.table.rows[d].deleteCell(a.cellIndex)},getCellsRange:function(a,d){function c(a,f,d,e){var k=a,h=f,g=d,l=e,m,n,s;if(0<a)for(n=f;n<e;n++)m=b.indexTable[a][n],
s=m.rowIndex,s<a&&(k=Math.min(s,k));if(e<b.colsNum)for(s=a;s<d;s++)m=b.indexTable[s][e],n=m.colIndex+m.colSpan-1,n>e&&(l=Math.max(n,l));if(d<b.rowsNum)for(n=f;n<e;n++)m=b.indexTable[d][n],s=m.rowIndex+m.rowSpan-1,s>d&&(g=Math.max(s,g));if(0<f)for(s=a;s<d;s++)m=b.indexTable[s][f],n=m.colIndex,n<f&&(h=Math.min(m.colIndex,h));return k!=a||h!=f||g!=d||l!=e?c(k,h,g,l):{beginRowIndex:a,beginColIndex:f,endRowIndex:d,endColIndex:e}}try{var b=this,e=b.getCellInfo(a);if(a===d)return{beginRowIndex:e.rowIndex,
beginColIndex:e.colIndex,endRowIndex:e.rowIndex+e.rowSpan-1,endColIndex:e.colIndex+e.colSpan-1};var f=b.getCellInfo(d),l=Math.min(e.rowIndex,f.rowIndex),k=Math.min(e.colIndex,f.colIndex),g=Math.max(e.rowIndex+e.rowSpan-1,f.rowIndex+f.rowSpan-1),m=Math.max(e.colIndex+e.colSpan-1,f.colIndex+f.colSpan-1);return c(l,k,g,m)}catch(s){}},getCells:function(a){this.clearSelected();for(var d=a.beginColIndex,c=a.endRowIndex,b=a.endColIndex,e,f,g={},k=[],n=a.beginRowIndex;n<=c;n++)for(var m=d;m<=b;m++){a=this.indexTable[n][m];
e=a.rowIndex;f=a.colIndex;var s=e+"|"+f;if(!g[s]){g[s]=1;if(e<n||f<m||e+a.rowSpan-1>c||f+a.colSpan-1>b)return null;k.push(this.getCell(e,a.cellIndex))}}return k},clearSelected:function(){g.removeSelectedClass(this.selectedTds);this.selectedTds=[];this.cellsRange={}},setSelected:function(a){var d=this.getCells(a);g.addSelectedClass(d);this.selectedTds=d;this.cellsRange=a},isFullRow:function(){var a=this.cellsRange;return a.endColIndex-a.beginColIndex+1==this.colsNum},isFullCol:function(){var a=this.cellsRange,
d=this.table.getElementsByTagName("th"),a=a.endRowIndex-a.beginRowIndex+1;return d.length?a==this.rowsNum||a==this.rowsNum-1:a==this.rowsNum},getNextCell:function(a,d,c){try{var b=this.getCellInfo(a),e,f,g=this.selectedTds.length&&!c,k=this.cellsRange;if(!d&&0==b.rowIndex||d&&(g?k.endRowIndex==this.rowsNum-1:b.rowIndex+b.rowSpan>this.rowsNum-1))return null;e=d?g?k.endRowIndex+1:b.rowIndex+b.rowSpan:g?k.beginRowIndex-1:b.rowIndex-1;f=g?k.beginColIndex:b.colIndex;return this.getCell(this.indexTable[e][f].rowIndex,
this.indexTable[e][f].cellIndex)}catch(n){}},getPreviewCell:function(a,d){try{var c=this.getCellInfo(a),b,e,f=this.selectedTds.length,g=this.cellsRange;if(!d&&(f?!g.beginColIndex:!c.colIndex)||d&&(f?g.endColIndex==this.colsNum-1:c.rowIndex>this.colsNum-1))return null;b=d?f?g.beginRowIndex:1>c.rowIndex?0:c.rowIndex-1:f?g.beginRowIndex:c.rowIndex;e=d?f?g.endColIndex+1:c.colIndex:f?g.beginColIndex-1:1>c.colIndex?0:c.colIndex-1;return this.getCell(this.indexTable[b][e].rowIndex,this.indexTable[b][e].cellIndex)}catch(k){}},
moveContent:function(a,d){if(!g.isEmptyBlock(d))if(g.isEmptyBlock(a))a.innerHTML=d.innerHTML;else{var c=a.lastChild;for(3!=c.nodeType&&w.$block[c.tagName]||a.appendChild(a.ownerDocument.createElement("br"));c=d.firstChild;)a.appendChild(c)}},mergeRight:function(a){var d=this.getCellInfo(a),c=this.indexTable[d.rowIndex][d.colIndex+d.colSpan],b=this.getCell(c.rowIndex,c.cellIndex);a.colSpan=d.colSpan+c.colSpan;a.removeAttribute("width");this.moveContent(a,b);this.deleteCell(b,c.rowIndex);this.update()},
mergeDown:function(a){var d=this.getCellInfo(a),c=this.indexTable[d.rowIndex+d.rowSpan][d.colIndex],b=this.getCell(c.rowIndex,c.cellIndex);a.rowSpan=d.rowSpan+c.rowSpan;a.removeAttribute("height");this.moveContent(a,b);this.deleteCell(b,c.rowIndex);this.update()},mergeRange:function(){var a=this.cellsRange,d=this.getCell(a.beginRowIndex,this.indexTable[a.beginRowIndex][a.beginColIndex].cellIndex);if("TH"==d.tagName&&a.endRowIndex!==a.beginRowIndex)var c=this.indexTable,a=this.getCellInfo(d),d=this.getCell(1,
c[1][a.colIndex].cellIndex),a=this.getCellsRange(d,this.getCell(c[this.rowsNum-1][a.colIndex].rowIndex,c[this.rowsNum-1][a.colIndex].cellIndex));for(var b=this.getCells(a),c=0,e;e=b[c++];)e!==d&&(this.moveContent(d,e),this.deleteCell(e));d.rowSpan=a.endRowIndex-a.beginRowIndex+1;1<d.rowSpan&&d.removeAttribute("height");d.colSpan=a.endColIndex-a.beginColIndex+1;1<d.colSpan&&d.removeAttribute("width");d.rowSpan==this.rowsNum&&1!=d.colSpan&&(d.colSpan=1);if(d.colSpan==this.colsNum&&1!=d.rowSpan){b=d.parentNode.rowIndex;
if(this.table.deleteRow)for(c=b+1,b+=1,a=d.rowSpan;c<a;c++)this.table.deleteRow(b);else for(c=0,a=d.rowSpan-1;c<a;c++)e=this.table.rows[b+1],e.parentNode.removeChild(e);d.rowSpan=1}this.update()},insertRow:function(a,d){var c=this.colsNum,b=this.table,e=b.insertRow(a);parseInt((b.offsetWidth-20*c-c-1)/c,10);if(0==a||a==this.rowsNum)for(var f=0;f<c;f++)b=this.cloneCell(d,!0),this.setCellContent(b),b.getAttribute("vAlign")&&b.setAttribute("vAlign",b.getAttribute("vAlign")),e.appendChild(b);else for(var g=
this.indexTable[a],f=0;f<c;f++){var k=g[f];k.rowIndex<a?(b=this.getCell(k.rowIndex,k.cellIndex),b.rowSpan=k.rowSpan+1):(b=this.cloneCell(d,!0),this.setCellContent(b),e.appendChild(b))}this.update();return e},deleteRow:function(a){for(var d=this.table.rows[a],c=this.indexTable[a],b=this.colsNum,g=0,f=0;f<b;){var l=c[f],k=this.getCell(l.rowIndex,l.cellIndex);if(1<k.rowSpan&&l.rowIndex==a){l=k.cloneNode(!0);l.rowSpan=k.rowSpan-1;l.innerHTML="";k.rowSpan=1;var n=a+1,m=this.table.rows[n],n=this.getPreviewMergedCellsNum(n,
f)-g;n<f?(n=f-n-1,e.insertAfter(m.cells[n],l)):m.cells.length&&m.insertBefore(l,m.cells[0]);g+=1}f+=k.colSpan||1}a=[];g={};for(f=0;f<b;f++)k=c[f].rowIndex,l=c[f].cellIndex,m=k+"_"+l,g[m]||(g[m]=1,k=this.getCell(k,l),a.push(k));var s=[];q.each(a,function(a){1==a.rowSpan?a.parentNode.removeChild(a):s.push(a)});q.each(s,function(a){a.rowSpan--});d.parentNode.removeChild(d);this.update()},insertCol:function(a,d,c){function b(a,b,f){0==a?(a=b.nextSibling||b.previousSibling,"TH"==a.tagName&&(a=b.ownerDocument.createElement("th"),
a.appendChild(b.firstChild),f.insertBefore(a,b),e.remove(b))):"TH"==b.tagName&&(a=b.ownerDocument.createElement("td"),a.appendChild(b.firstChild),f.insertBefore(a,b),e.remove(b))}var g=this.rowsNum,f=0,l,k,n=parseInt((this.table.offsetWidth-20*(this.colsNum+1)-(this.colsNum+1))/(this.colsNum+1),10),m;if(0==a||a==this.colsNum)for(;f<g;f++)l=this.table.rows[f],m=l.cells[0==a?a:l.cells.length],k=this.cloneCell(d,!0),this.setCellContent(k),k.setAttribute("vAlign",k.getAttribute("vAlign")),m&&k.setAttribute("width",
m.getAttribute("width")),a?e.insertAfter(l.cells[l.cells.length-1],k):l.insertBefore(k,l.cells[0]),b(f,k,l);else for(;f<g;f++)m=this.indexTable[f][a],m.colIndex<a?(k=this.getCell(m.rowIndex,m.cellIndex),k.colSpan=m.colSpan+1):(l=this.table.rows[f],m=l.cells[m.cellIndex],k=this.cloneCell(d,!0),this.setCellContent(k),k.setAttribute("vAlign",k.getAttribute("vAlign")),m&&k.setAttribute("width",m.getAttribute("width")),m?l.insertBefore(k,m):l.appendChild(k)),b(f,k,l);this.update();this.updateWidth(n,c||
{tdPadding:10,tdBorder:1})},updateWidth:function(a,d){var c=this.table,b=g.getWidth(c)-2*d.tdPadding-d.tdBorder+a;b<c.ownerDocument.body.offsetWidth?c.setAttribute("width",b):(c=e.getElementsByTagName(this.table,"td"),q.each(c,function(b){b.setAttribute("width",a)}))},deleteCol:function(a){for(var d=this.indexTable,c=this.table.rows,b=this.table.getAttribute("width"),e=0,f=this.rowsNum,g={},k=0;k<f;){var n=d[k][a],m=n.rowIndex+"_"+n.colIndex;g[m]||(g[m]=1,m=this.getCell(n.rowIndex,n.cellIndex),e||
(e=m&&parseInt(m.offsetWidth/m.colSpan,10).toFixed(0)),1<m.colSpan?m.colSpan--:c[k].deleteCell(n.cellIndex),k+=n.rowSpan||1)}this.table.setAttribute("width",b-e);this.update()},splitToCells:function(a){var d=this;a=this.splitToRows(a);q.each(a,function(a){d.splitToCols(a)})},splitToRows:function(a){var d=this.getCellInfo(a),c=d.rowIndex,b=d.colIndex,e=[];a.rowSpan=1;e.push(a);for(var f=c,g=c+d.rowSpan;f<g;f++)if(f!=c){var k=this.table.rows[f].insertCell(b-this.getPreviewMergedCellsNum(f,b));k.colSpan=
d.colSpan;this.setCellContent(k);k.setAttribute("vAlign",a.getAttribute("vAlign"));k.setAttribute("align",a.getAttribute("align"));a.style.cssText&&(k.style.cssText=a.style.cssText);e.push(k)}this.update();return e},getPreviewMergedCellsNum:function(a,d){for(var c=this.indexTable[a],b=0,e=0;e<d;)var f=c[e].colSpan,b=b+(f-(c[e].rowIndex==a?1:0)),e=e+f;return b},splitToCols:function(a){var d=(a.offsetWidth/a.colSpan-22).toFixed(0),c=this.getCellInfo(a),b=c.rowIndex,g=c.colIndex,f=[];a.colSpan=1;a.setAttribute("width",
d);f.push(a);for(var l=g,k=g+c.colSpan;l<k;l++)if(l!=g){var n=this.table.rows[b],m=n.insertCell(this.indexTable[b][l].cellIndex+1);m.rowSpan=c.rowSpan;this.setCellContent(m);m.setAttribute("vAlign",a.getAttribute("vAlign"));m.setAttribute("align",a.getAttribute("align"));m.setAttribute("width",d);a.style.cssText&&(m.style.cssText=a.style.cssText);if("TH"==a.tagName){var s=a.ownerDocument.createElement("th");s.appendChild(m.firstChild);s.setAttribute("vAlign",a.getAttribute("vAlign"));s.rowSpan=m.rowSpan;
n.insertBefore(s,m);e.remove(m)}f.push(m)}this.update();return f},isLastCell:function(a,d,c){d=d||this.rowsNum;c=c||this.colsNum;a=this.getCellInfo(a);return a.rowIndex+a.rowSpan==d&&a.colIndex+a.colSpan==c},getLastCell:function(a){a=a||this.table.getElementsByTagName("td");this.getCellInfo(a[0]);var d=this,c=a[0],b=c.parentNode,e=0,f=0,g;q.each(a,function(a){a.parentNode==b&&(f+=a.colSpan||1);e+=a.rowSpan*a.colSpan||1});g=e/f;q.each(a,function(a){if(d.isLastCell(a,g,f))return c=a,!1});return c},
selectRow:function(a){var d=this.indexTable[a];a=this.getCell(d[0].rowIndex,d[0].cellIndex);d=this.getCell(d[this.colsNum-1].rowIndex,d[this.colsNum-1].cellIndex);a=this.getCellsRange(a,d);this.setSelected(a)},selectTable:function(){var a=this.table.getElementsByTagName("td"),a=this.getCellsRange(a[0],a[a.length-1]);this.setSelected(a)},sortTable:function(a,d){var c=this.table,b=c.rows,e=[],f="TH"===b[0].cells[0].tagName,g=0;if(this.selectedTds.length){for(var k=this.cellsRange,n=k.endRowIndex+1,
m=k.beginRowIndex;m<n;m++)e[m]=b[m];e.splice(0,k.beginRowIndex);g=k.endRowIndex+1===this.rowsNum?0:k.endRowIndex+1}else for(m=0,n=b.length;m<n;m++)e[m]=b[m];f&&e.splice(0,1);e=q.sort(e,function(b,f){return d?"number"===typeof d?d:d.call(this,b.cells[a],f.cells[a]):(b.cells[a].innerText||b.cells[a].textContent).localeCompare(f.cells[a].innerText||f.cells[a].textContent)});f=c.ownerDocument.createDocumentFragment();m=0;for(n=e.length;m<n;m++)f.appendChild(e[m]);c=c.getElementsByTagName("tbody")[0];
g?c.insertBefore(f,b[g-k.endRowIndex+k.beginRowIndex-1]):c.appendChild(f)},setBackground:function(a,e){if("string"===typeof e)q.each(a,function(a){a.style.backgroundColor=e});else if("object"===typeof e){e=q.extend({repeat:!0,colorList:["#ddd","#fff"]},e);for(var c=this.getCellInfo(a[0]).rowIndex,b=0,g=e.colorList,f=function(a,b,f){return a[b]?a[b]:f?a[b%a.length]:""},l=0,k;k=a[l++];){var n=this.getCellInfo(k);k.style.backgroundColor=f(g,c+b==n.rowIndex?b:++b,e.repeat)}}},removeBackground:function(a){q.each(a,
function(a){a.style.backgroundColor=""})}}})();(function(){function g(b,e){var d=b.getElementsByTagName("td");q.each(d,function(a){a.removeAttribute("width")});b.setAttribute("width",a(e,!0,c.getDefaultValue(e,b)));setTimeout(function(){q.each(d,function(a){1==a.colSpan&&a.setAttribute("width",a.offsetWidth+"")})},0)}function a(a,b,c){var d=a.body;return d.offsetWidth-(b?2*parseInt(e.getComputedStyle(d,"margin-left"),10):0)-2*c.tableBorder-(a.options.offsetWidth||0)}function d(a){if(a=b(a).cell){var c=
h(a);return c.selectedTds.length?c.selectedTds:[a]}return[]}var c=UE.UETable,b=function(a){return c.getTableItemsByRange(a)},h=function(a){return c.getUETable(a)};UE.commands.inserttable={queryCommandState:function(){return b(this).table?-1:0},execCommand:function(a,b){b||(b=q.extend({},{numCols:this.options.defaultCols,numRows:this.options.defaultRows,tdvalign:this.options.tdvalign}));var d=this.selection.getRange().startContainer,d=e.findParent(d,function(a){return e.isBlockElm(a)},!0)||this.body,
g=c.getDefaultValue(this,void 0),d=Math.floor(d.offsetWidth/b.numCols-2*g.tdPadding-g.tdBorder);!b.tdvalign&&(b.tdvalign=this.options.tdvalign);this.execCommand("inserthtml",function(a,b){for(var f=[],c=a.numRows,d=a.numCols,k=0;k<c;k++){f.push("<tr>");for(var g=0;g<d;g++)f.push('<td width="'+b+'"  vAlign="'+a.tdvalign+'" >'+(r.ie?e.fillChar:"<br/>")+"</td>");f.push("</tr>")}return"<table><tbody>"+f.join("")+"</tbody></table>"}(b,d))}};UE.commands.insertparagraphbeforetable={queryCommandState:function(){return b(this).cell?
0:-1},execCommand:function(){var a=b(this).table;if(a){var c=this.document.createElement("p");c.innerHTML=r.ie?"&nbsp;":"<br />";a.parentNode.insertBefore(c,a);this.selection.getRange().setStart(c,0).setCursor()}}};UE.commands.deletetable={queryCommandState:function(){var a=this.selection.getRange();return e.findParentByTagName(a.startContainer,"table",!0)?0:-1},execCommand:function(a,b){var c=this.selection.getRange();if(b=b||e.findParentByTagName(c.startContainer,"table",!0)){var d=b.nextSibling;
d||(d=e.createElement(this.document,"p",{innerHTML:r.ie?e.fillChar:"<br/>"}),b.parentNode.insertBefore(d,b));e.remove(b);c=this.selection.getRange();3==d.nodeType?c.setStartBefore(d):c.setStart(d,0);c.setCursor(!1,!0);this.fireEvent("tablehasdeleted")}}};UE.commands.cellalign={queryCommandState:function(){return d(this).length?0:-1},execCommand:function(a,b){var c=d(this);if(c.length)for(var e=0,g;g=c[e++];)g.setAttribute("align",b)}};UE.commands.cellvalign={queryCommandState:function(){return d(this).length?
0:-1},execCommand:function(a,b){var c=d(this);if(c.length)for(var e=0,g;g=c[e++];)g.setAttribute("vAlign",b)}};UE.commands.insertcaption={queryCommandState:function(){var a=b(this).table;return a?0==a.getElementsByTagName("caption").length?1:-1:-1},execCommand:function(){var a=b(this).table;if(a){var c=this.document.createElement("caption");c.innerHTML=r.ie?e.fillChar:"<br/>";a.insertBefore(c,a.firstChild);this.selection.getRange().setStart(c,0).setCursor()}}};UE.commands.deletecaption={queryCommandState:function(){var a=
this.selection.getRange();return(a=e.findParentByTagName(a.startContainer,"table"))?0==a.getElementsByTagName("caption").length?-1:1:-1},execCommand:function(){var a=this.selection.getRange();if(a=e.findParentByTagName(a.startContainer,"table"))e.remove(a.getElementsByTagName("caption")[0]),this.selection.getRange().setStart(a.rows[0].cells[0],0).setCursor()}};UE.commands.inserttitle={queryCommandState:function(){var a=b(this).table;return a?0==a.rows[0].getElementsByTagName("th").length?0:-1:-1},
execCommand:function(){var a=b(this).table;a&&h(a).insertRow(0,"th");a=a.getElementsByTagName("th")[0];this.selection.getRange().setStart(a,0).setCursor(!1,!0)}};UE.commands.deletetitle={queryCommandState:function(){var a=b(this).table;return a?a.rows[0].getElementsByTagName("th").length?0:-1:-1},execCommand:function(){var a=b(this).table;a&&e.remove(a.rows[0]);a=a.getElementsByTagName("td")[0];this.selection.getRange().setStart(a,0).setCursor(!1,!0)}};UE.commands.mergeright={queryCommandState:function(a){var c=
b(this);if(!c.cell)return-1;a=h(c.table);if(a.selectedTds.length)return-1;var c=a.getCellInfo(c.cell),e=c.colIndex+c.colSpan;if(e>=a.colsNum)return-1;a=a.indexTable[c.rowIndex][e];return a.rowIndex==c.rowIndex&&a.rowSpan==c.rowSpan?0:-1},execCommand:function(a){a=this.selection.getRange();var c=a.createBookmark(!0),e=b(this).cell;h(e).mergeRight(e);a.moveToBookmark(c).select()}};UE.commands.mergedown={queryCommandState:function(a){a=b(this);var c=a.cell;if(!c||"TH"==c.tagName)return-1;var e=h(a.table);
if(e.selectedTds.length)return-1;var c=e.getCellInfo(a.cell),d=c.rowIndex+c.rowSpan;if(d>=e.rowsNum)return-1;e=e.indexTable[d][c.colIndex];return e.colIndex==c.colIndex&&e.colSpan==c.colSpan&&"TH"!==a.cell.tagName?0:-1},execCommand:function(){var a=this.selection.getRange(),c=a.createBookmark(!0),e=b(this).cell;h(e).mergeDown(e);a.moveToBookmark(c).select()}};UE.commands.mergecells={queryCommandState:function(){return c.getUETableBySelected(this)?0:-1},execCommand:function(){var a=c.getUETableBySelected(this);
if(a&&a.selectedTds.length){var b=a.selectedTds[0];a.mergeRange();a=this.selection.getRange();e.isEmptyBlock(b)?a.setStart(b,0).collapse(!0):a.selectNodeContents(b);a.select()}}};UE.commands.insertrow={queryCommandState:function(){var a=b(this),c=a.cell;return c&&"TD"==c.tagName&&h(a.table).rowsNum<this.options.maxRowNum?0:-1},execCommand:function(){var a=this.selection.getRange(),c=a.createBookmark(!0),e=b(this),d=e.cell,e=e.table,g=h(e),s=g.getCellInfo(d);if(g.selectedTds.length)for(var s=g.cellsRange,
u=0,v=s.endRowIndex-s.beginRowIndex+1;u<v;u++)g.insertRow(s.beginRowIndex,d);else g.insertRow(s.rowIndex,d);a.moveToBookmark(c).select();"enabled"===e.getAttribute("interlaced")&&this.fireEvent("interlacetable",e)}};UE.commands.insertrownext={queryCommandState:function(){var a=b(this),c=a.cell;return c&&"TD"==c.tagName&&h(a.table).rowsNum<this.options.maxRowNum?0:-1},execCommand:function(){var a=this.selection.getRange(),c=a.createBookmark(!0),e=b(this),d=e.cell,e=e.table,g=h(e),s=g.getCellInfo(d);
if(g.selectedTds.length)for(var s=g.cellsRange,u=0,v=s.endRowIndex-s.beginRowIndex+1;u<v;u++)g.insertRow(s.endRowIndex+1,d);else g.insertRow(s.rowIndex+s.rowSpan,d);a.moveToBookmark(c).select();"enabled"===e.getAttribute("interlaced")&&this.fireEvent("interlacetable",e)}};UE.commands.deleterow={queryCommandState:function(){if(!b(this).cell)return-1},execCommand:function(){var a=b(this).cell,c=h(a),d=c.cellsRange,g=c.getCellInfo(a),m=c.getVSideCell(a),s=c.getVSideCell(a,!0),a=this.selection.getRange();
if(q.isEmptyObject(d))c.deleteRow(g.rowIndex);else for(var u=d.beginRowIndex;u<d.endRowIndex+1;u++)c.deleteRow(d.beginRowIndex);u=c.table;u.getElementsByTagName("td").length?1==g.rowSpan||g.rowSpan==d.endRowIndex-d.beginRowIndex+1?(s||m)&&a.selectNodeContents(s||m).setCursor(!1,!0):(c=c.getCell(g.rowIndex,c.indexTable[g.rowIndex][g.colIndex].cellIndex))&&a.selectNodeContents(c).setCursor(!1,!0):(c=u.nextSibling,e.remove(u),c&&a.setStart(c,0).setCursor(!1,!0));"enabled"===u.getAttribute("interlaced")&&
this.fireEvent("interlacetable",u)}};UE.commands.insertcol={queryCommandState:function(a){a=b(this);var c=a.cell;return c&&("TD"==c.tagName||"TH"==c.tagName)&&h(a.table).colsNum<this.options.maxColNum?0:-1},execCommand:function(a){var c=this.selection.getRange(),e=c.createBookmark(!0);if(-1!=this.queryCommandState(a)){a=b(this).cell;var d=h(a),g=d.getCellInfo(a);if(d.selectedTds.length)for(var g=d.cellsRange,s=0,u=g.endColIndex-g.beginColIndex+1;s<u;s++)d.insertCol(g.beginColIndex,a);else d.insertCol(g.colIndex,
a);c.moveToBookmark(e).select(!0)}}};UE.commands.insertcolnext={queryCommandState:function(){var a=b(this);return a.cell&&h(a.table).colsNum<this.options.maxColNum?0:-1},execCommand:function(){var a=this.selection.getRange(),c=a.createBookmark(!0),e=b(this).cell,d=h(e),g=d.getCellInfo(e);if(d.selectedTds.length)for(var g=d.cellsRange,s=0,u=g.endColIndex-g.beginColIndex+1;s<u;s++)d.insertCol(g.endColIndex+1,e);else d.insertCol(g.colIndex+g.colSpan,e);a.moveToBookmark(c).select()}};UE.commands.deletecol=
{queryCommandState:function(){if(!b(this).cell)return-1},execCommand:function(){var a=b(this).cell,c=h(a),d=c.cellsRange,g=c.getCellInfo(a),m=c.getHSideCell(a),s=c.getHSideCell(a,!0);if(q.isEmptyObject(d))c.deleteCol(g.colIndex);else for(g=d.beginColIndex;g<d.endColIndex+1;g++)c.deleteCol(d.beginColIndex);c=c.table;d=this.selection.getRange();c.getElementsByTagName("td").length?e.inDoc(a,this.document)?d.setStart(a,0).setCursor(!1,!0):s&&e.inDoc(s,this.document)?d.selectNodeContents(s).setCursor(!1,
!0):m&&e.inDoc(m,this.document)&&d.selectNodeContents(m).setCursor(!0,!0):(a=c.nextSibling,e.remove(c),a&&d.setStart(a,0).setCursor(!1,!0))}};UE.commands.splittocells={queryCommandState:function(){var a=b(this),c=a.cell;return!c||0<h(a.table).selectedTds.length?-1:c&&(1<c.colSpan||1<c.rowSpan)?0:-1},execCommand:function(){var a=this.selection.getRange(),c=a.createBookmark(!0),e=b(this).cell;h(e).splitToCells(e);a.moveToBookmark(c).select()}};UE.commands.splittorows={queryCommandState:function(){var a=
b(this),c=a.cell;return!c||0<h(a.table).selectedTds.length?-1:c&&1<c.rowSpan?0:-1},execCommand:function(){var a=this.selection.getRange(),c=a.createBookmark(!0),e=b(this).cell;h(e).splitToRows(e);a.moveToBookmark(c).select()}};UE.commands.splittocols={queryCommandState:function(){var a=b(this),c=a.cell;return!c||0<h(a.table).selectedTds.length?-1:c&&1<c.colSpan?0:-1},execCommand:function(){var a=this.selection.getRange(),c=a.createBookmark(!0),e=b(this).cell;h(e).splitToCols(e);a.moveToBookmark(c).select()}};
UE.commands.adaptbytext=UE.commands.adaptbywindow={queryCommandState:function(){return b(this).table?0:-1},execCommand:function(a){var c=b(this).table;c&&("adaptbywindow"==a?g(c,this):(a=e.getElementsByTagName(c,"td th"),q.each(a,function(a){a.removeAttribute("width")}),c.removeAttribute("width")))}};UE.commands.averagedistributecol={queryCommandState:function(){var a=c.getUETableBySelected(this);return a?a.isFullRow()||a.isFullCol()?0:-1:-1},execCommand:function(a){function b(){var a=h.table,f=0,
e=0,d=c.getDefaultValue(g,a);if(h.isFullRow())f=a.offsetWidth,e=h.colsNum;else for(var a=h.cellsRange.endColIndex,k,l=h.cellsRange.beginColIndex;l<=a;)k=h.selectedTds[l],f+=k.offsetWidth,l+=k.colSpan,e+=1;return Math.ceil(f/e)-2*d.tdBorder-2*d.tdPadding}function d(a){q.each(e.getElementsByTagName(h.table,"th"),function(a){a.setAttribute("width","")});var b=h.isFullRow()?e.getElementsByTagName(h.table,"td"):h.selectedTds;q.each(b,function(b){1==b.colSpan&&b.setAttribute("width",a)})}var g=this,h=c.getUETableBySelected(g);
h&&h.selectedTds.length&&d(b())}};UE.commands.averagedistributerow={queryCommandState:function(){var a=c.getUETableBySelected(this);return!a||a.selectedTds&&/th/ig.test(a.selectedTds[0].tagName)?-1:a.isFullRow()||a.isFullCol()?0:-1},execCommand:function(a){function b(){var a,f=0;a=h.table;var d=c.getDefaultValue(g,a),k=parseInt(e.getComputedStyle(a.getElementsByTagName("td")[0],"padding-top"));if(h.isFullCol()){var f=e.getElementsByTagName(a,"caption"),l=e.getElementsByTagName(a,"th"),q,p;0<f.length&&
(q=f[0].offsetHeight);0<l.length&&(p=l[0].offsetHeight);f=a.offsetHeight-(q||0)-(p||0);a=0==l.length?h.rowsNum:h.rowsNum-1}else{p=h.cellsRange.beginRowIndex;l=h.cellsRange.endRowIndex;q=0;for(a=e.getElementsByTagName(a,"tr");p<=l;p++)f+=a[p].offsetHeight,q+=1;a=q}return r.ie&&9>r.version?Math.ceil(f/a):Math.ceil(f/a)-2*d.tdBorder-2*k}function d(a){var b=h.isFullCol()?e.getElementsByTagName(h.table,"td"):h.selectedTds;q.each(b,function(b){1==b.rowSpan&&b.setAttribute("height",a)})}var g=this,h=c.getUETableBySelected(g);
h&&h.selectedTds.length&&d(b())}};UE.commands.cellalignment={queryCommandState:function(){return b(this).table?0:-1},execCommand:function(a,b){var d=c.getUETableBySelected(this);d?q.each(d.selectedTds,function(a){e.setAttributes(a,b)}):(d=(d=this.selection.getStart())&&e.findParentByTagName(d,["td","th","caption"],!0),/caption/ig.test(d.tagName)?(d.style.textAlign=b.align,d.style.verticalAlign=b.vAlign):e.setAttributes(d,b),this.selection.getRange().setCursor(!0))},queryCommandValue:function(a){(a=
b(this).cell)||(a=d(this)[0]);if(a){var c=UE.UETable.getUETable(a).selectedTds;!c.length&&(c=a);return UE.UETable.getTableCellAlignState(c)}return null}};UE.commands.tablealignment={queryCommandState:function(){return r.ie&&8>r.version?-1:b(this).table?0:-1},execCommand:function(a,b){var c=this.selection.getStart();(c=c&&e.findParentByTagName(c,["table"],!0))&&c.setAttribute("align",b)}};UE.commands.edittable={queryCommandState:function(){return b(this).table?0:-1},execCommand:function(a,b){var c=
this.selection.getRange();if(c=e.findParentByTagName(c.startContainer,"table"))c=e.getElementsByTagName(c,"td").concat(e.getElementsByTagName(c,"th"),e.getElementsByTagName(c,"caption")),q.each(c,function(a){a.style.borderColor=b})}};UE.commands.edittd={queryCommandState:function(){return b(this).table?0:-1},execCommand:function(a,b){var d=c.getUETableBySelected(this);if(d)q.each(d.selectedTds,function(a){a.style.backgroundColor=b});else if(d=(d=this.selection.getStart())&&e.findParentByTagName(d,
["td","th","caption"],!0))d.style.backgroundColor=b}};UE.commands.sorttable={queryCommandState:function(){var a=b(this);if(!a.cell)return-1;for(var a=a.table.getElementsByTagName("td"),c=0,d;d=a[c++];)if(1!=d.rowSpan||1!=d.colSpan)return-1;return 0},execCommand:function(a,c){var d=this.selection.getRange(),e=d.createBookmark(!0),g=b(this),s=g.cell,g=h(g.table),s=g.getCellInfo(s);g.sortTable(s.cellIndex,c);d.moveToBookmark(e).select()}};UE.commands.enablesort=UE.commands.disablesort={queryCommandState:function(){return b(this).table?
0:-1},execCommand:function(a){b(this).table.setAttribute("data-sort","enablesort"==a?"sortEnabled":"sortDisabled")}};UE.commands.settablebackground={queryCommandState:function(){return 1<d(this).length?0:-1},execCommand:function(a,b){var c;c=d(this);h(c[0]).setBackground(c,b)}};UE.commands.cleartablebackground={queryCommandState:function(){var a=d(this);if(!a.length)return-1;for(var b=0,c;c=a[b++];)if(""!==c.style.backgroundColor)return 0;return-1},execCommand:function(){var a=d(this);h(a[0]).removeBackground(a)}};
UE.commands.interlacetable=UE.commands.uninterlacetable={queryCommandState:function(a){var c=b(this).table;if(!c)return-1;c=c.getAttribute("interlaced");return"interlacetable"==a?"enabled"===c?-1:0:c&&"disabled"!==c?0:-1},execCommand:function(a,c){var d=b(this).table;"interlacetable"==a?(d.setAttribute("interlaced","enabled"),this.fireEvent("interlacetable",d,c)):(d.setAttribute("interlaced","disabled"),this.fireEvent("uninterlacetable",d))}}})();UE.plugins.table=function(){function g(b,c){a(b,"width",
!0);a(b,"height",!0)}function a(a,b,c){a.style[b]&&(c&&a.setAttribute(b,parseInt(a.style[b],10)),a.style[b]="")}function d(a){if("TD"==a.tagName||"TH"==a.tagName)return a;var b;return(b=e.findParentByTagName(a,"td",!0)||e.findParentByTagName(a,"th",!0))?b:null}function c(a){var b=RegExp(e.fillChar,"g");if(0<a[r.ie?"innerText":"textContent"].replace(/^\s*$/,"").replace(b,"").length)return 0;for(var c in w.$isNotEmpty)if(a.getElementsByTagName(c).length)return 0;return 1}function b(a){return a.pageX||
a.pageY?{x:a.pageX,y:a.pageY}:{x:a.clientX+y.document.body.scrollLeft-y.document.body.clientLeft,y:a.clientY+y.document.body.scrollTop-y.document.body.clientTop}}function h(a){if(!E())try{var c=d(a.target||a.srcElement),g;ca&&(y.body.style.webkitUserSelect="none",Math.abs(X.x-a.clientX)>ba||Math.abs(X.y-a.clientY)>ba)&&(F(),ca=!1,P=0,G(a));if(T&&Q)if(P=0,y.body.style.webkitUserSelect="none",y.selection.getNative()[r.ie?"empty":"removeAllRanges"](),g=b(a),n(y,!0,T,g,c),"h"==T){var h=S.style,l;var c=
Q,s=N(c);if(s){var u=s.getSameEndPosCells(c,"x")[0],t=s.getSameStartPosXCells(c)[0],q=b(a).x,v=(u?e.getXY(u).x:e.getXY(s.table).x)+20,p=t?e.getXY(t).x+t.offsetWidth-20:y.body.offsetWidth+5||parseInt(e.getComputedStyle(y.body,"width"),10),v=v+V,p=p-V;l=q<v?v:q>p?p:q}else l=void 0;h.left=l+"px"}else{if("v"==T){var x=S.style,w;a:{try{var O=e.getXY(Q).y,z=b(a).y;w=z<O?O:z;break a}catch(B){}w=void 0}x.top=w+"px"}}else if(c){if(!0!==y.fireEvent("excludetable",c)){g=b(a);var D=m(c,g),A=e.findParentByTagName(c,
"table",!0);k(A,c,a,!0)?!0!==y.fireEvent("excludetable",A)&&(y.body.style.cursor="url("+y.options.cursorpath+"h.png),pointer"):k(A,c,a)?!0!==y.fireEvent("excludetable",A)&&(y.body.style.cursor="url("+y.options.cursorpath+"v.png),pointer"):(y.body.style.cursor="text",/\d/.test(D)&&(D=D.replace(/\d/,""),c=N(c).getPreviewCell(c,"v"==D)),n(y,c?!!D:!1,c?D:"",g,c))}}else f(!1,A,y)}catch(C){}}function f(a,b,c){a?l(b,c):ea||setTimeout(function(){!ea&&L&&L.parentNode&&L.parentNode.removeChild(L)},2E3)}function l(a,
b){function c(d,e){clearTimeout(k);k=setTimeout(function(){b.fireEvent("tableClicked",a,e)},300)}var d=e.getXY(a),f=a.ownerDocument;if(L&&L.parentNode)return L;L=f.createElement("div");L.contentEditable=!1;L.innerHTML="";L.style.cssText="width:15px;height:15px;background-image:url("+b.options.UEDITOR_HOME_URL+"dialogs/table/dragicon.png);position: absolute;cursor:move;top:"+(d.y-15)+"px;left:"+d.x+"px;";e.unSelectable(L);L.onmouseover=function(a){ea=!0};L.onmouseout=function(a){ea=!1};e.on(L,"click",
function(a,b){c(b,this)});e.on(L,"dblclick",function(c,d){clearTimeout(k);var e=N(a),f=a.rows[0].cells[0],g=e.getLastCell(),g=e.getCellsRange(f,g);b.selection.getRange().setStart(f,0).setCursor(!1,!0);e.setSelected(g)});e.on(L,"dragstart",function(a,b){e.preventDefault(b)});var k;f.body.appendChild(L)}function k(a,c,d,f){d=b(d);c=m(c,d);return f?(f=(f=a.getElementsByTagName("caption")[0])?f.offsetHeight:0,"v1"==c&&8>d.y-e.getXY(a).y-f):"h1"==c&&8>d.x-e.getXY(a).x}function n(a,b,c,d,e){try{a.body.style.cursor=
"h"==c?"col-resize":"v"==c?"row-resize":"text",r.ie&&(!c||Y||H.getUETableBySelected(a)?Z(a):(la(a,a.document),ma(c,e))),ja=b}catch(f){}}function m(a,b){var c=e.getXY(a);return c?c.x+a.offsetWidth-b.x<fa?"h":b.x-c.x<fa?"h1":c.y+a.offsetHeight-b.y<fa?"v":b.y-c.y<fa?"v1":"":""}function s(a,b){if(!E())if(X={x:b.clientX,y:b.clientY},2==b.button){var c=H.getUETableBySelected(y),d=!1;if(c){var f=W(y,b);q.each(c.selectedTds,function(a){a===f&&(d=!0)});d?(f=c.selectedTds[0],setTimeout(function(){y.selection.getRange().setStart(f,
0).setCursor(!1,!0)},0)):(ga(e.getElementsByTagName(y.body,"th td")),c.clearSelected())}}else v(b)}function u(a){P=0;a=a||y.window.event;var c=d(a.target||a.srcElement);if(c){var f;if(f=m(c,b(a)))if(Z(y),"h1"==f&&(f="h",k(e.findParentByTagName(c,"table"),c,a)?y.execCommand("adaptbywindow"):(c=N(c).getPreviewCell(c))&&y.selection.getRange().selectNodeContents(c).setCursor(!0,!0)),"h"==f){a=N(c);var g=z(c,a.table,!0),g=p(g,"left");a.width=a.offsetWidth;var h=[],l=[];q.each(g,function(a){h.push(a.offsetWidth)});
q.each(g,function(a){a.removeAttribute("width")});window.setTimeout(function(){var a=!0;q.each(g,function(b,c){var d=b.offsetWidth;if(d>h[c])return a=!1;l.push(d)});var b=a?l:h;q.each(g,function(a,c){a.width=b[c]-da()})},0)}}}function v(a){ga(e.getElementsByTagName(y.body,"td th"));q.each(y.document.getElementsByTagName("table"),function(a){a.ueTable=null});if(M=W(y,a)){var b=e.findParentByTagName(M,"table",!0);(ut=N(b))&&ut.clearSelected();ja?t(a):(y.document.body.style.webkitUserSelect="",Y=!0,
y.addListener("mouseover",B))}}function t(a){r.ie&&(a=O(a));F();ca=!0;ha=setTimeout(function(){G(a)},na)}function p(a,b){for(var c=[],d=null,e=0,f=a.length;e<f;e++)(d=a[e][b])&&c.push(d);return c}function F(){ha&&clearTimeout(ha);ha=null}function O(a){var b="pageX pageY clientX clientY srcElement target".split(" "),c={};if(a)for(var d=0,e,f;e=b[d];d++)(f=a[e])&&(c[e]=f);return c}function G(a){ca=!1;M&&(a=Math.abs(X.x-a.clientX)>=Math.abs(X.y-a.clientY)?"h":"v",/\d/.test(a)&&(a=a.replace(/\d/,""),
M=N(M).getPreviewCell(M,"v"==a)),Z(y),la(y,y.document),y.fireEvent("saveScene"),ma(a,M),Y=!0,T=a,Q=M)}function D(a,b){if(!E()){F();ca=!1;if(ja&&(P=++P%3,X={x:b.clientX,y:b.clientY},setTimeout(function(){0<P&&P--},na),2===P)){P=0;u(b);return}if(2!=b.button){var c=this.selection.getRange(),d=e.findParentByTagName(c.startContainer,"table",!0),f=e.findParentByTagName(c.endContainer,"table",!0);if(d||f)d===f?(d=e.findParentByTagName(c.startContainer,["td","th","caption"],!0),f=e.findParentByTagName(c.endContainer,
["td","th","caption"],!0),d!==f&&this.selection.clearRange()):this.selection.clearRange();Y=!1;this.document.body.style.webkitUserSelect="";if(T&&Q){this.selection.getNative()[r.ie?"empty":"removeAllRanges"]();P=0;S=this.document.getElementById("ue_tableDragLine");c=e.getXY(Q);d=e.getXY(S);switch(T){case "h":I(Q,d.x-c.x);break;case "v":C(Q,d.y-c.y-Q.offsetHeight)}T="";Q=null;Z(this);this.fireEvent("saveScene")}else{if(M)(d=(c=N(M))?c.selectedTds[0]:null)?(c=new J.Range(this.document),e.isEmptyBlock(d)?
c.setStart(d,0).setCursor(!1,!0):c.selectNodeContents(d).shrinkBoundary().setCursor(!1,!0)):(c=this.selection.getRange().shrinkBoundary(),c.collapsed||(d=e.findParentByTagName(c.startContainer,["td","th"],!0),f=e.findParentByTagName(c.endContainer,["td","th"],!0),(d&&!f||!d&&f||d&&f&&d!==f)&&c.setCursor(!1,!0))),M=null,this.removeListener("mouseover",B);else if((d=e.findParentByTagName(b.target||b.srcElement,"td",!0))||(d=e.findParentByTagName(b.target||b.srcElement,"th",!0)),d&&("TD"==d.tagName||
"TH"==d.tagName)){if(!0===this.fireEvent("excludetable",d))return;c=new J.Range(this.document);c.setStart(d,0).setCursor(!1,!0)}this._selectionChange(250,b)}}}}function B(a,b){if(!E()){var c=b.target||b.srcElement;U=e.findParentByTagName(c,"td",!0)||e.findParentByTagName(c,"th",!0);if(M&&U&&("TD"==M.tagName&&"TD"==U.tagName||"TH"==M.tagName&&"TH"==U.tagName)&&e.findParentByTagName(M,"table")==e.findParentByTagName(U,"table"))if(c=N(U),M!=U){this.document.body.style.webkitUserSelect="none";this.selection.getNative()[r.ie?
"empty":"removeAllRanges"]();var d=c.getCellsRange(M,U);c.setSelected(d)}else this.document.body.style.webkitUserSelect="",c.clearSelected();b.preventDefault?b.preventDefault():b.returnValue=!1}}function I(a,b){var c=N(a);if(c){var c=c.table,d=z(a,c);c.style.width="";c.removeAttribute("width");b=A(b,a,d);a.nextSibling?q.each(d,function(a){a.left.width=+a.left.width+b;a.right&&(a.right.width=+a.right.width-b)}):q.each(d,function(a){a.left.width-=-b})}}function E(){return"false"===y.body.contentEditable}
function C(a,b){if(!(10>Math.abs(b))){var c=N(a);if(c)for(var c=c.getSameEndPosCells(a,"y"),d=c[0]?c[0].offsetHeight:0,f=0,k;k=c[f++];){var g=b,h=d,l=parseInt(e.getComputedStyle(k,"line-height"),10),g=h+g,g=g<l?l:g;k.style.height&&(k.style.height="");1==k.rowSpan?k.setAttribute("height",g):k.removeAttribute&&k.removeAttribute("height")}}}function z(a,b,c){b||(b=e.findParentByTagName(a,"table"));if(!b)return null;e.getNodeIndex(a);b=b.rows;for(var d=0;a;)1===a.nodeType&&(d+=a.colSpan||1),a=a.previousSibling;
a=null;var f=[];q.each(b,function(a){var b=0;q.each(a.cells,function(a){b+=a.colSpan||1;if(b===d)return f.push({left:a,right:a.nextSibling||null}),!1;if(b>d)return c&&f.push({left:a}),!1})});return f}function A(a,b,c){a-=da();if(0>a)return 0;a-=K(b);var d=0>a?"left":"right";a=Math.abs(a);q.each(c,function(b){(b=b[d])&&(a=Math.min(a,K(b)-V))});a=0>a?0:a;return"left"===d?-a:a}function K(a){var b=0,b=a.offsetWidth-da();if(!a.nextSibling){tab=e.findParentByTagName(a,"table",!1);if(void 0===tab.offsetVal){var c=
a.previousSibling;tab.offsetVal=c?a.offsetWidth-c.offsetWidth===H.borderWidth?H.borderWidth:0:0}b-=tab.offsetVal}b=0>b?0:b;try{a.width=b}catch(d){}return b}function da(){if(void 0===H.tabcellSpace){var a=y.document.createElement("table"),b=y.document.createElement("tbody"),c=y.document.createElement("tr"),d=y.document.createElement("td"),f=null;d.style.cssText="border: 0;";d.width=1;c.appendChild(d);c.appendChild(f=d.cloneNode(!1));b.appendChild(c);a.appendChild(b);a.style.cssText="visibility: hidden;";
y.body.appendChild(a);H.paddingSpace=d.offsetWidth-1;b=a.offsetWidth;d.style.cssText="";f.style.cssText="";H.borderWidth=(a.offsetWidth-b)/3;H.tabcellSpace=H.paddingSpace+H.borderWidth;y.body.removeChild(a)}da=function(){return H.tabcellSpace};return H.tabcellSpace}function la(a,b){Y||(S=a.document.createElement("div"),e.setAttributes(S,{id:"ue_tableDragLine",unselectable:"on",contenteditable:!1,onresizestart:"return false",ondragstart:"return false",onselectstart:"return false",style:"background-color:blue;position:absolute;padding:0;margin:0;background-image:none;border:0px none;opacity:0;filter:alpha(opacity=0)"}),
a.body.appendChild(S))}function Z(a){if(!Y)for(var b;b=a.document.getElementById("ue_tableDragLine");)e.remove(b)}function ma(a,b){if(b){var c=e.findParentByTagName(b,"table"),d=c.getElementsByTagName("caption"),f=c.offsetWidth,k=c.offsetHeight-(0<d.length?d[0].offsetHeight:0),c=e.getXY(c),g=e.getXY(b);switch(a){case "h":d="height:"+k+"px;top:"+(c.y+(0<d.length?d[0].offsetHeight:0))+"px;left:"+(g.x+b.offsetWidth);S.style.cssText=d+"px;position: absolute;display:block;background-color:blue;width:1px;border:0; color:blue;opacity:.3;filter:alpha(opacity=30)";
break;case "v":d="width:"+f+"px;left:"+c.x+"px;top:"+(g.y+b.offsetHeight),S.style.cssText=d+"px;overflow:hidden;position: absolute;display:block;background-color:blue;height:1px;border:0;color:blue;opacity:.2;filter:alpha(opacity=20)"}}}function R(a,b){for(var c=e.getElementsByTagName(a.body,"table"),d,f=0,k;k=c[f++];)d=e.getElementsByTagName(k,"td"),d[0]&&(b?(d=d[0].style.borderColor.replace(/\s/g,""),/(#ffffff)|(rgb\(255,f55,255\))/ig.test(d)&&e.addClass(k,"noBorderTable")):e.removeClasses(k,"noBorderTable"))}
function aa(a,b,c){var d=a.body;return d.offsetWidth-(b?2*parseInt(e.getComputedStyle(d,"margin-left"),10):0)-2*c.tableBorder-(a.options.offsetWidth||0)}function W(a,c){var d=e.findParentByTagName(c.target||c.srcElement,["td","th"],!0),f=null;if(!d)return null;f=m(d,b(c));if(!d)return null;if("h1"===f&&d.previousSibling){var f=e.getXY(d),k=d.offsetWidth;Math.abs(f.x+k-c.clientX)>k/3&&(d=d.previousSibling)}else"v1"===f&&d.parentNode.previousSibling&&(f=e.getXY(d),k=d.offsetHeight,Math.abs(f.y+k-c.clientY)>
k/3&&(d=d.parentNode.previousSibling.firstChild));return d&&!0!==a.fireEvent("excludetable",d)?d:null}var y=this,ha=null,V=5,ca=!1,fa=5,ba=10,P=0,X=null,na=360,H=UE.UETable,N=function(a){return H.getUETable(a)},ga=function(a){return H.removeSelectedClass(a)};y.ready(function(){var a=this,b=a.selection.getText;a.selection.getText=function(){var c=H.getUETableBySelected(a);if(c){var d="";q.each(c.selectedTds,function(a){d+=a[r.ie?"innerText":"textContent"]});return d}return b.call(a.selection)}});var M=
null,U=null,T="",ja=!1,L=null,ea=!1,S=null,Q=null,Y=!1;y.setOpt({maxColNum:20,maxRowNum:100,defaultCols:5,defaultRows:5,tdvalign:"top",cursorpath:y.options.UEDITOR_HOME_URL+"themes/default/images/cursor_",tableDragable:!1,classList:["ue-table-interlace-color-single","ue-table-interlace-color-double"]});y.getUETable=N;var ia={deletetable:1,inserttable:1,cellvalign:1,insertcaption:1,deletecaption:1,inserttitle:1,deletetitle:1,mergeright:1,mergedown:1,mergecells:1,insertrow:1,insertrownext:1,deleterow:1,
insertcol:1,insertcolnext:1,deletecol:1,splittocells:1,splittorows:1,splittocols:1,adaptbytext:1,adaptbywindow:1,adaptbycustomer:1,insertparagraph:1,insertparagraphbeforetable:1,averagedistributecol:1,averagedistributerow:1};y.ready(function(){q.cssRule("table",".selectTdClass{background-color:#edf5fa !important}table.noBorderTable td,table.noBorderTable th,table.noBorderTable caption{border:1px dashed #ddd !important}table{margin-bottom:10px;border-collapse:collapse;display:table;}td,th{padding: 5px 10px;border: 1px solid #DDD;}caption{border:1px dashed #DDD;border-bottom:0;padding:3px;text-align:center;}th{border-top:2px solid #BBB;background:#F7F7F7;}.ue-table-interlace-color-single{ background-color: #fcfcfc; } .ue-table-interlace-color-double{ background-color: #f7faff; }td p{margin:0;padding:0;}",
y.document);var a,b,l;y.addListener("keydown",function(d,f){var k=f.keyCode||f.which;if(8==k){var g=H.getUETableBySelected(this);g&&g.selectedTds.length&&(g.isFullCol()?this.execCommand("deletecol"):g.isFullRow()?this.execCommand("deleterow"):this.fireEvent("delcells"),e.preventDefault(f));var h=e.findParentByTagName(this.selection.getStart(),"caption",!0),m=this.selection.getRange();m.collapsed&&(h&&c(h))&&(this.fireEvent("saveScene"),g=h.parentNode,e.remove(h),g&&m.setStart(g.rows[0].cells[0],0).setCursor(!1,
!0),this.fireEvent("saveScene"))}if(46==k&&(g=H.getUETableBySelected(this))){this.fireEvent("saveScene");for(h=0;m=g.selectedTds[h++];)e.fillNode(this.document,m);this.fireEvent("saveScene");e.preventDefault(f)}if(13==k){k=this.selection.getRange();if(h=e.findParentByTagName(k.startContainer,"caption",!0)){g=e.findParentByTagName(h,"table");k.collapsed?h&&k.setStart(g.rows[0].cells[0],0).setCursor(!1,!0):(k.deleteContents(),this.fireEvent("saveScene"));e.preventDefault(f);return}k.collapsed&&(g=e.findParentByTagName(k.startContainer,
"table"))&&(m=g.rows[0].cells[0],h=e.findParentByTagName(this.selection.getStart(),["td","th"],!0),g=g.previousSibling,m===h&&(!g||1==g.nodeType&&"TABLE"==g.tagName)&&e.isStartInblock(k)&&(k=e.findParent(this.selection.getStart(),function(a){return e.isBlockElm(a)},!0))&&(/t(h|d)/i.test(k.tagName)||k===h.firstChild)&&(this.execCommand("insertparagraphbeforetable"),e.preventDefault(f)))}if((f.ctrlKey||f.metaKey)&&"67"==f.keyCode&&(a=null,g=H.getUETableBySelected(this)))for(k=g.selectedTds,b=g.isFullCol(),
l=g.isFullRow(),a=[[g.cloneCell(k[0],null,!0)]],h=1;m=k[h];h++)m.parentNode!==k[h-1].parentNode?a.push([g.cloneCell(m,null,!0)]):a[a.length-1].push(g.cloneCell(m,null,!0))});y.addListener("tablehasdeleted",function(){n(this,!1,"",null);L&&e.remove(L)});y.addListener("beforepaste",function(d,f){var k=this,h=k.selection.getRange();if(e.findParentByTagName(h.startContainer,"caption",!0))h=k.document.createElement("div"),h.innerHTML=f.html,f.html=h[r.ie?"innerText":"textContent"];else{var m=H.getUETableBySelected(k);
if(a){k.fireEvent("saveScene");var h=k.selection.getRange(),n=e.findParentByTagName(h.startContainer,["td","th"],!0),s,u;if(n){m=N(n);if(l){var t=m.getCellInfo(n).rowIndex;"TH"==n.tagName&&t++;for(var h=0,v;v=a[h++];){u=m.insertRow(t++,"td");for(var p=0,x;x=v[p];p++)(n=u.cells[p])||(n=u.insertCell(p)),n.innerHTML=x.innerHTML,x.getAttribute("width")&&n.setAttribute("width",x.getAttribute("width")),x.getAttribute("vAlign")&&n.setAttribute("vAlign",x.getAttribute("vAlign")),x.getAttribute("align")&&
n.setAttribute("align",x.getAttribute("align")),x.style.cssText&&(n.style.cssText=x.style.cssText);for(p=0;(x=u.cells[p])&&v[p];p++)x.innerHTML=v[p].innerHTML,v[p].getAttribute("width")&&x.setAttribute("width",v[p].getAttribute("width")),v[p].getAttribute("vAlign")&&x.setAttribute("vAlign",v[p].getAttribute("vAlign")),v[p].getAttribute("align")&&x.setAttribute("align",v[p].getAttribute("align")),v[p].style.cssText&&(x.style.cssText=v[p].style.cssText)}}else{if(b){t=m.getCellInfo(n);p=n=0;for(v=a[0];x=
v[p++];)n+=x.colSpan||1;k.__hasEnterExecCommand=!0;for(h=0;h<n;h++)k.execCommand("insertcol");k.__hasEnterExecCommand=!1;n=m.table.rows[0].cells[t.cellIndex];"TH"==n.tagName&&(n=m.table.rows[1].cells[t.cellIndex])}for(h=0;v=a[h++];){s=n;for(p=0;x=v[p++];)n?(n.innerHTML=x.innerHTML,x.getAttribute("width")&&n.setAttribute("width",x.getAttribute("width")),x.getAttribute("vAlign")&&n.setAttribute("vAlign",x.getAttribute("vAlign")),x.getAttribute("align")&&n.setAttribute("align",x.getAttribute("align")),
x.style.cssText&&(n.style.cssText=x.style.cssText),u=n,n=n.nextSibling):(t=x.cloneNode(!0),e.removeAttributes(t,["class","rowSpan","colSpan"]),u.parentNode.appendChild(t));n=m.getNextCell(s,!0,!0);if(!a[h])break;n||(t=m.getCellInfo(s),m.table.insertRow(m.table.rows.length),m.update(),n=m.getVSideCell(s,!0))}}m.update()}else{m=k.document.createElement("table");for(h=0;v=a[h++];){u=m.insertRow(m.rows.length);for(p=0;x=v[p++];)t=H.cloneCell(x,null,!0),e.removeAttributes(t,["class"]),u.appendChild(t);
2==p&&1<t.rowSpan&&(t.rowSpan=1)}h=H.getDefaultValue(k,void 0);h=k.body.offsetWidth-2*parseInt(e.getComputedStyle(k.body,"margin-left"),10)-2*h.tableBorder-(k.options.offsetWidth||0);k.execCommand("insertHTML","<table  "+(b&&l?'width="'+h+'"':"")+">"+m.innerHTML.replace(/>\s*</g,"><").replace(/\bth\b/gi,"td")+"</table>")}k.fireEvent("contentchange");k.fireEvent("saveScene");f.html="";return!0}h=k.document.createElement("div");h.innerHTML=f.html;v=h.getElementsByTagName("table");e.findParentByTagName(k.selection.getStart(),
"table")?(q.each(v,function(a){e.remove(a)}),e.findParentByTagName(k.selection.getStart(),"caption",!0)&&(h.innerHTML=h[r.ie?"innerText":"textContent"])):q.each(v,function(a){g(a,!0);e.removeAttributes(a,["style","border"]);q.each(e.getElementsByTagName(a,"td"),function(a){c(a)&&e.fillNode(k.document,a);g(a,!0)})});f.html=h.innerHTML}});y.addListener("afterpaste",function(){q.each(e.getElementsByTagName(y.body,"table"),function(a){if(a.offsetWidth>y.body.offsetWidth){var b=H.getDefaultValue(y,a);
a.style.width=y.body.offsetWidth-2*parseInt(e.getComputedStyle(y.body,"margin-left"),10)-2*b.tableBorder-(y.options.offsetWidth||0)+"px"}})});y.addListener("blur",function(){a=null});var m;y.addListener("keydown",function(){clearTimeout(m);m=setTimeout(function(){var a=y.selection.getRange();if(a=e.findParentByTagName(a.startContainer,["th","td"],!0)){var b=a.parentNode.parentNode.parentNode;b.offsetWidth>b.getAttribute("width")&&(a.style.wordBreak="break-all")}},100)});y.addListener("selectionchange",
function(){n(y,!1,"",null)});y.addListener("contentchange",function(){var a=this;Z(a);if(!H.getUETableBySelected(a)){var b=a.selection.getRange().startContainer,b=e.findParentByTagName(b,["td","th"],!0);q.each(e.getElementsByTagName(a.document,"table"),function(c){!0!==a.fireEvent("excludetable",c)&&(c.ueTable=new H(c),q.each(e.getElementsByTagName(a.document,"td"),function(c){e.isEmptyBlock(c)&&c!==b&&(e.fillNode(a.document,c),r.ie&&6==r.version&&(c.innerHTML="&nbsp;"))}),q.each(e.getElementsByTagName(a.document,
"th"),function(c){e.isEmptyBlock(c)&&c!==b&&(e.fillNode(a.document,c),r.ie&&6==r.version&&(c.innerHTML="&nbsp;"))}),c.onmouseover=function(){a.fireEvent("tablemouseover",c)},c.onmousemove=function(){a.fireEvent("tablemousemove",c);a.options.tableDragable&&f(!0,this,a)},c.onmouseout=function(){a.fireEvent("tablemouseout",c);n(a,!1,"",null);Z(a)},c.onclick=function(b){b=a.window.event||b;var c=d(b.target||b.srcElement);if(c){var f=N(c),e=f.table,g=f.getCellInfo(c),h=a.selection.getRange();k(e,c,b,!0)?
(e=f.getCell(f.indexTable[f.rowsNum-1][g.colIndex].rowIndex,f.indexTable[f.rowsNum-1][g.colIndex].cellIndex),b.shiftKey&&f.selectedTds.length?f.selectedTds[0]!==e?(b=f.getCellsRange(f.selectedTds[0],e),f.setSelected(b)):h&&h.selectNodeContents(e).select():c!==e?(b=f.getCellsRange(c,e),f.setSelected(b)):h&&h.selectNodeContents(e).select()):k(e,c,b)&&(e=f.getCell(f.indexTable[g.rowIndex][f.colsNum-1].rowIndex,f.indexTable[g.rowIndex][f.colsNum-1].cellIndex),b.shiftKey&&f.selectedTds.length?f.selectedTds[0]!==
e?(b=f.getCellsRange(f.selectedTds[0],e),f.setSelected(b)):h&&h.selectNodeContents(e).select():c!==e?(b=f.getCellsRange(c,e),f.setSelected(b)):h&&h.selectNodeContents(e).select())}})});R(a,!0)}});e.on(y.document,"mousemove",h);e.on(y.document,"mouseout",function(a){"TABLE"==(a.target||a.srcElement).tagName&&n(y,!1,"",null)});y.addListener("interlacetable",function(a,b,c){if(b){a=b.rows;b=a.length;for(var d=0;d<b;d++)a[d].className=(c||this.options.classList)[d]?(c||this.options.classList)[d]:(c||
this.options.classList)[d%(c||this.options.classList).length]}});y.addListener("uninterlacetable",function(a,b){if(b)for(var c=b.rows,d=this.options.classList,f=c.length,k=0;k<f;k++)e.removeClasses(c[k],d)});y.addListener("mousedown",s);y.addListener("mouseup",D);e.on(y.body,"dragstart",function(a){D.call(y,"dragstart",a)});var u=0;y.addListener("mousedown",function(){u=0});y.addListener("tabkeydown",function(){var a=this.selection.getRange(),b=a.getCommonAncestor(!0,!0),d=e.findParentByTagName(b,
"table");if(d){if(e.findParentByTagName(b,"caption",!0))(b=e.getElementsByTagName(d,"th td"))&&b.length&&a.setStart(b[0],0).setCursor(!1,!0);else{var b=e.findParentByTagName(b,["td","th"],!0),f=N(b);u=1<b.rowSpan?u:f.getCellInfo(b).rowIndex;(b=f.getTabNextCell(b,u))?c(b)?a.setStart(b,0).setCursor(!1,!0):a.selectNodeContents(b).select():(y.fireEvent("saveScene"),y.__hasEnterExecCommand=!0,this.execCommand("insertrownext"),y.__hasEnterExecCommand=!1,a=this.selection.getRange(),a.setStart(d.rows[d.rows.length-
1].cells[0],0).setCursor(),y.fireEvent("saveScene"))}return!0}});r.ie&&y.addListener("selectionchange",function(){n(this,!1,"",null)});y.addListener("keydown",function(a,b){var c=b.keyCode||b.which;if(8!=c&&46!=c){(c=!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&!b.altKey)&&ga(e.getElementsByTagName(this.body,"td"));var d=H.getUETableBySelected(this);d&&c&&d.clearSelected()}});y.addListener("beforegetcontent",function(){R(this,!1);r.ie&&q.each(this.document.getElementsByTagName("caption"),function(a){e.isEmptyNode(a)&&
(a.innerHTML="&nbsp;")})});y.addListener("aftergetcontent",function(){R(this,!0)});y.addListener("getAllHtml",function(){ga(y.document.getElementsByTagName("td"))});y.addListener("fullscreenchanged",function(a,b){if(!b){var c=this.body.offsetWidth/document.body.offsetWidth,d=e.getElementsByTagName(this.body,"table");q.each(d,function(a){if(a.offsetWidth<y.body.offsetWidth)return!1;var b=e.getElementsByTagName(a,"td"),d=[];q.each(b,function(a){d.push(a.offsetWidth)});for(var f=0,k;k=b[f];f++)k.setAttribute("width",
Math.floor(d[f]*c));a.setAttribute("width",Math.floor(aa(y,!0,H.getDefaultValue(y,void 0))))})}});var t=y.execCommand;y.execCommand=function(a,b){a=a.toLowerCase();var d=H.getUETableBySelected(this),f=new J.Range(this.document),k=this.commands[a]||UE.commands[a],g;if(k){if(!d||ia[a]||k.notNeedUndo||this.__hasEnterExecCommand)g=t.apply(this,arguments);else{this.__hasEnterExecCommand=!0;this.fireEvent("beforeexeccommand",a);for(var d=d.selectedTds,h=k=-2,l,m,n=0,s;s=d[n];n++)if(c(s)?f.setStart(s,0).setCursor(!1,
!0):f.selectNode(s).select(!0),m=this.queryCommandState(a),l=this.queryCommandValue(a),-1!=m){if(k!==m||h!==l)this._ignoreContentChange=!0,g=t.apply(this,arguments),this._ignoreContentChange=!1;k=this.queryCommandState(a);h=this.queryCommandValue(a);e.isEmptyBlock(s)&&e.fillNode(this.document,s)}f.setStart(d[0],0).shrinkBoundary(!0).setCursor(!1,!0);this.fireEvent("contentchange");this.fireEvent("afterexeccommand",a);this.__hasEnterExecCommand=!1;this._selectionChange()}return g}}})};UE.plugins.contextmenu=
function(){var g=this,a=g.getLang("contextMenu"),d,c=g.options.contextMenu||[{label:a.selectall,cmdName:"selectall"},{label:a.deletecode,cmdName:"highlightcode",icon:"deletehighlightcode"},{label:a.cleardoc,cmdName:"cleardoc",exec:function(){confirm(a.confirmclear)&&this.execCommand("cleardoc")}},"-",{label:a.unlink,cmdName:"unlink"},"-",{group:a.paragraph,icon:"justifyjustify",subMenu:[{label:a.justifyleft,cmdName:"justify",value:"left"},{label:a.justifyright,cmdName:"justify",value:"right"},{label:a.justifycenter,
cmdName:"justify",value:"center"},{label:a.justifyjustify,cmdName:"justify",value:"justify"}]},"-",{group:a.table,icon:"table",subMenu:[{label:a.inserttable,cmdName:"inserttable"},{label:a.deletetable,cmdName:"deletetable"},"-",{label:a.deleterow,cmdName:"deleterow"},{label:a.deletecol,cmdName:"deletecol"},{label:a.insertcol,cmdName:"insertcol"},{label:a.insertcolnext,cmdName:"insertcolnext"},{label:a.insertrow,cmdName:"insertrow"},{label:a.insertrownext,cmdName:"insertrownext"},"-",{label:a.insertcaption,
cmdName:"insertcaption"},{label:a.deletecaption,cmdName:"deletecaption"},{label:a.inserttitle,cmdName:"inserttitle"},{label:a.deletetitle,cmdName:"deletetitle"},"-",{label:a.mergecells,cmdName:"mergecells"},{label:a.mergeright,cmdName:"mergeright"},{label:a.mergedown,cmdName:"mergedown"},"-",{label:a.splittorows,cmdName:"splittorows"},{label:a.splittocols,cmdName:"splittocols"},{label:a.splittocells,cmdName:"splittocells"},"-",{label:a.averageDiseRow,cmdName:"averagedistributerow"},{label:a.averageDisCol,
cmdName:"averagedistributecol"},"-",{label:a.edittd,cmdName:"edittd",exec:function(){UE.ui.edittd&&new UE.ui.edittd(this);this.getDialog("edittd").open()}},{label:a.edittable,cmdName:"edittable",exec:function(){UE.ui.edittable&&new UE.ui.edittable(this);this.getDialog("edittable").open()}}]},{group:a.tablesort,icon:"tablesort",subMenu:[{label:a.reversecurrent,cmdName:"sorttable",value:1},{label:a.orderbyasc,cmdName:"sorttable"},{label:a.reversebyasc,cmdName:"sorttable",exec:function(){this.execCommand("sorttable",
function(a,b){return b.innerHTML.localeCompare(a.innerHTML)})}},{label:a.orderbynum,cmdName:"sorttable",exec:function(){this.execCommand("sorttable",function(a,b){var c=a[r.ie?"innerText":"textContent"].match(/\d+/),d=b[r.ie?"innerText":"textContent"].match(/\d+/);c&&(c=+c[0]);d&&(d=+d[0]);return(c||0)-(d||0)})}},{label:a.reversebynum,cmdName:"sorttable",exec:function(){this.execCommand("sorttable",function(a,b){var c=a[r.ie?"innerText":"textContent"].match(/\d+/),d=b[r.ie?"innerText":"textContent"].match(/\d+/);
c&&(c=+c[0]);d&&(d=+d[0]);return(d||0)-(c||0)})}}]},{group:a.borderbk,icon:"borderBack",subMenu:[{label:a.setcolor,cmdName:"interlacetable",exec:function(){this.execCommand("interlacetable")}},{label:a.unsetcolor,cmdName:"uninterlacetable",exec:function(){this.execCommand("uninterlacetable")}},{label:a.setbackground,cmdName:"settablebackground",exec:function(){this.execCommand("settablebackground",{repeat:!0,colorList:["#bbb","#ccc"]})}},{label:a.unsetbackground,cmdName:"cleartablebackground",exec:function(){this.execCommand("cleartablebackground")}},
{label:a.redandblue,cmdName:"settablebackground",exec:function(){this.execCommand("settablebackground",{repeat:!0,colorList:["red","blue"]})}},{label:a.threecolorgradient,cmdName:"settablebackground",exec:function(){this.execCommand("settablebackground",{repeat:!0,colorList:["#aaa","#bbb","#ccc"]})}}]},{group:a.aligntd,icon:"aligntd",subMenu:[{cmdName:"cellalignment",value:{align:"left",vAlign:"top"}},{cmdName:"cellalignment",value:{align:"center",vAlign:"top"}},{cmdName:"cellalignment",value:{align:"right",
vAlign:"top"}},{cmdName:"cellalignment",value:{align:"left",vAlign:"middle"}},{cmdName:"cellalignment",value:{align:"center",vAlign:"middle"}},{cmdName:"cellalignment",value:{align:"right",vAlign:"middle"}},{cmdName:"cellalignment",value:{align:"left",vAlign:"bottom"}},{cmdName:"cellalignment",value:{align:"center",vAlign:"bottom"}},{cmdName:"cellalignment",value:{align:"right",vAlign:"bottom"}}]},{group:a.aligntable,icon:"aligntable",subMenu:[{cmdName:"tablealignment",className:"left",label:a.tableleft,
value:"left"},{cmdName:"tablealignment",className:"center",label:a.tablecenter,value:"center"},{cmdName:"tablealignment",className:"right",label:a.tableright,value:"right"}]},"-",{label:a.insertparagraphbefore,cmdName:"insertparagraph",value:!0},{label:a.insertparagraphafter,cmdName:"insertparagraph"},{label:a.copy,cmdName:"copy",exec:function(){alert(a.copymsg)},query:function(){return 0}},{label:a.paste,cmdName:"paste",exec:function(){alert(a.pastemsg)},query:function(){return 0}},{label:a.highlightcode,
cmdName:"highlightcode",exec:function(){UE.ui.highlightcode&&new UE.ui.highlightcode(this);this.ui._dialogs.highlightcodeDialog.open()}}];if(c.length){var b=UE.ui.uiUtils;g.addListener("contextmenu",function(h,f){var l=b.getViewportOffsetByEvent(f);g.fireEvent("beforeselectionchange");d&&d.destroy();for(var k=0,n,m=[];n=c[k];k++){var s;(function(b){if("-"==b)(s=m[m.length-1])&&"-"!==s&&m.push("-");else if(b.hasOwnProperty("group")){for(var c=0,d,f=[];d=b.subMenu[c];c++)(function(a){"-"==a?(s=f[f.length-
1])&&"-"!==s?f.push("-"):f.splice(f.length-1):(g.commands[a.cmdName]||UE.commands[a.cmdName]||a.query)&&-1<(a.query?a.query():g.queryCommandState(a.cmdName))&&f.push({label:a.label||g.getLang("contextMenu."+a.cmdName+(a.value||""))||"",className:"edui-for-"+a.cmdName+(a.className?" edui-for-"+a.cmdName+"-"+a.className:""),onclick:a.exec?function(){a.exec.call(g)}:function(){g.execCommand(a.cmdName,a.value)}})})(d);f.length&&m.push({label:function(){switch(b.icon){case "table":return g.getLang("contextMenu.table");
case "justifyjustify":return g.getLang("contextMenu.paragraph");case "aligntd":return g.getLang("contextMenu.aligntd");case "aligntable":return g.getLang("contextMenu.aligntable");case "tablesort":return a.tablesort;case "borderBack":return a.borderbk;default:return""}}(),className:"edui-for-"+b.icon,subMenu:{items:f,editor:g}})}else(g.commands[b.cmdName]||UE.commands[b.cmdName]||b.query)&&-1<(b.query?b.query.call(g):g.queryCommandState(b.cmdName))&&("highlightcode"!=b.cmdName||!(1==g.queryCommandState(b.cmdName)&&
"deletehighlightcode"!=b.icon||1!=g.queryCommandState(b.cmdName)&&"deletehighlightcode"==b.icon))&&m.push({label:b.label||g.getLang("contextMenu."+b.cmdName),className:"edui-for-"+(b.icon?b.icon:b.cmdName+(b.value||"")),onclick:b.exec?function(){b.exec.call(g)}:function(){g.execCommand(b.cmdName,b.value)}})})(n)}"-"==m[m.length-1]&&m.pop();d=new UE.ui.Menu({items:m,className:"edui-contextmenu",editor:g});d.render();d.showAt(l);g.fireEvent("aftershowcontextmenu",d);e.preventDefault(f);if(r.ie){var u;
try{u=g.selection.getNative().createRange()}catch(p){return}u.item&&(new J.Range(g.document)).selectNode(u.item(0)).select(!0,!0)}})}};UE.plugins.shortcutmenu=function(){var g,a=this.options.shortcutMenu||[];a.length&&(this.addListener("contextmenu mouseup",function(d,c){var b=this,h={type:d,target:c.target||c.srcElement,screenX:c.screenX,screenY:c.screenY,clientX:c.clientX,clientY:c.clientY};setTimeout(function(){if(!1===b.selection.getRange().collapsed||"contextmenu"==d)g||(g=new p.editor.ui.ShortCutMenu({editor:b,
items:a,theme:b.options.theme,className:"edui-shortcutmenu"}),g.render(),b.fireEvent("afterrendershortcutmenu",g)),g.show(h,!!UE.plugins.contextmenu)});if("contextmenu"==d&&(e.preventDefault(c),r.ie)){var f;try{f=b.selection.getNative().createRange()}catch(l){return}f.item&&(new J.Range(b.document)).selectNode(f.item(0)).select(!0,!0)}"keydown"==d&&g&&!g.isHidden&&g.hide()}),this.addListener("keydown",function(a){"keydown"==a&&g&&!g.isHidden&&g.hide()}))};UE.plugins.basestyle=function(){var g={bold:["strong",
"b"],italic:["em","i"],subscript:["sub"],superscript:["sup"]},a=this;a.addshortcutkey({Bold:"ctrl+66",Italic:"ctrl+73",Underline:"ctrl+85"});a.addInputRule(function(a){q.each(a.getNodesByTagName("b i"),function(a){switch(a.tagName){case "b":a.tagName="strong";break;case "i":a.tagName="em"}})});for(var d in g)(function(c,b){a.commands[c]={execCommand:function(c){var d=a.selection.getRange(),g=e.filterNodeList(this.selection.getStartElementPath(),b);if(d.collapsed){if(g)c=a.document.createTextNode(""),
d.insertNode(c).removeInlineStyle(b),d.setStartBefore(c),e.remove(c);else{g=d.document.createElement(b[0]);if("superscript"==c||"subscript"==c)c=a.document.createTextNode(""),d.insertNode(c).removeInlineStyle(["sub","sup"]).setStartBefore(c).collapse(!0);d.insertNode(g).setStart(g,0)}d.collapse(!0)}else{if("superscript"==c||"subscript"==c)g&&g.tagName.toLowerCase()==c||d.removeInlineStyle(["sub","sup"]);g?d.removeInlineStyle(b):d.applyInlineStyle(b[0])}d.select()},queryCommandState:function(){return e.filterNodeList(this.selection.getStartElementPath(),
b)?1:0}}})(d,g[d])};UE.plugins.elementpath=function(){var e,a,d=this;d.setOpt("elementPathEnabled",!0);d.options.elementPathEnabled&&(d.commands.elementpath={execCommand:function(c,b){var h=a[b],f=d.selection.getRange();e=1*b;f.selectNode(h).select()},queryCommandValue:function(){var c=[].concat(this.selection.getStartElementPath()).reverse(),b=[];a=c;for(var d=0,f;f=c[d];d++)if(3!=f.nodeType){var l=f.tagName.toLowerCase();"img"==l&&f.getAttribute("anchorname")&&(l="anchor");b[d]=l;if(e==d){e=-1;
break}}return b}})};UE.plugins.formatmatch=function(){function g(h,f){if(r.webkit)var l="IMG"==f.target.tagName?f.target:null;a.undoManger&&a.undoManger.save();var k=a.selection.getRange(),l=l||k.getClosedNode();if(c&&l&&"IMG"==l.tagName)l.style.cssText+=";float:"+(c.style.cssFloat||c.style.styleFloat||"none")+";display:"+(c.style.display||"inline"),c=null;else if(!c){if(k.collapsed){var n=a.document.createTextNode("match");k.insertNode(n).select()}a.__hasEnterExecCommand=!0;k=a.options.removeFormatAttributes;
a.options.removeFormatAttributes="";a.execCommand("removeformat");a.options.removeFormatAttributes=k;a.__hasEnterExecCommand=!1;k=a.selection.getRange();d.length&&(l=k,n&&l.selectNode(n),l.applyInlineStyle(d[d.length-1].tagName,null,d));n&&k.setStartBefore(n).collapse(!0);k.select();n&&e.remove(n)}a.undoManger&&a.undoManger.save();a.removeListener("mouseup",g);b=0;a.fireEvent("contentchange")}var a=this,d=[],c,b=0;a.addListener("reset",function(){d=[];b=0});a.commands.formatmatch={execCommand:function(h){if(b)b=
0,d=[],a.removeListener("mouseup",g);else{h=a.selection.getRange();c=h.getClosedNode();if(!c||"IMG"!=c.tagName){h.collapse(!0).shrinkBoundary();d=e.findParents(h.startContainer,!0,function(a){return!e.isBlockElm(a)&&1==a.nodeType});h=0;for(var f;f=d[h];h++)if("A"==f.tagName){d.splice(h,1);break}}a.addListener("mouseup",g);b=1}},queryCommandState:function(){return b},notNeedUndo:1}};UE.plugins.searchreplace=function(){var e,a;this.addListener("reset",function(){a=e=null});this.commands.searchreplace=
{execCommand:function(d,c){var b=this.selection,h,f,l=0;c=q.extend(c,{all:!1,casesensitive:!1,dir:1},!0);var k=c.searchStr;if(r.ie)for(this.focus();;){f=this.document.selection.createRange();h=f.duplicate();h.moveToElementText(this.document.body);c.all?(a=0,c.dir=1,e?h.setEndPoint(-1==c.dir?"EndToStart":"StartToEnd",e):h.moveToElementText(this.document.body)):(h.setEndPoint(-1==c.dir?"EndToStart":"StartToEnd",f),c.hasOwnProperty("replaceStr")&&h.setEndPoint(-1==c.dir?"StartToEnd":"EndToStart",f));
h.duplicate();if(/^\/[^/]+\/\w*$/.test(c.searchStr))if(k=h.text,f=RegExp(c.searchStr.replace(/^\/|\/\w*$/g,""),"g"+(c.casesensitive?"":"i")),(k=k.match(f))&&k.length)k=0>c.dir?k[k.length-1]:k[0];else return e=null,l;if(!h.findText(k,c.dir,c.casesensitive?4:0))return e=null,h=this.document.selection.createRange(),h.scrollIntoView(),e=null,l;h.select();c.hasOwnProperty("replaceStr")&&(h=b.getRange(),h.deleteContents().insertNode(h.document.createTextNode(c.replaceStr)).select(),e=b.getNative().createRange());
l++;if(!c.all)break}else for(var n=this.window,b=b.getNative();;){c.all?(e?(e.collapse(!1),f=e):(f=this.document.createRange(),f.setStart(this.document.body,0),f.collapse(!0)),b.removeAllRanges(),b.addRange(f),a=0,c.dir=1):(r.safari&&this.selection.getRange().select(),b=n.getSelection(),f=b.rangeCount?b.getRangeAt(0):e||this._bakNativeRange,c.hasOwnProperty("replaceStr")&&f.collapse(1==c.dir?!0:!1));a?b.removeAllRanges():(f.collapse(0>c.dir?!0:!1),b.removeAllRanges(),b.addRange(f));if(/^\/[^/]+\/\w*$/.test(c.searchStr)){h=
f.cloneRange();0>c.dir?(f.collapse(!0),f.setStart(this.body,0)):f.setEnd(this.body,this.body.childNodes.length);k=f+"";f=RegExp(c.searchStr.replace(/^\/|\/\w*$/g,""),"g"+(c.casesensitive?"":"i"));if((k=k.match(f))&&k.length)k=0>c.dir?k[k.length-1]:k[0];else return e=null,l;b.removeAllRanges();f=h;b.addRange(f)}if(!n.find(k,c.casesensitive,0>c.dir?!0:!1))return e=null,b.removeAllRanges(),l;a=0;h=n.getSelection().getRangeAt(0);h.collapsed||(c.hasOwnProperty("replaceStr")&&(h.deleteContents(),f=n.document.createTextNode(c.replaceStr),
h.insertNode(f),h.selectNode(f),b.addRange(h)),e=h.cloneRange());l++;if(!c.all)break}return!0}}};UE.plugins.customstyle=function(){var g=this;g.setOpt({customstyle:[{tag:"h1",name:"tc",style:"font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;"},{tag:"h1",name:"tl",style:"font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:left;margin:0 0 10px 0;"},{tag:"span",name:"im",style:"font-size:16px;font-style:italic;font-weight:bold;line-height:18px;"},
{tag:"span",name:"hi",style:"font-size:16px;font-style:italic;font-weight:bold;color:rgb(51, 153, 204);line-height:18px;"}]});g.commands.customstyle={execCommand:function(a,d){var c=d.tag,b=e.findParent(this.selection.getStart(),function(a){return a.getAttribute("label")},!0),g,f,l={};for(g in d)void 0!==d[g]&&(l[g]=d[g]);delete l.tag;if(b&&b.getAttribute("label")==d.label){g=this.selection.getRange();f=g.createBookmark();if(g.collapsed)if(w.$block[b.tagName]){var k=this.document.createElement("p");
e.moveChild(b,k);b.parentNode.insertBefore(k,b);e.remove(b)}else e.remove(b,!0);else{b=e.getCommonAncestor(f.start,f.end);l=e.getElementsByTagName(b,c);RegExp(c,"i").test(b.tagName)&&l.push(b);for(var n=0,m;m=l[n++];)if(m.getAttribute("label")==d.label){var k=e.getPosition(m,f.start),s=e.getPosition(m,f.end);(k&e.POSITION_FOLLOWING||k&e.POSITION_CONTAINS)&&(s&e.POSITION_PRECEDING||s&e.POSITION_CONTAINS)&&w.$block[c]&&(k=this.document.createElement("p"),e.moveChild(m,k),m.parentNode.insertBefore(k,
m));e.remove(m,!0)}(b=e.findParent(b,function(a){return a.getAttribute("label")==d.label},!0))&&e.remove(b,!0)}g.moveToBookmark(f).select()}else w.$block[c]?(this.execCommand("paragraph",c,l,"customstyle"),g=this.selection.getRange(),g.collapsed||(g.collapse(),b=e.findParent(this.selection.getStart(),function(a){return a.getAttribute("label")==d.label},!0),c=this.document.createElement("p"),e.insertAfter(b,c),e.fillNode(this.document,c),g.setStart(c,0).setCursor())):(g=this.selection.getRange(),g.collapsed?
(b=this.document.createElement(c),e.setAttributes(b,l),g.insertNode(b).setStart(b,0).setCursor()):(f=g.createBookmark(),g.applyInlineStyle(c,l).moveToBookmark(f).select()))},queryCommandValue:function(){var a=e.filterNodeList(this.selection.getStartElementPath(),function(a){return a.getAttribute("label")});return a?a.getAttribute("label"):""}};g.addListener("keyup",function(a,d){var c=d.keyCode||d.which;if(32==c||13==c)if(c=g.selection.getRange(),c.collapsed){var b=e.findParent(g.selection.getStart(),
function(a){return a.getAttribute("label")},!0);if(b&&w.$block[b.tagName]&&e.isEmptyNode(b)){var h=g.document.createElement("p");e.insertAfter(b,h);e.fillNode(g.document,h);e.remove(b);c.setStart(h,0).setCursor()}}})};UE.plugins.catchremoteimage=function(){function g(c,e){var k=c.join(h),g={timeout:6E4,onsuccess:e.success,onerror:e.error};g[a.options.catchFieldName]=k;d.request(b,g)}if(!1!==this.options.catchRemoteImageEnable){var a=this;this.setOpt({localDomain:["127.0.0.1","localhost","img.baidu.com"],
separater:"ue_separate_ue",catchFieldName:"upfile",catchRemoteImageEnable:!0});var d=UE.ajax,c=a.options.localDomain,b=a.options.catcherUrl,h=a.options.separater;a.addListener("afterpaste",function(){a.fireEvent("catchRemoteImage")});a.addListener("catchRemoteImage",function(){for(var b=[],d=e.getElementsByTagName(a.document,"img"),k=function(a,b){for(var c=0,d;d=b[c++];)if(-1!==a.indexOf(d))return!0;return!1},n=0,m;m=d[n++];)m.getAttribute("word_img")||(m=m.getAttribute("_src")||m.src||"",/^(https?|ftp):/i.test(m)&&
!k(m,c)&&b.push(m));b.length&&g(b,{success:function(b){try{var c=eval("("+b.responseText+")")}catch(f){return}b=c.srcUrl.split(h);for(var c=c.url.split(h),k=0,g;g=d[k++];)for(var m=g.getAttribute("_src")||g.src||"",n=0,p;p=b[n++];){var q=c[n-1];if(m==p&&"error"!=q){m=a.options.catcherPath+q;e.setAttributes(g,{src:m,_src:m});break}}a.fireEvent("catchremotesuccess")},error:function(){a.fireEvent("catchremoteerror")}})})}};UE.plugins.snapscreen=function(){var e,a;this.setOpt({snapscreenServerPort:location.port,
snapscreenImgAlign:"",snapscreenHost:location.hostname});this.commands.snapscreen={execCommand:function(){var d=this,c=d.getLang("snapScreen_plugin");if(!a){var b=d.container;e=b.ownerDocument||b.document;a=e.createElement("object");try{a.type="application/x-pluginbaidusnap"}catch(h){return}a.style.cssText="position:absolute;left:-9999px;";a.setAttribute("width","0");a.setAttribute("height","0");b.appendChild(a)}var f=d.options,b=function(a){try{a=eval("("+a+")")}catch(b){alert(c.callBackErrorMsg);
return}"SUCCESS"!=a.state?alert(a.state):d.execCommand("insertimage",{src:f.snapscreenPath+a.url,floatStyle:f.snapscreenImgAlign,_src:f.snapscreenPath+a.url})};try{var l=f.snapscreenServerPort+"";f.snapscreenServerUrl=f.snapscreenServerUrl.split(f.snapscreenHost);f.snapscreenServerUrl=f.snapscreenServerUrl[1]||f.snapscreenServerUrl[0];0===f.snapscreenServerUrl.indexOf(":"+l)&&(f.snapscreenServerUrl=f.snapscreenServerUrl.substring(l.length+1));var k=a.saveSnapshot(f.snapscreenHost,f.snapscreenServerUrl,
l);b(k)}catch(n){d.ui._dialogs.snapscreenDialog.open()}}}};UE.commands.insertparagraph={execCommand:function(g,a){for(var d=this.selection.getRange(),c=d.startContainer,b;c&&!e.isBody(c);)b=c,c=c.parentNode;b&&(c=this.document.createElement("p"),a?b.parentNode.insertBefore(c,b):b.parentNode.insertBefore(c,b.nextSibling),e.fillNode(this.document,c),d.setStart(c,0).setCursor(!1,!0))}};UE.plugins.webapp=function(){function g(a,b,e){return b?'<iframe class="edui-faked-webapp" title="'+a.title+'" width="'+
a.width+'" height="'+a.height+'"  scrolling="no" frameborder="0" src="'+a.url+'" logo_url = '+a.logo+"></iframe>":(e?"<p>":"")+'<img title="'+a.title+'" width="'+a.width+'" height="'+a.height+'" src="'+d.options.UEDITOR_HOME_URL+'themes/default/images/spacer.gif" style="background:url('+a.logo+') no-repeat center center; border:1px solid gray;" class="edui-faked-webapp" _url="'+a.url+'" />'+(e?"</p>":"")}function a(a){for(var b,h=e.getElementsByTagName(d.document,a?"img":"iframe"),f=0,l;l=h[f++];)"edui-faked-webapp"==
l.className&&(b=d.document.createElement("div"),b.innerHTML=g(a?{url:l.getAttribute("_url"),width:l.width,height:l.height,title:l.title,logo:l.style.backgroundImage.replace("url(","").replace(")","")}:{url:l.getAttribute("src",2),title:l.title,width:l.width,height:l.height,logo:l.getAttribute("logo_url")},a?!0:!1,!1),l.parentNode.replaceChild(b.firstChild,l))}var d=this;d.addListener("beforegetcontent",function(){a(!0)});d.addListener("aftersetcontent",function(){a(!1)});d.addListener("aftergetcontent",
function(c){"aftergetcontent"==c&&d.queryCommandState("source")||a(!1)});d.commands.webapp={execCommand:function(a,b){d.execCommand("inserthtml",g(b,!1,!0))}}};UE.plugins.template=function(){UE.commands.template={execCommand:function(e,a){a.html&&this.execCommand("inserthtml",a.html)}};this.addListener("click",function(g,a){var d=a.target||a.srcElement,c=this.selection.getRange();(d=e.findParent(d,function(a){if(a.className&&e.hasClass(a,"ue_t"))return a},!0))&&c.selectNode(d).shrinkBoundary().select()});
this.addListener("keydown",function(g,a){var d=this.selection.getRange();d.collapsed||(a.ctrlKey||a.metaKey||a.shiftKey||a.altKey)||(d=e.findParent(d.startContainer,function(a){if(a.className&&e.hasClass(a,"ue_t"))return a},!0))&&e.removeClasses(d,["ue_t"])})};UE.plugins.music=function(){function g(a,b,e,f,g,k){return g?'<embed type="application/x-shockwave-flash" class="edui-faked-music" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+a+'" width="'+b+'" height="'+e+'" align="'+f+
'"'+("none"!=f?' style= "'+("center"==f?"display:block;":" float: "+f)+'"':"")+' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >':(k?"<p "+("none"!=f?"center"==f?' style="text-align:center;" ':' style="float:"'+f:"")+">":"")+'<img align="'+f+'" width="'+b+'" height="'+e+'" _url="'+a+'" class="edui-faked-music" src="'+d.options.langPath+d.options.lang+'/images/music.png" />'+(k?"</p>":"")}function a(a){for(var b,h=e.getElementsByTagName(d.document,
a?"img":"embed"),f=0,l;l=h[f++];)if("edui-faked-music"==l.className){b=d.document.createElement("div");var k=e.getComputedStyle(l,"float"),k="none"==k?l.getAttribute("align")||"":k;b.innerHTML=g(a?l.getAttribute("_url"):l.getAttribute("src"),l.width,l.height,k,a);l.parentNode.replaceChild(b.firstChild,l)}}var d=this;d.addListener("beforegetcontent",function(){a(!0)});d.addListener("aftersetcontent",function(){a(!1)});d.addListener("aftergetcontent",function(c){"aftergetcontent"==c&&d.queryCommandState("source")||
a(!1)});d.commands.music={execCommand:function(a,b){var d=g(b.url,b.width||400,b.height||95,"none",!1,!0);this.execCommand("inserthtml",d)},queryCommandState:function(){var a=this.selection.getRange().getClosedNode();return a&&"edui-faked-music"==a.className?1:0}}};p=p||{};p.editor=p.editor||{};p.editor.ui={};(function(){function e(){var a=document.getElementById("edui_fixedlayer");h.setViewportOffset(a,{left:0,top:0})}var a=p.editor.browser,d=p.editor.dom.domUtils,c=window.$EDITORUI={},b=0,h=p.editor.ui.uiUtils=
{uid:function(a){return a?a.ID$EDITORUI||(a.ID$EDITORUI=++b):++b},hook:function(a,b){var c;a&&a._callbacks?c=a:(c=function(){var b;a&&(b=a.apply(this,arguments));for(var d=c._callbacks,e=d.length;e--;){var g=d[e].apply(this,arguments);void 0===b&&(b=g)}return b},c._callbacks=[]);c._callbacks.push(b);return c},createElementByHtml:function(a){var b=document.createElement("div");b.innerHTML=a;b=b.firstChild;b.parentNode.removeChild(b);return b},getViewportElement:function(){return a.ie&&a.quirks?document.body:
document.documentElement},getClientRect:function(a){var b;try{b=a.getBoundingClientRect()}catch(c){b={left:0,top:0,height:0,width:0}}for(var e={left:Math.round(b.left),top:Math.round(b.top),height:Math.round(b.bottom-b.top),width:Math.round(b.right-b.left)},g;(g=a.ownerDocument)!==document&&(a=d.getWindow(g).frameElement);)b=a.getBoundingClientRect(),e.left+=b.left,e.top+=b.top;e.bottom=e.top+e.height;e.right=e.left+e.width;return e},getViewportRect:function(){var a=h.getViewportElement(),b=(window.innerWidth||
a.clientWidth)|0,a=(window.innerHeight||a.clientHeight)|0;return{left:0,top:0,height:a,width:b,bottom:a,right:b}},setViewportOffset:function(a,b){var c=h.getFixedLayer();a.parentNode===c?(a.style.left=b.left+"px",a.style.top=b.top+"px"):d.setViewportOffset(a,b)},getEventOffset:function(a){var b=h.getClientRect(a.target||a.srcElement);a=h.getViewportOffsetByEvent(a);return{left:a.left-b.left,top:a.top-b.top}},getViewportOffsetByEvent:function(a){var b=a.target||a.srcElement,c=d.getWindow(b).frameElement;
a={left:a.clientX,top:a.clientY};c&&b.ownerDocument!==document&&(b=h.getClientRect(c),a.left+=b.left,a.top+=b.top);return a},setGlobal:function(a,b){c[a]=b;return'$EDITORUI["'+a+'"]'},unsetGlobal:function(a){delete c[a]},copyAttributes:function(b,c){for(var e=c.attributes,g=e.length;g--;){var h=e[g];"style"==h.nodeName||("class"==h.nodeName||a.ie&&!h.specified)||b.setAttribute(h.nodeName,h.nodeValue)}c.className&&d.addClass(b,c.className);c.style.cssText&&(b.style.cssText+=";"+c.style.cssText)},removeStyle:function(a,
b){if(a.style.removeProperty)a.style.removeProperty(b);else if(a.style.removeAttribute)a.style.removeAttribute(b);else throw"";},contains:function(a,b){return a&&b&&(a===b?!1:a.contains?a.contains(b):a.compareDocumentPosition(b)&16)},startDrag:function(a,b,c){function d(a){b.ondragmove(a.clientX-e,a.clientY-g,a);a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}c=c||document;var e=a.clientX,g=a.clientY;if(c.addEventListener){var h=function(a){c.removeEventListener("mousemove",d,!0);c.removeEventListener("mouseup",
h,!0);window.removeEventListener("mouseup",h,!0);b.ondragstop()};c.addEventListener("mousemove",d,!0);c.addEventListener("mouseup",h,!0);window.addEventListener("mouseup",h,!0);a.preventDefault()}else{var p=a.srcElement;p.setCapture();var q=function(){p.releaseCapture();p.detachEvent("onmousemove",d);p.detachEvent("onmouseup",q);p.detachEvent("onlosecaptrue",q);b.ondragstop()};p.attachEvent("onmousemove",d);p.attachEvent("onmouseup",q);p.attachEvent("onlosecaptrue",q);a.returnValue=!1}b.ondragstart()},
getFixedLayer:function(){var b=document.getElementById("edui_fixedlayer");null==b&&(b=document.createElement("div"),b.id="edui_fixedlayer",document.body.appendChild(b),a.ie&&8>=a.version?(b.style.position="absolute",d.on(window,"scroll",e),d.on(window,"resize",p.editor.utils.defer(e,0,!0)),setTimeout(e)):b.style.position="fixed",b.style.left="0",b.style.top="0",b.style.width="0",b.style.height="0");return b},makeUnselectable:function(b){if(a.opera||a.ie&&9>a.version){if(b.unselectable="on",b.hasChildNodes())for(var c=
0;c<b.childNodes.length;c++)1==b.childNodes[c].nodeType&&h.makeUnselectable(b.childNodes[c])}else void 0!==b.style.MozUserSelect?b.style.MozUserSelect="none":void 0!==b.style.WebkitUserSelect?b.style.WebkitUserSelect="none":void 0!==b.style.KhtmlUserSelect&&(b.style.KhtmlUserSelect="none")}}})();(function(){var g=p.editor.utils,a=p.editor.ui.uiUtils,d=p.editor.EventBase,c=p.editor.ui.UIBase=function(){};c.prototype={className:"",uiName:"",initOptions:function(b){for(var c in b)this[c]=b[c];this.id=
this.id||"edui"+a.uid()},initUIBase:function(){this._globalKey=g.unhtml(a.setGlobal(this.id,this))},render:function(b){for(var c=this.renderHtml(),c=a.createElementByHtml(c),d=e.getElementsByTagName(c,"*"),g="edui-"+(this.theme||this.editor.options.theme),k=document.getElementById("edui_fixedlayer"),n=0,m;m=d[n++];)e.addClass(m,g);e.addClass(c,g);k&&(k.className="",e.addClass(k,g));d=this.getDom();null!=d?(d.parentNode.replaceChild(c,d),a.copyAttributes(c,d)):("string"==typeof b&&(b=document.getElementById(b)),
b=b||a.getFixedLayer(),e.addClass(b,g),b.appendChild(c));this.postRender()},getDom:function(a){return a?document.getElementById(this.id+"_"+a):document.getElementById(this.id)},postRender:function(){this.fireEvent("postrender")},getHtmlTpl:function(){return""},formatHtml:function(a){var c="edui-"+this.uiName;return a.replace(/##/g,this.id).replace(/%%-/g,this.uiName?c+"-":"").replace(/%%/g,(this.uiName?c:"")+" "+this.className).replace(/\$\$/g,this._globalKey)},renderHtml:function(){return this.formatHtml(this.getHtmlTpl())},
dispose:function(){var b=this.getDom();b&&p.editor.dom.domUtils.remove(b);a.unsetGlobal(this.id)}};g.inherits(c,d)})();(function(){var e=p.editor.utils,a=p.editor.ui.UIBase,d=p.editor.ui.Separator=function(a){this.initOptions(a);this.initSeparator()};d.prototype={uiName:"separator",initSeparator:function(){this.initUIBase()},getHtmlTpl:function(){return'<div id="##" class="edui-box %%"></div>'}};e.inherits(d,a)})();(function(){var e=p.editor.utils,a=p.editor.dom.domUtils,d=p.editor.ui.UIBase,c=p.editor.ui.uiUtils,
b=p.editor.ui.Mask=function(a){this.initOptions(a);this.initUIBase()};b.prototype={getHtmlTpl:function(){return'<div id="##" class="edui-mask %%" onmousedown="return $$._onMouseDown(event, this);"></div>'},postRender:function(){var b=this;a.on(window,"resize",function(){setTimeout(function(){b.isHidden()||b._fill()})})},show:function(a){this._fill();this.getDom().style.display="";this.getDom().style.zIndex=a},hide:function(){this.getDom().style.display="none";this.getDom().style.zIndex=""},isHidden:function(){return"none"==
this.getDom().style.display},_onMouseDown:function(){return!1},_fill:function(){var a=this.getDom(),b=c.getViewportRect();a.style.width=b.width+"px";a.style.height=b.height+"px"}};e.inherits(b,d)})();(function(){function e(a,b){for(var c=0;c<f.length;c++){var d=f[c];if(!d.isHidden()&&!1!==d.queryAutoHide(b)){if(a&&/scroll/ig.test(a.type)&&"edui-wordpastepop"==d.className)return;d.hide()}}f.length&&d.editor.fireEvent("afterhidepop")}var a=p.editor.utils,d=p.editor.ui.uiUtils,c=p.editor.dom.domUtils,
b=p.editor.ui.UIBase,h=p.editor.ui.Popup=function(a){this.initOptions(a);this.initPopup()},f=[];h.postHide=e;var l=["edui-anchor-topleft","edui-anchor-topright","edui-anchor-bottomleft","edui-anchor-bottomright"];h.prototype={SHADOW_RADIUS:5,content:null,_hidden:!1,autoRender:!0,canSideLeft:!0,canSideUp:!0,initPopup:function(){this.initUIBase();f.push(this)},getHtmlTpl:function(){return'<div id="##" class="edui-popup %%" onmousedown="return false;"> <div id="##_body" class="edui-popup-body"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="javascript:"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-popup-content">'+
this.getContentHtmlTpl()+"  </div> </div></div>"},getContentHtmlTpl:function(){return this.content?"string"==typeof this.content?this.content:this.content.renderHtml():""},_UIBase_postRender:b.prototype.postRender,postRender:function(){this.content instanceof b&&this.content.postRender();if(this.captureWheel&&!this.captured){this.captured=!0;for(var a=(document.documentElement.clientHeight||document.body.clientHeight)-80,d=this.getDom().offsetHeight,e=c.getXY(this.combox.getDom()).y,f=this.getDom("content"),
g=this;e+d>a;)d-=30,f.style.height=d+"px";if(window.XMLHttpRequest)c.on(f,"onmousewheel"in document.body?"mousewheel":"DOMMouseScroll",function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;f.scrollTop=a.wheelDelta?f.scrollTop-60*(a.wheelDelta/120):f.scrollTop-60*(a.detail/-3)});else c.on(this.getDom(),"mousewheel",function(a){a.returnValue=!1;g.getDom("content").scrollTop-=60*(a.wheelDelta/120)})}this.fireEvent("postRenderAfter");this.hide(!0);this._UIBase_postRender()},_doAutoRender:function(){!this.getDom()&&
this.autoRender&&this.render()},mesureSize:function(){var a=this.getDom("content");return d.getClientRect(a)},fitSize:function(){if(this.captureWheel&&this.sized)return this.__size;this.sized=!0;var a=this.getDom("body");a.style.width="";a.style.height="";var b=this.mesureSize();a.style.width=this.captureWheel?-(-20-b.width)+"px":b.width+"px";a.style.height=b.height+"px";this.__size=b;this.captureWheel&&(this.getDom("content").style.overflow="auto");return b},showAnchor:function(a,b){this.showAnchorRect(d.getClientRect(a),
b)},showAnchorRect:function(a,b,e){this._doAutoRender();var f=d.getViewportRect();this._show();e=this.fitSize();var g;b?(b=this.canSideLeft&&a.right+e.width>f.right&&a.left>e.width,f=this.canSideUp&&a.top+e.height>f.bottom&&a.bottom>e.height,g=b?a.left-e.width:a.right,a=f?a.bottom-e.height:a.top):(b=this.canSideLeft&&a.right+e.width>f.right&&a.left>e.width,f=this.canSideUp&&a.top+e.height>f.bottom&&a.bottom>e.height,g=b?a.right-e.width:a.left,a=f?a.top-e.height:a.bottom);e=this.getDom();d.setViewportOffset(e,
{left:g,top:a});c.removeClasses(e,l);e.className+=" "+l[2*(f?1:0)+(b?1:0)];this.editor&&(e.style.zIndex=1*this.editor.container.style.zIndex+10,p.editor.ui.uiUtils.getFixedLayer().style.zIndex=e.style.zIndex-1)},showAt:function(a){var b=a.left;a=a.top;this.showAnchorRect({left:b,top:a,right:b,bottom:a,height:0,width:0},!1,!0)},_show:function(){this._hidden&&(this.getDom().style.display="",this._hidden=!1,this.fireEvent("show"))},isHidden:function(){return this._hidden},show:function(){this._doAutoRender();
this._show()},hide:function(a){!this._hidden&&this.getDom()&&(this.getDom().style.display="none",this._hidden=!0,a||this.fireEvent("hide"))},queryAutoHide:function(a){return!a||!d.contains(this.getDom(),a)}};a.inherits(h,b);c.on(document,"mousedown",function(a){e(a,a.target||a.srcElement)});c.on(window,"scroll",function(a,b){e(a,b)})})();(function(){var e=p.editor.utils,a=p.editor.ui.UIBase,d=p.editor.ui.ColorPicker=function(a){this.initOptions(a);this.noColorText=this.noColorText||this.editor.getLang("clearColor");
this.initUIBase()};d.prototype={getHtmlTpl:function(){for(var a=this.editor,d='<div id="##" class="edui-colorpicker %%"><div class="edui-colorpicker-topbar edui-clearfix"><div unselectable="on" id="##_preview" class="edui-colorpicker-preview"></div><div unselectable="on" class="edui-colorpicker-nocolor" onclick="$$._onPickNoColor(event, this);">'+this.noColorText+'</div></div><table  class="edui-box" style="border-collapse: collapse;" onmouseover="$$._onTableOver(event, this);" onmouseout="$$._onTableOut(event, this);" onclick="return $$._onTableClick(event, this);" cellspacing="0" cellpadding="0"><tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;padding-top: 2px"><td colspan="10">'+
a.getLang("themeColor")+'</td> </tr><tr class="edui-colorpicker-tablefirstrow" >',e=0;e<c.length;e++)e&&0===e%10&&(d+="</tr>"+(60==e?'<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;"><td colspan="10">'+a.getLang("standardColor")+"</td></tr>":"")+"<tr"+(60==e?' class="edui-colorpicker-tablefirstrow"':"")+">"),d+=70>e?'<td style="padding: 0 2px;"><a hidefocus title="'+c[e]+'" onclick="return false;" href="javascript:" unselectable="on" class="edui-box edui-colorpicker-colorcell" data-color="#'+
c[e]+'" style="background-color:#'+c[e]+";border:solid #ccc;"+(10>e||60<=e?"border-width:1px;":10<=e&&20>e?"border-width:1px 1px 0 1px;":"border-width:0 1px 0 1px;")+'"></a></td>':"";return d+"</tr></table></div>"},_onTableClick:function(a){(a=(a.target||a.srcElement).getAttribute("data-color"))&&this.fireEvent("pickcolor",a)},_onTableOver:function(a){if(a=(a.target||a.srcElement).getAttribute("data-color"))this.getDom("preview").style.backgroundColor=a},_onTableOut:function(){this.getDom("preview").style.backgroundColor=
""},_onPickNoColor:function(){this.fireEvent("picknocolor")}};e.inherits(d,a);var c="ffffff 000000 eeece1 1f497d 4f81bd c0504d 9bbb59 8064a2 4bacc6 f79646 f2f2f2 7f7f7f ddd9c3 c6d9f0 dbe5f1 f2dcdb ebf1dd e5e0ec dbeef3 fdeada d8d8d8 595959 c4bd97 8db3e2 b8cce4 e5b9b7 d7e3bc ccc1d9 b7dde8 fbd5b5 bfbfbf 3f3f3f 938953 548dd4 95b3d7 d99694 c3d69b b2a2c7 92cddc fac08f a5a5a5 262626 494429 17365d 366092 953734 76923c 5f497a 31859b e36c09 7f7f7f 0c0c0c 1d1b10 0f243e 244061 632423 4f6128 3f3151 205867 974806 c00000 ff0000 ffc000 ffff00 92d050 00b050 00b0f0 0070c0 002060 7030a0 ".split(" ")})();
(function(){var e=p.editor.utils,a=p.editor.ui.uiUtils,d=p.editor.ui.UIBase,c=p.editor.ui.TablePicker=function(a){this.initOptions(a);this.initTablePicker()};c.prototype={defaultNumRows:10,defaultNumCols:10,maxNumRows:20,maxNumCols:20,numRows:10,numCols:10,lengthOfCellSide:22,initTablePicker:function(){this.initUIBase()},getHtmlTpl:function(){return'<div id="##" class="edui-tablepicker %%"><div class="edui-tablepicker-body"><div class="edui-infoarea"><span id="##_label" class="edui-label"></span></div><div class="edui-pickarea" onmousemove="$$._onMouseMove(event, this);" onmouseover="$$._onMouseOver(event, this);" onmouseout="$$._onMouseOut(event, this);" onclick="$$._onClick(event, this);"><div id="##_overlay" class="edui-overlay"></div></div></div></div>'},
_UIBase_render:d.prototype.render,render:function(a){this._UIBase_render(a);this.getDom("label").innerHTML="0"+this.editor.getLang("t_row")+" x 0"+this.editor.getLang("t_col")},_track:function(a,c){var d=this.getDom("overlay").style,e=this.lengthOfCellSide;d.width=a*e+"px";d.height=c*e+"px";this.getDom("label").innerHTML=a+this.editor.getLang("t_col")+" x "+c+this.editor.getLang("t_row");this.numCols=a;this.numRows=c},_onMouseOver:function(b,c){var d=b.relatedTarget||b.fromElement;a.contains(c,d)||
c===d||(this.getDom("label").innerHTML="0"+this.editor.getLang("t_col")+" x 0"+this.editor.getLang("t_row"),this.getDom("overlay").style.visibility="")},_onMouseOut:function(b,c){var d=b.relatedTarget||b.toElement;a.contains(c,d)||c===d||(this.getDom("label").innerHTML="0"+this.editor.getLang("t_col")+" x 0"+this.editor.getLang("t_row"),this.getDom("overlay").style.visibility="hidden")},_onMouseMove:function(b,c){this.getDom("overlay");var d=a.getEventOffset(b),e=this.lengthOfCellSide,g=Math.ceil(d.left/
e),d=Math.ceil(d.top/e);this._track(g,d)},_onClick:function(){this.fireEvent("picktable",this.numCols,this.numRows)}};e.inherits(c,d)})();(function(){var e=p.editor.dom.domUtils,a=p.editor.ui.uiUtils,d='onmousedown="$$.Stateful_onMouseDown(event, this);" onmouseup="$$.Stateful_onMouseUp(event, this);"'+(p.editor.browser.ie?' onmouseenter="$$.Stateful_onMouseEnter(event, this);" onmouseleave="$$.Stateful_onMouseLeave(event, this);"':' onmouseover="$$.Stateful_onMouseOver(event, this);" onmouseout="$$.Stateful_onMouseOut(event, this);"');
p.editor.ui.Stateful={alwalysHoverable:!1,target:null,Stateful_init:function(){this._Stateful_dGetHtmlTpl=this.getHtmlTpl;this.getHtmlTpl=this.Stateful_getHtmlTpl},Stateful_getHtmlTpl:function(){return this._Stateful_dGetHtmlTpl().replace(/stateful/g,function(){return d})},Stateful_onMouseEnter:function(a,b){this.target=b;if(!this.isDisabled()||this.alwalysHoverable)this.addState("hover"),this.fireEvent("over")},Stateful_onMouseLeave:function(a,b){if(!this.isDisabled()||this.alwalysHoverable)this.removeState("hover"),
this.removeState("active"),this.fireEvent("out")},Stateful_onMouseOver:function(c,b){var d=c.relatedTarget;a.contains(b,d)||b===d||this.Stateful_onMouseEnter(c,b)},Stateful_onMouseOut:function(c,b){var d=c.relatedTarget;a.contains(b,d)||b===d||this.Stateful_onMouseLeave(c,b)},Stateful_onMouseDown:function(a,b){this.isDisabled()||this.addState("active")},Stateful_onMouseUp:function(a,b){this.isDisabled()||this.removeState("active")},Stateful_postRender:function(){this.disabled&&!this.hasState("disabled")&&
this.addState("disabled")},hasState:function(a){return e.hasClass(this.getStateDom(),"edui-state-"+a)},addState:function(a){this.hasState(a)||(this.getStateDom().className+=" edui-state-"+a)},removeState:function(a){this.hasState(a)&&e.removeClasses(this.getStateDom(),["edui-state-"+a])},getStateDom:function(){return this.getDom("state")},isChecked:function(){return this.hasState("checked")},setChecked:function(a){!this.isDisabled()&&a?this.addState("checked"):this.removeState("checked")},isDisabled:function(){return this.hasState("disabled")},
setDisabled:function(a){a?(this.removeState("hover"),this.removeState("checked"),this.removeState("active"),this.addState("disabled")):this.removeState("disabled")}}})();(function(){var e=p.editor.utils,a=p.editor.ui.UIBase,d=p.editor.ui.Stateful,c=p.editor.ui.Button=function(a){this.initOptions(a);this.initButton()};c.prototype={uiName:"button",label:"",title:"",showIcon:!0,showText:!0,initButton:function(){this.initUIBase();this.Stateful_init()},getHtmlTpl:function(){return'<div id="##" class="edui-box %%"><div id="##_state" stateful><div class="%%-wrap"><div id="##_body" unselectable="on" '+
(this.title?'title="'+this.title+'"':"")+' class="%%-body" onmousedown="return false;" onclick="return $$._onClick();">'+(this.showIcon?'<div class="edui-box edui-icon"></div>':"")+(this.showText?'<div class="edui-box edui-label">'+this.label+"</div>":"")+"</div></div></div></div>"},postRender:function(){this.Stateful_postRender();this.setDisabled(this.disabled)},_onClick:function(){this.isDisabled()||this.fireEvent("click")}};e.inherits(c,a);e.extend(c.prototype,d)})();(function(){var e=p.editor.utils,
a=p.editor.ui.uiUtils,d=p.editor.ui.UIBase,c=p.editor.ui.Stateful,b=p.editor.ui.SplitButton=function(a){this.initOptions(a);this.initSplitButton()};b.prototype={popup:null,uiName:"splitbutton",title:"",initSplitButton:function(){this.initUIBase();this.Stateful_init();if(null!=this.popup){var a=this.popup;this.popup=null;this.setPopup(a)}},_UIBase_postRender:d.prototype.postRender,postRender:function(){this.Stateful_postRender();this._UIBase_postRender()},setPopup:function(b){this.popup!==b&&(null!=
this.popup&&this.popup.dispose(),b.addListener("show",e.bind(this._onPopupShow,this)),b.addListener("hide",e.bind(this._onPopupHide,this)),b.addListener("postrender",e.bind(function(){b.getDom("body").appendChild(a.createElementByHtml('<div id="'+this.popup.id+'_bordereraser" class="edui-bordereraser edui-background" style="width:'+(a.getClientRect(this.getDom()).width+20)+'px"></div>'));b.getDom().className+=" "+this.className},this)),this.popup=b)},_onPopupShow:function(){this.addState("opened")},
_onPopupHide:function(){this.removeState("opened")},getHtmlTpl:function(){return'<div id="##" class="edui-box %%"><div '+(this.title?'title="'+this.title+'"':"")+' id="##_state" stateful><div class="%%-body"><div id="##_button_body" class="edui-box edui-button-body" onclick="$$._onButtonClick(event, this);"><div class="edui-box edui-icon"></div></div><div class="edui-box edui-splitborder"></div><div class="edui-box edui-arrow" onclick="$$._onArrowClick();"></div></div></div></div>'},showPopup:function(){var b=
a.getClientRect(this.getDom());b.top-=this.popup.SHADOW_RADIUS;b.height+=this.popup.SHADOW_RADIUS;this.popup.showAnchorRect(b)},_onArrowClick:function(a,b){this.isDisabled()||this.showPopup()},_onButtonClick:function(){this.isDisabled()||this.fireEvent("buttonclick")}};e.inherits(b,d);e.extend(b.prototype,c,!0)})();(function(){var e=p.editor.utils,a=p.editor.ui.uiUtils,d=p.editor.ui.ColorPicker,c=p.editor.ui.Popup,b=p.editor.ui.SplitButton,h=p.editor.ui.ColorButton=function(a){this.initOptions(a);
this.initColorButton()};h.prototype={initColorButton:function(){var a=this;this.popup=new c({content:new d({noColorText:a.editor.getLang("clearColor"),editor:a.editor,onpickcolor:function(b,c){a._onPickColor(c)},onpicknocolor:function(b,c){a._onPickNoColor(c)}}),editor:a.editor});this.initSplitButton()},_SplitButton_postRender:b.prototype.postRender,postRender:function(){this._SplitButton_postRender();this.getDom("button_body").appendChild(a.createElementByHtml('<div id="'+this.id+'_colorlump" class="edui-colorlump"></div>'));
this.getDom().className+=" edui-colorbutton"},setColor:function(a){this.color=this.getDom("colorlump").style.backgroundColor=a},_onPickColor:function(a){!1!==this.fireEvent("pickcolor",a)&&(this.setColor(a),this.popup.hide())},_onPickNoColor:function(a){!1!==this.fireEvent("picknocolor")&&this.popup.hide()}};e.inherits(h,b)})();(function(){var e=p.editor.utils,a=p.editor.ui.Popup,d=p.editor.ui.TablePicker,c=p.editor.ui.SplitButton,b=p.editor.ui.TableButton=function(a){this.initOptions(a);this.initTableButton()};
b.prototype={initTableButton:function(){var b=this;this.popup=new a({content:new d({editor:b.editor,onpicktable:function(a,c,d){b._onPickTable(c,d)}}),editor:b.editor});this.initSplitButton()},_onPickTable:function(a,b){!1!==this.fireEvent("picktable",a,b)&&this.popup.hide()}};e.inherits(b,c)})();(function(){var e=p.editor.utils,a=p.editor.ui.UIBase,d=p.editor.ui.AutoTypeSetPicker=function(a){this.initOptions(a);this.initAutoTypeSetPicker()};d.prototype={initAutoTypeSetPicker:function(){this.initUIBase()},
getHtmlTpl:function(){var a=this.editor,b=a.options.autotypeset,d=a.getLang("autoTypeSet"),e="textAlignValue"+a.uid,g="imageBlockLineValue"+a.uid;return'<div id="##" class="edui-autotypesetpicker %%"><div class="edui-autotypesetpicker-body"><table ><tr><td nowrap colspan="2"><input type="checkbox" name="mergeEmptyline" '+(b.mergeEmptyline?"checked":"")+">"+d.mergeLine+'</td><td colspan="2"><input type="checkbox" name="removeEmptyline" '+(b.removeEmptyline?"checked":"")+">"+d.delLine+'</td></tr><tr><td nowrap colspan="2"><input type="checkbox" name="removeClass" '+
(b.removeClass?"checked":"")+">"+d.removeFormat+'</td><td colspan="2"><input type="checkbox" name="indent" '+(b.indent?"checked":"")+">"+d.indent+'</td></tr><tr><td nowrap colspan="2"><input type="checkbox" name="textAlign" '+(b.textAlign?"checked":"")+">"+d.alignment+'</td><td colspan="2" id="'+e+'"><input type="radio" name="'+e+'" value="left" '+(b.textAlign&&"left"==b.textAlign?"checked":"")+">"+a.getLang("justifyleft")+'<input type="radio" name="'+e+'" value="center" '+(b.textAlign&&"center"==
b.textAlign?"checked":"")+">"+a.getLang("justifycenter")+'<input type="radio" name="'+e+'" value="right" '+(b.textAlign&&"right"==b.textAlign?"checked":"")+">"+a.getLang("justifyright")+' </tr><tr><td nowrap colspan="2"><input type="checkbox" name="imageBlockLine" '+(b.imageBlockLine?"checked":"")+">"+d.imageFloat+'</td><td nowrap colspan="2" id="'+g+'"><input type="radio" name="'+g+'" value="none" '+(b.imageBlockLine&&"none"==b.imageBlockLine?"checked":"")+">"+a.getLang("default")+'<input type="radio" name="'+
g+'" value="left" '+(b.imageBlockLine&&"left"==b.imageBlockLine?"checked":"")+">"+a.getLang("justifyleft")+'<input type="radio" name="'+g+'" value="center" '+(b.imageBlockLine&&"center"==b.imageBlockLine?"checked":"")+">"+a.getLang("justifycenter")+'<input type="radio" name="'+g+'" value="right" '+(b.imageBlockLine&&"right"==b.imageBlockLine?"checked":"")+">"+a.getLang("justifyright")+'</tr><tr><td nowrap colspan="2"><input type="checkbox" name="clearFontSize" '+(b.clearFontSize?"checked":"")+">"+
d.removeFontsize+'</td><td colspan="2"><input type="checkbox" name="clearFontFamily" '+(b.clearFontFamily?"checked":"")+">"+d.removeFontFamily+'</td></tr><tr><td nowrap colspan="4"><input type="checkbox" name="removeEmptyNode" '+(b.removeEmptyNode?"checked":"")+">"+d.removeHtml+'</td></tr><tr><td nowrap colspan="4"><input type="checkbox" name="pasteFilter" '+(b.pasteFilter?"checked":"")+">"+d.pasteFilter+'</td></tr><tr><td nowrap colspan="4" align="right"><button >'+d.run+"</button></td></tr></table></div></div>"},
_UIBase_render:a.prototype.render};e.inherits(d,a)})();(function(){function g(a){for(var b=a.editor.options.autotypeset,c=a.getDom(),d=a.editor.uid,g=null,g=null,h=e.getElementsByTagName(c,"input"),p=h.length-1,q;q=h[p--];)if(g=q.getAttribute("type"),"checkbox"==g&&(g=q.getAttribute("name"),b[g]&&delete b[g],q.checked))if(q=document.getElementById(g+"Value"+d))if(/input/ig.test(q.tagName))b[g]=q.value;else{q=q.getElementsByTagName("input");for(var t=q.length-1,r;r=q[t--];)if(r.checked){b[g]=r.value;
break}}else b[g]=!0;c=e.getElementsByTagName(c,"select");for(p=0;d=c[p++];)h=d.getAttribute("name"),b[h]=b[h]?d.value:"";a.editor.options.autotypeset=b}var a=p.editor.utils,d=p.editor.ui.Popup,c=p.editor.ui.AutoTypeSetPicker,b=p.editor.ui.SplitButton,h=p.editor.ui.AutoTypeSetButton=function(a){this.initOptions(a);this.initAutoTypeSetButton()};h.prototype={initAutoTypeSetButton:function(){var a=this;this.popup=new d({content:new c({editor:a.editor}),editor:a.editor,hide:function(){!this._hidden&&this.getDom()&&
(g(this),this.getDom().style.display="none",this._hidden=!0,this.fireEvent("hide"))}});var b=0;this.popup.addListener("postRenderAfter",function(){var c=this;b||(this.getDom().getElementsByTagName("button")[0].onclick=function(){g(c);a.editor.execCommand("autotypeset");c.hide()},b=1)});this.initSplitButton()}};a.inherits(h,b)})();(function(){var e=p.editor.utils,a=p.editor.ui.Popup,d=p.editor.ui.Stateful,c=p.editor.ui.UIBase,b=p.editor.ui.CellAlignPicker=function(a){this.initOptions(a);this.initSelected();
this.initCellAlignPicker()};b.prototype={initSelected:function(){var a={top:0,middle:1,bottom:2},b={left:0,center:1,right:2};this.selected&&(this.selectedIndex=3*a[this.selected.valign]+b[this.selected.align])},initCellAlignPicker:function(){this.initUIBase();this.Stateful_init()},getHtmlTpl:function(){for(var a=["left","center","right"],b=null,c=-1,d=[],e=0;9>e;e++)b=this.selectedIndex===e?' class="edui-cellalign-selected" ':"",c=e%3,0===c&&d.push("<tr>"),d.push('<td index="'+e+'" '+b+' stateful><div class="edui-icon edui-'+
a[c]+'"></div></td>'),2===c&&d.push("</tr>");return'<div id="##" class="edui-cellalignpicker %%"><div class="edui-cellalignpicker-body"><table onclick="$$._onClick(event);">'+d.join("")+"</table></div></div>"},getStateDom:function(){return this.target},_onClick:function(b){var c=b.target||b.srcElement;/icon/.test(c.className)&&(this.items[c.parentNode.getAttribute("index")].onclick(),a.postHide(b))},_UIBase_render:c.prototype.render};e.inherits(b,c);e.extend(b.prototype,d,!0)})();(function(){var g=
p.editor.utils,a=p.editor.ui.Stateful,d=p.editor.ui.uiUtils,c=p.editor.ui.UIBase,b=p.editor.ui.PastePicker=function(a){this.initOptions(a);this.initPastePicker()};b.prototype={initPastePicker:function(){this.initUIBase();this.Stateful_init()},getHtmlTpl:function(){return'<div class="edui-pasteicon" onclick="$$._onClick(this)"></div><div class="edui-pastecontainer"><div class="edui-title">'+this.editor.getLang("pasteOpt")+'</div><div class="edui-button"><div title="'+this.editor.getLang("pasteSourceFormat")+
'" onclick="$$.format(false)" stateful><div class="edui-richtxticon"></div></div><div title="'+this.editor.getLang("tagFormat")+'" onclick="$$.format(2)" stateful><div class="edui-tagicon"></div></div><div title="'+this.editor.getLang("pasteTextFormat")+'" onclick="$$.format(true)" stateful><div class="edui-plaintxticon"></div></div></div></div></div>'},getStateDom:function(){return this.target},format:function(a){this.editor.ui._isTransfer=!0;this.editor.fireEvent("pasteTransfer",a)},_onClick:function(a){var b=
e.getNextDomNode(a),c=d.getViewportRect().height,g=d.getClientRect(b);b.style.top=g.top+g.height>c?-g.height-a.offsetHeight+"px":"";/hidden/ig.test(e.getComputedStyle(b,"visibility"))?(b.style.visibility="visible",e.addClass(a,"edui-state-opened")):(b.style.visibility="hidden",e.removeClasses(a,"edui-state-opened"))},_UIBase_render:c.prototype.render};g.inherits(b,c);g.extend(b.prototype,a,!0)})();(function(){var e=p.editor.utils,a=p.editor.ui.uiUtils,d=p.editor.ui.UIBase,c=p.editor.ui.Toolbar=function(a){this.initOptions(a);
this.initToolbar()};c.prototype={items:null,initToolbar:function(){this.items=this.items||[];this.initUIBase()},add:function(a){this.items.push(a)},getHtmlTpl:function(){for(var a=[],c=0;c<this.items.length;c++)a[c]=this.items[c].renderHtml();return'<div id="##" class="edui-toolbar %%" onselectstart="return false;" onmousedown="return $$._onMouseDown(event, this);">'+a.join("")+"</div>"},postRender:function(){for(var b=this.getDom(),c=0;c<this.items.length;c++)this.items[c].postRender();a.makeUnselectable(b)},
_onMouseDown:function(){return!1}};e.inherits(c,d)})();(function(){var e=p.editor.utils,a=p.editor.dom.domUtils,d=p.editor.ui.uiUtils,c=p.editor.ui.UIBase,b=p.editor.ui.Popup,h=p.editor.ui.Stateful,f=p.editor.ui.CellAlignPicker,l=p.editor.ui.Menu=function(a){this.initOptions(a);this.initMenu()},k={renderHtml:function(){return'<div class="edui-menuitem edui-menuseparator"><div class="edui-menuseparator-inner"></div></div>'},postRender:function(){},queryAutoHide:function(){return!0}};l.prototype={items:null,
uiName:"menu",initMenu:function(){this.items=this.items||[];this.initPopup();this.initItems()},initItems:function(){for(var a=0;a<this.items.length;a++){var b=this.items[a];"-"==b?this.items[a]=this.getSeparator():b instanceof n||(b.editor=this.editor,b.theme=this.editor.options.theme,this.items[a]=this.createItem(b))}},getSeparator:function(){return k},createItem:function(a){a.menu=this;return new n(a)},_Popup_getContentHtmlTpl:b.prototype.getContentHtmlTpl,getContentHtmlTpl:function(){if(0==this.items.length)return this._Popup_getContentHtmlTpl();
for(var a=[],b=0;b<this.items.length;b++)a[b]=this.items[b].renderHtml();return'<div class="%%-body">'+a.join("")+"</div>"},_Popup_postRender:b.prototype.postRender,postRender:function(){for(var b=this,c=0;c<this.items.length;c++){var e=this.items[c];e.ownerMenu=this;e.postRender()}a.on(this.getDom(),"mouseover",function(a){a=a||event;a=a.relatedTarget||a.fromElement;var c=b.getDom();d.contains(c,a)||c===a||b.fireEvent("over")});this._Popup_postRender()},queryAutoHide:function(a){if(a){if(d.contains(this.getDom(),
a))return!1;for(var b=0;b<this.items.length;b++)if(!1===this.items[b].queryAutoHide(a))return!1}},clearItems:function(){for(var a=0;a<this.items.length;a++){var b=this.items[a];clearTimeout(b._showingTimer);clearTimeout(b._closingTimer);b.subMenu&&b.subMenu.destroy()}this.items=[]},destroy:function(){this.getDom()&&a.remove(this.getDom());this.clearItems()},dispose:function(){this.destroy()}};e.inherits(l,b);var n=p.editor.ui.MenuItem=function(c){this.initOptions(c);this.initUIBase();this.Stateful_init();
if(this.subMenu&&!(this.subMenu instanceof l))if(c.className&&-1!=c.className.indexOf("aligntd")){var d=this;this.subMenu.selected=this.editor.queryCommandValue("cellalignment");this.subMenu=new b({content:new f(this.subMenu),parentMenu:d,editor:d.editor,destroy:function(){this.getDom()&&a.remove(this.getDom())}});this.subMenu.addListener("postRenderAfter",function(){a.on(this.getDom(),"mouseover",function(){d.addState("opened")})})}else this.subMenu=new l(this.subMenu)};n.prototype={label:"",subMenu:null,
ownerMenu:null,uiName:"menuitem",alwalysHoverable:!0,getHtmlTpl:function(){return'<div id="##" class="%%" stateful onclick="$$._onClick(event, this);"><div class="%%-body">'+this.renderLabelHtml()+"</div></div>"},postRender:function(){var a=this;this.addListener("over",function(){a.ownerMenu.fireEvent("submenuover",a);a.subMenu&&a.delayShowSubMenu()});this.subMenu&&(this.getDom().className+=" edui-hassubmenu",this.subMenu.render(),this.addListener("out",function(){a.delayHideSubMenu()}),this.subMenu.addListener("over",
function(){clearTimeout(a._closingTimer);a._closingTimer=null;a.addState("opened")}),this.ownerMenu.addListener("hide",function(){a.hideSubMenu()}),this.ownerMenu.addListener("submenuover",function(b,c){c!==a&&a.delayHideSubMenu()}),this.subMenu._bakQueryAutoHide=this.subMenu.queryAutoHide,this.subMenu.queryAutoHide=function(b){return b&&d.contains(a.getDom(),b)?!1:this._bakQueryAutoHide(b)});this.getDom().style.tabIndex="-1";d.makeUnselectable(this.getDom());this.Stateful_postRender()},delayShowSubMenu:function(){var a=
this;a.isDisabled()||(a.addState("opened"),clearTimeout(a._showingTimer),clearTimeout(a._closingTimer),a._closingTimer=null,a._showingTimer=setTimeout(function(){a.showSubMenu()},250))},delayHideSubMenu:function(){var a=this;a.isDisabled()||(a.removeState("opened"),clearTimeout(a._showingTimer),a._closingTimer||(a._closingTimer=setTimeout(function(){a.hasState("opened")||a.hideSubMenu();a._closingTimer=null},400)))},renderLabelHtml:function(){return'<div class="edui-arrow"></div><div class="edui-box edui-icon"></div><div class="edui-box edui-label %%-label">'+
(this.label||"")+"</div>"},getStateDom:function(){return this.getDom()},queryAutoHide:function(a){if(this.subMenu&&this.hasState("opened"))return this.subMenu.queryAutoHide(a)},_onClick:function(a,c){this.hasState("disabled")||!1!==this.fireEvent("click",a,c)&&(this.subMenu?this.showSubMenu():b.postHide(a))},showSubMenu:function(){var a=d.getClientRect(this.getDom());a.right-=5;a.left+=2;a.width-=7;a.top-=4;a.bottom+=4;a.height+=8;this.subMenu.showAnchorRect(a,!0,!0)},hideSubMenu:function(){this.subMenu.hide()}};
e.inherits(n,c);e.extend(n.prototype,h,!0)})();(function(){var e=p.editor.utils,a=p.editor.ui.uiUtils,d=p.editor.ui.Menu,c=p.editor.ui.SplitButton,b=p.editor.ui.Combox=function(a){this.initOptions(a);this.initCombox()};b.prototype={uiName:"combox",initCombox:function(){var a=this;this.items=this.items||[];for(var b=0;b<this.items.length;b++){var c=this.items[b];c.uiName="listitem";c.index=b;c.onclick=function(){a.selectByIndex(this.index)}}this.popup=new d({items:this.items,uiName:"list",editor:this.editor,
captureWheel:!0,combox:this});this.initSplitButton()},_SplitButton_postRender:c.prototype.postRender,postRender:function(){this._SplitButton_postRender();this.setLabel(this.label||"");this.setValue(this.initValue||"")},showPopup:function(){var b=a.getClientRect(this.getDom());b.top+=1;b.bottom-=1;b.height-=2;this.popup.showAnchorRect(b)},getValue:function(){return this.value},setValue:function(a){var b=this.indexByValue(a);-1!=b?(this.selectedIndex=b,this.setLabel(this.items[b].label),this.value=
this.items[b].value):(this.selectedIndex=-1,this.setLabel(this.getLabelForUnknowValue(a)),this.value=a)},setLabel:function(a){this.label=this.getDom("button_body").innerHTML=a},getLabelForUnknowValue:function(a){return a},indexByValue:function(a){for(var b=0;b<this.items.length;b++)if(a==this.items[b].value)return b;return-1},getItem:function(a){return this.items[a]},selectByIndex:function(a){a<this.items.length&&!1!==this.fireEvent("select",a)&&(this.selectedIndex=a,this.value=this.items[a].value,
this.setLabel(this.items[a].label))}};e.inherits(b,c)})();(function(){var e=p.editor.utils,a=p.editor.dom.domUtils,d=p.editor.ui.uiUtils,c=p.editor.ui.Mask,b=p.editor.ui.UIBase,h=p.editor.ui.Button,f=p.editor.ui.Dialog=function(a){this.initOptions(e.extend({autoReset:!0,draggable:!0,onok:function(){},oncancel:function(){},onclose:function(a,b){return b?this.onok():this.oncancel()},holdScroll:!1},a));this.initDialog()},l,k;f.prototype={draggable:!1,uiName:"dialog",initDialog:function(){var a=this,
b=this.editor.options.theme;this.initUIBase();this.modalMask=l||(l=new c({className:"edui-dialog-modalmask",theme:b}));this.dragMask=k||(k=new c({className:"edui-dialog-dragmask",theme:b}));this.closeButton=new h({className:"edui-dialog-closebutton",title:a.closeDialog,theme:b,onclick:function(){a.close(!1)}});if(this.buttons)for(b=0;b<this.buttons.length;b++)this.buttons[b]instanceof h||(this.buttons[b]=new h(this.buttons[b]))},fitSize:function(){var a=this.getDom("body"),b=this.mesureSize();a.style.width=
b.width+"px";a.style.height=b.height+"px";return b},safeSetOffset:function(a){var b=this.getDom(),c=d.getViewportRect(),e=d.getClientRect(b),f=a.left;f+e.width>c.right&&(f=c.right-e.width);a=a.top;a+e.height>c.bottom&&(a=c.bottom-e.height);b.style.left=Math.max(f,0)+"px";b.style.top=Math.max(a,0)+"px"},showAtCenter:function(){this.getDom().style.display="";var b=d.getViewportRect(),c=this.fitSize(),e=this.getDom("titlebar").offsetHeight|0,f=b.width/2-c.width/2,b=b.height/2-(c.height-e)/2-e,c=this.getDom();
this.safeSetOffset({left:Math.max(f|0,0),top:Math.max(b|0,0)});a.hasClass(c,"edui-state-centered")||(c.className+=" edui-state-centered");this._show()},getContentHtml:function(){var a="";"string"==typeof this.content?a=this.content:this.iframeUrl&&(a='<span id="'+this.id+'_contmask" class="dialogcontmask"></span><iframe id="'+this.id+'_iframe" class="%%-iframe" height="100%" width="100%" frameborder="0" src="'+this.iframeUrl+'"></iframe>');return a},getHtmlTpl:function(){var a="";if(this.buttons){for(var a=
[],b=0;b<this.buttons.length;b++)a[b]=this.buttons[b].renderHtml();a='<div class="%%-foot"><div id="##_buttons" class="%%-buttons">'+a.join("")+"</div></div>"}return'<div id="##" class="%%"><div class="%%-wrap"><div id="##_body" class="%%-body"><div class="%%-shadow"></div><div id="##_titlebar" class="%%-titlebar"><div class="%%-draghandle" onmousedown="$$._onTitlebarMouseDown(event, this);"><span class="%%-caption">'+(this.title||"")+"</span></div>"+this.closeButton.renderHtml()+'</div><div id="##_content" class="%%-content">'+
(this.autoReset?"":this.getContentHtml())+"</div>"+a+"</div></div></div>"},postRender:function(){this.modalMask.getDom()||(this.modalMask.render(),this.modalMask.hide());this.dragMask.getDom()||(this.dragMask.render(),this.dragMask.hide());var b=this;this.addListener("show",function(){b.modalMask.show(this.getDom().style.zIndex-2)});this.addListener("hide",function(){b.modalMask.hide()});if(this.buttons)for(var c=0;c<this.buttons.length;c++)this.buttons[c].postRender();a.on(window,"resize",function(){setTimeout(function(){b.isHidden()||
b.safeSetOffset(d.getClientRect(b.getDom()))})});if(this.holdScroll)if(b.iframeUrl)b.addListener("dialogafterreset",function(){window.setTimeout(function(){var c=document.getElementById(b.id+"_iframe").contentWindow;if(r.ie)var d=window.setInterval(function(){c.document&&c.document.body&&(window.clearInterval(d),d=null,a.on(c.document.body,r.gecko?"DOMMouseScroll":"mousewheel",function(b){a.preventDefault(b)}))},100);else a.on(c,r.gecko?"DOMMouseScroll":"mousewheel",function(b){a.preventDefault(b)})},
1)});else a.on(document.getElementById(b.id+"_iframe"),r.gecko?"DOMMouseScroll":"mousewheel",function(b){a.preventDefault(b)});this._hide()},mesureSize:function(){var a=this.getDom("body"),b=d.getClientRect(this.getDom("content")).width;a.style.width=b;return d.getClientRect(a)},_onTitlebarMouseDown:function(b,c){if(this.draggable){var e;d.getViewportRect();var f=this;d.startDrag(b,{ondragstart:function(){e=d.getClientRect(f.getDom());f.getDom("contmask").style.visibility="visible";f.dragMask.show(f.getDom().style.zIndex-
1)},ondragmove:function(a,b){f.safeSetOffset({left:e.left+a,top:e.top+b})},ondragstop:function(){f.getDom("contmask").style.visibility="hidden";a.removeClasses(f.getDom(),["edui-state-centered"]);f.dragMask.hide()}})}},reset:function(){this.getDom("content").innerHTML=this.getContentHtml();this.fireEvent("dialogafterreset")},_show:function(){this._hidden&&(this.getDom().style.display="",this.editor.container.style.zIndex&&(this.getDom().style.zIndex=1*this.editor.container.style.zIndex+10),this._hidden=
!1,this.fireEvent("show"),p.editor.ui.uiUtils.getFixedLayer().style.zIndex=this.getDom().style.zIndex-4)},isHidden:function(){return this._hidden},_hide:function(){this._hidden||(this.getDom().style.display="none",this.getDom().style.zIndex="",this._hidden=!0,this.fireEvent("hide"))},open:function(){if(this.autoReset)try{this.reset()}catch(a){this.render(),this.open()}this.showAtCenter();if(this.iframeUrl)try{this.getDom("iframe").focus()}catch(b){}},_onCloseButtonClick:function(a,b){this.close(!1)},
close:function(a){!1!==this.fireEvent("close",a)&&this._hide()}};e.inherits(f,b)})();(function(){var e=p.editor.utils,a=p.editor.ui.Menu,d=p.editor.ui.SplitButton,c=p.editor.ui.MenuButton=function(a){this.initOptions(a);this.initMenuButton()};c.prototype={initMenuButton:function(){var b=this;this.uiName="menubutton";this.popup=new a({items:b.items,className:b.className,editor:b.editor});this.popup.addListener("show",function(){for(var a=0;a<this.items.length;a++)this.items[a].removeState("checked"),
this.items[a].value==b._value&&(this.items[a].addState("checked"),this.value=b._value)});this.initSplitButton()},setValue:function(a){this._value=a}};e.inherits(c,d)})();(function(){var e=p.editor.utils,a=p.editor.ui,d=a.Dialog;a.buttons={};a.Dialog=function(a){var b=new d(a);b.addListener("hide",function(){if(b.editor){var a=b.editor;try{if(r.gecko){var c=a.window.scrollY,d=a.window.scrollX;a.body.focus();a.window.scrollTo(d,c)}else a.focus()}catch(e){}}});return b};for(var c={anchor:"~/dialogs/anchor/anchor.html",
insertimage:"~/dialogs/image/image.html",link:"~/dialogs/link/link.html",spechars:"~/dialogs/spechars/spechars.html",searchreplace:"~/dialogs/searchreplace/searchreplace.html",map:"~/dialogs/map/map.html",gmap:"~/dialogs/gmap/gmap.html",insertvideo:"~/dialogs/video/video.html",help:"~/dialogs/help/help.html",emotion:"~/dialogs/emotion/emotion.html",wordimage:"~/dialogs/wordimage/wordimage.html",attachment:"~/dialogs/attachment/attachment.html",insertframe:"~/dialogs/insertframe/insertframe.html",
edittip:"~/dialogs/table/edittip.html",edittable:"~/dialogs/table/edittable.html",edittd:"~/dialogs/table/edittd.html",webapp:"~/dialogs/webapp/webapp.html",snapscreen:"~/dialogs/snapscreen/snapscreen.html",scrawl:"~/dialogs/scrawl/scrawl.html",music:"~/dialogs/music/music.html",template:"~/dialogs/template/template.html",background:"~/dialogs/background/background.html"},b="undo redo formatmatch bold italic underline fontborder touppercase tolowercase strikethrough subscript superscript source indent outdent blockquote pasteplain pagebreak selectall print preview horizontal removeformat time date unlink insertparagraphbeforetable insertrow insertcol mergeright mergedown deleterow deletecol splittorows splittocols splittocells mergecells deletetable".split(" "),
h=0,f;f=b[h++];)f=f.toLowerCase(),a[f]=function(b){return function(c){var d=new a.Button({className:"edui-for-"+b,title:c.options.labelMap[b]||c.getLang("labelMap."+b)||"",onclick:function(){c.execCommand(b)},theme:c.options.theme,showText:!1});a.buttons[b]=d;c.addListener("selectionchange",function(a,e,f){a=c.queryCommandState(b);-1==a?(d.setDisabled(!0),d.setChecked(!1)):f||(d.setDisabled(!1),d.setChecked(a))});return d}}(f);a.cleardoc=function(b){var c=new a.Button({className:"edui-for-cleardoc",
title:b.options.labelMap.cleardoc||b.getLang("labelMap.cleardoc")||"",theme:b.options.theme,onclick:function(){confirm(b.getLang("confirmClear"))&&b.execCommand("cleardoc")}});a.buttons.cleardoc=c;b.addListener("selectionchange",function(){c.setDisabled(-1==b.queryCommandState("cleardoc"))});return c};var b={justify:["left","right","center","justify"],imagefloat:["none","left","center","right"],directionality:["ltr","rtl"]},l;for(l in b)(function(b,c){for(var d=0,e;e=c[d++];)(function(c){a[b.replace("float",
"")+c]=function(d){var e=new a.Button({className:"edui-for-"+b.replace("float","")+c,title:d.options.labelMap[b.replace("float","")+c]||d.getLang("labelMap."+b.replace("float","")+c)||"",theme:d.options.theme,onclick:function(){d.execCommand(b,c)}});a.buttons[b]=e;d.addListener("selectionchange",function(a,f,g){e.setDisabled(-1==d.queryCommandState(b));e.setChecked(d.queryCommandValue(b)==c&&!g)});return e}})(e)})(l,b[l]);for(h=0;f=["backcolor","forecolor"][h++];)a[f]=function(b){return function(c){var d=
new a.ColorButton({className:"edui-for-"+b,color:"default",title:c.options.labelMap[b]||c.getLang("labelMap."+b)||"",editor:c,onpickcolor:function(a,d){c.execCommand(b,d)},onpicknocolor:function(){c.execCommand(b,"default");this.setColor("transparent");this.color="default"},onbuttonclick:function(){c.execCommand(b,this.color)}});a.buttons[b]=d;c.addListener("selectionchange",function(){d.setDisabled(-1==c.queryCommandState(b))});return d}}(f);b={noOk:["searchreplace","help","spechars","webapp"],ok:"attachment anchor link insertimage map gmap insertframe wordimage insertvideo insertframe edittip edittable edittd scrawl template music background".split(" ")};
for(l in b)(function(b,d){for(var f=0,h;h=d[f++];)r.opera&&"searchreplace"===h||function(d){a[d]=function(f,h,l){h=h||(f.options.iframeUrlMap||{})[d]||c[d];l=f.options.labelMap[d]||f.getLang("labelMap."+d)||"";var m;h&&(m=new a.Dialog(e.extend({iframeUrl:f.ui.mapUrl(h),editor:f,className:"edui-for-"+d,title:l,holdScroll:"insertimage"===d,closeDialog:f.getLang("closeDialog")},"ok"==b?{buttons:[{className:"edui-okbutton",label:f.getLang("ok"),editor:f,onclick:function(){m.close(!0)}},{className:"edui-cancelbutton",
label:f.getLang("cancel"),editor:f,onclick:function(){m.close(!1)}}]}:{})),f.ui._dialogs[d+"Dialog"]=m);var n=new a.Button({className:"edui-for-"+d,title:l,onclick:function(){if(m)switch(d){case "wordimage":f.execCommand("wordimage","word_img");f.word_img&&(m.render(),m.open());break;case "scrawl":-1!=f.queryCommandState("scrawl")&&(m.render(),m.open());break;default:m.render(),m.open()}},theme:f.options.theme,disabled:"scrawl"==d&&-1==f.queryCommandState("scrawl")});a.buttons[d]=n;f.addListener("selectionchange",
function(){if(!(d in{edittable:1})){var a=f.queryCommandState(d);n.getDom()&&(n.setDisabled(-1==a),n.setChecked(a))}});return n}}(h.toLowerCase())})(l,b[l]);a.snapscreen=function(b,d,e){e=b.options.labelMap.snapscreen||b.getLang("labelMap.snapscreen")||"";var f=new a.Button({className:"edui-for-snapscreen",title:e,onclick:function(){b.execCommand("snapscreen")},theme:b.options.theme});a.buttons.snapscreen=f;if(d=d||(b.options.iframeUrlMap||{}).snapscreen||c.snapscreen){var g=new a.Dialog({iframeUrl:b.ui.mapUrl(d),
editor:b,className:"edui-for-snapscreen",title:e,buttons:[{className:"edui-okbutton",label:b.getLang("ok"),editor:b,onclick:function(){g.close(!0)}},{className:"edui-cancelbutton",label:b.getLang("cancel"),editor:b,onclick:function(){g.close(!1)}}]});g.render();b.ui._dialogs.snapscreenDialog=g}b.addListener("selectionchange",function(){f.setDisabled(-1==b.queryCommandState("snapscreen"))});return f};a.insertcode=function(b,c,d){c=b.options.insertcode||[];d=b.options.labelMap.insertcode||b.getLang("labelMap.insertcode")||
"";var f=[];e.each(c,function(a,c){f.push({label:a,value:c,theme:b.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label" >'+(this.label||"")+"</div>"}})});var h=new a.Combox({editor:b,items:f,onselect:function(a,c){b.execCommand("insertcode",this.items[c].value)},onbuttonclick:function(){this.showPopup()},title:d,initValue:d,className:"edui-for-insertcode",indexByValue:function(a){if(a)for(var b=0,c;c=this.items[b];b++)if(-1!=c.value.indexOf(a))return b;return-1}});a.buttons.insertcode=
h;b.addListener("selectionchange",function(a,c,e){e||(-1==b.queryCommandState("insertcode")?h.setDisabled(!0):(h.setDisabled(!1),(a=b.queryCommandValue("insertcode"))?(a&&(a=a.replace(/['"]/g,"").split(",")[0]),h.setValue(a)):h.setValue(d)))});return h};a.fontfamily=function(b,c,d){c=b.options.fontfamily||[];d=b.options.labelMap.fontfamily||b.getLang("labelMap.fontfamily")||"";if(c.length){for(var f=0,h,l=[];h=c[f];f++){var p=b.getLang("fontfamily")[h.name]||"";(function(a,c){l.push({label:a,value:c,
theme:b.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label" style="font-family:'+e.unhtml(this.value)+'">'+(this.label||"")+"</div>"}})})(h.label||p,h.val)}var q=new a.Combox({editor:b,items:l,onselect:function(a,c){b.execCommand("FontFamily",this.items[c].value)},onbuttonclick:function(){this.showPopup()},title:d,initValue:d,className:"edui-for-fontfamily",indexByValue:function(a){if(a)for(var b=0,c;c=this.items[b];b++)if(-1!=c.value.indexOf(a))return b;return-1}});a.buttons.fontfamily=
q;b.addListener("selectionchange",function(a,c,d){d||(-1==b.queryCommandState("FontFamily")?q.setDisabled(!0):(q.setDisabled(!1),(a=b.queryCommandValue("FontFamily"))&&(a=a.replace(/['"]/g,"").split(",")[0]),q.setValue(a)))});return q}};a.fontsize=function(b,c,d){d=b.options.labelMap.fontsize||b.getLang("labelMap.fontsize")||"";c=c||b.options.fontsize||[];if(c.length){for(var e=[],f=0;f<c.length;f++){var g=c[f]+"px";e.push({label:g,value:g,theme:b.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label" style="line-height:1;font-size:'+
this.value+'">'+(this.label||"")+"</div>"}})}var h=new a.Combox({editor:b,items:e,title:d,initValue:d,onselect:function(a,c){b.execCommand("FontSize",this.items[c].value)},onbuttonclick:function(){this.showPopup()},className:"edui-for-fontsize"});a.buttons.fontsize=h;b.addListener("selectionchange",function(a,c,d){d||(-1==b.queryCommandState("FontSize")?h.setDisabled(!0):(h.setDisabled(!1),h.setValue(b.queryCommandValue("FontSize"))))});return h}};a.paragraph=function(b,c,d){d=b.options.labelMap.paragraph||
b.getLang("labelMap.paragraph")||"";c=b.options.paragraph||[];if(!e.isEmptyObject(c)){var f=[],h;for(h in c)f.push({value:h,label:c[h]||b.getLang("paragraph")[h],theme:b.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label"><span class="edui-for-'+this.value+'">'+(this.label||"")+"</span></div>"}});var l=new a.Combox({editor:b,items:f,title:d,initValue:d,className:"edui-for-paragraph",onselect:function(a,c){b.execCommand("Paragraph",this.items[c].value)},onbuttonclick:function(){this.showPopup()}});
a.buttons.paragraph=l;b.addListener("selectionchange",function(a,c,d){d||(-1==b.queryCommandState("Paragraph")?l.setDisabled(!0):(l.setDisabled(!1),a=b.queryCommandValue("Paragraph"),-1!=l.indexByValue(a)?l.setValue(a):l.setValue(l.initValue)))});return l}};a.customstyle=function(b){var c=b.options.customstyle||[],d=b.options.labelMap.customstyle||b.getLang("labelMap.customstyle")||"";if(c.length){for(var e=b.getLang("customstyle"),f=0,g=[],h;h=c[f++];)(function(a){var c={};c.label=a.label?a.label:
e[a.name];c.style=a.style;c.className=a.className;c.tag=a.tag;g.push({label:c.label,value:c,theme:b.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label"><'+c.tag+" "+(c.className?' class="'+c.className+'"':"")+(c.style?' style="'+c.style+'"':"")+">"+c.label+"</"+c.tag+"></div>"}})})(h);var l=new a.Combox({editor:b,items:g,title:d,initValue:d,className:"edui-for-customstyle",onselect:function(a,c){b.execCommand("customstyle",this.items[c].value)},onbuttonclick:function(){this.showPopup()},
indexByValue:function(a){for(var b=0,c;c=this.items[b++];)if(c.label==a)return b-1;return-1}});a.buttons.customstyle=l;b.addListener("selectionchange",function(a,c,d){d||(-1==b.queryCommandState("customstyle")?l.setDisabled(!0):(l.setDisabled(!1),a=b.queryCommandValue("customstyle"),-1!=l.indexByValue(a)?l.setValue(a):l.setValue(l.initValue)))});return l}};a.inserttable=function(b,c,d){d=b.options.labelMap.inserttable||b.getLang("labelMap.inserttable")||"";var e=new a.TableButton({editor:b,title:d,
className:"edui-for-inserttable",onpicktable:function(a,c,d){b.execCommand("InsertTable",{numRows:d,numCols:c,border:1})},onbuttonclick:function(){this.showPopup()}});a.buttons.inserttable=e;b.addListener("selectionchange",function(){e.setDisabled(-1==b.queryCommandState("inserttable"))});return e};a.lineheight=function(b){var c=b.options.lineheight||[];if(c.length){for(var d=0,e,f=[];e=c[d++];)f.push({label:e,value:e,theme:b.options.theme,onclick:function(){b.execCommand("lineheight",this.value)}});
var g=new a.MenuButton({editor:b,className:"edui-for-lineheight",title:b.options.labelMap.lineheight||b.getLang("labelMap.lineheight")||"",items:f,onbuttonclick:function(){var a=b.queryCommandValue("LineHeight")||this.value;b.execCommand("LineHeight",a)}});a.buttons.lineheight=g;b.addListener("selectionchange",function(){var a=b.queryCommandState("LineHeight");if(-1==a)g.setDisabled(!0);else{g.setDisabled(!1);var c=b.queryCommandValue("LineHeight");c&&g.setValue((c+"").replace(/cm/,""));g.setChecked(a)}});
return g}};l=["top","bottom"];for(b=0;h=l[b++];)(function(b){a["rowspacing"+b]=function(c){var d=c.options["rowspacing"+b]||[];if(!d.length)return null;for(var e=0,f,g=[];f=d[e++];)g.push({label:f,value:f,theme:c.options.theme,onclick:function(){c.execCommand("rowspacing",this.value,b)}});var h=new a.MenuButton({editor:c,className:"edui-for-rowspacing"+b,title:c.options.labelMap["rowspacing"+b]||c.getLang("labelMap.rowspacing"+b)||"",items:g,onbuttonclick:function(){var a=c.queryCommandValue("rowspacing",
b)||this.value;c.execCommand("rowspacing",a,b)}});a.buttons[b]=h;c.addListener("selectionchange",function(){var a=c.queryCommandState("rowspacing",b);if(-1==a)h.setDisabled(!0);else{h.setDisabled(!1);var d=c.queryCommandValue("rowspacing",b);d&&h.setValue((d+"").replace(/%/,""));h.setChecked(a)}});return h}})(h);l=["insertorderedlist","insertunorderedlist"];for(b=0;h=l[b++];)(function(b){a[b]=function(c){var d=c.options[b],e=function(){c.execCommand(b,this.value)},f=[],g;for(g in d)f.push({label:d[g]||
c.getLang()[b][g]||"",value:g,theme:c.options.theme,onclick:e});var h=new a.Button({editor:c,className:"edui-for-"+b,title:c.getLang("labelMap."+b)||"",items:f,onclick:function(){var a=c.queryCommandValue(b)||this.value;c.execCommand(b,a)}});a.buttons[b]=h;c.addListener("selectionchange",function(){var a=c.queryCommandState(b);-1==a?h.setDisabled(!0):(h.setDisabled(!1),h.setChecked(a))});return h}})(h);a.fullscreen=function(b,c){c=b.options.labelMap.fullscreen||b.getLang("labelMap.fullscreen")||"";
var d=new a.Button({className:"edui-for-fullscreen",title:c,theme:b.options.theme,onclick:function(){b.ui&&b.ui.setFullScreen(!b.ui.isFullScreen());this.setChecked(b.ui.isFullScreen())}});a.buttons.fullscreen=d;b.addListener("selectionchange",function(){var a=b.queryCommandState("fullscreen");d.setDisabled(-1==a);d.setChecked(b.ui.isFullScreen())});return d};a.emotion=function(b,d){var e=new a.MultiMenuPop({title:b.options.labelMap.emotion||b.getLang("labelMap.emotion")||"",editor:b,className:"edui-for-emotion",
iframeUrl:b.ui.mapUrl(d||(b.options.iframeUrlMap||{}).emotion||c.emotion)});a.buttons.emotion=e;b.addListener("selectionchange",function(){e.setDisabled(-1==b.queryCommandState("emotion"))});return e};a.autotypeset=function(b){var c=new a.AutoTypeSetButton({editor:b,title:b.options.labelMap.autotypeset||b.getLang("labelMap.autotypeset")||"",className:"edui-for-autotypeset",onbuttonclick:function(){b.execCommand("autotypeset")}});a.buttons.autotypeset=c;b.addListener("selectionchange",function(){c.setDisabled(-1==
b.queryCommandState("autotypeset"))});return c}})();(function(){function e(a){this.initOptions(a);this.initEditorUI()}var a=p.editor.utils,d=p.editor.ui.uiUtils,c=p.editor.ui.UIBase,b=p.editor.dom.domUtils,h=[];e.prototype={uiName:"editor",initEditorUI:function(){function a(b,c){b.setOpt({wordCount:!0,maximumWords:1E4,wordCountMsg:b.options.wordCountMsg||b.getLang("wordCountMsg"),wordOverFlowMsg:b.options.wordOverFlowMsg||b.getLang("wordOverFlowMsg")});var d=b.options,e=d.maximumWords,f=d.wordCountMsg,
g=d.wordOverFlowMsg,h=c.getDom("wordcount");d.wordCount&&(d=b.getContentLength(!0),d>e?(h.innerHTML=g,b.fireEvent("wordcountoverflow")):h.innerHTML=f.replace("{#leave}",e-d).replace("{#count}",d))}this.editor.ui=this;this._dialogs={};this.initUIBase();this._initToolbars();var c=this.editor,d=this;c.addListener("ready",function(){c.getDialog=function(a){return c.ui._dialogs[a+"Dialog"]};b.on(c.window,"scroll",function(a){p.editor.ui.Popup.postHide(a)});c.ui._actualFrameWidth=c.options.initialFrameWidth;
c.options.elementPathEnabled&&(c.ui.getDom("elementpath").innerHTML='<div class="edui-editor-breadcrumb">'+c.getLang("elementPathTip")+":</div>");c.options.wordCount&&(b.on(c.document,"click",function(){a(c,d);b.un(c.document,"click",arguments.callee)}),c.ui.getDom("wordcount").innerHTML=c.getLang("wordCountTip"));c.ui._scale();c.options.scaleEnabled?(c.autoHeightEnabled&&c.disableAutoHeight(),d.enableScale()):d.disableScale();c.options.elementPathEnabled||(c.options.wordCount||c.options.scaleEnabled)||
(c.ui.getDom("elementpath").style.display="none",c.ui.getDom("wordcount").style.display="none",c.ui.getDom("scale").style.display="none");c.selection.isFocus()&&c.fireEvent("selectionchange",!1,!0)});c.addListener("mousedown",function(a,b){p.editor.ui.Popup.postHide(b,b.target||b.srcElement);p.editor.ui.ShortCutMenu.postHide(b)});c.addListener("delcells",function(){UE.ui.edittip&&new UE.ui.edittip(c);c.getDialog("edittip").open()});var e,f=!1,g;c.addListener("afterpaste",function(){c.queryCommandState("pasteplain")||
(p.editor.ui.PastePicker&&(e=new p.editor.ui.Popup({content:new p.editor.ui.PastePicker({editor:c}),editor:c,className:"edui-wordpastepop"}),e.render()),f=!0)});c.addListener("afterinserthtml",function(){clearTimeout(g);g=setTimeout(function(){if(e&&(f||c.ui._isTransfer)){if(e.isHidden()){var a=b.createElement(c.document,"span",{style:"line-height:0px;",innerHTML:"\ufeff"});c.selection.getRange().insertNode(a);var d=W(a,"firstChild","previousSibling");e.showAnchor(3==d.nodeType?d.parentNode:d);b.remove(a)}else e.show();
delete c.ui._isTransfer;f=!1}},200)});c.addListener("contextmenu",function(a,b){p.editor.ui.Popup.postHide(b)});c.addListener("keydown",function(a,b){e&&e.dispose(b);var c=b.keyCode||b.which;if(b.altKey&&90==c)UE.ui.buttons.fullscreen.onclick()});c.addListener("wordcount",function(b){a(this,d)});c.addListener("selectionchange",function(){if(c.options.elementPathEnabled)d[(-1==c.queryCommandState("elementpath")?"dis":"en")+"ableElementPath"]();if(c.options.scaleEnabled)d[(-1==c.queryCommandState("scale")?
"dis":"en")+"ableScale"]()});var h=new p.editor.ui.Popup({editor:c,content:"",className:"edui-bubble",_onEditButtonClick:function(){this.hide();c.ui._dialogs.linkDialog.open()},_onImgEditButtonClick:function(a){this.hide();c.ui._dialogs[a]&&c.ui._dialogs[a].open()},_onImgSetFloat:function(a){this.hide();c.execCommand("imagefloat",a)},_setIframeAlign:function(a){var c=h.anchorEl,d=c.cloneNode(!0);switch(a){case -2:d.setAttribute("align","");break;case -1:d.setAttribute("align","left");break;case 1:d.setAttribute("align",
"right")}c.parentNode.insertBefore(d,c);b.remove(c);h.anchorEl=d;h.showAnchor(h.anchorEl)},_updateIframe:function(){c._iframe=h.anchorEl;c.ui._dialogs.insertframeDialog.open();h.hide()},_onRemoveButtonClick:function(a){c.execCommand(a);this.hide()},queryAutoHide:function(a){return a&&a.ownerDocument==c.document&&("img"==a.tagName.toLowerCase()||b.findParentByTagName(a,"a",!0))?a!==h.anchorEl:p.editor.ui.Popup.prototype.queryAutoHide.call(this,a)}});h.render();c.options.imagePopup&&(c.addListener("mouseover",
function(a,b){b=b||window.event;var d=b.target||b.srcElement;if(c.ui._dialogs.insertframeDialog&&/iframe/ig.test(d.tagName)){var e=h.formatHtml("<nobr>"+c.getLang("property")+': <span onclick=$$._setIframeAlign(-2) class="edui-clickable">'+c.getLang("default")+'</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(-1) class="edui-clickable">'+c.getLang("justifyleft")+'</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(1) class="edui-clickable">'+c.getLang("justifyright")+'</span>&nbsp;&nbsp; <span onclick="$$._updateIframe( this);" class="edui-clickable">'+
c.getLang("modify")+"</span></nobr>");e?(h.getDom("content").innerHTML=e,h.anchorEl=d,h.showAnchor(h.anchorEl)):h.hide()}}),c.addListener("selectionchange",function(a,b){if(b){var d="",e="",f=c.selection.getRange().getClosedNode(),e=c.ui._dialogs;if(f&&"IMG"==f.tagName){var g="insertimageDialog";-1!=f.className.indexOf("edui-faked-video")&&(g="insertvideoDialog");-1!=f.className.indexOf("edui-faked-webapp")&&(g="webappDialog");-1!=f.src.indexOf("http://api.map.baidu.com")&&(g="mapDialog");-1!=f.className.indexOf("edui-faked-music")&&
(g="musicDialog");-1!=f.src.indexOf("http://maps.google.com/maps/api/staticmap")&&(g="gmapDialog");f.getAttribute("anchorname")&&(g="anchorDialog",d=h.formatHtml("<nobr>"+c.getLang("property")+': <span onclick=$$._onImgEditButtonClick("anchorDialog") class="edui-clickable">'+c.getLang("modify")+"</span>&nbsp;&nbsp;<span onclick=$$._onRemoveButtonClick('anchor') class=\"edui-clickable\">"+c.getLang("delete")+"</span></nobr>"));f.getAttribute("word_img")&&(c.word_img=[f.getAttribute("word_img")],g=
"wordimageDialog");if(!e[g])return;e="<nobr>"+c.getLang("property")+': <span onclick=$$._onImgSetFloat("none") class="edui-clickable">'+c.getLang("default")+'</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("left") class="edui-clickable">'+c.getLang("justifyleft")+'</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("right") class="edui-clickable">'+c.getLang("justifyright")+'</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("center") class="edui-clickable">'+c.getLang("justifycenter")+"</span>&nbsp;&nbsp;<span onclick=\"$$._onImgEditButtonClick('"+
g+'\');" class="edui-clickable">'+c.getLang("modify")+"</span></nobr>";!d&&(d=h.formatHtml(e))}if(c.ui._dialogs.linkDialog){var l=c.queryCommandValue("link"),m;l&&(m=l.getAttribute("_href")||l.getAttribute("href",2))&&(l.getAttribute("resource")?d="":(e=m,30<m.length&&(e=m.substring(0,20)+"..."),d&&(d+='<div style="height:5px;"></div>'),d+=h.formatHtml("<nobr>"+c.getLang("anthorMsg")+': <a target="_blank" href="'+m+'" title="'+m+'" >'+e+'</a> <span class="edui-clickable" onclick="$$._onEditButtonClick();">'+
c.getLang("modify")+'</span> <span class="edui-clickable" onclick="$$._onRemoveButtonClick(\'unlink\');"> '+c.getLang("clear")+"</span></nobr>"),h.showAnchor(l)))}d?(h.getDom("content").innerHTML=d,h.anchorEl=f||l,h.showAnchor(h.anchorEl)):h.hide()}}))},_initToolbars:function(){for(var a=this.editor,b=this.toolbars||[],c=[],d=0;d<b.length;d++){for(var e=b[d],f=new p.editor.ui.Toolbar({theme:a.options.theme}),g=0;g<e.length;g++){var h=e[g],q=null;if("string"==typeof h){if(h=h.toLowerCase(),"|"==h&&
(h="Separator"),"||"==h&&(h="Breakline"),p.editor.ui[h]&&(q=new p.editor.ui[h](a)),"fullscreen"==h){c&&c[0]?c[0].items.splice(0,0,q):q&&f.items.splice(0,0,q);continue}}else q=h;q&&q.id&&f.add(q)}c[d]=f}this.toolbars=c},getHtmlTpl:function(){return'<div id="##" class="%%"><div id="##_toolbarbox" class="%%-toolbarbox">'+(this.toolbars.length?'<div id="##_toolbarboxouter" class="%%-toolbarboxouter"><div class="%%-toolbarboxinner">'+this.showtool().showtool+'<div class="edui-for-moretool edui-button-hide" onmousedown="return false;"></div></div><div id="moretoolbox" class="edui-moretoolbox-hide">'+
this.showtool().moretool+"</div></div>":"")+'<div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;"><div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">'+this.editor.getLang("clickToUpload")+'</div><div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div><div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div><div style="height:0;overflow:hidden;clear:both;"></div></div></div><div id="##_iframeholder" class="%%-iframeholder"></div><div id="##_bottombar" class="%%-bottomContainer"><table><tr><td id="##_elementpath" class="%%-bottombar"></td><td id="##_wordcount" class="%%-wordcount"></td><td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td></tr></table></div><div id="##_scalelayer"></div></div>'},
showWordImageDialog:function(){this.editor.execCommand("wordimage","word_img");this._dialogs.wordimageDialog.open()},showtool:function(){var a=$("<div>"),b=$("<div>"),c=this.renderToolbarBoxHtml(),d=$("#sidebar-c").width()-4-2,e=0;UE.browser.ie&&8===UE.browser.version&&(d-=100);d-=32;a.html(c);b.html(c);c=b.find(".edui-toolbar");c.html("");var f=a.find(".edui-toolbar"),g=f.children();f.attr("id","edui0");for(f=0;f<g.length;f++){var h=$(g[f]),p;p=h;var q=p.outerWidth(!0);0<q?p=q:(q={fontfamily:85,
fontsize:60,forecolor:36,backcolor:36,separator:21},p=p.attr("class").replace(/-default|-colorbutton|edui|box|button|split|combox|for-|-|\s/ig,""),p=q[p]?q[p]:26);if(d-e-(UE.browser.ie&&8===UE.browser.version?10:0)>p||f===g.length-1&&32>p)h.remove(),c.append(h),e+=p;else break}return{showtool:b.html(),moretool:a.html()}},renderToolbarBoxHtml:function(){for(var a=[],b=0;b<this.toolbars.length;b++)a.push(this.toolbars[b].renderHtml());return a.join("")},setFullScreen:function(a){var b=this.editor,c=
b.container.parentNode.parentNode;if(this._fullscreen!=a){this._fullscreen=a;this.editor.fireEvent("beforefullscreenchange",a);if(p.editor.browser.gecko)var d=b.selection.getRange().createBookmark();if(a){for(;"BODY"!=c.tagName;){var e=p.editor.dom.domUtils.getComputedStyle(c,"position");h.push(e);c.style.position="static";c=c.parentNode}this._bakHtmlOverflow=document.documentElement.style.overflow;this._bakBodyOverflow=document.body.style.overflow;this._bakAutoHeight=this.editor.autoHeightEnabled;
this._bakScrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop);this._bakEditorContaninerWidth=b.iframe.parentNode.offsetWidth;this._bakAutoHeight&&(b.autoHeightEnabled=!1,this.editor.disableAutoHeight());document.documentElement.style.overflow="hidden";document.body.style.overflow="hidden";this._bakCssText=this.getDom().style.cssText;this._bakCssText1=this.getDom("iframeholder").style.cssText;b.iframe.parentNode.style.width="";this._updateFullScreen()}else{for(;"BODY"!=c.tagName;)c.style.position=
h.shift(),c=c.parentNode;this.getDom().style.cssText=this._bakCssText;this.getDom("iframeholder").style.cssText=this._bakCssText1;this._bakAutoHeight&&(b.autoHeightEnabled=!0,this.editor.enableAutoHeight());document.documentElement.style.overflow=this._bakHtmlOverflow;document.body.style.overflow=this._bakBodyOverflow;b.iframe.parentNode.style.width=this._bakEditorContaninerWidth+"px";window.scrollTo(0,this._bakScrollTop)}if(r.gecko&&"true"===b.body.contentEditable){var f=document.createElement("input");
document.body.appendChild(f);b.body.contentEditable=!1;setTimeout(function(){f.focus();setTimeout(function(){b.body.contentEditable=!0;b.fireEvent("fullscreenchanged",a);b.selection.getRange().moveToBookmark(d).select(!0);p.editor.dom.domUtils.remove(f);a&&window.scroll(0,0)},0)},0)}"true"===b.body.contentEditable&&(this.editor.fireEvent("fullscreenchanged",a),this.triggerLayout())}},_updateFullScreen:function(){if(this._fullscreen){var a=d.getViewportRect();this.getDom().style.cssText="border:0;position:absolute;left:0;top:"+
(this.editor.options.topOffset||0)+"px;width:"+a.width+"px;height:"+a.height+"px;z-index:"+(1*this.getDom().style.zIndex+100);d.setViewportOffset(this.getDom(),{left:0,top:this.editor.options.topOffset||0});this.editor.setHeight(a.height-this.getDom("toolbarbox").offsetHeight-this.getDom("bottombar").offsetHeight-(this.editor.options.topOffset||0));if(r.gecko)try{window.onresize()}catch(b){}}},_updateElementPath:function(){var a=this.getDom("elementpath"),b;if(this.elementPathEnabled&&(b=this.editor.queryCommandValue("elementpath"))){for(var c=
[],d=0,e;e=b[d];d++)c[d]=this.formatHtml('<span unselectable="on" onclick="$$.editor.execCommand(&quot;elementpath&quot;, &quot;'+d+'&quot;);">'+e+"</span>");a.innerHTML='<div class="edui-editor-breadcrumb" onmousedown="return false;">'+this.editor.getLang("elementPathTip")+": "+c.join(" &gt; ")+"</div>"}else a.style.display="none"},disableElementPath:function(){var a=this.getDom("elementpath");a.innerHTML="";a.style.display="none";this.elementPathEnabled=!1},enableElementPath:function(){this.getDom("elementpath").style.display=
"";this.elementPathEnabled=!0;this._updateElementPath()},_scale:function(){function a(){B=b.getXY(h);I||(I=g.options.minFrameHeight+q.offsetHeight+w.offsetHeight);G.style.cssText="position:absolute;left:0;display:;top:0;background-color:#41ABFF;opacity:0.4;filter: Alpha(opacity=40);width:"+h.offsetWidth+"px;height:"+h.offsetHeight+"px;z-index:"+(g.options.zIndex+1);b.on(f,"mousemove",c);b.on(p,"mouseup",d);b.on(f,"mouseup",d)}function c(a){e();a=a||window.event;C=a.pageX||f.documentElement.scrollLeft+
a.clientX;z=a.pageY||f.documentElement.scrollTop+a.clientY;A=C-B.x;K=z-B.y;A>=E&&(D=!0,G.style.width=A+"px");K>=I&&(D=!0,G.style.height=K+"px")}function d(){D&&(D=!1,g.ui._actualFrameWidth=G.offsetWidth-2,h.style.width=g.ui._actualFrameWidth+"px",g.setHeight(G.offsetHeight-w.offsetHeight-q.offsetHeight-2));G&&(G.style.display="none");e();b.un(f,"mousemove",c);b.un(p,"mouseup",d);b.un(f,"mouseup",d)}function e(){r.ie?f.selection.clear():window.getSelection().removeAllRanges()}var f=document,g=this.editor,
h=g.container,p=g.document,q=this.getDom("toolbarbox"),w=this.getDom("bottombar"),O=this.getDom("scale"),G=this.getDom("scalelayer"),D=!1,B=null,I=0,E=g.options.minFrameWidth,C=0,z=0,A=0,K=0,J=this;this.editor.addListener("fullscreenchanged",function(a,c){if(c)J.disableScale();else if(J.editor.options.scaleEnabled){J.enableScale();var d=J.editor.document.createElement("span");J.editor.body.appendChild(d);J.editor.body.style.height=Math.max(b.getXY(d).y,J.editor.iframe.offsetHeight-20)+"px";b.remove(d)}});
this.enableScale=function(){1!=g.queryCommandState("source")&&(O.style.display="",this.scaleEnabled=!0,b.on(O,"mousedown",a))};this.disableScale=function(){O.style.display="none";this.scaleEnabled=!1;b.un(O,"mousedown",a)}},isFullScreen:function(){return this._fullscreen},postRender:function(){c.prototype.postRender.call(this);for(var a=0;a<this.toolbars.length;a++)this.toolbars[a].postRender();var b=this,d,e=p.editor.dom.domUtils,f=function(){clearTimeout(d);d=setTimeout(function(){b._updateFullScreen()})};
e.on(window,"resize",f);b.addListener("destroy",function(){e.un(window,"resize",f);clearTimeout(d)})},showToolbarMsg:function(a,b){this.getDom("toolbarmsg_label").innerHTML=a;this.getDom("toolbarmsg").style.display="";b||(this.getDom("upload_dialog").style.display="none")},hideToolbarMsg:function(){this.getDom("toolbarmsg").style.display="none"},mapUrl:function(a){return a?a.replace("~/",this.editor.options.UEDITOR_HOME_URL||""):""},triggerLayout:function(){var a=this.getDom();a.style.zoom="1"==a.style.zoom?
"100%":"1"}};a.inherits(e,p.editor.ui.UIBase);var f={};UE.ui.Editor=function(c){var d=new UE.Editor(c);d.options.editor=d;a.loadFile(document,{href:d.options.themePath+d.options.theme+"/css/ueditor.css",tag:"link",type:"text/css",rel:"stylesheet"});var h=d.render;d.render=function(c){c.constructor===String&&(d.key=c,f[c]=d);a.domReady(function(){function a(){d.setOpt({labelMap:d.options.labelMap||d.getLang("labelMap")});new e(d.options);if(c&&(c.constructor===String&&(c=document.getElementById(c)),
c&&c.getAttribute("name")&&(d.options.textarea=c.getAttribute("name")),c&&/script|textarea/ig.test(c.tagName))){var f=document.createElement("div");c.parentNode.insertBefore(f,c);var l=c.value||c.innerHTML;d.options.initialContent=/^[\t\r\n ]*$/.test(l)?d.options.initialContent:l.replace(/>[\n\r\t]+([ ]{4})+/g,">").replace(/[\n\r\t]+([ ]{4})+</g,"<").replace(/>[\n\r\t]+</g,"><");c.className&&(f.className=c.className);c.style.cssText&&(f.style.cssText=c.style.cssText);/textarea/i.test(c.tagName)?(d.textarea=
c,d.textarea.style.display="none"):(c.parentNode.removeChild(c),c.id&&(f.id=c.id));c=f;c.innerHTML=""}b.addClass(c,"edui-"+d.options.theme);d.ui.render(c);f=d.options;d.container=d.ui.getDom();for(var l=b.findParents(c,!0),p=[],q=0,r;r=l[q];q++)p[q]=r.style.display,r.style.display="block";f.minFrameWidth=f.initialFrameWidth?f.initialFrameWidth:f.initialFrameWidth=c.offsetWidth;f.initialFrameHeight?f.minFrameHeight=f.initialFrameHeight:f.initialFrameHeight=f.minFrameHeight=c.offsetHeight;for(q=0;r=
l[q];q++)r.style.display=p[q];c.style.height&&(c.style.height="");d.container.style.width=f.initialFrameWidth+(/%$/.test(f.initialFrameWidth)?"":"px");d.container.style.zIndex=f.zIndex;h.call(d,d.ui.getDom("iframeholder"))}d.langIsReady?a():d.addListener("langReady",a)})};return d};UE.getEditor=function(a,b){var c=f[a];c||(c=f[a]=new UE.ui.Editor(b),c.render(a));return c};UE.delEditor=function(a){var b;if(b=f[a])b.key&&b.destroy(),delete f[a]}})();(function(){var e=p.editor.utils,a=p.editor.ui.Popup,
d=p.editor.ui.SplitButton,c=p.editor.ui.MultiMenuPop=function(a){this.initOptions(a);this.initMultiMenu()};c.prototype={initMultiMenu:function(){var b=this;this.popup=new a({content:"",editor:b.editor,iframe_rendered:!1,onshow:function(){this.iframe_rendered||(this.iframe_rendered=!0,this.getDom("content").innerHTML='<iframe id="'+b.id+'_iframe" src="'+b.iframeUrl+'" frameborder="0"></iframe>',b.editor.container.style.zIndex&&(this.getDom().style.zIndex=1*b.editor.container.style.zIndex+1))}});this.onbuttonclick=
function(){this.showPopup()};this.initSplitButton()}};e.inherits(c,d)})();(function(){function e(a){if(!h.findParent(a.target||a.srcElement,function(a){return h.hasClass(a,"edui-shortcutmenu")||h.hasClass(a,"edui-popup")},!0)){a=0;for(var b;b=f[a++];)b.hide()}}var a=p.editor.ui,d=a.UIBase,c=a.uiUtils,b=p.editor.utils,h=p.editor.dom.domUtils,f=[],l,k=!1,n=a.ShortCutMenu=function(a){this.initOptions(a);this.initShortCutMenu()};n.postHide=e;n.prototype={isHidden:!0,SPACE:5,initShortCutMenu:function(){this.items=
this.items||[];this.initUIBase();this.initItems();this.initEvent();f.push(this)},initEvent:function(){var a=this,b=a.editor.document;h.on(b,"mousemove",function(b){if(!1===a.isHidden&&!a.getSubMenuMark()&&"contextmenu"!=a.eventType){var c=!0,d=a.getDom(),e=d.offsetWidth/2+a.SPACE,f=d.offsetHeight/2,g=Math.abs(b.screenX-a.left),h=Math.abs(b.screenY-a.top);clearTimeout(l);l=setTimeout(function(){0<h&&h<f?a.setOpacity(d,"1"):h>f&&h<f+70?(a.setOpacity(d,"0.5"),c=!1):h>f+70&&h<f+140&&a.hide();c&&0<g&&
g<e?a.setOpacity(d,"1"):g>e&&g<e+70?a.setOpacity(d,"0.5"):g>e+70&&g<e+140&&a.hide()})}});if(r.chrome)h.on(b,"mouseout",function(b){b=b.relatedTarget||b.toElement;null!=b&&"HTML"!=b.tagName||a.hide()});a.editor.addListener("afterhidepop",function(){a.isHidden||(k=!0)})},initItems:function(){if(b.isArray(this.items))for(var c=0,d=this.items.length;c<d;c++){var e=this.items[c].toLowerCase();a[e]&&(this.items[c]=new a[e](this.editor),this.items[c].className+=" edui-shortcutsubmenu ")}},setOpacity:function(a,
b){r.ie&&9>r.version?a.style.filter="alpha(opacity = "+100*parseFloat(b)+");":a.style.opacity=b},getSubMenuMark:function(){k=!1;for(var a=c.getFixedLayer(),a=h.getElementsByTagName(a,"div",function(a){return h.hasClass(a,"edui-shortcutsubmenu edui-popup")}),b=0,d;d=a[b++];)"none"!=d.style.display&&(k=!0);return k},show:function(a,b){function d(a){0>a.left&&(a.left=0);0>a.top&&(a.top=0);g.style.cssText="position:absolute;left:"+a.left+"px;top:"+a.top+"px;"}function e(a){a.tagName||(a=a.getDom());f.left=
parseInt(a.style.left);f.top=parseInt(a.style.top);f.top-=g.offsetHeight+15;d(f)}var f={},g=this.getDom(),k=c.getFixedLayer();this.eventType=a.type;g.style.cssText="display:block;left:-9999px";if("contextmenu"==a.type&&b){var l=h.getElementsByTagName(k,"div","edui-contextmenu")[0];l?e(l):this.editor.addListener("aftershowcontextmenu",function(a,b){e(b)})}else f=c.getViewportOffsetByEvent(a),f.top-=g.offsetHeight+this.SPACE,f.left+=this.SPACE+20,d(f),this.setOpacity(g,0.2);this.isHidden=!1;this.left=
a.screenX+g.offsetWidth/2-this.SPACE;this.top=a.screenY-g.offsetHeight/2-this.SPACE;this.editor&&(g.style.zIndex=1*this.editor.container.style.zIndex+10,k.style.zIndex=g.style.zIndex-1)},hide:function(){this.getDom()&&(this.getDom().style.display="none");this.isHidden=!0},postRender:function(){if(b.isArray(this.items))for(var a=0,c;c=this.items[a++];)c.postRender()},getHtmlTpl:function(){var a;if(b.isArray(this.items)){a=[];for(var c=0;c<this.items.length;c++)a[c]=this.items[c].renderHtml();a=a.join("")}else a=
this.items;return'<div id="##" class="%% edui-toolbar" data-src="shortcutmenu" onmousedown="return false;" onselectstart="return false;" >'+a+"</div>"}};b.inherits(n,d);h.on(document,"mousedown",function(a){e(a)});h.on(window,"scroll",function(a){e(a)})})();(function(){var e=p.editor.utils,a=p.editor.ui.UIBase,d=p.editor.ui.Breakline=function(a){this.initOptions(a);this.initSeparator()};d.prototype={uiName:"Breakline",initSeparator:function(){this.initUIBase()},getHtmlTpl:function(){return"<br/>"}};
e.inherits(d,a)})()})();
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

(function() {
  var _global = this;

  // Unique ID creation requires a high quality random # generator.  We feature
  // detect to determine the best RNG source, normalizing to a function that
  // returns 128-bits of randomness, since that's what's usually required
  var _rng;

  // Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
  //
  // Moderately fast, high quality
  if (typeof(require) == 'function') {
    try {
      var _rb = require('crypto').randomBytes;
      _rng = _rb && function() {return _rb(16);};
    } catch(e) {}
  }

  if (!_rng && _global.crypto && crypto.getRandomValues) {
    // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
    //
    // Moderately fast, high quality
    var _rnds8 = new Uint8Array(16);
    _rng = function whatwgRNG() {
      crypto.getRandomValues(_rnds8);
      return _rnds8;
    };
  }

  if (!_rng) {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var  _rnds = new Array(16);
    _rng = function() {
      for (var i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
        _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
      }

      return _rnds;
    };
  }

  // Buffer class to use
  var BufferClass = typeof(Buffer) == 'function' ? Buffer : Array;

  // Maps for number <-> hex string conversion
  var _byteToHex = [];
  var _hexToByte = {};
  for (var i = 0; i < 256; i++) {
    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
    _hexToByte[_byteToHex[i]] = i;
  }

  // **`parse()` - Parse a UUID into it's component bytes**
  function parse(s, buf, offset) {
    var i = (buf && offset) || 0, ii = 0;

    buf = buf || [];
    s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
      if (ii < 16) { // Don't overflow!
        buf[i + ii++] = _hexToByte[oct];
      }
    });

    // Zero out remaining bytes if string was short
    while (ii < 16) {
      buf[i + ii++] = 0;
    }

    return buf;
  }

  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
  function unparse(buf, offset) {
    var i = offset || 0, bth = _byteToHex;
    return  bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]];
  }

  // **`v1()` - Generate time-based UUID**
  //
  // Inspired by https://github.com/LiosK/UUID.js
  // and http://docs.python.org/library/uuid.html

  // random #'s we need to init node and clockseq
  var _seedBytes = _rng();

  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
  var _nodeId = [
    _seedBytes[0] | 0x01,
    _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
  ];

  // Per 4.2.2, randomize (14 bit) clockseq
  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

  // Previous uuid creation time
  var _lastMSecs = 0, _lastNSecs = 0;

  // See https://github.com/broofa/node-uuid for API details
  function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];

    options = options || {};

    var clockseq = options.clockseq != null ? options.clockseq : _clockseq;

    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs != null ? options.msecs : new Date().getTime();

    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs != null ? options.nsecs : _lastNSecs + 1;

    // Time since last uuid creation (in msecs)
    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq == null) {
      clockseq = clockseq + 1 & 0x3fff;
    }

    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
      nsecs = 0;
    }

    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    }

    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;

    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;

    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;

    // `time_mid`
    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;

    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;

    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;

    // `clock_seq_low`
    b[i++] = clockseq & 0xff;

    // `node`
    var node = options.node || _nodeId;
    for (var n = 0; n < 6; n++) {
      b[i + n] = node[n];
    }

    return buf ? buf : unparse(b);
  }

  // **`v4()` - Generate random UUID**

  // See https://github.com/broofa/node-uuid for API details
  function v4(options, buf, offset) {
    // Deprecated - 'format' argument, as supported in v1.2
    var i = buf && offset || 0;

    if (typeof(options) == 'string') {
      buf = options == 'binary' ? new BufferClass(16) : null;
      options = null;
    }
    options = options || {};

    var rnds = options.random || (options.rng || _rng)();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;

    // Copy bytes to buffer, if provided
    if (buf) {
      for (var ii = 0; ii < 16; ii++) {
        buf[i + ii] = rnds[ii];
      }
    }

    return buf || unparse(rnds);
  }

  // Export public API
  var uuid = v4;
  uuid.v1 = v1;
  uuid.v4 = v4;
  uuid.parse = parse;
  uuid.unparse = unparse;
  uuid.BufferClass = BufferClass;

  if (typeof define === 'function' && define.amd) {
    // Publish as AMD module
    define(function() {return uuid;});
  } else if (typeof(module) != 'undefined' && module.exports) {
    // Publish as node.js module
    module.exports = uuid;
  } else {
    // Publish as global (in browsers)
    var _previousRoot = _global.uuid;

    // **`noConflict()` - (browser only) to reset global 'uuid' var**
    uuid.noConflict = function() {
      _global.uuid = _previousRoot;
      return uuid;
    };

    _global.uuid = uuid;
  }
}).call(this);
/*
 * JavaScript MD5 1.0.1
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 * 
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*jslint bitwise: true */
/*global unescape, define */

(function ($) {
    'use strict';

    /*
    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    * to work around bugs in some JS interpreters.
    */
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    /*
    * Bitwise rotate a 32-bit number to the left.
    */
    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    /*
    * These functions implement the four basic operations the algorithm uses.
    */
    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    /*
    * Calculate the MD5 of an array of little-endian words, and a bit length.
    */
    function binl_md5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << (len % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var i, olda, oldb, oldc, oldd,
            a =  1732584193,
            b = -271733879,
            c = -1732584194,
            d =  271733878;

        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;

            a = md5_ff(a, b, c, d, x[i],       7, -680876936);
            d = md5_ff(d, a, b, c, x[i +  1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i +  2], 17,  606105819);
            b = md5_ff(b, c, d, a, x[i +  3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i +  4],  7, -176418897);
            d = md5_ff(d, a, b, c, x[i +  5], 12,  1200080426);
            c = md5_ff(c, d, a, b, x[i +  6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i +  7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i +  8],  7,  1770035416);
            d = md5_ff(d, a, b, c, x[i +  9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12],  7,  1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22,  1236535329);

            a = md5_gg(a, b, c, d, x[i +  1],  5, -165796510);
            d = md5_gg(d, a, b, c, x[i +  6],  9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14,  643717713);
            b = md5_gg(b, c, d, a, x[i],      20, -373897302);
            a = md5_gg(a, b, c, d, x[i +  5],  5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10],  9,  38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i +  4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i +  9],  5,  568446438);
            d = md5_gg(d, a, b, c, x[i + 14],  9, -1019803690);
            c = md5_gg(c, d, a, b, x[i +  3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i +  8], 20,  1163531501);
            a = md5_gg(a, b, c, d, x[i + 13],  5, -1444681467);
            d = md5_gg(d, a, b, c, x[i +  2],  9, -51403784);
            c = md5_gg(c, d, a, b, x[i +  7], 14,  1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = md5_hh(a, b, c, d, x[i +  5],  4, -378558);
            d = md5_hh(d, a, b, c, x[i +  8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16,  1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i +  1],  4, -1530992060);
            d = md5_hh(d, a, b, c, x[i +  4], 11,  1272893353);
            c = md5_hh(c, d, a, b, x[i +  7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13],  4,  681279174);
            d = md5_hh(d, a, b, c, x[i],      11, -358537222);
            c = md5_hh(c, d, a, b, x[i +  3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i +  6], 23,  76029189);
            a = md5_hh(a, b, c, d, x[i +  9],  4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16,  530742520);
            b = md5_hh(b, c, d, a, x[i +  2], 23, -995338651);

            a = md5_ii(a, b, c, d, x[i],       6, -198630844);
            d = md5_ii(d, a, b, c, x[i +  7], 10,  1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i +  5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12],  6,  1700485571);
            d = md5_ii(d, a, b, c, x[i +  3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i +  1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i +  8],  6,  1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i +  6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21,  1309151649);
            a = md5_ii(a, b, c, d, x[i +  4],  6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i +  2], 15,  718787259);
            b = md5_ii(b, c, d, a, x[i +  9], 21, -343485551);

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return [a, b, c, d];
    }

    /*
    * Convert an array of little-endian words to a string
    */
    function binl2rstr(input) {
        var i,
            output = '';
        for (i = 0; i < input.length * 32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        }
        return output;
    }

    /*
    * Convert a raw string to an array of little-endian words
    * Characters >255 have their high-byte silently ignored.
    */
    function rstr2binl(input) {
        var i,
            output = [];
        output[(input.length >> 2) - 1] = undefined;
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
        }
        for (i = 0; i < input.length * 8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        }
        return output;
    }

    /*
    * Calculate the MD5 of a raw string
    */
    function rstr_md5(s) {
        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }

    /*
    * Calculate the HMAC-MD5, of a key and some data (raw strings)
    */
    function rstr_hmac_md5(key, data) {
        var i,
            bkey = rstr2binl(key),
            ipad = [],
            opad = [],
            hash;
        ipad[15] = opad[15] = undefined;
        if (bkey.length > 16) {
            bkey = binl_md5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }

    /*
    * Convert a raw string to a hex string
    */
    function rstr2hex(input) {
        var hex_tab = '0123456789abcdef',
            output = '',
            x,
            i;
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F) +
                hex_tab.charAt(x & 0x0F);
        }
        return output;
    }

    /*
    * Encode a string as utf-8
    */
    function str2rstr_utf8(input) {
        return unescape(encodeURIComponent(input));
    }

    /*
    * Take string arguments and return either raw or hex encoded strings
    */
    function raw_md5(s) {
        return rstr_md5(str2rstr_utf8(s));
    }
    function hex_md5(s) {
        return rstr2hex(raw_md5(s));
    }
    function raw_hmac_md5(k, d) {
        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    }
    function hex_hmac_md5(k, d) {
        return rstr2hex(raw_hmac_md5(k, d));
    }

    function md5(string, key, raw) {
        if (!key) {
            if (!raw) {
                return hex_md5(string);
            }
            return raw_md5(string);
        }
        if (!raw) {
            return hex_hmac_md5(key, string);
        }
        return raw_hmac_md5(key, string);
    }

    if (typeof define === 'function' && define.amd) {
        define(function () {
            return md5;
        });
    } else {
        $.md5 = md5;
    }
}(this));/*
 * $Id: base64.js,v 2.12 2013/05/06 07:54:20 dankogai Exp dankogai $
 *
 *  Licensed under the MIT license.
 *    http://opensource.org/licenses/mit-license
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */

(function(global) {
    'use strict';
    // existing version for noConflict()
    var _Base64 = global.Base64;
    var version = "2.1.2";
    // if node.js, we use Buffer
    var buffer;
    if (typeof module !== 'undefined' && module.exports) {
        buffer = require('buffer').Buffer;
    }
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                   + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    } : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer
        ? function (u) { return (new buffer(u)).toString('base64') } 
    : function (u) { return btoa(utob(u)) }
    ;
    var encode = function(u, urisafe) {
        return !urisafe 
            ? _encode(u)
            : _encode(u).replace(/[+\/]/g, function(m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function(u) { return encode(u, true) };
    // decoder stuff
    var re_btou = new RegExp([
        '[\xC0-\xDF][\x80-\xBF]',
        '[\xE0-\xEF][\x80-\xBF]{2}',
        '[\xF0-\xF7][\x80-\xBF]{3}'
    ].join('|'), 'g');
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var atob = global.atob ? function(a) {
        return global.atob(a);
    } : function(a){
        return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    var _decode = buffer
        ? function(a) { return (new buffer(a, 'base64')).toString() }
    : function(a) { return btou(atob(a)) };
    var decode = function(a){
        return _decode(
            a.replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    // that's it!
})(this);
/*
 * zClip :: jQuery ZeroClipboard v1.1.1
 * http://steamdev.com/zclip
 *
 * Copyright 2011, SteamDev
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: Wed Jun 01, 2011
 */


(function ($) {

    $.fn.zclip = function (params) {

        if (typeof params == "object" && !params.length) {

            var settings = $.extend({

                path: 'ZeroClipboard.swf',
                copy: null,
                beforeCopy: null,
                afterCopy: null,
                clickAfter: true,
                setHandCursor: true,
                setCSSEffects: true

            }, params);
			

            return this.each(function () {

                var o = $(this);

                if (o.is(':visible') && (typeof settings.copy == 'string' || $.isFunction(settings.copy))) {

                    ZeroClipboard.setMoviePath(settings.path);
                    var clip = new ZeroClipboard.Client();
                    
                    if($.isFunction(settings.copy)){
                    	o.bind('zClip_copy',settings.copy);
                    }
                    if($.isFunction(settings.beforeCopy)){
                    	o.bind('zClip_beforeCopy',settings.beforeCopy);
                    }
                    if($.isFunction(settings.afterCopy)){
                    	o.bind('zClip_afterCopy',settings.afterCopy);
                    }                    

                    clip.setHandCursor(settings.setHandCursor);
                    clip.setCSSEffects(settings.setCSSEffects);
                    clip.addEventListener('mouseOver', function (client) {
                        o.trigger('mouseenter');
                    });
                    clip.addEventListener('mouseOut', function (client) {
                        o.trigger('mouseleave');
                    });
                    clip.addEventListener('mouseDown', function (client) {

                        o.trigger('mousedown');
                        
			if(!$.isFunction(settings.copy)){
			   clip.setText(settings.copy);
			} else {
			   clip.setText(o.triggerHandler('zClip_copy'));
			}                        
                        
                        if ($.isFunction(settings.beforeCopy)) {
                            o.trigger('zClip_beforeCopy');                            
                        }

                    });

                    clip.addEventListener('complete', function (client, text) {

                        if ($.isFunction(settings.afterCopy)) {
                            
                            o.trigger('zClip_afterCopy');

                        } else {
                            if (text.length > 500) {
                                text = text.substr(0, 500) + "...\n\n(" + (text.length - 500) + " characters not shown)";
                            }
							
			    o.removeClass('hover');
                            alert("Copied text to clipboard:\n\n " + text);
                        }

                        if (settings.clickAfter) {
                            o.trigger('click');
                        }

                    });

					
                    clip.glue(o[0], o.parent()[0]);
					
                    $(window).bind('load resize',function(){clip.reposition();});
                }

            });

        } else if (typeof params == "string") {

            return this.each(function () {

                var o = $(this);

                params = params.toLowerCase();
                var zclipId = o.data('zclipId');
                var clipElm = $('#' + zclipId + '.zclip');

                if (params == "remove") {

                    clipElm.remove();
                    o.removeClass('active hover');

                } else if (params == "hide") {

                    clipElm.hide();
                    o.removeClass('active hover');

                } else if (params == "show") {

                    clipElm.show();

                }

            });

        }

    }	
	
	

})(jQuery);







// ZeroClipboard
// Simple Set Clipboard System
// Author: Joseph Huckaby
var ZeroClipboard = {

    version: "1.0.7",
    clients: {},
    // registered upload clients on page, indexed by id
    moviePath: 'ZeroClipboard.swf',
    // URL to movie
    nextId: 1,
    // ID of next movie
    $: function (thingy) {
        // simple DOM lookup utility function
        if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
        if (!thingy.addClass) {
            // extend element with a few useful methods
            thingy.hide = function () {
                this.style.display = 'none';
            };
            thingy.show = function () {
                this.style.display = '';
            };
            thingy.addClass = function (name) {
                this.removeClass(name);
                this.className += ' ' + name;
            };
            thingy.removeClass = function (name) {
                var classes = this.className.split(/\s+/);
                var idx = -1;
                for (var k = 0; k < classes.length; k++) {
                    if (classes[k] == name) {
                        idx = k;
                        k = classes.length;
                    }
                }
                if (idx > -1) {
                    classes.splice(idx, 1);
                    this.className = classes.join(' ');
                }
                return this;
            };
            thingy.hasClass = function (name) {
                return !!this.className.match(new RegExp("\\s*" + name + "\\s*"));
            };
        }
        return thingy;
    },

    setMoviePath: function (path) {
        // set path to ZeroClipboard.swf
        this.moviePath = path;
    },

    dispatch: function (id, eventName, args) {
        // receive event from flash movie, send to client		
        var client = this.clients[id];
        if (client) {
            client.receiveEvent(eventName, args);
        }
    },

    register: function (id, client) {
        // register new client to receive events
        this.clients[id] = client;
    },

    getDOMObjectPosition: function (obj, stopObj) {
        // get absolute coordinates for dom element
        var info = {
            left: 0,
            top: 0,
            width: obj.width ? obj.width : obj.offsetWidth,
            height: obj.height ? obj.height : obj.offsetHeight
        };
        
        //var _obj = $(obj);
        //$.extend(info, {left: _obj.position().left, top: _obj.position().top});
        //$.extend(info, {left: _obj.offset().left, top: _obj.offset().top});

        if (obj && (obj != stopObj)) {
			info.left += obj.offsetLeft;
            info.top += obj.offsetTop;
        }

        return info;
    },

    Client: function (elem) {
        // constructor for new simple upload client
        this.handlers = {};

        // unique ID
        this.id = ZeroClipboard.nextId++;
        this.movieId = 'ZeroClipboardMovie_' + this.id;

        // register client with singleton to receive flash events
        ZeroClipboard.register(this.id, this);

        // create movie
        if (elem) this.glue(elem);
    }
};

ZeroClipboard.Client.prototype = {

    id: 0,
    // unique ID for us
    ready: false,
    // whether movie is ready to receive events or not
    movie: null,
    // reference to movie object
    clipText: '',
    // text to copy to clipboard
    handCursorEnabled: true,
    // whether to show hand cursor, or default pointer cursor
    cssEffects: true,
    // enable CSS mouse effects on dom container
    handlers: null,
    // user event handlers
    glue: function (elem, appendElem, stylesToAdd) {
        // glue to DOM element
        // elem can be ID or actual DOM element object
        this.domElement = ZeroClipboard.$(elem);

        // float just above object, or zIndex 99 if dom element isn't set
        var zIndex = 99;
        if (this.domElement.style.zIndex) {
            zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
        }

        if (typeof(appendElem) == 'string') {
            appendElem = ZeroClipboard.$(appendElem);
        } else if (typeof(appendElem) == 'undefined') {
            appendElem = document.getElementsByTagName('body')[0];
        }

        // find X/Y position of domElement
        var box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);

        // create floating DIV above element
        this.div = document.createElement('div');
        this.div.className = "zclip";
        this.div.id = "zclip-" + this.movieId;
        $(this.domElement).data('zclipId', 'zclip-' + this.movieId);
        var style = this.div.style;
        style.position = 'absolute';
        style.left = '' + box.left + 'px';
        style.top = '' + box.top + 'px';
        //$(this.div).offset({left: box.left, top: box.top});
        style.width = '' + box.width + 'px';
        style.height = '' + box.height + 'px';
        style.zIndex = zIndex;

        if (typeof(stylesToAdd) == 'object') {
            for (addedStyle in stylesToAdd) {
                style[addedStyle] = stylesToAdd[addedStyle];
            }
        }

        // style.backgroundColor = '#f00'; // debug
        appendElem.appendChild(this.div);

        this.div.innerHTML = this.getHTML(box.width, box.height);
        var _source = $(this.domElement);
        $(this.div).offset({left: _source.offset().left, top: _source.offset().top});
    },

    getHTML: function (width, height) {
        // return HTML for movie
        var html = '';
        var flashvars = 'id=' + this.id + '&width=' + width + '&height=' + height;

        if (navigator.userAgent.match(/MSIE/)) {
            // IE gets an OBJECT tag
            var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
            html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + protocol + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + width + '" height="' + height + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + flashvars + '"/><param name="wmode" value="transparent"/></object>';
        } else {
            // all other browsers get an EMBED tag
            html += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + width + '" height="' + height + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + flashvars + '" wmode="transparent" />';
        }
        return html;
    },

    hide: function () {
        // temporarily hide floater offscreen
        if (this.div) {
            this.div.style.left = '-2000px';
        }
    },

    show: function () {
        // show ourselves after a call to hide()
        this.reposition();
    },

    destroy: function () {
        // destroy control and floater
        if (this.domElement && this.div) {
            this.hide();
            this.div.innerHTML = '';

            var body = document.getElementsByTagName('body')[0];
            try {
                body.removeChild(this.div);
            } catch (e) {;
            }

            this.domElement = null;
            this.div = null;
        }
    },

    reposition: function (elem) {
        // reposition our floating div, optionally to new container
        // warning: container CANNOT change size, only position
        if (elem) {
            this.domElement = ZeroClipboard.$(elem);
            if (!this.domElement) this.hide();
        }

        if (this.domElement && this.div) {
            //var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
            //var style = this.div.style;
            //style.left = '' + box.left + 'px';
            //style.top = '' + box.top + 'px';
            var _source = $(this.domElement);
            $(this.div).offset({left: _source.offset().left, top: _source.offset().top});
        }
    },

    setText: function (newText) {
        // set text to be copied to clipboard
        this.clipText = newText;
        if (this.ready) {
            this.movie.setText(newText);
        }
    },

    addEventListener: function (eventName, func) {
        // add user event listener for event
        // event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(func);
    },

    setHandCursor: function (enabled) {
        // enable hand cursor (true), or default arrow cursor (false)
        this.handCursorEnabled = enabled;
        if (this.ready) {
            this.movie.setHandCursor(enabled);
        }
    },

    setCSSEffects: function (enabled) {
        // enable or disable CSS effects on DOM container
        this.cssEffects = !! enabled;
    },

    receiveEvent: function (eventName, args) {
        // receive event from flash
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');

        // special behavior for certain events
        switch (eventName) {
        case 'load':
            // movie claims it is ready, but in IE this isn't always the case...
            // bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
            this.movie = document.getElementById(this.movieId);
            if (!this.movie) {
                var self = this;
                setTimeout(function () {
                    self.receiveEvent('load', null);
                }, 1);
                return;
            }

            // firefox on pc needs a "kick" in order to set these in certain cases
            if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                var self = this;
                setTimeout(function () {
                    self.receiveEvent('load', null);
                }, 100);
                this.ready = true;
                return;
            }

            this.ready = true;
            try {
                this.movie.setText(this.clipText);
            } catch (e) {}
            try {
                this.movie.setHandCursor(this.handCursorEnabled);
            } catch (e) {}
            break;

        case 'mouseover':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('hover');
                if (this.recoverActive) {
                    this.domElement.addClass('active');
                }


            }


            break;

        case 'mouseout':
            if (this.domElement && this.cssEffects) {
                this.recoverActive = false;
                if (this.domElement.hasClass('active')) {
                    this.domElement.removeClass('active');
                    this.recoverActive = true;
                }
                this.domElement.removeClass('hover');

            }
            break;

        case 'mousedown':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('active');
            }
            break;

        case 'mouseup':
            if (this.domElement && this.cssEffects) {
                this.domElement.removeClass('active');
                this.recoverActive = false;
            }
            break;
        } // switch eventName
        if (this.handlers[eventName]) {
            for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
                var func = this.handlers[eventName][idx];

                if (typeof(func) == 'function') {
                    // actual function reference
                    func(this, args);
                } else if ((typeof(func) == 'object') && (func.length == 2)) {
                    // PHP style object + method, i.e. [myObject, 'myMethod']
                    func[0][func[1]](this, args);
                } else if (typeof(func) == 'string') {
                    // name of function
                    window[func](this, args);
                }
            } // foreach event handler defined
        } // user defined handler for event
    }

};	

/*
 *  author: gejian1@lenovo.com
 *  description: jquery扩展
 */
(function($){
    //为jquery对象添加扩展
    $.fn.extend({
        /*
         * 跨浏览器实现输入框的Placeholder效果
         * example:
         *   html: 
         *    <div class="smart-input">
         *      <label for="title_input" class="smart-label">标题</label>
         *      <input type="text" value="" name="title" id="title_input" />
         *    </div>
         *   js:
         *     $('#title_input').smartInput();
         */
        smartInput: function(options){
            var defaults = {wrapname:'.smart-input', placeholder:'.smart-label', focuscname: 'focus', changecname:'change'};
            var options = $.extend(defaults, options);
            
            var interval = null;
          
            var clean_interval = function(){
                if(interval !== null){
                    clearInterval(interval);
                    interval = null;
                }
            };
          
           var init_interval = function(_smartinput, that){
                clean_interval();
                interval = setInterval(function(){
                  var _val = $.trim($(that).val());
                  if(_val != ''){
                      _smartinput.addClass(options.changecname);
                      clean_interval();
                  }
                }, 100);
           };
           
           var clear_content = function(_smartinput, _key, that){
                var _val = $.trim($(that).val());
                if(_key == 8 || _key == 0 || _key == 46){
                    if(_val == ''){
                         _smartinput.removeClass(options.changecname);
                         init_interval(_smartinput, that);
                    }
                }
           };
          
            var check_content = function(_smartinput, placeholder_val, that){
                var _val = $.trim($(that).val());
                if(_val == '' || placeholder_val == _val){
                     $(that).val('');
                     _smartinput.removeClass(options.focuscname + ' ' + options.changecname);
                }else{
                     _smartinput.addClass(options.changecname);
                }
            };
            
           return this.each(function(){
                var placeholder_val = $(this).siblings(options.placeholder).text();
                var smartinput = $(this).closest(options.wrapname);
                
                check_content(smartinput, placeholder_val, this);
            
                $(this).focus(function(){
                     init_interval(smartinput, this);
                     var _val = $.trim($(this).val());
                     if(_val == ''){
                         smartinput.removeClass(options.changecname);
                         smartinput.addClass(options.focuscname);
                     }
                }).blur(function(){
                     clean_interval();
                     check_content(smartinput, placeholder_val, this);
                }).keypress(function(event){
                     var _val = $.trim($(this).val());
                     if((event.which != 32 && event.which!= 13 && event.which != 8 && event.which != 0 && event.which != 46) || _val != ''){
                         clean_interval();
                         smartinput.addClass(options.changecname);
                     }
                     clear_content(smartinput, event.which, this);
                }).keydown(function(event){
                     var _val = $.trim($(this).val());
                     if(_val != ''){
                          clean_interval();
                          smartinput.addClass(options.changecname);
                      }
                      clear_content(smartinput, event.which, this);
                }).keyup(function(event){
                      clear_content(smartinput, event.which, this);
                });
           });
        },
        
        /*
         *  滚动时自动高亮对应的菜单
         */
        smartGuide: function(options){
            var defaults = {fixTop: 98, id: 'id', mark: 'div', callback: function(target){console.info(target);}, ignore: []};
            var options = $.extend(defaults, options);
            
            return this.each(function(){
                var items = $(this).children(options.mark), keys = {}, values = [], timer = null;
                for(var i = 0; i < items.length; i++){
                    var item = $(items[i]), top = item.offset().top;
                    if($.inArray(item.attr(options.id), options.ignore) != -1) continue;
                    keys[top] = item.attr(options.id);
                    values.push(top);
                }
                values.sort(function(a, b){return a > b? 1 : -1;});
                
                $(window).scroll(function(){
                    if(timer !== null){
                        clearTimeout(timer);
                        timer = null;
                    }
                    
                    var scrollTop = $(this).scrollTop(), key = tmp = 0;
                    timer = setTimeout(function(){
                        for(var i = 0; i < values.length; i++){
                            var v = values[i] - options.fixTop;
                            if(scrollTop == v){
                                key = values[i];
                                break;
                            }else if(scrollTop > v){
                                if(i + 1 == values.length){
                                    key = values[i];
                                    break;
                                }else{
                                    tmp = values[i];
                                }
                            }else if(scrollTop < v){
                                key = (tmp == 0)? values[i] : tmp;
                                break;
                            }
                        }
                        
                        if(keys[key]) options.callback(keys[key]);
                        key = tmp = 0;
                    }, 50);
                });
            });
        },
        
        /*
         *  导航菜单Hover
         */
        smartNavHover: function(options){
            var defaults = {target: 'a', className: 'active', cur: 'a.active', height: 4, width: 36};
            var options = $.extend(defaults, options);
            
            return this.each(function(){
                //var _this = $(this), current = line = null, top = _this.outerHeight(true) + _this.offset().top - options.height;
                var _this = $(this), current = line = null, top = _this.outerHeight(true) - options.height, isCurrent = true, timer = null;
                _this.hover(function(){}, function(){
                    if(isCurrent) return;
                    
                    if(timer !== null){
                        clearTimeout(timer);
                        timer = null;
                    }
                    if(line) line.remove();
                    if(current) current.addClass(options.className);
                    current = line = null, isCurrent = true;
                });
                
                _this.find(options.target).hover(
                    function(){
                        var _this_ = $(this);
                        if(_this_.hasClass(options.className)) return;
                        
                        line = $('.navline');
                        if(line.length > 0){
                            var _top = line.offset().top, _left = line.offset().left;
                        }else{
                            isCurrent = false, current = _this.find(options.cur);
                            //var _top = top + $(window).scrollTop();
                            var _top = top +_this.offset().top, _left = current.offset().left;
                            $('body').append(line = $('<div class="navline"></div>'));
                            line.css({
                                position: 'absolute', 'background-color': '#c21a17', 'z-index': 1001,
                                height: options.height, width: options.width, top: _top, left: _left
                            });
                            current.removeClass(options.className); //current.css(borderColor: 'transparent');
                        }
                        var _width_ = _this_.outerWidth(true), _fixleft_ = (_width_ - line.outerWidth(true)) / 2;
                             _top_ = _this_.offset().top, _left_ = _this_.offset().left + _fixleft_;
                        //var _width_ = _this_.outerWidth(true), _top_ = _this_.offset().top, _left_ = _this_.offset().left;
                        if(line){
                            if(timer !== null){
                                clearTimeout(timer);
                                timer = null;
                            }
                            timer = setTimeout(function(){
                                //line.clearQueue().animate({left: _left_}, 200, function(){
                                //line.stop(true, true).animate({left: _left_}, 200, function(){
                                line.stop(true).animate({left: _left_}, 200, function(){
                                    $(this).animate({left: _left_ - _fixleft_, width: _width_}, 300);
                                });
                                //line.clearQueue().animate({left: _left_, width: _width_}, 400);
                            }, 80);
                        }
                    }
                );
            });
        },
        
        /*
         * 跨浏览器实现hover效果
         * example:
         *   $(targetElementGroup).smartHover([options])
         */
        smartHover: function(options){
            var defaults = {classname: 'hover'};
            var options = $.extend(defaults, options);
            return this.each(function(){
              $(this).hover(
                function(){ $(this).addClass(options.classname); },
                function(){ $(this).removeClass(options.classname); }
              );
            });
        },
        
        /*
         *  拖动改变元素的宽度，并支持拖动的最小/最大宽度
         *  example:
         *     $(targetElement).smartDragline([options])
         */
        smartDragline: function(options){
            var defaults = {min: 160, max: 280, wrapClass: '.wrap', contentClass: '.content', title: '拖拉改变大小'}, dragline, draglineline, draglineoverlay, target, wrap, content;
            var options = $.extend(defaults, options);
            options.source = this;
            
            var mouseMove = function(event){
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                   if(!event.isDefaultPrevented()) event.preventDefault();
                }catch(e){}
                
                var w = event.clientX - $(options.source).offset().left;
                if(w >= options.min && w <= options.max){
                    draglineline.css({left: event.clientX});
                    $(event.target).css('cursor', 'e-resize');
                }else{
                    $(event.target).css('cursor', 'default');
                }
                return false;
            };
            
            var mouseUp = function(event){
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                   if(!event.isDefaultPrevented()) event.preventDefault();
                }catch(e){}
                
                //减去滚动条的宽度
                //wrap.width(dragline.offset().left - (target.outerWidth() - content.outerWidth()));
                try{
                    var w = draglineline.offset().left - $(options.source).offset().left;
                    if(w >= options.min && w <= options.max){
                        wrap.width(w);
                    }
                }catch(e){}
                
                $(document).off('mousemove', mouseMove).off('mouseup', mouseUp);
                
                $(event.target).css('cursor', 'default');
                $('#sidebar-c input').css('cursor', 'text');
                document.body.onselectstart = function(){return !0;};
                document.onselectstart = null;
                document.unselectable = "off";
                $('body').removeClass('drag-line-noselect');
                
                try{
                    draglineoverlay.remove();
                    draglineline.remove();
                    draglineoverlay = draglineline = target = wrap = content = null;
                }catch(e){
                    $('.drag-line-overlay, .drag-line-line').remove();
                }
                return false;
            };
            
            return this.each(function(){
                var that = this;
                $(this).append(dragline = $('<div class="drag-line" title="' + options.title + '"></div>'));
                dragline.smartHover();
                
                dragline.mousedown(function(event){
                    if($('.drag-line-line').length > 0) return false;
                    try{
                       if(!event.isPropagationStopped()) event.stopPropagation();
                       if(!event.isDefaultPrevented()) event.preventDefault();
                    }catch(e){}
                    
                    try{
                        //清理选区
                        if(window.getSelection){ //chrome & firefox
                            window.getSelection().removeAllRanges();
                        }else if(document.selection){ //ie
                            document.selection.empty();
                        }
                        //防止内容被选择
                        document.body.onselectstart = function(){return !1;};
                        document.onselectstart = function(){return false;};
                        document.unselectable = "on";
                        //禁止在firefox下拖动时选择文字
                        $('body').addClass('drag-line-noselect');
                    }catch(e){}
                    
                    target = $(that);
                    wrap = target.children(options.wrapClass);
                    content = target.children(options.wrapClass).children(options.contentClass);
                    
                    $('body').append(draglineoverlay=$('<div class="drag-line-overlay" onselectstart="return false;"></div>'), draglineline=$('<div class="drag-line-line"></div>'));
                    draglineline.css({height: dragline.outerHeight(), top: dragline.offset().top, left: dragline.offset().left, visibility: 'visible'});
                    
                    $(document).on('mousemove', mouseMove).on('mouseup', mouseUp);
                });
            });
        },
        
        /*
         *  点击图标最小化目标元素，即显示或隐藏
         */
        smartMinimize: function(options){
            var defaults = {wrapClass: '.wrap'};
            var options = $.extend(defaults, options);
            
            return this.each(function(){
                var that = this, collapseBtn;
                $(this).append(collapseBtn=$('<div class="collapse-btn" title="收起"><a href="javascript:;" class="icon icon-arrow" onclick="this.blur();"></a></div>'));
                collapseBtn.click(function(event){
                    var wrap = $(that).children(options.wrapClass);
                    if(wrap.is(':hidden')){
                        wrap.show();
                        $(this).removeClass('open').attr('title', '收起');
                    }else{
                        wrap.hide();
                        $(this).addClass('open').attr('title', '展开');
                    }
                });
            });
        },
        
        /*
         *   在目标元素中添加正在执行的图标和提示
         *   options:
         *      action: 在目标元素中添加或删除loading, 有两个值：del、add
         *      isappend: 添加loading时表示是否添加到目标元素的后面
         *      effect: 表示隐藏时是否显示效果
         *      text:  添加loading时的文字描述
         *      callback: 删除loading时的回调函数
         *   example:
         *      $(target).smartLoading({text: '正在发送...', isappend: false});  添加loading
         *      $(target).smartLoading({action:'del', effect:'xxx', callback:function(){}}); 删除loading
         */
        smartLoading: function(options){
            var defaults = {action: 'add', isappend: true, effect: 'hide', text: '正在加载...'};
            var options = $.extend(defaults, options || {});
            
            function removeLoading(_this){
                $(_this).remove();
                 if(typeof options.callback == 'function') options.callback();
            }
            
            return this.each(function(){
                if(options.action == 'del'){
                    if(options.effect == 'hide'){
                        $(this).children('.loading').hide('fast', function(){
                            removeLoading(this);
                        });
                    }else{
                        $(this).children('.loading').slideUp('slow', function(){
                            removeLoading(this);
                        });
                    }
                }else if(options.action == 'add'){
                    var html = '<div class="loading">' + options.text + '</div>';
                    options.isappend? $(this).append(html) : $(this).prepend(html);
                }
            });
        }
    });
    
    $.extend({
        /*
          *  在页面右下角添加ajax标志
          *  options:
          *    action:  添加或删除doing，有两种值：del、add
          *    text:     文字提示
          *    statusClass: 得到ajax结果后显示的状态样式
          *    hold: 弹出窗吸附，删除时需要指定才可以删除此类窗口
        */
        smartDoing: function(options){
            var defaults = {action: 'add', text: '处理中...', statusClass: 'success', hold: false, speed: 200, delay: 600, _callback: null};
            var options = $.extend(defaults, options || {});
            
            if(options.action == 'del'){
                //var div = $('.doing');
                var div = options.hold? $('.doing.hold') : $('.doing:not(.hold)');
                
                if(options.text){
                    //div.text(options.text);
                    div.html(options.text);
                }
                //div.addClass(options.statusClass).animate({bottom: -35}, 200, function(){
               //     $(this).remove();
               //});
               div.addClass(options.statusClass);
               setTimeout(function(){
                   div.animate({bottom: -35}, options.speed, function(){
                       $(this).remove();
                       //重新整理doing的位置
                       var doings = $('.doing');
                       for(var i = 0; i < doings.length; i++){
                           var distance = i * 35 + 5;
                           //if(distance != 5){
                               $(doings[i]).animate({bottom: distance}, 100);
                           //}
                       }
                       if(typeof options._callback == 'function') options._callback();
                   });
               }, options.delay);
            }else if(options.action == 'add'){
                //$('body').append('<div class="doing">' + options.text + '</div>');
                //$('.doing').animate({bottom: 5}, 200);
                var doings = $('.doing').length, tmp = null, distance = doings * 35 + 5;
                $('body').append(tmp = $('<div class="doing' + (options.hold? ' hold' : '') + '">' + options.text + '</div>'));
                if(tmp) tmp.animate({bottom: distance}, 200);
            }
        }
    });
    
    //为jquery添加全局扩展
    //overlay表示遮罩层，wrap表示内容的包裹层
    var overlay, wrap, publicMethods;
    
    //定义$.lebox对象
    publicMethods = $.lebox = {};
    
    /*
     * 根据当前视窗的大小计算中心的位置
     * params:
     *   target:  需要计算位置的目标元素选择器表达式
     *   isFirst:  如果是首次计算则会添加动画效果
     */
    function setBoxPostion(target, isFirst){
        var ele = $(target);
        if(ele.length == 0) return;
        
        var left = Math.floor(($(window).width() - ele.outerWidth()) / 2) + $(window).scrollLeft();
        var top = Math.floor(($(window).height() - ele.outerHeight()) / 2) + $(window).scrollTop();
        if(top > 150) top -= 150;
        if(left < 0) left = 0;
        if(top < 0) top = 0;
        if(isFirst){
            ele.css({top: -ele.outerHeight(), left: left, opacity: 0, visibility:'visible'}).animate({top: top, opacity: 100}, 500);
        }else{
            ele.css({top: top, left: left});
        }
    }
    
    function setNotifyPostion(target, isFirst){
        var ele = $(target);
        if(ele.length == 0) return;
        
        //var left = ele.offset().left + $(window).scrollLeft();
        //var top = ele.offset().top + $(window).scrollTop();
        var top = Math.floor(($(window).height() - ele.outerHeight()) * 0.3) + $(window).scrollTop();
        //if(left < 0) left = 0;
        if(top < 0) top = 0;
        if(isFirst){
            //ele.css({top: -ele.outerHeight(), left: left, opacity: 0, visibility:'visible'}).animate({top: top, opacity: 100}, 500);
            ele.css({top: -ele.outerHeight(), opacity: 0, visibility:'visible'}).animate({top: top, opacity: 100}, 500);
        }else{
            //ele.css({top: top, left: left});
            ele.css({top: top});
        }
    }
    
    /*
     * 动态弹出框
     * params:
     *   title: 弹出框标题
     *   content: 弹出框内容
     *   callback: 点击确定按钮时的回调函数
     *   escKey:  如果为false则取消对esc事件的监听
     */
    publicMethods.modalbox = function(title, content, callback, escKey, customClass, noAutoUpdate, init){
        if($("#lebox-wrap").length > 0) return false;
        
        var addons = '';
        if(customClass != 'userful'){
            addons = '<div class="rainbow"></div>';
        }
        
        overlay = $('#lebox-overlay');
        if(overlay.length == 0){
            $('body').append(overlay = $('<div id="lebox-overlay" class="fixed"></div>'));
        }
        $('body').append(
            wrap = $('<div id="lebox-wrap" class="modal"><div class="top clearfix"><span class="title">' + title + '</span><a class="icon close" title="关闭" href="javascript:;"></a></div>' + addons + '<div class="content">' + content + '</div></div>')
        );
        
        if(customClass){
            overlay.addClass(customClass);
            wrap.addClass(customClass);
        }
        
        //设置遮罩层的高度
        //overlay.height($(document).height()).show();
        overlay.show();
        //设置弹出框居中
        setBoxPostion('#lebox-wrap', true);
        if(noAutoUpdate !== true){
            //当窗口大小变化时自动调整弹出框位置
            $(window).resize(function(){setBoxPostion('#lebox-wrap', false);}).scroll(function(){setBoxPostion('#lebox-wrap', false);});
        }else{
            //$(window).off('resize scroll');
        }
        
        //监听关闭按钮点击事件
        $('#lebox-wrap .close, #lebox-wrap .btn-close').click(function(event){
            try{
               if(!event.isPropagationStopped()) event.stopPropagation();
               if(!event.isDefaultPrevented()) event.preventDefault();
            }catch(e){}
            publicMethods.modalbox.close();
        });
        $('#lebox-wrap .close').smartHover();
        //设置焦点
        //$('#lebox-wrap .content :input').first().focus();
        var input = $('#lebox-wrap .content :input:enabled').first();
        if(input.length > 0) input.focus().val(input.val());
        
        //提交表单时的处理函数
        var handler = function(){
            //$(document).unbind('keydown.modal');
            if(typeof callback == 'function') callback();
        };
        
        //监听键盘事件
        $(document).unbind('keydown.modal').bind('keydown.modal', function(event){
                var key = event.which || event.keyCode;
                //监听esc事件
                if(key == 27){
                    if(escKey !== false){
                        if(event.isDefaultPrevented()) event.preventDefault();
                        publicMethods.modalbox.close();
                    }
                }else if(key == 13){
                    //监听回车事件
                    handler();
                }
        });
        //如果有提交按钮则监听
        $('#lebox-wrap .btn-confirm').click(function(){handler();});
        if(typeof init == 'function') init();
    };
    
    //关闭modal弹出框
    publicMethods.modalbox.close = function(callback){
        //注销esc事件监听
        $(document).unbind('keydown.modal');
        $('#lebox-wrap').animate({top: 0, opacity:0}, 300, function(){
            $(this).remove();
            //overlay.remove();
            overlay && overlay.animate({opacity:0}, 200, function(){
                $(this).remove();
                if(typeof callback == 'function') callback();
            });
        });
    };
    
    //插入简单通知的HTML
    function appendNotifyHTML(icon){
        var image_path = '/assets/images/';
        icon = image_path + icon;
        if($("#lebox-wrap").length){
            $('#lebox-icon').attr('src', icon);
            return;
        }
        
        overlay = $('#lebox-overlay');
        if(overlay.length == 0){
            $('body').append(
                overlay = $('<div id="lebox-overlay" class="fixed"></div>'),
                wrap = $('<div id="lebox-wrap" class="notify"><div id="lebox-content" class="clearfix"><img id="lebox-icon" src="' + icon + '"/><div id="lebox-msg"></div></div></div>')
            );
        }else{
            $('body').append(
                wrap = $('<div id="lebox-wrap" class="notify"><div id="lebox-content" class="clearfix"><img id="lebox-icon" src="' + icon + '"/><div id="lebox-msg"></div></div></div>')
            );
        }
    }
    
    /*
     * 用于弹出提示的简单通知框
     * params:
     *   msg: 需要显示的消息
     *   icon: 指定文字前方显示的图标，如警告、成功等
     *   autoHide: 指示是否自动隐藏通知框，单位为毫秒
     */
    publicMethods.notify = function(msg, icon, autoHide){
        icon = icon? icon : 'loading.gif';
        appendNotifyHTML(icon);
        $('#lebox-wrap #lebox-content #lebox-msg').html(msg);
        //overlay.height($(document).height()).show();
        overlay.show();
        wrap.show();
        
        setNotifyPostion('#lebox-wrap', true);
        //当窗口大小变化时自动调整弹出框位置
        //$(window).off('resize scroll').resize(function(){setNotifyPostion('#lebox-wrap', false);}).scroll(function(){setNotifyPostion('#lebox-wrap', false);});
        $(window).resize(function(){setNotifyPostion('#lebox-wrap', false);}).scroll(function(){setNotifyPostion('#lebox-wrap', false);});
        
        if(typeof autoHide === 'number'){
            setTimeout($.lebox.close, autoHide);
        }
    };
    
    //显示错误消息的简单通知框
    publicMethods.error = function(msg, autoHide){
        publicMethods.notify(msg, 'error.png', autoHide);
    };
    
    //显示成功消息的简单通知框
    publicMethods.success = function(msg, autoHide){
        publicMethods.notify(msg, 'success.png', autoHide);
    };
    
    //显示警告消息的简单通知框
    publicMethods.warning = function(msg, autoHide){
        publicMethods.notify(msg, 'warning.png', autoHide);
    };
    
    //显示消息
    publicMethods.info = function(msg, autoHide){
        publicMethods.notify(msg, 'info.png', autoHide);
    };
    
    //关闭简单通知框
    publicMethods.close = function(callback, holdOverlay){
        if(holdOverlay === true){
            wrap && wrap.hide(function(){
               $(this).remove();
               if(typeof callback == 'function') callback(); 
            });
        }else{
            wrap && wrap.hide(function(){
                $(this).remove();
                overlay && overlay.fadeOut('fast', function(){
                    //wrap.remove();
                    $(this).remove();
                    if(typeof callback == 'function') callback();
                });
            });
        }
    };
})(jQuery);/*
 *  author: gejian1@lenovo.com
 *  description: 配置程序
 */
(function(){
    lenoteConfig = {
        download: {
            android: {link: 'http://susapi.lenovomm.com/adpserver/GetPackByPN?PackageName=com.lenovo.supernote&ChannelKey=null&UserKey='},
            pc: {link: 'http://susapi.lenovomm.com/adpserver/DLBIDFS?ds=20069_20531368&rt=POL'},
            ios: {link: '/download.html'}
        }
    };
})();/*
 *  author: gejian1@lenovo.com
 *  description: 工具函数
 */
var utils = {};

(function($){
   /*
    *  日期格式转换，为Date类添加format方法
    *  new Date().format('yyyy-MM-dd hh:mm:ss') -> 2013-07-12 18:33:30
    */
   Date.prototype.format = function(format){ 
      var o = { 
         "M+" : this.getMonth()+1,
         "d+" : this.getDate(),
         "h+" : this.getHours(),
         "m+" : this.getMinutes(),
         "s+" : this.getSeconds(),
         "q+" : Math.floor((this.getMonth()+3)/3), //quarter 
         "S" : this.getMilliseconds() //millisecond 
      };
      
      if(/(y+)/.test(format)){
         format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
      }
    
      for(var k in o){
         if(new RegExp("("+ k +")").test(format)){
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
         }
      }
      return format;
   };
   
   Number.prototype.toFixed = function(d){
          var s = this + ""; if(!d) d = 0;
          if(s.indexOf(".") == -1) s += "."; s += new Array(d + 1).join("0");
          if(new RegExp("^(-|\\+)?(\\d+(\\.\\d{0,"+ (d+1) +"})?)\\d*$").test(s)){
              var s = "0" + RegExp.$2, pm = RegExp.$1, a = RegExp.$3.length, b = true;
              if(a == d + 2){
                  a = s.match(/\d/g);
                  if(parseInt(a[a.length - 1]) > 4){
                    for(var i = a.length - 2; i >= 0; i--){
                      a[i] = parseInt(a[i])+1;
                      if(a[i] == 10){
                        a[i] = 0; b = i != 1;
                      }else break;
                    }
                 }
                 s = a.join("").replace(new RegExp("(\\d+)(\\d{"+d+"})\\d$"),"$1.$2");
             }
             if(b) s = s.substr(1);
             return (pm + s).replace(/\.$/, "");
          }
          return this + "";
    };
   
   //地址跳转
   utils.redirect = function(url){
      if(url) location.href = url;
   };
   
   utils.calFileSize = function(size, fractionDigits){
       if(size && /^\d+$/.test(size)){
           if(!fractionDigits) fractionDigits = 2;
           size = parseFloat(size);
           var i = 0, units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
           //for(i = 0; size >= 1024 && i < 5; i++) size /= 1024;
           for(; size >= 1024 && i < 5; i++) size /= 1024;
           if(typeof Math == 'object'){
               size = Math.round(size * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits);
           }else{
               size = size.toFixed(fractionDigits);
           }
           return size + units[i]; 
       }
       return '0B';
   },
   
   //计算音频播放时间
   utils.playTimeFormat = function(msec){
      var sec = parseFloat(msec) / 1000;
      //sec = parseFloat(sec);
      var minute = 0;
      minute = parseInt(sec / 60);
      sec -= minute * 60;
      //sec = sec.toFixed(2);
      sec = parseInt(sec);
      return ((minute > 9)? minute : '0' + minute) + ':' + ((sec > 9)? sec : '0' + sec);
   },
   
   /*
    *  根据当前视窗的高度计算出元素的高度
    *  params:
    *     elem: 目标元素
    *     minHeight: 目标元素的最小高度
    *     sub: 修正高度
    *     isReturn: 是否返回计算后的目标元素高度
    */
   utils.calElemHeight = function(elem, minHeight, sub, isReturn){
      var height = $(window).height() - $(elem).offset().top;
      if(typeof sub == 'number') height -= sub;
      if(typeof minHeight == 'number' && height < minHeight) height = minHeight;
      if(isReturn){
          return height;
      }else{
          $(elem).height(height);
      }
   };
   
   //解析指定或当前的url地址
   utils.componentizeUrl = function(url){
      if(!url) url = window.location.href;
      var data = {protocol: null, domain: null, domainNoWww: null, port: null, path: null, queryString: null};
      var urlMatcher = /^(.*?):\/\/((www\.)?(.*?))(:\d+)?(\/.*?)(\?.*)?$/;
      var matches = urlMatcher.exec(url);
      data.protocol = matches[1];
      data.domain = matches[2];
      data.domainNoWww = matches[4];
      data.port = matches[5];
      data.path = matches[6];
      data.queryString = matches[7];
      return data;
   };
   
   //获取域名
   utils.getDomain = function(url){
       var url_parts = utils.componentizeUrl(url);
       var cb = url_parts.protocol + '://' + url_parts.domain;
       if(url_parts.port) cb += ':' + url_parts.port;
       return cb;
   };
   
   //通过解析URL地址获取Get参数
   utils.parseQueryParams = function(url){
       if(!url) url = window.location.href;
       var data = utils.componentizeUrl(url), queryString = data.queryString, params = {};
       if (!queryString) return params;
       queryString = queryString.substr(1).split("#")[0];
       var pairs = queryString.split("&"), i;
       for(i = 0; i < pairs.length; i++){
         var item = pairs[i].split("=");
         if(item[1]){
            item[1] = item[1].replace(/\+/g, " ");
         }
         params[item[0].toLowerCase()] = item[1];
      }
      return params;
   };
   
   //过滤HTML标签
   utils.strip_tags = function(html){
      html = html || '';
      return html.replace(/<[^>]+>/igm, '');
   };
   
   utils.trim = function(content, noMerge){
       var res = content.replace(/&nbsp;/igm, ' ');
       if(!noMerge) res.replace(/\s+/igm, ' ');
       return $.trim(res);
   };
   
   //隐藏目标元素
   utils.hide = function(target, ishide){
      if(ishide){
          $(target).css('visibility', 'hidden').hide();
      }else{
          $(target).css('visibility', 'hidden');
      }
      return this;
   };
   
   //显示目标元素
   utils.show = function(target, isshow){
      if(isshow){
          $(target).css('visibility', 'visible').show();
      }else{
          $(target).css('visibility', 'visible');
      }
      return this;
   };
   
   //生成uuid: 36位
   utils.uuid = function(prefix){
     prefix = prefix || 'wid_';
     var key = uuid.v1() + (new Date()).valueOf().toString(16) + uuid.v4() + (navigator.userAgent || ''),
           value = uuid.v4() + (navigator.appVersion || '') + uuid.v1() + Date.parse(new Date()).toString(2);
     return prefix + md5(key, value);
   };
   
   //判断是否是safari
   utils.isSafari = function(){
       var agent = navigator.userAgent.toLowerCase();
       if(agent.indexOf( ' applewebkit/' ) > -1){
           return !/chrome\//.test(agent);
       }
       return false;
   };
   
   //过滤功能按键(未包含Mac键盘上的功能键、大写键、win键、打印翻页键、小键盘开关键等)，排除: 退格8、回车13、Delete46
   utils.isFunctionKey = function(keyCode){
       switch(keyCode){
           case 9: //Tab
           case 16: case 17: case 18: //Shift、Ctrl、Alt
           case 20: case 27: //大小写切换、esc
           case 37: case 38: case 39: case 40: //左上右下
           case 33: case 34: case 35: case 36: case 45: //PageUp、PageDown、End、Home、Insert
           case 44: case 145: case 19: case 144: //PrintSc、Scroll Lock、Pause Break、NumLock
           case 91: case 92: //左右win键
              return true; break;
           default:
              if(keyCode >= 112 && keyCode <= 123) return true; //F1-F12
              return false;
       }
   };
   
   //高亮指定的文本
   utils.highlight = function(keyword, text, style){
       keyword = $.trim(keyword);
       text = $.trim(text);
       if(keyword == '' || text == '') return text;
       style = style || 'background-color:#89bce0;';
       //以空格切分关键词组分别高亮
       var kws = keyword.replace(/\s+/g, ' ').split(' ');
       for(var i = 0; i < kws.length; i++){
           var kw = $.trim(kws[i]);
           if(kw == '') continue;
           text = text.replace(new RegExp('(' + utils.unhtml(kw) + ')', 'igm'), '<span style="' + style + '">$1</span>');
       }
       return text;
   };
   
   //获取后辍名
   utils.getSuffix = function(name){
       if(!name) return {ext: '', name: ''};
       var indexof = name.lastIndexOf('.'),
            filetype = (indexof != -1)? name.substring(indexof) : '',
            ext = filetype? filetype.replace(/^\./ig, '') : '',
            _name = name.replace(filetype, '');
       return {ext: ext.toLowerCase(), name: _name};
   };
   
   //递归查找其父元素是否有紧邻的某兄弟元素，如有则直接返回
   utils.getSibling = function(node, selector, isPrev){
       var elem = isPrev? node.prev(selector) : node.next(selector);
       if(elem && elem.length == 0){
           var _parent = node.parent();
           if(_parent && !UE.dom.domUtils.isBody(_parent.get(0))){
               return utils.getSibling(_parent, selector, isPrev);
           }else{
               return '';
           }
       }else{
           return elem;
       }
   };
   
   //设置焦点
   utils.setFocus = function(selector){
       var input = $(selector).first();
       if(input.length > 0){
           setTimeout(function(){ //fixed: chrome can't run focus function
               input.focus().val(input.val());
           }, 50);
       }
   };
   
   utils.html = function(str){
        return $.trim(UE.utils.html(str.replace(/&nbsp;/igm, ' ')));
   };
   
   utils.unhtml = function(str){
       str = $.trim(str);
       str = str? str.replace(/&((g|l|quo)t|amp|#39);/g, function(m){
            return {
                '&lt;':'&amp;lt;',
                '&amp;':'&amp;amp;',
                '&quot;':'&amp;quot;',
                '&gt;':'&amp;gt;',
                '&#39;':"&amp;#39;"
            }[m];
        }) : '';
       return UE.utils.unhtml(str.replace(/&nbsp;/igm, '&amp;nbsp;')).replace(/\s/igm, '&nbsp;');
   };
}(jQuery));//解析器
var analyze = {};
(function(){
    var Parser = function(html){
        function setup(wrap_name, html){
            var _doc = $('<div></div>');
            _doc.addClass(wrap_name);
            _doc.append(html.replace(/\r|\n/igm, ''));
            return _doc;
        }
        
        this.wrap_name = 'parserDocWrap';
        this.html = html;
        this.doc = setup(this.wrap_name, this.filter(html));
        this.data = {width: 360, main_padding: 10, timeline_icon: 62, content_margin: 5};
        this.width = this.data.width - this.data.main_padding - this.data.content_margin - this.data.timeline_icon;
        this.dispose = function(){
            this.pretreatment();
            this.analyzeMix();
            this.ending();
            return this.doc.html();
        };
    };
    
    Parser.prototype = {
        //资源获取
        playTimeFormat: function(msec){
            var sec = parseFloat(msec) / 1000;
            //sec = parseFloat(sec);
            var minute = 0;
            minute = parseInt(sec / 60);
            sec -= minute * 60;
            sec = parseInt(sec);
            return ((minute > 9)? minute : '0' + minute) + ':' + ((sec > 9)? sec : '0' + sec);
        },
        getMkey: function(key){
            var resource = this.getResource(key);
            return resource? resource['mixLocalID'] : '';
        },
        getResource: function(key){
            return lenoteDom.editor.data.attachments.get(key);
        },
        isNesting: function(tag){
            return tag.parent().attr('class') != this.wrap_name;
        },
        isAcross: function(tag, last_mkey){
            //+表示紧邻, ~表示后面的兄弟
            return this.doc.find('[key="' + tag.attr('key') + '"] ~ [mkey="' + last_mkey + '"]').length > 0;
        },
        isSingle: function(tag){
            var tags = [], mkey = tag.attr('mkey');
            //switch(tag.get(0).nodeName.toLowerCase()){
            switch(tag.attr('type_') && tag.attr('type_').toLowerCase()){
                case 'text': tags = this.doc.find('[type_="photo"][mkey="' + mkey + '"], [type_="audio"][mkey="' + mkey + '"]');break;
                case 'photo': tags = this.doc.find('[type_="text"][mkey="' + mkey + '"], [type_="audio"][mkey="' + mkey + '"]');break;
                case 'audio': tags = this.doc.find('[type_="photo"][mkey="' + mkey + '"], [type_="text"][mkey="' + mkey + '"]');break;
            }
            return (tags.length > 0)? false : true;
        },
        getID: function(tag){
            return tag.attr('key') + '_' + Date.parse(new Date()) + (new Date).getMilliseconds() + Math.ceil(Math.random() * 100);
        },
        
        filter: function(html){
            //return str.replace(/(&(amp;)?nbsp;)*?\s*?<br\s*?\/?>/igm, '');
            //仅删除自定义标签后系统添加的&nbsp;<br/>
            //return str.replace(/(<\/ln-[^>]+?>)&(amp;)?nbsp;\s*?<br\s*?\/?>/igm, '$1');
            
            //删除空白的ln-text
            html = html.replace(/<\s*ln-text[^>]*?>(&nbsp;|<[\s\/]*br[\s\/]*>|\r|\n|\s*)*<\/ln-text>/igm, '');
            
            //解决手机端插入附件时间隙过大的问题
            html = html.replace(/(<\/ln-[^>]+?>)(&(amp;)?nbsp;)+?\s*?<br\s*?\/?>/igm, '$1');
            
            //为了兼容IE，将ln-photo等自定义标签中的-删除
            //html = html.replace(new RegExp('(ln)-(attachment|photo|text|audio|video)', 'gim'), '$1$2');
            var types = 'attachment|photo|text|audio|video';
            html = html.replace(new RegExp('<\s*?(ln)-(' + types + ')', 'gim'), function(str){
                return '<span type_="' + arguments[2].toLowerCase() + '"';
            }).replace(new RegExp('<\/(ln)-(' + types + ')>', 'gim'), '</span>');
            
            return html;
        },
        //预处理
        pretreatment: function(){
            //所有a标签添加target
            this.doc.find('a').attr('target', '_blank');
            
            //检查所有图片、附件、音频是否是web支持的，支持则显示替换成相应自定义标签，否则都显示成附件
            //var tags = this.doc.find('lnphoto, lnaudio, lnattachment');
            var tags = this.doc.find('[type_="photo"], [type_="audio"], [type_="attachment"]');
            for(var i = 0; i < tags.length; i++){
                var tag = $(tags[i]), resource = this.getResource(tag.attr('key'));
                if(typeof resource != 'object') continue;
                
                var _type = lenoteTag.isSupportForWeb(lenoteTag.validType(resource.title, resource._type)),
                      //tagName = tag.get(0).nodeName.toLowerCase();
                      tagName = tag.attr('type_') && tag.attr('type_').toLowerCase();
                switch(_type){
                    case 'image':
                        //if(tagName != 'lnphoto') tag.replaceWith('<lnphoto key="' + tag.attr('key') + '"></lnphoto>');
                        if(tagName != 'photo') tag.replaceWith('<span type_="photo" key="' + tag.attr('key') + '"></span>');
                        break;
                    case 'audio':
                        //if(tagName != 'lnaudio') tag.replaceWith('<lnaudio key="' + tag.attr('key') + '"></lnaudio>');
                        if(tagName != 'audio') tag.replaceWith('<span type_="audio" key="' + tag.attr('key') + '"></span>');
                        break;
                    default:
                        //if(tagName != 'lnattachment') tag.replaceWith('<lnattachment key="' + tag.attr('key') + '"></lnattachment>');
                        if(tagName != 'attachment') tag.replaceWith('<span type_="attachment" key="' + tag.attr('key') + '"></span>');
                }
            }
            
            //检查元素的mkey值
            var tags = this.doc.find('[type_="photo"], [type_="audio"], [type_="text"]');
            for(var i = 0; i < tags.length; i++){
                var tag = $(tags[i]), mkey = this.getMkey(tag.attr('key'));
                if(mkey){
                    //替换掉嵌套在其它标签里的mix元素
                    if(this.isNesting(tag)){
                        this.build(tag);
                    }else{
                        tag.attr('mkey', mkey);
                    }
                }else{
                    //替换非mix的自定义元素为普通元素
                    this.build(tag);
                }
            }
            
            //替换掉ln-attachment标签
            tags = this.doc.find('[type_="attachment"]');
            for(var i = 0; i < tags.length; i++){
                this.buildAttachment($(tags[i]));
            }
            
            //替换掉不符合规则的mix元素
            //替换掉交叉的mix元素
            tags = this.doc.find('[mkey]');
            var last_mkey = null;
            for(var i = 0; i < tags.length; i++){
                var tag = $(tags[i]);
                if(last_mkey == tag.attr('mkey')){
                    continue;
                }else if(last_mkey === null){
                    last_mkey = tag.attr('mkey');
                }else if(this.isAcross(tag, last_mkey)){
                    this.build(tag);
                }else{
                    last_mkey = tag.attr('mkey');
                }
            }
            
            //替换单(种类)mix元素为普通元素
            tags = this.doc.find('[mkey]'), last_mkey = null;
            for(var i = 0; i < tags.length; i++){
                var tag = $(tags[i]);
                if(last_mkey == tag.attr('mkey')) continue;
                if(this.isSingle(tag)){
                    this.build(tag);
                }else{
                    last_mkey = tag.attr('mkey');
                }
            }
        },
        build: function(tag){
            switch(tag.attr('type_').toLowerCase()){
                case 'text': tag.replaceWith(this.buildText(tag));break;
                case 'photo': tag.replaceWith(this.buildPhoto(tag, null, -1));break;
                case 'audio': tag.replaceWith(this.buildAudio(tag));break;
            }
        },
        buildAttachment: function(tag){
            var attachment = this.getResource(tag.attr('key'));
            if(typeof attachment != 'object') return tag.clone();
            
            var ext = attachment.ext || '';
            if(/^\d/.test(ext)) ext = '_' + ext;
            //tag.replaceWith('<a class="attachment noselect ' + ext + '" _id="' + tag.attr('key') + '" href="' + attachment.url + '" resource="attachment" title="' +
            //          attachment.title + '" onselectstart="return false;" unselectable="on" target="_blank">' +
            //          '<span class="info" contentEditable="false">' +
            //          '<span class="title"><span class="name">' + attachment.name + '</span><span class="ext">' + attachment.type + '</span><span class="c"></span></span>' +
            //          //'<span class="desc"><span class="ctime">' + attachment.utime + '</span>,<span class="size">' + attachment.sizeof + '</span></span>' +
            //          '<span class="desc">' + attachment.sizeof + '</span>' +
            //          '</span></a>');
            
            tag.replaceWith(
               '<span class="attachskin">' +
                   '<button type="button" class="btnattact" onclick="window.open(\'' + attachment.url + '\');return false;">' +
                       (UE.browser.ie && UE.browser.version < 10?
                       '<span class="attachment ' + ext + '" _id="' + tag.attr('key') + '" resource="attachment" title="' + attachment.title + '">'
                       :
                       '<a class="attachment ' + ext + '" _id="' + tag.attr('key') + '" href="' + attachment.url + '" resource="attachment" title="' + attachment.title + '" target="_blank">'
                       ) +
                           '<span class="info">' +
                               '<span class="title"><span class="name">' + attachment.name + '</span><span class="ext">' + attachment.type + '</span><span class="c"></span></span>' +
                               '<span class="desc">' + attachment.sizeof + '</span>' +
                           '</span>' +
                       (UE.browser.ie && UE.browser.version < 10? '</span>' : '</a>') +
                   '</button>' +
               '</span>'
            );
           
           //attachment.ext = ext;
           //attachment._type = lenoteTag.validType(attachment.title, attachment._type);
           //tag.replaceWith(lenoteTag.getTag(attachment, tag.attr('key')));
        },
        //ln-text中可能存在其它自定义标签需要迭代处理
        buildText: function(tag){
            if(/^\s*<br\s*\/?>\s*$/igm.test(tag.html())) return '<br/>';
            var id = '_text_' + this.getID(tag), tags = tag.find('[type_="photo"], [type_="audio"], [type_="text"]');
            for(var i = 0; i < tags.length; i++) this.build($(tags[i]));
            return '<span resource="text" _id="' + tag.attr('key') + '" id="' + id + '">' + tag.html() + '</span>';
        },
        buildPhoto: function(tag, resource, width){
            resource = resource || this.getResource(tag.attr('key')), width = width || this.width;
            var id = '_photo_' + this.getID(tag);
            
            if((typeof resource == 'object' && resource.url)){
                var _data = tag.attr('_data'), src = resource.url;
                try{
                    _data = _data? UE.utils.html(Base64.decode(_data)) : '';
                }catch(e){
                    _data = '';
                }
                //因此时this.doc还未append到body中(还在memory中)，所以此时修改的图片宽高是不准确的，且不能在监听的事件中修改图片属性，所以迁移至parser_api.js，以后parser.js也会先创建一visibility为hidden的元素然后将this.doc append到其中再修改
                //之所以在onload中修改图片宽度无效，是因为触发onload事件时只是修改了内存中的this.doc，而编辑区域显示的this.doc已经在之前就返回并写入body了所以发现修改属性时无效，这是异步导致的bug
                //if(width != -1){
                //    //设置图片的高宽
                //    var w = parseInt(width - 25), h = w * (4 / 3);
                //    try{
                //        var image_temp = new Image();
                //        image_temp.onload = function(){
                //            if(this.width > w || this.width == 0){
                //                if((this.width != 0) && (this.width == this.height)) h = w;
                //            }else{
                //                w = this.width, h = this.height;
                //            }
                //            $('#' + id).css({width: w + 'px', height: h + 'px'});
                //        };
                //        image_temp.src = src;
                //        if(image_temp.width > w || image_temp.width == 0){
                //            if((image_temp.width != 0) && (image_temp.width == image_temp.height)) h = w;
                //        }
                //        image_temp = null;
                //    }catch(e){}
                //}
                var img = '<img resource="image" id="' + id + '" _id="' + tag.attr('key') + '" class="photo" src="' + src + '"' +
                                //((width != -1)? (' style="width:' + w + 'px;height:' + h + 'px;"') : '') +
                                ((width != -1)? (' _w="' + parseInt(width - 25) + '"') : '') +
                                ' onerror="this.src=\'/assets/images/parser/img404.png\'" ' + _data + '/>';
            }else{
                var img = '<img resource="image" id="' + id + '" _id="' + tag.attr('key') + '" class="photo" src="/assets/images/parser/img404.png"/>';
            }
            return img;
        },
        buildAudio: function(tag){
            var resource = this.getResource(tag.attr('key'));
            if(typeof resource != 'object') return tag.clone();
            
            //var audio = $('<div class="audio"></div>'), _url = /^https?:\/\//i.test(resource.url)? resource.url : utils.getDomain() + resource.url,
            //     res = ['<div class="audio-play noselect" play="0" resource="audio" id="' + '_audio_' + this.getID(tag) + '" _id="' + tag.attr('key') + '" url="' + _url + '" onselectstart="return false;" unselectable="on">'];
            //res.push('<div class="info">');
            //res.push('<div class="title ellipsis clearfix" title="' + resource.title + '"><span class="name ellipsis">' + resource.name + '</span><span class="ext">' + resource.type + '</span></div>');
            //res.push('<div class="desc ellipsis">');
            ////res.push('<span class="size">' + resource.sizeof + '</span><span class="duration">' + this.playTimeFormat(resource.fullTime) + '</span>');
            //res.push('<span class="size">' + resource.sizeof + '</span>');
            //if(resource.fullTime) res.push('<span class="duration">' + this.playTimeFormat(resource.fullTime) + '</span>');
            //res.push('</div></div></div>');
            //
            //return audio.html(res.join(''));
            
            var audio = $('<span class="attachskin audioskin preview"></span>'),
                  _url = /^https?:\/\//i.test(resource.url)? resource.url : utils.getDomain() + resource.url,
                  //res = ['<button type="button" class="btnattact" onclick="return false;">'];
                  res = ['<span class="btnattact">'];
            res.push('<div class="audio">');
            res.push('<div class="audio-play" play="0" resource="audio" id="' + '_audio_' + this.getID(tag) + '" _id="' + tag.attr('key') + '" url="' + _url + '">');
            res.push('<div class="info">');
            res.push('<div class="title ellipsis clearfix" title="' + resource.title + '"><span class="name ellipsis">' + resource.name + '</span><span class="ext">' + resource.type + '</span></div>');
            res.push('<div class="desc ellipsis">');
            res.push('<span class="size">' + resource.sizeof + '</span>');
            if(resource.fullTime) res.push('<span class="duration">' + this.playTimeFormat(resource.fullTime) + '</span>');
            //res.push('</div></div></div></div></button>');
            res.push('</div></div></div></div></span>');
            
            return audio.html(res.join(''));
        },
        
        buildMixText: function(tag){
            if(/^\s*<br\s*\/?>\s*$/igm.test(tag.html())) return this.buildMixPlain($(tag.html()));
            var resource = this.getResource(tag.attr('key')), startTime = -1;
            if(typeof resource == 'object') startTime = resource.startTime;
            
            var text = $('<div class="item clearfix text" time="' + startTime + '"></div>');
            text.html('<div class="timeline"><img class="icon" src="/assets/images/parser/text_normal.png"/></div>' + 
                          '<div class="content" style="width:' + this.width + 'px;">' + tag.html() + '</div>');
            
            //修改内部img的宽高
            this.resetSize(text, this.width);
            return text;
        },
        resetSize: function(tag, width){
            var imgs = tag.find('img.photo');
            for(var i = 0; i < imgs.length; i++){
                this.setImgSize($(imgs[i]), width);
            }
        },
        setImgSize: function(img, width){
            //var image_temp = new Image(), w = parseInt(width - 25), h = w * (4 / 3);
            //image_temp.onload = function(){
            //    if(this.width > w || this.width == 0){
            //        if((this.width != 0) && (this.width == this.height)) h = w;
            //    }else{
            //        w = this.width, h = this.height;
            //    }
            //    $('#' + img.attr('id')).css({width: w + 'px', height: h + 'px'});
            //};
            //image_temp.src = img.attr('src');
            //if(image_temp.width > w || image_temp.width == 0){
            //    if((image_temp.width != 0) && (image_temp.width == image_temp.height)) h = w;
            //    img.css({width: w + 'px', height: h + 'px'});
            //}
            //image_temp = null;
            //$('#' + img.attr('id')).attr('_w', parseInt(width - 25));
            img.attr('_w', parseInt(width - 25));
        },
        buildMixPlain: function(tag){
            var plain = $('<div class="item clearfix plain"></div>');
            plain.html('<div class="content" style="width:' + this.width + 'px;"></div>');
            plain.find('.content').append(tag.clone());
            //plain.find('.content').append($('<div></div>').append(tag.clone()).html());
            
            //修改内部img的宽高
            this.resetSize(plain, this.width);
            return plain;
        },
        buildMixPhoto: function(tag){
            var resource = this.getResource(tag.attr('key')), img = this.buildPhoto(tag, resource, this.width),
                  startTime = -1;
            if(typeof resource == 'object') startTime = resource.startTime;
            
            var photo = $('<div class="item clearfix photo" time="' + startTime + '"></div>');
            photo.html('<div class="timeline"><img class="icon" src="/assets/images/parser/image_normal.png"/></div>' + 
                       '<div class="content" style="width:' + this.width + 'px;">' + img + '</div>');
            return photo;
        },
        buildPhotoGroup: function(photos, phototime){
            var photo = $('<div class="item clearfix photo" time="' + phototime + '"></div>'), res = '';
            
            for(var i in photos){
                //res += $('<div></div>').append(this.buildPhoto(photos[i], null, this.width).clone()).html();
                res += this.buildPhoto(photos[i], null, this.width);
            }
            
            photo.html('<div class="timeline"><img class="icon" src="/assets/images/parser/image_normal.png"/></div>' + 
                       '<div class="content" style="width:' + this.width + 'px;">' + res + '</div>');
            return photo;
        },
        buildMixAudio: function(tag, mix_id){
            var resource = this.getResource(tag.attr('key'));
            if(!resource) return tag.clone();
            
            var id = '_audio_' + tag.attr('mkey') + '_' + this.getID(tag), _id = tag.attr('key'), _url = /^https?:\/\//i.test(resource.url)? resource.url : utils.getDomain() + resource.url,
                audio = $('<div class="item clearfix audio" time="0" audio="' + id + '"></div>');
            
            var bw = this.mix_tag_width, bh = parseInt(bw / 3.2), pwh = parseInt(bw / 5.1),
                pt = parseInt(pwh / 3.3), il = pwh + 20, it = parseInt(bh / 2 - 18), tw = bw - il - 30;
            
            //var res = ['<div class="timeline"><img class="icon" src="/assets/images/parser/audio_normal.png"/></div>'];
            //res.push('<div class="content">');
            //res.push('<div class="audio-play noselect" play="0" belong="' + mix_id + '" id="' + id + '" _id="' + _id + '" url="' + _url + '">');
            //res.push('<div class="info">');
            //res.push('<div class="title ellipsis clearfix" title="' + resource.title + '"><span class="name ellipsis">' + resource.name + '</span><span class="ext">' + resource.type + '</span></div>');
            //res.push('<div class="desc ellipsis">');
            ////res.push('<span class="size">' + resource.sizeof + '</span><span class="duration">' + this.playTimeFormat(resource.fullTime) + '</span>');
            //res.push('<span class="size">' + resource.sizeof + '</span>');
            //if(resource.fullTime) res.push('<span class="duration">' + this.playTimeFormat(resource.fullTime) + '</span>');
            //res.push('</div></div></div></div>');
            
            var res = ['<div class="timeline"><img class="icon" src="/assets/images/parser/audio_normal.png"/></div>'];
            res.push('<div class="content">');
            
            res.push('<span class="attachskin audioskin preview">');
            //res.push('<button type="button" class="btnattact" onclick="return false;">');
            res.push('<div class="btnattact">');
            
            res.push('<div class="audio-play" play="0" belong="' + mix_id + '" id="' + id + '" _id="' + _id + '" url="' + _url + '">');
            res.push('<div class="info">');
            res.push('<div class="title ellipsis clearfix" title="' + resource.title + '"><span class="name ellipsis">' + resource.name + '</span><span class="ext">' + resource.type + '</span></div>');
            res.push('<div class="desc ellipsis">');
            res.push('<span class="size">' + resource.sizeof + '</span>');
            if(resource.fullTime) res.push('<span class="duration">' + this.playTimeFormat(resource.fullTime) + '</span>');
            res.push('</div></div></div>');
            
            //res.push('</button></span>');
            res.push('</div></span>');
            res.push('</div>');
            
            audio.html(res.join(''));
            return audio;
        },
        
        buildMix: function(tag, mix_id){
            if(!tag.get(0).tagName || tag.get(0).nodeName.toLowerCase() == '#text'){
                var _wrap = $('<div></div>').append($('<div></div>').append(tag.clone()));
            }else{
                var _wrap = $('<div></div>').append(tag.clone());
            }
            var _tag = _wrap.children().first();
            switch((tag.attr('type_') || tag.get(0).nodeName).toLowerCase()){
                case 'text': _tag.replaceWith(this.buildMixText(tag));break;
                case 'photo': _tag.replaceWith(this.buildMixPhoto(tag));break;
                case 'audio': _tag.replaceWith(this.buildMixAudio(tag, mix_id));break;
                default: _tag.replaceWith(this.buildMixPlain(tag));
            }
            return _wrap.html();
        },
        
        //解析mix元素
        analyzeMix: function(){
             var tags = this.doc.find('[mkey]'), last_mkey = null, mix = null, result = [];
             for(var i = 0; i < tags.length; i++){
                var tag = $(tags[i]);
                if(last_mkey == tag.attr('mkey')) continue;
                
                //创建mix元素
                last_mkey = tag.attr('mkey'), mix = $('<div id="' + '_mix_' + this.getID(tag) + '" _id="' + last_mkey + '" class="mix"></div>');
                mix.html('<div class="top-bg"></div><div class="wrap"></div><div class="bottom-bg"></div>');
                var mixWrap = mix.find('.wrap');
                
                var photos = [], phototime = 0;
                
                if(tag.attr('type_').toLowerCase() == 'photo'){
                    photos.push(tag);
                    try{
                        phototime = this.getResource(tag.attr('key')).startTime;
                    }catch(e){
                        phototime = -1;
                    }                    
                }else{
                    mixWrap.append(this.buildMix(tag.clone(), mix.attr('id')));
                }
                
                //var _tag = tag.next();
                var _tag = $(tag.get(0).nextSibling || tag.get(0).nextElementSibling);
                while(true){
                    if(_tag && _tag.length > 0){
                        var the_double = _tag.clone(), _key = Date.parse(new Date()) + Math.ceil(Math.random() * 100) + '' + i,
                              tagName = the_double.get(0).nodeName.toLowerCase();
                        
                        //通过人为的为普通元素添加key属性方便查找其后是否有last_mkey的兄弟元素
                        if(!_tag.get(0).tagName || _tag.get(0).nodeName.toLowerCase() == '#text'){
                            _tag.replaceWith($('<div _text_node_identifying="note_identifying_for_text_node"></div>').append(_tag.clone()));
                            _tag = this.doc.find('div[_text_node_identifying="note_identifying_for_text_node"]');
                            if(!_tag || _tag.length == 0) continue;
                        }
                        //if(_tag && _tag.length > 0 && !_tag.attr('key')) _tag.attr('key', _key);
                        if(_tag && _tag.length > 0 && !_tag.attr('key')) _tag.attr({key: _key, tmpkey: 1});
                    }
                    
                    //查看是否还有同类mix元素
                    if(_tag && _tag.length > 0 && (!_tag.attr('mkey') || _tag.attr('mkey') == last_mkey) && (_tag.attr('mkey') || this.isAcross(_tag, last_mkey))){
                        _tag.removeAttr('_text_node_identifying');
                        if(_tag.attr('type_') && _tag.attr('type_').toLowerCase() == 'photo'){
                            try{
                                var _phototime = this.getResource(the_double.attr('key')).startTime;
                            }catch(e){
                                var _phototime = -1;
                            }
                            if(phototime == 0 || phototime == _phototime){
                                photos.push(the_double);
                                if(phototime == 0) phototime = _phototime;
                            }else{
                                if(photos.length > 0){
                                    mixWrap.append(this.buildPhotoGroup(photos, phototime));
                                }
                                photos = [the_double], phototime = _phototime;
                            }
                        }else{
                            if(photos.length > 0){
                                mixWrap.append(this.buildPhotoGroup(photos, phototime));
                                photos = [], phototime = 0;
                            }
                            
                            mixWrap.append(this.buildMix(the_double, mix.attr('id')));
                        }
                        _tag.attr('delete', true);
                        _tag = $(_tag.get(0).nextSibling || _tag.get(0).nextElementSibling);
                    }else{
                        if(photos.length > 0){
                            mixWrap.append(this.buildPhotoGroup(photos, phototime));
                            photos = [], phototime = 0;
                        }
                        if(_tag && _tag.length > 0 && _tag.attr('_text_node_identifying')){
                            _tag.replaceWith(the_double);
                        }else if(_tag && _tag.length > 0 && _tag.attr('tmpkey')){
                            _tag.removeAttr('tmpkey');
                            _tag.removeAttr('key');
                        }
                        break;
                    }
                }
                
                mix = $('<div></div>').append('<div class="c"><br/></div>', mix, '<div class="c"><br/></div>').html();
                result.push({tag: tag, mix: mix});
                
                mix = null, _tag = null;
             }
             
             //删除原始的mix元素
             tags = this.doc.find('[delete="true"]');
             for(var i = 0; i < tags.length; i++) $(tags[i]).remove();
             
             for(var i in result){
                 var item = result[i];
                 item.tag.replaceWith(item.mix);
             }
             
             result = null;
        },
        ending: function(){
            var plain = this.doc.find('.mix .item.plain .content');
            for(var i = 0; i < plain.length; i++){
                var item = $(plain[i]);
                if($.trim(item.html()) == '' || /^\s*<br\s*\/?>\s*$/igm.test(item.html())) item.closest('.item.plain').remove();
            }
            //替换时间相同的mix元素为普通元素
            var mixes = this.doc.find('div.mix .wrap');
            for(var i = 0; i < mixes.length; i++){
                var mix = $(mixes[i]), items = mix.children('.item:not(.plain)');
                for(var j = 0; j < items.length; j++){
                    var item = $(items[j]), sec = item.attr('time');
                    if(/^\d+$/.test(sec)){
                        var siblings = item.nextAll('.item[time=' + sec + ']');
                        if(siblings.length > 0){
                            //siblings.addClass('plain').removeClass('photo').removeClass('audio').removeClass('text');
                            siblings.attr('class', 'item clearfix plain').removeAttr('time').children('div.timeline').remove();
                        }
                    }
                }
            }
        }
    };
    
    /*
     * 解析策略
     * 1. 如果在普通元素中存在mix(即mix元素嵌套在普通元素中)则当成普通元素解析, 防止因时间轴的原因破坏了文档格式
     * 2. 如果两个mix元素交叉，则交叉的部分将被当成普通元素解析
     * 3. 单种类的mix元素将当成普通标签解析, 如全部是ln-photo标签的mix将当成普通元素
     * 解析步骤
     * 1. 检查自定义标签是否是mix元素
     * 2. 将不符合mix解析策略的自定义标签替换成普通元素
     * 3. 按顺序解析各mix
     * 4. 设置mix之间的普通元素的样式：内容宽度及其中图片的样式
     * 事件监听
     * 1. mix事件
     * 2. 普通元素的事件: 音频播放、附件下载
     */
    //初始化UI
    analyze.resolve = function(html){
        try{
            var _parser = new Parser(html);
            return _parser.dispose();
        }catch(e){
            return html;
        }
    };
})();/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();/*
 *  author: gejian1@lenovo.com
 *  description: 笔记内容过滤及转换
 */

var lenoteAnalyze = {};
(function(){
    var image = {
        encode: function(dom){
            var _data = '';
            if(dom.attr('style')) _data += 'style="' + dom.attr('style') + '" ';
            if(dom.attr('title')) _data += 'title="' + dom.attr('title') + '" ';
            if(dom.attr('width')) _data += 'width="' + dom.attr('width') + '" ';
            if(dom.attr('height')) _data += 'height="' + dom.attr('height') + '" ';
            if(dom.attr('border')) _data += 'border="' + dom.attr('border') + '" ';
            if(dom.attr('hspace')) _data += 'hspace="' + dom.attr('hspace') + '" ';
            if(dom.attr('vspace')) _data += 'vspace="' + dom.attr('vspace') + '" ';
            if(dom.attr('alt')) _data += 'alt="' + dom.attr('alt') + '" ';
            _data = _data? ' _data="' + Base64.encode(UE.utils.unhtml(_data)) + '"' : '';
            return '<ln-photo key="' + dom.attr('key') + '"' + _data + '></ln-photo>';
        },
        decode: function(dom){
            var attachment = lenoteDom.editor.data.attachments.get(dom.attr('key'));
            //if(!attachment) return dom;
            if(attachment){
                if(lenoteTag.isSupportForWeb(attachment._type) == 'image'){
                    var _data = dom.attr('_data');
                    try{
                        _data = _data? UE.utils.html(Base64.decode(_data)) : '';
                    }catch(e){
                        _data = '';
                    }
                    return '<img resource="image" key="' + dom.attr('key') + '" src="' + attachment.url + '" onerror="this.src=\'/assets/images/img404.png\'" ' + _data + '/>';
                }else{
                    return lenoteTag.getTag(attachment, dom.attr('key'));
                }
            }else{
                return '<img resource="image" key="' + dom.attr('key') + '" src="/assets/images/img404.png"/>';
            }
        }
    };
    var attachment = {
        encode: function(dom){
            //dom.nextAll('br').remove();
            dom.next('br').remove();
            //根据附件的_type类型来将其它设备(android)支持的附件标签转为相应自定义标签，如图片形式的附件或wav的音频附件等
            //保存时需要判断该附件在其它设备上是否支持，如支持则需要转成相应的自定义标签(如wav的音频android是支持这种格式的，所以保存时需要转成ln-audio，但在web上却不支持需要显示成附件形式)
            var attachment = lenoteDom.editor.data.attachments.get(dom.attr('key'));
            if(attachment){
                var tag = lenoteTag.validTag(attachment, dom.attr('key'));
                if(tag) return tag;
            }
            return '<ln-attachment key="' + dom.attr('key') + '"></ln-attachment>';
        },
        decode: function(dom){
            var attachment = lenoteDom.editor.data.attachments.get(dom.attr('key'));
            //if(!attachment) return dom;
            if(!attachment) return '';
            //return '<a class="attachment noselect ' + attachment.ext + '" key="' + dom.attr('key') + '" href="' + attachment.url + '" resource="attachment" title="' +
            //          attachment.title + '" onselectstart="return false;" unselectable="on" contentEditable="false" ondragstart="return false" target="_blank">' +
            //          '<span class="info">' +
            //          '<span class="title"><span class="name">' + attachment.name + '</span><span class="ext">' + attachment.type + '</span><span class="c"></span></span>' +
            //          //'<span class="desc"><span class="ctime">' + attachment.utime + '</span>,<span class="size">' + attachment.sizeof + '</span></span>' +
            //          '<span class="desc">' + attachment.sizeof + '</span>' +
            //          //'</span></a><br/>';
            //          '</span></a>';
           return lenoteTag.getTag(attachment, dom.attr('key'));
        }
    };
    var audio = {
        encode: function(dom){
            return '<ln-audio key="' + dom.attr('key') + '"></ln-audio>';
        },
        decode: function(dom){
            var resource = lenoteDom.editor.data.attachments.get(dom.attr('key'));
            //if(!resource) return dom;
            if(!resource) return '';
            //var audio = $('<div class="audio noselect" resource="audio" key="' + dom.attr('key') + '" onselectstart="return false;" unselectable="on" contentEditable="false" ondragstart="return false"></div>'),
            //      res = ['<div class="audio-play" play="0" id="' + utils.uuid('_audio_') + '_' + resource.local_id + '" _id="' + resource.local_id + '" url="' + resource.url + '">'];
            //res.push('<div class="info">');
            //res.push('<div class="title ellipsis clearfix" title="' + resource.title + '"><span class="name ellipsis">' + resource.name + '</span><span class="ext">' + resource.type + '</span></div>');
            //res.push('<div class="desc ellipsis">');
            ////res.push('<span class="size">' + resource.sizeof + '</span><span class="duration">' + utils.playTimeFormat(resource.fullTime) + '</span>');
            //res.push('<span class="size">' + resource.sizeof + '</span>');
            //if(resource.fullTime) res.push('<span class="duration">' + utils.playTimeFormat(resource.fullTime) + '</span>');
            //res.push('</div></div></div>');
            //return audio.html(res.join(''));
            
            return lenoteTag.getTag(resource, dom.attr('key'));
        }
    };
    //需要递归处理-包含其它自定义标签时
    var text = {
        encode: function(dom){
            if(/^\s*<br\s*\/?>\s*$/.test(dom.html())) return '<br/>';
            return '<ln-text key="' + dom.attr('key') + '">' + dom.html() + '</ln-text>';
        },
        decode: function(dom){
            if(/^\s*<br\s*\/?>\s*$/.test(dom.html())) return '<br/>';
            //解决ie下不能查找带-的自定义标签
            if(UE.browser.ie){
                var resources = dom.find('[key]');
            }else{
                var resources = dom.find('ln-attachment, ln-photo, ln-text, ln-audio');
            }
            
            $.each(resources, function(i, r){
               tags_decode(r);
            });
            return '<span resource="text" key="' + dom.attr('key') + '">' + dom.html() + '</span>';
        }
    };
    
    //转换自定义标签为普通标签
    var tags_decode = function(dom){
        var _r = $(dom), tagName = dom.tagName.toLowerCase();
        switch(tagName){ //r.nodeName.toLowerCase()
            case 'ln-attachment': _r.replaceWith(attachment.decode(_r));break;
            case 'ln-photo': _r.replaceWith(image.decode(_r));break;
            case 'ln-text': _r.replaceWith(text.decode(_r));break;
            case 'ln-audio': _r.replaceWith(audio.decode(_r));break;
            case 'ln-video': break;
        }
    };
    
    //过滤onclick及javascript:
    var filterTo = function(html){
        //删除禁止的标签、属性/事件、成对的空标签、多余的空格/tab符
        var inhibitTag = 'script|applet|html|frame|frameset|head|iframe|link|meta|marquee|noframes|noscript|object|param|xml';
        //html = html.replace(new RegExp('<(' + inhibitTag + ').*?>.*?</(' + inhibitTag + ')>', 'igm'), '')
        //           .replace(/(<[^>]*?\s)on[^>\s'"=]*?\s*=\s*(["'\s]?[^>/"'\s]*["'\s]?)?([^>]*?>)/igm, '$1$3')
        //           .replace(/<[^>]+?>(\s|&nbsp;)*?<\s*\/[^>]+?>/igm, '');
        //var pattern = /(<[^>]*?\s)(on|dynsrc|data|accesskey|tabindex)[^>\s'"=]*?\s*=\s*(["'\s]?[^>\/"'\s]*["'\s]?)?([^>]*?>)/igm;
        var pattern = /(<[^>]*?\s)(on|dynsrc|data|accesskey|tabindex)[^>\s'"=]*?\s*=[^>]*?(?="\s|\/?>)/igm;
        while(pattern.test(html)){
            //html = html.replace(pattern, '$1$4');
            html = html.replace(pattern, function(){
                if(arguments.length > 1){
                    //return arguments[1].replace(/\s+"$/, '');
                    return arguments[1] + '!DELMark!';
                }else{
                    return arguments[0];
                }
            });
        }
        html = html.replace(/!DELMark!(\s?")?/, '')
                   .replace(new RegExp('<(' + inhibitTag + ').*?>.*?</(' + inhibitTag + ')>', 'igm'), '')
                   //.replace(/<[^>\/]+?>(\s|&nbsp;)*?<\s*\/[^>]+?>/igm, '').replace(/\s+/igm, ' ');
                   //.replace(/<(?!\s*\/)[^>]+?>(\s|&nbsp;)*?<\s*\/[^>]+?>/igm, '').replace(/\s+/igm, ' '); //删除空标签时暂时无法分辨<img src=...></p>不同标签的空标签情况
                   .replace(/\s+/igm, ' ');
        
        var dom = $('<div id="domwrap">' + html + '</div>');
        dom.find('[href*=javascript], [href*=vbscript]').not('[href="javascript:;"]').removeAttr('href');
        //dom.find('[onclick], [onload], [onunload], [onchange], [onsubmit], [onreset], [onselect], [onblur], [onfocus], [onabort], [ondblclick], [onmousedown], [onmousemove], [onselectstart]' +
        //               '[onmouseout], [onmouseover], [onmouseup], [onerror], [onresize], [onscroll]').not('[onselectstart="return false;"]').removeAttr('onclick').removeAttr('onload')
        //               .removeAttr('onsubmit').removeAttr('onreset').removeAttr('onselect').removeAttr('onblur').removeAttr('onfocus').removeAttr('onabort').removeAttr('ondblclick')
        //               .removeAttr('onmousemove').removeAttr('onmousemove').removeAttr('onmouseout').removeAttr('onmouseover').removeAttr('onmouseup').removeAttr('onerror')
        //               .removeAttr('onresize').removeAttr('onscroll').removeAttr('onselectstart').removeAttr('onunload').removeAttr('onchange');
        return dom;
    };
    
    var handle_text_tag = function(html){
        //将ln-text转换成系统标签
        var types = 'attachment|photo|text|audio|video',
            html = html.replace(new RegExp('<\s*?(ln)-(' + types + ')', 'gim'), function(str){
                return '<span type_="' + arguments[2].toLowerCase() + '"';
            }).replace(new RegExp('<\/(ln)-(' + types + ')>', 'gim'), '</span>');
        
        var _doc = $('<div></div>');
        _doc.append(html);
        
        //将ln-text中的自定义标签及img移至ln-text后面
        function sortout_text(){
            var tags = _doc.children('span[type_="text"]'), isRecursion = false;
            
            for(var i = 0; i < tags.length; i++){
                var tag = $(tags[i]), tmp = tag.find('[type_="attachment"], [type_="photo"], [type_="text"], [type_="audio"], [type_="video"], img');
                
                if(tmp.length > 0){
                    isRecursion = true;
                    for(var j = tmp.length - 1; j >= 0; j--){
                        $(tmp[j]).insertAfter(tag);
                    }
                }
            }
            
            if(isRecursion){
                return arguments.callee();
            }else{
                return _doc;
            }
        }
        
        sortout_text();
        
        //恢复被替换的ln-text/ln-photo等标签并删除空白或只包含&nbsp;、<br>、空标签的ln-text
        var tags = _doc.find('[type_="attachment"], [type_="photo"], [type_="text"], [type_="audio"], [type_="video"]');
        for(var i = 0; i < tags.length; i++){
            var tag = $(tags[i]), key = tag.attr('key');
            if(!key){
                tag.remove();
                continue;
            }
            switch(tag.attr('type_').toLowerCase()){
               case 'attachment': tag.replaceWith('<ln-attachment key="' + key + '"></ln-attachment>');break;
               case 'photo': var _data = tag.attr('_data')? (' _data="' + tag.attr('_data') + '"') : ''; tag.replaceWith('<ln-photo key="' + key + '"' + _data + '></ln-photo>');break;
               case 'text':
                  var _content = tag.html().replace(/<[^>]+>/igm, '');
                 if(/^(&nbsp;|<[\s\/]*br[\s\/]*>|\s*)*$/igm.test(_content)){
                    tag.remove();
                 }else{
                    tag.replaceWith('<ln-text key="' + key + '">' + tag.html() + '</ln-text>');
                 }
                 break;
               case 'audio': tag.replaceWith('<ln-audio key="' + key + '"></ln-audio>');break;
               case 'video': tag.replaceWith('<ln-video key="' + key + '"></ln-video>');break;
            }
        }
        
        //return _doc.html().replace(/<\s*ln-text[^>]*?>(&nbsp;|<[\s\/]*br[\s\/]*>|\s*)*<\/ln-text>/igm, '');
        return _doc.html();
    };
    
    var handle_attachskins = function(dom){
        var attachskins = dom.find('span.attachskin'), isRecursion = false;
        for(var i = 0; i < attachskins.length; i++){
            var attachskin = $(attachskins[i]), isRecursion = attachskin.children('span.attachskin').length > 0,
                 _content = $.trim(attachskin.html().replace(/&nbsp;/igm, ''));
            _content? attachskin.replaceWith(_content) : attachskin.remove();
            if(isRecursion) break;
        }
        if(isRecursion){
            arguments.callee(dom);
        }else{
            return true;
        }
    };
    
    lenoteAnalyze.encode = function(html){
       var dom = filterTo(html);
        //test: lenoteAnalyze.encode(lenoteDom.editor.editor.getContent())
        var resources = dom.find('[resource]');
        $.each(resources, function(i, r){
           var _r = $(r);
           switch(_r.attr('resource')){
               case 'attachment': _r.replaceWith(attachment.encode(_r));break;
               case 'image': _r.replaceWith(image.encode(_r));break;
               case 'text': _r.replaceWith(text.encode(_r));break;
               case 'audio': _r.replaceWith(audio.encode(_r));break;
               case 'video': break;
           }
        });
        
        //删除附件外包装：attachskin
        var attachskins = dom.find('span.attachskin');
        if(attachskins.length > 0){
            //for(var i = 0; i < attachskins.length; i++){
            //    var attachskin = $(attachskins[i]), btnattact =attachskin.children('button.btnattact'),
            //         _content = $.trim(btnattact.html());
            //    if(_content){
            //        //attachskin.replaceWith(_content);
            //        btnattact.replaceWith(_content);
            //    }else{
            //        attachskin.remove();
            //    }
            //}
            //递归处理附件外包装
            handle_attachskins(dom);
            var btnattacts = dom.find('button.btnattact');
            for(var i = 0; i < btnattacts.length; i++){
                var btnattact = $(btnattacts[i]), _content = $.trim(btnattact.html());
                _content? btnattact.replaceWith(_content) : btnattact.remove();;
            }
            dom.find('span.attachskin, button.btnattact').remove();
        }
        
        //删除baidu自定义标签:baidu_bookmarks
        var baidu_bookmarks = dom.find('[id^=_baidu_bookmark_]');
        if(baidu_bookmarks.length > 0){
            for(var i = 0; i < baidu_bookmarks.length; i++){
                //var baidu_bookmark = $(baidu_bookmarks[i]), _contect = $.trim(baidu_bookmark.html());
                //_content? baidu_bookmark.replaceWith(_content) : baidu_bookmark.remove();
                //不使用上面的判断是为了解决在ie下编辑器书签是有内容的: &zwj;
                $(baidu_bookmarks[i]).remove();
            }
        }
        
        //还原顶级自定义标签元素的层级关系
        var all_p = dom.children('p');
        if(all_p.length > 0){
            for(var i = 0; i < all_p.length; i++){
                var p = $(all_p[i]), tags = p.children('[key]');
                if(tags.length > 0){
                    var isReplace = false;
                    for(var j = 0; j < tags.length; j++){
                        var tag = $(tags[j]), resource = lenoteDom.editor.data.attachments.get(tag.attr('key'));
                        //if(resource && resource.mixLocalID){ //仅mix元素才提升其等级
                        if(resource){
                            isReplace = true;
                            break;
                        }
                    }
                    
                    if(isReplace) p.replaceWith(p.html());
                }
            }
        }
        
        //return dom.html().replace(/(<p><br\s*?\/?><\/p>)+$/igm, '').replace(/[^<\s]*?=""/igm, '');
        var _html = handle_text_tag(dom.html());
        //return _html.replace(/(<p><br\s*?\/?><\/p>)+$/igm, '').replace(/[^<\s]*?=""/igm, '');
        //_html = _html.replace(/(<p><br\s*?\/?><\/p>)+$/igm, '').replace(/[^<\s]*?=""/igm, '');
        _html = _html.replace(/(<p>(<br\s*?\/?>)*<\/p>)+$/igm, '').replace(/[^<\s]*?=""/igm, '');
        //删除自定义标签后面的紧跟的br
        _html = _html.replace(/(<\/ln-[^>]+?>)(<br\s*?\/?>)+/igm, '$1').replace(/(<br\s*?\/?>)+(<ln-[^>]+?>)/igm, '$2').replace(/&#8203;/igm, '');
        
        //IE下需要特殊处理的
        if(UE.browser.ie && UE.browser.version < 11){
            if(UE.browser.version == 7) _html = _html.replace(/&nbsp;<\/button><\/span>&nbsp;/igm, '');
            var _types = 'attachment|audio|video';
            _html = _html.replace(new RegExp('(<\/ln-(' + _types + ')[^>]*?>)(&nbsp;)+', 'gim'), '$1').replace(new RegExp('(&nbsp;)+(<ln-(' + _types + ')[^>]*?>)'), '$2');
        }
        return _html;
    };
    
    lenoteAnalyze.decode = function(html, isEdit){
        //编辑与预览时都需要删除空白的ln-text，包括但不限于&nbsp;、空格、tab、br、回车等
        html = html.replace(/<\s*ln-text[^>]*?>(&nbsp;|<[\s\/]*br[\s\/]*>|\r|\n|\s*)*<\/ln-text>/igm, '');
        
        var dom = filterTo(html);
        dom.find('img').attr('onerror', "this.src='/assets/images/img404.png'");
        
        //删除baidu自定义标签:baidu_bookmarks
        var baidu_bookmarks = dom.find('[id^=_baidu_bookmark_]');
        baidu_bookmarks.remove();
        
        //编辑自定义标签需要转换成普通格式
        if(isEdit){
            //解决ie下不能查找带-的自定义标签
            if(UE.browser.ie){
                var resources = dom.find('[key]');
            }else{
                var resources = dom.find('ln-attachment, ln-photo, ln-text, ln-audio, ln-video');
            }
            
            $.each(resources, function(i, r){
               tags_decode(r);
            });
            //var res = dom.html().replace(/(<p><br\s*?\/?><\/p>)+$/igm, '') + '<p><br/></p>';
            var res = dom.html().replace(/(<p><br\s*?\/?><\/p>)+$/igm, '');
            res = res.replace(/<ln-[^>]+?>\s*<\/ln-[^>]+?>/igm, ''); //删除解析失败的自定义标签
        }else{
            //显示时的自定义标签转换(含mix)
            //var res = '<div id="flashcontent" name="flashcontent"></div>' + analyze.resolve(dom.html());
            var res = analyze.resolve(dom.html().replace(/(<p><br\s*?\/?><\/p>)+$/igm, ''))+ '<p><br/></p>';
        }
        return res.replace(/[^<\s]*?=""/igm, '');
    };
})();/*
 *  author: gejian1@lenovo.com
 *  description: 用户对象
 */
(function(){
   //LPS-统一认证平台配置
   var st = {
       url: 'https://passport.lenovo.com/wauthen/gateway',
       realm: 'supernote.lenovo.com',
       vp: 7200
   };
   
   /*
    * 向LPS发送认证请求
    * params:
    *   action: 指定请求的动作类型，如登录、退出等
    *   ctx: LPS的自定义回传参数，用于回调时识别请求的类型
    *  options: 扩展参数
    */
   var connectST = function(action, ctx, options){
       var isLogin = user.checkLogin();
       if(action == 'login' && action == 'register' && isLogin){
           user.redirect();
           return;
       }else if(action == 'resetpwd' && !isLogin){
           user.redirect('/');
           return;
       }
       
       url_parts = utils.componentizeUrl();
       var cb = url_parts.protocol + '://' + url_parts.domain;
       if(url_parts.port) cb += ':' + url_parts.port;
       var params = {'lenovoid.realm': st.realm, 'lenovoid.cb': cb, 'lenovoid.vp': st.vp};
       user.redirect(st.url + '?' + $.param($.extend(params, {'lenovoid.action': action, 'lenovoid.ctx': ctx},  options || {})));
   };
   
   /*
    * 向NS发送请求
    * params:
    *   url: 请求地址
    *   data: 请求参数
    *   callback: 回调函数
    *   is_valid: 处理请求时指示是否需要验证返回的code和status
    */
   var asynRequest = function(url, data, callback, is_valid, header){
       is_valid = (is_valid === false)? false : true;
       header = header || {};
       $.ajax('/account/' + url, $.extend({
           type: "POST", dataType: "json", cache: false,
           contentType:'application/json; charset=utf-8',
           data:  JSON.stringify(data),
           success: function(respose, status){
               var s = is_valid? (status == 'success' && respose.loginStatus != -1 && respose.returnCode == '200') : status;
               callback(s, respose);
           },
           error: function(xhr, msg, eThrow){
               callback(false, msg);
           }
       }, header));
   };
   
   user = {
       import_interval: null,
       user_interval: null,
       
       //检查cookie是否过期
       checkUserStatus: function(){
           if(this.user_interval === null){
               this.user_interval = setInterval(function(){
                   if(!user.getUState('t')){
                       lenoteDom.editor.saved.init();
                       clearInterval(user.user_interval);
                       user.user_interval = null;
                       user.logout();
                   }
               }, 1000 * 60 * 5);
           }
       },
       
       //检查导数据的状态
       importStatus: function(callback, source){
          source = source || 'mk';
          $.ajax('/import/status', {
              type: "POST", dataType: "json", cache: false,
              contentType:'application/json; charset=utf-8',
              headers: {'AuthToken': user.getUState('t'), 'Collect-Data': 'v1/web///web///' + user.getUState('t') + '/web'},
              data:  JSON.stringify({source: source, AuthToken: user.getUState('t')}),
              success: function(respose){callback(respose);},
              error: function(xhr, msg, eThrow){}
          });
       },
       
       importData: function(callback, source){
          source = source || 'mk';
          $.ajax('/import/capture', {
              type: "POST", dataType: "json", cache: false,
              contentType:'application/json; charset=utf-8',
              headers: {'AuthToken': user.getUState('t'), 'Collect-Data': 'v1/web///web///' + user.getUState('t') + '/web'},
              data:  JSON.stringify({source: 'mk', tactics: 'task', AuthToken: user.getUState('t')}),
              success: function(respose){callback(respose);},
              error: function(xhr, msg, eThrow){}
          });
       },
       
       checkImportStatus: function(){
           if(this.import_interval === null){
               this.import_interval = setInterval(function(){
                   user.importStatus(function(respose){
                       if(respose.status === 1) return;
                       clearInterval(user.import_interval);
                       user.import_interval = null;
                       if(respose.status === 2){
                           $.smartDoing({action: 'del', text: '数据导入成功', hold: true});
                       }else{
                           $.smartDoing({action: 'del', text: '数据导入失败，点击<a href="/migrate/mk.html" target="_blank"> 这里 </a>重新导入', statusClass: 'error', hold: true, delay: 5000});
                       }
                   });
               }, 10000);
           }
       },
       
       //获取当前登录用户的相关状态信息
       getUState: function(key){
           var ustate = $.getCookie('UState', true);
           if(ustate && (typeof ustate == 'object')){
               try{
                   return ustate[key];
               }catch(error){
                   return false;
               }
           }else{
               return false;
           }
       },
       
       //clean登录用户的状态信息
       cleanUState: function(isRedir, callback){
          $.removeCookie('UState', {path: '/'});
          $.removeCookie('token', {path: '/'});
          if(typeof callback == 'function'){
              callback();
              if(isRedir){
                  setTimeout(function(){user.redirect('/');}, 800);
              }
          }else if(isRedir){
              this.redirect('/');
          }
       },
       
       /*
        * 检查是否已登录
        * params:
        *   isValid 如果为true将通过向后台发送请求来确认已登录，否则只会检查用户的状态信息来确认是否登录
        *   callback 当isValid为true时的回调函数
        */
       checkLogin: function(isValid, callback){
          if(this.getUState('t')){
              if(isValid){
                  this.getUserInfo(callback);
              }
              return true;
          }
          return false;
       },
       
       /*
        *  获取用户的详细信息
        *  params:
        *     callback  如果传递了回调函数，将在获取用户详情成功后调用该函数
        */
       getUserInfo: function(callback){
          var t = this.getUState('t');
          if(!t){
              if(typeof callback == 'function'){
                  callback(false, 'LenoteToken Not Found');
              }
              return false;
          }
          
          asynRequest('user/info', {}, function(status, respose){
              var isOk = status == 'success' && respose.returnCode == '200';
              if(typeof callback == 'function'){
                  callback(isOk, respose);
              }
          }, false, {headers: {'AuthToken': user.getUState('t'), 'Collect-Data': 'v1/web///web///' + (user.getUState('t') || '') + '/web'}});
       },
       
       //url跳转
       redirect: function(url){
          utils.redirect(url? url : '/notes');
       },
       
       //处理从LPS返回后的回调
       resolveST: function(){
           var params = utils.parseQueryParams();
           if(!params['lenovoid.ctx']) params['lenovoid.ctx'] = 'login'; //解决异常情况下，ctx为空时无法登录的问题
           if(params['lenovoid.action'] && params['lenovoid.ctx'] && params['lenovoid.realm']){
               var ctx = $.trim((typeof decodeURIComponent == 'function')? decodeURIComponent(params['lenovoid.ctx']) : params['lenovoid.ctx']),
                    _ctx = ctx.split('|');
               ctx = _ctx[0];
               var feedback = _ctx[1] || '';
               if(feedback && typeof encodeURI == 'function') feedback = encodeURI(feedback);
               
               if(ctx == 'login' || ctx == 'register'){
                   if(this.checkLogin()){
                       this.redirect(feedback);
                   }else{
                       $.lebox.notify('正在登录，请稍候...');
                       asynRequest('auth/login', {LenovoToken:params['lenovoid.wust'], realm:params['lenovoid.realm'], skipCloud: true}, function(status, respose){
                           if(status){
                               $.setCookie('UState', {
                                  aid: respose.lenovoAccountID, t: respose.leNoteToken,
                                  rcid: respose.rootCategoryID, wust: params['lenovoid.wust'],
                                  on: respose.openAuthName, un: respose.userName,
                                  uid: respose.uid
                               }, true);
                               $.setCookie('token', respose.leNoteToken);
                               user.redirect(feedback);
                           }else{
                               $.lebox.error('登录失败，请刷新后重试！', 800);
                               if(typeof window.listenPageEvent == 'function') window.listenPageEvent();
                           }
                       }, false, {headers: {'Collect-Data': 'v1/web///web////web'}});
                   }
                   return false;
               }else if(ctx == 'resetpwd'){
                   $.lebox.success('密码已修改！', 800);
               }else{
                   $.lebox.notify('正在退出，请稍候...');
                   //this.redirect('/');
                   setTimeout(function(){user.redirect('/');}, 400);
               }
           }
           return true;
       },
       
       //注册
       register: function(){
           connectST('newaccount', 'register');
       },
       
       //登录
       login: function(feedback){
           var ctx = 'login';
           if(feedback){
               ctx += '|' + feedback; 
               ctx = (typeof encodeURIComponent == 'function')? encodeURIComponent(ctx) : ctx;
           }
           connectST('uilogin', ctx);
       },
       
       //重置密码
       resetpwd: function(){
           connectST('resetpassword', 'resetpwd');
       },
       
       /*
        * 退出
        */
       logout: function(){
           var t = this.getUState('t');
           //if(!t) return;
           asynRequest('auth/logout', {}, function(status, respose){
               user.cleanUState();
               connectST('uilogout', 'logout');
           }, true, {headers: {accountToken: t, 'Collect-Data': 'v1/web///web///' + (t || '') + '/web'}});
       }
   };
}());/*
 *  author: gejian1@lenovo.com
 *  description: lenote API
 */
(function(){
   /*
    *   全局变量定义
    *      caches:  缓存存储
    *      prefix:   api地址前辍，由服务器中反向代理配置定义
    *      doing:   用于控制同类的ajax请求状态
    */
   var caches = {}, prefix = '/a/', doing = {};
   
   /*
    *   向lenote API请求数据
    *   params:
    *       url:            远程地址
    *       data:         lenote api参数
    *       callback:   请求发送前/返回后的回调参数
    *       useCache: 是否将请求的结果缓存
    *       isMultiple: 是否允许同类请求同时存在，如果为false则同一类请求只能有一个，后面的一个请求会直接被放弃，不会使用队列
    *       key:           ajax请求状态的key，默认是url
    */
   var sendRequest = function(url, data, callback, useCache, isMultiple, key){
       key = key || url;
       if(doing[key] === true && !isMultiple) return;
       
       //调用回调函数中的初始化函数
       if(typeof callback.init == 'function'){
           callback.init();
       }
       
       //缓存处理
       if(useCache && caches[url]){
           return caches[url];
       }else if(caches[url]){
           delete caches[url];
       }
       
       doing[key] = true;
       
       $.ajax((key == 'note/search'? '' : prefix) + url, {
           data:  JSON.stringify(data),
           beforeSend: function(xhr){
               if(typeof callback.before == 'function') callback.before();
           },
           success: function(respose, status){
                if(status == 'success' && respose.returnCode == '200'){
                    if(useCache) caches[url] = respose;
                    if(typeof callback.success == 'function') callback.success(respose);
                }else{
                    if(typeof callback.failure == 'function'){
                        callback.failure(respose);
                    }else{
                        $.lebox.error('数据请求失败，请稍后重试！');
                    }
                }
           },
           complete: function(xhr, status){
               delete doing[key];
               if(typeof callback.complete == 'function') callback.complete(status);
           },
           error: function(xhr, msg){
               if(typeof callback.error == 'function'){
                   callback.error(msg);
               }else{
                   $.lebox.error('数据请求异常，请稍后重试！');
               }
           }
       });
   };
   
   /*
    *   lenote api对象
    *   params:
    *       token:    lenote api token
    */
   lenote = function(token, header){
       //this.token = token;
       //lenote.token = token;
       //ajax全局变量定义
        $.ajaxSetup({
           type: "POST", dataType: "json", cache: false,
           contentType: 'application/json; charset=utf-8',
           headers: $.extend({'AuthToken': token, 'Collect-Data': 'v1/web///web///' + token + '/web'}, header || {})
        });
   };
   
   //lenote api prototype
   lenote.prototype = {       
       //缓存操作
       cache: {
           clean: function(){
               caches = {};
           },
           del: function(key){
               if(caches[key]) delete caches[key];
           },
           get: function(key){
               return caches[key];
           }
       },
       
       //笔记本(组)相关API
       category: {
           //获取所有笔记本(组)列表
           getAll: function(id, isRecursive, callback, useCache){
               if(!id) return;
               //是否递归检索笔记本(组)
               isRecursive = isRecursive? isRecursive : false;
               sendRequest('note/getCategoryList', {categoryID: id, isRecursive: isRecursive}, callback, useCache);
           },
           //添加新笔记本(组)
           add: function(parentId, title, callback){
               /*
                *  params:
                *     categoryLogoId: 用户自选笔记本(组)图标ID
                */
               title = utils.html(title);
               sendRequest('note/addCategory', {categoryName: title, parentCategoryID: parentId, categoryLogoID: 0}, callback);
           },
           //更新笔记本(组)
           update: function(id, title, parentId, version, callback){
               title = utils.html(title);
               sendRequest('note/editCategory', {categoryID: id, categoryName: title, parentCategoryID: parentId, version: version, categoryLogoID: 0}, callback);
           },
           //删除笔记本(组)
           del: function(id, version, callback){
               //version = parseInt(version);
               sendRequest('note/delCategory', {categoryID: id, version: version}, callback);
           }
       },
       
       //星标相关API
       star: {
           /* 设置星标或取消星标 */
          mark: function(id, isMarked, callback){
              if(!id) return false;
              sendRequest('note/mark', {noteID: id, isMarked: isMarked || false}, callback, false, true, 'note/mark/' + id); //同一篇笔记只允许有一个请求存在
          },
           /*
            *   获取所有星标笔记
            *   params:
            *      pagination: 分页
            *      summaryCount: 获取的笔记摘要长度
            *      callback:  回调函数
            */
           getAll: function(pagination, summaryCount, callback){
               if(typeof summaryCount != 'number') summaryCount = 100;
               //note/getNoteList用于将请求状态标识为与获取笔记列表一样，以防星标笔记列表和笔记列表的请求冲突导致页面布局不一致
               sendRequest('note/getMarkedNote', {start: pagination.skip, size: pagination.size, summaryCharCount: summaryCount}, callback, false, false, 'note/getNoteList');
           }
       },
       
       //笔记分享相关API
       share: {
           //创建外链分享
           create: function(id, callback, type, expire){
               if(!id) return;
               type = type || 1, expire = expire || 0;
               sendRequest('share/creatShareLink', {nodeID: id, nodeType: type, expireTime: expire}, callback);
           },
           del: function(key, callback){
               if(!key) return;
               sendRequest('share/deleteShareLink', {linkID: key}, callback);
           },
           get: function(id, callback, type){
               if(!id) return;
               sendRequest('share/getShareLinkId', {nodeID: id, nodeType: type || 1}, callback);
           },
           getContent: function(key, callback, path){
               if(!key) return;
               sendRequest('share/getShareLinkContent', {shareLinkID: key, idPath: path || '.'}, callback);
           },
           getAll: function(pagination, summaryCount, callback){
               if(typeof summaryCount != 'number') summaryCount = 100;
               sendRequest('note/getAllShareNote', {start: pagination.skip, size: pagination.size, summaryCharCount: summaryCount}, callback, false, false, 'note/getNoteList');
           }
       },
       
       //笔记相关API
       note: {
           //获取所有笔记
           getAll: function(pagination, summaryCount, callback){
               if(typeof summaryCount != 'number') summaryCount = 100;
               //同note/getMarkedNote接口，用于标识同类的接口不能同时请求
               sendRequest('note/getAllNote', {start: pagination.skip, size: pagination.size, summaryCharCount: summaryCount}, callback, false, false, 'note/getNoteList');
           },
           //获取笔记本(组)的笔记列表
           getListByCategory: function(cid, pagination, summaryCount, callback, isMultiple){
               if(!cid) return;
               if(typeof summaryCount != 'number') summaryCount = 100;
               sendRequest('note/getNoteList', {categoryID: cid, start: pagination.skip, size: pagination.size, summaryCharCount: summaryCount}, callback, false, isMultiple);
           },
           //搜索
           query: function(q, pagination, callback){
               sendRequest('/q/?' + $.param({q: q}), {start: pagination.skip, size: pagination.size}, callback, false, false, 'note/search');
           },
           //获取笔记
           get: function(id, callback, isMultiple){
               if(!id) return false;
               sendRequest('note/getNote', {noteID: id}, callback, false, isMultiple);
           },
           //增加新笔记
           add: function(cid, title, content, isMarked, attachments, callback, tags, styleType){
               title = $.trim(utils.html(title));
               tags = tags || [];
               styleType = styleType || 0;
               if(!cid || !title) return;
               
               var error_callback = function(respose){
                   if(typeof callback.fail == 'function') callback.fail(respose);
                   //$.lebox.error('不能保存笔记，请手动复制后重试！', 2000);
                   $.smartDoing({action: 'del', text: '保存失败，请手动复制后重试！', statusClass: 'error'});
               };
               var summary = utils.html(utils.strip_tags(content)).substr(0, 100);
               sendRequest('note/addNote', {categoryID: cid, title: title, content: content, isMarked: isMarked, resource: attachments, tagRelation: tags, styleType: styleType, summary: summary}, $.extend({
                   failure: error_callback,
                   error: error_callback
               }, callback));
           },
           //更新笔记
           update: function(cid, id, title, content, version, attachments, callback, tags, styleType){
               title = $.trim(utils.html(title));
               tags = tags || [];
               styleType = styleType || 0;
               if(!cid || !id || !title) return;
               
               var error_callback = function(respose){
                   if(typeof callback.fail == 'function') callback.fail(respose);
                   //$.lebox.error('不能更新笔记，请手动复制后重试！', 2000);
                   $.smartDoing({action: 'del', text: '更新失败，请手动复制后重试！', statusClass: 'error'});
               };
               var summary = utils.html(utils.strip_tags(content)).substr(0, 100);
               sendRequest('note/editNote', {categoryID: cid, noteID: id, title: title, content: content, version: version, resource: attachments, tagRelation: tags, styleType: styleType, summary: summary}, $.extend({
                   failure: error_callback,
                   error: error_callback
               }, callback));
           },
           //删除笔记
           del: function(id, version, callback){
               var error_callback = function(){
                   //$.lebox.error('删除笔记失败，请刷新后重试！', 2000);
                   $.smartDoing({action: 'del', text: '删除笔记失败，请刷新后重试！', statusClass: 'error'});
               };
               sendRequest('note/delNote', {noteID: id, version: version}, $.extend({
                   failure: error_callback,
                   error: error_callback
               }, callback));
           }
       },
       
       //回收站相关API
       trash: {
           //回收站笔记列表
           getAll: function(pagination, summaryCount, callback){
                if(typeof summaryCount != 'number') summaryCount = 100;
                //同note/getAllNote接口，用于标识同类的接口不能同时请求
                sendRequest('note/getRecycleNoteList', {start: pagination.skip, size: pagination.size, summaryCharCount: summaryCount}, callback, false, false, 'note/getNoteList');
           },
           //彻底删除笔记
           del: function(notes, callback){
               sendRequest('note/deleteNoteForever', {notes: notes}, callback);
           },
           //清空回收站
           clear: function(callback){
               sendRequest('note/cleanRecycle', {}, callback);
           },
           //还原/恢复笔记:notes: [{noteID: id, version: version},]
           restore:function(notes, callback){
               sendRequest('note/recoverNote', {notes: notes}, callback);
           }
       }
   };
})();/*
 *  author: gejian1@lenovo.com
 *  description: 事件处理
 */
(function(){
    lenoteEvent = {
        //监听全局事件
        init: function(){
            //window.onbeforeunload = this.leave_warn;
            //window.onunload = this.leave_warn;
            $(window).on('beforeunload unload', this.leave_warn);
            
            //帐户信息
            //$('.accountinfo').click(function(){location.href = '/user/account.html';});
            
            //退出
            $('.logout').click(function(){
                //user.logout();
                lenoteEvent.check_note(function(){
                    user.logout();
                });
            });
            
            //监听星标笔记与所有笔记列表事件
            $('#all-notes').click(function(){
                $('#sidebar-b .toolbar .search input').val('').blur();
                //lenoteView.note.getAll();
                lenoteEvent.check_note(function(){
                    lenoteView.note.getAll();
                });
            });
            $('#stars-notes').click(function(){
                $('#sidebar-b .toolbar .search input').val('').blur();
                //lenoteView.note.getStars();
                lenoteEvent.check_note(function(){
                    lenoteView.note.getStars();
                });
            });
            $('#myshare').click(function(){
                $('#sidebar-b .toolbar .search input').val('').blur();
                //lenoteView.note.getShared();
                lenoteEvent.check_note(function(){
                    lenoteView.note.getShared();
                });
            });
            $('#trash').click(function(){
                $('#sidebar-b .toolbar .search input').val('').blur();
                lenoteEvent.check_note(function(){
                    lenoteView.trash.getAll();
                });
            });
            
            //监听笔记本(组)栏的菜单组-收起/打开侧边栏子菜单，如打开笔记本(组)、标签组等
            $('#sidebar-a .wrap .header').click(function(){lenoteDom.category.openMenu(this);});
            
            //页面级事件监听：body(主要用于隐藏dropdown菜单)
            $('body').click(function(event){
                //当用户正在操作笔记时延长cooke有效期
                try{
                    $.refreshCookie('UState', true);
                    $.refreshCookie('token', true);
                }catch(e){}
                
                event = event || window.event;
                //当点击了body时自动移除弹出的菜单，当被点击的目标元素有dropdown时不移除事件交由被点击元素自己去处理
                if(event.type == 'click' && !$(event.target).hasClass('dropdown')){
                    lenoteDom.dropdown.remove();
                }
                try{
                   if(!UE.browser.ie && !$(event.target).is('input')) 'getSelection' in window ? window.getSelection().removeAllRanges() : window.document.selection.empty();
                }catch(e){}
                //lenoteDom.editor.editor.selection.clearRange();
                
               //更多工具隐藏/显示事件注册-去掉更多工具的选中状态
               //var checked = $(".edui-button-checked");
               //if(checked.length > 0){
               //    checked.removeClass("edui-button-checked");
                   //$(".edui-moretoolbox-show").removeClass("edui-moretoolbox-show");
                  //$(".edui-moretoolbox-show").slideUp('fast', function(){
                  //      $(this).removeClass("edui-moretoolbox-show");
                  //});
               //   $("#moretoolbox").slideUp('fast');
               //}
               $("#moretoolbox").slideUp('fast');
            }).on('keydown', function(event){ //Ctrl + S保存
                event = event || window.event;
                var keyCode = event.keyCode || event.which;
                if(event.ctrlKey && keyCode == 83){
                    try{
                       if(!event.isPropagationStopped()) event.stopPropagation();
                       if(!event.isDefaultPrevented()) event.preventDefault();
                    }catch(e){}
                    
                    //保存前检查内容是否有变化(is_need是否为true)，有变化则立即保存、没有则不做任何处理
                    //lenoteDom.editor.saved.setPoll(true);
                    lenoteDom.editor.saved.check();
                    return false;
                }
            }).on('mouseup mousedown', function(event){
                //lenoteDom.dropdown.remove();
                try{
                    //event.type == 'mousedown' && 'getSelection' in window ? window.getSelection().removeAllRanges() : window.document.selection.empty();
                    var win = $('#iframeNodeView').get(0).contentWindow;
                    if(typeof win == 'object'){
                        'getSelection' in win ? win.getSelection().removeAllRanges() : win.document.selection.empty();
                    }
                }catch(e){}
                
                //if($(event.target).is('body')){
                if($(event.target).parents('#moretoolbox').length === 0){
                    //更多工具隐藏/显示事件注册-去掉更多工具的选中状态
                    //var checked = $(".edui-button-checked");
                    //if(checked.length > 0){
                    //    checked.removeClass("edui-button-checked");
                        //$(".edui-moretoolbox-show").removeClass("edui-moretoolbox-show");
                        //$(".edui-moretoolbox-show").slideUp('fast', function(){
                        //    $(this).removeClass("edui-moretoolbox-show");
                        //});
                    //    $("#moretoolbox").slideUp('fast');
                    //}
                    $("#moretoolbox").slideUp('fast');
                }
            }).on('click', '.popup-menu dd', function(event){
                //删除选区时弹出框保持光标
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                   lenoteDom.dropdown.remove();
                }catch(e){}
            });
            //$('#sidebar-b .toolbar .search, #sidebar-c, #lebox-wrap').on('click', '.encopy, input', function(event){
            $('#sidebar-b .toolbar .search, #sidebar-c').on('click', '.encopy', function(event){
                //使.encopy始终可选
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                   //if(!event.isDefaultPrevented()) event.preventDefault();
                   lenoteDom.dropdown.remove();
                }catch(e){}
            });
            
            //当是IE时监听只有encopy的元素才可以被选择
            if(UE.browser.ie){
                $(document).on('selectstart', function(event){
                    var _target = $(event.target);
                    if(_target.hasClass('.encopy') || _target.closest('.encopy').length > 0){
                        return true;
                    }else{
                        return false;
                    }
                });
            }
            
            $('#sidebar-b .search').find('a.submit').click(function(e){
                //$.lebox.info('正在紧锣密鼓地准备中，敬请期待！', 2000);
                //var q = UE.utils.unhtml($.trim($('#sidebar-b .search input').val()));
                var q = $.trim($('#sidebar-b .search input').val());
                //saved-自动保存: 搜索时检查是否需要保存
                lenoteDom.editor.saved.check(function(){
                    //切换笔记时重置saved状态
                    lenoteDom.editor.saved.clean();
                    lenoteView.note.search(q);
                }, true);
            }).end().find('input').keydown(function(event){
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                }catch(e){}
                
                var key = event.which || event.keyCode;
                if(key == 13){
                    var q = $.trim($(this).val());
                    //saved-自动保存: 搜索时检查是否需要保存
                    lenoteDom.editor.saved.check(function(){
                        //切换笔记时重置saved状态
                        lenoteDom.editor.saved.clean();
                        lenoteView.note.search(q);
                    }, true);
                }
            });
        },
        
        //当笔记有变化时，阻止F5、Ctrl+F5、关闭浏览器、后退/前进按钮等
        leave_warn: function(event){
            try{
                //if(lenoteDom && lenoteDom.editor.saved.is_need === true){
                if(lenoteDom.editor.isEditable()){
                    var a = lenoteDom.editor.data.attachments.build(true),
                          b = lenoteDom.editor.data.attachments.build(),
                          c = a.length !== b.length;                    
                }else{
                    var c = false;
                }
                if(lenoteDom && (lenoteDom.editor.saved.is_need === true || c)){
                    //如果是因为附件数不对，则自动触发保存
                    if(c) lenoteDom.editor.saved.setPoll(true);
                    
                    var msg = '点击"离开此页"，最近修改的笔记将不会被保存。点击"留在此页"，您将有机会保存此笔记。';
                    event = event || window.event;
                    if(event) event.returnValue = msg;
                    return msg;
                }
                //return;
            }catch(e){}
        },
        
        //检查笔记是否需要保存
        check_note: function(callback){
            //saved-自动保存: 切换星标、分享、所有笔记及退出时检查是否需要保存
            lenoteDom.editor.saved.check(function(){
                //切换笔记时重置saved状态
                lenoteDom.editor.saved.clean();
                if(typeof callback == 'function') callback();
            }, true);
        },
        
        //加载笔记本(组)的笔记列表
        _show_notebook: function(_this){
            $('#sidebar-b .toolbar .search input').val('').blur();
            var _id = $(_this).attr('id');
            //saved-自动保存: 切换分类时检查是否需要保存
            lenoteDom.editor.saved.check(function(){
                //切换笔记时重置saved状态
                lenoteDom.editor.saved.clean();
                lenoteView.note.getListByCategory(_id);
            }, true);
        },
        
        //箭头的展开与收起：笔记本组的打开与收起
        _arrow: function(_this){
            $(_this).parent('div.item').toggleClass('active').parent('li').children('ul').toggle();
        },
        
        //显示笔记
        _show_note: function(_this){
            var _id = $(_this).attr('id');
            //saved-自动保存: 切换笔记时检查是否需要保存
            lenoteDom.editor.saved.check(function(){
                //检查有没有改变笔记的分类
                if(lenoteDom.editor.saved.is_hold){
                    //lenoteDom.editor.saved.is_hold = false;
                    //var nid = lenoteDom.note.getSelected(true);
                    //if(nid) $('#sidebar-b .list-notes li#' + nid).remove();
                    $('#sidebar-b .list-notes li#' + lenoteDom.editor.saved.is_hold).remove();
                    lenoteDom.editor.saved.is_hold = null;
                }
                //切换笔记时重置saved状态
                lenoteDom.editor.saved.clean();
                lenoteView.note.show(_id);
            }, true);
        },
        
        //笔记本(组)的功能菜单
        _notebook_action: function(_this){
            lenoteDom.category.dropdown.show(_this);
        },
        //笔记本栏目的功能菜单
        _notebooks_action: function(_this){
            lenoteView.category.createNotebook();
        },
        
        //星标笔记的功能菜单
        _stars_action: function(_this){
            lenoteDom.category.dropdown.showStar(_this);
        },
        
        //标签栏目的功能菜单
        _tags_action: function(_this){
            lenoteDom.category.dropdown.showTags(_this);
        },
        
        //回收站的功能菜单
        _trash_action: function(_this){
            lenoteDom.category.dropdown.showTrash(_this);
        }
    };
})();/*
 *  author: gejian1@lenovo.com
 *  description: 页面事件监听
 */
(function($){
    //事件分配函数
    function dispatch(options){
        //新事件需要在此注册，否则将不被分配
        var defaults = {_event: 'click', monitor: '', actions: ['_show_notebook', '_arrow', '_show_note',
        '_notebook_action', '_notebooks_action', '_stars_action', '_tags_action', '_trash_action']};
        options = $.extend(defaults, options);
        
        if(options.monitor){
            $(options.monitor).unbind(options._event).bind(options._event, function(event){
                //因为阻止了事件冒泡，所以event.target等同于this对象
                //if(event.isPropagationStopped) event.stopPropagation();
                //if(event.isDefaultPrevented()) event.preventDefault();
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                   if(!event.isDefaultPrevented()) event.preventDefault();
                }catch(e){}
                
                //当点击了除body外的其它元素时自动移除弹出的菜单，当被点击的目标元素有dropdown时不移除事件交由被点击元素自己去处理
                if(event.type == 'click' && !$(event.target).hasClass('dropdown')){
                   lenoteDom.dropdown.remove();
                }
                
                var _class = $(this).attr('class'), _c = null;
                if(_class){
                    _class = _class.match(/e_\w+/i);
                    if (_class && _class.length == 1){
                        _c = _class[0].slice(1).toLowerCase();
                        if(_c && $.inArray(_c, options.actions) != -1){
                            lenoteEvent[_c](this);
                        }
                    }
                }
                return false;
            });
        }
    }
    
    //事件监听函数
    lenoteObserver = {
        //笔记本（组）的相关事件
        categories: function(){
            //展开与收起笔记本（组）
            dispatch({monitor: '#sidebar-a .list .icon-arrow, #sidebar-a .list .icon-arrow-gray'});
            
            //监听笔记本（组）之笔记列表加载及边栏side-bar所有菜单的右键功能菜单(笔记本(组)、标签、星标笔记等)
            dispatch({monitor: '#sidebar-a .list-categories li, #sidebar-a .icon-action'});
            $('#sidebar-a li, #sidebar-a li .item').smartHover();
        },
        
        //指示箭头相关事件
        arrow: function(id){
            dispatch({monitor: '#' + id + ' .icon-arrow, #' + id + ' .icon-arrow-gray'});
        },
        
        //监听笔记本（组）及右键功能菜单
        category: function(id){
            var li = '#' + id;
            dispatch({monitor: li + ', ' + li + ' .icon-action'});
            $(li + ',' + li + ' .item').smartHover();
        },
        
        //笔记列表单篇笔记监听
        note: function(id){
            var li = '#sidebar-b .list-notes li#' + id;
            dispatch({monitor: li});
            $(li + ',' +  li + ' .item').smartHover();
        }
    };
})(jQuery);/*
 *  author: gejian1@lenovo.com
 *  description: 自定义标签
 */

var lenoteTag = {};
(function(){
    //返回图片的类型值
    function getImageType(ext){
        var result = 256; //图片  TYPE_IMAGE
        switch(ext){
            case 'jpg': result = 257; break; //JPG图片  TYPE_IMAGE_JPG
            case 'bmp': result = 258; break; //BMP图片  TYPE_IMAGE_BMP
            case 'png': result = 259; break; //PNG图片  TYPE_IMAGE_PNG
            case 'gif': result = 260; break; //GIF图片  TYPE_IMAGE_GIF
            case 'jpeg': result = 261; break; //JPEG图片 TYPE_IMAGE_JPEG
        }
        return result;
    }
    //返回文档的类型值
    function getDocType(ext){
        var result = 384; //文档     TYPE_DOCUMENT
        switch(ext){
            case 'doc': result = 385; break; //DOC文档  TYPE_DOCUMENT_DOC
            case 'docx': result = 386; break; //DOCX文档 TYPE_DOCUMENT_DOCX
            case 'ppt': result = 387; break; //PPT文档  TYPE_DOCUMENT_PPT
            case 'xls': result = 388; break; //XLS文档  TYPE_DOCUMENT_XLS
            case 'txt': result = 389; break; //TXT文档  TYPE_DOCUMENT_TXT
            case 'pdf': result = 390; break; //PDF文档  TYPE_DOCUMENT_PDF
            case 'pptx': result = 391; break; //PPTX文档 TYPE_DOCUMENT_PPTX
            case 'xlsx': result = 392; break; //XLSX文档 TYPE_DOCUMENT_XLSX
        }
        return result;
    }
    //返回文件的类型值
    function getFileType(ext){
        var result = 640; //文件   TYPE_FILE
        switch(ext){
            case 'rar': result = 641; break; //RAR文件 TYPE_FILE_RAR
            case 'zip': result = 642; break; //ZIP文件 TYPE_FILE_ZIP
            case 'apk': result = 643; break; //APK文件 TYPE_FILE_APK
        }
        return result;
    }
    //返回音频的类型值
    function getAudioType(ext){
        var result = 512; //音频    TYPE_AUDIO
        switch(ext){
            case 'kk': result = 513; break; //KK音频  TYPE_AUDIO_KK
            case 'mp3': result = 514; break; //MP3音频 TYPE_AUDIO_MP3
            case 'wav': result = 515; break; //WAV音频 TYPE_AUDIO_WAV
            case 'amr': result = 516; break; //AMR音频 TYPE_AUDIO_AMR
            case 'aac': result = 517; break; //AAC音频 TYPE_AUDIO_AAC
            case 'ogg': result = 518; break; //OGG音频 TYPE_AUDIO_OGG
            case 'mid':case 'midi': result = 519; break; //MID音频 TYPE_AUDIO_MID
            case 'ape': result = 520; break; //APE音频 TYPE_AUDIO_APE
        }
        return result;
    }
    //返回视频的类型值
    function getVideoType(ext){
        var result = 1280; //视频     TYPE_VIDEO
        switch(ext){
            case 'mp4': result = 1281; break; //MP4视频  TYPE_VIDEO_MP4
            case 'avi': result = 1282; break; //AVI视频  TYPE_VIDEO_AVI
            case 'mov': result = 1283; break; //MOV视频  TYPE_VIDEO_MOV
            case 'rm': result = 1284; break; //RM视频   TYPE_VIDEO_RM
            case 'rmvb': result = 1285; break; //RMVB视频 TYPE_AUDIO_RMVB
            case 'flv': result = 1286; break; //FLV视频  TYPE_AUDIO_FLV
            case 'mpeg': result = 1287; break; //MPEG视频 TYPE_VIDEO_MPEG
            case '3gp': result = 1288; break; //3GP视频  TYPE_VIDEO_3GP
        }
        return result;
    }
    /*
     *  获取附件的类型值
     *  @name  名称
     *  @type    附件类型，image/document/file/audio/video
     *  说明： 以下类型不需要判断，因为Web端不会产生这种类型的媒体，所以只需要在保存笔记时将这些媒体的type类型数据原样上传即可、不需要做额外的判断
     *      文字 TYPE_TEXT      768
     *      手写 TYPE_HANDWRITE 896
     *      涂鸦 TYPE_DOODLE 1024
     *      待办 TYPE_TODO   1152
     */
    lenoteTag.getMediaTypeValue = function(name, type){
        var ext = utils.getSuffix(name).ext,
             result = 128; //通用类型 TYPE_GENERAL
        if(!type) type = this.getMediaType(name); //当类型为空时验证后辍名
        switch(type){
            case 'image': result = getImageType(ext); break;
            case 'document': result = getDocType(ext); break;
            case 'file': result = getFileType(ext); break;
            case 'audio': result = getAudioType(ext); break;
            case 'video': result = getVideoType(ext); break;
        }
        return result;
    };
    
    /*
     *  当类型值为大类时，重新检查其类型值：一是修复之前的错误附件类型数据、二是在以后添加新类型值时可以重新识别出来
     *  @name 文件名称
     *  @value 当前的类型值
     */
    lenoteTag.validType = function(name, value){
        var ext = utils.getSuffix(name).ext,
             general = [128, 256, 384, 512, 640, 1280];
        if($.inArray(value, general) !== -1){
            return this.getMediaTypeValue(name);
        }else{
            return value;
        }
    };
    
    //根据小类判断其大类，用于判断范围显示缩略图
    lenoteTag.getParentType = function(value){
        if($.inArray(value, [256, 257, 258, 259, 260, 261]) !== -1) return 256; //仅支持的图片显示
        if($.inArray(value, [384, 385, 386, 387, 388, 389, 390, 391, 392, 640, 641, 642, 643]) !== -1) return 384; //文件、文档等
        if($.inArray(value, [512, 513, 514, 515, 516, 517, 518, 519, 520]) !== -1) return 512; //音频
        if($.inArray(value, [1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288]) !== -1) return 1280; //视频
        if($.inArray(value, [128, 768, 896, 1024, 1152, 1408, 1536, 1664, 1792, 1920, 2048]) !== -1) return value; //通用、文字、手写、涂鸦、待办、日期、联系人、地理位置、天气、时间、心情
        return -1; //未识别
    };
    
    //判断附件的类型是否是：image/document/file/audio/video
    lenoteTag.getMediaType = function(name){
        var ext = utils.getSuffix(name).ext, suffix = '';
        switch(ext){
            case 'jpg':case 'jpeg':case 'bmp':case 'gif':case 'png':case 'ico':case 'pcx':case 'tiff':case 'dxf':case 'exif': suffix = 'image';break;
            case 'doc':case 'docx':case 'ppt':case 'pptx':case 'pdf':case 'xls':case 'xlsx':case 'txt':case 'rtf':case 'jnt': suffix = 'document';break;
            case 'rar':case 'zip':case 'apk': suffix = 'file';break;
            case 'kk':case 'mp3':case 'amr':case 'aac':case 'ogg':case 'mid':case 'midi':case 'ape':case 'wav':case 'wma': suffix = 'audio';break;
            case 'avi':case 'rm':case 'rmvb':case 'mkv':case 'wmv':case 'flv':case 'mp4':case 'f4v':case 'mov':case 'mpeg':case '3gp': suffix = 'video';break;
            default: suffix = 'file';
        }
        return suffix;
    };
    
    //判断该类型的媒体对应的自定义标签Web是否支持、如不支持的类型值都显示为附件形式，但在保存时却还需要转成其原来的自定义标签-因为其它设备是支持这些格式的
    lenoteTag.isSupportForWeb = function(value){
        if($.inArray(value, [257, 258, 259, 260, 261]) !== -1) return 'image'; //图片
        if($.inArray(value, [513, 514]) !== -1) return 'audio'; //音频: 目前播放器仅支持mp3、kk音频格式
        return 'attachment';
    };
    
    //通过附件接口上传的媒体需要根据后辍判断其标签是什么，目前除了ln-text/ln-audio/ln-photo，其它都是ln-attachment
    //将音频及附件标签使用button实现，显示模式还是a标签不用改、仅编辑时需要修改为button
    lenoteTag.getTag = function(info, key, noseparate){
        info._type = this.validType(info.title, info._type);
        var type = this.isSupportForWeb(info._type), localID = key || info.localID, tag = '';
        switch(type){
            case 'image':
                tag = '<img resource="image" key="' + localID + '" src="' + info.url + '" onerror="this.src=\'/assets/images/img404.png\'" title="' + info.title + '" _src="' + info.url + '"/>';
                break;
            case 'audio':
                //tag = '<div class="audio noselect" resource="audio" key="' + localID +'" onselectstart="return false;" unselectable="on" contenteditable="false" ondragstart="return false">' +
                //           '<div class="audio-play" play="0" id="' + utils.uuid('_audio_') + '_' + localID + '" _id="' + localID + '" url="' + info.url + '">' +
                //             '<div class="info">' +
                //               '<div class="title ellipsis clearfix" title="' + info.title + '">' +
                //                  '<span class="name ellipsis">' + info.name + '</span><span class="ext">' + info.type + '</span>' +
                //               '</div>' +
                //               '<div class="desc ellipsis">' +
                //                 '<span class="size">' + info.sizeof + '</span>' +
                //                 (info.fullTime? ('<span class="duration">' + utils.playTimeFormat(info.fullTime) + '</span>') : '') +
                //               '</div>' +
                //             '</div>' +
                //           '</div>' +
                //         '</div>';
                
                tag = (noseparate? '' : '&#8203;') + '<span class="attachskin audioskin" contentEditable="false">' +
                            '<button type="button" class="btnattact" contentEditable="false" onclick="return false;">' +
                                '<div class="audio" resource="audio" key="' + localID +'" contenteditable="false">' +
                                    '<div class="audio-play" play="0" id="' + utils.uuid('_audio_') + '_' + localID + '" _id="' + localID + '" url="' + info.url + '" contenteditable="false">' +
                                       '<div class="info" contentEditable="false">' +
                                         '<div class="title ellipsis clearfix" title="' + info.title + '" contentEditable="false">' +
                                            '<span class="name ellipsis" contentEditable="false">' + info.name + '</span><span class="ext" contentEditable="false">' + info.type + '</span>' +
                                         '</div>' +
                                         '<div class="desc ellipsis" contentEditable="false">' +
                                           '<span class="size" contentEditable="false">' + info.sizeof + '</span>' +
                                           (info.fullTime? ('<span class="duration" contentEditable="false">' + utils.playTimeFormat(info.fullTime) + '</span>') : '') +
                                         '</div>' +
                                       '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</button>' +
                         '</span>' + (noseparate? '' : '&#8203;');
                break;
            default:
                //tag = '<a class="attachment noselect ' + info.ext + '" key="' + localID + '" href="' + info.url + '" resource="attachment" title="' + info.title +
                //          '" onselectstart="return false;" unselectable="on" contentEditable="false" ondragstart="return false" target="_blank">' +
                //          '<span class="info">' +
                //          '<span class="title"><span class="name">' + info.name + '</span><span class="ext">' + info.type + '</span><span class="c"></span></span>' +
                //          //'<span class="desc"><span class="ctime">' + ci.utime + '</span>,<span class="size">' + ci.sizeof + '</span></span>' +
                //          '<span class="desc">' + info.sizeof + '</span>' +
                //          '</span></a><br/>';
                //          //'</span></a>';
                
                //使用span包裹button是为了在使用contentEditable属性后使光标可定位在button后
                tag = (noseparate? '' : '&#8203;') + '<span class="attachskin" contentEditable="false">' +
                //tag = '&nbsp;<span class="attachskin" contentEditable="false">' +
                            //'<button type="button" class="btnattact" onclick="window.open(\'' + info.url + '\', \'_top\');return false;" contentEditable="false">' +
                            '<button type="button" class="btnattact" onclick="window.open(\'' + info.url + '\');return false;" contentEditable="false">' +
                                (UE.browser.ie && UE.browser.version < 10?
                                '<span class="attachment ' + info.ext + '" key="' + localID + '" resource="attachment" title="' + info.title + '" contentEditable="false">'
                                :
                                '<a class="attachment ' + info.ext + '" key="' + localID + '" href="' + info.url + '" resource="attachment" title="' + info.title + '" contentEditable="false" target="_blank">'
                                ) +
                                    '<span class="info" contentEditable="false">' +
                                        '<span class="title" contentEditable="false">' +
                                            '<span class="name" contentEditable="false">' + info.name + '</span>' +
                                            '<span class="ext" contentEditable="false">' + info.type + '</span><span class="c" contentEditable="false"></span>' +
                                        '</span>' +
                                        '<span class="desc" contentEditable="false">' + info.sizeof + '</span>' +
                                    '</span>' +
                                (UE.browser.ie && UE.browser.version < 10? '</span>' : '</a>') +
                            '</button>' +
                         '</span>' + (noseparate? '' : '&#8203;');
                         //'</span>&nbsp;';
        }
        return tag;
    };
    
    //在保存时根据type值检查自定义标签是否需要替换成支持的自定义标签，而不总是显示为ln-attachment
    lenoteTag.validTag = function(info, key){
        var type = this.getParentType(info._type), tag = '';
        switch(type){
            case 256: tag = '<ln-photo key="' + (key || info.keyID) + '"></ln-photo>'; break;
            case 512: tag = '<ln-audio key="' + (key || info.keyID) + '"></ln-audio>'; break;
        }
        return tag;
    };
    
    //获取笔记类型: 根据最后一个非ln-text上传的附件判断笔记类型
    lenoteTag.getNoteStyle = function(){
        var attachment = lenoteDom.editor.data.attachments.getLast(),
              _type = this.getParentType(attachment._type),
              type = 500; //纯文本笔记
        if(attachment){
            switch(_type){
                case 256: type = 400; break; //图片
                case 512: type = (attachment._type == 513)? 201 : 200; break; //kk音频、音频
                case 1280: type = 1100; break; //视频
                case 128:case 768: type = 500; break; //纯文本
                case 896: type = 800; break; //手写笔记
                case 1024: type = 900; break; //涂鸦
                case 1152: type = 1000; break; //待办
                case 1408:case 1536:case 1664:case 1792:case 1920:case 2048: type = 500; break; //日期、联系人、地理位置、天气、时间、心情
                default:
                    switch(attachment._type){
                        case 385:case 386: type = 600; break; //doc(x)
                        case 387:case 391: type = 601; break; //ppt(x)
                        case 388:case 392: type = 602; break; //xls(x)
                        case 389: type = 603; break; //txt
                        case 390: type = 604; break; //pdf
                        case 641: type = 700; break; //rar
                        case 642: type = 701; break; //zip
                        case 643: type = 702; break; //apk
                        case 384:case 640: type = 799; break; //其它附件
                    }
            }
        }
        return type;
    };
})();/*
 *  author: gejian1@lenovo.com
 *  description: DOM相关操作
 */
(function(){
    lenoteDom = {
        //初始化DOM UI
        init: function(view){
            //设置帐户名、初始化编辑器高度和宽度
            this.setAccountTitle().editor.init(view);
            //如果已登录则显示界面内容，否则是一个空白页
            utils.show('#header, #main', true);
            //加载完成后设置边栏和内容区的高度以便当内容溢出时滚动条可以正确地出现
            this.setHeight();
            //监听窗口变化自动调整元素的大小
            $(window).resize(function(){
                lenoteDom.setHeight();
                $(window).trigger("editor.event.resize");
                //if(lenoteDom.editor.adjustTimeout !== null) clearTimeout(lenoteDom.editor.adjustTimeout);
                //lenoteDom.editor.adjustTimeout = setTimeout(function(){
                //    lenoteDom.editor.adjustToolbar();
                //}, 40);
                lenoteDom.editor.adjustToolbar();
            });
            //搜索框提示词
            $('#q').smartInput();
            //边栏A的拖动条及最小化按钮
            $('#sidebar-a').smartDragline({min: 200, max: 290}).smartMinimize();
            //边栏B的拖动条
            $('#sidebar-b').smartDragline({min: 355, max: 445});
            //监听全局事件
            lenoteEvent.init();
            //初始化笔记本(组)树->笔记列表->第一篇笔记
            //view.category.init();
        },
        
        //设置header中的帐户名
        setAccountTitle: function(){
            $('.accountinfo').append(user.getUState('un'));
            return this;
        },
        
        //根据可见视窗的高度设置笔记列表、侧边栏等元素的相关高度
        setHeight: function(){
            utils.calElemHeight('#sidebar-a, #sidebar-b, #sidebar-c');
            utils.calElemHeight('#sidebar-a .wrap', null, 20);
            utils.calElemHeight('#sidebar-b .content', null, 45);
        },
        
        //编辑器相关
        editor: {
            //窗口变化时调整工具栏隐藏与显示
            //adjustTimeout: null,
            //adjustToolBarWidth: 0,
            adjustLastWidth: 0,
            adjustToolbar: function(){
                //var width = $('.edui-editor-toolbarboxinner').width();
                var morebutton = $(".edui-for-moretool"),
                      showbox = $(".edui-editor-toolbarboxinner .edui-toolbar"),
                      width = showbox.width();
                if(UE.browser.ie && UE.browser.version === 8) width -= 50;
                //防抖动
                //try{
                //    //if((this.adjustToolBarWidth !== 0 && Math.abs(this.adjustToolBarWidth - width) < 15) || (width > 0 && !morebutton.hasClass('edui-button-show') && width >= getChildWidth(showbox))){
                //    if(this.adjustToolBarWidth !== 0 && Math.abs(this.adjustToolBarWidth - width) < 10){
                //        return false;
                //    }
                //    //this.adjustToolBarWidth = width;
                //}catch(e){}
                
                if((this.adjustLastWidth !== 0 && Math.abs(this.adjustLastWidth - width) < 5) || width < 1) return false;
                if(this.adjustLastWidth === 0) this.adjustLastWidth = width;
                
                function getWidth(node){
                    var w = node.outerWidth(true);
                    if(w > 0) return w;
                    var widthObj = {"fontfamily":85, "fontsize":60, "forecolor":36, "backcolor":36, "separator": 21},
                          classname = node.attr('class').replace(/-default|-colorbutton|edui|box|button|split|combox|for-|-|\s/ig,'');
                    return widthObj[classname] ? widthObj[classname] : 26;
                }
                
                function getChildWidth(node){
                    //var val = parseInt(node.get(0).scrollWidth) || 0;
                    //if(val > 0) return val;
                    var children = node.children(), val = 0;
                    //for(var i = 0; i < children.length; i++) val += $(children[i]).outerWidth(true);
                    for(var i = 0; i < children.length; i++) val += getWidth($(children[i]));
                    return val;
                }
                
                //if(width > 0){ //仅编辑状态时会改变
                    var morewrap = $("#moretoolbox"),
                          morebox = $("#moretoolbox .edui-toolbar"),
                          //showChildW = showbox.width();
                          showChildW = getChildWidth(showbox),
                          //morebuttonW = 4 + 2 + 26 + (UE.browser.ie && UE.browser.version === 8? 18 : -18);
                          morebuttonW = 4 + 2 + 20 + 6;
                    //width -= morebuttonW; //减去morebutton的width + padding + border + maring + position - parent padding
                    if(morebutton.hasClass('edui-button-show')) showChildW += morebuttonW;
                    
                    if(this.adjustLastWidth < width || width - showChildW > 26){//放大
                        var children = morebox.children();
                        for(var i = 0; i < children.length; i++){
                            var child = $(children[i]), w = getWidth(child);
                            if((width - showChildW - 10) > w || (i === children.length - 1 && w < morebuttonW)){
                                //this.adjustToolBarWidth = width + morebuttonW; //防抖动
                                child.remove();
                                showbox.append(child);
                                //showChildW = showbox.width();
                                if(morebutton.hasClass('edui-button-show')){
                                    showChildW = morebuttonW + getChildWidth(showbox);;
                                }else{
                                    showChildW = getChildWidth(showbox);
                                }
                                if(morebox.children().length === 0){
                                    morewrap.removeClass("edui-moretoolbox-show");
                                    morebutton.removeClass("edui-button-show");
                                    //morebutton.removeClass("edui-button-checked");
                                    break;
                                }
                            }else{
                                break;
                            }
                        }
                    //}else if((width + morebuttonW) < showChildW){//缩小
                     }else{
                        var children = showbox.children();
                        for(var i = children.length - 1; i >= 0; i--){
                            //var child = $(children[i]), w = getWidth(child);
                            var child = $(children[i]);
                            if((showChildW - width) > 0 || width - showChildW < 10){
                                //this.adjustToolBarWidth = width + morebuttonW; //防抖动
                                child.remove();
                                //morebox.append(child);
                                morebox.children().length > 0? morebox.prepend(child) : morebox.append(child);
                                if(!morebutton.hasClass('edui-button-show')){
                                    morebutton.addClass("edui-button-show");
                                    showChildW = morebuttonW + getChildWidth(showbox);
                                }else{
                                    showChildW = getChildWidth(showbox);
                                }
                            }else{
                                break;
                            }
                        }
                    }
                    this.adjustLastWidth = width
                //}
            },
            
            /*选区相关操作：用于处理附件、音频等特殊格式时焦点与选区的计算*/
           selectionchange: function(eventName, isChange, keyCode){
               if(isChange){
                   //lenoteDom.editor.editor.selection.getRange().setStartAtLast(lenoteDom.editor.editor.body.lastChild).setCursor(false, true);
                   try{
                       var _editor = lenoteDom.editor.editor, sel = _editor.selection, range = sel.getRange(),
                            domUtils = UE.dom.domUtils, start = range.startContainer, end = range.endContainer;
                       //if(!range.collapsed) range.collapse(true);
                       //var filterNode = domUtils.findParent(range.startContainer, function(node){
                       //    return $(node).hasClass('attachskin');
                       //});
                       
                       //if(start && (start.nodeType == 1 || start.nodeType == 3)){
                       if(start){
                           //console.info($(range.startContainer).parents('span.attachskin').get(0));
                           var node = $(start);
                           //仅处理keyup
                           if(eventName == 'keyup' && keyCode){
                               var parent = node.parents('span.attachskin');
                               if(parent.length == 0){
                                   switch(keyCode){
                                       case 37:
                                            if(range.startOffset == 0 && range.endOffset == 0){
                                                var _elem = utils.getSibling(node, 'span.attachskin', true);
                                                if(_elem && _elem.length > 0){
                                                    var _target = _elem.children('.btnattact');
                                                    if(_target.length > 0){
                                                        range.selectNode(_target.get(0));
                                                        range.select();
                                                        try{
                                                            var whiteTag = _elem.get(0).previousSibling || _elem.get(0).previousElementSibling;
                                                            if(!whiteTag || $.trim(whiteTag.nodeValue) != '' || whiteTag.nodeType == 1) _elem.before('&#8203;');
                                                        }catch(e){}
                                                    }
                                                }
                                            }
                                            break;
                                       case 39:
                                            if($.trim(node.get(0).nodeValue) == ''){
                                                var _elem = utils.getSibling(node, 'span.attachskin', false);
                                                if(_elem && _elem.length > 0){
                                                    var _target = _elem.children('.btnattact');
                                                    if(_target.length > 0){
                                                        range.selectNode(_target.get(0));
                                                        range.select();
                                                        try{
                                                            var whiteTag = _elem.get(0).nextSibling || _elem.get(0).nextElementSibling;
                                                            if(!whiteTag || $.trim(whiteTag.nodeValue) != '' || whiteTag.nodeType == 1) _elem.after('&#8203;');
                                                        }catch(e){}
                                                    }
                                                }
                                            }
                                            break;
                                   }
                               }
                               return true;
                           }
                           
                           if(start.nodeType == 1){ //处理element节点
                               //解决点击编辑按钮时光标偏移的问题
                               //if(eventName == 'focus' && node.is('p') && node.parent('body').length > 0){
                               //    var _attachskins = node.find('span.attachskin');
                               //    if(_attachskins.length > 0){
                               //        //for(var i = 0; i < _attachskins.length; i++){
                               //        //    var _attachskin = $(_attachskins[i]), attachskinDom = _attachskin.get(0);
                               //        //    try{
                               //        //        var _elem = attachskinDom.previousSibling || attachskinDom.previousElementSibling;
                               //        //        if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) _attachskin.before('&#8203;');
                               //        //        _elem = attachskinDom.nextSibling || attachskinDom.nextElementSibling;
                               //        //        if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) _attachskin.after('&#8203;');
                               //        //    }catch(e){}
                               //        //}
                               //        var _attachskin = $(_attachskins.last()), attachskinDom = _attachskin.get(0);
                               //        try{
                               //            var _elem = attachskinDom.previousSibling || attachskinDom.previousElementSibling;
                               //            if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) _attachskin.before('&#8203;');
                               //            _elem = attachskinDom.nextSibling || attachskinDom.nextElementSibling;
                               //            if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) _attachskin.after('&#8203;');
                               //            //range.setStartAfter(_range.endContainer).setCursor(false, true);
                               //        }catch(e){}
                               //    }
                               //}
                               
                               if(node.attr('contenteditable') && node.attr('contenteditable').toLowerCase() === 'false'){
                                   //var parent = node.parents('span.attachskin'), parentDom = parent.get(0);
                                   //var parent = node.parents('.btnattact');
                                   var attachskin = node.parents('span.attachskin');
                                   if(attachskin.length == 1){
                                       var parent = attachskin.children('.btnattact'), attachskinDom = attachskin.get(0);
                                       //检查附件前后是否有分隔符，解决直接在没有分隔符的附件后点击时获取焦点的问题
                                       try{
                                           var _elem = attachskinDom.previousSibling || attachskinDom.previousElementSibling;
                                           if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) attachskin.before('&#8203;');
                                           _elem = attachskinDom.nextSibling || attachskinDom.nextElementSibling;
                                           if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) attachskin.after('&#8203;');
                                       }catch(e){}
                                       
                                       if(parent.length == 1){
                                           var parentDom = parent.get(0);
                                           //range.setStartBefore(parentDom);
                                           //range.setEndAfter(parentDom);
                                           range.selectNode(parentDom);
                                           range.select();
                                       }
                                   }
                               }
                           }else if(start.nodeType == 3 && keyCode){ //处理文本节点
                               var parent = node.parents('span.attachskin');
                               //node.hasClass('attachskin')
                               //sel.clearRange();
                               if(parent.length == 1){
                                   var parentDom = parent.get(0);
                                   switch(keyCode){
                                       case 37:case 38:case 9: //向前、向上、tab
                                          var _elem = parentDom.previousSibling || parentDom.previousElementSibling; //parent.prev().get(0)，不能获取文本节点
                                          //if(!_elem) parent.before('&#8203;');
                                          try{
                                              if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) parent.before('&#8203;');
                                          }catch(e){}
                                          range.setStartBefore(parentDom).setCursor(false, true);
                                          break;
                                       case 39:case 40:case 27: //向后、向下、esc
                                          var _elem = parentDom.nextSibling || parentDom.nextElementSibling; //parent.next().get(0)
                                          //if(!_elem) parent.after('&#8203;');
                                          try{
                                              if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) parent.after('&#8203;');
                                          }catch(e){}
                                          range.setStartAfter(parentDom).setCursor(false, true);
                                          break;
                                       case 36:case 33: //Home、pageup
                                          range.setStartAtLast(_editor.body.firstChild).setCursor(false, true);
                                          break;
                                       case 35:case 34: //End、pagedown
                                          range.setStartAtLast(_editor.body.lastChild).setCursor(false, true);
                                          break;
                                       case 46:case 8://Del、Backspace
                                          parent.remove();
                                          break;
                                   }
                               //解决附件前面有元素时，就不能再选中附件了，需要检查是否是当前range的第一个子节点或文本节点中的第一个字符
                               //}else if((range.startOffset == 0 && range.endOffset == 0) || (domUtils.isWhitespace(node.get(0)) && ($.trim(node.get(0).nodeValue) == ''))){
                               //}else if(range.startOffset == 0 || (domUtils.isWhitespace(node.get(0)) && ($.trim(node.get(0).nodeValue) == ''))){
                               }else{
                                   //当使用向前向后键时检查当前元素的前后是否存在自定义标签，如存在则选中
                                   switch(keyCode){
                                       case 37: //向前<
                                            //if((range.startOffset == 0 && range.endOffset == 0) || (domUtils.isWhitespace(node.get(0)) && ($.trim(node.get(0).nodeValue) == ''))){
                                            //if((range.startOffset == 0 && range.endOffset == 0) || $.trim(node.get(0).nodeValue) == ''){
                                            if(range.startOffset == 0 && range.endOffset == 0){
                                                var _elem = utils.getSibling(node, 'span.attachskin', true);
                                                if(_elem && _elem.length > 0){
                                                    var _target = _elem.children('.btnattact');
                                                    if(_target.length > 0){
                                                        range.selectNode(_target.get(0));
                                                        range.select();
                                                        try{
                                                            var whiteTag = _elem.get(0).previousSibling || _elem.get(0).previousElementSibling;
                                                            if(!whiteTag || $.trim(whiteTag.nodeValue) != '' || whiteTag.nodeType == 1) _elem.before('&#8203;');
                                                        }catch(e){}
                                                    }
                                                    //_elem.before('&#8203;');
                                                }
                                            }
                                            break;
                                       case 39: //向后>
                                            //if((range.startOffset == 0 && range.endOffset == 0) && $.trim(node.get(0).nodeValue) == ''){
                                            if($.trim(node.get(0).nodeValue) == ''){
                                                var _elem = utils.getSibling(node, 'span.attachskin', false);
                                                if(_elem && _elem.length > 0){
                                                    var _target = _elem.children('.btnattact');
                                                    if(_target.length > 0){
                                                        range.selectNode(_target.get(0));
                                                        range.select();
                                                        try{
                                                            var whiteTag = _elem.get(0).nextSibling || _elem.get(0).nextElementSibling;
                                                            if(!whiteTag || $.trim(whiteTag.nodeValue) != '' || whiteTag.nodeType == 1) _elem.after('&#8203;');
                                                        }catch(e){}
                                                    }
                                                    //_elem.after('&#8203;');
                                                }
                                            }
                                            break;
                                   }
                               }
                           }
                       }
                   }catch(e){}
               }
           },
           
            /*
             *  自动保存:
             *  * 在set前取消监听-使用removeListener(String types, Function fn)取消指定的函数引用，该事件监听的其它处理函数不取消
             *  1. 当笔记修改后，阻止F5、Ctrl+F5、关闭浏览器/标签页、前进后退按钮
             *  2. 当停止输入5s后才同步，当用户在不停的输入时要延长timeout
             *  3. 当正在保存时笔记内容二次修改不直接自动保存，等上一个保存请求结束后再触发自动保存
             *  4. 空笔记不自动保存，除非手工点击或内容改变完成按钮
             *  5. 当标题、标签、内容发生改变时保存
             *  6. 自动保存时，完成按钮不可用
             *  7. 点击完成按钮时关闭自动保存
             *  8. 切换笔记时重置saved状态（需要检查是否已保存并将saveing的所有参数重置），防止连续点击切换笔记
             *  9. 当正在导mk数据时，可以切换笔记
             *  10.分类、星标、分享、所有笔记、标签切换及搜索时需要检查笔记是否保存
             *  11.ctrl+s:需要分别监听iframe和外部窗口的ctrl+s事件(保存前需要检查是否有笔记在编辑、如果是空分类没有笔记按ctrl+s是没有反应的)
             * 
             *  自动保存的状态
             *  @is_need : 笔记是否需要保存
             *  @is_doing: 0初始状态，1笔记正在保存，2在保存时笔记又已修改，此时is_need不能还原成false
             *  @is_hold: 控制不能离开当前编辑的笔记，必须得点击完成按钮才可离开
             *  desc
             *  1. 当笔记修改后, 阻止F5、Ctrl+F5、关闭浏览器/标签页、前进后退按钮
             *  2. 当停止输入5s后才同步，当用户在不停的输入时要延长timeout
             *  3. 当正在保存时笔记内容又修改就暂不保存，等请求结束后再保存二次修改
             *  4. 空笔记不保存，除非手工点击完成按钮
             *  5. 切换笔记及点击完成按钮后重置saved状态
             */
            saved: {
                is_need: false, is_doing: 0, is_hold: null, timeout: null, title_based: null, content_based: null,
                init: function(){
                    this.is_need = false;
                    this.is_doing = 0;
                    this.is_hold = null;
                    //this.is_first = false; //用于检查是否第一次输入字符，用于屏蔽keyup频繁触发
                    this.title_based = null;
                    this.content_based = null;
                    if(this.timeout !== null) clearTimeout(this.timeout);
                    this.timeout = null;
                },
                clean: function(){
                    lenoteDom.editor.editor.removeListener('contentChange', lenoteDom.editor.saved.contentChange);
                    lenoteDom.editor.editor.removeListener('keyup', lenoteDom.editor.saved.keybordChange);
                    lenoteDom.editor.editor.removeListener('keydown', lenoteDom.editor.saved.shortcut);
                    //选区相关
                    lenoteDom.editor.editor.removeListener('selectionchange', lenoteDom.editor.selectionchange);
                    $('#note_title_input').off('keyup');
                    this.init();
                },
                listen: function(){
                    //var based = md5(lenoteDom.editor.getContent());
                    //lenoteDom.editor.saved.content_based = based;
                    this.content_based = md5(lenoteDom.editor.getContent());
                    //在add前取消监听-使用removeListener(String types, Function fn)取消指定的函数引用，该事件监听的其它处理函数不取消
                    lenoteDom.editor.editor.removeListener('contentChange', lenoteDom.editor.saved.contentChange);
                    lenoteDom.editor.editor.removeListener('keyup', lenoteDom.editor.saved.keybordChange);
                    lenoteDom.editor.editor.removeListener('keydown', lenoteDom.editor.saved.shortcut);
                    lenoteDom.editor.editor.addListener('contentChange', lenoteDom.editor.saved.contentChange);
                    lenoteDom.editor.editor.addListener('keyup', lenoteDom.editor.saved.keybordChange);
                    lenoteDom.editor.editor.addListener('keydown', lenoteDom.editor.saved.shortcut);
                    //选区相关
                    lenoteDom.editor.editor.removeListener('selectionchange', lenoteDom.editor.selectionchange);
                    lenoteDom.editor.editor.addListener('selectionchange', lenoteDom.editor.selectionchange);
                },
                monitorTitle: function(){
                    var input = $('#note_title_input');
                    if(input.length == 0) return;
                    
                    //var based = md5(lenoteDom.editor.getTitle());
                    this.title_based = md5(lenoteDom.editor.getTitle());
                    input.off('keyup').on('keyup', function(event){
                        //try{
                        //    if(!event.isPropagationStopped()) event.stopPropagation();
                        //}catch(e){}
                        //var key = event.which || event.keyCode;
                        
                        //通过比较md5值判断title是否改变
                        var newer = md5(lenoteDom.editor.getTitle()), based = lenoteDom.editor.saved.title_based;
                        if(based !== newer){
                            //based = newer;
                            lenoteDom.editor.saved.title_based = newer;
                            lenoteDom.editor.saved.setPoll();
                        }
                    });
                },
                check: function(_callback, isCheck){ //@isCheck自动保存时是否删除不存在的附件信息
                    //防止连续点击切换笔记，确保在保存时不切换笔记
                    if(this.is_doing != 0) return;
                    
                    this.is_doing = 0;
                    //如果不需要保存则直接调用回调函数
                    if(this.is_need){
                        if(isCheck === true) lenoteDom.editor.data.attachments.build(); //更新资源
                        this.setPoll(true, _callback);
                    }else if(lenoteDom.editor.isEditable() && isCheck === true){ //当is_need为false时且当资源没有修改时就不需要频繁保存了, !!isCheck
                        var a = lenoteDom.editor.data.attachments.build(true),
                              b = lenoteDom.editor.data.attachments.build();
                        if(a.length !== b.length){
                            this.setPoll(true, _callback);
                        }else{
                            if(typeof _callback == 'function') _callback();
                        }
                    }else{
                        if(typeof _callback == 'function') _callback();
                    }
                },
                setPoll: function(immediately, _callback){
                    this.is_need = true;
                    if(this.is_doing === 1) this.is_doing = 2;
                    if(this.is_doing === 2) return;
                    
                    //当用户在不停地输入时就延长自动保存触发的时间
                    if(this.timeout !== null) clearTimeout(this.timeout);
                    if(immediately){
                        this.callback(_callback);
                    }else{
                        this.timeout = setTimeout(this.callback, 5000);
                    }
                },
                callback: function(_callback){
                    lenoteView.note.saved({
                        init: function(){
                            lenoteDom.editor.saved.is_doing = 1;
                            lenoteDom.editor.insertBtn.saveState(true);
                        },
                        success: function(_callback_){
                            lenoteDom.editor.saved.reset();
                            //if(typeof _callback == 'function') _callback();
                            if(typeof _callback_ == 'function'){
                                _callback_(_callback);
                            }else if(typeof _callback == 'function'){
                                _callback();
                            }
                        },
                        error: function(msg){
                            $.smartDoing({action: 'del', text: '保存笔记失败，请手动复制后重试！', statusClass: 'error'});
                        },
                        complete: function(){
                            lenoteDom.editor.saved.is_doing = 0;
                            lenoteDom.editor.insertBtn.saveState();
                        }
                    });
                },
                reset: function(){
                    this.is_need = (this.is_doing === 2)? true : false;
                    this.is_doing = 0;
                    if(this.timeout !== null) clearTimeout(this.timeout);
                    this.timeout = null;
                    if(this.is_need) this.setPoll();
                },
                contentChange: function(){
                    //console.info('触发')
                    //通过比较md5值判断content是否改变
                    //使用监听而非使用setInterval轮询比较内容来确认是否需要保存，是为了防止编辑器自己添加的标签引起不必要的同步
                    var newer = md5(lenoteDom.editor.getContent()), based = lenoteDom.editor.saved.content_based;
                    if(based !== newer){
                        //console.info('内容已修改')
                        //based = newer;
                        lenoteDom.editor.saved.content_based = newer;
                        lenoteDom.editor.saved.setPoll();
                    }
                },
                shortcut: function(type, event){ //Ctrl + S保存
                    var keyCode = event.keyCode || event.which;
                    if(event.ctrlKey && keyCode == 83){
                        try{
                            if(window.event){ //ie
                                try{event.keyCode = 0;}catch(e){}
                                event.returnValue = false;
                            }
                            event.preventDefault();
                        }catch(e){}
                        
                        //保存前检查内容是否有变化(is_need是否为true)，有变化则立即保存、没有则不做任何处理
                        lenoteDom.editor.saved.check();
                        return false;
                    }else{
                        //当使用向前和向后键、Home及End时触发选区改变事件
                        lenoteDom.editor.selectionchange('keydown', true, keyCode);
                    }
                },
                keybordChange: function(type, event){
                    var keyCode = event.keyCode || event.which, me = lenoteDom.editor.editor;
                    if(event.ctrlKey){
                        if(keyCode == 88 || keyCode == 86){ //ctrl + x、ctrl + v
                            //me.selection.getRange().collapsed
                            //me.selection.getText()
                            me.fireEvent('contentchange');
                        }
                    }else if(!utils.isFunctionKey(keyCode)){ //解决输入第一个字符时不触发contentchange的问题
                        me.fireEvent('contentchange');
                    }
                    
                    //当使用向前和向后键时触发选区改变事件
                    lenoteDom.editor.selectionchange('keyup', true, keyCode);
                    
                    //if(utils.isFunctionKey(keyCode)){
                    //    event.stopPropagation();
                    //    event.preventDefault();
                    //    return false;
                    //}
                }
            },
            
            //初始化富文本编辑器，并根据视窗大小变化自动调整编辑器的区域大小
            init: function(view){
                var that = this;
                this.editor = UE.getEditor('editor_entity', {onready: function(){
                    this.disable();
                    //初始化笔记本(组)树->笔记列表->第一篇笔记，需等待编辑初始化完成后再去获取数据、否则如果获取数据在初始化前就会导致在cleanUI中编辑器操作异常
                    view.category.init();
                    //设置固定宽度
                    this.container.style.width="100%";
                    this.iframe.parentNode.style.width = "100%";
                    this.iframe.parentNode.parentNode.style.width = "100%";
                }});
                this.editor.ready(function(){
                    $(window).unbind('editor.event.resize').bind('editor.event.resize', function(e){
                        //that.editor.setHeight(utils.calElemHeight('.note-editor', null, $('.edui-editor-toolbarbox').outerHeight() + 5, true));
                        //由于1.6.1版本中高度计算方法改变，所以在这里重新实现统一的编辑器高度计算方法
                        if(!$('.note-editor').is(':hidden')) that.setHeight(utils.calElemHeight('.note-editor', null, $('.edui-editor-toolbarbox').outerHeight() + 5, true));
                        //自适应宽度-因为隐藏边栏时不会触发resize事件所以不采用这种方法动态更新宽度，而是直接在编辑器中直接设置
                        //that.setWidth($(window).width() - $('.note-editor').offset().left);
                        that.iframe.setHeight();
                    });
                    $(window).trigger("editor.event.resize");
                    
                    //更多工具图标事件监听
                    $(".edui-for-moretool").click(function(event){
                        if(!event.isPropagationStopped()) event.stopPropagation();
                        //$("#moretoolbox").toggleClass("edui-moretoolbox-show");
                        //$("#moretoolbox").slideToggle('fast', function(){
                        //    $(this).toggleClass("edui-moretoolbox-show");
                        //});
                        //$(this).toggleClass("edui-button-checked");
                        $("#moretoolbox").slideToggle('fast', function(){
                            lenoteDom.dropdown.remove();
                        });
                    }).mouseover(function(event){
                        if(!event.isPropagationStopped()) event.stopPropagation();
                        $(this).addClass("edui-button-hover");
                    }).mouseout(function(event){
                        if(!event.isPropagationStopped()) event.stopPropagation();
                        $(this).removeClass("edui-button-hover");
                    }).on('mouseup mousedown', function(event){
                        if(!event.isPropagationStopped()) event.stopPropagation();
                        if(!event.isDefaultPrevented()) event.preventDefault();
                    });
                    //var moretool = $(".edui-for-moretool"), moretoolbox = $("#moretoolbox");
                    //if(moretoolbox.children().length){
                    //    moretool.addClass("edui-button-show");
                    //}
                });
                
                //editor事件监听
                try{
                    this.editor.addListener('focus', function(){
                        try{
                            lenoteDom.dropdown.remove();
                            "getSelection" in window ? window.getSelection().removeAllRanges() : window.document.selection.empty();
                            //处理当笔记内容只有一个附件且后面没有任何元素时，不能获取焦点的问题
                            lenoteDom.editor.selectionchange('focus', true);
                            
                            //更多工具隐藏/显示事件注册-去掉更多工具的选中状态
                            //var checked = $(".edui-button-checked");
                            //if(checked.length > 0){
                            //    checked.removeClass("edui-button-checked");
                            //    $(".edui-moretoolbox-show").removeClass("edui-moretoolbox-show");
                            //}
                        }catch(e){}
                    });
                    //this.editor.addListener('afterSetContent', function(){
                    //    try{
                    //        if(lenoteView.dom.editor.iframe.getIframe() === null && $('.note-editor').is(':hidden') === false){
                    //            console.info(lenoteDom.editor.editor.body);
                    //        }
                    //    }catch(e){}
                    //});
                    
                    //更多工具隐藏/显示事件注册
                    this.editor.addListener('click', function(){
                        //去掉更多工具的选中状态。
                        //var checked = $(".edui-button-checked");
                        //if(checked.length > 0){
                        //    checked.removeClass("edui-button-checked");
                            //$(".edui-moretoolbox-show").removeClass("edui-moretoolbox-show");
                           //$(".edui-moretoolbox-show").slideUp('fast', function(){
                           //     $(this).removeClass("edui-moretoolbox-show");
                           //});
                        //   $("#moretoolbox").slideUp('fast');
                        //}
                        $("#moretoolbox").slideUp('fast');
                    });
                }catch(e){}
            },
            
            //内容展示
            show: function(){
                function render(that, height){
                    var root_path = that.editor.options.UEDITOR_HOME_URL;
                    var html = [(UE.browser.ie && UE.browser.version < 9)? '' : '<!DOCTYPE html>'];
                    html.push('<html xmlns="http://www.w3.org/1999/xhtml" class="view"><head>');
                    //html.push('<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7; IE=EmulateIE9; IE=EmulateIE10" />');
                    html.push('<meta http-equiv="content-type" content="text/html;charset=utf-8">');
                    html.push('<style type="text/css">' +
                                       'body{cursor: text;margin:8px;font-family:sans-serif;font-size:16px;}' +
                                       //'ol,ul{-webkit-padding-start: 30px;margin:0;}' +
                                       //'ol,ul{padding-left: 30px;margin:0;}' +
                                       //'.view{padding:0;word-wrap:break-word;cursor:text;height:90%;}' +
                                       '.view{word-wrap:break-word;cursor:text;height:90%;}' +
                                       'p{margin:5px 0;}' +
                                     '</style>'
                                    );
                    if(that.editor.options.iframeCssUrl){
                        html.push('<link rel="stylesheet" type="text/css" href="' + UE.utils.unhtml(that.editor.options.iframeCssUrl) + '"/>');
                    }
                    if(that.editor.options.initialStyle){
                        html.push('<style type="text/css">' + that.editor.options.initialStyle + '</style>');
                    }
                    height -= 20;
                    //html.push('</head><body class="view" style="height:' + height + 'px">' + that.editor.getContent().replace(/'/igm, '&#39;').replace(/&/igm, '&amp;'));
                    html.push('</head><body class="view" style="height:' + height + 'px"><div id="viewer"></div>');
                    html.push('<script type="text/javascript" src="' + root_path + 'ueditor.parse.js"></script>');
                    html.push('<script type="text/javascript" src="/assets/js/jquery.min.js"></script>');
                    html.push('<script type="text/javascript" src="/assets/js/parser/parser_api.js"></script>');
                    //html.push('<script type="text/javascript" src="/assets/js/parser/swfobject.js"></script>');
                    //解决uParse未定义的错误
                    //html.push('<script type="text/javascript">setTimeout(function(){uParse("div", {"highlightJsUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCore.js",');
                    //html.push('"highlightCssUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCoreDefault.css"})},300);</script>');
                    html.push('<script type="text/javascript">var _interval = setInterval(function(){if(typeof uParse == "function"){');
                    html.push('if(_interval) clearInterval(_interval);uParse("div", {"highlightJsUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCore.js",');
                    html.push('"highlightCssUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCoreDefault.css"});}},300);</script>');
                    //html.push('<script type="text/javascript">setTimeout(function(){document.body.innerHTML = window.parent.lenoteDom.editor.getContent();}, 0);</script>');
                    //html.push('<script type="text/javascript">setTimeout(function(){var j = jQuery.noConflict();j(function(){j("body > #viewer").html(window.parent.lenoteDom.editor.getContent());});}, 20);</script>');
                    //setTimeout解决找不到jQuery的bug
                    //html.push('<script type="text/javascript">setTimeout(function(){' +
                    //                '$(function(){' +
                    //                    '$("body > #viewer").html(window.parent.lenoteAnalyze.decode(window.parent.lenoteDom.editor.getContent(true)));' +
                    //                    //'var params = {quality : "high", scale : "noscale", wmode : "window", allowscriptaccess : "always", bgcolor : "#fff"};' +
                    //                    //'var flashvars = {};var attributes = {id : "flashcontent", name : "flashcontent"};' +
                    //                    //'swfobject.embedSWF("/assets/js/parser/supernote-audio.swf", "flashcontent", "1", "1", "10.2.124", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);' +
                    //                    'setTimeout(function(){supernote_audio.init();}, 300);' +
                    //                    //点击iframe时取消浮框并清除选区
                    //                    //'try{$("body").on("click mousedown", function(){' +
                    //                    'try{$("body").on("mouseup mousedown", function(){' +
                    //                    //'$(window.parent.document.body).trigger("click");'+
                    //                    'window.parent.lenoteDom.dropdown.remove();'+
                    //                    '"getSelection" in window ? window.parent.getSelection().removeAllRanges() : window.parent.document.selection.empty();' +
                    //                    ' })}catch(e){}' +
                    //                '});' +
                    //                '}, 50);</script>');
                    html.push('<script type="text/javascript">var interval = setInterval(function(){' +
                                        'if(typeof jQuery == "function"){' +
                                            'if(interval) clearInterval(interval);' +
                                            '$(function(){' +
                                                '$("body > #viewer").html(window.parent.lenoteAnalyze.decode(window.parent.lenoteDom.editor.getContent(true)));' +
                                                //'var params = {quality : "high", scale : "noscale", wmode : "window", allowscriptaccess : "always", bgcolor : "#fff"};' +
                                                //'var flashvars = {};var attributes = {id : "flashcontent", name : "flashcontent"};' +
                                                //'swfobject.embedSWF("/assets/js/parser/supernote-audio.swf", "flashcontent", "1", "1", "10.2.124", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);' +
                                                'setTimeout(function(){supernote_audio.init();}, 300);' +
                                                //点击iframe时取消浮框并清除选区
                                                //'try{$("body").on("click mousedown", function(){' +
                                                'try{$("body").on("mouseup mousedown", function(){' +
                                                //'$(window.parent.document.body).trigger("click");'+
                                                'window.parent.lenoteDom.dropdown.remove();'+
                                                '"getSelection" in window ? window.parent.getSelection().removeAllRanges() : window.parent.document.selection.empty();' +
                                                ' })}catch(e){}' +
                                            '});' +
                                        '}' +
                                    '}, 50);</script>');
                    html.push('</body></html>');
                    return html.join('');
                }
                var height = this.iframe.calHeight();
                var src = 'document.open();' + (this.editor.options.customDomain && document.domain != location.hostname ?  'document.domain="' + document.domain + '";' : '') +
                              'document.write(\'' + UE.utils.unhtml(render(this, height)) + '\');document.close();';
                var iframe = '<iframe id="iframeNodeView" name="iframeNodeView" width="100%" height="100%" frameborder="0" src="javascript:void(function(){' + src + '}());"></iframe>';
                $('#sidebar-c .note-detail').height(height).html(iframe);
                //$($('#iframeNodeView').get(0).contentWindow.document.body).html(this.getContent());
            },
            
            //显示note时iframe相关方法
            iframe: {
                getIframe: function(){
                    //$(window.frames["iframeNodeView"].document)
                    var iframe = $('#iframeNodeView');
                    return iframe.length > 0? iframe : null;
                },
                
                calHeight: function(){
                    var height = utils.calElemHeight('#sidebar-c .note-detail', null, 5, true);
                    return (height <= 20)? 25 : height;
                },
                
                setHeight: function(){
                    if($('#sidebar-c .note-detail').is(':hidden')) return false;
                    var iframe = this.getIframe();
                    if(iframe){
                        var height = this.calHeight();
                        $('#sidebar-c .note-detail').height(height);
                        iframe.contents().find('body').height(height - 20);
                    }
                }
            },
            
            //设置编辑器高度
            setHeight: function(height){
                height = (height <= 20)? 25 : height;
                if(height !== parseInt(this.editor.iframe.parentNode.style.height)){
                    this.editor.iframe.parentNode.style.height = height + 'px';
                }
                this.editor.document.body.style.height = height - 20 + 'px';
            },
            
            //设置编辑器宽度
            setWidth: function(width){
                width = (width <= 20)? 25 : width;
                if(width !== parseInt(this.editor.iframe.parentNode.style.width)){
                     this.editor.iframe.parentNode.style.width = width + 'px';
                     this.editor.iframe.parentNode.parentNode.style.width = width + 'px';
                }
                this.editor.document.body.style.width = width - 20 + 'px';
            },
            
            //获取编辑器内容
            getContent: function(isOriginal){
                return isOriginal? $.trim(this.data.get('content')) : $.trim(this.editor.getContent());
            },
            
            //获取标题
            getTitle: function(){
                var input = $('#note_title_input');
                if(input.length > 0){
                    //var title = utils.trim(input.val(), true);
                    var title = $.trim(input.val());
                    if(!title || /^\s+$/igm.test(title) || title == '无标题笔记'){
                        title = utils.trim(utils.strip_tags(lenoteAnalyze.encode(this.getContent())));
                        //title = title? UE.utils.html(title).substring(0, 30) : '无标题笔记';
                        if(title){
                            title = UE.utils.html(title).substring(0, 30);
                        }else{
                            var firstAttachment = lenoteDom.editor.data.attachments.getFirst();
                            //title = firstAttachment? firstAttachment.title : '无标题笔记';
                            if(firstAttachment) title = utils.trim(firstAttachment.title || '', true);
                            title = title? UE.utils.html(title).substring(0, 30) : '无标题笔记';
                        }
                    }
                    //return utils.unhtml(title);
                }else{
                    //title = $.trim($('#sidebar-c .note-info div.title').html());
                    title = $.trim($('#sidebar-c .note-info div.title').text());
                    //return UE.utils.unhtml(title).replace(/\s/igm, '&nbsp;');
                }
                return utils.unhtml(title);
            },
            
            //过滤title
            filterTitle: function(title){
                title = title.replace(/&nbsp;/igm, ' ');
                return UE.utils.html(title);
            },
            
            //设置焦点
            focus: function(){
                var input = $('#note_title_input');
                if($.trim(input.val()) == ''){
                    //input.get(0).focus();
                    utils.setFocus('#note_title_input');
                }else{
                    //this.editor.focus(true);
                    setTimeout(function(){lenoteDom.editor.editor.focus(true);}, 50);
                }
            },
            
            //将编辑区域设置为空白
            cleanUI: function(){
                //saved-自动保存: 取消内容变化的监听
                //this.editor.removeListener('contentChange keyup');
                //this.editor.removeListener('contentChange', lenoteDom.editor.saved.contentChange);
                //this.editor.removeListener('keyup', lenoteDom.editor.saved.keybordChange);
                //$('#note_title_input').off('keyup');
                //this.saved.init();
                this.saved.clean();
                
                try{
                    supernote_audio.stop();
                }catch(e){}
                //恢复工具栏字体颜色
                UE.ui.buttons.forecolor.setColor('#000');
                UE.ui.buttons.backcolor.setColor('#eee');
                //lenoteDom.editor.editor.execCommand('FontFamily', '宋体');
                //lenoteDom.editor.editor.execCommand('fontsize', '14px');
                
                //重置编辑器-防止当编辑多个笔记时，点击undo会后退至上一笔记的内容
                this.editor.reset();
                //删除按钮
                this.insertBtn.clean();
                //清除笔记的元数据
                this.data.clean();
                //禁用编辑器
                this.editor.disable();
                //清空编辑器内容
                this.editor.setContent('');
                $('#sidebar-c .note-detail').html('');
                //隐藏按钮、元信息、编辑器容器、工具条
                utils.hide('#sidebar-c .toolbar .btn');
                utils.hide('#sidebar-c .note-info, #sidebar-c .note-meta');
                $('#sidebar-c .note-detail, #sidebar-c .note-editor').hide();
                //清空标题及笔记元信息
                $('#sidebar-c .note-info div.title, #sidebar-c .note-info .extra, #sidebar-c .note-meta').html('');
            },
            
            //显示编辑区域
            showUI: function(){
                $('#sidebar-c .note-editor').hide();
                utils.show('#sidebar-c .toolbar .btn');
                utils.show('#sidebar-c .note-info, #sidebar-c .note-meta');
                $('#sidebar-c .note-detail').show();
                this.show();
            },
            
            //编辑UI
            editUI: function(title, content){
                try{
                    supernote_audio.stop();
                }catch(e){}
                $('#sidebar-c .note-detail').html('').hide();
                $('#sidebar-c .note-info .extra').html('');
                title = $.trim(title || this.getTitle());
                if(title == '无标题笔记') title = '';
                this.editor.enable();
                this.insertTitleInput(title);
                //this.editor.setContent($.trim(content || this.getContent()));
                ////if(title) this.editor.focus(true);
                //if(title) setTimeout(function(){lenoteDom.editor.editor.focus(true);}, 50); //fixed: IE can't run focus function
                if(!UE.browser.ie || (UE.browser.ie && UE.browser.version != 10 && UE.browser.version != 9)){
                    this.editor.setContent($.trim(content || this.getContent()));
                    if(title) setTimeout(function(){lenoteDom.editor.editor.focus(true);}, 50);
                }else{
                    //修复ie9/10有序列表全为0时的轻微闪动问题
                    utils.hide('#sidebar-c .note-editor');
                }
                utils.show('#sidebar-c .toolbar .btn');
                utils.show('#sidebar-c .note-info, #sidebar-c .note-meta');
                $('#sidebar-c .note-editor').show('fast', function(){
                    try{
                        //解决ol在ie9/10下切换列表或其父类显示与隐藏状态时列表为0的情况:是ie9/10下的一个bug
                        if(UE.browser.ie && (UE.browser.version == 10 || UE.browser.version == 9)){
                            lenoteDom.editor.editor.setContent($.trim(content || lenoteDom.editor.getContent()));
                            setTimeout(function(){utils.show('#sidebar-c .note-editor');}, 35);
                            if(title) setTimeout(function(){lenoteDom.editor.editor.focus(true);}, 50);
                        }
                        
                        //滚动到光标处:在列表中测试
                        try{
                            (lenoteDom.editor.editor.selection.getRange()).scrollToView(null, 5);
                        }catch(e){}
                        
                        var _attachskins = $(lenoteDom.editor.editor.body).find('span.attachskin');
                        if(_attachskins.length > 0){
                            for(var i = 0; i < _attachskins.length; i++){
                                var _attachskin = $(_attachskins[i]), attachskinDom = _attachskin.get(0);
                                var _elem = attachskinDom.previousSibling || attachskinDom.previousElementSibling;
                                if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) _attachskin.before('&#8203;');
                                _elem = attachskinDom.nextSibling || attachskinDom.nextElementSibling;
                                if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) _attachskin.after('&#8203;');
                            }
                        }
                        
                        //编辑器更多工具
                        var moretool = $(".edui-for-moretool"), moretoolbox = $("#moretoolbox .edui-toolbar");
                        if(moretoolbox.children().length > 0){
                            moretool.addClass("edui-button-show");
                        }else{
                            moretool.removeClass("edui-button-show");
                        }
                    }catch(e){}
                });
                //$('#sidebar-c .note-meta').hide();
                $('#sidebar-c .note-meta').html('').hide();
                $(window).trigger("editor.event.resize");
                this.insertBtn.clean().save().show();
                
                //saved-自动保存: 监听内容变化
                //lenoteDom.editor.saved.listen();
                this.saved.listen();
            },
            
            //新建UI
            createUI: function(){
                this.cleanUI();
                this.editUI(' ', ' ');
                $('#sidebar-c .note-meta').hide();
                $(window).trigger("editor.event.resize");
            },
            
            /*
             *   检查笔记区域是否正在执行操作
             *   [ignoreList]  忽略的mark, 防止按钮重复点击
             */
            checkIsOpr: function(ignoreList){
                var mark = this.data.get('mark');
                if(mark){
                    ignoreList = ignoreList || [];
                    if($.inArray(mark, ignoreList) == -1){
                        switch(mark){
                            case 'del': $.lebox.warning('正在删除笔记，请稍候...', 800); break;
                            case 'update': $.lebox.warning('正在更新笔记，请稍候...', 800); break;
                            case 'save': $.lebox.warning('正在保存笔记，请稍候...', 800); break;
                            case 'restore': $.lebox.warning('正在还原笔记，请稍候...', 800); break;
                            default:  $.lebox.warning('正在发送请求，请刷新后再试...', 800); 
                        }
                    }
                    return true;
                }
                return false;
            },
            
            //检查笔记是否处理编辑状态
            isEditable: function(){
                return $('#note_title_input').length === 1;
            },
            
            //笔记相关按钮
            insertBtn: {
                clean: function(){
                    $('#sidebar-c .toolbar .btn').remove();
                    $('#sidebar-c .toolbar').removeClass('gray').children(' .r').empty();
                    return this;
                },
                show: function(){
                  utils.show('#sidebar-c .toolbar .btn');
                  //$('#sidebar-c .toolbar .btn').show();
                  return this;  
                },
                create: function(){
                    $('#sidebar-c .toolbar .l').append(btn=$('<a class="new-note btn"><span>新建笔记</span></a>'));
                    btn.click(function(){lenoteView.note.create();});
                    return this;
                },
                save: function(){
                    $('#sidebar-c .toolbar .l').append(btn=$('<a class="save-note btn"><span>完成</span></a>'));
                    btn.click(function(){lenoteView.note.save();});
                    return this;
                },
                saveState: function(is_disable){
                    var btn = $('#sidebar-c .toolbar .save-note');
                    if(btn.length == 0) return;
                    if(is_disable){
                        btn.off('click');
                        btn.addClass('disabled');
                    }else{
                        btn.removeClass('disabled');
                        btn.click(function(){lenoteView.note.save();});
                    }
                },
                edit: function(){
                    $('#sidebar-c .toolbar .l').append(btn=$('<a class="edit-note btn"><span>编辑</span></a>'));
                    btn.click(function(){lenoteView.note.edit();});
                    return this;
                },
                del: function(){
                    $('#sidebar-c .toolbar .l').append(btn=$('<a class="del-note btn btn-gray"><span>删除</span></a>'));
                    btn.click(function(){lenoteView.note.del();});
                    return this;
                },
                trash: function(){
                    $('#sidebar-c .toolbar').addClass('gray').children('.l').append(
                        restoreBtn=$('<a class="restore-note btn"><span>还原</span></a>'),
                        delBtn=$('<a class="del-note btn btn-gray"><span>删除</span></a>')
                    ).end().children('.r').append('<div class="explain">这条笔记在废纸篓中，还原后才能进行编辑。</div>');
                    
                    restoreBtn.click(function(){lenoteView.trash.restore();});
                    delBtn.click(function(){lenoteView.trash.del();});
                    return this;
                },
                share: function(){
                    $('#sidebar-c .toolbar .r').append(btn=$('<a class="share-note btn btn-gray"><span>分享</span></a>'));
                    btn.click(function(event){
                        try{
                           if(!event.isPropagationStopped()) event.stopPropagation();
                           if(!event.isDefaultPrevented()) event.preventDefault();
                        }catch(e){}
                        
                        var popup = $('.popup-menu.shared');
                        if(popup.length == 0){
                            $(this).trigger('mouseover');
                        }else{
                            $('.popup-menu.shared').slideUp('fast', function(){
                               $(this).remove();
                            });
                        }
                    }).hover(
                        function(){
                            var popup = $('.popup-menu.shared'), _this = $(this);
                            if(popup.length == 0){
                                var menu = ['<dl class="popup-menu shared">'], width = $(window).outerWidth(), offset = _this.offset();
                                
                                if(lenoteDom.editor.data.get('shareKey')){
                                    menu.push('<dd data-value="dellink" class="ellipsis"><span>关闭链接</span></dd>');
                                }else{
                                    menu.push('<dd data-value="publiclink" class="ellipsis"><span>公开链接</span></dd>');
                                }
                                
                                menu.push('</dl>');
                                $('body').append(popup = $(menu.join('')));
                                
                                //var left = (width - offset.left > 200)? offset.left + 3: offset.left - popup.outerWidth() + _this.outerWidth() - 15,
                                //      top = offset.top + _this.outerHeight() - 2;
                                var left = (width - offset.left > 200)? offset.left + 3 : offset.left - popup.outerWidth() + _this.outerWidth() - 10,
                                      top = offset.top + _this.outerHeight() - 2;
                                popup.css({left: left, top: top}).slideDown('fast');
                                
                                popup.children('dd').click(function(){
                                    var _this = $(this);
                                    switch(_this.attr('data-value')){
                                        case 'publiclink': lenoteView.note.share();break;
                                        case 'dellink': lenoteView.note.share(true);break;
                                    }
                                }).smartHover();
                            }
                        }
                    );
                    return this;
                }
            },
            
            //插入title的输入控件
            insertTitleInput: function(title){
                $('#sidebar-c .note-info div.title .smart-input').remove();
                var div = ['<div class="smart-input">'];
                div.push('<label for="note_title_input" class="smart-label">标题</label>');
                div.push('<input type="text" maxlength="60" value="' + $.trim(title) + '" name="note_title_input" id="note_title_input"/></div>');
                $('#sidebar-c .note-info div.title').html(div.join(''));
                var input = $('#note_title_input');
                input.smartInput();
                //if(!title) input.get(0).focus();
                if(!title) utils.setFocus('#note_title_input');
                
                //saved-自动保存: 监听标题的变化
                this.saved.monitorTitle();
            },
            
            //编辑区域有关笔记的元信息设置
            data: {
                //清理笔记数据
                clean: function(){
                    $('#sidebar-c .note-editor').removeData('note');
                },
                //获取笔记数据
                get: function(key){
                    var _data = $('#sidebar-c .note-editor').data('note');
                    return (typeof  _data == 'object')? _data[key] : '';
                },
                //增加key/value
                add: function(key, value){
                    var container = $('#sidebar-c .note-editor'), _data = {};
                    _data[key] = value;
                    container.data('note', $.extend(container.data('note') || {}, _data));
                },
                //删除key
                remove: function(key){
                    var container = $('#sidebar-c .note-editor'), _data = container.data('note') || {};
                    delete _data[key];
                    if($.isEmptyObject(_data)){
                        container.removeData('note');
                    }else{
                        container.data('note', _data);
                    }
                },
                //设置笔记数据
                set: function(note){
                    var container = $('#sidebar-c .note-editor');
                    container.data('note', {cid: note.categoryID, id: note.id, ver: note.version, content: note.content, shareKey: note.shareLinkID});
                    //if(note.attachments) container.data('attachments', note.attachments);
                },
                getAll: function(){
                    return $('#sidebar-c .note-editor').data();
                },
                /*
                 *  当前笔记的标签
                 */
                tags: {
                    clean: function(){
                         $('#sidebar-c .note-editor').removeData('tags');
                    },
                    build: function(isDisplay){
                        var _tags = this.getAll(), res = [];
                        if(_tags){
                            for(var key in _tags){
                                //var item = _tags[key], name = this.getName(UE.utils.html(item.name));
                                var item = _tags[key], name = this.getName(utils.html(item.name));
                                if(!name) continue;
                                
                                if(isDisplay){
                                    var _data = {name: name, type: item.type, tagIcon: item.tagIcon};
                                    if(item.id) $.extend(_data, {id: item.id});
                                }else{
                                    //var _data = {tagName: name, tagType: item.type, tagIcon: item.tagIcon};
                                    var _data = {tagName: utils.html(name), tagType: item.type, tagIcon: item.tagIcon};
                                    if(item.id) $.extend(_data, {tagID: item.id});
                                }
                                res.push(_data);
                            }
                        }
                        return res;
                    },
                    isExist: function(name){
                        name = this.getName(name);
                        return this.getKey(name) in this.getAll();
                    },
                    getName: function(name){
                        //return UE.utils.unhtml(utils.trim(utils.strip_tags(name || '')).replace(/\s+?/igm, '').replace(/[,，'"`~!@#\$%\^*\(\)_\+\-=\}\{\|\\\/\?\.:\[\]]/igm, '').substr(0, 20));
                        return utils.unhtml($.trim(name || '').replace(/[,，'"`~!@#\$%\^*\(\)_\+\-=\}\{\|\\\/\?\.:\[\]]/igm, '').substr(0, 20));
                    },
                    getKey: function(name){
                        return '_' + md5(name);
                    },
                    set: function(tags){
                        if(!tags || tags.length < 1) return;
                        
                        var _data = {};
                        for(var i = 0; i < tags.length; i++){
                            var tag = tags[i], name = this.getName(tag.name);
                            if(!name) continue;
                            
                            _data[this.getKey(name)] = {id: tag.id, name: name, type: tag.type, tagIcon: tag.tagIcon};
                        }
                        container = $('#sidebar-c .note-editor').data('tags', _data);
                    },
                    get: function(name){
                        var _data = $('#sidebar-c .note-editor').data('tags');
                        name = this.getName(name);
                        return (name && (typeof  _data == 'object'))? _data[this.getKey(name)] : '';
                    },
                    add: function(name){
                        var name = this.getName(name);
                        if(!name) return;
                        
                        var container = $('#sidebar-c .note-editor'), _data = {}, key = this.getKey(name);
                        _data[key] = {name: name, type: 0, tagIcon: 0};
                        container.data('tags', $.extend(container.data('tags') || {}, _data));
                        return key;
                    },
                    del: function(name){
                        var name = this.getName(name);
                        if(!name) return;
                        
                        var container = $('#sidebar-c .note-editor'), _data = container.data('tags') || {}, key = this.getKey(name);
                        if(key in _data){
                            delete _data[key];
                            container.data('tags', _data);
                        }
                    },
                    getAll: function(){
                        return $('#sidebar-c .note-editor').data('tags') || {};
                    }
                },
                /*当前笔记的附件
                 *  @attachment {resourceKeyId: {resourceKeyId, resourceLink}, resourceKeyId_1: {resourceKeyId_1, resourceLink_1}}
                 */
                attachments: {
                    clean : function(){
                        $('#sidebar-c .note-editor').removeData(['attachments', 'new_attachments']);
                    },
                    cleanNew: function(){
                        $('#sidebar-c .note-editor').removeData('new_attachments');
                    },
                    upload: function(_data, _type){
                        var info = JSON.parse(_data.info), filetype = _data.filetype || ''; ext = filetype? filetype.replace(/^\./ig, '') : '', timestamp = (new Date()).valueOf(),
                              filesize = info.executionResult[0].fileSize || _data.filesize;
                        _type = _type || 640;
                        var attachment = {
                            //title: _data.filename, name: _data.filename.replace(new RegExp(filetype + '$', 'i'), ''), size: _data.filesize, type: filetype, ext: ext,
                            title: _data.filename, name: _data.filename.replace(new RegExp(filetype + '$', 'i'), ''), size: filesize, type: filetype, ext: ext,
                            localID: utils.uuid(), keyID: info.executionResult[0].resourceKeyId, link: info.executionResult[0].resourceLink, _type: _type,
                            uploadTime: timestamp, utime: new Date(timestamp).format('yyyy-MM-dd hh:mm')
                        };
                        attachment = $.extend(attachment, {sizeof: utils.calFileSize(attachment.size), url: this.download(attachment.title, attachment.keyID, attachment.link, attachment.size)});
                        
                        this.add(attachment, true);
                        return attachment;
                    },
                    download: function(title, keyID, link, size){
                        //return '/download/?resourceKeyId=' + keyID + '&resourceLink=' + link;
                        size = size || 0;
                        return '/download/?' + $.param({resourceKeyId: keyID, resourceLink: link, fileName: title, fileSize: size});
                    },
                    getThumb: function(resource, width, height){
                        return '/download/?' + $.param({
                            resourceKeyId: resource.keyID, resourceLink: resource.link, fileName: resource.name || resource.title, fileSize: resource.size || 0, thumbnailWidth: width, thumbnailHeight: height
                        });
                    },
                    isExist: function(local_id){
                        return (new RegExp('\\skey="' + local_id + '"', 'igm')).test(lenoteDom.editor.getContent());
                    },
                    build: function(notCheck){ //notCheck: 不检查附件是否存在于内容中用于解决正在自动保存时上传附件丢失的问题
                        var _attachments = this.getAll(), resources = [];
                        for(var key in _attachments){
                            var item = _attachments[key];
                            if(!notCheck && !this.isExist(item.localID)){ //删除data中已不存在的资源信息
                                this.del(item.localID);
                                continue;
                            }
                            //重新验证资源的类型值
                            var _type = item._type;
                            try{
                                _type = lenoteTag.validType(item.title, _type);
                            }catch(e){}
                            var _attachment = {
                                name: item.title, keyID: item.keyID, link: item.link, size: item.size, uploadTime: item.uploadTime, type: _type,
                                resourceID: item.resourceID || '', local_id: item.localID, version: item.version
                            };
                            resources.push(_attachment);
                        }
                        return resources;
                    },
                    set: function(resources){ //解析成upload一样的属性-通过名称后辍名解析
                        if(!resources || resources.length < 1) return false;
                        
                        for(var i = 0; i < resources.length; i++){
                            var _data = resources[i], indexof = _data.name.lastIndexOf('.'), filetype = (indexof != -1)? _data.name.substring(indexof) : ''; 
                                 ext = filetype? filetype.replace(/^\./ig, '') : '', name = _data.name.replace(filetype, '');
                            
                            var attachment = $.extend(_data, {
                                title: _data.name, name: name, size: _data.size, type: filetype, ext: ext, resourceID: _data.resourceID, localID: _data.local_id, _type: _data.type,
                                keyID: _data.keyID, link: _data.link, uploadTime: _data.uploadTime, utime: new Date(_data.uploadTime).format('yyyy-MM-dd hh:mm')
                            });
                            attachment = $.extend(attachment, {sizeof: utils.calFileSize(attachment.size), url: this.download(attachment.title, attachment.keyID, attachment.link, attachment.size)});
                            this.add(attachment);
                        }
                    },
                    update: function(resources){ //更新resourceID
                        if(!resources || resources.length < 1) return false;
                        
                        var files = this.getAll();
                        for(var i = 0; i < resources.length; i++){
                            var resource = resources[i], key = 'key_' + resource.local_id, item = files[key];
                            if(item){
                                item['resourceID'] = resource.resourceID;
                                item['version'] = resource.resourceVersion;
                                //files[key] = item;
                            }
                        }
                        
                        //$('#sidebar-c .note-editor').data('attachments', files);
                    },
                    add: function(attachment, isNew){
                       var container = $('#sidebar-c .note-editor'), _attachment = {};
                       _attachment['key_' + attachment['localID']] = attachment;
                       container.data('attachments', $.extend(container.data('attachments') || {}, _attachment));
                       
                       if(isNew){
                           var new_attachments = container.data('new_attachments') || {}, key = 'key_' + attachment['localID'];
                           new_attachments[key] = {localID: attachment['localID'], keyID: attachment['keyID']};
                           container.data('new_attachments', new_attachments);
                       }
                    },
                    del: function(localID){
                        var container = $('#sidebar-c .note-editor'), _attachments = container.data('attachments') || {}, key = 'key_' + localID;
                        if(key in _attachments){
                            delete _attachments[key];
                            container.data('attachments', _attachments);
                        }
                    },
                    get: function(localID){
                        var _data = $('#sidebar-c .note-editor').data('attachments');
                        var attachment = (typeof  _data == 'object')? _data['key_' + localID] : '';
                        if(attachment){
                            return $.extend(attachment, {
                                sizeof: utils.calFileSize(attachment.size),
                                url: this.download(attachment.title, attachment.keyID, attachment.link, attachment.size)
                            });
                        }
                        return '';
                    },
                    getFirst: function(){
                        var _attachments = this.getAll(), result = '';
                        for(var key in _attachments){
                            var item = _attachments[key];
                            if(this.isExist(item.localID)){ //检查附件是否存在于正文内容中
                                if($.trim(item.title)){
                                    result = item;
                                    break;
                                }
                            }
                        }
                        return result;
                    },
                    //比较上传时间获取最后上传的资源
                    getLast: function(){
                        var _attachments = this.getAll(), result = '';
                        if(!_attachments) return result;
                        
                        for(var key in _attachments){
                            var item = _attachments[key];
                            //排除ln-text类型的附件
                            if(item._type == 768) continue;
                            if(this.isExist(item.localID)){ //检查附件是否存在于正文内容中
                                var uploadTime = item.uploadTime;
                                try{
                                    uploadTime = parseFloat(uploadTime) || 0;
                                }catch(e){
                                    uploadTime = 0;
                                }
                                item._timestamp = uploadTime;
                                if(result){
                                    if(item._timestamp >= result._timestamp) result = item;
                                }else{
                                    result = item;
                                }
                            }
                        }
                        return result;
                    },
                    getNew: function(){
                        var container = $('#sidebar-c .note-editor'), new_attachments = container.data('new_attachments') || {}, news = {};
                        if(new_attachments && !$.isEmptyObject(new_attachments)){
                            var res = '';
                            for(var key in new_attachments){
                                var item = new_attachments[key];
                                if(this.isExist(item.localID)){
                                    news[key] = item;
                                    res +=  item.keyID + ';';
                                }
                                //}else{
                                    //delete new_attachments[key];
                                    //continue;
                                //}
                            }
                            if($.isEmptyObject(news)){
                                container.removeData('new_attachments');
                            }else{
                                container.data('new_attachments', news);
                            }
                            return res;
                        }else{
                            return '';
                        }
                    },
                    getAll: function(){
                        return $('#sidebar-c .note-editor').data('attachments');
                    }
                }
            }
        },
        
        //下拉功能菜单
        dropdown: {
            //删除所有下拉功能菜单
            remove: function(callback){
                $('.popup-menu').slideUp('fast', function(){
                    //注销esc事件监听
                    $(document).unbind('keydown.dropdown');
                    
                    var id = $('.popup-menu').attr('data-value');
                    //将非当前选中的功能菜单箭头标志隐藏
                    //$('#' + id + ' > .item').not('.on').children('i.dropdown').removeClass('active');
                    $('#' + id + ' > .item').children('i.dropdown').removeClass('active');
                    //删除功能菜单
                    $(this).remove();
                    if(typeof callback == 'function') callback();
                });
            },
            
            /*
             *   生成功能菜单
             *   params:
             *      mark:    被点击的箭头标志(用于打开功能菜单)
             *      menu:  菜单
             */
            insert: function(mark, menu, observer){
                //因为目标元素的父层的overflow为Hidden，所以只能用定位的方式实现功能下拉菜单
                $('body').append(menu.join(''));
                mark.addClass('active');
                if(UE.browser.ie && (UE.browser.version == 8 || UE.browser.version == 9)){
                    setTimeout(function(){
                        $('.popup-menu').css({left: mark.offset().left + 5, top: mark.offset().top + 15}).slideDown('fast');
                    }, 50);
                }else{
                    $('.popup-menu').css({left: mark.offset().left + 5, top: mark.offset().top + 15}).slideDown('fast');
                }
                
                //绑定esc事件
                $(document).unbind('keydown.dropdown').bind('keydown.dropdown', function(event){
                    var key = event.which || event.keyCode;
                    if(key == 27){
                        if(event.isDefaultPrevented()) event.preventDefault();
                        lenoteDom.dropdown.remove();
                    }
                });
                
                //功能菜单的事件监听
                $('.popup-menu dd').click(observer).smartHover();
            },
            
            /*
             *   显示下拉功能菜单
             *   params:
             *      _this:        被点击的元素，这里就是打开功能菜单的箭头标志
             *     callback:   插入指定类别的功能菜单
             */
            show: function(mark, id, callback){
                if($('.popup-menu').length > 0){
                    //如果功能菜单已打开且mark就是当前打开的功能菜单的箭头标志则不做任何处理
                    if($('.popup-menu').attr('data-value') == id){
                        this.remove();
                        return false;
                    }else{
                        //如果功能菜单已打开且不是当前的则先删除已打开的功能菜单，然后再打开新的功能菜单
                        this.remove(function(){
                            callback.insert(mark, id);
                            mark = null;
                        });
                    }
                }else{
                    callback.insert(mark, id);
                }
            }
        },
        
        //HTML代码片段
        fragment: {
            getShare: function(key){
                var url = utils.getDomain() + '/shared/' + key,
                      html = ['<table cellpadding="0" cellspacing="0" class="form" style="width:400px;"><tbody>'];
                html.push('<tr><td>粘贴此链接到电子邮件、微博、微信或聊天对话框中，把笔记分享给朋友们吧。</td></tr>');
                html.push('<tr><td>任何人都可以使用此链接查看笔记。</td></tr>');
                html.push('<tr class="sep"><td><input type="text" class="text publiclink" disabled="disabled" readonly="readonly" value="' + url + '"/></td></tr>');
                html.push('<tr><td class="btnwrap clearfix" style="width:100%;"><div class="l"><div class="btn btn-confirm btn-black">停止分享</div></div>');
                html.push('<div class="r clearfix"><span class="prompt" style="float:left;padding:0;"></span><a class="btn btn-copy btn-red" href="javascript:;" style="padding: 0 12px;">复制链接地址</a><div class="btn btn-gray btn-close">完成</div></div></td></tr>');
                html.push('</tbody></table>');
                return html.join('');
            },
            getImportPrompt: function(){
                html = ['<table cellpadding="0" cellspacing="0" class="form" style="width:400px;"><tbody>'];
                html.push('<tr><td style="line-height: 20px;padding-bottom:15px;">乐记事现已全面改版，欢迎使用新版的乐云记事。我们将把您以往的笔记数据导入到新版本中，以保证您数据的完整性。<span style="color:#be0800;">（' +
                                '将以您老版乐记事中最后一次同步的数据为准，此过程将花费几分钟时间' +
                                '）</span></td></tr>');
                html.push('<tr><td class="btnwrap clearfix" style="width:100%;">');
                html.push('<div class="r clearfix"><div class="btn btn-red btn-close" style="padding: 0 12px;">知道了</div></div></td></tr>');
                html.push('</tbody></table>');
                return html.join('');
            }
        },
        
        //笔记本(组)DOM操作
        category: {
            //打开菜单组
            openMenu: function(_this){
                var elem = $(_this), target = elem.next('.' + elem.attr('target'));
                elem.find('.icon-arrow').toggleClass('open');
                target.slideToggle();
            },
            
            //获取当前笔记本(组)，如果没有则获取第一个笔记本(组)
            getCurrent: function(notFirst){
                var notebook = $('#sidebar-a .list-categories li');
                var item = notebook.find('.item.on');
                if(item.length > 0) return item.closest('li').attr('id');
                return notFirst? null : notebook.first().attr('id');
            },
            
            //获取默认笔记本(组)
            getDefault: function(norequired){
                var defaultCid = $('#sidebar-a').data('defaultCategoryID');
                if(defaultCid) defaultCid = lenoteDom.category.getDomID(defaultCid);
                return norequired? defaultCid : (defaultCid || this.getCurrent());
            },
            
            //更新笔记本(组)树的笔记数目
            count: function(id, number, isSelected, noUpdateAll, noLoop){
                if(!id && isSelected) id = this.getSelected();
                if(id){
                    try{
                        var notebook = $('#sidebar-a li#' + id);
                        if(notebook.length == 0) notebook = $('#sidebar-a li#' + lenoteDom.category.getDefault(true));
                        var count = notebook.data('num') || 0;
                        if(/^-?\d+$/.test(count)){
                            count = parseInt(count) + number;
                            if(count < 0) count = 0;
                            notebook.children('.item').find('.count .c').text(count);
                            notebook.data($.extend(notebook.data(), {num: count}));
                            
                            //更新当前选中的分类列表页的笔记数
                            if(this.isSelected(id)){
                                lenoteDom.note.setFilterDescription(id);
                            }
                            
                            //当删除笔记或添加笔记时更新所有笔记及回收站，但在星标笔记上会有一个问题：即在删除分类时如何确认其中的星标笔记数?暂时还未解决这个bug
                            if(id != 'all-notes' && !noUpdateAll){  //排除设置count时重复计算的问题
                                $('#all-notes').data($.extend($('#all-notes').data(), {num: ($('#all-notes').data('num') || 0) + number}));
                                $('#all-notes').children('.item').find('.count .c').text($('#all-notes').data('num'));
                            }
                        }
                        
                        //查找其父级是否存在，同步更新笔记数目--以后不再通过dom树来维持分类的层级关系而是将层级设置在分类的data中,这样更可靠
                        if(!noLoop){
                            var parents = notebook.parents('li[id^="' + this.getDomID() + '"]');
                            for(var i = 0; i < parents.length; i++){
                                this.count($(parents[i]).attr('id'), number, false, true, true);
                            }
                        }
                    }catch(e){}
                }
            },
            
            //计算分享的笔记数
            shared_count: function(number){
                try{
                    var notebook = $('#sidebar-a li#myshare'), count = notebook.data('num') || 0;
                    if(/^-?\d+$/.test(count)){
                        count = parseInt(count) + (parseInt(number) || 0);
                        if(count < 0) count = 0;
                        notebook.children('.item').find('.count .c').text(count);
                        notebook.data($.extend(notebook.data(), {num: count}));
                        //更新描述区的笔记数
                        if(lenoteDom.category.isSelected('myshare')) lenoteDom.note.setFilterDescription('myshare');
                    }
                }catch(e){}
            },
            
            //计算回收站的笔记数
            trash_count: function(number){
                try{
                    var trash = $('#sidebar-a li#trash'), count = trash.data('num') || 0;
                    if(/^-?\d+$/.test(count)){
                        if(number === 0){
                            count = 0;
                        }else{
                            count = parseInt(count) + (parseInt(number) || 0);
                            if(count < 0) count = 0;
                        }
                        trash.children('.item').find('.count .c').text(count);
                        trash.data($.extend(trash.data(), {num: count}));
                        //更新描述区的笔记数
                        if(lenoteDom.category.isSelected('trash')){
                            lenoteDom.note.setFilterDescription('trash');
                        }
                    }
                }catch(e){}
            },
            
            //笔记本功能菜单
            dropdown: {
                /*
                 *   生成功能菜单
                 *   params:
                 *      mark:  被点击的箭头标志(用于打开功能菜单)
                 *      id:  mark所属的笔记本(组)的元素ID
                 */
                insert: function(mark, id){
                    var notebook = $('#' + id), cid = notebook.data('id');
                    var menu = ['<dl class="popup-menu" data-value="' + id + '">'];
                    //关闭多级分类的创建
                    if(false && notebook.data('level') > 0 && notebook.data('level') < 2){
                        menu.push('<dd data-value="create" class="ellipsis"><i class="icon icon_newnotebook"></i>新建子分类</dd>');
                    }
                    menu.push('<dd data-value="rename" class="ellipsis"><span>重命名</span></dd>');
                    menu.push('<dd data-value="delete" class="ellipsis' + (notebook.data('delable')? '' : ' disabled') + '"><span>删除</span></dd>');
                    menu.push('</dl>');
                    
                    lenoteDom.dropdown.insert(mark, menu, function(){
                        switch($(this).attr('data-value')){
                            case 'rename': lenoteView.category.rename(id);break;
                            case 'create': lenoteView.category.create(cid);break;
                            //case 'createNote': lenoteView.note.create(false);break;
                            case 'delete': lenoteView.category.del(id);break;
                        }
                    });
                },
                
                /*
                 *   显示功能菜单
                 *   params:
                 *      _this:  被点击的元素，这里就是打开功能菜单的箭头标志
                 */
                show: function(_this){
                    var mark = $(_this), id = mark.closest('li').attr('id');
                    lenoteDom.dropdown.show(mark, id, lenoteDom.category.dropdown);
                },
               
               //显示星标笔记的功能菜单
               showStar: function(_this){
                   var mark = $(_this), id = mark.closest('li').attr('id');
                   lenoteDom.dropdown.show(mark, id, {insert: function(mark, id){
                       var menu = ['<dl class="popup-menu" data-value="' + id + '" style="width:100px;">'];
                       menu.push('<dd data-value="create" class="ellipsis">取消全部星标...</dd>');
                       menu.push('</dl>');                       
                       lenoteDom.dropdown.insert(mark, menu, function(){
                           switch($(this).attr('data-value')){}
                       });
                   }});
               },
               
               //标签的功能菜单
               showTags: function(_this){
                   var mark = $(_this), id = 'tags_column';
                   lenoteDom.dropdown.show(mark, id, {insert: function(mark, id){
                       var menu = ['<dl class="popup-menu" data-value="' + id + '">'];
                       menu.push('<dd data-value="create" class="ellipsis">新建标签...</dd>');
                       menu.push('<dd data-value="create" class="ellipsis">隐藏未使用的标签</dd>');
                       menu.push('<dd data-value="create" class="ellipsis">按使用频率从高到低排序</dd>');
                       menu.push('<dd data-value="create" class="ellipsis">按使用频率从低到高排序</dd>');
                       menu.push('</dl>');                       
                       lenoteDom.dropdown.insert(mark, menu, function(){
                           switch($(this).attr('data-value')){}
                       });
                   }});
               },
               
               //回收站的功能菜单
               showTrash: function(_this){
                   var mark = $(_this), id = mark.closest('li').attr('id');
                   lenoteDom.dropdown.show(mark, id, {insert: function(mark, id){
                       var menu = ['<dl class="popup-menu" data-value="' + id + '">'];
                       menu.push('<dd data-value="empty" class="ellipsis">清空废纸篓</dd>');
                       menu.push('</dl>');
                       lenoteDom.dropdown.insert(mark, menu, function(){
                           switch($(this).attr('data-value')){
                               case 'empty': lenoteView.trash.clear();break;
                           }
                       });
                   }});
               },
               
               //分类下拉列表
               showCategory: function(category, level, selectedID){
                   var menu = [], padding = 0;
                   level = level || 0, padding = level * 12;
                   for(var i = 0; i < category.length; i++){
                       var item = category[i]; //item.level
                       menu.push('<dd _id="' + item.id + '" logo="' + item.logoID + '" class="ellipsis' +
                                         (selectedID == item.id? ' selected' : '') +
                                         '" style="padding-left:' + padding + 'px;" title="' + item.name + '"><span>' +
                                         item.name + '</span></dd>');
                       if(item.children) menu.push(arguments.callee(item.children, level + 1, selectedID));
                   }
                   return menu.join('');
               }
            },
            
            //创建/重命名笔记本(组)的html
            getChtml: function(title){
                var html = ['<table cellpadding="0" cellspacing="0" class="form" style="width:330px;"><tbody>'], title = title || '';
                html.push('<tr><th><label for="inputTitle">标题</label></th><td><input type="text" maxlength="30" placeholder="请输入笔记本名称" class="text encopy" id="inputTitle" value="' + title + '"/></td></tr>');
                html.push('<tr><th></th><td><span class="prompt"></span></td></tr>');
                html.push('<tr><th></th><td align="right" class="btnwrap clearfix"><div class="btn btn-gray btn-close">取消</div><div class="btn btn-red btn-confirm">确定</div></td></tr>');
                html.push('</tbody></table>');
                return html.join('');
            },
            
            //确认对话框
            getConfirmHtml: function(content, btnName){
                btnName = btnName || '删除';
                var html = ['<table cellpadding="0" cellspacing="0" class="form" style="width:350px;"><tbody>'];
                //html.push('<tr><td style="font-size: 12px;padding: 0;padding-left: 5px;*text-align:left;*position:absolute;*padding-top:15px;"' + (utils.isSafari()? ' class="safari"' : '') + '>' + content + '</td></tr>');
                html.push('<tr><td style="font-size: 12px;padding: 0;padding-left: 5px;*text-align:left;*padding-top:15px;"' + (utils.isSafari()? ' class="safari"' : '') + '>' + content + '</td></tr>');
                html.push('<tr><td><span class="prompt"></span></td></tr>');
                //html.push('<tr><td align="right" class="btnwrap clearfix" style="*padding-top:50px;"><div class="btn btn-gray btn-close">取消</div><div class="btn btn-red btn-confirm">' + btnName + '</div></td></tr>');
                html.push('<tr><td align="right" class="btnwrap clearfix"><div class="btn btn-gray btn-close">取消</div><div class="btn btn-red btn-confirm">' + btnName + '</div></td></tr>');
                html.push('</tbody></table>');
                return html.join('');
            },
            
            //比较当前选中的笔记本(组)与传递过来的笔记本(组)ID是否相同，排除所有笔记和星标笔记
            isEqualSelected: function(id){
                var sel = this.getSelected();
                return $.inArray(sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) != -1 || this.resolveID(sel) == id;
            },
            
            //获取当前选中的笔记本(组)或回收站等其它菜单
            getSelected: function(){
                var item = $('#sidebar-a .list li .item.on');
                return (item.length > 0)? item.closest('li').attr('id') : null;
            },
            
            //将选中的笔记本(组)、回收站、所有笔记等菜单设置为高亮
            selected: function(id){
                if(id){
                    $('#sidebar-a .list li, #sidebar-a .list div.item').removeClass('on');
                    $('#' + id).addClass('on').children('div.item').addClass('on');
                }
            },
            
            isSelected: function(id){
                return $('#sidebar-a .list li#' + id).hasClass('on');
            },
            
            //解析笔记本(组)id
            resolveID: function(id){
                if(!id) return null;
                //var r = id.match(/sa-ca-\w+/i), _id;
                var r = id.match(new RegExp(this.getDomID() + '\\w+', 'i')), _id;
                if(r && r.length == 1){
                    _id = r[0].slice(6);
                }
                return _id;
            },
            
            /*
             *   在指定位置插入笔记本(组)
             *   params:
             *     id:         dom的父ID
             *     name:   dom的名称
             *     dom:    待插入的新笔记本(组)
             */
            insert: function(id, name, dom){
                var selector = '#sidebar-a .list-categories', selected, items, target, level;
                if(user.getUState('rcid') == id){
                    selected = $(selector), items = selected.children('li[id^="' + this.getDomID() + '"]'), target = selected, level = 1;
                }else{
                    var children;
                    selector += ' #' + this.getDomID(id), selected = $(selector), children = selected.children('ul'), level = selected.data().level + 1;
                    //如果没有children则插入ul并增加箭头标志
                    if(children.length == 0){
                        var _item = selected.children('div.item');
                        _item.prepend('<i class="icon icon-arrow e_arrow"></i>').end().append(children = $('<ul></ul>'));
                        //监听箭头打开/关闭事件
                        lenoteObserver.arrow(this.getDomID(id));
                        //修改添加子元素的父元素的缩进, 如果是一级元素则不添加
                        _item.css({paddingLeft: function(i, v){
                             var pl = parseInt(v);
                             //return (pl == 24)? pl : pl + 4;
                             if(pl == 24){
                                 return pl;
                             }else{
                                 //更新待插入元素的缩进
                                 dom.children('div.item').css({paddingLeft: function(i, v){return parseInt(v) + 4;}});
                                 return pl + 4;
                             }
                        }});
                    }
                    items = children.children('li[id^="' + this.getDomID() + '"]');
                    target = children;
                }
                
                dom.data($.extend(dom.data(), {'level': level}));
                
                //获取所有子元素的名称进行对比排序
                if(items.length > 0){
                    //比较名称大小智能插入笔记本(组)节点
                    for(var i = 0; i < items.length; i++){
                        var item = $(items[i]);
                        if(name.charCodeAt() < item.data('name').charCodeAt()){
                            //对于相同元素(如dom)，before会将其插入最后一个操作的元素前面
                            item.before(dom);
                            break;
                        }else if(i + 1 == items.length){
                            item.after(dom);
                        }
                    }
                }else{
                    target.append(dom);
                }
                //监听笔记本（组）及右键功能菜单
                lenoteObserver.category(this.getDomID(dom.data('id')));
                //更新笔记本（组）的版本树,这里的id是等插入笔记本(组)的父ID
                //this.updateVersion(this.getDomID(id), true);
            },
            
            //当修改、新建、删除笔记/本(组)时递归更新版本号 
            //updateVersion: function(id, andself){
            //    if(!id) return;
            //    var category = $('#' + id), pnode = category.data('pnode');
            //    if(andself === true){
            //        category.data($.extend(category.data(), {ver: category.data('ver') + 1}));
            //    }
            //    
            //    if(pnode && (pnode != user.getUState('rcid'))){
            //        var c = $('#' + this.getDomID(pnode));
            //        c.data($.extend(c.data(), {ver: c.data('ver') + 1}));
            //       this.updateVersion(this.getDomID(c.data('pnode')), true);
            //    }
            //},
            
            //仅编辑笔记本时改变:添加笔记、笔记本均不变
            //updateVersion: function(id){
            //    if(!id) return;
            //    var category = $('#' + id);
            //    category.data($.extend(category.data(), {ver: category.data('ver') + 1}));
            //},
            
            //删除笔记本（组）
            del: function(id){
                var category = $('#' + id), pnode = category.data('pnode'), delUl = false;
                //查找其父级是否存在，更新箭头标志并删除ul
                if(pnode && (pnode != user.getUState('rcid'))){
                    var selected = $('#' + this.getDomID(pnode));
                    if(selected.children('ul').children('li[id^="' + this.getDomID() + '"]').length < 2){
                        var _item = selected.children('div.item');
                        _item.removeClass('active').children('i[class*="icon-arrow"]').remove();
                        //更新父元素的缩进, 如果是一级元素则不修改
                        _item.css({paddingLeft: function(i, v){
                             var pl = parseInt(v);
                            return (pl == 24)? pl : pl - 4;
                        }});
                        delUl = true;
                    }
                    //this.updateVersion(id);
                    //this.count(this.getDomID(pnode), -parseInt(category.data('num')));
                }
                
                //总笔记数、回收站笔记数更新
                //var note_count = parseInt(category.data('num'));
                //if(pnode && (pnode != user.getUState('rcid'))){
                //    this.count(this.getDomID(pnode), -note_count);
                //}else if(pnode == user.getUState('rcid')){
                //    this.count(id,  -note_count);
                //}
                //if(note_count != 0) lenoteDom.category.trash_count(note_count);
                
                //如果删除的是当前分类则更新笔记列表及笔记
                var target_id = this.isSelected(id)? this.queryAvailable(id) : null;
                
                category.remove();
                if(delUl) selected.children('ul').remove();
                
                if(target_id){
                    try{
                        if(target_id == 'all-notes'){
                            $('#' + target_id).trigger('click');
                        }else{
                            lenoteView.note.getListByCategory(target_id);
                        }
                    }catch(e){}
                }
            },
            
            //递归查找可用的分类
            queryAvailable: function(id){
                var _current = $('#sidebar-a .list li#' + id), res = _current.next('li[id^="' + this.getDomID() + '"]');
                if(res.length == 0) res = _current.prev('li[id^="' + this.getDomID() + '"]');
                if(res.length == 0) res = _current.parent('ul').parent('li[id^="' + this.getDomID() + '"]');
                return (res.length == 0)? 'all-notes' : res.attr('id');
            },
            
            //获取笔记本(组)dom id
            getDomID: function(id){
                return id? 'sa-ca-' + id : 'sa-ca-';
            },
            
            //获取笔记本的图标样式
            iconMaps: {
                'icon_0' : 'notebook_archive', 'icon_1' : 'notebook_book', 'icon_2' : 'notebook_clock', 'icon_3' : 'notebook_work',
                'icon_4' : 'notebook_tea', 'icon_5' : 'notebook_trip', 'icon_6' : 'notebook_piggy'
            },
            getIcon: function(logoID){
                logoID = 'icon_' + (logoID || 0);
                return (logoID in this.iconMaps)? this.iconMaps[logoID] : this.iconMaps['icon_0'];
            },
            
            //检查分类是否存在，且当重命名时排除当前分类
            exists: function(name, exclude){
                if(name === exclude) return false;
                return $('#sidebar-a .list-categories .title[_title="' + md5(name) + '"]').length > 0;
            },
            
            //禁止创建的笔记本名称
            prohibited: function(name){
                var arr = ['所有笔记', '星标笔记', '我的分享'];
                return $.inArray(name, arr) !== -1;
            },
            
            /*
             *   笔记本(组)的列表HTML Dom
             *   params:
             *      category: 笔记本(组)对象
             *      isTree:  是否包含笔记本，笔记本(组)的图标是不一样的
             *     paddingLeft: 笔记本的间距
             */
            build: function(category, isTree, paddingLeft, level){
                if(!paddingLeft) paddingLeft = 24;
                var id = this.getDomID(category.id), icon = '';
                
                icon = '<i class="icon icon_notebook ' + this.getIcon(category.categoryLogoID) + '"></i>';
                if(isTree) icon = '<i class="icon icon-arrow e_arrow"></i>' + icon;
                
                var li = ['<li id="' + id + '" class="e_show_notebook">'];
                li.push('<div class="item ellipsis" style="padding-left:' + paddingLeft + 'px">' + icon);
                li.push('<span class="title" _title="' + md5(category.name) + '">' + category.name + '</span>');
                li.push('<span class="count clearfix"><span class="l"></span><span class="c">' + category.numberOfNote + '</span><span class="r"></span></span>');
                li.push('<i class="icon icon-action e_notebook_action dropdown"></i></div>');
                li.push('</li>');
                var _dom = $(li.join(''));
                level = (/^\d+$/.test(level))? parseInt(level) : -1;
                _dom.data({
                    id: category.id, ver: category.version, type: category.type, delable: category.deletable, pnode: category.parentNode,
                    name: category.name, num: category.numberOfNote, level: level, logoID: category.categoryLogoID
                });
                return _dom;
            },
            
            /*
             *   获取一个笔记本(组)及其子笔记本的dom对象
             *   params:
             *      category: 笔记本(组)对象
             *     paddingLeft: 笔记本的间距
             */
            recursiveBuild: function(category, paddingLeft, level){
                //屏蔽待办事项
                category['_name'] = category.name;
                category['name'] = utils.unhtml(category.name);
                if(category.name == '待办事项' && category.deletable == false) return '';
                level = (/^\d+$/.test(level))? parseInt(level) + 1 : 1;
                var children = category.categories || [];
                paddingLeft = (/^\d+$/.test(paddingLeft))?  parseInt(paddingLeft) + (children.length > 0? 24 : 20) : 24;
                var _dom = lenoteDom.category.build(category, children.length > 0, paddingLeft, level);
                
                if(children.length > 0){
                    var ul = $('<ul></ul>');
                    for(var i = 0; i < children.length; i++){
                        //var child = children[i];
                        //child['_name'] = child.name;
                        //child['name'] = utils.unhtml(child.name);
                        //ul.append(arguments.callee(child, paddingLeft, level));
                        ul.append(arguments.callee(children[i], paddingLeft, level));
                    }
                     _dom.append(ul);
                }
                
                return _dom;
            },
            //获取页面上的笔记本的结构数据
            getAll: function(category){
                var data = [];
                category = category || $('#sidebar-a .list-categories').children('li');
                for(var i = 0; i < category.length; i++){
                    var item = $(category[i]), _data = item.data(), son = item.children('ul').children('li');
                    if(son.length > 0) _data['children'] = arguments.callee(son);
                    data.push(_data);
                }
                return data;
            }
        },
        
        //笔记DOM操作
        note: {
            //显示笔记内容
            init: function(note){
                var selectedID = lenoteView.dom.category.getSelected();
                lenoteDom.editor.cleanUI();
                $('#sidebar-c .note-info div.title').html(UE.utils.unhtml(note.title) || '');
                this.insertDate(note.createTime, note.lastUpdateTime);
                if(selectedID != 'trash') this.insertPublicLink(note.shareLinkID);
                this.insertTags();
                this.insertCategory(note.categoryID);
                lenoteDom.editor.data.set(note);
                lenoteDom.editor.editor.setContent(lenoteAnalyze.decode(note.content, true));
                lenoteDom.editor.showUI();
                setTimeout(function(){
                    if(selectedID == 'myshare'){
                        lenoteDom.editor.insertBtn.clean().edit().share().show();
                    }else if(selectedID == 'trash'){
                        lenoteDom.editor.insertBtn.clean().trash().show();
                    }else{
                        lenoteDom.editor.insertBtn.clean().create().edit().del().share().show();
                    }
                }, 100);
                $('#sidebar-c .note-meta').show();
                $(window).trigger("editor.event.resize");
            },
            
            updateIcon: function(){
                var wrap =  $('#sidebar-b .wrap'), notes = wrap.find('.list-notes li');
                wrap.find('div.logo, div.empty').remove();
                if(notes.length > 0){
                    wrap.append('<div class="logo"></div>');
                }else{
                    var type = wrap.find('.list-notes').data('type'), html = '';
                    switch(type){
                        case 'starnotes':
                            html = '<div class="empty star"><img src="/assets/images/empty_star.png" alt=""/><p>笔记本为空<br/>对重要的笔记标记星标，更好的管理</p></div>';
                            break;
                        case 'sharenotes':
                            html = '<div class="empty share"><img src="/assets/images/empty_share.png" alt=""/><p>笔记本为空<br/>将笔记公开，分享给朋友，同事和家人</p></div>';
                            break;
                        case 'search':
                            html = '<div class="empty search"><img src="/assets/images/empty_search.png" alt=""/><p class="clearfix">笔记本为空<br/><span>没有找到包含“</span>' +
                                        '<span class="ellipsis q' + (utils.isSafari()? ' safari' : '') + '">' + utils.unhtml($('#sidebar-b .search input').val()) + '</span><span>”的笔记</span></p></div>';
                            break;
                        case 'trash':
                            html = '<div class="empty trash"><img src="/assets/images/empty_trash.png" alt=""/><p>废纸篓为空<br/>废纸篓中还没有被扔掉的笔记</p></div>';
                            break;
                        default:
                            html = '<div class="empty"><img src="/assets/images/empty.png" alt=""/><p>笔记本为空<br/>使用记事本组织管理笔记建立记忆库</p></div>';
                    }
                    wrap.append(html);
                }
            },
            
            tag: {
                observer: function(isEdit){
                    var meta = $('#sidebar-c .note-meta'), tags = meta.children('span.tags'), _this_ = this;
                    if(isEdit){
                        tags.on('click', 'a.tagname', function(){
                            $('#sidebar-c .note-meta span.tags a.tagname').removeClass('active');
                            $(this).addClass('active');
                        }).on('dblclick', 'a.tagname', function(){
                            var _this = $(this);
                            _this_.del(_this.children('.name').text());
                            _this.remove();
                        }).on('click', 'a.tagname .del', function(){
                            var _this = $(this);
                            _this.addClass('hover');
                            _this_.del(_this.prev('.name').text());
                            _this.closest('a.tagname').remove();
                        });
                        
                        tags.find('.gentag input.newtag').focus(function(){
                            var _this = $(this), gentag = _this.closest('span.gentag'), v = lenoteDom.editor.data.tags.getName(_this.val());
                            gentag.addClass('active');
                            gentag.next('.taglen').text('');
                            _this.val((v == '+标签' || v == '标签')? '' : v);
                        }).blur(function(){
                            var _this = $(this), gentag = _this.closest('span.gentag');
                            gentag.removeClass('active');
                            gentag.next('.taglen').text('');
                            _this_.add(_this.val());
                            _this.val('+标签').width(35);
                        //}).keypress(function(event){
                        //    var key = event.which || event.keyCode, _this = $(this), gentag = _this.closest('span.gentag'), taglen = gentag.next('.taglen');
                        //    taglen.text(_this.val() + String.fromCharCode(event.which));
                        //    var w = taglen.width();
                        //    _this.stop(true, true).animate({width: (w < 35? 35 : w + 5)}, 100);
                        //    
                        //    console.info(event.which + ':' + String.fromCharCode(event.which));
                        }).keydown(function(event){
                            try{
                               if(!event.isPropagationStopped()) event.stopPropagation();
                            }catch(e){}
                            
                            var key = event.which || event.keyCode, _this = $(this), gentag = _this.closest('span.gentag');
                            if(key == 8 || key == 46){
                               if(_this.val() == ''){
                                   var _t = gentag.prev('a.tagname');
                                   if(_t.length > 0){
                                       _this_.del(_t.children('.name').text());
                                       _t.remove();
                                   }
                               }
                            }else if(key == 9){
                                if(!event.isDefaultPrevented()) event.preventDefault();
                                _this.trigger('blur').trigger('focus');
                            }
                        }).keyup(function(event){
                            try{
                               if(!event.isPropagationStopped()) event.stopPropagation();
                            }catch(e){}
                            
                            var key = event.which || event.keyCode, _this = $(this), gentag = _this.closest('span.gentag'), taglen = gentag.next('.taglen');
                            //自动调整输入框宽度
                            //_this.attr('size', _this.val().length);
                            //_this.width(function(i, c){
                            //    //if(len > 3) key == 8? c - 5 : c + 5;
                            //    return len > 3? len * 7 : 35;
                            //});
                            //taglen.html(UE.utils.unhtml(_this.val()).replace(/\s/, '&nbsp;'));
                            taglen.text(_this.val().replace(/\s/igm, '#'));
                            var w = taglen.width();
                            //_this.width(w < 35? 35 : w + 5);
                            _this.stop(true, true).animate({width: (w < 35? 35 : w + 10)}, 100);
                            
                            //console.info(key + ':' + String.fromCharCode(key));
                            
                            //if($.inArray(key, [13, 188, 186]) != -1){ //Enter与,，;；生成新标签并继续创建标签
                            if(key == 13){
                                _this.trigger('blur').trigger('focus');
                            }else if(key == 27){ //esc 取消当前正在输入的标签
                                _this.val('+标签').width(35);
                                _this.trigger('blur');
                                //lenoteDom.editor.editor.focus(true);
                                setTimeout(function(){lenoteDom.editor.editor.focus(true);}, 50); //fixed: IE can't run focus function
                            }
                            //}else if(key == 8){ //Backspace
                            //}else if(key == 46){ //Del
                            //    if(_this.val() == ''){
                            //        var _t = gentag.prev('a.tagname');
                            //        if(_t.length > 0){
                            //            _this_.del(_t.children('.name').text());
                            //            _t.remove();
                            //        }
                            //    }
                            //}
                        });
                    }else{
                       //if(tags.length > 0){
                       //    tags.children('a.tagname').click(function(){
                       //        $('#sidebar-c .note-meta span.tags a.tagname').removeClass('active');
                       //        $(this).addClass('active');
                       //    });
                       //}
                    }
                },
                add: function(name){
                    //name = UE.utils.html(lenoteDom.editor.data.tags.getName(name)) || '';
                    name = utils.html(lenoteDom.editor.data.tags.getName(name)) || '';
                    if(name && name != '标签' && !lenoteDom.editor.data.tags.isExist(name)){
                        var id = lenoteDom.editor.data.tags.add(name);
                        $('#sidebar-c .note-meta span.tags .gentag').before(this.get(name, id));
                        //saved-自动保存: 增加标签时触发
                        lenoteDom.editor.saved.setPoll();
                    }
                },
                del: function(name){
                    lenoteDom.editor.data.tags.del(name);
                    //saved-自动保存: 删除标签时触发
                    lenoteDom.editor.saved.setPoll();
                },
                get: function(name, id){
                    name = lenoteDom.editor.data.tags.getName(name);
                    if(id){
                        return '<a class="tagname" _id="' + id +'" href="javascript:;"><span class="name">' + name + '</span><span class="del" title="删除">&#215;</span></a>';
                    }else{
                        return '<a class="tagname" href="javascript:;"><span class="name">' + name + '</span><span class="del" title="删除">&#215;</span></a>';
                    }
                }
            },
            
            //插入分类
            insertCategory: function(cid, isEdit){
                if(isEdit){
                    cid = cid || lenoteDom.category.resolveID(lenoteDom.category.getDefault());
                    var dom = $('#' + lenoteDom.category.getDomID(cid));
                    if(dom.length == 0) return;
                    $('#sidebar-c .note-info .extra').append(
                        btn=$('<a class="note-category clearfix"><i class="icon ' + lenoteDom.category.getIcon(dom.data('logoID')) + '"></i>' + 
                                  '<span class="title ellipsis" _id="' + cid + '" title="' + dom.data('name') + '">' + dom.data('name') + '</span></a>')
                    );
                    dom = null;
                    btn.click(function(event){
                        try{
                           if(!event.isPropagationStopped()) event.stopPropagation();
                           if(!event.isDefaultPrevented()) event.preventDefault();
                        }catch(e){}
                        
                        var popup = $('.popup-menu.category');
                        if(popup.length == 0){
                            var _this = $(this), category = lenoteDom.category.getAll();
                            if(category.length > 0){
                                var selected = _this.children('span.title').attr('_id'),
                                      menu = lenoteDom.category.dropdown.showCategory(category, 0, selected),
                                      width = $(window).outerWidth(), offset = _this.offset();
                                menu += '<dd data-value="create" class="ellipsis create"><i class="icon"></i>新建笔记本</dd>';
                                $('body').append(popup = $('<dl class="popup-menu category">' + menu + '</dl>'));
                                var left = (width - offset.left > 200)? offset.left : offset.left - popup.outerWidth() + _this.outerWidth(),
                                      top = offset.top + _this.outerHeight() - 2;
                                popup.css({left: left, top: top}).slideDown('fast');
                                popup.children('dd').click(function(){
                                    var _dd = $(this);
                                    if(_dd.attr('data-value')){
                                        switch(_dd.attr('data-value')){
                                            case 'create':
                                                lenoteView.category.createNotebook(function(item){
                                                    var ct = $('#sidebar-c .note-info .extra a.note-category');
                                                    if(ct.length == 1){
                                                        ct.children('i.icon').attr('class', 'icon ' + lenoteDom.category.getIcon(item.logoID));
                                                        //ct.children('span.title').attr({_id: item.id, title: item.name}).text(item.name);
                                                        ct.children('span.title').attr({_id: item.id, title: utils.html(item.name)}).html(item.name);
                                                        //saved-自动保存: 更改分类时触发
                                                        lenoteDom.editor.saved.setPoll();
                                                    }
                                                });
                                                break;
                                        }
                                    }else if(_dd.attr('_id') != selected){
                                        _this.children('i.icon').attr('class', 'icon ' + lenoteDom.category.getIcon(_dd.attr('logo')));
                                        _this.children('span.title').attr({_id: _dd.attr('_id'), title: _dd.attr('title')}).text(_dd.attr('title'));
                                        //saved-自动保存: 更改分类时触发
                                        lenoteDom.editor.saved.setPoll();
                                    }
                                }).smartHover();
                            }
                        }else{
                            popup.slideUp('fast', function(){
                               $(this).remove();
                            });
                        }
                    });
                }else{
                    cid = cid || lenoteDom.category.resolveID(lenoteDom.category.getDefault());
                    var dom = $('#' + lenoteDom.category.getDomID(cid));
                    if(dom.length == 0) return;
                    $('#sidebar-c .note-info .extra').append(
                        btn=$('<div class="note-category preview clearfix"><div class="wrap"><i class="icon ' + lenoteDom.category.getIcon(dom.data('logoID')) + '"></i>' + 
                                  '<span class="title ellipsis" title="' + dom.data('name') + '">' + dom.data('name') + '</span></div></div>')
                    );
                    dom = null;
                }
            },
            
            //插入tag
            insertTags: function(isEdit){
                var tags = lenoteDom.editor.data.tags.getAll(), meta = $('#sidebar-c .note-meta'), res = [];
                if(isEdit){
                    if(tags){
                        for(var key in tags){
                            //var item = tags[key], name = lenoteDom.editor.data.tags.getName(UE.utils.html(item.name));
                            var item = tags[key], name = lenoteDom.editor.data.tags.getName(utils.html(item.name));
                            if(!name) continue;
                            //res.push(this.tag.get(UE.utils.html(name), item['id']));
                            res.push(this.tag.get(utils.html(name), item['id']));
                        }
                    }
                    res.push('<span class="gentag"><input class="newtag" type="text encopy" value="+标签" maxlength="20" /></span><span class="taglen"></span>');
                    meta.append('<span class="tags editable"><span class="title">标签：</span>' + res.join('') + '</span>').show();
                    $(window).trigger("editor.event.resize");
                }else{
                    if(tags){
                        for(var key in tags){
                            //var item = tags[key], name = lenoteDom.editor.data.tags.getName(UE.utils.html(item.name));
                            var item = tags[key], name = lenoteDom.editor.data.tags.getName(utils.html(item.name));
                            if(!name) continue;
                            if(item['id']){
                                res.push('<a class="tagname" _id="' + item['id'] +'" href="javascript:;">' + name + '</a>');
                            }else{
                                res.push('<a class="tagname" href="javascript:;">' + name + '</a>');
                            }
                        }
                    }
                    res = res.length > 0? ('<span class="tags"><span class="title">标签：</span>' + res.join('') + '</span>') : '';
                    meta.append(res);
                }
                this.tag.observer(isEdit);
            },
            
            //插入公共链接
            insertPublicLink: function(key){
                if(!key){
                    lenoteDom.editor.data.remove('shareKey');
                    return;
                }
                
                var url = utils.getDomain() + '/shared/' + key, meta = $('#sidebar-c .note-meta'), publnk = meta.children('nobr.publnk');
                      text = '<nobr class="publnk"><a href="' + url + '" title="点击访问公开链接地址" target="_blank">公开链接地址</a></nobr>';
                if(publnk.length > 0)  publnk.remove();
                meta.prepend(text);
            },
            
            //插入笔记的创建时间与修改时间
            insertDate: function(ctime, utime){
                var ctime = ctime? new Date(ctime) : new Date();
                var utime = utime? new Date(utime) : new Date();
                ctime = (ctime == 'Invalid Date')? '' : ctime.format('yyyy-MM-dd hh:mm');
                utime = (utime == 'Invalid Date')? '' : utime.format('yyyy-MM-dd hh:mm');
                
                var meta = [];
                meta.push('<nobr class="createtime">创建时间：<span class="date">' + ctime + '</span></nobr>');
                meta.push('<nobr class="updatetime">修改时间：<span class="date">' + utime + '</span></nobr>');
                //$('#sidebar-c .note-meta').html(meta.join(''));
                $('#sidebar-c .note-meta').append(meta.join(''));
            },
            
            //判断当前编辑器的笔记是否为新笔记
            isNew: function(){
                var data =$('#sidebar-c .note-editor').data('note');
                return !data || !data.id;
            },
            
            /*
             *   计算笔记列表的分页
             *   根据当前笔记列表中笔记的个数计算分页的skip
             *   根据当前笔记列表窗口的高度计算每次获取的笔记数，最小为20
             */
            getPagination: function(){
                var target = $('#sidebar-b .list-notes');
                var skip = target.children('li:not(.date-sep)').length;
                skip = isNaN(skip)? 0 : skip;
                if(skip < 0) skip = 0;
                
                //每个笔记项目的高度-由CSS定义，这里直接写死了
                var perHeight = 94;
                //var height = parseInt(target.outerHeight());
                var height = parseInt($('#sidebar-b .content').outerHeight()) + perHeight;
                var size = Math.ceil(height / perHeight);
                if (size < 20) size = 20;
                
                return {skip: skip, size: size};
            },
            
            setFilterDescription: function(cid){
                if(cid === null){
                    $('#sidebar-b .easytools .description').find('.count').text('').end().find('.from').text('搜索结果');
                }else{
                    if($('#all-notes').data('searchkey')) return;
                    var target = '#sidebar-b .easytools .description', notebook = $('#' + cid);
                    if(notebook.data('num')){
                        $(target).find('.count').text(notebook.data('num') + '篇').show().end().find('.from').text(notebook.data('name'));
                    }else{
                        $(target).find('.count').hide().end().find('.from').text(notebook.data('name'));
                    }
                }
            },
            
             /**更新笔记列表缩略图*/
            //缩略图为最后上传的资源(是最后上传不是最后一个资源)
            //discard: resources不再使用，直接从attachments接口获取最后更新的附件
            updateThumb: function(id, resources){
                var item = $('#sidebar-b #' + this.getDomID(id));
                if(item.length == 0) return;
                
                //if(resources && resources.length > 0){
                //    var files = lenoteDom.editor.data.attachments.getAll(), key = 'key_' + resources[0].local_id, resource = files[key];
                //    if(resource){
                //        var media = this.getThumb(resource._type, resource);
                //        item.find('.note-entry').children('.media').remove().end().prepend(media);
                //    }
                //}else{
                //    item.find('.note-entry .media').remove();
                //}
                
                var attachment = lenoteDom.editor.data.attachments.getLast();
                if(attachment){
                    var media = this.getThumb(attachment._type, attachment);
                    item.find('.note-entry').children('.media').remove().end().prepend(media);
                }else{
                    item.find('.note-entry .media').remove();
                }
            },
           
             /*生成笔记列表缩略图*/
            getThumb: function(type, resource){
                var src = '', _class='';
                //获取小类所属的大类
                type = lenoteTag.getParentType(type);
                switch(type){
                    case -1: break; //类型未识别
                    case 128: break; //通用
                    case 768: break; //文字
                    case 896: break; //手写
                    case 1024: break; //涂鸦
                    case 1152: break; //待办
                    case 1408: break; //日期附件
                    case 1536: break; //联系人附件
                    case 1664: break; //地理位置附件
                    case 1792: break; //天气附件
                    case 1920: break; //时间附件
                    case 2048: break; //心情附件
                    case 256: src = lenoteDom.editor.data.attachments.getThumb(resource, 94, 94);break;  //图片
                    case 512: src = '/assets/images/attachment/audio_play.png';_class = 'small';break; //音频
                    case 1280: src = '/assets/images/attachment/video.png';_class = 'small';break; //视频
                    default:
                        var suffix = ['apk', 'doc', 'pdf', 'ppt', 'rar', 'xls', 'zip', 'txt'], ext = resource.ext || resource.name.substring(resource.name.lastIndexOf('.'));
                        ext = ext.replace(/x$/, '').replace(/^\./, ''); //docx, pptx, xlsx
                        switch(ext){
                            case 'txt':case 'rtf': case 'jnt': ext = 'txt';break;
                            case 'jpg':case 'jpeg':case 'bmp':case 'gif':case 'png':case 'ico':case 'pcx':case 'tiff':case 'dxf':case 'exif': ext = 'image';break;
                            case 'kk':case 'mp3':case 'amr':case 'aac':case 'ogg':case 'mid':case 'ape':case 'wav':case 'wma':case 'midi': ext = 'audio';break;
                            case 'avi':case 'rmvb':case 'mkv':case 'wmv':case 'flv':case 'mp4':case 'rm':case 'f4v':case 'mov':case 'mpeg':case '3gp': ext = 'video';break;
                            default: if($.inArray(ext, suffix) == -1) ext = 'default';
                        }
                        src = '/assets/images/attachment/' + ext + '.png'; _class = 'small';
                }
                return src? '<div class="media"><img src="' + src + '" class="' + _class + '" alt=""/></div>' : '';
            },
            
            /*
             *   在笔记列表区域插入笔记
             *   params:
             *       note:  笔记对象
             *       isprepend:  指定插入笔记的位置，如果是新建则是插在笔记列表窗口的最前面
             *       isNew: 是新建笔记插入还是加载列表插入
             */
            insert: function(note, isprepend, isNew){
                var target = '#sidebar-b .list-notes', id = this.getDomID(note.noteID);
                var li = ['<li id="' + id + '" class="e_show_note">'], utime = note.lastUpdateTime? new Date(note.lastUpdateTime): new Date();
                li.push('<div class="item note-entry clearfix">');
                
                if(note.resourceType){
                    var resources = note.resource, resource = resources[0], media = this.getThumb(note.resourceType, resource);
                    if(media) li.push(media);
                }
                
                li.push('<div class="entry">');
                //如果是搜索则高亮关键词
                if($(target).data('type') == 'search'){
                    var q = UE.utils.unhtml($.trim($('#sidebar-b .search input').val()));
                    li.push('<div class="title ellipsis">'+ utils.highlight(q, (UE.utils.unhtml(note.title) || ''))  + '</div>');
                    //li.push('<div class="summary ellipsis"><span class="text">'  + utils.highlight(q, utils.strip_tags(note.summary)) + '</span></div>');
                    li.push('<div class="summary ellipsis"><span class="text">'  + utils.highlight(q, utils.unhtml(note.summary)) + '</span></div>');
                }else{
                    li.push('<div class="title ellipsis">'+ (UE.utils.unhtml(note.title) || '')  + '</div>');
                    //li.push('<div class="summary ellipsis"><span class="text">'  + utils.strip_tags(note.summary) + '</span></div>');
                    li.push('<div class="summary ellipsis"><span class="text">'  + utils.unhtml(note.summary) + '</span></div>');
                }
                li.push('<div class="metadata ellipsis">');
                li.push('<span class="date">' + utime.format('d日 hh:mm') + '&nbsp;' + (utime.getHours() >= 12? 'PM' : 'AM') + '</span>');
                if(note.spot && note.spot.address) li.push('<span class="spot">' + note.spot.address + '</span>');
                //if(note.weather && note.weather.status !== 0) li.push('<span class="weather">' + note.weather.status + '&nbsp;' + note.weather.temperature + '&#8451;</span>'); //&#176;C
                if(note.tag && note.tag.length > 0){
                    var _tags = '';
                    for(var i = 0; i < note.tag.length; i++){
                        //var _tag = note.tag[i], name = lenoteDom.editor.data.tags.getName(UE.utils.html(_tag.name));
                        //var _tag = note.tag[i], name = isNew? lenoteDom.editor.data.tags.getName(utils.html(_tag.name)) : lenoteDom.editor.data.tags.getName(_tag.name);
                        var _tag = note.tag[i], name = isNew? _tag.name : lenoteDom.editor.data.tags.getName(_tag.name);
                        if(!name) continue;
                        //_tags += '<span>' + name + '</span>';
                        _tags += name + '&nbsp;';
                    }
                    li.push('<span class="tag">' + _tags + '</span>');
                }
                li.push('</div></div></div>');
                if(note.isMarked){
                    li.push('<a class="marked stared" title="取消星标" href="javascript:;"></a>');
                }else{
                    li.push('<a class="marked" title="添加星标" href="javascript:;"></a>');
                }
                li.push('</li>');
                var _note = $(li.join('')), separator = '_date_' + utime.format('yyyyMM'), _id = note.noteID;
                _note.data({ver: note.version, id: _id, ctime: note.createTime});
                _note.children('.marked').click(function(event){
                    try{
                       if(!event.isPropagationStopped()) event.stopPropagation();
                       if(!event.isDefaultPrevented()) event.preventDefault();
                    }catch(e){}
                    
                    var _this = $(this), _isMarked = _this.hasClass('stared');
                    lenoteView._lenote.star.mark(_id, !_isMarked, {
                        success: function(respose){
                            if(_isMarked){
                                _this.attr('title', '添加星标').removeClass('stared');
                                lenoteDom.category.count('stars-notes', -1, false, true);
                                if(lenoteView.dom.category.getSelected() == 'stars-notes'){
                                    var _current = _this.closest('li:not(.date-sep)');
                                    
                                    if(lenoteView.dom.note.isEqualSelected(_current.attr('id'), true)){
                                        lenoteView.dom.editor.cleanUI();
                                        var _next = _current.nextAll('li:not(.date-sep)').first().attr('id') || _current.prevAll('li:not(.date-sep)').first().attr('id');
                                        if(_next){
                                            lenoteView.note.show(_next);
                                        }else{
                                            lenoteView.dom.editor.insertBtn.clean().create().show();
                                            $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                        }
                                    }
                                    
                                    if(_current.prev().hasClass('date-sep')){
                                            var _next_ = _current.next();
                                            if(_next_.length == 0 || _next_.hasClass('date-sep')){
                                                _current.prev().remove();
                                            }
                                    }
                                    _current.remove();
                                    if($('#sidebar-b .list-notes li:not(.date-sep)').length <= 10){
                                        $('#sidebar-b .content').trigger('scroll');
                                    }
                                    
                                    lenoteDom.note.updateIcon();
                                }
                            }else{
                                if(lenoteView.dom.category.getSelected() != 'stars-notes'){
                                    _this.attr('title', '取消星标').addClass('stared');
                                    lenoteDom.category.count('stars-notes', 1, false, true);
                                }
                            }
                            //更新笔记的版本号
                            try{
                                var note_ver = lenoteDom.editor.data.get('ver');
                                if(/^\d+$/.test(note_ver)){
                                    _note = $('#sidebar-b #' + id);
                                    if(_note.length > 0) _note.data($.extend(_note.data() || {}, {ver: note_ver + 1}));
                                    lenoteDom.editor.data.add('ver', note_ver + 1);
                                }
                            }catch(e){}
                        }
                    });
                });
                
                var sep = $('#sidebar-b .list-notes #' + separator);
                if(sep.length == 0){
                    if(isprepend){
                        $(target).prepend(sep = $('<li class="date-sep" id="' + separator + '">' + utime.format('M月 yyyy年') + '<div class="rainbow"></div></li>'));
                    }else{
                        $(target).append(sep = $('<li class="date-sep" id="' + separator + '">' + utime.format('M月 yyyy年') + '<div class="rainbow"></div></li>'));
                    }
                }
                
                //isprepend? $(target).prepend(_note) : $(target).append(_note);
                isprepend? sep.after(_note) : $(target).append(_note);
                //监听笔记列表事件
                lenoteObserver.note(id);
                return id;
            },
            
            /*
             *   在新建/删除笔记时更新笔记列表及笔记本(组)中的笔记数量
             *   params:
             *      number:  如果为负则是删除笔记，否则为新建笔记
             */
            count: function(number){
                //更新笔记列表区描述中的笔记数目
                var filter = $('#sidebar-b .easytools .description .count');
                try{
                    var c = parseInt(filter.text());
                    if(!isNaN(c)){
                        if(c < 0) c = 0;
                        c += number;
                        filter.text(c + '篇');
                    }
                }catch(e){}
                //更新笔记本(组)树中的笔记数目
                lenoteDom.category.count(null, number, true);
            },
            
            //检查id与当前高亮的笔记列表中的笔记是否一致
            isEqualSelected: function(id, noConvert){
                return (noConvert? id : this.getDomID(id)) == this.getSelected(true);
            },
            
            //获取当前选中的笔记，如果没有选中的则返回笔记列表中的第一个笔记
            getSelected: function(noFirst){
                var note = $('#sidebar-b .list-notes li'), item = note.find('.item.on');
                if(item.length > 0) return item.closest('li').attr('id');
                return noFirst? '' : note.not('.date-sep').first().attr('id');
            },
            
            //将选中的笔记列表中的笔记设置为高亮
            selected: function(id){
                if(id){
                    $('#sidebar-b .list-notes div.item').removeClass('on');
                    $('#' + id).children('div.item').addClass('on');
                }
            },
            
            //获取笔记dom id
            getDomID: function(id){
                return id? 'sb-n-' + id : 'sb-n-';
            },
            
            //解析笔记ID
            resolveID: function(id){
                //var r = id.match(/sb-n-\w+/i), _id;
                var r = id.match(new RegExp(this.getDomID() + '\\w+', 'i')), _id;
                if(r && r.length == 1){
                    _id = r[0].slice(5);
                }
                return _id;
            },
            
            //笔记列表滚动时自动加载
            autoLoading: {
                //scroll事件定时器
                timer: null,
                //popTimer: null,
                
                //当触发滚动事件时，如果已到底部则自动加载相应的内容
                scroll: function(){
                    //if(this.popTimer) clearTimeout(this.popTimer);
                    
                    var element = $('#sidebar-b .content');
                    var viewHeight = element.outerHeight();
                    var scrollHeight = element.scrollTop();
                    
                    var contentHeight = $('#sidebar-b .list-notes').outerHeight() / 2; //提前加载，不滚动到底加载，可修复滚动条突然变短动画不连贯的问题
                    //如果没有内容则不需要处理滚动事件
                    if(contentHeight == 0) return;
                    
                    var that = this;
                    if(viewHeight + scrollHeight >= contentHeight){
                        this.observer(true);
                        this.timer = setTimeout(function(){
                            that.show(scrollHeight);
                        }, 500);
                    }
                },
                
                observer: function(unbind){
                   clearTimeout(this.timer);
                   $('#sidebar-b .content').unbind('scroll'); //防止因不同分类多次绑定scroll导致无法unbind
                    if(!unbind){
                        $('#sidebar-b .content').bind('scroll', function(){
                            lenoteDom.note.autoLoading.scroll();
                        });
                    }
                },
                
                //滚动加载时的回调函数
                callback: function(scrollTop, perCount){
                    //var that = this, target = '#sidebar-b .content', isScroll = false;
                    var that = this, target = '#sidebar-b .content';
                    
                    //this.observer(true);
                    return {
                        success: function(respose){
                            var _notes = respose.searchResult? respose.searchResult.notes : respose.notes;
                            if (_notes.length > 0){
                                $.each(_notes, function(i, item){
                                    if($(target + ' li#' + lenoteDom.note.getDomID(item.id || item.noteID)).length == 0){
                                        item['_title'] = item['title'];
                                        item['title'] = utils.unhtml(item['title']);
                                        lenoteDom.note.insert(item, false);
                                    }
                                });
                                
                                //只有当返回数满足条件时才会再次绑定滚动事件
                                //if(_notes.length == perCount) isScroll = true;
                                if(_notes.length == perCount) that.observer();
                                
                                //var distance = (_notes.length > 1) ? 180 : 90;
                                //that.popTimer = setTimeout(function(){
                                //    $(target).animate({scrollTop : scrollTop + distance}, 400);
                                //}, 500);
                            }
                        }
                        //},
                        //before: function(){
                        //    $(target).smartLoading().scrollTop(scrollTop + 30);
                        //},
                        //complete: function(){
                            //$(target).smartLoading({action: 'del', callback: function(){
                                //当删除loading图标后会再次触发scroll事件，这里是取消scroll事件处理的
                                //clearTimeout(that.timer);
                                //当还有返回值时重新绑定笔记列表滚动事件
                                //if(isScroll) lenoteDom.note.autoLoading.observer();
                            //}});
                        //}
                    };
                },
                
                //自动加载自动获取的笔记类型
                show: function(scrollTop){
                    var target = $('#sidebar-b .list-notes'), type = target.data('type');
                    switch(type){
                        case 'category': lenoteView.note.scroll.getListByCategory(scrollTop);break;
                        case 'allnotes': lenoteView.note.scroll.getAll(scrollTop);break;
                        case 'starnotes': lenoteView.note.scroll.getStars(scrollTop);break;
                        case 'sharenotes': lenoteView.note.scroll.getShared(scrollTop);break;
                        case 'search': lenoteView.note.scroll.search(scrollTop);break;
                        case 'trash': lenoteView.trash.scroll.getAll(scrollTop);break;
                    }
                }
            },
            
            //获取笔记列表的回调函数
            list_callback: function(cateid, type, isMultiple, searchkey){
                var target = '#sidebar-b .list-notes';
                return {
                    success: function(respose){
                        if(cateid == 'search'){
                            var _notes = respose.searchResult.notes;
                        }else{
                            var _notes = respose.notes;
                        }
                        if(_notes.length > 0){
                            $.each(_notes, function(i, item){
                                item['_title'] = item['title'];
                                item['title'] = utils.unhtml(item['title']);
                                lenoteDom.note.insert(item);
                            });
                            //显示第一篇笔记
                            lenoteView.note.show(null, isMultiple);
                            //当有笔记时监听滚动事件, 以后20替换成pager.size，这里为了方便先定20
                            if(_notes.length >= 20){
                                lenoteDom.note.autoLoading.observer();
                            }else{ //取消上一个分类列表可能存在的scroll事件
                                lenoteDom.note.autoLoading.observer(true);
                            }
                        }else{
                            lenoteDom.note.autoLoading.observer(true);
                        }
                        
                        lenoteDom.note.updateIcon();
                        
                        $('#all-notes').removeData('searchkey');
                        if(cateid == 'all-notes'){
                            $('#all-notes').data({'name' : '所有笔记'});
                        }else if(cateid == 'stars-notes'){
                            $('#stars-notes').data({'name' : '星标笔记'});
                        }else if(cateid == 'myshare'){
                            $('#myshare').data({'name' : '我的分享'});
                        }else if(cateid == 'search'){
                            $('#all-notes').data({'name' : '搜索结果', 'searchkey': searchkey});
                        }else if(cateid == 'trash'){
                            $('#trash').data({'name': '废纸篓'});
                        }
                        
                        //设置笔记列表描述
                        if(cateid == 'search'){
                            lenoteDom.note.setFilterDescription(null);
                        }else{
                            lenoteDom.note.setFilterDescription(cateid);
                        }
                        //生成新建笔记按钮
                        if(cateid != 'myshare' && cateid != 'trash'){
                            lenoteDom.editor.insertBtn.clean().create().show();
                        }
                    },
                    before: function(){
                        $(target).smartLoading({text: (cateid == 'search'? '正在搜索笔记...' : '笔记列表加载中...')});
                    },
                    complete: function(){
                        $(target).smartLoading({action: 'del', effect: true});
                    },
                    init: function(){
                        //将笔记显示区域置为空白
                        lenoteDom.editor.cleanUI();
                        //设置笔记列表区的类型，用于滚动加载事件将在加载新笔记列表前清空之前的笔记列表
                        $(target).data('type', type).empty();
                        //将选中的菜单高亮 
                        lenoteDom.category.selected((cateid == 'search')? 'all-notes' : cateid);
                    }
                };
            }
        }
    };
})();/*
 *  author: gejian1@lenovo.com
 *  description: 页面显示及操作
 */
(function(){
    lenoteView = {
        //初始化布局方法
        init: function(_lenote){
            this._lenote = _lenote;
            this.dom = lenoteDom;
            this.observer = lenoteObserver;
            //初始化界面元素
            this.dom.init(this);
        },
        
        //笔记本(组)相关的交互
        category: {
            //页面笔记本(组)初始化，初始化完成后会自动调用默认笔记本(组)的笔记列表
            init: function(){
                var target = '#sidebar-a .list-categories';
                lenoteView._lenote.category.getAll(user.getUState('rcid'), true, {
                    success: function(respose){
                        var categories = respose.categories, tree = $(target);
                        for(var i = 0; i < categories.length; i++){
                            tree.append(lenoteView.dom.category.recursiveBuild(categories[i]));
                        }
                        
                        //查找默认分类的笔记列表--默认加载所有笔记
                        //lenoteView.note.getListByCategory(null, true);
                        $('#all-notes').trigger('click');
                        
                        //监听分类事件
                        lenoteView.observer.categories();
                    },
                    init: function(){
                         //先清空分类树
                        $(target).empty();
                    },
                    before: function(){
                        $(target).smartLoading({isappend: false, text: '笔记本加载中...'});
                    },
                    complete: function(){
                        $(target).smartLoading({action: 'del', effect: true});
                    }
                }, true);
            },
            
            //创建笔记本组
            createNotebook: function(_callback_){
                this.create(user.getUState('rcid'), true, _callback_);
            },
            
            //创建笔记本(组)
            create: function(id, isRoot, _callback_){
                if(!id){
                    $.lebox.error('网络异常，请刷新后重试！', 800);
                    return false;
                }
                if(isRoot){
                    var paddingleft = 24;
                }else{
                    var paddingleft = parseInt($('#' + lenoteView.dom.category.getDomID(id)).children('div.item').css('padding-left'));
                    if(isNaN(paddingleft)) paddingleft = 24;
                    paddingleft += 20;
                }
                $.lebox.modalbox('新建笔记本', lenoteView.dom.category.getChtml(), function(){
                    //var title = UE.utils.unhtml(utils.trim($('#lebox-wrap #inputTitle').val(), true)).replace(/\s/igm, '&nbsp;');
                    var title = utils.unhtml($('#lebox-wrap #inputTitle').val());
                    utils.setFocus('#lebox-wrap #inputTitle');
                    if(title){
                        //检查笔记本名称是否合法
                        if(lenoteDom.category.prohibited(title)){
                            $('#lebox-wrap .prompt').text('请输入有效地笔记本名称');
                            return false;
                        }
                        //检查笔记本名称是否已存在
                        if(lenoteDom.category.exists(title)){
                            $('#lebox-wrap .prompt').text('笔记本名称已存在');
                            return false;
                        }
                        
                        $('#lebox-wrap .prompt').text('');
                        lenoteView._lenote.category.add(id, title, {
                            success: function(respose){
                                lenoteView.dom.category.insert(id, title, lenoteView.dom.category.build({
                                   id: respose.categoryID, name: title, numberOfNote: 0, version: respose.version, type: 2, deletable: true, parentNode: id,
                                   categoryLogoID: 0
                                }, false, paddingleft));
                                if(typeof _callback_ == 'function') _callback_({id: respose.categoryID, name: title, logoID: 0});
                                $('#lebox-wrap .prompt').addClass('success').text('笔记本创建成功');
                                $.lebox.modalbox.close();
                            },
                            before: function(){
                                //$('#lebox-wrap .prompt').smartLoading({text: '正在提交...'});
                                $('#lebox-wrap .prompt').css('padding', '0px').html('<div class="loading" style="margin:5px 0 0 2px;">正在提交...</div>');
                            },
                            failure: function(respose){
                                $('#lebox-wrap .prompt').text('应用出现故障，请稍候再试！');
                            },
                            error: function(msg){
                                $('#lebox-wrap .prompt').text('不能创建新笔记本！');
                            }
                        });
                    }else{
                        $('#lebox-wrap .prompt').text('请输入笔记本名称！');
                    }
                });
            },
            
            //删除笔记本(组)
            del: function(id){
                var category = $('#' + id);
                if(!category.data().delable) return false;
                
                $.lebox.modalbox('删除笔记本', lenoteView.dom.category.getConfirmHtml('确定删除笔记本"<span class="keyword ellipsis">' + category.data('name') + '</span>"？'), function(){
                    lenoteView._lenote.category.del(category.data('id'), category.data('ver'), {
                        success: function(respose){
                            //更新笔记数、回收站笔记数、星标笔记数、共享笔记数
                            try{
                                lenoteDom.category.count(id, -respose.noteCount);
                                if(respose.noteCount != 0) lenoteDom.category.trash_count(respose.noteCount);
                                lenoteDom.category.count('stars-notes', -respose.markedCount, false, true, true);
                                lenoteDom.category.shared_count(-respose.sharedCount);
                            }catch(e){}
                            
                            lenoteView.dom.category.del(id);
                            $('#lebox-wrap .prompt').css('padding-left', '5px').addClass('success').text('笔记本已删除');
                            $.lebox.modalbox.close();
                        },
                        before: function(){
                            //$('#lebox-wrap .prompt').smartLoading({text: '正在删除...'});
                            $('#lebox-wrap .prompt').css('padding', '0px').html('<div class="loading" style="margin:5px 0 0 2px;">正在删除...</div>');
                        },
                        failure: function(respose){
                            $('#lebox-wrap .prompt').css('padding-left', '5px').text('应用出现故障，请稍候再试！');
                        },
                        error: function(msg){
                            $('#lebox-wrap .prompt').css('padding-left', '5px').text('不能删除该笔记本，请重试！');
                        }
                    });
                });
            },
            
            //重命名笔记本(组)
            rename: function(id){
                var category = $('#' + id);
                $.lebox.modalbox('重命名笔记本', lenoteView.dom.category.getChtml(category.data('name')), function(){
                    //var title = $.trim($('#lebox-wrap #inputTitle').val());
                    //var title = UE.utils.unhtml(utils.trim($('#lebox-wrap #inputTitle').val(), true)).replace(/\s/igm, '&nbsp;');
                    var title = utils.unhtml($('#lebox-wrap #inputTitle').val());
                    utils.setFocus('#lebox-wrap #inputTitle');
                    if(title){
                        //检查笔记本名称是否合法
                        if(lenoteDom.category.prohibited(title)){
                            $('#lebox-wrap .prompt').text('请输入有效地笔记本名称');
                            return false;
                        }
                        //检查笔记本名称是否已存在
                        if(lenoteDom.category.exists(title, category.data('name'))){
                            $('#lebox-wrap .prompt').text('笔记本名称已存在');
                            return false;
                        }
                        
                        lenoteView._lenote.category.update(category.data('id'), title, category.data('pnode'), category.data('ver'), {
                            success: function(respose){
                                category.data($.extend(category.data(), {'ver': respose.version, name: title})).children('.item').children('.title').html(title).attr('_title', md5(title));
                                //更新笔记本的版本
                                //lenoteView.dom.category.updateVersion(id);
                                $('#lebox-wrap .prompt').addClass('success').text('笔记本已更新');
                                $.lebox.modalbox.close();
                            },
                            before: function(){
                                //$('#lebox-wrap .prompt').smartLoading({text: '正在提交...'});
                                $('#lebox-wrap .prompt').css('padding', '0px').html('<div class="loading" style="margin:5px 0 0 2px;">正在提交...</div>');
                            },
                            failure: function(respose){
                                $('#lebox-wrap .prompt').text('应用出现故障，请稍候再试！');
                            },
                            error: function(msg){
                                $('#lebox-wrap .prompt').text('不能更新新笔记本名称！');
                            }
                        });
                    }else{
                        $('#lebox-wrap .prompt').text('请输入笔记本名称！');
                    }
                });
            }
        },
        
        //笔记相关的交互
        note: {
            /*
             *   获取笔记本(组)下的所有笔记
             *   params:
             *      cateid:  笔记本(组)ID，如果为null则为默认笔记本(组)
             *      isMultiple: 表示该请求是否允许与其它同类型的请求共存
             */
            getListByCategory: function(cateid, isMultiple){
                if(!cateid) cateid = lenoteView.dom.category.getDefault();
                if(!cateid) return false;
                
                var cid = lenoteView.dom.category.resolveID(cateid);
                //这里之所以将skip覆盖为0是因为从笔记本(组)获取笔记列表总是会清空上一个笔记列表的
                lenoteView._lenote.note.getListByCategory(
                  cid, $.extend(lenoteView.dom.note.getPagination(), {skip: 0}), 100, 
                  lenoteView.dom.note.list_callback(cateid, 'category', isMultiple), isMultiple
                );
            },
            
            search: function(q){
                if(q == ''){
                    var allnotes = $('#all-notes');
                    if(allnotes.data('searchkey')) allnotes.trigger('click');
                }else{
                    lenoteView._lenote.note.query(q, $.extend(lenoteView.dom.note.getPagination(), {skip: 0}), lenoteView.dom.note.list_callback('search', 'search', true, q));
                }
            },
            
            //所有笔记列表
            getAll: function(){
                lenoteView._lenote.note.getAll($.extend(lenoteView.dom.note.getPagination(), {skip: 0}), 100, lenoteView.dom.note.list_callback('all-notes', 'allnotes', true));
            },
            
            getStars: function(){
                lenoteView._lenote.star.getAll($.extend(lenoteView.dom.note.getPagination(), {skip: 0}), 100, lenoteView.dom.note.list_callback('stars-notes', 'starnotes', true));
            },
            
            getShared: function(){
                lenoteView._lenote.share.getAll($.extend(lenoteView.dom.note.getPagination(), {skip: 0}), 100, lenoteView.dom.note.list_callback('myshare', 'sharenotes', true));
            },
            
            scroll: {
                getListByCategory: function(scrollTop){
                    var cid = lenoteView.dom.category.getSelected();
                    if(!cid) return false;
                    
                    cid = lenoteView.dom.category.resolveID(cid);
                    var pager = lenoteView.dom.note.getPagination();
                    lenoteView._lenote.note.getListByCategory(cid, pager, 100, lenoteView.dom.note.autoLoading.callback(scrollTop, pager.size));
                },
                getAll: function(scrollTop){
                    var pager = lenoteView.dom.note.getPagination();
                    lenoteView._lenote.note.getAll(pager, 100, lenoteView.dom.note.autoLoading.callback(scrollTop, pager.size));
                },
                getStars: function(scrollTop){
                    var pager = lenoteView.dom.note.getPagination();
                    lenoteView._lenote.star.getAll(pager, 100, lenoteView.dom.note.autoLoading.callback(scrollTop, pager.size));
                },
                getShared: function(scrollTop){
                    var pager = lenoteView.dom.note.getPagination();
                    lenoteView._lenote.share.getAll(pager, 100, lenoteView.dom.note.autoLoading.callback(scrollTop, pager.size));
                },
                search: function(scrollTop){
                    var pager = lenoteView.dom.note.getPagination(), q = $.trim($('#all-notes').data('searchkey'));
                    if(q != '') lenoteView._lenote.note.query(q, pager, lenoteView.dom.note.autoLoading.callback(scrollTop, pager.size));
                }
            },
            
            /*
             *   加载笔记并显示
             *   params:
             *       noteid:  需要显示的笔记ID，如果noteid为空则默认显示笔记列表中的第一篇笔记
             *       isMultiple:  指明是否允许多个请求笔记的同时发送
             *       reflash:  是否检查isEqualSelected
             */
            show: function(noteid, isMultiple, reflash){
                //如果笔记相同则不再发送请求
                if(!reflash && lenoteView.dom.note.isEqualSelected(noteid, true)) return false;
                //检查笔记是否正在提交
                if(lenoteView.dom.editor.checkIsOpr()) return false;
                
                //如果当前笔记列表中没有笔记则显示空白的编辑区域
                lenoteView.dom.editor.cleanUI();
                lenoteView.dom.editor.data.attachments.clean();
                lenoteDom.editor.data.tags.clean();
                if(!noteid) noteid = lenoteView.dom.note.getSelected();
                if(!noteid) return false;
                
                var id = lenoteView.dom.note.resolveID(noteid);
                lenoteView._lenote.note.get(id, {
                    success: function(respose){
                        //检查当前加载的笔记与选中的笔记是否一样，如不一样则忽略
                        if(!lenoteView.dom.note.isEqualSelected(respose.id)) return false;
                        
                        //检查将要显示的笔记与当前选中的菜单项ID是否一致，如果不一致则丢弃笔记的显示，用于防止点击分类过快时先加载的分类note闪显问题
                        if(!lenoteView.dom.category.isEqualSelected(respose.categoryID)) return false;
                        lenoteView.dom.editor.data.attachments.set(respose.resource);
                        lenoteView.dom.editor.data.tags.set(respose.tag);
                        
                        respose['_title'] = respose['title'];
                        respose['title'] = utils.unhtml(respose['title']);
                        lenoteView.dom.note.init(respose);
                    },
                    before: function(){
                        $('#sidebar-c .note-loading').smartLoading({text: '正在加载笔记...'});
                    },
                    complete: function(status){
                        $('#sidebar-c .note-loading').smartLoading({action: 'del'});
                    },
                    init: function(){
                        lenoteView.dom.note.selected(noteid);
                    }
                }, isMultiple);
            },
            
            //删除当前笔记
            del: function(){
                //检查笔记区域是否正在加载笔记/提交笔记
                if(lenoteView.dom.editor.checkIsOpr(['del'])) return false;
                
                lenoteDom.editor.saved.clean();
                
                var that = this, target = $('#sidebar-c .note-editor'), noteData = target.data('note');
                if(noteData && noteData.id){
                    $.lebox.modalbox('删除笔记', lenoteView.dom.category.getConfirmHtml('确定删除笔记"<span class="keyword ellipsis">' + lenoteView.dom.editor.getTitle() + '</span>"？'), function(){
                        $.lebox.modalbox.close();
                        lenoteView._lenote.note.del(noteData.id, noteData.ver, {
                            success: function(respose){
                                var note = $('#sidebar-b .list-notes li#' + lenoteView.dom.note.getDomID(respose.noteID)), cid = lenoteDom.category.getDomID(noteData.cid);
                                //查看是否是已分享或加星标的笔记，如果是则更新相应的笔记数
                                try{
                                    if($.trim(lenoteDom.editor.data.get('shareKey') || '')){
                                        lenoteDom.category.shared_count(-1);
                                    }
                                    if(note.children('a.marked.stared').length == 1){
                                        lenoteDom.category.count('stars-notes', -1, false, true);
                                    }
                                    //增加回收站笔记数
                                    lenoteDom.category.trash_count(1);
                                }catch(e){}
                                
                                //检查当前选中笔记与被删除笔记是否一样，不一样则不操作
                                if(lenoteView.dom.note.isEqualSelected(respose.noteID)){
                                    lenoteView.dom.editor.cleanUI();
                                    lenoteView.dom.editor.data.attachments.clean();
                                    lenoteDom.editor.data.tags.clean();
                                    //在笔记列表中自动加载被删除笔记的前一个或后一个笔记
                                    var next = note.nextAll('li:not(.date-sep)').first().attr('id') || note.prevAll('li:not(.date-sep)').first().attr('id');
                                    if(next){
                                        that.show(next);
                                    }else{
                                        lenoteView.dom.editor.insertBtn.clean().create().show();
                                        $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                    }
                                }
                                
                                if(note.prev().hasClass('date-sep')){
                                    var _next = note.next();
                                    if(_next.length == 0 || _next.hasClass('date-sep')){
                                        note.prev().remove();
                                    }
                                }
                                note.remove();
                                
                                //更新被删除笔记的笔记列表及分类中的数量
                                lenoteView.dom.note.count(-1);
                                //如果当前选择的是所有笔记、星标笔记需要更新笔记对应的分类笔记数
                                if(lenoteView.dom.category.getSelected() == 'all-notes') lenoteDom.category.count(cid, -1, false, true);
                                if(lenoteView.dom.category.getSelected() == 'stars-notes') lenoteDom.category.count(cid, -1, false, true);
                                
                                $.smartDoing({action: 'del', text: '笔记已删除'});
                                //更新笔记本的版本树
                                //lenoteView.dom.category.updateVersion(lenoteView.dom.category.getCurrent(true), true);
                                
                                if($('#sidebar-b .list-notes li:not(.date-sep)').length <= 10){
                                    $('#sidebar-b .content').trigger('scroll');
                                }
                                
                                lenoteDom.note.updateIcon();
                            },
                            complete: function(status){
                                lenoteView.dom.editor.data.remove('mark');
                            },
                            before: function(){
                                lenoteView.dom.editor.data.add('mark', 'del');
                                $.smartDoing({text: '请稍候，正在删除...'});
                            }
                        });
                    });
                }else{
                    $.lebox.error('网络异常，请刷新后重试！', 800);
                }
            },
            
            //创建新笔记-显示新建笔记时的UI
            create: function(){
                //检查笔记区域是否正在加载笔记/提交笔记
                if(!lenoteView.dom.editor.checkIsOpr()){
                    lenoteView.dom.editor.data.attachments.clean();
                    lenoteDom.editor.data.tags.clean();
                    lenoteView.dom.editor.createUI();
                    lenoteDom.note.insertTags(true);
                    var cid = lenoteView.dom.category.getCurrent(true);
                    cid = cid? lenoteDom.category.resolveID(cid) : null;
                    lenoteDom.note.insertCategory(cid, true);
                    //lenoteDom.editor.focus();
                }
            },
            
            //编辑笔记-显示编辑笔记时的UI
            edit: function(){
                 //检查笔记区域是否正在加载笔记/提交笔记或处于编辑模式
                if(lenoteView.dom.editor.checkIsOpr()) return false;
                
                var target = $('#sidebar-c .note-editor');
                if(target.data('note') && target.data('note').id){
                    lenoteView.dom.editor.editUI();
                    lenoteDom.note.insertTags(true);
                    lenoteDom.note.insertCategory(target.data('note').cid, true);
                }else{
                    $.lebox.warning('网络异常，请刷新后重试！', 800);
                }
            },
            
            //保存笔记
            save: function(){
                //检查笔记区域是否正在加载笔记/提交笔记
                if(lenoteView.dom.editor.checkIsOpr(['update', 'save'])) return false;
                
                lenoteDom.editor.saved.clean();
                
                var that = this, target = $('#sidebar-c .note-editor');
                var title = lenoteView.dom.editor.getTitle(), content = lenoteAnalyze.encode(lenoteView.dom.editor.getContent()), noteData = target.data('note'),
                      summary = utils.html(utils.strip_tags(content)).substr(0, 100);
                if(!title) title = '无标题笔记';
                if(noteData && noteData.id){
                    //编辑笔记
                    if(noteData.ver){
                        var cid = $('#sidebar-c .note-info .extra .note-category span.title').attr('_id') || noteData.cid;
                        lenoteView._lenote.note.update(cid, noteData.id, title, content, noteData.ver, lenoteView.dom.editor.data.attachments.build(), {
                            success: function(respose){
                                lenoteView.dom.editor.data.attachments.cleanNew();
                                //更新笔记列表项
                                var cnote = $('#' + lenoteView.dom.note.getDomID(noteData.id));
                                if(cnote.length > 0){
                                    cnote.data($.extend(cnote.data(), {ver: respose.version}));
                                    //cnote.find('.item.note-entry').find('.entry .title').html(title).end().find('.entry .summary .text').html(utils.strip_tags(content))
                                    cnote.find('.item.note-entry').find('.entry .title').html(title).end().find('.entry .summary .text').html(utils.unhtml(summary))
                                    .end().find('.entry .metadata .date').html(new Date().format('d日 hh:mm') + '&nbsp;' + (new Date().getHours() >= 12? 'PM' : 'AM'));
                                    var _tags = lenoteDom.editor.data.tags.build(true);
                                    if(_tags.length > 0){
                                        var _tagwrap = cnote.find('.entry .metadata .tag'), taglist = [];
                                        if(_tagwrap.length == 0) cnote.find('.entry .metadata').append(_tagwrap = $('<span class="tag"></span>'));
                                        for(var i = 0; i < _tags.length; i++){
                                            //var _tag = _tags[i], name = lenoteDom.editor.data.tags.getName(UE.utils.html(_tag.name));
                                            var _tag = _tags[i], name = lenoteDom.editor.data.tags.getName(utils.html(_tag.name));
                                            if(!name) continue;
                                            //taglist.push('<span>' + name + '</span>');
                                            taglist.push(name + '&nbsp;');
                                        }
                                        _tagwrap.html(taglist.join(''));
                                    }else{
                                        cnote.find('.entry .metadata .tag').remove();
                                    }
                                }
                                
                                //检查分类是否有修改
                                if(noteData.cid != cid){ //说明未自动保存过
                                    lenoteDom.category.count(lenoteView.dom.category.getDomID(noteData.cid), -1, false, true);
                                    lenoteDom.category.count(lenoteView.dom.category.getDomID(cid), 1, false, true);
                                }
                                
                                $.smartDoing({action: 'del', text: '笔记更新成功'});
                                
                                var _sel = lenoteDom.category.getSelected();
                                if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) >= 0 || _sel == lenoteDom.category.getDomID(cid)){
                                    lenoteView.dom.note.init({title: title, content: content, categoryID: cid, id: noteData.id, version: respose.version, createTime: cnote.data.ctime, shareLinkID: noteData.shareKey});
                                    //lenoteView.dom.editor.data.attachments.clean();
                                    lenoteView.dom.editor.data.attachments.update(respose.resource);
                                    lenoteView.dom.note.updateThumb(noteData.id, respose.resource);
                                }else{
                                    lenoteView.dom.editor.cleanUI();
                                    lenoteView.dom.editor.data.attachments.clean();
                                    lenoteDom.editor.data.tags.clean();
                                    if(cnote.length > 0){
                                        var next = cnote.nextAll('li:not(.date-sep)').first().attr('id') || cnote.prevAll('li:not(.date-sep)').first().attr('id');
                                    }else{
                                        var next = lenoteDom.note.getSelected(true);
                                    }
                                    if(next){
                                        (cnote.length > 0)? that.show(next) : that.show(next, false, true);
                                    }else{
                                        lenoteView.dom.editor.insertBtn.clean().create().show();
                                        $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                    }
                                    if(cnote.prev().hasClass('date-sep')){
                                        var _next = cnote.next();
                                        if(_next.length == 0 || _next.hasClass('date-sep')){
                                            cnote.prev().remove();
                                        }
                                    }
                                    cnote.remove();
                                    lenoteDom.note.updateIcon();
                                }
                            },
                            complete: function(status){
                                lenoteView.dom.editor.data.remove('mark');
                            },
                            fail: function(respose){
                                lenoteDom.editor.saved.monitorTitle();
                                lenoteDom.editor.saved.listen();
                                //保存失败后设置为true，让用户不可离开编辑界面
                                lenoteDom.editor.saved.is_need = true;
                                //如果是因为版本问题导致保存失败则更新新版本号
                                if(typeof respose == 'object'){
                                    if(respose.businessData) lenoteDom.editor.data.add('ver', respose.businessData);
                                }
                            },
                            before: function(){
                                lenoteView.dom.editor.data.add('mark', 'update');
                                $.smartDoing({text: '正在更新笔记...'});
                            }
                        }, lenoteDom.editor.data.tags.build(), lenoteTag.getNoteStyle());
                    }else{
                        $.lebox.warning('网络异常，请刷新后重试！', 800);
                    }
                }else{
                    //保存新笔记
                    //var cateid = lenoteView.dom.category.getCurrent(true) || lenoteView.dom.category.getDefault();
                    var cateid = $('#sidebar-c .note-info .extra .note-category span.title').attr('_id');
                    cateid = cateid? lenoteView.dom.category.getDomID(cateid) : (lenoteView.dom.category.getCurrent(true) || lenoteView.dom.category.getDefault());
                    if(cateid){
                        var cid = lenoteView.dom.category.resolveID(cateid), isMarked = false;
                        if(lenoteView.dom.category.getSelected() == 'stars-notes') isMarked = true;
                        lenoteView._lenote.note.add(cid, title, content, isMarked, lenoteView.dom.editor.data.attachments.build(), {
                                success: function(respose){
                                    lenoteView.dom.editor.data.attachments.cleanNew();
                                    //更新笔记列表
                                    var _sel = lenoteDom.category.getSelected();
                                    if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) >= 0 || _sel == lenoteDom.category.getDomID(cid)){
                                        lenoteView.dom.note.selected(lenoteView.dom.note.insert({
                                            noteID: respose.noteID, version: respose.version,
                                            //title: title, summary: content, isMarked: isMarked, tag: lenoteDom.editor.data.tags.build(true)
                                            title: title, summary: summary, isMarked: isMarked, tag: lenoteDom.editor.data.tags.build(true)
                                        }, true, true));
                                        
                                        lenoteDom.note.updateIcon();
                                        
                                        //设置笔记为显示UI
                                        lenoteView.dom.note.init({title: title, content: content, categoryID: cid, id: respose.noteID, version: respose.version});
                                        lenoteView.dom.note.count(1);
                                        //lenoteView.dom.editor.data.attachments.clean();
                                        lenoteView.dom.editor.data.attachments.update(respose.resource);
                                        lenoteView.dom.note.updateThumb(respose.noteID, respose.resource);
                                        //如果当前选择的是所有笔记、星标笔记需要更新笔记对应的分类笔记数
                                        if(lenoteView.dom.category.getSelected() == 'all-notes') lenoteDom.category.count(cateid, 1, false, true);
                                        if(lenoteView.dom.category.getSelected() == 'stars-notes') lenoteDom.category.count(cateid, 1, false, true);
                                    }else{
                                        lenoteDom.category.count(cateid, 1, false);
                                        lenoteView.dom.editor.cleanUI();
                                        lenoteView.dom.editor.data.attachments.clean();
                                        lenoteDom.editor.data.tags.clean();
                                        var next = lenoteDom.note.getSelected(true);
                                        if(next){
                                            that.show(next, false, true);
                                        }else{
                                            lenoteView.dom.editor.insertBtn.clean().create().show();
                                            $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                        }
                                    }
                                    
                                    $.smartDoing({action: 'del', text: '笔记已保存'});
                                },
                                complete: function(status){
                                    lenoteView.dom.editor.data.remove('mark');
                                },
                                fail: function(){
                                    lenoteDom.editor.saved.monitorTitle();
                                    lenoteDom.editor.saved.listen();
                                    //保存失败后设置为true，让用户不可离开编辑界面
                                    lenoteDom.editor.saved.is_need = true;
                                },
                                before: function(){
                                    lenoteView.dom.editor.data.add('mark', 'save');
                                    $.smartDoing({text: '正在保存笔记...'});
                                }
                        }, lenoteDom.editor.data.tags.build(), lenoteTag.getNoteStyle());
                    }else{
                        $.lebox.error('请先选择一个笔记本后再保存！', 800);
                    }
                }
                //更新笔记本的版本树
                //lenoteView.dom.category.updateVersion(lenoteView.dom.category.getCurrent(true), true);
            },
            
            //自动保存
            saved: function(callback){
                callback.init();
                
                //检查笔记是否处在编辑状态，否则不保存
                if($('#note_title_input').length == 1){
                    if(lenoteView.dom.editor.checkIsOpr(['update', 'save', 'del'])){
                        lenoteDom.editor.saved.init();
                    }else{
                        var target = $('#sidebar-c .note-editor');
                        var title = lenoteView.dom.editor.getTitle(), content = lenoteAnalyze.encode(lenoteView.dom.editor.getContent()), noteData = target.data('note'),
                              summary = utils.html(utils.strip_tags(content)).substr(0, 100);
                        if(!title) title = '无标题笔记';
                        if(noteData && noteData.id){ //编辑
                            if(noteData.ver){
                                var cid = $('#sidebar-c .note-info .extra .note-category span.title').attr('_id') || noteData.cid;
                                lenoteView._lenote.note.update(cid, noteData.id, title, content, noteData.ver, lenoteView.dom.editor.data.attachments.build(true), {
                                    success: function(respose){
                                        lenoteView.dom.editor.data.attachments.cleanNew();
                                        
                                        //更新笔记列表项
                                        var cnote = $('#' + lenoteView.dom.note.getDomID(noteData.id));
                                        if(cnote.length > 0){
                                            cnote.data($.extend(cnote.data(), {ver: respose.version}));
                                            //cnote.find('.item.note-entry').find('.entry .title').html(title).end().find('.entry .summary .text').html(utils.strip_tags(content))
                                            cnote.find('.item.note-entry').find('.entry .title').html(title).end().find('.entry .summary .text').html(utils.unhtml(summary))
                                            .end().find('.entry .metadata .date').html(new Date().format('d日 hh:mm') + '&nbsp;' + (new Date().getHours() >= 12? 'PM' : 'AM'));
                                            //笔记列表标签
                                            var _tags = lenoteDom.editor.data.tags.build(true);
                                            if(_tags.length > 0){
                                                var _tagwrap = cnote.find('.entry .metadata .tag'), taglist = [];
                                                if(_tagwrap.length == 0) cnote.find('.entry .metadata').append(_tagwrap = $('<span class="tag"></span>'));
                                                for(var i = 0; i < _tags.length; i++){
                                                    //var _tag = _tags[i], name = lenoteDom.editor.data.tags.getName(UE.utils.html(_tag.name));
                                                    var _tag = _tags[i], name = lenoteDom.editor.data.tags.getName(utils.html(_tag.name));
                                                    if(!name) continue;
                                                    //taglist.push('<span>' + name + '</span>');
                                                    taglist.push(name + '&nbsp;');
                                                }
                                                _tagwrap.html(taglist.join(''));
                                            }else{
                                                cnote.find('.entry .metadata .tag').remove();
                                            }
                                        }
                                        
                                        var hasChange = noteData.cid != cid;
                                        //修改分类后需要更新笔记数
                                        if(noteData.cid != cid){
                                            //var _sel = lenoteDom.category.getSelected();
                                            //if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) == -1){
                                            //    lenoteView.dom.note.count(-1); //旧分类数-1
                                            //    lenoteDom.category.count(lenoteView.dom.category.getDomID(cid), 1, false);
                                            //}else{
                                            //    lenoteDom.category.count(lenoteView.dom.category.getDomID(noteData.cid), -1, false, true);
                                            //    lenoteDom.category.count(lenoteView.dom.category.getDomID(cid), 1, false, true);
                                            //}
                                            lenoteDom.category.count(lenoteView.dom.category.getDomID(noteData.cid), -1, false, true);
                                            lenoteDom.category.count(lenoteView.dom.category.getDomID(cid), 1, false, true);
                                        }
                                        
                                        //更新笔记项
                                        $('#note_title_input').val(lenoteDom.editor.filterTitle(title)).trigger('keypress');
                                        target.data('note', $.extend(target.data('note'), {cid: cid, ver: respose.version, content: content}));
                                        lenoteView.dom.editor.data.attachments.update(respose.resource);
                                        lenoteView.dom.note.updateThumb(noteData.id, respose.resource);
                                        
                                        $.smartDoing({action: 'del', text: '笔记更新成功', _callback: function(){
                                            callback.success(function(_callback_){
                                                /*
                                                 * 自动保存不跳转到笔记修改后分类列表，只有在点击完成按钮后才会跳转到相应的分类笔记列表上去
                                                 * * 如果当前选中的分类不是所有分类、星标分类、我的分享、回收站且笔记更新的分类与当前选中的分类不同时，要
                                                 * * 设置saved.is_need始终为true, 让其不能点击原分类笔记列表中的其它笔记导致列表中笔记分类不一致
                                                 */
                                                var _sel = lenoteDom.category.getSelected();
                                                //if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) == -1 && _sel != lenoteDom.category.getDomID(cid) && hasChange && cnote.length > 0){
                                                if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) == -1 && _sel != lenoteDom.category.getDomID(cid) && cnote.length > 0){
                                                    lenoteDom.editor.saved.is_hold = lenoteView.dom.note.getDomID(noteData.id);
                                                }else{
                                                    lenoteDom.editor.saved.is_hold = null;
                                                }
                                                if(typeof _callback_ == 'function') _callback_();
                                            });
                                        }});
                                    },
                                    complete: function(status){
                                        lenoteView.dom.editor.data.remove('mark');
                                        callback.complete();
                                    },
                                    before: function(){
                                        lenoteView.dom.editor.data.add('mark', 'update');
                                        $.smartDoing({text: '正在更新笔记...'});
                                    },
                                    error: function(msg){
                                        callback.error(msg);
                                    },
                                    fail: function(respose){
                                        //如果是因为版本问题导致保存失败则更新新版本号
                                        if(typeof respose == 'object'){
                                            if(respose.businessData) lenoteDom.editor.data.add('ver', respose.businessData);
                                        }
                                    }
                                }, lenoteDom.editor.data.tags.build(), lenoteTag.getNoteStyle());
                            }else{
                                callback.complete();
                            }
                        }else{ //新笔记
                            var cateid = $('#sidebar-c .note-info .extra .note-category span.title').attr('_id');
                            cateid = cateid? lenoteView.dom.category.getDomID(cateid) : (lenoteView.dom.category.getCurrent(true) || lenoteView.dom.category.getDefault());
                            if(cateid){
                                var cid = lenoteView.dom.category.resolveID(cateid), isMarked = false;
                                if(lenoteView.dom.category.getSelected() == 'stars-notes') isMarked = true;
                                lenoteView._lenote.note.add(cid, title, content, isMarked, lenoteView.dom.editor.data.attachments.build(true), {
                                    success: function(respose){
                                        lenoteView.dom.editor.data.attachments.cleanNew();
                                        
                                        //更新笔记列表
                                        var _sel = lenoteDom.category.getSelected();
                                        if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) >= 0 || _sel == lenoteDom.category.getDomID(cid)){
                                            lenoteView.dom.note.selected(lenoteView.dom.note.insert({
                                                noteID: respose.noteID, version: respose.version,
                                                title: title, summary: summary, isMarked: isMarked, tag: lenoteDom.editor.data.tags.build(true)
                                            }, true, true));
                                            lenoteDom.note.updateIcon();
                                            lenoteView.dom.note.count(1);
                                            //如果当前选择的是所有笔记、星标笔记需要更新笔记对应的分类笔记数
                                            if(lenoteView.dom.category.getSelected() == 'all-notes') lenoteDom.category.count(cateid, 1, false, true);
                                            if(lenoteView.dom.category.getSelected() == 'stars-notes') lenoteDom.category.count(cateid, 1, false, true);
                                        }else{
                                            lenoteDom.category.count(cateid, 1, false);
                                        }
                                        
                                        //更新笔记项
                                        $('#note_title_input').val(lenoteDom.editor.filterTitle(title)).trigger('keypress');
                                        target.data('note', {cid: cid, id: respose.noteID, ver: respose.version, content: content, shareKey: undefined});
                                        lenoteView.dom.editor.data.attachments.update(respose.resource);
                                        lenoteView.dom.note.updateThumb(respose.noteID, respose.resource);
                                        
                                        $.smartDoing({action: 'del', text: '笔记已保存', _callback: function(){
                                            //callback.success(function(_callback_){
                                                //var _sel = lenoteDom.category.getSelected();
                                                //if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) == -1 && _sel != lenoteDom.category.getDomID(cid) && hasChange){
                                                //    lenoteDom.editor.saved.is_hold = true;
                                                //}else{
                                                //    lenoteDom.editor.saved.is_hold = false;
                                                //}
                                                //if(typeof _callback_ == 'function') _callback_();
                                            //});
                                            callback.success();
                                        }});
                                    },
                                    complete: function(status){
                                        lenoteView.dom.editor.data.remove('mark');
                                        callback.complete();
                                    },
                                    before: function(){
                                        lenoteView.dom.editor.data.add('mark', 'save');
                                        $.smartDoing({text: '正在保存笔记...'});
                                    },
                                    error: function(msg){
                                        callback.error(msg);
                                    }
                                }, lenoteDom.editor.data.tags.build(), lenoteTag.getNoteStyle());
                            }else{
                                callback.complete();
                            }
                        }
                    }
                }else{
                    lenoteDom.editor.saved.init();
                }
            },
            
            share: function(isClose){
                if(isClose === true){
                    lenoteView._lenote.share.del(lenoteDom.editor.data.get('shareKey'), {
                        success: function(respose){
                           if(respose.returnCode != 200 || $.inArray(respose.status, [4, 6]) != -1){
                                $.lebox.error('链接删除失败，请稍候再试', 800);
                                return false;
                            }
                            
                            lenoteDom.editor.data.remove('shareKey');
                            $('#sidebar-c .note-meta nobr.publnk').remove();
                            lenoteDom.category.shared_count(-1);
                            $.lebox.success('链接已删除', 800);
                            
                            if(lenoteView.dom.category.getSelected() == 'myshare'){
                                var _current = $('li#' + lenoteDom.note.getDomID(lenoteDom.editor.data.get('id')) + ':not(.date-sep)');
                                if(lenoteView.dom.note.isEqualSelected(lenoteDom.editor.data.get('id'))){
                                    lenoteView.dom.editor.cleanUI();
                                    var _next = _current.nextAll('li:not(.date-sep)').first().attr('id') || _current.prevAll('li:not(.date-sep)').first().attr('id');
                                    if(_next){
                                        lenoteView.note.show(_next);
                                    }else{
                                        $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                    }
                                }
                                
                                if(_current.prev().hasClass('date-sep')){
                                    var _next_ = _current.next();
                                    if(_next_.length == 0 || _next_.hasClass('date-sep')) _current.prev().remove();
                                }
                                _current.remove();
                                if($('#sidebar-b .list-notes li:not(.date-sep)').length <= 10) $('#sidebar-b .content').trigger('scroll');
                                lenoteDom.note.updateIcon();
                            }
                        },
                        before: function(){$.lebox.notify('正在删除链接，请稍候');},
                        failure: function(){$.lebox.error('链接删除失败，请稍候再试', 1200);},
                        error: function(){$.lebox.error('网络异常，请稍候再试', 1200);}
                    });
                }else{
                    //获取公开链接
                    lenoteView._lenote.share.create(lenoteDom.editor.data.get('id'), {
                        success: function(respose){
                            var key = respose.shareKey;
                            if(!key || respose.returnCode != 200 || $.inArray(respose.status, [4, 6]) != -1){
                                $.lebox.error('公共链接创建失败，请稍候再试', 1200);
                                return false;
                            }
                            
                            lenoteDom.note.insertPublicLink(key);
                            lenoteDom.editor.data.add('shareKey', key);
                            lenoteDom.category.shared_count(1);
                            
                            $.lebox.close(function(){
                                $.lebox.modalbox('公开链接', lenoteDom.fragment.getShare(key), function(){
                                    $.lebox.modalbox.close(function(){
                                        //停止分享
                                        lenoteView._lenote.share.del(key, {
                                            success: function(respose){
                                                if(respose.returnCode != 200 || $.inArray(respose.status, [4, 6]) != -1){
                                                    $.lebox.error('链接删除失败，请稍候再试', 800);
                                                    return false;
                                                }
                                                
                                                lenoteDom.editor.data.remove('shareKey');
                                                $('#sidebar-c .note-meta nobr.publnk').remove();
                                                lenoteDom.category.shared_count(-1);
                                                $.lebox.success('链接已删除', 800);
                                            },
                                            before: function(){$.lebox.notify('正在删除链接，请稍候');},
                                            failure: function(){$.lebox.error('链接删除失败，请稍候再试', 1200);},
                                            error: function(){$.lebox.error('网络异常，请稍候再试', 1200);}
                                        });
                                    });
                                }, true, 'liner', false, function(){
                                    var btn_copy = $('#lebox-wrap .btn-copy');
                                    btn_copy.zclip({
                                        path: '/assets/js/zclip/ZeroClipboard.swf',
                                        copy:function(){
                                            return $('#lebox-wrap input.publiclink').val();
                                        },
                                        afterCopy: function(){
                                            var prompt = $('#lebox-wrap .prompt');
                                            prompt.text('复制成功').show();
                                            setTimeout(function(){
                                                prompt.fadeOut(function(){
                                                    $(this).text('');
                                                });
                                            }, 800);
                                        }
                                    });
                                    //$('.zclip').offset({left: btn_copy.offset().left, top: btn_copy.offset().top});
                                });
                            }, true);
                        },
                        before: function(){
                            $.lebox.notify('正在创建链接，请稍候');
                        },
                        failure: function(){
                            $.lebox.error('链接创建失败，请稍候再试', 1200);
                        },
                        error: function(){
                            $.lebox.error('网络异常，请稍候再试', 1200);
                        }
                    });
                }
            }
        },
        
        //回收站操作
        trash: {
            getAll: function(){
                lenoteView._lenote.trash.getAll($.extend(lenoteView.dom.note.getPagination(), {skip: 0}), 100, lenoteView.dom.note.list_callback('trash', 'trash', true));
            },
            scroll: {
                getAll: function(scrollTop){
                    var pager = lenoteView.dom.note.getPagination();
                    lenoteView._lenote.trash.getAll(pager, 100, lenoteView.dom.note.autoLoading.callback(scrollTop, pager.size));
                }
            },
            del: function(){
                if(lenoteView.dom.editor.checkIsOpr(['del'])) return false;
                var noteData = $('#sidebar-c .note-editor').data('note');
                if(noteData && noteData.id){
                    $.lebox.modalbox('彻底删除笔记', lenoteView.dom.category.getConfirmHtml('确定彻底删除笔记"<span class="keyword ellipsis">' + lenoteView.dom.editor.getTitle() + '</span>"？'), function(){
                        $.lebox.modalbox.close();
                        lenoteView._lenote.trash.del([{noteID: noteData.id, version: noteData.ver}], {
                            success: function(respose){
                                var note = $('#sidebar-b .list-notes li#' + lenoteView.dom.note.getDomID(noteData.id)), cid = lenoteDom.category.getDomID(noteData.cid);
                                
                                //检查当前选中笔记与被删除笔记是否一样，不一样则不操作
                                if(lenoteView.dom.note.isEqualSelected(noteData.id)){
                                    lenoteView.dom.editor.cleanUI();
                                    lenoteView.dom.editor.data.attachments.clean();
                                    lenoteDom.editor.data.tags.clean();
                                    //在笔记列表中自动加载被删除笔记的前一个或后一个笔记
                                    var next = note.nextAll('li:not(.date-sep)').first().attr('id') || note.prevAll('li:not(.date-sep)').first().attr('id');
                                    if(next){
                                        lenoteView.note.show(next);
                                    }else{
                                        $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                    }
                                }
                                
                                if(note.prev().hasClass('date-sep')){
                                    var _next = note.next();
                                    if(_next.length == 0 || _next.hasClass('date-sep')){
                                        note.prev().remove();
                                    }
                                }
                                note.remove();
                                
                                $.smartDoing({action: 'del', text: '笔记已彻底删除'});
                                
                                if($('#sidebar-b .list-notes li:not(.date-sep)').length <= 10){
                                    $('#sidebar-b .content').trigger('scroll');
                                }
                                
                                lenoteDom.category.trash_count(-1);
                                lenoteDom.note.updateIcon();
                            },
                            complete: function(status){
                                lenoteView.dom.editor.data.remove('mark');
                            },
                            before: function(){
                                lenoteView.dom.editor.data.add('mark', 'del');
                                $.smartDoing({text: '请稍候，正在删除笔记...'});
                            }
                        });
                    });
                }else{
                    $.lebox.error('网络异常，请刷新后重试！', 800);
                }
            },
            restore: function(){
                if(lenoteView.dom.editor.checkIsOpr(['restore'])) return false;
                var noteData = $('#sidebar-c .note-editor').data('note');
                if(noteData && noteData.id){
                    $.lebox.modalbox('还原笔记', lenoteView.dom.category.getConfirmHtml('确定还原笔记"<span class="keyword ellipsis">' + lenoteView.dom.editor.getTitle() + '</span>"？', '还原'), function(){
                        $.lebox.modalbox.close();
                        lenoteView._lenote.trash.restore([{noteID: noteData.id, version: noteData.ver}], {
                            success: function(respose){
                                var note = $('#sidebar-b .list-notes li#' + lenoteView.dom.note.getDomID(noteData.id)), cid = lenoteDom.category.getDomID(noteData.cid);
                                
                                //检查当前选中笔记与被还原笔记是否一样，不一样则不操作
                                if(lenoteView.dom.note.isEqualSelected(noteData.id)){
                                    lenoteView.dom.editor.cleanUI();
                                    lenoteView.dom.editor.data.attachments.clean();
                                    lenoteDom.editor.data.tags.clean();
                                    //在笔记列表中自动加载被还原笔记的前一个或后一个笔记
                                    var next = note.nextAll('li:not(.date-sep)').first().attr('id') || note.prevAll('li:not(.date-sep)').first().attr('id');
                                    if(next){
                                        lenoteView.note.show(next);
                                    }else{
                                        $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                    }
                                }
                                
                                if(note.prev().hasClass('date-sep')){
                                    var _next = note.next();
                                    if(_next.length == 0 || _next.hasClass('date-sep')){
                                        note.prev().remove();
                                    }
                                }
                                note.remove();
                                
                                //设置被还原笔记分类的笔记数
                                for(var i = 0; i < respose.category.length; i++){
                                    var _category = respose.category[i], _category_domid = lenoteDom.category.getDomID(_category.categoryID),
                                          categoryDom = $('#' + _category_domid);
                                    if(categoryDom.length > 0){
                                        //categoryDom.data('ver', _category.categoryVersion);
                                        if(user.getUState('rcid') != _category_domid) lenoteView.dom.category.count(_category_domid, 1, false);
                                    }
                                }
                                
                                $.smartDoing({action: 'del', text: '笔记已还原'});
                                
                                if($('#sidebar-b .list-notes li:not(.date-sep)').length <= 10){
                                    $('#sidebar-b .content').trigger('scroll');
                                }
                                
                                lenoteDom.category.trash_count(-1);
                                lenoteDom.note.updateIcon();
                            },
                            complete: function(status){
                                lenoteView.dom.editor.data.remove('mark');
                            },
                            before: function(){
                                lenoteView.dom.editor.data.add('mark', 'restore');
                                $.smartDoing({text: '请稍候，正在还原笔记...'});
                            }
                        });
                    });
                }else{
                    $.lebox.error('网络异常，请刷新后重试！', 800);
                }
            },
            clear: function(){
                $.lebox.modalbox('清空废纸篓', lenoteView.dom.category.getConfirmHtml('确定清空废纸篓？', '清空'), function(){
                    lenoteView._lenote.trash.clear({
                        success: function(respose){
                            if(lenoteDom.category.isSelected('trash')){
                                lenoteDom.editor.cleanUI();
                                $('#sidebar-b .list-notes').empty();
                                lenoteDom.note.updateIcon();
                            }
                            
                            lenoteDom.category.trash_count(0);
                            $('#lebox-wrap .prompt').css('padding-left', '5px').addClass('success').text('废纸篓已清空！');
                            $.lebox.modalbox.close();
                        },
                        before: function(){
                            //$('#lebox-wrap .prompt').smartLoading({text: '正在清空废纸篓...'});
                            $('#lebox-wrap .prompt').css('padding', '0px').html('<div class="loading" style="margin:5px 0 0 2px;">正在清空废纸篓...</div>');
                        },
                        failure: function(respose){
                            $('#lebox-wrap .prompt').css('padding-left', '5px').text('应用出现故障，请稍候再试！');
                        },
                        error: function(msg){
                            $('#lebox-wrap .prompt').css('padding-left', '5px').text('清空废纸篓失败，请稍候重试！');
                        }
                    });
                });
            }
        }
    };
})();/*
 *  author: gejian1@lenovo.com
 *  description: 应用入口
 */
$(function(){
    $.lebox.notify('请稍候，正在初始化...');
    
    //检查是否支持JSON，如不支持则导入json2.json
    if(typeof(JSON) == 'undefined'){
        $('body').append('<script type="text/javascript" src="/assets/js/json/json2.js"></script>');
    }
    
    //获取播放器实例-调研flash为什么不能放在iframe中
    window.getPlayer = function(iframeWindow){
        window.iframeWindow = iframeWindow;
        return $('#flashcontent').get(0);
    };
    //flash回调事件封装
    window.supernote_audio = {
        getIframeWindow: function(){
            var iframeWindow = window.iframeWindow || $('#iframeNodeView').get(0).contentWindow;
            return iframeWindow.supernote_audio;
        },
        loadedEvent: function(id, time){
            this.getIframeWindow().loadedEvent(id, time);
        },
        errorEvent: function(id, msg){
            this.getIframeWindow().errorEvent(id, msg);
        },
        stop: function(id){
            this.getIframeWindow().stop(id);
        },
        slideTo: function(id, second, speed){
            this.getIframeWindow().slideTo(id, second, speed);
        }
    };
    
    //检查是否登录，如果未登录则要求登录
    if(!user.getUState('uid') || !user.getUState('rcid') || !user.checkLogin(true, function(status, userInfo){
        if(status){
            //初始化flash播放器
            var params = {quality: "high", scale: "noscale", wmode: "window", allowscriptaccess: "always", bgcolor: "#fff"};
            var flashvars = {};
            var attributes = {id: "flashcontent", name: "flashcontent"};
            //if(UE.browser.ie && (UE.browser.version < 9 || UE.browser.ie8Compat || UE.browser.ie7Compat || UE.browser.ie6Compat)){ //版本号会导致ie7/8加载flash时报找不到对象
            //    swfobject.embedSWF("/assets/js/parser/supernote-audio.swf", "flashcontent", "1", "1", null, "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
            //}else{
            //    swfobject.embedSWF("/assets/js/parser/supernote-audio.swf", "flashcontent", "1", "1", "10.2.124", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
            //}
            swfobject.embedSWF("/assets/js/parser/supernote-audio.swf?v" + Date.parse(new Date), "flashcontent", "1", "1", "10", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
            
            //设置所有笔记、星标笔记、分享笔记、回收站的笔记数
            lenoteDom.category.count('all-notes', userInfo.noteCount);
            lenoteDom.category.count('stars-notes', userInfo.markedCount, false, true);
            lenoteDom.category.shared_count(userInfo.sharedCount);
            lenoteDom.category.trash_count(userInfo.recycleCount);
            //设置默认分类
            $('#sidebar-a').data({defaultCategoryID: userInfo.defaultCategoryID});
            
            //$.lebox.close();
            lenoteView.init(new lenote(user.getUState('t'), {uid: user.getUState('uid')}));
            setTimeout(function(){
                $.lebox.close(function(){
                    //检查是否需要导入旧用户数据
                    user.importStatus(function(respose){
                        try{
                            if(respose.status === 0){
                                user.importData(function(res){
                                    if(res.status === 1){
                                        $.smartDoing({action: 'add', text: '<a href="/migrate/mk.html" target="_blank">数据导入中，点击查看</a>', hold: true});
                                        $.lebox.modalbox('数据导入提示', lenoteDom.fragment.getImportPrompt(), function(){}, true, 'liner');
                                        user.checkImportStatus();
                                    }
                                });
                            }else if(respose.status === 1){
                                $.smartDoing({action: 'add', text: '<a href="/migrate/mk.html" target="_blank">数据导入中，点击查看</a>', hold: true});
                                user.checkImportStatus();
                            }else if(respose.status === -1){
                                $.smartDoing({action: 'add', text: '<a href="/migrate/mk.html" target="_blank">数据导入中，点击查看</a>', hold: true});
                                $.smartDoing({action: 'del', text: '数据导入失败，点击<a href="/migrate/mk.html" target="_blank"> 这里 </a>重新导入', statusClass: 'error', hold: true, delay: 5000});
                            }
                        }catch(e){}
                    });
                    
                    //轮询检查cookie是否过期
                    user.checkUserStatus();
                });
            }, 500);
        }else{
            user.cleanUState(true, function(){
                $.lebox.error('获取用户信息失败，请重新登录！');
            });
        }
    })) user.cleanUState(true, function(){
        $.lebox.warning('抱歉，您还未登录！');
    });
});