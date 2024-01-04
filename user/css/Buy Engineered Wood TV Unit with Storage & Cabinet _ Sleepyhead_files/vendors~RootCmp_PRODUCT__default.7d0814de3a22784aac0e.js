/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~10.1.0, @magento/upward-security-headers: ~1.0.13, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.1, @magento/peregrine: ~13.0.1, @magento/pagebuilder: ~8.1.0, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.2, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"+0iv":function(e,t,n){"use strict"
var i=n("qDJ8")
function isObjectObject(e){return!0===i(e)&&"[object Object]"===Object.prototype.toString.call(e)}e.exports=function isPlainObject(e){var t,n
return!1!==isObjectObject(e)&&("function"==typeof(t=e.constructor)&&(!1!==isObjectObject(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf")))}},"1RuJ":function(e,t,n){"use strict"
var i=n("+0iv")
e.exports=function isExtendable(e){return i(e)||"function"==typeof e||Array.isArray(e)}},"2NuI":function(e,t,n){"use strict"
var i=function validateFormat(e){}
e.exports=function invariant(e,t,n,o,a,r,s,u){if(i(t),!e){var c
if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var l=[n,o,a,r,s,u],d=0;(c=new Error(t.replace(/%s/g,function(){return l[d++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},"3j5D":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i={update:function update(){"undefined"!=typeof window&&(i.hasSupport="ontouchstart"in window,i.browserSupportsApi=Boolean(window.TouchEvent))}}
i.update(),t.default=i},"6p+X":function(e,t,n){"use strict"
var i=n("lSNA"),o=n.n(i)
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}t.a=(e=>{var{description:t,small_image:n}=e,i="object"==typeof t?t.html:t,o="object"==typeof n?n.url:n
return _objectSpread(_objectSpread({},e),{},{description:i,small_image:o})})},"7++0":function(e,t,n){"use strict"
n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l})
var i,o,a=n("mrSG"),r=n("q1tI"),s=n("dDsW")
!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(i||(i={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(o||(o={}))
var u=function(e){var t=Object(s.a)(),n=e.value,i=e.children,o=Object(a.e)(e,["value","children"])
return i(t.formatNumberToParts(n,o))}
u.displayName="FormattedNumberParts"
function createFormattedDateTimePartsComponent(e){var t=function(t){var n=Object(s.a)(),i=t.value,o=t.children,r=Object(a.e)(t,["value","children"]),u="string"==typeof i?new Date(i||0):i
return o("formatDate"===e?n.formatDateToParts(u,r):n.formatTimeToParts(u,r))}
return t.displayName=o[e],t}function createFormattedComponent(e){var t=function(t){var n=Object(s.a)(),i=t.value,o=t.children,u=Object(a.e)(t,["value","children"]),c=n[e](i,u)
if("function"==typeof o)return o(c)
var l=n.textComponent||r.Fragment
return r.createElement(l,null,c)}
return t.displayName=i[e],t}u.displayName="FormattedNumberParts"
var c=createFormattedComponent("formatDate"),l=createFormattedComponent("formatTime")
createFormattedComponent("formatNumber"),createFormattedComponent("formatList"),createFormattedComponent("formatDisplayName"),createFormattedDateTimePartsComponent("formatDate"),createFormattedDateTimePartsComponent("formatTime")},"7uvM":function(e,t,n){"use strict"
e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"8Vmv":function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var i=e=>{var{variants:t,optionCodes:n,singleOptionSelection:i}=e
return null==t?void 0:t.filter(e=>{var{attributes:t,product:o}=e,a=(t||[]).reduce((e,t)=>{var{code:n,value_index:i}=t
return new Map(e).set(n,i)},new Map)
for(var[r,s]of i){var u=n.get(r),c=o[u]===s,l=a.get(u)===s
if(!c&&!l)return!1}return!0})}},"9Wdo":function(e,t,n){e.exports=n("Ukp7")()},"A/ap":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i={update:function update(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function get(){e=!0}}),n=function noop(){}
window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),i.hasSupport=e}}}
i.update(),t.default=i},BIsG:function(e,t,n){"use strict"
function getCombinations(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
return 0==t?[n]:e.flatMap((i,o)=>getCombinations(e.slice(o+1),t-1,[...n,i]))}n.d(t,"a",function(){return getCombinations})},C3OS:function(e,t,n){"use strict"
n.d(t,"a",function(){return o})
var i=n("q1tI"),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[n,o]=Object(i.useState)(t),a=Object(i.useMemo)(()=>(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter(e=>{var{disabled:t}=e
return!t}).sort((e,t)=>e.position-t.position)})(e),[e]),r=Object(i.useCallback)(()=>{o(t=>t>0?t-1:e.length-1)},[e]),s=Object(i.useCallback)(()=>{o(t=>(t+1)%e.length)},[e])
return[{activeItemIndex:n,sortedImages:a},Object(i.useMemo)(()=>({handlePrevious:r,handleNext:s,setActiveItemIndex:o}),[r,s,o])]}},Fs82:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=_interopRequireDefault(n("kAgB")),o=_interopRequireDefault(n("JEve")),a=_interopRequireDefault(n("3j5D")),r=_interopRequireDefault(n("A/ap"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var s={state:{detectHover:i.default,detectPointer:o.default,detectTouchEvents:a.default,detectPassiveEvents:r.default},update:function update(){s.state.detectHover.update(),s.state.detectPointer.update(),s.state.detectTouchEvents.update(),s.state.detectPassiveEvents.update(),s.updateOnlyOwnProperties()},updateOnlyOwnProperties:function updateOnlyOwnProperties(){"undefined"!=typeof window&&(s.passiveEvents=s.state.detectPassiveEvents.hasSupport||!1,s.hasTouch=s.state.detectTouchEvents.hasSupport||!1,s.deviceType=function determineDeviceType(e,t,n,i){return e&&(t||n)?"hybrid":e&&Object.keys(i.detectHover).filter(function(e){return"update"!==e}).every(function(e){return!1===i.detectHover[e]})&&Object.keys(i.detectPointer).filter(function(e){return"update"!==e}).every(function(e){return!1===i.detectPointer[e]})?window.navigator&&/android/.test(window.navigator.userAgent.toLowerCase())?"touchOnly":"hybrid":e?"touchOnly":"mouseOnly"}(s.hasTouch,s.state.detectHover.anyHover,s.state.detectPointer.anyFine,s.state),s.hasMouse="touchOnly"!==s.deviceType,s.primaryInput=("mouseOnly"===s.deviceType?"mouse":"touchOnly"===s.deviceType&&"touch")||s.state.detectHover.hover&&"mouse"||s.state.detectHover.none&&"touch"||"mouse",/windows/.test(window.navigator.userAgent.toLowerCase())&&/chrome/.test(window.navigator.userAgent.toLowerCase())&&parseInt(/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1],10)>=59&&s.hasTouch&&(s.deviceType="hybrid",s.hasMouse=!0,s.primaryInput="mouse"))}}
s.updateOnlyOwnProperties(),t.default=s},GUjm:function(e,t,n){"use strict"
e.exports=function equal(e,t){if(e===t)return!0
var n,i=Array.isArray(e),o=Array.isArray(t)
if(i&&o){if(e.length!=t.length)return!1
for(n=0;n<e.length;n++)if(!equal(e[n],t[n]))return!1
return!0}if(i!=o)return!1
if(e&&t&&"object"==typeof e&&"object"==typeof t){var a=Object.keys(e)
if(a.length!==Object.keys(t).length)return!1
var r=e instanceof Date,s=t instanceof Date
if(r&&s)return e.getTime()==t.getTime()
if(r!=s)return!1
var u=e instanceof RegExp,c=t instanceof RegExp
if(u&&c)return e.toString()==t.toString()
if(u!=c)return!1
for(n=0;n<a.length;n++)if(!Object.prototype.hasOwnProperty.call(t,a[n]))return!1
for(n=0;n<a.length;n++)if(!equal(e[a[n]],t[a[n]]))return!1
return!0}return!1}},JEve:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i={update:function update(){"undefined"!=typeof window&&"function"==typeof window.matchMedia&&(i.fine=window.matchMedia("(pointer: fine)").matches,i.coarse=window.matchMedia("(pointer: coarse)").matches,i.none=window.matchMedia("(pointer: none)").matches,i.anyFine=window.matchMedia("(any-pointer: fine)").matches,i.anyCoarse=window.matchMedia("(any-pointer: coarse)").matches,i.anyNone=window.matchMedia("(any-pointer: none)").matches)}}
i.update(),t.default=i},JM2y:function(e,t,n){"use strict"
n.d(t,"a",function(){return u})
var i=n("q1tI"),o=n("8UhI"),a=n("c3RJ"),r=n("9/5/"),s=n.n(r),u=e=>{var{initialValue:t,min:n,onChange:r}=e,[u,c]=Object(i.useState)(t),l=Object(o.j)("quantity"),{value:d}=Object(a.a)("quantity"),p=Object(i.useMemo)(()=>!d,[d]),m=Object(i.useMemo)(()=>!d||d<=1,[d]),f=Object(i.useMemo)(()=>s()(e=>{c(e),r(e)},350),[r]),h=Object(i.useCallback)(()=>{var e=d-1
l.setValue(e),f(e)},[f,d,l]),v=Object(i.useCallback)(()=>{var e=d+1
l.setValue(e),f(e)},[f,d,l]),g=Object(i.useCallback)(()=>{"number"==typeof d&&d!=u&&f(d)},[f,u,d]),y=Object(i.useCallback)(e=>{try{var t=parseFloat(e)
if(e&&isNaN(t))throw new Error("".concat(e," is not a number."))
return t<n?n:t}catch(e){return u}},[n,u])
return Object(i.useEffect)(()=>{l.setValue(t)},[t,l]),{isDecrementDisabled:m,isIncrementDisabled:p,handleBlur:g,handleDecrement:h,handleIncrement:v,maskInput:y}}},JVnw:function(e,t,n){"use strict"
e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},O6fr:function(e,t,n){"use strict"
var i=n("LboF"),o=n.n(i),a=n("O7RW"),r={injectType:"singletonStyleTag",insert:"head",singleton:!0}
o()(a.a,r)
t.a=a.a.locals||{}},O7RW:function(e,t,n){"use strict"
var i=n("JPst"),o=n.n(i)()(function(e){return e[1]})
o.push([e.i,".tileList-root-m4a {\n    grid-template-columns: repeat(auto-fit, minmax(3rem, max-content));\n}\n",""]),o.locals={root:"tileList-root-m4a gap-xs grid grid-flow-col"},t.a=o},RDCz:function(e,t,n){"use strict"
n.d(t,"a",function(){return o})
var i=n("q1tI"),o=e=>{var{itemIndex:t,onClickHandler:n}=e
return{handleClick:Object(i.useCallback)(()=>{n(t)},[n,t])}}},U6XL:function(e,t){e.exports=function clamp(e,t,n){return t<n?e<t?t:e>n?n:e:e<n?n:e>t?t:e}},Ukp7:function(e,t,n){"use strict"
var i=n("ohE5"),o=n("2NuI"),a=n("7uvM")
e.exports=function(){function shim(e,t,n,i,r,s){s!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function getShim(){return shim}shim.isRequired=shim
var e={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim}
return e.checkPropTypes=i,e.PropTypes=e,e}},WqNE:function(e,t,n){"use strict"
var i=n("LboF"),o=n.n(i),a=n("wyhS"),r={injectType:"singletonStyleTag",insert:"head",singleton:!0}
o()(a.a,r)
t.a=a.a.locals||{}},YXm5:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var i=e=>"ConfigurableProduct"===(null==e?void 0:e.__typename)},ZKBY:function(e,t,n){"use strict"
var i=n("q1tI"),o=n.n(i),a=n("17x9"),r=n("dDsW"),s=n("y+6n"),u=e=>{var{locale:t}=Object(r.a)(),{value:n,currencyCode:a,classes:u}=e,c=s.a.toParts.call(new Intl.NumberFormat(t,{style:"currency",currency:a}),n).map((e,t)=>{var n=u[e.type],i="".concat(t,"-").concat(e.value)
return o.a.createElement("span",{key:i,className:n},e.value)})
return o.a.createElement(i.Fragment,null,c)}
u.propTypes={classes:Object(a.shape)({currency:a.string,integer:a.string,decimal:a.string,fraction:a.string}),value:a.number.isRequired,currencyCode:a.string.isRequired},u.defaultProps={classes:{}},t.a=u},bNh7:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var i=e=>{if(e&&e.configurable_options){for(var t,{variants:n}=e,i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.reduce((e,t)=>e.flatMap(e=>t.map(t=>[e,t].flat())))}(...e.configurable_options.map(e=>e.values.map(e=>e.value_index))),o=n.map(e=>e.attributes.map(e=>e.value_index)),a=[],r=i.length,s=[],u=0;u<r;u++){for(var c of(s=i[u],o))if(t=c.length>1?Array.from(s).sort().toString()===c.sort().toString():s.toString()===c.toString())break
var l=[]
if(s.length&&s.length>1){var d=function(t){var n=e.configurable_options.find(e=>e.values.find(e=>e.value_index===t))
l.push({value_index:t,code:n.attribute_code})}
for(var p of Array.from(s))d(p)}else{var m=e.configurable_options.find(e=>e.values.find(e=>e.value_index===s))
l.push({value_index:s,code:m.attribute_code})}a.push({key:u,attributes:Array.from(l),product:{stock_status:t?"IN_STOCK":"OUT_OF_STOCK"}})}return a}return[]}},bjGX:function(e,t,n){e.exports=n("fxS6")()},cZGM:function(e,t,n){"use strict"
var i=n("1RuJ")
e.exports=function omit(e,t,n){if(!i(e))return{}
"function"==typeof t&&(n=t,t=[]),"string"==typeof t&&(t=[t])
for(var o="function"==typeof n,a=Object.keys(e),r={},s=0;s<a.length;s++){var u=a[s],c=e[u]
t&&(-1!==t.indexOf(u)||o&&!n(c,u,e))||(r[u]=c)}return r}},dzKl:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var i=e=>{return null==e?void 0:e.filter(e=>"OUT_OF_STOCK"===e.product.stock_status).map(e=>e.attributes.map(e=>e.value_index))}},e6Zd:function(e,t,n){"use strict"
n.d(t,"a",function(){return u})
var i=n("YXm5"),o=n("8Vmv"),a=n("dzKl"),r=n("bNh7"),s=n("BIsG"),u=(e,t,n,u,c)=>{var l=Object(i.a)(e),d=n&&1===n.size,p=[]
if(l){var m=e.variants,f=Object(r.a)(e)
if(1===(m=c?m:f)[0].attributes.length)return m.filter(e=>"OUT_OF_STOCK"===e.product.stock_status).map(e=>e.attributes.map(e=>e.value_index))
if(d){var h=Array.from(u.values()).filter(e=>!!e).length>1,v=Array.from(u.values()).flat(),g=Object(o.a)({optionCodes:t,singleOptionSelection:n,variants:m}),y=Object(a.a)(g)
for(var b of y){var P=b.filter(e=>v.includes(e)),S=b.filter(e=>!v.includes(e))
P.length>=t.size-1&&p.push(S)}if(h&&!v.includes(void 0)&&v.length===t.size){var T=Object(s.a)(v,v.length-1),C=[],w=function(e){var n,i=new Map([...u].filter(t=>{var[n,i]=t
return e.includes(n),e.includes(i)})),r=Object(o.a)({optionCodes:t,singleOptionSelection:i,variants:m}),s=null===(n=Object(a.a)(r))||void 0===n?void 0:n.flat().filter(e=>!v.includes(e))
C.push(s)}
for(var E of T)w(E)
return C}return p}}return[]}},eNFI:function(e,t,n){"use strict"
var i=n("JPst"),o=n.n(i),a=n("f/gR"),r=o()(function(e){return e[1]})
r.i(a.a,"",!0),r.push([e.i,".quantityStepper-root-vJR {\n    --stroke: var(--venia-global-color-gray-600);\n    grid-template-columns: 1fr 4rem 1fr;\n}\n\n.quantityStepper-wrap-lkv {\n}\n\n/* TODO @TW: cannot compose */\n.quantityStepper-label-0V0:not(:focus):not(:active) {\n    /* composes: sr-only from global; */\n    position: absolute;\n    overflow: hidden;\n    width: 1px;\n    height: 1px;\n    clip: rect(0 0 0 0);\n    -webkit-clip-path: inset(100%);\n            clip-path: inset(100%);\n    white-space: nowrap;\n}\n\n.quantityStepper-button-oVh {\n    stroke: rgb(var(--stroke));\n}\n\n.quantityStepper-button-oVh:hover {\n    --stroke: rgb(var(--venia-global-color-gray-900));\n    border-color: rgb(var(--stroke));\n}\n\n/* TODO @TW: cannot compose */\n.quantityStepper-button-oVh:disabled,\n.quantityStepper-button-oVh:disabled:hover {\n    --stroke: rgb(var(--venia-global-color-gray-400));\n    /* composes: border-subtle from global; */\n    border-color: rgb(var(--venia-global-color-gray-400));\n}\n\n.quantityStepper-button_decrement-Ftt {\n}\n\n.quantityStepper-button_increment-aXa {\n}\n\n.quantityStepper-icon--ig {\n    touch-action: manipulation;\n}\n\n.quantityStepper-input-tmo {\n}\n",""]),r.locals={root:"quantityStepper-root-vJR gap-x-2xs grid items-center justify-items-center text-center",wrap:"quantityStepper-wrap-lkv flex items-center justify-center",label:"quantityStepper-label-0V0",button:"quantityStepper-button-oVh bg-white border-2 border-solid border-button h-[2rem] inline-flex items-center justify-center rounded-full w-[2rem] disabled_cursor-not-allowed",button_decrement:"quantityStepper-button_decrement-Ftt quantityStepper-button-oVh bg-white border-2 border-solid border-button h-[2rem] inline-flex items-center justify-center rounded-full w-[2rem] disabled_cursor-not-allowed",button_increment:"quantityStepper-button_increment-aXa quantityStepper-button-oVh bg-white border-2 border-solid border-button h-[2rem] inline-flex items-center justify-center rounded-full w-[2rem] disabled_cursor-not-allowed",icon:"quantityStepper-icon--ig items-center inline-flex justify-center",input:"quantityStepper-input-tmo "+a.a.locals.input+" text-center"},t.a=r},f0iR:function(e,t,n){"use strict"
n.d(t,"a",function(){return o})
var i=n("q1tI"),o=e=>{var{typeConfig:t={}}=e
return{getAttributeTypeConfig:Object(i.useCallback)(e=>{if(t[e])return t[e]},[t])}}},fxS6:function(e,t,n){"use strict"
var i=n("JVnw")
function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,o,a,r){if(r!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
throw s.name="Invariant Violation",s}}function getShim(){return shim}shim.isRequired=shim
var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction}
return e.PropTypes=e,e}},kAgB:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i={update:function update(){"undefined"!=typeof window&&"function"==typeof window.matchMedia&&(i.hover=window.matchMedia("(hover: hover)").matches,i.none=window.matchMedia("(hover: none)").matches||window.matchMedia("(hover: on-demand)").matches,i.anyHover=window.matchMedia("(any-hover: hover)").matches,i.anyNone=window.matchMedia("(any-hover: none)").matches||window.matchMedia("(any-hover: on-demand)").matches)}}
i.update(),t.default=i},ohE5:function(e,t,n){"use strict"
function makeEmptyFunction(e){return function(){return e}}var i=function emptyFunction(){}
i.thatReturns=makeEmptyFunction,i.thatReturnsFalse=makeEmptyFunction(!1),i.thatReturnsTrue=makeEmptyFunction(!0),i.thatReturnsNull=makeEmptyFunction(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},pJFJ:function(e,t){e.exports=function requiredIf(e,t){return function(n){return(t(n)?e.isRequired:e).apply(this,arguments)}}},qDJ8:function(e,t,n){"use strict"
e.exports=function isObject(e){return null!=e&&"object"==typeof e&&!1===Array.isArray(e)}},qq7K:function(e,t,n){"use strict"
n.d(t,"a",function(){return re}),n.d(t,"b",function(){return ie})
var i=n("q1tI"),o=n.n(i),a=function(e,t){return Number(e.toFixed(t))},r=function(e,t){return"number"==typeof e?e:t},s=function(e,t,n){n&&"function"==typeof n&&n(e,t)},u={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},c=function(e){"number"==typeof e&&cancelAnimationFrame(e)},l=function(e){e.mounted&&(c(e.animation),e.animate=!1,e.animation=null,e.velocity=null)}
function handleSetupAnimation(e,t,n,i){if(e.mounted){var o=(new Date).getTime()
l(e),e.animation=function(){if(!e.mounted)return c(e.animation)
var a=(new Date).getTime()-o,r=a/n,s=(0,u[t])(r)
a>=n?(i(1),e.animation=null):e.animation&&(i(s),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function animate(e,t,n,i){var o=function isValidTargetState(e){var t=e.scale,n=e.positionX,i=e.positionY
return!(Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(i))}(t)
if(e.mounted&&o){var a=e.setTransformState,r=e.transformState,s=r.scale,u=r.positionX,c=r.positionY,l=t.scale-s,d=t.positionX-u,p=t.positionY-c
0===n?a(t.scale,t.positionX,t.positionY):handleSetupAnimation(e,i,n,function(e){a(s+l*e,u+d*e,c+p*e)})}}var d=function(e,t){var n=e.wrapperComponent,i=e.contentComponent,o=e.setup.centerZoomedOut
if(!n||!i)throw new Error("Components are not mounted")
var a=function getComponentsSizes(e,t,n){var i=e.offsetWidth,o=e.offsetHeight,a=t.offsetWidth*n,r=t.offsetHeight*n
return{wrapperWidth:i,wrapperHeight:o,newContentWidth:a,newDiffWidth:i-a,newContentHeight:r,newDiffHeight:o-r}}(n,i,t),r=a.wrapperWidth,s=a.wrapperHeight
return function(e,t,n,i,o,a,r){var s=e>t?n*(r?1:.5):0,u=i>o?a*(r?1:.5):0
return{minPositionX:e-t-s,maxPositionX:s,minPositionY:i-o-u,maxPositionY:u}}(r,a.newContentWidth,a.newDiffWidth,s,a.newContentHeight,a.newDiffHeight,Boolean(o))},p=function(e,t,n,i){return a(i?e<t?t:e>n?n:e:e,2)},m=function(e,t){var n=d(e,t)
return e.bounds=n,n}
function getMouseBoundedPosition(e,t,n,i,o,a,r){var s=n.minPositionX,u=n.minPositionY,c=n.maxPositionX,l=n.maxPositionY,d=0,m=0
return r&&(d=o,m=a),{x:p(e,s-d,c+d,i),y:p(t,u-m,l+m,i)}}function handleCalculateZoomPositions(e,t,n,i,o,a){var r=e.transformState,s=r.scale,u=r.positionX,c=r.positionY,l=i-s
return"number"!=typeof t||"number"!=typeof n?{x:u,y:c}:getMouseBoundedPosition(u-t*l,c-n*l,o,a,0,0,null)}function checkZoomBounds(e,t,n,i,o){var a=t-(o?i:0)
return!Number.isNaN(n)&&e>=n?n:!Number.isNaN(t)&&e<=a?a:e}var f=function(e,t){var n=e.setup.panning.excluded,i=e.isInitialized,o=e.wrapperComponent,a=t.target,r=null==o?void 0:o.contains(a)
return!!(i&&a&&r)&&!N(a,n)},h=function(e){var t=e.isInitialized,n=e.isPanning,i=e.setup.panning.disabled
return!(!t||!n||i)},v=function(e,t){var n=e.transformState,i=n.positionX,o=n.positionY
e.isPanning=!0
var a=t.clientX,r=t.clientY
e.startCoords={x:a-i,y:r-o}},g=function(e,t){var n=t.touches,i=e.transformState,o=i.positionX,a=i.positionY
if(e.isPanning=!0,1===n.length){var r=n[0].clientX,s=n[0].clientY
e.startCoords={x:r-o,y:s-a}}}
var y=function(e,t,n){var i=e.startCoords,o=e.transformState,a=e.setup.panning,r=a.lockAxisX,s=a.lockAxisY,u=o.positionX,c=o.positionY
if(!i)return{x:u,y:c}
var l=t-i.x,d=n-i.y
return{x:r?u:l,y:s?c:d}},b=function(e,t){var n=e.setup,i=e.transformState.scale,o=n.minScale,a=n.disablePadding
return t>0&&i>=o&&!a?t:0},P=function(e){var t=e.mounted,n=e.setup,i=n.disabled,o=n.velocityAnimation,a=e.transformState.scale
return!(o.disabled&&!(a>1)&&i&&!t)},S=function(e){var t=e.mounted,n=e.velocity,i=e.bounds,o=e.setup,a=o.disabled,r=o.velocityAnimation,s=e.transformState.scale
return!(r.disabled&&!(s>1)&&a&&!t)&&!(!n||!i)}
function getVelocityPosition(e,t,n,i,o,a,r,s,u,c){if(o){var l
if(t>r&&n>r)return(l=r+(e-r)*c)>u?u:l<r?r:l
if(t<a&&n<a)return(l=a+(e-a)*c)<s?s:l>a?a:l}return i?t:p(e,a,r,o)}function handleCalculateVelocity(e,t){if(P(e)){var n=e.lastMousePosition,i=e.velocityTime,o=e.setup,a=e.wrapperComponent,r=o.velocityAnimation.equalToMove,s=Date.now()
if(n&&i&&a){var u=function getSizeMultiplier(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(a,r),c=t.x-n.x,l=t.y-n.y,d=c/u,p=l/u,m=s-i,f=c*c+l*l,h=Math.sqrt(f)/m
e.velocity={velocityX:d,velocityY:p,total:h}}e.lastMousePosition=t,e.velocityTime=s}}function handlePanningStart(e,t){var n=e.transformState.scale
l(e),m(e,n),void 0!==window.TouchEvent&&t instanceof TouchEvent?g(e,t):v(e,t)}function handleAlignToBounds(e){var t=e.transformState.scale,n=e.setup,i=n.minScale,o=n.alignmentAnimation,a=o.disabled,r=o.sizeX,s=o.sizeY,u=o.animationTime,c=o.animationType
if(!(a||t<i||!r&&!s)){var l=function handlePanToBounds(e){var t=e.transformState,n=t.positionX,i=t.positionY,o=t.scale,a=e.setup,r=a.disabled,s=a.limitToBounds,u=a.centerZoomedOut,c=e.wrapperComponent
if(!r&&c&&e.bounds){var l=e.bounds,d=l.maxPositionX,p=l.minPositionX,m=l.maxPositionY,f=l.minPositionY,h=n>d||n<p,v=i>m||i<f,g=handleCalculateZoomPositions(e,n>d?c.offsetWidth:e.setup.minPositionX||0,i>m?c.offsetHeight:e.setup.minPositionY||0,o,e.bounds,s||u),y=g.x,b=g.y
return{scale:o,positionX:h?y:n,positionY:v?b:i}}}(e)
l&&animate(e,l,u,c)}}function handlePanning(e,t,n){var i=e.startCoords,o=e.setup.alignmentAnimation,a=o.sizeX,r=o.sizeY
if(i){var s=y(e,t,n),u=s.x,c=s.y,l=b(e,a),d=b(e,r)
handleCalculateVelocity(e,{x:u,y:c}),function handleNewPosition(e,t,n,i,o){var a=e.setup.limitToBounds,r=e.wrapperComponent,s=e.bounds,u=e.transformState,c=u.scale,l=u.positionX,d=u.positionY
if(null!==r&&null!==s&&(t!==l||n!==d)){var p=getMouseBoundedPosition(t,n,s,a,i,o,r),m=p.x,f=p.y
e.setTransformState(c,m,f)}}(e,u,c,l,d)}}function handlePanningEnd(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,n=e.velocity,i=e.wrapperComponent,o=e.contentComponent
e.isPanning=!1,e.animate=!1,e.animation=null
var a=null==i?void 0:i.getBoundingClientRect(),r=null==o?void 0:o.getBoundingClientRect(),s=(null==a?void 0:a.width)||0,c=(null==a?void 0:a.height)||0,l=(null==r?void 0:r.width)||0,d=(null==r?void 0:r.height)||0,p=s<l||c<d
!t&&n&&(null==n?void 0:n.total)>.1&&p?function handleVelocityPanning(e){var t=e.velocity,n=e.bounds,i=e.setup,o=e.wrapperComponent
if(S(e)&&t&&n&&o){var a=t.velocityX,r=t.velocityY,s=t.total,c=n.maxPositionX,l=n.minPositionX,d=n.maxPositionY,p=n.minPositionY,m=i.limitToBounds,f=i.alignmentAnimation,h=i.zoomAnimation,v=i.panning,g=v.lockAxisY,y=v.lockAxisX,P=h.animationType,T=f.sizeX,C=f.sizeY,w=f.velocityAlignmentTime,E=function getVelocityMoveTime(e,t){var n=e.setup.velocityAnimation,i=n.equalToMove,o=n.animationTime,a=n.sensitivity
return i?o*t*a:o}(e,s),I=Math.max(E,w),O=b(e,T),M=b(e,C),D=O*o.offsetWidth/100,x=M*o.offsetHeight/100,j=c+D,k=l-D,L=d+x,A=p-x,_=e.transformState,R=(new Date).getTime()
handleSetupAnimation(e,P,I,function(t){var n=e.transformState,i=n.scale,o=n.positionX,s=n.positionY,h=((new Date).getTime()-R)/w,v=1-(0,u[f.animationType])(Math.min(1,h)),b=1-t,P=o+a*b,S=s+r*b,T=getVelocityPosition(P,_.positionX,o,y,m,l,c,k,j,v),C=getVelocityPosition(S,_.positionY,s,g,m,p,d,A,L,v)
o===P&&s===S||e.setTransformState(i,T,C)})}}(e):handleAlignToBounds(e)}}function handleZoomToPoint(e,t,n,i){var o=e.setup,r=o.minScale,s=o.maxScale,u=o.limitToBounds,c=checkZoomBounds(a(t,2),r,s,0,!1),l=handleCalculateZoomPositions(e,n,i,c,m(e,c),u)
return{scale:c,positionX:l.x,positionY:l.y}}function handleAlignToScaleBounds(e,t,n){var i=e.transformState.scale,o=e.wrapperComponent,a=e.setup,r=a.minScale,s=a.limitToBounds,u=a.zoomAnimation,c=u.disabled,l=u.animationTime,d=u.animationType,p=c||i>=r
if((i>=1||s)&&handleAlignToBounds(e),!p&&o&&e.mounted){var m=handleZoomToPoint(e,r,t||o.offsetWidth/2,n||o.offsetHeight/2)
m&&animate(e,m,l,d)}}var T=function(){return(T=Object.assign||function __assign(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function __spreadArray(e,t,n){if(n||2===arguments.length)for(var i,o=0,a=t.length;o<a;o++)!i&&o in t||(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o])
return e.concat(i||Array.prototype.slice.call(t))}var C=1,w=0,E=0,I={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,wheel:{step:.2,disabled:!1,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},O=function(e){var t,n,i,o
return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:C,scale:null!==(n=e.initialScale)&&void 0!==n?n:C,positionX:null!==(i=e.initialPositionX)&&void 0!==i?i:w,positionY:null!==(o=e.initialPositionY)&&void 0!==o?o:E}},M=function(e){var t=T({},I)
return Object.keys(e).forEach(function(n){var i=void 0!==e[n]
if(void 0!==I[n]&&i){var o=Object.prototype.toString.call(I[n]),a="[object Object]"===o,r="[object Array]"===o
t[n]=a?T(T({},I[n]),e[n]):r?__spreadArray(__spreadArray([],I[n],!0),e[n],!0):e[n]}}),t},D=function(e,t,n){var i=e.transformState.scale,o=e.wrapperComponent,r=e.setup,s=r.maxScale,u=r.minScale,c=r.zoomAnimation.size
if(!o)throw new Error("Wrapper is not mounted")
var l=i*Math.exp(t*n)
return checkZoomBounds(a(l,3),u,s,c,!1)}
function handleZoomToViewCenter(e,t,n,i,o){var a=e.wrapperComponent,r=e.transformState,s=r.scale,u=r.positionX,c=r.positionY
if(a){var l=(a.offsetWidth/2-u)/s,d=(a.offsetHeight/2-c)/s,p=handleZoomToPoint(e,D(e,t,n),l,d)
p&&animate(e,p,i,o)}}function resetTransformations(e,t,n,i){var o=e.setup,a=e.wrapperComponent,r=o.limitToBounds,s=O(e.props),u=e.transformState,c=u.scale,l=u.positionX,p=u.positionY
if(a){var m=d(e,s.scale),f=getMouseBoundedPosition(s.positionX,s.positionY,m,r,0,0,a),h={scale:s.scale,positionX:f.x,positionY:f.y}
c===s.scale&&l===s.positionX&&p===s.positionY||(null==i||i(),animate(e,h,t,n))}}var x=function(e){return function(t,n,i){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===i&&(i="easeOut"),handleZoomToViewCenter(e,1,t,n,i)}},j=function(e){return function(t,n,i){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===i&&(i="easeOut"),handleZoomToViewCenter(e,-1,t,n,i)}},k=function(e){return function(t,n,i,o,a){void 0===o&&(o=300),void 0===a&&(a="easeOut")
var r=e.transformState,s=r.positionX,u=r.positionY,c=r.scale,l=e.wrapperComponent,d=e.contentComponent
if(!e.setup.disabled&&l&&d){var p={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(n)?u:n,scale:Number.isNaN(i)?c:i}
animate(e,p,o,a)}}},L=function(e){return function(t,n){void 0===t&&(t=200),void 0===n&&(n="easeOut"),resetTransformations(e,t,n)}},A=function(e){return function(t,n,i){void 0===n&&(n=200),void 0===i&&(i="easeOut")
var o=e.transformState,a=e.wrapperComponent,r=e.contentComponent
if(a&&r){var s=F(t||o.scale,a,r)
animate(e,s,n,i)}}},_=function(e){return function(t,n,i,o){void 0===i&&(i=600),void 0===o&&(o="easeOut"),l(e)
var a=e.wrapperComponent,r="string"==typeof t?document.getElementById(t):t
if(a&&r&&a.contains(r)){var s=function calculateZoomToNode(e,t,n){var i=e.wrapperComponent,o=e.contentComponent,a=e.transformState,r=e.setup,s=r.limitToBounds,u=r.minScale,c=r.maxScale
if(!i||!o)return a
var l=i.getBoundingClientRect(),p=t.getBoundingClientRect(),m=function getOffset(e,t,n,i){var o=e.getBoundingClientRect(),a=t.getBoundingClientRect(),r=n.getBoundingClientRect(),s=a.x*i.scale,u=a.y*i.scale
return{x:(o.x-r.x+s)/i.scale,y:(o.y-r.y+u)/i.scale}}(t,i,o,a),f=m.x,h=m.y,v=p.width/a.scale,g=p.height/a.scale,y=i.offsetWidth/v,b=i.offsetHeight/g,P=checkZoomBounds(n||Math.min(y,b),u,c,0,!1),S=(l.width-v*P)/2,T=(l.height-g*P)/2,C=getMouseBoundedPosition((l.left-f)*P+S,(l.top-h)*P+T,d(e,P),s,0,0,i)
return{positionX:C.x,positionY:C.y,scale:P}}(e,r,n)
animate(e,s,i,o)}}},R=function(e){return{instance:e,state:e.transformState,zoomIn:x(e),zoomOut:j(e),setTransform:k(e),resetTransform:L(e),centerView:A(e),zoomToElement:_(e)}}
function makePassiveEventOption(){try{return{get passive(){return!0,!1}}}catch(e){return!1}}var N=function(e,t){var n=e.tagName.toUpperCase()
return!!t.find(function(e){return e.toUpperCase()===n})||!!t.find(function(t){return e.classList.contains(t)})},z=function(e){e&&clearTimeout(e)},Y=function(e,t,n){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(n,")")},F=function(e,t,n){var i=n.offsetWidth*e,o=n.offsetHeight*e
return{scale:e,positionX:(t.offsetWidth-i)/2,positionY:(t.offsetHeight-o)/2}}
var B=function(e,t){var n=e.setup.wheel,i=n.disabled,o=n.wheelDisabled,a=n.touchPadDisabled,r=n.excluded,s=e.isInitialized,u=e.isPanning,c=t.target
return!(!s||u||i||!c)&&(!(o&&!t.ctrlKey)&&((!a||!t.ctrlKey)&&!N(c,r)))},W=function(e){return e?e.deltaY<0?1:-1:0}
function getMousePosition(e,t,n){var i=t.getBoundingClientRect(),o=0,a=0
if("clientX"in e)o=(e.clientX-i.left)/n,a=(e.clientY-i.top)/n
else{var r=e.touches[0]
o=(r.clientX-i.left)/n,a=(r.clientY-i.top)/n}return Number.isNaN(o)||Number.isNaN(a),{x:o,y:a}}var X=function(e,t){var n=e.setup.pinch,i=n.disabled,o=n.excluded,a=e.isInitialized,r=t.target
return!(!a||i||!r)&&!N(r,o)},H=function(e){var t=e.setup.pinch.disabled,n=e.isInitialized,i=e.pinchStartDistance
return!(!n||t||!i)},q=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},Z=function(e,t){var n=e.props,i=n.onWheelStart,o=n.onZoomStart
e.wheelStopEventTimer||(l(e),s(R(e),t,i),s(R(e),t,o))},U=function(e,t){var n=e.props,i=n.onWheel,o=n.onZoom,u=e.contentComponent,c=e.setup,l=e.transformState.scale,d=c.limitToBounds,p=c.centerZoomedOut,f=c.zoomAnimation,h=c.wheel,v=c.disablePadding,g=f.size,y=f.disabled,b=h.step
if(!u)throw new Error("Component not mounted")
t.preventDefault(),t.stopPropagation()
var P=function(e,t,n,i,o){var r=e.transformState.scale,s=e.wrapperComponent,u=e.setup,c=u.maxScale,l=u.minScale,d=u.zoomAnimation,p=u.disablePadding,m=d.size,f=d.disabled
if(!s)throw new Error("Wrapper is not mounted")
var h=r+t*(r-r*n)*n
if(o)return h
var v=!i&&!f
return checkZoomBounds(a(h,3),l,c,m,v&&!p)}(e,function getDelta(e,t){var n=W(e)
return r(t,n)}(t,null),b,!t.ctrlKey)
if(l!==P){var S=m(e,P),T=getMousePosition(t,u,l),C=d&&(y||0===g||p||v),w=handleCalculateZoomPositions(e,T.x,T.y,P,S,C),E=w.x,I=w.y
e.previousWheelEvent=t,e.setTransformState(P,E,I),s(R(e),t,i),s(R(e),t,o)}},V=function(e,t){var n=e.props,i=n.onWheelStop,o=n.onZoomStop
z(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout(function(){e.mounted&&(handleAlignToScaleBounds(e,t.x,t.y),e.wheelAnimationTimer=null)},100),function(e,t){var n=e.previousWheelEvent,i=e.transformState.scale,o=e.setup,a=o.maxScale,r=o.minScale
return!!n&&(i<a||i>r||Math.sign(n.deltaY)!==Math.sign(t.deltaY)||n.deltaY>0&&n.deltaY<t.deltaY||n.deltaY<0&&n.deltaY>t.deltaY||Math.sign(n.deltaY)!==Math.sign(t.deltaY))}(e,t)&&(z(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout(function(){e.mounted&&(e.wheelStopEventTimer=null,s(R(e),t,i),s(R(e),t,o))},160))},G=function(e,t){var n=q(t)
e.pinchStartDistance=n,e.lastDistance=n,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,l(e)},K=function(e,t){var n=e.contentComponent,i=e.pinchStartDistance,o=e.transformState.scale,r=e.setup,s=r.limitToBounds,u=r.centerZoomedOut,c=r.zoomAnimation,l=c.disabled,d=c.size
if(null!==i&&n){var p=function(e,t,n){var i=n.getBoundingClientRect(),o=e.touches,r=a(o[0].clientX-i.left,5),s=a(o[0].clientY-i.top,5)
return{x:(r+a(o[1].clientX-i.left,5))/2/t,y:(s+a(o[1].clientY-i.top,5))/2/t}}(t,o,n)
if(Number.isFinite(p.x)&&Number.isFinite(p.y)){var f=q(t),h=function(e,t){var n=e.pinchStartScale,i=e.pinchStartDistance,o=e.setup,r=o.maxScale,s=o.minScale,u=o.zoomAnimation,c=o.disablePadding,l=u.size,d=u.disabled
if(!n||null===i||!t)throw new Error("Pinch touches distance was not provided")
return t<0?e.transformState.scale:checkZoomBounds(a(t/i*n,2),s,r,l,!d&&!c)}(e,f)
if(h!==o){var v=m(e,h),g=s&&(l||0===d||u),y=handleCalculateZoomPositions(e,p.x,p.y,h,v,g),b=y.x,P=y.y
e.pinchMidpoint=p,e.lastDistance=f,e.setTransformState(h,b,P)}}}},J=function(e){var t=e.pinchMidpoint
e.velocity=null,e.lastDistance=null,e.pinchMidpoint=null,e.pinchStartScale=null,e.pinchStartDistance=null,handleAlignToScaleBounds(e,null==t?void 0:t.x,null==t?void 0:t.y)},Q=function(e,t){var n=e.props.onZoomStop,i=e.setup.doubleClick.animationTime
z(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout(function(){e.doubleClickStopEventTimer=null,s(R(e),t,n)},i)},$=function(e,t){var n=e.props,i=n.onZoomStart,o=n.onZoom,a=e.setup.doubleClick,r=a.animationTime,u=a.animationType
s(R(e),t,i),resetTransformations(e,r,u,function(){return s(R(e),t,o)}),Q(e,t)}
var ee=function(e,t){var n=e.isInitialized,i=e.setup,o=e.wrapperComponent,a=i.doubleClick,r=a.disabled,s=a.excluded,u=t.target,c=null==o?void 0:o.contains(u)
return!(!(n&&u&&c)||r)&&!N(u,s)},te=function(){return function ZoomPanPinch(e){var t=this
this.mounted=!0,this.onChangeCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){m(t,t.transformState.scale),t.setup=M(e)},this.initializeWindowEvents=function(){var e,n=makePassiveEventOption(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView
null==o||o.addEventListener("mousedown",t.onPanningStart,n),null==o||o.addEventListener("mousemove",t.onPanning,n),null==o||o.addEventListener("mouseup",t.onPanningStop,n),null==i||i.addEventListener("mouseleave",t.clearPanning,n),null==o||o.addEventListener("keyup",t.setKeyUnPressed,n),null==o||o.addEventListener("keydown",t.setKeyPressed,n)},this.cleanupWindowEvents=function(){var e,n,i=makePassiveEventOption(),o=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==o?void 0:o.defaultView
null==a||a.removeEventListener("mousedown",t.onPanningStart,i),null==a||a.removeEventListener("mousemove",t.onPanning,i),null==a||a.removeEventListener("mouseup",t.onPanningStop,i),null==o||o.removeEventListener("mouseleave",t.clearPanning,i),null==a||a.removeEventListener("keyup",t.setKeyUnPressed,i),null==a||a.removeEventListener("keydown",t.setKeyPressed,i),document.removeEventListener("mouseleave",t.clearPanning,i),l(t),null===(n=t.observer)||void 0===n||n.disconnect()},this.handleInitializeWrapperEvents=function(e){var n=makePassiveEventOption()
e.addEventListener("wheel",t.onWheelZoom,n),e.addEventListener("dblclick",t.onDoubleClick,n),e.addEventListener("touchstart",t.onTouchPanningStart,n),e.addEventListener("touchmove",t.onTouchPanning,n),e.addEventListener("touchend",t.onTouchPanningStop,n)},this.handleInitialize=function(e){var n=t.setup.centerOnInit
t.applyTransformation(),n&&(t.setCenter(),t.observer=new ResizeObserver(function(){var e
t.setCenter(),null===(e=t.observer)||void 0===e||e.disconnect()}),t.observer.observe(e))},this.onWheelZoom=function(e){t.setup.disabled||B(t,e)&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(Z(t,e),U(t,e),V(t,e))},this.onPanningStart=function(e){var n=t.setup.disabled,i=t.props.onPanningStart
n||f(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),l(t),handlePanningStart(t,e),s(R(t),e,i))},this.onPanning=function(e){var n=t.setup.disabled,i=t.props.onPanning
n||h(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),handlePanning(t,e.clientX,e.clientY),s(R(t),e,i))},this.onPanningStop=function(e){var n=t.props.onPanningStop
t.isPanning&&(handlePanningEnd(t),s(R(t),e,n))},this.onPinchStart=function(e){var n=t.setup.disabled,i=t.props,o=i.onPinchingStart,a=i.onZoomStart
n||X(t,e)&&(G(t,e),l(t),s(R(t),e,o),s(R(t),e,a))},this.onPinch=function(e){var n=t.setup.disabled,i=t.props,o=i.onPinching,a=i.onZoom
n||H(t)&&(e.preventDefault(),e.stopPropagation(),K(t,e),s(R(t),e,o),s(R(t),e,a))},this.onPinchStop=function(e){var n=t.props,i=n.onPinchingStop,o=n.onZoomStop
t.pinchStartScale&&(J(t),s(R(t),e,i),s(R(t),e,o))},this.onTouchPanningStart=function(e){var n=t.setup.disabled,i=t.props.onPanningStart
if(!n&&f(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e)
else{t.lastTouch=+new Date,l(t)
var o=e.touches,a=1===o.length,r=2===o.length
a&&(l(t),handlePanningStart(t,e),s(R(t),e,i)),r&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var n=t.setup.disabled,i=t.props.onPanning
if(t.isPanning&&1===e.touches.length){if(n)return
if(!h(t))return
e.preventDefault(),e.stopPropagation()
var o=e.touches[0]
handlePanning(t,o.clientX,o.clientY),s(R(t),e,i)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){t.setup.disabled||ee(t,e)&&function handleDoubleClick(e,t){var n=e.setup,i=e.doubleClickStopEventTimer,o=e.transformState,a=e.contentComponent,r=o.scale,u=e.props,c=u.onZoomStart,l=u.onZoom,d=n.doubleClick,p=d.disabled,m=d.mode,f=d.step,h=d.animationTime,v=d.animationType
if(!p&&!i){if("reset"===m)return $(e,t)
if(a){var g=D(e,"zoomOut"===m?-1:1,f)
if(r!==g){s(R(e),t,c)
var y=getMousePosition(t,a,r),b=handleZoomToPoint(e,g,y.x,y.y)
b&&(s(R(e),t,l),animate(e,b,h,v),Q(e,t))}}}}(t,e)},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find(function(e){return t.pressedKeys[e]}))},this.setTransformState=function(e,n,i){var o=t.props.onTransformed
if(!Number.isNaN(e)&&!Number.isNaN(n)&&!Number.isNaN(i)){e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=n,t.transformState.positionY=i
var a=R(t)
t.onChangeCallbacks.forEach(function(e){return e(a)}),s(a,{scale:e,positionX:n,positionY:i},o),t.applyTransformation()}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=F(t.transformState.scale,t.wrapperComponent,t.contentComponent)
t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,n,i){return t.props.customTransform?t.props.customTransform(e,n,i):Y(e,n,i)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,n=e.scale,i=e.positionX,o=e.positionY,a=t.handleTransformStyles(i,o,n)
t.contentComponent.style.transform=a}},this.getContext=function(){return R(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.init=function(e,n){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=n,m(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(n),t.initializeWindowEvents(),t.isInitialized=!0,s(R(t),void 0,t.props.onInit)},this.props=e,this.setup=M(this.props),this.transformState=O(this.props)}}(),ne=o.a.createContext(null),ie=o.a.forwardRef(function(e,t){var n=Object(i.useState)(0)[1],a=e.children,r=Object(i.useRef)(new te(e)).current,s=function(e,t){return"function"==typeof e?e(t):e}(e.children,R(r)),u=Object(i.useCallback)(function(){"function"==typeof a&&n(function(e){return e+1})},[a])
return Object(i.useImperativeHandle)(t,function(){return R(r)},[r]),Object(i.useEffect)(function(){r.update(e)},[r,e]),Object(i.useEffect)(function(){return r.onChange(u)},[r,e,u]),o.a.createElement(ne.Provider,{value:r},s)})
var oe="transform-component-module_wrapper__7HFJe",ae="transform-component-module_content__uCDPE"
!function styleInject(e,t){void 0===t&&(t={})
var n=t.insertAt
if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style")
o.type="text/css","top"===n&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__7HFJe {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__uCDPE {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__uCDPE img {\n  pointer-events: none;\n}\n")
var re=function(e){var t=e.children,n=e.wrapperClass,a=void 0===n?"":n,r=e.contentClass,s=void 0===r?"":r,u=e.wrapperStyle,c=e.contentStyle,l=e.wrapperProps,d=void 0===l?{}:l,p=e.contentProps,m=void 0===p?{}:p,f=Object(i.useContext)(ne).init,h=Object(i.useRef)(null),v=Object(i.useRef)(null)
return Object(i.useEffect)(function(){var e=h.current,t=v.current
null!==e&&null!==t&&f&&f(e,t)},[]),o.a.createElement("div",T({},d,{ref:h,className:"react-transform-wrapper ".concat(oe," ").concat(a),style:u}),o.a.createElement("div",T({},m,{ref:v,className:"react-transform-component ".concat(ae," ").concat(s),style:c}),t))}
o.a.forwardRef(function(e,t){var n,a=Object(i.useRef)(null),r=Object(i.useContext)(ne)
return Object(i.useEffect)(function(){return r.onChange(function(e){if(a.current){a.current.style.transform=r.handleTransformStyles(0,0,1/e.state.scale)}})},[r]),o.a.createElement("div",T({},e,{ref:(n=[a,t],function(e){n.forEach(function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)})})}))})},t9Vx:function(e,t,n){"use strict"
n.d(t,"a",function(){return o})
var i=n("xYpT"),o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,{item:o}=e,{variants:a}=o
if(!n)for(var r of(n=new Map,o.configurable_options))n.set(Number(r.attribute_id),r.attribute_code)
var s=Array.from(t,e=>{var[t,n]=e
return{option_id:t,option_value:n}}),u=Object(i.a)({variants:a,optionCodes:n,optionSelections:t})
return u?(Object.assign(e,{options:s,parentSku:o.sku,item:Object.assign({},u.product)}),e):e}},wyhS:function(e,t,n){"use strict"
var i=n("JPst"),o=n.n(i)()(function(e){return e[1]})
o.push([e.i,".option-root-9Af {\n}\n\n.option-title-8KV {\n}\n\n.option-selection-2zF {\n}\n\n.option-selectionLabel-JfM {\n}\n",""]),o.locals={root:"option-root-9Af border-b border-solid border-subtle mx-sm my-0 px-0 py-sm",title:"option-title-8KV block font-semibold leading-normal mb-sm text-colorDefault",selection:"option-selection-2zF flex leading-normal mt-xs text-colorDefault",selectionLabel:"option-selectionLabel-JfM mr-xs"},t.a=o},xPer:function(e,t,n){"use strict"
n.d(t,"a",function(){return s})
var i=n("q1tI"),o=n("C3OS"),a=n("EpH3"),r=n("kZ59"),s=e=>{var{images:t,type:n,imageWidth:s}=e,[u,c]=Object(o.a)(t),{activeItemIndex:l,sortedImages:d}=u,{handlePrevious:p,handleNext:m,setActiveItemIndex:f}=c,h=Object(i.useCallback)(e=>{f(e)},[f])
Object(i.useEffect)(()=>{f(0)},[t,f]),Object(i.useEffect)(()=>{if(r.b){var e=t.map(e=>{var{file:t}=e
return new URL(Object(a.d)(t,s,n),location.origin).href})
Object(r.d)(r.a.PREFETCH_IMAGES,{urls:e}).catch(e=>{})}},[t,s,n])
var v=d[l]||{}
return{currentImage:v,activeItemIndex:l,altText:v.label||"image-product",handleNext:m,handlePrevious:p,handleThumbnailClick:h,sortedImages:d}}},xYpT:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var i=e=>{var{variants:t,optionCodes:n,optionSelections:i}=e
return t.find(e=>{var{attributes:t,product:o}=e,a=(t||[]).reduce((e,t)=>{var{code:n,value_index:i}=t
return new Map(e).set(n,i)},new Map)
for(var[r,s]of i){var u=n.get(r),c=o[u]===s,l=a.get(u)===s
if(!c&&!l)return!1}return!0})}},xg11:function(e,t,n){"use strict"
var i=n("q1tI"),o=n.n(i),a=n("zrp3"),r=n("y1Xp"),s=n("WqNE"),u=n("17x9"),c=n("O6fr"),l=e=>{var t=Object(r.a)(c.a,e.classes),n=Object(i.useMemo)(()=>Array.from({length:3}).fill(null).map((e,t)=>o.a.createElement(a.a,{width:3,height:3,key:"tile-".concat(t)})),[])
return o.a.createElement("div",{className:t.root},n)}
l.defaultProps={classes:{}},l.propTypes={classes:Object(u.shape)({root:u.string})}
var d=l,p=e=>{var t=Object(r.a)(s.a,e.classes)
return o.a.createElement("div",{className:t.root},o.a.createElement("h3",{className:t.title},o.a.createElement("span",null,o.a.createElement(a.a,{width:"100%"}))),o.a.createElement(d,null),o.a.createElement("div",{className:t.selection},o.a.createElement(a.a,{width:"100%"})))}
t.a=(()=>o.a.createElement(i.Fragment,null,Array.from({length:2}).fill(null).map((e,t)=>o.a.createElement(p,{key:"product-option-".concat(t)}))))},"zq+Z":function(e,t,n){"use strict"
var i=n("Fs82"),o=n.n(i),a=n("MgzW"),r=n.n(a),s=n("9Wdo"),u=n.n(s),c=n("q1tI"),l=n.n(c),d=n("bjGX"),p=n.n(d),m=n("cZGM"),f=n.n(m),h=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()
var v=function(){function ElementRelativeCursorPosition(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ElementRelativeCursorPosition),this.el=e}return h(ElementRelativeCursorPosition,[{key:"getDocumentRelativeElementOffset",value:function getDocumentRelativeElementOffset(e){var t=this.getRootOfEl(e).getBoundingClientRect(),n=t.left,i=t.top,o=e.getBoundingClientRect(),a=o.left,r=o.top
return{x:Math.abs(n)+a,y:Math.abs(i)+r}}},{key:"getRootOfEl",value:function getRootOfEl(e){return e.parentElement?this.getRootOfEl(e.parentElement):e}},{key:"getComputedElementRelativeCursorPosition",value:function getComputedElementRelativeCursorPosition(e,t){this.lastEvent=e
var n=this.getDocumentRelativeCursorPosition(e),i=n.x,o=n.y,a=t.x,r=t.y
return{x:Math.round(i-a),y:Math.round(o-r)}}},{key:"getDocumentRelativeCursorPosition",value:function getDocumentRelativeCursorPosition(e){return{x:e.pageX,y:e.pageY}}},{key:"getCursorPosition",value:function getCursorPosition(e){return this.getComputedElementRelativeCursorPosition(e,this.documentRelativeElementOffset)}},{key:"documentRelativeElementOffset",get:function get(){return this.elementOffset||(this.elementOffset=this.getDocumentRelativeElementOffset(this.el)),this.elementOffset}}]),ElementRelativeCursorPosition}()
function addEventListener(e,t,n,i){return e.addEventListener(t,n,i),{removeEventListener:function removeEventListener(){e.removeEventListener(t,n,i)}}}var g=function(){},y=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()
var b=function(e){function _class(e){!function ReactCursorPosition_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_class)
var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(_class.__proto__||Object.getPrototypeOf(_class)).call(this,e))
return P.call(t),t.state={detectedEnvironment:{isMouseDetected:!1,isTouchDetected:!1},elementDimensions:{width:0,height:0},isActive:!1,isPositionOutside:!0,position:{x:0,y:0}},t.shouldGuardAgainstMouseEmulationByDevices=!1,t.eventListeners=[],t.timers=[],t.elementOffset={x:0,y:0},t.onTouchStart=t.onTouchStart.bind(t),t.onTouchMove=t.onTouchMove.bind(t),t.onTouchEnd=t.onTouchEnd.bind(t),t.onTouchCancel=t.onTouchCancel.bind(t),t.onMouseEnter=t.onMouseEnter.bind(t),t.onMouseMove=t.onMouseMove.bind(t),t.onMouseLeave=t.onMouseLeave.bind(t),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(_class,l.a.Component),y(_class,[{key:"onTouchStart",value:function onTouchStart(e){this.init(),this.onTouchDetected(),this.setShouldGuardAgainstMouseEmulationByDevices()
var t=this.core.getCursorPosition(this.getTouchEvent(e))
if(this.setPositionState(t),this.props.isActivatedOnTouch)return e.preventDefault(),void this.activate()
this.initPressEventCriteria(t),this.setPressEventTimer()}},{key:"onTouchMove",value:function onTouchMove(e){if(this.isCoreReady){var t=this.core.getCursorPosition(this.getTouchEvent(e))
this.state.isActive?(this.setPositionState(t),e.preventDefault(),this.props.shouldStopTouchMovePropagation&&e.stopPropagation()):this.setPressEventCriteria(t)}}},{key:"onTouchEnd",value:function onTouchEnd(){this.deactivate(),this.unsetShouldGuardAgainstMouseEmulationByDevices()}},{key:"onTouchCancel",value:function onTouchCancel(){this.deactivate(),this.unsetShouldGuardAgainstMouseEmulationByDevices()}},{key:"onMouseEnter",value:function onMouseEnter(e){this.shouldGuardAgainstMouseEmulationByDevices||(this.init(),this.onMouseDetected(),this.setPositionState(this.core.getCursorPosition(e)),this.clearActivationTimers(),this.schedulActivation(this.props.hoverDelayInMs))}},{key:"onMouseMove",value:function onMouseMove(e){this.isCoreReady&&this.setPositionState(this.core.getCursorPosition(e))}},{key:"onMouseLeave",value:function onMouseLeave(){this.clearActivationTimers(),this.scheduleDeactivation(this.props.hoverOffDelayInMs),this.setState({isPositionOutside:!0})}},{key:"onTouchDetected",value:function onTouchDetected(){var e={isTouchDetected:!0,isMouseDetected:!1}
this.setState({detectedEnvironment:e}),this.props.onDetectedEnvironmentChanged(e)}},{key:"onMouseDetected",value:function onMouseDetected(){var e={isTouchDetected:!1,isMouseDetected:!0}
this.setState({detectedEnvironment:e}),this.props.onDetectedEnvironmentChanged(e)}},{key:"componentDidMount",value:function componentDidMount(){this.props.isEnabled&&this.enable()}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(e){var t=e.isEnabled
this.props.isEnabled!==t&&(t?this.enable():this.disable())}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.clearTimers(),this.disable()}},{key:"enable",value:function enable(){this.addEventListeners()}},{key:"disable",value:function disable(){this.removeEventListeners()}},{key:"init",value:function init(){this.core=new v(this.el),this.setElementDimensionsState(this.getElementDimensions(this.el))}},{key:"reset",value:function reset(){var e=this.core,t=(e=void 0===e?{}:e).lastEvent
this.init(),t&&this.setPositionState(this.core.getCursorPosition(t))}},{key:"activate",value:function activate(){this.setState({isActive:!0}),this.props.onActivationChanged({isActive:!0})}},{key:"deactivate",value:function deactivate(){var e=this
this.clearTimer("pressEvent"),this.setState({isActive:!1},function(){var t=e.state,n=t.isPositionOutside,i=t.position
e.props.onPositionChanged({isPositionOutside:n,position:i}),e.props.onActivationChanged({isActive:!1})})}},{key:"setPositionState",value:function setPositionState(e){var t=this.getIsPositionOutside(e)
this.setState({isPositionOutside:t,position:e},this.onPositionChanged)}},{key:"setElementDimensionsState",value:function setElementDimensionsState(e){this.setState({elementDimensions:e})}},{key:"schedulActivation",value:function schedulActivation(e){var t=this,n=setTimeout(function(){t.activate()},e)
this.timers.push({id:n,name:"setHovering"})}},{key:"scheduleDeactivation",value:function scheduleDeactivation(e){var t=this,n=setTimeout(function(){t.deactivate()},e)
this.timers.push({id:n,name:"unsetHovering"})}},{key:"clearActivationTimers",value:function clearActivationTimers(){this.clearTimer("setHovering"),this.clearTimer("unsetHovering")}},{key:"setPressEventTimer",value:function setPressEventTimer(){var e=this,t=this.props,n=t.pressDuration,i=t.pressMoveThreshold
this.timers.push({name:"pressEvent",id:setTimeout(function(){Math.abs(e.currentElTop-e.initialElTop)<i&&e.activate()},n)})}},{key:"setPressEventCriteria",value:function setPressEventCriteria(e){this.currentElTop=e.y}},{key:"initPressEventCriteria",value:function initPressEventCriteria(e){var t=e.y
this.initialElTop=t,this.currentElTop=t}},{key:"setShouldGuardAgainstMouseEmulationByDevices",value:function setShouldGuardAgainstMouseEmulationByDevices(){this.shouldGuardAgainstMouseEmulationByDevices=!0}},{key:"unsetShouldGuardAgainstMouseEmulationByDevices",value:function unsetShouldGuardAgainstMouseEmulationByDevices(){var e=this
this.timers.push({name:"mouseEmulation",id:setTimeout(function(){e.shouldGuardAgainstMouseEmulationByDevices=!1},0)})}},{key:"clearTimers",value:function clearTimers(){for(var e=this.timers;e.length;){var t=e.pop()
clearTimeout(t.id)}}},{key:"clearTimer",value:function clearTimer(e){this.timers.forEach(function(t){t.name===e&&clearTimeout(t.id)})}},{key:"getElementDimensions",value:function getElementDimensions(e){var t=e.getBoundingClientRect()
return{width:t.width,height:t.height}}},{key:"getIsPositionOutside",value:function getIsPositionOutside(e){var t=e.x,n=e.y,i=this.state.elementDimensions,o=i.width,a=i.height
return t<0||n<0||t>o||n>a}},{key:"getTouchEvent",value:function getTouchEvent(e){return e.touches[0]}},{key:"getIsReactComponent",value:function getIsReactComponent(e){return"function"==typeof e.type}},{key:"shouldDecorateChild",value:function shouldDecorateChild(e){return!!e&&this.getIsReactComponent(e)&&this.props.shouldDecorateChildren}},{key:"decorateChild",value:function decorateChild(e,t){return Object(c.cloneElement)(e,t)}},{key:"decorateChildren",value:function decorateChildren(e,t){var n=this
return c.Children.map(e,function(e){return n.shouldDecorateChild(e)?n.decorateChild(e,t):e})}},{key:"addEventListeners",value:function addEventListeners(){this.eventListeners.push(addEventListener(this.el,"touchstart",this.onTouchStart,{passive:!1}),addEventListener(this.el,"touchmove",this.onTouchMove,{passive:!1}),addEventListener(this.el,"touchend",this.onTouchEnd),addEventListener(this.el,"touchcancel",this.onTouchCancel),addEventListener(this.el,"mouseenter",this.onMouseEnter),addEventListener(this.el,"mousemove",this.onMouseMove),addEventListener(this.el,"mouseleave",this.onMouseLeave))}},{key:"removeEventListeners",value:function removeEventListeners(){for(;this.eventListeners.length;)this.eventListeners.pop().removeEventListener()}},{key:"getPassThroughProps",value:function getPassThroughProps(){var e=Object.keys(this.constructor.propTypes)
return f()(this.props,e)}},{key:"render",value:function render(){var e=this,t=this.props,n=t.children,i=t.className,o=t.mapChildProps,a=t.style,s=r()({},o(this.state),this.getPassThroughProps())
return l.a.createElement("div",{className:i,ref:function ref(t){return e.el=t},style:r()({},a,{WebkitUserSelect:"none"})},this.decorateChildren(n,s))}},{key:"isCoreReady",get:function get(){return!!this.core}}]),_class}()
b.displayName="ReactCursorPosition",b.propTypes={children:p.a.any,className:p.a.string,hoverDelayInMs:p.a.number,hoverOffDelayInMs:p.a.number,isActivatedOnTouch:p.a.bool,isEnabled:p.a.bool,mapChildProps:p.a.func,onActivationChanged:p.a.func,onPositionChanged:p.a.func,onDetectedEnvironmentChanged:p.a.func,pressDuration:p.a.number,pressMoveThreshold:p.a.number,shouldDecorateChildren:p.a.bool,shouldStopTouchMovePropagation:p.a.bool,style:p.a.object},b.defaultProps={isActivatedOnTouch:!1,isEnabled:!0,hoverDelayInMs:0,hoverOffDelayInMs:0,mapChildProps:function mapChildProps(e){return e},onActivationChanged:g,onPositionChanged:g,onDetectedEnvironmentChanged:g,pressDuration:500,pressMoveThreshold:5,shouldDecorateChildren:!0,shouldStopTouchMovePropagation:!1}
var P=function _initialiseProps(){var e=this
this.onPositionChanged=function(){(0,e.props.onPositionChanged)(e.state)}},S=b,T=n("i8i4"),C=n.n(T),w=n("U6XL"),E=n.n(w)
function getSmallToLargeElementRatio(e,t){return{x:t.width/e.width,y:t.height/e.height}}function getMinCoordinates(e,t){return{x:-1*(t.width-e.width),y:-1*(t.height-e.height)}}function getLensModeEnlargedImageCoordinates(e){var t=e.containerDimensions,n=e.cursorOffset,i=e.largeImage,o=e.position,a=e.smallImage,r=function getCursorPositionAdjustedForLens(e,t){return{x:e.x-t.x,y:e.y-t.y}}(o,n),s=function getSmallToLargeImageRatio(e,t){return getSmallToLargeElementRatio(e,t)}(a,i)
return clampImageCoordinates({x:-1*Math.round(r.x*s.x),y:-1*Math.round(r.y*s.y)},getMinCoordinates(t,i),{x:0,y:0})}function getInPlaceEnlargedImageCoordinates(e){var t=e.containerDimensions,n=e.largeImage,i=e.position,o=getMinCoordinates(t,n),a={x:0,y:0},r=function getContainerToImageRatio(e,t){return getSmallToLargeElementRatio(e,{width:t.width-e.width,height:t.height-e.height})}(t,n)
return clampImageCoordinates({x:-1*Math.round(i.x*r.x),y:-1*Math.round(i.y*r.y)},o,a)}function clampImageCoordinates(e,t,n){return{x:E()(e.x,t.x,n.x),y:E()(e.y,t.y,n.y)}}var I=n("pJFJ"),O=n.n(I),M={alt:u.a.string,src:u.a.string.isRequired,srcSet:u.a.string,sizes:u.a.string,onLoad:u.a.func,onError:u.a.func},D=u.a.shape(r()({},M,{width:u.a.number.isRequired,height:u.a.number.isRequired})),x=u.a.shape(r()({},M,{isFluidWidth:u.a.bool,width:O()(u.a.number,function(e){return!e.isFluidWidth}),height:O()(u.a.number,function(e){return!e.isFluidWidth})})),j={mouse:"mouse",touch:"touch"},k="over",L="beside",A=u.a.oneOf([L,k]),_=u.a.shape({width:u.a.oneOfType([u.a.number,u.a.string]),height:u.a.oneOfType([u.a.number,u.a.string])}),R=u.a.shape({width:u.a.number,height:u.a.number})
function utils_noop(){}var N=u.a.shape({x:u.a.number.isRequired,y:u.a.number.isRequired}),z=n("GUjm"),Y=n.n(z)
function getContainerStyle(e,t){var n=e.isFluidWidth,i=e.width,o=e.height,a=n?{width:"auto",height:"auto",fontSize:"0px",position:"relative"}:{width:i+"px",height:o+"px",position:"relative"}
return r()({cursor:"crosshair"},t,a)}function getSmallImageStyle(e,t){var n=e.isFluidWidth,i=e.width,o=e.height,a=n?{width:"100%",height:"auto",display:"block",pointerEvents:"none"}:{width:i+"px",height:o+"px",pointerEvents:"none"}
return r()({},t,a)}var F={}
function getEnlargedImageContainerStyle(e){var t=F,n=t.params,i=void 0===n?{}:n,o=t.compositStyle
if(Y()(i,e))return o
var a=e.containerDimensions,s=e.containerStyle,u=e.fadeDurationInMs,c=e.isTransitionActive,l=function getPrimaryEnlargedImageContainerStyle(e,t){var n={overflow:"hidden"}
if(t)return n
var i={position:"absolute",top:"0px"}
return e?r()(n,i,{left:"0px"}):r()(n,i,{left:"100%",marginLeft:"10px",border:"1px solid #d6d6d6"})}(e.isInPlaceMode,e.isPortalRendered),d=function getPriorityEnlargedImageContainerStyle(e){var t=e.containerDimensions,n=e.fadeDurationInMs,i=e.isTransitionActive
return{width:t.width,height:t.height,opacity:i?1:0,transition:"opacity "+n+"ms ease-in",pointerEvents:"none"}}({containerDimensions:a,fadeDurationInMs:u,isTransitionActive:c})
return t.compositStyle=r()({},l,s,d),t.params=e,t.compositStyle}var B=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()
var W=function(e){function _class(e){!function EnlargedImage_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_class)
var t=function EnlargedImage_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(_class.__proto__||Object.getPrototypeOf(_class)).call(this,e))
return t.state={isTransitionEntering:!1,isTransitionActive:!1,isTransitionLeaving:!1,isTransitionDone:!1},t.timers=[],t}return function EnlargedImage_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(_class,l.a.Component),B(_class,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(e){this.scheduleCssTransition(e)}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.timers.forEach(function(e){clearTimeout(e)})}},{key:"scheduleCssTransition",value:function scheduleCssTransition(e){var t=this,n=this.props,i=n.fadeDurationInMs,o=n.isActive,a=n.isPositionOutside,r=o!==e.isActive,s=a!==e.isPositionOutside;(r||s)&&(e.isActive&&!e.isPositionOutside?(this.setState({isTrainsitionDone:!1,isTransitionEntering:!0}),this.timers.push(setTimeout(function(){t.setState({isTransitionEntering:!1,isTransitionActive:!0})},0))):(this.setState({isTransitionLeaving:!0,isTransitionActive:!1}),this.timers.push(setTimeout(function(){t.setState({isTransitionDone:!0,isTransitionLeaving:!1})},i))))}},{key:"getImageCoordinates",value:function getImageCoordinates(){var e=this.props,t=e.cursorOffset,n=e.largeImage,i=e.containerDimensions,o=e.position,a=e.smallImage
return e.isInPlaceMode?getInPlaceEnlargedImageCoordinates({containerDimensions:i,largeImage:n,position:o}):getLensModeEnlargedImageCoordinates({containerDimensions:i,cursorOffset:t,largeImage:n,position:o,smallImage:a})}},{key:"render",value:function render(){var e=this.props,t=e.containerClassName,n=e.imageClassName,i=e.isLazyLoaded,o=e.largeImage,a=e.largeImage,r=a.alt,s=void 0===r?"":r,u=a.onLoad,c=void 0===u?utils_noop:u,d=a.onError,p=void 0===d?utils_noop:d,m=l.a.createElement("div",{className:t,style:this.containerStyle},l.a.createElement("img",{alt:s,className:n,src:o.src,srcSet:o.srcSet,sizes:o.sizes,style:this.imageStyle,onLoad:c,onError:p}))
return i?this.isVisible?m:null:m}},{key:"isVisible",get:function get(){var e=this.state,t=e.isTransitionEntering,n=e.isTransitionActive,i=e.isTransitionLeaving
return t||n||i}},{key:"containerStyle",get:function get(){var e=this.props,t=e.containerStyle,n=e.containerDimensions,i=e.fadeDurationInMs,o=e.isPortalRendered,a=e.isInPlaceMode
return getEnlargedImageContainerStyle({containerDimensions:n,containerStyle:t,fadeDurationInMs:i,isTransitionActive:this.state.isTransitionActive,isInPlaceMode:a,isPortalRendered:o})}},{key:"imageStyle",get:function get(){var e=this.props,t=e.imageStyle,n=e.largeImage
return function getEnlargedImageStyle(e){var t=e.imageCoordinates,n=e.imageStyle,i=e.largeImage,o="translate("+t.x+"px, "+t.y+"px)",a={width:i.width,height:i.height,transform:o,WebkitTransform:o,msTransform:o,pointerEvents:"none"}
return r()({},n,a)}({imageCoordinates:this.getImageCoordinates(),imageStyle:t,largeImage:n})}}]),_class}()
W.displayName="EnlargedImage",W.defaultProps={fadeDurationInMs:0,isLazyLoaded:!0},W.propTypes={containerClassName:u.a.string,containerStyle:u.a.object,cursorOffset:N,position:N,fadeDurationInMs:u.a.number,imageClassName:u.a.string,imageStyle:u.a.object,isActive:u.a.bool,isLazyLoaded:u.a.bool,largeImage:D,containerDimensions:R,isPortalRendered:u.a.bool,isInPlaceMode:u.a.bool}
var X=W,H=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()
function RenderEnlargedImage_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var q=function(e){function RenderEnlargedImage(){var e,t,n
!function RenderEnlargedImage_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,RenderEnlargedImage)
for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a]
return t=n=RenderEnlargedImage_possibleConstructorReturn(this,(e=RenderEnlargedImage.__proto__||Object.getPrototypeOf(RenderEnlargedImage)).call.apply(e,[this].concat(o))),n.state={isMounted:!1},RenderEnlargedImage_possibleConstructorReturn(n,t)}return function RenderEnlargedImage_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(RenderEnlargedImage,c["Component"]),H(RenderEnlargedImage,[{key:"componentDidMount",value:function componentDidMount(){if(this.setState({isMounted:!0}),this.isPortalRendered){var e=this.props.portalId
this.portalElement=document.getElementById(e)}}},{key:"render",value:function render(){if(!this.isMounted)return null
var e=this.compositProps
return this.isPortalRendered?C.a.createPortal(l.a.createElement(X,e),this.portalElement):l.a.createElement(X,e)}},{key:"isPortalIdImplemented",get:function get(){return!!this.props.portalId}},{key:"isPortalRendered",get:function get(){var e=this.props,t=e.isPortalEnabledForTouch,n=e.isTouchDetected
return!!this.isPortalIdImplemented&&(!n||!!t)}},{key:"isMounted",get:function get(){return this.state.isMounted}},{key:"compositProps",get:function get(){return r()({},this.props,{isPortalRendered:this.isPortalRendered})}}]),RenderEnlargedImage}()
q.propTypes={isPortalEnabledForTouch:u.a.bool.isRequired,isTouchDetected:u.a.bool.isRequired,portalId:u.a.string}
var Z=q,U=function Lens(e){var t=e.fadeDurationInMs,n=e.isActive,i=e.isPositionOutside,o=e.style,a={position:"absolute",opacity:n&&!i?1:0,transition:"opacity "+t+"ms ease-in"},s=r()({},{width:"auto",height:"auto",top:"auto",right:"auto",bottom:"auto",left:"auto",display:"block"},o,a)
return l.a.createElement("div",{style:s})}
U.propTypes={style:u.a.object,fadeDurationInMs:u.a.number,isActive:u.a.bool,translateX:u.a.number,translateY:u.a.number,userStyle:u.a.object},U.defaultProps={isActive:!1,fadeDurationInMs:0,translateX:0,translateY:0}
var V=U,G={cursorOffset:N,fadeDurationInMs:u.a.number,isActive:u.a.bool,isPositionOutside:u.a.bool,position:N,smallImage:x,style:u.a.object},K=function LensTop(e){var t=e.cursorOffset,n=e.position,i=e.fadeDurationInMs,o=e.isActive,a=e.isPositionOutside,s=e.smallImage,u=e.style,c=2*t.y,d=s.height-c,p={height:E()(n.y-t.y,0,d)+"px",width:"100%",top:"0px"}
return l.a.createElement(V,{fadeDurationInMs:i,isActive:o,isPositionOutside:a,style:r()({},u,p)})}
K.propTypes=G
var J=K,Q=function LensLeft(e){var t=e.cursorOffset,n=e.position,i=e.fadeDurationInMs,o=e.isActive,a=e.isPositionOutside,s=e.smallImage,u=e.style,c=2*t.y,d=2*t.x,p=s.height-c,m=s.width-d,f={height:c+"px",width:E()(n.x-t.x,0,m)+"px",top:E()(n.y-t.y,0,p)+"px",left:"0px"}
return l.a.createElement(V,{fadeDurationInMs:i,isActive:o,isPositionOutside:a,style:r()({},u,f)})}
Q.propTypes=G
var $=Q,ee=function LensRight(e){var t=e.cursorOffset,n=e.position,i=e.fadeDurationInMs,o=e.isActive,a=e.isPositionOutside,s=e.smallImage,u=e.style,c=2*t.y,d=2*t.x,p=s.height-c,m=s.width-d,f={height:c+"px",width:E()(s.width-n.x-t.x,0,m)+"px",top:E()(n.y-t.y,0,p)+"px",right:"0px"}
return l.a.createElement(V,{fadeDurationInMs:i,isActive:o,isPositionOutside:a,style:r()({},u,f)})}
ee.propTypes=G
var te=ee,ne=function LensBottom(e){var t=e.cursorOffset,n=e.position,i=e.fadeDurationInMs,o=e.isActive,a=e.isPositionOutside,s=e.smallImage,u=e.style,c=2*t.y,d=s.height-n.y-t.y,p=s.height-c,m=E()(d,0,p),f=n.y+t.y,h={height:m+"px",width:"100%",top:Math.max(f,c)+"px"}
return l.a.createElement(V,{fadeDurationInMs:i,isActive:o,isPositionOutside:a,style:r()({},u,h)})}
ne.propTypes=G
var ie=ne
function NegativeSpaceLens(e){var t=e.style,n=r()({backgroundColor:"rgba(0,0,0,.4)"},t),i=r()({},e,{style:n})
return l.a.createElement("div",null,l.a.createElement(J,i),l.a.createElement($,i),l.a.createElement(te,i),l.a.createElement(ie,i))}NegativeSpaceLens.propTypes=G
var oe=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()
var ae=function(e){function PositiveSpaceLens(){return function positive_space_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PositiveSpaceLens),function positive_space_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PositiveSpaceLens.__proto__||Object.getPrototypeOf(PositiveSpaceLens)).apply(this,arguments))}return function positive_space_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PositiveSpaceLens,c["Component"]),oe(PositiveSpaceLens,[{key:"render",value:function render(){return l.a.createElement("div",{style:this.compositStyle})}},{key:"dimensions",get:function get(){var e=this.props.cursorOffset
return{width:2*e.x,height:2*e.y}}},{key:"positionOffset",get:function get(){var e=this.props,t=e.cursorOffset,n=t.x,i=t.y,o=e.position,a=o.x,r=o.y,s=e.smallImage,u=s.height,c=s.width,l=this.dimensions,d=l.width,p=r-i,m=a-n,f=u-l.height,h=c-d
return{top:E()(p,0,f),left:E()(m,0,h)}}},{key:"defaultStyle",get:function get(){return{transition:"opacity "+this.props.fadeDurationInMs+"ms ease-in",backgroundImage:"url(data:image/gif;base64,R0lGODlhZABkAPABAHOf4fj48yH5BAEAAAEALAAAAABkAGQAAAL+jI+py+0PowOB2oqvznz7Dn5iSI7SiabqWrbj68bwTLL2jUv0Lvf8X8sJhzmg0Yc8mojM5kmZjEKPzqp1MZVqs7Cr98rdisOXr7lJHquz57YwDV8j3XRb/C7v1vcovD8PwicY8VcISDGY2GDIKKf4mNAoKQZZeXg5aQk5yRml+dgZ2vOpKGraQpp4uhqYKsgKi+H6iln7N8sXG4u7p2s7ykvnyxos/DuMWtyGfKq8fAwd5nzGHN067VUtiv2lbV3GDfY9DhQu7p1pXoU+rr5ODk/j7sSePk9Ub33PlN+4jx8v4JJ/RQQa3EDwzcGFiBLi6AfN4UOGCyXegGjIoh0fisQ0rsD4y+NHjgZFqgB5y2Qfks1UPmEZ0OVLlIcKAAA7)"}}},{key:"userSpecifiedStyle",get:function get(){return this.props.style}},{key:"isVisible",get:function get(){var e=this.props,t=e.isActive,n=e.isPositionOutside
return t&&!n}},{key:"priorityStyle",get:function get(){var e=this.dimensions,t=e.width,n=e.height,i=this.positionOffset
return{position:"absolute",top:i.top+"px",left:i.left+"px",width:t+"px",height:n+"px",opacity:this.isVisible?1:0}}},{key:"compositStyle",get:function get(){return r()(this.defaultStyle,this.userSpecifiedStyle,this.priorityStyle)}}]),PositiveSpaceLens}()
ae.propTypes=G,ae.defaultProps={style:{}}
var re=ae,se=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()
var ue=function(e){function DisplayUntilActive(e){!function DisplayUntilActive_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DisplayUntilActive)
var t=function DisplayUntilActive_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DisplayUntilActive.__proto__||Object.getPrototypeOf(DisplayUntilActive)).call(this,e))
return t.hasShown=!1,t}return function DisplayUntilActive_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DisplayUntilActive,l.a.Component),se(DisplayUntilActive,[{key:"setHasShown",value:function setHasShown(){this.hasShown=!0}},{key:"render",value:function render(){var e=this.props,t=e.children,n=e.isActive,i=e.shouldHideAfterFirstActivation,o=this.hasShown,a=!(n||o&&i)
return n&&!o&&this.setHasShown(),a?t:null}}]),DisplayUntilActive}()
ue.propTypes={children:u.a.element,isActive:u.a.bool,shouldHideAfterFirstActivation:u.a.bool},ue.defaultProps={shouldHideAfterFirstActivation:!0}
var ce=ue
function DefaultHint(e){var t=e.isTouchDetected,n=e.hintTextMouse,i=e.hintTextTouch
return l.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",position:"absolute",bottom:"25px"}},l.a.createElement("div",{style:{display:"flex",alignItems:"center",padding:"5px 10px",backgroundColor:"#333",borderRadius:"10px",opacity:"0.90"}},l.a.createElement("img",{style:{width:"25px",height:"25px"},src:"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MC4yIDQ5MC4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuMiA0OTAuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQxOC41LDQxOC41Yzk1LjYtOTUuNiw5NS42LTI1MS4yLDAtMzQ2LjhzLTI1MS4yLTk1LjYtMzQ2LjgsMHMtOTUuNiwyNTEuMiwwLDM0Ni44UzMyMi45LDUxNC4xLDQxOC41LDQxOC41eiBNODksODkgICAgYzg2LjEtODYuMSwyMjYuMS04Ni4xLDMxMi4yLDBzODYuMSwyMjYuMSwwLDMxMi4ycy0yMjYuMSw4Ni4xLTMxMi4yLDBTMywxNzUuMSw4OSw4OXoiIGZpbGw9IiNGRkZGRkYiLz4KCQk8cGF0aCBkPSJNMjQ1LjEsMzM2LjljMy40LDAsNi40LTEuNCw4LjctMy42YzIuMi0yLjIsMy42LTUuMywzLjYtOC43di02Ny4zaDY3LjNjMy40LDAsNi40LTEuNCw4LjctMy42YzIuMi0yLjIsMy42LTUuMywzLjYtOC43ICAgIGMwLTYuOC01LjUtMTIuMy0xMi4yLTEyLjJoLTY3LjN2LTY3LjNjMC02LjgtNS41LTEyLjMtMTIuMi0xMi4yYy02LjgsMC0xMi4zLDUuNS0xMi4yLDEyLjJ2NjcuM2gtNjcuM2MtNi44LDAtMTIuMyw1LjUtMTIuMiwxMi4yICAgIGMwLDYuOCw1LjUsMTIuMywxMi4yLDEyLjJoNjcuM3Y2Ny4zQzIzMi44LDMzMS40LDIzOC4zLDMzNi45LDI0NS4xLDMzNi45eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=",alt:""}),l.a.createElement("span",{style:{padding:"2px 0 0 5px",fontFamily:"Arial, sans-serif",fontSize:"14px",color:"white"}},t?i:n)))}DefaultHint.displayName="DefaultHint",DefaultHint.propTypes={isTouchDetected:u.a.bool,hintTextMouse:u.a.string,hintTextTouch:u.a.string}
var le=DefaultHint
function getLensCursorOffsetDimension(e,t){return Math.round(e*t/2)}function getEnlargedImageContainerDimension(e){var t=e.containerDimension,n=e.smallImageDimension
return e.isInPlaceMode?n:function isPercentageFormat(e){return"string"==typeof e&&/^\d+%$/.test(e)}(t)?n*function convertPercentageToDecimal(e){return parseInt(e)/100}(t):t}var de=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()
var pe=function(e){function ReactImageMagnify(e){!function ReactImageMagnify_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ReactImageMagnify)
var t=function ReactImageMagnify_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ReactImageMagnify.__proto__||Object.getPrototypeOf(ReactImageMagnify)).call(this,e)),n=o.a.primaryInput,i=j.mouse,a=j.touch
return t.state={smallImageWidth:0,smallImageHeight:0,detectedInputType:{isMouseDeteced:n===i,isTouchDetected:n===a}},t.onSmallImageLoad=t.onSmallImageLoad.bind(t),t.setSmallImageDimensionState=t.setSmallImageDimensionState.bind(t),t.onDetectedInputTypeChanged=t.onDetectedInputTypeChanged.bind(t),t}return function ReactImageMagnify_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ReactImageMagnify,l.a.Component),de(ReactImageMagnify,[{key:"componentDidMount",value:function componentDidMount(){this.props.smallImage.isFluidWidth&&(this.setSmallImageDimensionState(),window.addEventListener("resize",this.setSmallImageDimensionState))}},{key:"componentWillUnmount",value:function componentWillUnmount(){window.removeEventListener("resize",this.setSmallImageDimensionState)}},{key:"onSmallImageLoad",value:function onSmallImageLoad(e){var t=this.props.smallImage,n=t.onLoad,i=void 0===n?utils_noop:n,o=t.isFluidWidth
i(e),o&&this.setSmallImageDimensionState()}},{key:"onDetectedInputTypeChanged",value:function onDetectedInputTypeChanged(e){this.setState({detectedInputType:e})}},{key:"setSmallImageDimensionState",value:function setSmallImageDimensionState(){var e=this.smallImageEl,t=e.offsetWidth,n=e.offsetHeight
this.setState({smallImageWidth:t,smallImageHeight:n})}},{key:"render",value:function render(){var e=this,t=this.props,n=t.className,i=t.style,o=t.hoverDelayInMs,a=t.hoverOffDelayInMs,r=t.isActivatedOnTouch,s=t.pressDuration,u=t.pressMoveThreshold,c=t.smallImage.onError,d=void 0===c?utils_noop:c,p=t.imageClassName,m=t.imageStyle,f=t.lensStyle,h=t.largeImage,v=t.enlargedImageContainerClassName,g=t.enlargedImageContainerStyle,y=t.enlargedImageClassName,b=t.enlargedImageStyle,P=t.enlargedImagePortalId,T=t.isEnlargedImagePortalEnabledForTouch,C=t.fadeDurationInMs,w=t.hintComponent,E=t.isHintEnabled,I=t.hintTextMouse,O=t.hintTextTouch,M=t.shouldHideHintAfterFirstActivation,D=this.smallImage,x=this.state.detectedInputType.isTouchDetected,j=function getLensCursorOffset(e,t,n){var i=function getLargeToSmallImageRatio(e,t){return{x:e.width/t.width,y:e.height/t.height}}(e,t)
return{x:getLensCursorOffsetDimension(n.width,i.x),y:getLensCursorOffsetDimension(n.height,i.y)}}(D,h,this.enlargedImageContainerDimensions),k=this.lensComponent
return l.a.createElement(S,{className:n,hoverDelayInMs:o,hoverOffDelayInMs:a,isActivatedOnTouch:r,onDetectedInputTypeChanged:this.onDetectedInputTypeChanged,pressDuration:s,pressMoveThreshold:u,shouldStopTouchMovePropagation:!0,style:getContainerStyle(D,i)},l.a.createElement("img",{src:D.src,srcSet:D.srcSet,sizes:D.sizes,alt:D.alt,className:p,style:getSmallImageStyle(D,m),ref:function ref(t){return e.smallImageEl=t},onLoad:this.onSmallImageLoad,onError:d}),E&&l.a.createElement(ce,{shouldHideAfterFirstActivation:M},l.a.createElement(w,{isTouchDetected:x,hintTextMouse:I,hintTextTouch:O})),this.shouldShowLens&&l.a.createElement(k,{cursorOffset:j,fadeDurationInMs:C,smallImage:D,style:f}),l.a.createElement(Z,{containerClassName:v,containerDimensions:this.enlargedImageContainerDimensions,containerStyle:g,cursorOffset:j,fadeDurationInMs:C,imageClassName:y,imageStyle:b,largeImage:h,smallImage:D,portalId:P,isPortalEnabledForTouch:T,isTouchDetected:this.isTouchDetected,isInPlaceMode:this.isInPlaceMode}))}},{key:"smallImage",get:function get(){var e=this.props,t=e.smallImage
if(!e.smallImage.isFluidWidth)return t
var n=this.state,i=n.smallImageWidth,o=n.smallImageHeight
return r()({},t,{width:i,height:o})}},{key:"enlargedImagePlacement",get:function get(){var e=this.props.enlargedImagePosition,t=this.state.detectedInputType.isTouchDetected
return e||(t?k:L)}},{key:"isInPlaceMode",get:function get(){var e=k
return this.enlargedImagePlacement===e}},{key:"enlargedImageContainerDimensions",get:function get(){var e=this.props.enlargedImageContainerDimensions,t=e.width,n=e.height,i=this.smallImage,o=i.width,a=i.height,r=this.isInPlaceMode
return{width:getEnlargedImageContainerDimension({containerDimension:t,smallImageDimension:o,isInPlaceMode:r}),height:getEnlargedImageContainerDimension({containerDimension:n,smallImageDimension:a,isInPlaceMode:r})}}},{key:"isTouchDetected",get:function get(){return this.state.detectedInputType.isTouchDetected}},{key:"shouldShowLens",get:function get(){return!this.isInPlaceMode&&!this.isTouchDetected}},{key:"lensComponent",get:function get(){var e=this.props,t=e.shouldUsePositiveSpaceLens,n=e.lensComponent
return n||(t?re:NegativeSpaceLens)}}]),ReactImageMagnify}()
pe.propTypes={className:u.a.string,style:u.a.object,hoverDelayInMs:u.a.number,hoverOffDelayInMs:u.a.number,fadeDurationInMs:u.a.number,pressDuration:u.a.number,pressMoveThreshold:u.a.number,isActivatedOnTouch:u.a.bool,imageClassName:u.a.string,imageStyle:u.a.object,lensStyle:u.a.object,lensComponent:u.a.func,shouldUsePositiveSpaceLens:u.a.bool,smallImage:x,largeImage:D,enlargedImageContainerClassName:u.a.string,enlargedImageContainerStyle:u.a.object,enlargedImageClassName:u.a.string,enlargedImageStyle:u.a.object,enlargedImageContainerDimensions:_,enlargedImagePosition:A,enlargedImagePortalId:u.a.string,isEnlargedImagePortalEnabledForTouch:u.a.bool,hintComponent:u.a.func,hintTextMouse:u.a.string,hintTextTouch:u.a.string,isHintEnabled:u.a.bool,shouldHideHintAfterFirstActivation:u.a.bool},pe.defaultProps={enlargedImageContainerDimensions:{width:"100%",height:"100%"},isEnlargedImagePortalEnabledForTouch:!1,fadeDurationInMs:300,hintComponent:le,shouldHideHintAfterFirstActivation:!0,isHintEnabled:!1,hintTextMouse:"Hover to Zoom",hintTextTouch:"Long-Touch to Zoom",hoverDelayInMs:250,hoverOffDelayInMs:150,shouldUsePositiveSpaceLens:!1}
t.a=pe}}])
