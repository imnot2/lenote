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
}));/*
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
})();$(function(){
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
    
    //初始化flash播放器
    var params = {quality: "high", scale: "noscale", wmode: "window", allowscriptaccess: "always", bgcolor: "#fff"}, flashvars = {},
          attributes = {id: "flashcontent", name: "flashcontent"},
          ieversion = (/msie/.test(navigator.userAgent.toLowerCase()) && !+[1,])? parseFloat(navigator.userAgent.toLowerCase().match(/msie (\d+)/)[1]) : 0;
    //if((ieversion > 0) && (document.documentMode == 8 || ((ieversion == 7 && !document.documentMode) || document.documentMode == 7) || (ieversion < 7 || browser.quirks))){ //版本号会导致ie7/8加载flash时报找不到对象
    //    swfobject.embedSWF("/assets/js/parser/supernote-audio.swf", "flashcontent", "1", "1", null, "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
    //}else{
    //    swfobject.embedSWF("/assets/js/parser/supernote-audio.swf", "flashcontent", "1", "1", "10.2.124", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
    //}
    swfobject.embedSWF("/assets/js/parser/supernote-audio.swf?v" + Date.parse(new Date), "flashcontent", "1", "1", "10", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
    
    lenoteDom = {
        editor: {
            getContent: function(){
                return $('#main #content').data('content');
            },
            setContent: function(content){
                $('#main #content').data('content', content);
            },
            data: {
                attachments: {
                    set: function(resources){
                        if(!resources || resources.length < 1) return false;
                        for(var i = 0; i < resources.length; i++){
                            var _data = resources[i], indexof = _data.name.lastIndexOf('.'), filetype = (indexof != -1)? _data.name.substring(indexof) : ''; 
                                 ext = filetype? filetype.replace(/^\./ig, '') : '', name = _data.name.replace(filetype, '');
                            
                            var attachment = $.extend(_data, {
                                title: _data.name, name: name, size: _data.size, type: filetype, ext: ext, resourceID: _data.resourceID, localID: _data.local_id, _type: _data.type,
                                keyID: _data.keyID, link: _data.link, uploadTime: _data.uploadTime, utime: new Date(_data.uploadTime).format('yyyy-MM-dd hh:mm'),
                                publicLink: _data.publicLink
                            });
                            attachment = $.extend(attachment, {sizeof: utils.calFileSize(attachment.size), url: _data.publicLink});
                            this.add(attachment);
                        }
                    },
                    add: function(attachment){
                        var container = $('#main #content'), _attachment = {};
                       _attachment['key_' + attachment['localID']] = attachment;
                       container.data('attachments', $.extend(container.data('attachments') || {}, _attachment));
                    },
                    get: function(localID){
                        var _data = $('#main #content').data('attachments');
                        var attachment = (typeof  _data == 'object')? _data['key_' + localID] : '';
                        if(attachment){
                            var publicLink = attachment.publicLink;
                            if(/\.kk$/i.test($.trim(attachment.title))){
                                publicLink = utils.getDomain() + '/getShareFile/?' + $.param({resourceKeyId: attachment.resourceID, resourcePublicLink: attachment.publicLink, fileName: attachment.title, fileSize: attachment.size || 0});
                            }
                            return $.extend(attachment, {
                                sizeof: utils.calFileSize(attachment.size),
                                url: publicLink
                            });
                        }
                        return '';
                    },
                    getAll: function(){
                        return $('#main #content').data('attachments');
                    }
                }
            }
        }
    };
    
    UE = {
        utils: {
            html: function(str){
                return str ? str.replace(/&((g|l|quo)t|amp|#39);/g, function (m){
                    return {
                        '&lt;':'<',
                        '&amp;':'&',
                        '&quot;':'"',
                        '&gt;':'>',
                        '&#39;':"'"
                    }[m];
                }) : '';
            },
            unhtml: function(str, reg){
                return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function (a, b) {
                    if(b){
                        return a;
                    }else{
                        return{
                            '<':'&lt;',
                            '&':'&amp;',
                            '"':'&quot;',
                            '>':'&gt;',
                            "'":'&#39;'
                        }[a];
                    }
                }) : '';
            }
        }
    };
    
    var browser = UE.browser = function(){
        var agent = navigator.userAgent.toLowerCase(), opera = window.opera,
             browser = {
                 ie: !!window.ActiveXObject,
                 opera: (!!opera && opera.version),
                 webkit: (agent.indexOf( ' applewebkit/' ) > -1),
                 mac: (agent.indexOf( 'macintosh' ) > -1),
                 quirks: (document.compatMode == 'BackCompat')
             };
        browser.gecko = (navigator.product == 'Gecko' && !browser.webkit && !browser.opera);
        var version = 0;
        if(browser.ie){
            version = parseFloat(agent.match(/msie (\d+)/)[1]);
            browser.ie9Compat = document.documentMode == 9;
            browser.ie8 = !!document.documentMode;
            browser.ie8Compat = document.documentMode == 8;
            browser.ie7Compat = ((version == 7 && !document.documentMode) || document.documentMode == 7);
            browser.ie6Compat = (version < 7 || browser.quirks);
        }
        if(browser.gecko){
            var geckoRelease = agent.match(/rv:([\d\.]+)/);
            if(geckoRelease){
                geckoRelease = geckoRelease[1].split( '.' );
                version = geckoRelease[0] * 10000 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;
            }
        }
        if(/chrome\/(\d+\.\d)/i.test(agent)){
            browser.chrome = + RegExp['\x241'];
        }
        if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)){
            browser.safari = + (RegExp['\x241'] || RegExp['\x242']);
        }
        if(browser.opera) version = parseFloat(opera.version());
        if(browser.webkit) version = parseFloat(agent.match(/ applewebkit\/(\d+)/ )[1]);
        browser.version = version;
        browser.isCompatible =
            !browser.mobile && (
            (browser.ie && version >= 6) ||
            (browser.gecko && version >= 10801) ||
            (browser.opera && version >= 9.5) ||
            (browser.air && version >= 1) ||
            (browser.webkit && version >= 522) ||
            false );
        return browser;
    }();
    
    shared = {
        init: function(){
            var body = $('body');
            body.click(function(event){
                try{
                   if(!window.ActiveXObject) 'getSelection' in window ? window.getSelection().removeAllRanges() : window.document.selection.empty();
                }catch(e){}
            }).on('mouseup mousedown', function(event){
                try{
                    var win = $('#iframeNodeView').get(0).contentWindow;
                    if(typeof win == 'object'){
                        'getSelection' in win ? win.getSelection().removeAllRanges() : win.document.selection.empty();
                    }
                }catch(e){}
            });
            //header
            var header = ['<div id="header">'], index_lnk = '/';
            if(user.checkLogin()){
                header.push('<h1><a href="/notes" title="乐云记事" class="logo">乐云记事</a></h1>');
                index_lnk = '/notes';
            }else{
                header.push('<h1><a href="/" title="乐云记事" class="logo">乐云记事</a></h1>');
            }
            header.push('<div class="client_downloads"><a href="' + lenoteConfig.download.pc.link + '" class="pc" title="PC 客户端下载"></a><a href="' + lenoteConfig.download.ios.link + '" class="iphone" title="iPhone 客户端下载"></a><a href="' + lenoteConfig.download.android.link + '" class="android" title="Android 客户端下载"></a></div>');
            header.push('<div class="links">');
            if(user.checkLogin()){
                header.push('<a href="javascript:;" class="accountinfo"></a><img src="/assets/images/top_line.png" alt="|" class="spaceline" /><a href="javascript:;" class="logout">登出</a>');
            }else{
                header.push('<a href="/" class="home">首页</a><img src="/assets/images/top_line.png" alt="|" class="spaceline" /><a href="javascript:;" class="signin">登录</a><a href="javascript:;" class="register">注册</a>');
            }
            header.push('</div></div>');
            //body.append(header.join(''));
            
            //主体与侧边栏
            var main = ['<div id="main"><div class="wrap clearfix">'];
            //--content
            main.push('<div id="content"><div class="top_bg"></div><div class="container"></div><div class="bottom_bg"></div></div>');
            //--sidebar
            main.push('<div id="sidebar"><div class="contents">');
            main.push('<h3 class="logo"><a href="' + index_lnk + '" title="乐云记事-随时随地记录一切">乐云记事</a></h3>');
            main.push('<div class="clients">');
            //main.push('<a href="/download.html" class="pc" title="桌面客户端下载"><span class="title">桌面客户端下载</span><span class="desc">WinXP/Win7/Win8</span></a>');
            //修复chrome下缩放会溢出的问题
            //main.push('<button><a href="/download.html" class="pc" title="桌面客户端下载"><span class="title">桌面客户端下载</span><span class="desc">WinXP/Win7/Win8</span></a></button>');
            main.push('<a href="' + lenoteConfig.download.pc.link + '" class="pc" title="桌面客户端下载"><span class="detail"><span class="title">桌面客户端下载</span><span class="desc">WinXP/Win7/Win8</span></span></a>');
            main.push('<a href="' + lenoteConfig.download.android.link + '" class="android" title="Android客户端下载"><span class="detail"><span class="title">Android Phone</span><span  class="desc">客户端下载</span></span></a>');
            main.push('<a href="' + lenoteConfig.download.ios.link + '" class="iphone" title="iPhone客户端下载"><span class="detail"><span class="title">iPhone客户端下载</span></span></a>');
            main.push('</div>');
            main.push('<div class="qrcode"><img src="/assets/images/QRCode.png" alt="QR Code"/><p>扫描二维码下载</p></div>');
            main.push('</div></div>');
            
            main.push('</div></div>');
            //body.append(main.join(''));
            
            //页脚
            var footer = ['<div id="footer"><div class="wrap">'];
            footer.push('<img src="/assets/images/footer_logo_gray.png" alt="乐云记事" title="乐云记事 · 您的生活好帮手" class="logo">');
            footer.push('<span class="copyright">&copy; 1998 - 2013 Lenovo Inc. All Rights Reserved</span>');
            footer.push('</div></div>');
            //body.append(footer.join(''));
            
            body.prepend(header.join('') + main.join('') + footer.join(''));
            
            //事件监听并显示
            if(user.checkLogin()){
                $('.accountinfo').append(user.getUState('un'));
                $('.logout').click(function(){user.logout();});
            }else{
                $('.signin').click(function(){user.login();});
                $('.register').click(function(){user.register();});
            }
            //设置高度
            this.setHeight();
            $(window).resize(function(){
                shared.setHeight();
                shared.iframe.setHeight();
            });
            this.getNote();
            utils.show('#header, #main, #footer', true);
            //允许encopy的类内容选择
            $('#content .container').on('click', '.encopy', function(event){
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                   //if(!event.isDefaultPrevented()) event.preventDefault();
                }catch(e){}
            });
        },
        getNote: function(){
            var key = $.trim(location.href.replace(new RegExp('^' + utils.getDomain() + '/shared/', 'i'), ''));
            if(key){
                var _lenote = new lenote(user.getUState('t')), _this = this;
                _lenote.share.getContent(key, {
                    success: function(respose){
                        if(respose.status == 1){
                            var note = respose.notes[0];
                            window.parent.lenoteDom.editor.setContent(note.content);
                            lenoteDom.editor.data.attachments.set(note.resource);
                            //$('title').text(note.title + ' - 笔记分享 - 乐云记事');
                            document.title = note.title + ' - 笔记分享 - 乐云记事';
                            note['_title'] = note['title'];
                            note['title'] = utils.unhtml(note['title']);
                            _this.insertContent(note);
                        }else{
                            _this.insertError();
                        }
                        $.lebox.close();
                    },
                    before: function(){
                        $.lebox.notify('请稍候，正在加载笔记...');
                    },
                    failure: function(){
                        _this.insertError();
                    },
                    error: function(){
                        _this.insertError();
                    }
                });
            }else{
                this.insertError();
            }
        },
        setHeight: function(){
            var h = utils.calElemHeight('#main', '#header', 80, true), _h = $('#sidebar .contents').outerHeight(), height = h > _h? h - 10 : _h + 20;
            $('#main').height(height).find('#content .container').height(height - 36);
        },
        insertError: function(){
            var container = $('#main #content .container'), caption = '<div class="caption error">哎呀，出错了</div>';
            caption += '<div class="detail error"><ul class="reason"><li>未找到分享笔记</li><li>您所提供的公开连接无法对应有效的笔记</li><li>可能是连接输入错误，或者笔记主人取消了分享</li></ul></div>';
            container.html(caption);
        },
        insertContent: function(note){
            var utime = new Date(note.lastUpdateTime),
                  container = $('#main #content .container'); caption = ['<div class="caption">'];
            caption.push('<div class="info clearfix encopy ellipsis"><h2 class="title ellipsis">' + note.title + '</h2><div class="toolbar">转存到我的SNOTE</div></div>');
            caption.push('<div class="meta">更新：<span class="encopy">' + utime.format('yyyy年MM月dd日 hh:mm') + '&nbsp;' + (utime.getHours() >= 12? 'PM' : 'AM') + '</span></div>');
            if(note.tag && note.tag.length > 0){
                var _tags = [];
                for(var i = 0; i < note.tag.length; i++){
                    //var _tag = note.tag[i], name = UE.utils.unhtml(utils.trim(utils.strip_tags(UE.utils.html(_tag.name || ''))).replace(/\s+?/igm, '').replace(/[,，'"`~!@#\$%\^*\(\)_\+\-=\}\{\|\\\/\?\.:\[\]]/igm, '').substr(0, 20));
                    var _tag = note.tag[i], name = utils.unhtml($.trim(_tag.name || '').replace(/[,，'"`~!@#\$%\^*\(\)_\+\-=\}\{\|\\\/\?\.:\[\]]/igm, '').substr(0, 20));
                    if(!name) continue;
                    _tags.push('<span class="tagname">' + name + '</span>');
                }
                caption.push('<div class="tags"><span class="title">标签：</span><span class="encopy">' + _tags.join('') + '</span></div>');
            }
            caption.push('</div>');
            container.append(caption.join(''));
            
            var detail = ['<div class="detail encopy"></div>'];
            container.append(detail.join(''));
            this.show();
        },
        show: function(){
            function render(height, maxWidth){
                var root_path = '/assets/js/ueditor/';
                //var html = [(!!window.ActiveXObject)? '' : '<!DOCTYPE html>'];
                var html = [(!+[1,])? '' : '<!DOCTYPE html>'];
                html.push('<html xmlns="http://www.w3.org/1999/xhtml" class="view"><head>');
                html.push('<meta http-equiv="content-type" content="text/html;charset=utf-8">');
                //html.push('<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7; IE=EmulateIE9; IE=EmulateIE10" />');
                html.push('<style type="text/css">' +
                                   'body{cursor: text;margin:8px;font-family:sans-serif;font-size:16px;}' +
                                   //'.view{padding:0;word-wrap:break-word;cursor:text;height:90%;}' +
                                   '.view{word-wrap:break-word;cursor:text;height:90%;}' +
                                   'p{margin:5px 0;}' +
                                 '</style>'
                                );
                html.push('<link rel="stylesheet" type="text/css" href="/assets/css/lib/editor_expand.css"/>');
                height -= 20;
                html.push('</head><body class="view" style="height:' + height + 'px"><div id="viewer"></div>');
                html.push('<script type="text/javascript" src="' + root_path + 'ueditor.parse.js"></script>');
                html.push('<script type="text/javascript" src="/assets/js/jquery.min.js"></script>');
                html.push('<script type="text/javascript" src="/assets/js/parser/parser_api.js"></script>');
                //html.push('<script type="text/javascript">setTimeout(function(){uParse("div", {"highlightJsUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCore.js",');
                //html.push('"highlightCssUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCoreDefault.css"})},300);</script>');
                html.push('<script type="text/javascript">var _interval = setInterval(function(){if(typeof uParse == "function"){');
                html.push('if(_interval) clearInterval(_interval);uParse("div", {"highlightJsUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCore.js",');
                html.push('"highlightCssUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCoreDefault.css"});}},300);</script>');
                //html.push('<script type="text/javascript">setTimeout(function(){' +
                //                '$(function(){' +
                //                    '$("body > #viewer").html(window.parent.lenoteAnalyze.decode(window.parent.lenoteDom.editor.getContent()));' +
                //                    'setTimeout(function(){supernote_audio.init(' + maxWidth + ');}, 300);' +
                //                    'try{$("body").on("mouseup mousedown", function(){' +
                //                    '"getSelection" in window ? window.parent.getSelection().removeAllRanges() : window.parent.document.selection.empty();' +
                //                    ' })}catch(e){}' +
                //                '});' +
                //                '}, 50);</script>');
                html.push('<script type="text/javascript">var interval = setInterval(function(){' +
                                    'if(typeof jQuery == "function"){' +
                                        'if(interval) clearInterval(interval);' +
                                        '$(function(){' +
                                            '$("body > #viewer").html(window.parent.lenoteAnalyze.decode(window.parent.lenoteDom.editor.getContent()));' +
                                            'setTimeout(function(){supernote_audio.init(' + maxWidth + ');}, 300);' +
                                            'try{$("body").on("mouseup mousedown", function(){' +
                                            '"getSelection" in window ? window.parent.getSelection().removeAllRanges() : window.parent.document.selection.empty();' +
                                            ' })}catch(e){}' +
                                        '});' +
                                    '}' +
                                '}, 50);</script>');
                html.push('</body></html>');
                return html.join('');
            }
            var height = this.iframe.calHeight(), maxWidth = $('#main #content .container .detail').width() - 80;
            var src = 'document.open();' +
                          'document.write(\'' + UE.utils.unhtml(render(height, maxWidth)) + '\');document.close();';
            var iframe = '<iframe id="iframeNodeView" name="iframeNodeView" width="100%" height="100%" frameborder="0" src="javascript:void(function(){' + src + '}());"></iframe>';
            $('#main #content .container .detail').height(height).html(iframe);
        },
        iframe: {
            getIframe: function(){
                var iframe = $('#iframeNodeView');
                return iframe.length > 0? iframe : null;
            },
            calHeight: function(){
                var container = $('#main #content .container'), detail = container.children('.detail'),
                      height = container.height() - detail.position().top;
                return (height <= 20)? 25 : height;
            },
            setHeight: function(){
                var iframe = this.getIframe();
                if(iframe){
                    var height = this.calHeight();
                    $('#main #content .container .detail').height(height);
                    iframe.contents().find('body').height(height - 20);
                }
            }
        }
    };
    
    shared.init();
});