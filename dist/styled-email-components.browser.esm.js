import{typeOf as e,isElement as t,isValidElementType as n}from"react-is";import r,{useState as o,useContext as i,useMemo as s,useEffect as a,useRef as u,useLayoutEffect as c}from"react";import l from"shallowequal";import d from"@emotion/stylis";import h from"@emotion/unitless";import f from"postcss-safe-parser";import p from"css-shorthand-expand";import{conv as m}from"color-shorthand-hex-to-six-digit";import v from"lodash.camelcase";import y from"@emotion/is-prop-valid";import g from"hoist-non-react-statics";function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var w=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},b=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!e(t)},E=Object.freeze([]),_=Object.freeze({});function A(e){return"function"==typeof e}function P(e){return"production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var C="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",O="5.0.1",I="undefined"!=typeof window&&"HTMLElement"in window,R=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),j={},D="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:{};function T(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function x(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw"production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(T.apply(void 0,[D[e]].concat(n)).trim())}var k=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&x(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(e+1),a=0,u=t.length;a<u;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),M=new Map,V=new Map,B=1,L=function(e){if(M.has(e))return M.get(e);for(;V.has(B);)B++;var t=B++;return"production"!==process.env.NODE_ENV&&((0|t)<0||t>1<<30)&&x(16,""+t),M.set(e,t),V.set(t,e),t},z=function(e){return V.get(e)},G=function(e,t){M.set(e,t),V.set(t,e)},Y="style["+C+'][data-styled-version="5.0.1"]',F=new RegExp("^"+C+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),q=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},W=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var a=s.match(F);if(a){var u=0|parseInt(a[1],10),c=a[2];0!==u&&(G(c,u),q(e,c,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(s)}}},H=function(){return void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},$=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(C))return r}}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(C,"active"),r.setAttribute("data-styled-version","5.0.1");var s=H();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},U=function(){function e(e){var t=this.element=$(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}x(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),J=function(){function e(e){var t=this.element=$(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Z=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),X=I,K={isServer:!I,useCSSOMInjection:!R},Q=function(){function e(e,t,n){void 0===e&&(e=_),void 0===t&&(t={}),this.options=S({},K,e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&X&&(X=!1,function(e){for(var t=document.querySelectorAll(Y),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(C)&&(W(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return L(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(S({},this.options,t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new Z(o):r?new U(o):new J(o),new k(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(L(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(L(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(L(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var i=z(o);if(void 0!==i){var s=e.names.get(i),a=t.getGroup(o);if(void 0!==s&&0!==a.length){var u=C+".g"+o+'[id="'+i+'"]',c="";void 0!==s&&s.forEach((function(e){e.length>0&&(c+=e+",")})),r+=""+a+u+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),ee=/(a)(d)/gi,te=function(e){return String.fromCharCode(e+(e>25?39:97))},ne=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},re=function(e){return ne(5381,e)};re("5.0.1");var oe=/^\s*\/\/.*$/gm,ie=[":","[",".","#"];function se(e){var t,n,r,o,i=void 0===e?_:e,s=i.options,a=void 0===s?_:s,u=i.plugins,c=void 0===u?E:u,l=new d(a),h=[],f=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,i,s,a,u,c,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){h.push(e)})),p=function(e,r,i){return 0===r&&ie.includes(i[n.length])||i.match(o)?e:"."+t};function m(e,i,s,a){void 0===a&&(a="&");var u=e.replace(oe,""),c=i&&s?s+" "+i+" { "+u+" }":u;return t=a,n=i,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(s||!i?"":i,c)}return l.use([].concat(c,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,p))},f,function(e){if(-2===e){var t=h;return h=[],t}}])),m.hash=c.length?c.reduce((function(e,t){return t.name||x(15),ne(e,t.name)}),5381).toString():"",m}var ae=r.createContext(),ue=ae.Consumer,ce=r.createContext(),le=(ce.Consumer,new Q),de=se();function he(){return i(ae)||le}function fe(){return i(ce)||de}function pe(e){var t=o(e.stylisPlugins),n=t[0],i=t[1],u=he(),c=s((function(){var t=u;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),d=s((function(){return se({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return a((function(){l(n,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),r.createElement(ae.Provider,{value:c},r.createElement(ce.Provider,{value:d},"production"!==process.env.NODE_ENV?r.Children.only(e.children):e.children))}var me=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=de);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return x(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=de),this.name+e.hash},e}(),ve=/([A-Z])/,ye=/([A-Z])/g,ge=/^ms-/,Se=function(e){return"-"+e.toLowerCase()};function we(e){return ve.test(e)?e.replace(ye,Se).replace(ge,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function Ee(e,n,r,o){if(Array.isArray(e)){for(var i,s=[],a=0,u=e.length;a<u;a+=1)""!==(i=Ee(e[a],n,r,o))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(be(e))return"";if(N(e))return"."+e.styledComponentId;if(A(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var c=e(n);return"production"!==process.env.NODE_ENV&&t(c)&&console.warn(P(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ee(c,n,r,o)}var l;return e instanceof me?r?(e.inject(r,o),e.getName(o)):e:b(e)?function e(t,n){var r,o,i=[];for(var s in t)t.hasOwnProperty(s)&&!be(t[s])&&(b(t[s])?i.push.apply(i,e(t[s],s)):A(t[s])?i.push(we(s)+":",t[s],";"):i.push(we(s)+": "+(r=s,(null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in h?String(o).trim():o+"px")+";")));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString()}function _e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return A(e)||b(e)?Ee(w(E,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ee(w(e,n))}var Ae=0,Pe={},Ne=function(e){var t=Ae++;return Pe[t]=e,t},Ce=function e(t){return Array.isArray(t)?t.reduce((function(t,n){return void 0===(r=t)&&(r={}),void 0===(o=e(n))&&(o={}),S({},r,o);var r,o}),{}):"number"==typeof t?Pe[t]:t||void 0},Oe={hairlineWidth:1,absoluteFill:Ne({position:"absolute",top:0,left:0,bottom:0,right:0}),create:function(e){var t={};return Object.keys(e).forEach((function(n){t[n]=Ne(e[n])})),t},flatten:Ce,resolve:function(e){return Ce(e)}},Ie=function(e){return function(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=te(t%52)+n;return(te(t%52)+n).replace(ee,"$1-$2")}(re(e)>>>0)},Re=new Map,je=function(e,t,n){return void 0===n&&(n=_),e.theme!==n.theme&&e.theme||t||n.theme};function De(e){return"string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var Te=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},xe=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ke(e,t,n){var r=e[n];Te(t)&&Te(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var s=i[o];if(Te(s))for(var a in s)xe(a)&&ke(e,s[a],a)}return e}var Ve=r.createContext(),Be=Ve.Consumer;function Le(e){var t=i(Ve),n=s((function(){return function(e,t){if(!e)return x(14);if(A(e)){var n=e(t);return"production"===process.env.NODE_ENV||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:x(7)}return Array.isArray(e)||"object"!=typeof e?x(8):t?S({},t,e):e}(e.theme,t)}),[e.theme,t]);return e.children?r.createElement(Ve.Provider,{value:n},e.children):null}var ze={};var Ge=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=function(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(A(n)&&!N(n))return!1}return!0}(e),Q.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ee(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Q.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}(),Ye=/invalid hook call/i,Fe=new Set,qe=function(e,t){if("production"!==process.env.NODE_ENV){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{u(),Fe.has(n)||(console.warn(n),Fe.add(n))}catch(e){Ye.test(e.message)&&Fe.delete(n)}}};function We(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=_e.apply(void 0,[e].concat(n)),a="sc-global-"+Ie(JSON.stringify(s)),l=new Ge(s,a);function d(e){var t=he(),n=fe(),o=i(Ve),d=u(t.allocateGSInstance(a)).current;return"production"!==process.env.NODE_ENV&&r.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."),"production"!==process.env.NODE_ENV&&s.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),c((function(){return h(d,e,t,o,n),function(){return l.removeStyles(d,t)}}),[d,e,t,o,n]),null}function h(e,t,n,r,o){if(l.isStatic)l.renderStyles(e,j,n,o);else{var i=S({},t,{theme:je(t,r,d.defaultProps)});l.renderStyles(e,i,n,o)}}return"production"!==process.env.NODE_ENV&&qe(a),r.memo(d)}function He(e){"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=_e.apply(void 0,[e].concat(n)).join(""),i=Ie(o);return new me(i,o)}var $e,Ue,Je=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=H();return"<style "+[n&&'nonce="'+n+'"',C+'="true"','data-styled-version="5.0.1"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?x(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return x(2);var n=((t={})[C]="",t["data-styled-version"]="5.0.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=H();return o&&(n.nonce=o),[r.createElement("style",S({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Q({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?x(2):r.createElement(pe,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return x(3)},e}(),Ze=function(e){var t=r.forwardRef((function(t,n){var o=i(Ve),s=e.defaultProps,a=je(t,o,s);return"production"!==process.env.NODE_ENV&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+P(e)+'"'),r.createElement(e,S({},t,{theme:a,ref:n}))}));return g(t,e),t.displayName="WithTheme("+P(e)+")",t},Xe=function(){return i(Ve)},Ke=($e=Oe,function(){function e(e){this.rules=e}return e.prototype.generateStyleObject=function(e){var t=Ee(this.rules,e).join(""),n=Ie(t);if(!Re.has(n)){var r=[];f(t).each((function(e){switch(e.type){case"decl":return void r.push([e.prop,e.value]);case"comment":return;default:"production"!==process.env.NODE_ENV&&console.warn("Node of type "+e.type+" not supported as an inline style")}}));var o=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];if(function(e){return["background","font","padding","margin","border","border-width","border-style","border-color","border-top","border-right","border-bottom","border-left","border-radius","outline"].includes(e)}(n)){var o=p(n,r),i=Object.keys(o).map((function(e){return[e,o[e]]}));return[].concat(e,i)}return[].concat(e,[[n,r]])}),[]).reduce((function(e,t){var n,r=t[0],o=t[1];return S({},e,((n={})[v(r)]=/color/i.test(r)?m(o):o,n))}),{})}(r),i=$e.create({generated:o});Re.set(n,i.generated)}return Re.get(n)},e}()),Qe=(Ue=Ke,function e(t,n,o){var i,s=N(t),a=n.displayName,u=void 0===a?function(e){return De(e)?"styled."+e:"Styled("+P(e)+")"}(t):a,c=n.componentId,l=void 0===c?function(e,t){var n="string"!=typeof e?"sc":escape(e);ze[n]=(ze[n]||0)+1;var r=n+"-"+Ie(n+ze[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):c,d=n.attrs,h=void 0===d?E:d,f=n.displayName&&n.componentId?escape(n.displayName)+"-"+n.componentId:n.componentId||l,p=s&&t.attrs?t.attrs.concat(h).filter(Boolean):h,m=n.shouldForwardProp;s&&t.shouldForwardProp&&(m=n.shouldForwardProp?function(e,r,o){return t.shouldForwardProp(e,r,o)&&n.shouldForwardProp(e,r,o)}:t.shouldForwardProp);var v=function(e,t){return function(e,t,n){var o,i=e.attrs,s=e.inlineStyle,a=e.defaultProps,u=e.shouldForwardProp,c=e.target,l=function(e,t,n){void 0===e&&(e=_);var r=S({},t,{theme:e}),o={};return n.forEach((function(e){var t,n=e;for(t in A(n)&&(n=n(r)),n)r[t]=o[t]=n[t]})),[r,o]}(je(t,r.useContext(Ve),a)||_,t,i),d=l[0],h=l[1],f=s.generateStyleObject(d),p=n,m=h.$as||t.$as||h.as||t.as||c,v=De(m),g="string"==typeof(o=m)&&/^(v|w|o):/i.test(o),w=h!==t?S({},t,h):t,b={};for(var E in w)"$"!==E[0]&&"as"!==E&&("forwardedAs"===E?b.as=w[E]:(u?u(E,y,m):g||!v||y(E))&&(b[E]=w[E]));return b.style=Oe.flatten([f,t.style,h.style]),b.ref=p,r.createElement(m,b)}(i,e,t)};return v.displayName=u,(i=r.forwardRef(v)).attrs=p,i.inlineStyle=new Ue(s?t.inlineStyle.rules.concat(o):o),i.displayName=u,i.shouldForwardProp=m,i.styledComponentId=f,i.target=s?t.target:t,i.withComponent=function(t){var r=n.componentId,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["componentId"]),s=r&&r+"-"+escape(P(t)),a=S({},i,{attrs:p,componentId:s});return e(t,a,o)},Object.defineProperty(i,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=s?Me({},t.defaultProps,e):e}}),g(i,t,{attrs:!0,inlineStyle:!0,displayName:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),i}),et=function(e){return function e(t,r,o){if(void 0===o&&(o=_),!n(r))return x(1,String(r));var i=function(){return t(r,o,_e.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,S({},o,n))},i.attrs=function(n){return e(t,r,S({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(Qe,e)};["a","abbr","acronym","address","applet","area","b","base","basefont","bdo","big","blockquote","body","br","button","caption","center","cite","code","col","colgroup","dd","del","dfn","dir","div","dl","dt","em","fieldset","font","form","h1","h2","h3","h4","h5","h6","head","hr","html","i","iframe","img","input","ins","isindex","kbd","label","legend","li","link","map","menu","meta","noframes","noscript","object","ol","optgroup","option","p","param","pre","q","s","samp","script","select","small","span","strike","strong","style","sub","sup","table","tbody","td","textarea","tfoot","th","thead","title","tr","tt","u","ul","var"].forEach((function(e){return Object.defineProperty(et,e,{enumerable:!0,configurable:!1,get:function(){return et(e)}})})),["vml","wml","office"].forEach((function(e){Object.defineProperty(et,e,{enumerable:!0,configurable:!1,get:function(){return new Proxy({},{get:function(t,n){return n in t?t[n]:"string"==typeof n?et(e.charAt(0)+":"+n):void 0}})}})}));export default et;export{Je as ServerStyleSheet,ue as StyleSheetConsumer,ae as StyleSheetContext,pe as StyleSheetManager,Be as ThemeConsumer,Ve as ThemeContext,Le as ThemeProvider,We as createGlobalStyle,_e as css,N as isStyledComponent,He as keyframes,Xe as useTheme,O as version,Ze as withTheme};
//# sourceMappingURL=styled-email-components.browser.esm.js.map
