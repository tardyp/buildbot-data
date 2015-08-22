/*
 AngularJS v1.4.4
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,W,t){'use strict';function L(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.4/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Da(b){if(null==b||Ya(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===pa&&a?!0:I(b)||G(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function m(b,a,c){var d,e;if(b)if(C(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(G(b)||Da(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==m)b.forEach(a,c,b);else if(lc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
a.call(c,b[d],d,b);else for(d in b)Na.call(b,d)&&a.call(c,b[d],d,b);return b}function mc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function nc(b){return function(a,c){b(c,a)}}function Ud(){return++mb}function oc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Mb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(D(g)||C(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var n=h[l],q=g[n];c&&D(q)?ca(q)?b[n]=new Date(q.valueOf()):Oa(q)?
b[n]=new RegExp(q):(D(b[n])||(b[n]=G(q)?[]:{}),Mb(b[n],[q],!0)):b[n]=q}}oc(b,d);return b}function Q(b){return Mb(b,xa.call(arguments,1),!1)}function Vd(b){return Mb(b,xa.call(arguments,1),!0)}function Y(b){return parseInt(b,10)}function Nb(b,a){return Q(Object.create(b),a)}function v(){}function Za(b){return b}function qa(b){return function(){return b}}function pc(b){return C(b.toString)&&b.toString!==Object.prototype.toString}function y(b){return"undefined"===typeof b}function x(b){return"undefined"!==
typeof b}function D(b){return null!==b&&"object"===typeof b}function lc(b){return null!==b&&"object"===typeof b&&!qc(b)}function I(b){return"string"===typeof b}function X(b){return"number"===typeof b}function ca(b){return"[object Date]"===sa.call(b)}function C(b){return"function"===typeof b}function Oa(b){return"[object RegExp]"===sa.call(b)}function Ya(b){return b&&b.window===b}function $a(b){return b&&b.$evalAsync&&b.$watch}function ab(b){return"boolean"===typeof b}function rc(b){return!(!b||!(b.nodeName||
b.prop&&b.attr&&b.find))}function Wd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ta(b){return M(b.nodeName||b[0]&&b[0].nodeName)}function bb(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function fa(b,a,c,d){if(Ya(b)||$a(b))throw Ea("cpws");if(sc.test(sa.call(a)))throw Ea("cpta");if(a){if(b===a)throw Ea("cpi");c=c||[];d=d||[];D(b)&&(c.push(b),d.push(a));var e;if(G(b))for(e=a.length=0;e<b.length;e++)a.push(fa(b[e],null,c,d));else{var f=a.$$hashKey;G(a)?
a.length=0:m(a,function(b,c){delete a[c]});if(lc(b))for(e in b)a[e]=fa(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&(a[e]=fa(b[e],null,c,d));else for(e in b)Na.call(b,e)&&(a[e]=fa(b[e],null,c,d));oc(a,f)}}else if(a=b,D(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(G(b))return fa(b,[],c,d);if(sc.test(sa.call(b)))a=new b.constructor(b);else if(ca(b))a=new Date(b.getTime());else if(Oa(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=
b.lastIndex;else return e=Object.create(qc(b)),fa(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ia(b,a){if(G(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(D(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(G(b)){if(!G(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(ca(b))return ca(a)?
ka(b.getTime(),a.getTime()):!1;if(Oa(b))return Oa(a)?b.toString()==a.toString():!1;if($a(b)||$a(a)||Ya(b)||Ya(a)||G(a)||ca(a)||Oa(a))return!1;c=ga();for(d in b)if("$"!==d.charAt(0)&&!C(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c||"$"===d.charAt(0)||a[d]===t||C(a[d])))return!1;return!0}return!1}function cb(b,a,c){return b.concat(xa.call(a,c))}function tc(b,a){var c=2<arguments.length?xa.call(arguments,2):[];return!C(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?
a.apply(b,cb(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Xd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ya(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":$a(a)&&(c="$SCOPE");return c}function db(b,a){if("undefined"===typeof b)return t;X(a)||(a=a?2:null);return JSON.stringify(b,Xd,a)}function uc(b){return I(b)?JSON.parse(b):b}function vc(b,a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Ob(b,
a,c){c=c?-1:1;var d=vc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ua(b){b=z(b).clone();try{b.empty()}catch(a){}var c=z("<div>").append(b).html();try{return b[0].nodeType===Pa?M(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(d){return M(c)}}function wc(b){try{return decodeURIComponent(b)}catch(a){}}function xc(b){var a={};m((b||"").split("&"),function(b){var d,e,f;b&&(e=
b=b.replace(/\+/g,"%20"),d=b.indexOf("="),-1!==d&&(e=b.substring(0,d),f=b.substring(d+1)),e=wc(e),x(e)&&(f=x(f)?wc(f):!0,Na.call(a,e)?G(a[e])?a[e].push(f):a[e]=[a[e],f]:a[e]=f))});return a}function Pb(b){var a=[];m(b,function(b,d){G(b)?m(b,function(b){a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))}):a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))});return a.length?a.join("&"):""}function nb(b){return ma(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ma(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Yd(b,a){var c,d,e=Qa.length;for(d=0;d<e;++d)if(c=Qa[d]+a,I(c=b.getAttribute(c)))return c;return null}function Zd(b,a){var c,d,e={};m(Qa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});m(Qa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Yd(c,"strict-di"),
a(c,d?[d]:[],e))}function yc(b,a,c){D(c)||(c={});c=Q({strictDi:!1},c);var d=function(){b=z(b);if(b.injector()){var d=b[0]===W?"document":ua(b);throw Ea("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=eb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;O&&e.test(O.name)&&(c.debugInfoEnabled=!0,O.name=O.name.replace(e,""));if(O&&!f.test(O.name))return d();O.name=O.name.replace(f,"");aa.resumeBootstrap=function(b){m(b,function(b){a.push(b)});return d()};C(aa.resumeDeferredBootstrap)&&aa.resumeDeferredBootstrap()}function $d(){O.name="NG_ENABLE_DEBUG_INFO!"+O.name;O.location.reload()}function ae(b){b=aa.element(b).injector();if(!b)throw Ea("test");return b.get("$$testability")}
function zc(b,a){a=a||"_";return b.replace(be,function(b,d){return(d?a:"")+b.toLowerCase()})}function ce(){var b;if(!Ac){var a=ob();la=O.jQuery;x(a)&&(la=null===a?t:O[a]);la&&la.fn.on?(z=la,Q(la.fn,{scope:Ra.scope,isolateScope:Ra.isolateScope,controller:Ra.controller,injector:Ra.injector,inheritedData:Ra.inheritedData}),b=la.cleanData,la.cleanData=function(a){var d;if(Qb)Qb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=la._data(f,"events"))&&d.$destroy&&la(f).triggerHandler("$destroy");b(a)}):z=R;aa.element=
z;Ac=!0}}function pb(b,a,c){if(!b)throw Ea("areq",a||"?",c||"required");return b}function Sa(b,a,c){c&&G(b)&&(b=b[b.length-1]);pb(C(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ta(b,a){if("hasOwnProperty"===b)throw Ea("badname",a);}function Bc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&C(b)?tc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;
if(!a)break;c.push(a)}while(a!==b);return z(c)}function ga(){return Object.create(null)}function de(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=L("$injector"),d=L("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||L;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return B}}function b(a,c){return function(b,
e){e&&C(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return B}}if(!g)throw c("nomod",f);var d=[],e=[],r=[],u=a("$injector","invoke","push",e),B={_invokeQueue:d,_configBlocks:e,_runBlocks:r,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),config:u,run:function(a){r.push(a);return this}};h&&u(h);return B})}})}function ee(b){Q(b,{bootstrap:yc,copy:fa,extend:Q,merge:Vd,equals:ka,element:z,forEach:m,injector:eb,noop:v,bind:tc,toJson:db,fromJson:uc,identity:Za,isUndefined:y,isDefined:x,isString:I,isFunction:C,isObject:D,isNumber:X,isElement:rc,isArray:G,version:fe,isDate:ca,lowercase:M,uppercase:rb,callbacks:{counter:0},getTestability:ae,$$minErr:L,$$csp:Fa,reloadWithDebugInfo:$d});
Rb=de(O);Rb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",Cc).directive({a:he,input:Dc,textarea:Dc,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,
ngList:Le,ngChange:Me,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(sb).directive(Ic);a.provider({$anchorScroll:Qe,$animate:Re,$animateCss:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,$filter:Jc,$$forceReflow:$e,$interpolate:af,$interval:bf,$http:cf,$httpParamSerializer:df,$httpParamSerializerJQLike:ef,
$httpBackend:ff,$location:gf,$log:hf,$parse:jf,$rootScope:kf,$q:lf,$$q:mf,$sce:nf,$sceDelegate:of,$sniffer:pf,$templateCache:qf,$templateRequest:rf,$$testability:sf,$timeout:tf,$window:uf,$$rAF:vf,$$jqLite:wf,$$HashMap:xf,$$cookieReader:yf})}])}function fb(b){return b.replace(zf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Af,"Moz$1")}function Kc(b){b=b.nodeType;return b===pa||!b||9===b}function Lc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));
d=(Bf.exec(b)||["",""])[1].toLowerCase();d=na[d]||na._default;c.innerHTML=d[1]+b.replace(Cf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=cb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";m(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;I(b)&&(b=T(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new R(b)}if(a){a=W;var c;b=(c=Df.exec(b))?[a.createElement(c[1])]:
(c=Lc(b,a))?c.childNodes:[]}Mc(this,b)}function Ub(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Nc(b,a,c,d){if(x(d))throw Tb("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)m(a.split(" "),function(a){if(x(c)){var d=e[a];bb(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function ub(b,
a){var c=b.ng339,d=c&&gb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Nc(b)),delete gb[c],b.ng339=t))}function vb(b,a){var c=b.ng339,c=c&&gb[c];a&&!c&&(b.ng339=c=++Ef,c=gb[c]={events:{},data:{},handle:t});return c}function Vb(b,a,c){if(Kc(b)){var d=x(c),e=!d&&a&&!D(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];Q(b,a)}}}function wb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+
a+" "):!1}function xb(b,a){a&&b.setAttribute&&m(a.split(" "),function(a){b.setAttribute("class",T((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function yb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");m(a.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",T(c))}}function Mc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==
a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Oc(b,a){return zb(b,"$"+(a||"ngController")+"Controller")}function zb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=G(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=z.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Pc(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Wb(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function Ff(b,a){a=a||O;if("complete"===a.document.readyState)a.setTimeout(b);
else z(a).on("load",b)}function Qc(b,a){var c=Ab[a.toLowerCase()];return c&&Rc[ta(b)]&&c}function Gf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Sc[a]}function Hf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=
function(){return!0===c.immediatePropagationStopped};1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function wf(){this.$get=function(){return Q(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return wb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return yb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)}})}}function Ga(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==
c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ud)():c+":"+b}function Ua(b,a){if(a){var c=0;this.nextUid=function(){return++c}}m(b,this.put,this)}function If(b){return(b=b.toString().replace(Tc,"").match(Uc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(b,a){function c(a){return function(b,c){if(D(b))m(b,nc(a));else return a(b,c)}}function d(a,b){Ta(a,"service");if(C(b)||G(b))b=r.instantiate(b);if(!b.$get)throw Ha("pget",a);return q[a+"Provider"]=b}function e(a,b){return function(){var c=
B.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){pb(y(a)||G(a),"modulesToLoad","not an array");var b=[],c;m(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{I(a)?(c=Rb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):C(a)?b.push(r.invoke(a)):G(a)?b.push(r.invoke(a)):Sa(a,"module")}catch(e){throw G(a)&&
(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ha("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(b,a,g),l,r,n;r=0;for(l=k.length;r<l;r++){n=k[r];if("string"!==
typeof n)throw Ha("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n,g))}G(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((G(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return D(a)||C(a)?a:d},get:d,annotate:eb.$$annotate,has:function(a){return q.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new Ua([],!0),q={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),
value:c(function(a,b){return f(a,qa(b),!1)}),constant:c(function(a,b){Ta(a,"constant");q[a]=b;u[a]=b}),decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=B.invoke(d,c);return B.invoke(b,null,{$delegate:a})}}}},r=q.$injector=h(q,function(a,b){aa.isString(b)&&k.push(b);throw Ha("unpr",k.join(" <- "));}),u={},B=u.$injector=h(u,function(a,b){var c=r.get(a+"Provider",b);return B.invoke(c.$get,c,t,a)});m(g(b),function(a){a&&B.invoke(a)});return B}function Qe(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;C(c)?c=c():rc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):X(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(a){a=I(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):
(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Ff(function(){d.$evalAsync(g)})});return g}]}function hb(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;G(b)&&(b=b.join(" "));G(a)&&(a=a.join(" "));return b+" "+a}function Jf(b){I(b)&&(b=b.split(" "));var a=ga();m(b,function(b){b.length&&(a[b]=!0)});return a}function Ia(b){return D(b)?b:{}}function Kf(b,a,c,d){function e(a){try{a.apply(null,xa.call(arguments,
1))}finally{if(B--,0===B)for(;K.length;)try{K.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{w=n.state;break a}catch(a){}w=void 0}w=y(w)?null:w;ka(w,F)&&(w=F);F=w}function h(){if(A!==l.url()||p!==w)A=l.url(),p=w,m(N,function(a){a(l.url(),w)})}var l=this,k=b.location,n=b.history,q=b.setTimeout,r=b.clearTimeout,u={};l.isMock=!1;var B=0,K=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=function(){B++};l.notifyWhenNoOutstandingRequests=function(a){0===B?a():
K.push(a)};var w,p,A=k.href,s=a.find("base"),H=null;g();p=w;l.url=function(a,c,e){y(e)&&(e=null);k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){var f=p===e;if(A===a&&(!d.history||f))return l;var h=A&&Ja(A)===Ja(a);A=a;p=e;if(!d.history||h&&f){if(!h||H)H=a;c?k.replace(a):h?(c=k,e=a.indexOf("#"),a=-1===e?"":a.substr(e),c.hash=a):k.href=a}else n[c?"replaceState":"pushState"](e,"",a),g(),p=w;return l}return H||k.href.replace(/%27/g,"'")};l.state=function(){return w};var N=[],J=!1,F=
null;l.onUrlChange=function(a){if(!J){if(d.history)z(b).on("popstate",f);z(b).on("hashchange",f);J=!0}N.push(a);return a};l.$$applicationDestroyed=function(){z(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=s.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;B++;c=q(function(){delete u[c];e(a)},b||0);u[c]=!0;return c};l.defer.cancel=function(a){return u[a]?(delete u[a],r(a),e(v),!0):!1}}function Ve(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new Kf(b,d,a,c)}]}function We(){this.$get=function(){function b(b,d){function e(a){a!=q&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,q),q=a,q.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw L("$cacheFactory")("iid",b);var g=0,h=Q({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},q=null,r=null;return a[b]={put:function(a,b){if(!y(b)){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(r.key);
return b}},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==q&&(q=b.p);b==r&&(r=b.n);f(b.n,b.p);delete n[a]}delete l[a];g--},removeAll:function(){l={};g=0;n={};q=r=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return Q({},h,{size:g})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function qf(){this.$get=
["$cacheFactory",function(b){return b("templates")}]}function Cc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};m(a,function(a,f){var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==M(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Wd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function r(a,f){Ta(a,"directive");I(a)?(d(a),pb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];m(e[a],function(e,g){try{var h=b.invoke(e);C(h)?h={compile:qa(h)}:!h.compile&&h.link&&(h.compile=qa(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||
h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,r=h.name,n={isolateScope:null,bindToController:null};D(l.scope)&&(!0===l.bindToController?(n.bindToController=c(l.scope,r,!0),n.isolateScope={}):n.isolateScope=c(l.scope,r,!1));D(l.bindToController)&&(n.bindToController=c(l.bindToController,r,!0));if(D(n.bindToController)){var S=l.controller,B=l.controllerAs;if(!S)throw ea("noctrl",r);var ha;a:if(B&&I(B))ha=B;else{if(I(S)){var m=Vc.exec(S);if(m){ha=m[3];break a}}ha=void 0}if(!ha)throw ea("noident",
r);}var s=k.$$bindings=n;D(s.isolateScope)&&(h.$$isolateBindings=s.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(t){d(t)}});return f}])),e[a].push(f)):m(a,nc(r));return this};this.aHrefSanitizationWhitelist=function(b){return x(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return x(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return x(a)?
(n=a,this):n};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,w,p,A,s,H,N,J){function F(a,b){try{a.addClass(b)}catch(c){}}function V(a,b,c,d,e){a instanceof z||(a=z(a));m(a,function(b,c){b.nodeType==Pa&&b.nodeValue.match(/\S+/)&&(a[c]=z(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);V.$$addScopeClass(a);var g=null;return function(b,c,d){pb(b,"scope");d=d||{};
var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?z(Xb(g,z("<div>").append(a).html())):c?Ra.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);V.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,r,n,u,N;if(p)for(N=Array(c.length),r=0;r<
h.length;r+=3)f=h[r],N[f]=c[f];else N=c;r=0;for(n=h.length;r<n;)if(l=N[h[r++]],c=h[r++],f=h[r++],c){if(c.scope){if(k=a.$new(),V.$$addScopeInfo(z(l),k),u=c.$$destroyBindings)c.$$destroyBindings=null,k.$on("$destroyed",u)}else k=a;u=c.transcludeOnThisElement?P(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?P(a,b):null;c(f,k,l,d,u,c)}else f&&f(a,l.childNodes,t,e)}for(var h=[],l,k,r,n,p,u=0;u<a.length;u++){l=new aa;k=ha(a[u],[],l,0===u?d:t,e);(f=k.length?E(k,a[u],l,b,c,null,[],[],f):null)&&f.scope&&
V.$$addScopeClass(l.$$element);l=f&&f.terminal||!(r=a[u].childNodes)||!r.length?null:S(r,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(u,f,l),n=!0,p=p||f;f=null}return n?g:null}function P(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ha(a,b,c,d,e){var h=c.$attr,l;switch(a.nodeType){case pa:x(b,va(ta(a)),"E",d,e);for(var k,r,n,p=a.attributes,
u=0,N=p&&p.length;u<N;u++){var K=!1,J=!1;k=p[u];l=k.name;r=T(k.value);k=va(l);if(n=ia.test(k))l=l.replace(Xc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var S=k.replace(/(Start|End)$/,"");L(S)&&k===S+"Start"&&(K=l,J=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=va(l.toLowerCase());h[k]=l;if(n||!c.hasOwnProperty(k))c[k]=r,Qc(a,k)&&(c[k]=!0);X(a,b,r,k,n);x(b,k,"A",d,e,K,J)}a=a.className;D(a)&&(a=a.animVal);if(I(a)&&""!==a)for(;l=g.exec(a);)k=va(l[2]),x(b,k,"C",d,
e)&&(c[k]=T(l[3])),a=a.substr(l.index+l[0].length);break;case Pa:if(11===Va)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Pa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);wa(b,a.nodeValue);break;case 8:try{if(l=f.exec(a.nodeValue))k=va(l[1]),x(b,k,"M",d,e)&&(c[k]=T(l[2]))}catch(B){}}b.sort(za);return b}function ya(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);a.nodeType==pa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&
e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function Wc(a,b,c){return function(d,e,f,g,h){e=ya(e[0],b,c);return a(d,e,f,g,h)}}function E(a,b,d,e,f,g,h,k,r){function n(a,b,c,d){if(a){c&&(a=Wc(a,c,d));a.require=E.require;a.directiveName=x;if(P===E||E.$$isolateScope)a=Z(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Wc(b,c,d));b.require=E.require;b.directiveName=x;if(P===E||E.$$isolateScope)b=Z(b,{isolateScope:!0});k.push(b)}}function u(a,b,c,d){var e;if(I(b)){var f=b.match(l);b=
b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ea("ctreq",b,a);}else if(G(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=u(a,b[g],c,d);return e||null}function N(a,b,c,d,e,f){var g=ga(),h;for(h in d){var l=d[h],k={$scope:l===P||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},r=l.controller;"@"==r&&(r=b[l.name]);k=p(r,k,!0,l.controllerAs);g[l.name]=k;s||a.data("$"+l.name+
"Controller",k.instance)}return g}function K(a,c,e,f,g,l){function r(a,b,c){var d;$a(a)||(c=b,b=a,a=t);s&&(d=A);c||(c=s?ja.parent():ja);return g(a,b,d,c,ya)}var n,p,J,B,A,ha,ja;b===e?(f=d,ja=d.$$element):(ja=z(e),f=new aa(ja,d));P&&(B=c.$new(!0));g&&(ha=r,ha.$$boundTransclude=g);w&&(A=N(ja,f,ha,w,B,c));P&&(V.$$addScopeInfo(ja,B,!0,!(F&&(F===P||F===P.$$originalDirective))),V.$$addScopeClass(ja,!0),B.$$isolateBindings=P.$$isolateBindings,Y(c,f,B,B.$$isolateBindings,P,B));if(A){var m=P||S,H;m&&A[m.name]&&
(p=m.$$bindings.bindToController,(J=A[m.name])&&J.identifier&&p&&(H=J,l.$$destroyBindings=Y(c,f,J.instance,p,m)));for(n in A){J=A[n];var E=J();E!==J.instance&&(J.instance=E,ja.data("$"+n+"Controller",E),J===H&&(l.$$destroyBindings(),l.$$destroyBindings=Y(c,f,E,p,m)))}}n=0;for(l=h.length;n<l;n++)p=h[n],$(p,p.isolateScope?B:c,ja,f,p.require&&u(p.directiveName,p.require,ja,A),ha);var ya=c;P&&(P.template||null===P.templateUrl)&&(ya=B);a&&a(ya,e.childNodes,t,g);for(n=k.length-1;0<=n;n--)p=k[n],$(p,p.isolateScope?
B:c,ja,f,p.require&&u(p.directiveName,p.require,ja,A),ha)}r=r||{};for(var J=-Number.MAX_VALUE,S=r.newScopeDirective,w=r.controllerDirectives,P=r.newIsolateScopeDirective,F=r.templateDirective,A=r.nonTlbTranscludeDirective,m=!1,H=!1,s=r.hasElementTranscludeDirective,ba=d.$$element=z(b),E,x,v,y=e,za,wa=0,L=a.length;wa<L;wa++){E=a[wa];var Bb=E.$$start,M=E.$$end;Bb&&(ba=ya(b,Bb,M));v=t;if(J>E.priority)break;if(v=E.scope)E.templateUrl||(D(v)?(O("new/isolated scope",P||S,E,ba),P=E):O("new/isolated scope",
P,E,ba)),S=S||E;x=E.name;!E.templateUrl&&E.controller&&(v=E.controller,w=w||ga(),O("'"+x+"' controller",w[x],E,ba),w[x]=E);if(v=E.transclude)m=!0,E.$$tlb||(O("transclusion",A,E,ba),A=E),"element"==v?(s=!0,J=E.priority,v=ba,ba=d.$$element=z(W.createComment(" "+x+": "+d[x]+" ")),b=ba[0],U(f,xa.call(v,0),b),y=V(v,e,J,g&&g.name,{nonTlbTranscludeDirective:A})):(v=z(Ub(b)).contents(),ba.empty(),y=V(v,e));if(E.template)if(H=!0,O("template",F,E,ba),F=E,v=C(E.template)?E.template(ba,d):E.template,v=fa(v),
E.replace){g=E;v=Sb.test(v)?Yc(Xb(E.templateNamespace,T(v))):[];b=v[0];if(1!=v.length||b.nodeType!==pa)throw ea("tplrt",x,"");U(f,ba,b);L={$attr:{}};v=ha(b,[],L);var Q=a.splice(wa+1,a.length-(wa+1));P&&Zc(v);a=a.concat(v).concat(Q);$c(d,L);L=a.length}else ba.html(v);if(E.templateUrl)H=!0,O("template",F,E,ba),F=E,E.replace&&(g=E),K=Lf(a.splice(wa,a.length-wa),ba,d,f,m&&y,h,k,{controllerDirectives:w,newScopeDirective:S!==E&&S,newIsolateScopeDirective:P,templateDirective:F,nonTlbTranscludeDirective:A}),
L=a.length;else if(E.compile)try{za=E.compile(ba,d,y),C(za)?n(null,za,Bb,M):za&&n(za.pre,za.post,Bb,M)}catch(R){c(R,ua(ba))}E.terminal&&(K.terminal=!0,J=Math.max(J,E.priority))}K.scope=S&&!0===S.scope;K.transcludeOnThisElement=m;K.templateOnThisElement=H;K.transclude=y;r.hasElementTranscludeDirective=s;return K}function Zc(a){for(var b=0,c=a.length;b<c;b++)a[b]=Nb(a[b],{$$isolateScope:!0})}function x(b,d,f,g,h,l,k){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var n;d=a.get(d+"Directive");for(var p=
0,u=d.length;p<u;p++)try{n=d[p],(g===t||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(l&&(n=Nb(n,{$$start:l,$$end:k})),b.push(n),h=n)}catch(J){c(J)}}return h}function L(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function $c(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){"class"==f?(F(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Lf(a,b,c,e,f,g,h,l){var k=[],r,n,p=b[0],u=a.shift(),J=Nb(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),N=C(u.templateUrl)?u.templateUrl(b,c):u.templateUrl,B=u.templateNamespace;b.empty();d(N).then(function(d){var K,w;d=fa(d);if(u.replace){d=Sb.test(d)?Yc(Xb(B,T(d))):[];K=d[0];if(1!=d.length||K.nodeType!==
pa)throw ea("tplrt",u.name,N);d={$attr:{}};U(e,b,K);var A=ha(K,[],d);D(u.scope)&&Zc(A);a=A.concat(a);$c(c,d)}else K=p,b.html(d);a.unshift(J);r=E(a,K,c,f,b,u,g,h,l);m(e,function(a,c){a==K&&(e[c]=b[0])});for(n=S(b[0].childNodes,f);k.length;){d=k.shift();w=k.shift();var H=k.shift(),V=k.shift(),A=b[0];if(!d.$$destroyed){if(w!==p){var ya=w.className;l.hasElementTranscludeDirective&&u.replace||(A=Ub(K));U(H,z(w),A);F(z(A),ya)}w=r.transcludeOnThisElement?P(d,r.transclude,V):V;r(n,d,A,e,w,r)}}k=null});return function(a,
b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(r.transcludeOnThisElement&&(a=P(b,r.transclude,e)),r(n,b,c,d,a,r)))}}function za(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function O(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function wa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&V.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||V.$$addBindingClass(e);V.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return H.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return H.RESOURCE_URL}function X(a,c,d,e,
f){var g=R(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===ta(a))throw ea("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ea("nodomevents");var r=h[e];r!==d&&(l=r&&b(r,!0,g,f),d=r);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function U(a,b,c){var d=b[0],e=b.length,
f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);z.hasData(d)&&(z(c).data(z(d).data()),la?(Qb=!0,la.cleanData([d])):delete z.cache[d[z.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],z(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return Q(function(){return a.apply(null,
arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function Y(a,c,d,e,f,g){var h;m(e,function(e,g){var l=e.attrName,k=e.optional,r,n,p,K;switch(e.mode){case "@":k||Na.call(c,l)||(d[g]=c[l]=void 0);c.$observe(l,function(a){I(a)&&(d[g]=a)});c.$$observers[l].$$scope=a;I(c[l])&&(d[g]=b(c[l])(a));break;case "=":if(!Na.call(c,l)){if(k)break;c[l]=void 0}if(k&&!c[l])break;n=w(c[l]);K=n.literal?ka:function(a,b){return a===b||a!==a&&b!==b};p=n.assign||function(){r=d[g]=n(a);throw ea("nonassign",
c[l],f.name);};r=d[g]=n(a);k=function(b){K(b,d[g])||(K(b,r)?p(a,b=d[g]):d[g]=b);return r=b};k.$stateful=!0;k=e.collection?a.$watchCollection(c[l],k):a.$watch(w(c[l],k),null,n.literal);h=h||[];h.push(k);break;case "&":n=c.hasOwnProperty(l)?w(c[l]):v;if(n===v&&k)break;d[g]=function(b){return n(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:v;return g&&e!==v?(g.$on("$destroy",e),v):e}var aa=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
{};this.$$element=a};aa.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&N.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&N.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Qc(f,a),h=Gf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=
e=zc(a,"-"));g=ta(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=J(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=T(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var r=2*k,g=g+J(T(h[r]),!0),g=g+(" "+T(h[r+1]));h=T(h[2*k]).split(/\s/);g+=J(T(h[0]),!0);2===h.length&&(g+=" "+T(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&
m(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);A.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){bb(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),fa="{{"==ca||"}}"==da?Za:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/;V.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];G(b)?c=c.concat(b):c.push(b);a.data("$binding",
c)}:v;V.$$addBindingClass=n?function(a){F(a,"ng-binding")}:v;V.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;V.$$addScopeClass=n?function(a,b){F(a,b?"ng-isolate-scope":"ng-scope")}:v;return V}]}function va(b){return fb(b.replace(Xc,""))}function ad(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Yc(b){b=z(b);var a=b.length;
if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Mf.call(b,a,1);return b}function Xe(){var b={},a=!1;this.register=function(a,d){Ta(a,"controller");D(a)?Q(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!D(a.$scope))throw L("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,l){var k,n,q;h=!0===h;l&&I(l)&&(q=l);if(I(f)){l=f.match(Vc);if(!l)throw Nf("ctrlfmt",f);n=l[1];q=q||l[3];f=b.hasOwnProperty(n)?b[n]:Bc(g.$scope,
n,!0)||(a?Bc(d,n,!0):t);Sa(f,n,!0)}if(h)return h=(G(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),q&&e(g,q,k,n||f.name),Q(function(){var a=c.invoke(f,k,g,n);a!==k&&(D(a)||C(a))&&(k=a,q&&e(g,q,k,n||f.name));return k},{instance:k,identifier:q});k=c.instantiate(f,g,n);q&&e(g,q,k,n||f.name);return k}}]}function Ye(){this.$get=["$window",function(b){return z(b.document)}]}function Ze(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b){return D(b)?
ca(b)?b.toISOString():db(b):b}function df(){this.$get=function(){return function(b){if(!b)return"";var a=[];mc(b,function(b,d){null===b||y(b)||(G(b)?m(b,function(b,c){a.push(ma(d)+"="+ma(Yb(b)))}):a.push(ma(d)+"="+ma(Yb(b))))});return a.join("&")}}}function ef(){this.$get=function(){return function(b){function a(b,e,f){null===b||y(b)||(G(b)?m(b,function(b,c){a(b,e+"["+(D(b)?c:"")+"]")}):D(b)&&!ca(b)?mc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(ma(e)+"="+ma(Yb(b))))}if(!b)return"";var c=
[];a(b,"",!0);return c.join("&")}}}function Zb(b,a){if(I(b)){var c=b.replace(Of,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(bd))||(d=(d=c.match(Pf))&&Qf[d[0]].test(c));d&&(b=uc(c))}}return b}function cd(b){var a=ga(),c;I(b)?m(b.split("\n"),function(b){c=b.indexOf(":");var e=M(T(b.substr(0,c)));b=T(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):D(b)&&m(b,function(b,c){var f=M(c),g=T(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function dd(b){var a;return function(c){a||(a=cd(b));return c?
(c=a[M(c)],void 0===c&&(c=null),c):a}}function ed(b,a,c,d){if(C(d))return d(b,a,c);m(d,function(d){b=d(b,a,c)});return b}function cf(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return D(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia($b),put:ia($b),patch:ia($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},
a=!1;this.useApplyAsync=function(b){return x(b)?(a=!!b,this):a};var c=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(c=!!a,this):c};var d=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,l,k){function n(a){function d(a){var b=Q({},a);b.data=a.data?ed(a.data,a.headers,a.status,f.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:l.reject(b)}function e(a,b){var c,d={};m(a,function(a,e){C(a)?(c=a(b),null!=
c&&(d[e]=c)):d[e]=a});return d}if(!aa.isObject(a))throw L("$http")("badreq",a);var f=Q({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);f.headers=function(a){var c=b.headers,d=Q({},a.headers),f,g,h,c=Q({},c.common,c[M(a.method)]);a:for(f in c){g=M(f);for(h in d)if(M(h)===g)continue a;d[f]=c[f]}return e(d,ia(a))}(a);f.method=rb(f.method);f.paramSerializer=I(f.paramSerializer)?k.get(f.paramSerializer):f.paramSerializer;var g=
[function(a){var c=a.headers,e=ed(a.data,dd(c),t,a.transformRequest);y(e)&&m(c,function(a,b){"content-type"===M(b)&&delete c[b]});y(a.withCredentials)&&!y(b.withCredentials)&&(a.withCredentials=b.withCredentials);return q(a,e).then(d,d)},t],h=l.when(f);for(m(B,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var r=g.shift(),h=h.then(a,r)}c?(h.success=function(a){Sa(a,"fn");h.then(function(b){a(b.data,
b.status,b.headers,f)});return h},h.error=function(a){Sa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=fd("success"),h.error=fd("error"));return h}function q(c,d){function g(b,c,d,e){function f(){k(c,b,d,e)}F&&(200<=b&&300>b?F.put(P,[b,c,cd(d),e]):F.remove(P));a?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function k(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?N.resolve:N.reject)({data:a,status:b,headers:dd(d),config:c,statusText:e})}function q(a){k(a.data,a.status,
ia(a.headers()),a.statusText)}function B(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var N=l.defer(),J=N.promise,F,m,S=c.headers,P=r(c.url,c.paramSerializer(c.params));n.pendingRequests.push(c);J.then(B,B);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(F=D(c.cache)?c.cache:D(b.cache)?b.cache:u);F&&(m=F.get(P),x(m)?m&&C(m.then)?m.then(q,q):G(m)?k(m[1],m[0],ia(m[2]),m[3]):k(m,200,{},"OK"):F.put(P,J));y(m)&&((m=gd(c.url)?f()[c.xsrfCookieName||
b.xsrfCookieName]:t)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=m),e(c.method,P,d,g,S,c.timeout,c.withCredentials,c.responseType));return J}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var u=g("$http");b.paramSerializer=I(b.paramSerializer)?k.get(b.paramSerializer):b.paramSerializer;var B=[];m(d,function(a){B.unshift(I(a)?k.get(a):k.invoke(a))});n.pendingRequests=[];(function(a){m(arguments,function(a){n[a]=function(b,c){return n(Q({},c||{},{method:a,url:b}))}})})("get","delete",
"head","jsonp");(function(a){m(arguments,function(a){n[a]=function(b,c,d){return n(Q({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=b;return n}]}function Rf(){return new O.XMLHttpRequest}function ff(){this.$get=["$browser","$window","$document",function(b,a,c){return Sf(b,Rf,b.defer,a.angular.callbacks,c[0])}]}function Sf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",
n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,q,r,u){function B(){p&&p();A&&A.abort()}function K(a,d,e,f,g){H!==t&&c.cancel(H);p=A=null;a(d,e,f,g);b.$$completeOutstandingRequest(v)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==
M(e)){var w="_"+(d.counter++).toString(36);d[w]=function(a){d[w].data=a;d[w].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+w),w,function(a,b){K(k,a,d[w].data,"",b);d[w]=v})}else{var A=a();A.open(e,h,!0);m(n,function(a,b){x(a)&&A.setRequestHeader(b,a)});A.onload=function(){var a=A.statusText||"",b="response"in A?A.response:A.responseText,c=1223===A.status?204:A.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);K(k,c,b,A.getAllResponseHeaders(),a)};e=function(){K(k,-1,null,null,
"")};A.onerror=e;A.onabort=e;r&&(A.withCredentials=!0);if(u)try{A.responseType=u}catch(s){if("json"!==u)throw s;}A.send(l)}if(0<q)var H=c(B,q);else q&&C(q.then)&&q.then(B)}}function af(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,b).replace(q,a)}function h(f,h,n,q){function w(a){try{var b=a;a=n?e.getTrusted(n,
b):e.valueOf(b);var c;if(q&&!x(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=db(a)}c=a}return c}catch(g){d(Ka.interr(f,g))}}q=!!q;for(var p,m,s=0,H=[],N=[],J=f.length,F=[],V=[];s<J;)if(-1!=(p=f.indexOf(b,s))&&-1!=(m=f.indexOf(a,p+l)))s!==p&&F.push(g(f.substring(s,p))),s=f.substring(p+l,m),H.push(s),N.push(c(s,w)),s=m+k,V.push(F.length),F.push("");else{s!==J&&F.push(g(f.substring(s)));break}n&&1<F.length&&Ka.throwNoconcat(f);if(!h||H.length){var S=
function(a){for(var b=0,c=H.length;b<c;b++){if(q&&y(a[b]))return;F[V[b]]=a[b]}return F.join("")};return Q(function(a){var b=0,c=H.length,e=Array(c);try{for(;b<c;b++)e[b]=N[b](a);return S(e)}catch(g){d(Ka.interr(f,g))}},{exp:f,expressions:H,$$watchDelegate:function(a,b){var c;return a.$watchGroup(N,function(d,e){var f=S(d);C(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,n=new RegExp(b.replace(/./g,f),"g"),q=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=
function(){return a};return h}]}function bf(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=4<arguments.length,q=n?xa.call(arguments,4):[],r=a.setInterval,u=a.clearInterval,B=0,K=x(k)&&!k,w=(K?d:c).defer(),p=w.promise;l=x(l)?l:0;p.then(null,null,n?function(){e.apply(null,q)}:e);p.$$intervalId=r(function(){w.notify(B++);0<l&&B>=l&&(w.resolve(B),u(p.$$intervalId),delete f[p.$$intervalId]);K||b.$apply()},h);f[p.$$intervalId]=w;return p}var f={};e.cancel=function(b){return b&&
b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=nb(b[a]);return b.join("/")}function hd(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=Y(c.port)||Tf[c.protocol]||null}function id(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=
xc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ra(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ja(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Cb(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b,a,c){this.$$html5=!0;c=c||"";hd(b,this);this.$$parse=function(b){var c=ra(a,b);if(!I(c))throw Db("ipthprfx",b,a);id(c,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var b=
Pb(this.$$search),c=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=a+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ra(b,d))!==t?(g=f,g=(f=ra(c,f))!==t?a+(ra("/",f)||f):b+g):(f=ra(a,d))!==t?g=a+f:a==d+"/"&&(g=a);g&&this.$$parse(g);return!!g}}function cc(b,a,c){hd(b,this);this.$$parse=function(d){var e=ra(b,d)||ra(a,d),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(b=d,this.replace())):
(f=ra(c,e),y(f)&&(f=e));id(f,this);d=this.$$path;var e=b,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(d=(f=g.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+(this.$$url?c+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ja(b)==Ja(a)?(this.$$parse(a),!0):!1}}function jd(b,a,c){this.$$html5=!0;cc.apply(this,arguments);this.$$parseLinkUrl=
function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ja(d)?f=d:(g=ra(a,d))?f=b+c+g:a===d+"/"&&(f=a);f&&this.$$parse(f);return!!f};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+c+this.$$url}}function Eb(b){return function(){return this[b]}}function kd(b,a){return function(c){if(y(c))return this[b];this[b]=a(c);this.$$compose();return this}}function gf(){var b="",a={enabled:!1,requireBase:!0,
rewriteLinks:!0};this.hashPrefix=function(a){return x(a)?(b=a,this):b};this.html5Mode=function(b){return ab(b)?(a.enabled=b,this):D(b)?(ab(b.enabled)&&(a.enabled=b.enabled),ab(b.requireBase)&&(a.requireBase=b.requireBase),ab(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,
b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var q=d.url(),r;if(a.enabled){if(!n&&a.requireBase)throw Db("nobase");r=q.substring(0,q.indexOf("/",q.indexOf("//")+2))+(n||"/");n=e.history?bc:jd}else r=Ja(q),n=cc;var u=r.substr(0,Ja(r).lastIndexOf("/")+1);k=new n(r,u,"#"+b);k.$$parseLinkUrl(q,q);k.$$state=d.state();var B=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=
z(b.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");D(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);B.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Cb(k.absUrl())!=Cb(q)&&d.url(k.absUrl(),!0);var K=!0;d.onUrlChange(function(a,b){y(ra(u,a))?g.location.href=a:(c.$evalAsync(function(){var d=
k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(K=!1,l(d,e)))}),c.$$phase||c.$digest())});c.$watch(function(){var a=Cb(d.url()),b=Cb(k.absUrl()),f=d.state(),g=k.$$replace,n=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(K||n)K=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=
f):(n&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function hf(){var b=!0,a=this;this.debugEnabled=function(a){return x(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=
[];m(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Wa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw da("isecfld",a);return b}function Ba(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b.window===b)throw da("isecwindow",
a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw da("isecdom",a);if(b===Object)throw da("isecobj",a);}return b}function ld(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b===Uf||b===Vf||b===Wf)throw da("isecff",a);}}function Xf(b,a){return"undefined"!==typeof b?b:a}function md(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case s.Program:c=!0;m(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});b.constant=
c;break;case s.Literal:b.constant=!0;b.toWatch=[];break;case s.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case s.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case s.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case s.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,
a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case s.Identifier:b.constant=!1;b.toWatch=[b];break;case s.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case s.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];m(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&
!a(b.callee.name).$stateful?d:[b];break;case s.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case s.ArrayExpression:c=!0;d=[];m(b.elements,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case s.ObjectExpression:c=!0;d=[];m(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case s.ThisExpression:b.constant=
!1,b.toWatch=[]}}function nd(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:t}}function od(b){return b.type===s.Identifier||b.type===s.MemberExpression}function pd(b){if(1===b.body.length&&od(b.body[0].expression))return{type:s.AssignmentExpression,left:b.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function qd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===s.Literal||b.body[0].expression.type===s.ArrayExpression||
b.body[0].expression.type===s.ObjectExpression)}function rd(b,a){this.astBuilder=b;this.$filter=a}function sd(b,a){this.astBuilder=b;this.$filter=a}function Fb(b){return"constructor"==b}function dc(b){return C(b.valueOf)?b.valueOf():Yf.call(b)}function jf(){var b=ga(),a=ga();this.$get=["$filter",function(c){function d(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=dc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,c,e,f){var g=e.inputs,h;if(1===g.length){var l=d,g=g[0];return a.$watch(function(a){var b=
g(a);d(b,l)||(h=e(a,t,t,[b]),l=b&&dc(b));return h},b,c,f)}for(var k=[],n=[],q=0,m=g.length;q<m;q++)k[q]=d,n[q]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var l=g[c](a);if(b||(b=!d(l,k[c])))n[c]=l,k[c]=l&&dc(l)}b&&(h=e(a,t,t,n));return h},b,c,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;C(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;m(a,function(a){x(a)||
(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;C(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){C(b)&&b.apply(this,arguments);e()},c)}function l(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==g&&c!==f?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==
e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=e,c.inputs=a.inputs?a.inputs:[a]);return c}var k=Fa().noUnsafeEval,n={csp:k,expensiveChecks:!1},q={csp:k,expensiveChecks:!0};return function(d,k,B){var m,w,p;switch(typeof d){case "string":p=d=d.trim();var s=B?a:b;m=s[p];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),B=B?q:n,m=new ec(B),m=(new fc(m,c,B)).parse(d),m.constant?m.$$watchDelegate=h:w?m.$$watchDelegate=m.literal?g:f:m.inputs&&(m.$$watchDelegate=e),
s[p]=m);return l(m,k);case "function":return l(d,k);default:return v}}}]}function lf(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return td(function(a){b.$evalAsync(a)},a)}]}function mf(){this.$get=["$browser","$exceptionHandler",function(b,a){return td(function(a){b.defer(a)},a)}]}function td(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}
function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{C(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=L("$q",TypeError);Q(d.prototype,{then:function(a,b,c){if(y(a)&&
y(b)&&y(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});Q(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,
this.$$reject);try{if(D(b)||C(b))d=b&&b.then;C(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,
e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(C(b)?b(c):c)}catch(h){a(h)}}})}});var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{C(c)&&(d=c())}catch(e){return l(e,!1)}return d&&C(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},q=function u(a){if(!C(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;
a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};q.defer=function(){return new g};q.reject=function(a){var b=new g;b.reject(a);return b.promise};q.when=n;q.resolve=n;q.all=function(a){var b=new g,c=0,d=G(a)?[]:{};m(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return q}function vf(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=
0;a<n.length;a++){var b=n[a];b&&(n[a]=null,b())}k=n.length=0}function d(a){var b=n.length;k++;n.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=n[b]=null,0===--k&&l&&(l(),l=null,n.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,n=[];return d}]}
function kf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++mb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=L("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++mb;this.$$phase=
this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function q(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function r(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function u(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function K(){for(;H.length;)try{H.shift()()}catch(a){g(a)}e=
null}function w(){null===e&&(e=l.defer(function(){p.$apply(K)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,
a);var g=this,l=g.$$watchers,k={fn:b,last:s,get:f,exp:e||a,eq:!!c};d=null;C(b)||(k.fn=v);l||(l=g.$$watchers=[]);l.unshift(k);r(this,1);return function(){0<=bb(l,k)&&r(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});m(a,function(a,
b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(D(e))if(Da(e))for(f!==q&&(f=q,u=f.length=0,k++),a=e.length,u!==a&&(k++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==r&&(f=r={},u=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(u++,f[b]=g,
k++));if(u>a)for(b in k++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<b.length,k=0,n=h(a,c),q=[],r={},p=!0,u=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(l)if(D(e))if(Da(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)Na.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,n,r,u=a,m,w=[],E,H;q("$digest");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),K());d=
null;do{r=!1;for(m=this;t.length;){try{H=t.shift(),H.scope.$eval(H.expression,H.locals)}catch(v){g(v)}d=null}a:do{if(k=m.$$watchers)for(n=k.length;n--;)try{if(b=k[n])if((f=b.get(m))!==(h=b.last)&&!(b.eq?ka(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))r=!0,d=b,b.last=b.eq?fa(f,null):f,b.fn(f,h===s?f:h,m),5>u&&(E=4-u,w[E]||(w[E]=[]),w[E].push({msg:C(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){r=!1;break a}}catch(y){g(y)}if(!(k=m.$$watchersCount&&
m.$$childHead||m!==this&&m.$$nextSibling))for(;m!==this&&!(k=m.$$nextSibling);)m=m.$parent}while(m=k);if((r||t.length)&&!u--)throw p.$$phase=null,c("infdig",a,w);}while(r||t.length);for(p.$$phase=null;x.length;)try{x.shift()()}catch(z){g(z)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();r(this,-this.$$watchersCount);for(var b in this.$$listenerCount)u(this,this.$$listenerCount[b],b);a&&a.$$childHead==
this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=
null}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){p.$$phase||t.length||l.defer(function(){t.length&&p.$digest()});t.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{q("$apply");try{return this.$eval(a)}finally{p.$$phase=null}}catch(b){g(b)}finally{try{p.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&H.push(b);w()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=
c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,u(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=cb([h],arguments,1),k,n;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(n=d.length;k<n;k++)if(d[k])try{d[k].apply(null,l)}catch(q){g(q)}else d.splice(k,
1),k--,n--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&
c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new n,t=p.$$asyncQueue=[],x=p.$$postDigestQueue=[],H=p.$$applyAsyncQueue=[];return p}]}function ge(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;
return""===f||f.match(e)?c:"unsafe:"+f}}}function Zf(b){if("self"===b)return b;if(I(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=ud(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Oa(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function vd(b){var a=[];x(b)&&m(b,function(b){a.push(Zf(b))});return a}function of(){this.SCE_CONTEXTS=oa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=vd(a));return b};this.resourceUrlBlacklist=
function(b){arguments.length&&(a=vd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[oa.HTML]=
e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=e(h[oa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===oa.RESOURCE_URL){var g=Aa(e.toString()),q,r,u=!1;q=0;for(r=b.length;q<r;q++)if(d(b[q],
g)){u=!0;break}if(u)for(q=0,r=a.length;q<r;q++)if(d(a[q],g)){u=!1;break}if(u)return e;throw Ca("insecurl",e.toString());}if(c===oa.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function nf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Va)throw Ca("iequirks");var d=ia(oa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=
c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=Za);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;m(oa,function(a,b){var c=M(b);d[fb("parse_as_"+c)]=function(b){return e(a,b)};d[fb("get_trusted_"+c)]=function(b){return f(a,b)};d[fb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function pf(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(M((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var q in l)if(k=h.exec(q)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=I(l.webkitTransition),n=I(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===
a&&11>=Va)return!1;if(y(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Fa(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function rf(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;I(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var h=a.defaults&&a.defaults.transformResponse;G(h)?h=h.filter(function(a){return a!==Zb}):h===Zb&&(h=null);return a.get(f,{cache:b,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(f,
a.data);return a.data},function(a){if(!g)throw ea("tpload",f,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function sf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];m(a,function(a){var d=aa.element(a).data("$binding");d&&m(d,function(d){c?(new RegExp("(^|\\s)"+ud(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,
b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function tf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){C(f)||(k=l,l=f,f=v);var n=xa.call(arguments,3),q=x(k)&&!k,r=(q?d:c).defer(),
u=r.promise,m;m=a.defer(function(){try{r.resolve(f.apply(null,n))}catch(a){r.reject(a),e(a)}finally{delete g[u.$$timeoutId]}q||b.$apply()},l);u.$$timeoutId=m;g[m]=r;return u}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Va&&(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,
search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function gd(b){b=I(b)?Aa(b):b;return b.protocol===wd.protocol&&b.host===wd.host}function uf(){this.$get=qa(O)}function xd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=b[0]||{},d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=
b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),d[k]===t&&(d[k]=a(g.substring(l+1))));return d}}function yf(){this.$get=xd}function Jc(b){function a(c,d){if(D(c)){var e={};m(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",yd);a("date",zd);a("filter",$f);a("json",ag);a("limitTo",bg);a("lowercase",cg);a("number",Ad);a("orderBy",Bd);a("uppercase",dg)}function $f(){return function(b,
a,c){if(!Da(b)){if(null==b)return b;throw L("filter")("notarray",b);}var d;switch(gc(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=eg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function eg(b,a,c){var d=D(b)&&"$"in b;!0===a?a=ka:C(a)||(a=function(a,b){if(y(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!pc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!D(e)?La(e,
b.$,a,!1):La(e,b,a,c)}}function La(b,a,c,d,e){var f=gc(b),g=gc(a);if("string"===g&&"!"===a.charAt(0))return!La(b,a.substring(1),c,d);if(G(b))return b.some(function(b){return La(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&La(b[h],a,c,!0))return!0;return e?!1:La(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!C(e)&&!y(e)&&(f="$"===h,!La(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function gc(b){return null===
b?"null":typeof b}function yd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){y(d)&&(d=a.CURRENCY_SYM);y(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Cd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function Ad(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Cd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Cd(b,a,c,d,e){if(D(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,n=[];g&&(l="\u221e");
if(!g&&-1!==h.indexOf("e")){var q=h.match(/([\d\.]+)e(-?)(\d+)/);q&&"-"==q[2]&&q[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(Dd)[1]||"").length;y(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(Dd),h=g[0],g=g[1]||"",q=0,r=a.lgSize,u=a.gSize;if(h.length>=r+u)for(q=h.length-r,k=0;k<q;k++)0===(q-k)%u&&0!==k&&(l+=c),l+=h.charAt(k);for(k=q;k<h.length;k++)0===(h.length-k)%r&&0!==k&&
(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function Ed(b){var a=
(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Fd(b){return function(a){var c=Ed(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function hc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function zd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Y(b[9]+b[10]),g=Y(b[9]+b[11]));h.call(a,Y(b[1]),
Y(b[2])-1,Y(b[3]));f=Y(b[4]||0)-f;g=Y(b[5]||0)-g;h=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;I(c)&&(c=fg.test(c)?Y(c):a(c));X(c)&&(c=new Date(c));if(!ca(c)||!isFinite(c.getTime()))return c;for(;e;)(k=gg.exec(e))?(h=cb(h,k,1),e=h.pop()):(h.push(e),e=null);var n=c.getTimezoneOffset();
f&&(n=vc(f,c.getTimezoneOffset()),c=Ob(c,f,!0));m(h,function(a){l=hg[a];g+=l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function ag(){return function(b,a){y(a)&&(a=2);return db(b,a)}}function bg(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):Y(a);if(isNaN(a))return b;X(b)&&(b=b.toString());if(!G(b)&&!I(b))return b;c=!c||isNaN(c)?0:Y(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,
c+a),c)}}function Bd(b){function a(a,c){c=c?-1:1;return a.map(function(a){var d=1,h=Za;if(C(a))h=a;else if(I(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))d="-"==a.charAt(0)?-1:1,a=a.substring(1);if(""!==a&&(h=b(a),h.constant))var l=h(),h=function(a){return a[l]}}return{get:h,descending:d*c}})}function c(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(b,e,f){if(!Da(b))return b;G(e)||(e=[e]);0===e.length&&(e=["+"]);var g=a(e,f);g.push({get:function(){return{}},
descending:f?-1:1});b=Array.prototype.map.call(b,function(a,b){return{value:a,predicateValues:g.map(function(d){var e=d.get(a);d=typeof e;if(null===e)d="string",e="null";else if("string"===d)e=e.toLowerCase();else if("object"===d)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),c(e)))break a;if(pc(e)&&(e=e.toString(),c(e)))break a;e=b}return{value:e,type:d}})}});b.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],u=0;c.type===f.type?c.value!==
f.value&&(u=c.value<f.value?-1:1):u=c.type<f.type?-1:1;if(c=u*g[d].descending)break}return c});return b=b.map(function(a){return a.value})}}function Ma(b){C(b)&&(b={link:b});b.restrict=b.restrict||"AC";return qa(b)}function Gd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Ib;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){m(g,
function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){m(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ta(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];m(f.$pending,function(b,c){f.$setValidity(c,null,a)});m(f.$error,function(b,c){f.$setValidity(c,null,a)});m(f.$$success,function(b,c){f.$setValidity(c,null,
a)});bb(g,a)};Hd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(bb(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Xa);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Xa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;m(g,function(a){a.$setPristine()})};f.$setUntouched=function(){m(g,function(a){a.$setUntouched()})};
f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function ic(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function ib(b,a,c,d,e,f){var g=M(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=T(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&
d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){var b=d.$isEmpty(d.$viewValue)?"":d.$viewValue;a.val()!==b&&a.val(b)}}function Kb(b,a){return function(c,d){var e,f;if(ca(c))return c;if(I(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-
1)&&(c=c.substring(1,c.length-1));if(ig.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},m(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(b,a,c,d){return function(e,f,g,h,l,k,n){function q(a){return a&&!(a.getTime&&
a.getTime()!==a.getTime())}function r(a){return x(a)?ca(a)?a:c(a):t}Id(e,f,g,h);ib(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,m;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,m),u&&(b=Ob(b,u)),b):t});h.$formatters.push(function(a){if(a&&!ca(a))throw kb("datefmt",a);if(q(a))return(m=a)&&u&&(m=Ob(m,u,!0)),n("date")(a,d,u);m=null;return""});if(x(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!q(a)||y(s)||c(a)>=s};g.$observe("min",function(a){s=
r(a);h.$validate()})}if(x(g.max)||g.ngMax){var w;h.$validators.max=function(a){return!q(a)||y(w)||c(a)<=w};g.$observe("max",function(a){w=r(a);h.$validate()})}}}function Id(b,a,c,d){(d.$$hasNativeValidators=D(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function Jd(b,a,c,d,e){if(x(d)){b=b(d);if(!b.constant)throw kb("constexpr",c,d);return b(a)}return e}function jc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=
[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return G(a)?(m(a,function(a){b=b.concat(e(a))}),b):I(a)?a.split(" "):D(a)?(m(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||ga(),d=[];m(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%
2===a){var k=e(b||[]);if(!n){var m=l(k,1);h.$addClass(m)}else if(!ka(b,n)){var s=e(n),m=d(k,s),k=d(s,k),m=l(m,1),k=l(k,-1);m&&m.length&&c.addClass(g,m);k&&k.length&&c.removeClass(g,k)}}n=ia(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Hd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&
f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+zc(b,"-"):"";a(lb+b,!0===c);a(Kd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Kd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Ld(d.$pending)&&(d.$pending=t));ab(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Md,!0),d.$valid=
d.$invalid=t,c("",null)):(a(Md,!1),d.$valid=Ld(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Ld(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var jg=/^\/(.+)\/([a-z]*)$/,M=function(b){return I(b)?b.toLowerCase():b},Na=Object.prototype.hasOwnProperty,rb=function(b){return I(b)?b.toUpperCase():b},Va,z,la,xa=[].slice,Mf=[].splice,kg=[].push,sa=Object.prototype.toString,qc=Object.getPrototypeOf,
Ea=L("ng"),aa=O.angular||(O.angular={}),Rb,mb=0;Va=W.documentMode;v.$inject=[];Za.$inject=[];var G=Array.isArray,sc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,T=function(b){return I(b)?b.trim():b},ud=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!x(Fa.rules)){var b=W.querySelector("[ng-csp]")||W.querySelector("[data-ng-csp]");if(b){var a=b.getAttribute("ng-csp")||b.getAttribute("data-ng-csp");
Fa.rules={noUnsafeEval:!a||-1!==a.indexOf("no-unsafe-eval"),noInlineStyle:!a||-1!==a.indexOf("no-inline-style")}}else{b=Fa;try{new Function(""),a=!1}catch(c){a=!0}b.rules={noUnsafeEval:a,noInlineStyle:!1}}}return Fa.rules},ob=function(){if(x(ob.name_))return ob.name_;var b,a,c=Qa.length,d,e;for(a=0;a<c;++a)if(d=Qa[a],b=W.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return ob.name_=e},Qa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Ac=!1,Qb,pa=1,Pa=3,fe={full:"1.4.4",
major:1,minor:4,dot:4,codeName:"pylon-requirement"};R.expando="ng339";var gb=R.cache={},Ef=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var zf=/([\:\-\_]+(.))/g,Af=/^moz([A-Z])/,lg={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=L("jqLite"),Df=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,Bf=/<([\w:]+)/,Cf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,na={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>",
"</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};na.optgroup=na.option;na.tbody=na.tfoot=na.colgroup=na.caption=na.thead;na.th=na.td;var Ra=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(O).on("load",a))},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?z(this[b]):z(this[this.length+b])},length:0,push:kg,sort:[].sort,splice:[].splice},Ab={};m("multiple selected checked disabled readOnly required open".split(" "),function(b){Ab[M(b)]=b});var Rc={};m("input select option textarea button form details".split(" "),function(b){Rc[b]=!0});var Sc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};m({data:Vb,removeData:ub,hasData:function(b){for(var a in gb[b.ng339])return!0;return!1}},function(b,a){R[a]=b});m({data:Vb,
inheritedData:zb,scope:function(b){return z.data(b,"$scope")||zb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return z.data(b,"$isolateScope")||z.data(b,"$isolateScopeNoTemplate")},controller:Oc,injector:function(b){return zb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:wb,css:function(b,a,c){a=fb(a);if(x(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Pa&&2!==d&&8!==d)if(d=M(a),Ab[d])if(x(c))c?(b[a]=!0,b.setAttribute(a,
d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:t;else if(x(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(x(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(y(b)){var d=a.nodeType;return d===pa||d===Pa?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(y(a)){if(b.multiple&&"select"===ta(b)){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||
a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(y(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Pc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Pc&&(2==b.length&&b!==wb&&b!==Oc?a:d)===t){if(D(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});m({removeData:ub,
on:function a(c,d,e,f){if(x(f))throw Tb("onargs");if(Kc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Hf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,lg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Nc,one:function(a,c,d){a=z(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,
c){var d,e=a.parentNode;tb(a);m(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===pa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===pa||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===pa){var d=a.firstChild;m(new R(c),function(c){a.insertBefore(c,d)})}},
wrap:function(a,c){c=z(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Wb,detach:function(a){Wb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:yb,removeClass:xb,toggleClass:function(a,c,d){c&&m(c.split(" "),function(c){var f=d;y(f)&&(f=!wb(a,c));(f?yb:xb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:g,target:a},c.type&&(e=Q(e,
c)),c=ia(h),f=d?[e].concat(d):[e],m(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)y(g)?(g=a(this[h],c,e,f),x(g)&&(g=z(g))):Mc(g,a(this[h],c,e,f));return x(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Ua.prototype={put:function(a,c){this[Ga(a,this.nextUid)]=c},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var c=this[a=Ga(a,this.nextUid)];delete this[a];
return c}};var xf=[function(){this.$get=[function(){return Ua}]}],Uc=/^[^\(]*\(\s*([^\)]*)\)/m,mg=/,/,ng=/^\s*(_?)(\S+?)\1\s*$/,Tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=L("$injector");eb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw I(d)&&d||(d=a.name||If(a)),Ha("strictdi",d);c=a.toString().replace(Tc,"");c=c.match(Uc);m(c[1].split(mg),function(a){a.replace(ng,function(a,c,d){e.push(d)})})}a.$inject=e}}else G(a)?(c=a.length-1,Sa(a[c],"fn"),
e=a.slice(0,c)):Sa(a,"fn",!0);return e};var Nd=L("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=v;d.chain=v;d.prototype={end:v,cancel:v,resume:v,pause:v,complete:v,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Te=function(){var a=new Ua,c=[];this.$get=["$$AnimateRunner","$rootScope",function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));d=function(a,c){var d=!1;a&&(a=I(a)?a.split(" "):G(a)?a:[],m(a,function(a){a&&
(d=!0,k[a]=c)}));return d};f=d(f,!0);l=d(l,!1);!f&&!l||1<c.length||e.$$postDigest(function(){m(c,function(c){var d=a.get(c);if(d){var e=Jf(c.attr("class")),f="",g="";m(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});m(c,function(a){f&&yb(a,f);g&&xb(a,g)});a.remove(c)}});c.length=0})}return{enabled:v,on:v,off:v,pin:v,push:function(a,c,e,k){k&&k();e=e||{};e.from&&a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},
Re=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Nd("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Nd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",
function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=g&&z(g);h=h&&z(h);g=g||h.parent();c(f,g,h);return a.push(f,"enter",Ia(l))},move:function(f,g,h,l){g=g&&z(g);h=h&&z(h);g=g||h.parent();c(f,g,h);return a.push(f,"move",Ia(l))},leave:function(c,
e){return a.push(c,"leave",Ia(e),function(){c.remove()})},addClass:function(c,e,h){h=Ia(h);h.addClass=hb(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=Ia(h);h.removeClass=hb(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=Ia(l);l.addClass=hb(l.addClass,e);l.removeClass=hb(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=Ia(k);k.from=k.from?Q(k.from,e):e;k.to=k.to?Q(k.to,h):h;k.tempClasses=hb(k.tempClasses,l||
"ng-inline-animate");return a.push(c,"animate",k)}}}]}],Se=function(){this.$get=["$$rAF","$q",function(a,c){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=c.defer());return this.defer.promise},then:function(a,c){return this.getPromise().then(a,c)},"catch":function(a){return this.getPromise().catch(a)},"finally":function(a){return this.getPromise().finally(a)}};
return function(c,f){function g(){a(function(){f.addClass&&(c.addClass(f.addClass),f.addClass=null);f.removeClass&&(c.removeClass(f.removeClass),f.removeClass=null);f.to&&(c.css(f.to),f.to=null);h||l.done();h=!0});return l}f.from&&(c.css(f.from),f.from=null);var h,l=new d;return{start:g,end:g}}}]},ea=L("$compile");Cc.$inject=["$provide","$$sanitizeUriProvider"];var Xc=/^((?:x|data)[\:\-_])/i,Nf=L("$controller"),Vc=/^(\S+)(\s+as\s+(\w+))?$/,$e=function(){this.$get=["$document",function(a){return function(c){c?
!c.nodeType&&c instanceof z&&(c=c[0]):c=a[0].body;return c.offsetWidth+1}}]},bd="application/json",$b={"Content-Type":bd+";charset=utf-8"},Pf=/^\[|^\{(?!\{)/,Qf={"[":/]$/,"{":/}$/},Of=/^\)\]\}',?\n/,og=L("$http"),fd=function(a){return function(){throw og("legacy",a);}},Ka=aa.$interpolateMinErr=L("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,c){return Ka("interr",a,c.toString())};var pg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Tf={http:80,https:443,ftp:21},Db=
L("$location"),qg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(y(a))return this.$$url;var c=pg.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Eb("$$protocol"),host:Eb("$$host"),port:Eb("$$port"),path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||X(a))a=
a.toString(),this.$$search=xc(a);else if(D(a))a=fa(a,{}),m(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Db("isrcharg");break;default:y(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};m([jd,cc,bc],function(a){a.prototype=Object.create(qg);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==bc||!this.$$html5)throw Db("nostate");
this.$$state=y(c)?null:c;return this}});var da=L("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,Lb=ga();m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var rg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},ec=function(a){this.options=a};ec.prototype={constructor:ec,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);
else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Lb[c],f=Lb[d];Lb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},
is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=x(c)?"s "+c+"-"+
this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw da("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=rg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var s=function(a,c){this.lexer=a;this.options=c};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";
s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
c;c=this.expect("+","-");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=fa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:s.MemberExpression,object:a,property:this.expression(),
computed:!0},this.consume("]")):"."===c.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||
this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:s.Property,kind:"init"};this.peek().constant?
c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,c){throw da("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw da("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+
"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw da("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},"false":{type:s.Literal,value:!1},"null":{type:s.Literal,
value:null},undefined:{type:s.Literal,value:t},"this":{type:s.ThisExpression}}};rd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",g;this.stage="assign";if(g=pd(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");g=nd(e.body);d.stage="inputs";m(g,function(a,c){var e=
"fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Wa,Ba,ld,Xf,md,a);this.state=
this.stage=t;f.literal=qd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;m(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;m(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?
"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,n,q;e=e||v;if(!g&&x(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case s.Program:m(a.body,function(c,d){k.recurse(c.expression,t,t,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,
";"):k.return_(l)});break;case s.Literal:q=this.escape(a.value);this.assign(c,q);e(q);break;case s.UnaryExpression:this.recurse(a.argument,t,t,function(a){l=a});q=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,q);e(q);break;case s.BinaryExpression:this.recurse(a.left,t,t,function(a){h=a});this.recurse(a.right,t,t,function(a){l=a});q="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,q);e(q);break;case s.LogicalExpression:c=
c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case s.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case s.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Wa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),
function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case s.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,t,function(){k.if_(k.notNull(h),function(){if(a.computed)l=
k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),q=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,q),d&&(d.computed=!0,d.name=l);else{Wa(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));q=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))q=k.ensureSafeObject(q);k.assign(c,
q);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case s.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),n=[],m(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c)}),q=l+"("+n.join(",")+")",k.assign(c,q),e(c)):(l=k.nextId(),h={},n=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);m(a.arguments,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(k.ensureSafeObject(a))})});
h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),q=k.member(h.context,h.name,h.computed)+"("+n.join(",")+")"):q=l+"("+n.join(",")+")";q=k.ensureSafeObject(q);k.assign(c,q)},function(){k.assign(c,"undefined")});e(c)}));break;case s.AssignmentExpression:l=this.nextId();h={};if(!od(a.left))throw da("lval");this.recurse(a.left,t,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));q=k.member(h.context,h.name,
h.computed)+a.operator+l;k.assign(c,q);e(c||q)})},1);break;case s.ArrayExpression:n=[];m(a.elements,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(a)})});q="["+n.join(",")+"]";this.assign(c,q);e(q);break;case s.ObjectExpression:n=[];m(a.properties,function(a){k.recurse(a.value,k.nextId(),t,function(c){n.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+c)})});q="{"+n.join(",")+"}";this.assign(c,q);e(q);break;case s.ThisExpression:this.assign(c,"s");e("s");break;case s.NGValueParameter:this.assign(c,
"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",
a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(I(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(X(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw da("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
sd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,g;if(f=pd(e))g=this.recurse(f);f=nd(e.body);var h;f&&(h=[],m(f,function(a,c){var e=d.recurse(a);a.input=e;h.push(e);a.watchId=c}));var l=[];m(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;m(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=
h);f.literal=qd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,c);case s.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case s.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case s.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
f,c);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case s.Identifier:return Wa(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Fb(a.name),c,d,g.expression);case s.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Wa(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,
g.expensiveChecks,c,d,g.expression);case s.CallExpression:return h=[],m(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var r=[],m=0;m<h.length;++m)r.push(h[m](a,d,e,g));a=f.apply(t,r,g);return c?{context:t,name:t,value:a}:a}:function(a,d,e,q){var r=f(a,d,e,q),m;if(null!=r.value){Ba(r.context,g.expression);ld(r.value,g.expression);m=[];for(var s=0;s<h.length;++s)m.push(Ba(h[s](a,d,e,q),
g.expression));m=Ba(r.value.apply(r.context,m),g.expression)}return c?{value:m}:m};case s.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,q){var m=e(a,d,h,q);a=f(a,d,h,q);Ba(m.value,g.expression);m.context[m.name]=a;return c?{value:a}:a};case s.ArrayExpression:return h=[],m(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],m=0;m<h.length;++m)g.push(h[m](a,d,e,f));return c?{value:g}:g};case s.ObjectExpression:return h=[],m(a.properties,
function(a){h.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},m=0;m<h.length;++m)g[h[m].key]=h[m].value(a,d,e,f);return c?{value:g}:g};case s.ThisExpression:return function(a){return c?{value:a}:a};case s.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=x(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);
d=x(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=md(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(x(l)?l:0)-(x(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=
a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:t,name:t,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:t;c&&Ba(h,f);return d?{context:g,name:a,value:h}:h}},
computedMember:function(a,c,d,e,f){return function(g,h,l,k){var n=a(g,h,l,k),q,m;null!=n&&(q=c(g,h,l,k),Wa(q,f),e&&1!==e&&n&&!n[q]&&(n[q]={}),m=n[q],Ba(m,f));return d?{context:n,name:q,value:m}:m}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,n){h=a(h,l,k,n);f&&1!==f&&h&&!h[c]&&(h[c]={});l=null!=h?h[c]:t;(d||Fb(c))&&Ba(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var fc=function(a,c,d){this.lexer=a;this.$filter=
c;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new sd(this.ast,c):new rd(this.ast,c)};fc.prototype={constructor:fc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ga();ga();var Yf=Object.prototype.valueOf,Ca=L("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ea=L("$compile"),Z=W.createElement("a"),wd=Aa(O.location.href);xd.$inject=["$document"];Jc.$inject=["$provide"];yd.$inject=["$locale"];Ad.$inject=["$locale"];
var Dd=".",hg={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":
"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Fd(2),w:Fd(1),G:hc,GG:hc,GGG:hc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},gg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,fg=/^\-?\d+$/;zd.$inject=["$locale"];var cg=qa(M),dg=qa(rb);Bd.$inject=["$parse"];var he=qa({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===sa.call(c.prop("href"))?
"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),sb={};m(Ab,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=va("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});sb[e]=function(){return{restrict:"A",priority:100,link:f}}}});m(Sc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(jg))){f.$set("ngPattern",
new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});m(["src","srcset","href"],function(a){var c=va("ng-"+a);sb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Va&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,c){a.$name=c},$removeControl:v,$setValidity:v,
$setDirty:v,$setPristine:v,$setSubmitted:v};Gd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Od=function(a){return["$timeout","$parse",function(c,d){function e(a){return""===a?d('this[""]').assign:d(a).assign||v}return{name:"form",restrict:a?"EAC":"E",controller:Gd,compile:function(d,g){d.addClass(Xa).addClass(lb);var h=g.name?"name":a&&g.ngForm?"ngForm":!1;return{pre:function(a,d,f,g){if(!("action"in f)){var m=function(c){a.$apply(function(){g.$commitViewValue();g.$setSubmitted()});
c.preventDefault()};d[0].addEventListener("submit",m,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",m,!1)},0,!1)})}var s=g.$$parentForm,B=h?e(g.$name):v;h&&(B(a,g),f.$observe(h,function(c){g.$name!==c&&(B(a,t),s.$$renameControl(g,c),B=e(g.$name),B(a,g))}));d.on("$destroy",function(){s.$removeControl(g);B(a,t);Q(g,Ib)})}}}}}]},ie=Od(),ve=Od(!0),ig=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,sg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
tg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ug=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Pd=/^(\d{4})-(\d{2})-(\d{2})$/,Qd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,kc=/^(\d{4})-W(\d\d)$/,Rd=/^(\d{4})-(\d\d)$/,Sd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Td={text:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);ic(e)},date:jb("date",Pd,Kb(Pd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",Qd,Kb(Qd,
"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Sd,Kb(Sd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",kc,function(a,c){if(ca(a))return a;if(I(a)){kc.lastIndex=0;var d=kc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=Ed(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:jb("month",Rd,Kb(Rd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Id(a,
c,d,e);ib(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:ug.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!X(a))throw kb("numfmt",a);a=a.toString()}return a});if(x(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||y(h)||a>=h};d.$observe("min",function(a){x(a)&&!X(a)&&(a=parseFloat(a,10));h=X(a)&&!isNaN(a)?a:t;e.$validate()})}if(x(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||
y(l)||a<=l};d.$observe("max",function(a){x(a)&&!X(a)&&(a=parseFloat(a,10));l=X(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);ic(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||sg.test(d)}},email:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);ic(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||tg.test(d)}},radio:function(a,c,d,e){y(d.name)&&c.attr("name",++mb);c.on("click",function(a){c[0].checked&&
e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Jd(l,a,"ngTrueValue",d.ngTrueValue,!0),n=Jd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:v,
button:v,submit:v,reset:v,file:v},Dc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Td[M(h.type)]||Td.text)(f,g,h,l[0],c,a,d,e)}}}}],vg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,c){return vg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ne=["$compile",function(a){return{restrict:"AC",
compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],pe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],oe=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",
compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Me=qa({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),qe=jc("",!0),se=jc("Odd",0),re=jc("Even",1),te=Ma({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",
scope:!0,controller:"@",priority:500}}],Ic={},wg={blur:!0,focus:!0};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=va("ng-"+a);Ic[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};wg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var xe=["$animate",
function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=qb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],ye=["$templateRequest","$anchorScroll","$animate",function(a,c,d){return{restrict:"ECA",priority:400,
terminal:!0,transclude:"element",controller:aa.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||"",l=f.autoscroll;return function(e,f,m,r,s){var t=0,v,w,p,A=function(){w&&(w.remove(),w=null);v&&(v.$destroy(),v=null);p&&(d.leave(p).then(function(){w=null}),w=p,p=null)};e.$watch(g,function(g){var m=function(){!x(l)||l&&!e.$eval(l)||c()},q=++t;g?(a(g,!0).then(function(a){if(q===t){var c=e.$new();r.template=a;a=s(c,function(a){A();d.enter(a,null,f).then(m)});v=c;p=a;v.$emit("$includeContentLoaded",
g);e.$eval(h)}},function(){q===t&&(A(),e.$emit("$includeContentError",g))}),e.$emit("$includeContentRequested",g)):(A(),r.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(f.template,W).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ze=Ma({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?T(f):f;e.$parsers.push(function(a){if(!y(a)){var c=[];a&&m(a.split(h),function(a){a&&c.push(g?T(a):a)});return c}});e.$formatters.push(function(a){return G(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",Kd="ng-invalid",Xa="ng-pristine",Jb="ng-dirty",Md="ng-pending",kb=L("ngModel"),xg=["$scope","$exceptionHandler","$attrs",
"$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||"",!1)(a);var q=f(d.ngModel),r=q.assign,s=q,B=r,
K=null,w,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");s=function(a){var d=q(a);C(d)&&(d=c(a));return d};B=function(a,c){C(q(a))?g(a,{$$$p:p.$modelValue}):r(a,p.$modelValue)}}else if(!q.assign)throw kb("nonassign",d.ngModel,ua(e));};this.$render=v;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};var A=e.inheritedData("$formController")||Ib,z=0;Hd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,
c){delete a[c]},parentForm:A,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Xa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Xa);g.addClass(e,Jb);A.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(K);p.$viewValue=
p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!X(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;m(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(m(p.$asyncValidators,function(a,
c){g(c,null)}),!1)}function f(){var d=[],e=!0;m(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!C(k.then))throw kb("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},v):h(!0)}function g(a,c){l===z&&p.$setValidity(a,c)}function h(a){l===z&&d(a)}z++;var l=z;(function(){var a=p.$$parserName||"parse";if(w===t)g(a,null);else return w||(m(p.$validators,function(a,c){g(c,null)}),m(p.$asyncValidators,function(a,c){g(c,
null)})),g(a,w),w;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(K);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(w=y(c)?t:!0)for(var d=0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),y(c)){w=!1;break}X(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=s(a));var e=p.$modelValue,
f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:t,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){B(a,p.$modelValue);m(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=
function(c){var d=0,e=p.$options;e&&x(e.debounce)&&(e=e.debounce,X(e)?d=e:X(e[c])?d=e[c]:X(e["default"])&&(d=e["default"]));h.cancel(K);d?K=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=s(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=p.$$rawModelValue=c;w=t;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),
p.$$runValidators(c,f,v))}return c})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:xg,priority:1,compile:function(c){c.addClass(Xa).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&
h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],yg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=fa(a.$eval(c.ngModelOptions));this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(yg,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=Ma({terminal:!0,priority:1E3}),zg=L("ngOptions"),Ag=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}
function n(a){var c;if(!s&&Da(a))c=a;else{c=[];for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&c.push(d)}return c}var m=a.match(Ag);if(!m)throw zg("iexp",a,ua(d));var r=m[5]||m[7],s=m[6];a=/ as /.test(m[0])&&m[1];var t=m[9];d=c(m[2]?m[1]:r);var v=a&&c(a)||d,w=t&&c(t),p=t?function(a,c){return w(e,c)}:function(a){return Ga(a)},A=function(a,c){return p(a,C(a,c))},x=c(m[2]||m[1]),z=c(m[3]||""),y=c(m[4]||""),J=c(m[8]),F={},C=s?function(a,c){F[s]=c;F[r]=a;return F}:function(a){F[r]=a;return F};return{trackBy:t,
getTrackByValue:A,getWatchables:c(J,function(a){var c=[];a=a||[];for(var d=n(a),f=d.length,g=0;g<f;g++){var h=a===d?g:d[g],k=C(a[h],h),h=p(a[h],k);c.push(h);if(m[2]||m[1])h=x(e,k),c.push(h);m[4]&&(k=y(e,k),c.push(k))}return c}),getOptions:function(){for(var a=[],c={},d=J(e)||[],g=n(d),h=g.length,m=0;m<h;m++){var q=d===g?m:g[m],r=C(d[q],q),s=v(e,r),q=p(s,r),u=x(e,r),w=z(e,r),r=y(e,r),s=new f(q,s,u,w,r);a.push(s);c[q]=s}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[A(a)]},
getViewValueFromOption:function(a){return t?aa.copy(a.viewValue):a.viewValue}}}}}var e=W.createElement("option"),f=W.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,h,l,k){function n(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==c.label&&(c.label=a.label,c.textContent=a.label)}function q(a,c,d,e){c&&M(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function r(a){for(var c;a;)c=
a.nextSibling,Wb(a),a=c}function s(a){var c=p&&p[0],d=J&&J[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function t(){var a=F&&w.readValue();F=D.getOptions();var c={},d=h[0].firstChild;N&&h.prepend(p);d=s(d);F.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=q(h[0],d,"optgroup",f),d=g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=q(g.groupElement,g.currentOptionElement,"option",e),n(a,k),g.currentOptionElement=k.nextSibling):
(k=q(h[0],d,"option",e),n(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){r(c[a].currentOptionElement)});r(d);v.$render();if(!v.$isEmpty(a)){var g=w.readValue();(D.trackBy?ka(a,g):a===g)||(v.$setViewValue(g),v.$render())}}var v=k[1];if(v){var w=k[0];k=l.multiple;for(var p,x=0,y=h.children(),C=y.length;x<C;x++)if(""===y[x].value){p=y.eq(x);break}var N=!!p,J=z(e.cloneNode(!1));J.val("?");var F,D=d(l.ngOptions,h,c);k?(v.$isEmpty=function(a){return!a||0===a.length},w.writeValue=function(a){F.items.forEach(function(a){a.element.selected=
!1});a&&a.forEach(function(a){(a=F.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},w.readValue=function(){var a=h.val()||[],c=[];m(a,function(a){(a=F.selectValueMap[a])&&!a.disabled&&c.push(F.getViewValueFromOption(a))});return c},D.trackBy&&c.$watchCollection(function(){if(G(v.$viewValue))return v.$viewValue.map(function(a){return D.getTrackByValue(a)})},function(){v.$render()})):(w.writeValue=function(a){var c=F.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&
(J.remove(),N||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||N?(J.remove(),N||h.prepend(p),h.val(""),p.prop("selected",!0),p.attr("selected",!0)):(N||p.remove(),h.prepend(J),h.val("?"),J.prop("selected",!0),J.attr("selected",!0))},w.readValue=function(){var a=F.selectValueMap[h.val()];return a&&!a.disabled?(N||p.remove(),J.remove(),F.getViewValueFromOption(a)):null},D.trackBy&&c.$watch(function(){return D.getTrackByValue(v.$viewValue)},
function(){v.$render()}));N?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=z(e.cloneNode(!1));t();c.$watchCollection(D.getWatchables,t)}}}}],Be=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||"")}var n=l.count,q=l.$attr.when&&h.attr(l.$attr.when),r=l.offset||0,s=g.$eval(q)||{},t={},x=c.startSymbol(),w=c.endSymbol(),p=x+n+"-"+r+w,A=aa.noop,z;m(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+M(d[2]),s[d]=h.attr(l.$attr[c]))});
m(s,function(a,d){t[d]=c(a.replace(e,p))});g.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f||e in s||(e=a.pluralCat(e-r));e===z||f&&X(z)&&isNaN(z)||(A(),f=t[e],y(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+q),A=v,k()):A=g.$watch(f,k),z=e)})}}}],Ce=["$parse","$animate",function(a,c){var d=L("ngRepeat"),e=function(a,c,d,e,k,n,m){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",
multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],q=k[2],r=k[3],s=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var v=k[3]||k[1],x=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",
r);var w,p,A,y,C={$id:Ga};s?w=a(s):(A=function(a,c){return Ga(c)},y=function(a){return a});return function(a,f,g,k,n){w&&(p=function(c,d,e){x&&(C[x]=c);C[v]=d;C.$index=e;return w(a,C)});var s=ga();a.$watchCollection(q,function(g){var k,q,u=f[0],w,C=ga(),D,F,I,G,L,H,M;r&&(a[r]=g);if(Da(g))L=g,q=p||A;else for(M in q=p||y,L=[],g)g.hasOwnProperty(M)&&"$"!==M.charAt(0)&&L.push(M);D=L.length;M=Array(D);for(k=0;k<D;k++)if(F=g===L?k:L[k],I=g[F],G=q(F,I,k),s[G])H=s[G],delete s[G],C[G]=H,M[k]=H;else{if(C[G])throw m(M,
function(a){a&&a.scope&&(s[a.id]=a)}),d("dupes",h,G,I);M[k]={id:G,scope:t,clone:t};C[G]=!0}for(w in s){H=s[w];G=qb(H.clone);c.leave(G);if(G[0].parentNode)for(k=0,q=G.length;k<q;k++)G[k].$$NG_REMOVED=!0;H.scope.$destroy()}for(k=0;k<D;k++)if(F=g===L?k:L[k],I=g[F],H=M[k],H.scope){w=u;do w=w.nextSibling;while(w&&w.$$NG_REMOVED);H.clone[0]!=w&&c.move(qb(H.clone),null,z(u));u=H.clone[H.clone.length-1];e(H.scope,k,v,I,x,F,D)}else n(function(a,d){H.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,z(u));u=f;H.clone=a;C[H.id]=H;e(H.scope,k,v,I,x,F,D)});s=C})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=Ma(function(a,c,d){a.$watch(d.ngStyle,
function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=qb(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}h.length=0;k.length=0;(g=f.cases["!"+
c]||f.cases["?"])&&m(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ge=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),He=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Je=Ma({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw L("ngTransclude")("orphan",ua(c));f(function(a){c.empty();c.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Bg={$setViewValue:v,$render:v},Cg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Ua;e.ngModelCtrl=Bg;e.unknownOption=z(W.createElement("option"));
e.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=v});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};
e.addOption=function(a,c){Ta(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=t)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:Cg,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});
if(d.multiple){g.readValue=function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=new Ua(a);m(c.find("option"),function(a){a.selected=x(d.get(a.value))})};var h,l=NaN;a.$watch(function(){l!==f.$viewValue||ka(h,f.$viewValue)||(h=ia(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},me=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",
priority:100,compile:function(d,e){if(y(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.ngModelCtrl&&(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],le=qa({restrict:"E",
terminal:!1}),Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw L("ngPattern")("noregexp",g,a,ua(c));f=a||t;e.$validate()});
e.$validators.pattern=function(a){return e.$isEmpty(a)||y(f)||f.test(a)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=Y(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=Y(a)||0;e.$validate()});e.$validators.minlength=function(a,
c){return e.$isEmpty(c)||c.length>=f}}}}};O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ce(),ee(aa),aa.module("ngLocale",[],["$provide",function(a){function c(a){a+="";var c=a.indexOf(".");return-1==c?0:a.length-c-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,
maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,e){var f=a|0,g=e;t===g&&(g=Math.min(c(a),3));Math.pow(10,g);return 1==f&&0==g?"one":"other"}})}]),z(W).ready(function(){Zd(W,yc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*! tabex 1.0.3 https://github.com//nodeca/tabex @license MIT */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.tabex = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = require('./lib');

},{"./lib":3}],2:[function(require,module,exports){
// Base client class
//
'use strict';


var $$ = require('./utils');


// Client
//
// options:
//
//  - router (RouterLS)
//
function Client(options) {
  var self = this;

  // Filers
  this.__filters_in__ = [];
  this.__filters_out__ = [];

  // Subscriptions
  this.__subscriptions__ = [];

  // Current node id
  this.__node_id__ = Math.floor(Math.random() * 1e10) + 1;

  // Message incremental counter
  this.__last_message_cnt__ = 0;

  // List of ignoring messages
  this.__ignore_list__ = {};

  // Router
  this.__router__ = options.router;

  this.__router__.onmessage(function (channel, message) {
    self.__onmessage__(channel, message);
  });

  // Lock handlers
  this.__lock_handlers__ = {};

  // If client make lock request - store handler and remove it from message
  this.filterOut(function (channel, message, callback) {
    if (channel === '!sys.lock.request') {
      var fn = message.data.fn;
      var lockId = message.data.id;

      delete message.data.fn;

      // Wrap handler to pass unlock function into it
      self.__lock_handlers__[message.id] = function () {
        fn(function unlock() {
          self.emit('!sys.lock.release', { id: lockId });
        });
      };
    }

    callback(channel, message);
  });

  // If lock acquired - execute handler
  this.filterIn(function (channel, message, callback) {
    if (channel === '!sys.lock.acquired' && self.__lock_handlers__[message.data.request_id]) {
      self.__lock_handlers__[message.data.request_id]();
      delete self.__lock_handlers__[message.data.request_id];
    }

    callback(channel, message);
  });
}


// Send message
//
// - channel (String) - channel name
// - message (Object) - message data
// - toSelf (Boolean) - optional, send message also to current client, default false
//
Client.prototype.emit = function (channel, message, toSelf) {
  var self = this;

  var wrappedMessage = {
    id: this.__node_id__ + '_' + (this.__last_message_cnt__++),
    node_id: this.__node_id__,
    data: message
  };

  if (!toSelf) {
    this.__ignore_list__[wrappedMessage.id] = true;
  }

  // Apply out filters
  $$.asyncEach(this.__filters_out__, channel, wrappedMessage, function (ch, msg) {
    self.__router__.broadcast(ch, msg);
  });
};


// Subscribe channel
//
// - channel (String) - channel name
// - handler (Function) - channel handler
//
Client.prototype.on = function (channel, handler) {
  this.__subscriptions__.push({
    channel: channel,
    handler: handler
  });

  this.emit('!sys.channels.add', { channel: channel });

  return this;
};


// Unsubscribe channel
//
// - channel (String) - channel name
// - handler (Function) - optional, all if not set
//
Client.prototype.off = function (channel, handler) {
  var self = this;

  this.__subscriptions__ = this.__subscriptions__.reduce(function (result, subscription) {
    if (subscription.channel === channel && (!handler || handler === subscription.handler)) {
      self.emit('!sys.channels.remove', { channel: channel });
      return result;
    }

    result.push(subscription);

    return result;
  }, []);
};


// Try acquire lock and exec `fn` if success
//
// - id - lock identifier
// - timeout - optional, lock lifetime in ms, default `5000`
// - fn - handler will be executed if lock is acquired
//
Client.prototype.lock = function (id, timeout, fn) {
  if (!fn) {
    fn = timeout;
    timeout = 5000;
  }

  this.emit('!sys.lock.request', { id: id, timeout: timeout, fn: fn });
};


// Filter input messages
//
// - fn (Function) - `function (channel, message, callback)`, handler for each input message
//   - callback (Function) - `function (channel, message)`
//
Client.prototype.filterIn = function (fn) {
  this.__filters_in__.push(fn);

  return this;
};


// Filter output messages
//
// - fn (Function) - `function (channel, message, callback)`, handler for each output message
//   - callback (Function) - `function (channel, message)`
//
Client.prototype.filterOut = function (fn) {
  this.__filters_out__.push(fn);

  return this;
};


// Receive message from router
//
Client.prototype.__onmessage__ = function (channel, message) {
  var self = this;

  // Apply in filters
  $$.asyncEach(this.__filters_in__, channel, message, function (ch, msg) {
    if (self.__ignore_list__[msg.id]) {
      return;
    }

    self.__subscriptions__.forEach(function (subscription) {
      if (subscription.channel === ch) {
        subscription.handler(msg.data, ch);
      }
    });
  });
};


module.exports = Client;

},{"./utils":8}],3:[function(require,module,exports){
'use strict';


var Router = require('./router');
var Client = require('./client');
var Tunnel = require('./tunnel');


var routerInstances = {};


var Tabex = { _: {} };


// Expose classes for testing
//
Tabex._.Router = Router;
Tabex._.Client = Client;
Tabex._.Tunnel = Tunnel;


// Create client
//
Tabex.client = function (options) {
  options = options || {};

  var namespace = options.namespace || 'tabex_default_';

  var router;

  // If router in iframe (cross-domain) - create tunnel
  if (options.iframe) {
    router = new Tunnel.TunnelClient(options);

  // If router is local (single-domain) - try to reuse existing router
  } else {
    if (!routerInstances[namespace]) {
      routerInstances[namespace] = new Router({
        namespace: namespace
      });
    }

    router = routerInstances[namespace];
  }

  return new Client({ router: router });
};


// Create router
//
Tabex.router = function (options) {
  options = options || {};

  var namespace = options.namespace || 'tabex_default_';

  // Try to reuse existing router
  if (!routerInstances[namespace]) {
    routerInstances[namespace] = new Router({
      namespace: namespace
    });
  }

  // Create tunnel to communicate between router and client
  /* eslint-disable no-new */
  new Tunnel.TunnelRouter({
    router: routerInstances[namespace],
    namespace: namespace,
    origin: options.origin
  });

  return routerInstances[namespace];
};


module.exports = Tabex;

},{"./client":2,"./router":5,"./tunnel":7}],4:[function(require,module,exports){
// localStorage wrapper with fallback to memory emulation
//
'use strict';


/* global navigator, document, window */
var localStorage = window.localStorage;


var fake_storage = {};

// Check is `localStorage` available and writable
//
var LS_OK = (function () {
  // IE 8 does not send `key` and `newValue` in event
  if (document.documentMode && document.documentMode < 9) { return false; }

  // In Chrome browser on iOS localStorage events are not emitted between tabs
  if (navigator.userAgent.match('CriOS')) { return false; }

  if (!localStorage) { return false; }

  try {
    localStorage.setItem('live_local_storage_is_writable_test', '');
    localStorage.removeItem('live_local_storage_is_writable_test');
  } catch (__) { return false; }

  return true;
})();


function LocalStorage() {
}


Object.defineProperty(LocalStorage.prototype, 'length', {
  get: function () {
    return LS_OK ? localStorage.length : Object.keys(fake_storage).length;
  }
});


LocalStorage.prototype.getItem = function (key) {
  return LS_OK ? localStorage.getItem(key) : fake_storage.hasOwnProperty(key) ? fake_storage[key] : null;
};


LocalStorage.prototype.setItem = function (key, val) {
  if (LS_OK) {
    localStorage.setItem(key, val);
  } else {
    fake_storage[key] = val;
  }
};


LocalStorage.prototype.removeItem = function (key) {
  if (LS_OK) {
    localStorage.removeItem(key);
  } else {
    fake_storage[key] = null;
  }
};


LocalStorage.prototype.key = function (index) {
  return LS_OK ? localStorage.key(index) : Object.keys(fake_storage)[index];
};


module.exports = LocalStorage;

},{}],5:[function(require,module,exports){
// LocalStorage router
//
'use strict';


/* global document, window */
var Timer = require('./timer');
var LocalStorage = require('./local_storage');
var $$ = require('./utils');


// Max lifetime of router record in storage
var TIMEOUT = 4000;
// Update router record frequency
var UPDATE_INTERVAL = TIMEOUT / 4;


// Constructor
//
// options:
//
//  - namespace (String) - optional, localStorage keys prefix, default 'tabex_default_'
//
function Router(options) {
  var self = this;

  options = options || {};

  this.__namespace__ = options.namespace || 'tabex_default_';
  this.__node_id__ = Math.floor(Math.random() * 1e10) + 1;
  this.__last_message_cnt__ = 0;
  this.__handlers__ = [];
  this.__router_channels__ = {};

  // Constants for convenience
  this.__router_id_prefix__ = this.__namespace__ + 'router_';
  this.__router_channels_prefix__ = this.__namespace__ + 'subscribed_';
  this.__lock_prefix__ = this.__namespace__ + 'lock_';

  // IE broadcasts storage events also to the same window, we should filter that messages
  this.__storage_events_filter__ = [];

  for (var i = 0; i < 100; i++) {
    this.__storage_events_filter__.push('');
  }

  this.__ls__ = new LocalStorage();

  // Id of master tab
  this.__master_id__ = null;

  // Handle `localStorage` update
  $$.addEvent(window, 'storage', function (e) {
    // IE needs kludge because event fire before data was saved
    if ('onstoragecommit' in document) {
      setTimeout(function () {
        self.__on_changed__(e);
      }, 1);

      return;
    }

    self.__on_changed__(e);
  });

  // Handle page unload (listen `onbeforeunload` and `onunload` to ensure that data is stored successfully)
  // http://stackoverflow.com/questions/3775566/javascript-question-onbeforeunload-or-onunload
  //
  this.__destroyed__ = false;
  $$.addEvent(window, 'beforeunload', function () {
    self.__destroy__();
  });
  $$.addEvent(window, 'unload', function () {
    self.__destroy__();
  });

  // Update current tab info and check master alive
  this.__check_master__();
  Timer.setInterval(function () {
    self.__check_master__();
  }, UPDATE_INTERVAL);

  // Remove outdated lock records
  Timer.setInterval(function () {
    self.__locks_cleanup__();
  }, 1000);
}


// Broadcast message between all clients
//
// - channel (String) - channel name
// - message (Object) - message data
//
Router.prototype.broadcast = function (channel, message) {
  // If it is system subscribe message - update channels list
  if (channel === '!sys.channels.add') {
    this.__router_channels__[message.data.channel] = this.__router_channels__[message.data.channel] || 0;
    this.__router_channels__[message.data.channel]++;
    this.__update_channels_list__();

    return;
  }

  // If it is system unsubscribe message - update channels list
  if (channel === '!sys.channels.remove') {
    this.__router_channels__[message.data.channel] = this.__router_channels__[message.data.channel] || 0;
    this.__router_channels__[message.data.channel]--;
    this.__update_channels_list__();

    return;
  }

  // If it is system lock message - try acquire lock
  if (channel === '!sys.lock.request') {
    this.__lock__(message.data.id, message.id, message.data.timeout);

    return;
  }

  // If it is system unlock message - remove lock data
  if (channel === '!sys.lock.release') {
    this.__ls__.removeItem(this.__lock_prefix__ + message.data.id);

    return;
  }

  var serializedMessage = JSON.stringify({
    channel: channel,
    message: message,

    // Add random to be sure that `localStorage` sent event even new massage is same than previous
    random: Math.floor(Math.random() * 1e10)
  });

  // Add message to `localStorage` to distribute over Router instances
  this.__storage_events_filter__.shift();
  this.__storage_events_filter__.push(this.__namespace__ + 'broadcast' + '_' + serializedMessage);
  this.__ls__.setItem(this.__namespace__ + 'broadcast', serializedMessage);

  // Emit message for all clients and proxies registered on this router
  this.__handlers__.forEach(function (handler) {
    handler(channel, message);
  });
};


// Subscribe handler to all messages
//
Router.prototype.onmessage = function (handler) {
  var self = this;

  this.__handlers__.push(handler);

  // Delay sending events to next tick to allow client initialize handlers
  setTimeout(function () {
    // Sent master info for every new client
    handler('!sys.master', {
      data: {
        node_id: self.__node_id__,
        master_id: self.__master_id__
      },
      node_id: self.__node_id__,
      id: self.__node_id__ + '_' + (self.__last_message_cnt__++)
    });

    // Send channels info
    self.__on_channels_list_changed__();
  }, 0);
};


// Try acquire lock
//
// - lockId (String)
// - requestId (String)
// - timeout (Number)
//
Router.prototype.__lock__ = function (lockId, requestId, timeout) {
  var self = this;
  var lockKey = this.__lock_prefix__ + lockId;
  var lockValue = this.__ls__.getItem(lockKey);

  if (lockValue) {
    try {
      lockValue = JSON.parse(lockValue);
    } catch (__) {
      lockValue = null;
    }
  }

  // If `expire` not in past - lock already acquired, exit here
  if (lockValue && lockValue.expire > Date.now()) {
    return;
  }

  // Try acquire lock
  this.__ls__.setItem(lockKey, JSON.stringify({ expire: timeout + Date.now(), requestId: requestId }));

  // Read lock value again after 30 ms to check `requestId` (race condition
  // here - other tab may rewrite value in store). Delay needed to ensure that
  // localStorage's data synchronized
  setTimeout(function () {
    lockValue = self.__ls__.getItem(lockKey);

    if (lockValue) {
      try {
        lockValue = JSON.parse(lockValue);
      } catch (__) {
        lockValue = null;
      }
    }

    // If `requestId` is not same - other tab acquire lock, exit here
    if (!lockValue || lockValue.requestId !== requestId) {
      return;
    }

    // Here lock acquired - send message to clients
    self.__handlers__.forEach(function (handler) {
      handler('!sys.lock.acquired', {
        data: {
          request_id: requestId
        },
        node_id: self.__node_id__,
        id: self.__node_id__ + '_' + (self.__last_message_cnt__++)
      });
    });
  }, 30);
};


// Remove outdated lock records from storage
//
Router.prototype.__locks_cleanup__ = function () {
  for (var i = 0, key, val; i < this.__ls__.length; i++) {
    key = this.__ls__.key(i);

    // Filter localStorage records by prefix
    if (key.indexOf(this.__lock_prefix__) !== 0) {
      continue;
    }

    val = this.__ls__.getItem(key);

    try {
      val = JSON.parse(val);
    } catch (__) {
      val = null;
    }

    // If lock expire or record is broken - remove it
    if (!val || val.expire < Date.now()) {
      this.__ls__.removeItem(key);
    }
  }
};


// Update master id, if current tab is master - init connect and subscribe channels
//
Router.prototype.__on_master_changed__ = function (newMasterID) {
  var self = this;

  // If master tab closed
  if (!newMasterID) {
    // Select random master (tab with smallest ID becomes master)
    if (this.__get_alive_router_ids__().sort()[0] === this.__node_id__) {
      this.__storage_events_filter__.pop();
      this.__storage_events_filter__.push(this.__namespace__ + 'master' + '_' + this.__node_id__);
      this.__ls__.setItem(this.__namespace__ + 'master', this.__node_id__);
      this.__on_master_changed__(this.__node_id__);
    }
    return;
  }

  this.__master_id__ = +newMasterID;

  this.__handlers__.forEach(function (handler) {
    handler('!sys.master', {
      data: {
        node_id: self.__node_id__,
        master_id: self.__master_id__
      },
      node_id: self.__node_id__,
      id: self.__node_id__ + '_' + (self.__last_message_cnt__++)
    });
  });
};


// localStorage change handler. Updates master ID, receive subscribe requests
//
Router.prototype.__on_changed__ = function (e) {

  // IE broadcasts storage events also to the same window, we should filter that messages
  if (this.__storage_events_filter__.indexOf(e.key + '_' + e.newValue) !== -1) {
    return;
  }

  // Master changed
  if (e.key === this.__namespace__ + 'master') {
    this.__on_master_changed__(e.newValue);
  }

  // Channels list changed
  if (e.key.indexOf(this.__router_channels_prefix__) === 0) {
    this.__on_channels_list_changed__();
  }

  // Emit message for all clients and proxies registered on this router
  if (e.key === this.__namespace__ + 'broadcast') {
    var data = JSON.parse(e.newValue);

    this.__handlers__.forEach(function (handler) {
      handler(data.channel, data.message);
    });
  }
};


// Page unload handler. Remove tab data from store
//
Router.prototype.__destroy__ = function () {
  if (this.__destroyed__) {
    return;
  }

  this.__destroyed__ = true;

  this.__ls__.removeItem(this.__router_id_prefix__ + this.__node_id__);
  this.__ls__.removeItem(this.__router_channels_prefix__ + this.__node_id__);

  if (this.__master_id__ === this.__node_id__) {
    this.__ls__.removeItem(this.__namespace__ + 'master');
  }
};


// Get alive tabs IDs and remove timeouted tabs
//
Router.prototype.__get_alive_router_ids__ = function () {
  var maxTime = Date.now() - TIMEOUT;
  var id;
  var routersIDs = [];

  for (var i = 0, key; i < this.__ls__.length; i++) {
    key = this.__ls__.key(i);

    // Filter localStorage records by prefix
    if (key.indexOf(this.__router_id_prefix__) !== 0) {
      continue;
    }

    id = +key.substr(this.__router_id_prefix__.length);

    // Check router is alive and remove if not
    if (this.__ls__.getItem(key) < maxTime) {
      this.__ls__.removeItem(key);
      this.__ls__.removeItem(this.__router_channels_prefix__ + id);
      continue;
    }

    routersIDs.push(id);
  }

  return routersIDs;
};


// Update tab channels list
//
Router.prototype.__update_channels_list__ = function () {
  var self = this;
  var channels = [];

  Object.keys(this.__router_channels__).forEach(function (channel) {
    if (self.__router_channels__[channel] > 0) {
      channels.push(channel);
    }
  });

  var serializedChannels = JSON.stringify(channels.sort());

  // Update channels list if changed
  if (this.__ls__.getItem(this.__router_channels_prefix__ + this.__node_id__) !== serializedChannels) {
    this.__storage_events_filter__.pop();
    this.__storage_events_filter__.push(this.__router_channels_prefix__ + this.__node_id__ + '_' + serializedChannels);
    this.__ls__.setItem(this.__router_channels_prefix__ + this.__node_id__, serializedChannels);
    this.__on_channels_list_changed__();
  }
};


// Update subscribes if channels list changed (run only on master)
//
Router.prototype.__on_channels_list_changed__ = function () {
  var self = this;
  var channels = [];

  for (var i = 0, key; i < this.__ls__.length; i++) {
    key = this.__ls__.key(i);

    // Filter localStorage records by prefix
    if (key.indexOf(this.__router_channels_prefix__) !== 0) {
      continue;
    }

    channels = channels.concat(JSON.parse(this.__ls__.getItem(key)));
  }

  // Get unique channels names
  channels = channels.reduce(function (result, item) {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
    return result;
  }, []);

  this.__handlers__.forEach(function (handler) {
    handler('!sys.channels.refresh', {
      id: self.__node_id__ + '_' + (self.__last_message_cnt__++),
      node_id: self.__node_id__,
      data: {
        channels: channels
      }
    });
  });
};


// Update tab livetime and become master if not exists
//
Router.prototype.__check_master__ = function () {
  // Update current tab time
  this.__ls__.setItem(this.__router_id_prefix__ + this.__node_id__, Date.now());

  // Update local value of master ID
  this.__master_id__ = +this.__ls__.getItem(this.__namespace__ + 'master');

  // If master tab not found - become master
  if (this.__get_alive_router_ids__().indexOf(this.__master_id__) === -1) {
    this.__storage_events_filter__.pop();
    this.__storage_events_filter__.push(this.__namespace__ + 'master' + '_' + this.__node_id__);
    this.__ls__.setItem(this.__namespace__ + 'master', this.__node_id__);
    this.__on_master_changed__(this.__node_id__);
  }
};


module.exports = Router;

},{"./local_storage":4,"./timer":6,"./utils":8}],6:[function(require,module,exports){
// Timers through web workers or fallback to basic if web workers not supported
//
'use strict';


/* global window */
var URL = window.URL;
var Blob = window.Blob;
var Worker = window.Worker;


///////////////////////////////////////////////////////////////////////////////
// Manage timers in web worker
//
function WorkerFn(root) {
  var timers = {};

  root.onmessage = function (event) {
    switch (event.data.type) {
      case 'ping':
        root.postMessage({ type: 'pong' });
        break;

      case 'set_timeout':
        timers[event.data.id] = setTimeout(function () {
          root.postMessage({ type: 'tick', id: event.data.id });
        }, event.data.delay);
        break;

      case 'clear_timeout':
        clearTimeout(timers[event.data.id]);
        break;

      case 'set_interval':
        timers[event.data.id] = setInterval(function () {
          root.postMessage({ type: 'tick', id: event.data.id });
        }, event.data.interval);
        break;

      case 'clear_interval':
        clearInterval(timers[event.data.id]);
        break;
    }
  };
}


///////////////////////////////////////////////////////////////////////////////
// Communicate with web worker to create/destroy timers
//
function TimerWorker(ww) {
  var self = this;

  this.__ww__ = ww;
  this.__timer_handlers__ = {};

  this.__ww__.onmessage = function (event) {
    if (event.data.type === 'tick') {
      self.__timer_handlers__[event.data.id]();
    }
  };
}


TimerWorker.prototype.setTimeout = function (id, fn, delay) {
  this.__timer_handlers__[id] = fn;
  this.__ww__.postMessage({ type: 'set_timeout', delay: delay, id: id });
};


TimerWorker.prototype.clearTimeout = function (id) {
  this.__ww__.postMessage({ type: 'clear_timeout', id: id });
  delete this.__timer_handlers__[id];
};


TimerWorker.prototype.setInterval = function (id, fn, interval) {
  this.__timer_handlers__[id] = fn;
  this.__ww__.postMessage({ type: 'set_interval', interval: interval, id: id });
};


TimerWorker.prototype.clearInterval = function (id) {
  this.__ww__.postMessage({ type: 'clear_interval', id: id });
  delete this.__timer_handlers__[id];
};


///////////////////////////////////////////////////////////////////////////////
// Basic timers API wrapper
//
function TimerStd() {
  this.__timers__ = {};
}


TimerStd.prototype.setTimeout = function (id, fn, delay) {
  this.__timers__[id] = setTimeout(fn, delay);
};


TimerStd.prototype.clearTimeout = function (id) {
  clearInterval(this.__timers__[id]);
};


TimerStd.prototype.setInterval = function (id, fn, interval) {
  this.__timers__[id] = setInterval(fn, interval);
};


TimerStd.prototype.clearInterval = function (id) {
  clearInterval(this.__timers__[id]);
};


///////////////////////////////////////////////////////////////////////////////
// Detect feature and select interface
//
var currentTimer = null;
var pendingCallbacks = [];

function getTimer(callback) {
  // If interface already selected - use it
  if (currentTimer) {
    callback(currentTimer);
    return;
  }

  // Add pending callback
  pendingCallbacks.push(callback);

  // If it is not first call - just wait feature detection finish
  if (pendingCallbacks.length !== 1) {
    return;
  }

  var timeout, url, ww;

  // Remove created data on fallback
  function cleanup() {
    if (url) { URL.revokeObjectURL(url); }
    if (ww) { ww.terminate(); }
    if (timeout) { clearTimeout(timeout); }
  }

  // Try create worker
  try {
    url = URL.createObjectURL(
      new Blob([ '(' + WorkerFn.toString() + ')(this)' ], { type: 'text/javascript' })
    );

    ww = new Worker(url);

  // Can not create worker - fallback to base API
  } catch (__) {
    cleanup();
    currentTimer = new TimerStd();

    pendingCallbacks.forEach(function (cb) {
      cb(currentTimer);
    });
    return;
  }

  // Wait 'pong' message from worker
  ww.onmessage = function (event) {
    if (event.data.type === 'pong') {
      clearInterval(timeout);
      currentTimer = new TimerWorker(ww);

      pendingCallbacks.forEach(function (cb) {
        cb(currentTimer);
      });
    }
  };

  // If no incoming messages from worker - fail (fallback to base API)
  timeout = setTimeout(function () {
    cleanup();
    currentTimer = new TimerStd();

    pendingCallbacks.forEach(function (cb) {
      cb(currentTimer);
    });
  }, 300);

  // Send message to worker
  ww.postMessage({ type: 'ping' });
}


///////////////////////////////////////////////////////////////////////////////
// Exposed API
//

// Incremental timer id for `clearTimeout` and `clearInterval`
//
var idCounter = 1;


// Set timeout
//
// - fn (Function) - timeout handler
// - delay (Number) - delay in ms
//
exports.setTimeout = function (fn, delay) {
  var id = idCounter++;

  getTimer(function (timer) {
    timer.setTimeout(id, fn, delay);
  });

  return id;
};


// Clear timeout
//
// - id (Number) - id returned by `setTimeout`
//
exports.clearTimeout = function (id) {
  getTimer(function (timer) {
    timer.clearTimeout(id);
  });
};


// Set interval
//
// - fn (Function) - tick handler
// - interval (Number) - interval in ms
//
exports.setInterval = function (fn, interval) {
  var id = idCounter++;

  getTimer(function (timer) {
    timer.setInterval(id, fn, interval);
  });

  return id;
};


// Clear interval
//
// - id (Number) - id returned by `setInterval`
//
exports.clearInterval = function (id) {
  getTimer(function (timer) {
    timer.clearInterval(id);
  });
};

},{}],7:[function(require,module,exports){
// Tunnel to communicate between client in root window and router in iframe
//
'use strict';


/* global document, window */
var $$ = require('./utils');


///////////////////////////////////////////////////////////////////////////////
// Tunnel for client
//
// options:
//
//  - iframe (String) - iframe url
//  - namespace (String) - optional, messages namespace, default 'tabex_default_'
//
function TunnelClient(options) {
  var self = this;

  this.__namespace__ = options.namespace || 'tabex_default_';
  this.__handlers__ = [];

  this.__iframe_url__ = options.iframe;
  this.__iframe_done__ = false;

  // Pending emits before iframe ready
  this.__pending__ = [];

  // Create iframe and hide it
  this.__iframe__ = document.createElement('iframe');
  this.__iframe__.style.left = '-1000px';
  this.__iframe__.style.position = 'absolute';

  // When iframe loaded - send all pending messages
  this.__iframe__.onload = function () {

    // Setup target for messages from iframe (we should not use `*` for security reasons)
    self.__iframe__.contentWindow.postMessage(JSON.stringify({
      // `window.location.origin` available from IE 11
      origin: window.location.origin || window.location.protocol + '//' + window.location.host,
      namespace: self.__namespace__
    }), self.__iframe_url__);

    self.__iframe_done__ = true;

    // Send all pending messages
    self.__pending__.forEach(function (data) {
      self.__iframe__.contentWindow.postMessage(JSON.stringify(data), self.__iframe_url__);
    });

    self.__pending__ = null;
  };

  // Listen messages from iframe
  $$.addEvent(window, 'message', function (event) {
    // Check sender origin
    if (self.__iframe_url__.indexOf(event.origin) !== 0) {
      return;
    }

    var data;

    try {
      data = JSON.parse(event.data);
    } catch (__) {
      return;
    }

    // Ignore messages from another namespace (and messages from other possible senders)
    if (data.namespace !== self.__namespace__) {
      return;
    }

    self.__handlers__.forEach(function (handler) {
      handler(data.channel, data.message);
    });
  });

  this.__iframe__.src = this.__iframe_url__;

  $$.addEvent(document, 'DOMContentLoaded', function () {
    document.querySelector('body').appendChild(self.__iframe__);
  });
}


// (Same as router API) Broadcast message between all clients
//
// - channel (String) - channel name
// - message (Object) - message data
//
TunnelClient.prototype.broadcast = function (channel, message) {
  // If iframe not loaded - save message locally
  if (!this.__iframe_done__) {
    this.__pending__.push({ channel: channel, message: message, namespace: this.__namespace__ });

  // Send message to iframe
  } else {
    this.__iframe__.contentWindow.postMessage(JSON.stringify({
      channel: channel,
      message: message,
      namespace: this.__namespace__
    }), this.__iframe_url__);
  }
};


// (Same as router API) Subscribe handler to all messages
//
TunnelClient.prototype.onmessage = function (handler) {
  this.__handlers__.push(handler);
};


///////////////////////////////////////////////////////////////////////////////
// Tunnel for router (in iframe)
//
// options:
//
//  - router (RouterLS)
//  - namespace (String) - optional, messages namespace, default 'tabex_default_'
//  - origin (String|Array) - optional, parent window origin to filter messages.
//    You can set `*` to allow everything, but that's not recommended for security
//    reasons. Default iframe origin
//
function TunnelRouter(options) {
  var self = this, i;

  this.__namespace__ = options.namespace || 'tabex_default_';

  // `window.location.origin` available from IE 11
  this.__origin_first_check__ = options.origin ||
                                (window.location.origin || window.location.protocol + '//' + window.location.host);

  // Always convert origin list to array
  if (!Array.isArray(this.__origin_first_check__)) {
    this.__origin_first_check__ = [ this.__origin_first_check__ ];
  }

  for (i = 0; i < this.__origin_first_check__.length; i++) {
    // Escape regexp special chars exclude '*'
    this.__origin_first_check__[i] = this.__origin_first_check__[i].replace(/[-\/\\^$+?.()|[\]{}]/g, '\\$&');
    // Replace '*' to '.+' pattern
    this.__origin_first_check__[i] = this.__origin_first_check__[i].replace(/[*]/g, '.+?');
    // Create regexp
    this.__origin_first_check__[i] = new RegExp(this.__origin_first_check__[i]);
  }

  // Origin of parent window (target), will be setup by initial message
  this.__origin__ = null;
  this.__router__ = options.router;

  // Handle messages from parent window
  $$.addEvent(window, 'message', function (event) {
    var isOriginValid = false;

    // Check origin
    if (!self.__origin__ || self.__origin__ !== event.origin) {

      // Check origin by pattern
      for (i = 0; i < self.__origin_first_check__.length; i++) {
        if (self.__origin_first_check__[i].test(event.origin)) {
          isOriginValid = true;
          break;
        }
      }

      if (!isOriginValid) {
        return;
      }
    }

    var data;

    try {
      data = JSON.parse(event.data);
    } catch (__) {
      return;
    }

    // Ignore messages from another namespace (and messages from other possible senders)
    if (data.namespace !== self.__namespace__) {
      return;
    }

    // Save real origin from parent window and start routing
    if (!self.__origin__ && data.origin) {
      self.__origin__ = data.origin;

      self.__router__.onmessage(function (channel, message) {
        window.parent.postMessage(JSON.stringify({
          channel: channel,
          message: message,
          namespace: self.__namespace__
        }), self.__origin__);
      });

      return;
    }

    self.__router__.broadcast(data.channel, data.message);
  });
}


exports.TunnelClient = TunnelClient;
exports.TunnelRouter = TunnelRouter;

},{"./utils":8}],8:[function(require,module,exports){
'use strict';


/* global document */


// Run each function with params and callback after all
//
// - functions ([Function]) - array of functions to run
// - params... - params for functions and callback
// - callback (Function) - execute after all
//
exports.asyncEach = function (functions/* , params..., callback */) {
  functions = functions.slice(0);

  var callback = arguments[arguments.length - 1];
  var params = Array.prototype.slice.call(arguments, 1);

  // Remove callback from params
  params.pop();

  function next() {
    if (functions.length === 0) {
      callback.apply(this, arguments);
      return;
    }

    var fn = functions.shift();

    fn.apply(this, Array.prototype.slice.call(arguments, 0).concat(next));
  }

  next.apply(this, params);
};


// `addEventListener` not supported in IE <= 8, fallback to `attachEvent`
//
exports.addEvent = function (target, type, listener) {
  if (document.addEventListener) {
    target.addEventListener(type, listener);
    return;
  }

  target.attachEvent('on' + type, listener);
};

},{}]},{},[1])(1)
});
/* Minimalistic IndexedDB Wrapper with Bullet Proof Transactions
   =============================================================

   By David Fahlander, david.fahlander@gmail.com

   Version 1.1 - May 26, 2015.

   Tested successfully on Chrome, IE, Firefox and Opera.

   Official Website: https://github.com/dfahlander/Dexie.js/wiki/Dexie.js

   Licensed under the Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
*/
(function (global, publish, undefined) {

    "use strict";

    function extend(obj, extension) {
        if (typeof extension !== 'object') extension = extension(); // Allow to supply a function returning the extension. Useful for simplifying private scopes.
        Object.keys(extension).forEach(function (key) {
            obj[key] = extension[key];
        });
        return obj;
    }

    function derive(Child) {
        return {
            from: function (Parent) {
                Child.prototype = Object.create(Parent.prototype);
                Child.prototype.constructor = Child;
                return {
                    extend: function (extension) {
                        extend(Child.prototype, typeof extension !== 'object' ? extension(Parent.prototype) : extension);
                    }
                };
            }
        };
    }

    function override(origFunc, overridedFactory) {
        return overridedFactory(origFunc);
    }

    function Dexie(dbName, options) {
        /// <param name="options" type="Object" optional="true">Specify only if you wich to control which addons that should run on this instance</param>
        var addons = (options && options.addons) || Dexie.addons;
        // Resolve all external dependencies:
        var deps = Dexie.dependencies;
        var indexedDB = deps.indexedDB,
            IDBKeyRange = deps.IDBKeyRange,
            IDBTransaction = deps.IDBTransaction;

        var DOMError = deps.DOMError,
            TypeError = deps.TypeError,
            Error = deps.Error;

        var globalSchema = this._dbSchema = {};
        var versions = [];
        var dbStoreNames = [];
        var allTables = {};
        var notInTransFallbackTables = {};
        ///<var type="IDBDatabase" />
        var idbdb = null; // Instance of IDBDatabase
        var db_is_blocked = true;
        var dbOpenError = null;
        var isBeingOpened = false;
        var READONLY = "readonly", READWRITE = "readwrite";
        var db = this;
        var pausedResumeables = [];
        var autoSchema = false;
        var hasNativeGetDatabaseNames = !!getNativeGetDatabaseNamesFn();

        function init() {
            // If browser (not node.js or other), subscribe to versionchange event and reload page
            db.on("versionchange", function (ev) {
                // Default behavior for versionchange event is to close database connection.
                // Caller can override this behavior by doing db.on("versionchange", function(){ return false; });
                // Let's not block the other window from making it's delete() or open() call.
                db.close();
                db.on('error').fire(new Error("Database version changed by other database connection."));
                // In many web applications, it would be recommended to force window.reload()
                // when this event occurs. Do do that, subscribe to the versionchange event
                // and call window.location.reload(true);
            });
        }

        //
        //
        //
        // ------------------------- Versioning Framework---------------------------
        //
        //
        //

        this.version = function (versionNumber) {
            /// <param name="versionNumber" type="Number"></param>
            /// <returns type="Version"></returns>
            if (idbdb) throw new Error("Cannot add version when database is open");
            this.verno = Math.max(this.verno, versionNumber);
            var versionInstance = versions.filter(function (v) { return v._cfg.version === versionNumber; })[0];
            if (versionInstance) return versionInstance;
            versionInstance = new Version(versionNumber);
            versions.push(versionInstance);
            versions.sort(lowerVersionFirst);
            return versionInstance;
        }; 

        function Version(versionNumber) {
            this._cfg = {
                version: versionNumber,
                storesSource: null,
                dbschema: {},
                tables: {},
                contentUpgrade: null
            }; 
            this.stores({}); // Derive earlier schemas by default.
        }

        extend(Version.prototype, {
            stores: function (stores) {
                /// <summary>
                ///   Defines the schema for a particular version
                /// </summary>
                /// <param name="stores" type="Object">
                /// Example: <br/>
                ///   {users: "id++,first,last,&amp;username,*email", <br/>
                ///   passwords: "id++,&amp;username"}<br/>
                /// <br/>
                /// Syntax: {Table: "[primaryKey][++],[&amp;][*]index1,[&amp;][*]index2,..."}<br/><br/>
                /// Special characters:<br/>
                ///  "&amp;"  means unique key, <br/>
                ///  "*"  means value is multiEntry, <br/>
                ///  "++" means auto-increment and only applicable for primary key <br/>
                /// </param>
                this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;

                // Derive stores from earlier versions if they are not explicitely specified as null or a new syntax.
                var storesSpec = {};
                versions.forEach(function (version) { // 'versions' is always sorted by lowest version first.
                    extend(storesSpec, version._cfg.storesSource);
                });

                var dbschema = (this._cfg.dbschema = {});
                this._parseStoresSpec(storesSpec, dbschema);
                // Update the latest schema to this version
                // Update API
                globalSchema = db._dbSchema = dbschema;
                removeTablesApi([allTables, db, notInTransFallbackTables]);
                setApiOnPlace([notInTransFallbackTables], tableNotInTransaction, Object.keys(dbschema), READWRITE, dbschema);
                setApiOnPlace([allTables, db, this._cfg.tables], db._transPromiseFactory, Object.keys(dbschema), READWRITE, dbschema, true);
                dbStoreNames = Object.keys(dbschema);
                return this;
            },
            upgrade: function (upgradeFunction) {
                /// <param name="upgradeFunction" optional="true">Function that performs upgrading actions.</param>
                var self = this;
                fakeAutoComplete(function () {
                    upgradeFunction(db._createTransaction(READWRITE, Object.keys(self._cfg.dbschema), self._cfg.dbschema));// BUGBUG: No code completion for prev version's tables wont appear.
                });
                this._cfg.contentUpgrade = upgradeFunction;
                return this;
            },
            _parseStoresSpec: function (stores, outSchema) {
                Object.keys(stores).forEach(function (tableName) {
                    if (stores[tableName] !== null) {
                        var instanceTemplate = {};
                        var indexes = parseIndexSyntax(stores[tableName]);
                        var primKey = indexes.shift();
                        if (primKey.multi) throw new Error("Primary key cannot be multi-valued");
                        if (primKey.keyPath && primKey.auto) setByKeyPath(instanceTemplate, primKey.keyPath, 0);
                        indexes.forEach(function (idx) {
                            if (idx.auto) throw new Error("Only primary key can be marked as autoIncrement (++)");
                            if (!idx.keyPath) throw new Error("Index must have a name and cannot be an empty string");
                            setByKeyPath(instanceTemplate, idx.keyPath, idx.compound ? idx.keyPath.map(function () { return ""; }) : "");
                        });
                        outSchema[tableName] = new TableSchema(tableName, primKey, indexes, instanceTemplate);
                    }
                });
            }
        });

        function runUpgraders(oldVersion, idbtrans, reject, openReq) {
            if (oldVersion === 0) {
                //globalSchema = versions[versions.length - 1]._cfg.dbschema;
                // Create tables:
                Object.keys(globalSchema).forEach(function (tableName) {
                    createTable(idbtrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
                });
                // Populate data
                var t = db._createTransaction(READWRITE, dbStoreNames, globalSchema);
                t.idbtrans = idbtrans;
                t.idbtrans.onerror = eventRejectHandler(reject, ["populating database"]);
                t.on('error').subscribe(reject);
                Promise.newPSD(function () {
                    Promise.PSD.trans = t;
                    try {
                        db.on("populate").fire(t);
                    } catch (err) {
                        openReq.onerror = idbtrans.onerror = function (ev) { ev.preventDefault(); };  // Prohibit AbortError fire on db.on("error") in Firefox.
                        try { idbtrans.abort(); } catch (e) { }
                        idbtrans.db.close();
                        reject(err);
                    }
                });
            } else {
                // Upgrade version to version, step-by-step from oldest to newest version.
                // Each transaction object will contain the table set that was current in that version (but also not-yet-deleted tables from its previous version)
                var queue = [];
                var oldVersionStruct = versions.filter(function (version) { return version._cfg.version === oldVersion; })[0];
                if (!oldVersionStruct) throw new Error("Dexie specification of currently installed DB version is missing");
                globalSchema = db._dbSchema = oldVersionStruct._cfg.dbschema;
                var anyContentUpgraderHasRun = false;

                var versToRun = versions.filter(function (v) { return v._cfg.version > oldVersion; });
                versToRun.forEach(function (version) {
                    /// <param name="version" type="Version"></param>
                    var oldSchema = globalSchema;
                    var newSchema = version._cfg.dbschema;
                    adjustToExistingIndexNames(oldSchema, idbtrans);
                    adjustToExistingIndexNames(newSchema, idbtrans);
                    globalSchema = db._dbSchema = newSchema;
                    {
                        var diff = getSchemaDiff(oldSchema, newSchema);
                        diff.add.forEach(function (tuple) {
                            queue.push(function (idbtrans, cb) {
                                createTable(idbtrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
                                cb();
                            });
                        });
                        diff.change.forEach(function (change) {
                            if (change.recreate) {
                                throw new Error("Not yet support for changing primary key");
                            } else {
                                queue.push(function (idbtrans, cb) {
                                    var store = idbtrans.objectStore(change.name);
                                    change.add.forEach(function (idx) {
                                        addIndex(store, idx);
                                    });
                                    change.change.forEach(function (idx) {
                                        store.deleteIndex(idx.name);
                                        addIndex(store, idx);
                                    });
                                    change.del.forEach(function (idxName) {
                                        store.deleteIndex(idxName);
                                    });
                                    cb();
                                });
                            }
                        });
                        if (version._cfg.contentUpgrade) {
                            queue.push(function (idbtrans, cb) {
                                anyContentUpgraderHasRun = true;
                                var t = db._createTransaction(READWRITE, [].slice.call(idbtrans.db.objectStoreNames, 0), newSchema);
                                t.idbtrans = idbtrans;
                                var uncompletedRequests = 0;
                                t._promise = override(t._promise, function (orig_promise) {
                                    return function (mode, fn, writeLock) {
                                        ++uncompletedRequests;
                                        function proxy(fn) {
                                            return function () {
                                                fn.apply(this, arguments);
                                                if (--uncompletedRequests === 0) cb(); // A called db operation has completed without starting a new operation. The flow is finished, now run next upgrader.
                                            }
                                        }
                                        return orig_promise.call(this, mode, function (resolve, reject, trans) {
                                            arguments[0] = proxy(resolve);
                                            arguments[1] = proxy(reject);
                                            fn.apply(this, arguments);
                                        }, writeLock);
                                    };
                                });
                                idbtrans.onerror = eventRejectHandler(reject, ["running upgrader function for version", version._cfg.version]);
                                t.on('error').subscribe(reject);
                                version._cfg.contentUpgrade(t);
                                if (uncompletedRequests === 0) cb(); // contentUpgrade() didnt call any db operations at all.
                            });
                        }
                        if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug()) { // Dont delete old tables if ieBug is present and a content upgrader has run. Let tables be left in DB so far. This needs to be taken care of.
                            queue.push(function (idbtrans, cb) {
                                // Delete old tables
                                deleteRemovedTables(newSchema, idbtrans);
                                cb();
                            });
                        }
                    }
                });

                // Now, create a queue execution engine
                var runNextQueuedFunction = function () {
                    try {
                        if (queue.length)
                            queue.shift()(idbtrans, runNextQueuedFunction);
                        else
                            createMissingTables(globalSchema, idbtrans); // At last, make sure to create any missing tables. (Needed by addons that add stores to DB without specifying version)
                    } catch (err) {
                        openReq.onerror = idbtrans.onerror = function (ev) { ev.preventDefault(); };  // Prohibit AbortError fire on db.on("error") in Firefox.
                        try { idbtrans.abort(); } catch(e) {}
                        idbtrans.db.close();
                        reject(err);
                    }
                };
                runNextQueuedFunction();
            }
        }

        function getSchemaDiff(oldSchema, newSchema) {
            var diff = {
                del: [], // Array of table names
                add: [], // Array of [tableName, newDefinition]
                change: [] // Array of {name: tableName, recreate: newDefinition, del: delIndexNames, add: newIndexDefs, change: changedIndexDefs}
            };
            for (var table in oldSchema) {
                if (!newSchema[table]) diff.del.push(table);
            }
            for (var table in newSchema) {
                var oldDef = oldSchema[table],
                    newDef = newSchema[table];
                if (!oldDef) diff.add.push([table, newDef]);
                else {
                    var change = {
                        name: table,
                        def: newSchema[table],
                        recreate: false,
                        del: [],
                        add: [],
                        change: []
                    };
                    if (oldDef.primKey.src !== newDef.primKey.src) {
                        // Primary key has changed. Remove and re-add table.
                        change.recreate = true;
                        diff.change.push(change);
                    } else {
                        var oldIndexes = oldDef.indexes.reduce(function (prev, current) { prev[current.name] = current; return prev; }, {});
                        var newIndexes = newDef.indexes.reduce(function (prev, current) { prev[current.name] = current; return prev; }, {});
                        for (var idxName in oldIndexes) {
                            if (!newIndexes[idxName]) change.del.push(idxName);
                        }
                        for (var idxName in newIndexes) {
                            var oldIdx = oldIndexes[idxName],
                                newIdx = newIndexes[idxName];
                            if (!oldIdx) change.add.push(newIdx);
                            else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
                        }
                        if (change.recreate || change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                            diff.change.push(change);
                        }
                    }
                }
            }
            return diff;
        }

        function createTable(idbtrans, tableName, primKey, indexes) {
            /// <param name="idbtrans" type="IDBTransaction"></param>
            var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
            indexes.forEach(function (idx) { addIndex(store, idx); });
            return store;
        }

        function createMissingTables(newSchema, idbtrans) {
            Object.keys(newSchema).forEach(function (tableName) {
                if (!idbtrans.db.objectStoreNames.contains(tableName)) {
                    createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
                }
            });
        }

        function deleteRemovedTables(newSchema, idbtrans) {
            for (var i = 0; i < idbtrans.db.objectStoreNames.length; ++i) {
                var storeName = idbtrans.db.objectStoreNames[i];
                if (newSchema[storeName] === null || newSchema[storeName] === undefined) {
                    idbtrans.db.deleteObjectStore(storeName);
                }
            }
        }

        function addIndex(store, idx) {
            store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
        }

        //
        //
        //      Dexie Protected API
        //
        //

        this._allTables = allTables;

        this._tableFactory = function createTable(mode, tableSchema, transactionPromiseFactory) {
            /// <param name="tableSchema" type="TableSchema"></param>
            if (mode === READONLY)
                return new Table(tableSchema.name, transactionPromiseFactory, tableSchema, Collection);
            else
                return new WriteableTable(tableSchema.name, transactionPromiseFactory, tableSchema);
        }; 

        this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) {
            return new Transaction(mode, storeNames, dbschema, parentTransaction);
        }; 

        function tableNotInTransaction(mode, storeNames) {
            throw new Error("Table " + storeNames[0] + " not part of transaction. Original Scope Function Source: " + Dexie.Promise.PSD.trans.scopeFunc.toString());
        }

        this._transPromiseFactory = function transactionPromiseFactory(mode, storeNames, fn) { // Last argument is "writeLocked". But this doesnt apply to oneshot direct db operations, so we ignore it.
            if (db_is_blocked && (!Promise.PSD || !Promise.PSD.letThrough)) {
                // Database is paused. Wait til resumed.
                var blockedPromise = new Promise(function (resolve, reject) {
                    pausedResumeables.push({
                        resume: function () {
                            var p = db._transPromiseFactory(mode, storeNames, fn);
                            blockedPromise.onuncatched = p.onuncatched;
                            p.then(resolve, reject);
                        }
                    });
                });
                return blockedPromise;
            } else {
                var trans = db._createTransaction(mode, storeNames, globalSchema);
                return trans._promise(mode, function (resolve, reject) {
                    // An uncatched operation will bubble to this anonymous transaction. Make sure
                    // to continue bubbling it up to db.on('error'):
                    trans.error(function (err) {
                        db.on('error').fire(err);
                    });
                    fn(function (value) {
                        // Instead of resolving value directly, wait with resolving it until transaction has completed.
                        // Otherwise the data would not be in the DB if requesting it in the then() operation.
                        // Specifically, to ensure that the following expression will work:
                        //
                        //   db.friends.put({name: "Arne"}).then(function () {
                        //       db.friends.where("name").equals("Arne").count(function(count) {
                        //           assert (count === 1);
                        //       });
                        //   });
                        //
                        trans.complete(function () {
                            resolve(value);
                        });
                    }, reject, trans);
                });
            }
        }; 

        this._whenReady = function (fn) {
            if (db_is_blocked && (!Promise.PSD || !Promise.PSD.letThrough)) {
                return new Promise(function (resolve, reject) {
                    fakeAutoComplete(function () { new Promise(function () { fn(resolve, reject); }); });
                    pausedResumeables.push({
                        resume: function () {
                            fn(resolve, reject);
                        }
                    });
                });
            }
            return new Promise(fn);
        }; 

        //
        //
        //
        //
        //      Dexie API
        //
        //
        //

        this.verno = 0;

        this.open = function () {
            return new Promise(function (resolve, reject) {
                if (idbdb || isBeingOpened) throw new Error("Database already opened or being opened");
                var req, dbWasCreated = false;
                function openError(err) {
                    try { req.transaction.abort(); } catch (e) { }
                    /*if (dbWasCreated) {
                        // Workaround for issue with some browsers. Seem not to be needed though.
                        // Unit test "Issue#100 - not all indexes are created" works without it on chrome,FF,opera and IE.
                        idbdb.close();
                        indexedDB.deleteDatabase(db.name); 
                    }*/
                    isBeingOpened = false;
                    dbOpenError = err;
                    db_is_blocked = false;
                    reject(dbOpenError);
                    pausedResumeables.forEach(function (resumable) {
                        // Resume all stalled operations. They will fail once they wake up.
                        resumable.resume();
                    });
                    pausedResumeables = [];
                }
                try {
                    dbOpenError = null;
                    isBeingOpened = true;

                    // Make sure caller has specified at least one version
                    if (versions.length === 0) {
                        autoSchema = true;
                    }

                    // Multiply db.verno with 10 will be needed to workaround upgrading bug in IE: 
                    // IE fails when deleting objectStore after reading from it.
                    // A future version of Dexie.js will stopover an intermediate version to workaround this.
                    // At that point, we want to be backward compatible. Could have been multiplied with 2, but by using 10, it is easier to map the number to the real version number.
                    if (!indexedDB) throw new Error("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using Safari, make sure to include indexedDB polyfill.");
                    req = autoSchema ? indexedDB.open(dbName) : indexedDB.open(dbName, Math.round(db.verno * 10));
                    req.onerror = eventRejectHandler(openError, ["opening database", dbName]);
                    req.onblocked = function (ev) {
                        db.on("blocked").fire(ev);
                    }; 
                    req.onupgradeneeded = trycatch (function (e) {
                        if (autoSchema && !db._allowEmptyDB) { // Unless an addon has specified db._allowEmptyDB, lets make the call fail.
                            // Caller did not specify a version or schema. Doing that is only acceptable for opening alread existing databases.
                            // If onupgradeneeded is called it means database did not exist. Reject the open() promise and make sure that we 
                            // do not create a new database by accident here.
                            req.onerror = function (event) { event.preventDefault(); }; // Prohibit onabort error from firing before we're done!
                            req.transaction.abort(); // Abort transaction (would hope that this would make DB disappear but it doesnt.)
                            // Close database and delete it.
                            req.result.close();
                            var delreq = indexedDB.deleteDatabase(dbName); // The upgrade transaction is atomic, and javascript is single threaded - meaning that there is no risk that we delete someone elses database here!
                            delreq.onsuccess = delreq.onerror = function () {
                                openError(new Error("Database '" + dbName + "' doesnt exist"));
                            }; 
                        } else {
                            if (e.oldVersion === 0) dbWasCreated = true;
                            req.transaction.onerror = eventRejectHandler(openError);
                            var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion; // Safari 8 fix.
                            runUpgraders(oldVer / 10, req.transaction, openError, req);
                        }
                    }, openError);
                    req.onsuccess = trycatch(function (e) {
                        isBeingOpened = false;
                        idbdb = req.result;
                        if (autoSchema) readGlobalSchema();
                        else if (idbdb.objectStoreNames.length > 0)
                            adjustToExistingIndexNames(globalSchema, idbdb.transaction(safariMultiStoreFix(idbdb.objectStoreNames), READONLY));
                        idbdb.onversionchange = db.on("versionchange").fire; // Not firing it here, just setting the function callback to any registered subscriber.
                        if (!hasNativeGetDatabaseNames) {
                            // Update localStorage with list of database names
                            globalDatabaseList(function (databaseNames) {
                                if (databaseNames.indexOf(dbName) === -1) return databaseNames.push(dbName);
                            });
                        }
                        // Now, let any subscribers to the on("ready") fire BEFORE any other db operations resume!
                        // If an the on("ready") subscriber returns a Promise, we will wait til promise completes or rejects before 
                        Promise.newPSD(function () {
                            Promise.PSD.letThrough = true; // Set a Promise-Specific Data property informing that onready is firing. This will make db._whenReady() let the subscribers use the DB but block all others (!). Quite cool ha?
                            try {
                                var res = db.on.ready.fire();
                                if (res && typeof res.then === 'function') {
                                    // If on('ready') returns a promise, wait for it to complete and then resume any pending operations.
                                    res.then(resume, function (err) {
                                        idbdb.close();
                                        idbdb = null;
                                        openError(err);
                                    });
                                } else {
                                    asap(resume); // Cannot call resume directly because then the pauseResumables would inherit from our PSD scope.
                                }
                            } catch (e) {
                                openError(e);
                            }

                            function resume() {
                                db_is_blocked = false;
                                pausedResumeables.forEach(function (resumable) {
                                    // If anyone has made operations on a table instance before the db was opened, the operations will start executing now.
                                    resumable.resume();
                                });
                                pausedResumeables = [];
                                resolve();
                            }
                        });
                    }, openError);
                } catch (err) {
                    openError(err);
                }
            });
        }; 

        this.close = function () {
            if (idbdb) {
                idbdb.close();
                idbdb = null;
                db_is_blocked = true;
                dbOpenError = null;
            }
        }; 

        this.delete = function () {
            var args = arguments;
            return new Promise(function (resolve, reject) {
                if (args.length > 0) throw new Error("Arguments not allowed in db.delete()");
                function doDelete() {
                    db.close();
                    var req = indexedDB.deleteDatabase(dbName);
                    req.onsuccess = function () {
                        if (!hasNativeGetDatabaseNames) {
                            globalDatabaseList(function(databaseNames) {
                                var pos = databaseNames.indexOf(dbName);
                                if (pos >= 0) return databaseNames.splice(pos, 1);
                            });
                        }
                        resolve();
                    };
                    req.onerror = eventRejectHandler(reject, ["deleting", dbName]);
                    req.onblocked = function() {
                        db.on("blocked").fire();
                    };
                }
                if (isBeingOpened) {
                    pausedResumeables.push({ resume: doDelete });
                } else {
                    doDelete();
                }
            });
        }; 

        this.backendDB = function () {
            return idbdb;
        }; 

        this.isOpen = function () {
            return idbdb !== null;
        }; 
        this.hasFailed = function () {
            return dbOpenError !== null;
        };
        this.dynamicallyOpened = function() {
            return autoSchema;
        }

        /*this.dbg = function (collection, counter) {
            if (!this._dbgResult || !this._dbgResult[counter]) {
                if (typeof collection === 'string') collection = this.table(collection).toCollection().limit(100);
                if (!this._dbgResult) this._dbgResult = [];
                var db = this;
                new Promise(function () {
                    Promise.PSD.letThrough = true;
                    db._dbgResult[counter] = collection.toArray();
                });
            }
            return this._dbgResult[counter]._value;
        }*/

        //
        // Properties
        //
        this.name = dbName;

        // db.tables - an array of all Table instances.
        // TODO: Change so that tables is a simple member and make sure to update it whenever allTables changes.
        Object.defineProperty(this, "tables", {
            get: function () {
                /// <returns type="Array" elementType="WriteableTable" />
                return Object.keys(allTables).map(function (name) { return allTables[name]; });
            }
        });

        //
        // Events
        //
        this.on = events(this, "error", "populate", "blocked", { "ready": [promisableChain, nop], "versionchange": [reverseStoppableEventChain, nop] });

        // Handle on('ready') specifically: If DB is already open, trigger the event immediately. Also, default to unsubscribe immediately after being triggered.
        this.on.ready.subscribe = override(this.on.ready.subscribe, function (origSubscribe) {
            return function (subscriber, bSticky) {
                function proxy () {
                    if (!bSticky) db.on.ready.unsubscribe(proxy);
                    return subscriber.apply(this, arguments);
                }
                origSubscribe.call(this, proxy);
                if (db.isOpen()) {
                    if (db_is_blocked) {
                        pausedResumeables.push({ resume: proxy });
                    } else {
                        proxy();
                    }
                }
            };
        });

        fakeAutoComplete(function () {
            db.on("populate").fire(db._createTransaction(READWRITE, dbStoreNames, globalSchema));
            db.on("error").fire(new Error());
        });

        this.transaction = function (mode, tableInstances, scopeFunc) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="mode" type="String">"r" for readonly, or "rw" for readwrite</param>
            /// <param name="tableInstances">Table instance, Array of Table instances, String or String Array of object stores to include in the transaction</param>
            /// <param name="scopeFunc" type="Function">Function to execute with transaction</param>

            // Let table arguments be all arguments between mode and last argument.
            tableInstances = [].slice.call(arguments, 1, arguments.length - 1);
            // Let scopeFunc be the last argument
            scopeFunc = arguments[arguments.length - 1];
            var parentTransaction = Promise.PSD && Promise.PSD.trans;
			// Check if parent transactions is bound to this db instance, and if caller wants to reuse it
            if (!parentTransaction || parentTransaction.db !== db || mode.indexOf('!') !== -1) parentTransaction = null;
            var onlyIfCompatible = mode.indexOf('?') !== -1;
            mode = mode.replace('!', '').replace('?', '');
            //
            // Get storeNames from arguments. Either through given table instances, or through given table names.
            //
            var tables = Array.isArray(tableInstances[0]) ? tableInstances.reduce(function (a, b) { return a.concat(b); }) : tableInstances;
            var error = null;
            var storeNames = tables.map(function (tableInstance) {
                if (typeof tableInstance === "string") {
                    return tableInstance;
                } else {
                    if (!(tableInstance instanceof Table)) error = error || new TypeError("Invalid type. Arguments following mode must be instances of Table or String");
                    return tableInstance.name;
                }
            });

            //
            // Resolve mode. Allow shortcuts "r" and "rw".
            //
            if (mode == "r" || mode == READONLY)
                mode = READONLY;
            else if (mode == "rw" || mode == READWRITE)
                mode = READWRITE;
            else
                error = new Error("Invalid transaction mode: " + mode);

            if (parentTransaction) {
                // Basic checks
                if (!error) {
                    if (parentTransaction && parentTransaction.mode === READONLY && mode === READWRITE) {
                        if (onlyIfCompatible) parentTransaction = null; // Spawn new transaction instead.
                        else error = error || new Error("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                    }
                    if (parentTransaction) {
                        storeNames.forEach(function (storeName) {
                            if (!parentTransaction.tables.hasOwnProperty(storeName)) {
                                if (onlyIfCompatible) parentTransaction = null; // Spawn new transaction instead.
                                else error = error || new Error("Table " + storeName + " not included in parent transaction. Parent Transaction function: " + parentTransaction.scopeFunc.toString());
                            }
                        });
                    }
                }
            }
            if (parentTransaction) {
                // If this is a sub-transaction, lock the parent and then launch the sub-transaction.
                return parentTransaction._promise(mode, enterTransactionScope, "lock");
            } else {
                // If this is a root-level transaction, wait til database is ready and then launch the transaction.
                return db._whenReady(enterTransactionScope);
            }

            function enterTransactionScope(resolve, reject) {
                // Our transaction. To be set later.
                var trans = null;

                try {
                    // Throw any error if any of the above checks failed.
                    // Real error defined some lines up. We throw it here from within a Promise to reject Promise
                    // rather than make caller need to both use try..catch and promise catching. The reason we still
                    // throw here rather than do Promise.reject(error) is that we like to have the stack attached to the
                    // error. Also because there is a catch() clause bound to this try() that will bubble the error
                    // to the parent transaction.
                    if (error) throw error;

                    //
                    // Create Transaction instance
                    //
                    trans = db._createTransaction(mode, storeNames, globalSchema, parentTransaction);

                    // Provide arguments to the scope function (for backward compatibility)
                    var tableArgs = storeNames.map(function (name) { return trans.tables[name]; });
                    tableArgs.push(trans);

                    // If transaction completes, resolve the Promise with the return value of scopeFunc.
                    var returnValue;
                    var uncompletedRequests = 0;

                    // Create a new PSD frame to hold Promise.PSD.trans. Must not be bound to the current PSD frame since we want
                    // it to pop before then() callback is called of our returned Promise.
                    Promise.newPSD(function () {
                        // Let the transaction instance be part of a Promise-specific data (PSD) value.
                        Promise.PSD.trans = trans;
                        trans.scopeFunc = scopeFunc; // For Error ("Table " + storeNames[0] + " not part of transaction") when it happens. This may help localizing the code that started a transaction used on another place.

                        if (parentTransaction) {
                            // Emulate transaction commit awareness for inner transaction (must 'commit' when the inner transaction has no more operations ongoing)
                            trans.idbtrans = parentTransaction.idbtrans;
                            trans._promise = override(trans._promise, function (orig) {
                                return function (mode, fn, writeLock) {
                                    ++uncompletedRequests;
                                    function proxy(fn2) {
                                        return function (val) {
                                            var retval;
                                            // _rootExec needed so that we do not loose any IDBTransaction in a setTimeout() call.
                                            Promise._rootExec(function () {
                                                retval = fn2(val);
                                                // _tickFinalize makes sure to support lazy micro tasks executed in Promise._rootExec().
                                                // We certainly do not want to copy the bad pattern from IndexedDB but instead allow
                                                // execution of Promise.then() callbacks until the're all done.
                                                Promise._tickFinalize(function () {
                                                    if (--uncompletedRequests === 0 && trans.active) {
                                                        trans.active = false;
                                                        trans.on.complete.fire(); // A called db operation has completed without starting a new operation. The flow is finished
                                                    }
                                                });
                                            });
                                            return retval;
                                        }
                                    }
                                    return orig.call(this, mode, function (resolve2, reject2, trans) {
                                        return fn(proxy(resolve2), proxy(reject2), trans);
                                    }, writeLock);
                                };
                            });
                        }
                        trans.complete(function () {
                            resolve(returnValue);
                        });
                        // If transaction fails, reject the Promise and bubble to db if noone catched this rejection.
                        trans.error(function (e) {
                            if (trans.idbtrans) trans.idbtrans.onerror = preventDefault; // Prohibit AbortError from firing.
                            try {trans.abort();} catch(e2){}
                            if (parentTransaction) {
                                parentTransaction.active = false;
                                parentTransaction.on.error.fire(e); // Bubble to parent transaction
                            }
                            var catched = reject(e);
                            if (!parentTransaction && !catched) {
                                db.on.error.fire(e);// If not catched, bubble error to db.on("error").
                            }
                        });

                        // Finally, call the scope function with our table and transaction arguments.
                        Promise._rootExec(function() {
                            returnValue = scopeFunc.apply(trans, tableArgs); // NOTE: returnValue is used in trans.on.complete() not as a returnValue to this func.
                        });
                    });
                    if (!trans.idbtrans || (parentTransaction && uncompletedRequests === 0)) {
                        trans._nop(); // Make sure transaction is being used so that it will resolve.
                    }
                } catch (e) {
                    // If exception occur, abort the transaction and reject Promise.
                    if (trans && trans.idbtrans) trans.idbtrans.onerror = preventDefault; // Prohibit AbortError from firing.
                    if (trans) trans.abort();
                    if (parentTransaction) parentTransaction.on.error.fire(e);
                    asap(function () {
                        // Need to use asap(=setImmediate/setTimeout) before calling reject because we are in the Promise constructor and reject() will always return false if so.
                        if (!reject(e)) db.on("error").fire(e); // If not catched, bubble exception to db.on("error");
                    });
                }
            }
        }; 

        this.table = function (tableName) {
            /// <returns type="WriteableTable"></returns>
            if (!autoSchema && !allTables.hasOwnProperty(tableName)) { throw new Error("Table does not exist"); return { AN_UNKNOWN_TABLE_NAME_WAS_SPECIFIED: 1 }; }
            return allTables[tableName];
        }; 

        //
        //
        //
        // Table Class
        //
        //
        //
        function Table(name, transactionPromiseFactory, tableSchema, collClass) {
            /// <param name="name" type="String"></param>
            this.name = name;
            this.schema = tableSchema;
            this.hook = allTables[name] ? allTables[name].hook : events(null, {
                "creating": [hookCreatingChain, nop],
                "reading": [pureFunctionChain, mirror],
                "updating": [hookUpdatingChain, nop],
                "deleting": [nonStoppableEventChain, nop]
            });
            this._tpf = transactionPromiseFactory;
            this._collClass = collClass || Collection;
        }

        extend(Table.prototype, function () {
            function failReadonly() {
                throw new Error("Current Transaction is READONLY");
            }
            return {
                //
                // Table Protected Methods
                //

                _trans: function getTransaction(mode, fn, writeLocked) {
                    return this._tpf(mode, [this.name], fn, writeLocked);
                },
                _idbstore: function getIDBObjectStore(mode, fn, writeLocked) {
                    var self = this;
                    return this._tpf(mode, [this.name], function (resolve, reject, trans) {
                        fn(resolve, reject, trans.idbtrans.objectStore(self.name), trans);
                    }, writeLocked);
                },

                //
                // Table Public Methods
                //
                get: function (key, cb) {
                    var self = this;
                    fakeAutoComplete(function () { cb(self.schema.instanceTemplate); });
                    return this._idbstore(READONLY, function (resolve, reject, idbstore) {
                        var req = idbstore.get(key);
                        req.onerror = eventRejectHandler(reject, ["getting", key, "from", self.name]);
                        req.onsuccess = function () {
                            resolve(self.hook.reading.fire(req.result));
                        };
                    }).then(cb);
                },
                where: function (indexName) {
                    return new WhereClause(this, indexName);
                },
                count: function (cb) {
                    return this.toCollection().count(cb);
                },
                offset: function (offset) {
                    return this.toCollection().offset(offset);
                },
                limit: function (numRows) {
                    return this.toCollection().limit(numRows);
                },
                reverse: function () {
                    return this.toCollection().reverse();
                },
                filter: function (filterFunction) {
                    return this.toCollection().and(filterFunction);
                },
                each: function (fn) {
                    var self = this;
                    fakeAutoComplete(function () { fn(self.schema.instanceTemplate); });
                    return this._idbstore(READONLY, function (resolve, reject, idbstore) {
                        var req = idbstore.openCursor();
                        req.onerror = eventRejectHandler(reject, ["calling", "Table.each()", "on", self.name]);
                        iterate(req, null, fn, resolve, reject, self.hook.reading.fire);
                    });
                },
                toArray: function (cb) {
                    var self = this;
                    fakeAutoComplete(function () { cb([self.schema.instanceTemplate]); });
                    return this._idbstore(READONLY, function (resolve, reject, idbstore) {
                        var a = [];
                        var req = idbstore.openCursor();
                        req.onerror = eventRejectHandler(reject, ["calling", "Table.toArray()", "on", self.name]);
                        iterate(req, null, function (item) { a.push(item); }, function () { resolve(a); }, reject, self.hook.reading.fire);
                    }).then(cb);
                },
                orderBy: function (index) {
                    return new this._collClass(new WhereClause(this, index));
                },

                toCollection: function () {
                    return new this._collClass(new WhereClause(this));
                },

                mapToClass: function (constructor, structure) {
                    /// <summary>
                    ///     Map table to a javascript constructor function. Objects returned from the database will be instances of this class, making
                    ///     it possible to the instanceOf operator as well as extending the class using constructor.prototype.method = function(){...}.
                    /// </summary>
                    /// <param name="constructor">Constructor function representing the class.</param>
                    /// <param name="structure" optional="true">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
                    /// know what type each member has. Example: {name: String, emailAddresses: [String], password}</param>
                    this.schema.mappedClass = constructor;
                    var instanceTemplate = Object.create(constructor.prototype);
                    if (this.schema.primKey.keyPath) {
                        // Make sure primary key is not part of prototype because add() and put() fails on Chrome if primKey template lies on prototype due to a bug in its implementation
                        // of getByKeyPath(), that it accepts getting from prototype chain.
                        setByKeyPath(instanceTemplate, this.schema.primKey.keyPath, this.schema.primKey.auto ? 0 : "");
                        delByKeyPath(constructor.prototype, this.schema.primKey.keyPath);
                    }
                    if (structure) {
                        // structure and instanceTemplate is for IDE code competion only while constructor.prototype is for actual inheritance.
                        applyStructure(instanceTemplate, structure);
                    }
                    this.schema.instanceTemplate = instanceTemplate;

                    // Now, subscribe to the when("reading") event to make all objects that come out from this table inherit from given class
                    // no matter which method to use for reading (Table.get() or Table.where(...)... )
                    var readHook = Object.setPrototypeOf ?
                        function makeInherited(obj) {
                            if (!obj) return obj; // No valid object. (Value is null). Return as is.
                            // Object.setPrototypeOf() supported. Just change that pointer on the existing object. A little more efficient way.
                            Object.setPrototypeOf(obj, constructor.prototype);
                            return obj;
                        } : function makeInherited(obj) {
                            if (!obj) return obj; // No valid object. (Value is null). Return as is.
                            // Object.setPrototypeOf not supported (IE10)- return a new object and clone the members from the old one.
                            var res = Object.create(constructor.prototype);
                            for (var m in obj) if (obj.hasOwnProperty(m)) res[m] = obj[m];
                            return res;
                        };

                    if (this.schema.readHook) {
                        this.hook.reading.unsubscribe(this.schema.readHook);
                    }
                    this.schema.readHook = readHook;
                    this.hook("reading", readHook);
                    return constructor;
                },
                defineClass: function (structure) {
                    /// <summary>
                    ///     Define all members of the class that represents the table. This will help code completion of when objects are read from the database
                    ///     as well as making it possible to extend the prototype of the returned constructor function.
                    /// </summary>
                    /// <param name="structure">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
                    /// know what type each member has. Example: {name: String, emailAddresses: [String], properties: {shoeSize: Number}}</param>
                    return this.mapToClass(Dexie.defineClass(structure), structure);
                },
                add: failReadonly,
                put: failReadonly,
                'delete': failReadonly,
                clear: failReadonly,
                update: failReadonly
            };
        });

        //
        //
        //
        // WriteableTable Class (extends Table)
        //
        //
        //
        function WriteableTable(name, transactionPromiseFactory, tableSchema, collClass) {
            Table.call(this, name, transactionPromiseFactory, tableSchema, collClass || WriteableCollection);
        }

        derive(WriteableTable).from(Table).extend(function () {
            return {
                add: function (obj, key) {
                    /// <summary>
                    ///   Add an object to the database. In case an object with same primary key already exists, the object will not be added.
                    /// </summary>
                    /// <param name="obj" type="Object">A javascript object to insert</param>
                    /// <param name="key" optional="true">Primary key</param>
                    var self = this,
                        creatingHook = this.hook.creating.fire;
                    return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                        var thisCtx = {};
                        if (creatingHook !== nop) {
                            var effectiveKey = key || (idbstore.keyPath ? getByKeyPath(obj, idbstore.keyPath) : undefined);
                            var keyToUse = creatingHook.call(thisCtx, effectiveKey, obj, trans); // Allow subscribers to when("creating") to generate the key.
                            if (effectiveKey === undefined && keyToUse !== undefined) {
                                if (idbstore.keyPath)
                                    setByKeyPath(obj, idbstore.keyPath, keyToUse);
                                else
                                    key = keyToUse;
                            }
                        }
                        //try {
                            var req = key ? idbstore.add(obj, key) : idbstore.add(obj);
                            req.onerror = eventRejectHandler(function (e) {
                                if (thisCtx.onerror) thisCtx.onerror(e);
                                return reject(e);
                            }, ["adding", obj, "into", self.name]);
                            req.onsuccess = function (ev) {
                                var keyPath = idbstore.keyPath;
                                if (keyPath) setByKeyPath(obj, keyPath, ev.target.result);
                                if (thisCtx.onsuccess) thisCtx.onsuccess(ev.target.result);
                                resolve(req.result);
                            };
                        /*} catch (e) {
                            trans.on("error").fire(e);
                            trans.abort();
                            reject(e);
                        }*/
                    });
                },

                put: function (obj, key) {
                    /// <summary>
                    ///   Add an object to the database but in case an object with same primary key alread exists, the existing one will get updated.
                    /// </summary>
                    /// <param name="obj" type="Object">A javascript object to insert or update</param>
                    /// <param name="key" optional="true">Primary key</param>
                    var self = this,
                        creatingHook = this.hook.creating.fire,
                        updatingHook = this.hook.updating.fire;
                    if (creatingHook !== nop || updatingHook !== nop) {
                        //
                        // People listens to when("creating") or when("updating") events!
                        // We must know whether the put operation results in an CREATE or UPDATE.
                        //
                        return this._trans(READWRITE, function (resolve, reject, trans) {
                            // Since key is optional, make sure we get it from obj if not provided
                            var effectiveKey = key || (self.schema.primKey.keyPath && getByKeyPath(obj, self.schema.primKey.keyPath));
                            if (effectiveKey === undefined) {
                                // No primary key. Must use add().
                                trans.tables[self.name].add(obj).then(resolve, reject);
                            } else {
                                // Primary key exist. Lock transaction and try modifying existing. If nothing modified, call add().
                                trans._lock(); // Needed because operation is splitted into modify() and add().
                                // clone obj before this async call. If caller modifies obj the line after put(), the IDB spec requires that it should not affect operation.
                                obj = deepClone(obj);
                                trans.tables[self.name].where(":id").equals(effectiveKey).modify(function (value) {
                                    // Replace extisting value with our object
                                    // CRUD event firing handled in WriteableCollection.modify()
                                    this.value = obj;
                                }).then(function (count) {
                                    if (count === 0) {
                                        // Object's key was not found. Add the object instead.
                                        // CRUD event firing will be done in add()
                                        return trans.tables[self.name].add(obj, key); // Resolving with another Promise. Returned Promise will then resolve with the new key.
                                    } else {
                                        return effectiveKey; // Resolve with the provided key.
                                    }
                                }).finally(function () {
                                    trans._unlock();
                                }).then(resolve, reject);
                            }
                        });
                    } else {
                        // Use the standard IDB put() method.
                        return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                            var req = key ? idbstore.put(obj, key) : idbstore.put(obj);
                            req.onerror = eventRejectHandler(reject, ["putting", obj, "into", self.name]);
                            req.onsuccess = function (ev) {
                                var keyPath = idbstore.keyPath;
                                if (keyPath) setByKeyPath(obj, keyPath, ev.target.result);
                                resolve(req.result);
                            };
                        });
                    }
                },

                'delete': function (key) {
                    /// <param name="key">Primary key of the object to delete</param>
                    if (this.hook.deleting.subscribers.length) {
                        // People listens to when("deleting") event. Must implement delete using WriteableCollection.delete() that will
                        // call the CRUD event. Only WriteableCollection.delete() will know whether an object was actually deleted.
                        return this.where(":id").equals(key).delete();
                    } else {
                        // No one listens. Use standard IDB delete() method.
                        return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                            var req = idbstore.delete(key);
                            req.onerror = eventRejectHandler(reject, ["deleting", key, "from", idbstore.name]);
                            req.onsuccess = function (ev) {
                                resolve(req.result);
                            };
                        });
                    }
                },

                clear: function () {
                    if (this.hook.deleting.subscribers.length) {
                        // People listens to when("deleting") event. Must implement delete using WriteableCollection.delete() that will
                        // call the CRUD event. Only WriteableCollection.delete() will knows which objects that are actually deleted.
                        return this.toCollection().delete();
                    } else {
                        return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                            var req = idbstore.clear();
                            req.onerror = eventRejectHandler(reject, ["clearing", idbstore.name]);
                            req.onsuccess = function (ev) {
                                resolve(req.result);
                            };
                        });
                    }
                },

                update: function (keyOrObject, modifications) {
                    if (typeof modifications !== 'object' || Array.isArray(modifications)) throw new Error("db.update(keyOrObject, modifications). modifications must be an object.");
                    if (typeof keyOrObject === 'object' && !Array.isArray(keyOrObject)) {
                        // object to modify. Also modify given object with the modifications:
                        Object.keys(modifications).forEach(function (keyPath) {
                            setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
                        });
                        var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
                        if (key === undefined) Promise.reject(new Error("Object does not contain its primary key"));
                        return this.where(":id").equals(key).modify(modifications);
                    } else {
                        // key to modify
                        return this.where(":id").equals(keyOrObject).modify(modifications);
                    }
                },
            };
        });

        //
        //
        //
        // Transaction Class
        //
        //
        //
        function Transaction(mode, storeNames, dbschema, parent) {
            /// <summary>
            ///    Transaction class. Represents a database transaction. All operations on db goes through a Transaction.
            /// </summary>
            /// <param name="mode" type="String">Any of "readwrite" or "readonly"</param>
            /// <param name="storeNames" type="Array">Array of table names to operate on</param>
            var self = this;
            this.db = db;
            this.mode = mode;
            this.storeNames = storeNames;
            this.idbtrans = null;
            this.on = events(this, ["complete", "error"], "abort");
            this._reculock = 0;
            this._blockedFuncs = [];
            this._psd = null;
            this.active = true;
            this._dbschema = dbschema;
            if (parent) this.parent = parent;
            this._tpf = transactionPromiseFactory;
            this.tables = Object.create(notInTransFallbackTables); // ...so that all non-included tables exists as instances (possible to call table.name for example) but will fail as soon as trying to execute a query on it.

            function transactionPromiseFactory(mode, storeNames, fn, writeLocked) {
                // Creates a Promise instance and calls fn (resolve, reject, trans) where trans is the instance of this transaction object.
                // Support for write-locking the transaction during the promise life time from creation to success/failure.
                // This is actually not needed when just using single operations on IDB, since IDB implements this internally.
                // However, when implementing a write operation as a series of operations on top of IDB(collection.delete() and collection.modify() for example),
                // lock is indeed needed if Dexie APIshould behave in a consistent manner for the API user.
                // Another example of this is if we want to support create/update/delete events,
                // we need to implement put() using a series of other IDB operations but still need to lock the transaction all the way.
                return self._promise(mode, fn, writeLocked);
            }

            for (var i = storeNames.length - 1; i !== -1; --i) {
                var name = storeNames[i];
                var table = db._tableFactory(mode, dbschema[name], transactionPromiseFactory);
                this.tables[name] = table;
                if (!this[name]) this[name] = table;
            }
        }

        extend(Transaction.prototype, {
            //
            // Transaction Protected Methods (not required by API users, but needed internally and eventually by dexie extensions)
            //

            _lock: function () {
                // Temporary set all requests into a pending queue if they are called before database is ready.
                ++this._reculock; // Recursive read/write lock pattern using PSD (Promise Specific Data) instead of TLS (Thread Local Storage)
                if (this._reculock === 1 && Promise.PSD) Promise.PSD.lockOwnerFor = this;
                return this;
            },
            _unlock: function () {
                if (--this._reculock === 0) {
                    if (Promise.PSD) Promise.PSD.lockOwnerFor = null;
                    while (this._blockedFuncs.length > 0 && !this._locked()) {
                        var fn = this._blockedFuncs.shift();
                        try { fn(); } catch (e) { }
                    }
                }
                return this;
            },
            _locked: function () {
                // Checks if any write-lock is applied on this transaction.
                // To simplify the Dexie API for extension implementations, we support recursive locks.
                // This is accomplished by using "Promise Specific Data" (PSD).
                // PSD data is bound to a Promise and any child Promise emitted through then() or resolve( new Promise() ).
                // Promise.PSD is local to code executing on top of the call stacks of any of any code executed by Promise():
                //         * callback given to the Promise() constructor  (function (resolve, reject){...})
                //         * callbacks given to then()/catch()/finally() methods (function (value){...})
                // If creating a new independant Promise instance from within a Promise call stack, the new Promise will derive the PSD from the call stack of the parent Promise.
                // Derivation is done so that the inner PSD __proto__ points to the outer PSD.
                // Promise.PSD.lockOwnerFor will point to current transaction object if the currently executing PSD scope owns the lock.
                return this._reculock && (!Promise.PSD || Promise.PSD.lockOwnerFor !== this);
            },
            _nop: function (cb) {
                // An asyncronic no-operation that may call given callback when done doing nothing. An alternative to asap() if we must not lose the transaction.
                this.tables[this.storeNames[0]].get(0).then(cb);
            },
            _promise: function (mode, fn, bWriteLock) {
                var self = this;
                return Promise.newPSD(function() {
                    var p;
                    // Read lock always
                    if (!self._locked()) {
                        p = self.active ? new Promise(function (resolve, reject) {
                            if (!self.idbtrans && mode) {
                                if (!idbdb) throw dbOpenError ? new Error("Database not open. Following error in populate, ready or upgrade function made Dexie.open() fail: " + dbOpenError) : new Error("Database not open");
                                var idbtrans = self.idbtrans = idbdb.transaction(safariMultiStoreFix(self.storeNames), self.mode);
                                idbtrans.onerror = function (e) {
                                    self.on("error").fire(e && e.target.error);
                                    e.preventDefault(); // Prohibit default bubbling to window.error
                                    self.abort(); // Make sure transaction is aborted since we preventDefault.
                                }; 
                                idbtrans.onabort = function (e) {
                                    self.active = false;
                                    self.on("abort").fire(e);
                                }; 
                                idbtrans.oncomplete = function (e) {
                                    self.active = false;
                                    self.on("complete").fire(e);
                                }; 
                            }
                            if (bWriteLock) self._lock(); // Write lock if write operation is requested
                            try {
                                fn(resolve, reject, self);
                            } catch (e) {
                                // Direct exception happened when doin operation.
                                // We must immediately fire the error and abort the transaction.
                                // When this happens we are still constructing the Promise so we don't yet know
                                // whether the caller is about to catch() the error or not. Have to make
                                // transaction fail. Catching such an error wont stop transaction from failing.
                                // This is a limitation we have to live with.
                                Dexie.ignoreTransaction(function () { self.on('error').fire(e); });
                                self.abort();
                                reject(e);
                            }
                        }) : Promise.reject(stack(new Error("Transaction is inactive. Original Scope Function Source: " + self.scopeFunc.toString())));
                        if (self.active && bWriteLock) p.finally(function () {
                            self._unlock();
                        });
                    } else {
                        // Transaction is write-locked. Wait for mutex.
                        p = new Promise(function (resolve, reject) {
                            self._blockedFuncs.push(function () {
                                self._promise(mode, fn, bWriteLock).then(resolve, reject);
                            });
                        });
                    }
                    p.onuncatched = function (e) {
                        // Bubble to transaction. Even though IDB does this internally, it would just do it for error events and not for caught exceptions.
                        Dexie.ignoreTransaction(function () { self.on("error").fire(e); });
                        self.abort();
                    };
                    return p;
                });
            },

            //
            // Transaction Public Methods
            //

            complete: function (cb) {
                return this.on("complete", cb);
            },
            error: function (cb) {
                return this.on("error", cb);
            },
            abort: function () {
                if (this.idbtrans && this.active) try { // TODO: if !this.idbtrans, enqueue an abort() operation.
                    this.active = false;
                    this.idbtrans.abort();
                    this.on.error.fire(new Error("Transaction Aborted"));
                } catch (e) { }
            },
            table: function (name) {
                if (!this.tables.hasOwnProperty(name)) { throw new Error("Table " + name + " not in transaction"); return { AN_UNKNOWN_TABLE_NAME_WAS_SPECIFIED: 1 }; }
                return this.tables[name];
            }
        });

        //
        //
        //
        // WhereClause
        //
        //
        //
        function WhereClause(table, index, orCollection) {
            /// <param name="table" type="Table"></param>
            /// <param name="index" type="String" optional="true"></param>
            /// <param name="orCollection" type="Collection" optional="true"></param>
            this._ctx = {
                table: table,
                index: index === ":id" ? null : index,
                collClass: table._collClass,
                or: orCollection
            }; 
        }

        extend(WhereClause.prototype, function () {

            // WhereClause private methods

            function fail(collection, err) {
                try { throw err; } catch (e) {
                    collection._ctx.error = e;
                }
                return collection;
            }

            function getSetArgs(args) {
                return Array.prototype.slice.call(args.length === 1 && Array.isArray(args[0]) ? args[0] : args);
            }

            function upperFactory(dir) {
                return dir === "next" ? function (s) { return s.toUpperCase(); } : function (s) { return s.toLowerCase(); };
            }
            function lowerFactory(dir) {
                return dir === "next" ? function (s) { return s.toLowerCase(); } : function (s) { return s.toUpperCase(); };
            }
            function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
                var length = Math.min(key.length, lowerNeedle.length);
                var llp = -1;
                for (var i = 0; i < length; ++i) {
                    var lwrKeyChar = lowerKey[i];
                    if (lwrKeyChar !== lowerNeedle[i]) {
                        if (cmp(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
                        if (cmp(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
                        if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
                        return null;
                    }
                    if (cmp(key[i], lwrKeyChar) < 0) llp = i;
                }
                if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
                if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
                return (llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1));
            }

            function addIgnoreCaseAlgorithm(c, match, needle) {
                /// <param name="needle" type="String"></param>
                var upper, lower, compare, upperNeedle, lowerNeedle, direction;
                function initDirection(dir) {
                    upper = upperFactory(dir);
                    lower = lowerFactory(dir);
                    compare = (dir === "next" ? ascending : descending);
                    upperNeedle = upper(needle);
                    lowerNeedle = lower(needle);
                    direction = dir;
                }
                initDirection("next");
                c._ondirectionchange = function (direction) {
                    // This event onlys occur before filter is called the first time.
                    initDirection(direction);
                };
                c._addAlgorithm(function (cursor, advance, resolve) {
                    /// <param name="cursor" type="IDBCursor"></param>
                    /// <param name="advance" type="Function"></param>
                    /// <param name="resolve" type="Function"></param>
                    var key = cursor.key;
                    if (typeof key !== 'string') return false;
                    var lowerKey = lower(key);
                    if (match(lowerKey, lowerNeedle)) {
                        advance(function () { cursor.continue(); });
                        return true;
                    } else {
                        var nextNeedle = nextCasing(key, lowerKey, upperNeedle, lowerNeedle, compare, direction);
                        if (nextNeedle) {
                            advance(function () { cursor.continue(nextNeedle); });
                        } else {
                            advance(resolve);
                        }
                        return false;
                    }
                });
            }

            //
            // WhereClause public methods
            //
            return {
                between: function (lower, upper, includeLower, includeUpper) {
                    /// <summary>
                    ///     Filter out records whose where-field lays between given lower and upper values. Applies to Strings, Numbers and Dates.
                    /// </summary>
                    /// <param name="lower"></param>
                    /// <param name="upper"></param>
                    /// <param name="includeLower" optional="true">Whether items that equals lower should be included. Default true.</param>
                    /// <param name="includeUpper" optional="true">Whether items that equals upper should be included. Default false.</param>
                    /// <returns type="Collection"></returns>
                    includeLower = includeLower !== false;   // Default to true
                    includeUpper = includeUpper === true;    // Default to false
                    if ((lower > upper) ||
                        (lower === upper && (includeLower || includeUpper) && !(includeLower && includeUpper)))
                        return new this._ctx.collClass(this, function() { return IDBKeyRange.only(lower); }).limit(0); // Workaround for idiotic W3C Specification that DataError must be thrown if lower > upper. The natural result would be to return an empty collection.
                    return new this._ctx.collClass(this, function() { return IDBKeyRange.bound(lower, upper, !includeLower, !includeUpper); });
                },
                equals: function (value) {
                    return new this._ctx.collClass(this, function() { return IDBKeyRange.only(value); });
                },
                above: function (value) {
                    return new this._ctx.collClass(this, function() { return IDBKeyRange.lowerBound(value, true); });
                },
                aboveOrEqual: function (value) {
                    return new this._ctx.collClass(this, function() { return IDBKeyRange.lowerBound(value); });
                },
                below: function (value) {
                    return new this._ctx.collClass(this, function() { return IDBKeyRange.upperBound(value, true); });
                },
                belowOrEqual: function (value) {
                    return new this._ctx.collClass(this, function() { return IDBKeyRange.upperBound(value); });
                },
                startsWith: function (str) {
                    /// <param name="str" type="String"></param>
                    if (typeof str !== 'string') return fail(new this._ctx.collClass(this), new TypeError("String expected"));
                    return this.between(str, str + String.fromCharCode(65535), true, true);
                },
                startsWithIgnoreCase: function (str) {
                    /// <param name="str" type="String"></param>
                    if (typeof str !== 'string') return fail(new this._ctx.collClass(this), new TypeError("String expected"));
                    if (str === "") return this.startsWith(str);
                    var c = new this._ctx.collClass(this, function() { return IDBKeyRange.bound(str.toUpperCase(), str.toLowerCase() + String.fromCharCode(65535)); });
                    addIgnoreCaseAlgorithm(c, function (a, b) { return a.indexOf(b) === 0; }, str);
                    c._ondirectionchange = function () { fail(c, new Error("reverse() not supported with WhereClause.startsWithIgnoreCase()")); };
                    return c;
                },
                equalsIgnoreCase: function (str) {
                    /// <param name="str" type="String"></param>
                    if (typeof str !== 'string') return fail(new this._ctx.collClass(this), new TypeError("String expected"));
                    var c = new this._ctx.collClass(this, function() { return IDBKeyRange.bound(str.toUpperCase(), str.toLowerCase()); });
                    addIgnoreCaseAlgorithm(c, function (a, b) { return a === b; }, str);
                    return c;
                },
                anyOf: function (valueArray) {
                    var ctx = this._ctx,
                        schema = ctx.table.schema;
                    var idxSpec = ctx.index ? schema.idxByName[ctx.index] : schema.primKey;
                    var isCompound = idxSpec && idxSpec.compound;
                    var set = getSetArgs(arguments);
                    var compare = isCompound ? compoundCompare(ascending) : ascending;
                    set.sort(compare);
                    if (set.length === 0) return new this._ctx.collClass(this, function() { return IDBKeyRange.only(""); }).limit(0); // Return an empty collection.
                    var c = new this._ctx.collClass(this, function () { return IDBKeyRange.bound(set[0], set[set.length - 1]); });
                    
                    c._ondirectionchange = function (direction) {
                        compare = (direction === "next" ? ascending : descending);
                        if (isCompound) compare = compoundCompare(compare);
                        set.sort(compare);
                    };
                    var i = 0;
                    c._addAlgorithm(function (cursor, advance, resolve) {
                        var key = cursor.key;
                        while (compare(key, set[i]) > 0) {
                            // The cursor has passed beyond this key. Check next.
                            ++i;
                            if (i === set.length) {
                                // There is no next. Stop searching.
                                advance(resolve);
                                return false;
                            }
                        }
                        if (compare(key, set[i]) === 0) {
                            // The current cursor value should be included and we should continue a single step in case next item has the same key or possibly our next key in set.
                            advance(function () { cursor.continue(); });
                            return true;
                        } else {
                            // cursor.key not yet at set[i]. Forward cursor to the next key to hunt for.
                            advance(function () { cursor.continue(set[i]); });
                            return false;
                        }
                    });
                    return c;
                }
            };
        });




        //
        //
        //
        // Collection Class
        //
        //
        //
        function Collection(whereClause, keyRangeGenerator) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="whereClause" type="WhereClause">Where clause instance</param>
            /// <param name="keyRangeGenerator" value="function(){ return IDBKeyRange.bound(0,1);}" optional="true"></param>
            var keyRange = null, error = null;
            if (keyRangeGenerator) try {
                keyRange = keyRangeGenerator();
            } catch (ex) {
                error = ex;
            }

            var whereCtx = whereClause._ctx;
            this._ctx = {
                table: whereCtx.table,
                index: whereCtx.index,
                isPrimKey: (!whereCtx.index || (whereCtx.table.schema.primKey.keyPath && whereCtx.index === whereCtx.table.schema.primKey.name)),
                range: keyRange,
                op: "openCursor",
                dir: "next",
                unique: "",
                algorithm: null,
                filter: null,
                isMatch: null,
                offset: 0,
                limit: Infinity,
                error: error, // If set, any promise must be rejected with this error
                or: whereCtx.or
            };
        }

        extend(Collection.prototype, function () {

            //
            // Collection Private Functions
            //

            function addFilter(ctx, fn) {
                ctx.filter = combine(ctx.filter, fn);
            }

            function addMatchFilter(ctx, fn) {
                ctx.isMatch = combine(ctx.isMatch, fn);
            }

            function getIndexOrStore(ctx, store) {
                if (ctx.isPrimKey) return store;
                var indexSpec = ctx.table.schema.idxByName[ctx.index];
                if (!indexSpec) throw new Error("KeyPath " + ctx.index + " on object store " + store.name + " is not indexed");
                return ctx.isPrimKey ? store : store.index(indexSpec.name);
            }

            function openCursor(ctx, store) {
                return getIndexOrStore(ctx, store)[ctx.op](ctx.range || null, ctx.dir + ctx.unique);
            }

            function iter(ctx, fn, resolve, reject, idbstore) {
                if (!ctx.or) {
                    iterate(openCursor(ctx, idbstore), combine(ctx.algorithm, ctx.filter), fn, resolve, reject, ctx.table.hook.reading.fire);
                } else {
                    (function () {
                        var filter = ctx.filter;
                        var set = {};
                        var primKey = ctx.table.schema.primKey.keyPath;
                        var resolved = 0;

                        function resolveboth() {
                            if (++resolved === 2) resolve(); // Seems like we just support or btwn max 2 expressions, but there are no limit because we do recursion.
                        }

                        function union(item, cursor, advance) {
                            if (!filter || filter(cursor, advance, resolveboth, reject)) {
                                var key = cursor.primaryKey.toString(); // Converts any Date to String, String to String, Number to String and Array to comma-separated string
                                if (!set.hasOwnProperty(key)) {
                                    set[key] = true;
                                    fn(item, cursor, advance);
                                }
                            }
                        }

                        ctx.or._iterate(union, resolveboth, reject, idbstore);
                        iterate(openCursor(ctx, idbstore), ctx.algorithm, union, resolveboth, reject, ctx.table.hook.reading.fire);
                    })();
                }
            }
            function getInstanceTemplate(ctx) {
                return ctx.table.schema.instanceTemplate;
            }


            return {

                //
                // Collection Protected Functions
                //

                _read: function (fn, cb) {
                    var ctx = this._ctx;
                    if (ctx.error)
                        return ctx.table._trans(null, function rejector(resolve, reject) { reject(ctx.error); });
                    else
                        return ctx.table._idbstore(READONLY, fn).then(cb);
                },
                _write: function (fn) {
                    var ctx = this._ctx;
                    if (ctx.error)
                        return ctx.table._trans(null, function rejector(resolve, reject) { reject(ctx.error); });
                    else
                        return ctx.table._idbstore(READWRITE, fn, "locked"); // When doing write operations on collections, always lock the operation so that upcoming operations gets queued.
                },
                _addAlgorithm: function (fn) {
                    var ctx = this._ctx;
                    ctx.algorithm = combine(ctx.algorithm, fn);
                },

                _iterate: function (fn, resolve, reject, idbstore) {
                    return iter(this._ctx, fn, resolve, reject, idbstore);
                },

                //
                // Collection Public methods
                //

                each: function (fn) {
                    var ctx = this._ctx;

                    fakeAutoComplete(function () { fn(getInstanceTemplate(ctx)); });

                    return this._read(function (resolve, reject, idbstore) {
                        iter(ctx, fn, resolve, reject, idbstore);
                    });
                },

                count: function (cb) {
                    fakeAutoComplete(function () { cb(0); });
                    var self = this,
                        ctx = this._ctx;

                    if (ctx.filter || ctx.algorithm || ctx.or) {
                        // When filters are applied or 'ored' collections are used, we must count manually
                        var count = 0;
                        return this._read(function (resolve, reject, idbstore) {
                            iter(ctx, function () { ++count; return false; }, function () { resolve(count); }, reject, idbstore);
                        }, cb);
                    } else {
                        // Otherwise, we can use the count() method if the index.
                        return this._read(function (resolve, reject, idbstore) {
                            var idx = getIndexOrStore(ctx, idbstore);
                            var req = (ctx.range ? idx.count(ctx.range) : idx.count());
                            req.onerror = eventRejectHandler(reject, ["calling", "count()", "on", self.name]);
                            req.onsuccess = function (e) {
                                resolve(Math.min(e.target.result, Math.max(0, ctx.limit - ctx.offset)));
                            };
                        }, cb);
                    }
                },

                sortBy: function (keyPath, cb) {
                    /// <param name="keyPath" type="String"></param>
                    var ctx = this._ctx;
                    fakeAutoComplete(function () { cb([getInstanceTemplate(ctx)]); });
                    var parts = keyPath.split('.').reverse(),
                        lastPart = parts[0],
                        lastIndex = parts.length - 1;
                    function getval(obj, i) {
                        if (i) return getval(obj[parts[i]], i - 1);
                        return obj[lastPart];
                    }
                    var order = this._ctx.dir === "next" ? 1 : -1;

                    function sorter(a, b) {
                        var aVal = getval(a, lastIndex),
                            bVal = getval(b, lastIndex);
                        return aVal < bVal ? -order : aVal > bVal ? order : 0;
                    }
                    return this.toArray(function (a) {
                        return a.sort(sorter);
                    }).then(cb);
                },

                toArray: function (cb) {
                    var ctx = this._ctx;

                    fakeAutoComplete(function () { cb([getInstanceTemplate(ctx)]); });

                    return this._read(function (resolve, reject, idbstore) {
                        var a = [];
                        iter(ctx, function (item) { a.push(item); }, function arrayComplete() {
                            resolve(a);
                        }, reject, idbstore);
                    }, cb);
                },

                offset: function (offset) {
                    var ctx = this._ctx;
                    if (offset <= 0) return this;
                    ctx.offset += offset; // For count()
                    if (!ctx.or && !ctx.algorithm && !ctx.filter) {
                        addFilter(ctx, function offsetFilter(cursor, advance, resolve) {
                            if (offset === 0) return true;
                            if (offset === 1) { --offset; return false; }
                            advance(function () { cursor.advance(offset); offset = 0; });
                            return false;
                        });
                    } else {
                        addFilter(ctx, function offsetFilter(cursor, advance, resolve) {
                            return (--offset < 0);
                        });
                    }
                    return this;
                },

                limit: function (numRows) {
                    this._ctx.limit = Math.min(this._ctx.limit, numRows); // For count()
                    addFilter(this._ctx, function (cursor, advance, resolve) {
                        if (--numRows <= 0) advance(resolve); // Stop after this item has been included
                        return numRows >= 0; // If numRows is already below 0, return false because then 0 was passed to numRows initially. Otherwise we wouldnt come here.
                    });
                    return this;
                },

                until: function (filterFunction, bIncludeStopEntry) {
                    var ctx = this._ctx;
                    fakeAutoComplete(function () { filterFunction(getInstanceTemplate(ctx)); });
                    addFilter(this._ctx, function (cursor, advance, resolve) {
                        if (filterFunction(cursor.value)) {
                            advance(resolve);
                            return bIncludeStopEntry;
                        } else {
                            return true;
                        }
                    });
                    return this;
                },

                first: function (cb) {
                    var self = this;
                    fakeAutoComplete(function () { cb(getInstanceTemplate(self._ctx)); });
                    return this.limit(1).toArray(function (a) { return a[0]; }).then(cb);
                },

                last: function (cb) {
                    return this.reverse().first(cb);
                },

                and: function (filterFunction) {
                    /// <param name="jsFunctionFilter" type="Function">function(val){return true/false}</param>
                    var self = this;
                    fakeAutoComplete(function () { filterFunction(getInstanceTemplate(self._ctx)); });
                    addFilter(this._ctx, function (cursor) {
                        return filterFunction(cursor.value);
                    });
                    addMatchFilter(this._ctx, filterFunction); // match filters not used in Dexie.js but can be used by 3rd part libraries to test a collection for a match without querying DB. Used by Dexie.Observable.
                    return this;
                },

                or: function (indexName) {
                    return new WhereClause(this._ctx.table, indexName, this);
                },

                reverse: function () {
                    this._ctx.dir = (this._ctx.dir === "prev" ? "next" : "prev");
                    if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
                    return this;
                },

                desc: function () {
                    return this.reverse();
                },

                eachKey: function (cb) {
                    var self = this, ctx = this._ctx;
                    fakeAutoComplete(function () { cb(getInstanceTemplate(self._ctx)[self._ctx.index]); });
                    if (!ctx.isPrimKey) ctx.op = "openKeyCursor"; // Need the check because IDBObjectStore does not have "openKeyCursor()" while IDBIndex has.
                    return this.each(function (val, cursor) { cb(cursor.key, cursor); });
                },

                eachUniqueKey: function (cb) {
                    this._ctx.unique = "unique";
                    return this.eachKey(cb);
                },

                keys: function (cb) {
                    fakeAutoComplete(function () { cb([getInstanceTemplate(ctx)[self._ctx.index]]); });
                    var self = this,
                        ctx = this._ctx;
                    if (!ctx.isPrimKey) ctx.op = "openKeyCursor"; // Need the check because IDBObjectStore does not have "openKeyCursor()" while IDBIndex has.
                    var a = [];
                    return this.each(function (item, cursor) {
                        a.push(cursor.key);
                    }).then(function () {
                        return a;
                    }).then(cb);
                },

                uniqueKeys: function (cb) {
                    this._ctx.unique = "unique";
                    return this.keys(cb);
                },

                firstKey: function (cb) {
                    var self = this;
                    //fakeAutoComplete(function () { cb(getInstanceTemplate(self._ctx)[self._ctx.index]); });
                    //debugger;
                    return this.limit(1).keys(function (a) { return a[0]; }).then(cb);
                },

                lastKey: function (cb) {
                    return this.reverse().firstKey(cb);
                },


                distinct: function () {
                    var set = {};
                    addFilter(this._ctx, function (cursor) {
                        var strKey = cursor.primaryKey.toString(); // Converts any Date to String, String to String, Number to String and Array to comma-separated string
                        var found = set.hasOwnProperty(strKey);
                        set[strKey] = true;
                        return !found;
                    });
                    return this;
                }
            };
        });

        //
        //
        // WriteableCollection Class
        //
        //
        function WriteableCollection() {
            Collection.apply(this, arguments);
        }

        derive(WriteableCollection).from(Collection).extend({

            //
            // WriteableCollection Public Methods
            //

            modify: function (changes) {
                var self = this,
                    ctx = this._ctx,
                    hook = ctx.table.hook,
                    updatingHook = hook.updating.fire,
                    deletingHook = hook.deleting.fire;

                fakeAutoComplete(function () {
                    if (typeof changes === 'function') {
                        changes.call({ value: ctx.table.schema.instanceTemplate }, ctx.table.schema.instanceTemplate);
                    }
                });

                return this._write(function (resolve, reject, idbstore, trans) {
                    var modifyer;
                    if (typeof changes === 'function') {
                        // Changes is a function that may update, add or delete propterties or even require a deletion the object itself (delete this.item)
                        if (updatingHook === nop && deletingHook === nop) {
                            // Noone cares about what is being changed. Just let the modifier function be the given argument as is.
                            modifyer = changes;
                        } else {
                            // People want to know exactly what is being modified or deleted.
                            // Let modifyer be a proxy function that finds out what changes the caller is actually doing
                            // and call the hooks accordingly!
                            modifyer = function (item) {
                                var origItem = deepClone(item); // Clone the item first so we can compare laters.
                                if (changes.call(this, item) === false) return false; // Call the real modifyer function (If it returns false explicitely, it means it dont want to modify anyting on this object)
                                if (!this.hasOwnProperty("value")) {
                                    // The real modifyer function requests a deletion of the object. Inform the deletingHook that a deletion is taking place.
                                    deletingHook.call(this, this.primKey, item, trans);
                                } else {
                                    // No deletion. Check what was changed
                                    var objectDiff = getObjectDiff(origItem, this.value);
                                    var additionalChanges = updatingHook.call(this, objectDiff, this.primKey, origItem, trans);
                                    if (additionalChanges) {
                                        // Hook want to apply additional modifications. Make sure to fullfill the will of the hook.
                                        item = this.value;
                                        Object.keys(additionalChanges).forEach(function (keyPath) {
                                            setByKeyPath(item, keyPath, additionalChanges[keyPath]);  // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                                        });
                                    }
                                }
                            }; 
                        }
                    } else if (updatingHook === nop) {
                        // changes is a set of {keyPath: value} and no one is listening to the updating hook.
                        var keyPaths = Object.keys(changes);
                        var numKeys = keyPaths.length;
                        modifyer = function (item) {
                            var anythingModified = false;
                            for (var i = 0; i < numKeys; ++i) {
                                var keyPath = keyPaths[i], val = changes[keyPath];
                                if (getByKeyPath(item, keyPath) !== val) {
                                    setByKeyPath(item, keyPath, val); // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                                    anythingModified = true;
                                }
                            }
                            return anythingModified;
                        }; 
                    } else {
                        // changes is a set of {keyPath: value} and people are listening to the updating hook so we need to call it and
                        // allow it to add additional modifications to make.
                        var origChanges = changes;
                        changes = shallowClone(origChanges); // Let's work with a clone of the changes keyPath/value set so that we can restore it in case a hook extends it.
                        modifyer = function (item) {
                            var anythingModified = false;
                            var additionalChanges = updatingHook.call(this, changes, this.primKey, deepClone(item), trans);
                            if (additionalChanges) extend(changes, additionalChanges);
                            Object.keys(changes).forEach(function (keyPath) {
                                var val = changes[keyPath];
                                if (getByKeyPath(item, keyPath) !== val) {
                                    setByKeyPath(item, keyPath, val);
                                    anythingModified = true;
                                }
                            });
                            if (additionalChanges) changes = shallowClone(origChanges); // Restore original changes for next iteration
                            return anythingModified;
                        }; 
                    }

                    var count = 0;
                    var successCount = 0;
                    var iterationComplete = false;
                    var failures = [];
                    var failKeys = [];
                    var currentKey = null;

                    function modifyItem(item, cursor, advance) {
                        currentKey = cursor.primaryKey;
                        var thisContext = { primKey: cursor.primaryKey, value: item };
                        if (modifyer.call(thisContext, item) !== false) { // If a callback explicitely returns false, do not perform the update!
                            var bDelete = !thisContext.hasOwnProperty("value");
                            var req = (bDelete ? cursor.delete() : cursor.update(thisContext.value));
                            ++count;
                            req.onerror = eventRejectHandler(function (e) {
                                failures.push(e);
                                failKeys.push(thisContext.primKey);
                                if (thisContext.onerror) thisContext.onerror(e);
                                checkFinished();
                                return true; // Catch these errors and let a final rejection decide whether or not to abort entire transaction
                            }, bDelete ? ["deleting", item, "from", ctx.table.name] : ["modifying", item, "on", ctx.table.name]);
                            req.onsuccess = function (ev) {
                                if (thisContext.onsuccess) thisContext.onsuccess(thisContext.value);
                                ++successCount;
                                checkFinished();
                            }; 
                        } else if (thisContext.onsuccess) {
                            // Hook will expect either onerror or onsuccess to always be called!
                            thisContext.onsuccess(thisContext.value);
                        }
                    }

                    function doReject(e) {
                        if (e) {
                            failures.push(e);
                            failKeys.push(currentKey);
                        }
                        return reject(new ModifyError("Error modifying one or more objects", failures, successCount, failKeys));
                    }

                    function checkFinished() {
                        if (iterationComplete && successCount + failures.length === count) {
                            if (failures.length > 0)
                                doReject();
                            else
                                resolve(successCount);
                        }
                    }
                    self._iterate(modifyItem, function () {
                        iterationComplete = true;
                        checkFinished();
                    }, doReject, idbstore);
                });
            },

            'delete': function () {
                return this.modify(function () { delete this.value; });
            }
        });


        //
        //
        //
        // ------------------------- Help functions ---------------------------
        //
        //
        //

        function lowerVersionFirst(a, b) {
            return a._cfg.version - b._cfg.version;
        }

        function setApiOnPlace(objs, transactionPromiseFactory, tableNames, mode, dbschema, enableProhibitedDB) {
            tableNames.forEach(function (tableName) {
                var tableInstance = db._tableFactory(mode, dbschema[tableName], transactionPromiseFactory);
                objs.forEach(function (obj) {
                    if (!obj[tableName]) {
                        if (enableProhibitedDB) {
                            Object.defineProperty(obj, tableName, {
                                configurable: true,
                                enumerable: true,
                                get: function () {
									var currentTrans = Promise.PSD && Promise.PSD.trans;
                                    if (currentTrans && currentTrans.db === db) {
                                        return currentTrans.tables[tableName];
                                    }
                                    return tableInstance;
                                }
                            });
                        } else {
                            obj[tableName] = tableInstance;
                        }
                    }
                });
            });
        }

        function removeTablesApi(objs) {
            objs.forEach(function (obj) {
                for (var key in obj) {
                    if (obj[key] instanceof Table) delete obj[key];
                }
            });
        }

        function iterate(req, filter, fn, resolve, reject, readingHook) {
            var psd = Promise.PSD;
            readingHook = readingHook || mirror;
            if (!req.onerror) req.onerror = eventRejectHandler(reject);
            if (filter) {
                req.onsuccess = trycatch(function filter_record(e) {
                    var cursor = req.result;
                    if (cursor) {
                        var c = function () { cursor.continue(); };
                        if (filter(cursor, function (advancer) { c = advancer; }, resolve, reject))
                            fn(readingHook(cursor.value), cursor, function (advancer) { c = advancer; });
                        c();
                    } else {
                        resolve();
                    }
                }, reject, psd);
            } else {
                req.onsuccess = trycatch(function filter_record(e) {
                    var cursor = req.result;
                    if (cursor) {
                        var c = function () { cursor.continue(); };
                        fn(readingHook(cursor.value), cursor, function (advancer) { c = advancer; });
                        c();
                    } else {
                        resolve();
                    }
                }, reject, psd);
            }
        }

        function parseIndexSyntax(indexes) {
            /// <param name="indexes" type="String"></param>
            /// <returns type="Array" elementType="IndexSpec"></returns>
            var rv = [];
            indexes.split(',').forEach(function (index) {
                index = index.trim();
                var name = index.replace("&", "").replace("++", "").replace("*", "");
                var keyPath = (name.indexOf('[') !== 0 ? name : index.substring(index.indexOf('[') + 1, index.indexOf(']')).split('+'));

                rv.push(new IndexSpec(
                    name,
                    keyPath || null,
                    index.indexOf('&') !== -1,
                    index.indexOf('*') !== -1,
                    index.indexOf("++") !== -1,
                    Array.isArray(keyPath),
                    keyPath.indexOf('.') !== -1
                ));
            });
            return rv;
        }

        function ascending(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        }

        function descending(a, b) {
            return a < b ? 1 : a > b ? -1 : 0;
        }

        function compoundCompare(itemCompare) {
            return function (a, b) {
                var i = 0;
                while (true) {
                    var result = itemCompare(a[i], b[i]);
                    if (result !== 0) return result;
                    ++i;
                    if (i === a.length || i === b.length)
                        return itemCompare(a.length, b.length);
                }
            };
        }


        function combine(filter1, filter2) {
            return filter1 ? filter2 ? function () { return filter1.apply(this, arguments) && filter2.apply(this, arguments); } : filter1 : filter2;
        }

        function hasIEDeleteObjectStoreBug() {
            // Assume bug is present in IE10 and IE11 but dont expect it in next version of IE (IE12)
            return navigator.userAgent.indexOf("Trident") >= 0 || navigator.userAgent.indexOf("MSIE") >= 0;
        }

        function readGlobalSchema() {
            db.verno = idbdb.version / 10;
            db._dbSchema = globalSchema = {};
            dbStoreNames = [].slice.call(idbdb.objectStoreNames, 0);
            if (dbStoreNames.length === 0) return; // Database contains no stores.
            var trans = idbdb.transaction(safariMultiStoreFix(dbStoreNames), 'readonly');
            dbStoreNames.forEach(function (storeName) {
                var store = trans.objectStore(storeName),
                    keyPath = store.keyPath,
                    dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
                var primKey = new IndexSpec(keyPath, keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== 'string', dotted);
                var indexes = [];
                for (var j = 0; j < store.indexNames.length; ++j) {
                    var idbindex = store.index(store.indexNames[j]);
                    keyPath = idbindex.keyPath;
                    dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
                    var index = new IndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== 'string', dotted);
                    indexes.push(index);
                }
                globalSchema[storeName] = new TableSchema(storeName, primKey, indexes, {});
            });
            setApiOnPlace([allTables], db._transPromiseFactory, Object.keys(globalSchema), READWRITE, globalSchema);
        }

        function adjustToExistingIndexNames(schema, idbtrans) {
            /// <summary>
            /// Issue #30 Problem with existing db - adjust to existing index names when migrating from non-dexie db
            /// </summary>
            /// <param name="schema" type="Object">Map between name and TableSchema</param>
            /// <param name="idbtrans" type="IDBTransaction"></param>
            var storeNames = idbtrans.db.objectStoreNames;
            for (var i = 0; i < storeNames.length; ++i) {
                var storeName = storeNames[i];
                var store = idbtrans.objectStore(storeName);
                for (var j = 0; j < store.indexNames.length; ++j) {
                    var indexName = store.indexNames[j];
                    var keyPath = store.index(indexName).keyPath;
                    var dexieName = typeof keyPath === 'string' ? keyPath : "[" + [].slice.call(keyPath).join('+') + "]";
                    if (schema[storeName]) {
                        var indexSpec = schema[storeName].idxByName[dexieName];
                        if (indexSpec) indexSpec.name = indexName;
                    }
                }
            }
        }

        extend(this, {
            Collection: Collection,
            Table: Table,
            Transaction: Transaction,
            Version: Version,
            WhereClause: WhereClause,
            WriteableCollection: WriteableCollection,
            WriteableTable: WriteableTable
        });

        init();

        addons.forEach(function (fn) {
            fn(db);
        });
    }

    //
    // Promise Class
    //
    // A variant of promise-light (https://github.com/taylorhakes/promise-light) by https://github.com/taylorhakes - an A+ and ECMASCRIPT 6 compliant Promise implementation.
    //
    // Modified by David Fahlander to be indexedDB compliant (See discussion: https://github.com/promises-aplus/promises-spec/issues/45) .
    // This implementation will not use setTimeout or setImmediate when it's not needed. The behavior is 100% Promise/A+ compliant since
    // the caller of new Promise() can be certain that the promise wont be triggered the lines after constructing the promise. We fix this by using the member variable constructing to check
    // whether the object is being constructed when reject or resolve is called. If so, the use setTimeout/setImmediate to fulfill the promise, otherwise, we know that it's not needed.
    //
    // This topic was also discussed in the following thread: https://github.com/promises-aplus/promises-spec/issues/45 and this implementation solves that issue.
    //
    // Another feature with this Promise implementation is that reject will return false in case no one catched the reject call. This is used
    // to stopPropagation() on the IDBRequest error event in case it was catched but not otherwise.
    //
    // Also, the event new Promise().onuncatched is called in case no one catches a reject call. This is used for us to manually bubble any request
    // errors to the transaction. We must not rely on IndexedDB implementation to do this, because it only does so when the source of the rejection
    // is an error event on a request, not in case an ordinary exception is thrown.
    var Promise = (function () {

        // The use of asap in handle() is remarked because we must NOT use setTimeout(fn,0) because it causes premature commit of indexedDB transactions - which is according to indexedDB specification.
        var _slice = [].slice;
        var _asap = typeof (setImmediate) === 'undefined' ? function(fn, arg1, arg2, argN) {
            var args = arguments;
            setTimeout(function() { fn.apply(global, _slice.call(args, 1)); }, 0); // If not FF13 and earlier failed, we could use this call here instead: setTimeout.call(this, [fn, 0].concat(arguments));
        } : setImmediate; // IE10+ and node.

        var asap = _asap,
            isRootExecution = true;

        var operationsQueue = [];
        var tickFinalizers = [];
        function enqueueImmediate(fn, args) {
            operationsQueue.push([fn, _slice.call(arguments, 1)]);
        }

        function executeOperationsQueue() {
            var queue = operationsQueue;
            operationsQueue = [];
            for (var i = 0, l = queue.length; i < l; ++i) {
                var item = queue[i];
                item[0].apply(global, item[1]);
            }
        }

        //var PromiseID = 0;
        function Promise(fn) {
            if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
            if (typeof fn !== 'function') throw new TypeError('not a function');
            this._state = null; // null (=pending), false (=rejected) or true (=resolved)
            this._value = null; // error or result
            this._deferreds = [];
            this._catched = false; // for onuncatched
            //this._id = ++PromiseID;
            var self = this;
            var constructing = true;
            this._PSD = Promise.PSD;

            try {
                doResolve(this, fn, function (data) {
                    if (constructing)
                        asap(resolve, self, data);
                    else
                        resolve(self, data);
                }, function (reason) {
                    if (constructing) {
                        asap(reject, self, reason);
                        return false;
                    } else {
                        return reject(self, reason);
                    }
                });
            } finally {
                constructing = false;
            }
        }

        function handle(self, deferred) {
            if (self._state === null) {
                self._deferreds.push(deferred);
                return;
            }

            var cb = self._state ? deferred.onFulfilled : deferred.onRejected;
            if (cb === null) {
                // This Deferred doesnt have a listener for the event being triggered (onFulfilled or onReject) so lets forward the event to any eventual listeners on the Promise instance returned by then() or catch()
                return (self._state ? deferred.resolve : deferred.reject)(self._value);
            }
            var ret, isRootExec = isRootExecution;
            isRootExecution = false;
            asap = enqueueImmediate;
            try {
                var outerPSD = Promise.PSD;
                Promise.PSD = self._PSD;
                ret = cb(self._value);
                if (!self._state && (!ret || typeof ret.then !== 'function' || ret._state !== false)) setCatched(self); // Caller did 'return Promise.reject(err);' - don't regard it as catched!
                deferred.resolve(ret);
            } catch (e) {
                var catched = deferred.reject(e);
                if (!catched && self.onuncatched) {
                    try {
                        self.onuncatched(e);
                    } catch (e) {
                    }
                }
            } finally {
                Promise.PSD = outerPSD;
                if (isRootExec) {
                    do {
                        while (operationsQueue.length > 0) executeOperationsQueue();
                        var finalizer = tickFinalizers.pop();
                        if (finalizer) try {finalizer();} catch(e){}
                    } while (tickFinalizers.length > 0 || operationsQueue.length > 0);
                    asap = _asap;
                    isRootExecution = true;
                }
            }
        }

        function _rootExec(fn) {
            var isRootExec = isRootExecution;
            isRootExecution = false;
            asap = enqueueImmediate;
            try {
                fn();
            } finally {
                if (isRootExec) {
                    do {
                        while (operationsQueue.length > 0) executeOperationsQueue();
                        var finalizer = tickFinalizers.pop();
                        if (finalizer) try { finalizer(); } catch (e) { }
                    } while (tickFinalizers.length > 0 || operationsQueue.length > 0);
                    asap = _asap;
                    isRootExecution = true;
                }
            }
        }

        function setCatched(promise) {
            promise._catched = true;
            if (promise._parent) setCatched(promise._parent);
        }

        function resolve(promise, newValue) {
            var outerPSD = Promise.PSD;
            Promise.PSD = promise._PSD;
            try { //Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
                if (newValue === promise) throw new TypeError('A promise cannot be resolved with itself.');
                if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
                    if (typeof newValue.then === 'function') {
                        doResolve(promise, function (resolve, reject) {
                            //newValue instanceof Promise ? newValue._then(resolve, reject) : newValue.then(resolve, reject);
                            newValue.then(resolve, reject);
                        }, function (data) {
                            resolve(promise, data);
                        }, function (reason) {
                            reject(promise, reason);
                        });
                        return;
                    }
                }
                promise._state = true;
                promise._value = newValue;
                finale.call(promise);
            } catch (e) { reject(e); } finally {
                Promise.PSD = outerPSD;
            }
        }

        function reject(promise, newValue) {
            var outerPSD = Promise.PSD;
            Promise.PSD = promise._PSD;
            promise._state = false;
            promise._value = newValue;

            finale.call(promise);
            if (!promise._catched) {
                try {
                    if (promise.onuncatched)
                        promise.onuncatched(promise._value);
                    Promise.on.error.fire(promise._value);
                } catch (e) {
                }
            }
            Promise.PSD = outerPSD;
            return promise._catched;
        }

        function finale() {
            for (var i = 0, len = this._deferreds.length; i < len; i++) {
                handle(this, this._deferreds[i]);
            }
            this._deferreds = [];
        }

        function Deferred(onFulfilled, onRejected, resolve, reject) {
            this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
            this.onRejected = typeof onRejected === 'function' ? onRejected : null;
            this.resolve = resolve;
            this.reject = reject;
        }

        /**
         * Take a potentially misbehaving resolver function and make sure
         * onFulfilled and onRejected are only called once.
         *
         * Makes no guarantees about asynchrony.
         */
        function doResolve(promise, fn, onFulfilled, onRejected) {
            var done = false;
            try {
                fn(function Promise_resolve(value) {
                    if (done) return;
                    done = true;
                    onFulfilled(value);
                }, function Promise_reject(reason) {
                    if (done) return promise._catched;
                    done = true;
                    return onRejected(reason);
                });
            } catch (ex) {
                if (done) return;
                return onRejected(ex);
            }
        }

        Promise.on = events(null, "error");

        Promise.all = function () {
            var args = Array.prototype.slice.call(arguments.length === 1 && Array.isArray(arguments[0]) ? arguments[0] : arguments);

            return new Promise(function (resolve, reject) {
                if (args.length === 0) return resolve([]);
                var remaining = args.length;
                function res(i, val) {
                    try {
                        if (val && (typeof val === 'object' || typeof val === 'function')) {
                            var then = val.then;
                            if (typeof then === 'function') {
                                then.call(val, function (val) { res(i, val); }, reject);
                                return;
                            }
                        }
                        args[i] = val;
                        if (--remaining === 0) {
                            resolve(args);
                        }
                    } catch (ex) {
                        reject(ex);
                    }
                }
                for (var i = 0; i < args.length; i++) {
                    res(i, args[i]);
                }
            });
        };

        /* Prototype Methods */
        Promise.prototype.then = function (onFulfilled, onRejected) {
            var self = this;
            var p = new Promise(function (resolve, reject) {
                if (self._state === null)
                    handle(self, new Deferred(onFulfilled, onRejected, resolve, reject));
                else
                    asap(handle, self, new Deferred(onFulfilled, onRejected, resolve, reject));
            });
            p._PSD = this._PSD;
            p.onuncatched = this.onuncatched; // Needed when exception occurs in a then() clause of a successful parent promise. Want onuncatched to be called even in callbacks of callbacks of the original promise.
            p._parent = this; // Used for recursively calling onuncatched event on self and all parents.
            return p;
        };

        Promise.prototype._then = function (onFulfilled, onRejected) {
            handle(this, new Deferred(onFulfilled, onRejected, nop,nop));
        };

        Promise.prototype['catch'] = function (onRejected) {
            if (arguments.length === 1) return this.then(null, onRejected);
            // First argument is the Error type to catch
            var type = arguments[0], callback = arguments[1];
            if (typeof type === 'function') return this.then(null, function (e) {
                // Catching errors by its constructor type (similar to java / c++ / c#)
                // Sample: promise.catch(TypeError, function (e) { ... });
                if (e instanceof type) return callback(e); else return Promise.reject(e);
            });
            else return this.then(null, function (e) {
                // Catching errors by the error.name property. Makes sense for indexedDB where error type
                // is always DOMError but where e.name tells the actual error type.
                // Sample: promise.catch('ConstraintError', function (e) { ... });
                if (e && e.name === type) return callback(e); else return Promise.reject(e);
            });
        };

        Promise.prototype['finally'] = function (onFinally) {
            return this.then(function (value) {
                onFinally();
                return value;
            }, function (err) {
                onFinally();
                return Promise.reject(err);
            });
        };

        Promise.prototype.onuncatched = null; // Optional event triggered if promise is rejected but no one listened.

        Promise.resolve = function (value) {
            var p = new Promise(function () { });
            p._state = true;
            p._value = value;
            return p;
        };

        Promise.reject = function (value) {
            var p = new Promise(function () { });
            p._state = false;
            p._value = value;
            return p;
        };

        Promise.race = function (values) {
            return new Promise(function (resolve, reject) {
                values.map(function (value) {
                    value.then(resolve, reject);
                });
            });
        };

        Promise.PSD = null; // Promise Specific Data - a TLS Pattern (Thread Local Storage) for Promises. TODO: Rename Promise.PSD to Promise.data

        Promise.newPSD = function (fn) {
            // Create new PSD scope (Promise Specific Data)
            var outerScope = Promise.PSD;
            Promise.PSD = outerScope ? Object.create(outerScope) : {};
            try {
                return fn();
            } finally {
                Promise.PSD = outerScope;
            }
        };

        Promise._rootExec = _rootExec;
        Promise._tickFinalize = function(callback) {
            if (isRootExecution) throw new Error("Not in a virtual tick");
            tickFinalizers.push(callback);
        };

        return Promise;
    })();


    //
    //
    // ------ Exportable Help Functions -------
    //
    //

    function nop() { }
    function mirror(val) { return val; }

    function pureFunctionChain(f1, f2) {
        // Enables chained events that takes ONE argument and returns it to the next function in chain.
        // This pattern is used in the hook("reading") event.
        if (f1 === mirror) return f2;
        return function (val) {
            return f2(f1(val));
        }; 
    }

    function callBoth(on1, on2) {
        return function () {
            on1.apply(this, arguments);
            on2.apply(this, arguments);
        }; 
    }

    function hookCreatingChain(f1, f2) {
        // Enables chained events that takes several arguments and may modify first argument by making a modification and then returning the same instance.
        // This pattern is used in the hook("creating") event.
        if (f1 === nop) return f2;
        return function () {
            var res = f1.apply(this, arguments);
            if (res !== undefined) arguments[0] = res;
            var onsuccess = this.onsuccess, // In case event listener has set this.onsuccess
                onerror = this.onerror;     // In case event listener has set this.onerror
            delete this.onsuccess;
            delete this.onerror;
            var res2 = f2.apply(this, arguments);
            if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
            return res2 !== undefined ? res2 : res;
        }; 
    }

    function hookUpdatingChain(f1, f2) {
        if (f1 === nop) return f2;
        return function () {
            var res = f1.apply(this, arguments);
            if (res !== undefined) extend(arguments[0], res); // If f1 returns new modifications, extend caller's modifications with the result before calling next in chain.
            var onsuccess = this.onsuccess, // In case event listener has set this.onsuccess
                onerror = this.onerror;     // In case event listener has set this.onerror
            delete this.onsuccess;
            delete this.onerror;
            var res2 = f2.apply(this, arguments);
            if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
            return res === undefined ?
                (res2 === undefined ? undefined : res2) :
                (res2 === undefined ? res : extend(res, res2));
        }; 
    }

    function stoppableEventChain(f1, f2) {
        // Enables chained events that may return false to stop the event chain.
        if (f1 === nop) return f2;
        return function () {
            if (f1.apply(this, arguments) === false) return false;
            return f2.apply(this, arguments);
        }; 
    }

    function reverseStoppableEventChain(f1, f2) {
        if (f1 === nop) return f2;
        return function () {
            if (f2.apply(this, arguments) === false) return false;
            return f1.apply(this, arguments);
        }; 
    }

    function nonStoppableEventChain(f1, f2) {
        if (f1 === nop) return f2;
        return function () {
            f1.apply(this, arguments);
            f2.apply(this, arguments);
        }; 
    }

    function promisableChain(f1, f2) {
        if (f1 === nop) return f2;
        return function () {
            var res = f1.apply(this, arguments);
            if (res && typeof res.then === 'function') {
                var thiz = this, args = arguments;
                return res.then(function () {
                    return f2.apply(thiz, args);
                });
            }
            return f2.apply(this, arguments);
        }; 
    }

    function events(ctx, eventNames) {
        var args = arguments;
        var evs = {};
        var rv = function (eventName, subscriber) {
            if (subscriber) {
                // Subscribe
                var args = [].slice.call(arguments, 1);
                var ev = evs[eventName];
                ev.subscribe.apply(ev, args);
                return ctx;
            } else if (typeof (eventName) === 'string') {
                // Return interface allowing to fire or unsubscribe from event
                return evs[eventName];
            }
        }; 
        rv.addEventType = add;

        function add(eventName, chainFunction, defaultFunction) {
            if (Array.isArray(eventName)) return addEventGroup(eventName);
            if (typeof eventName === 'object') return addConfiguredEvents(eventName);
            if (!chainFunction) chainFunction = stoppableEventChain;
            if (!defaultFunction) defaultFunction = nop;

            var context = {
                subscribers: [],
                fire: defaultFunction,
                subscribe: function (cb) {
                    context.subscribers.push(cb);
                    context.fire = chainFunction(context.fire, cb);
                },
                unsubscribe: function (cb) {
                    context.subscribers = context.subscribers.filter(function (fn) { return fn !== cb; });
                    context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
                }
            };
            evs[eventName] = rv[eventName] = context;
            return context;
        }

        function addConfiguredEvents(cfg) {
            // events(this, {reading: [functionChain, nop]});
            Object.keys(cfg).forEach(function (eventName) {
                var args = cfg[eventName];
                if (Array.isArray(args)) {
                    add(eventName, cfg[eventName][0], cfg[eventName][1]);
                } else if (args === 'asap') {
                    // Rather than approaching event subscription using a functional approach, we here do it in a for-loop where subscriber is executed in its own stack
                    // enabling that any exception that occur wont disturb the initiator and also not nescessary be catched and forgotten.
                    var context = add(eventName, null, function fire() {
                        var args = arguments;
                        context.subscribers.forEach(function (fn) {
                            asap(function fireEvent() {
                                fn.apply(global, args);
                            });
                        });
                    });
                    context.subscribe = function (fn) {
                        // Change how subscribe works to not replace the fire function but to just add the subscriber to subscribers
                        if (context.subscribers.indexOf(fn) === -1)
                            context.subscribers.push(fn);
                    }; 
                    context.unsubscribe = function (fn) {
                        // Change how unsubscribe works for the same reason as above.
                        var idxOfFn = context.subscribers.indexOf(fn);
                        if (idxOfFn !== -1) context.subscribers.splice(idxOfFn, 1);
                    }; 
                } else throw new Error("Invalid event config");
            });
        }

        function addEventGroup(eventGroup) {
            // promise-based event group (i.e. we promise to call one and only one of the events in the pair, and to only call it once.
            var done = false;
            eventGroup.forEach(function (name) {
                add(name).subscribe(checkDone);
            });
            function checkDone() {
                if (done) return false;
                done = true;
            }
        }

        for (var i = 1, l = args.length; i < l; ++i) {
            add(args[i]);
        }

        return rv;
    }

    function assert(b) {
        if (!b) throw new Error("Assertion failed");
    }

    function asap(fn) {
        if (global.setImmediate) setImmediate(fn); else setTimeout(fn, 0);
    }

    var fakeAutoComplete = function() {};

    function doFakeAutoComplete(fn) {
        var to = setTimeout(fn, 1000);
        clearTimeout(to);
    }

    function trycatch(fn, reject, psd) {
        return function () {
            var outerPSD = Promise.PSD; // Support Promise-specific data (PSD) in callback calls
            Promise.PSD = psd;
            try {
                fn.apply(this, arguments);
            } catch (e) {
                reject(e);
            } finally {
                Promise.PSD = outerPSD;
            }
        };
    }

    function getByKeyPath(obj, keyPath) {
        // http://www.w3.org/TR/IndexedDB/#steps-for-extracting-a-key-from-a-value-using-a-key-path
        if (obj.hasOwnProperty(keyPath)) return obj[keyPath]; // This line is moved from last to first for optimization purpose.
        if (!keyPath) return obj;
        if (typeof keyPath !== 'string') {
            var rv = [];
            for (var i = 0, l = keyPath.length; i < l; ++i) {
                var val = getByKeyPath(obj, keyPath[i]);
                rv.push(val);
            }
            return rv;
        }
        var period = keyPath.indexOf('.');
        if (period !== -1) {
            var innerObj = obj[keyPath.substr(0, period)];
            return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
        }
        return undefined;
    }

    function setByKeyPath(obj, keyPath, value) {
        if (!obj || keyPath === undefined) return;
        if (typeof keyPath !== 'string' && 'length' in keyPath) {
            assert(typeof value !== 'string' && 'length' in value);
            for (var i = 0, l = keyPath.length; i < l; ++i) {
                setByKeyPath(obj, keyPath[i], value[i]);
            }
        } else {
            var period = keyPath.indexOf('.');
            if (period !== -1) {
                var currentKeyPath = keyPath.substr(0, period);
                var remainingKeyPath = keyPath.substr(period + 1);
                if (remainingKeyPath === "")
                    if (value === undefined) delete obj[currentKeyPath]; else obj[currentKeyPath] = value;
                else {
                    var innerObj = obj[currentKeyPath];
                    if (!innerObj) innerObj = (obj[currentKeyPath] = {});
                    setByKeyPath(innerObj, remainingKeyPath, value);
                }
            } else {
                if (value === undefined) delete obj[keyPath]; else obj[keyPath] = value;
            }
        }
    }

    function delByKeyPath(obj, keyPath) {
        setByKeyPath(obj, keyPath, undefined);
    }

    function shallowClone(obj) {
        var rv = {};
        for (var m in obj) {
            if (obj.hasOwnProperty(m)) rv[m] = obj[m];
        }
        return rv;
    }

    function deepClone(any) {
        if (!any || typeof any !== 'object') return any;
        var rv;
        if (Array.isArray(any)) {
            rv = [];
            for (var i = 0, l = any.length; i < l; ++i) {
                rv.push(deepClone(any[i]));
            }
        } else if (any instanceof Date) {
            rv = new Date();
            rv.setTime(any.getTime());
        } else {
            rv = any.constructor ? Object.create(any.constructor.prototype) : {};
            for (var prop in any) {
                if (any.hasOwnProperty(prop)) {
                    rv[prop] = deepClone(any[prop]);
                }
            }
        }
        return rv;
    }

    function getObjectDiff(a, b) {
        // This is a simplified version that will always return keypaths on the root level.
        // If for example a and b differs by: (a.somePropsObject.x != b.somePropsObject.x), we will return that "somePropsObject" is changed
        // and not "somePropsObject.x". This is acceptable and true but could be optimized to support nestled changes if that would give a
        // big optimization benefit.
        var rv = {};
        for (var prop in a) if (a.hasOwnProperty(prop)) {
            if (!b.hasOwnProperty(prop))
                rv[prop] = undefined; // Property removed
            else if (a[prop] !== b[prop] && JSON.stringify(a[prop]) != JSON.stringify(b[prop]))
                rv[prop] = b[prop]; // Property changed
        }
        for (var prop in b) if (b.hasOwnProperty(prop) && !a.hasOwnProperty(prop)) {
            rv[prop] = b[prop]; // Property added
        }
        return rv;
    }

    function parseType(type) {
        if (typeof type === 'function') {
            return new type();
        } else if (Array.isArray(type)) {
            return [parseType(type[0])];
        } else if (type && typeof type === 'object') {
            var rv = {};
            applyStructure(rv, type);
            return rv;
        } else {
            return type;
        }
    }

    function applyStructure(obj, structure) {
        Object.keys(structure).forEach(function (member) {
            var value = parseType(structure[member]);
            obj[member] = value;
        });
    }

    function eventRejectHandler(reject, sentance) {
        return function (event) {
            var errObj = (event && event.target.error) || new Error();
            if (sentance) {
                var occurredWhen = " occurred when " + sentance.map(function (word) {
                    switch (typeof (word)) {
                        case 'function': return word();
                        case 'string': return word;
                        default: return JSON.stringify(word);
                    }
                }).join(" ");
                if (errObj.name) {
                    errObj.toString = function toString() {
                        return errObj.name + occurredWhen + (errObj.message ? ". " + errObj.message : "");
                        // Code below works for stacked exceptions, BUT! stack is never present in event errors (not in any of the browsers). So it's no use to include it!
                        /*delete this.toString; // Prohibiting endless recursiveness in IE.
                        if (errObj.stack) rv += (errObj.stack ? ". Stack: " + errObj.stack : "");
                        this.toString = toString;
                        return rv;*/
                    };
                } else {
                    errObj = errObj + occurredWhen;
                }
            };
            reject(errObj);

            if (event) {// Old versions of IndexedDBShim doesnt provide an error event
                // Stop error from propagating to IDBTransaction. Let us handle that manually instead.
                if (event.stopPropagation) // IndexedDBShim doesnt support this
                    event.stopPropagation();
                if (event.preventDefault) // IndexedDBShim doesnt support this
                    event.preventDefault();
            }

            return false;
        };
    }

    function stack(error) {
        try {
            throw error;
        } catch (e) {
            return e;
        }
    }
    function preventDefault(e) {
        e.preventDefault();
    }

    function globalDatabaseList(cb) {
        var val,
            localStorage = Dexie.dependencies.localStorage;
        if (!localStorage) return cb([]); // Envs without localStorage support
        try {
            val = JSON.parse(localStorage.getItem('Dexie.DatabaseNames') || "[]");
        } catch (e) {
            val = [];
        }
        if (cb(val)) {
            localStorage.setItem('Dexie.DatabaseNames', JSON.stringify(val));
        }
    }

    //
    // IndexSpec struct
    //
    function IndexSpec(name, keyPath, unique, multi, auto, compound, dotted) {
        /// <param name="name" type="String"></param>
        /// <param name="keyPath" type="String"></param>
        /// <param name="unique" type="Boolean"></param>
        /// <param name="multi" type="Boolean"></param>
        /// <param name="auto" type="Boolean"></param>
        /// <param name="compound" type="Boolean"></param>
        /// <param name="dotted" type="Boolean"></param>
        this.name = name;
        this.keyPath = keyPath;
        this.unique = unique;
        this.multi = multi;
        this.auto = auto;
        this.compound = compound;
        this.dotted = dotted;
        var keyPathSrc = typeof keyPath === 'string' ? keyPath : keyPath && ('[' + [].join.call(keyPath, '+') + ']');
        this.src = (unique ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + keyPathSrc;
    }

    //
    // TableSchema struct
    //
    function TableSchema(name, primKey, indexes, instanceTemplate) {
        /// <param name="name" type="String"></param>
        /// <param name="primKey" type="IndexSpec"></param>
        /// <param name="indexes" type="Array" elementType="IndexSpec"></param>
        /// <param name="instanceTemplate" type="Object"></param>
        this.name = name;
        this.primKey = primKey || new IndexSpec();
        this.indexes = indexes || [new IndexSpec()];
        this.instanceTemplate = instanceTemplate;
        this.mappedClass = null;
        this.idxByName = indexes.reduce(function (hashSet, index) {
            hashSet[index.name] = index;
            return hashSet;
        }, {});
    }

    //
    // ModifyError Class (extends Error)
    //
    function ModifyError(msg, failures, successCount, failedKeys) {
        this.name = "ModifyError";
        this.failures = failures;
        this.failedKeys = failedKeys;
        this.successCount = successCount;
        this.message = failures.join('\n');
    }
    derive(ModifyError).from(Error);

    //
    // Static delete() method.
    //
    Dexie.delete = function (databaseName) {
        var db = new Dexie(databaseName),
            promise = db.delete();
        promise.onblocked = function (fn) {
            db.on("blocked", fn);
            return this;
        };
        return promise;
    }; 

    //
    // Static method for retrieving a list of all existing databases at current host.
    //
    Dexie.getDatabaseNames = function (cb) {
        return new Promise(function (resolve, reject) {
            var getDatabaseNames = getNativeGetDatabaseNamesFn();
            if (getDatabaseNames) { // In case getDatabaseNames() becomes standard, let's prepare to support it:
                var req = getDatabaseNames();
                req.onsuccess = function (event) {
                    resolve([].slice.call(event.target.result, 0)); // Converst DOMStringList to Array<String>
                }; 
                req.onerror = eventRejectHandler(reject);
            } else {
                globalDatabaseList(function (val) {
                    resolve(val);
                    return false;
                });
            }
        }).then(cb);
    }; 

    Dexie.defineClass = function (structure) {
        /// <summary>
        ///     Create a javascript constructor based on given template for which properties to expect in the class.
        ///     Any property that is a constructor function will act as a type. So {name: String} will be equal to {name: new String()}.
        /// </summary>
        /// <param name="structure">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
        /// know what type each member has. Example: {name: String, emailAddresses: [String], properties: {shoeSize: Number}}</param>

        // Default constructor able to copy given properties into this object.
        function Class(properties) {
            /// <param name="properties" type="Object" optional="true">Properties to initialize object with.
            /// </param>
            if (properties) extend(this, properties);
        }
        applyStructure(Class.prototype, structure);
        return Class;
    }; 

    Dexie.ignoreTransaction = function (scopeFunc) {
        // In case caller is within a transaction but needs to create a separate transaction.
        // Example of usage:
        // 
        // Let's say we have a logger function in our app. Other application-logic should be unaware of the
        // logger function and not need to include the 'logentries' table in all transaction it performs.
        // The logging should always be done in a separate transaction and not be dependant on the current
        // running transaction context. Then you could use Dexie.ignoreTransaction() to run code that starts a new transaction.
        //
        //     Dexie.ignoreTransaction(function() {
        //         db.logentries.add(newLogEntry);
        //     });
        //
        // Unless using Dexie.ignoreTransaction(), the above example would try to reuse the current transaction
        // in current Promise-scope.
        //
        // An alternative to Dexie.ignoreTransaction() would be setImmediate() or setTimeout(). The reason we still provide an
        // API for this because
        //  1) The intention of writing the statement could be unclear if using setImmediate() or setTimeout().
        //  2) setTimeout() would wait unnescessary until firing. This is however not the case with setImmediate().
        //  3) setImmediate() is not supported in the ES standard.
        return Promise.newPSD(function () {
            Promise.PSD.trans = null;
            return scopeFunc();
        });
    };
    Dexie.spawn = function () {
        if (global.console) console.warn("Dexie.spawn() is deprecated. Use Dexie.ignoreTransaction() instead.");
        return Dexie.ignoreTransaction.apply(this, arguments);
    }

    Dexie.vip = function (fn) {
        // To be used by subscribers to the on('ready') event.
        // This will let caller through to access DB even when it is blocked while the db.ready() subscribers are firing.
        // This would have worked automatically if we were certain that the Provider was using Dexie.Promise for all asyncronic operations. The promise PSD
        // from the provider.connect() call would then be derived all the way to when provider would call localDatabase.applyChanges(). But since
        // the provider more likely is using non-promise async APIs or other thenable implementations, we cannot assume that.
        // Note that this method is only useful for on('ready') subscribers that is returning a Promise from the event. If not using vip()
        // the database could deadlock since it wont open until the returned Promise is resolved, and any non-VIPed operation started by
        // the caller will not resolve until database is opened.
        return Promise.newPSD(function () {
            Promise.PSD.letThrough = true; // Make sure we are let through if still blocking db due to onready is firing.
            return fn();
        });
    }; 

    // Dexie.currentTransaction property. Only applicable for transactions entered using the new "transact()" method.
    Object.defineProperty(Dexie, "currentTransaction", {
        get: function () {
            /// <returns type="Transaction"></returns>
            return Promise.PSD && Promise.PSD.trans || null;
        }
    }); 

    function safariMultiStoreFix(storeNames) {
        return storeNames.length === 1 ? storeNames[0] : storeNames;
    }

    // Export our Promise implementation since it can be handy as a standalone Promise implementation
    Dexie.Promise = Promise;
    // Export our derive/extend/override methodology
    Dexie.derive = derive;
    Dexie.extend = extend;
    Dexie.override = override;
    // Export our events() function - can be handy as a toolkit
    Dexie.events = events;
    Dexie.getByKeyPath = getByKeyPath;
    Dexie.setByKeyPath = setByKeyPath;
    Dexie.delByKeyPath = delByKeyPath;
    Dexie.shallowClone = shallowClone;
    Dexie.deepClone = deepClone;
    Dexie.addons = [];
    Dexie.fakeAutoComplete = fakeAutoComplete;
    Dexie.asap = asap;
    // Export our static classes
    Dexie.ModifyError = ModifyError;
    Dexie.MultiModifyError = ModifyError; // Backward compatibility pre 0.9.8
    Dexie.IndexSpec = IndexSpec;
    Dexie.TableSchema = TableSchema;
    //
    // Dependencies
    //
    // These will automatically work in browsers with indexedDB support, or where an indexedDB polyfill has been included.
    //
    // In node.js, however, these properties must be set "manually" before instansiating a new Dexie(). For node.js, you need to require indexeddb-js or similar and then set these deps.
    //
    var idbshim = global.idbModules && global.idbModules.shimIndexedDB ? global.idbModules : {};
    Dexie.dependencies = {
        // Required:
        // NOTE: The "_"-prefixed versions are for prioritizing IDB-shim on IOS8 before the native IDB in case the shim was included.
        indexedDB: idbshim.shimIndexedDB || global.indexedDB || global.mozIndexedDB || global.webkitIndexedDB || global.msIndexedDB,
        IDBKeyRange: idbshim.IDBKeyRange || global.IDBKeyRange || global.webkitIDBKeyRange,
        IDBTransaction: idbshim.IDBTransaction || global.IDBTransaction || global.webkitIDBTransaction,
        // Optional:
        Error: global.Error || String,
        SyntaxError: global.SyntaxError || String,
        TypeError: global.TypeError || String,
        DOMError: global.DOMError || String,
        localStorage: ((typeof chrome !== "undefined" && chrome !== null ? chrome.storage : void 0) != null ? null : global.localStorage)
    }; 

    // API Version Number: Type Number, make sure to always set a version number that can be comparable correctly. Example: 0.9, 0.91, 0.92, 1.0, 1.01, 1.1, 1.2, 1.21, etc.
    Dexie.version = 1.10;

    function getNativeGetDatabaseNamesFn() {
        var indexedDB = Dexie.dependencies.indexedDB;
        var fn = indexedDB && (indexedDB.getDatabaseNames || indexedDB.webkitGetDatabaseNames);
        return fn && fn.bind(indexedDB);
    }

    // Export Dexie to window or as a module depending on environment.
    publish("Dexie", Dexie);

    // Fool IDE to improve autocomplete. Tested with Visual Studio 2013 but should work with 2012 and 2015 as well.
    doFakeAutoComplete(function() {
        fakeAutoComplete = doFakeAutoComplete;
    });
}).apply(null,

    // AMD:
    typeof define === 'function' && define.amd ?
    [self || window, function (name, value) { define(name, function () { return value; }); }] :

    // CommonJS:
    typeof global !== 'undefined' && typeof module !== 'undefined' && module.exports ?
    [global, function (name, value) { module.exports = value; }]

    // Vanilla HTML and WebWorkers:
    : [self || window, function (name, value) { (self || window)[name] = value; }]);


//# sourceMappingURL=vendors.js.map