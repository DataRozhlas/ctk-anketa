!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){},r={},a=[],i=[];function l(e,t){var n,l,s,p,c=i;for(p=arguments.length;p-- >2;)a.push(arguments[p]);for(t&&null!=t.children&&(a.length||a.push(t.children),delete t.children);a.length;)if((l=a.pop())&&void 0!==l.pop)for(p=l.length;p--;)a.push(l[p]);else"boolean"==typeof l&&(l=null),(s="function"!=typeof e)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(s=!1)),s&&n?c[c.length-1]+=l:c===i?c=[l]:c.push(l),n=s;var u=new o;return u.nodeName=e,u.children=c,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==r.vnode&&r.vnode(u),u}function s(e,t){for(var n in t)e[n]=t[n];return e}function p(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var c="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var u=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,d=[];function f(e){!e._dirty&&(e._dirty=!0)&&1==d.push(e)&&(r.debounceRendering||c)(v)}function v(){for(var e;e=d.pop();)e._dirty&&B(e)}function m(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&h(e,t.nodeName):n||e._componentConstructor===t.nodeName}function h(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function _(e){var t=s({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function y(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)p(n,null),p(o,e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var a in n)a in o||(e.style[a]="");for(var a in o)e.style[a]="number"==typeof o[a]&&!1===u.test(a)?o[a]+"px":o[a]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var i=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,g,i):e.removeEventListener(t,g,i),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var l=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function g(e){return this._listeners[e.type](r.event&&r.event(e)||e)}var x=[],C=0,w=!1,N=!1;function k(){for(var e;e=x.shift();)r.afterMount&&r.afterMount(e),e.componentDidMount&&e.componentDidMount()}function S(e,t,n,o,r,a){C++||(w=null!=r&&void 0!==r.ownerSVGElement,N=null!=e&&!("__preactattr_"in e));var i=P(e,t,n,o,a);return r&&i.parentNode!==r&&r.appendChild(i),--C||(N=!1,a||k()),i}function P(e,t,n,o,r){var a=e,i=w;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),M(e,!0))),a.__preactattr_=!0,a;var l,s,p=t.nodeName;if("function"==typeof p)return function(e,t,n,o){var r=e&&e._component,a=r,i=e,l=r&&e._componentConstructor===t.nodeName,s=l,p=_(t);for(;r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;r&&s&&(!o||r._component)?(L(r,p,3,n,o),e=r.base):(a&&!l&&(E(a),e=i=null),r=z(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,i=null),L(r,p,1,n,o),e=r.base,i&&e!==i&&(i._component=null,M(i,!1)));return e}(e,t,n,o);if(w="svg"===p||"foreignObject"!==p&&w,p=String(p),(!e||!h(e,p))&&(l=p,(s=w?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,a=s,e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),M(e,!0)}var c=a.firstChild,u=a.__preactattr_,d=t.children;if(null==u){u=a.__preactattr_={};for(var f=a.attributes,v=f.length;v--;)u[f[v].name]=f[v].value}return!N&&d&&1===d.length&&"string"==typeof d[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=d[0]&&(c.nodeValue=d[0]):(d&&d.length||null!=c)&&function(e,t,n,o,r){var a,i,l,s,p,c=e.childNodes,u=[],d={},f=0,v=0,h=c.length,_=0,b=t?t.length:0;if(0!==h)for(var g=0;g<h;g++){var x=c[g],C=x.__preactattr_,w=b&&C?x._component?x._component.__key:C.key:null;null!=w?(f++,d[w]=x):(C||(void 0!==x.splitText?!r||x.nodeValue.trim():r))&&(u[_++]=x)}if(0!==b)for(var g=0;g<b;g++){s=t[g],p=null;var w=s.key;if(null!=w)f&&void 0!==d[w]&&(p=d[w],d[w]=void 0,f--);else if(v<_)for(a=v;a<_;a++)if(void 0!==u[a]&&m(i=u[a],s,r)){p=i,u[a]=void 0,a===_-1&&_--,a===v&&v++;break}p=P(p,s,n,o),l=c[g],p&&p!==e&&p!==l&&(null==l?e.appendChild(p):p===l.nextSibling?y(l):e.insertBefore(p,l))}if(f)for(var g in d)void 0!==d[g]&&M(d[g],!1);for(;v<=_;)void 0!==(p=u[_--])&&M(p,!1)}(a,d,n,o,N||null!=u.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||b(e,o,n[o],n[o]=void 0,w);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||b(e,o,n[o],n[o]=t[o],w)}(a,t.attributes,u),w=i,a}function M(e,t){var n=e._component;n?E(n):(null!=e.__preactattr_&&p(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||y(e),T(e))}function T(e){for(e=e.lastChild;e;){var t=e.previousSibling;M(e,!0),e=t}}var U=[];function z(e,t,n){var o,r=U.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),O.call(o,t,n)):((o=new O(t,n)).constructor=e,o.render=j);r--;)if(U[r].constructor===e)return o.nextBase=U[r].nextBase,U.splice(r,1),o;return o}function j(e,t,n){return this.constructor(e,n)}function L(e,t,n,o,a){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||a?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?f(e):B(e,1,a)),p(e.__ref,e))}function B(e,t,n,o){if(!e._disable){var a,i,l,p=e.props,c=e.state,u=e.context,d=e.prevProps||p,f=e.prevState||c,v=e.prevContext||u,m=e.base,h=e.nextBase,y=m||h,b=e._component,g=!1,w=v;if(e.constructor.getDerivedStateFromProps&&(c=s(s({},c),e.constructor.getDerivedStateFromProps(p,c)),e.state=c),m&&(e.props=d,e.state=f,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(p,c,u)?g=!0:e.componentWillUpdate&&e.componentWillUpdate(p,c,u),e.props=p,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!g){a=e.render(p,c,u),e.getChildContext&&(u=s(s({},u),e.getChildContext())),m&&e.getSnapshotBeforeUpdate&&(w=e.getSnapshotBeforeUpdate(d,f));var N,P,T=a&&a.nodeName;if("function"==typeof T){var U=_(a);(i=b)&&i.constructor===T&&U.key==i.__key?L(i,U,1,u,!1):(N=i,e._component=i=z(T,U,u),i.nextBase=i.nextBase||h,i._parentComponent=e,L(i,U,0,u,!1),B(i,1,n,!0)),P=i.base}else l=y,(N=b)&&(l=e._component=null),(y||1===t)&&(l&&(l._component=null),P=S(l,a,u,n||!m,y&&y.parentNode,!0));if(y&&P!==y&&i!==b){var j=y.parentNode;j&&P!==j&&(j.replaceChild(P,y),N||(y._component=null,M(y,!1)))}if(N&&E(N),e.base=P,P&&!o){for(var O=e,W=e;W=W._parentComponent;)(O=W).base=P;P._component=O,P._componentConstructor=O.constructor}}for(!m||n?x.push(e):g||(e.componentDidUpdate&&e.componentDidUpdate(d,f,w),r.afterUpdate&&r.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);C||o||k()}}function E(e){r.beforeUnmount&&r.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?E(n):t&&(null!=t.__preactattr_&&p(t.__preactattr_.ref,null),e.nextBase=t,y(t),U.push(e),T(t)),p(e.__ref,null)}function O(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function W(e,t,n){return S(n,e,{},!1,t,!1)}s(O.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=s(s({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),f(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),B(this,2)},render:function(){}});!function(){if("Microsoft Internet Explorer"===navigator.appName||navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/)){var e=document.createElement("div");e.innerHTML='Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx">není bezpečné</a>, zvažte přechod na <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.mozilla.org/cs/firefox/new/">jiný prohlížeč</a>.',e.style.cssText="text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;",document.body.appendChild(e)}}();var A="https://data.irozhlas.cz";function D(e){if(""===e)return"red"}"localhost"===window.location.hostname&&(A="http://localhost");var H=new XMLHttpRequest;H.addEventListener("load",function(e){W(l("div",{id:"anketa"},JSON.parse(e.target.response).map(function(e){return l("div",{className:"respondent"},l("img",{className:"portret",src:"".concat(A,"/ctk-anketa/img/").concat(e.f),alt:e.jm}),l("div",{className:"bio"},l("div",{className:"jmeno"},"".concat(e.j," ").concat(e.p)),l("div",{className:"strana"},e.s)),l("div",{className:"".concat(D(e.o1)," odpoved")},e.o1||"bez odpovědi"))})),document.getElementById("anketa-wrapper"))}),H.open("GET",A+"/ctk-anketa/data/data.json"),H.send()}]);