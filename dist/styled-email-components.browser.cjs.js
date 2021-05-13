"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var reactIs=require("react-is"),React=require("react"),React__default=_interopDefault(React),shallowequal=_interopDefault(require("shallowequal")),Stylis=_interopDefault(require("@emotion/stylis")),unitless=_interopDefault(require("@emotion/unitless")),parse=_interopDefault(require("postcss-safe-parser")),expandRule=_interopDefault(require("css-shorthand-expand")),colorShorthandHexToSixDigit=require("color-shorthand-hex-to-six-digit"),camelCase=_interopDefault(require("lodash.camelcase")),validAttr=_interopDefault(require("@emotion/is-prop-valid")),hoist=_interopDefault(require("hoist-non-react-statics"));function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var interleave=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},isPlainObject=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!reactIs.typeOf(e)},EMPTY_ARRAY=Object.freeze([]),EMPTY_OBJECT=Object.freeze({});function isFunction(e){return"function"==typeof e}function getComponentName(e){return"production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function isStatelessFunction(e){return"function"==typeof e&&!(e.prototype&&e.prototype.isReactComponent)}function isStyledComponent(e){return e&&"string"==typeof e.styledComponentId}var SC_ATTR="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",SC_ATTR_ACTIVE="active",SC_ATTR_VERSION="data-styled-version",SC_VERSION="5.0.1",SPLITTER="/*!sc*/\n",IS_BROWSER="undefined"!=typeof window&&"HTMLElement"in window,DISABLE_SPEEDY=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),STATIC_EXECUTION_CONTEXT={},errorMap={1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"},ERRORS="production"!==process.env.NODE_ENV?errorMap:{};function format(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function throwStyledComponentsError(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw"production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(format.apply(void 0,[ERRORS[e]].concat(n)).trim())}var makeGroupedTag=function(e){return new DefaultGroupedTag(e)},BASE_SIZE=512,DefaultGroupedTag=function(){function e(e){this.groupSizes=new Uint32Array(BASE_SIZE),this.length=BASE_SIZE,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&throwStyledComponentsError(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,u=t.length;a<u;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=""+this.tag.getRule(s)+SPLITTER;return t},e}(),MAX_SMI=1<<30,groupIDRegister=new Map,reverseRegister=new Map,nextFreeGroup=1,getGroupForId=function(e){if(groupIDRegister.has(e))return groupIDRegister.get(e);for(;reverseRegister.has(nextFreeGroup);)nextFreeGroup++;var t=nextFreeGroup++;return"production"!==process.env.NODE_ENV&&((0|t)<0||t>MAX_SMI)&&throwStyledComponentsError(16,""+t),groupIDRegister.set(e,t),reverseRegister.set(t,e),t},getIdForGroup=function(e){return reverseRegister.get(e)},setGroupForId=function(e,t){groupIDRegister.set(e,t),reverseRegister.set(t,e)},SELECTOR="style["+SC_ATTR+"]["+SC_ATTR_VERSION+'="'+SC_VERSION+'"]',MARKER_RE=new RegExp("^"+SC_ATTR+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),outputSheet=function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=getIdForGroup(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(void 0!==i&&0!==a.length){var u=SC_ATTR+".g"+o+'[id="'+s+'"]',l="";void 0!==i&&i.forEach((function(e){e.length>0&&(l+=e+",")})),r+=""+a+u+'{content:"'+l+'"}'+SPLITTER}}}return r},rehydrateNamesFromContent=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},rehydrateSheetFromTag=function(e,t){for(var n=t.innerHTML.split(SPLITTER),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(MARKER_RE);if(a){var u=0|parseInt(a[1],10),l=a[2];0!==u&&(setGroupForId(l,u),rehydrateNamesFromContent(e,l,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},rehydrateSheet=function(e){for(var t=document.querySelectorAll(SELECTOR),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(SC_ATTR)!==SC_ATTR_ACTIVE&&(rehydrateSheetFromTag(e,o),o.parentNode&&o.parentNode.removeChild(o))}},getNonce=function(){return void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},ELEMENT_TYPE=1,findLastStyleTag=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&r.nodeType===ELEMENT_TYPE&&r.hasAttribute(SC_ATTR))return r}},makeStyleTag=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=findLastStyleTag(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(SC_ATTR,SC_ATTR_ACTIVE),r.setAttribute(SC_ATTR_VERSION,SC_VERSION);var i=getNonce();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},getSheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throwStyledComponentsError(17)},makeTag=function(e){var t=e.isServer,n=e.useCSSOMInjection,r=e.target;return t?new VirtualTag(r):n?new CSSOMTag(r):new TextTag(r)},CSSOMTag=function(){function e(e){var t=this.element=makeStyleTag(e);t.appendChild(document.createTextNode("")),this.sheet=getSheet(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),TextTag=function(){function e(e){var t=this.element=makeStyleTag(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),VirtualTag=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),SHOULD_REHYDRATE=IS_BROWSER,defaultOptions={isServer:!IS_BROWSER,useCSSOMInjection:!DISABLE_SPEEDY},StyleSheet=function(){function e(e,t,n){void 0===e&&(e=EMPTY_OBJECT),void 0===t&&(t={}),this.options=_extends({},defaultOptions,e),this.gs=t,this.names=new Map(n),!this.options.isServer&&IS_BROWSER&&SHOULD_REHYDRATE&&(SHOULD_REHYDRATE=!1,rehydrateSheet(this))}e.registerId=function(e){return getGroupForId(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(_extends({},this.options,t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=makeGroupedTag(makeTag(this.options)))},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(getGroupForId(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(getGroupForId(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(getGroupForId(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return outputSheet(this)},e}(),AD_REPLACER_R=/(a)(d)/gi,charsLength=52,getAlphabeticChar=function(e){return String.fromCharCode(e+(e>25?39:97))};function generateAlphabeticName(e){var t,n="";for(t=Math.abs(e);t>charsLength;t=t/charsLength|0)n=getAlphabeticChar(t%charsLength)+n;return(getAlphabeticChar(t%charsLength)+n).replace(AD_REPLACER_R,"$1-$2")}var SEED=5381,phash=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hash=function(e){return phash(SEED,e)};function isStaticRules(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(isFunction(n)&&!isStyledComponent(n))return!1}return!0}var SEED$1=hash(SC_VERSION);function insertRulePlugin(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,u,l,c,h){switch(n){case 1:if(0===c&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===l)return r+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(o[0]+r),"";default:return r+(0===h?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}var COMMENT_REGEX=/^\s*\/\/.*$/gm,COMPLEX_SELECTOR_PREFIX=[":","[",".","#"];function createStylisInstance(e){var t,n,r,o,s=void 0===e?EMPTY_OBJECT:e,i=s.options,a=void 0===i?EMPTY_OBJECT:i,u=s.plugins,l=void 0===u?EMPTY_ARRAY:u,c=new Stylis(a),h=[],d=insertRulePlugin((function(e){h.push(e)})),p=function(e,r,s){return 0===r&&COMPLEX_SELECTOR_PREFIX.includes(s[n.length])||s.match(o)?e:"."+t};function f(e,s,i,a){void 0===a&&(a="&");var u=e.replace(COMMENT_REGEX,""),l=s&&i?i+" "+s+" { "+u+" }":u;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),c(i||!s?"":s,l)}return c.use([].concat(l,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,p))},d,function(e){if(-2===e){var t=h;return h=[],t}}])),f.hash=l.length?l.reduce((function(e,t){return t.name||throwStyledComponentsError(15),phash(e,t.name)}),SEED).toString():"",f}var StyleSheetContext=React__default.createContext(),StyleSheetConsumer=StyleSheetContext.Consumer,StylisContext=React__default.createContext(),StylisConsumer=StylisContext.Consumer,masterSheet=new StyleSheet,masterStylis=createStylisInstance();function useStyleSheet(){return React.useContext(StyleSheetContext)||masterSheet}function useStylis(){return React.useContext(StylisContext)||masterStylis}function StyleSheetManager(e){var t=React.useState(e.stylisPlugins),n=t[0],r=t[1],o=useStyleSheet(),s=React.useMemo((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),i=React.useMemo((function(){return createStylisInstance({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return React.useEffect((function(){shallowequal(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]),React__default.createElement(StyleSheetContext.Provider,{value:s},React__default.createElement(StylisContext.Provider,{value:i},"production"!==process.env.NODE_ENV?React__default.Children.only(e.children):e.children))}var Keyframes=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=masterStylis);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return throwStyledComponentsError(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=masterStylis),this.name+e.hash},e}(),uppercaseCheck=/([A-Z])/,uppercasePattern=/([A-Z])/g,msPattern=/^ms-/,prefixAndLowerCase=function(e){return"-"+e.toLowerCase()};function hyphenateStyleName(e){return uppercaseCheck.test(e)?e.replace(uppercasePattern,prefixAndLowerCase).replace(msPattern,"-ms-"):e}function addUnitIfNeeded(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in unitless?String(t).trim():t+"px"}var isFalsish=function(e){return null==e||!1===e||""===e},objToCssArray=function e(t,n){var r=[];for(var o in t)t.hasOwnProperty(o)&&!isFalsish(t[o])&&(isPlainObject(t[o])?r.push.apply(r,e(t[o],o)):isFunction(t[o])?r.push(hyphenateStyleName(o)+":",t[o],";"):r.push(hyphenateStyleName(o)+": "+addUnitIfNeeded(o,t[o])+";"));return n?[n+" {"].concat(r,["}"]):r};function flatten(e,t,n,r){if(Array.isArray(e)){for(var o,s=[],i=0,a=e.length;i<a;i+=1)""!==(o=flatten(e[i],t,n,r))&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(isFalsish(e))return"";if(isStyledComponent(e))return"."+e.styledComponentId;if(isFunction(e)){if(isStatelessFunction(e)&&t){var u=e(t);return"production"!==process.env.NODE_ENV&&reactIs.isElement(u)&&console.warn(getComponentName(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),flatten(u,t,n,r)}return e}return e instanceof Keyframes?n?(e.inject(n,r),e.getName(r)):e:isPlainObject(e)?objToCssArray(e):e.toString()}function css(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return isFunction(e)||isPlainObject(e)?flatten(interleave(EMPTY_ARRAY,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:flatten(interleave(e,n))}function constructWithOptions(e,t,n){if(void 0===n&&(n=EMPTY_OBJECT),!reactIs.isValidElementType(t))return throwStyledComponentsError(1,String(t));var r=function(){return e(t,n,css.apply(void 0,arguments))};return r.withConfig=function(r){return constructWithOptions(e,t,_extends({},n,r))},r.attrs=function(r){return constructWithOptions(e,t,_extends({},n,{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r}var xhtmlElements=["a","abbr","acronym","address","applet","area","b","base","basefont","bdo","big","blockquote","body","br","button","caption","center","cite","code","col","colgroup","dd","del","dfn","dir","div","dl","dt","em","fieldset","font","form","h1","h2","h3","h4","h5","h6","head","hr","html","i","iframe","img","input","ins","isindex","kbd","label","legend","li","link","map","menu","meta","noframes","noscript","object","ol","optgroup","option","p","param","pre","q","s","samp","script","select","small","span","strike","strong","style","sub","sup","table","tbody","td","textarea","tfoot","th","thead","title","tr","tt","u","ul","var"],lastId=0,registry={},guid=function(){return lastId++},registerStyle=function(e){var t=guid();return registry[t]=e,t},resolveStyle=function(e){return registry[e]},create=function(e){var t={};return Object.keys(e).forEach((function(n){t[n]=registerStyle(e[n])})),t},merge=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),_extends({},e,t)},flatten$1=function e(t){return Array.isArray(t)?t.reduce((function(t,n){return merge(t,e(n))}),{}):"number"==typeof t?resolveStyle(t):t||void 0},resolve=function(e){return flatten$1(e)},StyleSheet$1={hairlineWidth:1,absoluteFill:registerStyle({position:"absolute",top:0,left:0,bottom:0,right:0}),create:create,flatten:flatten$1,resolve:resolve},generateComponentId=function(e){return generateAlphabeticName(hash(e)>>>0)};function shouldExpandRule(e){return["background","font","padding","margin","border","border-width","border-style","border-color","border-top","border-right","border-bottom","border-left","border-radius","outline"].includes(e)}function convertCssPairsToStyle(e){return e.reduce((function(e,t){var n=t[0],r=t[1];if(shouldExpandRule(n)){var o=expandRule(n,r),s=Object.keys(o).map((function(e){return[e,o[e]]}));return[].concat(e,s)}return[].concat(e,[[n,r]])}),[]).reduce((function(e,t){var n,r=t[0],o=t[1];return _extends({},e,((n={})[camelCase(r)]=/color/i.test(r)?colorShorthandHexToSixDigit.conv(o):o,n))}),{})}var generated=new Map,createInlineStyle=function(e){return function(){function t(e){this.rules=e}return t.prototype.generateStyleObject=function(t){var n=flatten(this.rules,t).join(""),r=generateComponentId(n);if(!generated.has(r)){var o=[];parse(n).each((function(e){switch(e.type){case"decl":return void o.push([e.prop,e.value]);case"comment":return;default:"production"!==process.env.NODE_ENV&&console.warn("Node of type "+e.type+" not supported as an inline style")}}));var s=convertCssPairsToStyle(o),i=e.create({generated:s});generated.set(r,i.generated)}return generated.get(r)},t}()},determineTheme=function(e,t,n){return void 0===n&&(n=EMPTY_OBJECT),e.theme!==n.theme&&e.theme||t||n.theme};function isTag(e){return"string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}function generateDisplayName(e){return isTag(e)?"styled."+e:"Styled("+getComponentName(e)+")"}var isObject=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},isValidKey=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function mixin(e,t,n){var r=e[n];isObject(t)&&isObject(r)?mixinDeep(r,t):e[n]=t}function mixinDeep(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(isObject(i))for(var a in i)isValidKey(a)&&mixin(e,i[a],a)}return e}var ThemeContext=React__default.createContext(),ThemeConsumer=ThemeContext.Consumer;function mergeTheme(e,t){if(!e)return throwStyledComponentsError(14);if(isFunction(e)){var n=e(t);return"production"===process.env.NODE_ENV||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:throwStyledComponentsError(7)}return Array.isArray(e)||"object"!=typeof e?throwStyledComponentsError(8):t?_extends({},t,e):e}function ThemeProvider(e){var t=React.useContext(ThemeContext),n=React.useMemo((function(){return mergeTheme(e.theme,t)}),[e.theme,t]);return e.children?React__default.createElement(ThemeContext.Provider,{value:n},e.children):null}function isVmlTag(e){return"string"==typeof e&&/^(v|w|o):/i.test(e)}var identifiers={};function generateId(e,t){var n="string"!=typeof e?"sc":escape(e);identifiers[n]=(identifiers[n]||0)+1;var r=n+"-"+generateComponentId(n+identifiers[n]);return t?t+"-"+r:r}function useResolvedAttrs(e,t,n){void 0===e&&(e=EMPTY_OBJECT);var r=_extends({},t,{theme:e}),o={};return n.forEach((function(e){var t,n=e;for(t in isFunction(n)&&(n=n(r)),n)r[t]=o[t]=n[t]})),[r,o]}function useStyledComponentImpl(e,t,n){var r=e.attrs,o=e.inlineStyle,s=e.defaultProps,i=e.shouldForwardProp,a=e.target,u=useResolvedAttrs(determineTheme(t,React__default.useContext(ThemeContext),s)||EMPTY_OBJECT,t,r),l=u[0],c=u[1],h=o.generateStyleObject(l),d=n,p=c.$as||t.$as||c.as||t.as||a,f=isTag(p),m=isVmlTag(p),y=c!==t?_extends({},t,c):t,S={};for(var g in y)"$"!==g[0]&&"as"!==g&&("forwardedAs"===g?S.as=y[g]:(i?i(g,validAttr,p):m||!f||validAttr(g))&&(S[g]=y[g]));return S.style=StyleSheet$1.flatten([h,t.style,c.style]),S.ref=d,React__default.createElement(p,S)}var createStyledEmailComponent=function(e){return function t(n,r,o){var s,i=isStyledComponent(n),a=r.displayName,u=void 0===a?generateDisplayName(n):a,l=r.componentId,c=void 0===l?generateId(r.displayName,r.parentComponentId):l,h=r.attrs,d=void 0===h?EMPTY_ARRAY:h,p=r.displayName&&r.componentId?escape(r.displayName)+"-"+r.componentId:r.componentId||c,f=i&&n.attrs?n.attrs.concat(d).filter(Boolean):d,m=r.shouldForwardProp;i&&n.shouldForwardProp&&(m=r.shouldForwardProp?function(e,t,o){return n.shouldForwardProp(e,t,o)&&r.shouldForwardProp(e,t,o)}:n.shouldForwardProp);var y=function(e,t){return useStyledComponentImpl(s,e,t)};return y.displayName=u,(s=React__default.forwardRef(y)).attrs=f,s.inlineStyle=new e(i?n.inlineStyle.rules.concat(o):o),s.displayName=u,s.shouldForwardProp=m,s.styledComponentId=p,s.target=i?n.target:n,s.withComponent=function(e){var n=r.componentId,s=_objectWithoutPropertiesLoose(r,["componentId"]),i=n&&n+"-"+escape(getComponentName(e)),a=_extends({},s,{attrs:f,componentId:i});return t(e,a,o)},Object.defineProperty(s,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?mixinDeep({},n.defaultProps,e):e}}),hoist(s,n,{attrs:!0,inlineStyle:!0,displayName:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),s}},GlobalStyle=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=isStaticRules(e),StyleSheet.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(flatten(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&StyleSheet.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}(),invalidHookCallRe=/invalid hook call/i,seen=new Set,checkDynamicCreation=function(e,t){if("production"!==process.env.NODE_ENV){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{React.useRef(),seen.has(n)||(console.warn(n),seen.add(n))}catch(e){invalidHookCallRe.test(e.message)&&seen.delete(n)}}};function createGlobalStyle(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=css.apply(void 0,[e].concat(n)),s="sc-global-"+generateComponentId(JSON.stringify(o)),i=new GlobalStyle(o,s);function a(e){var t=useStyleSheet(),n=useStylis(),r=React.useContext(ThemeContext),a=React.useRef(t.allocateGSInstance(s)).current;return"production"!==process.env.NODE_ENV&&React__default.Children.count(e.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),"production"!==process.env.NODE_ENV&&o.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),React.useLayoutEffect((function(){return u(a,e,t,r,n),function(){return i.removeStyles(a,t)}}),[a,e,t,r,n]),null}function u(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,STATIC_EXECUTION_CONTEXT,n,o);else{var s=_extends({},t,{theme:determineTheme(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return"production"!==process.env.NODE_ENV&&checkDynamicCreation(s),React__default.memo(a)}function keyframes(e){"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=css.apply(void 0,[e].concat(n)).join(""),s=generateComponentId(o);return new Keyframes(s,o)}var ServerStyleSheet=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=getNonce();return"<style "+[n&&'nonce="'+n+'"',SC_ATTR+'="true"',SC_ATTR_VERSION+'="'+SC_VERSION+'"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?throwStyledComponentsError(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return throwStyledComponentsError(2);var n=((t={})[SC_ATTR]="",t[SC_ATTR_VERSION]=SC_VERSION,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=getNonce();return r&&(n.nonce=r),[React__default.createElement("style",_extends({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new StyleSheet({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?throwStyledComponentsError(2):React__default.createElement(StyleSheetManager,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return throwStyledComponentsError(3)},e}(),withTheme=function(e){var t=React__default.forwardRef((function(t,n){var r=React.useContext(ThemeContext),o=e.defaultProps,s=determineTheme(t,r,o);return"production"!==process.env.NODE_ENV&&void 0===s&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+getComponentName(e)+'"'),React__default.createElement(e,_extends({},t,{theme:s,ref:n}))}));return hoist(t,e),t.displayName="WithTheme("+getComponentName(e)+")",t},useTheme=function(){return React.useContext(ThemeContext)},InlineStyle=createInlineStyle(StyleSheet$1),StyledEmailComponent=createStyledEmailComponent(InlineStyle),styled=function(e){return constructWithOptions(StyledEmailComponent,e)};xhtmlElements.forEach((function(e){return Object.defineProperty(styled,e,{enumerable:!0,configurable:!1,get:function(){return styled(e)}})})),["vml","wml","office"].forEach((function(e){Object.defineProperty(styled,e,{enumerable:!0,configurable:!1,get:function(){return new Proxy({},{get:function(t,n){return n in t?t[n]:"string"==typeof n?styled(e.charAt(0)+":"+n):void 0}})}})})),exports.ServerStyleSheet=ServerStyleSheet,exports.StyleSheetConsumer=StyleSheetConsumer,exports.StyleSheetContext=StyleSheetContext,exports.StyleSheetManager=StyleSheetManager,exports.ThemeConsumer=ThemeConsumer,exports.ThemeContext=ThemeContext,exports.ThemeProvider=ThemeProvider,exports.createGlobalStyle=createGlobalStyle,exports.css=css,exports.default=styled,exports.isStyledComponent=isStyledComponent,exports.keyframes=keyframes,exports.useTheme=useTheme,exports.version=SC_VERSION,exports.withTheme=withTheme;
//# sourceMappingURL=styled-email-components.browser.cjs.js.map