/*
 List of plugins:
  - Backstretch
  -
  - whichTransitionEvent
  - whichAnimationEvent
  - Trace 1.0
  - Get Query string using javascript only
  - Request Animation Frame
  - Animate Bounce
  - Debounce
  - Placeholder
  - Get ducument size
  - Easing 1.3
  - imagesLoaded PACKAGED v3.0.4 : a jquery plugin for preloading images
  - fullscreen background
  - Scale, rotate animate css using js

  - ColorBox v1.3.20.1
  - Tiny Scrollbar 1.81
  - jAlert 1.1
  - Custom Combobox
  - CUSTOM FORM ELEMENTS (Radio button & Checkbox)
  - Velocity
  - Custom jQuery Mobile v1.4.2
  - JQuery Mouse Wheel
  - JQuery Smooth Scroll
  - MAP BOX v2.4.0
*/



/*
 Copyright (c) 2013-2017, Nazar Mokrynskyi
 @copyright Copyright (c) 2008-2009, Stefan Petre
 @license   MIT License, see license.txt
*/
(function(F,x){"function"===typeof define&&define.amd?define(x):"object"===typeof exports?module.exports=x():F.pickmeup=x()})(this,function(){function F(a,b,c){c=c||[];if(a instanceof Element)b.apply(b,[a].concat(c));else{var d,e;d=a.length;for(e=0;e<d;++e)b.apply(b,[a[e]].concat(c))}}function x(a){F(a,function(a){a.parentElement.removeChild(a)})}function J(a,b){do a=a.parentElement;while(a&&!B(a,b));return a}function B(a,b){return(a.matches||a.webkitMatchesSelector||a.msMatchesSelector).call(a,b)}
function n(a,b){return a&&a.classList.contains(b)}function g(a,b){a.classList.add(b)}function t(a,b,c,d){if(-1!==c.indexOf(" ")){c=c.split(" ");var e=c.length,g;for(g=0;g<e;++g)t(a,b,c[g],d)}else a.__pickmeup.events.push([b,c,d]),b.addEventListener(c,d)}function y(a,b,c,d){var e,g,f;if(c&&-1!==c.indexOf(" "))for(e=c.split(" "),g=e.length,f=0;f<g;++f)y(a,b,e[f],d);else for(e=a.__pickmeup.events,g=e.length,f=0;f<g;++f)b&&b!=e[f][0]||c&&c!=e[f][1]||d&&d!=e[f][2]||e[f][0].removeEventListener(e[f][1],
e[f][2])}function M(a){a=a.getBoundingClientRect();return{top:a.top+window.pageYOffset-document.documentElement.clientTop,left:a.left+window.pageXOffset-document.documentElement.clientLeft}}function C(a,b,c){var d=document.createEvent("Event");c&&(d.detail=c);d.initEvent("pickmeup-"+b,!1,!0);return a.dispatchEvent(d)}function K(a){a=new Date(a);for(var b=28,c=a.getMonth();a.getMonth()==c;)++b,a.setDate(b);return b-1}function z(a,b){a.setDate(a.getDate()+b)}function q(a,b){var c=a.getDate();a.setDate(1);
a.setMonth(a.getMonth()+b);a.setDate(Math.min(c,K(a)))}function w(a,b){var c=a.getDate();a.setDate(1);a.setFullYear(a.getFullYear()+b);a.setDate(Math.min(c,K(a)))}function N(a){var b=a.__pickmeup.element,c=a.__pickmeup.options,d=Math.floor(c.calendars/2),e=c.date,G=c.current,f=c.min?new Date(c.min):null,l=c.max?new Date(c.max):null,k,m,p,v,r;f&&(f.setDate(1),q(f,1),z(f,-1));l&&(l.setDate(1),q(l,1),z(l,-1));x(Array.prototype.slice.call(b.querySelectorAll(".pmu-instance \x3e :not(nav)")));for(var h=
0;h<c.calendars;h++){k=new Date(G);A(k);p=Array.prototype.slice.call(b.querySelectorAll(".pmu-instance"))[h];n(b,"pmu-view-years")?(w(k,12*(h-d)),m=k.getFullYear()-6+" - "+(k.getFullYear()+5)):n(b,"pmu-view-months")?(w(k,h-d),m=k.getFullYear()):n(b,"pmu-view-days")&&(q(k,h-d),m=D(k,c.title_format,c.locales[c.locale]));if(!r&&l&&(r=new Date(k),c.select_day?q(r,c.calendars-1):c.select_month?w(r,c.calendars-1):w(r,12*(c.calendars-1)),r>l)){--h;q(G,-1);r=void 0;continue}r=new Date(k);if(!v&&(v=new Date(k),
v.setDate(1),q(v,1),z(v,-1),f&&f>v)){--h;q(G,1);v=void 0;continue}p.querySelector(".pmu-month").textContent=m;var t=function(a){return"range"==c.mode&&a>=(new Date(e[0])).getFullYear()&&a<=(new Date(e[1])).getFullYear()||"multiple"==c.mode&&-1!==e.reduce(function(a,c){a.push((new Date(c)).getFullYear());return a},[]).indexOf(a)||(new Date(e)).getFullYear()==a},u=function(a,b){var d=(new Date(e[0])).getFullYear(),k=(new Date(e[1])).getFullYear(),g=(new Date(e[0])).getMonth(),f=(new Date(e[1])).getMonth();
return"range"==c.mode&&(a>d&&a<k||a>d&&a==k&&b<=f||a==d&&a<k&&b>=g||a==d&&a==k&&b>=g&&b<=f)||"multiple"==c.mode&&-1!==e.reduce(function(a,c){c=new Date(c);a.push(c.getFullYear()+"-"+c.getMonth());return a},[]).indexOf(a+"-"+b)||(new Date(e)).getFullYear()==a&&(new Date(e)).getMonth()==b};(function(){var a=[],b=k.getFullYear()-6,d=(new Date(c.min)).getFullYear(),e=(new Date(c.max)).getFullYear(),f,h,l;for(l=0;12>l;++l)f=b+l,h=document.createElement("div"),h.textContent=f,h.__pickmeup_year=f,c.min&&
f<d||c.max&&f>e?g(h,"pmu-disabled"):t(f)&&g(h,"pmu-selected"),a.push(h);p.appendChild(c.instance_content_template(a,"pmu-years"))})();(function(){var a=[],b=k.getFullYear(),d=(new Date(c.min)).getFullYear(),e=(new Date(c.min)).getMonth(),f=(new Date(c.max)).getFullYear(),h=(new Date(c.max)).getMonth(),l,m;for(l=0;12>l;++l)m=document.createElement("div"),m.textContent=c.locales[c.locale].monthsShort[l],m.__pickmeup_month=l,m.__pickmeup_year=b,c.min&&(b<d||l<e&&b==d)||c.max&&(b>f||l>h&&b>=f)?g(m,"pmu-disabled"):
u(b,l)&&g(m,"pmu-selected"),a.push(m);p.appendChild(c.instance_content_template(a,"pmu-months"))})();(function(){var a=[],b=k.getMonth(),d=A(new Date).valueOf(),e,f,h,l,m;(function(){k.setDate(1);var a=(k.getDay()-c.first_day)%7;z(k,-(a+(0>a?7:0)))})();for(e=0;42>e;++e)f=document.createElement("div"),f.textContent=k.getDate(),f.__pickmeup_day=k.getDate(),f.__pickmeup_month=k.getMonth(),f.__pickmeup_year=k.getFullYear(),b!=k.getMonth()&&g(f,"pmu-not-in-month"),0==k.getDay()?g(f,"pmu-sunday"):6==k.getDay()&&
g(f,"pmu-saturday"),h=c.render(new Date(k))||{},l=k.valueOf(),m=c.min&&c.min>k||c.max&&c.max<k,selected=c.date.valueOf()==l||c.date instanceof Array&&c.date.reduce(function(a,b){return a||l===b.valueOf()},!1)||"range"==c.mode&&l>=c.date[0]&&l<=c.date[1],h.disabled||!("disabled"in h)&&m?g(f,"pmu-disabled"):(h.selected||!("selected"in h)&&selected)&&g(f,"pmu-selected"),l==d&&g(f,"pmu-today"),h.class_name&&h.class_name.split(" ").forEach(g.bind(f,f)),a.push(f),z(k,1);p.appendChild(c.instance_content_template(a,
"pmu-days"))})()}v.setDate(1);r.setDate(1);q(r,1);z(r,-1);d=b.querySelector(".pmu-prev");b=b.querySelector(".pmu-next");d&&(d.style.visibility=c.min&&c.min>=v?"hidden":"visible");b&&(b.style.visibility=c.max&&c.max<=r?"hidden":"visible");C(a,"fill")}function u(a,b){var c=b.format,d=b.separator,e=b.locales[b.locale];if(a instanceof Date||a instanceof Number)return A(new Date(a));if(!a)return A(new Date);if(a instanceof Array){a=a.slice();for(c=0;c<a.length;++c)a[c]=u(a[c],b);return a}d=a.split(d);
if(1<d.length)return d.forEach(function(a,c,d){d[c]=u(a.trim(),b)}),d;d=e.monthsShort.join(")(")+")("+e.months.join(")(");d=new RegExp("[^0-9a-zA-Z("+d+")]+");a=a.split(d);for(var d=c.split(d),g,f,l,k,m,p=new Date,c=0;c<a.length;c++)switch(d[c]){case "b":f=e.monthsShort.indexOf(a[c]);break;case "B":f=e.months.indexOf(a[c]);break;case "d":case "e":g=parseInt(a[c],10);break;case "m":f=parseInt(a[c],10)-1;break;case "Y":case "y":l=parseInt(a[c],10);l+=100<l?0:29>l?2E3:1900;break;case "H":case "I":case "k":case "l":k=
parseInt(a[c],10);break;case "P":case "p":/pm/i.test(a[c])&&12>k?k+=12:/am/i.test(a[c])&&12<=k&&(k-=12);break;case "M":m=parseInt(a[c],10)}e=new Date(void 0===l?p.getFullYear():l,void 0===f?p.getMonth():f,void 0===g?p.getDate():g,void 0===k?p.getHours():k,void 0===m?p.getMinutes():m,0);isNaN(1*e)&&(e=new Date);return A(e)}function A(a){a.setHours(0,0,0,0);return a}function D(a,b,c){var d=a.getMonth(),e=a.getDate(),g=a.getFullYear(),f=a.getDay(),l=a.getHours(),k=12<=l,m=k?l-12:l,p;p=new Date(a.getFullYear(),
a.getMonth(),a.getDate(),0,0,0);var n=new Date(a.getFullYear(),0,0,0,0,0);p=Math.floor((p-n)/24*36E5);0==m&&(m=12);var n=a.getMinutes(),r=a.getSeconds();b=b.split("");for(var h,q=0;q<b.length;q++){h=b[q];switch(h){case "a":h=c.daysShort[f];break;case "A":h=c.days[f];break;case "b":h=c.monthsShort[d];break;case "B":h=c.months[d];break;case "C":h=1+Math.floor(g/100);break;case "d":h=10>e?"0"+e:e;break;case "e":h=e;break;case "H":h=10>l?"0"+l:l;break;case "I":h=10>m?"0"+m:m;break;case "j":h=100>p?10>
p?"00"+p:"0"+p:p;break;case "k":h=l;break;case "l":h=m;break;case "m":h=9>d?"0"+(1+d):1+d;break;case "M":h=10>n?"0"+n:n;break;case "p":case "P":h=k?"PM":"AM";break;case "s":h=Math.floor(a.getTime()/1E3);break;case "S":h=10>r?"0"+r:r;break;case "u":h=f+1;break;case "w":h=f;break;case "y":h=(""+g).substr(2,2);break;case "Y":h=g}b[q]=h}return b.join("")}function O(a,b){var c=a.__pickmeup.options,d;A(b);a:{var e;switch(c.mode){case "multiple":e=b.valueOf();for(d=0;d<c.date.length;++d)if(c.date[d].valueOf()===
e){c.date.splice(d,1);break a}c.date.push(b);break;case "range":c.lastSel||(c.date[0]=b);b<=c.date[0]?(c.date[1]=c.date[0],c.date[0]=b):c.date[1]=b;c.lastSel=!c.lastSel;break;default:c.date=b.valueOf()}}b=H(c);B(a,"input")&&(a.value="single"==c.mode?b.formatted_date:b.formatted_date.join(c.separator));C(a,"change",b);c.flat||!c.hide_on_select||"range"==c.mode&&c.lastSel||c.bound.hide()}function P(a,b){var c=b.target;n(c,"pmu-button")||(c=J(c,".pmu-button"));if(!n(c,"pmu-button")||n(c,"pmu-disabled"))return!1;
b.preventDefault();b.stopPropagation();a=a.__pickmeup.options;var d=J(c,".pmu-instance");b=d.parentElement;d=Array.prototype.slice.call(b.querySelectorAll(".pmu-instance")).indexOf(d);B(c.parentElement,"nav")?n(c,"pmu-month")?(q(a.current,d-Math.floor(a.calendars/2)),n(b,"pmu-view-years")?(a.current="single"!=a.mode?new Date(a.date[a.date.length-1]):new Date(a.date),a.select_day?(b.classList.remove("pmu-view-years"),g(b,"pmu-view-days")):a.select_month&&(b.classList.remove("pmu-view-years"),g(b,"pmu-view-months"))):
n(b,"pmu-view-months")?a.select_year?(b.classList.remove("pmu-view-months"),g(b,"pmu-view-years")):a.select_day&&(b.classList.remove("pmu-view-months"),g(b,"pmu-view-days")):n(b,"pmu-view-days")&&(a.select_month?(b.classList.remove("pmu-view-days"),g(b,"pmu-view-months")):a.select_year&&(b.classList.remove("pmu-view-days"),g(b,"pmu-view-years")))):n(c,"pmu-prev")?a.bound.prev(!1):a.bound.next(!1):n(b,"pmu-view-years")?(a.current.setFullYear(c.__pickmeup_year),a.select_month?(b.classList.remove("pmu-view-years"),
g(b,"pmu-view-months")):a.select_day?(b.classList.remove("pmu-view-years"),g(b,"pmu-view-days")):a.bound.update_date(a.current)):n(b,"pmu-view-months")?(a.current.setMonth(c.__pickmeup_month),a.current.setFullYear(c.__pickmeup_year),a.select_day?(b.classList.remove("pmu-view-months"),g(b,"pmu-view-days")):a.bound.update_date(a.current),q(a.current,Math.floor(a.calendars/2)-d)):(b=new Date(a.current),b.setYear(c.__pickmeup_year),b.setMonth(c.__pickmeup_month),b.setDate(c.__pickmeup_day),a.bound.update_date(b));
a.bound.fill();return!0}function H(a){var b;if("single"==a.mode)return b=new Date(a.date),{formatted_date:D(b,a.format,a.locales[a.locale]),date:b};b={formatted_date:[],date:[]};a.date.forEach(function(c){c=new Date(c);b.formatted_date.push(D(c,a.format,a.locales[a.locale]));b.date.push(c)});return b}function I(a,b){var c=a.__pickmeup.element;if(b||n(c,"pmu-hidden")){var d=a.__pickmeup.options,e=M(a),g=window.pageXOffset,f=window.pageYOffset,l=document.documentElement.clientWidth,k=document.documentElement.clientHeight,
m=e.top,p=e.left;d.bound.fill();B(a,"input")&&((b=a.value)&&d.bound.set_date(b),t(a,a,"keydown",function(a){9==a.which&&d.bound.hide()}),d.lastSel=!1);if(C(a,"show")&&!d.flat){switch(d.position){case "top":m-=c.offsetHeight;break;case "left":p-=c.offsetWidth;break;case "right":p+=a.offsetWidth;break;case "bottom":m+=a.offsetHeight}m+c.offsetHeight>f+k&&(m=e.top-c.offsetHeight);m<f&&(m=e.top+a.offsetHeight);p+c.offsetWidth>g+l&&(p=e.left-c.offsetWidth);p<g&&(p=e.left+a.offsetWidth);c.style.top=m+"px";
c.style.left=p+"px";c.classList.remove("pmu-hidden");setTimeout(function(){t(a,document.documentElement,"click",d.bound.hide);t(a,window,"resize",d.bound.forced_show)})}}}function Q(a,b){var c=a.__pickmeup.element,d=a.__pickmeup.options;b&&b.target&&(b.target==a||c.compareDocumentPosition(b.target)&16)||!C(a,"hide")||(g(c,"pmu-hidden"),y(a,document.documentElement,"click",d.bound.hide),y(a,window,"resize",d.bound.forced_show),d.lastSel=!1)}function R(a){var b=a.__pickmeup.options;y(a,document.documentElement,
"click",b.bound.hide);y(a,window,"resize",b.bound.forced_show);b.bound.forced_show()}function S(a){a=a.__pickmeup.options;"single"!=a.mode&&(a.date=[],a.lastSel=!1,a.bound.fill())}function T(a,b){"undefined"==typeof b&&(b=!0);var c=a.__pickmeup.element;a=a.__pickmeup.options;n(c,"pmu-view-years")?w(a.current,-12):n(c,"pmu-view-months")?w(a.current,-1):n(c,"pmu-view-days")&&q(a.current,-1);b&&a.bound.fill()}function U(a,b){"undefined"==typeof b&&(b=!0);var c=a.__pickmeup.element;a=a.__pickmeup.options;
n(c,"pmu-view-years")?w(a.current,12):n(c,"pmu-view-months")?w(a.current,1):n(c,"pmu-view-days")&&q(a.current,1);b&&a.bound.fill()}function V(a,b){var c=a.__pickmeup.options;a=H(c);return"string"===typeof b?(a=a.date,a instanceof Date?D(a,b,c.locales[c.locale]):a.map(function(a){return D(a,b,c.locales[c.locale])})):a[b?"formatted_date":"date"]}function W(a,b,c){var d=a.__pickmeup.options;if(!(b instanceof Array)||0<b.length)if(d.date=u(b,d),"single"!=d.mode)for(d.date instanceof Array?(d.date[0]=
d.date[0]||u(new Date,d),"range"==d.mode&&(d.date[1]=d.date[1]||u(d.date[0],d))):(d.date=[d.date],"range"==d.mode&&d.date.push(u(d.date[0],d))),b=0;b<d.date.length;++b)d.date[b]=L(d.date[b],d.min,d.max);else d.date instanceof Array&&(d.date=d.date[0]),d.date=L(d.date,d.min,d.max);else d.date=[];if(!d.select_day)if(d.date instanceof Array)for(b=0;b<d.date.length;++b)d.date[b].setDate(1);else d.date.setDate(1);if("multiple"==d.mode)for(b=0;b<d.date.length;++b)d.date.indexOf(d.date[b])!==b&&(d.date.splice(b,
1),--b);c?d.current=u(c,d):(c="single"===d.mode?d.date:d.date[d.date.length-1],d.current=c?new Date(c):new Date);d.current.setDate(1);d.bound.fill();B(a,"input")&&!1!==d.default_date&&(c=H(d),b=a.value,d="single"==d.mode?c.formatted_date:c.formatted_date.join(d.separator),b||C(a,"change",c),b!=d&&(a.value=d))}function X(a){var b=a.__pickmeup.element;y(a);x(b);delete a.__pickmeup}function L(a,b,c){return b&&b>a?new Date(b):c&&c<a?new Date(c):a}function E(a,b){"string"==typeof a&&(a=document.querySelector(a));
if(!a)return null;if(!a.__pickmeup){var c,d={};b=b||{};for(c in E.defaults)d[c]=c in b?b[c]:E.defaults[c];for(c in d)b=a.getAttribute("data-pmu-"+c),null!==b&&(d[c]=b);"days"!=d.view||d.select_day||(d.view="months");"months"!=d.view||d.select_month||(d.view="years");"years"!=d.view||d.select_year||(d.view="days");"days"!=d.view||d.select_day||(d.view="months");d.calendars=Math.max(1,parseInt(d.calendars,10)||1);d.mode=/single|multiple|range/.test(d.mode)?d.mode:"single";d.min&&(d.min=u(d.min,d),d.select_day||
d.min.setDate(1));d.max&&(d.max=u(d.max,d),d.select_day||d.max.setDate(1));b=document.createElement("div");a.__pickmeup={options:d,events:[],element:b};b.__pickmeup_target=a;g(b,"pickmeup");d.class_name&&g(b,d.class_name);d.bound={fill:N.bind(a,a),update_date:O.bind(a,a),click:P.bind(a,a),show:I.bind(a,a),forced_show:I.bind(a,a,!0),hide:Q.bind(a,a),update:R.bind(a,a),clear:S.bind(a,a),prev:T.bind(a,a),next:U.bind(a,a),get_date:V.bind(a,a),set_date:W.bind(a,a),destroy:X.bind(a,a)};g(b,"pmu-view-"+
d.view);var e=d.instance_template(d),n="";for(c=0;c<d.calendars;++c)n+=e;b.innerHTML=n;t(a,b,"click",d.bound.click);t(a,b,"onselectstart"in Element.prototype?"selectstart":"mousedown",function(a){a.preventDefault()});d.flat?(g(b,"pmu-flat"),a.appendChild(b)):(g(b,"pmu-hidden"),document.body.appendChild(b),t(a,a,"click",I.bind(a,a,!1)),t(a,a,"input",d.bound.update),t(a,a,"change",d.bound.update));d.bound.set_date(d.date,d.current)}d=a.__pickmeup.options;return{hide:d.bound.hide,show:d.bound.show,clear:d.bound.clear,
update:d.bound.update,prev:d.bound.prev,next:d.bound.next,get_date:d.bound.get_date,set_date:d.bound.set_date,destroy:d.bound.destroy}}E.defaults={current:null,date:new Date,default_date:new Date,flat:!1,first_day:1,prev:"\x26#9664;",next:"\x26#9654;",mode:"single",select_year:!0,select_month:!0,select_day:!0,view:"days",calendars:1,format:"d-m-Y",title_format:"B, Y",position:"bottom",class_name:"",separator:" - ",hide_on_select:!1,min:null,max:null,render:function(){},locale:"en",locales:{en:{days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
daysShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),daysMin:"Su Mo Tu We Th Fr Sa".split(" "),months:"January February March April May June July August September October November December".split(" "),monthsShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},instance_template:function(a){var b=a.locales[a.locale].daysMin.slice();a.first_day&&b.push(b.shift());return'\x3cdiv class\x3d"pmu-instance"\x3e\x3cnav\x3e\x3cdiv class\x3d"pmu-prev pmu-button"\x3e'+a.prev+'\x3c/div\x3e\x3cdiv class\x3d"pmu-month pmu-button"\x3e\x3c/div\x3e\x3cdiv class\x3d"pmu-next pmu-button"\x3e'+
a.next+'\x3c/div\x3e\x3c/nav\x3e\x3cnav class\x3d"pmu-day-of-week"\x3e\x3cdiv\x3e'+b.join("\x3c/div\x3e\x3cdiv\x3e")+"\x3c/div\x3e\x3c/nav\x3e\x3c/div\x3e"},instance_content_template:function(a,b){var c=document.createElement("div");g(c,b);for(b=0;b<a.length;++b)g(a[b],"pmu-button"),c.appendChild(a[b]);return c}};return E});





function getYoutubeID(url) {
  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
      match = url.match(regExp);

  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return '0LVzTaTTmVU';
  }
}


/**
  * jQuery plugin to provide an interface to manipulating CSS of
  * pseudo elements
  *
  * https://github.com/markwatkinson/jquery-pseudo-css
  */

(function($) {
    "use strict";
    var uidCounter = 0,
        ruleIndexCounter = 0,
        /// stylesheet object which we'll write our rules into
        styleSheet = null,
        styleSheetLoaded = false;

    /***********************************
     * MISC UTILITY FUNCTIONS
     ***********************************/
    function isObject(value) {
        return Object.prototype.toString.call(value) === '[object Object]';
    }
    function isString(value) {
        return typeof value === 'string';
    }
    function isUndefined(value) {
        return typeof value === 'undefined';
    }
    /*
     * Unwraps a function or a string
     * i.e. if the given value is a string, it's returned.
     * if it's a function, the function is evaluated, and its result
     * returned
     */
    function unwrap(stringOrFunc, context) {
        if (isString(stringOrFunc)) {
            return stringOrFunc;
        }
        else if (typeof stringOrFunc === 'function') {
            return stringOrFunc.call(context);
        }
        else {
            // technically this is an error but cast whatever it is
            // to a string so it might still work.
            return '' + stringOrFunc;
        }
    }

    /**
      * Converts anExampleString from camel case to
      * CSS style an-example-string
      */
    function unCamelCase(string) {
        return string.replace(/[A-Z]/g, function($0) {
            return '-' + $0.toLowerCase();
        });
    }
    /**
      * Camel cases a css style string
      */
    function camelCase(string) {
        return string.replace(/-([a-z]?)/g, function($0, $1) {
            return $1? $1.toUpperCase() : '';
        });
    }

    /*************************************************
     * Domain logic
     *************************************************/

    /**
      * Loads our stylesheet if it has not already been loaded
      */
    function loadStyleSheet() {
        if (styleSheetLoaded) { return; }
        $('head').append(document.createElement('style'));
        styleSheet = document.styleSheets[document.styleSheets.length-1];
        styleSheetLoaded = true;
    }


    function getData($element) {
        return $element.data('pseudoCss') || {};
    }
    function saveData($element, data) {
        $element.data('pseudoCss', data);
    }
    function getOptions($element, pseudoElement) {
        var data = getData($element),
            options = data.css[pseudoElement];
    }

    function setupElement($element) {
        var data = getData($element);
        if (data.setup) { return; }
        if (!$element.attr('id')) {
            $element.attr('id','pseudoCssId' + uidCounter++);
        }
        data.setup = true;
        data.css = {};
        saveData($element, data);
    }

    function setupPseudoElement($element, pseudoElement) {
        var data;
        setupElement($element);
        data = getData($element);
        if (typeof data.css[pseudoElement] === 'undefined') {
            // nothing's been created yet
            data.css[pseudoElement] = {
                index:  ruleIndexCounter++,
                rules : {},
                selector : function() {
                    return '#' + $(this).attr('id');
                },
                useImportant: true
            }
            saveData($element, data);
        }
    }

    /**
      * Writes the element's CSS properties out.
      */
    function writeCssToStyleSheet($element, pseudoElement) {
        var data = getData($element),
            index = data.css[pseudoElement].index,
            cssMap = data.css[pseudoElement].rules,
            selector_ = data.css[pseudoElement].selector,
            useImportant = data.css[pseudoElement].useImportant,
            selectorFragment = unwrap(selector_, $element.get(0)),
            selector, ruleBody;

        selector = selectorFragment + pseudoElement;
        ruleBody = '';
        $.each(cssMap, function(property, value) {
            if (value) {
                ruleBody += unCamelCase(property) + ':' + value;
                if (useImportant) {
                    ruleBody += '!important';
                }
                ruleBody += ';';
            }
        });

        if (styleSheet.insertRule) {
            // we can't have a sparse array so fill up any discrepancy with
            // no-ops
            while ( styleSheet.cssRules.length <= index) {
                styleSheet.insertRule('#null {}', styleSheet.cssRules.length);
            }
            styleSheet.insertRule(selector + '{' + ruleBody + '}', index);
        }
        if (styleSheet.deleteRule && index+1 < styleSheet.cssRules.length) {
            styleSheet.deleteRule(index+1);
        }
    }

    function setPseudoElementCss($element, pseudoElement, cssMap) {
        var data = getData($element),
            existing;

        setupPseudoElement($element, pseudoElement);
        $.extend(data.css[pseudoElement].rules, cssMap);
        saveData($element, data);
        writeCssToStyleSheet($element, pseudoElement);
    }

    /**
      * Encodes our map to camel casing, for
      * consistency
      */
    function translateMapSyntax(map) {
        var m = {};
        $.each(map, function(key, val) {
            m[camelCase(key)] = val;
        });
        return m;
    }



    /**
      * Options is an object in the form: {
          pseudoElement: {
              selector = '#some-selector' OR function,
              useImportant: true
          }
      }
      */
    $.fn.pseudoCssOptions = function(params) {
        var $this = $(this),
            data;

        if (isObject(params)) {
            return $this.each(function() {
                var $e = $(this);
                $.each(params, function(pseudoElement, map) {
                  setupPseudoElement($e, pseudoElement);
                  data = getData($e);
                  data.css[pseudoElement] = $.extend(data.css[pseudoElement],
                    map, true);
                  saveData($e, data);
                });
            });
        }
        else if (isString(params)) {
            setupPseudoElement($this, params);
            return getData($this).css[params];
        }
        else {
            return $this;
        }
    };

    $.fn.pseudoCss = function(pseudoElement, propertyOrObject, value) {
        // fit the prop/value into an object so we know what we're doing
        var propertyValueMap = {};

        if (isObject(propertyOrObject)) {
            // we're good
            propertyValueMap = propertyOrObject;
        } else {
            propertyValueMap[propertyOrObject] = value;
        }

        propertyValueMap = translateMapSyntax(propertyValueMap);

        return $(this).each(function() {
            setupElement($(this));
            setPseudoElementCss($(this), pseudoElement, propertyValueMap);
        });
    };

    loadStyleSheet();
}(jQuery));



window.HELP_IMPROVE_VIDEOJS = false;
/*! Video.js v4.3.0 Copyright 2013 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ (function() {var b=void 0,f=!0,h=null,l=!1;function m(){return function(){}}function p(a){return function(){return this[a]}}function s(a){return function(){return a}}var t;document.createElement("video");document.createElement("audio");document.createElement("track");function u(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(u.xa[a])return u.xa[a];a=u.w(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new u.s(a,c,d)}var v=u;
window.Td=window.Ud=u;u.Tb="4.3";u.Fc="https:"==document.location.protocol?"https://":"http://";u.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{}},notSupportedMessage:'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'};
"GENERATED_CDN_VSN"!==u.Tb&&(v.options.flash.swf=u.Fc+"vjs.zencdn.net/"+u.Tb+"/video-js.swf");u.xa={};u.la=u.CoreObject=m();u.la.extend=function(a){var c,d;a=a||{};c=a.init||a.i||this.prototype.init||this.prototype.i||m();d=function(){c.apply(this,arguments)};d.prototype=u.k.create(this.prototype);d.prototype.constructor=d;d.extend=u.la.extend;d.create=u.la.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};
u.la.create=function(){var a=u.k.create(this.prototype);this.apply(a,arguments);return a};u.d=function(a,c,d){var e=u.getData(a);e.z||(e.z={});e.z[c]||(e.z[c]=[]);d.t||(d.t=u.t++);e.z[c].push(d);e.W||(e.disabled=l,e.W=function(c){if(!e.disabled){c=u.kc(c);var d=e.z[c.type];if(d)for(var d=d.slice(0),k=0,q=d.length;k<q&&!c.pc();k++)d[k].call(a,c)}});1==e.z[c].length&&(document.addEventListener?a.addEventListener(c,e.W,l):document.attachEvent&&a.attachEvent("on"+c,e.W))};
u.o=function(a,c,d){if(u.oc(a)){var e=u.getData(a);if(e.z)if(c){var g=e.z[c];if(g){if(d){if(d.t)for(e=0;e<g.length;e++)g[e].t===d.t&&g.splice(e--,1)}else e.z[c]=[];u.gc(a,c)}}else for(g in e.z)c=g,e.z[c]=[],u.gc(a,c)}};u.gc=function(a,c){var d=u.getData(a);0===d.z[c].length&&(delete d.z[c],document.removeEventListener?a.removeEventListener(c,d.W,l):document.detachEvent&&a.detachEvent("on"+c,d.W));u.Bb(d.z)&&(delete d.z,delete d.W,delete d.disabled);u.Bb(d)&&u.vc(a)};
u.kc=function(a){function c(){return f}function d(){return l}if(!a||!a.Cb){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&"layerY"!==g&&(a[g]=e[g]);a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.Ab=c};a.Ab=d;a.stopPropagation=function(){e.stopPropagation&&e.stopPropagation();a.cancelBubble=f;a.Cb=c};a.Cb=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&
e.stopImmediatePropagation();a.pc=c;a.stopPropagation()};a.pc=d;if(a.clientX!=h){g=document.documentElement;var j=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||j&&j.scrollLeft||0)-(g&&g.clientLeft||j&&j.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||j&&j.scrollTop||0)-(g&&g.clientTop||j&&j.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=h&&(a.button=a.button&1?0:a.button&4?1:a.button&2?2:0)}return a};
u.j=function(a,c){var d=u.oc(a)?u.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=u.kc(c);d.W&&d.W.call(a,c);if(e&&!c.Cb()&&c.bubbles!==l)u.j(e,c);else if(!e&&!c.Ab()&&(d=u.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.Ab()};u.U=function(a,c,d){function e(){u.o(a,c,e);d.apply(this,arguments)}e.t=d.t=d.t||u.t++;u.d(a,c,e)};var w=Object.prototype.hasOwnProperty;
u.e=function(a,c){var d,e;d=document.createElement(a||"div");for(e in c)w.call(c,e)&&(-1!==e.indexOf("aria-")||"role"==e?d.setAttribute(e,c[e]):d[e]=c[e]);return d};u.$=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};u.k={};u.k.create=Object.create||function(a){function c(){}c.prototype=a;return new c};u.k.ua=function(a,c,d){for(var e in a)w.call(a,e)&&c.call(d||this,e,a[e])};u.k.B=function(a,c){if(!c)return a;for(var d in c)w.call(c,d)&&(a[d]=c[d]);return a};
u.k.ic=function(a,c){var d,e,g;a=u.k.copy(a);for(d in c)w.call(c,d)&&(e=a[d],g=c[d],a[d]=u.k.qc(e)&&u.k.qc(g)?u.k.ic(e,g):c[d]);return a};u.k.copy=function(a){return u.k.B({},a)};u.k.qc=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};u.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.t||(c.t=u.t++);e.t=d?d+"_"+c.t:c.t;return e};u.ra={};u.t=1;u.expando="vdata"+(new Date).getTime();
u.getData=function(a){var c=a[u.expando];c||(c=a[u.expando]=u.t++,u.ra[c]={});return u.ra[c]};u.oc=function(a){a=a[u.expando];return!(!a||u.Bb(u.ra[a]))};u.vc=function(a){var c=a[u.expando];if(c){delete u.ra[c];try{delete a[u.expando]}catch(d){a.removeAttribute?a.removeAttribute(u.expando):a[u.expando]=h}}};u.Bb=function(a){for(var c in a)if(a[c]!==h)return l;return f};u.n=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)};
u.u=function(a,c){var d,e;if(-1!=a.className.indexOf(c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};u.na=u.e("video");u.F=navigator.userAgent;u.Mc=/iPhone/i.test(u.F);u.Lc=/iPad/i.test(u.F);u.Nc=/iPod/i.test(u.F);u.Kc=u.Mc||u.Lc||u.Nc;var aa=u,x;var y=u.F.match(/OS (\d+)_/i);x=y&&y[1]?y[1]:b;aa.Fd=x;u.Ic=/Android/i.test(u.F);var ba=u,z;var A=u.F.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),B,C;
A?(B=A[1]&&parseFloat(A[1]),C=A[2]&&parseFloat(A[2]),z=B&&C?parseFloat(A[1]+"."+A[2]):B?B:h):z=h;ba.Gc=z;u.Oc=u.Ic&&/webkit/i.test(u.F)&&2.3>u.Gc;u.Jc=/Firefox/i.test(u.F);u.Gd=/Chrome/i.test(u.F);u.ac=!!("ontouchstart"in window||window.Hc&&document instanceof window.Hc);
u.xb=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var j=d.length-1;0<=j;j--){e=d[j].name;g=d[j].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==h?f:l;c[e]=g}}return c};
u.Kd=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};u.zb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};u.Pb={};u.w=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
u.La=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),j=Math.floor(c/60%60),k=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<k?g+":":"";return g+(((g||10<=j)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};u.Tc=function(){document.body.focus();document.onselectstart=s(l)};u.Bd=function(){document.onselectstart=s(f)};u.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};u.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
u.tb=function(a,c){return{length:1,start:function(){return a},end:function(){return c}}};
u.get=function(a,c,d){var e,g;"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");});g=new XMLHttpRequest;try{g.open("GET",a)}catch(j){d(j)}e=0===a.indexOf("file:")||0===window.location.href.indexOf("file:")&&-1===a.indexOf("http");
g.onreadystatechange=function(){4===g.readyState&&(200===g.status||e&&0===g.status?c(g.responseText):d&&d())};try{g.send()}catch(k){d&&d(k)}};u.td=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?u.log("LocalStorage Full (VideoJS)",d):18==d.code?u.log("LocalStorage not allowed (VideoJS)",d):u.log("LocalStorage Error (VideoJS)",d)}};u.mc=function(a){a.match(/^https?:\/\//)||(a=u.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
u.log=function(){u.log.history=u.log.history||[];u.log.history.push(arguments);window.console&&window.console.log(Array.prototype.slice.call(arguments))};u.ad=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0),top:c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0)}};
u.c=u.la.extend({i:function(a,c,d){this.b=a;this.g=u.k.copy(this.g);c=this.options(c);this.Q=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+u.t++);this.gd=c.name||h;this.a=c.el||this.e();this.G=[];this.qb={};this.V={};if((a=this.g)&&a.children){var e=this;u.k.ua(a.children,function(a,c){c!==l&&!c.loadEvent&&(e[a]=e.Z(a,c))})}this.L(d)}});t=u.c.prototype;
t.D=function(){this.j("dispose");if(this.G)for(var a=this.G.length-1;0<=a;a--)this.G[a].D&&this.G[a].D();this.V=this.qb=this.G=h;this.o();this.a.parentNode&&this.a.parentNode.removeChild(this.a);u.vc(this.a);this.a=h};t.b=f;t.K=p("b");t.options=function(a){return a===b?this.g:this.g=u.k.ic(this.g,a)};t.e=function(a,c){return u.e(a,c)};t.w=p("a");t.id=p("Q");t.name=p("gd");t.children=p("G");
t.Z=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||u.$(e),c.name=e,d=new window.videojs[d](this.b||this,c)):d=a;this.G.push(d);"function"===typeof d.id&&(this.qb[d.id()]=d);(e=e||d.name&&d.name())&&(this.V[e]=d);"function"===typeof d.el&&d.el()&&(this.sa||this.a).appendChild(d.el());return d};
t.removeChild=function(a){"string"===typeof a&&(a=this.V[a]);if(a&&this.G){for(var c=l,d=this.G.length-1;0<=d;d--)if(this.G[d]===a){c=f;this.G.splice(d,1);break}c&&(this.qb[a.id]=h,this.V[a.name]=h,(c=a.w())&&c.parentNode===(this.sa||this.a)&&(this.sa||this.a).removeChild(a.w()))}};t.T=s("");t.d=function(a,c){u.d(this.a,a,u.bind(this,c));return this};t.o=function(a,c){u.o(this.a,a,c);return this};t.U=function(a,c){u.U(this.a,a,u.bind(this,c));return this};t.j=function(a,c){u.j(this.a,a,c);return this};
t.L=function(a){a&&(this.aa?a.call(this):(this.Sa===b&&(this.Sa=[]),this.Sa.push(a)));return this};t.Ua=function(){this.aa=f;var a=this.Sa;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.Sa=[];this.j("ready")}};t.n=function(a){u.n(this.a,a);return this};t.u=function(a){u.u(this.a,a);return this};t.show=function(){this.a.style.display="block";return this};t.C=function(){this.a.style.display="none";return this};function D(a){a.u("vjs-lock-showing")}
t.disable=function(){this.C();this.show=m()};t.width=function(a,c){return E(this,"width",a,c)};t.height=function(a,c){return E(this,"height",a,c)};t.Xc=function(a,c){return this.width(a,f).height(c)};function E(a,c,d,e){if(d!==b)return a.a.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px",e||a.j("resize"),a;if(!a.a)return 0;d=a.a.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.a["offset"+u.$(c)],10)}
u.q=u.c.extend({i:function(a,c){u.c.call(this,a,c);var d=l;this.d("touchstart",function(a){a.preventDefault();d=f});this.d("touchmove",function(){d=l});var e=this;this.d("touchend",function(a){d&&e.p(a);a.preventDefault()});this.d("click",this.p);this.d("focus",this.Oa);this.d("blur",this.Na)}});t=u.q.prototype;
t.e=function(a,c){c=u.k.B({className:this.T(),innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+(this.qa||"Need Text")+"</span></div>",qd:"button","aria-live":"polite",tabIndex:0},c);return u.c.prototype.e.call(this,a,c)};t.T=function(){return"vjs-control "+u.c.prototype.T.call(this)};t.p=m();t.Oa=function(){u.d(document,"keyup",u.bind(this,this.ba))};t.ba=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.p()};
t.Na=function(){u.o(document,"keyup",u.bind(this,this.ba))};u.O=u.c.extend({i:function(a,c){u.c.call(this,a,c);this.Sc=this.V[this.g.barName];this.handle=this.V[this.g.handleName];a.d(this.tc,u.bind(this,this.update));this.d("mousedown",this.Pa);this.d("touchstart",this.Pa);this.d("focus",this.Oa);this.d("blur",this.Na);this.d("click",this.p);this.b.d("controlsvisible",u.bind(this,this.update));a.L(u.bind(this,this.update));this.P={}}});t=u.O.prototype;
t.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=u.k.B({qd:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return u.c.prototype.e.call(this,a,c)};t.Pa=function(a){a.preventDefault();u.Tc();this.P.move=u.bind(this,this.Hb);this.P.end=u.bind(this,this.Ib);u.d(document,"mousemove",this.P.move);u.d(document,"mouseup",this.P.end);u.d(document,"touchmove",this.P.move);u.d(document,"touchend",this.P.end);this.Hb(a)};
t.Ib=function(){u.Bd();u.o(document,"mousemove",this.P.move,l);u.o(document,"mouseup",this.P.end,l);u.o(document,"touchmove",this.P.move,l);u.o(document,"touchend",this.P.end,l);this.update()};t.update=function(){if(this.a){var a,c=this.yb(),d=this.handle,e=this.Sc;isNaN(c)&&(c=0);a=c;if(d){a=this.a.offsetWidth;var g=d.w().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.w().style.left=u.round(100*c,2)+"%"}e.w().style.width=u.round(100*a,2)+"%"}};
function F(a,c){var d,e,g,j;d=a.a;e=u.ad(d);j=g=d.offsetWidth;d=a.handle;if(a.g.Cd)return j=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.w().offsetHeight,j+=d/2,g-=d),Math.max(0,Math.min(1,(j-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.w().offsetWidth,g+=d/2,j-=d);return Math.max(0,Math.min(1,(e-g)/j))}t.Oa=function(){u.d(document,"keyup",u.bind(this,this.ba))};
t.ba=function(a){37==a.which?(a.preventDefault(),this.yc()):39==a.which&&(a.preventDefault(),this.zc())};t.Na=function(){u.o(document,"keyup",u.bind(this,this.ba))};t.p=function(a){a.stopImmediatePropagation();a.preventDefault()};u.ea=u.c.extend();u.ea.prototype.defaultValue=0;u.ea.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=u.k.B({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return u.c.prototype.e.call(this,"div",c)};u.ma=u.c.extend();
function ca(a,c){a.Z(c);c.d("click",u.bind(a,function(){D(this)}))}u.ma.prototype.e=function(){var a=this.options().Vc||"ul";this.sa=u.e(a,{className:"vjs-menu-content"});a=u.c.prototype.e.call(this,"div",{append:this.sa,className:"vjs-menu"});a.appendChild(this.sa);u.d(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};u.N=u.q.extend({i:function(a,c){u.q.call(this,a,c);this.selected(c.selected)}});
u.N.prototype.e=function(a,c){return u.q.prototype.e.call(this,"li",u.k.B({className:"vjs-menu-item",innerHTML:this.g.label},c))};u.N.prototype.p=function(){this.selected(f)};u.N.prototype.selected=function(a){a?(this.n("vjs-selected"),this.a.setAttribute("aria-selected",f)):(this.u("vjs-selected"),this.a.setAttribute("aria-selected",l))};
u.R=u.q.extend({i:function(a,c){u.q.call(this,a,c);this.wa=this.Ka();this.Z(this.wa);this.I&&0===this.I.length&&this.C();this.d("keyup",this.ba);this.a.setAttribute("aria-haspopup",f);this.a.setAttribute("role","button")}});t=u.R.prototype;t.pa=l;t.Ka=function(){var a=new u.ma(this.b);this.options().title&&a.w().appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.$(this.A),zd:-1}));if(this.I=this.createItems())for(var c=0;c<this.I.length;c++)ca(a,this.I[c]);return a};t.ta=m();
t.T=function(){return this.className+" vjs-menu-button "+u.q.prototype.T.call(this)};t.Oa=m();t.Na=m();t.p=function(){this.U("mouseout",u.bind(this,function(){D(this.wa);this.a.blur()}));this.pa?G(this):H(this)};t.ba=function(a){a.preventDefault();32==a.which||13==a.which?this.pa?G(this):H(this):27==a.which&&this.pa&&G(this)};function H(a){a.pa=f;a.wa.n("vjs-lock-showing");a.a.setAttribute("aria-pressed",f);a.I&&0<a.I.length&&a.I[0].w().focus()}
function G(a){a.pa=l;D(a.wa);a.a.setAttribute("aria-pressed",l)}
u.s=u.c.extend({i:function(a,c,d){this.M=a;c=u.k.B(da(a),c);this.v={};this.uc=c.poster;this.sb=c.controls;a.controls=l;u.c.call(this,this,c,d);this.controls()?this.n("vjs-controls-enabled"):this.n("vjs-controls-disabled");this.U("play",function(a){u.j(this.a,{type:"firstplay",target:this.a})||(a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation())});this.d("ended",this.hd);this.d("play",this.Kb);this.d("firstplay",this.jd);this.d("pause",this.Jb);this.d("progress",this.ld);this.d("durationchange",
this.sc);this.d("error",this.Gb);this.d("fullscreenchange",this.kd);u.xa[this.Q]=this;c.plugins&&u.k.ua(c.plugins,function(a,c){this[a](c)},this);var e,g,j,k;e=this.Mb;a=function(){e();clearInterval(g);g=setInterval(u.bind(this,e),250)};c=function(){e();clearInterval(g)};this.d("mousedown",a);this.d("mousemove",e);this.d("mouseup",c);this.d("keydown",e);this.d("keyup",e);this.d("touchstart",a);this.d("touchmove",e);this.d("touchend",c);this.d("touchcancel",c);j=setInterval(u.bind(this,function(){this.ka&&
(this.ka=l,this.ja(f),clearTimeout(k),k=setTimeout(u.bind(this,function(){this.ka||this.ja(l)}),2E3))}),250);this.d("dispose",function(){clearInterval(j);clearTimeout(k)})}});t=u.s.prototype;t.g=u.options;t.D=function(){this.j("dispose");this.o("dispose");u.xa[this.Q]=h;this.M&&this.M.player&&(this.M.player=h);this.a&&this.a.player&&(this.a.player=h);clearInterval(this.Ra);this.za();this.h&&this.h.D();u.c.prototype.D.call(this)};
function da(a){var c={sources:[],tracks:[]};u.k.B(c,u.xb(a));if(a.hasChildNodes()){var d,e,g,j;a=a.childNodes;g=0;for(j=a.length;g<j;g++)d=a[g],e=d.nodeName.toLowerCase(),"source"===e?c.sources.push(u.xb(d)):"track"===e&&c.tracks.push(u.xb(d))}return c}
t.e=function(){var a=this.a=u.c.prototype.e.call(this,"div"),c=this.M;c.removeAttribute("width");c.removeAttribute("height");if(c.hasChildNodes()){var d,e,g,j,k;d=c.childNodes;e=d.length;for(k=[];e--;)g=d[e],j=g.nodeName.toLowerCase(),"track"===j&&k.push(g);for(d=0;d<k.length;d++)c.removeChild(k[d])}c.id=c.id||"vjs_video_"+u.t++;a.id=c.id;a.className=c.className;c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.n("vjs-paused");this.width(this.g.width,f);this.height(this.g.height,
f);c.parentNode&&c.parentNode.insertBefore(a,c);u.zb(c,a);return a};
function I(a,c,d){a.h?(a.aa=l,a.h.D(),a.Eb&&(a.Eb=l,clearInterval(a.Ra)),a.Fb&&J(a),a.h=l):"Html5"!==c&&a.M&&(u.l.jc(a.M),a.M=h);a.ia=c;a.aa=l;var e=u.k.B({source:d,parentEl:a.a},a.g[c.toLowerCase()]);d&&(d.src==a.v.src&&0<a.v.currentTime&&(e.startTime=a.v.currentTime),a.v.src=d.src);a.h=new window.videojs[c](a,e);a.h.L(function(){this.b.Ua();if(!this.m.progressEvents){var a=this.b;a.Eb=f;a.Ra=setInterval(u.bind(a,function(){this.v.lb<this.buffered().end(0)?this.j("progress"):1==this.Ja()&&(clearInterval(this.Ra),
this.j("progress"))}),500);a.h.U("progress",function(){this.m.progressEvents=f;var a=this.b;a.Eb=l;clearInterval(a.Ra)})}this.m.timeupdateEvents||(a=this.b,a.Fb=f,a.d("play",a.Cc),a.d("pause",a.za),a.h.U("timeupdate",function(){this.m.timeupdateEvents=f;J(this.b)}))})}function J(a){a.Fb=l;a.za();a.o("play",a.Cc);a.o("pause",a.za)}t.Cc=function(){this.hc&&this.za();this.hc=setInterval(u.bind(this,function(){this.j("timeupdate")}),250)};t.za=function(){clearInterval(this.hc)};
t.Kb=function(){u.u(this.a,"vjs-paused");u.n(this.a,"vjs-playing")};t.jd=function(){this.g.starttime&&this.currentTime(this.g.starttime);this.n("vjs-has-started")};t.Jb=function(){u.u(this.a,"vjs-playing");u.n(this.a,"vjs-paused")};t.ld=function(){1==this.Ja()&&this.j("loadedalldata")};t.hd=function(){this.g.loop&&(this.currentTime(0),this.play())};t.sc=function(){this.duration(K(this,"duration"))};t.kd=function(){this.H?this.n("vjs-fullscreen"):this.u("vjs-fullscreen")};
t.Gb=function(a){u.log("Video Error",a)};function L(a,c,d){if(a.h&&!a.h.aa)a.h.L(function(){this[c](d)});else try{a.h[c](d)}catch(e){throw u.log(e),e;}}function K(a,c){if(a.h&&a.h.aa)try{return a.h[c]()}catch(d){throw a.h[c]===b?u.log("Video.js: "+c+" method not defined for "+a.ia+" playback technology.",d):"TypeError"==d.name?(u.log("Video.js: "+c+" unavailable on "+a.ia+" playback technology element.",d),a.h.aa=l):u.log(d),d;}}t.play=function(){L(this,"play");return this};
t.pause=function(){L(this,"pause");return this};t.paused=function(){return K(this,"paused")===l?l:f};t.currentTime=function(a){return a!==b?(this.v.rc=a,L(this,"setCurrentTime",a),this.Fb&&this.j("timeupdate"),this):this.v.currentTime=K(this,"currentTime")||0};t.duration=function(a){if(a!==b)return this.v.duration=parseFloat(a),this;this.v.duration===b&&this.sc();return this.v.duration};
t.buffered=function(){var a=K(this,"buffered"),c=a.length-1,d=this.v.lb=this.v.lb||0;a&&(0<=c&&a.end(c)!==d)&&(d=a.end(c),this.v.lb=d);return u.tb(0,d)};t.Ja=function(){return this.duration()?this.buffered().end(0)/this.duration():0};t.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.v.volume=a,L(this,"setVolume",a),u.td(a),this;a=parseFloat(K(this,"volume"));return isNaN(a)?1:a};t.muted=function(a){return a!==b?(L(this,"setMuted",a),this):K(this,"muted")||l};
t.Ta=function(){return K(this,"supportsFullScreen")||l};
t.ya=function(){var a=u.Pb.ya;this.H=f;a?(u.d(document,a.vb,u.bind(this,function(c){this.H=document[a.H];this.H===l&&u.o(document,a.vb,arguments.callee);this.j("fullscreenchange")})),this.a[a.wc]()):this.h.Ta()?L(this,"enterFullScreen"):(this.cd=f,this.Yc=document.documentElement.style.overflow,u.d(document,"keydown",u.bind(this,this.lc)),document.documentElement.style.overflow="hidden",u.n(document.body,"vjs-full-window"),this.j("enterFullWindow"),this.j("fullscreenchange"));return this};
t.ob=function(){var a=u.Pb.ya;this.H=l;if(a)document[a.nb]();else this.h.Ta()?L(this,"exitFullScreen"):(M(this),this.j("fullscreenchange"));return this};t.lc=function(a){27===a.keyCode&&(this.H===f?this.ob():M(this))};function M(a){a.cd=l;u.o(document,"keydown",a.lc);document.documentElement.style.overflow=a.Yc;u.u(document.body,"vjs-full-window");a.j("exitFullWindow")}
t.src=function(a){if(a instanceof Array){var c;a:{c=a;for(var d=0,e=this.g.techOrder;d<e.length;d++){var g=u.$(e[d]),j=window.videojs[g];if(j.isSupported())for(var k=0,q=c;k<q.length;k++){var n=q[k];if(j.canPlaySource(n)){c={source:n,h:g};break a}}}c=l}c?(a=c.source,c=c.h,c==this.ia?this.src(a):I(this,c,a)):this.a.appendChild(u.e("p",{innerHTML:this.options().notSupportedMessage}))}else a instanceof Object?window.videojs[this.ia].canPlaySource(a)?this.src(a.src):this.src([a]):(this.v.src=a,this.aa?
(L(this,"src",a),"auto"==this.g.preload&&this.load(),this.g.autoplay&&this.play()):this.L(function(){this.src(a)}));return this};t.load=function(){L(this,"load");return this};t.currentSrc=function(){return K(this,"currentSrc")||this.v.src||""};t.Qa=function(a){return a!==b?(L(this,"setPreload",a),this.g.preload=a,this):K(this,"preload")};t.autoplay=function(a){return a!==b?(L(this,"setAutoplay",a),this.g.autoplay=a,this):K(this,"autoplay")};
t.loop=function(a){return a!==b?(L(this,"setLoop",a),this.g.loop=a,this):K(this,"loop")};t.poster=function(a){return a!==b?(this.uc=a,this):this.uc};t.controls=function(a){return a!==b?(a=!!a,this.sb!==a&&((this.sb=a)?(this.u("vjs-controls-disabled"),this.n("vjs-controls-enabled"),this.j("controlsenabled")):(this.u("vjs-controls-enabled"),this.n("vjs-controls-disabled"),this.j("controlsdisabled"))),this):this.sb};u.s.prototype.Sb;t=u.s.prototype;
t.Rb=function(a){return a!==b?(a=!!a,this.Sb!==a&&((this.Sb=a)?(this.n("vjs-using-native-controls"),this.j("usingnativecontrols")):(this.u("vjs-using-native-controls"),this.j("usingcustomcontrols"))),this):this.Sb};t.error=function(){return K(this,"error")};t.seeking=function(){return K(this,"seeking")};t.ka=f;t.Mb=function(){this.ka=f};t.Qb=f;
t.ja=function(a){return a!==b?(a=!!a,a!==this.Qb&&((this.Qb=a)?(this.ka=f,this.u("vjs-user-inactive"),this.n("vjs-user-active"),this.j("useractive")):(this.ka=l,this.h.U("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.u("vjs-user-active"),this.n("vjs-user-inactive"),this.j("userinactive"))),this):this.Qb};var N,O,P;P=document.createElement("div");O={};
P.Hd!==b?(O.wc="requestFullscreen",O.nb="exitFullscreen",O.vb="fullscreenchange",O.H="fullScreen"):(document.mozCancelFullScreen?(N="moz",O.H=N+"FullScreen"):(N="webkit",O.H=N+"IsFullScreen"),P[N+"RequestFullScreen"]&&(O.wc=N+"RequestFullScreen",O.nb=N+"CancelFullScreen"),O.vb=N+"fullscreenchange");document[O.nb]&&(u.Pb.ya=O);u.Fa=u.c.extend();
u.Fa.prototype.g={Md:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{}}};u.Fa.prototype.e=function(){return u.e("div",{className:"vjs-control-bar"})};u.Yb=u.q.extend({i:function(a,c){u.q.call(this,a,c);a.d("play",u.bind(this,this.Kb));a.d("pause",u.bind(this,this.Jb))}});t=u.Yb.prototype;t.qa="Play";t.T=function(){return"vjs-play-control "+u.q.prototype.T.call(this)};
t.p=function(){this.b.paused()?this.b.play():this.b.pause()};t.Kb=function(){u.u(this.a,"vjs-paused");u.n(this.a,"vjs-playing");this.a.children[0].children[0].innerHTML="Pause"};t.Jb=function(){u.u(this.a,"vjs-playing");u.n(this.a,"vjs-paused");this.a.children[0].children[0].innerHTML="Play"};u.Ya=u.c.extend({i:function(a,c){u.c.call(this,a,c);a.d("timeupdate",u.bind(this,this.Ca))}});
u.Ya.prototype.e=function(){var a=u.c.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.content=u.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(u.e("div").appendChild(this.content));return a};
u.Ya.prototype.Ca=function(){var a=this.b.Nb?this.b.v.currentTime:this.b.currentTime();this.content.innerHTML='<span class="vjs-control-text">Current Time </span>'+u.La(a,this.b.duration())};u.Za=u.c.extend({i:function(a,c){u.c.call(this,a,c);a.d("timeupdate",u.bind(this,this.Ca))}});
u.Za.prototype.e=function(){var a=u.c.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.content=u.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">Duration Time </span>0:00',"aria-live":"off"});a.appendChild(u.e("div").appendChild(this.content));return a};u.Za.prototype.Ca=function(){var a=this.b.duration();a&&(this.content.innerHTML='<span class="vjs-control-text">Duration Time </span>'+u.La(a))};
u.cc=u.c.extend({i:function(a,c){u.c.call(this,a,c)}});u.cc.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};u.fb=u.c.extend({i:function(a,c){u.c.call(this,a,c);a.d("timeupdate",u.bind(this,this.Ca))}});
u.fb.prototype.e=function(){var a=u.c.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.content=u.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">Remaining Time </span>-0:00',"aria-live":"off"});a.appendChild(u.e("div").appendChild(this.content));return a};u.fb.prototype.Ca=function(){this.b.duration()&&(this.content.innerHTML='<span class="vjs-control-text">Remaining Time </span>-'+u.La(this.b.duration()-this.b.currentTime()))};
u.Ga=u.q.extend({i:function(a,c){u.q.call(this,a,c)}});u.Ga.prototype.qa="Fullscreen";u.Ga.prototype.T=function(){return"vjs-fullscreen-control "+u.q.prototype.T.call(this)};u.Ga.prototype.p=function(){this.b.H?(this.b.ob(),this.a.children[0].children[0].innerHTML="Fullscreen"):(this.b.ya(),this.a.children[0].children[0].innerHTML="Non-Fullscreen")};u.eb=u.c.extend({i:function(a,c){u.c.call(this,a,c)}});u.eb.prototype.g={children:{seekBar:{}}};
u.eb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};u.Zb=u.O.extend({i:function(a,c){u.O.call(this,a,c);a.d("timeupdate",u.bind(this,this.Ba));a.L(u.bind(this,this.Ba))}});t=u.Zb.prototype;t.g={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};t.tc="timeupdate";t.e=function(){return u.O.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
t.Ba=function(){var a=this.b.Nb?this.b.v.currentTime:this.b.currentTime();this.a.setAttribute("aria-valuenow",u.round(100*this.yb(),2));this.a.setAttribute("aria-valuetext",u.La(a,this.b.duration()))};t.yb=function(){var a;"Flash"===this.b.ia&&this.b.seeking()?(a=this.b.v,a=a.rc?a.rc:this.b.currentTime()):a=this.b.currentTime();return a/this.b.duration()};t.Pa=function(a){u.O.prototype.Pa.call(this,a);this.b.Nb=f;this.Dd=!this.b.paused();this.b.pause()};
t.Hb=function(a){a=F(this,a)*this.b.duration();a==this.b.duration()&&(a-=0.1);this.b.currentTime(a)};t.Ib=function(a){u.O.prototype.Ib.call(this,a);this.b.Nb=l;this.Dd&&this.b.play()};t.zc=function(){this.b.currentTime(this.b.currentTime()+5)};t.yc=function(){this.b.currentTime(this.b.currentTime()-5)};u.ab=u.c.extend({i:function(a,c){u.c.call(this,a,c);a.d("progress",u.bind(this,this.update))}});u.ab.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text">Loaded: 0%</span>'})};
u.ab.prototype.update=function(){this.a.style&&(this.a.style.width=u.round(100*this.b.Ja(),2)+"%")};u.Xb=u.c.extend({i:function(a,c){u.c.call(this,a,c)}});u.Xb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text">Progress: 0%</span>'})};u.gb=u.ea.extend();u.gb.prototype.defaultValue="00:00";u.gb.prototype.e=function(){return u.ea.prototype.e.call(this,"div",{className:"vjs-seek-handle"})};
u.ib=u.c.extend({i:function(a,c){u.c.call(this,a,c);a.h&&(a.h.m&&a.h.m.volumeControl===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.h.m&&a.h.m.volumeControl===l?this.n("vjs-hidden"):this.u("vjs-hidden")}))}});u.ib.prototype.g={children:{volumeBar:{}}};u.ib.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};
u.hb=u.O.extend({i:function(a,c){u.O.call(this,a,c);a.d("volumechange",u.bind(this,this.Ba));a.L(u.bind(this,this.Ba));setTimeout(u.bind(this,this.update),0)}});t=u.hb.prototype;t.Ba=function(){this.a.setAttribute("aria-valuenow",u.round(100*this.b.volume(),2));this.a.setAttribute("aria-valuetext",u.round(100*this.b.volume(),2)+"%")};t.g={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};t.tc="volumechange";
t.e=function(){return u.O.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};t.Hb=function(a){this.b.muted()&&this.b.muted(l);this.b.volume(F(this,a))};t.yb=function(){return this.b.muted()?0:this.b.volume()};t.zc=function(){this.b.volume(this.b.volume()+0.1)};t.yc=function(){this.b.volume(this.b.volume()-0.1)};u.dc=u.c.extend({i:function(a,c){u.c.call(this,a,c)}});
u.dc.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};u.jb=u.ea.extend();u.jb.prototype.defaultValue="00:00";u.jb.prototype.e=function(){return u.ea.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
u.da=u.q.extend({i:function(a,c){u.q.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.h&&(a.h.m&&a.h.m.volumeControl===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.h.m&&a.h.m.volumeControl===l?this.n("vjs-hidden"):this.u("vjs-hidden")}))}});u.da.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};
u.da.prototype.p=function(){this.b.muted(this.b.muted()?l:f)};u.da.prototype.update=function(){var a=this.b.volume(),c=3;0===a||this.b.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.b.muted()?"Unmute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Unmute"):"Mute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Mute");for(a=0;4>a;a++)u.u(this.a,"vjs-vol-"+a);u.n(this.a,"vjs-vol-"+c)};
u.oa=u.R.extend({i:function(a,c){u.R.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.h&&(a.h.m&&a.h.m.Dc===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.h.m&&a.h.m.Dc===l?this.n("vjs-hidden"):this.u("vjs-hidden")}));this.n("vjs-menu-button")}});u.oa.prototype.Ka=function(){var a=new u.ma(this.b,{Vc:"div"}),c=new u.hb(this.b,u.k.B({Cd:f},this.g.Vd));a.Z(c);return a};u.oa.prototype.p=function(){u.da.prototype.p.call(this);u.R.prototype.p.call(this)};
u.oa.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};u.oa.prototype.update=u.da.prototype.update;u.cb=u.q.extend({i:function(a,c){u.q.call(this,a,c);(!a.poster()||!a.controls())&&this.C();a.d("play",u.bind(this,this.C))}});
u.cb.prototype.e=function(){var a=u.e("div",{className:"vjs-poster",tabIndex:-1}),c=this.b.poster();c&&("backgroundSize"in a.style?a.style.backgroundImage='url("'+c+'")':a.appendChild(u.e("img",{src:c})));return a};u.cb.prototype.p=function(){this.K().controls()&&this.b.play()};
u.Wb=u.c.extend({i:function(a,c){u.c.call(this,a,c);a.d("canplay",u.bind(this,this.C));a.d("canplaythrough",u.bind(this,this.C));a.d("playing",u.bind(this,this.C));a.d("seeked",u.bind(this,this.C));a.d("seeking",u.bind(this,this.show));a.d("seeked",u.bind(this,this.C));a.d("error",u.bind(this,this.show));a.d("waiting",u.bind(this,this.show))}});u.Wb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};u.Wa=u.q.extend();
u.Wa.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};u.Wa.prototype.p=function(){this.b.play()};
u.r=u.c.extend({i:function(a,c,d){u.c.call(this,a,c,d);var e,g;g=this;e=this.K();a=function(){if(e.controls()&&!e.Rb()){var a,c;g.d("mousedown",g.p);g.d("touchstart",function(a){a.preventDefault();a.stopPropagation();c=this.b.ja()});a=function(a){a.stopPropagation();c&&this.b.Mb()};g.d("touchmove",a);g.d("touchleave",a);g.d("touchcancel",a);g.d("touchend",a);var d,n,r;d=0;g.d("touchstart",function(){d=(new Date).getTime();r=f});a=function(){r=l};g.d("touchmove",a);g.d("touchleave",a);g.d("touchcancel",
a);g.d("touchend",function(){r===f&&(n=(new Date).getTime()-d,250>n&&this.j("tap"))});g.d("tap",g.md)}};c=u.bind(g,g.pd);this.L(a);e.d("controlsenabled",a);e.d("controlsdisabled",c)}});u.r.prototype.pd=function(){this.o("tap");this.o("touchstart");this.o("touchmove");this.o("touchleave");this.o("touchcancel");this.o("touchend");this.o("click");this.o("mousedown")};u.r.prototype.p=function(a){0===a.button&&this.K().controls()&&(this.K().paused()?this.K().play():this.K().pause())};
u.r.prototype.md=function(){this.K().ja(!this.K().ja())};u.r.prototype.m={volumeControl:f,fullscreenResize:l,progressEvents:l,timeupdateEvents:l};u.media={};u.media.Va="play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
function ea(){var a=u.media.Va[i];return function(){throw Error('The "'+a+"\" method is not available on the playback technology's API");}}for(var i=u.media.Va.length-1;0<=i;i--)u.r.prototype[u.media.Va[i]]=ea();
u.l=u.r.extend({i:function(a,c,d){this.m.volumeControl=u.l.Uc();this.m.movingMediaElementInDOM=!u.Kc;this.m.fullscreenResize=f;u.r.call(this,a,c,d);(c=c.source)&&this.a.currentSrc===c.src&&0<this.a.networkState?a.j("loadstart"):c&&(this.a.src=c.src);if(u.ac&&a.options().nativeControlsForTouch!==l){var e,g,j,k;e=this;g=this.K();c=g.controls();e.a.controls=!!c;j=function(){e.a.controls=f};k=function(){e.a.controls=l};g.d("controlsenabled",j);g.d("controlsdisabled",k);c=function(){g.o("controlsenabled",
j);g.o("controlsdisabled",k)};e.d("dispose",c);g.d("usingcustomcontrols",c);g.Rb(f)}a.L(function(){this.M&&(this.g.autoplay&&this.paused())&&(delete this.M.poster,this.play())});for(a=u.l.$a.length-1;0<=a;a--)u.d(this.a,u.l.$a[a],u.bind(this.b,this.$c));this.Ua()}});t=u.l.prototype;t.D=function(){u.r.prototype.D.call(this)};
t.e=function(){var a=this.b,c=a.M,d;if(!c||this.m.movingMediaElementInDOM===l)c?(d=c.cloneNode(l),u.l.jc(c),c=d,a.M=h):c=u.e("video",{id:a.id()+"_html5_api",className:"vjs-tech"}),c.player=a,u.zb(c,a.w());d=["autoplay","preload","loop","muted"];for(var e=d.length-1;0<=e;e--){var g=d[e];a.g[g]!==h&&(c[g]=a.g[g])}return c};t.$c=function(a){this.j(a);a.stopPropagation()};t.play=function(){this.a.play()};t.pause=function(){this.a.pause()};t.paused=function(){return this.a.paused};t.currentTime=function(){return this.a.currentTime};
t.sd=function(a){try{this.a.currentTime=a}catch(c){u.log(c,"Video is not ready. (Video.js)")}};t.duration=function(){return this.a.duration||0};t.buffered=function(){return this.a.buffered};t.volume=function(){return this.a.volume};t.xd=function(a){this.a.volume=a};t.muted=function(){return this.a.muted};t.vd=function(a){this.a.muted=a};t.width=function(){return this.a.offsetWidth};t.height=function(){return this.a.offsetHeight};
t.Ta=function(){return"function"==typeof this.a.webkitEnterFullScreen&&(/Android/.test(u.F)||!/Chrome|Mac OS X 10.5/.test(u.F))?f:l};t.src=function(a){this.a.src=a};t.load=function(){this.a.load()};t.currentSrc=function(){return this.a.currentSrc};t.Qa=function(){return this.a.Qa};t.wd=function(a){this.a.Qa=a};t.autoplay=function(){return this.a.autoplay};t.rd=function(a){this.a.autoplay=a};t.controls=function(){return this.a.controls};t.loop=function(){return this.a.loop};
t.ud=function(a){this.a.loop=a};t.error=function(){return this.a.error};t.seeking=function(){return this.a.seeking};u.l.isSupported=function(){return!!u.na.canPlayType};u.l.mb=function(a){try{return!!u.na.canPlayType(a.type)}catch(c){return""}};u.l.Uc=function(){var a=u.na.volume;u.na.volume=a/2+0.1;return a!==u.na.volume};u.l.$a="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
u.l.jc=function(a){if(a){a.player=h;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");"function"===typeof a.load&&a.load()}};u.Oc&&(document.createElement("video").constructor.prototype.canPlayType=function(a){return a&&-1!=a.toLowerCase().indexOf("video/mp4")?"maybe":""});
u.f=u.r.extend({i:function(a,c,d){u.r.call(this,a,c,d);var e=c.source;d=c.parentEl;var g=this.a=u.e("div",{id:a.id()+"_temp_flash"}),j=a.id()+"_flash_api";a=a.g;var k=u.k.B({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:a.autoplay,preload:a.Qa,loop:a.loop,muted:a.muted},c.flashVars),q=u.k.B({wmode:"opaque",bgcolor:"#000000"},c.params),n=u.k.B({id:j,name:j,"class":"vjs-tech"},c.attributes);e&&(e.type&&u.f.ed(e.type)?
(a=u.f.Ac(e.src),k.rtmpConnection=encodeURIComponent(a.rb),k.rtmpStream=encodeURIComponent(a.Ob)):k.src=encodeURIComponent(u.mc(e.src)));u.zb(g,d);c.startTime&&this.L(function(){this.load();this.play();this.currentTime(c.startTime)});if(c.iFrameMode===f&&!u.Jc){var r=u.e("iframe",{id:j+"_iframe",name:j+"_iframe",className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0});k.readyFunction="ready";k.eventProxyFunction="events";k.errorEventProxyFunction="errors";u.d(r,"load",u.bind(this,
function(){var a,d=r.contentWindow;a=r.contentDocument?r.contentDocument:r.contentWindow.document;a.write(u.f.nc(c.swf,k,q,n));d.player=this.b;d.ready=u.bind(this.b,function(c){var d=this.h;d.a=a.getElementById(c);u.f.pb(d)});d.events=u.bind(this.b,function(a,c){this&&"flash"===this.ia&&this.j(c)});d.errors=u.bind(this.b,function(a,c){u.log("Flash Error",c)})}));g.parentNode.replaceChild(r,g)}else u.f.Zc(c.swf,g,k,q,n)}});t=u.f.prototype;t.D=function(){u.r.prototype.D.call(this)};t.play=function(){this.a.vjs_play()};
t.pause=function(){this.a.vjs_pause()};t.src=function(a){u.f.dd(a)?(a=u.f.Ac(a),this.Qd(a.rb),this.Rd(a.Ob)):(a=u.mc(a),this.a.vjs_src(a));if(this.b.autoplay()){var c=this;setTimeout(function(){c.play()},0)}};t.currentSrc=function(){var a=this.a.vjs_getProperty("currentSrc");if(a==h){var c=this.Od(),d=this.Pd();c&&d&&(a=u.f.yd(c,d))}return a};t.load=function(){this.a.vjs_load()};t.poster=function(){this.a.vjs_getProperty("poster")};t.buffered=function(){return u.tb(0,this.a.vjs_getProperty("buffered"))};
t.Ta=s(l);var Q=u.f.prototype,R="rtmpConnection rtmpStream preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),S="error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");
function fa(){var a=R[T],c=a.charAt(0).toUpperCase()+a.slice(1);Q["set"+c]=function(c){return this.a.vjs_setProperty(a,c)}}function U(a){Q[a]=function(){return this.a.vjs_getProperty(a)}}var T;for(T=0;T<R.length;T++)U(R[T]),fa();for(T=0;T<S.length;T++)U(S[T]);u.f.isSupported=function(){return 10<=u.f.version()[0]};u.f.mb=function(a){if(!a.type)return"";a=a.type.replace(/;.*/,"").toLowerCase();if(a in u.f.bd||a in u.f.Bc)return"maybe"};
u.f.bd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};u.f.Bc={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};u.f.onReady=function(a){a=u.w(a);var c=a.player||a.parentNode.player,d=c.h;a.player=c;d.a=a;u.f.pb(d)};u.f.pb=function(a){a.w().vjs_getProperty?a.Ua():setTimeout(function(){u.f.pb(a)},50)};u.f.onEvent=function(a,c){u.w(a).player.j(c)};u.f.onError=function(a,c){u.w(a).player.j("error");u.log("Flash Error",c,a)};
u.f.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
u.f.Zc=function(a,c,d,e,g){a=u.f.nc(a,d,e,g);a=u.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);var j=d.childNodes[0];setTimeout(function(){j.style.display="block"},1E3)};
u.f.nc=function(a,c,d,e){var g="",j="",k="";c&&u.k.ua(c,function(a,c){g+=a+"="+c+"&amp;"});d=u.k.B({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);u.k.ua(d,function(a,c){j+='<param name="'+a+'" value="'+c+'" />'});e=u.k.B({data:a,width:"100%",height:"100%"},e);u.k.ua(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash"'+k+">"+j+"</object>"};u.f.yd=function(a,c){return a+"&"+c};
u.f.Ac=function(a){var c={rb:"",Ob:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.rb=a.substring(0,d);c.Ob=a.substring(e,a.length);return c};u.f.ed=function(a){return a in u.f.Bc};u.f.Qc=/^rtmp[set]?:\/\//i;u.f.dd=function(a){return u.f.Qc.test(a)};
u.Pc=u.c.extend({i:function(a,c,d){u.c.call(this,a,c,d);if(!a.g.sources||0===a.g.sources.length){c=0;for(d=a.g.techOrder;c<d.length;c++){var e=u.$(d[c]),g=window.videojs[e];if(g&&g.isSupported()){I(a,e);break}}}else a.src(a.g.sources)}});function V(a){a.Aa=a.Aa||[];return a.Aa}function W(a,c,d){for(var e=a.Aa,g=0,j=e.length,k,q;g<j;g++)k=e[g],k.id()===c?(k.show(),q=k):d&&(k.J()==d&&0<k.mode())&&k.disable();(c=q?q.J():d?d:l)&&a.j(c+"trackchange")}
u.X=u.c.extend({i:function(a,c){u.c.call(this,a,c);this.Q=c.id||"vjs_"+c.kind+"_"+c.language+"_"+u.t++;this.xc=c.src;this.Wc=c["default"]||c.dflt;this.Ad=c.title;this.Ld=c.srclang;this.fd=c.label;this.fa=[];this.ec=[];this.ga=this.ha=0;this.b.d("fullscreenchange",u.bind(this,this.Rc))}});t=u.X.prototype;t.J=p("A");t.src=p("xc");t.ub=p("Wc");t.title=p("Ad");t.label=p("fd");t.readyState=p("ha");t.mode=p("ga");t.Rc=function(){this.a.style.fontSize=this.b.H?140*(screen.width/this.b.width())+"%":""};
t.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-"+this.A+" vjs-text-track"})};t.show=function(){X(this);this.ga=2;u.c.prototype.show.call(this)};t.C=function(){X(this);this.ga=1;u.c.prototype.C.call(this)};t.disable=function(){2==this.ga&&this.C();this.b.o("timeupdate",u.bind(this,this.update,this.Q));this.b.o("ended",u.bind(this,this.reset,this.Q));this.reset();this.b.V.textTrackDisplay.removeChild(this);this.ga=0};
function X(a){0===a.ha&&a.load();0===a.ga&&(a.b.d("timeupdate",u.bind(a,a.update,a.Q)),a.b.d("ended",u.bind(a,a.reset,a.Q)),("captions"===a.A||"subtitles"===a.A)&&a.b.V.textTrackDisplay.Z(a))}t.load=function(){0===this.ha&&(this.ha=1,u.get(this.xc,u.bind(this,this.nd),u.bind(this,this.Gb)))};t.Gb=function(a){this.error=a;this.ha=3;this.j("error")};
t.nd=function(a){var c,d;a=a.split("\n");for(var e="",g=1,j=a.length;g<j;g++)if(e=u.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=u.trim(a[++g])):c=this.fa.length;c={id:c,index:this.fa.length};d=e.split(" --\x3e ");c.startTime=Y(d[0]);c.va=Y(d[1]);for(d=[];a[++g]&&(e=u.trim(a[g]));)d.push(e);c.text=d.join("<br/>");this.fa.push(c)}this.ha=2;this.j("loaded")};
function Y(a){var c=a.split(":");a=0;var d,e,g;3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);c=c.split(/\s+/);c=c.splice(0,1)[0];c=c.split(/\.|,/);g=parseFloat(c[1]);c=c[0];a+=3600*parseFloat(d);a+=60*parseFloat(e);a+=parseFloat(c);g&&(a+=g/1E3);return a}
t.update=function(){if(0<this.fa.length){var a=this.b.currentTime();if(this.Lb===b||a<this.Lb||this.Ma<=a){var c=this.fa,d=this.b.duration(),e=0,g=l,j=[],k,q,n,r;a>=this.Ma||this.Ma===b?r=this.wb!==b?this.wb:0:(g=f,r=this.Db!==b?this.Db:c.length-1);for(;;){n=c[r];if(n.va<=a)e=Math.max(e,n.va),n.Ia&&(n.Ia=l);else if(a<n.startTime){if(d=Math.min(d,n.startTime),n.Ia&&(n.Ia=l),!g)break}else g?(j.splice(0,0,n),q===b&&(q=r),k=r):(j.push(n),k===b&&(k=r),q=r),d=Math.min(d,n.va),e=Math.max(e,n.startTime),
n.Ia=f;if(g)if(0===r)break;else r--;else if(r===c.length-1)break;else r++}this.ec=j;this.Ma=d;this.Lb=e;this.wb=k;this.Db=q;a=this.ec;c="";d=0;for(e=a.length;d<e;d++)c+='<span class="vjs-tt-cue">'+a[d].text+"</span>";this.a.innerHTML=c;this.j("cuechange")}}};t.reset=function(){this.Ma=0;this.Lb=this.b.duration();this.Db=this.wb=0};u.Ub=u.X.extend();u.Ub.prototype.A="captions";u.$b=u.X.extend();u.$b.prototype.A="subtitles";u.Vb=u.X.extend();u.Vb.prototype.A="chapters";
u.bc=u.c.extend({i:function(a,c,d){u.c.call(this,a,c,d);if(a.g.tracks&&0<a.g.tracks.length){c=this.b;a=a.g.tracks;var e;for(d=0;d<a.length;d++){e=a[d];var g=c,j=e.kind,k=e.label,q=e.language,n=e;e=g.Aa=g.Aa||[];n=n||{};n.kind=j;n.label=k;n.language=q;j=u.$(j||"subtitles");g=new window.videojs[j+"Track"](g,n);e.push(g)}}}});u.bc.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};
u.Y=u.N.extend({i:function(a,c){var d=this.ca=c.track;c.label=d.label();c.selected=d.ub();u.N.call(this,a,c);this.b.d(d.J()+"trackchange",u.bind(this,this.update))}});u.Y.prototype.p=function(){u.N.prototype.p.call(this);W(this.b,this.ca.Q,this.ca.J())};u.Y.prototype.update=function(){this.selected(2==this.ca.mode())};u.bb=u.Y.extend({i:function(a,c){c.track={J:function(){return c.kind},K:a,label:function(){return c.kind+" off"},ub:s(l),mode:s(l)};u.Y.call(this,a,c);this.selected(f)}});
u.bb.prototype.p=function(){u.Y.prototype.p.call(this);W(this.b,this.ca.Q,this.ca.J())};u.bb.prototype.update=function(){for(var a=V(this.b),c=0,d=a.length,e,g=f;c<d;c++)e=a[c],e.J()==this.ca.J()&&2==e.mode()&&(g=l);this.selected(g)};u.S=u.R.extend({i:function(a,c){u.R.call(this,a,c);1>=this.I.length&&this.C()}});u.S.prototype.ta=function(){var a=[],c;a.push(new u.bb(this.b,{kind:this.A}));for(var d=0;d<V(this.b).length;d++)c=V(this.b)[d],c.J()===this.A&&a.push(new u.Y(this.b,{track:c}));return a};
u.Da=u.S.extend({i:function(a,c,d){u.S.call(this,a,c,d);this.a.setAttribute("aria-label","Captions Menu")}});u.Da.prototype.A="captions";u.Da.prototype.qa="Captions";u.Da.prototype.className="vjs-captions-button";u.Ha=u.S.extend({i:function(a,c,d){u.S.call(this,a,c,d);this.a.setAttribute("aria-label","Subtitles Menu")}});u.Ha.prototype.A="subtitles";u.Ha.prototype.qa="Subtitles";u.Ha.prototype.className="vjs-subtitles-button";
u.Ea=u.S.extend({i:function(a,c,d){u.S.call(this,a,c,d);this.a.setAttribute("aria-label","Chapters Menu")}});t=u.Ea.prototype;t.A="chapters";t.qa="Chapters";t.className="vjs-chapters-button";t.ta=function(){for(var a=[],c,d=0;d<V(this.b).length;d++)c=V(this.b)[d],c.J()===this.A&&a.push(new u.Y(this.b,{track:c}));return a};
t.Ka=function(){for(var a=V(this.b),c=0,d=a.length,e,g,j=this.I=[];c<d;c++)if(e=a[c],e.J()==this.A&&e.ub()){if(2>e.readyState()){this.Id=e;e.d("loaded",u.bind(this,this.Ka));return}g=e;break}a=this.wa=new u.ma(this.b);a.a.appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.$(this.A),zd:-1}));if(g){e=g.fa;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new u.Xa(this.b,{track:g,cue:k}),j.push(k),a.Z(k)}0<this.I.length&&this.show();return a};
u.Xa=u.N.extend({i:function(a,c){var d=this.ca=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.va;u.N.call(this,a,c);d.d("cuechange",u.bind(this,this.update))}});u.Xa.prototype.p=function(){u.N.prototype.p.call(this);this.b.currentTime(this.cue.startTime);this.update(this.cue.startTime)};u.Xa.prototype.update=function(){var a=this.cue,c=this.b.currentTime();this.selected(a.startTime<=c&&c<a.va)};
u.k.B(u.Fa.prototype.g.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse)u.JSON=window.JSON;else{u.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;u.JSON.parse=function(a,c){function d(a,e){var k,q,n=a[e];if(n&&"object"===typeof n)for(k in n)Object.prototype.hasOwnProperty.call(n,k)&&(q=d(n,k),q!==b?n[k]=q:delete n[k]);return c.call(a,e,n)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
u.fc=function(){var a,c,d=document.getElementsByTagName("video");if(d&&0<d.length)for(var e=0,g=d.length;e<g;e++)if((c=d[e])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==h&&(a=u.JSON.parse(a||"{}"),v(c,a)));else{u.kb();break}else u.Ec||u.kb()};u.kb=function(){setTimeout(u.fc,1)};"complete"===document.readyState?u.Ec=f:u.U(window,"load",function(){u.Ec=f});u.kb();u.od=function(a,c){u.s.prototype[a]=c};var ga=this;ga.Ed=f;function $(a,c){var d=a.split("."),e=ga;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",u);$("_V_",u);$("videojs.options",u.options);$("videojs.players",u.xa);$("videojs.TOUCH_ENABLED",u.ac);$("videojs.cache",u.ra);$("videojs.Component",u.c);u.c.prototype.player=u.c.prototype.K;u.c.prototype.dispose=u.c.prototype.D;u.c.prototype.createEl=u.c.prototype.e;u.c.prototype.el=u.c.prototype.w;u.c.prototype.addChild=u.c.prototype.Z;u.c.prototype.children=u.c.prototype.children;u.c.prototype.on=u.c.prototype.d;u.c.prototype.off=u.c.prototype.o;u.c.prototype.one=u.c.prototype.U;
u.c.prototype.trigger=u.c.prototype.j;u.c.prototype.triggerReady=u.c.prototype.Ua;u.c.prototype.show=u.c.prototype.show;u.c.prototype.hide=u.c.prototype.C;u.c.prototype.width=u.c.prototype.width;u.c.prototype.height=u.c.prototype.height;u.c.prototype.dimensions=u.c.prototype.Xc;u.c.prototype.ready=u.c.prototype.L;u.c.prototype.addClass=u.c.prototype.n;u.c.prototype.removeClass=u.c.prototype.u;$("videojs.Player",u.s);u.s.prototype.dispose=u.s.prototype.D;u.s.prototype.requestFullScreen=u.s.prototype.ya;
u.s.prototype.cancelFullScreen=u.s.prototype.ob;u.s.prototype.bufferedPercent=u.s.prototype.Ja;u.s.prototype.usingNativeControls=u.s.prototype.Rb;u.s.prototype.reportUserActivity=u.s.prototype.Mb;u.s.prototype.userActive=u.s.prototype.ja;$("videojs.MediaLoader",u.Pc);$("videojs.TextTrackDisplay",u.bc);$("videojs.ControlBar",u.Fa);$("videojs.Button",u.q);$("videojs.PlayToggle",u.Yb);$("videojs.FullscreenToggle",u.Ga);$("videojs.BigPlayButton",u.Wa);$("videojs.LoadingSpinner",u.Wb);
$("videojs.CurrentTimeDisplay",u.Ya);$("videojs.DurationDisplay",u.Za);$("videojs.TimeDivider",u.cc);$("videojs.RemainingTimeDisplay",u.fb);$("videojs.Slider",u.O);$("videojs.ProgressControl",u.eb);$("videojs.SeekBar",u.Zb);$("videojs.LoadProgressBar",u.ab);$("videojs.PlayProgressBar",u.Xb);$("videojs.SeekHandle",u.gb);$("videojs.VolumeControl",u.ib);$("videojs.VolumeBar",u.hb);$("videojs.VolumeLevel",u.dc);$("videojs.VolumeMenuButton",u.oa);$("videojs.VolumeHandle",u.jb);$("videojs.MuteToggle",u.da);
$("videojs.PosterImage",u.cb);$("videojs.Menu",u.ma);$("videojs.MenuItem",u.N);$("videojs.MenuButton",u.R);u.R.prototype.createItems=u.R.prototype.ta;u.S.prototype.createItems=u.S.prototype.ta;u.Ea.prototype.createItems=u.Ea.prototype.ta;$("videojs.SubtitlesButton",u.Ha);$("videojs.CaptionsButton",u.Da);$("videojs.ChaptersButton",u.Ea);$("videojs.MediaTechController",u.r);u.r.prototype.features=u.r.prototype.m;u.r.prototype.m.volumeControl=u.r.prototype.m.Dc;u.r.prototype.m.fullscreenResize=u.r.prototype.m.Jd;
u.r.prototype.m.progressEvents=u.r.prototype.m.Nd;u.r.prototype.m.timeupdateEvents=u.r.prototype.m.Sd;$("videojs.Html5",u.l);u.l.Events=u.l.$a;u.l.isSupported=u.l.isSupported;u.l.canPlaySource=u.l.mb;u.l.prototype.setCurrentTime=u.l.prototype.sd;u.l.prototype.setVolume=u.l.prototype.xd;u.l.prototype.setMuted=u.l.prototype.vd;u.l.prototype.setPreload=u.l.prototype.wd;u.l.prototype.setAutoplay=u.l.prototype.rd;u.l.prototype.setLoop=u.l.prototype.ud;$("videojs.Flash",u.f);u.f.isSupported=u.f.isSupported;
u.f.canPlaySource=u.f.mb;u.f.onReady=u.f.onReady;$("videojs.TextTrack",u.X);u.X.prototype.label=u.X.prototype.label;$("videojs.CaptionsTrack",u.Ub);$("videojs.SubtitlesTrack",u.$b);$("videojs.ChaptersTrack",u.Vb);$("videojs.autoSetup",u.fc);$("videojs.plugin",u.od);$("videojs.createTimeRange",u.tb);})();
!function(t,a,e,n,m){m=a.location,t.src="//www.google-analytics.com/__utm.gif?utmwv=5.4.2&utmac=UA-16505296-2&utmn=1&utmhn="+n(m.hostname)+"&utmsr="+a.screen.availWidth+"x"+a.screen.availHeight+"&utmul="+(e.language||e.userLanguage||"").toLowerCase()+"&utmr="+n(m.href)+"&utmp="+n(m.hostname+m.pathname)+"&utmcc=__utma%3D1."+Math.floor(1e10*Math.random())+".1.1.1.1%3B"+"&utme=8(vjsv)9(v4.3.0)"}(new Image,window,navigator,encodeURIComponent);

// BigVideo.js
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery","videojs","imagesloaded","jquery-ui"],i):i(jQuery,videojs)}(function(i,o){i.BigVideo=function(e){function t(){var o=I.container.outerWidth()<i(window).width()?I.container.outerWidth():i(window).width(),e=I.container.outerHeight()<i(window).height()?I.container.outerHeight():i(window).height(),t=o/e;I.container.is(i("body"))&&i("html,body").css("height",i(window).height()>i("body").css("height","auto").height()?"100%":"auto"),b>t?"video"==v?(l.width(e*b).height(e),I.shrinkable?i(u).css("top",-(o/b-e)/2).css("left",0).css("height",o/b):i(u).css("top",0).css("left",-(e*b-o)/2).css("height",e),i(u+"_html5_api").css("width",e*b).css("height",e),i(u+"_flash_api").css("width",e*b).css("height",e)):i("#big-video-image").css({width:"auto",height:e,top:0,left:-(e*b-o)/2}):"video"==v?(l.width(o).height(o/b),i(u).css("top",-(o/b-e)/2).css("left",0).css("height",o/b),i(u+"_html5_api").css("width",i(u+"_html5_api").parent().width()+"px").css("height","auto"),i(u+"_flash_api").css("width",o).css("height",o/b)):i("#big-video-image").css({width:o,height:"auto",top:-(o/b-e)/2,left:0})}function d(){var o='<div id="big-video-control-container"><div id="big-video-control"><a href="#" id="big-video-control-play"></a><div id="big-video-control-middle"><div id="big-video-control-bar"><div id="big-video-control-bound-left"></div><div id="big-video-control-progress"></div><div id="big-video-control-track"></div><div id="big-video-control-bound-right"></div></div></div>  <div id="big-video-control-timer"></div></div></div>';I.container.append(o),i("#big-video-control-container").css("display","none"),i("#big-video-control-timer").css("display","none"),i("#big-video-control-track").slider({animate:!0,step:.01,slide:function(o,e){_=!0,i("#big-video-control-progress").css("width",e.value-.16+"%"),l.currentTime(e.value/100*l.duration())},stop:function(i,o){_=!1,l.currentTime(o.value/100*l.duration())}}),i("#big-video-control-bar").click(function(o){l.currentTime(o.offsetX/i(this).width()*l.duration())}),i("#big-video-control-play").click(function(i){i.preventDefault(),n("toggle")}),l.on("timeupdate",function(){if(!_&&l.currentTime()/l.duration()){var o=l.currentTime(),e=Math.floor(o/60),t=Math.floor(o)-60*e;10>t&&(t="0"+t);var d=l.currentTime()/l.duration()*100;i("#big-video-control-track").slider("value",d),i("#big-video-control-progress").css("width",d-.16+"%"),i("#big-video-control-timer").text(e+":"+t+"/"+m)}})}function n(o){var e=o||"toggle";"toggle"==e&&(e=k?"pause":"play"),"pause"==e?(l.pause(),i("#big-video-control-play").css("background-position","-16px"),k=!1):"play"==e?(l.play(),i("#big-video-control-play").css("background-position","0"),k=!0):"skip"==e&&s()}function a(){l.play(),I.container.off("click",a)}function s(){g++,g===L.length&&(g=0),r(L[g])}function r(o){i(u).css("display","block"),v="video",l.src(o),k=!0,j?(i("#big-video-control-container").css("display","none"),l.ready(function(){l.volume(0)}),doLoop=!0):(i("#big-video-control-container").css("display","block"),l.ready(function(){l.volume(y)}),doLoop=!1),i("#big-video-image").css("display","none"),i(u).css("display","block")}function c(o){i("#big-video-image").remove(),l.pause(),i(u).css("display","none"),i("#big-video-control-container").css("display","none"),v="image";var e=i('<img id="big-video-image" src='+o+" />");f.append(e),i("#big-video-image").imagesLoaded(function(){b=i("#big-video-image").width()/i("#big-video-image").height(),t()})}var l,g,v,h={useFlashForFirefox:!0,forceAutoplay:!1,controls:!1,doLoop:!1,container:i("body"),shrinkable:!1},p={},u="#big-video-vid",f=i('<div id="big-video-wrap"></div>'),b=(i(""),16/9),m=0,y=.8,w=!1,_=!1,k=!1,x=!1,j=!1,L=[],I=i.extend({},h,e);return p.init=function(){if(!w){I.container.prepend(f);var e=I.forceAutoplay?"autoplay":"";l=i('<video id="'+u.substr(1)+'" class="video-js vjs-default-skin" height="1" width="1" preload="auto" data-setup="{}" '+e+" webkit-playsinline></video>"),l.css("position","absolute"),f.append(l);var n=["html5","flash"],r=navigator.userAgent.toLowerCase(),c=-1!=r.indexOf("firefox");I.useFlashForFirefox&&c&&(n=["flash","html5"]),l=o(u.substr(1),{controls:!1,autoplay:!0,preload:"auto",techOrder:n}),I.controls&&d(),t(),w=!0,k=!1,I.forceAutoplay&&i("body").on("click",a),i("#big-video-vid_flash_api").attr("scale","noborder").attr("width","100%").attr("height","100%"),i(window).on("resize.bigvideo",function(){t()}),l.on("loadedmetadata",function(o){b=document.getElementById("big-video-vid_flash_api")?document.getElementById("big-video-vid_flash_api").vjs_getProperty("videoWidth")/document.getElementById("big-video-vid_flash_api").vjs_getProperty("videoHeight"):i("#big-video-vid_html5_api").prop("videoWidth")/i("#big-video-vid_html5_api").prop("videoHeight"),t();var e=Math.round(l.duration()),d=Math.floor(e/60),n=e-60*d;10>n&&(n="0"+n),m=d+":"+n}),l.on("ended",function(){I.doLoop&&(l.currentTime(0),l.play()),x&&s()})}},p.show=function(o,e){if(void 0===e&&(e={}),j=e.ambient===!0,(j||e.doLoop)&&(I.doLoop=!0),"string"==typeof o){var t=o.lastIndexOf("?")>0?o.substring(o.lastIndexOf(".")+1,o.lastIndexOf("?")):o.substring(o.lastIndexOf(".")+1);"jpg"==t||"gif"==t||"png"==t?c(o):("mp4"==t||"ogg"==t||"ogv"==t||"webm"==t)&&(r(o),e.onShown&&e.onShown(),x=!1)}else if(i.isArray(o))r(o);else{if("object"!=typeof o||!o.src||!o.type)throw"BigVideo.show received invalid input for parameter source";r([o])}},p.showPlaylist=function(o,e){if(!i.isArray(o))throw"BigVideo.showPlaylist parameter files accepts only arrays";void 0===e&&(e={}),j=e.ambient===!0,(j||e.doLoop)&&(I.doLoop=!0),L=o,g=0,this.show(L[g]),e.onShown&&e.onShown(),x=!0},p.getPlayer=function(){return l},p.remove=p.dispose=function(){w=!1,f.remove(),i(window).off("resize.bigvideo"),l&&(l.off("loadedmetadata"),l.off("ended"),l.dispose())},p.triggerPlayer=function(i){n(i)},p}});


/*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */
(function(a,d,p){a.fn.backstretch=function(c,b){(c===p||0===c.length)&&a.error("No images were supplied for Backstretch");0===a(d).scrollTop()&&d.scrollTo(0,0);return this.each(function(){var d=a(this),g=d.data("backstretch");if(g){if("string"==typeof c&&"function"==typeof g[c]){g[c](b);return}b=a.extend(g.options,b);g.destroy(!0)}g=new q(this,c,b);d.data("backstretch",g)})};a.backstretch=function(c,b){return a("body").backstretch(c,b).data("backstretch")};a.expr[":"].backstretch=function(c){return a(c).data("backstretch")!==p};a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5E3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},q=function(c,b,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{});this.images=a.isArray(b)?b:[b];a.each(this.images,function(){a("<img />")[0].src=this});this.isBody=c===document.body;this.$container=a(c);this.$root=this.isBody?l?a(d):a(document):this.$container;c=this.$container.children(".backstretch").first();this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(c=this.$container.css("position"),b=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===b?0:b,background:"none"}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&l?"fixed":"absolute"});this.index=0;this.show(this.index);a(d).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===d.pageYOffset&&(d.scrollTo(0,1),this.resize())},this))};q.prototype={resize:function(){try{var a={left:0,top:0},b=this.isBody?this.$root.width():this.$root.innerWidth(),e=b,g=this.isBody?d.innerHeight?d.innerHeight:this.$root.height():this.$root.innerHeight(),j=e/this.$img.data("ratio"),f;j>=g?(f=(j-g)/2,this.options.centeredY&&(a.top="-"+f+"px")):(j=g,e=j*this.$img.data("ratio"),f=(e-b)/2,this.options.centeredX&&(a.left="-"+f+"px"));this.$wrap.css({width:b,height:g}).find("img:not(.deleteable)").css({width:e,height:j}).css(a)}catch(h){}return this},show:function(c){if(!(Math.abs(c)>this.images.length-1)){var b=this,e=b.$wrap.find("img").addClass("deleteable"),d={relatedTarget:b.$container[0]};b.$container.trigger(a.Event("backstretch.before",d),[b,c]);this.index=c;clearInterval(b.interval);b.$img=a("<img />").css(s).bind("load",function(f){var h=this.width||a(f.target).width();f=this.height||a(f.target).height();a(this).data("ratio",h/f);a(this).fadeIn(b.options.speed||b.options.fade,function(){e.remove();b.paused||b.cycle();a(["after","show"]).each(function(){b.$container.trigger(a.Event("backstretch."+this,d),[b,c])})});b.resize()}).appendTo(b.$wrap);b.$img.attr("src",b.images[c]);return b}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(c){a(d).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);c||this.$wrap.remove();this.$container.removeData("backstretch")}};var l,f=navigator.userAgent,m=navigator.platform,e=f.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],h=f.match(/Fennec\/([0-9]+)/),h=!!h&&h[1],n=f.match(/Opera Mobi\/([0-9]+)/),t=!!n&&n[1],k=f.match(/MSIE ([0-9]+)/),k=!!k&&k[1];l=!((-1<m.indexOf("iPhone")||-1<m.indexOf("iPad")||-1<m.indexOf("iPod"))&&e&&534>e||d.operamini&&"[object OperaMini]"==={}.toString.call(d.operamini)||n&&7458>t||-1<f.indexOf("Android")&&e&&533>e||h&&6>h||"palmGetResource"in d&&e&&534>e||-1<f.indexOf("MeeGo")&&-1<f.indexOf("NokiaBrowser/8.5.0")||k&&6>=k)})(jQuery,window);


/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();


// Add trim function to String object
// Usage: var abc = ' testing ';
// abc = abc.trim(); // abc = 'testing';
String.prototype.trim = function() {
  return this.replace(/^s+|s+$/g, '');
};


// Function from David Walsh: http://davidwalsh.name/css-animation-callback
// Detect when animations (transition) end
function whichTransitionEvent() {
  var t,
      el = document.createElement('fakeelement');

  var transitions = {
    'transition'      : 'transitionend',
    'OTransition'     : 'oTransitionEnd',
    'MozTransition'   : 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  }

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}
/*
Usage: example code below
var transitionEvent = whichTransitionEvent();

$('.button').click(function() {
  $(this).addClass('animate');
  $(this).one(transitionEvent,
              function(event) {
    // Do something when the transition ends
  });
});
*/

// Detect when animations (keyframes) end
function whichAnimationEvent() {
  var t,
      el = document.createElement('fakeelement');

  var animations = {
    'animation'      : 'animationend',
    'OAnimation'     : 'oAnimationEnd',
    'MozAnimation'   : 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd'
  }

  for (t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
}


/*
Usage: example code below
var animationEvent = whichAnimationEvent();

$('.button').click(function() {
  $(this).addClass('animate');
  $(this).one(animationEvent,
              function(event) {
    // Do something when the animation ends
  });
});
*/

/*
 * Trace Debug
 */
var traceId = 0;
function trace(s) {
  var logExist = $('#log').html();
  if (logExist === null || logExist === 'undefined') {
    $('body').append('<div id="log"></div>');
    $('#log').draggable();
  }
  $('#log').prepend('<p>' + traceId + '. ' + s + '</p>');
  traceId++;
}

/**
 * Get Query string using javascript only
 *
 * e.g. $.QueryString['param']
 */
(function($) {
  $.QueryString = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
      var p=a[i].split('=');
      if (p.length != 2) continue;
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  })(window.location.search.substr(1).split('&'))
})(jQuery);


/**
 * Request Animation Frame Polyfill.
 * @author Tino Zijdel
 * @author Paul Irish
 * @see https://gist.github.com/paulirish/1579671
 *
 * Example: use like setTimeout, but this is better since it will group all of your animations into a single browser repaint, synced with your GPU and hog much less CPU
 *
 *  function draw(ele) {
      requestAnimationFrame(draw, $('.container'));

      var now = new Date().getTime(),
          ms = now - (time || now);

      time = now;

      // Drawing code goes here... for example updating an 'x' position:
      this.x += 10 * ms; // Increase 'x' by 10 units per millisecond passed since the last call
    }
    draw($('.container'));
 */
;(function() {

  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }

}());


/*
 * Animate Bounce
 * Create bouncing animation, usually used for button
 *
 *  $('.btn-test').on('click', function() {
      animateBounce(this);
    });
 */
function animateBounce(ele) {
  $(ele).velocity({
    translateY: '-1.5rem',
    rotateZ: '-10deg'
  }, 100, 'easeOut').velocity({
    rotateZ: '8deg',
  }, 150).velocity({
    translateY: '0',
    rotateZ: '0'
  }, 600, 'easeOutBounce');
}

/*
 * Debounce
 * Window resize event and mousemove event will fire continually, if there's any function that do something heavy then it may caused lagging, adding debounce will limit the number of times a function can be run within a given time frame.
 */
// As taken from the UnderscoreJS utility framework
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
      var context = this, args = arguments;
      var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
  };
}

// HOW TO USE: Add the resize callback but only allow it to execute once every 300 milliseconds
/*window.addEventListener('resize', debounce(function(event) {

  // Do the resize processing (whatever you'd like to do!)

}, 300));*/


/*
* Placeholder plugin for jQuery
* ---
* Copyright 2010, Daniel Stocks (http://webcloud.se)
* Released under the MIT, BSD, and GPL Licenses.
*/
(function(b){function d(a){this.input=a;a.attr("type")=="password"&&this.handlePassword();b(a[0].form).submit(function(){if(a.hasClass("placeholder")&&a[0].value==a.attr("placeholder"))a[0].value=""})}d.prototype={show:function(a){if(this.input[0].value===""||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");this.input[0].value=this.input.attr("placeholder")}},
hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if(b.browser.msie&&a[0].outerHTML){var c=b(a[0].outerHTML.replace(/type=(['"])?password\1/gi,
"type=$1text$1"));this.fakePassword=c.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");b(this).hide()});b(a[0].form).submit(function(){c.remove();a.show()})}}};var e=!!("placeholder"in document.createElement("input"));b.fn.placeholder=function(){return e?this:this.each(function(){var a=b(this),c=new d(a);c.show(!0);a.focus(function(){c.hide()});a.blur(function(){c.show(!1)});b.browser.msie&&(b(window).load(function(){a.val()&&a.removeClass("placeholder");c.show(!0)}),
a.focus(function(){if(this.value==""){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);








/*
 * Get ducument size
 * @param int 0 ~ 3
 * @return array [width of current page] [height of current page] [width of window] [height of window]
 *
 */
function getDocumentSize(val) {
  var xScroll,
      yScroll,
      value,
      windowWidth,
      windowHeight;

  if (window.innerHeight && window.scrollMaxY) {
    xScroll = window.innerWidth + window.scrollMaxX;
    yScroll = window.innerHeight + window.scrollMaxY;
  } else if(document.body.scrollHeight > document.body.offsetHeight) {
    xScroll = document.body.scrollWidth;
    yScroll = document.body.scrollHeight;
  } else {
    xScroll = document.body.offsetWidth;
    yScroll = document.body.offsetHeight;
  }

  if (self.innerHeight) {
    if (document.documentElement.clientWidth) {
      windowWidth = document.documentElement.clientWidth;
    } else {
      windowWidth = self.innerWidth;
    }
    windowHeight = self.innerHeight;
  } else if(document.documentElement && document.documentElement.clientHeight) {
    windowWidth = document.documentElement.clientWidth;
    windowHeight = document.documentElement.clientHeight;
  } else if(document.body) {
    windowWidth=document.body.clientWidth;  windowHeight=document.body.clientHeight;
  }

  if (yScroll < windowHeight) {
    pageHeight = windowHeight;
  } else {
    pageHeight = yScroll;
  }

  if (xScroll < windowWidth) {
    pageWidth = xScroll;
  } else {
    pageWidth = windowWidth;
  }

  arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);
  return arrayPageSize[val];
};






/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
*/
// t: current time, b: begInnIng value, c: change In value, d: duration

(function($, undefined) {
  jQuery.easing['jswing'] = jQuery.easing['swing'];

  jQuery.extend( jQuery.easing,
  {
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {   return $.easing[$.easing.def](x, t, b, c, d); },
    easeInQuad: function (x, t, b, c, d) {  return c*(t/=d)*t + b;  },
    easeOutQuad: function (x, t, b, c, d) { return -c *(t/=d)*(t-2) + b;  },
    easeInOutQuad: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t + b;
                        return -c/2 * ((--t)*(t-2) - 1) + b;  },
    easeInCubic: function (x, t, b, c, d) { return c*(t/=d)*t*t + b;  },
    easeOutCubic: function (x, t, b, c, d) {return c*((t=t/d-1)*t*t + 1) + b; },
    easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;
                        return c/2*((t-=2)*t*t + 2) + b;  },
    easeInQuart: function (x, t, b, c, d) { return c*(t/=d)*t*t*t + b;  },
    easeOutQuart: function (x, t, b, c, d) {return -c * ((t=t/d-1)*t*t*t - 1) + b;  },
    easeInOutQuart: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                        return -c/2 * ((t-=2)*t*t*t - 2) + b; },
    easeInQuint: function (x, t, b, c, d) { return c*(t/=d)*t*t*t*t + b;  },
    easeOutQuint: function (x, t, b, c, d) {return c*((t=t/d-1)*t*t*t*t + 1) + b; },
    easeInOutQuint: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                        return c/2*((t-=2)*t*t*t*t + 2) + b;  },
    easeInSine: function (x, t, b, c, d) {  return -c * Math.cos(t/d * (Math.PI/2)) + c + b;  },
    easeOutSine: function (x, t, b, c, d) { return c * Math.sin(t/d * (Math.PI/2)) + b; },
    easeInOutSine: function (x, t, b, c, d) {return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b; },
    easeInExpo: function (x, t, b, c, d) {  return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;  },
    easeOutExpo: function (x, t, b, c, d) { return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;  },
    easeInOutExpo: function (x, t, b, c, d) {if (t==0) return b; if (t==d) return b+c; if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b; },
    easeInCirc: function (x, t, b, c, d) {  return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;  },
    easeOutCirc: function (x, t, b, c, d) { return c * Math.sqrt(1 - (t=t/d-1)*t) + b;  },
    easeInOutCirc: function (x, t, b, c, d) {if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
                        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b; },
    easeInElastic: function (x, t, b, c, d) { var s=1.70158;var p=0;var a=c;
                        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                        if (a < Math.abs(c)) { a=c; var s=p/4; }
                        else var s = p/(2*Math.PI) * Math.asin (c/a);
                        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;  },
    easeOutElastic: function (x, t, b, c, d) {  var s=1.70158;var p=0;var a=c;
                        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                        if (a < Math.abs(c)) { a=c; var s=p/4; }
                        else var s = p/(2*Math.PI) * Math.asin (c/a);
                        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b; },
    easeInOutElastic: function (x, t, b, c, d) { var s=1.70158;var p=0;var a=c;
                        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
                        if (a < Math.abs(c)) { a=c; var s=p/4; }
                        else var s = p/(2*Math.PI) * Math.asin (c/a);
                        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b; },
    easeInBack: function (x, t, b, c, d, s) { if (s == undefined) s = 1.70158;
                        return c*(t/=d)*t*((s+1)*t - s) + b;  },
    easeOutBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158;
                        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b; },
    easeInOutBack: function (x, t, b, c, d, s) { if (s == undefined) s = 1.70158;
                        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b; },
    easeInBounce: function (x, t, b, c, d) {return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b; },
    easeOutBounce: function (x, t, b, c, d) {if ((t/=d) < (1/2.75)) {
                          return c*(7.5625*t*t) + b;
                        } else if (t < (2/2.75)) {
                          return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                        } else if (t < (2.5/2.75)) {
                          return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                        } else {
                          return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                        }
                      },
    easeInOutBounce: function (x, t, b, c, d) {
                        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
                        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b; }
  });
}) (jQuery);






/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 *  https://github.com/desandro/imagesloaded
 *
 *  Usage:
 *      - With Jquery
    $('#container').imagesLoaded()
  .always( function( instance ) {
      // all loaded (broken + success)
    console.log('all images loaded');
  })
  .done( function( instance ) {
      // all loaded, all success, no broken
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });
 *
 *      - Without Jquery
  var imgLoad = imagesLoaded('#container');
  imgLoad.on( 'always', function() {
      console.log( imgLoad.images.length + ' images loaded' );
      // detect which image is broken
      for ( var i = 0, len = imgLoad.images.length; i < len; i++ ) {
        var image = imgLoad.images[i];
        var result = image.isLoaded ? 'loaded' : 'broken';
        console.log( 'image is ' + result + ' for ' + image.img.src );
      }
  });
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}var n=e.prototype;n.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},n.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},n.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},n.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},n.on=n.addListener,n.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},n.once=n.addOnceListener,n.defineEvent=function(e){return this.getListeners(e),this},n.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},n.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},n.off=n.removeListener,n.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},n.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},n.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},n.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},n.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],o=n.listener.apply(this,t||[]),(o===this._getOnceReturnValue()||n.once===!0)&&this.removeListener(e,s[r][i].listener);return this},n.trigger=n.emitEvent,n.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},n.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);







/*
    Fullscreen background is a small jQuery plugin that allows you to create fullscreen background.

    Author:     Gaya Kessler
    Date:       04-25-2012
    URL:        http://www.gayadesign.com

  Select img tag
  $(selector).fullscreenBackground();
*/

(function ($) {
    var parentElement = "";
    var optionsArr = {
        selector: "img",
        fillOnResize: true,
        defaultCss: true
    };

    $.fn.fullscreenBackground = function (options) {
        if(options) {
            $.extend(optionsArr, options );
        }

        this.each(function () {
            parentElement = this;

            if (optionsArr.defaultCss == true) {
                $("html,body").css({
                    width: "100%",
                    height: "100%"
                });

                $(parentElement).css({
                    //height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    position: "absolute",
                    top: $('nav').height(),
                    left: "0px",
                    zIndex: 1
                });
            }

      var windowWidth = $(window).width();
            if (optionsArr.fillOnResize == true) {
                $(window).resize(function () {
                  windowWidth = $(window).width();
                $(parentElement).css({
                      top: $('nav').height()
                  });

                    fillBg(optionsArr.selector, parentElement);
                });
            }

            fillBg(optionsArr.selector, parentElement);
        });
    };

    function fillBg(selector, parentobj) {
        var windowHeight = $(window).height();
        var windowWidth = $(document).width();
    //windowHeight = windowHeight - $('nav').height() - $('footer').height();
    windowHeight = windowHeight - $('nav').height();

        $(selector, parentobj).each(function () {
            var imgHeight = $(this).attr("height");
            var imgWidth = $(this).attr("width");

            var newWidth = windowWidth;
            var newHeight = (windowWidth / imgWidth) * imgHeight;
            var topMargin = ((newHeight - windowHeight) / 2) * -1;
            var leftMargin = 0;

            if (newHeight < windowHeight) {
                var newWidth = (windowHeight / imgHeight) * imgWidth;
                var newHeight = windowHeight;
                var topMargin = 0;
                var leftMargin = ((newWidth - windowWidth) / 2) * -1;
            }

            $(this).css({
        visibility: "visible",
                height: newHeight + "px",
                width: newWidth + "px",
                marginLeft: leftMargin + "px",
                marginTop: topMargin + "px",
                display: "block"
            });
        });
    }
})(jQuery);



/*!
/* Scale, rotate animate css using js
 *
 * Monkey patch jQuery 1.3.1+ to add support for setting or animating CSS
 * scale and rotation independently.
 * https://github.com/zachstronaut/jquery-animate-css-rotate-scale
 * Released under dual MIT/GPL license just like jQuery.
 * 2009-2012 Zachary Johnson www.zachstronaut.com
 */
(function ($) {
    // Updated 2010.11.06
    // Updated 2012.10.13 - Firefox 16 transform style returns a matrix rather than a string of transform functions.  This broke the features of this jQuery patch in Firefox 16.  It should be possible to parse the matrix for both scale and rotate (especially when scale is the same for both the X and Y axis), however the matrix does have disadvantages such as using its own units and also 45deg being indistinguishable from 45+360deg.  To get around these issues, this patch tracks internally the scale, rotation, and rotation units for any elements that are .scale()'ed, .rotate()'ed, or animated.  The major consequences of this are that 1. the scaled/rotated element will blow away any other transform rules applied to the same element (such as skew or translate), and 2. the scaled/rotated element is unaware of any preset scale or rotation initally set by page CSS rules.  You will have to explicitly set the starting scale/rotation value.

    function initData($el) {
        var _ARS_data = $el.data('_ARS_data');
        if (!_ARS_data) {
            _ARS_data = {
                rotateUnits: 'deg',
                scale: 1,
                rotate: 0
            };

            $el.data('_ARS_data', _ARS_data);
        }

        return _ARS_data;
    }

    function setTransform($el, data) {
        $el.css('transform', 'rotate(' + data.rotate + data.rotateUnits + ') scale(' + data.scale + ',' + data.scale + ')');
        $el.css('-webkit-transform', 'rotate(' + data.rotate + data.rotateUnits + ') scale(' + data.scale + ',' + data.scale + ')');
    $el.css('-moz-transform', 'rotate(' + data.rotate + data.rotateUnits + ') scale(' + data.scale + ',' + data.scale + ')');
    }

    $.fn.rotate = function (val) {
        var $self = $(this), m, data = initData($self);

        if (typeof val == 'undefined') {
            return data.rotate + data.rotateUnits;
        }

        m = val.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/);
        if (m) {
            if (m[3]) {
                data.rotateUnits = m[3];
            }

            data.rotate = m[1];

            setTransform($self, data);
        }

        return this;
    };

    // Note that scale is unitless.
    $.fn.scale = function (val) {
        var $self = $(this), data = initData($self);

        if (typeof val == 'undefined') {
            return data.scale;
        }

        data.scale = val;

        setTransform($self, data);

        return this;
    };

    // fx.cur() must be monkey patched because otherwise it would always
    // return 0 for current rotate and scale values
    var curProxied = $.fx.prototype.cur;
    $.fx.prototype.cur = function () {
        if (this.prop == 'rotate') {
            return parseFloat($(this.elem).rotate());

        } else if (this.prop == 'scale') {
            return parseFloat($(this.elem).scale());
        }

        return curProxied.apply(this, arguments);
    };

    $.fx.step.rotate = function (fx) {
        var data = initData($(fx.elem));
        $(fx.elem).rotate(fx.now + data.rotateUnits);
    };

    $.fx.step.scale = function (fx) {
        $(fx.elem).scale(fx.now);
    };

    /*

    Starting on line 3905 of jquery-1.3.2.js we have this code:

    // We need to compute starting value
    if ( unit != "px" ) {
        self.style[ name ] = (end || 1) + unit;
        start = ((end || 1) / e.cur(true)) * start;
        self.style[ name ] = start + unit;
    }

    This creates a problem where we cannot give units to our custom animation
    because if we do then this code will execute and because self.style[name]
    does not exist where name is our custom animation's name then e.cur(true)
    will likely return zero and create a divide by zero bug which will set
    start to NaN.

    The following monkey patch for animate() gets around this by storing the
    units used in the rotation definition and then stripping the units off.

    */

    var animateProxied = $.fn.animate;
    $.fn.animate = function (prop) {
        if (typeof prop['rotate'] != 'undefined') {
            var $self, data, m = prop['rotate'].toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);
            if (m && m[5]) {
                $self = $(this);
                data = initData($self);
                data.rotateUnits = m[5];
            }

            prop['rotate'] = m[1];
        }

        return animateProxied.apply(this, arguments);
    };
})(jQuery);





/*
 * ColorBox v1.3.20.1 - jQuery lightbox plugin
 * (c) 2012 Jack Moore - jacklmoore.com
 * License: http://www.opensource.org/licenses/mit-license.php
 * http://www.jacklmoore.com/colorbox

  $('.popup').colorbox();

 */
(function(e,t,n){function G(n,r,i){var o=t.createElement(n);return r&&(o.id=s+r),i&&(o.style.cssText=i),e(o)}function Y(e){var t=T.length,n=(U+e)%t;return n<0?t+n:n}function Z(e,t){return Math.round((/%/.test(e)?(t==="x"?tt():nt())/100:1)*parseInt(e,10))}function et(e){return B.photo||/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(e)}function tt(){return n.innerWidth||N.width()}function nt(){return n.innerHeight||N.height()}function rt(){var t,n=e.data(R,i);n==null?(B=e.extend({},r),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=e.extend({},n);for(t in B)e.isFunction(B[t])&&t.slice(0,2)!=="on"&&(B[t]=B[t].call(R));B.rel=B.rel||R.rel||"nofollow",B.href=B.href||e(R).attr("href"),B.title=B.title||R.title,typeof B.href=="string"&&(B.href=e.trim(B.href))}function it(t,n){e.event.trigger(t),n&&n.call(R)}function st(){var e,t=s+"Slideshow_",n="click."+s,r,i,o;B.slideshow&&T[1]?(r=function(){M.text(B.slideshowStop).unbind(n).bind(f,function(){if(B.loop||T[U+1])e=setTimeout(J.next,B.slideshowSpeed)}).bind(a,function(){clearTimeout(e)}).one(n+" "+l,i),g.removeClass(t+"off").addClass(t+"on"),e=setTimeout(J.next,B.slideshowSpeed)},i=function(){clearTimeout(e),M.text(B.slideshowStart).unbind([f,a,l,n].join(" ")).one(n,function(){J.next(),r()}),g.removeClass(t+"on").addClass(t+"off")},B.slideshowAuto?r():i()):g.removeClass(t+"off "+t+"on")}function ot(t){V||(R=t,rt(),T=e(R),U=0,B.rel!=="nofollow"&&(T=e("."+o).filter(function(){var t=e.data(this,i),n;return t&&(n=t.rel||this.rel),n===B.rel}),U=T.index(R),U===-1&&(T=T.add(R),U=T.length-1)),W||(W=X=!0,g.show(),B.returnFocus&&e(R).blur().one(c,function(){e(this).focus()}),m.css({opacity:+B.opacity,cursor:B.overlayClose?"pointer":"auto"}).show(),B.w=Z(B.initialWidth,"x"),B.h=Z(B.initialHeight,"y"),J.position(),d&&N.bind("resize."+v+" scroll."+v,function(){m.css({width:tt(),height:nt(),top:N.scrollTop(),left:N.scrollLeft()})}).trigger("resize."+v),it(u,B.onOpen),H.add(A).hide(),P.html(B.close).show()),J.load(!0))}function ut(){!g&&t.body&&(Q=!1,N=e(n),g=G(K).attr({id:i,"class":p?s+(d?"IE6":"IE"):""}).hide(),m=G(K,"Overlay",d?"position:absolute":"").hide(),L=G(K,"LoadingOverlay").add(G(K,"LoadingGraphic")),y=G(K,"Wrapper"),b=G(K,"Content").append(C=G(K,"LoadedContent","width:0; height:0; overflow:hidden"),A=G(K,"Title"),O=G(K,"Current"),_=G(K,"Next"),D=G(K,"Previous"),M=G(K,"Slideshow").bind(u,st),P=G(K,"Close")),y.append(G(K).append(G(K,"TopLeft"),w=G(K,"TopCenter"),G(K,"TopRight")),G(K,!1,"clear:left").append(E=G(K,"MiddleLeft"),b,S=G(K,"MiddleRight")),G(K,!1,"clear:left").append(G(K,"BottomLeft"),x=G(K,"BottomCenter"),G(K,"BottomRight"))).find("div div").css({"float":"left"}),k=G(K,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),H=_.add(D).add(O).add(M),e(t.body).append(m,g.append(y,k)))}function at(){return g?(Q||(Q=!0,j=w.height()+x.height()+b.outerHeight(!0)-b.height(),F=E.width()+S.width()+b.outerWidth(!0)-b.width(),I=C.outerHeight(!0),q=C.outerWidth(!0),g.css({"padding-bottom":j,"padding-right":F}),_.click(function(){J.next()}),D.click(function(){J.prev()}),P.click(function(){J.close()}),m.click(function(){B.overlayClose&&J.close()}),e(t).bind("keydown."+s,function(e){var t=e.keyCode;W&&B.escKey&&t===27&&(e.preventDefault(),J.close()),W&&B.arrowKey&&T[1]&&(t===37?(e.preventDefault(),D.click()):t===39&&(e.preventDefault(),_.click()))}),e("."+o,t).live("click",function(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),ot(this))})),!0):!1}var r={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},i="colorbox",s="cbox",o=s+"Element",u=s+"_open",a=s+"_load",f=s+"_complete",l=s+"_cleanup",c=s+"_closed",h=s+"_purge",p=!e.support.opacity&&!e.support.style,d=p&&!n.XMLHttpRequest,v=s+"_IE6",m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K="div",Q;if(e.colorbox)return;e(ut),J=e.fn[i]=e[i]=function(t,n){var s=this;t=t||{},ut();if(at()){if(!s[0]){if(s.selector)return s;s=e("<a/>"),t.open=!0}n&&(t.onComplete=n),s.each(function(){e.data(this,i,e.extend({},e.data(this,i)||r,t))}).addClass(o),(e.isFunction(t.open)&&t.open.call(s)||t.open)&&ot(s[0])}return s},J.position=function(e,t){function f(e){w[0].style.width=x[0].style.width=b[0].style.width=e.style.width,b[0].style.height=E[0].style.height=S[0].style.height=e.style.height}var n,r=0,i=0,o=g.offset(),u,a;N.unbind("resize."+s),g.css({top:-9e4,left:-9e4}),u=N.scrollTop(),a=N.scrollLeft(),B.fixed&&!d?(o.top-=u,o.left-=a,g.css({position:"fixed"})):(r=u,i=a,g.css({position:"absolute"})),B.right!==!1?i+=Math.max(tt()-B.w-q-F-Z(B.right,"x"),0):B.left!==!1?i+=Z(B.left,"x"):i+=Math.round(Math.max(tt()-B.w-q-F,0)/2),B.bottom!==!1?r+=Math.max(nt()-B.h-I-j-Z(B.bottom,"y"),0):B.top!==!1?r+=Z(B.top,"y"):r+=Math.round(Math.max(nt()-B.h-I-j,0)/2),g.css({top:o.top,left:o.left}),e=g.width()===B.w+q&&g.height()===B.h+I?0:e||0,y[0].style.width=y[0].style.height="9999px",n={width:B.w+q,height:B.h+I,top:r,left:i},e===0&&g.css(n),g.dequeue().animate(n,{duration:e,complete:function(){f(this),X=!1,y[0].style.width=B.w+q+F+"px",y[0].style.height=B.h+I+j+"px",B.reposition&&setTimeout(function(){N.bind("resize."+s,J.position)},1),t&&t()},step:function(){f(this)}})},J.resize=function(e){W&&(e=e||{},e.width&&(B.w=Z(e.width,"x")-q-F),e.innerWidth&&(B.w=Z(e.innerWidth,"x")),C.css({width:B.w}),e.height&&(B.h=Z(e.height,"y")-I-j),e.innerHeight&&(B.h=Z(e.innerHeight,"y")),!e.innerHeight&&!e.height&&(C.css({height:"auto"}),B.h=C.height()),C.css({height:B.h}),J.position(B.transition==="none"?0:B.speed))},J.prep=function(t){function o(){return B.w=B.w||C.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function u(){return B.h=B.h||C.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(!W)return;var n,r=B.transition==="none"?0:B.speed;C.remove(),C=G(K,"LoadedContent").append(t),C.hide().appendTo(k.show()).css({width:o(),overflow:B.scrolling?"auto":"hidden"}).css({height:u()}).prependTo(b),k.hide(),e(z).css({"float":"none"}),d&&e("select").not(g.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(l,function(){this.style.visibility="inherit"}),n=function(){function y(){p&&g[0].style.removeAttribute("filter")}var t,n,o=T.length,u,a="frameBorder",l="allowTransparency",c,d,v,m;if(!W)return;c=function(){clearTimeout($),L.detach().hide(),it(f,B.onComplete)},p&&z&&C.fadeIn(100),A.html(B.title).add(C).show();if(o>1){typeof B.current=="string"&&O.html(B.current.replace("{current}",U+1).replace("{total}",o)).show(),_[B.loop||U<o-1?"show":"hide"]().html(B.next),D[B.loop||U?"show":"hide"]().html(B.previous),B.slideshow&&M.show();if(B.preloading){t=[Y(-1),Y(1)];while(n=T[t.pop()])m=e.data(n,i),m&&m.href?(d=m.href,e.isFunction(d)&&(d=d.call(n))):d=n.href,et(d)&&(v=new Image,v.src=d)}}else H.hide();B.iframe?(u=G("iframe")[0],a in u&&(u[a]=0),l in u&&(u[l]="true"),u.name=s+ +(new Date),B.fastIframe?c():e(u).one("load",c),u.src=B.href,B.scrolling||(u.scrolling="no"),e(u).addClass(s+"Iframe").appendTo(C).one(h,function(){u.src="//about:blank"})):c(),B.transition==="fade"?g.fadeTo(r,1,y):y()},B.transition==="fade"?g.fadeTo(r,0,function(){J.position(0,n)}):J.position(r,n)},J.load=function(t){var n,r,i=J.prep;X=!0,z=!1,R=T[U],t||rt(),it(h),it(a,B.onLoad),B.h=B.height?Z(B.height,"y")-I-j:B.innerHeight&&Z(B.innerHeight,"y"),B.w=B.width?Z(B.width,"x")-q-F:B.innerWidth&&Z(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=Z(B.maxWidth,"x")-q-F,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=Z(B.maxHeight,"y")-I-j,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,$=setTimeout(function(){L.show().appendTo(b)},100),B.inline?(G(K).hide().insertBefore(e(n)[0]).one(h,function(){e(this).replaceWith(C.children())}),i(e(n))):B.iframe?i(" "):B.html?i(B.html):et(n)?(e(z=new Image).addClass(s+"Photo").error(function(){B.title=!1,i(G(K,"Error").html(B.imgError))}).load(function(){var e;z.onload=null,B.scalePhotos&&(r=function(){z.height-=z.height*e,z.width-=z.width*e},B.mw&&z.width>B.mw&&(e=(z.width-B.mw)/z.width,r()),B.mh&&z.height>B.mh&&(e=(z.height-B.mh)/z.height,r())),B.h&&(z.style.marginTop=Math.max(B.h-z.height,0)/2+"px"),T[1]&&(B.loop||T[U+1])&&(z.style.cursor="pointer",z.onclick=function(){J.next()}),p&&(z.style.msInterpolationMode="bicubic"),setTimeout(function(){i(z)},1)}),setTimeout(function(){z.src=n},1)):n&&k.load(n,B.data,function(t,n,r){i(n==="error"?G(K,"Error").html(B.xhrError):e(this).contents())})},J.next=function(){!X&&T[1]&&(B.loop||T[U+1])&&(U=Y(1),J.load())},J.prev=function(){!X&&T[1]&&(B.loop||U)&&(U=Y(-1),J.load())},J.close=function(){W&&!V&&(V=!0,W=!1,it(l,B.onCleanup),N.unbind("."+s+" ."+v),m.fadeTo(200,0),g.stop().fadeTo(300,0,function(){g.add(m).css({opacity:1,cursor:"auto"}).hide(),it(h),C.remove(),setTimeout(function(){V=!1,it(c,B.onClosed)},1)}))},J.remove=function(){e([]).add(g).add(m).remove(),g=null,e("."+o).removeData(i).removeClass(o).die()},J.element=function(){return e(R)},J.settings=r})(jQuery,document,this);












/*
 * Tiny Scrollbar 1.81
 * http://www.baijs.nl/tinyscrollbar/
 *
  axis: 'x' -- Vertical or horizontal scroller? 'x' or 'y'.
  wheel: 40 -- How many pixels must the mouswheel scrolls at a time.
  scroll: true -- Enable or disable the mousewheel.
  lockscroll: true -- Return scrollwheel event to browser if there is no more content.
  size: 'auto' -- Set the size of the scrollbar to auto or a fixed number.
  sizethumb: 'auto' -- Set the size of the thumb to auto or a fixed number.
  invertscroll: false -- Enable mobile invert style scrolling.

 *

  var g-scroll = $('.scroll').tinyscrollbar();

  $('.scroll-anchor').click(function(){
    g-scroll.tinyscrollbar_update(50);
    return false;
  });
 *
 */
 (function (a) {
    a.tiny = a.tiny || {};
    a.tiny.scrollbar = {
        options: {
            axis: "y",
            wheel: 40,
            scroll: true,
            lockscroll: true,
            size: "auto",
            sizethumb: "auto",
            invertscroll: false
        }
    };
    a.fn.tinyscrollbar = function (d) {
        var c = a.extend({}, a.tiny.scrollbar.options, d);
        this.each(function () {
            a(this).data("tsb", new b(a(this), c))
        });
        return this
    };
    a.fn.tinyscrollbar_update = function (c) {
        return a(this).data("tsb").update(c)
    };

    function b(q, g) {
    q.each(function(){
      $(this).removeClass('scroll').addClass('scrolled').wrapInner('<div class="g-viewport"><div class="g-overview"></div></div>').prepend('<div class="g-scrollbar"><div class="g-track"><div class="g-thumb"><div class="g-end"></div></div></div></div>');
    });

        var k = this,
            t = q,
            j = {
                obj: a(".g-viewport", q)
            }, h = {
                obj: a(".g-overview", q)
            }, d = {
                obj: a(".g-scrollbar", q)
            }, m = {
                obj: a(".g-track", d.obj)
            }, p = {
                obj: a(".g-thumb", d.obj)
            }, l = g.axis === "x",
            n = l ? "left" : "top",
            v = l ? "Width" : "Height",
            r = 0,
            y = {
                start: 0,
                now: 0
            }, o = {}, e = "ontouchstart" in document.documentElement;

        function c() {
            k.update();
            s();
            return k
        }
        this.update = function (z) {
            j[g.axis] = j.obj[0]["offset" + v];
            h[g.axis] = h.obj[0]["scroll" + v];
            h.ratio = j[g.axis] / h[g.axis];
            d.obj.toggleClass("g-disable", h.ratio >= 1);
            m[g.axis] = g.size === "auto" ? j[g.axis] : g.size;
            p[g.axis] = Math.min(m[g.axis], Math.max(0, (g.sizethumb === "auto" ? (m[g.axis] * h.ratio) : g.sizethumb)));
            d.ratio = g.sizethumb === "auto" ? (h[g.axis] / m[g.axis]) : (h[g.axis] - j[g.axis]) / (m[g.axis] - p[g.axis]);
            r = (z === "relative" && h.ratio <= 1) ? Math.min((h[g.axis] - j[g.axis]), Math.max(0, r)) : 0;
            r = (z === "bottom" && h.ratio <= 1) ? (h[g.axis] - j[g.axis]) : isNaN(parseInt(z, 10)) ? r : parseInt(z, 10);
            w()
        };

        function w() {
            var z = v.toLowerCase();
            p.obj.css(n, r / d.ratio);
      h.obj.css(n, - r);
            o.start = p.obj.offset()[n];
            d.obj.css(z, m[g.axis]);
            m.obj.css(z, m[g.axis]);
            p.obj.css(z, p[g.axis])
        }
        function s() {
            if (!e) {
                p.obj.bind("mousedown", i);
                m.obj.bind("mouseup", u)
            } else {
                j.obj[0].ontouchstart = function (z) {
                    if (1 === z.touches.length) {
                        i(z.touches[0]);
                        z.stopPropagation()
                    }
                }
            }
            if (g.scroll && window.addEventListener) {
                t[0].addEventListener("DOMMouseScroll", x, false);
                t[0].addEventListener("mousewheel", x, false)
            } else {
                if (g.scroll) {
                    t[0].onmousewheel = x
                }
            }
        }
        function i(A) {
            a("body").addClass("g-noSelect");
            var z = parseInt(p.obj.css(n), 10);
            o.start = l ? A.pageX : A.pageY;
            y.start = z == "auto" ? 0 : z;
            if (!e) {
                a(document).bind("mousemove", u);
                a(document).bind("mouseup", f);
                p.obj.bind("mouseup", f)
            } else {
                document.ontouchmove = function (B) {
                    B.preventDefault();
                    u(B.touches[0])
                };
                document.ontouchend = f
            }
        }
        function x(B) {
            if (h.ratio < 1) {
                var A = B || window.event,
                    z = A.wheelDelta ? A.wheelDelta / 120 : -A.detail / 3;
                r -= z * g.wheel;
                r = Math.min((h[g.axis] - j[g.axis]), Math.max(0, r));
                p.obj.css(n, r / d.ratio);

        //h.obj.css(n, - r);
        h.obj.stop().animate({top: -r}, 750, 'easeOutQuart');

                if (g.lockscroll || (r !== (h[g.axis] - j[g.axis]) && r !== 0)) {
                    A = a.event.fix(A);
                    A.preventDefault()
                }
            }
        }
        function u(z) {
            if (h.ratio < 1) {
                if (g.invertscroll && e) {
                    y.now = Math.min((m[g.axis] - p[g.axis]), Math.max(0, (y.start + (o.start - (l ? z.pageX : z.pageY)))))
                } else {
                    y.now = Math.min((m[g.axis] - p[g.axis]), Math.max(0, (y.start + ((l ? z.pageX : z.pageY) - o.start))))
                }
                r = y.now * d.ratio;

        h.obj.css(n, - r);
        //h.obj.stop().animate({top: -r}, 750, 'easeOutQuart');

                p.obj.css(n, y.now)
            }
        }
        function f() {
            a("body").removeClass("g-noSelect");
            a(document).unbind("mousemove", u);
            a(document).unbind("mouseup", f);
            p.obj.unbind("mouseup", f);
            document.ontouchmove = document.ontouchend = null
        }
        return c()
    }
}(jQuery));















/*
 *
 *
 jAlert version 4.5.1
 Made with love by Versatility Werks (http://flwebsites.biz)
 MIT Licensed
 *
 *
 */
;(function($) {

  if(!Date.now)
    Date.now = function(){
      return +new Date();
    };

  $.fn.jAlert = function(options) {

        //remove focus from current element so you can't just hit enter a bunch to popup the same alert over and over again
        $('body').focus();
        $('body').blur();

    var themes = ['default', 'green', 'dark_green', 'red', 'dark_red', 'black', 'brown', 'gray', 'dark_gray', 'blue', 'dark_blue', 'yellow'],
            sizes = ['xsm', 'sm', 'md', 'lg', 'xlg', 'full', 'auto'],
            sizeAliases = {'xsmall': 'xsm', 'small':'sm','medium':'md','large':'lg','xlarge':'xlg'},
            backgroundColors = ['white', 'black'],
            styles = [], //array of styles that gets joined together with a space between in a style tag on the jalert div
            classes = ['animated'], //array of classes that get joined together with a space between on the jalert div
            backgroundClasses = []; //array of classes that get joined together with a space between on the jalert background div

    /* Block Multiple Instances by running jAlert for each one */
    if (this.length > 1){
      this.each(function() {
        $.fn.jAlert(options);
      });
      return this;
    }

        /* If this is an existing jAlert, return it so you can access public methods and properties */
        if( typeof $(this)[0] != 'undefined' )
        {
            if( $(this)[0]['jAlert'] != 'undefined' )
            {
                return $(this)[0]['jAlert'];
            }
        }

        /**
         * Use the defaults object to find any accidentally lowercased keys from the options object and convert them.
         */
        $.each($.fn.jAlert.defaults, function(key, val){
           var lowerKey = key.toLowerCase();
           if( typeof options[lowerKey] !== 'undefined' )
           {
               options[key] = options[lowerKey];
           }
        });

    /* Combine user options with default */
    options = $.extend({}, $.fn.jAlert.defaults, options);

    /* If they didn't set an id, just create a random one */
    if( !options.id )
    {
      var unique = Date.now().toString() + Math.floor(Math.random() * 100000);
      var alert_id = 'ja_' + unique;
    }
    else
    {
      var alert_id = options.id;
    }

        /**
         * This is the alert object with the public properties/methods you can call
         * @type {{set: alert.set, __set: alert.__set, get: alert.get, __get: alert.__get, centerAlert: alert.centerAlert, animateAlert: alert.animateAlert, closeAlert: alert.closeAlert, showAlert: alert.showAlert}}
         */
        var alert = {
            set: function(key, val)
            {
                alert[key] = val;
                return alert;
            },
            __set: function(key, val)
            {
                return alert.set(key, val);
            },
            get: function(key)
            {
                return alert[key];
            },
            __get: function(key)
            {
                return alert.get(key);
            },
            centerAlert: function()
            {
                var viewportHeight = $(window).height(),
                    alertHeight = alert.instance.height(),
                    diff = viewportHeight - alertHeight;

                var margin = diff / 2;

                margin = margin > 200 ? margin - 100 : margin;
                margin = margin <= 0 ? 0 : margin;
                margin = margin - 1; //make up for border if any - just brings it up a bit anyway.

                alert.instance.css('margin-top', margin+'px');
                alert.instance.css('margin-bottom', '0px');

                $('body').css('overflow', 'hidden');

                if( diff > 5 )
                {
                    alert.instance.parents('.ja_wrap').css('position', 'fixed');
                }
                else
                {
                    alert.instance.parents('.ja_wrap').css('position', 'absolute');

                    /* Scroll to alert */
                    $('html, body').animate({
                        scrollTop: top - 50
                    }, 200);
                }

                return alert;
            },
            animateAlert: function(which){
                if( which == 'hide' )
                {
                    if( alert.instance.jAlert().blurBackground )
                    {
                        $('body').removeClass('ja_blur');
                    }

                    alert.instance.removeClass(alert.showAnimation).addClass(alert.hideAnimation);
                }
                else
                {
                    if( alert.instance.jAlert().blurBackground )
                    {
                        $('body').addClass('ja_blur');
                    }

                    alert.centerAlert();
                    alert.instance.addClass(alert.showAnimation).removeClass(alert.hideAnimation).show();
                }

                return alert;
            },
            /* Hides an alert and optionally removes it */
            closeAlert: function(remove, onClose)
            {
                if( remove != false )
                {
                    remove = true;
                }

                if(alert.instance)
                {
                    alert.instance.unbind('DOMSubtreeModified');

                    alert.animateAlert('hide');

                    window.setTimeout(function()
                    {
                        var alertWrap = alert.instance.parents('.ja_wrap');

                        if( remove )
                        {
                            alertWrap.remove();
                        }
                        else
                        {
                            alertWrap.hide();
                        }

                        if(typeof onClose == 'function')
                        {
                            onClose(alert.instance);
                        }
                        else if(typeof alert.onClose == 'function')
                        {
                            alert.onClose(alert.instance);
                        }

                        if( $('.jAlert:visible').length > 0 )
                        {
                            $('.jAlert:visible:last').jAlert().centerAlert();
                        }
                        else
                        {
                            $('body').css('overflow', 'auto');
                        }

                    }, alert.animationTimeout);
                }

                return alert;
            },
            /* Shows an alert that already exists */
            showAlert: function(replaceOthers, removeOthers, onOpen, onClose){

                if( replaceOthers != false )
                {
                    replaceOthers = true;
                }

                if( removeOthers !== false )
                {
                    removeOthers = true;
                }

                if( replaceOthers )
                {
                    $('.jAlert:visible').jAlert().closeAlert(removeOthers);
                }

                /* Put this one above the last one by moving to end of dom */
                var wrap = alert.instance.parents('.ja_wrap');

                $('body').append(wrap);

                alert.animateAlert('show');

                if( typeof onClose == 'function' )
                {
                    alert.onClose = onClose;
                }

                window.setTimeout(function(){

                    if(typeof onOpen == 'function')
                    {
                        onOpen(alert.instance);
                    }

                }, alert.animationTimeout);

                return alert;
            }
        };

        /**
         * Add all options to the alert object as properties
         */
        $.each(options, function(key, val){
           alert.set(key, val);
        });

        /**
         * Add this instance's unique ID to the alert object
         */
        alert.set('id', alert_id);

        /**
         * If content is a selector (id only) and the element exists, grab it's content
         */
        if( alert.content && alert.content.indexOf('#') === 0 )
        {
            if( $(alert.content).length > 0 )
            {
                alert.content = $(alert.content).html();
            }
        }

        /**
         * Automatically convert a youtube video's URL to the embed version
         */
        if( alert.video && alert.video.indexOf('youtube.com/watch?v=') > -1 && alert.video.indexOf('embed') === -1 )
        {
            alert.video = alert.video.replace('watch?v=', 'embed/');
        }

        /**
         * If this is a confirm popup, set the buttons, content, etc
         */
    if( alert.type == 'confirm' )
    {
      if( !alert.content )
      {
                alert.content = alert.confirmQuestion;
      }

      alert.btns = [
        { 'text': alert.confirmBtnText, 'theme': 'green', 'class': 'confirmBtn', 'closeAlert': true, 'onClick': alert.onConfirm },
        { 'text': alert.denyBtnText, 'theme': 'red', 'class': 'denyBtn', 'closeAlert': true, 'onClick': alert.onDeny }
      ];

      alert.autofocus = alert.confirmAutofocus;
    }

        /* If used the alias color, swap to theme */
        if( alert.color )
        {
            alert.theme = alert.color;
        }

        /**
         * Make sure theme is a real class
         */
    if( $.inArray(alert.theme, themes) == -1 )
    {
      console.log('jAlert Config Error: Invalid theme selection.');
      return false;
    }

        /**
         * Push the theme to the classes array
         */
    classes.push('ja_'+alert.theme);

    /* If they set custom classes */
    if( alert['class'] )
    {
      classes.push(alert['class']);
    }
    if( alert.classes )
    {
      classes.push(alert.classes);
    }

    //if fullscreen, add class
    if( alert.fullscreen )
        {
            classes.push('ja_fullscreen');
        }

        //if no padding on the content
    if( alert.noPadContent )
        {
            classes.push('ja_no_pad');
        }

    /* If no title, add class */
    if( !alert.title )
    {
      classes.push( 'ja_noTitle' );
    }

        /* If used the alias width, swap to size */
        if( alert.width )
        {
            alert.size = alert.width;
        }

    /* if it's set and it's not in the array of sizes OR it's an object and it's missing width/height */
    if( alert.size && ((typeof alert.size == 'object' && (typeof alert.size.width == 'undefined' || typeof alert.size.height == 'undefined'))) ) {
            console.log('jAlert Config Error: Invalid size selection (try a preset or make sure you\'re including height and width in your size object).');
            return false;
        }
    /* If it's not set, set to md */
    else if( !alert.size )
    {
      classes.push('ja_sm');
    }
    /* If it's set and it's an object */
    else if( typeof alert.size == 'object' )
    {
      styles.push('width: '+alert.size.width+';');
      styles.push('height: '+alert.size.height+';');
            classes.push('ja_setheight');
    }
    /* If it's set and it's not an object */
    else
    {
            //swap alias for actual size class
            if( typeof sizeAliases[alert.size] !== 'undefined' )
            {
                alert.size = sizeAliases[alert.size];
            }

            //if it's one of the sizes, set the class
            if( $.inArray(alert.size, sizes) > -1 )
            {
                classes.push('ja_'+alert.size);
            }
            //otherwise, we assume they provided a px or % width
            else
            {
                styles.push('width: '+alert.size+';');
            }
    }

    /* Add background color class */
    if( $.inArray(alert.backgroundColor, backgroundColors) == -1 )
    {
      console.log('jAlert Config Error: Invalid background color selection.');
      return false;
    }

    backgroundClasses.push('ja_wrap_'+alert.backgroundColor);

    alert.onOpen = [ alert.onOpen ];

    var onload = "onload='$.fn.jAlert.mediaLoaded($(this))'",
        loader = "<div class='ja_loader'>Loading...</div>";

        /**
         * Picture is now an alias for image
         */
        if( alert.picture )
        {
            alert.image = alert.picture;
        }

        /* Creates content */
    if( alert.image )
    {
      alert.content = "<div class='ja_media_wrap'>"+
          loader+
          "<img src='"+alert.image+"' class='ja_img' "+onload+"'";
      if( alert.imageWidth )
      {
        alert.content += " style='width: "+alert.imageWidth+"'";
      }
      alert.content += ">"+
          "</div>";
    }
    else if( alert.video )
    {
      alert.content = "<div class='ja_media_wrap'>"+
          loader+
          "<div class='ja_video'>"+
          "</div>"+
          "</div>";

      /* Add to the onOpen callbacks array to append the iframe and attach the onload callback in a crossbrowser compatible way (IE is a bizitch). */
      alert.onOpen.unshift( function(elem){
        var iframe = document.createElement("iframe");
        iframe.src = elem.jAlert().video;

        if(iframe.addEventListener)
        {
          iframe.addEventListener('load', function(){
            $.fn.jAlert.mediaLoaded($(this));
          }, true)
        }
        else if (iframe.attachEvent){
          iframe.attachEvent("onload", function(){
            $.fn.jAlert.mediaLoaded($(this));
          });
        } else {
          iframe.onload = function(){
            $.fn.jAlert.mediaLoaded($(this));
          };
        }

                elem.find('.ja_video').append(iframe);
      });

    }
    else if( alert.iframe )
    {
      if( !alert.iframeHeight )
      {
        alert.iframeHeight = $(window).height() +'px';
      }

      alert.content = "<div class='ja_media_wrap'>"+
          loader+
          "</div>";

      /* Add to the onOpen callbacks array to append the iframe and attach the onload callback in a crossbrowser compatible way (IE is a bizitch). */
      alert.onOpen.unshift( function(elem){
        var iframe = document.createElement("iframe");
        iframe.src = elem.jAlert().iframe;
        iframe.className = 'ja_iframe';

        if(iframe.addEventListener)
        {
          iframe.addEventListener('load', function(){
            $.fn.jAlert.mediaLoaded($(this));
          }, true)
        }
        else if (iframe.attachEvent){
          iframe.attachEvent("onload", function(){
            $.fn.jAlert.mediaLoaded($(this));
          });
        } else {
          iframe.onload = function(){
            $.fn.jAlert.mediaLoaded($(this));
          };
        }

                elem.find('.ja_media_wrap').append(iframe);
      });
    }
    else if( alert.ajax )
    {
      alert.content = "<div class='ja_media_wrap'>"+
          loader+
          "</div>";

      /* Store as another var */
      onAjaxCallbacks = alert.onOpen;

      /* Overwrite the onOpen to be the ajax call */
      alert.onOpen = [function(elem){
        $.ajax(elem.jAlert().ajax, {
          async: true,
          complete: function(jqXHR, textStatus)
          {
                        elem.find('.ja_media_wrap').replaceWith(jqXHR.responseText);

            /* Run onOpen callbacks here */
            $.each(onAjaxCallbacks, function(index, onAjax){
              onAjax(elem);
            });
          },
          error: function(jqXHR, textStatus, errorThrown)
          {
            alert.onAjaxFail(elem, 'Error getting content: Code: '+jqXHR.status+ ' : Msg: '+jqXHR.statusText);
          }
        });
      }];
    }

    var getBtnHTML = function(btn){

      if(typeof btn.href == 'undefined'){ btn.href = ''; }
      if(typeof btn['class'] == 'undefined'){ btn['class'] = ''; }
      if(typeof btn.theme == 'undefined'){ btn['class'] += ' ja_btn_default'; }else{ btn['class'] += ' ja_btn_'+btn.theme; }
      if(typeof btn.text == 'undefined'){ btn.text = ''; }
      if(typeof btn.id == 'undefined'){ var unique = Date.now().toString() + Math.floor(Math.random() * 100000); btn.id = 'ja_btn_' + unique; }
      if(typeof btn.target == 'undefined'){ btn.target = '_self'; }
      if(typeof btn.closeAlert == 'undefined'){ btn.closeAlert = true; }

      $('body').off('click', '#'+btn.id); //remove handler before adding it to remove dupe handlers

      /* Attach on click handler */
      $('body').on('click', '#'+btn.id, function(e){

        var button = $(this);

        if( btn.closeAlert )
        {
          button.parents('.jAlert').jAlert().closeAlert();
        }

        var callbackResponse = true;

        if( typeof btn.onClick == 'function' )
        {
          callbackResponse = btn.onClick(e, button);
        }

        if( !callbackResponse || btn.closeAlert )
        {
          e.preventDefault();
          return false;
        }

        return callbackResponse;

      });

      return "<a href='"+btn.href+"' id='"+btn.id+"' target='"+btn.target+"' class='ja_btn "+btn['class']+"'>"+btn.text+"</a> ";
    };

    /* Adds a new alert to the dom */
    var addAlert = function(content){

      var html = '';

      html += '<div class="ja_wrap '+backgroundClasses.join(' ')+'">'+
          '<div class="jAlert '+classes.join(' ')+ '" style="' +styles.join(' ')+ '" id="' +alert.id+ '">'+
          '<div>';

      if( alert.closeBtn )
      {
        html +=     "<div class='closejAlert ja_close";
        if( alert.closeBtnAlt )
        {
          html += ' ja_close_alt';
        }
                else if( alert.closeBtnRoundWhite )
                {
                    html += ' ja_close_round_white';
                }
                else if( alert.closeBtnRound )
                {
                    html += ' ja_close_round';
                }
        html += "'>&times;</div>"; //closejAlert has a close handler attached, ja_close is for styling
      }

      if( alert.title )
      {
        html +=     "<div class='ja_title'><div>"+alert.title+"</div></div>";
      }

      html +=       '<div class="ja_body">'+content;


      if( alert.btns )
      {
        html +=       '<div class="ja_btn_wrap ';

        if( alert.btnBackground )
        {
          html +=     'optBack';
        }

        html +=       '">';
      }

      if( typeof alert.btns[0] == 'object' )
      {
        $.each(alert.btns, function(index, btn){
          if( typeof btn == 'object' )
          {
            html +=     getBtnHTML(btn);
          }
        });
      }
      else if( typeof alert.btns == 'object' )
      {
        html +=         getBtnHTML(alert.btns);
      }
      else if( alert.btns )
      {
        console.log('jAlert Config Error: Incorrect value for btns (must be object or array of objects): '+alert.btns);
      }

      if( alert.btns )
      {
        html +=       '</div>';
      }

      html +=       '</div>'+
          '</div>'+
          '</div>'+
          '</div>';

      var alertHTML = $(html);

      if( alert.replaceOtherAlerts )
      {
                var alerts = $('.jAlert:visible');
                alerts.each(function(){
                    $(this).jAlert().closeAlert();
                });
      }

      $('body').append(alertHTML);

            //cache instance
      alert.instance = $('#'+alert.id);

            //attach alert object to dom element
            alert.instance[0]['jAlert'] = alert;

            //doing this now will prevent it from happening mid-animation
            $('body').css('overflow', 'hidden');

            //show the new alert
      alert.animateAlert('show');

            //add close button handler
      if( alert.closeBtn ){

        alert.instance.on('click', '.closejAlert', function(e){
          e.preventDefault();
          $(this).parents('.jAlert:first').jAlert().closeAlert();
          return false;
        });

      }

      /* Bind mouseup handler to document if this alert has closeOnClick enabled */
      if( alert.closeOnClick ){

        /* Unbind if already exists */
        $(document).off('mouseup touchstart', $.fn.jAlert.onMouseUp);

        /* Bind mouseup */
        $(document).on('mouseup touchstart', $.fn.jAlert.onMouseUp);

      }

      /* Bind on keydown handler to document and if esc was pressed, find all visible jAlerts with that close option enabled and close them */
      if( alert.closeOnEsc ){

        /* Unbind if already exists */
        $(document).off('keydown', $.fn.jAlert.onEscKeyDown);

        /* Bind keydown */
        $(document).on('keydown', $.fn.jAlert.onEscKeyDown);

      }

      /* If there are onOpen callbacks, run them. */
      if( alert.onOpen )
      {
        $.each(alert.onOpen, function(index, onOpen){
          onOpen(alert.instance);
        });
      }

      /* If the alert has an element that should be focused by default */
      if( alert.autofocus )
      {
        alert.instance.find(alert.autofocus).focus();
      }
      else
      {
        alert.instance.focus();
      }

      alert.instance.bind("DOMSubtreeModified", function(){
        alert.centerAlert();
      });

      return alert.instance;

    };

    /* Shows an alert based on content type */
    this.initialize = function(){

      if( !alert.content && !alert.image && !alert.video && !alert.iframe && !alert.ajax )
      {
        console.log('jAlert potential error: No content defined');
        return addAlert('');
      }
      else
      {
        if( !alert.content )
        {
          alert.content = '';
        }

        return addAlert(alert.content);
      }

    };

        //initialize
    this.initialize();

        //return the object so you can chain public methods/properties
    return alert;

    /* END OF PLUGIN */
  };

  /* Default alert */
  $.fn.jAlert.defaults = {
    'title': false, //title for the popup (false = don't show)
    'content': false, //html for the popup (replaced if you use image, ajax, or iframe)
        'noPadContent': false, //remove padding from the body
        'fullscreen': false, //make the jAlert completely fullscreen
    'image': false, //adds a centered img tag
    'imageWidth': 'auto', //defaults to max-width: 100%; width: auto;
    'video': false, //adds a responsive iframe video - value is the "src" of the iframe
    'ajax': false, //uses ajax call to get contents
    'onAjaxFail': function(alert, errorThrown){ //callback for when ajax fails
      alert.jAlert().closeAlert();
      errorAlert(errorThrown);
    },
    'iframe': false, //uses iframe as content
    'iframeHeight': false, //string. height of the iframe within the popup (false = 90% of viewport height)
    'class': '', //adds a class to the jAlert (add as many as you want space delimited)
    'classes': '', //add classes to the jAlert (space delimited)
    'id': false, //adds an ID to the jAlert
    'showAnimation': 'fadeInUp',
    'hideAnimation': 'fadeOutDown',
    'animationTimeout': 600, //approx duration of animation to wait until onClose
    'theme': 'default', // red, green, blue, black, default
    'backgroundColor': 'black', //white, black
        'blurBackground': false, //blurs background elements
    'size': false, //false = css default, xsm, sm, md, lg, xlg, full, { height: 200, width: 200 }
    'replaceOtherAlerts': false, //if there's already an open jAlert, remove it first
    'closeOnClick': false, //close the alert when you click anywhere
    'closeOnEsc': true, //close the alert when you click the escape key
    'closeBtn': true, //adds a button to the top right of the alert that allows you to close it
    'closeBtnAlt': false, //alternative close button
        'closeBtnRound': true, //alternative round close button
        'closeBtnRoundWhite': false, //alternative round close button (in white)
    'btns': false, //adds buttons to the popup at the bottom. Pass an object for a single button, or an object of objects for many
    /*
     Variety of buttons you could create (also, an example of how to pass the object

     'btns': [
     {'text':'Open in new window', 'closeAlert':false, 'href': 'http://google.com', 'target':'_new'},
     {'text':'Cool, close this alert', 'theme': 'blue', 'closeAlert':true},
     {'text':'Buy Now', 'closeAlert':true, 'theme': 'green', 'onClick': function(){ console.log('You bought it!'); } },
     {'text':'I do not want it', 'closeAlert': true, 'theme': 'red', 'onClick': function(){ console.log('Did not want it'); } },
     {'text':'DOA', 'closeAlert': true, 'theme': 'black', 'onClick': function(){ console.log('Dead on arrival'); } }
     ]
     */
    'btnBackground': true, //adds optional background to btns
    'autofocus': false, //pass a selector to autofocus on it

    'onOpen': function(alert){ //on open call back. Fires just after the alert has finished rendering
      return false;
    },
    'onClose': function(alert){ //fires when you close the alert
      return false;
    },

    'type': 'modal', //modal, confirm, tooltip

    /* The following only applies when type == 'confirm' */
    'confirmQuestion': 'Are you sure?',
    'confirmBtnText': 'Yes',
    'denyBtnText': 'No',
    'confirmAutofocus': '.confirmBtn', //confirmBtn or denyBtn
    'onConfirm': function(e, btn){
      e.preventDefault();
      console.log('confirmed');
      return false;
    },
    'onDeny': function(e, btn){
      e.preventDefault();
      //console.log('denied');
      return false;
    }
  };

  /** Mouseup on document */
  $.fn.jAlert.onMouseUp = function(e){
        //cross browser
        var target = e.target ? e.target : e.srcElement;

    /* Find top visible jAlert and see if it has closeOnClick enabled */
    var lastVisibleAlert = $('.jAlert:visible:last');

    if( lastVisibleAlert.length > 0 && lastVisibleAlert.jAlert().closeOnClick )
    {
      //close only if clicked outside
            if( !$(target).is('.jAlert *') )
            {
                lastVisibleAlert.jAlert().closeAlert();
            }
    }

  };

  /* Keydown on document (escape key) */
  $.fn.jAlert.onEscKeyDown = function(e){

    /* Escape = 27 */
    if(e.keyCode === 27){

      /* Find top visible jAlert and see if it has closeOnClick enabled */
      var lastVisibleAlert = $('.jAlert:visible:last');

      if( lastVisibleAlert.length > 0 && lastVisibleAlert.jAlert().closeOnEsc )
      {
        lastVisibleAlert.jAlert().closeAlert();
      }

    }

  };

    $.fn.attachjAlert = function(e){
        e.preventDefault();
        $.jAlert($(this).data());
        return false;
    };

  /* If you're not using the DOM (aka, you're not hiding or showing a specific alert, you can just use $.jAlert */
  $.jAlert = function(options){

        /**
         * If you pass "current" to $.jAlert('current'); it should return the top-most visible jAlert
         */
        if( options == 'current' )
        {
            var latest = $('.jAlert:visible:last');
            if( latest.length > 0 )
            {
                return latest.jAlert();
            }

            return false;
        }

        /**
         * Attaches the on-click handler to data-attributes
         */
        if( options == 'attach' )
        {
            /* If there are data attributes for showing jAlerts, add the click handler */
            $('[data-jAlert]').off('click', $.fn.attachjAlert);
            $('[data-jAlert]').on('click', $.fn.attachjAlert);
            $('[data-jalert]').off('click', $.fn.attachjAlert);
            $('[data-jalert]').on('click', $.fn.attachjAlert);

            return false;
        }

    return $.fn.jAlert(options);
  };

  /* Alert on click function - attach to existing dom */
  $.fn.alertOnClick = function(options)
  {
    $(this).on('click', function(e){
      e.preventDefault();
      $.jAlert(options);
      return false;
    });
  };

  /* Alert on click function - global, works for changing dom */
  $.alertOnClick = function(selector, options)
  {
    $('body').on('click', selector, function(e){
      e.preventDefault();
      $.jAlert(options);
      return false;
    });
  };

    $.fn.closeAlert = function(remove, onClose){
        $(this).jAlert().closeAlert(remove, onClose);
    };

  /* Slowed window resize function */
  var $jAlertResizeTimeout;
  $(window).resize(function () {
    window.clearTimeout($jAlertResizeTimeout);
    $jAlertResizeTimeout = window.setTimeout(function(){
      $('.jAlert:visible').each(function(){
        $(this).jAlert().centerAlert();
      });
    }, 200);
  });

  /* Onload callback for iframe, img, etc */
  $.fn.jAlert.mediaLoaded = function(elem){
    var wrap = elem.parents('.ja_media_wrap'),
      vid_wrap = wrap.find('.ja_video'),
            alert = elem.parents('.jAlert:first'),
            jalert = alert.jAlert();

    wrap.find('.ja_loader').remove();

    if( vid_wrap.length > 0 )
    {
      vid_wrap.fadeIn('fast');
    }
    else
    {
      elem.fadeIn('fast');
    }

    //if iframe, add height after load and set display: block
    if( typeof jalert.iframeHeight !== 'undefined' && jalert.iframeHeight )
        {
            elem.css('display', 'block');
            elem.height(jalert.iframeHeight);
        }

        jalert.centerAlert();

  };

  /* END OF ON JQUERY LOAD */
})(jQuery);


/*
 * Custom Combobox
 *
 * Call like this after document.ready to init all combo box
 *
 * rUtils.initComboBox();
 *
 */
rUtils = {};

rUtils.initComboBox = function() {
  $('.custom-select').each(function(index) {
    var hiddenField = $(this).find('.cs-value');
    var displayText = $(this).find('a.text span');
    $(hiddenField).attr('rel', $(displayText).html());
  });
  $('.custom-select').live('click', showHideOptions);
  $('.custom-option li').live('click', onSelectOptionHandler);
  $('body').bind('click', onHideSelectOptionHandler);

  $('.custom-option li[selected="selected"]').click();
};

rUtils.resetComboBox = function() {
  $('.cs-value').attr('value', '');
  $('.custom-select').each(function(index) {
    var hiddenField = $(this).find('.cs-value');
    var displayText = $(this).find('a.text span');
    $(displayText).html($(hiddenField).attr('rel'));
  });
}

function onHideSelectOptionHandler() {
  $('.custom-option').each(function() {
    if (!$(this).is(':hidden')) {
      hideComboBox(this);
    }
  });
}

function showHideOptions(evt) {
  evt.stopPropagation();
  var optEle = $(this).find('.custom-option');
  if($(optEle).css('display') == 'none') {
    showComboBox(optEle);
    $('.custom-option').each(function() {
      if (!$(this).is(optEle) && !$(this).is(':hidden')) {
        hideComboBox(this);
      }
    });
  } else {
    hideComboBox(optEle);
  }
}

function hideComboBox(ele) {
  $(ele).stop(true, true).animate({
    opacity: 0
  }, 'fast', function() {
    $(ele).css({
      display: 'none'
    });
  });
}

function showComboBox(ele) {
  $(ele).css({
    display: 'block',
    opacity: 0
  });
  $(ele).stop(true, true).animate({
    opacity: 1
  }, 'fast');
}

function onSelectOptionHandler(evt) {
  evt.stopPropagation();

  var cbEle = $(this).parent().parent();
  hideComboBox(cbEle);
  cbEle = $(cbEle).parent();
  var text = $(this).html();
  var value = $(this).attr('id');

  $(cbEle).find('.cs-value').attr('value', value);
  $(cbEle).find('a.text span').html(text);
  var callbackFunc = $(cbEle).find('.cs-callback').attr('value');
  if (callbackFunc) {
    var data = {
      text: text,
      value: value
    };
    window[callbackFunc](data);
  }
}

/*

CUSTOM FORM ELEMENTS

Radio button and Checkbox

Created by Ryan Fait
www.ryanfait.com

The only things you may need to change in this file are the following
variables: checkboxHeight, radioHeight and selectWidth (lines 24, 25, 26)

The numbers you set for checkboxHeight and radioHeight should be one quarter
of the total height of the image want to use for checkboxes and radio
buttons. Both images should contain the four stages of both inputs stacked
on top of each other in this order: unchecked, unchecked-clicked, checked,
checked-clicked.

You may need to adjust your images a bit if there is a slight vertical
movement during the different stages of the button activation.

The value of selectWidth should be the width of your select list image.

Visit http://ryanfait.com/ for more information.

Custom radio button:
To add check function: only need to add js function as following, obj is the input element

function radioChange(obj) {
}

Custom checkbox:
To add check function: only need to add js function as following, obj is the input element

function checkboxChange(obj) {
}
*/

var checkboxHeight = "25";
var radioHeight = "25";
var selectWidth = "190";


/* No need to change anything after this */


document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: ' + selectWidth + 'px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>');

var Custom = {
  init: function() {
    var inputs = document.getElementsByTagName("input"), span = Array(), textnode, option, active;
    for(a = 0; a < inputs.length; a++) {
      if((inputs[a].type == "checkbox" || inputs[a].type == "radio") && inputs[a].className == "styled") {
        span[a] = document.createElement("span");
        span[a].className = inputs[a].type;

        if(inputs[a].checked == true) {
          if(inputs[a].type == "checkbox") {
            position = "0 -" + (checkboxHeight*2) + "px";
            span[a].style.backgroundPosition = position;
          } else {
            position = "0 -" + (radioHeight*2) + "px";
            span[a].style.backgroundPosition = position;
          }
        }
        inputs[a].parentNode.insertBefore(span[a], inputs[a]);
        inputs[a].onchange = Custom.clear;
        if(!inputs[a].getAttribute("disabled")) {
          span[a].onmousedown = Custom.pushed;
          span[a].onmouseup = Custom.check;
        } else {
          span[a].className = span[a].className += " disabled";
        }
      }
    }
    inputs = document.getElementsByTagName("select");
    for(a = 0; a < inputs.length; a++) {
      if(inputs[a].className == "styled") {
        option = inputs[a].getElementsByTagName("option");
        active = option[0].childNodes[0].nodeValue;
        textnode = document.createTextNode(active);
        for(b = 0; b < option.length; b++) {
          if(option[b].selected == true) {
            textnode = document.createTextNode(option[b].childNodes[0].nodeValue);
          }
        }
        span[a] = document.createElement("span");
        span[a].className = "select";
        span[a].id = "select" + inputs[a].name;
        span[a].appendChild(textnode);
        inputs[a].parentNode.insertBefore(span[a], inputs[a]);
        if(!inputs[a].getAttribute("disabled")) {
          inputs[a].onchange = Custom.choose;
        } else {
          inputs[a].previousSibling.className = inputs[a].previousSibling.className += " disabled";
        }
      }
    }
    document.onmouseup = Custom.clear;
  },
  pushed: function() {
    element = this.nextSibling;
    if(!element.disabled) {
      if(element.checked == true && element.type == "checkbox") {
        this.style.backgroundPosition = "0 -" + checkboxHeight*3 + "px";
      } else if(element.checked == true && element.type == "radio") {
        this.style.backgroundPosition = "0 -" + radioHeight*3 + "px";
      } else if(element.checked != true && element.type == "checkbox") {
        this.style.backgroundPosition = "0 -" + checkboxHeight + "px";
      } else {
        this.style.backgroundPosition = "0 -" + radioHeight + "px";
      }
    }
  },
  check: function() {
    element = this.nextSibling;
    if(!element.disabled) {
      if(element.checked == true && element.type == "checkbox") {
        this.style.backgroundPosition = "0 0";
        element.checked = false;
      } else {
        if(element.type == "checkbox") {
          this.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
        } else {
          this.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
          group = this.nextSibling.name;
          inputs = document.getElementsByTagName("input");
          for(a = 0; a < inputs.length; a++) {
            if(inputs[a].name == group && inputs[a] != this.nextSibling) {
              inputs[a].previousSibling.style.backgroundPosition = "0 0";
            }
          }
        }
        element.checked = true;
      }
      if (typeof(checkboxChange) === "function") {
        checkboxChange(this.nextSibling);
      }
      if (typeof(checkValue) === "function") {
        radioChange(this.nextSibling);
      }
    }
  },
  clear: function() {
    inputs = document.getElementsByTagName("input");
    for(var b = 0; b < inputs.length; b++) {
      if (inputs[b].previousSibling) {
        if (inputs[b].previousSibling.style) {
          if(inputs[b].type == "checkbox" && inputs[b].checked == true && inputs[b].className == "styled") {
            inputs[b].previousSibling.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
          } else if(inputs[b].type == "checkbox" && inputs[b].className == "styled") {
            inputs[b].previousSibling.style.backgroundPosition = "0 0";
          } else if(inputs[b].type == "radio" && inputs[b].checked == true && inputs[b].className == "styled") {
            inputs[b].previousSibling.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
          } else if(inputs[b].type == "radio" && inputs[b].className == "styled") {
            inputs[b].previousSibling.style.backgroundPosition = "0 0";
          }
        }
      }
    }
  },
  choose: function() {
    option = this.getElementsByTagName("option");
    for(d = 0; d < option.length; d++) {
      if(option[d].selected == true) {
        document.getElementById("select" + this.name).childNodes[0].nodeValue = option[d].childNodes[0].nodeValue;
      }
    }
  }
}
window.onload = Custom.init;






/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e){var t=(new Date).getTime(),r=v.State.calls.length;r>1e4&&(v.State.calls=n(v.State.calls));for(var o=0;r>o;o++)if(v.State.calls[o]){var s=v.State.calls[o],l=s[0],u=s[2],f=s[3],d=!!f,m=null;f||(f=v.State.calls[o][3]=t-16);for(var y=Math.min((t-f)/u.duration,1),h=0,b=l.length;b>h;h++){var S=l[h],w=S.element;if(i(w)){var V=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var C=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(C,function(e,t){x.setPropertyValue(w,"display",t)})}x.setPropertyValue(w,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&x.setPropertyValue(w,"visibility",u.visibility);for(var T in S)if("element"!==T){var k=S[T],A,F=g.isString(k.easing)?v.Easings[k.easing]:k.easing;if(1===y)A=k.endValue;else{var E=k.endValue-k.startValue;if(A=k.startValue+E*F(y,u,E),!d&&A===k.currentValue)continue}if(k.currentValue=A,"tween"===T)m=A;else{if(x.Hooks.registered[T]){var j=x.Hooks.getRoot(T),H=i(w).rootPropertyValueCache[j];H&&(k.rootPropertyValue=H)}var N=x.setPropertyValue(w,T,k.currentValue+(0===parseFloat(A)?"":k.unitType),k.rootPropertyValue,k.scrollData);x.Hooks.registered[T]&&(i(w).rootPropertyValueCache[j]=x.Normalizations.registered[j]?x.Normalizations.registered[j]("extract",null,N[1]):N[1]),"transform"===N[0]&&(V=!0)}}u.mobileHA&&i(w).transformCache.translate3d===a&&(i(w).transformCache.translate3d="(0px, 0px, 0px)",V=!0),V&&x.flushTransformCache(w)}}u.display!==a&&"none"!==u.display&&(v.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(v.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],y,Math.max(0,f+u.duration-t),f,m),1===y&&p(o)}}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return v.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(g){l=0}else l=e.getAttribute(r);else l=s(e,x.Names.prefixCheck(r)[0]);return x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return l?T.promise||null:f}function n(){function e(e){function p(e,t){var r=a,i=a,s=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?s=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(i=t?e[1]:u(e[1],o.duration),e[2]!==a&&(s=e[2]))):r=e,t||(i=i||o.easing),g.isFunction(r)&&(r=r.call(n,w,P)),g.isFunction(s)&&(s=s.call(n,w,P)),[r||0,i,s]}function f(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function d(){var e={myParent:n.parentNode||r.body,position:x.getPropertyValue(n,"position"),fontSize:x.getPropertyValue(n,"fontSize")},a=e.position===N.lastPosition&&e.myParent===N.lastParent,o=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(o&&a)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=i(n).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(t.innerWidth)/100,N.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),n),l}if(o.begin&&0===w)try{o.begin.call(m,m)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===k){var S=/^x$/i.test(o.axis)?"Left":"Top",V=parseFloat(o.offset)||0,C,A,F;o.container?g.isWrapped(o.container)||g.isNode(o.container)?(o.container=o.container[0]||o.container,C=o.container["scroll"+S],F=C+$(n).position()[S.toLowerCase()]+V):o.container=null:(C=v.State.scrollAnchor[v.State["scrollProperty"+S]],A=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],F=$(n).offset()[S.toLowerCase()]+V),s={scroll:{rootPropertyValue:!1,startValue:C,currentValue:C,endValue:F,unitType:"",easing:o.easing,scrollData:{container:o.container,direction:S,alternateValue:A}},element:n},v.debug&&console.log("tweensContainer (scroll): ",s.scroll,n)}else if("reverse"===k){if(!i(n).tweensContainer)return void $.dequeue(n,o.queue);"none"===i(n).opts.display&&(i(n).opts.display="auto"),"hidden"===i(n).opts.visibility&&(i(n).opts.visibility="visible"),i(n).opts.loop=!1,i(n).opts.begin=null,i(n).opts.complete=null,b.easing||delete o.easing,b.duration||delete o.duration,o=$.extend({},i(n).opts,o);var E=$.extend(!0,{},i(n).tweensContainer);for(var j in E)if("element"!==j){var H=E[j].startValue;E[j].startValue=E[j].currentValue=E[j].endValue,E[j].endValue=H,g.isEmptyObject(b)||(E[j].easing=o.easing),v.debug&&console.log("reverse tweensContainer ("+j+"): "+JSON.stringify(E[j]),n)}s=E}else if("start"===k){var E;i(n).tweensContainer&&i(n).isAnimating===!0&&(E=i(n).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),h[e+s[c]]=f}delete h[e]}}});for(var R in h){var O=p(h[R]),z=O[0],q=O[1],M=O[2];R=x.Names.camelCase(R);var I=x.Hooks.getRoot(R),B=!1;if(i(n).isSVG||"tween"===I||x.Names.prefixCheck(I)[1]!==!1||x.Normalizations.registered[I]!==a){(o.display!==a&&null!==o.display&&"none"!==o.display||o.visibility!==a&&"hidden"!==o.visibility)&&/opacity|filter/.test(R)&&!M&&0!==z&&(M=0),o._cacheValues&&E&&E[R]?(M===a&&(M=E[R].endValue+E[R].unitType),B=i(n).rootPropertyValueCache[I]):x.Hooks.registered[R]?M===a?(B=x.getPropertyValue(n,I),M=x.getPropertyValue(n,R,B)):B=x.Hooks.templates[I][1]:M===a&&(M=x.getPropertyValue(n,R));var W,G,D,X=!1;if(W=f(R,M),M=W[0],D=W[1],W=f(R,z),z=W[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),G=W[1],M=parseFloat(M)||0,z=parseFloat(z)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(R)?(z/=100,G="em"):/^scale/.test(R)?(z/=100,G=""):/(Red|Green|Blue)$/i.test(R)&&(z=z/100*255,G="")),/[\/*]/.test(X))G=D;else if(D!==G&&0!==M)if(0===z)G=D;else{l=l||d();var Y=/margin|padding|left|right|width|text|word|letter/i.test(R)||/X$/.test(R)||"x"===R?"x":"y";switch(D){case"%":M*="x"===Y?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:M*=l[D+"ToPx"]}switch(G){case"%":M*=1/("x"===Y?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:M*=1/l[G+"ToPx"]}}switch(X){case"+":z=M+z;break;case"-":z=M-z;break;case"*":z=M*z;break;case"/":z=M/z}s[R]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:z,unitType:G,easing:q},v.debug&&console.log("tweensContainer ("+R+"): "+JSON.stringify(s[R]),n)}else v.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}s.element=n}s.element&&(x.Values.addClass(n,"velocity-animating"),L.push(s),""===o.queue&&(i(n).tweensContainer=s,i(n).opts=o),i(n).isAnimating=!0,w===P-1?(v.State.calls.push([L,m,o,null,T.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):w++)}var n=this,o=$.extend({},v.defaults,b),s={},l;switch(i(n)===a&&v.init(n),parseFloat(o.delay)&&o.queue!==!1&&$.queue(n,o.queue,function(e){v.velocityQueueEntryFlag=!0,i(n).delayTimer={setTimeout:setTimeout(e,parseFloat(o.delay)),next:e}}),o.duration.toString().toLowerCase()){case"fast":o.duration=200;break;case"normal":o.duration=y;break;case"slow":o.duration=600;break;default:o.duration=parseFloat(o.duration)||1}v.mock!==!1&&(v.mock===!0?o.duration=o.delay=1:(o.duration*=parseFloat(v.mock)||1,o.delay*=parseFloat(v.mock)||1)),o.easing=u(o.easing,o.duration),o.begin&&!g.isFunction(o.begin)&&(o.begin=null),o.progress&&!g.isFunction(o.progress)&&(o.progress=null),o.complete&&!g.isFunction(o.complete)&&(o.complete=null),o.display!==a&&null!==o.display&&(o.display=o.display.toString().toLowerCase(),"auto"===o.display&&(o.display=v.CSS.Values.getDisplayType(n))),o.visibility!==a&&null!==o.visibility&&(o.visibility=o.visibility.toString().toLowerCase()),o.mobileHA=o.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,o.queue===!1?o.delay?setTimeout(e,o.delay):e():$.queue(n,o.queue,function(t,r){return r===!0?(T.promise&&T.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==o.queue&&"fx"!==o.queue||"inprogress"===$.queue(n)[0]||$.dequeue(n)}var s=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),l,f,d,m,h,b;if(g.isWrapped(this)?(l=!1,d=0,m=this,f=this):(l=!0,d=1,m=s?arguments[0].elements||arguments[0].e:arguments[0]),m=o(m)){s?(h=arguments[0].properties||arguments[0].p,b=arguments[0].options||arguments[0].o):(h=arguments[d],b=arguments[d+1]);var P=m.length,w=0;if(!/^(stop|finish)$/i.test(h)&&!$.isPlainObject(b)){var V=d+1;b={};for(var C=V;C<arguments.length;C++)g.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?g.isString(arguments[C])||g.isArray(arguments[C])?b.easing=arguments[C]:g.isFunction(arguments[C])&&(b.complete=arguments[C]):b.duration=arguments[C]}var T={promise:null,resolver:null,rejecter:null};l&&v.Promise&&(T.promise=new v.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(h){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"finish":case"stop":$.each(m,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var A=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=b===a?"":b;return o===!0||t[2].queue===o||b===a&&t[2].queue===!1?void $.each(m,function(r,a){a===n&&((b===!0||g.isString(b))&&($.each($.queue(a,g.isString(b)?b:""),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(a,g.isString(b)?b:"",[])),"stop"===h?(i(a)&&i(a).tweensContainer&&o!==!1&&$.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue
}),A.push(e)):"finish"===h&&(t[2].duration=1))}):!0})}),"stop"===h&&($.each(A,function(e,t){p(t,!0)}),T.promise&&T.resolver(m)),e();default:if(!$.isPlainObject(h)||g.isEmptyObject(h)){if(g.isString(h)&&v.Redirects[h]){var F=$.extend({},b),E=F.duration,j=F.delay||0;return F.backwards===!0&&(m=$.extend(!0,[],m).reverse()),$.each(m,function(e,t){parseFloat(F.stagger)?F.delay=j+parseFloat(F.stagger)*e:g.isFunction(F.stagger)&&(F.delay=j+F.stagger.call(t,e,P)),F.drag&&(F.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:y),F.duration=Math.max(F.duration*(F.backwards?1-e/P:(e+1)/P),.75*F.duration,200)),v.Redirects[h].call(t,t,F||{},e,P,m,T.promise?T:a)}),e()}var H="Velocity: First argument ("+h+") was not a property map, a known action, or a registered redirect. Aborting.";return T.promise?T.rejecter(new Error(H)):console.log(H),e()}k="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];$.each(m,function(e,t){g.isNode(t)&&n.call(t)});var F=$.extend({},v.defaults,b),R;if(F.loop=parseInt(F.loop),R=2*F.loop-1,F.loop)for(var O=0;R>O;O++){var z={delay:F.delay,progress:F.progress};O===R-1&&(z.display=F.display,z.visibility=F.visibility,z.complete=F.complete),S(m,"reverse",z)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});



/*!
* velocity.ui.js: UI effects pack for Velocity. Load this file after jquery.velocity.js.
* @version 1.1.0
* @docs http://velocityjs.org/#uiPack
* @support <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: Full support.
* @license Copyright Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
* @license Indicated portions adapted from Animate.css, copyright Daniel Eden. MIT License: http://en.wikipedia.org/wiki/MIT_License
* @license Indicated portions adapted from Magic.css, copyright Christian Pucci. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
/* VelocityJS.org UI Pack (5.0.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
!function(t){"function"==typeof require&&"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(["velocity"],t):t()}(function(){return function(t,a,e,r){function n(t,a){var e=[];return t&&a?($.each([t,a],function(t,a){var r=[];$.each(a,function(t,a){for(;a.toString().length<5;)a="0"+a;r.push(a)}),e.push(r.join(""))}),parseFloat(e[0])>parseFloat(e[1])):!1}if(!t.Velocity||!t.Velocity.Utilities)return void(a.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var i=t.Velocity,$=i.Utilities,s=i.version,o={major:1,minor:1,patch:0};if(n(o,s)){var l="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(l),new Error(l)}i.RegisterEffect=i.RegisterUI=function(t,a){function e(t,a,e,r){var n=0,s;$.each(t.nodeType?[t]:t,function(t,a){r&&(e+=t*r),s=a.parentNode,$.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],function(t,e){n+=parseFloat(i.CSS.getPropertyValue(a,e))})}),i.animate(s,{height:("In"===a?"+":"-")+"="+n},{queue:!1,easing:"ease-in-out",duration:e*("In"===a?.6:1)})}return i.Redirects[t]=function(n,s,o,l,c,u){function f(){s.display!==r&&"none"!==s.display||!/Out$/.test(t)||$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"display","none")}),s.complete&&s.complete.call(c,c),u&&u.resolver(c||n)}var p=o===l-1;a.defaultDuration="function"==typeof a.defaultDuration?a.defaultDuration.call(c,c):parseFloat(a.defaultDuration);for(var d=0;d<a.calls.length;d++){var y=a.calls[d],g=y[0],m=s.duration||a.defaultDuration||1e3,X=y[1],Y=y[2]||{},O={};if(O.duration=m*(X||1),O.queue=s.queue||"",O.easing=Y.easing||"ease",O.delay=parseFloat(Y.delay)||0,O._cacheValues=Y._cacheValues||!0,0===d){if(O.delay+=parseFloat(s.delay)||0,0===o&&(O.begin=function(){s.begin&&s.begin.call(c,c);var a=t.match(/(In|Out)$/);a&&"In"===a[0]&&g.opacity!==r&&$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"opacity",0)}),s.animateParentHeight&&a&&e(c,a[0],m+O.delay,s.stagger)}),null!==s.display)if(s.display!==r&&"none"!==s.display)O.display=s.display;else if(/In$/.test(t)){var v=i.CSS.Values.getDisplayType(n);O.display="inline"===v?"inline-block":v}s.visibility&&"hidden"!==s.visibility&&(O.visibility=s.visibility)}d===a.calls.length-1&&(O.complete=function(){if(a.reset){for(var t in a.reset){var e=a.reset[t];i.CSS.Hooks.registered[t]!==r||"string"!=typeof e&&"number"!=typeof e||(a.reset[t]=[a.reset[t],a.reset[t]])}var s={duration:0,queue:!1};p&&(s.complete=f),i.animate(n,a.reset,s)}else p&&f()},"hidden"===s.visibility&&(O.visibility=s.visibility)),i.animate(n,g,O)}},i},i.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:0},.125]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},.25],[{opacity:[1,"easeInOutQuad"]},.25],[{opacity:[0,"easeInOutQuad"]},.25],[{opacity:[1,"easeInOutQuad"]},.25]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},.2],[{rotateZ:-10},.2],[{rotateZ:5},.2],[{rotateZ:-5},.2],[{rotateZ:0},.2]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10},.5],[{opacity:0,rotateY:90},.5]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15},.5],[{opacity:0,rotateX:90},.5]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.4],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.5]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]]},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var c in i.RegisterEffect.packagedEffects)i.RegisterEffect(c,i.RegisterEffect.packagedEffects[c]);i.RunSequence=function(t){var a=$.extend(!0,[],t);a.length>1&&($.each(a.reverse(),function(t,e){var r=a[t+1];if(r){var n=e.options&&e.options.sequenceQueue===!1?"begin":"complete",s=r.options&&r.options[n],o={};o[n]=function(){var t=r.elements.nodeType?[r.elements]:r.elements;s&&s.call(t,t),i(e)},r.options=$.extend({},r.options,o)}}),a.reverse()),i(a[0])}}(window.jQuery||window.Zepto||window,window,document)});

/*
* Custom jQuery Mobile v1.4.2
* http://jquerymobile.com
*
* Copyright 2010, 2014 jQuery Foundation, Inc. and other contributors
* Released under the MIT license.
* http://jquery.org/license
*
*/

(function ( root, doc, factory ) {
  if ( typeof define === "function" && define.amd ) {
    // AMD. Register as an anonymous module.
    define( [ "jquery" ], function ( $ ) {
      factory( $, root, doc );
      return $.mobile;
    });
  } else {
    // Browser globals
    factory( root.jQuery, root, doc );
  }
}( this, document, function ( jQuery, window, document, undefined ) {
// This plugin is an experiment for abstracting away the touch and mouse
// events so that developers don't have to worry about which method of input
// the device their document is loaded on supports.
//
// The idea here is to allow the developer to register listeners for the
// basic mouse events, such as mousedown, mousemove, mouseup, and click,
// and the plugin will take care of registering the correct listeners
// behind the scenes to invoke the listener at the fastest possible time
// for that device, while still retaining the order of event firing in
// the traditional mouse environment, should multiple handlers be registered
// on the same element for different events.
//
// The current version exposes the following virtual events to jQuery bind methods:
// "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel"

(function( $, window, document, undefined ) {

var dataPropertyName = "virtualMouseBindings",
  touchTargetPropertyName = "virtualTouchID",
  virtualEventNames = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split( " " ),
  touchEventProps = "clientX clientY pageX pageY screenX screenY".split( " " ),
  mouseHookProps = $.event.mouseHooks ? $.event.mouseHooks.props : [],
  mouseEventProps = $.event.props.concat( mouseHookProps ),
  activeDocHandlers = {},
  resetTimerID = 0,
  startX = 0,
  startY = 0,
  didScroll = false,
  clickBlockList = [],
  blockMouseTriggers = false,
  blockTouchTriggers = false,
  eventCaptureSupported = "addEventListener" in document,
  $document = $( document ),
  nextTouchID = 1,
  lastTouchID = 0, threshold,
  i;

$.vmouse = {
  moveDistanceThreshold: 10,
  clickDistanceThreshold: 10,
  resetTimerDuration: 1500
};

function getNativeEvent( event ) {

  while ( event && typeof event.originalEvent !== "undefined" ) {
    event = event.originalEvent;
  }
  return event;
}

function createVirtualEvent( event, eventType ) {

  var t = event.type,
    oe, props, ne, prop, ct, touch, i, j, len;

  event = $.Event( event );
  event.type = eventType;

  oe = event.originalEvent;
  props = $.event.props;

  // addresses separation of $.event.props in to $.event.mouseHook.props and Issue 3280
  // https://github.com/jquery/jquery-mobile/issues/3280
  if ( t.search( /^(mouse|click)/ ) > -1 ) {
    props = mouseEventProps;
  }

  // copy original event properties over to the new event
  // this would happen if we could call $.event.fix instead of $.Event
  // but we don't have a way to force an event to be fixed multiple times
  if ( oe ) {
    for ( i = props.length, prop; i; ) {
      prop = props[ --i ];
      event[ prop ] = oe[ prop ];
    }
  }

  // make sure that if the mouse and click virtual events are generated
  // without a .which one is defined
  if ( t.search(/mouse(down|up)|click/) > -1 && !event.which ) {
    event.which = 1;
  }

  if ( t.search(/^touch/) !== -1 ) {
    ne = getNativeEvent( oe );
    t = ne.touches;
    ct = ne.changedTouches;
    touch = ( t && t.length ) ? t[0] : ( ( ct && ct.length ) ? ct[ 0 ] : undefined );

    if ( touch ) {
      for ( j = 0, len = touchEventProps.length; j < len; j++) {
        prop = touchEventProps[ j ];
        event[ prop ] = touch[ prop ];
      }
    }
  }

  return event;
}

function getVirtualBindingFlags( element ) {

  var flags = {},
    b, k;

  while ( element ) {

    b = $.data( element, dataPropertyName );

    for (  k in b ) {
      if ( b[ k ] ) {
        flags[ k ] = flags.hasVirtualBinding = true;
      }
    }
    element = element.parentNode;
  }
  return flags;
}

function getClosestElementWithVirtualBinding( element, eventType ) {
  var b;
  while ( element ) {

    b = $.data( element, dataPropertyName );

    if ( b && ( !eventType || b[ eventType ] ) ) {
      return element;
    }
    element = element.parentNode;
  }
  return null;
}

function enableTouchBindings() {
  blockTouchTriggers = false;
}

function disableTouchBindings() {
  blockTouchTriggers = true;
}

function enableMouseBindings() {
  lastTouchID = 0;
  clickBlockList.length = 0;
  blockMouseTriggers = false;

  // When mouse bindings are enabled, our
  // touch bindings are disabled.
  disableTouchBindings();
}

function disableMouseBindings() {
  // When mouse bindings are disabled, our
  // touch bindings are enabled.
  enableTouchBindings();
}

function startResetTimer() {
  clearResetTimer();
  resetTimerID = setTimeout( function() {
    resetTimerID = 0;
    enableMouseBindings();
  }, $.vmouse.resetTimerDuration );
}

function clearResetTimer() {
  if ( resetTimerID ) {
    clearTimeout( resetTimerID );
    resetTimerID = 0;
  }
}

function triggerVirtualEvent( eventType, event, flags ) {
  var ve;

  if ( ( flags && flags[ eventType ] ) ||
        ( !flags && getClosestElementWithVirtualBinding( event.target, eventType ) ) ) {

    ve = createVirtualEvent( event, eventType );

    $( event.target).trigger( ve );
  }

  return ve;
}

function mouseEventCallback( event ) {
  var touchID = $.data( event.target, touchTargetPropertyName ),
    ve;

  if ( !blockMouseTriggers && ( !lastTouchID || lastTouchID !== touchID ) ) {
    ve = triggerVirtualEvent( "v" + event.type, event );
    if ( ve ) {
      if ( ve.isDefaultPrevented() ) {
        event.preventDefault();
      }
      if ( ve.isPropagationStopped() ) {
        event.stopPropagation();
      }
      if ( ve.isImmediatePropagationStopped() ) {
        event.stopImmediatePropagation();
      }
    }
  }
}

function handleTouchStart( event ) {

  var touches = getNativeEvent( event ).touches,
    target, flags, t;

  if ( touches && touches.length === 1 ) {

    target = event.target;
    flags = getVirtualBindingFlags( target );

    if ( flags.hasVirtualBinding ) {

      lastTouchID = nextTouchID++;
      $.data( target, touchTargetPropertyName, lastTouchID );

      clearResetTimer();

      disableMouseBindings();
      didScroll = false;

      t = getNativeEvent( event ).touches[ 0 ];
      startX = t.pageX;
      startY = t.pageY;

      triggerVirtualEvent( "vmouseover", event, flags );
      triggerVirtualEvent( "vmousedown", event, flags );
    }
  }
}

function handleScroll( event ) {
  if ( blockTouchTriggers ) {
    return;
  }

  if ( !didScroll ) {
    triggerVirtualEvent( "vmousecancel", event, getVirtualBindingFlags( event.target ) );
  }

  didScroll = true;
  startResetTimer();
}

function handleTouchMove( event ) {
  if ( blockTouchTriggers ) {
    return;
  }

  var t = getNativeEvent( event ).touches[ 0 ],
    didCancel = didScroll,
    moveThreshold = $.vmouse.moveDistanceThreshold,
    flags = getVirtualBindingFlags( event.target );

    didScroll = didScroll ||
      ( Math.abs( t.pageX - startX ) > moveThreshold ||
        Math.abs( t.pageY - startY ) > moveThreshold );

  if ( didScroll && !didCancel ) {
    triggerVirtualEvent( "vmousecancel", event, flags );
  }

  triggerVirtualEvent( "vmousemove", event, flags );
  startResetTimer();
}

function handleTouchEnd( event ) {
  if ( blockTouchTriggers ) {
    return;
  }

  disableTouchBindings();

  var flags = getVirtualBindingFlags( event.target ),
    ve, t;
  triggerVirtualEvent( "vmouseup", event, flags );

  if ( !didScroll ) {
    ve = triggerVirtualEvent( "vclick", event, flags );
    if ( ve && ve.isDefaultPrevented() ) {
      // The target of the mouse events that follow the touchend
      // event don't necessarily match the target used during the
      // touch. This means we need to rely on coordinates for blocking
      // any click that is generated.
      t = getNativeEvent( event ).changedTouches[ 0 ];
      clickBlockList.push({
        touchID: lastTouchID,
        x: t.clientX,
        y: t.clientY
      });

      // Prevent any mouse events that follow from triggering
      // virtual event notifications.
      blockMouseTriggers = true;
    }
  }
  triggerVirtualEvent( "vmouseout", event, flags);
  didScroll = false;

  startResetTimer();
}

function hasVirtualBindings( ele ) {
  var bindings = $.data( ele, dataPropertyName ),
    k;

  if ( bindings ) {
    for ( k in bindings ) {
      if ( bindings[ k ] ) {
        return true;
      }
    }
  }
  return false;
}

function dummyMouseHandler() {}

function getSpecialEventObject( eventType ) {
  var realType = eventType.substr( 1 );

  return {
    setup: function(/* data, namespace */) {
      // If this is the first virtual mouse binding for this element,
      // add a bindings object to its data.

      if ( !hasVirtualBindings( this ) ) {
        $.data( this, dataPropertyName, {} );
      }

      // If setup is called, we know it is the first binding for this
      // eventType, so initialize the count for the eventType to zero.
      var bindings = $.data( this, dataPropertyName );
      bindings[ eventType ] = true;

      // If this is the first virtual mouse event for this type,
      // register a global handler on the document.

      activeDocHandlers[ eventType ] = ( activeDocHandlers[ eventType ] || 0 ) + 1;

      if ( activeDocHandlers[ eventType ] === 1 ) {
        $document.bind( realType, mouseEventCallback );
      }

      // Some browsers, like Opera Mini, won't dispatch mouse/click events
      // for elements unless they actually have handlers registered on them.
      // To get around this, we register dummy handlers on the elements.

      $( this ).bind( realType, dummyMouseHandler );

      // For now, if event capture is not supported, we rely on mouse handlers.
      if ( eventCaptureSupported ) {
        // If this is the first virtual mouse binding for the document,
        // register our touchstart handler on the document.

        activeDocHandlers[ "touchstart" ] = ( activeDocHandlers[ "touchstart" ] || 0) + 1;

        if ( activeDocHandlers[ "touchstart" ] === 1 ) {
          $document.bind( "touchstart", handleTouchStart )
            .bind( "touchend", handleTouchEnd )

            // On touch platforms, touching the screen and then dragging your finger
            // causes the window content to scroll after some distance threshold is
            // exceeded. On these platforms, a scroll prevents a click event from being
            // dispatched, and on some platforms, even the touchend is suppressed. To
            // mimic the suppression of the click event, we need to watch for a scroll
            // event. Unfortunately, some platforms like iOS don't dispatch scroll
            // events until *AFTER* the user lifts their finger (touchend). This means
            // we need to watch both scroll and touchmove events to figure out whether
            // or not a scroll happenens before the touchend event is fired.

            .bind( "touchmove", handleTouchMove )
            .bind( "scroll", handleScroll );
        }
      }
    },

    teardown: function(/* data, namespace */) {
      // If this is the last virtual binding for this eventType,
      // remove its global handler from the document.

      --activeDocHandlers[ eventType ];

      if ( !activeDocHandlers[ eventType ] ) {
        $document.unbind( realType, mouseEventCallback );
      }

      if ( eventCaptureSupported ) {
        // If this is the last virtual mouse binding in existence,
        // remove our document touchstart listener.

        --activeDocHandlers[ "touchstart" ];

        if ( !activeDocHandlers[ "touchstart" ] ) {
          $document.unbind( "touchstart", handleTouchStart )
            .unbind( "touchmove", handleTouchMove )
            .unbind( "touchend", handleTouchEnd )
            .unbind( "scroll", handleScroll );
        }
      }

      var $this = $( this ),
        bindings = $.data( this, dataPropertyName );

      // teardown may be called when an element was
      // removed from the DOM. If this is the case,
      // jQuery core may have already stripped the element
      // of any data bindings so we need to check it before
      // using it.
      if ( bindings ) {
        bindings[ eventType ] = false;
      }

      // Unregister the dummy event handler.

      $this.unbind( realType, dummyMouseHandler );

      // If this is the last virtual mouse binding on the
      // element, remove the binding data from the element.

      if ( !hasVirtualBindings( this ) ) {
        $this.removeData( dataPropertyName );
      }
    }
  };
}

// Expose our custom events to the jQuery bind/unbind mechanism.

for ( i = 0; i < virtualEventNames.length; i++ ) {
  $.event.special[ virtualEventNames[ i ] ] = getSpecialEventObject( virtualEventNames[ i ] );
}

// Add a capture click handler to block clicks.
// Note that we require event capture support for this so if the device
// doesn't support it, we punt for now and rely solely on mouse events.
if ( eventCaptureSupported ) {
  document.addEventListener( "click", function( e ) {
    var cnt = clickBlockList.length,
      target = e.target,
      x, y, ele, i, o, touchID;

    if ( cnt ) {
      x = e.clientX;
      y = e.clientY;
      threshold = $.vmouse.clickDistanceThreshold;

      // The idea here is to run through the clickBlockList to see if
      // the current click event is in the proximity of one of our
      // vclick events that had preventDefault() called on it. If we find
      // one, then we block the click.
      //
      // Why do we have to rely on proximity?
      //
      // Because the target of the touch event that triggered the vclick
      // can be different from the target of the click event synthesized
      // by the browser. The target of a mouse/click event that is synthesized
      // from a touch event seems to be implementation specific. For example,
      // some browsers will fire mouse/click events for a link that is near
      // a touch event, even though the target of the touchstart/touchend event
      // says the user touched outside the link. Also, it seems that with most
      // browsers, the target of the mouse/click event is not calculated until the
      // time it is dispatched, so if you replace an element that you touched
      // with another element, the target of the mouse/click will be the new
      // element underneath that point.
      //
      // Aside from proximity, we also check to see if the target and any
      // of its ancestors were the ones that blocked a click. This is necessary
      // because of the strange mouse/click target calculation done in the
      // Android 2.1 browser, where if you click on an element, and there is a
      // mouse/click handler on one of its ancestors, the target will be the
      // innermost child of the touched element, even if that child is no where
      // near the point of touch.

      ele = target;

      while ( ele ) {
        for ( i = 0; i < cnt; i++ ) {
          o = clickBlockList[ i ];
          touchID = 0;

          if ( ( ele === target && Math.abs( o.x - x ) < threshold && Math.abs( o.y - y ) < threshold ) ||
                $.data( ele, touchTargetPropertyName ) === o.touchID ) {
            // XXX: We may want to consider removing matches from the block list
            //      instead of waiting for the reset timer to fire.
            e.preventDefault();
            e.stopPropagation();
            return;
          }
        }
        ele = ele.parentNode;
      }
    }
  }, true);
}
})( jQuery, window, document );

(function( $ ) {
  $.mobile = {};
}( jQuery ));

  (function( $, undefined ) {
    var support = {
      touch: "ontouchend" in document
    };

    $.mobile.support = $.mobile.support || {};
    $.extend( $.support, support );
    $.extend( $.mobile.support, support );
  }( jQuery ));


(function( $, window, undefined ) {
  var $document = $( document ),
    supportTouch = $.mobile.support.touch,
    scrollEvent = "touchmove scroll",
    touchStartEvent = supportTouch ? "touchstart" : "mousedown",
    touchStopEvent = supportTouch ? "touchend" : "mouseup",
    touchMoveEvent = supportTouch ? "touchmove" : "mousemove";

  // setup new event shortcuts
  $.each( ( "touchstart touchmove touchend " +
    "tap taphold " +
    "swipe swipeleft swiperight " +
    "scrollstart scrollstop" ).split( " " ), function( i, name ) {

    $.fn[ name ] = function( fn ) {
      return fn ? this.bind( name, fn ) : this.trigger( name );
    };

    // jQuery < 1.8
    if ( $.attrFn ) {
      $.attrFn[ name ] = true;
    }
  });

  function triggerCustomEvent( obj, eventType, event, bubble ) {
    var originalType = event.type;
    event.type = eventType;
    if ( bubble ) {
      $.event.trigger( event, undefined, obj );
    } else {
      $.event.dispatch.call( obj, event );
    }
    event.type = originalType;
  }

  // also handles scrollstop
  $.event.special.scrollstart = {

    enabled: true,
    setup: function() {

      var thisObject = this,
        $this = $( thisObject ),
        scrolling,
        timer;

      function trigger( event, state ) {
        scrolling = state;
        triggerCustomEvent( thisObject, scrolling ? "scrollstart" : "scrollstop", event );
      }

      // iPhone triggers scroll after a small delay; use touchmove instead
      $this.bind( scrollEvent, function( event ) {

        if ( !$.event.special.scrollstart.enabled ) {
          return;
        }

        if ( !scrolling ) {
          trigger( event, true );
        }

        clearTimeout( timer );
        timer = setTimeout( function() {
          trigger( event, false );
        }, 50 );
      });
    },
    teardown: function() {
      $( this ).unbind( scrollEvent );
    }
  };

  // also handles taphold
  $.event.special.tap = {
    tapholdThreshold: 750,
    emitTapOnTaphold: true,
    setup: function() {
      var thisObject = this,
        $this = $( thisObject ),
        isTaphold = false;

      $this.bind( "vmousedown", function( event ) {
        isTaphold = false;
        if ( event.which && event.which !== 1 ) {
          return false;
        }

        var origTarget = event.target,
          timer;

        function clearTapTimer() {
          clearTimeout( timer );
        }

        function clearTapHandlers() {
          clearTapTimer();

          $this.unbind( "vclick", clickHandler )
            .unbind( "vmouseup", clearTapTimer );
          $document.unbind( "vmousecancel", clearTapHandlers );
        }

        function clickHandler( event ) {
          clearTapHandlers();

          // ONLY trigger a 'tap' event if the start target is
          // the same as the stop target.
          if ( !isTaphold && origTarget === event.target ) {
            triggerCustomEvent( thisObject, "tap", event );
          } else if ( isTaphold ) {
            event.stopPropagation();
          }
        }

        $this.bind( "vmouseup", clearTapTimer )
          .bind( "vclick", clickHandler );
        $document.bind( "vmousecancel", clearTapHandlers );

        timer = setTimeout( function() {
          if ( !$.event.special.tap.emitTapOnTaphold ) {
            isTaphold = true;
          }
          triggerCustomEvent( thisObject, "taphold", $.Event( "taphold", { target: origTarget } ) );
        }, $.event.special.tap.tapholdThreshold );
      });
    },
    teardown: function() {
      $( this ).unbind( "vmousedown" ).unbind( "vclick" ).unbind( "vmouseup" );
      $document.unbind( "vmousecancel" );
    }
  };

  // Also handles swipeleft, swiperight
  $.event.special.swipe = {

    // More than this horizontal displacement, and we will suppress scrolling.
    scrollSupressionThreshold: 30,

    // More time than this, and it isn't a swipe.
    durationThreshold: 1000,

    // Swipe horizontal displacement must be more than this.
    horizontalDistanceThreshold: 30,

    // Swipe vertical displacement must be less than this.
    verticalDistanceThreshold: 30,

    getLocation: function ( event ) {
      var winPageX = window.pageXOffset,
        winPageY = window.pageYOffset,
        x = event.clientX,
        y = event.clientY;

      if ( event.pageY === 0 && Math.floor( y ) > Math.floor( event.pageY ) ||
        event.pageX === 0 && Math.floor( x ) > Math.floor( event.pageX ) ) {

        // iOS4 clientX/clientY have the value that should have been
        // in pageX/pageY. While pageX/page/ have the value 0
        x = x - winPageX;
        y = y - winPageY;
      } else if ( y < ( event.pageY - winPageY) || x < ( event.pageX - winPageX ) ) {

        // Some Android browsers have totally bogus values for clientX/Y
        // when scrolling/zooming a page. Detectable since clientX/clientY
        // should never be smaller than pageX/pageY minus page scroll
        x = event.pageX - winPageX;
        y = event.pageY - winPageY;
      }

      return {
        x: x,
        y: y
      };
    },

    start: function( event ) {
      var data = event.originalEvent.touches ?
          event.originalEvent.touches[ 0 ] : event,
        location = $.event.special.swipe.getLocation( data );
      return {
            time: ( new Date() ).getTime(),
            coords: [ location.x, location.y ],
            origin: $( event.target )
          };
    },

    stop: function( event ) {
      var data = event.originalEvent.touches ?
          event.originalEvent.touches[ 0 ] : event,
        location = $.event.special.swipe.getLocation( data );
      return {
            time: ( new Date() ).getTime(),
            coords: [ location.x, location.y ]
          };
    },

    handleSwipe: function( start, stop, thisObject, origTarget ) {
      if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
        Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
        Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {
        var direction = start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight";

        triggerCustomEvent( thisObject, "swipe", $.Event( "swipe", { target: origTarget, swipestart: start, swipestop: stop }), true );
        triggerCustomEvent( thisObject, direction,$.Event( direction, { target: origTarget, swipestart: start, swipestop: stop } ), true );
        return true;
      }
      return false;

    },

    // This serves as a flag to ensure that at most one swipe event event is
    // in work at any given time
    eventInProgress: false,

    setup: function() {
      var events,
        thisObject = this,
        $this = $( thisObject ),
        context = {};

      // Retrieve the events data for this element and add the swipe context
      events = $.data( this, "mobile-events" );
      if ( !events ) {
        events = { length: 0 };
        $.data( this, "mobile-events", events );
      }
      events.length++;
      events.swipe = context;

      context.start = function( event ) {

        // Bail if we're already working on a swipe event
        if ( $.event.special.swipe.eventInProgress ) {
          return;
        }
        $.event.special.swipe.eventInProgress = true;

        var stop,
          start = $.event.special.swipe.start( event ),
          origTarget = event.target,
          emitted = false;

        context.move = function( event ) {
          if ( !start ) {
            return;
          }

          stop = $.event.special.swipe.stop( event );
          if ( !emitted ) {
            emitted = $.event.special.swipe.handleSwipe( start, stop, thisObject, origTarget );
            if ( emitted ) {

              // Reset the context to make way for the next swipe event
              $.event.special.swipe.eventInProgress = false;
            }
          }
          // prevent scrolling
          if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
            event.preventDefault();
          }
        };

        context.stop = function() {
            emitted = true;

            // Reset the context to make way for the next swipe event
            $.event.special.swipe.eventInProgress = false;
            $document.off( touchMoveEvent, context.move );
            context.move = null;
        };

        $document.on( touchMoveEvent, context.move )
          .one( touchStopEvent, context.stop );
      };
      $this.on( touchStartEvent, context.start );
    },

    teardown: function() {
      var events, context;

      events = $.data( this, "mobile-events" );
      if ( events ) {
        context = events.swipe;
        delete events.swipe;
        events.length--;
        if ( events.length === 0 ) {
          $.removeData( this, "mobile-events" );
        }
      }

      if ( context ) {
        if ( context.start ) {
          $( this ).off( touchStartEvent, context.start );
        }
        if ( context.move ) {
          $document.off( touchMoveEvent, context.move );
        }
        if ( context.stop ) {
          $document.off( touchStopEvent, context.stop );
        }
      }
    }
  };
  $.each({
    scrollstop: "scrollstart",
    taphold: "tap",
    swipeleft: "swipe",
    swiperight: "swipe"
  }, function( event, sourceEvent ) {

    $.event.special[ event ] = {
      setup: function() {
        $( this ).bind( sourceEvent, $.noop );
      },
      teardown: function() {
        $( this ).unbind( sourceEvent );
      }
    };
  });

})( jQuery, this );

}));


/**
 * JQuery Mouse Wheel
 *
 *! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});


/**
 * JQuery Smooth Scroll
 *
 * jquery.simplr.smoothscroll
 * version 1.0
 * copyright (c) 2012 https://github.com/simov/simplr-smoothscroll
 * licensed under MIT
 * requires jquery.mousewheel - https://github.com/brandonaaron/jquery-mousewheel/
 */

;(function ($) {
  'use strict'

  $.srSmoothscroll = function (options) {

    var self = $.extend({
      step: 75,
      speed: 300,
      ease: 'swing',
      target: $('body'),
      container: $(window)
    }, options || {})

    // private fields & init
    var container = self.container
      , top = 0
      , step = self.step
      , viewport = container.height()
      , wheel = false

    var target
    if (self.target.selector == 'body') {
      target = (navigator.userAgent.indexOf('AppleWebKit') !== -1) ? self.target : $('html')
    } else {
      target = container
    }

    // events
    self.target.mousewheel(function (event, delta) {

      wheel = true

      if (delta < 0) // down
        top = (top+viewport) >= self.target.outerHeight(true) ? top : top+=step

      else // up
        top = top <= 0 ? 0 : top-=step

      target.stop().animate({scrollTop: top}, self.speed, self.ease, function () {
        wheel = false
      })

      return false
    })

    container
      .on('resize', function (e) {
        viewport = container.height()
      })
      .on('scroll', function (e) {
        if (!wheel)
          top = container.scrollTop()
      })

  }
})(jQuery);






/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery),function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})}(jQuery),function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})}(jQuery),function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t)),this.dropped&&(n=this.dropped,this.dropped=!1);var r=this.element[0],i=!1;while(r&&(r=r.parentNode))r==document&&(i=!0);if(!i&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!n||this.options.revert=="valid"&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){var s=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo=="parent"?this.element[0].parentNode:n.appendTo),r[0]!=this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[t.containment=="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t.containment=="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(t.containment=="document"?0:e(window).scrollLeft())+e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(t.containment=="document"?0:e(window).scrollTop())+(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)&&t.containment.constructor!=Array){var n=e(t.containment),r=n[0];if(!r)return;var i=n.offset(),s=e(r).css("overflow")!="hidden";this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(s?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(s?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else t.containment.constructor==Array&&(this.containment=t.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName),s=t.pageX,o=t.pageY;if(this.originalPosition){var u;if(this.containment){if(this.relative_container){var a=this.relative_container.offset();u=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]}else u=this.containment;t.pageX-this.offset.click.left<u[0]&&(s=u[0]+this.offset.click.left),t.pageY-this.offset.click.top<u[1]&&(o=u[1]+this.offset.click.top),t.pageX-this.offset.click.left>u[2]&&(s=u[2]+this.offset.click.left),t.pageY-this.offset.click.top>u[3]&&(o=u[3]+this.offset.click.top)}if(n.grid){var f=n.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;o=u?f-this.offset.click.top<u[1]||f-this.offset.click.top>u[3]?f-this.offset.click.top<u[1]?f+n.grid[1]:f-n.grid[1]:f:f;var l=n.grid[0]?this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;s=u?l-this.offset.click.left<u[0]||l-this.offset.click.left>u[2]?l-this.offset.click.left<u[0]?l+n.grid[0]:l-n.grid[0]:l:l}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(e){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("draggable"),i=this,s=function(t){var n=this.offset.click.top,r=this.offset.click.left,i=this.positionAbs.top,s=this.positionAbs.left,o=t.height,u=t.width,a=t.top,f=t.left;return e.ui.isOver(i+n,s+r,a,f,o,u)};e.each(r.sortables,function(s){var o=!1,u=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!=u&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(u.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n){var r=e("body"),i=e(this).data("draggable").options;r.css("cursor")&&(i._cursor=r.css("cursor")),r.css("cursor",i.cursor)},stop:function(t,n){var r=e(this).data("draggable").options;r._cursor&&e("body").css("cursor",r._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(t,n){var r=e(this).data("draggable");r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"&&(r.overflowOffset=r.scrollParent.offset())},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=!1;if(r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"){if(!i.axis||i.axis!="x")r.overflowOffset.top+r.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop-i.scrollSpeed);if(!i.axis||i.axis!="y")r.overflowOffset.left+r.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!="x")t.pageY-e(document).scrollTop()<i.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!="y")t.pageX-e(document).scrollLeft()<i.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n){var r=e(this).data("draggable"),i=r.options;r.snapElements=[],e(i.snap.constructor!=String?i.snap.items||":data(draggable)":i.snap).each(function(){var t=e(this),n=t.offset();this!=r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=i.snapTolerance,o=n.offset.left,u=o+r.helperProportions.width,a=n.offset.top,f=a+r.helperProportions.height;for(var l=r.snapElements.length-1;l>=0;l--){var c=r.snapElements[l].left,h=c+r.snapElements[l].width,p=r.snapElements[l].top,d=p+r.snapElements[l].height;if(!(c-s<o&&o<h+s&&p-s<a&&a<d+s||c-s<o&&o<h+s&&p-s<f&&f<d+s||c-s<u&&u<h+s&&p-s<a&&a<d+s||c-s<u&&u<h+s&&p-s<f&&f<d+s)){r.snapElements[l].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=!1;continue}if(i.snapMode!="inner"){var v=Math.abs(p-f)<=s,m=Math.abs(d-a)<=s,g=Math.abs(c-u)<=s,y=Math.abs(h-o)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p-r.helperProportions.height,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h}).left-r.margins.left)}var b=v||m||g||y;if(i.snapMode!="outer"){var v=Math.abs(p-a)<=s,m=Math.abs(d-f)<=s,g=Math.abs(c-o)<=s,y=Math.abs(h-u)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d-r.helperProportions.height,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h-r.helperProportions.width}).left-r.margins.left)}!r.snapElements[l].snapping&&(v||m||g||y||b)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=v||m||g||y||b}}}),e.ui.plugin.add("draggable","stack",{start:function(t,n){var r=e(this).data("draggable").options,i=e.makeArray(e(r.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!i.length)return;var s=parseInt(i[0].style.zIndex)||0;e(i).each(function(e){this.style.zIndex=s+e}),this[0].style.zIndex=s+i.length}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})}(jQuery),function(e,t){e.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var t=this.options,n=t.accept;this.isover=0,this.isout=1,this.accept=e.isFunction(n)?n:function(e){return e.is(n)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];for(var n=0;n<t.length;n++)t[n]==this&&t.splice(n,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){t=="accept"&&(this.accept=e.isFunction(n)?n:function(e){return e.is(n)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))},_deactivate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))},_over:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))},_drop:function(t,n){var r=n||e.ui.ddmanager.current;if(!r||(r.currentItem||r.element)[0]==this.element[0])return!1;var i=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope==r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance))return i=!0,!1}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(t,n,r){if(!n.offset)return!1;var i=(t.positionAbs||t.position.absolute).left,s=i+t.helperProportions.width,o=(t.positionAbs||t.position.absolute).top,u=o+t.helperProportions.height,a=n.offset.left,f=a+n.proportions.width,l=n.offset.top,c=l+n.proportions.height;switch(r){case"fit":return a<=i&&s<=f&&l<=o&&u<=c;case"intersect":return a<i+t.helperProportions.width/2&&s-t.helperProportions.width/2<f&&l<o+t.helperProportions.height/2&&u-t.helperProportions.height/2<c;case"pointer":var h=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,p=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,d=e.ui.isOver(p,h,l,a,n.proportions.height,n.proportions.width);return d;case"touch":return(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c)&&(i>=a&&i<=f||s>=a&&s<=f||i<a&&s>f);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r=e.ui.ddmanager.droppables[t.options.scope]||[],i=n?n.type:null,s=(t.currentItem||t.element).find(":data(droppable)").andSelf();e:for(var o=0;o<r.length;o++){if(r[o].options.disabled||t&&!r[o].accept.call(r[o].element[0],t.currentItem||t.element))continue;for(var u=0;u<s.length;u++)if(s[u]==r[o].element[0]){r[o].proportions.height=0;continue e}r[o].visible=r[o].element.css("display")!="none";if(!r[o].visible)continue;i=="mousedown"&&r[o]._activate.call(r[o],n),r[o].offset=r[o].element.offset(),r[o].proportions={width:r[o].element[0].offsetWidth,height:r[o].element[0].offsetHeight}}},drop:function(t,n){var r=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,n))}),r},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)})},drag:function(t,n){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var r=e.ui.intersect(t,this,this.options.tolerance),i=!r&&this.isover==1?"isout":r&&this.isover==0?"isover":null;if(!i)return;var s;if(this.options.greedy){var o=this.options.scope,u=this.element.parents(":data(droppable)").filter(function(){return e.data(this,"droppable").options.scope===o});u.length&&(s=e.data(u[0],"droppable"),s.greedyChild=i=="isover"?1:0)}s&&i=="isover"&&(s.isover=0,s.isout=1,s._out.call(s,n)),this[i]=1,this[i=="isout"?"isover":"isout"]=0,this[i=="isover"?"_over":"_out"].call(this,n),s&&i=="isout"&&(s.isout=0,s.isover=1,s._over.call(s,n))})},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}}(jQuery),function(e,t){e.widget("ui.resizable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var t=this,n=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!n.aspectRatio,aspectRatio:n.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:n.helper||n.ghost||n.animate?n.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=n.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var r=this.handles.split(",");this.handles={};for(var i=0;i<r.length;i++){var s=e.trim(r[i]),o="ui-resizable-"+s,u=e('<div class="ui-resizable-handle '+o+'"></div>');u.css({zIndex:n.zIndex}),"se"==s&&u.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(u)}}this._renderAxis=function(t){t=t||this.element;for(var n in this.handles){this.handles[n].constructor==String&&(this.handles[n]=e(this.handles[n],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var r=e(this.handles[n],this.element),i=0;i=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth();var s=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");t.css(s,i),this._proportionallyResize()}if(!e(this.handles[n]).length)continue}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!t.resizing){if(this.className)var e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);t.axis=e&&e[1]?e[1]:"se"}}),n.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(n.disabled)return;e(this).removeClass("ui-resizable-autohide"),t._handles.show()}).mouseleave(function(){if(n.disabled)return;t.resizing||(e(this).addClass("ui-resizable-autohide"),t._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){t(this.element);var n=this.element;this.originalElement.css({position:n.css("position"),width:n.outerWidth(),height:n.outerHeight(),top:n.css("top"),left:n.css("left")}).insertAfter(n),n.remove()}return this.originalElement.css("resize",this.originalResizeStyle),t(this.originalElement),this},_mouseCapture:function(t){var n=!1;for(var r in this.handles)e(this.handles[r])[0]==t.target&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var r=this.options,i=this.element.position(),s=this.element;this.resizing=!0,this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()},(s.is(".ui-draggable")||/absolute/.test(s.css("position")))&&s.css({position:"absolute",top:i.top,left:i.left}),this._renderProxy();var o=n(this.helper.css("left")),u=n(this.helper.css("top"));r.containment&&(o+=e(r.containment).scrollLeft()||0,u+=e(r.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:o,top:u},this.size=this._helper?{width:s.outerWidth(),height:s.outerHeight()}:{width:s.width(),height:s.height()},this.originalSize=this._helper?{width:s.outerWidth(),height:s.outerHeight()}:{width:s.width(),height:s.height()},this.originalPosition={left:o,top:u},this.sizeDiff={width:s.outerWidth()-s.width(),height:s.outerHeight()-s.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof r.aspectRatio=="number"?r.aspectRatio:this.originalSize.width/this.originalSize.height||1;var a=e(".ui-resizable-"+this.axis).css("cursor");return e("body").css("cursor",a=="auto"?this.axis+"-resize":a),s.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(e){var t=this.helper,n=this.options,r={},i=this,s=this.originalMousePosition,o=this.axis,u=e.pageX-s.left||0,a=e.pageY-s.top||0,f=this._change[o];if(!f)return!1;var l=f.apply(this,[e,u,a]);this._updateVirtualBoundaries(e.shiftKey);if(this._aspectRatio||e.shiftKey)l=this._updateRatio(l,e);return l=this._respectSize(l,e),this._propagate("resize",e),t.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",e,this.ui()),!1},_mouseStop:function(t){this.resizing=!1;var n=this.options,r=this;if(this._helper){var i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:r.sizeDiff.height,u=s?0:r.sizeDiff.width,a={width:r.helper.width()-u,height:r.helper.height()-o},f=parseInt(r.element.css("left"),10)+(r.position.left-r.originalPosition.left)||null,l=parseInt(r.element.css("top"),10)+(r.position.top-r.originalPosition.top)||null;n.animate||this.element.css(e.extend(a,{top:l,left:f})),r.helper.height(r.size.height),r.helper.width(r.size.width),this._helper&&!n.animate&&this._proportionallyResize()}return e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t=this.options,n,i,s,o,u;u={minWidth:r(t.minWidth)?t.minWidth:0,maxWidth:r(t.maxWidth)?t.maxWidth:Infinity,minHeight:r(t.minHeight)?t.minHeight:0,maxHeight:r(t.maxHeight)?t.maxHeight:Infinity};if(this._aspectRatio||e)n=u.minHeight*this.aspectRatio,s=u.minWidth/this.aspectRatio,i=u.maxHeight*this.aspectRatio,o=u.maxWidth/this.aspectRatio,n>u.minWidth&&(u.minWidth=n),s>u.minHeight&&(u.minHeight=s),i<u.maxWidth&&(u.maxWidth=i),o<u.maxHeight&&(u.maxHeight=o);this._vBoundaries=u},_updateCache:function(e){var t=this.options;this.offset=this.helper.offset(),r(e.left)&&(this.position.left=e.left),r(e.top)&&(this.position.top=e.top),r(e.height)&&(this.size.height=e.height),r(e.width)&&(this.size.width=e.width)},_updateRatio:function(e,t){var n=this.options,i=this.position,s=this.size,o=this.axis;return r(e.height)?e.width=e.height*this.aspectRatio:r(e.width)&&(e.height=e.width/this.aspectRatio),o=="sw"&&(e.left=i.left+(s.width-e.width),e.top=null),o=="nw"&&(e.top=i.top+(s.height-e.height),e.left=i.left+(s.width-e.width)),e},_respectSize:function(e,t){var n=this.helper,i=this._vBoundaries,s=this._aspectRatio||t.shiftKey,o=this.axis,u=r(e.width)&&i.maxWidth&&i.maxWidth<e.width,a=r(e.height)&&i.maxHeight&&i.maxHeight<e.height,f=r(e.width)&&i.minWidth&&i.minWidth>e.width,l=r(e.height)&&i.minHeight&&i.minHeight>e.height;f&&(e.width=i.minWidth),l&&(e.height=i.minHeight),u&&(e.width=i.maxWidth),a&&(e.height=i.maxHeight);var c=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,p=/sw|nw|w/.test(o),d=/nw|ne|n/.test(o);f&&p&&(e.left=c-i.minWidth),u&&p&&(e.left=c-i.maxWidth),l&&d&&(e.top=h-i.minHeight),a&&d&&(e.top=h-i.maxHeight);var v=!e.width&&!e.height;return v&&!e.left&&e.top?e.top=null:v&&!e.top&&e.left&&(e.left=null),e},_proportionallyResize:function(){var t=this.options;if(!this._proportionallyResizeElements.length)return;var n=this.helper||this.element;for(var r=0;r<this._proportionallyResizeElements.length;r++){var i=this._proportionallyResizeElements[r];if(!this.borderDif){var s=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],o=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];this.borderDif=e.map(s,function(e,t){var n=parseInt(e,10)||0,r=parseInt(o[t],10)||0;return n+r})}i.css({height:n.height()-this.borderDif[0]-this.borderDif[2]||0,width:n.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var r=e.ui.ie6?1:0,i=e.ui.ie6?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+i,height:this.element.outerHeight()+i,position:"absolute",left:this.elementOffset.left-r+"px",top:this.elementOffset.top-r+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(e,t,n){return{width:this.originalSize.width+t}},w:function(e,t,n){var r=this.options,i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,n){var r=this.options,i=this.originalSize,s=this.originalPosition;return{top:s.top+n,height:i.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","alsoResize",{start:function(t,n){var r=e(this).data("resizable"),i=r.options,s=function(t){e(t).each(function(){var t=e(this);t.data("resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};typeof i.alsoResize=="object"&&!i.alsoResize.parentNode?i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)}):s(i.alsoResize)},resize:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);n&&n>=0&&(s[t]=n||null)}),t.css(s)})};typeof i.alsoResize=="object"&&!i.alsoResize.nodeType?e.each(i.alsoResize,function(e,t){a(e,t)}):a(i.alsoResize)},stop:function(t,n){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","animate",{stop:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r._proportionallyResizeElements,o=s.length&&/textarea/i.test(s[0].nodeName),u=o&&e.ui.hasScroll(s[0],"left")?0:r.sizeDiff.height,a=o?0:r.sizeDiff.width,f={width:r.size.width-a,height:r.size.height-u},l=parseInt(r.element.css("left"),10)+(r.position.left-r.originalPosition.left)||null,c=parseInt(r.element.css("top"),10)+(r.position.top-r.originalPosition.top)||null;r.element.animate(e.extend(f,c&&l?{top:c,left:l}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var n={width:parseInt(r.element.css("width"),10),height:parseInt(r.element.css("height"),10),top:parseInt(r.element.css("top"),10),left:parseInt(r.element.css("left"),10)};s&&s.length&&e(s[0]).css({width:n.width,height:n.height}),r._updateCache(n),r._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(t,r){var i=e(this).data("resizable"),s=i.options,o=i.element,u=s.containment,a=u instanceof e?u.get(0):/parent/.test(u)?o.parent().get(0):u;if(!a)return;i.containerElement=e(a);if(/document/.test(u)||u==document)i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight};else{var f=e(a),l=[];e(["Top","Right","Left","Bottom"]).each(function(e,t){l[e]=n(f.css("padding"+t))}),i.containerOffset=f.offset(),i.containerPosition=f.position(),i.containerSize={height:f.innerHeight()-l[3],width:f.innerWidth()-l[1]};var c=i.containerOffset,h=i.containerSize.height,p=i.containerSize.width,d=e.ui.hasScroll(a,"left")?a.scrollWidth:p,v=e.ui.hasScroll(a)?a.scrollHeight:h;i.parentData={element:a,left:c.left,top:c.top,width:d,height:v}}},resize:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.containerSize,o=r.containerOffset,u=r.size,a=r.position,f=r._aspectRatio||t.shiftKey,l={top:0,left:0},c=r.containerElement;c[0]!=document&&/static/.test(c.css("position"))&&(l=o),a.left<(r._helper?o.left:0)&&(r.size.width=r.size.width+(r._helper?r.position.left-o.left:r.position.left-l.left),f&&(r.size.height=r.size.width/r.aspectRatio),r.position.left=i.helper?o.left:0),a.top<(r._helper?o.top:0)&&(r.size.height=r.size.height+(r._helper?r.position.top-o.top:r.position.top),f&&(r.size.width=r.size.height*r.aspectRatio),r.position.top=r._helper?o.top:0),r.offset.left=r.parentData.left+r.position.left,r.offset.top=r.parentData.top+r.position.top;var h=Math.abs((r._helper?r.offset.left-l.left:r.offset.left-l.left)+r.sizeDiff.width),p=Math.abs((r._helper?r.offset.top-l.top:r.offset.top-o.top)+r.sizeDiff.height),d=r.containerElement.get(0)==r.element.parent().get(0),v=/relative|absolute/.test(r.containerElement.css("position"));d&&v&&(h-=r.parentData.left),h+r.size.width>=r.parentData.width&&(r.size.width=r.parentData.width-h,f&&(r.size.height=r.size.width/r.aspectRatio)),p+r.size.height>=r.parentData.height&&(r.size.height=r.parentData.height-p,f&&(r.size.width=r.size.height*r.aspectRatio))},stop:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.position,o=r.containerOffset,u=r.containerPosition,a=r.containerElement,f=e(r.helper),l=f.offset(),c=f.outerWidth()-r.sizeDiff.width,h=f.outerHeight()-r.sizeDiff.height;r._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:l.left-u.left-o.left,width:c,height:h}),r._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:l.left-u.left-o.left,width:c,height:h})}}),e.ui.plugin.add("resizable","ghost",{start:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.size;r.ghost=r.originalElement.clone(),r.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof i.ghost=="string"?i.ghost:""),r.ghost.appendTo(r.helper)},resize:function(t,n){var r=e(this).data("resizable"),i=r.options;r.ghost&&r.ghost.css({position:"relative",height:r.size.height,width:r.size.width})},stop:function(t,n){var r=e(this).data("resizable"),i=r.options;r.ghost&&r.helper&&r.helper.get(0).removeChild(r.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.size,o=r.originalSize,u=r.originalPosition,a=r.axis,f=i._aspectRatio||t.shiftKey;i.grid=typeof i.grid=="number"?[i.grid,i.grid]:i.grid;var l=Math.round((s.width-o.width)/(i.grid[0]||1))*(i.grid[0]||1),c=Math.round((s.height-o.height)/(i.grid[1]||1))*(i.grid[1]||1);/^(se|s|e)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c):/^(ne)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c,r.position.top=u.top-c):/^(sw)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c,r.position.left=u.left-l):(r.size.width=o.width+l,r.size.height=o.height+c,r.position.top=u.top-c,r.position.left=u.left-l)}});var n=function(e){return parseInt(e,10)||0},r=function(e){return!isNaN(parseInt(e,10))}}(jQuery),function(e,t){e.widget("ui.selectable",e.ui.mouse,{version:"1.9.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var t=this;this.element.addClass("ui-selectable"),this.dragged=!1;var n;this.refresh=function(){n=e(t.options.filter,t.element[0]),n.addClass("ui-selectee"),n.each(function(){var t=e(this),n=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:n.left,top:n.top,right:n.left+t.outerWidth(),bottom:n.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=n.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var n=this;this.opos=[t.pageX,t.pageY];if(this.options.disabled)return;var r=this.options;this.selectees=e(r.filter,this.element[0]),this._trigger("start",t),e(r.appendTo).append(this.helper),this.helper.css({left:t.clientX,top:t.clientY,width:0,height:0}),r.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var r=e.data(this,"selectable-item");r.startselected=!0,!t.metaKey&&!t.ctrlKey&&(r.$element.removeClass("ui-selected"),r.selected=!1,r.$element.addClass("ui-unselecting"),r.unselecting=!0,n._trigger("unselecting",t,{unselecting:r.element}))}),e(t.target).parents().andSelf().each(function(){var r=e.data(this,"selectable-item");if(r){var i=!t.metaKey&&!t.ctrlKey||!r.$element.hasClass("ui-selected");return r.$element.removeClass(i?"ui-unselecting":"ui-selected").addClass(i?"ui-selecting":"ui-unselecting"),r.unselecting=!i,r.selecting=i,r.selected=i,i?n._trigger("selecting",t,{selecting:r.element}):n._trigger("unselecting",t,{unselecting:r.element}),!1}})},_mouseDrag:function(t){var n=this;this.dragged=!0;if(this.options.disabled)return;var r=this.options,i=this.opos[0],s=this.opos[1],o=t.pageX,u=t.pageY;if(i>o){var a=o;o=i,i=a}if(s>u){var a=u;u=s,s=a}return this.helper.css({left:i,top:s,width:o-i,height:u-s}),this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!a||a.element==n.element[0])return;var f=!1;r.tolerance=="touch"?f=!(a.left>o||a.right<i||a.top>u||a.bottom<s):r.tolerance=="fit"&&(f=a.left>i&&a.right<o&&a.top>s&&a.bottom<u),f?(a.selected&&(a.$element.removeClass("ui-selected"),a.selected=!1),a.unselecting&&(a.$element.removeClass("ui-unselecting"),a.unselecting=!1),a.selecting||(a.$element.addClass("ui-selecting"),a.selecting=!0,n._trigger("selecting",t,{selecting:a.element}))):(a.selecting&&((t.metaKey||t.ctrlKey)&&a.startselected?(a.$element.removeClass("ui-selecting"),a.selecting=!1,a.$element.addClass("ui-selected"),a.selected=!0):(a.$element.removeClass("ui-selecting"),a.selecting=!1,a.startselected&&(a.$element.addClass("ui-unselecting"),a.unselecting=!0),n._trigger("unselecting",t,{unselecting:a.element}))),a.selected&&!t.metaKey&&!t.ctrlKey&&!a.startselected&&(a.$element.removeClass("ui-selected"),a.selected=!1,a.$element.addClass("ui-unselecting"),a.unselecting=!0,n._trigger("unselecting",t,{unselecting:a.element})))}),!1},_mouseStop:function(t){var n=this;this.dragged=!1;var r=this.options;return e(".ui-unselecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-unselecting"),r.unselecting=!1,r.startselected=!1,n._trigger("unselected",t,{unselected:r.element})}),e(".ui-selecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-selecting").addClass("ui-selected"),r.selecting=!1,r.selected=!0,r.startselected=!0,n._trigger("selected",t,{selected:r.element})}),this._trigger("stop",t),this.helper.remove(),!1}})}(jQuery),function(e,t){e.widget("ui.sortable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,n){t==="disabled"?(this.options[t]=n,this.widget().toggleClass("ui-sortable-disabled",!!n)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,n){var r=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(t);var i=null,s=e(t.target).parents().each(function(){if(e.data(this,r.widgetName+"-item")==r)return i=e(this),!1});e.data(t.target,r.widgetName+"-item")==r&&(i=e(t.target));if(!i)return!1;if(this.options.handle&&!n){var o=!1;e(this.options.handle,i).find("*").andSelf().each(function(){this==t.target&&(o=!0)});if(!o)return!1}return this.currentItem=i,this._removeCurrentsFromItems(),!0},_mouseStart:function(t,n,r){var i=this.options;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),i.containment&&this._setContainment(),i.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",i.cursor)),i.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",i.opacity)),i.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",i.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!r)for(var s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var n=this.options,r=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<n.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+n.scrollSpeed:t.pageY-this.overflowOffset.top<n.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-n.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<n.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+n.scrollSpeed:t.pageX-this.overflowOffset.left<n.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-n.scrollSpeed)):(t.pageY-e(document).scrollTop()<n.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<n.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+n.scrollSpeed)),t.pageX-e(document).scrollLeft()<n.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<n.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+n.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var i=this.items.length-1;i>=0;i--){var s=this.items[i],o=s.item[0],u=this._intersectsWithPointer(s);if(!u)continue;if(s.instance!==this.currentContainer)continue;if(o!=this.currentItem[0]&&this.placeholder[u==1?"next":"prev"]()[0]!=o&&!e.contains(this.placeholder[0],o)&&(this.options.type=="semi-dynamic"?!e.contains(this.element[0],o):!0)){this.direction=u==1?"down":"up";if(this.options.tolerance!="pointer"&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,n){if(!t)return;e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t);if(this.options.revert){var r=this,i=this.placeholder.offset();this.reverting=!0,e(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){r._clear(t)})}else this._clear(t,n);return!1},cancel:function(){if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[-=_](.+)/);n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!r.length&&t.key&&r.push(t.key+"="),r.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")}),r},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.offset.click.left,c=r+f>u&&r+f<a&&t+l>s&&t+l<o;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?c:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a},_intersectsWithPointer:function(t){var n=this.options.axis==="x"||e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),r=this.options.axis==="y"||e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),i=n&&r,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return i?this.floating?o&&o=="right"||s=="down"?2:1:s&&(s=="down"?2:1):!1},_intersectsWithSides:function(t){var n=e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),r=e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?s=="right"&&r||s=="left"&&!r:i&&(i=="down"&&n||i=="up"&&!n)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return e!=0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return e!=0&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor==String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n=[],r=[],i=this._connectWith();if(i&&t)for(var s=i.length-1;s>=0;s--){var o=e(i[s]);for(var u=o.length-1;u>=0;u--){var a=e.data(o[u],this.widgetName);a&&a!=this&&!a.options.disabled&&r.push([e.isFunction(a.options.items)?a.options.items.call(a.element):e(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a])}}r.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var s=r.length-1;s>=0;s--)r[s][0].each(function(){n.push(this)});return e(n)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var n=0;n<t.length;n++)if(t[n]==e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var n=this.items,r=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],i=this._connectWith();if(i&&this.ready)for(var s=i.length-1;s>=0;s--){var o=e(i[s]);for(var u=o.length-1;u>=0;u--){var a=e.data(o[u],this.widgetName);a&&a!=this&&!a.options.disabled&&(r.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a))}}for(var s=r.length-1;s>=0;s--){var f=r[s][1],l=r[s][0];for(var u=0,c=l.length;u<c;u++){var h=e(l[u]);h.data(this.widgetName+"-item",f),n.push({item:h,instance:f,width:0,height:0,left:0,top:0})}}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var n=this.items.length-1;n>=0;n--){var r=this.items[n];if(r.instance!=this.currentContainer&&this.currentContainer&&r.item[0]!=this.currentItem[0])continue;var i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item;t||(r.width=i.outerWidth(),r.height=i.outerHeight());var s=i.offset();r.left=s.left,r.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var n=this.containers.length-1;n>=0;n--){var s=this.containers[n].element.offset();this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight()}return this},_createPlaceholder:function(t){t=t||this;var n=t.options;if(!n.placeholder||n.placeholder.constructor==String){var r=n.placeholder;n.placeholder={element:function(){var n=e(document.createElement(t.currentItem[0].nodeName)).addClass(r||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return r||(n.style.visibility="hidden"),n},update:function(e,i){if(r&&!n.forcePlaceholderSize)return;i.height()||i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}}}t.placeholder=e(n.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),n.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var n=null,r=null;for(var i=this.containers.length-1;i>=0;i--){if(e.contains(this.currentItem[0],this.containers[i].element[0]))continue;if(this._intersectsWith(this.containers[i].containerCache)){if(n&&e.contains(this.containers[i].element[0],n.element[0]))continue;n=this.containers[i],r=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0)}if(!n)return;if(this.containers.length===1)this.containers[r]._trigger("over",t,this._uiHash(this)),this.containers[r].containerCache.over=1;else{var s=1e4,o=null,u=this.containers[r].floating?"left":"top",a=this.containers[r].floating?"width":"height",f=this.positionAbs[u]+this.offset.click[u];for(var l=this.items.length-1;l>=0;l--){if(!e.contains(this.containers[r].element[0],this.items[l].item[0]))continue;if(this.items[l].item[0]==this.currentItem[0])continue;var c=this.items[l].item.offset()[u],h=!1;Math.abs(c-f)>Math.abs(c+this.items[l][a]-f)&&(h=!0,c+=this.items[l][a]),Math.abs(c-f)<s&&(s=Math.abs(c-f),o=this.items[l],this.direction=h?"up":"down")}if(!o&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[r],o?this._rearrange(t,o,null,!0):this._rearrange(t,null,this.containers[r].element,!0),this._trigger("change",t,this._uiHash()),this.containers[r]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[r]._trigger("over",t,this._uiHash(this)),this.containers[r].containerCache.over=1}},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper=="clone"?this.currentItem.clone():this.currentItem;return r.parents("body").length||e(n.appendTo!="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0]),r[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(r[0].style.width==""||n.forceHelperSize)&&r.width(this.currentItem.width()),(r[0].style.height==""||n.forceHelperSize)&&r.height(this.currentItem.height()),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)){var n=e(t.containment)[0],r=e(t.containment).offset(),i=e(n).css("overflow")!="hidden";this.containment=[r.left+(parseInt(e(n).css("borderLeftWidth"),10)||0)+(parseInt(e(n).css("paddingLeft"),10)||0)-this.margins.left,r.top+(parseInt(e(n).css("borderTopWidth"),10)||0)+(parseInt(e(n).css("paddingTop"),10)||0)-this.margins.top,r.left+(i?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(e(n).css("borderLeftWidth"),10)||0)-(parseInt(e(n).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,r.top+(i?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(e(n).css("borderTopWidth"),10)||0)-(parseInt(e(n).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var s=t.pageX,o=t.pageY;if(this.originalPosition){this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top));if(n.grid){var u=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1];o=this.containment?u-this.offset.click.top<this.containment[1]||u-this.offset.click.top>this.containment[3]?u-this.offset.click.top<this.containment[1]?u+n.grid[1]:u-n.grid[1]:u:u;var a=this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0];s=this.containment?a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2]?a-this.offset.click.left<this.containment[0]?a+n.grid[0]:a-n.grid[0]:a:a}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_rearrange:function(e,t,n,r){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var i=this.counter;this._delay(function(){i==this.counter&&this.refreshPositions(!r)})},_clear:function(t,n){this.reverting=!1;var r=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var i in this._storedCSS)if(this._storedCSS[i]=="auto"||this._storedCSS[i]=="static")this._storedCSS[i]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!n&&r.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!n&&r.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(n||(r.push(function(e){this._trigger("remove",e,this._uiHash())}),r.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),r.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))));for(var i=this.containers.length-1;i>=0;i--)n||r.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(r.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this._uiHash());for(var i=0;i<r.length;i++)r[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}n||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!n){for(var i=0;i<r.length;i++)r[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})}(jQuery),jQuery.effects||function(e,t){var n=e.uiBackCompat!==!1,r="ui-effects-";e.effects={effect:{}},function(t,n){function p(e,t,n){var r=a[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function d(e){var n=o(),r=n._rgba=[];return e=e.toLowerCase(),h(s,function(t,i){var s,o=i.re.exec(e),a=o&&i.parse(o),f=i.space||"rgba";if(a)return s=n[f](a),n[u[f].cache]=s[u[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&t.extend(r,c.transparent),n):c[e]}function v(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),i=/^([\-+])=\s*(\d+\.?\d*)/,s=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],o=t.Color=function(e,n,r,i){return new t.Color.fn.parse(e,n,r,i)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},a={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},f=o.support={},l=t("<p>")[0],c,h=t.each;l.style.cssText="background-color:rgba(1,1,1,.5)",f.rgba=l.style.backgroundColor.indexOf("rgba")>-1,h(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),o.fn=t.extend(o.prototype,{parse:function(r,i,s,a){if(r===n)return this._rgba=[null,null,null,null],this;if(r.jquery||r.nodeType)r=t(r).css(i),i=n;var f=this,l=t.type(r),v=this._rgba=[];i!==n&&(r=[r,i,s,a],l="array");if(l==="string")return this.parse(d(r)||c._default);if(l==="array")return h(u.rgba.props,function(e,t){v[t.idx]=p(r[t.idx],t)}),this;if(l==="object")return r instanceof o?h(u,function(e,t){r[t.cache]&&(f[t.cache]=r[t.cache].slice())}):h(u,function(t,n){var i=n.cache;h(n.props,function(e,t){if(!f[i]&&n.to){if(e==="alpha"||r[e]==null)return;f[i]=n.to(f._rgba)}f[i][t.idx]=p(r[e],t,!0)}),f[i]&&e.inArray(null,f[i].slice(0,3))<0&&(f[i][3]=1,n.from&&(f._rgba=n.from(f[i])))}),this},is:function(e){var t=o(e),n=!0,r=this;return h(u,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],h(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return h(u,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=o(e),r=n._space(),i=u[r],s=this.alpha()===0?o("transparent"):this,f=s[i.cache]||i.to(s._rgba),l=f.slice();return n=n[i.cache],h(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],u=a[r.type]||{};if(o===null)return;s===null?l[i]=o:(u.mod&&(o-s>u.mod/2?s+=u.mod:s-o>u.mod/2&&(s-=u.mod)),l[i]=p((o-s)*t+s,r))}),this[r](l)},blend:function(e){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=o(e)._rgba;return o(t.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var e="rgba(",n=t.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),e="rgb("),e+n.join()+")"},toHslaString:function(){var e="hsla(",n=t.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),e="hsl("),e+n.join()+")"},toHexString:function(e){var n=this._rgba.slice(),r=n.pop();return e&&n.push(~~(r*255)),"#"+t.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),o.fn.parse.prototype=o.fn,u.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,f===0||f===1?c=f:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},u.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(v(o,s,t+1/3)*255),Math.round(v(o,s,t)*255),Math.round(v(o,s,t-1/3)*255),i]},h(u,function(e,r){var s=r.props,u=r.cache,a=r.to,f=r.from;o.fn[e]=function(e){a&&!this[u]&&(this[u]=a(this._rgba));if(e===n)return this[u].slice();var r,i=t.type(e),l=i==="array"||i==="object"?e:arguments,c=this[u].slice();return h(s,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=c[t.idx]),c[t.idx]=p(n,t)}),f?(r=o(f(c)),r[u]=c,r):o(c)},h(s,function(n,r){if(o.fn[n])return;o.fn[n]=function(s){var o=t.type(s),u=n==="alpha"?this._hsla?"hsla":"rgba":e,a=this[u](),f=a[r.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=t.type(s)),s==null&&r.empty?this:(o==="string"&&(l=i.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[r.idx]=s,this[u](a)))}})}),h(r,function(e,n){t.cssHooks[n]={set:function(e,r){var i,s,u="";if(t.type(r)!=="string"||(i=d(r))){r=o(i||r);if(!f.rgba&&r._rgba[3]!==1){s=n==="backgroundColor"?e.parentNode:e;while((u===""||u==="transparent")&&s&&s.style)try{u=t.css(s,"backgroundColor"),s=s.parentNode}catch(a){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{e.style[n]=r}catch(l){}}},t.fx.step[n]=function(e){e.colorInit||(e.start=o(e.elem,n),e.end=o(e.end),e.colorInit=!0),t.cssHooks[n].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return h(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},c=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var t=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,n={},r,i;if(t&&t.length&&t[0]&&t[t[0]]){i=t.length;while(i--)r=t[i],typeof t[r]=="string"&&(n[e.camelCase(r)]=t[r])}else for(r in t)typeof t[r]=="string"&&(n[r]=t[r]);return n}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").andSelf():r;f=f.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i.call(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=jQuery.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function i(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function s(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]?n&&e.effects[t]?!1:!0:!1}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var n=0;n<t.length;n++)t[n]!==null&&e.data(r+t[n],e[0].style[t[n]])},restore:function(e,n){var i,s;for(s=0;s<n.length;s++)n[s]!==null&&(i=e.data(r+n[s]),i===t&&(i=""),e.css(n[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function a(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,s=t.mode;(r.is(":hidden")?s==="hide":s==="show")?u():o.call(r[0],t,u)}var t=i.apply(this,arguments),r=t.mode,s=t.queue,o=e.effects.effect[t.effect],u=!o&&n&&e.effects[t.effect];return e.fx.off||!o&&!u?r?this[r](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):o?s===!1?this.each(a):this.queue(s||"fx",a):u.call(this,{options:t,duration:t.duration,callback:t.complete,mode:t.mode})},_show:e.fn.show,show:function(e){if(s(e))return this._show.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(s(e))return this._hide.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(s(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery),function(e,t){var n=0,r={},i={};r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="hide",i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.9.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.accordionId="ui-accordion-"+(this.element.attr("id")||++n),r=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset"),this.headers=this.element.find(r.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this._hoverable(this.headers),this._focusable(this.headers),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),!r.collapsible&&(r.active===!1||r.active==null)&&(r.active=0),r.active<0&&(r.active+=this.headers.length),this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),this.active.next().addClass("ui-accordion-content-active").show(),this._createIcons(),this.refresh(),this.element.attr("role","tablist"),this.headers.attr("role","tab").each(function(n){var r=e(this),i=r.attr("id"),s=r.next(),o=s.attr("id");i||(i=t+"-header-"+n,r.attr("id",i)),o||(o=t+"-panel-"+n,s.attr("id",o)),r.attr("aria-controls",o),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._on(this.headers,{keydown:"_keydown"}),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._setupEvents(r.event)},_getCreateEventData:function(){return{header:this.active,content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this.options.heightStyle!=="content"&&e.css("height","")},_setOption:function(e,t){if(e==="active"){this._activate(t);return}e==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),e==="collapsible"&&!t&&this.options.active===!1&&this._activate(0),e==="icons"&&(this._destroyIcons(),t&&this._createIcons()),e==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)},_keydown:function(t){if(t.altKey||t.ctrlKey)return;var n=e.ui.keyCode,r=this.headers.length,i=this.headers.index(t.target),s=!1;switch(t.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(i+1)%r];break;case n.LEFT:case n.UP:s=this.headers[(i-1+r)%r];break;case n.SPACE:case n.ENTER:this._eventHandler(t);break;case n.HOME:s=this.headers[0];break;case n.END:s=this.headers[r-1]}s&&(e(t.target).attr("tabIndex",-1),e(s).attr("tabIndex",0),s.focus(),t.preventDefault())},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t,n,r=this.options.heightStyle,i=this.element.parent();r==="fill"?(e.support.minHeight||(n=i.css("overflow"),i.css("overflow","hidden")),t=i.height(),this.element.siblings(":visible").each(function(){var n=e(this),r=n.css("position");if(r==="absolute"||r==="fixed")return;t-=n.outerHeight(!0)}),n&&i.css("overflow",n),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):r==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var n=this._findActive(t)[0];if(n===this.active[0])return;n=n||this.active[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return typeof t=="number"?this.headers.eq(t):e()},_setupEvents:function(t){var n={};if(!t)return;e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._on(this.headers,n)},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i[0]===r[0],o=s&&n.collapsible,u=o?e():i.next(),a=r.next(),f={oldHeader:r,oldPanel:a,newHeader:o?e():i,newPanel:u};t.preventDefault();if(s&&!n.collapsible||this._trigger("beforeActivate",t,f)===!1)return;n.active=o?!1:this.headers.index(i),this.active=s?e():i,this._toggle(f),r.removeClass("ui-accordion-header-active ui-state-active"),n.icons&&r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),s||(i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),n.icons&&i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),i.next().addClass("ui-accordion-content-active"))},_toggle:function(t){var n=t.newPanel,r=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=n,this.prevHide=r,this.options.animate?this._animate(n,r,t):(r.hide(),n.show(),this._toggleComplete(t)),r.attr({"aria-expanded":"false","aria-hidden":"true"}),r.prev().attr("aria-selected","false"),n.length&&r.length?r.prev().attr("tabIndex",-1):n.length&&this.headers.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,n){var s,o,u,a=this,f=0,l=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},h=l&&c.down||c,p=function(){a._toggleComplete(n)};typeof h=="number"&&(u=h),typeof h=="string"&&(o=h),o=o||h.easing||c.easing,u=u||h.duration||c.duration;if(!t.length)return e.animate(i,u,o,p);if(!e.length)return t.animate(r,u,o,p);s=e.show().outerHeight(),t.animate(r,{duration:u,easing:o,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(i,{duration:u,easing:o,complete:p,step:function(e,n){n.now=Math.round(e),n.prop!=="height"?f+=n.now:a.options.heightStyle!=="content"&&(n.now=Math.round(s-t.outerHeight()-f),f=0)}})},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.uiBackCompat!==!1&&(function(e,t){e.extend(t.options,{navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}});var n=t._create;t._create=function(){if(this.options.navigation){var t=this,r=this.element.find(this.options.header),i=r.next(),s=r.add(i).find("a").filter(this.options.navigationFilter)[0];s&&r.add(i).each(function(n){if(e.contains(this,s))return t.options.active=Math.floor(n/2),!1})}n.call(this)}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options,{heightStyle:null,autoHeight:!0,clearStyle:!1,fillSpace:!1});var n=t._create,r=t._setOption;e.extend(t,{_create:function(){this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle(),n.call(this)},_setOption:function(e){if(e==="autoHeight"||e==="clearStyle"||e==="fillSpace")this.options.heightStyle=this._mergeHeightStyle();r.apply(this,arguments)},_mergeHeightStyle:function(){var e=this.options;if(e.fillSpace)return"fill";if(e.clearStyle)return"content";if(e.autoHeight)return"auto"}})}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});var n=t._createIcons;t._createIcons=function(){this.options.icons&&(this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected),n.call(this)}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){t.activate=t._activate;var n=t._findActive;t._findActive=function(e){return e===-1&&(e=!1),e&&typeof e!="number"&&(e=this.headers.index(this.headers.filter(e)),e===-1&&(e=!1)),n.call(this,e)}}(jQuery,jQuery.ui.accordion.prototype),jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh,function(e,t){e.extend(t.options,{change:null,changestart:null});var n=t._trigger;t._trigger=function(e,t,r){var i=n.apply(this,arguments);return i?(e==="beforeActivate"?i=n.call(this,"changestart",t,{oldHeader:r.oldHeader,oldContent:r.oldPanel,newHeader:r.newHeader,newContent:r.newPanel}):e==="activate"&&(i=n.call(this,"change",t,{oldHeader:r.oldHeader,oldContent:r.oldPanel,newHeader:r.newHeader,newContent:r.newPanel})),i):!1}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options,{animate:null,animated:"slide"});var n=t._create;t._create=function(){var e=this.options;e.animate===null&&(e.animated?e.animated==="slide"?e.animate=300:e.animated==="bounceslide"?e.animate={duration:200,down:{easing:"easeOutBounce",duration:1e3}}:e.animate=e.animated:e.animate=!1),n.call(this)}}(jQuery,jQuery.ui.accordion.prototype))}(jQuery),function(e,t){var n=0;e.widget("ui.autocomplete",{version:"1.9.2",defaultElement:"<input>",options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,n,r;this.isMultiLine=this._isMultiLine(),this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;return}t=!1,r=!1,n=!1;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);break;case s.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case s.UP:t=!0,this._keyEvent("previous",i);break;case s.DOWN:t=!0,this._keyEvent("next",i);break;case s.ENTER:case s.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case s.TAB:this.menu.active&&this.menu.select(i);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:n=!0,this._searchTimeout(i)}},keypress:function(r){if(t){t=!1,r.preventDefault();return}if(n)return;var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r)}},input:function(e){if(r){r=!1,e.preventDefault();return}this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:e(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()})})},menufocus:function(t,n){if(this.isNewMenu){this.isNewMenu=!1;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});return}}var r=n.item.data("ui-autocomplete-item")||n.item.data("item.autocomplete");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item")||t.item.data("item.autocomplete"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),e.fn.bgiframe&&this.menu.element.bgiframe(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this.document.find(t||"body")[0]),e==="disabled"&&t&&this.xhr&&this.xhr.abort()},_isMultiLine:function(){return this.element.is("textarea")?!0:this.element.is("input")?!1:this.element.prop("isContentEditable")},_initSource:function(){var t,n,r=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))}):typeof this.options.source=="string"?(n=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){e=e!=null?e:this._value(),this.term=this._value();if(e.length<this.options.minLength)return this.close(t);if(this._trigger("search",t)===!1)return;return this._search(e)},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,t=++n;return function(r){t===n&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var n=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(n,t),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").append(e("<a>").text(n.label)).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term),this.menu.blur();return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(e,t),t.preventDefault()}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;e&&e.length?t=this.options.messages.results(e.length):t=this.options.messages.noResults,this.liveRegion.text(t)}})}(jQuery),function(e,t){var n,r,i,s,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},l=function(t){var n=t.name,r=t.form,i=e([]);return n&&(r?i=e(r).find("[name='"+n+"']"):i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.9.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,u=this.options,a=this.type==="checkbox"||this.type==="radio",c=a?"":"ui-state-active",h="ui-state-focus";u.label===null&&(u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled)return;this===n&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled)return;e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){u.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(h)}),a&&(this.element.bind("change"+this.eventNamespace,function(){if(s)return;t.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(u.disabled)return;s=!1,r=e.pageX,i=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(u.disabled)return;if(r!==e.pageX||i!==e.pageY)s=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).toggleClass("ui-state-active"),t.buttonElement.attr("aria-pressed",t.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).addClass("ui-state-active"),n=this,t.document.one("mouseup",function(){n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",u.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){t?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(a),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,s=[];r.primary||r.secondary?(this.options.text&&s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(s.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):s.push("ui-button-text-only"),t.addClass(s.join(" "))}}),e.widget("ui.buttonset",{version:"1.9.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(e){var t="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(t,"mouseout",function(){$(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).removeClass("ui-datepicker-next-hover")}).delegate(t,"mouseover",function(){$.datepicker._isDisabledDatepicker(instActive.inline?e.parent()[0]:instActive.input[0])||($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),$(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).addClass("ui-datepicker-next-hover"))})}function extendRemove(e,t){$.extend(e,t);for(var n in t)if(t[n]==null||t[n]==undefined)e[n]=t[n];return e}$.extend($.ui,{datepicker:{version:"1.9.2"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return extendRemove(this._defaults,e||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(e,t){var n=e[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:t,dpDiv:t?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(e,t){var n=$(e);t.append=$([]),t.trigger=$([]);if(n.hasClass(this.markerClassName))return;this._attachments(n,t),n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,n,r){t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)}),this._autoSize(t),$.data(e,PROP_NAME,t),t.settings.disabled&&this._disableDatepicker(e)},_attachments:function(e,t){var n=this._get(t,"appendText"),r=this._get(t,"isRTL");t.append&&t.append.remove(),n&&(t.append=$('<span class="'+this._appendClass+'">'+n+"</span>"),e[r?"before":"after"](t.append)),e.unbind("focus",this._showDatepicker),t.trigger&&t.trigger.remove();var i=this._get(t,"showOn");(i=="focus"||i=="both")&&e.focus(this._showDatepicker);if(i=="button"||i=="both"){var s=this._get(t,"buttonText"),o=this._get(t,"buttonImage");t.trigger=$(this._get(t,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:o,alt:s,title:s}):$('<button type="button"></button>').addClass(this._triggerClass).html(o==""?s:$("<img/>").attr({src:o,alt:s,title:s}))),e[r?"before":"after"](t.trigger),t.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==e[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=e[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(e[0])):$.datepicker._showDatepicker(e[0]),!1})}},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t=new Date(2009,11,20),n=this._get(e,"dateFormat");if(n.match(/[DM]/)){var r=function(e){var t=0,n=0;for(var r=0;r<e.length;r++)e[r].length>t&&(t=e[r].length,n=r);return n};t.setMonth(r(this._get(e,n.match(/MM/)?"monthNames":"monthNamesShort"))),t.setDate(r(this._get(e,n.match(/DD/)?"dayNames":"dayNamesShort"))+20-t.getDay())}e.input.attr("size",this._formatDate(e,t).length)}},_inlineDatepicker:function(e,t){var n=$(e);if(n.hasClass(this.markerClassName))return;n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker",function(e,n,r){t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)}),$.data(e,PROP_NAME,t),this._setDate(t,this._getDefaultDate(t),!0),this._updateDatepicker(t),this._updateAlternate(t),t.settings.disabled&&this._disableDatepicker(e),t.dpDiv.css("display","block")},_dialogDatepicker:function(e,t,n,r,i){var s=this._dialogInst;if(!s){this.uuid+=1;var o="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+o+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),s=this._dialogInst=this._newInst(this._dialogInput,!1),s.settings={},$.data(this._dialogInput[0],PROP_NAME,s)}extendRemove(s.settings,r||{}),t=t&&t.constructor==Date?this._formatDate(s,t):t,this._dialogInput.val(t),this._pos=i?i.length?i:[i.pageX,i.pageY]:null;if(!this._pos){var u=document.documentElement.clientWidth,a=document.documentElement.clientHeight,f=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[u/2-100+f,a/2-150+l]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),s.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,s),this},_destroyDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();$.removeData(e,PROP_NAME),r=="input"?(n.append.remove(),n.trigger.remove(),t.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(r=="div"||r=="span")&&t.removeClass(this.markerClassName).empty()},_enableDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();if(r=="input")e.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(r=="div"||r=="span"){var i=t.children("."+this._inlineClass);i.children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t})},_disableDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();if(r=="input")e.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(r=="div"||r=="span"){var i=t.children("."+this._inlineClass);i.children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t}),this._disabledInputs[this._disabledInputs.length]=e},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]==e)return!0;return!1},_getInst:function(e){try{return $.data(e,PROP_NAME)}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,t,n){var r=this._getInst(e);if(arguments.length==2&&typeof t=="string")return t=="defaults"?$.extend({},$.datepicker._defaults):r?t=="all"?$.extend({},r.settings):this._get(r,t):null;var i=t||{};typeof t=="string"&&(i={},i[t]=n);if(r){this._curInst==r&&this._hideDatepicker();var s=this._getDateDatepicker(e,!0),o=this._getMinMaxDate(r,"min"),u=this._getMinMaxDate(r,"max");extendRemove(r.settings,i),o!==null&&i.dateFormat!==undefined&&i.minDate===undefined&&(r.settings.minDate=this._formatDate(r,o)),u!==null&&i.dateFormat!==undefined&&i.maxDate===undefined&&(r.settings.maxDate=this._formatDate(r,u)),this._attachments($(e),r),this._autoSize(r),this._setDate(r,s),this._updateAlternate(r),this._updateDatepicker(r)}},_changeDatepicker:function(e,t,n){this._optionDatepicker(e,t,n)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var n=this._getInst(e);n&&(this._setDate(n,t),this._updateDatepicker(n),this._updateAlternate(n))},_getDateDatepicker:function(e,t){var n=this._getInst(e);return n&&!n.inline&&this._setDateFromField(n,t),n?this._getDate(n):null},_doKeyDown:function(e){var t=$.datepicker._getInst(e.target),n=!0,r=t.dpDiv.is(".ui-datepicker-rtl");t._keyEvent=!0;if($.datepicker._datepickerShowing)switch(e.keyCode){case 9:$.datepicker._hideDatepicker(),n=!1;break;case 13:var i=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",t.dpDiv);i[0]&&$.datepicker._selectDay(e.target,t.selectedMonth,t.selectedYear,i[0]);var s=$.datepicker._get(t,"onSelect");if(s){var o=$.datepicker._formatDate(t);s.apply(t.input?t.input[0]:null,[o,t])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&$.datepicker._clearDate(e.target),n=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&$.datepicker._gotoToday(e.target),n=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,r?1:-1,"D"),n=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,-7,"D"),n=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,r?-1:1,"D"),n=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,7,"D"),n=e.ctrlKey||e.metaKey;break;default:n=!1}else e.keyCode==36&&e.ctrlKey?$.datepicker._showDatepicker(this):n=!1;n&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var t=$.datepicker._getInst(e.target);if($.datepicker._get(t,"constrainInput")){var n=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat")),r=String.fromCharCode(e.charCode==undefined?e.keyCode:e.charCode);return e.ctrlKey||e.metaKey||r<" "||!n||n.indexOf(r)>-1}},_doKeyUp:function(e){var t=$.datepicker._getInst(e.target);if(t.input.val()!=t.lastVal)try{var n=$.datepicker.parseDate($.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,$.datepicker._getFormatConfig(t));n&&($.datepicker._setDateFromField(t),$.datepicker._updateAlternate(t),$.datepicker._updateDatepicker(t))}catch(r){$.datepicker.log(r)}return!0},_showDatepicker:function(e){e=e.target||e,e.nodeName.toLowerCase()!="input"&&(e=$("input",e.parentNode)[0]);if($.datepicker._isDisabledDatepicker(e)||$.datepicker._lastInput==e)return;var t=$.datepicker._getInst(e);$.datepicker._curInst&&$.datepicker._curInst!=t&&($.datepicker._curInst.dpDiv.stop(!0,!0),t&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var n=$.datepicker._get(t,"beforeShow"),r=n?n.apply(e,[e,t]):{};if(r===!1)return;extendRemove(t.settings,r),t.lastVal=null,$.datepicker._lastInput=e,$.datepicker._setDateFromField(t),$.datepicker._inDialog&&(e.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(e),$.datepicker._pos[1]+=e.offsetHeight);var i=!1;$(e).parents().each(function(){return i|=$(this).css("position")=="fixed",!i});var s={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,t.dpDiv.empty(),t.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(t),s=$.datepicker._checkOffset(t,s,i),t.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":i?"fixed":"absolute",display:"none",left:s.left+"px",top:s.top+"px"});if(!t.inline){var o=$.datepicker._get(t,"showAnim"),u=$.datepicker._get(t,"duration"),a=function(){var e=t.dpDiv.find("iframe.ui-datepicker-cover");if(!!e.length){var n=$.datepicker._getBorders(t.dpDiv);e.css({left:-n[0],top:-n[1],width:t.dpDiv.outerWidth(),height:t.dpDiv.outerHeight()})}};t.dpDiv.zIndex($(e).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&($.effects.effect[o]||$.effects[o])?t.dpDiv.show(o,$.datepicker._get(t,"showOptions"),u,a):t.dpDiv[o||"show"](o?u:null,a),(!o||!u)&&a(),t.input.is(":visible")&&!t.input.is(":disabled")&&t.input.focus(),$.datepicker._curInst=t}},_updateDatepicker:function(e){this.maxRows=4;var t=$.datepicker._getBorders(e.dpDiv);instActive=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var n=e.dpDiv.find("iframe.ui-datepicker-cover");!n.length||n.css({left:-t[0],top:-t[1],width:e.dpDiv.outerWidth(),height:e.dpDiv.outerHeight()}),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var r=this._getNumberOfMonths(e),i=r[1],s=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),i>1&&e.dpDiv.addClass("ui-datepicker-multi-"+i).css("width",s*i+"em"),e.dpDiv[(r[0]!=1||r[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e==$.datepicker._curInst&&$.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!=document.activeElement&&e.input.focus();if(e.yearshtml){var o=e.yearshtml;setTimeout(function(){o===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),o=e.yearshtml=null},0)}},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(e,t,n){var r=e.dpDiv.outerWidth(),i=e.dpDiv.outerHeight(),s=e.input?e.input.outerWidth():0,o=e.input?e.input.outerHeight():0,u=document.documentElement.clientWidth+(n?0:$(document).scrollLeft()),a=document.documentElement.clientHeight+(n?0:$(document).scrollTop());return t.left-=this._get(e,"isRTL")?r-s:0,t.left-=n&&t.left==e.input.offset().left?$(document).scrollLeft():0,t.top-=n&&t.top==e.input.offset().top+o?$(document).scrollTop():0,t.left-=Math.min(t.left,t.left+r>u&&u>r?Math.abs(t.left+r-u):0),t.top-=Math.min(t.top,t.top+i>a&&a>i?Math.abs(i+o):0),t},_findPos:function(e){var t=this._getInst(e),n=this._get(t,"isRTL");while(e&&(e.type=="hidden"||e.nodeType!=1||$.expr.filters.hidden(e)))e=e[n?"previousSibling":"nextSibling"];var r=$(e).offset();return[r.left,r.top]},_hideDatepicker:function(e){var t=this._curInst;if(!t||e&&t!=$.data(e,PROP_NAME))return;if(this._datepickerShowing){var n=this._get(t,"showAnim"),r=this._get(t,"duration"),i=function(){$.datepicker._tidyDialog(t)};$.effects&&($.effects.effect[n]||$.effects[n])?t.dpDiv.hide(n,$.datepicker._get(t,"showOptions"),r,i):t.dpDiv[n=="slideDown"?"slideUp":n=="fadeIn"?"fadeOut":"hide"](n?r:null,i),n||i(),this._datepickerShowing=!1;var s=this._get(t,"onClose");s&&s.apply(t.input?t.input[0]:null,[t.input?t.input.val():"",t]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(!$.datepicker._curInst)return;var t=$(e.target),n=$.datepicker._getInst(t[0]);(t[0].id!=$.datepicker._mainDivId&&t.parents("#"+$.datepicker._mainDivId).length==0&&!t.hasClass($.datepicker.markerClassName)&&!t.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||t.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=n)&&$.datepicker._hideDatepicker()},_adjustDate:function(e,t,n){var r=$(e),i=this._getInst(r[0]);if(this._isDisabledDatepicker(r[0]))return;this._adjustInstDate(i,t+(n=="M"?this._get(i,"showCurrentAtPos"):0),n),this._updateDatepicker(i)},_gotoToday:function(e){var t=$(e),n=this._getInst(t[0]);if(this._get(n,"gotoCurrent")&&n.currentDay)n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear;else{var r=new Date;n.selectedDay=r.getDate(),n.drawMonth=n.selectedMonth=r.getMonth(),n.drawYear=n.selectedYear=r.getFullYear()}this._notifyChange(n),this._adjustDate(t)},_selectMonthYear:function(e,t,n){var r=$(e),i=this._getInst(r[0]);i["selected"+(n=="M"?"Month":"Year")]=i["draw"+(n=="M"?"Month":"Year")]=parseInt(t.options[t.selectedIndex].value,10),this._notifyChange(i),this._adjustDate(r)},_selectDay:function(e,t,n,r){var i=$(e);if($(r).hasClass(this._unselectableClass)||this._isDisabledDatepicker(i[0]))return;var s=this._getInst(i[0]);s.selectedDay=s.currentDay=$("a",r).html(),s.selectedMonth=s.currentMonth=t,s.selectedYear=s.currentYear=n,this._selectDate(e,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear))},_clearDate:function(e){var t=$(e),n=this._getInst(t[0]);this._selectDate(t,"")},_selectDate:function(e,t){var n=$(e),r=this._getInst(n[0]);t=t!=null?t:this._formatDate(r),r.input&&r.input.val(t),this._updateAlternate(r);var i=this._get(r,"onSelect");i?i.apply(r.input?r.input[0]:null,[t,r]):r.input&&r.input.trigger("change"),r.inline?this._updateDatepicker(r):(this._hideDatepicker(),this._lastInput=r.input[0],typeof r.input[0]!="object"&&r.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var t=this._get(e,"altField");if(t){var n=this._get(e,"altFormat")||this._get(e,"dateFormat"),r=this._getDate(e),i=this.formatDate(n,r,this._getFormatConfig(e));$(t).each(function(){$(this).val(i)})}},noWeekends:function(e){var t=e.getDay();return[t>0&&t<6,""]},iso8601Week:function(e){var t=new Date(e.getTime());t.setDate(t.getDate()+4-(t.getDay()||7));var n=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((n-t)/864e5)/7)+1},parseDate:function(e,t,n){if(e==null||t==null)throw"Invalid arguments";t=typeof t=="object"?t.toString():t+"";if(t=="")return null;var r=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff;r=typeof r!="string"?r:(new Date).getFullYear()%100+parseInt(r,10);var i=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,s=(n?n.dayNames:null)||this._defaults.dayNames,o=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,u=(n?n.monthNames:null)||this._defaults.monthNames,a=-1,f=-1,l=-1,c=-1,h=!1,p=function(t){var n=y+1<e.length&&e.charAt(y+1)==t;return n&&y++,n},d=function(e){var n=p(e),r=e=="@"?14:e=="!"?20:e=="y"&&n?4:e=="o"?3:2,i=new RegExp("^\\d{1,"+r+"}"),s=t.substring(g).match(i);if(!s)throw"Missing number at position "+g;return g+=s[0].length,parseInt(s[0],10)},v=function(e,n,r){var i=$.map(p(e)?r:n,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)}),s=-1;$.each(i,function(e,n){var r=n[1];if(t.substr(g,r.length).toLowerCase()==r.toLowerCase())return s=n[0],g+=r.length,!1});if(s!=-1)return s+1;throw"Unknown name at position "+g},m=function(){if(t.charAt(g)!=e.charAt(y))throw"Unexpected literal at position "+g;g++},g=0;for(var y=0;y<e.length;y++)if(h)e.charAt(y)=="'"&&!p("'")?h=!1:m();else switch(e.charAt(y)){case"d":l=d("d");break;case"D":v("D",i,s);break;case"o":c=d("o");break;case"m":f=d("m");break;case"M":f=v("M",o,u);break;case"y":a=d("y");break;case"@":var b=new Date(d("@"));a=b.getFullYear(),f=b.getMonth()+1,l=b.getDate();break;case"!":var b=new Date((d("!")-this._ticksTo1970)/1e4);a=b.getFullYear(),f=b.getMonth()+1,l=b.getDate();break;case"'":p("'")?m():h=!0;break;default:m()}if(g<t.length){var w=t.substr(g);if(!/^\s+/.test(w))throw"Extra/unparsed characters found in date: "+w}a==-1?a=(new Date).getFullYear():a<100&&(a+=(new Date).getFullYear()-(new Date).getFullYear()%100+(a<=r?0:-100));if(c>-1){f=1,l=c;do{var E=this._getDaysInMonth(a,f-1);if(l<=E)break;f++,l-=E}while(!0)}var b=this._daylightSavingAdjust(new Date(a,f-1,l));if(b.getFullYear()!=a||b.getMonth()+1!=f||b.getDate()!=l)throw"Invalid date";return b},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(e,t,n){if(!t)return"";var r=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,i=(n?n.dayNames:null)||this._defaults.dayNames,s=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,o=(n?n.monthNames:null)||this._defaults.monthNames,u=function(t){var n=h+1<e.length&&e.charAt(h+1)==t;return n&&h++,n},a=function(e,t,n){var r=""+t;if(u(e))while(r.length<n)r="0"+r;return r},f=function(e,t,n,r){return u(e)?r[t]:n[t]},l="",c=!1;if(t)for(var h=0;h<e.length;h++)if(c)e.charAt(h)=="'"&&!u("'")?c=!1:l+=e.charAt(h);else switch(e.charAt(h)){case"d":l+=a("d",t.getDate(),2);break;case"D":l+=f("D",t.getDay(),r,i);break;case"o":l+=a("o",Math.round(((new Date(t.getFullYear(),t.getMonth(),t.getDate())).getTime()-(new Date(t.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":l+=a("m",t.getMonth()+1,2);break;case"M":l+=f("M",t.getMonth(),s,o);break;case"y":l+=u("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":l+=t.getTime();break;case"!":l+=t.getTime()*1e4+this._ticksTo1970;break;case"'":u("'")?l+="'":c=!0;break;default:l+=e.charAt(h)}return l},_possibleChars:function(e){var t="",n=!1,r=function(t){var n=i+1<e.length&&e.charAt(i+1)==t;return n&&i++,n};for(var i=0;i<e.length;i++)if(n)e.charAt(i)=="'"&&!r("'")?n=!1:t+=e.charAt(i);else switch(e.charAt(i)){case"d":case"m":case"y":case"@":t+="0123456789";break;case"D":case"M":return null;case"'":r("'")?t+="'":n=!0;break;default:t+=e.charAt(i)}return t},_get:function(e,t){return e.settings[t]!==undefined?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()==e.lastVal)return;var n=this._get(e,"dateFormat"),r=e.lastVal=e.input?e.input.val():null,i,s;i=s=this._getDefaultDate(e);var o=this._getFormatConfig(e);try{i=this.parseDate(n,r,o)||s}catch(u){this.log(u),r=t?"":r}e.selectedDay=i.getDate(),e.drawMonth=e.selectedMonth=i.getMonth(),e.drawYear=e.selectedYear=i.getFullYear(),e.currentDay=r?i.getDate():0,e.currentMonth=r?i.getMonth():0,e.currentYear=r?i.getFullYear():0,this._adjustInstDate(e)},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(e,t,n){var r=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},i=function(t){try{return $.datepicker.parseDate($.datepicker._get(e,"dateFormat"),t,$.datepicker._getFormatConfig(e))}catch(n){}var r=(t.toLowerCase().match(/^c/)?$.datepicker._getDate(e):null)||new Date,i=r.getFullYear(),s=r.getMonth(),o=r.getDate(),u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,a=u.exec(t);while(a){switch(a[2]||"d"){case"d":case"D":o+=parseInt(a[1],10);break;case"w":case"W":o+=parseInt(a[1],10)*7;break;case"m":case"M":s+=parseInt(a[1],10),o=Math.min(o,$.datepicker._getDaysInMonth(i,s));break;case"y":case"Y":i+=parseInt(a[1],10),o=Math.min(o,$.datepicker._getDaysInMonth(i,s))}a=u.exec(t)}return new Date(i,s,o)},s=t==null||t===""?n:typeof t=="string"?i(t):typeof t=="number"?isNaN(t)?n:r(t):new Date(t.getTime());return s=s&&s.toString()=="Invalid Date"?n:s,s&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,n){var r=!t,i=e.selectedMonth,s=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),(i!=e.selectedMonth||s!=e.selectedYear)&&!n&&this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(r?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&e.input.val()==""?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(e){var t=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,-t,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,+t,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(n)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t=new Date;t=this._daylightSavingAdjust(new Date(t.getFullYear(),t.getMonth(),t.getDate()));var n=this._get(e,"isRTL"),r=this._get(e,"showButtonPanel"),i=this._get(e,"hideIfNoPrevNext"),s=this._get(e,"navigationAsDateFormat"),o=this._getNumberOfMonths(e),u=this._get(e,"showCurrentAtPos"),a=this._get(e,"stepMonths"),f=o[0]!=1||o[1]!=1,l=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),c=this._getMinMaxDate(e,"min"),h=this._getMinMaxDate(e,"max"),p=e.drawMonth-u,d=e.drawYear;p<0&&(p+=12,d--);if(h){var v=this._daylightSavingAdjust(new Date(h.getFullYear(),h.getMonth()-o[0]*o[1]+1,h.getDate()));v=c&&v<c?c:v;while(this._daylightSavingAdjust(new Date(d,p,1))>v)p--,p<0&&(p=11,d--)}e.drawMonth=p,e.drawYear=d;var m=this._get(e,"prevText");m=s?this.formatDate(m,this._daylightSavingAdjust(new Date(d,p-a,1)),this._getFormatConfig(e)):m;var g=this._canAdjustMonth(e,-1,d,p)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+m+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+m+"</span></a>":i?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+m+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+m+"</span></a>",y=this._get(e,"nextText");y=s?this.formatDate(y,this._daylightSavingAdjust(new Date(d,p+a,1)),this._getFormatConfig(e)):y;var b=this._canAdjustMonth(e,1,d,p)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></a>":i?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></a>",w=this._get(e,"currentText"),E=this._get(e,"gotoCurrent")&&e.currentDay?l:t;w=s?this.formatDate(w,E,this._getFormatConfig(e)):w;var S=e.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(e,"closeText")+"</button>",x=r?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(n?S:"")+(this._isInRange(e,E)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+w+"</button>":"")+(n?"":S)+"</div>":"",T=parseInt(this._get(e,"firstDay"),10);T=isNaN(T)?0:T;var N=this._get(e,"showWeek"),C=this._get(e,"dayNames"),k=this._get(e,"dayNamesShort"),L=this._get(e,"dayNamesMin"),A=this._get(e,"monthNames"),O=this._get(e,"monthNamesShort"),M=this._get(e,"beforeShowDay"),_=this._get(e,"showOtherMonths"),D=this._get(e,"selectOtherMonths"),P=this._get(e,"calculateWeek")||this.iso8601Week,H=this._getDefaultDate(e),B="";for(var j=0;j<o[0];j++){var F="";this.maxRows=4;for(var I=0;I<o[1];I++){var q=this._daylightSavingAdjust(new Date(d,p,e.selectedDay)),R=" ui-corner-all",U="";if(f){U+='<div class="ui-datepicker-group';if(o[1]>1)switch(I){case 0:U+=" ui-datepicker-group-first",R=" ui-corner-"+(n?"right":"left");break;case o[1]-1:U+=" ui-datepicker-group-last",R=" ui-corner-"+(n?"left":"right");break;default:U+=" ui-datepicker-group-middle",R=""}U+='">'}U+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+R+'">'+(/all|left/.test(R)&&j==0?n?b:g:"")+(/all|right/.test(R)&&j==0?n?g:b:"")+this._generateMonthYearHeader(e,p,d,c,h,j>0||I>0,A,O)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var z=N?'<th class="ui-datepicker-week-col">'+this._get(e,"weekHeader")+"</th>":"";for(var W=0;W<7;W++){var X=(W+T)%7;z+="<th"+((W+T+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+C[X]+'">'+L[X]+"</span></th>"}U+=z+"</tr></thead><tbody>";var V=this._getDaysInMonth(d,p);d==e.selectedYear&&p==e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,V));var J=(this._getFirstDayOfMonth(d,p)-T+7)%7,K=Math.ceil((J+V)/7),Q=f?this.maxRows>K?this.maxRows:K:K;this.maxRows=Q;var G=this._daylightSavingAdjust(new Date(d,p,1-J));for(var Y=0;Y<Q;Y++){U+="<tr>";var Z=N?'<td class="ui-datepicker-week-col">'+this._get(e,"calculateWeek")(G)+"</td>":"";for(var W=0;W<7;W++){var et=M?M.apply(e.input?e.input[0]:null,[G]):[!0,""],tt=G.getMonth()!=p,nt=tt&&!D||!et[0]||c&&G<c||h&&G>h;Z+='<td class="'+((W+T+6)%7>=5?" ui-datepicker-week-end":"")+(tt?" ui-datepicker-other-month":"")+(G.getTime()==q.getTime()&&p==e.selectedMonth&&e._keyEvent||H.getTime()==G.getTime()&&H.getTime()==q.getTime()?" "+this._dayOverClass:"")+(nt?" "+this._unselectableClass+" ui-state-disabled":"")+(tt&&!_?"":" "+et[1]+(G.getTime()==l.getTime()?" "+this._currentClass:"")+(G.getTime()==t.getTime()?" ui-datepicker-today":""))+'"'+((!tt||_)&&et[2]?' title="'+et[2]+'"':"")+(nt?"":' data-handler="selectDay" data-event="click" data-month="'+G.getMonth()+'" data-year="'+G.getFullYear()+'"')+">"+(tt&&!_?"&#xa0;":nt?'<span class="ui-state-default">'+G.getDate()+"</span>":'<a class="ui-state-default'+(G.getTime()==t.getTime()?" ui-state-highlight":"")+(G.getTime()==l.getTime()?" ui-state-active":"")+(tt?" ui-priority-secondary":"")+'" href="#">'+G.getDate()+"</a>")+"</td>",G.setDate(G.getDate()+1),G=this._daylightSavingAdjust(G)}U+=Z+"</tr>"}p++,p>11&&(p=0,d++),U+="</tbody></table>"+(f?"</div>"+(o[0]>0&&I==o[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),F+=U}B+=F}return B+=x+($.ui.ie6&&!e.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),e._keyEvent=!1,B},_generateMonthYearHeader:function(e,t,n,r,i,s,o,u){var a=this._get(e,"changeMonth"),f=this._get(e,"changeYear"),l=this._get(e,"showMonthAfterYear"),c='<div class="ui-datepicker-title">',h="";if(s||!a)h+='<span class="ui-datepicker-month">'+o[t]+"</span>";else{var p=r&&r.getFullYear()==n,d=i&&i.getFullYear()==n;h+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var v=0;v<12;v++)(!p||v>=r.getMonth())&&(!d||v<=i.getMonth())&&(h+='<option value="'+v+'"'+(v==t?' selected="selected"':"")+">"+u[v]+"</option>");h+="</select>"}l||(c+=h+(s||!a||!f?"&#xa0;":""));if(!e.yearshtml){e.yearshtml="";if(s||!f)c+='<span class="ui-datepicker-year">'+n+"</span>";else{var m=this._get(e,"yearRange").split(":"),g=(new Date).getFullYear(),y=function(e){var t=e.match(/c[+-].*/)?n+parseInt(e.substring(1),10):e.match(/[+-].*/)?g+parseInt(e,10):parseInt(e,10);return isNaN(t)?g:t},b=y(m[0]),w=Math.max(b,y(m[1]||""));b=r?Math.max(b,r.getFullYear()):b,w=i?Math.min(w,i.getFullYear()):w,e.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;b<=w;b++)e.yearshtml+='<option value="'+b+'"'+(b==n?' selected="selected"':"")+">"+b+"</option>";e.yearshtml+="</select>",c+=e.yearshtml,e.yearshtml=null}}return c+=this._get(e,"yearSuffix"),l&&(c+=(s||!a||!f?"&#xa0;":"")+h),c+="</div>",c},_adjustInstDate:function(e,t,n){var r=e.drawYear+(n=="Y"?t:0),i=e.drawMonth+(n=="M"?t:0),s=Math.min(e.selectedDay,this._getDaysInMonth(r,i))+(n=="D"?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(r,i,s)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),(n=="M"||n=="Y")&&this._notifyChange(e)},_restrictMinMax:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),i=n&&t<n?n:t;return i=r&&i>r?r:i,i},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return t==null?[1,1]:typeof t=="number"?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return(new Date(e,t,1)).getDay()},_canAdjustMonth:function(e,t,n,r){var i=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(n,r+(t<0?t:i[0]*i[1]),1));return t<0&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(e,s)},_isInRange:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max");return(!n||t.getTime()>=n.getTime())&&(!r||t.getTime()<=r.getTime())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t=typeof t!="string"?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,n,r){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var i=t?typeof t=="object"?t:this._daylightSavingAdjust(new Date(r,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),i,this._getFormatConfig(e))}}),$.fn.datepicker=function(e){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv),$.datepicker.initialized=!0);var t=Array.prototype.slice.call(arguments,1);return typeof e!="string"||e!="isDisabled"&&e!="getDate"&&e!="widget"?e=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t)):this.each(function(){typeof e=="string"?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this].concat(t)):$.datepicker._attachDatepicker(this,e)}):$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.9.2",window["DP_jQuery_"+dpuuid]=$}(jQuery),function(e,t){var n="ui-dialog ui-widget ui-widget-content ui-corner-all ",r={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.9.2",options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.options.title=this.options.title||this.originalTitle;var t=this,r=this.options,i=r.title||"&#160;",s,o,u,a,f;s=(this.uiDialog=e("<div>")).addClass(n+r.dialogClass).css({display:"none",outline:0,zIndex:r.zIndex}).attr("tabIndex",-1).keydown(function(n){r.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===e.ui.keyCode.ESCAPE&&(t.close(n),n.preventDefault())}).mousedown(function(e){t.moveToTop(!1,e)}).appendTo("body"),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s),o=(this.uiDialogTitlebar=e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown",function(){s.focus()}).prependTo(s),u=e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role","button").click(function(e){e.preventDefault(),t.close(e)}).appendTo(o),(this.uiDialogTitlebarCloseText=e("<span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(u),a=e("<span>").uniqueId().addClass("ui-dialog-title").html(i).prependTo(o),f=(this.uiDialogButtonPane=e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),(this.uiButtonSet=e("<div>")).addClass("ui-dialog-buttonset").appendTo(f),s.attr({role:"dialog","aria-labelledby":a.attr("id")}),o.find("*").add(o).disableSelection(),this._hoverable(u),this._focusable(u),r.draggable&&e.fn.draggable&&this._makeDraggable(),r.resizable&&e.fn.resizable&&this._makeResizable(),this._createButtons(r.buttons),this._isOpen=!1,e.fn.bgiframe&&s.bgiframe(),this._on(s,{keydown:function(t){if(!r.modal||t.keyCode!==e.ui.keyCode.TAB)return;var n=e(":tabbable",s),i=n.filter(":first"),o=n.filter(":last");if(t.target===o[0]&&!t.shiftKey)return i.focus(1),!1;if(t.target===i[0]&&t.shiftKey)return o.focus(1),!1}})},_init:function(){this.options.autoOpen&&this.open()},_destroy:function(){var e,t=this.oldPosition;this.overlay&&this.overlay.destroy(),this.uiDialog.hide(),this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},close:function(t){var n=this,r,i;if(!this._isOpen)return;if(!1===this._trigger("beforeClose",t))return;return this._isOpen=!1,this.overlay&&this.overlay.destroy(),this.options.hide?this._hide(this.uiDialog,this.options.hide,function(){n._trigger("close",t)}):(this.uiDialog.hide(),this._trigger("close",t)),e.ui.dialog.overlay.resize(),this.options.modal&&(r=0,e(".ui-dialog").each(function(){this!==n.uiDialog[0]&&(i=e(this).css("z-index"),isNaN(i)||(r=Math.max(r,i)))}),e.ui.dialog.maxZ=r),this},isOpen:function(){return this._isOpen},moveToTop:function(t,n){var r=this.options,i;return r.modal&&!t||!r.stack&&!r.modal?this._trigger("focus",n):(r.zIndex>e.ui.dialog.maxZ&&(e.ui.dialog.maxZ=r.zIndex),this.overlay&&(e.ui.dialog.maxZ+=1,e.ui.dialog.overlay.maxZ=e.ui.dialog.maxZ,this.overlay.$el.css("z-index",e.ui.dialog.overlay.maxZ)),i={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()},e.ui.dialog.maxZ+=1,this.uiDialog.css("z-index",e.ui.dialog.maxZ),this.element.attr(i),this._trigger("focus",n),this)},open:function(){if(this._isOpen)return;var t,n=this.options,r=this.uiDialog;return this._size(),this._position(n.position),r.show(n.show),this.overlay=n.modal?new e.ui.dialog.overlay(this):null,this.moveToTop(!0),t=this.element.find(":tabbable"),t.length||(t=this.uiDialogButtonPane.find(":tabbable"),t.length||(t=r)),t.eq(0).focus(),this._isOpen=!0,this._trigger("open"),this},_createButtons:function(t){var n=this,r=!1;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),typeof t=="object"&&t!==null&&e.each(t,function(){return!(r=!0)}),r?(e.each(t,function(t,r){var i,s;r=e.isFunction(r)?{click:r,text:t}:r,r=e.extend({type:"button"},r),s=r.click,r.click=function(){s.apply(n.element[0],arguments)},i=e("<button></button>",r).appendTo(n.uiButtonSet),e.fn.button&&i.button()}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)):this.uiDialog.removeClass("ui-dialog-buttons")},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging"),t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){n.position=[s.position.left-t.document.scrollLeft(),s.position.top-t.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),t._trigger("dragStop",i,r(s)),e.ui.dialog.overlay.resize()}})},_makeResizable:function(n){function u(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}n=n===t?this.options.resizable:n;var r=this,i=this.options,s=this.uiDialog.css("position"),o=typeof n=="string"?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:i.maxWidth,maxHeight:i.maxHeight,minWidth:i.minWidth,minHeight:this._minHeight(),handles:o,start:function(t,n){e(this).addClass("ui-dialog-resizing"),r._trigger("resizeStart",t,u(n))},resize:function(e,t){r._trigger("resize",e,u(t))},stop:function(t,n){e(this).removeClass("ui-dialog-resizing"),i.height=e(this).height(),i.width=e(this).width(),r._trigger("resizeStop",t,u(n)),e.ui.dialog.overlay.resize()}}).css("position",s).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(t){var n=[],r=[0,0],i;if(t){if(typeof t=="string"||typeof t=="object"&&"0"in t)n=t.split?t.split(" "):[t[0],t[1]],n.length===1&&(n[1]=n[0]),e.each(["left","top"],function(e,t){+n[e]===n[e]&&(r[e]=n[e],n[e]=t)}),t={my:n[0]+(r[0]<0?r[0]:"+"+r[0])+" "+n[1]+(r[1]<0?r[1]:"+"+r[1]),at:n.join(" ")};t=e.extend({},e.ui.dialog.prototype.options.position,t)}else t=e.ui.dialog.prototype.options.position;i=this.uiDialog.is(":visible"),i||this.uiDialog.show(),this.uiDialog.position(t),i||this.uiDialog.hide()},_setOptions:function(t){var n=this,s={},o=!1;e.each(t,function(e,t){n._setOption(e,t),e in r&&(o=!0),e in i&&(s[e]=t)}),o&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(t,r){var i,s,o=this.uiDialog;switch(t){case"buttons":this._createButtons(r);break;case"closeText":this.uiDialogTitlebarCloseText.text(""+r);break;case"dialogClass":o.removeClass(this.options.dialogClass).addClass(n+r);break;case"disabled":r?o.addClass("ui-dialog-disabled"):o.removeClass("ui-dialog-disabled");break;case"draggable":i=o.is(":data(draggable)"),i&&!r&&o.draggable("destroy"),!i&&r&&this._makeDraggable();break;case"position":this._position(r);break;case"resizable":s=o.is(":data(resizable)"),s&&!r&&o.resizable("destroy"),s&&typeof r=="string"&&o.resizable("option","handles",r),!s&&r!==!1&&this._makeResizable(r);break;case"title":e(".ui-dialog-title",this.uiDialogTitlebar).html(""+(r||"&#160;"))}this._super(t,r)},_size:function(){var t,n,r,i=this.options,s=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),i.minWidth>i.width&&(i.width=i.minWidth),t=this.uiDialog.css({height:"auto",width:i.width}).outerHeight(),n=Math.max(0,i.minHeight-t),i.height==="auto"?e.support.minHeight?this.element.css({minHeight:n,height:"auto"}):(this.uiDialog.show(),r=this.element.css("height","auto").height(),s||this.uiDialog.hide(),this.element.height(Math.max(r,n))):this.element.height(Math.max(i.height-t,0)),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),e.extend(e.ui.dialog,{uuid:0,maxZ:0,getTitleId:function(e){var t=e.attr("id");return t||(this.uuid+=1,t=this.uuid),"ui-dialog-title-"+t},overlay:function(t){this.$el=e.ui.dialog.overlay.create(t)}}),e.extend(e.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(e){return e+".dialog-overlay"}).join(" "),create:function(t){this.instances.length===0&&(setTimeout(function(){e.ui.dialog.overlay.instances.length&&e(document).bind(e.ui.dialog.overlay.events,function(t){if(e(t.target).zIndex()<e.ui.dialog.overlay.maxZ)return!1})},1),e(window).bind("resize.dialog-overlay",e.ui.dialog.overlay.resize));var n=this.oldInstances.pop()||e("<div>").addClass("ui-widget-overlay");return e(document).bind("keydown.dialog-overlay",function(r){var i=e.ui.dialog.overlay.instances;i.length!==0&&i[i.length-1]===n&&t.options.closeOnEscape&&!r.isDefaultPrevented()&&r.keyCode&&r.keyCode===e.ui.keyCode.ESCAPE&&(t.close(r),r.preventDefault())}),n.appendTo(document.body).css({width:this.width(),height:this.height()}),e.fn.bgiframe&&n.bgiframe(),this.instances.push(n),n},destroy:function(t){var n=e.inArray(t,this.instances),r=0;n!==-1&&this.oldInstances.push(this.instances.splice(n,1)[0]),this.instances.length===0&&e([document,window]).unbind(".dialog-overlay"),t.height(0).width(0).remove(),e.each(this.instances,function(){r=Math.max(r,this.css("z-index"))}),this.maxZ=r},height:function(){var t,n;return e.ui.ie?(t=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),n=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),t<n?e(window).height()+"px":t+"px"):e(document).height()+"px"},width:function(){var t,n;return e.ui.ie?(t=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),n=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),t<n?e(window).width()+"px":t+"px"):e(document).width()+"px"},resize:function(){var t=e([]);e.each(e.ui.dialog.overlay.instances,function(){t=t.add(this)}),t.css({width:0,height:0}).css({width:e.ui.dialog.overlay.width(),height:e.ui.dialog.overlay.height()})}}),e.extend(e.ui.dialog.overlay.prototype,{destroy:function(){e.ui.dialog.overlay.destroy(this.$el)}})}(jQuery),function(e,t){var n=/up|down|vertical/,r=/up|left|vertical|horizontal/;e.effects.effect.blind=function(t,i){var s=e(this),o=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(s,t.mode||"hide"),a=t.direction||"up",f=n.test(a),l=f?"height":"width",c=f?"top":"left",h=r.test(a),p={},d=u==="show",v,m,g;s.parent().is(".ui-effects-wrapper")?e.effects.save(s.parent(),o):e.effects.save(s,o),s.show(),v=e.effects.createWrapper(s).css({overflow:"hidden"}),m=v[l](),g=parseFloat(v.css(c))||0,p[l]=d?m:0,h||(s.css(f?"bottom":"right",0).css(f?"top":"left","auto").css({position:"absolute"}),p[c]=d?g:m+g),d&&(v.css(l,0),h||v.css(c,g+m)),v.animate(p,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){u==="hide"&&s.hide(),e.effects.restore(s,o),e.effects.removeWrapper(s),i()}})}}(jQuery),function(e,t){e.effects.effect.bounce=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=s==="hide",u=s==="show",a=t.direction||"up",f=t.distance,l=t.times||5,c=l*2+(u||o?1:0),h=t.duration/c,p=t.easing,d=a==="up"||a==="down"?"top":"left",v=a==="up"||a==="left",m,g,y,b=r.queue(),w=b.length;(u||o)&&i.push("opacity"),e.effects.save(r,i),r.show(),e.effects.createWrapper(r),f||(f=r[d==="top"?"outerHeight":"outerWidth"]()/3),u&&(y={opacity:1},y[d]=0,r.css("opacity",0).css(d,v?-f*2:f*2).animate(y,h,p)),o&&(f/=Math.pow(2,l-1)),y={},y[d]=0;for(m=0;m<l;m++)g={},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p).animate(y,h,p),f=o?f*2:f/2;o&&(g={opacity:0},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p)),r.queue(function(){o&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),w>1&&b.splice.apply(b,[1,0].concat(b.splice(w,c+1))),r.dequeue()}}(jQuery),function(e,t){e.effects.effect.clip=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"vertical",a=u==="vertical",f=a?"height":"width",l=a?"top":"left",c={},h,p,d;e.effects.save(r,i),r.show(),h=e.effects.createWrapper(r).css({overflow:"hidden"}),p=r[0].tagName==="IMG"?h:r,d=p[f](),o&&(p.css(f,0),p.css(l,d/2)),c[f]=o?d:0,c[l]=o?0:d/2,p.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o||r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}}(jQuery),function(e,t){e.effects.effect.drop=function(t,n){var r=e(this),i=["position","top","bottom","left","right","opacity","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left"?"pos":"neg",l={opacity:o?1:0},c;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),c=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0)/2,o&&r.css("opacity",0).css(a,f==="pos"?-c:c),l[a]=(o?f==="pos"?"+=":"-=":f==="pos"?"-=":"+=")+c,r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}}(jQuery),function(e,t){e.effects.effect.explode=function(t,n){function y(){c.push(this),c.length===r*i&&b()}function b(){s.css({visibility:"visible"}),e(c).remove(),u||s.hide(),n()}var r=t.pieces?Math.round(Math.sqrt(t.pieces)):3,i=r,s=e(this),o=e.effects.setMode(s,t.mode||"hide"),u=o==="show",a=s.show().css("visibility","hidden").offset(),f=Math.ceil(s.outerWidth()/i),l=Math.ceil(s.outerHeight()/r),c=[],h,p,d,v,m,g;for(h=0;h<r;h++){v=a.top+h*l,g=h-(r-1)/2;for(p=0;p<i;p++)d=a.left+p*f,m=p-(i-1)/2,s.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-p*f,top:-h*l}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:f,height:l,left:d+(u?m*f:0),top:v+(u?g*l:0),opacity:u?0:1}).animate({left:d+(u?0:m*f),top:v+(u?0:g*l),opacity:u?1:0},t.duration||500,t.easing,y)}}}(jQuery),function(e,t){e.effects.effect.fade=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"toggle");r.animate({opacity:i},{queue:!1,duration:t.duration,easing:t.easing,complete:n})}}(jQuery),function(e,t){e.effects.effect.fold=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=s==="hide",a=t.size||15,f=/([0-9]+)%/.exec(a),l=!!t.horizFirst,c=o!==l,h=c?["width","height"]:["height","width"],p=t.duration/2,d,v,m={},g={};e.effects.save(r,i),r.show(),d=e.effects.createWrapper(r).css({overflow:"hidden"}),v=c?[d.width(),d.height()]:[d.height(),d.width()],f&&(a=parseInt(f[1],10)/100*v[u?0:1]),o&&d.css(l?{height:0,width:a}:{height:a,width:0}),m[h[0]]=o?v[0]:a,g[h[1]]=o?v[1]:0,d.animate(m,p,t.easing).animate(g,p,t.easing,function(){u&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()})}}(jQuery),function(e,t){e.effects.effect.highlight=function(t,n){var r=e(this),i=["backgroundImage","backgroundColor","opacity"],s=e.effects.setMode(r,t.mode||"show"),o={backgroundColor:r.css("backgroundColor")};s==="hide"&&(o.opacity=0),e.effects.save(r,i),r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),n()}})}}(jQuery),function(e,t){e.effects.effect.pulsate=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"show"),s=i==="show",o=i==="hide",u=s||i==="hide",a=(t.times||5)*2+(u?1:0),f=t.duration/a,l=0,c=r.queue(),h=c.length,p;if(s||!r.is(":visible"))r.css("opacity",0).show(),l=1;for(p=1;p<a;p++)r.animate({opacity:l},f,t.easing),l=1-l;r.animate({opacity:l},f,t.easing),r.queue(function(){o&&r.hide(),n()}),h>1&&c.splice.apply(c,[1,0].concat(c.splice(h,a+1))),r.dequeue()}}(jQuery),function(e,t){e.effects.effect.puff=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"hide"),s=i==="hide",o=parseInt(t.percent,10)||150,u=o/100,a={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:i,complete:n,percent:s?o:100,from:s?a:{height:a.height*u,width:a.width*u,outerHeight:a.outerHeight*u,outerWidth:a.outerWidth*u}}),r.effect(t)},e.effects.effect.scale=function(t,n){var r=e(this),i=e.extend(!0,{},t),s=e.effects.setMode(r,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:s==="hide"?0:100),u=t.direction||"both",a=t.origin,f={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},l={y:u!=="horizontal"?o/100:1,x:u!=="vertical"?o/100:1};i.effect="size",i.queue=!1,i.complete=n,s!=="effect"&&(i.origin=a||["middle","center"],i.restore=!0),i.from=t.from||(s==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:f),i.to={height:f.height*l.y,width:f.width*l.x,outerHeight:f.outerHeight*l.y,outerWidth:f.outerWidth*l.x},i.fade&&(s==="show"&&(i.from.opacity=0,i.to.opacity=1),s==="hide"&&(i.from.opacity=1,i.to.opacity=0)),r.effect(i)},e.effects.effect.size=function(t,n){var r,i,s,o=e(this),u=["position","top","bottom","left","right","width","height","overflow","opacity"],a=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],l=["fontSize"],c=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),d=t.restore||p!=="effect",v=t.scale||"both",m=t.origin||["middle","center"],g=o.css("position"),y=d?u:a,b={height:0,width:0,outerHeight:0,outerWidth:0};p==="show"&&o.show(),r={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},t.mode==="toggle"&&p==="show"?(o.from=t.to||b,o.to=t.from||r):(o.from=t.from||(p==="show"?b:r),o.to=t.to||(p==="hide"?b:r)),s={from:{y:o.from.height/r.height,x:o.from.width/r.width},to:{y:o.to.height/r.height,x:o.to.width/r.width}};if(v==="box"||v==="both")s.from.y!==s.to.y&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,s.from.y,o.from),o.to=e.effects.setTransition(o,c,s.to.y,o.to)),s.from.x!==s.to.x&&(y=y.concat(h),o.from=e.effects.setTransition(o,h,s.from.x,o.from),o.to=e.effects.setTransition(o,h,s.to.x,o.to));(v==="content"||v==="both")&&s.from.y!==s.to.y&&(y=y.concat(l).concat(f),o.from=e.effects.setTransition(o,l,s.from.y,o.from),o.to=e.effects.setTransition(o,l,s.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),m&&(i=e.effects.getBaseline(m,r),o.from.top=(r.outerHeight-o.outerHeight())*i.y,o.from.left=(r.outerWidth-o.outerWidth())*i.x,o.to.top=(r.outerHeight-o.to.outerHeight)*i.y,o.to.left=(r.outerWidth-o.to.outerWidth)*i.x),o.css(o.from);if(v==="content"||v==="both")c=c.concat(["marginTop","marginBottom"]).concat(l),h=h.concat(["marginLeft","marginRight"]),f=u.concat(c).concat(h),o.find("*[width]").each(function(){var n=e(this),r={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};d&&e.effects.save(n,f),n.from={height:r.height*s.from.y,width:r.width*s.from.x,outerHeight:r.outerHeight*s.from.y,outerWidth:r.outerWidth*s.from.x},n.to={height:r.height*s.to.y,width:r.width*s.to.x,outerHeight:r.height*s.to.y,outerWidth:r.width*s.to.x},s.from.y!==s.to.y&&(n.from=e.effects.setTransition(n,c,s.from.y,n.from),n.to=e.effects.setTransition(n,c,s.to.y,n.to)),s.from.x!==s.to.x&&(n.from=e.effects.setTransition(n,h,s.from.x,n.from),n.to=e.effects.setTransition(n,h,s.to.x,n.to)),n.css(n.from),n.animate(n.to,t.duration,t.easing,function(){d&&e.effects.restore(n,f)})});o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o.to.opacity===0&&o.css("opacity",o.from.opacity),p==="hide"&&o.hide(),e.effects.restore(o,y),d||(g==="static"?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,n){var r=parseInt(n,10),i=e?o.to.left:o.to.top;return n==="auto"?i+"px":r+i+"px"})})),e.effects.removeWrapper(o),n()}})}}(jQuery),function(e,t){e.effects.effect.shake=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=t.direction||"left",u=t.distance||20,a=t.times||3,f=a*2+1,l=Math.round(t.duration/f),c=o==="up"||o==="down"?"top":"left",h=o==="up"||o==="left",p={},d={},v={},m,g=r.queue(),y=g.length;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),p[c]=(h?"-=":"+=")+u,d[c]=(h?"+=":"-=")+u*2,v[c]=(h?"-=":"+=")+u*2,r.animate(p,l,t.easing);for(m=1;m<a;m++)r.animate(d,l,t.easing).animate(v,l,t.easing);r.animate(d,l,t.easing).animate(p,l/2,t.easing).queue(function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),y>1&&g.splice.apply(g,[1,0].concat(g.splice(y,f+1))),r.dequeue()}}(jQuery),function(e,t){e.effects.effect.slide=function(t,n){var r=e(this),i=["position","top","bottom","left","right","width","height"],s=e.effects.setMode(r,t.mode||"show"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left",l,c={};e.effects.save(r,i),r.show(),l=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(r).css({overflow:"hidden"}),o&&r.css(a,f?isNaN(l)?"-"+l:-l:l),c[a]=(o?f?"+=":"-=":f?"-=":"+=")+l,r.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}}(jQuery),function(e,t){e.effects.effect.transfer=function(t,n){var r=e(this),i=e(t.to),s=i.css("position")==="fixed",o=e("body"),u=s?o.scrollTop():0,a=s?o.scrollLeft():0,f=i.offset(),l={top:f.top-u,left:f.left-a,height:i.innerHeight(),width:i.innerWidth()},c=r.offset(),h=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({top:c.top-u,left:c.left-a,height:r.innerHeight(),width:r.innerWidth(),position:s?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){h.remove(),n()})}}(jQuery),function(e,t){var n=!1;e.widget("ui.menu",{version:"1.9.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var r=e(t.target).closest(".ui-menu-item");!n&&r.not(".ui-state-disabled").length&&(n=!0,this.select(t),r.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,n)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),n=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var n,r,i,s,o,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),n.length?(this.focus(t,n),n.length>1?(this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,n=this.options.icons.submenu,r=this.element.find(this.options.menus);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),r=t.prev("a"),i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);r.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",r.attr("id"))}),t=r.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-—–\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(e,t){var n,r;this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,r,i,s,o,u;this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.height(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))},blur:function(e,t){t||clearTimeout(this.timer);if(!this.active)return;this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var r;this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));if(!r||!r.length||!this.active)r=this.activeMenu.children(".ui-menu-item")[t]();this.focus(n,r)},nextPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isLastItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())},previousPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isFirstItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)}})}(jQuery),function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,d,v,m,g=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),w=g[0],E=(t.collision||"flip").split(" "),S={};return w.nodeType===9?(l=g.width(),d=g.height(),v={top:0,left:0}):e.isWindow(w)?(l=g.width(),d=g.height(),v={top:g.scrollTop(),left:g.scrollLeft()}):w.preventDefault?(t.at="left top",l=d=0,v={top:w.pageY,left:w.pageX}):(l=g.outerWidth(),d=g.outerHeight(),v=g.offset()),m=e.extend({},v),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),S[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),E.length===1&&(E[1]=E[0]),t.at[0]==="right"?m.left+=l:t.at[0]==="center"&&(m.left+=l/2),t.at[1]==="bottom"?m.top+=d:t.at[1]==="center"&&(m.top+=d/2),n=h(S.at,l,d),m.left+=n[0],m.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),w=p(this,"marginLeft"),x=p(this,"marginTop"),T=f+w+p(this,"marginRight")+b.width,N=c+x+p(this,"marginBottom")+b.height,C=e.extend({},m),k=h(S.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:w,marginTop:x},e.each(["left","top"],function(r,i){e.ui.position[E[r]]&&e.ui.position[E[r]][i](C,{targetWidth:l,targetHeight:d,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:y,elem:a})}),e.fn.bgiframe&&a.bgiframe(),t.using&&(u=function(e){var n=v.left-C.left,s=n+l-f,o=v.top-C.top,u=o+d-c,h={target:{element:g,left:v.left,top:v.top,width:l,height:d},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),d<c&&i(o+u)<d&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var n=e.fn.position;e.fn.position=function(r){if(!r||!r.offset)return n.call(this,r);var i=r.offset.split(" "),s=r.at.split(" ");return i.length===1&&(i[1]=i[0]),/^\d/.test(i[0])&&(i[0]="+"+i[0]),/^\d/.test(i[1])&&(i[1]="+"+i[1]),s.length===1&&(/left|center|right/.test(s[0])?s[1]="center":(s[1]=s[0],s[0]="center")),n.call(this,e.extend(r,{at:s[0]+i[0]+" "+s[1]+i[1],offset:t}))}}(jQuery)}(jQuery),function(e,t){e.widget("ui.progressbar",{version:"1.9.2",options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return e===t?this._value():(this._setOption("value",e),this)},_setOption:function(e,t){e==="value"&&(this.options.value=t,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),this._super(e,t)},_value:function(){var e=this.options.value;return typeof e!="number"&&(e=0),Math.min(this.options.max,Math.max(this.min,e))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var e=this.value(),t=this._percentage();this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),this.valueDiv.toggle(e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(t.toFixed(0)+"%"),this.element.attr("aria-valuenow",e)}})}(jQuery),function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var t,r,i=this.options,s=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",u=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(i.disabled?" ui-slider-disabled ui-disabled":"")),this.range=e([]),i.range&&(i.range===!0&&(i.values||(i.values=[this._valueMin(),this._valueMin()]),i.values.length&&i.values.length!==2&&(i.values=[i.values[0],i.values[0]])),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(i.range==="min"||i.range==="max"?" ui-slider-range-"+i.range:""))),r=i.values&&i.values.length||1;for(t=s.length;t<r;t++)u.push(o);this.handles=s.add(e(u.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).mouseenter(function(){i.disabled||e(this).addClass("ui-state-hover")}).mouseleave(function(){e(this).removeClass("ui-state-hover")}).focus(function(){i.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))}).blur(function(){e(this).removeClass("ui-state-focus")}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)}),this._on(this.handles,{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}),this._refreshValue(),this._animateOff=!1},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));i>n&&(i=n,s=e(this),o=t)}),c.range===!0&&this.values(1)===c.min&&(o+=1,s=e(this.handles[o])),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"disabled":n?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.prop("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))}})}(jQuery),function(e){function t(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.widget("ui.spinner",{version:"1.9.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},n=this.element;return e.each(["min","max","step"],function(e,r){var i=n.attr(r);i!==undefined&&i.length&&(t[r]=i)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e)},mousewheel:function(e,t){if(!t)return;if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()},"mousedown .ui-spinner-button":function(t){function r(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=n,this._delay(function(){this.previous=n}))}var n;n=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),r.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,r.call(this)});if(this._start(t)===!1)return;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(!e(t.currentTarget).hasClass("ui-state-active"))return;if(this._start(t)===!1)return!1;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(e.height()*.5)&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var n=this.options,r=e.ui.keyCode;switch(t.keyCode){case r.UP:return this._repeat(null,1,t),!0;case r.DOWN:return this._repeat(null,-1,t),!0;case r.PAGE_UP:return this._repeat(null,n.page,t),!0;case r.PAGE_DOWN:return this._repeat(null,-n.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return!this.spinning&&this._trigger("start",e)===!1?!1:(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(e,t,n){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,n)},e),this._spin(t*this.options.step,n)},_spin:function(e,t){var n=this.value()||0;this.counter||(this.counter=1),n=this._adjustValue(n+e*this._increment(this.counter));if(!this.spinning||this._trigger("spin",t,{value:n})!==!1)this._value(n),this.counter++},_increment:function(t){var n=this.options.incremental;return n?e.isFunction(n)?n(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return this.options.min!==null&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=e.toString(),n=t.indexOf(".");return n===-1?0:t.length-n-1},_adjustValue:function(e){var t,n,r=this.options;return t=r.min!==null?r.min:0,n=e-t,n=Math.round(n/r.step)*r.step,e=t+n,e=parseFloat(e.toFixed(this._precision())),r.max!==null&&e>r.max?r.max:r.min!==null&&e<r.min?r.min:e},_stop:function(e){if(!this.spinning)return;clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e)},_setOption:function(e,t){if(e==="culture"||e==="numberFormat"){var n=this._parse(this.element.val());this.options[e]=t,this.element.val(this._format(n));return}(e==="max"||e==="min"||e==="step")&&typeof t=="string"&&(t=this._parse(t)),this._super(e,t),e==="disabled"&&(t?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:t(function(e){this._super(e),this._value(this.element.val())}),_parse:function(e){return typeof e=="string"&&e!==""&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),e===""||isNaN(e)?null:e},_format:function(e){return e===""?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(e,t){var n;e!==""&&(n=this._parse(e),n!==null&&(t||(n=this._adjustValue(n)),e=this._format(n))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:t(function(e){this._stepUp(e)}),_stepUp:function(e){this._spin((e||1)*this.options.step)},stepDown:t(function(e){this._stepDown(e)}),_stepDown:function(e){this._spin((e||1)*-this.options.step)},pageUp:t(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:t(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){if(!arguments.length)return this._parse(this.element.val());t(this._value).call(this,e)},widget:function(){return this.uiSpinner}})}(jQuery),function(e,t){function i(){return++n}function s(e){return e.hash.length>1&&e.href.replace(r,"")===location.href.replace(r,"").replace(/\s/g,"%20")}var n=0,r=/#.*$/;e.widget("ui.tabs",{version:"1.9.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,n=this.options,r=n.active,i=location.hash.substring(1);this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs();if(r===null){i&&this.tabs.each(function(t,n){if(e(n).attr("aria-controls")===i)return r=t,!1}),r===null&&(r=this.tabs.index(this.tabs.filter(".ui-tabs-active")));if(r===null||r===-1)r=this.tabs.length?0:!1}r!==!1&&(r=this.tabs.index(this.tabs.eq(r)),r===-1&&(r=n.collapsible?!1:0)),n.active=r,!n.collapsible&&n.active===!1&&this.anchors.length&&(n.active=0),e.isArray(n.disabled)&&(n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(this.options.active):this.active=e(),this._refresh(),this.active.length&&this.load(n.active)},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var n=e(this.document[0].activeElement).closest("li"),r=this.tabs.index(n),i=!0;if(this._handlePageNav(t))return;switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=!1,r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault(),clearTimeout(this.activating),this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault(),clearTimeout(this.activating),this._activate(r===this.options.active?!1:r);return;default:return}t.preventDefault(),clearTimeout(this.activating),r=this._focusNextTab(r,i),t.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(r).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",r)},this.delay))},_panelKeydown:function(t){if(this._handlePageNav(t))return;t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(t,n){function i(){return t>r&&(t=0),t<0&&(t=r),t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1)t=n?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t),e==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),!t&&this.options.active===!1&&this._activate(0)),e==="event"&&this._setupEvents(t),e==="heightStyle"&&this._setupHeightStyle(t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,n=this.tablist.children(":has(a[href])");t.disabled=e.map(n.filter(".ui-state-disabled"),function(e){return n.index(e)}),this._processTabs(),t.active===!1||!this.anchors.length?(t.active=!1,this.active=e()):this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(n,r){var i,o,u,a=e(r).uniqueId().attr("id"),f=e(r).closest("li"),l=f.attr("aria-controls");s(r)?(i=r.hash,o=t.element.find(t._sanitizeSelector(i))):(u=t._tabId(f),i="#"+u,o=t.element.find(i),o.length||(o=t._createPanel(u),o.insertAfter(t.panels[n-1]||t.tablist)),o.attr("aria-live","polite")),o.length&&(t.panels=t.panels.add(o)),l&&f.data("ui-tabs-aria-controls",l),f.attr({"aria-controls":i.substring(1),"aria-labelledby":a}),o.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var n=0,r;r=this.tabs[n];n++)t===!0||e.inArray(n,t)!==-1?e(r).addClass("ui-state-disabled").attr("aria-disabled","true"):e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var n={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var n,r,i=this.element.parent();t==="fill"?(e.support.minHeight||(r=i.css("overflow"),i.css("overflow","hidden")),n=i.height(),this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");if(r==="absolute"||r==="fixed")return;n-=t.outerHeight(!0)}),r&&i.css("overflow",r),this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):t==="auto"&&(n=0,this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n))},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i.closest("li"),o=s[0]===r[0],u=o&&n.collapsible,a=u?e():this._getPanelForTab(s),f=r.length?this._getPanelForTab(r):e(),l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===!1)return;n.active=u?!1:this.tabs.index(s),this.active=o?e():s,this.xhr&&this.xhr.abort(),!f.length&&!a.length&&e.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,l)},_toggle:function(t,n){function o(){r.running=!1,r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),i.length&&r.options.show?r._show(i,r.options.show,o):(i.show(),o())}var r=this,i=n.newPanel,s=n.oldPanel;this.running=!0,s.length&&this.options.hide?this._hide(s,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s.hide(),u()),s.attr({"aria-expanded":"false","aria-hidden":"true"}),n.oldTab.attr("aria-selected","false"),i.length&&s.length?n.oldTab.attr("tabIndex",-1):i.length&&this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}),n.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var n,r=this._findActive(t);if(r[0]===this.active[0])return;r.length||(r=this.active),n=r.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return typeof e=="string"&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),n=t.data("ui-tabs-aria-controls");n?t.attr("aria-controls",n):t.removeAttr("aria-controls")}),this.panels.show(),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(n){var r=this.options.disabled;if(r===!1)return;n===t?r=!1:(n=this._getIndex(n),e.isArray(r)?r=e.map(r,function(e){return e!==n?e:null}):r=e.map(this.tabs,function(e,t){return t!==n?t:null})),this._setupDisabled(r)},disable:function(n){var r=this.options.disabled;if(r===!0)return;if(n===t)r=!0;else{n=this._getIndex(n);if(e.inArray(n,r)!==-1)return;e.isArray(r)?r=e.merge([n],r).sort():r=[n]}this._setupDisabled(r)},load:function(t,n){t=this._getIndex(t);var r=this,i=this.tabs.eq(t),o=i.find(".ui-tabs-anchor"),u=this._getPanelForTab(i),a={tab:i,panel:u};if(s(o[0]))return;this.xhr=e.ajax(this._ajaxSettings(o,n,a)),this.xhr&&this.xhr.statusText!=="canceled"&&(i.addClass("ui-tabs-loading"),u.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){u.html(e),r._trigger("load",n,a)},1)}).complete(function(e,t){setTimeout(function(){t==="abort"&&r.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),u.removeAttr("aria-busy"),e===r.xhr&&delete r.xhr},1)}))},_ajaxSettings:function(t,n,r){var i=this;return{url:t.attr("href"),beforeSend:function(t,s){return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}}},_getPanelForTab:function(t){var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}}),e.uiBackCompat!==!1&&(e.ui.tabs.prototype._ui=function(e,t){return{tab:e,panel:t,index:this.anchors.index(e)}},e.widget("ui.tabs",e.ui.tabs,{url:function(e,t){this.anchors.eq(e).attr("href",t)}}),e.widget("ui.tabs",e.ui.tabs,{options:{ajaxOptions:null,cache:!1},_create:function(){this._super();var t=this;this._on({tabsbeforeload:function(n,r){if(e.data(r.tab[0],"cache.tabs")){n.preventDefault();return}r.jqXHR.success(function(){t.options.cache&&e.data(r.tab[0],"cache.tabs",!0)})}})},_ajaxSettings:function(t,n,r){var i=this.options.ajaxOptions;return e.extend({},i,{error:function(e,t){try{i.error(e,t,r.tab.closest("li").index(),r.tab[0])}catch(n){}}},this._superApply(arguments))},_setOption:function(e,t){e==="cache"&&t===!1&&this.anchors.removeData("cache.tabs"),this._super(e,t)},_destroy:function(){this.anchors.removeData("cache.tabs"),this._super()},url:function(e){this.anchors.eq(e).removeData("cache.tabs"),this._superApply(arguments)}}),e.widget("ui.tabs",e.ui.tabs,{abort:function(){this.xhr&&this.xhr.abort()}}),e.widget("ui.tabs",e.ui.tabs,{options:{spinner:"<em>Loading&#8230;</em>"},_create:function(){this._super(),this._on({tabsbeforeload:function(e,t){if(e.target!==this.element[0]||!this.options.spinner)return;var n=t.tab.find("span"),r=n.html();n.html(this.options.spinner),t.jqXHR.complete(function(){n.html(r)})}})}}),e.widget("ui.tabs",e.ui.tabs,{options:{enable:null,disable:null},enable:function(t){var n=this.options,r;if(t&&n.disabled===!0||e.isArray(n.disabled)&&e.inArray(t,n.disabled)!==-1)r=!0;this._superApply(arguments),r&&this._trigger("enable",null,this._ui(this.anchors[t],this.panels[t]))},disable:function(t){var n=this.options,r;if(t&&n.disabled===!1||e.isArray(n.disabled)&&e.inArray(t,n.disabled)===-1)r=!0;this._superApply(arguments),r&&this._trigger("disable",null,this._ui(this.anchors[t],this.panels[t]))}}),e.widget("ui.tabs",e.ui.tabs,{options:{add:null,remove:null,tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},add:function(n,r,i){i===t&&(i=this.anchors.length);var s,o,u=this.options,a=e(u.tabTemplate.replace(/#\{href\}/g,n).replace(/#\{label\}/g,r)),f=n.indexOf("#")?this._tabId(a):n.replace("#","");return a.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy",!0),a.attr("aria-controls",f),s=i>=this.tabs.length,o=this.element.find("#"+f),o.length||(o=this._createPanel(f),s?i>0?o.insertAfter(this.panels.eq(-1)):o.appendTo(this.element):o.insertBefore(this.panels[i])),o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(),s?a.appendTo(this.tablist):a.insertBefore(this.tabs[i]),u.disabled=e.map(u.disabled,function(e){return e>=i?++e:e}),this.refresh(),this.tabs.length===1&&u.active===!1&&this.option("active",0),this._trigger("add",null,this._ui(this.anchors[i],this.panels[i])),this},remove:function(t){t=this._getIndex(t);var n=this.options,r=this.tabs.eq(t).remove(),i=this._getPanelForTab(r).remove();return r.hasClass("ui-tabs-active")&&this.anchors.length>2&&this._activate(t+(t+1<this.anchors.length?1:-1)),n.disabled=e.map(e.grep(n.disabled,function(e){return e!==t}),function(e){return e>=t?--e:e}),this.refresh(),this._trigger("remove",null,this._ui(r.find("a")[0],i[0])),this}}),e.widget("ui.tabs",e.ui.tabs,{length:function(){return this.anchors.length}}),e.widget("ui.tabs",e.ui.tabs,{options:{idPrefix:"ui-tabs-"},_tabId:function(t){var n=t.is("li")?t.find("a[href]"):t;return n=n[0],e(n).closest("li").attr("aria-controls")||n.title&&n.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF\-]/g,"")||this.options.idPrefix+i()}}),e.widget("ui.tabs",e.ui.tabs,{options:{panelTemplate:"<div></div>"},_createPanel:function(t){return e(this.options.panelTemplate).attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)}}),e.widget("ui.tabs",e.ui.tabs,{_create:function(){var e=this.options;e.active===null&&e.selected!==t&&(e.active=e.selected===-1?!1:e.selected),this._super(),e.selected=e.active,e.selected===!1&&(e.selected=-1)},_setOption:function(e,t){if(e!=="selected")return this._super(e,t);var n=this.options;this._super("active",t===-1?!1:t),n.selected=n.active,n.selected===!1&&(n.selected=-1)},_eventHandler:function(){this._superApply(arguments),this.options.selected=this.options.active,this.options.selected===!1&&(this.options.selected=-1)}}),e.widget("ui.tabs",e.ui.tabs,{options:{show:null,select:null},_create:function(){this._super(),this.options.active!==!1&&this._trigger("show",null,this._ui(this.active.find(".ui-tabs-anchor")[0],this._getPanelForTab(this.active)[0]))},_trigger:function(e,t,n){var r,i,s=this._superApply(arguments);return s?(e==="beforeActivate"?(r=n.newTab.length?n.newTab:n.oldTab,i=n.newPanel.length?n.newPanel:n.oldPanel,s=this._super("select",t,{tab:r.find(".ui-tabs-anchor")[0],panel:i[0],index:r.closest("li").index()})):e==="activate"&&n.newTab.length&&(s=this._super("show",t,{tab:n.newTab.find(".ui-tabs-anchor")[0],panel:n.newPanel[0],index:n.newTab.closest("li").index()})),s):!1}}),e.widget("ui.tabs",e.ui.tabs,{select:function(e){e=this._getIndex(e);if(e===-1){if(!this.options.collapsible||this.options.selected===-1)return;e=this.options.selected}this.anchors.eq(e).trigger(this.options.event+this.eventNamespace)}}),function(){var t=0;e.widget("ui.tabs",e.ui.tabs,{options:{cookie:null},_create:function(){var e=this.options,t;e.active==null&&e.cookie&&(t=parseInt(this._cookie(),10),t===-1&&(t=!1),e.active=t),this._super()},_cookie:function(n){var r=[this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+ ++t)];return arguments.length&&(r.push(n===!1?-1:n),r.push(this.options.cookie)),e.cookie.apply(null,r)},_refresh:function(){this._super(),this.options.cookie&&this._cookie(this.options.active,this.options.cookie)},_eventHandler:function(){this._superApply(arguments),this.options.cookie&&this._cookie(this.options.active,this.options.cookie)},_destroy:function(){this._super(),this.options.cookie&&this._cookie(null,this.options.cookie)}})}(),e.widget("ui.tabs",e.ui.tabs,{_trigger:function(t,n,r){var i=e.extend({},r);return t==="load"&&(i.panel=i.panel[0],i.tab=i.tab.find(".ui-tabs-anchor")[0]),this._super(t,n,i)}}),e.widget("ui.tabs",e.ui.tabs,{options:{fx:null},_getFx:function(){var t,n,r=this.options.fx;return r&&(e.isArray(r)?(t=r[0],n=r[1]):t=n=r),r?{show:n,hide:t}:null},_toggle:function(e,t){function o(){n.running=!1,n._trigger("activate",e,t)}function u(){t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),r.length&&s.show?r.animate(s.show,s.show.duration,function(){o()}):(r.show(),o())}var n=this,r=t.newPanel,i=t.oldPanel,s=this._getFx();if(!s)return this._super(e,t);n.running=!0,i.length&&s.hide?i.animate(s.hide,s.hide.duration,function(){t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),i.hide(),u())}}))}(jQuery),function(e){function n(t,n){var r=(t.attr("aria-describedby")||"").split(/\s+/);r.push(n),t.data("ui-tooltip-id",n).attr("aria-describedby",e.trim(r.join(" ")))}function r(t){var n=t.data("ui-tooltip-id"),r=(t.attr("aria-describedby")||"").split(/\s+/),i=e.inArray(n,r);i!==-1&&r.splice(i,1),t.removeData("ui-tooltip-id"),r=e.trim(r.join(" ")),r?t.attr("aria-describedby",r):t.removeAttr("aria-describedby")}var t=0;e.widget("ui.tooltip",{version:"1.9.2",options:{content:function(){return e(this).attr("title")},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(t,n){var r=this;if(t==="disabled"){this[n?"_disable":"_enable"](),this.options[t]=n;return}this._super(t,n),t==="content"&&e.each(this.tooltips,function(e,t){r._updateContent(t)})},_disable:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0)}),this.element.find(this.options.items).andSelf().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).andSelf().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var n=this,r=e(t?t.target:this.element).closest(this.options.items);if(!r.length||r.data("ui-tooltip-id"))return;r.attr("title")&&r.data("ui-tooltip-title",r.attr("title")),r.data("ui-tooltip-open",!0),t&&t.type==="mouseover"&&r.parents().each(function(){var t=e(this),r;t.data("ui-tooltip-open")&&(r=e.Event("blur"),r.target=r.currentTarget=this,n.close(r,!0)),t.attr("title")&&(t.uniqueId(),n.parents[this.id]={element:this,title:t.attr("title")},t.attr("title",""))}),this._updateContent(r,t)},_updateContent:function(e,t){var n,r=this.options.content,i=this,s=t?t.type:null;if(typeof r=="string")return this._open(t,e,r);n=r.call(e[0],function(n){if(!e.data("ui-tooltip-open"))return;i._delay(function(){t&&(t.type=s),this._open(t,e,n)})}),n&&this._open(t,e,n)},_open:function(t,r,i){function f(e){a.of=e;if(s.is(":hidden"))return;s.position(a)}var s,o,u,a=e.extend({},this.options.position);if(!i)return;s=this._find(r);if(s.length){s.find(".ui-tooltip-content").html(i);return}r.is("[title]")&&(t&&t.type==="mouseover"?r.attr("title",""):r.removeAttr("title")),s=this._tooltip(r),n(r,s.attr("id")),s.find(".ui-tooltip-content").html(i),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):s.position(e.extend({of:r},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.show&&this.options.show.delay&&(u=setInterval(function(){s.is(":visible")&&(f(a.of),clearInterval(u))},e.fx.interval)),this._trigger("open",t,{tooltip:s}),o={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var n=e.Event(t);n.currentTarget=r[0],this.close(n,!0)}},remove:function(){this._removeTooltip(s)}};if(!t||t.type==="mouseover")o.mouseleave="close";if(!t||t.type==="focusin")o.focusout="close";this._on(!0,r,o)},close:function(t){var n=this,i=e(t?t.currentTarget:this.element),s=this._find(i);if(this.closing)return;i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title")),r(i),s.stop(!0),this._hide(s,this.options.hide,function(){n._removeTooltip(e(this))}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),t&&t.type==="mouseleave"&&e.each(this.parents,function(t,r){e(r.element).attr("title",r.title),delete n.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:s}),this.closing=!1},_tooltip:function(n){var r="ui-tooltip-"+t++,i=e("<div>").attr({id:r,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),e.fn.bgiframe&&i.bgiframe(),this.tooltips[r]=n,i},_find:function(t){var n=t.data("ui-tooltip-id");return n?e("#"+n):e()},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0),e("#"+n).remove(),r.data("ui-tooltip-title")&&(r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))})}})}(jQuery);






/*! jquery.selectBoxIt - v3.8.1 - 2013-11-17
* http://www.selectboxit.com
* Copyright (c) 2013 Greg Franko; Licensed MIT*/
!function(a){"use strict";a(window.jQuery,window,document)}(function(a,b,c,d){"use strict";a.widget("selectBox.selectBoxIt",{VERSION:"3.8.1",options:{showEffect:"none",showEffectOptions:{},showEffectSpeed:"medium",hideEffect:"none",hideEffectOptions:{},hideEffectSpeed:"medium",showFirstOption:!0,defaultText:"",defaultIcon:"",downArrowIcon:"",theme:"default",keydownOpen:!0,isMobile:function(){var a=navigator.userAgent||navigator.vendor||b.opera;return/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(a)},"native":!1,aggressiveChange:!1,selectWhenHidden:!0,viewport:a(b),similarSearch:!1,copyAttributes:["title","rel"],copyClasses:"button",nativeMousedown:!1,customShowHideEvent:!1,autoWidth:!0,html:!0,populate:"",dynamicPositioning:!0,hideCurrent:!1},getThemes:function(){var b=this,c=a(b.element).attr("data-theme")||"c";return{bootstrap:{focus:"active",hover:"",enabled:"enabled",disabled:"disabled",arrow:"caret",button:"btn",list:"dropdown-menu",container:"bootstrap",open:"open"},jqueryui:{focus:"ui-state-focus",hover:"ui-state-hover",enabled:"ui-state-enabled",disabled:"ui-state-disabled",arrow:"ui-icon ui-icon-triangle-1-s",button:"ui-widget ui-state-default",list:"ui-widget ui-widget-content",container:"jqueryui",open:"selectboxit-open"},jquerymobile:{focus:"ui-btn-down-"+c,hover:"ui-btn-hover-"+c,enabled:"ui-enabled",disabled:"ui-disabled",arrow:"ui-icon ui-icon-arrow-d ui-icon-shadow",button:"ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-"+c,list:"ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-"+c,container:"jquerymobile",open:"selectboxit-open"},"default":{focus:"selectboxit-focus",hover:"selectboxit-hover",enabled:"selectboxit-enabled",disabled:"selectboxit-disabled",arrow:"selectboxit-default-arrow",button:"selectboxit-btn",list:"selectboxit-list",container:"selectboxit-container",open:"selectboxit-open"}}},isDeferred:function(b){return a.isPlainObject(b)&&b.promise&&b.done},_create:function(b){var d=this,e=d.options.populate,f=d.options.theme;if(d.element.is("select"))return d.widgetProto=a.Widget.prototype,d.originalElem=d.element[0],d.selectBox=d.element,d.options.populate&&d.add&&!b&&d.add(e),d.selectItems=d.element.find("option"),d.firstSelectItem=d.selectItems.slice(0,1),d.documentHeight=a(c).height(),d.theme=a.isPlainObject(f)?a.extend({},d.getThemes()["default"],f):d.getThemes()[f]?d.getThemes()[f]:d.getThemes()["default"],d.currentFocus=0,d.blur=!0,d.textArray=[],d.currentIndex=0,d.currentText="",d.flipped=!1,b||(d.selectBoxStyles=d.selectBox.attr("style")),d._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(d.theme)._eventHandlers(),d.originalElem.disabled&&d.disable&&d.disable(),d._ariaAccessibility&&d._ariaAccessibility(),d.isMobile=d.options.isMobile(),d._mobile&&d._mobile(),d.options["native"]&&this._applyNativeSelect(),d.triggerEvent("create"),d},_createDropdownButton:function(){var b=this,c=b.originalElemId=b.originalElem.id||"",d=b.originalElemValue=b.originalElem.value||"",e=b.originalElemName=b.originalElem.name||"",f=b.options.copyClasses,g=b.selectBox.attr("class")||"";return b.dropdownText=a("<span/>",{id:c&&c+"SelectBoxItText","class":"selectboxit-text",unselectable:"on",text:b.firstSelectItem.text()}).attr("data-val",d),b.dropdownImageContainer=a("<span/>",{"class":"selectboxit-option-icon-container"}),b.dropdownImage=a("<i/>",{id:c&&c+"SelectBoxItDefaultIcon","class":"selectboxit-default-icon",unselectable:"on"}),b.dropdown=a("<span/>",{id:c&&c+"SelectBoxIt","class":"selectboxit "+("button"===f?g:"")+" "+(b.selectBox.prop("disabled")?b.theme.disabled:b.theme.enabled),name:e,tabindex:b.selectBox.attr("tabindex")||"0",unselectable:"on"}).append(b.dropdownImageContainer.append(b.dropdownImage)).append(b.dropdownText),b.dropdownContainer=a("<span/>",{id:c&&c+"SelectBoxItContainer","class":"selectboxit-container "+b.theme.container+" "+("container"===f?g:"")}).append(b.dropdown),b},_createUnorderedList:function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o=this,p="",q=o.originalElemId||"",r=a("<ul/>",{id:q&&q+"SelectBoxItOptions","class":"selectboxit-options",tabindex:-1});if(o.options.showFirstOption||(o.selectItems.first().attr("disabled","disabled"),o.selectItems=o.selectBox.find("option").slice(1)),o.selectItems.each(function(q){m=a(this),c="",d="",b=m.prop("disabled"),e=m.attr("data-icon")||"",f=m.attr("data-iconurl")||"",g=f?"selectboxit-option-icon-url":"",h=f?"style=\"background-image:url('"+f+"');\"":"",i=m.attr("data-selectedtext"),j=m.attr("data-text"),l=j?j:m.text(),n=m.parent(),n.is("optgroup")&&(c="selectboxit-optgroup-option",0===m.index()&&(d='<span class="selectboxit-optgroup-header '+n.first().attr("class")+'"data-disabled="true">'+n.first().attr("label")+"</span>")),m.attr("value",this.value),p+=d+'<li data-id="'+q+'" data-val="'+this.value+'" data-disabled="'+b+'" class="'+c+" selectboxit-option "+(a(this).attr("class")||"")+'"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon '+e+" "+(g||o.theme.container)+'"'+h+"></i></span>"+(o.options.html?l:o.htmlEscape(l))+"</a></li>",k=m.attr("data-search"),o.textArray[q]=b?"":k?k:l,this.selected&&(o._setText(o.dropdownText,i||l),o.currentFocus=q)}),o.options.defaultText||o.selectBox.attr("data-text")){var s=o.options.defaultText||o.selectBox.attr("data-text");o._setText(o.dropdownText,s),o.options.defaultText=s}return r.append(p),o.list=r,o.dropdownContainer.append(o.list),o.listItems=o.list.children("li"),o.listAnchors=o.list.find("a"),o.listItems.first().addClass("selectboxit-option-first"),o.listItems.last().addClass("selectboxit-option-last"),o.list.find("li[data-disabled='true']").not(".optgroupHeader").addClass(o.theme.disabled),o.dropdownImage.addClass(o.selectBox.attr("data-icon")||o.options.defaultIcon||o.listItems.eq(o.currentFocus).find("i").attr("class")),o.dropdownImage.attr("style",o.listItems.eq(o.currentFocus).find("i").attr("style")),o},_replaceSelectBox:function(){var b,c,e,f=this,g=f.originalElem.id||"",h=f.selectBox.attr("data-size"),i=f.listSize=h===d?"auto":"0"===h?"auto":+h;return f.selectBox.css("display","none").after(f.dropdownContainer),f.dropdownContainer.appendTo("body").addClass("selectboxit-rendering"),b=f.dropdown.height(),f.downArrow=a("<i/>",{id:g&&g+"SelectBoxItArrow","class":"selectboxit-arrow",unselectable:"on"}),f.downArrowContainer=a("<span/>",{id:g&&g+"SelectBoxItArrowContainer","class":"selectboxit-arrow-container",unselectable:"on"}).append(f.downArrow),f.dropdown.append(f.downArrowContainer),f.listItems.removeClass("selectboxit-selected").eq(f.currentFocus).addClass("selectboxit-selected"),c=f.downArrowContainer.outerWidth(!0),e=f.dropdownImage.outerWidth(!0),f.options.autoWidth&&(f.dropdown.css({width:"auto"}).css({width:f.list.outerWidth(!0)+c+e}),f.list.css({"min-width":f.dropdown.width()})),f.dropdownText.css({"max-width":f.dropdownContainer.outerWidth(!0)-(c+e)}),f.selectBox.after(f.dropdownContainer),f.dropdownContainer.removeClass("selectboxit-rendering"),"number"===a.type(i)&&(f.maxHeight=f.listAnchors.outerHeight(!0)*i),f},_scrollToView:function(a){var b=this,c=b.listItems.eq(b.currentFocus),d=b.list.scrollTop(),e=c.height(),f=c.position().top,g=Math.abs(f),h=b.list.height();return"search"===a?e>h-f?b.list.scrollTop(d+(f-(h-e))):-1>f&&b.list.scrollTop(f-e):"up"===a?-1>f&&b.list.scrollTop(d-g):"down"===a&&e>h-f&&b.list.scrollTop(d+(g-h+e)),b},_callbackSupport:function(b){var c=this;return a.isFunction(b)&&b.call(c,c.dropdown),c},_setText:function(a,b){var c=this;return c.options.html?a.html(b):a.text(b),c},open:function(a){var b=this,c=b.options.showEffect,d=b.options.showEffectSpeed,e=b.options.showEffectOptions,f=b.options["native"],g=b.isMobile;return!b.listItems.length||b.dropdown.hasClass(b.theme.disabled)?b:(f||g||this.list.is(":visible")||(b.triggerEvent("open"),b._dynamicPositioning&&b.options.dynamicPositioning&&b._dynamicPositioning(),"none"===c?b.list.show():"show"===c||"slideDown"===c||"fadeIn"===c?b.list[c](d):b.list.show(c,e,d),b.list.promise().done(function(){b._scrollToView("search"),b.triggerEvent("opened")})),b._callbackSupport(a),b)},close:function(a){var b=this,c=b.options.hideEffect,d=b.options.hideEffectSpeed,e=b.options.hideEffectOptions,f=b.options["native"],g=b.isMobile;return f||g||!b.list.is(":visible")||(b.triggerEvent("close"),"none"===c?b.list.hide():"hide"===c||"slideUp"===c||"fadeOut"===c?b.list[c](d):b.list.hide(c,e,d),b.list.promise().done(function(){b.triggerEvent("closed")})),b._callbackSupport(a),b},toggle:function(){var a=this,b=a.list.is(":visible");b?a.close():b||a.open()},_keyMappings:{38:"up",40:"down",13:"enter",8:"backspace",9:"tab",32:"space",27:"esc"},_keydownMethods:function(){var a=this,b=a.list.is(":visible")||!a.options.keydownOpen;return{down:function(){a.moveDown&&b&&a.moveDown()},up:function(){a.moveUp&&b&&a.moveUp()},enter:function(){var b=a.listItems.eq(a.currentFocus);a._update(b),"true"!==b.attr("data-preventclose")&&a.close(),a.triggerEvent("enter")},tab:function(){a.triggerEvent("tab-blur"),a.close()},backspace:function(){a.triggerEvent("backspace")},esc:function(){a.close()}}},_eventHandlers:function(){var b,c,d=this,e=d.options.nativeMousedown,f=d.options.customShowHideEvent,g=d.focusClass,h=d.hoverClass,i=d.openClass;return this.dropdown.on({"click.selectBoxIt":function(){d.dropdown.trigger("focus",!0),d.originalElem.disabled||(d.triggerEvent("click"),e||f||d.toggle())},"mousedown.selectBoxIt":function(){a(this).data("mdown",!0),d.triggerEvent("mousedown"),e&&!f&&d.toggle()},"mouseup.selectBoxIt":function(){d.triggerEvent("mouseup")},"blur.selectBoxIt":function(){d.blur&&(d.triggerEvent("blur"),d.close(),a(this).removeClass(g))},"focus.selectBoxIt":function(b,c){var e=a(this).data("mdown");a(this).removeData("mdown"),e||c||setTimeout(function(){d.triggerEvent("tab-focus")},0),c||(a(this).hasClass(d.theme.disabled)||a(this).addClass(g),d.triggerEvent("focus"))},"keydown.selectBoxIt":function(a){var b=d._keyMappings[a.keyCode],c=d._keydownMethods()[b];c&&(c(),!d.options.keydownOpen||"up"!==b&&"down"!==b||d.open()),c&&"tab"!==b&&a.preventDefault()},"keypress.selectBoxIt":function(a){var b=a.charCode||a.keyCode,c=d._keyMappings[a.charCode||a.keyCode],e=String.fromCharCode(b);d.search&&(!c||c&&"space"===c)&&d.search(e,!0,!0),"space"===c&&a.preventDefault()},"mouseenter.selectBoxIt":function(){d.triggerEvent("mouseenter")},"mouseleave.selectBoxIt":function(){d.triggerEvent("mouseleave")}}),d.list.on({"mouseover.selectBoxIt":function(){d.blur=!1},"mouseout.selectBoxIt":function(){d.blur=!0},"focusin.selectBoxIt":function(){d.dropdown.trigger("focus",!0)}}),d.list.on({"mousedown.selectBoxIt":function(){d._update(a(this)),d.triggerEvent("option-click"),"false"===a(this).attr("data-disabled")&&"true"!==a(this).attr("data-preventclose")&&d.close(),setTimeout(function(){d.dropdown.trigger("focus",!0)},0)},"focusin.selectBoxIt":function(){d.listItems.not(a(this)).removeAttr("data-active"),a(this).attr("data-active","");var b=d.list.is(":hidden");(d.options.searchWhenHidden&&b||d.options.aggressiveChange||b&&d.options.selectWhenHidden)&&d._update(a(this)),a(this).addClass(g)},"mouseup.selectBoxIt":function(){e&&!f&&(d._update(a(this)),d.triggerEvent("option-mouseup"),"false"===a(this).attr("data-disabled")&&"true"!==a(this).attr("data-preventclose")&&d.close())},"mouseenter.selectBoxIt":function(){"false"===a(this).attr("data-disabled")&&(d.listItems.removeAttr("data-active"),a(this).addClass(g).attr("data-active",""),d.listItems.not(a(this)).removeClass(g),a(this).addClass(g),d.currentFocus=+a(this).attr("data-id"))},"mouseleave.selectBoxIt":function(){"false"===a(this).attr("data-disabled")&&(d.listItems.not(a(this)).removeClass(g).removeAttr("data-active"),a(this).addClass(g),d.currentFocus=+a(this).attr("data-id"))},"blur.selectBoxIt":function(){a(this).removeClass(g)}},".selectboxit-option"),d.list.on({"click.selectBoxIt":function(a){a.preventDefault()}},"a"),d.selectBox.on({"change.selectBoxIt, internal-change.selectBoxIt":function(a,e){var f,g;e||(f=d.list.find('li[data-val="'+d.originalElem.value+'"]'),f.length&&(d.listItems.eq(d.currentFocus).removeClass(d.focusClass),d.currentFocus=+f.attr("data-id"))),f=d.listItems.eq(d.currentFocus),g=f.attr("data-selectedtext"),b=f.attr("data-text"),c=b?b:f.find("a").text(),d._setText(d.dropdownText,g||c),d.dropdownText.attr("data-val",d.originalElem.value),f.find("i").attr("class")&&(d.dropdownImage.attr("class",f.find("i").attr("class")).addClass("selectboxit-default-icon"),d.dropdownImage.attr("style",f.find("i").attr("style"))),d.triggerEvent("changed")},"disable.selectBoxIt":function(){d.dropdown.addClass(d.theme.disabled)},"enable.selectBoxIt":function(){d.dropdown.removeClass(d.theme.disabled)},"open.selectBoxIt":function(){var a,b=d.list.find("li[data-val='"+d.dropdownText.attr("data-val")+"']");b.length||(b=d.listItems.not("[data-disabled=true]").first()),d.currentFocus=+b.attr("data-id"),a=d.listItems.eq(d.currentFocus),d.dropdown.addClass(i).removeClass(h).addClass(g),d.listItems.removeClass(d.selectedClass).removeAttr("data-active").not(a).removeClass(g),a.addClass(d.selectedClass).addClass(g),d.options.hideCurrent&&(d.listItems.show(),a.hide())},"close.selectBoxIt":function(){d.dropdown.removeClass(i)},"blur.selectBoxIt":function(){d.dropdown.removeClass(g)},"mouseenter.selectBoxIt":function(){a(this).hasClass(d.theme.disabled)||d.dropdown.addClass(h)},"mouseleave.selectBoxIt":function(){d.dropdown.removeClass(h)},destroy:function(a){a.preventDefault(),a.stopPropagation()}}),d},_update:function(a){var b,c,d,e=this,f=e.options.defaultText||e.selectBox.attr("data-text"),g=e.listItems.eq(e.currentFocus);"false"===a.attr("data-disabled")&&(b=e.listItems.eq(e.currentFocus).attr("data-selectedtext"),c=g.attr("data-text"),d=c?c:g.text(),(f&&e.options.html?e.dropdownText.html()===f:e.dropdownText.text()===f)&&e.selectBox.val()===a.attr("data-val")?e.triggerEvent("change"):(e.selectBox.val(a.attr("data-val")),e.currentFocus=+a.attr("data-id"),e.originalElem.value!==e.dropdownText.attr("data-val")&&e.triggerEvent("change")))},_addClasses:function(a){var b=this,c=(b.focusClass=a.focus,b.hoverClass=a.hover,a.button),d=a.list,e=a.arrow,f=a.container;return b.openClass=a.open,b.selectedClass="selectboxit-selected",b.downArrow.addClass(b.selectBox.attr("data-downarrow")||b.options.downArrowIcon||e),b.dropdownContainer.addClass(f),b.dropdown.addClass(c),b.list.addClass(d),b},refresh:function(a,b){var c=this;return c._destroySelectBoxIt()._create(!0),b||c.triggerEvent("refresh"),c._callbackSupport(a),c},htmlEscape:function(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},triggerEvent:function(a){var b=this,c=b.options.showFirstOption?b.currentFocus:b.currentFocus-1>=0?b.currentFocus:0;return b.selectBox.trigger(a,{selectbox:b.selectBox,selectboxOption:b.selectItems.eq(c),dropdown:b.dropdown,dropdownOption:b.listItems.eq(b.currentFocus)}),b},_copyAttributes:function(){var a=this;return a._addSelectBoxAttributes&&a._addSelectBoxAttributes(),a},_realOuterWidth:function(a){if(a.is(":visible"))return a.outerWidth(!0);var b,c=a.clone();return c.css({visibility:"hidden",display:"block",position:"absolute"}).appendTo("body"),b=c.outerWidth(!0),c.remove(),b}});var e=a.selectBox.selectBoxIt.prototype;e.add=function(b,c){this._populate(b,function(b){var d,e,f=this,g=a.type(b),h=0,i=[],j=f._isJSON(b),k=j&&f._parseJSON(b);if(b&&("array"===g||j&&k.data&&"array"===a.type(k.data))||"object"===g&&b.data&&"array"===a.type(b.data)){for(f._isJSON(b)&&(b=k),b.data&&(b=b.data),e=b.length;e-1>=h;h+=1)d=b[h],a.isPlainObject(d)?i.push(a("<option/>",d)):"string"===a.type(d)&&i.push(a("<option/>",{text:d,value:d}));f.selectBox.append(i)}else b&&"string"===g&&!f._isJSON(b)?f.selectBox.append(b):b&&"object"===g?f.selectBox.append(a("<option/>",b)):b&&f._isJSON(b)&&a.isPlainObject(f._parseJSON(b))&&f.selectBox.append(a("<option/>",f._parseJSON(b)));return f.dropdown?f.refresh(function(){f._callbackSupport(c)},!0):f._callbackSupport(c),f})},e._parseJSON=function(b){return JSON&&JSON.parse&&JSON.parse(b)||a.parseJSON(b)},e._isJSON=function(a){var b,c=this;try{return b=c._parseJSON(a),!0}catch(d){return!1}},e._populate=function(b,c){var d=this;return b=a.isFunction(b)?b.call():b,d.isDeferred(b)?b.done(function(a){c.call(d,a)}):c.call(d,b),d},e._ariaAccessibility=function(){var b=this,c=a("label[for='"+b.originalElem.id+"']");return b.dropdownContainer.attr({role:"combobox","aria-autocomplete":"list","aria-haspopup":"true","aria-expanded":"false","aria-owns":b.list[0].id}),b.dropdownText.attr({"aria-live":"polite"}),b.dropdown.on({"disable.selectBoxIt":function(){b.dropdownContainer.attr("aria-disabled","true")},"enable.selectBoxIt":function(){b.dropdownContainer.attr("aria-disabled","false")}}),c.length&&b.dropdownContainer.attr("aria-labelledby",c[0].id),b.list.attr({role:"listbox","aria-hidden":"true"}),b.listItems.attr({role:"option"}),b.selectBox.on({"open.selectBoxIt":function(){b.list.attr("aria-hidden","false"),b.dropdownContainer.attr("aria-expanded","true")},"close.selectBoxIt":function(){b.list.attr("aria-hidden","true"),b.dropdownContainer.attr("aria-expanded","false")}}),b},e._addSelectBoxAttributes=function(){var b=this;return b._addAttributes(b.selectBox.prop("attributes"),b.dropdown),b.selectItems.each(function(c){b._addAttributes(a(this).prop("attributes"),b.listItems.eq(c))}),b},e._addAttributes=function(b,c){var d=this,e=d.options.copyAttributes;return b.length&&a.each(b,function(b,d){var f=d.name.toLowerCase(),g=d.value;"null"===g||-1===a.inArray(f,e)&&-1===f.indexOf("data")||c.attr(f,g)}),d},e.destroy=function(a){var b=this;return b._destroySelectBoxIt(),b.widgetProto.destroy.call(b),b._callbackSupport(a),b},e._destroySelectBoxIt=function(){var b=this;return b.dropdown.off(".selectBoxIt"),a.contains(b.dropdownContainer[0],b.originalElem)&&b.dropdownContainer.before(b.selectBox),b.dropdownContainer.remove(),b.selectBox.removeAttr("style").attr("style",b.selectBoxStyles),b.triggerEvent("destroy"),b},e.disable=function(a){var b=this;return b.options.disabled||(b.close(),b.selectBox.attr("disabled","disabled"),b.dropdown.removeAttr("tabindex").removeClass(b.theme.enabled).addClass(b.theme.disabled),b.setOption("disabled",!0),b.triggerEvent("disable")),b._callbackSupport(a),b},e.disableOption=function(b,c){var d,e,f,g=this,h=a.type(b);return"number"===h&&(g.close(),d=g.selectBox.find("option").eq(b),g.triggerEvent("disable-option"),d.attr("disabled","disabled"),g.listItems.eq(b).attr("data-disabled","true").addClass(g.theme.disabled),g.currentFocus===b&&(e=g.listItems.eq(g.currentFocus).nextAll("li").not("[data-disabled='true']").first().length,f=g.listItems.eq(g.currentFocus).prevAll("li").not("[data-disabled='true']").first().length,e?g.moveDown():f?g.moveUp():g.disable())),g._callbackSupport(c),g},e._isDisabled=function(){var a=this;return a.originalElem.disabled&&a.disable(),a},e._dynamicPositioning=function(){var b=this;if("number"===a.type(b.listSize))b.list.css("max-height",b.maxHeight||"none");else{var c=b.dropdown.offset().top,d=b.list.data("max-height")||b.list.outerHeight(),e=b.dropdown.outerHeight(),f=b.options.viewport,g=f.height(),h=a.isWindow(f.get(0))?f.scrollTop():f.offset().top,i=g+h>=c+e+d,j=!i;if(b.list.data("max-height")||b.list.data("max-height",b.list.outerHeight()),j)if(b.dropdown.offset().top-h>=d)b.list.css("max-height",d),b.list.css("top",b.dropdown.position().top-b.list.outerHeight());else{var k=Math.abs(c+e+d-(g+h)),l=Math.abs(b.dropdown.offset().top-h-d);l>k?(b.list.css("max-height",d-k-e/2),b.list.css("top","auto")):(b.list.css("max-height",d-l-e/2),b.list.css("top",b.dropdown.position().top-b.list.outerHeight()))}else b.list.css("max-height",d),b.list.css("top","auto")}return b},e.enable=function(a){var b=this;return b.options.disabled&&(b.triggerEvent("enable"),b.selectBox.removeAttr("disabled"),b.dropdown.attr("tabindex",0).removeClass(b.theme.disabled).addClass(b.theme.enabled),b.setOption("disabled",!1),b._callbackSupport(a)),b},e.enableOption=function(b,c){var d,e=this,f=a.type(b);return"number"===f&&(d=e.selectBox.find("option").eq(b),e.triggerEvent("enable-option"),d.removeAttr("disabled"),e.listItems.eq(b).attr("data-disabled","false").removeClass(e.theme.disabled)),e._callbackSupport(c),e},e.moveDown=function(a){var b=this;b.currentFocus+=1;var c="true"===b.listItems.eq(b.currentFocus).attr("data-disabled")?!0:!1,d=b.listItems.eq(b.currentFocus).nextAll("li").not("[data-disabled='true']").first().length;if(b.currentFocus===b.listItems.length)b.currentFocus-=1;else{if(c&&d)return b.listItems.eq(b.currentFocus-1).blur(),b.moveDown(),void 0;c&&!d?b.currentFocus-=1:(b.listItems.eq(b.currentFocus-1).blur().end().eq(b.currentFocus).focusin(),b._scrollToView("down"),b.triggerEvent("moveDown"))}return b._callbackSupport(a),b},e.moveUp=function(a){var b=this;b.currentFocus-=1;var c="true"===b.listItems.eq(b.currentFocus).attr("data-disabled")?!0:!1,d=b.listItems.eq(b.currentFocus).prevAll("li").not("[data-disabled='true']").first().length;if(-1===b.currentFocus)b.currentFocus+=1;else{if(c&&d)return b.listItems.eq(b.currentFocus+1).blur(),b.moveUp(),void 0;c&&!d?b.currentFocus+=1:(b.listItems.eq(this.currentFocus+1).blur().end().eq(b.currentFocus).focusin(),b._scrollToView("up"),b.triggerEvent("moveUp"))}return b._callbackSupport(a),b},e._setCurrentSearchOption=function(a){var b=this;return(b.options.aggressiveChange||b.options.selectWhenHidden||b.listItems.eq(a).is(":visible"))&&b.listItems.eq(a).data("disabled")!==!0&&(b.listItems.eq(b.currentFocus).blur(),b.currentIndex=a,b.currentFocus=a,b.listItems.eq(b.currentFocus).focusin(),b._scrollToView("search"),b.triggerEvent("search")),b},e._searchAlgorithm=function(a,b){var c,d,e,f,g=this,h=!1,i=g.textArray,j=g.currentText;for(c=a,e=i.length;e>c;c+=1){for(f=i[c],d=0;e>d;d+=1)-1!==i[d].search(b)&&(h=!0,d=e);if(h||(g.currentText=g.currentText.charAt(g.currentText.length-1).replace(/[|()\[{.+*?$\\]/g,"\\$0"),j=g.currentText),b=new RegExp(j,"gi"),j.length<3){if(b=new RegExp(j.charAt(0),"gi"),-1!==f.charAt(0).search(b))return g._setCurrentSearchOption(c),(f.substring(0,j.length).toLowerCase()!==j.toLowerCase()||g.options.similarSearch)&&(g.currentIndex+=1),!1}else if(-1!==f.search(b))return g._setCurrentSearchOption(c),!1;if(f.toLowerCase()===g.currentText.toLowerCase())return g._setCurrentSearchOption(c),g.currentText="",!1}return!0},e.search=function(a,b,c){var d=this;c?d.currentText+=a.replace(/[|()\[{.+*?$\\]/g,"\\$0"):d.currentText=a.replace(/[|()\[{.+*?$\\]/g,"\\$0");var e=d._searchAlgorithm(d.currentIndex,new RegExp(d.currentText,"gi"));return e&&d._searchAlgorithm(0,d.currentText),d._callbackSupport(b),d},e._updateMobileText=function(){var a,b,c,d=this;a=d.selectBox.find("option").filter(":selected"),b=a.attr("data-text"),c=b?b:a.text(),d._setText(d.dropdownText,c),d.list.find('li[data-val="'+a.val()+'"]').find("i").attr("class")&&d.dropdownImage.attr("class",d.list.find('li[data-val="'+a.val()+'"]').find("i").attr("class")).addClass("selectboxit-default-icon")},e._applyNativeSelect=function(){var a=this;return a.dropdownContainer.append(a.selectBox),a.dropdown.attr("tabindex","-1"),a.selectBox.css({display:"block",visibility:"visible",width:a._realOuterWidth(a.dropdown),height:a.dropdown.outerHeight(),opacity:"0",position:"absolute",top:"0",left:"0",cursor:"pointer","z-index":"999999",margin:a.dropdown.css("margin"),padding:"0","-webkit-appearance":"menulist-button"}),a.originalElem.disabled&&a.triggerEvent("disable"),this},e._mobileEvents=function(){var a=this;a.selectBox.on({"changed.selectBoxIt":function(){a.hasChanged=!0,a._updateMobileText(),a.triggerEvent("option-click")},"mousedown.selectBoxIt":function(){a.hasChanged||!a.options.defaultText||a.originalElem.disabled||(a._updateMobileText(),a.triggerEvent("option-click"))},"enable.selectBoxIt":function(){a.selectBox.removeClass("selectboxit-rendering")},"disable.selectBoxIt":function(){a.selectBox.addClass("selectboxit-rendering")}})},e._mobile=function(){var a=this;return a.isMobile&&(a._applyNativeSelect(),a._mobileEvents()),this},e.remove=function(b,c){var d,e,f=this,g=a.type(b),h=0,i="";if("array"===g){for(e=b.length;e-1>=h;h+=1)d=b[h],"number"===a.type(d)&&(i+=i.length?", option:eq("+d+")":"option:eq("+d+")");f.selectBox.find(i).remove()}else"number"===g?f.selectBox.find("option").eq(b).remove():f.selectBox.find("option").remove();return f.dropdown?f.refresh(function(){f._callbackSupport(c)},!0):f._callbackSupport(c),f},e.selectOption=function(b,c){var d=this,e=a.type(b);return"number"===e?d.selectBox.val(d.selectItems.eq(b).val()).change():"string"===e&&d.selectBox.val(b).change(),d._callbackSupport(c),d},e.setOption=function(b,c,d){var e=this;return"string"===a.type(b)&&(e.options[b]=c),e.refresh(function(){e._callbackSupport(d)},!0),e},e.setOptions=function(b,c){var d=this;return a.isPlainObject(b)&&(d.options=a.extend({},d.options,b)),d.refresh(function(){d._callbackSupport(c)},!0),d},e.wait=function(a,b){var c=this;return c.widgetProto._delay.call(c,b,a),c}});









/** MAP BOX v2.4.0 **/

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function corslite(n,t,o){function e(n){return n>=200&&300>n||304===n}function i(){void 0===r.status||e(r.status)?t.call(r,null,r):t.call(r,r,null)}var l=!1;if("undefined"==typeof window.XMLHttpRequest)return t(Error("Browser not supported"));if("undefined"==typeof o){var u=n.match(/^\s*https?:\/\/[^\/]*/);o=u&&u[0]!==location.protocol+"//"+location.domain+(location.port?":"+location.port:"")}var r=new window.XMLHttpRequest;if(o&&!("withCredentials"in r)){r=new window.XDomainRequest;var a=t;t=function(){if(l)a.apply(this,arguments);else{var n=this,t=arguments;setTimeout(function(){a.apply(n,t)},0)}}}return"onload"in r?r.onload=i:r.onreadystatechange=function(){4===r.readyState&&i()},r.onerror=function(n){t.call(this,n||!0,null),t=function(){}},r.onprogress=function(){},r.ontimeout=function(n){t.call(this,n,null),t=function(){}},r.onabort=function(n){t.call(this,n,null),t=function(){}},r.open("GET",n,!0),r.send(null),l=!0,r}"undefined"!=typeof module&&(module.exports=corslite);
},{}],2:[function(require,module,exports){
module.exports=Array.isArray||function(r){return"[object Array]"==Object.prototype.toString.call(r)};
},{}],3:[function(require,module,exports){
!function(t,e,i){var n=t.L,o={};o.version="0.7.7","object"==typeof module&&"object"==typeof module.exports?module.exports=o:"function"==typeof define&&define.amd&&define(o),o.noConflict=function(){return t.L=n,this},t.L=o,o.Util={extend:function(t){var e,i,n,o,s=Array.prototype.slice.call(arguments,1);for(i=0,n=s.length;n>i;i++){o=s[i]||{};for(e in o)o.hasOwnProperty(e)&&(t[e]=o[e])}return t},bind:function(t,e){var i=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return t.apply(e,i||arguments)}},stamp:function(){var t=0,e="_leaflet_id";return function(i){return i[e]=i[e]||++t,i[e]}}(),invokeEach:function(t,e,i){var n,o;if("object"==typeof t){o=Array.prototype.slice.call(arguments,3);for(n in t)e.apply(i,[n,t[n]].concat(o));return!0}return!1},limitExecByInterval:function(t,e,i){var n,o;return function s(){var a=arguments;return n?void(o=!0):(n=!0,setTimeout(function(){n=!1,o&&(s.apply(i,a),o=!1)},e),void t.apply(i,a))}},falseFn:function(){return!1},formatNum:function(t,e){var i=Math.pow(10,e||5);return Math.round(t*i)/i},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){return o.Util.trim(t).split(/\s+/)},setOptions:function(t,e){return t.options=o.extend({},t.options,e),t.options},getParamString:function(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")},template:function(t,e){return t.replace(/\{ *([\w_]+) *\}/g,function(t,n){var o=e[n];if(o===i)throw new Error("No value provided for variable "+t);return"function"==typeof o&&(o=o(e)),o})},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){var i,n,o=["webkit","moz","o","ms"];for(i=0;i<o.length&&!n;i++)n=t[o[i]+e];return n}function i(e){var i=+new Date,o=Math.max(0,16-(i-n));return n=i+o,t.setTimeout(e,o)}var n=0,s=t.requestAnimationFrame||e("RequestAnimationFrame")||i,a=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)};o.Util.requestAnimFrame=function(e,n,a,r){return e=o.bind(e,n),a&&s===i?void e():s.call(t,e,r)},o.Util.cancelAnimFrame=function(e){e&&a.call(t,e)}}(),o.extend=o.Util.extend,o.bind=o.Util.bind,o.stamp=o.Util.stamp,o.setOptions=o.Util.setOptions,o.Class=function(){},o.Class.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},i=function(){};i.prototype=this.prototype;var n=new i;n.constructor=e,e.prototype=n;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(e[s]=this[s]);t.statics&&(o.extend(e,t.statics),delete t.statics),t.includes&&(o.Util.extend.apply(null,[n].concat(t.includes)),delete t.includes),t.options&&n.options&&(t.options=o.extend({},n.options,t.options)),o.extend(n,t),n._initHooks=[];var a=this;return e.__super__=a.prototype,n.callInitHooks=function(){if(!this._initHooksCalled){a.prototype.callInitHooks&&a.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=n._initHooks.length;e>t;t++)n._initHooks[t].call(this)}},e},o.Class.include=function(t){o.extend(this.prototype,t)},o.Class.mergeOptions=function(t){o.extend(this.prototype.options,t)},o.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i)};var s="_leaflet_events";o.Mixin={},o.Mixin.Events={addEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d=this[s]=this[s]||{},p=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)r={action:e,context:i||this},h=t[n],p?(l=h+"_idx",u=l+"_len",c=d[l]=d[l]||{},c[p]||(c[p]=[],d[u]=(d[u]||0)+1),c[p].push(r)):(d[h]=d[h]||[],d[h].push(r));return this},hasEventListeners:function(t){var e=this[s];return!!e&&(t in e&&e[t].length>0||t+"_idx"in e&&e[t+"_idx_len"]>0)},removeEventListener:function(t,e,i){if(!this[s])return this;if(!t)return this.clearAllEventListeners();if(o.Util.invokeEach(t,this.removeEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d,p,_=this[s],m=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)if(r=t[n],u=r+"_idx",c=u+"_len",d=_[u],e){if(h=m&&d?d[m]:_[r]){for(l=h.length-1;l>=0;l--)h[l].action!==e||i&&h[l].context!==i||(p=h.splice(l,1),p[0].action=o.Util.falseFn);i&&d&&0===h.length&&(delete d[m],_[c]--)}}else delete _[r],delete _[u],delete _[c];return this},clearAllEventListeners:function(){return delete this[s],this},fireEvent:function(t,e){if(!this.hasEventListeners(t))return this;var i,n,a,r,h,l=o.Util.extend({},e,{type:t,target:this}),u=this[s];if(u[t])for(i=u[t].slice(),n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);r=u[t+"_idx"];for(h in r)if(i=r[h].slice())for(n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);return this},addOneTimeEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addOneTimeEventListener,this,e,i))return this;var n=o.bind(function(){this.removeEventListener(t,e,i).removeEventListener(t,n,i)},this);return this.addEventListener(t,e,i).addEventListener(t,n,i)}},o.Mixin.Events.on=o.Mixin.Events.addEventListener,o.Mixin.Events.off=o.Mixin.Events.removeEventListener,o.Mixin.Events.once=o.Mixin.Events.addOneTimeEventListener,o.Mixin.Events.fire=o.Mixin.Events.fireEvent,function(){var n="ActiveXObject"in t,s=n&&!e.addEventListener,a=navigator.userAgent.toLowerCase(),r=-1!==a.indexOf("webkit"),h=-1!==a.indexOf("chrome"),l=-1!==a.indexOf("phantom"),u=-1!==a.indexOf("android"),c=-1!==a.search("android [23]"),d=-1!==a.indexOf("gecko"),p=typeof orientation!=i+"",_=!t.PointerEvent&&t.MSPointerEvent,m=t.PointerEvent&&t.navigator.pointerEnabled||_,f="devicePixelRatio"in t&&t.devicePixelRatio>1||"matchMedia"in t&&t.matchMedia("(min-resolution:144dpi)")&&t.matchMedia("(min-resolution:144dpi)").matches,g=e.documentElement,v=n&&"transition"in g.style,y="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix&&!c,P="MozPerspective"in g.style,L="OTransition"in g.style,x=!t.L_DISABLE_3D&&(v||y||P||L)&&!l,w=!t.L_NO_TOUCH&&!l&&(m||"ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch);o.Browser={ie:n,ielt9:s,webkit:r,gecko:d&&!r&&!t.opera&&!n,android:u,android23:c,chrome:h,ie3d:v,webkit3d:y,gecko3d:P,opera3d:L,any3d:x,mobile:p,mobileWebkit:p&&r,mobileWebkit3d:p&&y,mobileOpera:p&&t.opera,touch:w,msPointer:_,pointer:m,retina:f}}(),o.Point=function(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e},o.Point.prototype={clone:function(){return new o.Point(this.x,this.y)},add:function(t){return this.clone()._add(o.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(o.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(t){t=o.point(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=o.point(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=o.point(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+o.Util.formatNum(this.x)+", "+o.Util.formatNum(this.y)+")"}},o.point=function(t,e,n){return t instanceof o.Point?t:o.Util.isArray(t)?new o.Point(t[0],t[1]):t===i||null===t?t:new o.Point(t,e,n)},o.Bounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.Bounds.prototype={extend:function(t){return t=o.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new o.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new o.Point(this.min.x,this.max.y)},getTopRight:function(){return new o.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return t="number"==typeof t[0]||t instanceof o.Point?o.point(t):o.bounds(t),t instanceof o.Bounds?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=o.bounds(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,r=s.y>=e.y&&n.y<=i.y;return a&&r},isValid:function(){return!(!this.min||!this.max)}},o.bounds=function(t,e){return!t||t instanceof o.Bounds?t:new o.Bounds(t,e)},o.Transformation=function(t,e,i,n){this._a=t,this._b=e,this._c=i,this._d=n},o.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new o.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},o.DomUtil={get:function(t){return"string"==typeof t?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i];if(!n&&t.currentStyle&&(n=t.currentStyle[i]),(!n||"auto"===n)&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null);n=o?o[i]:null}return"auto"===n?null:n},getViewportOffset:function(t){var i,n=0,s=0,a=t,r=e.body,h=e.documentElement;do{if(n+=a.offsetTop||0,s+=a.offsetLeft||0,n+=parseInt(o.DomUtil.getStyle(a,"borderTopWidth"),10)||0,s+=parseInt(o.DomUtil.getStyle(a,"borderLeftWidth"),10)||0,i=o.DomUtil.getStyle(a,"position"),a.offsetParent===r&&"absolute"===i)break;if("fixed"===i){n+=r.scrollTop||h.scrollTop||0,s+=r.scrollLeft||h.scrollLeft||0;break}if("relative"===i&&!a.offsetLeft){var l=o.DomUtil.getStyle(a,"width"),u=o.DomUtil.getStyle(a,"max-width"),c=a.getBoundingClientRect();("none"!==l||"none"!==u)&&(s+=c.left+a.clientLeft),n+=c.top+(r.scrollTop||h.scrollTop||0);break}a=a.offsetParent}while(a);a=t;do{if(a===r)break;n-=a.scrollTop||0,s-=a.scrollLeft||0,a=a.parentNode}while(a);return new o.Point(s,n)},documentIsLtr:function(){return o.DomUtil._docIsLtrCached||(o.DomUtil._docIsLtrCached=!0,o.DomUtil._docIsLtr="ltr"===o.DomUtil.getStyle(e.body,"direction")),o.DomUtil._docIsLtr},create:function(t,i,n){var o=e.createElement(t);return o.className=i,n&&n.appendChild(o),o},hasClass:function(t,e){if(t.classList!==i)return t.classList.contains(e);var n=o.DomUtil._getClass(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)},addClass:function(t,e){if(t.classList!==i)for(var n=o.Util.splitWords(e),s=0,a=n.length;a>s;s++)t.classList.add(n[s]);else if(!o.DomUtil.hasClass(t,e)){var r=o.DomUtil._getClass(t);o.DomUtil._setClass(t,(r?r+" ":"")+e)}},removeClass:function(t,e){t.classList!==i?t.classList.remove(e):o.DomUtil._setClass(t,o.Util.trim((" "+o.DomUtil._getClass(t)+" ").replace(" "+e+" "," ")))},_setClass:function(t,e){t.className.baseVal===i?t.className=e:t.className.baseVal=e},_getClass:function(t){return t.className.baseVal===i?t.className:t.className.baseVal},setOpacity:function(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(o){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}},testProp:function(t){for(var i=e.documentElement.style,n=0;n<t.length;n++)if(t[n]in i)return t[n];return!1},getTranslateString:function(t){var e=o.Browser.webkit3d,i="translate"+(e?"3d":"")+"(",n=(e?",0":"")+")";return i+t.x+"px,"+t.y+"px"+n},getScaleString:function(t,e){var i=o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1*t))),n=" scale("+t+") ";return i+n},setPosition:function(t,e,i){t._leaflet_pos=e,!i&&o.Browser.any3d?t.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(e):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){return t._leaflet_pos}},o.DomUtil.TRANSFORM=o.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),o.DomUtil.TRANSITION=o.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),o.DomUtil.TRANSITION_END="webkitTransition"===o.DomUtil.TRANSITION||"OTransition"===o.DomUtil.TRANSITION?o.DomUtil.TRANSITION+"End":"transitionend",function(){if("onselectstart"in e)o.extend(o.DomUtil,{disableTextSelection:function(){o.DomEvent.on(t,"selectstart",o.DomEvent.preventDefault)},enableTextSelection:function(){o.DomEvent.off(t,"selectstart",o.DomEvent.preventDefault)}});else{var i=o.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);o.extend(o.DomUtil,{disableTextSelection:function(){if(i){var t=e.documentElement.style;this._userSelect=t[i],t[i]="none"}},enableTextSelection:function(){i&&(e.documentElement.style[i]=this._userSelect,delete this._userSelect)}})}o.extend(o.DomUtil,{disableImageDrag:function(){o.DomEvent.on(t,"dragstart",o.DomEvent.preventDefault)},enableImageDrag:function(){o.DomEvent.off(t,"dragstart",o.DomEvent.preventDefault)}})}(),o.LatLng=function(t,e,n){if(t=parseFloat(t),e=parseFloat(e),isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=t,this.lng=e,n!==i&&(this.alt=parseFloat(n))},o.extend(o.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),o.LatLng.prototype={equals:function(t){if(!t)return!1;t=o.latLng(t);var e=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return e<=o.LatLng.MAX_MARGIN},toString:function(t){return"LatLng("+o.Util.formatNum(this.lat,t)+", "+o.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){t=o.latLng(t);var e=6378137,i=o.LatLng.DEG_TO_RAD,n=(t.lat-this.lat)*i,s=(t.lng-this.lng)*i,a=this.lat*i,r=t.lat*i,h=Math.sin(n/2),l=Math.sin(s/2),u=h*h+l*l*Math.cos(a)*Math.cos(r);return 2*e*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))},wrap:function(t,e){var i=this.lng;return t=t||-180,e=e||180,i=(i+e)%(e-t)+(t>i||i===e?e:t),new o.LatLng(this.lat,i)}},o.latLng=function(t,e){return t instanceof o.LatLng?t:o.Util.isArray(t)?"number"==typeof t[0]||"string"==typeof t[0]?new o.LatLng(t[0],t[1],t[2]):null:t===i||null===t?t:"object"==typeof t&&"lat"in t?new o.LatLng(t.lat,"lng"in t?t.lng:t.lon):e===i?null:new o.LatLng(t,e)},o.LatLngBounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.LatLngBounds.prototype={extend:function(t){if(!t)return this;var e=o.latLng(t);return t=null!==e?e:o.latLngBounds(t),t instanceof o.LatLng?this._southWest||this._northEast?(this._southWest.lat=Math.min(t.lat,this._southWest.lat),this._southWest.lng=Math.min(t.lng,this._southWest.lng),this._northEast.lat=Math.max(t.lat,this._northEast.lat),this._northEast.lng=Math.max(t.lng,this._northEast.lng)):(this._southWest=new o.LatLng(t.lat,t.lng),this._northEast=new o.LatLng(t.lat,t.lng)):t instanceof o.LatLngBounds&&(this.extend(t._southWest),this.extend(t._northEast)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new o.LatLngBounds(new o.LatLng(e.lat-n,e.lng-s),new o.LatLng(i.lat+n,i.lng+s))},getCenter:function(){return new o.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new o.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new o.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof o.LatLng?o.latLng(t):o.latLngBounds(t);var e,i,n=this._southWest,s=this._northEast;return t instanceof o.LatLngBounds?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=s.lat&&e.lng>=n.lng&&i.lng<=s.lng},intersects:function(t){t=o.latLngBounds(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,r=s.lng>=e.lng&&n.lng<=i.lng;return a&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){return t?(t=o.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast())):!1},isValid:function(){return!(!this._southWest||!this._northEast)}},o.latLngBounds=function(t,e){return!t||t instanceof o.LatLngBounds?t:new o.LatLngBounds(t,e)},o.Projection={},o.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=t.lng*e,a=n*e;return a=Math.log(Math.tan(Math.PI/4+a/2)),new o.Point(s,a)},unproject:function(t){var e=o.LatLng.RAD_TO_DEG,i=t.x*e,n=(2*Math.atan(Math.exp(t.y))-Math.PI/2)*e;return new o.LatLng(n,i)}},o.Projection.LonLat={project:function(t){return new o.Point(t.lng,t.lat)},unproject:function(t){return new o.LatLng(t.y,t.x)}},o.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},scale:function(t){return 256*Math.pow(2,t)},getSize:function(t){var e=this.scale(t);return o.point(e,e)}},o.CRS.Simple=o.extend({},o.CRS,{projection:o.Projection.LonLat,transformation:new o.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)}}),o.CRS.EPSG3857=o.extend({},o.CRS,{code:"EPSG:3857",projection:o.Projection.SphericalMercator,transformation:new o.Transformation(.5/Math.PI,.5,-.5/Math.PI,.5),project:function(t){var e=this.projection.project(t),i=6378137;return e.multiplyBy(i)}}),o.CRS.EPSG900913=o.extend({},o.CRS.EPSG3857,{code:"EPSG:900913"}),o.CRS.EPSG4326=o.extend({},o.CRS,{code:"EPSG:4326",projection:o.Projection.LonLat,transformation:new o.Transformation(1/360,.5,-1/360,.5)}),o.Map=o.Class.extend({includes:o.Mixin.Events,options:{crs:o.CRS.EPSG3857,fadeAnimation:o.DomUtil.TRANSITION&&!o.Browser.android23,trackResize:!0,markerZoomAnimation:o.DomUtil.TRANSITION&&o.Browser.any3d},initialize:function(t,e){e=o.setOptions(this,e),this._initContainer(t),this._initLayout(),this._onResize=o.bind(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.center&&e.zoom!==i&&this.setView(o.latLng(e.center),e.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0,this.callInitHooks(),this._addLayers(e.layers)},setView:function(t,e){return e=e===i?this.getZoom():e,this._resetView(o.latLng(t),this._limitZoom(e)),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=this._limitZoom(t),this)},zoomIn:function(t,e){return this.setZoom(this._zoom+(t||1),e)},zoomOut:function(t,e){return this.setZoom(this._zoom-(t||1),e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof o.Point?t:this.latLngToContainerPoint(t),r=a.subtract(s).multiplyBy(1-1/n),h=this.containerPointToLatLng(s.add(r));return this.setView(h,e,{zoom:i})},fitBounds:function(t,e){e=e||{},t=t.getBounds?t.getBounds():o.latLngBounds(t);var i=o.point(e.paddingTopLeft||e.padding||[0,0]),n=o.point(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n));s=e.maxZoom?Math.min(e.maxZoom,s):s;var a=n.subtract(i).divideBy(2),r=this.project(t.getSouthWest(),s),h=this.project(t.getNorthEast(),s),l=this.unproject(r.add(h).divideBy(2).add(a),s);return this.setView(l,s,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t){return this.fire("movestart"),this._rawPanBy(o.point(t)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(t){return t=o.latLngBounds(t),this.options.maxBounds=t,t?(this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds,this)):this.off("moveend",this._panInsideMaxBounds,this)},panInsideBounds:function(t,e){var i=this.getCenter(),n=this._limitCenter(i,this._zoom,t);return i.equals(n)?this:this.panTo(n,e)},addLayer:function(t){var e=o.stamp(t);return this._layers[e]?this:(this._layers[e]=t,!t.options||isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[e]=t,this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,t.on("load",this._onTileLayerLoad,this)),this._loaded&&this._layerAdd(t),this)},removeLayer:function(t){var e=o.stamp(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&this.fire("layerremove",{layer:t}),this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,t.off("load",this._onTileLayerLoad,this)),this):this},hasLayer:function(t){return t?o.stamp(t)in this._layers:!1},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},invalidateSize:function(t){if(!this._loaded)return this;t=o.extend({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._initialCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),a=n.subtract(s);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){this._loaded&&this.fire("unload"),this._initEvents("off");try{delete this._container._leaflet}catch(t){this._container._leaflet=i}return this._clearPanes(),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this},getCenter:function(){return this._checkIfLoaded(),this._initialCenter&&!this._moved()?this._initialCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new o.LatLngBounds(e,i)},getMinZoom:function(){return this.options.minZoom===i?this._layersMinZoom===i?0:this._layersMinZoom:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===i?this._layersMaxZoom===i?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=o.latLngBounds(t);var n,s=this.getMinZoom()-(e?1:0),a=this.getMaxZoom(),r=this.getSize(),h=t.getNorthWest(),l=t.getSouthEast(),u=!0;i=o.point(i||[0,0]);do s++,n=this.project(l,s).subtract(this.project(h,s)).add(i),u=e?n.x<r.x||n.y<r.y:r.contains(n);while(u&&a>=s);return u&&e?null:e?s:s-1},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new o.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(){var t=this._getTopLeftPoint();return new o.Bounds(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t){var e=this.options.crs;return e.scale(t)/e.scale(this._zoom)},getScaleZoom:function(t){return this._zoom+Math.log(t)/Math.LN2},project:function(t,e){return e=e===i?this._zoom:e,this.options.crs.latLngToPoint(o.latLng(t),e)},unproject:function(t,e){return e=e===i?this._zoom:e,this.options.crs.pointToLatLng(o.point(t),e)},layerPointToLatLng:function(t){var e=o.point(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(o.latLng(t))._round();return e._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(t){return o.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return o.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(o.point(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))},mouseEventToContainerPoint:function(t){return o.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=o.DomUtil.get(t);if(!e)throw new Error("Map container not found.");if(e._leaflet)throw new Error("Map container is already initialized.");e._leaflet=!0},_initLayout:function(){var t=this._container;o.DomUtil.addClass(t,"leaflet-container"+(o.Browser.touch?" leaflet-touch":"")+(o.Browser.retina?" leaflet-retina":"")+(o.Browser.ielt9?" leaflet-oldie":"")+(this.options.fadeAnimation?" leaflet-fade-anim":""));var e=o.DomUtil.getStyle(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._mapPane=t.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=t.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),t.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),t.shadowPane=this._createPane("leaflet-shadow-pane"),t.overlayPane=this._createPane("leaflet-overlay-pane"),t.markerPane=this._createPane("leaflet-marker-pane"),t.popupPane=this._createPane("leaflet-popup-pane");var e=" leaflet-zoom-hide";this.options.markerZoomAnimation||(o.DomUtil.addClass(t.markerPane,e),o.DomUtil.addClass(t.shadowPane,e),o.DomUtil.addClass(t.popupPane,e))},_createPane:function(t,e){return o.DomUtil.create("div",t,e||this._panes.objectsPane)},_clearPanes:function(){this._container.removeChild(this._mapPane)},_addLayers:function(t){t=t?o.Util.isArray(t)?t:[t]:[];for(var e=0,i=t.length;i>e;e++)this.addLayer(t[e])},_resetView:function(t,e,i,n){var s=this._zoom!==e;n||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=e,this._initialCenter=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(t),i?this._initialTopLeftPoint._add(this._getMapPanePos()):o.DomUtil.setPosition(this._mapPane,new o.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var a=!this._loaded;this._loaded=!0,this.fire("viewreset",{hard:!i}),a&&(this.fire("load"),this.eachLayer(this._layerAdd,this)),this.fire("move"),(s||n)&&this.fire("zoomend"),this.fire("moveend",{hard:!i})},_rawPanBy:function(t){o.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var t,e=1/0,n=-(1/0),o=this._getZoomSpan();for(t in this._zoomBoundLayers){var s=this._zoomBoundLayers[t];isNaN(s.options.minZoom)||(e=Math.min(e,s.options.minZoom)),isNaN(s.options.maxZoom)||(n=Math.max(n,s.options.maxZoom))}t===i?this._layersMaxZoom=this._layersMinZoom=i:(this._layersMaxZoom=n,this._layersMinZoom=e),o!==this._getZoomSpan()&&this.fire("zoomlevelschange")},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(e){if(o.DomEvent){e=e||"on",o.DomEvent[e](this._container,"click",this._onMouseClick,this);var i,n,s=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"];for(i=0,n=s.length;n>i;i++)o.DomEvent[e](this._container,s[i],this._fireMouseEvent,this);this.options.trackResize&&o.DomEvent[e](t,"resize",this._onResize,this)}},_onResize:function(){o.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=o.Util.requestAnimFrame(function(){this.invalidateSize({debounceMoveend:!0})},this,!1,this._container)},_onMouseClick:function(t){!this._loaded||!t._simulated&&(this.dragging&&this.dragging.moved()||this.boxZoom&&this.boxZoom.moved())||o.DomEvent._skipped(t)||(this.fire("preclick"),this._fireMouseEvent(t))},_fireMouseEvent:function(t){if(this._loaded&&!o.DomEvent._skipped(t)){var e=t.type;if(e="mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,this.hasEventListeners(e)){"contextmenu"===e&&o.DomEvent.preventDefault(t);var i=this.mouseEventToContainerPoint(t),n=this.containerPointToLayerPoint(i),s=this.layerPointToLatLng(n);this.fire(e,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t})}}},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this.fire("tilelayersload")},_clearHandlers:function(){for(var t=0,e=this._handlers.length;e>t;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,this):this.on("load",t,e),this},_layerAdd:function(t){t.onAdd(this),this.fire("layeradd",{layer:t})},_getMapPanePos:function(){return o.DomUtil.getPosition(this._mapPane)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewTopLeftPoint(i,e).add(this._getMapPanePos());return this.project(t,e)._subtract(n)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),a=new o.Bounds(n.subtract(s),n.add(s)),r=this._getBoundsOffset(a,i,e);return this.unproject(n.add(r),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new o.Bounds(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=this.project(e.getNorthWest(),i).subtract(t.min),s=this.project(e.getSouthEast(),i).subtract(t.max),a=this._rebound(n.x,-s.x),r=this._rebound(n.y,-s.y);return new o.Point(a,r)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom();return Math.max(e,Math.min(i,t))}}),o.map=function(t,e){return new o.Map(t,e)},o.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.314245179,R_MAJOR:6378137,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=this.R_MAJOR,a=this.R_MINOR,r=t.lng*e*s,h=n*e,l=a/s,u=Math.sqrt(1-l*l),c=u*Math.sin(h);c=Math.pow((1-c)/(1+c),.5*u);var d=Math.tan(.5*(.5*Math.PI-h))/c;return h=-s*Math.log(d),new o.Point(r,h)},unproject:function(t){for(var e,i=o.LatLng.RAD_TO_DEG,n=this.R_MAJOR,s=this.R_MINOR,a=t.x*i/n,r=s/n,h=Math.sqrt(1-r*r),l=Math.exp(-t.y/n),u=Math.PI/2-2*Math.atan(l),c=15,d=1e-7,p=c,_=.1;Math.abs(_)>d&&--p>0;)e=h*Math.sin(u),_=Math.PI/2-2*Math.atan(l*Math.pow((1-e)/(1+e),.5*h))-u,u+=_;return new o.LatLng(u*i,a)}},o.CRS.EPSG3395=o.extend({},o.CRS,{code:"EPSG:3395",projection:o.Projection.Mercator,
transformation:function(){var t=o.Projection.Mercator,e=t.R_MAJOR,i=.5/(Math.PI*e);return new o.Transformation(i,.5,-i,.5)}()}),o.TileLayer=o.Class.extend({includes:o.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:o.Browser.mobile,updateWhenIdle:o.Browser.mobile},initialize:function(t,e){e=o.setOptions(this,e),e.detectRetina&&o.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomOffset++,e.minZoom>0&&e.minZoom--,this.options.maxZoom--),e.bounds&&(e.bounds=o.latLngBounds(e.bounds)),this._url=t;var i=this.options.subdomains;"string"==typeof i&&(this.options.subdomains=i.split(""))},onAdd:function(t){this._map=t,this._animated=t._zoomAnimated,this._initContainer(),t.on({viewreset:this._reset,moveend:this._update},this),this._animated&&t.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||(this._limitedUpdate=o.Util.limitExecByInterval(this._update,150,this),t.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this._container.parentNode.removeChild(this._container),t.off({viewreset:this._reset,moveend:this._update},this),this._animated&&t.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||t.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var t=this._map._panes.tilePane;return this._container&&(t.appendChild(this._container),this._setAutoZIndex(t,Math.max)),this},bringToBack:function(){var t=this._map._panes.tilePane;return this._container&&(t.insertBefore(this._container,t.firstChild),this._setAutoZIndex(t,Math.min)),this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},setUrl:function(t,e){return this._url=t,e||this.redraw(),this},redraw:function(){return this._map&&(this._reset({hard:!0}),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==i&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t,e){var i,n,o,s=t.children,a=-e(1/0,-(1/0));for(n=0,o=s.length;o>n;n++)s[n]!==this._container&&(i=parseInt(s[n].style.zIndex,10),isNaN(i)||(a=e(a,i)));this.options.zIndex=this._container.style.zIndex=(isFinite(a)?a:0)+e(1,-1)},_updateOpacity:function(){var t,e=this._tiles;if(o.Browser.ielt9)for(t in e)o.DomUtil.setOpacity(e[t],this.options.opacity);else o.DomUtil.setOpacity(this._container,this.options.opacity)},_initContainer:function(){var t=this._map._panes.tilePane;if(!this._container){if(this._container=o.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),this._animated){var e="leaflet-tile-container";this._bgBuffer=o.DomUtil.create("div",e,this._container),this._tileContainer=o.DomUtil.create("div",e,this._container)}else this._tileContainer=this._container;t.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()}},_reset:function(t){for(var e in this._tiles)this.fire("tileunload",{tile:this._tiles[e]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),this._tileContainer.innerHTML="",this._animated&&t&&t.hard&&this._clearBgBuffer(),this._initContainer()},_getTileSize:function(){var t=this._map,e=t.getZoom()+this.options.zoomOffset,i=this.options.maxNativeZoom,n=this.options.tileSize;return i&&e>i&&(n=Math.round(t.getZoomScale(e)/t.getZoomScale(i)*n)),n},_update:function(){if(this._map){var t=this._map,e=t.getPixelBounds(),i=t.getZoom(),n=this._getTileSize();if(!(i>this.options.maxZoom||i<this.options.minZoom)){var s=o.bounds(e.min.divideBy(n)._floor(),e.max.divideBy(n)._floor());this._addTilesFromCenterOut(s),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(s)}}},_addTilesFromCenterOut:function(t){var i,n,s,a=[],r=t.getCenter();for(i=t.min.y;i<=t.max.y;i++)for(n=t.min.x;n<=t.max.x;n++)s=new o.Point(n,i),this._tileShouldBeLoaded(s)&&a.push(s);var h=a.length;if(0!==h){a.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)});var l=e.createDocumentFragment();for(this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=h,n=0;h>n;n++)this._addTile(a[n],l);this._tileContainer.appendChild(l)}},_tileShouldBeLoaded:function(t){if(t.x+":"+t.y in this._tiles)return!1;var e=this.options;if(!e.continuousWorld){var i=this._getWrapTileNum();if(e.noWrap&&(t.x<0||t.x>=i.x)||t.y<0||t.y>=i.y)return!1}if(e.bounds){var n=this._getTileSize(),o=t.multiplyBy(n),s=o.add([n,n]),a=this._map.unproject(o),r=this._map.unproject(s);if(e.continuousWorld||e.noWrap||(a=a.wrap(),r=r.wrap()),!e.bounds.intersects([a,r]))return!1}return!0},_removeOtherTiles:function(t){var e,i,n,o;for(o in this._tiles)e=o.split(":"),i=parseInt(e[0],10),n=parseInt(e[1],10),(i<t.min.x||i>t.max.x||n<t.min.y||n>t.max.y)&&this._removeTile(o)},_removeTile:function(t){var e=this._tiles[t];this.fire("tileunload",{tile:e,url:e.src}),this.options.reuseTiles?(o.DomUtil.removeClass(e,"leaflet-tile-loaded"),this._unusedTiles.push(e)):e.parentNode===this._tileContainer&&this._tileContainer.removeChild(e),o.Browser.android||(e.onload=null,e.src=o.Util.emptyImageUrl),delete this._tiles[t]},_addTile:function(t,e){var i=this._getTilePos(t),n=this._getTile();o.DomUtil.setPosition(n,i,o.Browser.chrome),this._tiles[t.x+":"+t.y]=n,this._loadTile(n,t),n.parentNode!==this._tileContainer&&e.appendChild(n)},_getZoomForUrl:function(){var t=this.options,e=this._map.getZoom();return t.zoomReverse&&(e=t.maxZoom-e),e+=t.zoomOffset,t.maxNativeZoom?Math.min(e,t.maxNativeZoom):e},_getTilePos:function(t){var e=this._map.getPixelOrigin(),i=this._getTileSize();return t.multiplyBy(i).subtract(e)},getTileUrl:function(t){return o.Util.template(this._url,o.extend({s:this._getSubdomain(t),z:t.z,x:t.x,y:t.y},this.options))},_getWrapTileNum:function(){var t=this._map.options.crs,e=t.getSize(this._map.getZoom());return e.divideBy(this._getTileSize())._floor()},_adjustTilePoint:function(t){var e=this._getWrapTileNum();this.options.continuousWorld||this.options.noWrap||(t.x=(t.x%e.x+e.x)%e.x),this.options.tms&&(t.y=e.y-t.y-1),t.z=this._getZoomForUrl()},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var t=this._unusedTiles.pop();return this._resetTile(t),t}return this._createTile()},_resetTile:function(){},_createTile:function(){var t=o.DomUtil.create("img","leaflet-tile");return t.style.width=t.style.height=this._getTileSize()+"px",t.galleryimg="no",t.onselectstart=t.onmousemove=o.Util.falseFn,o.Browser.ielt9&&this.options.opacity!==i&&o.DomUtil.setOpacity(t,this.options.opacity),o.Browser.mobileWebkit3d&&(t.style.WebkitBackfaceVisibility="hidden"),t},_loadTile:function(t,e){t._layer=this,t.onload=this._tileOnLoad,t.onerror=this._tileOnError,this._adjustTilePoint(e),t.src=this.getTileUrl(e),this.fire("tileloadstart",{tile:t,url:t.src})},_tileLoaded:function(){this._tilesToLoad--,this._animated&&o.DomUtil.addClass(this._tileContainer,"leaflet-zoom-animated"),this._tilesToLoad||(this.fire("load"),this._animated&&(clearTimeout(this._clearBgBufferTimer),this._clearBgBufferTimer=setTimeout(o.bind(this._clearBgBuffer,this),500)))},_tileOnLoad:function(){var t=this._layer;this.src!==o.Util.emptyImageUrl&&(o.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var e=t.options.errorTileUrl;e&&(this.src=e),t._tileLoaded()}}),o.tileLayer=function(t,e){return new o.TileLayer(t,e)},o.TileLayer.WMS=o.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(t,e){this._url=t;var i=o.extend({},this.defaultWmsParams),n=e.tileSize||this.options.tileSize;e.detectRetina&&o.Browser.retina?i.width=i.height=2*n:i.width=i.height=n;for(var s in e)this.options.hasOwnProperty(s)||"crs"===s||(i[s]=e[s]);this.wmsParams=i,o.setOptions(this,e)},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,o.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._map,i=this.options.tileSize,n=t.multiplyBy(i),s=n.add([i,i]),a=this._crs.project(e.unproject(n,t.z)),r=this._crs.project(e.unproject(s,t.z)),h=this._wmsVersion>=1.3&&this._crs===o.CRS.EPSG4326?[r.y,a.x,a.y,r.x].join(","):[a.x,r.y,r.x,a.y].join(","),l=o.Util.template(this._url,{s:this._getSubdomain(t)});return l+o.Util.getParamString(this.wmsParams,l,!0)+"&BBOX="+h},setParams:function(t,e){return o.extend(this.wmsParams,t),e||this.redraw(),this}}),o.tileLayer.wms=function(t,e){return new o.TileLayer.WMS(t,e)},o.TileLayer.Canvas=o.TileLayer.extend({options:{async:!1},initialize:function(t){o.setOptions(this,t)},redraw:function(){this._map&&(this._reset({hard:!0}),this._update());for(var t in this._tiles)this._redrawTile(this._tiles[t]);return this},_redrawTile:function(t){this.drawTile(t,t._tilePoint,this._map._zoom)},_createTile:function(){var t=o.DomUtil.create("canvas","leaflet-tile");return t.width=t.height=this.options.tileSize,t.onselectstart=t.onmousemove=o.Util.falseFn,t},_loadTile:function(t,e){t._layer=this,t._tilePoint=e,this._redrawTile(t),this.options.async||this.tileDrawn(t)},drawTile:function(){},tileDrawn:function(t){this._tileOnLoad.call(t)}}),o.tileLayer.canvas=function(t){return new o.TileLayer.Canvas(t)},o.ImageOverlay=o.Class.extend({includes:o.Mixin.Events,options:{opacity:1},initialize:function(t,e,i){this._url=t,this._bounds=o.latLngBounds(e),o.setOptions(this,i)},onAdd:function(t){this._map=t,this._image||this._initImage(),t._panes.overlayPane.appendChild(this._image),t.on("viewreset",this._reset,this),t.options.zoomAnimation&&o.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._image),t.off("viewreset",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var t=this._map._panes.overlayPane;return this._image&&t.insertBefore(this._image,t.firstChild),this},setUrl:function(t){this._url=t,this._image.src=this._url},getAttribution:function(){return this.options.attribution},_initImage:function(){this._image=o.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&o.Browser.any3d?o.DomUtil.addClass(this._image,"leaflet-zoom-animated"):o.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),o.extend(this._image,{galleryimg:"no",onselectstart:o.Util.falseFn,onmousemove:o.Util.falseFn,onload:o.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(t){var e=this._map,i=this._image,n=e.getZoomScale(t.zoom),s=this._bounds.getNorthWest(),a=this._bounds.getSouthEast(),r=e._latLngToNewLayerPoint(s,t.zoom,t.center),h=e._latLngToNewLayerPoint(a,t.zoom,t.center)._subtract(r),l=r._add(h._multiplyBy(.5*(1-1/n)));i.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(l)+" scale("+n+") "},_reset:function(){var t=this._image,e=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),i=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);o.DomUtil.setPosition(t,e),t.style.width=i.x+"px",t.style.height=i.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){o.DomUtil.setOpacity(this._image,this.options.opacity)}}),o.imageOverlay=function(t,e,i){return new o.ImageOverlay(t,e,i)},o.Icon=o.Class.extend({options:{className:""},initialize:function(t){o.setOptions(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n;return n=e&&"IMG"===e.tagName?this._createImg(i,e):this._createImg(i),this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i,n=this.options,s=o.point(n[e+"Size"]);i="shadow"===e?o.point(n.shadowAnchor||n.iconAnchor):o.point(n.iconAnchor),!i&&s&&(i=s.divideBy(2,!0)),t.className="leaflet-marker-"+e+" "+n.className,i&&(t.style.marginLeft=-i.x+"px",t.style.marginTop=-i.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,i){return i=i||e.createElement("img"),i.src=t,i},_getIconUrl:function(t){return o.Browser.retina&&this.options[t+"RetinaUrl"]?this.options[t+"RetinaUrl"]:this.options[t+"Url"]}}),o.icon=function(t){return new o.Icon(t)},o.Icon.Default=o.Icon.extend({options:{iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},_getIconUrl:function(t){var e=t+"Url";if(this.options[e])return this.options[e];o.Browser.retina&&"icon"===t&&(t+="-2x");var i=o.Icon.Default.imagePath;if(!i)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return i+"/marker-"+t+".png"}}),o.Icon.Default.imagePath=function(){var t,i,n,o,s,a=e.getElementsByTagName("script"),r=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;for(t=0,i=a.length;i>t;t++)if(n=a[t].src,o=n.match(r))return s=n.split(r)[0],(s?s+"/":"")+"images"}(),o.Marker=o.Class.extend({includes:o.Mixin.Events,options:{icon:new o.Icon.Default,title:"",alt:"",clickable:!0,draggable:!1,keyboard:!0,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t)},onAdd:function(t){this._map=t,t.on("viewreset",this.update,this),this._initIcon(),this.update(),this.fire("add"),t.options.zoomAnimation&&t.options.markerZoomAnimation&&t.on("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this.dragging&&this.dragging.disable(),this._removeIcon(),this._removeShadow(),this.fire("remove"),t.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update(),this},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup),this},update:function(){return this._icon&&this._setPos(this._map.latLngToLayerPoint(this._latlng).round()),this},_initIcon:function(){var t=this.options,e=this._map,i=e.options.zoomAnimation&&e.options.markerZoomAnimation,n=i?"leaflet-zoom-animated":"leaflet-zoom-hide",s=t.icon.createIcon(this._icon),a=!1;s!==this._icon&&(this._icon&&this._removeIcon(),a=!0,t.title&&(s.title=t.title),t.alt&&(s.alt=t.alt)),o.DomUtil.addClass(s,n),t.keyboard&&(s.tabIndex="0"),this._icon=s,this._initInteraction(),t.riseOnHover&&o.DomEvent.on(s,"mouseover",this._bringToFront,this).on(s,"mouseout",this._resetZIndex,this);var r=t.icon.createShadow(this._shadow),h=!1;r!==this._shadow&&(this._removeShadow(),h=!0),r&&o.DomUtil.addClass(r,n),this._shadow=r,t.opacity<1&&this._updateOpacity();var l=this._map._panes;a&&l.markerPane.appendChild(this._icon),r&&h&&l.shadowPane.appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&o.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),this._map._panes.markerPane.removeChild(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&this._map._panes.shadowPane.removeChild(this._shadow),this._shadow=null},_setPos:function(t){o.DomUtil.setPosition(this._icon,t),this._shadow&&o.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.clickable){var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];o.DomUtil.addClass(t,"leaflet-clickable"),o.DomEvent.on(t,"click",this._onMouseClick,this),o.DomEvent.on(t,"keypress",this._onKeyPress,this);for(var i=0;i<e.length;i++)o.DomEvent.on(t,e[i],this._fireMouseEvent,this);o.Handler.MarkerDrag&&(this.dragging=new o.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_onMouseClick:function(t){var e=this.dragging&&this.dragging.moved();(this.hasEventListeners(t.type)||e)&&o.DomEvent.stopPropagation(t),e||(this.dragging&&this.dragging._enabled||!this._map.dragging||!this._map.dragging.moved())&&this.fire(t.type,{originalEvent:t,latlng:this._latlng})},_onKeyPress:function(t){13===t.keyCode&&this.fire("click",{originalEvent:t,latlng:this._latlng})},_fireMouseEvent:function(t){this.fire(t.type,{originalEvent:t,latlng:this._latlng}),"contextmenu"===t.type&&this.hasEventListeners(t.type)&&o.DomEvent.preventDefault(t),"mousedown"!==t.type?o.DomEvent.stopPropagation(t):o.DomEvent.preventDefault(t)},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){o.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&o.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),o.marker=function(t,e){return new o.Marker(t,e)},o.DivIcon=o.Icon.extend({options:{iconSize:[12,12],className:"leaflet-div-icon",html:!1},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:e.createElement("div"),n=this.options;return n.html!==!1?i.innerHTML=n.html:i.innerHTML="",n.bgPos&&(i.style.backgroundPosition=-n.bgPos.x+"px "+-n.bgPos.y+"px"),this._setIconStyles(i,"icon"),i},createShadow:function(){return null}}),o.divIcon=function(t){return new o.DivIcon(t)},o.Map.mergeOptions({closePopupOnClick:!0}),o.Popup=o.Class.extend({includes:o.Mixin.Events,options:{minWidth:50,maxWidth:300,autoPan:!0,closeButton:!0,offset:[0,7],autoPanPadding:[5,5],keepInView:!1,className:"",zoomAnimation:!0},initialize:function(t,e){o.setOptions(this,t),this._source=e,this._animated=o.Browser.any3d&&this.options.zoomAnimation,this._isOpen=!1},onAdd:function(t){this._map=t,this._container||this._initLayout();var e=t.options.fadeAnimation;e&&o.DomUtil.setOpacity(this._container,0),t._panes.popupPane.appendChild(this._container),t.on(this._getEvents(),this),this.update(),e&&o.DomUtil.setOpacity(this._container,1),this.fire("open"),t.fire("popupopen",{popup:this}),this._source&&this._source.fire("popupopen",{popup:this})},addTo:function(t){return t.addLayer(this),this},openOn:function(t){return t.openPopup(this),this},onRemove:function(t){t._panes.popupPane.removeChild(this._container),o.Util.falseFn(this._container.offsetWidth),t.off(this._getEvents(),this),t.options.fadeAnimation&&o.DomUtil.setOpacity(this._container,0),this._map=null,this.fire("close"),t.fire("popupclose",{popup:this}),this._source&&this._source.fire("popupclose",{popup:this})},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},_getEvents:function(){var t={viewreset:this._updatePosition};return this._animated&&(t.zoomanim=this._zoomAnimation),("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t,e="leaflet-popup",i=e+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),n=this._container=o.DomUtil.create("div",i);this.options.closeButton&&(t=this._closeButton=o.DomUtil.create("a",e+"-close-button",n),t.href="#close",t.innerHTML="&#215;",o.DomEvent.disableClickPropagation(t),o.DomEvent.on(t,"click",this._onCloseButtonClick,this));var s=this._wrapper=o.DomUtil.create("div",e+"-content-wrapper",n);o.DomEvent.disableClickPropagation(s),this._contentNode=o.DomUtil.create("div",e+"-content",s),o.DomEvent.disableScrollPropagation(this._contentNode),o.DomEvent.on(s,"contextmenu",o.DomEvent.stopPropagation),this._tipContainer=o.DomUtil.create("div",e+"-tip-container",n),this._tip=o.DomUtil.create("div",e+"-tip",this._tipContainer)},_updateContent:function(){if(this._content){if("string"==typeof this._content)this._contentNode.innerHTML=this._content;else{for(;this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",o.DomUtil.addClass(t,a)):o.DomUtil.removeClass(t,a),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=this._animated,i=o.point(this.options.offset);e&&o.DomUtil.setPosition(this._container,t),this._containerBottom=-i.y-(e?0:t.y),this._containerLeft=-Math.round(this._containerWidth/2)+i.x+(e?0:t.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"}},_zoomAnimation:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);o.DomUtil.setPosition(this._container,e)},_adjustPan:function(){if(this.options.autoPan){var t=this._map,e=this._container.offsetHeight,i=this._containerWidth,n=new o.Point(this._containerLeft,-e-this._containerBottom);this._animated&&n._add(o.DomUtil.getPosition(this._container));var s=t.layerPointToContainerPoint(n),a=o.point(this.options.autoPanPadding),r=o.point(this.options.autoPanPaddingTopLeft||a),h=o.point(this.options.autoPanPaddingBottomRight||a),l=t.getSize(),u=0,c=0;s.x+i+h.x>l.x&&(u=s.x+i-l.x+h.x),s.x-u-r.x<0&&(u=s.x-r.x),s.y+e+h.y>l.y&&(c=s.y+e-l.y+h.y),s.y-c-r.y<0&&(c=s.y-r.y),(u||c)&&t.fire("autopanstart").panBy([u,c])}},_onCloseButtonClick:function(t){this._close(),o.DomEvent.stop(t)}}),o.popup=function(t,e){return new o.Popup(t,e)},o.Map.include({openPopup:function(t,e,i){if(this.closePopup(),!(t instanceof o.Popup)){var n=t;t=new o.Popup(i).setLatLng(e).setContent(n)}return t._isOpen=!0,this._popup=t,this.addLayer(t)},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&(this.removeLayer(t),t._isOpen=!1),this}}),o.Marker.include({openPopup:function(){return this._popup&&this._map&&!this._map.hasLayer(this._popup)&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(){return this._popup&&(this._popup._isOpen?this.closePopup():this.openPopup()),this},bindPopup:function(t,e){var i=o.point(this.options.icon.options.popupAnchor||[0,0]);return i=i.add(o.Popup.prototype.options.offset),e&&e.offset&&(i=i.add(e.offset)),e=o.extend({offset:i},e),this._popupHandlersAdded||(this.on("click",this.togglePopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),this._popupHandlersAdded=!0),t instanceof o.Popup?(o.setOptions(t,e),this._popup=t,t._source=this):this._popup=new o.Popup(e,this).setContent(t),this},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.togglePopup,this).off("remove",this.closePopup,this).off("move",this._movePopup,this),this._popupHandlersAdded=!1),this},getPopup:function(){return this._popup},_movePopup:function(t){this._popup.setLatLng(t.latlng)}}),o.LayerGroup=o.Class.extend({initialize:function(t){this._layers={};var e,i;if(t)for(e=0,i=t.length;i>e;e++)this.addLayer(t[e])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return t?t in this._layers||this.getLayerId(t)in this._layers:!1},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)i=this._layers[e],i[t]&&i[t].apply(i,n);return this},onAdd:function(t){this._map=t,this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t),this._map=null},addTo:function(t){return t.addLayer(this),this},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];for(var e in this._layers)t.push(this._layers[e]);return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o.stamp(t)}}),o.layerGroup=function(t){return new o.LayerGroup(t)},o.FeatureGroup=o.LayerGroup.extend({includes:o.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},addLayer:function(t){return this.hasLayer(t)?this:("on"in t&&t.on(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.addLayer.call(this,t),this._popupContent&&t.bindPopup&&t.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),"off"in t&&t.off(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.removeLayer.call(this,t),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:t})):this},bindPopup:function(t,e){return this._popupContent=t,this._popupOptions=e,this.invoke("bindPopup",t,e)},openPopup:function(t){for(var e in this._layers){this._layers[e].openPopup(t);break}return this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new o.LatLngBounds;return this.eachLayer(function(e){t.extend(e instanceof o.Marker?e.getLatLng():e.getBounds())}),t},_propagateEvent:function(t){t=o.extend({layer:t.target,target:this},t),this.fire(t.type,t)}}),o.featureGroup=function(t){return new o.FeatureGroup(t)},o.Path=o.Class.extend({includes:[o.Mixin.Events],statics:{CLIP_PADDING:function(){var e=o.Browser.mobile?1280:2e3,i=(e/Math.max(t.outerWidth,t.outerHeight)-1)/2;return Math.max(0,Math.min(.5,i))}()},options:{stroke:!0,color:"#0033ff",dashArray:null,lineCap:null,lineJoin:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(t){o.setOptions(this,t)},onAdd:function(t){this._map=t,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),t.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){t._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,o.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),t.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(t){return o.setOptions(this,t),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),o.Map.include({_updatePathViewport:function(){var t=o.Path.CLIP_PADDING,e=this.getSize(),i=o.DomUtil.getPosition(this._mapPane),n=i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),s=n.add(e.multiplyBy(1+2*t)._round());this._pathViewport=new o.Bounds(n,s)}}),o.Path.SVG_NS="http://www.w3.org/2000/svg",o.Browser.svg=!(!e.createElementNS||!e.createElementNS(o.Path.SVG_NS,"svg").createSVGRect),o.Path=o.Path.extend({statics:{SVG:o.Browser.svg},bringToFront:function(){var t=this._map._pathRoot,e=this._container;return e&&t.lastChild!==e&&t.appendChild(e),this},bringToBack:function(){var t=this._map._pathRoot,e=this._container,i=t.firstChild;return e&&i!==e&&t.insertBefore(e,i),this},getPathString:function(){},_createElement:function(t){return e.createElementNS(o.Path.SVG_NS,t)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this.options.className&&o.DomUtil.addClass(this._path,this.options.className),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this.options.pointerEvents&&this._path.setAttribute("pointer-events",this.options.pointerEvents),this.options.clickable||this.options.pointerEvents||this._path.setAttribute("pointer-events","none"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray"),this.options.lineCap&&this._path.setAttribute("stroke-linecap",this.options.lineCap),this.options.lineJoin&&this._path.setAttribute("stroke-linejoin",this.options.lineJoin)):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var t=this.getPathString();t||(t="M0 0"),this._path.setAttribute("d",t)},_initEvents:function(){if(this.options.clickable){(o.Browser.svg||!o.Browser.vml)&&o.DomUtil.addClass(this._path,"leaflet-clickable"),o.DomEvent.on(this._container,"click",this._onMouseClick,this);for(var t=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"],e=0;e<t.length;e++)o.DomEvent.on(this._container,t[e],this._fireMouseEvent,this)}},_onMouseClick:function(t){this._map.dragging&&this._map.dragging.moved()||this._fireMouseEvent(t)},_fireMouseEvent:function(t){if(this._map&&this.hasEventListeners(t.type)){var e=this._map,i=e.mouseEventToContainerPoint(t),n=e.containerPointToLayerPoint(i),s=e.layerPointToLatLng(n);this.fire(t.type,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t}),"contextmenu"===t.type&&o.DomEvent.preventDefault(t),"mousemove"!==t.type&&o.DomEvent.stopPropagation(t)}}}),o.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=o.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&o.Browser.any3d?(o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-animated"),
this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())},_animatePathZoom:function(t){var e=this.getZoomScale(t.zoom),i=this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);this._pathRoot.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(i)+" scale("+e+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max,n=i.x-e.x,s=i.y-e.y,a=this._pathRoot,r=this._panes.overlayPane;o.Browser.mobileWebkit&&r.removeChild(a),o.DomUtil.setPosition(a,e),a.setAttribute("width",n),a.setAttribute("height",s),a.setAttribute("viewBox",[e.x,e.y,n,s].join(" ")),o.Browser.mobileWebkit&&r.appendChild(a)}}}),o.Path.include({bindPopup:function(t,e){return t instanceof o.Popup?this._popup=t:((!this._popup||e)&&(this._popup=new o.Popup(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(t){return this._popup&&(t=t||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:t})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(t){this._popup.setLatLng(t.latlng),this._map.openPopup(this._popup)}}),o.Browser.vml=!o.Browser.svg&&function(){try{var t=e.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(n){return!1}}(),o.Path=o.Browser.svg||!o.Browser.vml?o.Path:o.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return e.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return e.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var t=this._container=this._createElement("shape");o.DomUtil.addClass(t,"leaflet-vml-shape"+(this.options.className?" "+this.options.className:"")),this.options.clickable&&o.DomUtil.addClass(t,"leaflet-clickable"),t.coordsize="1 1",this._path=this._createElement("path"),t.appendChild(this._path),this._map._pathRoot.appendChild(t)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var t=this._stroke,e=this._fill,i=this.options,n=this._container;n.stroked=i.stroke,n.filled=i.fill,i.stroke?(t||(t=this._stroke=this._createElement("stroke"),t.endcap="round",n.appendChild(t)),t.weight=i.weight+"px",t.color=i.color,t.opacity=i.opacity,i.dashArray?t.dashStyle=o.Util.isArray(i.dashArray)?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," "):t.dashStyle="",i.lineCap&&(t.endcap=i.lineCap.replace("butt","flat")),i.lineJoin&&(t.joinstyle=i.lineJoin)):t&&(n.removeChild(t),this._stroke=null),i.fill?(e||(e=this._fill=this._createElement("fill"),n.appendChild(e)),e.color=i.fillColor||i.color,e.opacity=i.fillOpacity):e&&(n.removeChild(e),this._fill=null)},_updatePath:function(){var t=this._container.style;t.display="none",this._path.v=this.getPathString()+" ",t.display=""}}),o.Map.include(o.Browser.svg||!o.Browser.vml?{}:{_initPathRoot:function(){if(!this._pathRoot){var t=this._pathRoot=e.createElement("div");t.className="leaflet-vml-container",this._panes.overlayPane.appendChild(t),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}}),o.Browser.canvas=function(){return!!e.createElement("canvas").getContext}(),o.Path=o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?o.Path:o.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(t){return o.setOptions(this,t),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(t){t.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&(this._map.off("click",this._onClick,this),this._map.off("mousemove",this._onMouseMove,this)),this._requestUpdate(),this.fire("remove"),this._map=null},_requestUpdate:function(){this._map&&!o.Path._updateRequest&&(o.Path._updateRequest=o.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){o.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var t=this.options;t.stroke&&(this._ctx.lineWidth=t.weight,this._ctx.strokeStyle=t.color),t.fill&&(this._ctx.fillStyle=t.fillColor||t.color),t.lineCap&&(this._ctx.lineCap=t.lineCap),t.lineJoin&&(this._ctx.lineJoin=t.lineJoin)},_drawPath:function(){var t,e,i,n,s,a;for(this._ctx.beginPath(),t=0,i=this._parts.length;i>t;t++){for(e=0,n=this._parts[t].length;n>e;e++)s=this._parts[t][e],a=(0===e?"move":"line")+"To",this._ctx[a](s.x,s.y);this instanceof o.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(!this._checkIfEmpty()){var t=this._ctx,e=this.options;this._drawPath(),t.save(),this._updateStyle(),e.fill&&(t.globalAlpha=e.fillOpacity,t.fill(e.fillRule||"evenodd")),e.stroke&&(t.globalAlpha=e.opacity,t.stroke()),t.restore()}},_initEvents:function(){this.options.clickable&&(this._map.on("mousemove",this._onMouseMove,this),this._map.on("click dblclick contextmenu",this._fireMouseEvent,this))},_fireMouseEvent:function(t){this._containsPoint(t.layerPoint)&&this.fire(t.type,t)},_onMouseMove:function(t){this._map&&!this._map._animatingZoom&&(this._containsPoint(t.layerPoint)?(this._ctx.canvas.style.cursor="pointer",this._mouseInside=!0,this.fire("mouseover",t)):this._mouseInside&&(this._ctx.canvas.style.cursor="",this._mouseInside=!1,this.fire("mouseout",t)))}}),o.Map.include(o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?{}:{_initPathRoot:function(){var t,i=this._pathRoot;i||(i=this._pathRoot=e.createElement("canvas"),i.style.position="absolute",t=this._canvasCtx=i.getContext("2d"),t.lineCap="round",t.lineJoin="round",this._panes.overlayPane.appendChild(i),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max.subtract(e),n=this._pathRoot;o.DomUtil.setPosition(n,e),n.width=i.x,n.height=i.y,n.getContext("2d").translate(-e.x,-e.y)}}}),o.LineUtil={simplify:function(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=this._reducePoints(t,i),t=this._simplifyDP(t,i)},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,!0))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!=i+""?Uint8Array:Array,s=new o(n);s[0]=s[n-1]=1,this._simplifyDPStep(t,s,e,0,n-1);var a,r=[];for(a=0;n>a;a++)s[a]&&r.push(t[a]);return r},_simplifyDPStep:function(t,e,i,n,o){var s,a,r,h=0;for(a=n+1;o-1>=a;a++)r=this._sqClosestPointOnSegment(t[a],t[n],t[o],!0),r>h&&(s=a,h=r);h>i&&(e[s]=1,this._simplifyDPStep(t,e,i,n,s),this._simplifyDPStep(t,e,i,s,o))},_reducePoints:function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;s>n;n++)this._sqDist(t[n],t[o])>e&&(i.push(t[n]),o=n);return s-1>o&&i.push(t[s-1]),i},clipSegment:function(t,e,i,n){var o,s,a,r=n?this._lastCode:this._getBitCode(t,i),h=this._getBitCode(e,i);for(this._lastCode=h;;){if(!(r|h))return[t,e];if(r&h)return!1;o=r||h,s=this._getEdgeIntersection(t,e,o,i),a=this._getBitCode(s,i),o===r?(t=s,r=a):(e=s,h=a)}},_getEdgeIntersection:function(t,e,i,n){var s=e.x-t.x,a=e.y-t.y,r=n.min,h=n.max;return 8&i?new o.Point(t.x+s*(h.y-t.y)/a,h.y):4&i?new o.Point(t.x+s*(r.y-t.y)/a,r.y):2&i?new o.Point(h.x,t.y+a*(h.x-t.x)/s):1&i?new o.Point(r.x,t.y+a*(r.x-t.x)/s):void 0},_getBitCode:function(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,n){var s,a=e.x,r=e.y,h=i.x-a,l=i.y-r,u=h*h+l*l;return u>0&&(s=((t.x-a)*h+(t.y-r)*l)/u,s>1?(a=i.x,r=i.y):s>0&&(a+=h*s,r+=l*s)),h=t.x-a,l=t.y-r,n?h*h+l*l:new o.Point(a,r)}},o.Polyline=o.Path.extend({initialize:function(t,e){o.Path.prototype.initialize.call(this,e),this._latlngs=this._convertLatLngs(t)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var t=0,e=this._latlngs.length;e>t;t++)this._originalPoints[t]=this._map.latLngToLayerPoint(this._latlngs[t])},getPathString:function(){for(var t=0,e=this._parts.length,i="";e>t;t++)i+=this._getPathPartStr(this._parts[t]);return i},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._latlngs=this._convertLatLngs(t),this.redraw()},addLatLng:function(t){return this._latlngs.push(o.latLng(t)),this.redraw()},spliceLatLngs:function(){var t=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs,!0),this.redraw(),t},closestLayerPoint:function(t){for(var e,i,n=1/0,s=this._parts,a=null,r=0,h=s.length;h>r;r++)for(var l=s[r],u=1,c=l.length;c>u;u++){e=l[u-1],i=l[u];var d=o.LineUtil._sqClosestPointOnSegment(t,e,i,!0);n>d&&(n=d,a=o.LineUtil._sqClosestPointOnSegment(t,e,i))}return a&&(a.distance=Math.sqrt(n)),a},getBounds:function(){return new o.LatLngBounds(this.getLatLngs())},_convertLatLngs:function(t,e){var i,n,s=e?t:[];for(i=0,n=t.length;n>i;i++){if(o.Util.isArray(t[i])&&"number"!=typeof t[i][0])return;s[i]=o.latLng(t[i])}return s},_initEvents:function(){o.Path.prototype._initEvents.call(this)},_getPathPartStr:function(t){for(var e,i=o.Path.VML,n=0,s=t.length,a="";s>n;n++)e=t[n],i&&e._round(),a+=(n?"L":"M")+e.x+" "+e.y;return a},_clipPoints:function(){var t,e,i,n=this._originalPoints,s=n.length;if(this.options.noClip)return void(this._parts=[n]);this._parts=[];var a=this._parts,r=this._map._pathViewport,h=o.LineUtil;for(t=0,e=0;s-1>t;t++)i=h.clipSegment(n[t],n[t+1],r,t),i&&(a[e]=a[e]||[],a[e].push(i[0]),(i[1]!==n[t+1]||t===s-2)&&(a[e].push(i[1]),e++))},_simplifyPoints:function(){for(var t=this._parts,e=o.LineUtil,i=0,n=t.length;n>i;i++)t[i]=e.simplify(t[i],this.options.smoothFactor)},_updatePath:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),o.Path.prototype._updatePath.call(this))}}),o.polyline=function(t,e){return new o.Polyline(t,e)},o.PolyUtil={},o.PolyUtil.clipPolygon=function(t,e){var i,n,s,a,r,h,l,u,c,d=[1,4,2,8],p=o.LineUtil;for(n=0,l=t.length;l>n;n++)t[n]._code=p._getBitCode(t[n],e);for(a=0;4>a;a++){for(u=d[a],i=[],n=0,l=t.length,s=l-1;l>n;s=n++)r=t[n],h=t[s],r._code&u?h._code&u||(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)):(h._code&u&&(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)),i.push(r));t=i}return t},o.Polygon=o.Polyline.extend({options:{fill:!0},initialize:function(t,e){o.Polyline.prototype.initialize.call(this,t,e),this._initWithHoles(t)},_initWithHoles:function(t){var e,i,n;if(t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0])for(this._latlngs=this._convertLatLngs(t[0]),this._holes=t.slice(1),e=0,i=this._holes.length;i>e;e++)n=this._holes[e]=this._convertLatLngs(this._holes[e]),n[0].equals(n[n.length-1])&&n.pop();t=this._latlngs,t.length>=2&&t[0].equals(t[t.length-1])&&t.pop()},projectLatlngs:function(){if(o.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[],this._holes){var t,e,i,n;for(t=0,i=this._holes.length;i>t;t++)for(this._holePoints[t]=[],e=0,n=this._holes[t].length;n>e;e++)this._holePoints[t][e]=this._map.latLngToLayerPoint(this._holes[t][e])}},setLatLngs:function(t){return t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0]?(this._initWithHoles(t),this.redraw()):o.Polyline.prototype.setLatLngs.call(this,t)},_clipPoints:function(){var t=this._originalPoints,e=[];if(this._parts=[t].concat(this._holePoints),!this.options.noClip){for(var i=0,n=this._parts.length;n>i;i++){var s=o.PolyUtil.clipPolygon(this._parts[i],this._map._pathViewport);s.length&&e.push(s)}this._parts=e}},_getPathPartStr:function(t){var e=o.Polyline.prototype._getPathPartStr.call(this,t);return e+(o.Browser.svg?"z":"x")}}),o.polygon=function(t,e){return new o.Polygon(t,e)},function(){function t(t){return o.FeatureGroup.extend({initialize:function(t,e){this._layers={},this._options=e,this.setLatLngs(t)},setLatLngs:function(e){var i=0,n=e.length;for(this.eachLayer(function(t){n>i?t.setLatLngs(e[i++]):this.removeLayer(t)},this);n>i;)this.addLayer(new t(e[i++],this._options));return this},getLatLngs:function(){var t=[];return this.eachLayer(function(e){t.push(e.getLatLngs())}),t}})}o.MultiPolyline=t(o.Polyline),o.MultiPolygon=t(o.Polygon),o.multiPolyline=function(t,e){return new o.MultiPolyline(t,e)},o.multiPolygon=function(t,e){return new o.MultiPolygon(t,e)}}(),o.Rectangle=o.Polygon.extend({initialize:function(t,e){o.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=o.latLngBounds(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),o.rectangle=function(t,e){return new o.Rectangle(t,e)},o.Circle=o.Path.extend({initialize:function(t,e,i){o.Path.prototype.initialize.call(this,i),this._latlng=o.latLng(t),this._mRadius=e},options:{fill:!0},setLatLng:function(t){return this._latlng=o.latLng(t),this.redraw()},setRadius:function(t){return this._mRadius=t,this.redraw()},projectLatlngs:function(){var t=this._getLngRadius(),e=this._latlng,i=this._map.latLngToLayerPoint([e.lat,e.lng-t]);this._point=this._map.latLngToLayerPoint(e),this._radius=Math.max(this._point.x-i.x,1)},getBounds:function(){var t=this._getLngRadius(),e=this._mRadius/40075017*360,i=this._latlng;return new o.LatLngBounds([i.lat-e,i.lng-t],[i.lat+e,i.lng+t])},getLatLng:function(){return this._latlng},getPathString:function(){var t=this._point,e=this._radius;return this._checkIfEmpty()?"":o.Browser.svg?"M"+t.x+","+(t.y-e)+"A"+e+","+e+",0,1,1,"+(t.x-.1)+","+(t.y-e)+" z":(t._round(),e=Math.round(e),"AL "+t.x+","+t.y+" "+e+","+e+" 0,23592600")},getRadius:function(){return this._mRadius},_getLatRadius:function(){return this._mRadius/40075017*360},_getLngRadius:function(){return this._getLatRadius()/Math.cos(o.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var t=this._map._pathViewport,e=this._radius,i=this._point;return i.x-e>t.max.x||i.y-e>t.max.y||i.x+e<t.min.x||i.y+e<t.min.y}}),o.circle=function(t,e,i){return new o.Circle(t,e,i)},o.CircleMarker=o.Circle.extend({options:{radius:10,weight:2},initialize:function(t,e){o.Circle.prototype.initialize.call(this,t,null,e),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){o.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setLatLng:function(t){return o.Circle.prototype.setLatLng.call(this,t),this._popup&&this._popup._isOpen&&this._popup.setLatLng(t),this},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius}}),o.circleMarker=function(t,e){return new o.CircleMarker(t,e)},o.Polyline.include(o.Path.CANVAS?{_containsPoint:function(t,e){var i,n,s,a,r,h,l,u=this.options.weight/2;for(o.Browser.touch&&(u+=10),i=0,a=this._parts.length;a>i;i++)for(l=this._parts[i],n=0,r=l.length,s=r-1;r>n;s=n++)if((e||0!==n)&&(h=o.LineUtil.pointToSegmentDistance(t,l[s],l[n]),u>=h))return!0;return!1}}:{}),o.Polygon.include(o.Path.CANVAS?{_containsPoint:function(t){var e,i,n,s,a,r,h,l,u=!1;if(o.Polyline.prototype._containsPoint.call(this,t,!0))return!0;for(s=0,h=this._parts.length;h>s;s++)for(e=this._parts[s],a=0,l=e.length,r=l-1;l>a;r=a++)i=e[a],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u);return u}}:{}),o.Circle.include(o.Path.CANVAS?{_drawPath:function(){var t=this._point;this._ctx.beginPath(),this._ctx.arc(t.x,t.y,this._radius,0,2*Math.PI,!1)},_containsPoint:function(t){var e=this._point,i=this.options.stroke?this.options.weight/2:0;return t.distanceTo(e)<=this._radius+i}}:{}),o.CircleMarker.include(o.Path.CANVAS?{_updateStyle:function(){o.Path.prototype._updateStyle.call(this)}}:{}),o.GeoJSON=o.FeatureGroup.extend({initialize:function(t,e){o.setOptions(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,s=o.Util.isArray(t)?t:t.features;if(s){for(e=0,i=s.length;i>e;e++)n=s[e],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(s[e]);return this}var a=this.options;if(!a.filter||a.filter(t)){var r=o.GeoJSON.geometryToLayer(t,a.pointToLayer,a.coordsToLatLng,a);return r.feature=o.GeoJSON.asFeature(t),r.defaultOptions=r.options,this.resetStyle(r),a.onEachFeature&&a.onEachFeature(t,r),this.addLayer(r)}},resetStyle:function(t){var e=this.options.style;e&&(o.Util.extend(t.options,t.defaultOptions),this._setLayerStyle(t,e))},setStyle:function(t){this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),o.extend(o.GeoJSON,{geometryToLayer:function(t,e,i,n){var s,a,r,h,l="Feature"===t.type?t.geometry:t,u=l.coordinates,c=[];switch(i=i||this.coordsToLatLng,l.type){case"Point":return s=i(u),e?e(t,s):new o.Marker(s);case"MultiPoint":for(r=0,h=u.length;h>r;r++)s=i(u[r]),c.push(e?e(t,s):new o.Marker(s));return new o.FeatureGroup(c);case"LineString":return a=this.coordsToLatLngs(u,0,i),new o.Polyline(a,n);case"Polygon":if(2===u.length&&!u[1].length)throw new Error("Invalid GeoJSON object.");return a=this.coordsToLatLngs(u,1,i),new o.Polygon(a,n);case"MultiLineString":return a=this.coordsToLatLngs(u,1,i),new o.MultiPolyline(a,n);case"MultiPolygon":return a=this.coordsToLatLngs(u,2,i),new o.MultiPolygon(a,n);case"GeometryCollection":for(r=0,h=l.geometries.length;h>r;r++)c.push(this.geometryToLayer({geometry:l.geometries[r],type:"Feature",properties:t.properties},e,i,n));return new o.FeatureGroup(c);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){return new o.LatLng(t[1],t[0],t[2])},coordsToLatLngs:function(t,e,i){var n,o,s,a=[];for(o=0,s=t.length;s>o;o++)n=e?this.coordsToLatLngs(t[o],e-1,i):(i||this.coordsToLatLng)(t[o]),a.push(n);return a},latLngToCoords:function(t){var e=[t.lng,t.lat];return t.alt!==i&&e.push(t.alt),e},latLngsToCoords:function(t){for(var e=[],i=0,n=t.length;n>i;i++)e.push(o.GeoJSON.latLngToCoords(t[i]));return e},getFeature:function(t,e){return t.feature?o.extend({},t.feature,{geometry:e}):o.GeoJSON.asFeature(e)},asFeature:function(t){return"Feature"===t.type?t:{type:"Feature",properties:{},geometry:t}}});var a={toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"Point",coordinates:o.GeoJSON.latLngToCoords(this.getLatLng())})}};o.Marker.include(a),o.Circle.include(a),o.CircleMarker.include(a),o.Polyline.include({toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"LineString",coordinates:o.GeoJSON.latLngsToCoords(this.getLatLngs())})}}),o.Polygon.include({toGeoJSON:function(){var t,e,i,n=[o.GeoJSON.latLngsToCoords(this.getLatLngs())];if(n[0].push(n[0][0]),this._holes)for(t=0,e=this._holes.length;e>t;t++)i=o.GeoJSON.latLngsToCoords(this._holes[t]),i.push(i[0]),n.push(i);return o.GeoJSON.getFeature(this,{type:"Polygon",coordinates:n})}}),function(){function t(t){return function(){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON().geometry.coordinates)}),o.GeoJSON.getFeature(this,{type:t,coordinates:e})}}o.MultiPolyline.include({toGeoJSON:t("MultiLineString")}),o.MultiPolygon.include({toGeoJSON:t("MultiPolygon")}),o.LayerGroup.include({toGeoJSON:function(){var e,i=this.feature&&this.feature.geometry,n=[];if(i&&"MultiPoint"===i.type)return t("MultiPoint").call(this);var s=i&&"GeometryCollection"===i.type;return this.eachLayer(function(t){t.toGeoJSON&&(e=t.toGeoJSON(),n.push(s?e.geometry:o.GeoJSON.asFeature(e)))}),s?o.GeoJSON.getFeature(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}})}(),o.geoJson=function(t,e){return new o.GeoJSON(t,e)},o.DomEvent={addListener:function(t,e,i,n){var s,a,r,h=o.stamp(i),l="_leaflet_"+e+h;return t[l]?this:(s=function(e){return i.call(n||t,e||o.DomEvent._getEvent())},o.Browser.pointer&&0===e.indexOf("touch")?this.addPointerListener(t,e,s,h):(o.Browser.touch&&"dblclick"===e&&this.addDoubleTapListener&&this.addDoubleTapListener(t,s,h),"addEventListener"in t?"mousewheel"===e?(t.addEventListener("DOMMouseScroll",s,!1),t.addEventListener(e,s,!1)):"mouseenter"===e||"mouseleave"===e?(a=s,r="mouseenter"===e?"mouseover":"mouseout",s=function(e){return o.DomEvent._checkMouse(t,e)?a(e):void 0},t.addEventListener(r,s,!1)):"click"===e&&o.Browser.android?(a=s,s=function(t){return o.DomEvent._filterClick(t,a)},t.addEventListener(e,s,!1)):t.addEventListener(e,s,!1):"attachEvent"in t&&t.attachEvent("on"+e,s),t[l]=s,this))},removeListener:function(t,e,i){var n=o.stamp(i),s="_leaflet_"+e+n,a=t[s];return a?(o.Browser.pointer&&0===e.indexOf("touch")?this.removePointerListener(t,e,n):o.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,n):"removeEventListener"in t?"mousewheel"===e?(t.removeEventListener("DOMMouseScroll",a,!1),t.removeEventListener(e,a,!1)):"mouseenter"===e||"mouseleave"===e?t.removeEventListener("mouseenter"===e?"mouseover":"mouseout",a,!1):t.removeEventListener(e,a,!1):"detachEvent"in t&&t.detachEvent("on"+e,a),t[s]=null,this):this},stopPropagation:function(t){return t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,o.DomEvent._skipped(t),this},disableScrollPropagation:function(t){var e=o.DomEvent.stopPropagation;return o.DomEvent.on(t,"mousewheel",e).on(t,"MozMousePixelScroll",e)},disableClickPropagation:function(t){for(var e=o.DomEvent.stopPropagation,i=o.Draggable.START.length-1;i>=0;i--)o.DomEvent.on(t,o.Draggable.START[i],e);return o.DomEvent.on(t,"click",o.DomEvent._fakeStop).on(t,"dblclick",e)},preventDefault:function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){return o.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,e){if(!e)return new o.Point(t.clientX,t.clientY);var i=e.getBoundingClientRect();return new o.Point(t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop)},getWheelDelta:function(t){var e=0;return t.wheelDelta&&(e=t.wheelDelta/120),t.detail&&(e=-t.detail/3),e},_skipEvents:{},_fakeStop:function(t){o.DomEvent._skipEvents[t.type]=!0},_skipped:function(t){var e=this._skipEvents[t.type];return this._skipEvents[t.type]=!1,e},_checkMouse:function(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(n){return!1}return i!==t},_getEvent:function(){var e=t.event;if(!e)for(var i=arguments.callee.caller;i&&(e=i.arguments[0],!e||t.Event!==e.constructor);)i=i.caller;return e},_filterClick:function(t,e){var i=t.timeStamp||t.originalEvent.timeStamp,n=o.DomEvent._lastClick&&i-o.DomEvent._lastClick;return n&&n>100&&500>n||t.target._simulatedClick&&!t._simulated?void o.DomEvent.stop(t):(o.DomEvent._lastClick=i,e(t))}},o.DomEvent.on=o.DomEvent.addListener,o.DomEvent.off=o.DomEvent.removeListener,o.Draggable=o.Class.extend({includes:o.Mixin.Events,statics:{START:o.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e){this._element=t,this._dragStartTarget=e||t},enable:function(){if(!this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.on(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!0}},disable:function(){if(this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.off(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!1,this._moved=!1}},_onDown:function(t){if(this._moved=!1,!t.shiftKey&&(1===t.which||1===t.button||t.touches)&&(o.DomEvent.stopPropagation(t),!o.Draggable._disabled&&(o.DomUtil.disableImageDrag(),o.DomUtil.disableTextSelection(),!this._moving))){var i=t.touches?t.touches[0]:t;this._startPoint=new o.Point(i.clientX,i.clientY),this._startPos=this._newPos=o.DomUtil.getPosition(this._element),o.DomEvent.on(e,o.Draggable.MOVE[t.type],this._onMove,this).on(e,o.Draggable.END[t.type],this._onUp,this)}},_onMove:function(t){if(t.touches&&t.touches.length>1)return void(this._moved=!0);var i=t.touches&&1===t.touches.length?t.touches[0]:t,n=new o.Point(i.clientX,i.clientY),s=n.subtract(this._startPoint);(s.x||s.y)&&(o.Browser.touch&&Math.abs(s.x)+Math.abs(s.y)<3||(o.DomEvent.preventDefault(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=o.DomUtil.getPosition(this._element).subtract(s),o.DomUtil.addClass(e.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,o.DomUtil.addClass(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget)))},_updatePosition:function(){this.fire("predrag"),o.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(){o.DomUtil.removeClass(e.body,"leaflet-dragging"),this._lastTarget&&(o.DomUtil.removeClass(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in o.Draggable.MOVE)o.DomEvent.off(e,o.Draggable.MOVE[t],this._onMove).off(e,o.Draggable.END[t],this._onUp);o.DomUtil.enableImageDrag(),o.DomUtil.enableTextSelection(),this._moved&&this._moving&&(o.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1}}),o.Handler=o.Class.extend({initialize:function(t){this._map=t},enable:function(){this._enabled||(this._enabled=!0,this.addHooks())},disable:function(){this._enabled&&(this._enabled=!1,this.removeHooks())},enabled:function(){return!!this._enabled}}),o.Map.mergeOptions({dragging:!0,inertia:!o.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,inertiaThreshold:o.Browser.touch?32:18,easeLinearity:.25,worldCopyJump:!1}),o.Map.Drag=o.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new o.Draggable(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),t.on("viewreset",this._onViewReset,this),t.whenReady(this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var t=this._map;t._panAnim&&t._panAnim.stop(),t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var t=this._lastTime=+new Date,e=this._lastPos=this._draggable._newPos;this._positions.push(e),this._times.push(t),t-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var t=this._map.getSize()._divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.project([0,180]).x},_onPreDrag:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,a=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._newPos.x=a},_onDragEnd:function(t){var e=this._map,i=e.options,n=+new Date-this._lastTime,s=!i.inertia||n>i.inertiaThreshold||!this._positions[0];if(e.fire("dragend",t),s)e.fire("moveend");else{var a=this._lastPos.subtract(this._positions[0]),r=(this._lastTime+n-this._times[0])/1e3,h=i.easeLinearity,l=a.multiplyBy(h/r),u=l.distanceTo([0,0]),c=Math.min(i.inertiaMaxSpeed,u),d=l.multiplyBy(c/u),p=c/(i.inertiaDeceleration*h),_=d.multiplyBy(-p/2).round();_.x&&_.y?(_=e._limitOffset(_,e.options.maxBounds),o.Util.requestAnimFrame(function(){e.panBy(_,{duration:p,easeLinearity:h,noMoveStart:!0})})):e.fire("moveend")}}}),o.Map.addInitHook("addHandler","dragging",o.Map.Drag),o.Map.mergeOptions({doubleClickZoom:!0}),o.Map.DoubleClickZoom=o.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom()+(t.originalEvent.shiftKey?-1:1);"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}}),o.Map.addInitHook("addHandler","doubleClickZoom",o.Map.DoubleClickZoom),o.Map.mergeOptions({scrollWheelZoom:!0}),o.Map.ScrollWheelZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),o.DomEvent.on(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault),this._delta=0},removeHooks:function(){o.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll),o.DomEvent.off(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault)},_onWheelScroll:function(t){var e=o.DomEvent.getWheelDelta(t);this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(40-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o.bind(this._performZoom,this),i),o.DomEvent.preventDefault(t),o.DomEvent.stopPropagation(t)},_performZoom:function(){var t=this._map,e=this._delta,i=t.getZoom();e=e>0?Math.ceil(e):Math.floor(e),e=Math.max(Math.min(e,4),-4),e=t._limitZoom(i+e)-i,this._delta=0,this._startTime=null,e&&("center"===t.options.scrollWheelZoom?t.setZoom(i+e):t.setZoomAround(this._lastMousePos,i+e))}}),o.Map.addInitHook("addHandler","scrollWheelZoom",o.Map.ScrollWheelZoom),o.extend(o.DomEvent,{_touchstart:o.Browser.msPointer?"MSPointerDown":o.Browser.pointer?"pointerdown":"touchstart",_touchend:o.Browser.msPointer?"MSPointerUp":o.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(t,i,n){function s(t){var e;if(o.Browser.pointer?(_.push(t.pointerId),e=_.length):e=t.touches.length,!(e>1)){var i=Date.now(),n=i-(r||i);h=t.touches?t.touches[0]:t,l=n>0&&u>=n,r=i}}function a(t){if(o.Browser.pointer){var e=_.indexOf(t.pointerId);if(-1===e)return;_.splice(e,1)}if(l){if(o.Browser.pointer){var n,s={};for(var a in h)n=h[a],"function"==typeof n?s[a]=n.bind(h):s[a]=n;h=s}h.type="dblclick",i(h),r=null}}var r,h,l=!1,u=250,c="_leaflet_",d=this._touchstart,p=this._touchend,_=[];t[c+d+n]=s,t[c+p+n]=a;var m=o.Browser.pointer?e.documentElement:t;return t.addEventListener(d,s,!1),m.addEventListener(p,a,!1),o.Browser.pointer&&m.addEventListener(o.DomEvent.POINTER_CANCEL,a,!1),this},removeDoubleTapListener:function(t,i){var n="_leaflet_";return t.removeEventListener(this._touchstart,t[n+this._touchstart+i],!1),(o.Browser.pointer?e.documentElement:t).removeEventListener(this._touchend,t[n+this._touchend+i],!1),o.Browser.pointer&&e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL,t[n+this._touchend+i],!1),this}}),o.extend(o.DomEvent,{POINTER_DOWN:o.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:o.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:o.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:o.Browser.msPointer?"MSPointerCancel":"pointercancel",_pointers:[],_pointerDocumentListener:!1,addPointerListener:function(t,e,i,n){switch(e){case"touchstart":return this.addPointerListenerStart(t,e,i,n);
case"touchend":return this.addPointerListenerEnd(t,e,i,n);case"touchmove":return this.addPointerListenerMove(t,e,i,n);default:throw"Unknown touch event type"}},addPointerListenerStart:function(t,i,n,s){var a="_leaflet_",r=this._pointers,h=function(t){"mouse"!==t.pointerType&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&o.DomEvent.preventDefault(t);for(var e=!1,i=0;i<r.length;i++)if(r[i].pointerId===t.pointerId){e=!0;break}e||r.push(t),t.touches=r.slice(),t.changedTouches=[t],n(t)};if(t[a+"touchstart"+s]=h,t.addEventListener(this.POINTER_DOWN,h,!1),!this._pointerDocumentListener){var l=function(t){for(var e=0;e<r.length;e++)if(r[e].pointerId===t.pointerId){r.splice(e,1);break}};e.documentElement.addEventListener(this.POINTER_UP,l,!1),e.documentElement.addEventListener(this.POINTER_CANCEL,l,!1),this._pointerDocumentListener=!0}return this},addPointerListenerMove:function(t,e,i,n){function o(t){if(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons){for(var e=0;e<a.length;e++)if(a[e].pointerId===t.pointerId){a[e]=t;break}t.touches=a.slice(),t.changedTouches=[t],i(t)}}var s="_leaflet_",a=this._pointers;return t[s+"touchmove"+n]=o,t.addEventListener(this.POINTER_MOVE,o,!1),this},addPointerListenerEnd:function(t,e,i,n){var o="_leaflet_",s=this._pointers,a=function(t){for(var e=0;e<s.length;e++)if(s[e].pointerId===t.pointerId){s.splice(e,1);break}t.touches=s.slice(),t.changedTouches=[t],i(t)};return t[o+"touchend"+n]=a,t.addEventListener(this.POINTER_UP,a,!1),t.addEventListener(this.POINTER_CANCEL,a,!1),this},removePointerListener:function(t,e,i){var n="_leaflet_",o=t[n+e+i];switch(e){case"touchstart":t.removeEventListener(this.POINTER_DOWN,o,!1);break;case"touchmove":t.removeEventListener(this.POINTER_MOVE,o,!1);break;case"touchend":t.removeEventListener(this.POINTER_UP,o,!1),t.removeEventListener(this.POINTER_CANCEL,o,!1)}return this}}),o.Map.mergeOptions({touchZoom:o.Browser.touch&&!o.Browser.android23,bounceAtZoomLimits:!0}),o.Map.TouchZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var n=i.mouseEventToLayerPoint(t.touches[0]),s=i.mouseEventToLayerPoint(t.touches[1]),a=i._getCenterLayerPoint();this._startCenter=n.add(s)._divideBy(2),this._startDist=n.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=a.subtract(this._startCenter),i._panAnim&&i._panAnim.stop(),o.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this),o.DomEvent.preventDefault(t)}},_onTouchMove:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&this._zooming){var i=e.mouseEventToLayerPoint(t.touches[0]),n=e.mouseEventToLayerPoint(t.touches[1]);this._scale=i.distanceTo(n)/this._startDist,this._delta=i._add(n)._divideBy(2)._subtract(this._startCenter),1!==this._scale&&(e.options.bounceAtZoomLimits||!(e.getZoom()===e.getMinZoom()&&this._scale<1||e.getZoom()===e.getMaxZoom()&&this._scale>1))&&(this._moved||(o.DomUtil.addClass(e._mapPane,"leaflet-touching"),e.fire("movestart").fire("zoomstart"),this._moved=!0),o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),o.DomEvent.preventDefault(t))}},_updateOnMove:function(){var t=this._map,e=this._getScaleOrigin(),i=t.layerPointToLatLng(e),n=t.getScaleZoom(this._scale);t._animateZoom(i,n,this._startCenter,this._scale,this._delta,!1,!0)},_onTouchEnd:function(){if(!this._moved||!this._zooming)return void(this._zooming=!1);var t=this._map;this._zooming=!1,o.DomUtil.removeClass(t._mapPane,"leaflet-touching"),o.Util.cancelAnimFrame(this._animRequest),o.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd);var i=this._getScaleOrigin(),n=t.layerPointToLatLng(i),s=t.getZoom(),a=t.getScaleZoom(this._scale)-s,r=a>0?Math.ceil(a):Math.floor(a),h=t._limitZoom(s+r),l=t.getZoomScale(h)/this._scale;t._animateZoom(n,h,i,l)},_getScaleOrigin:function(){var t=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(t)}}),o.Map.addInitHook("addHandler","touchZoom",o.Map.TouchZoom),o.Map.mergeOptions({tap:!0,tapTolerance:15}),o.Map.Tap=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(o.DomEvent.preventDefault(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new o.Point(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.addClass(n,"leaflet-active"),this._holdTimeout=setTimeout(o.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),o.DomEvent.on(e,"touchmove",this._onMove,this).on(e,"touchend",this._onUp,this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),o.DomEvent.off(e,"touchmove",this._onMove,this).off(e,"touchend",this._onUp,this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],n=i.target;n&&n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.removeClass(n,"leaflet-active"),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new o.Point(e.clientX,e.clientY)},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents");o._simulated=!0,n.target._simulatedClick=!0,o.initMouseEvent(i,!0,!0,t,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(o)}}),o.Browser.touch&&!o.Browser.pointer&&o.Map.addInitHook("addHandler","tap",o.Map.Tap),o.Map.mergeOptions({boxZoom:!0}),o.Map.BoxZoom=o.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._moved=!1},addHooks:function(){o.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){o.DomEvent.off(this._container,"mousedown",this._onMouseDown),this._moved=!1},moved:function(){return this._moved},_onMouseDown:function(t){return this._moved=!1,!t.shiftKey||1!==t.which&&1!==t.button?!1:(o.DomUtil.disableTextSelection(),o.DomUtil.disableImageDrag(),this._startLayerPoint=this._map.mouseEventToLayerPoint(t),void o.DomEvent.on(e,"mousemove",this._onMouseMove,this).on(e,"mouseup",this._onMouseUp,this).on(e,"keydown",this._onKeyDown,this))},_onMouseMove:function(t){this._moved||(this._box=o.DomUtil.create("div","leaflet-zoom-box",this._pane),o.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",this._map.fire("boxzoomstart"));var e=this._startLayerPoint,i=this._box,n=this._map.mouseEventToLayerPoint(t),s=n.subtract(e),a=new o.Point(Math.min(n.x,e.x),Math.min(n.y,e.y));o.DomUtil.setPosition(i,a),this._moved=!0,i.style.width=Math.max(0,Math.abs(s.x)-4)+"px",i.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_finish:function(){this._moved&&(this._pane.removeChild(this._box),this._container.style.cursor=""),o.DomUtil.enableTextSelection(),o.DomUtil.enableImageDrag(),o.DomEvent.off(e,"mousemove",this._onMouseMove).off(e,"mouseup",this._onMouseUp).off(e,"keydown",this._onKeyDown)},_onMouseUp:function(t){this._finish();var e=this._map,i=e.mouseEventToLayerPoint(t);if(!this._startLayerPoint.equals(i)){var n=new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint),e.layerPointToLatLng(i));e.fitBounds(n),e.fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}}),o.Map.addInitHook("addHandler","boxZoom",o.Map.BoxZoom),o.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),o.Map.Keyboard=o.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,173]},initialize:function(t){this._map=t,this._setPanOffset(t.options.keyboardPanOffset),this._setZoomOffset(t.options.keyboardZoomOffset)},addHooks:function(){var t=this._map._container;-1===t.tabIndex&&(t.tabIndex="0"),o.DomEvent.on(t,"focus",this._onFocus,this).on(t,"blur",this._onBlur,this).on(t,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var t=this._map._container;o.DomEvent.off(t,"focus",this._onFocus,this).off(t,"blur",this._onBlur,this).off(t,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){if(!this._focused){var i=e.body,n=e.documentElement,o=i.scrollTop||n.scrollTop,s=i.scrollLeft||n.scrollLeft;this._map._container.focus(),t.scrollTo(s,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;i>e;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;i>e;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;i>e;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;i>e;e++)n[o.up[e]]=[0,-1*t]},_setZoomOffset:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;i>e;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;i>e;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){o.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){o.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){var e=t.keyCode,i=this._map;if(e in this._panKeys){if(i._panAnim&&i._panAnim._inProgress)return;i.panBy(this._panKeys[e]),i.options.maxBounds&&i.panInsideBounds(i.options.maxBounds)}else{if(!(e in this._zoomKeys))return;i.setZoom(i.getZoom()+this._zoomKeys[e])}o.DomEvent.stop(t)}}),o.Map.addInitHook("addHandler","keyboard",o.Map.Keyboard),o.Handler.MarkerDrag=o.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new o.Draggable(t,t)),this._draggable.on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this),this._draggable.enable(),o.DomUtil.addClass(this._marker._icon,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this),this._draggable.disable(),o.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var t=this._marker,e=t._shadow,i=o.DomUtil.getPosition(t._icon),n=t._map.layerPointToLatLng(i);e&&o.DomUtil.setPosition(e,i),t._latlng=n,t.fire("move",{latlng:n}).fire("drag")},_onDragEnd:function(t){this._marker.fire("moveend").fire("dragend",t)}}),o.Control=o.Class.extend({options:{position:"topright"},initialize:function(t){o.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return o.DomUtil.addClass(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this},removeFrom:function(t){var e=this.getPosition(),i=t._controlCorners[e];return i.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(t),this},_refocusOnMap:function(){this._map&&this._map.getContainer().focus()}}),o.control=function(t){return new o.Control(t)},o.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.removeFrom(this),this},_initControlPos:function(){function t(t,s){var a=i+t+" "+i+s;e[t+s]=o.DomUtil.create("div",a,n)}var e=this._controlCorners={},i="leaflet-",n=this._controlContainer=o.DomUtil.create("div",i+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){this._container.removeChild(this._controlContainer)}}),o.Control.Zoom=o.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=o.DomUtil.create("div",e+" leaflet-bar");return this._map=t,this._zoomInButton=this._createButton(this.options.zoomInText,this.options.zoomInTitle,e+"-in",i,this._zoomIn,this),this._zoomOutButton=this._createButton(this.options.zoomOutText,this.options.zoomOutTitle,e+"-out",i,this._zoomOut,this),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(t){this._map.zoomIn(t.shiftKey?3:1)},_zoomOut:function(t){this._map.zoomOut(t.shiftKey?3:1)},_createButton:function(t,e,i,n,s,a){var r=o.DomUtil.create("a",i,n);r.innerHTML=t,r.href="#",r.title=e;var h=o.DomEvent.stopPropagation;return o.DomEvent.on(r,"click",h).on(r,"mousedown",h).on(r,"dblclick",h).on(r,"click",o.DomEvent.preventDefault).on(r,"click",s,a).on(r,"click",this._refocusOnMap,a),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";o.DomUtil.removeClass(this._zoomInButton,e),o.DomUtil.removeClass(this._zoomOutButton,e),t._zoom===t.getMinZoom()&&o.DomUtil.addClass(this._zoomOutButton,e),t._zoom===t.getMaxZoom()&&o.DomUtil.addClass(this._zoomInButton,e)}}),o.Map.mergeOptions({zoomControl:!0}),o.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new o.Control.Zoom,this.addControl(this.zoomControl))}),o.control.zoom=function(t){return new o.Control.Zoom(t)},o.Control.Attribution=o.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){o.setOptions(this,t),this._attributions={}},onAdd:function(t){this._container=o.DomUtil.create("div","leaflet-control-attribution"),o.DomEvent.disableClickPropagation(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):void 0},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):void 0},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}},_onLayerAdd:function(t){t.layer.getAttribution&&this.addAttribution(t.layer.getAttribution())},_onLayerRemove:function(t){t.layer.getAttribution&&this.removeAttribution(t.layer.getAttribution())}}),o.Map.mergeOptions({attributionControl:!0}),o.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new o.Control.Attribution).addTo(this))}),o.control.attribution=function(t){return new o.Control.Attribution(t)},o.Control.Scale=o.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(t){this._map=t;var e="leaflet-control-scale",i=o.DomUtil.create("div",e),n=this.options;return this._addScales(n,e,i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=o.DomUtil.create("div",e+"-line",i)),t.imperial&&(this._iScale=o.DomUtil.create("div",e+"-line",i))},_update:function(){var t=this._map.getBounds(),e=t.getCenter().lat,i=6378137*Math.PI*Math.cos(e*Math.PI/180),n=i*(t.getNorthEast().lng-t.getSouthWest().lng)/180,o=this._map.getSize(),s=this.options,a=0;o.x>0&&(a=n*(s.maxWidth/o.x)),this._updateScales(s,a)},_updateScales:function(t,e){t.metric&&e&&this._updateMetric(e),t.imperial&&e&&this._updateImperial(e)},_updateMetric:function(t){var e=this._getRoundNum(t);this._mScale.style.width=this._getScaleWidth(e/t)+"px",this._mScale.innerHTML=1e3>e?e+" m":e/1e3+" km"},_updateImperial:function(t){var e,i,n,o=3.2808399*t,s=this._iScale;o>5280?(e=o/5280,i=this._getRoundNum(e),s.style.width=this._getScaleWidth(i/e)+"px",s.innerHTML=i+" mi"):(n=this._getRoundNum(o),s.style.width=this._getScaleWidth(n/o)+"px",s.innerHTML=n+" ft")},_getScaleWidth:function(t){return Math.round(this.options.maxWidth*t)-10},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),o.control.scale=function(t){return new o.Control.Scale(t)},o.Control.Layers=o.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(t,e,i){o.setOptions(this,i),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){return this._initLayout(),this._update(),t.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(t){t.off("layeradd",this._onLayerChange,this).off("layerremove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._update(),this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._update(),this},removeLayer:function(t){var e=o.stamp(t);return delete this._layers[e],this._update(),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=o.DomUtil.create("div",t);e.setAttribute("aria-haspopup",!0),o.Browser.touch?o.DomEvent.on(e,"click",o.DomEvent.stopPropagation):o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);var i=this._form=o.DomUtil.create("form",t+"-list");if(this.options.collapsed){o.Browser.android||o.DomEvent.on(e,"mouseover",this._expand,this).on(e,"mouseout",this._collapse,this);var n=this._layersLink=o.DomUtil.create("a",t+"-toggle",e);n.href="#",n.title="Layers",o.Browser.touch?o.DomEvent.on(n,"click",o.DomEvent.stop).on(n,"click",this._expand,this):o.DomEvent.on(n,"focus",this._expand,this),o.DomEvent.on(i,"click",function(){setTimeout(o.bind(this._onInputClick,this),0)},this),this._map.on("click",this._collapse,this)}else this._expand();this._baseLayersList=o.DomUtil.create("div",t+"-base",i),this._separator=o.DomUtil.create("div",t+"-separator",i),this._overlaysList=o.DomUtil.create("div",t+"-overlays",i),e.appendChild(i)},_addLayer:function(t,e,i){var n=o.stamp(t);this._layers[n]={layer:t,name:e,overlay:i},this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){if(this._container){this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var t,e,i=!1,n=!1;for(t in this._layers)e=this._layers[t],this._addItem(e),n=n||e.overlay,i=i||!e.overlay;this._separator.style.display=n&&i?"":"none"}},_onLayerChange:function(t){var e=this._layers[o.stamp(t.layer)];if(e){this._handlingClick||this._update();var i=e.overlay?"layeradd"===t.type?"overlayadd":"overlayremove":"layeradd"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)}},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"';i&&(n+=' checked="checked"'),n+="/>";var o=e.createElement("div");return o.innerHTML=n,o.firstChild},_addItem:function(t){var i,n=e.createElement("label"),s=this._map.hasLayer(t.layer);t.overlay?(i=e.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=s):i=this._createRadioElement("leaflet-base-layers",s),i.layerId=o.stamp(t.layer),o.DomEvent.on(i,"click",this._onInputClick,this);var a=e.createElement("span");a.innerHTML=" "+t.name,n.appendChild(i),n.appendChild(a);var r=t.overlay?this._overlaysList:this._baseLayersList;return r.appendChild(n),n},_onInputClick:function(){var t,e,i,n=this._form.getElementsByTagName("input"),o=n.length;for(this._handlingClick=!0,t=0;o>t;t++)e=n[t],i=this._layers[e.layerId],e.checked&&!this._map.hasLayer(i.layer)?this._map.addLayer(i.layer):!e.checked&&this._map.hasLayer(i.layer)&&this._map.removeLayer(i.layer);this._handlingClick=!1,this._refocusOnMap()},_expand:function(){o.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),o.control.layers=function(t,e,i){return new o.Control.Layers(t,e,i)},o.PosAnimation=o.Class.extend({includes:o.Mixin.Events,run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._newPos=e,this.fire("start"),t.style[o.DomUtil.TRANSITION]="all "+(i||.25)+"s cubic-bezier(0,0,"+(n||.5)+",1)",o.DomEvent.on(t,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),o.DomUtil.setPosition(t,e),o.Util.falseFn(t.offsetWidth),this._stepTimer=setInterval(o.bind(this._onStep,this),50)},stop:function(){this._inProgress&&(o.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),o.Util.falseFn(this._el.offsetWidth))},_onStep:function(){var t=this._getPos();return t?(this._el._leaflet_pos=t,void this.fire("step")):void this._onTransitionEnd()},_transformRe:/([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,_getPos:function(){var e,i,n,s=this._el,a=t.getComputedStyle(s);if(o.Browser.any3d){if(n=a[o.DomUtil.TRANSFORM].match(this._transformRe),!n)return;e=parseFloat(n[1]),i=parseFloat(n[2])}else e=parseFloat(a.left),i=parseFloat(a.top);return new o.Point(e,i,!0)},_onTransitionEnd:function(){o.DomEvent.off(this._el,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),this._inProgress&&(this._inProgress=!1,this._el.style[o.DomUtil.TRANSITION]="",this._el._leaflet_pos=this._newPos,clearInterval(this._stepTimer),this.fire("step").fire("end"))}}),o.Map.include({setView:function(t,e,n){if(e=e===i?this._zoom:this._limitZoom(e),t=this._limitCenter(o.latLng(t),e,this.options.maxBounds),n=n||{},this._panAnim&&this._panAnim.stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==i&&(n.zoom=o.extend({animate:n.animate},n.zoom),n.pan=o.extend({animate:n.animate},n.pan));var s=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},panBy:function(t,e){if(t=o.point(t).round(),e=e||{},!t.x&&!t.y)return this;if(this._panAnim||(this._panAnim=new o.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){o.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t);this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){o.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._floor();return(e&&e.animate)===!0||this.getSize().contains(i)?(this.panBy(i,e),!0):!1}}),o.PosAnimation=o.DomUtil.TRANSITION?o.PosAnimation:o.PosAnimation.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=o.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(),this._complete())},_animate:function(){this._animId=o.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var t=+new Date-this._startTime,e=1e3*this._duration;e>t?this._runFrame(this._easeOut(t/e)):(this._runFrame(1),this._complete())},_runFrame:function(t){var e=this._startPos.add(this._offset.multiplyBy(t));o.DomUtil.setPosition(this._el,e),this.fire("step")},_complete:function(){o.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),o.Map.mergeOptions({zoomAnimation:!0,zoomAnimationThreshold:4}),o.DomUtil.TRANSITION&&o.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation&&o.DomUtil.TRANSITION&&o.Browser.any3d&&!o.Browser.android23&&!o.Browser.mobileOpera,this._zoomAnimated&&o.DomEvent.on(this._mapPane,o.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),o.Map.include(o.DomUtil.TRANSITION?{_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n),s=this._getCenterLayerPoint()._add(o);return i.animate===!0||this.getSize().contains(o)?(this.fire("movestart").fire("zoomstart"),this._animateZoom(t,e,s,n,null,!0),!0):!1},_animateZoom:function(t,e,i,n,s,a,r){r||(this._animatingZoom=!0),o.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this._animateToCenter=t,this._animateToZoom=e,o.Draggable&&(o.Draggable._disabled=!0),o.Util.requestAnimFrame(function(){this.fire("zoomanim",{center:t,zoom:e,origin:i,scale:n,delta:s,backwards:a}),setTimeout(o.bind(this._onZoomTransitionEnd,this),250)},this)},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._animatingZoom=!1,o.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),o.Util.requestAnimFrame(function(){this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),o.Draggable&&(o.Draggable._disabled=!1)},this))}}:{}),o.TileLayer.include({_animateZoom:function(t){this._animating||(this._animating=!0,this._prepareBgBuffer());var e=this._bgBuffer,i=o.DomUtil.TRANSFORM,n=t.delta?o.DomUtil.getTranslateString(t.delta):e.style[i],s=o.DomUtil.getScaleString(t.scale,t.origin);e.style[i]=t.backwards?s+" "+n:n+" "+s},_endZoomAnim:function(){var t=this._tileContainer,e=this._bgBuffer;t.style.visibility="",t.parentNode.appendChild(t),o.Util.falseFn(e.offsetWidth);var i=this._map.getZoom();(i>this.options.maxZoom||i<this.options.minZoom)&&this._clearBgBuffer(),this._animating=!1},_clearBgBuffer:function(){var t=this._map;!t||t._animatingZoom||t.touchZoom._zooming||(this._bgBuffer.innerHTML="",this._bgBuffer.style[o.DomUtil.TRANSFORM]="")},_prepareBgBuffer:function(){var t=this._tileContainer,e=this._bgBuffer,i=this._getLoadedTilesPercentage(e),n=this._getLoadedTilesPercentage(t);return e&&i>.5&&.5>n?(t.style.visibility="hidden",void this._stopLoadingImages(t)):(e.style.visibility="hidden",e.style[o.DomUtil.TRANSFORM]="",this._tileContainer=e,e=this._bgBuffer=t,this._stopLoadingImages(e),void clearTimeout(this._clearBgBufferTimer))},_getLoadedTilesPercentage:function(t){var e,i,n=t.getElementsByTagName("img"),o=0;for(e=0,i=n.length;i>e;e++)n[e].complete&&o++;return o/i},_stopLoadingImages:function(t){var e,i,n,s=Array.prototype.slice.call(t.getElementsByTagName("img"));for(e=0,i=s.length;i>e;e++)n=s[e],n.complete||(n.onload=o.Util.falseFn,n.onerror=o.Util.falseFn,n.src=o.Util.emptyImageUrl,n.parentNode.removeChild(n))}}),o.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:1/0,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(t){if(t=this._locateOptions=o.extend(this._defaultLocateOptions,t),!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=o.bind(this._handleGeolocationResponse,this),i=o.bind(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new o.LatLng(e,i),s=180*t.coords.accuracy/40075017,a=s/Math.cos(o.LatLng.DEG_TO_RAD*e),r=o.latLngBounds([e-s,i-a],[e+s,i+a]),h=this._locateOptions;if(h.setView){var l=Math.min(this.getBoundsZoom(r),h.maxZoom);this.setView(n,l)}var u={latlng:n,bounds:r,timestamp:t.timestamp};for(var c in t.coords)"number"==typeof t.coords[c]&&(u[c]=t.coords[c]);this.fire("locationfound",u)}})}(window,document);
},{}],4:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&exports&&"string"!=typeof exports.nodeName?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e.Mustache={},t(e.Mustache))}(this,function(e){function t(e){return"function"==typeof e}function n(e){return g(e)?"array":typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(e,t){return null!=e&&"object"==typeof e&&t in e}function o(e,t){return v.call(e,t)}function s(e){return!o(w,e)}function a(e){return String(e).replace(/[&<>"'`=\/]/g,function(e){return y[e]})}function u(t,n){function i(){if(w&&!y)for(;v.length;)delete d[v.pop()];else v=[];w=!1,y=!1}function o(e){if("string"==typeof e&&(e=e.split(k,2)),!g(e)||2!==e.length)throw new Error("Invalid tags: "+e);a=new RegExp(r(e[0])+"\\s*"),u=new RegExp("\\s*"+r(e[1])),h=new RegExp("\\s*"+r("}"+e[1]))}if(!t)return[];var a,u,h,f=[],d=[],v=[],w=!1,y=!1;o(n||e.tags);for(var U,T,j,S,V,C,A=new l(t);!A.eos();){if(U=A.pos,j=A.scanUntil(a))for(var I=0,R=j.length;R>I;++I)S=j.charAt(I),s(S)?v.push(d.length):y=!0,d.push(["text",S,U,U+1]),U+=1,"\n"===S&&i();if(!A.scan(a))break;if(w=!0,T=A.scan(E)||"name",A.scan(x),"="===T?(j=A.scanUntil(b),A.scan(b),A.scanUntil(u)):"{"===T?(j=A.scanUntil(h),A.scan(m),A.scanUntil(u),T="&"):j=A.scanUntil(u),!A.scan(u))throw new Error("Unclosed tag at "+A.pos);if(V=[T,j,U,A.pos],d.push(V),"#"===T||"^"===T)f.push(V);else if("/"===T){if(C=f.pop(),!C)throw new Error('Unopened section "'+j+'" at '+U);if(C[1]!==j)throw new Error('Unclosed section "'+C[1]+'" at '+U)}else"name"===T||"{"===T||"&"===T?y=!0:"="===T&&o(j)}if(C=f.pop())throw new Error('Unclosed section "'+C[1]+'" at '+A.pos);return p(c(d))}function c(e){for(var t,n,r=[],i=0,o=e.length;o>i;++i)t=e[i],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function p(e){for(var t,n,r=[],i=r,o=[],s=0,a=e.length;a>s;++s)switch(t=e[s],t[0]){case"#":case"^":i.push(t),o.push(t),i=t[4]=[];break;case"/":n=o.pop(),n[5]=t[2],i=o.length>0?o[o.length-1][4]:r;break;default:i.push(t)}return r}function l(e){this.string=e,this.tail=e,this.pos=0}function h(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function f(){this.cache={}}var d=Object.prototype.toString,g=Array.isArray||function(e){return"[object Array]"===d.call(e)},v=RegExp.prototype.test,w=/\S/,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},x=/\s*/,k=/\s+/,b=/\s*=/,m=/\s*\}/,E=/#|\^|\/|>|\{|&|=|!/;l.prototype.eos=function(){return""===this.tail},l.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},l.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},h.prototype.push=function(e){return new h(e,this)},h.prototype.lookup=function(e){var n,r=this.cache;if(r.hasOwnProperty(e))n=r[e];else{for(var o,s,a=this,u=!1;a;){if(e.indexOf(".")>0)for(n=a.view,o=e.split("."),s=0;null!=n&&s<o.length;)s===o.length-1&&(u=i(n,o[s])),n=n[o[s++]];else n=a.view[e],u=i(a.view,e);if(u)break;a=a.parent}r[e]=n}return t(n)&&(n=n.call(this.view)),n},f.prototype.clearCache=function(){this.cache={}},f.prototype.parse=function(e,t){var n=this.cache,r=n[e];return null==r&&(r=n[e]=u(e,t)),r},f.prototype.render=function(e,t,n){var r=this.parse(e),i=t instanceof h?t:new h(t);return this.renderTokens(r,i,n,e)},f.prototype.renderTokens=function(e,t,n,r){for(var i,o,s,a="",u=0,c=e.length;c>u;++u)s=void 0,i=e[u],o=i[0],"#"===o?s=this.renderSection(i,t,n,r):"^"===o?s=this.renderInverted(i,t,n,r):">"===o?s=this.renderPartial(i,t,n,r):"&"===o?s=this.unescapedValue(i,t):"name"===o?s=this.escapedValue(i,t):"text"===o&&(s=this.rawValue(i)),void 0!==s&&(a+=s);return a},f.prototype.renderSection=function(e,n,r,i){function o(e){return s.render(e,n,r)}var s=this,a="",u=n.lookup(e[1]);if(u){if(g(u))for(var c=0,p=u.length;p>c;++c)a+=this.renderTokens(e[4],n.push(u[c]),r,i);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)a+=this.renderTokens(e[4],n.push(u),r,i);else if(t(u)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,i.slice(e[3],e[5]),o),null!=u&&(a+=u)}else a+=this.renderTokens(e[4],n,r,i);return a}},f.prototype.renderInverted=function(e,t,n,r){var i=t.lookup(e[1]);return!i||g(i)&&0===i.length?this.renderTokens(e[4],t,n,r):void 0},f.prototype.renderPartial=function(e,n,r){if(r){var i=t(r)?r(e[1]):r[e[1]];return null!=i?this.renderTokens(this.parse(i),n,r,i):void 0}},f.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);return null!=n?n:void 0},f.prototype.escapedValue=function(t,n){var r=n.lookup(t[1]);return null!=r?e.escape(r):void 0},f.prototype.rawValue=function(e){return e[1]},e.name="mustache.js",e.version="2.2.1",e.tags=["{{","}}"];var U=new f;e.clearCache=function(){return U.clearCache()},e.parse=function(e,t){return U.parse(e,t)},e.render=function(e,t,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+n(e)+'" was given as the first argument for mustache#render(template, view, partials)');return U.render(e,t,r)},e.to_html=function(n,r,i,o){var s=e.render(n,r,i);return t(o)?void o(s):s},e.escape=a,e.Scanner=l,e.Context=h,e.Writer=f});
},{}],5:[function(require,module,exports){
function cleanUrl(t){"use strict";return/^https?/.test(t.getScheme())?t.toString():/^mailto?/.test(t.getScheme())?t.toString():"data"==t.getScheme()&&/^image/.test(t.getPath())?t.toString():void 0}function cleanId(t){return t}var html_sanitize=require("./sanitizer-bundle.js");module.exports=function(t){return t?html_sanitize(t,cleanUrl,cleanId):""};
},{"./sanitizer-bundle.js":6}],6:[function(require,module,exports){
var URI=function(){function e(e){var t=(""+e).match(p);return t?new s(c(t[1]),c(t[2]),c(t[3]),c(t[4]),c(t[5]),c(t[6]),c(t[7])):null}function t(e,t,o,i,l,c,m){var u=new s(n(e,d),n(t,d),a(o),i>0?i.toString():null,n(l,f),null,a(m));return c&&("string"==typeof c?u.setRawQuery(c.replace(/[^?&=0-9A-Za-z_\-~.%]/g,r)):u.setAllParameters(c)),u}function a(e){return"string"==typeof e?encodeURIComponent(e):null}function n(e,t){return"string"==typeof e?encodeURI(e).replace(t,r):null}function r(e){var t=e.charCodeAt(0);return"%"+"0123456789ABCDEF".charAt(t>>4&15)+"0123456789ABCDEF".charAt(15&t)}function o(e){return e.replace(/(^|\/)\.(?:\/|$)/g,"$1").replace(/\/{2,}/g,"/")}function i(e){if(null===e)return null;for(var t,a=o(e),n=u;(t=a.replace(n,"$1"))!=a;a=t);return a}function l(e,t){var a=e.clone(),n=t.hasScheme();n?a.setRawScheme(t.getRawScheme()):n=t.hasCredentials(),n?a.setRawCredentials(t.getRawCredentials()):n=t.hasDomain(),n?a.setRawDomain(t.getRawDomain()):n=t.hasPort();var r=t.getRawPath(),o=i(r);if(n)a.setPort(t.getPort()),o=o&&o.replace(h,"");else if(n=!!r){if(47!==o.charCodeAt(0)){var l=i(a.getRawPath()||"").replace(h,""),s=l.lastIndexOf("/")+1;o=i((s?l.substring(0,s):"")+i(r)).replace(h,"")}}else o=o&&o.replace(h,""),o!==r&&a.setRawPath(o);return n?a.setRawPath(o):n=t.hasQuery(),n?a.setRawQuery(t.getRawQuery()):n=t.hasFragment(),n&&a.setRawFragment(t.getRawFragment()),a}function s(e,t,a,n,r,o,i){this.scheme_=e,this.credentials_=t,this.domain_=a,this.port_=n,this.path_=r,this.query_=o,this.fragment_=i,this.paramCache_=null}function c(e){return"string"==typeof e&&e.length>0?e:null}var m=new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),u=new RegExp(m),h=/^(?:\.\.\/)*(?:\.\.$)?/;s.prototype.toString=function(){var e=[];return null!==this.scheme_&&e.push(this.scheme_,":"),null!==this.domain_&&(e.push("//"),null!==this.credentials_&&e.push(this.credentials_,"@"),e.push(this.domain_),null!==this.port_&&e.push(":",this.port_.toString())),null!==this.path_&&e.push(this.path_),null!==this.query_&&e.push("?",this.query_),null!==this.fragment_&&e.push("#",this.fragment_),e.join("")},s.prototype.clone=function(){return new s(this.scheme_,this.credentials_,this.domain_,this.port_,this.path_,this.query_,this.fragment_)},s.prototype.getScheme=function(){return this.scheme_&&decodeURIComponent(this.scheme_).toLowerCase()},s.prototype.getRawScheme=function(){return this.scheme_},s.prototype.setScheme=function(e){return this.scheme_=n(e,d),this},s.prototype.setRawScheme=function(e){return this.scheme_=e?e:null,this},s.prototype.hasScheme=function(){return null!==this.scheme_},s.prototype.getCredentials=function(){return this.credentials_&&decodeURIComponent(this.credentials_)},s.prototype.getRawCredentials=function(){return this.credentials_},s.prototype.setCredentials=function(e){return this.credentials_=n(e,d),this},s.prototype.setRawCredentials=function(e){return this.credentials_=e?e:null,this},s.prototype.hasCredentials=function(){return null!==this.credentials_},s.prototype.getDomain=function(){return this.domain_&&decodeURIComponent(this.domain_)},s.prototype.getRawDomain=function(){return this.domain_},s.prototype.setDomain=function(e){return this.setRawDomain(e&&encodeURIComponent(e))},s.prototype.setRawDomain=function(e){return this.domain_=e?e:null,this.setRawPath(this.path_)},s.prototype.hasDomain=function(){return null!==this.domain_},s.prototype.getPort=function(){return this.port_&&decodeURIComponent(this.port_)},s.prototype.setPort=function(e){if(e){if(e=Number(e),e!==(65535&e))throw new Error("Bad port number "+e);this.port_=""+e}else this.port_=null;return this},s.prototype.hasPort=function(){return null!==this.port_},s.prototype.getPath=function(){return this.path_&&decodeURIComponent(this.path_)},s.prototype.getRawPath=function(){return this.path_},s.prototype.setPath=function(e){return this.setRawPath(n(e,f))},s.prototype.setRawPath=function(e){return e?(e=String(e),this.path_=!this.domain_||/^\//.test(e)?e:"/"+e):this.path_=null,this},s.prototype.hasPath=function(){return null!==this.path_},s.prototype.getQuery=function(){return this.query_&&decodeURIComponent(this.query_).replace(/\+/g," ")},s.prototype.getRawQuery=function(){return this.query_},s.prototype.setQuery=function(e){return this.paramCache_=null,this.query_=a(e),this},s.prototype.setRawQuery=function(e){return this.paramCache_=null,this.query_=e?e:null,this},s.prototype.hasQuery=function(){return null!==this.query_},s.prototype.setAllParameters=function(e){if("object"==typeof e&&!(e instanceof Array)&&(e instanceof Object||"[object Array]"!==Object.prototype.toString.call(e))){var t=[],a=-1;for(var n in e){var r=e[n];"string"==typeof r&&(t[++a]=n,t[++a]=r)}e=t}this.paramCache_=null;for(var o=[],i="",l=0;l<e.length;){var n=e[l++],r=e[l++];o.push(i,encodeURIComponent(n.toString())),i="&",r&&o.push("=",encodeURIComponent(r.toString()))}return this.query_=o.join(""),this},s.prototype.checkParameterCache_=function(){if(!this.paramCache_){var e=this.query_;if(e){for(var t=e.split(/[&\?]/),a=[],n=-1,r=0;r<t.length;++r){var o=t[r].match(/^([^=]*)(?:=(.*))?$/);a[++n]=decodeURIComponent(o[1]).replace(/\+/g," "),a[++n]=decodeURIComponent(o[2]||"").replace(/\+/g," ")}this.paramCache_=a}else this.paramCache_=[]}},s.prototype.setParameterValues=function(e,t){"string"==typeof t&&(t=[t]),this.checkParameterCache_();for(var a=0,n=this.paramCache_,r=[],o=0;o<n.length;o+=2)e===n[o]?a<t.length&&r.push(e,t[a++]):r.push(n[o],n[o+1]);for(;a<t.length;)r.push(e,t[a++]);return this.setAllParameters(r),this},s.prototype.removeParameter=function(e){return this.setParameterValues(e,[])},s.prototype.getAllParameters=function(){return this.checkParameterCache_(),this.paramCache_.slice(0,this.paramCache_.length)},s.prototype.getParameterValues=function(e){this.checkParameterCache_();for(var t=[],a=0;a<this.paramCache_.length;a+=2)e===this.paramCache_[a]&&t.push(this.paramCache_[a+1]);return t},s.prototype.getParameterMap=function(e){this.checkParameterCache_();for(var t={},a=0;a<this.paramCache_.length;a+=2){var n=this.paramCache_[a++],r=this.paramCache_[a++];n in t?t[n].push(r):t[n]=[r]}return t},s.prototype.getParameterValue=function(e){this.checkParameterCache_();for(var t=0;t<this.paramCache_.length;t+=2)if(e===this.paramCache_[t])return this.paramCache_[t+1];return null},s.prototype.getFragment=function(){return this.fragment_&&decodeURIComponent(this.fragment_)},s.prototype.getRawFragment=function(){return this.fragment_},s.prototype.setFragment=function(e){return this.fragment_=e?encodeURIComponent(e):null,this},s.prototype.setRawFragment=function(e){return this.fragment_=e?e:null,this},s.prototype.hasFragment=function(){return null!==this.fragment_};var p=new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),d=/[#\/\?@]/g,f=/[\#\?]/g;return s.parse=e,s.create=t,s.resolve=l,s.collapse_dots=i,s.utils={mimeTypeOf:function(t){var a=e(t);return/\.html$/.test(a.getPath())?"text/html":"application/javascript"},resolve:function(t,a){return t?l(e(t),e(a)).toString():""+a}},s}(),html4={};if(html4.atype={NONE:0,URI:1,URI_FRAGMENT:11,SCRIPT:2,STYLE:3,HTML:12,ID:4,IDREF:5,IDREFS:6,GLOBAL_NAME:7,LOCAL_NAME:8,CLASSES:9,FRAME_TARGET:10,MEDIA_QUERY:13},html4.atype=html4.atype,html4.ATTRIBS={"*::class":9,"*::dir":0,"*::draggable":0,"*::hidden":0,"*::id":4,"*::inert":0,"*::itemprop":0,"*::itemref":6,"*::itemscope":0,"*::lang":0,"*::onblur":2,"*::onchange":2,"*::onclick":2,"*::ondblclick":2,"*::onfocus":2,"*::onkeydown":2,"*::onkeypress":2,"*::onkeyup":2,"*::onload":2,"*::onmousedown":2,"*::onmousemove":2,"*::onmouseout":2,"*::onmouseover":2,"*::onmouseup":2,"*::onreset":2,"*::onscroll":2,"*::onselect":2,"*::onsubmit":2,"*::onunload":2,"*::spellcheck":0,"*::style":3,"*::title":0,"*::translate":0,"a::accesskey":0,"a::coords":0,"a::href":1,"a::hreflang":0,"a::name":7,"a::onblur":2,"a::onfocus":2,"a::shape":0,"a::tabindex":0,"a::target":10,"a::type":0,"area::accesskey":0,"area::alt":0,"area::coords":0,"area::href":1,"area::nohref":0,"area::onblur":2,"area::onfocus":2,"area::shape":0,"area::tabindex":0,"area::target":10,"audio::controls":0,"audio::loop":0,"audio::mediagroup":5,"audio::muted":0,"audio::preload":0,"bdo::dir":0,"blockquote::cite":1,"br::clear":0,"button::accesskey":0,"button::disabled":0,"button::name":8,"button::onblur":2,"button::onfocus":2,"button::tabindex":0,"button::type":0,"button::value":0,"canvas::height":0,"canvas::width":0,"caption::align":0,"col::align":0,"col::char":0,"col::charoff":0,"col::span":0,"col::valign":0,"col::width":0,"colgroup::align":0,"colgroup::char":0,"colgroup::charoff":0,"colgroup::span":0,"colgroup::valign":0,"colgroup::width":0,"command::checked":0,"command::command":5,"command::disabled":0,"command::icon":1,"command::label":0,"command::radiogroup":0,"command::type":0,"data::value":0,"del::cite":1,"del::datetime":0,"details::open":0,"dir::compact":0,"div::align":0,"dl::compact":0,"fieldset::disabled":0,"font::color":0,"font::face":0,"font::size":0,"form::accept":0,"form::action":1,"form::autocomplete":0,"form::enctype":0,"form::method":0,"form::name":7,"form::novalidate":0,"form::onreset":2,"form::onsubmit":2,"form::target":10,"h1::align":0,"h2::align":0,"h3::align":0,"h4::align":0,"h5::align":0,"h6::align":0,"hr::align":0,"hr::noshade":0,"hr::size":0,"hr::width":0,"iframe::align":0,"iframe::frameborder":0,"iframe::height":0,"iframe::marginheight":0,"iframe::marginwidth":0,"iframe::width":0,"img::align":0,"img::alt":0,"img::border":0,"img::height":0,"img::hspace":0,"img::ismap":0,"img::name":7,"img::src":1,"img::usemap":11,"img::vspace":0,"img::width":0,"input::accept":0,"input::accesskey":0,"input::align":0,"input::alt":0,"input::autocomplete":0,"input::checked":0,"input::disabled":0,"input::inputmode":0,"input::ismap":0,"input::list":5,"input::max":0,"input::maxlength":0,"input::min":0,"input::multiple":0,"input::name":8,"input::onblur":2,"input::onchange":2,"input::onfocus":2,"input::onselect":2,"input::placeholder":0,"input::readonly":0,"input::required":0,"input::size":0,"input::src":1,"input::step":0,"input::tabindex":0,"input::type":0,"input::usemap":11,"input::value":0,"ins::cite":1,"ins::datetime":0,"label::accesskey":0,"label::for":5,"label::onblur":2,"label::onfocus":2,"legend::accesskey":0,"legend::align":0,"li::type":0,"li::value":0,"map::name":7,"menu::compact":0,"menu::label":0,"menu::type":0,"meter::high":0,"meter::low":0,"meter::max":0,"meter::min":0,"meter::value":0,"ol::compact":0,"ol::reversed":0,"ol::start":0,"ol::type":0,"optgroup::disabled":0,"optgroup::label":0,"option::disabled":0,"option::label":0,"option::selected":0,"option::value":0,"output::for":6,"output::name":8,"p::align":0,"pre::width":0,"progress::max":0,"progress::min":0,"progress::value":0,"q::cite":1,"select::autocomplete":0,"select::disabled":0,"select::multiple":0,"select::name":8,"select::onblur":2,"select::onchange":2,"select::onfocus":2,"select::required":0,"select::size":0,"select::tabindex":0,"source::type":0,"table::align":0,"table::bgcolor":0,"table::border":0,"table::cellpadding":0,"table::cellspacing":0,"table::frame":0,"table::rules":0,"table::summary":0,"table::width":0,"tbody::align":0,"tbody::char":0,"tbody::charoff":0,"tbody::valign":0,"td::abbr":0,"td::align":0,"td::axis":0,"td::bgcolor":0,"td::char":0,"td::charoff":0,"td::colspan":0,"td::headers":6,"td::height":0,"td::nowrap":0,"td::rowspan":0,"td::scope":0,"td::valign":0,"td::width":0,"textarea::accesskey":0,"textarea::autocomplete":0,"textarea::cols":0,"textarea::disabled":0,"textarea::inputmode":0,"textarea::name":8,"textarea::onblur":2,"textarea::onchange":2,"textarea::onfocus":2,"textarea::onselect":2,"textarea::placeholder":0,"textarea::readonly":0,"textarea::required":0,"textarea::rows":0,"textarea::tabindex":0,"textarea::wrap":0,"tfoot::align":0,"tfoot::char":0,"tfoot::charoff":0,"tfoot::valign":0,"th::abbr":0,"th::align":0,"th::axis":0,"th::bgcolor":0,"th::char":0,"th::charoff":0,"th::colspan":0,"th::headers":6,"th::height":0,"th::nowrap":0,"th::rowspan":0,"th::scope":0,"th::valign":0,"th::width":0,"thead::align":0,"thead::char":0,"thead::charoff":0,"thead::valign":0,"tr::align":0,"tr::bgcolor":0,"tr::char":0,"tr::charoff":0,"tr::valign":0,"track::default":0,"track::kind":0,"track::label":0,"track::srclang":0,"ul::compact":0,"ul::type":0,"video::controls":0,"video::height":0,"video::loop":0,"video::mediagroup":5,"video::muted":0,"video::poster":1,"video::preload":0,"video::width":0},html4.ATTRIBS=html4.ATTRIBS,html4.eflags={OPTIONAL_ENDTAG:1,EMPTY:2,CDATA:4,RCDATA:8,UNSAFE:16,FOLDABLE:32,SCRIPT:64,STYLE:128,VIRTUALIZED:256},html4.eflags=html4.eflags,html4.ELEMENTS={a:0,abbr:0,acronym:0,address:0,applet:272,area:2,article:0,aside:0,audio:0,b:0,base:274,basefont:274,bdi:0,bdo:0,big:0,blockquote:0,body:305,br:2,button:0,canvas:0,caption:0,center:0,cite:0,code:0,col:2,colgroup:1,command:2,data:0,datalist:0,dd:1,del:0,details:0,dfn:0,dialog:272,dir:0,div:0,dl:0,dt:1,em:0,fieldset:0,figcaption:0,figure:0,font:0,footer:0,form:0,frame:274,frameset:272,h1:0,h2:0,h3:0,h4:0,h5:0,h6:0,head:305,header:0,hgroup:0,hr:2,html:305,i:0,iframe:16,img:2,input:2,ins:0,isindex:274,kbd:0,keygen:274,label:0,legend:0,li:1,link:274,map:0,mark:0,menu:0,meta:274,meter:0,nav:0,nobr:0,noembed:276,noframes:276,noscript:276,object:272,ol:0,optgroup:0,option:1,output:0,p:1,param:274,pre:0,progress:0,q:0,s:0,samp:0,script:84,section:0,select:0,small:0,source:2,span:0,strike:0,strong:0,style:148,sub:0,summary:0,sup:0,table:0,tbody:1,td:1,textarea:8,tfoot:1,th:1,thead:1,time:0,title:280,tr:1,track:2,tt:0,u:0,ul:0,"var":0,video:0,wbr:2},html4.ELEMENTS=html4.ELEMENTS,html4.ELEMENT_DOM_INTERFACES={a:"HTMLAnchorElement",abbr:"HTMLElement",acronym:"HTMLElement",address:"HTMLElement",applet:"HTMLAppletElement",area:"HTMLAreaElement",article:"HTMLElement",aside:"HTMLElement",audio:"HTMLAudioElement",b:"HTMLElement",base:"HTMLBaseElement",basefont:"HTMLBaseFontElement",bdi:"HTMLElement",bdo:"HTMLElement",big:"HTMLElement",blockquote:"HTMLQuoteElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLTableCaptionElement",center:"HTMLElement",cite:"HTMLElement",code:"HTMLElement",col:"HTMLTableColElement",colgroup:"HTMLTableColElement",command:"HTMLCommandElement",data:"HTMLElement",datalist:"HTMLDataListElement",dd:"HTMLElement",del:"HTMLModElement",details:"HTMLDetailsElement",dfn:"HTMLElement",dialog:"HTMLDialogElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",dl:"HTMLDListElement",dt:"HTMLElement",em:"HTMLElement",fieldset:"HTMLFieldSetElement",figcaption:"HTMLElement",figure:"HTMLElement",font:"HTMLFontElement",footer:"HTMLElement",form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",h1:"HTMLHeadingElement",h2:"HTMLHeadingElement",h3:"HTMLHeadingElement",h4:"HTMLHeadingElement",h5:"HTMLHeadingElement",h6:"HTMLHeadingElement",head:"HTMLHeadElement",header:"HTMLElement",hgroup:"HTMLElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",i:"HTMLElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",ins:"HTMLModElement",isindex:"HTMLUnknownElement",kbd:"HTMLElement",keygen:"HTMLKeygenElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",map:"HTMLMapElement",mark:"HTMLElement",menu:"HTMLMenuElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",nav:"HTMLElement",nobr:"HTMLElement",noembed:"HTMLElement",noframes:"HTMLElement",noscript:"HTMLElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",s:"HTMLElement",samp:"HTMLElement",script:"HTMLScriptElement",section:"HTMLElement",select:"HTMLSelectElement",small:"HTMLElement",source:"HTMLSourceElement",span:"HTMLSpanElement",strike:"HTMLElement",strong:"HTMLElement",style:"HTMLStyleElement",sub:"HTMLElement",summary:"HTMLElement",sup:"HTMLElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",td:"HTMLTableDataCellElement",textarea:"HTMLTextAreaElement",tfoot:"HTMLTableSectionElement",th:"HTMLTableHeaderCellElement",thead:"HTMLTableSectionElement",time:"HTMLTimeElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",tt:"HTMLElement",u:"HTMLElement",ul:"HTMLUListElement","var":"HTMLElement",video:"HTMLVideoElement",wbr:"HTMLElement"},html4.ELEMENT_DOM_INTERFACES=html4.ELEMENT_DOM_INTERFACES,html4.ueffects={NOT_LOADED:0,SAME_DOCUMENT:1,NEW_DOCUMENT:2},html4.ueffects=html4.ueffects,html4.URIEFFECTS={"a::href":2,"area::href":2,"blockquote::cite":0,"command::icon":1,"del::cite":0,"form::action":2,"img::src":1,"input::src":1,"ins::cite":0,"q::cite":0,"video::poster":1},html4.URIEFFECTS=html4.URIEFFECTS,html4.ltypes={UNSANDBOXED:2,SANDBOXED:1,DATA:0},html4.ltypes=html4.ltypes,html4.LOADERTYPES={"a::href":2,"area::href":2,"blockquote::cite":2,"command::icon":1,"del::cite":2,"form::action":2,"img::src":1,"input::src":1,"ins::cite":2,"q::cite":2,"video::poster":1},html4.LOADERTYPES=html4.LOADERTYPES,"i"!=="I".toLowerCase())throw"I/i problem";var html=function(e){function t(e){if(S.hasOwnProperty(e))return S[e];var t=e.match(P);if(t)return String.fromCharCode(parseInt(t[1],10));if(t=e.match(D))return String.fromCharCode(parseInt(t[1],16));if(I&&k.test(e)){I.innerHTML="&"+e+";";var a=I.textContent;return S[e]=a,a}return"&"+e+";"}function a(e,a){return t(a)}function n(e){return e.replace(x,"")}function r(e){return e.replace(N,a)}function o(e){return(""+e).replace(F,"&amp;").replace(B,"&lt;").replace(q,"&gt;").replace(z,"&#34;")}function i(e){return e.replace(U,"&amp;$1").replace(B,"&lt;").replace(q,"&gt;")}function l(e){var t={cdata:e.cdata||e.cdata,comment:e.comment||e.comment,endDoc:e.endDoc||e.endDoc,endTag:e.endTag||e.endTag,pcdata:e.pcdata||e.pcdata,rcdata:e.rcdata||e.rcdata,startDoc:e.startDoc||e.startDoc,startTag:e.startTag||e.startTag};return function(e,a){return s(e,t,a)}}function s(e,t,a){var n=u(e),r={noMoreGT:!1,noMoreEndComments:!1};m(t,n,0,r,a)}function c(e,t,a,n,r){return function(){m(e,t,a,n,r)}}function m(t,a,n,r,o){try{t.startDoc&&0==n&&t.startDoc(o);for(var i,l,s,m=n,u=a.length;u>m;){var f=a[m++],g=a[m];switch(f){case"&":O.test(g)?(t.pcdata&&t.pcdata("&"+g,o,Y,c(t,a,m,r,o)),m++):t.pcdata&&t.pcdata("&amp;",o,Y,c(t,a,m,r,o));break;case"</":(i=/^([-\w:]+)[^\'\"]*/.exec(g))?i[0].length===g.length&&">"===a[m+1]?(m+=2,s=i[1].toLowerCase(),t.endTag&&t.endTag(s,o,Y,c(t,a,m,r,o))):m=h(a,m,t,o,Y,r):t.pcdata&&t.pcdata("&lt;/",o,Y,c(t,a,m,r,o));break;case"<":if(i=/^([-\w:]+)\s*\/?/.exec(g))if(i[0].length===g.length&&">"===a[m+1]){m+=2,s=i[1].toLowerCase(),t.startTag&&t.startTag(s,[],o,Y,c(t,a,m,r,o));var E=e.ELEMENTS[s];if(E&j){var T={name:s,next:m,eflags:E};m=d(a,T,t,o,Y,r)}}else m=p(a,m,t,o,Y,r);else t.pcdata&&t.pcdata("&lt;",o,Y,c(t,a,m,r,o));break;case"<!--":if(!r.noMoreEndComments){for(l=m+1;u>l&&(">"!==a[l]||!/--$/.test(a[l-1]));l++);if(u>l){if(t.comment){var L=a.slice(m,l).join("");t.comment(L.substr(0,L.length-2),o,Y,c(t,a,l+1,r,o))}m=l+1}else r.noMoreEndComments=!0}r.noMoreEndComments&&t.pcdata&&t.pcdata("&lt;!--",o,Y,c(t,a,m,r,o));break;case"<!":if(/^\w/.test(g)){if(!r.noMoreGT){for(l=m+1;u>l&&">"!==a[l];l++);u>l?m=l+1:r.noMoreGT=!0}r.noMoreGT&&t.pcdata&&t.pcdata("&lt;!",o,Y,c(t,a,m,r,o))}else t.pcdata&&t.pcdata("&lt;!",o,Y,c(t,a,m,r,o));break;case"<?":if(!r.noMoreGT){for(l=m+1;u>l&&">"!==a[l];l++);u>l?m=l+1:r.noMoreGT=!0}r.noMoreGT&&t.pcdata&&t.pcdata("&lt;?",o,Y,c(t,a,m,r,o));break;case">":t.pcdata&&t.pcdata("&gt;",o,Y,c(t,a,m,r,o));break;case"":break;default:t.pcdata&&t.pcdata(f,o,Y,c(t,a,m,r,o))}}t.endDoc&&t.endDoc(o)}catch(M){if(M!==Y)throw M}}function u(e){var t=/(<\/|<\!--|<[!?]|[&<>])/g;if(e+="",$)return e.split(t);for(var a,n=[],r=0;null!==(a=t.exec(e));)n.push(e.substring(r,a.index)),n.push(a[0]),r=a.index+a[0].length;return n.push(e.substring(r)),n}function h(e,t,a,n,r,o){var i=f(e,t);return i?(a.endTag&&a.endTag(i.name,n,r,c(a,e,t,o,n)),i.next):e.length}function p(e,t,a,n,r,o){var i=f(e,t);return i?(a.startTag&&a.startTag(i.name,i.attrs,n,r,c(a,e,i.next,o,n)),i.eflags&j?d(e,i,a,n,r,o):i.next):e.length}function d(t,a,n,r,o,l){var s=t.length;Q.hasOwnProperty(a.name)||(Q[a.name]=new RegExp("^"+a.name+"(?:[\\s\\/]|$)","i"));for(var m=Q[a.name],u=a.next,h=a.next+1;s>h&&("</"!==t[h-1]||!m.test(t[h]));h++);s>h&&(h-=1);var p=t.slice(u,h).join("");if(a.eflags&e.eflags.CDATA)n.cdata&&n.cdata(p,r,o,c(n,t,h,l,r));else{if(!(a.eflags&e.eflags.RCDATA))throw new Error("bug");n.rcdata&&n.rcdata(i(p),r,o,c(n,t,h,l,r))}return h}function f(t,a){var n=/^([-\w:]+)/.exec(t[a]),r={};r.name=n[1].toLowerCase(),r.eflags=e.ELEMENTS[r.name];for(var o=t[a].substr(n[0].length),i=a+1,l=t.length;l>i&&">"!==t[i];i++)o+=t[i];if(i>=l)return void 0;for(var s=[];""!==o;)if(n=G.exec(o)){if(n[4]&&!n[5]||n[6]&&!n[7]){for(var c=n[4]||n[6],m=!1,u=[o,t[i++]];l>i;i++){if(m){if(">"===t[i])break}else 0<=t[i].indexOf(c)&&(m=!0);u.push(t[i])}if(i>=l)break;o=u.join("");continue}var h=n[1].toLowerCase(),p=n[2]?g(n[3]):"";s.push(h,p),o=o.substr(n[0].length)}else o=o.replace(/^[\s\S][^a-z\s]*/,"");return r.attrs=s,r.next=i+1,r}function g(e){var t=e.charCodeAt(0);return(34===t||39===t)&&(e=e.substr(1,e.length-2)),r(n(e))}function E(t){var a,n,r=function(e,t){n||t.push(e)};return l({startDoc:function(e){a=[],n=!1},startTag:function(r,i,l){if(!n&&e.ELEMENTS.hasOwnProperty(r)){var s=e.ELEMENTS[r];if(!(s&e.eflags.FOLDABLE)){var c=t(r,i);if(!c)return void(n=!(s&e.eflags.EMPTY));if("object"!=typeof c)throw new Error("tagPolicy did not return object (old API?)");if(!("attribs"in c))throw new Error("tagPolicy gave no attribs");i=c.attribs;var m,u;if("tagName"in c?(u=c.tagName,m=e.ELEMENTS[u]):(u=r,m=s),s&e.eflags.OPTIONAL_ENDTAG){var h=a[a.length-1];!h||h.orig!==r||h.rep===u&&r===u||l.push("</",h.rep,">")}s&e.eflags.EMPTY||a.push({orig:r,rep:u}),l.push("<",u);for(var p=0,d=i.length;d>p;p+=2){var f=i[p],g=i[p+1];null!==g&&void 0!==g&&l.push(" ",f,'="',o(g),'"')}l.push(">"),s&e.eflags.EMPTY&&!(m&e.eflags.EMPTY)&&l.push("</",u,">")}}},endTag:function(t,r){if(n)return void(n=!1);if(e.ELEMENTS.hasOwnProperty(t)){var o=e.ELEMENTS[t];if(!(o&(e.eflags.EMPTY|e.eflags.FOLDABLE))){var i;if(o&e.eflags.OPTIONAL_ENDTAG)for(i=a.length;--i>=0;){var l=a[i].orig;if(l===t)break;if(!(e.ELEMENTS[l]&e.eflags.OPTIONAL_ENDTAG))return}else for(i=a.length;--i>=0&&a[i].orig!==t;);if(0>i)return;for(var s=a.length;--s>i;){var c=a[s].rep;e.ELEMENTS[c]&e.eflags.OPTIONAL_ENDTAG||r.push("</",c,">")}i<a.length&&(t=a[i].rep),a.length=i,r.push("</",t,">")}}},pcdata:r,rcdata:r,cdata:r,endDoc:function(e){for(;a.length;a.length--)e.push("</",a[a.length-1].rep,">")}})}function T(e,t,a,n,r){if(!r)return null;try{var o=URI.parse(""+e);if(o&&(!o.hasScheme()||V.test(o.getScheme()))){var i=r(o,t,a,n);return i?i.toString():null}}catch(l){return null}return null}function L(e,t,a,n,r){if(a||e(t+" removed",{change:"removed",tagName:t}),n!==r){var o="changed";n&&!r?o="removed":!n&&r&&(o="added"),e(t+"."+a+" "+o,{change:o,tagName:t,attribName:a,oldValue:n,newValue:r})}}function M(e,t,a){var n;return n=t+"::"+a,e.hasOwnProperty(n)?e[n]:(n="*::"+a,e.hasOwnProperty(n)?e[n]:void 0)}function b(t,a){return M(e.LOADERTYPES,t,a)}function y(t,a){return M(e.URIEFFECTS,t,a)}function v(t,a,n,r,o){for(var i=0;i<a.length;i+=2){var l,s=a[i],c=a[i+1],m=c,u=null;if(l=t+"::"+s,(e.ATTRIBS.hasOwnProperty(l)||(l="*::"+s,e.ATTRIBS.hasOwnProperty(l)))&&(u=e.ATTRIBS[l]),null!==u)switch(u){case e.atype.NONE:break;case e.atype.SCRIPT:c=null,o&&L(o,t,s,m,c);break;case e.atype.STYLE:if("undefined"==typeof A){c=null,o&&L(o,t,s,m,c);break}var h=[];A(c,{declaration:function(t,a){var r=t.toLowerCase(),o=C[r];o&&(R(r,o,a,n?function(t){return T(t,e.ueffects.SAME_DOCUMENT,e.ltypes.SANDBOXED,{TYPE:"CSS",CSS_PROP:r},n)}:null),h.push(t+": "+a.join(" ")))}}),c=h.length>0?h.join(" ; "):null,o&&L(o,t,s,m,c);break;case e.atype.ID:case e.atype.IDREF:case e.atype.IDREFS:case e.atype.GLOBAL_NAME:case e.atype.LOCAL_NAME:case e.atype.CLASSES:c=r?r(c):c,o&&L(o,t,s,m,c);break;case e.atype.URI:c=T(c,y(t,s),b(t,s),{TYPE:"MARKUP",XML_ATTR:s,XML_TAG:t},n),o&&L(o,t,s,m,c);break;case e.atype.URI_FRAGMENT:c&&"#"===c.charAt(0)?(c=c.substring(1),c=r?r(c):c,null!==c&&void 0!==c&&(c="#"+c)):c=null,o&&L(o,t,s,m,c);break;default:c=null,o&&L(o,t,s,m,c)}else c=null,o&&L(o,t,s,m,c);a[i+1]=c}return a}function H(t,a,n){return function(r,o){return e.ELEMENTS[r]&e.eflags.UNSAFE?void(n&&L(n,r,void 0,void 0,void 0)):{attribs:v(r,o,t,a,n)}}}function _(e,t){var a=[];return E(t)(e,a),a.join("")}function w(e,t,a,n){var r=H(t,a,n);return _(e,r)}var A,R,C;"undefined"!=typeof window&&(A=window.parseCssDeclarations,R=window.sanitizeCssProperty,C=window.cssSchema);var S={lt:"<",LT:"<",gt:">",GT:">",amp:"&",AMP:"&",quot:'"',apos:"'",nbsp:"Â "},P=/^#(\d+)$/,D=/^#x([0-9A-Fa-f]+)$/,k=/^[A-Za-z][A-za-z0-9]+$/,I="undefined"!=typeof window&&window.document?window.document.createElement("textarea"):null,x=/\0/g,N=/&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,O=/^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,F=/&/g,U=/&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,B=/[<]/g,q=/>/g,z=/\"/g,G=new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?","i"),$=3==="a,b".split(/(,)/).length,j=e.eflags.CDATA|e.eflags.RCDATA,Y={},Q={},V=/^(?:https?|mailto|data)$/i,X={};return X.escapeAttrib=X.escapeAttrib=o,X.makeHtmlSanitizer=X.makeHtmlSanitizer=E,X.makeSaxParser=X.makeSaxParser=l,X.makeTagPolicy=X.makeTagPolicy=H,X.normalizeRCData=X.normalizeRCData=i,X.sanitize=X.sanitize=w,X.sanitizeAttribs=X.sanitizeAttribs=v,X.sanitizeWithPolicy=X.sanitizeWithPolicy=_,X.unescapeEntities=X.unescapeEntities=r,X}(html4),html_sanitize=html.sanitize;html4.ATTRIBS["*::style"]=0,html4.ELEMENTS.style=0,html4.ATTRIBS["a::target"]=0,html4.ELEMENTS.video=0,html4.ATTRIBS["video::src"]=0,html4.ATTRIBS["video::poster"]=0,html4.ATTRIBS["video::controls"]=0,html4.ELEMENTS.audio=0,html4.ATTRIBS["audio::src"]=0,html4.ATTRIBS["video::autoplay"]=0,html4.ATTRIBS["video::controls"]=0,"undefined"!=typeof module&&(module.exports=html_sanitize);
},{}],7:[function(require,module,exports){
module.exports={"author":"Mapbox","name":"mapbox.js","description":"mapbox javascript api","version":"2.4.0","homepage":"http://mapbox.com/","repository":{"type":"git","url":"git://github.com/mapbox/mapbox.js.git"},"main":"src/index.js","dependencies":{"corslite":"0.0.6","isarray":"0.0.1","leaflet":"0.7.7","mustache":"2.2.1","sanitize-caja":"0.1.3"},"scripts":{"test":"eslint --no-eslintrc -c .eslintrc src && mocha-phantomjs test/index.html"},"license":"BSD-3-Clause","devDependencies":{"browserify":"^13.0.0","clean-css":"~2.0.7","eslint":"^0.23.0","expect.js":"0.3.1","happen":"0.1.3","leaflet-fullscreen":"0.0.4","leaflet-hash":"0.2.1","marked":"~0.3.0","minifyify":"^6.1.0","minimist":"0.0.5","mocha":"2.4.5","mocha-phantomjs":"4.0.2","sinon":"1.10.2"},"optionalDependencies":{},"engines":{"node":"*"}}
},{}],8:[function(require,module,exports){
"use strict";module.exports={HTTP_URL:"http://a.tiles.mapbox.com/v4",HTTPS_URL:"https://a.tiles.mapbox.com/v4",FORCE_HTTPS:!1,REQUIRE_ACCESS_TOKEN:!0};
},{}],9:[function(require,module,exports){
"use strict";var util=require("./util"),format_url=require("./format_url"),request=require("./request"),marker=require("./marker"),simplestyle=require("./simplestyle"),FeatureLayer=L.FeatureGroup.extend({options:{filter:function(){return!0},sanitizer:require("sanitize-caja"),style:simplestyle.style,popupOptions:{closeButton:!1}},initialize:function(e,t){L.setOptions(this,t),this._layers={},"string"==typeof e?util.idUrl(e,this):e&&"object"==typeof e&&this.setGeoJSON(e)},setGeoJSON:function(e){return this._geojson=e,this.clearLayers(),this._initialize(e),this},getGeoJSON:function(){return this._geojson},loadURL:function(e){return this._request&&"abort"in this._request&&this._request.abort(),this._request=request(e,L.bind(function(t,i){this._request=null,t&&"abort"!==t.type?(util.log("could not load features at "+e),this.fire("error",{error:t})):i&&(this.setGeoJSON(i),this.fire("ready"))},this)),this},loadID:function(e){return this.loadURL(format_url("/v4/"+e+"/features.json",this.options.accessToken))},setFilter:function(e){return this.options.filter=e,this._geojson&&(this.clearLayers(),this._initialize(this._geojson)),this},getFilter:function(){return this.options.filter},_initialize:function(e){var t,i,r=L.Util.isArray(e)?e:e.features;if(r)for(t=0,i=r.length;i>t;t++)(r[t].geometries||r[t].geometry||r[t].features)&&this._initialize(r[t]);else if(this.options.filter(e)){var s={accessToken:this.options.accessToken},o=this.options.pointToLayer||function(e,t){return marker.style(e,t,s)},n=L.GeoJSON.geometryToLayer(e,o),u=marker.createPopup(e,this.options.sanitizer),a=this.options.style,l=a===simplestyle.style;!(a&&"setStyle"in n)||l&&(n instanceof L.Circle||n instanceof L.CircleMarker)||("function"==typeof a&&(a=a(e)),n.setStyle(a)),n.feature=e,u&&n.bindPopup(u,this.options.popupOptions),this.addLayer(n)}}});module.exports.FeatureLayer=FeatureLayer,module.exports.featureLayer=function(e,t){return new FeatureLayer(e,t)};
},{"./format_url":11,"./marker":25,"./request":26,"./simplestyle":28,"./util":31,"sanitize-caja":5}],10:[function(require,module,exports){
"use strict";var Feedback=L.Class.extend({includes:L.Mixin.Events,data:{},record:function(e){L.extend(this.data,e),this.fire("change")}});module.exports=new Feedback;
},{}],11:[function(require,module,exports){
"use strict";var config=require("./config"),version=require("../package.json").version;module.exports=function(e,o){if(o=o||L.mapbox.accessToken,!o&&config.REQUIRE_ACCESS_TOKEN)throw new Error("An API access token is required to use Mapbox.js. See https://www.mapbox.com/mapbox.js/api/v"+version+"/api-access-tokens/");var t="https:"===document.location.protocol||config.FORCE_HTTPS?config.HTTPS_URL:config.HTTP_URL;if(t=t.replace(/\/v4$/,""),t+=e,config.REQUIRE_ACCESS_TOKEN){if("s"===o[0])throw new Error("Use a public access token (pk.*) with Mapbox.js, not a secret access token (sk.*). See https://www.mapbox.com/mapbox.js/api/v"+version+"/api-access-tokens/");t+=-1!==t.indexOf("?")?"&access_token=":"?access_token=",t+=o}return t},module.exports.tileJSON=function(e,o){if(0===e.indexOf("mapbox://styles"))throw new Error("Styles created with Mapbox Studio need to be used with L.mapbox.styleLayer, not L.mapbox.tileLayer");if(-1!==e.indexOf("/"))return e;var t=module.exports("/v4/"+e+".json",o);return 0===t.indexOf("https")&&(t+="&secure"),t},module.exports.style=function(e,o){if(-1===e.indexOf("mapbox://styles/"))throw new Error("Incorrectly formatted Mapbox style at "+e);var t=e.split("mapbox://styles/")[1],s=module.exports("/styles/v1/"+t,o).replace("http://","https://");return s};
},{"../package.json":7,"./config":8}],12:[function(require,module,exports){
"use strict";var isArray=require("isarray"),util=require("./util"),format_url=require("./format_url"),feedback=require("./feedback"),request=require("./request");module.exports=function(e,t){function r(e,t){var r=Math.pow(10,t);return e.lat=Math.round(e.lat*r)/r,e.lng=Math.round(e.lng*r)/r,e}t||(t={});var n={};return util.strict(e,"string"),-1===e.indexOf("/")&&(e=format_url("/geocoding/v5/"+e+"/{query}.json",t.accessToken,5)),n.getURL=function(){return e},n.queryURL=function(e){var t=!(isArray(e)||"string"==typeof e),u=t?e.query:e;if(isArray(u)){for(var o=[],i=0;i<u.length;i++)o[i]=encodeURIComponent(u[i]);u=o.join(";")}else u=encodeURIComponent(u);feedback.record({geocoding:u});var a=L.Util.template(n.getURL(),{query:u});if(t){if(e.types&&(a+=isArray(e.types)?"&types="+e.types.join():"&types="+e.types),e.country&&(a+=isArray(e.country)?"&country="+e.country.join():"&country="+e.country),e.proximity){var l=r(L.latLng(e.proximity),3);a+="&proximity="+l.lng+","+l.lat}"boolean"==typeof e.autocomplete&&(a+="&autocomplete="+e.autocomplete)}return a},n.query=function(e,t){return util.strict(t,"function"),request(n.queryURL(e),function(e,r){if(r&&(r.length||r.features)){var n={results:r};r.features&&r.features.length&&(n.latlng=[r.features[0].center[1],r.features[0].center[0]],r.features[0].bbox&&(n.bounds=r.features[0].bbox,n.lbounds=util.lbounds(n.bounds))),t(null,n)}else t(e||!0)}),n},n.reverseQuery=function(e,t){function u(e){var t;return t=void 0!==e.lat&&void 0!==e.lng?L.latLng(e.lat,e.lng):void 0!==e.lat&&void 0!==e.lon?L.latLng(e.lat,e.lon):L.latLng(e[1],e[0]),t=r(t,5),t.lng+","+t.lat}var o="";if(e.length&&e[0].length){for(var i=0,a=[];i<e.length;i++)a.push(u(e[i]));o=a.join(";")}else o=u(e);return request(n.queryURL(o),function(e,r){t(e,r)}),n},n};
},{"./feedback":10,"./format_url":11,"./request":26,"./util":31,"isarray":2}],13:[function(require,module,exports){
"use strict";var geocoder=require("./geocoder"),util=require("./util"),GeocoderControl=L.Control.extend({includes:L.Mixin.Events,options:{proximity:!0,position:"topleft",pointZoom:16,keepOpen:!1,autocomplete:!1,queryOptions:{}},initialize:function(t,e){L.Util.setOptions(this,e),this.setURL(t),this._updateSubmit=L.bind(this._updateSubmit,this),this._updateAutocomplete=L.bind(this._updateAutocomplete,this),this._chooseResult=L.bind(this._chooseResult,this)},setURL:function(t){return this.geocoder=geocoder(t,{accessToken:this.options.accessToken}),this},getURL:function(){return this.geocoder.getURL()},setID:function(t){return this.setURL(t)},setTileJSON:function(t){return this.setURL(t.geocoder)},_toggle:function(t){t&&L.DomEvent.stop(t),L.DomUtil.hasClass(this._container,"active")?(L.DomUtil.removeClass(this._container,"active"),this._results.innerHTML="",this._input.blur()):(L.DomUtil.addClass(this._container,"active"),this._input.focus(),this._input.select())},_closeIfOpen:function(){L.DomUtil.hasClass(this._container,"active")&&!this.options.keepOpen&&(L.DomUtil.removeClass(this._container,"active"),this._results.innerHTML="",this._input.blur())},onAdd:function(t){var e=L.DomUtil.create("div","leaflet-control-mapbox-geocoder leaflet-bar leaflet-control"),i=L.DomUtil.create("a","leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder",e),o=L.DomUtil.create("div","leaflet-control-mapbox-geocoder-results",e),s=L.DomUtil.create("div","leaflet-control-mapbox-geocoder-wrap",e),n=L.DomUtil.create("form","leaflet-control-mapbox-geocoder-form",s),r=L.DomUtil.create("input","",n);return i.href="#",i.innerHTML="&nbsp;",r.type="text",r.setAttribute("placeholder","Search"),L.DomEvent.addListener(n,"submit",this._geocode,this),L.DomEvent.addListener(r,"keyup",this._autocomplete,this),L.DomEvent.disableClickPropagation(e),this._map=t,this._results=o,this._input=r,this._form=n,this.options.keepOpen?L.DomUtil.addClass(e,"active"):(this._map.on("click",this._closeIfOpen,this),L.DomEvent.addListener(i,"click",this._toggle,this)),e},_updateSubmit:function(t,e){if(L.DomUtil.removeClass(this._container,"searching"),this._results.innerHTML="",t||!e)this.fire("error",{error:t});else{var i=[];e.results&&e.results.features&&(i=e.results.features),1===i.length?(this.fire("autoselect",{feature:i[0]}),this.fire("found",{results:e.results}),this._chooseResult(i[0]),this._closeIfOpen()):i.length>1?(this.fire("found",{results:e.results}),this._displayResults(i)):(this.fire("notfound"),this._displayResults(i))}},_updateAutocomplete:function(t,e){if(this._results.innerHTML="",t||!e)this.fire("error",{error:t});else{var i=[];e.results&&e.results.features&&(i=e.results.features),i.length?this.fire("found",{results:e.results}):this.fire("notfound"),this._displayResults(i)}},_displayResults:function(t){for(var e=0,i=Math.min(t.length,5);i>e;e++){var o=t[e],s=o.place_name;if(s.length){var n=L.DomUtil.create("a","",this._results),r="innerText"in n?"innerText":"textContent";n[r]=s,n.setAttribute("title",s),n.href="#",L.bind(function(t){L.DomEvent.addListener(n,"click",function(e){this._chooseResult(t),L.DomEvent.stop(e),this.fire("select",{feature:t})},this)},this)(o)}}if(t.length>5){var l=L.DomUtil.create("span","",this._results);l.innerHTML="Top 5 of "+t.length+"  results"}},_chooseResult:function(t){t.bbox?this._map.fitBounds(util.lbounds(t.bbox)):t.center&&this._map.setView([t.center[1],t.center[0]],void 0===this._map.getZoom()?this.options.pointZoom:Math.max(this._map.getZoom(),this.options.pointZoom))},_geocode:function(t){return L.DomEvent.preventDefault(t),""===this._input.value?this._updateSubmit():(L.DomUtil.addClass(this._container,"searching"),void this.geocoder.query(L.Util.extend({query:this._input.value,proximity:this.options.proximity?this._map.getCenter():!1},this.options.queryOptions),this._updateSubmit))},_autocomplete:function(){return this.options.autocomplete?""===this._input.value?this._updateAutocomplete():void this.geocoder.query(L.Util.extend({query:this._input.value,proximity:this.options.proximity?this._map.getCenter():!1},this.options.queryOptions),this._updateAutocomplete):void 0}});module.exports.GeocoderControl=GeocoderControl,module.exports.geocoderControl=function(t,e){return new GeocoderControl(t,e)};
},{"./geocoder":12,"./util":31}],14:[function(require,module,exports){
"use strict";function utfDecode(t){return t>=93&&t--,t>=35&&t--,t-32}module.exports=function(t){return function(e,r){if(t){var u=utfDecode(t.grid[r].charCodeAt(e)),n=t.keys[u];return t.data[n]}}};
},{}],15:[function(require,module,exports){
"use strict";var util=require("./util"),Mustache=require("mustache"),GridControl=L.Control.extend({options:{pinnable:!0,follow:!1,sanitizer:require("sanitize-caja"),touchTeaser:!0,location:!0},_currentContent:"",_pinned:!1,initialize:function(t,o){L.Util.setOptions(this,o),util.strict_instance(t,L.Class,"L.mapbox.gridLayer"),this._layer=t},setTemplate:function(t){return util.strict(t,"string"),this.options.template=t,this},_template:function(t,o){if(o){var i=this.options.template||this._layer.getTileJSON().template;if(i){var e={};return e["__"+t+"__"]=!0,this.options.sanitizer(Mustache.to_html(i,L.extend(e,o)))}}},_show:function(t,o){t!==this._currentContent&&(this._currentContent=t,this.options.follow?(this._popup.setContent(t).setLatLng(o.latLng),this._map._popup!==this._popup&&this._popup.openOn(this._map)):(this._container.style.display="block",this._contentWrapper.innerHTML=t))},hide:function(){return this._pinned=!1,this._currentContent="",this._map.closePopup(),this._container.style.display="none",this._contentWrapper.innerHTML="",L.DomUtil.removeClass(this._container,"closable"),this},_mouseover:function(t){if(t.data?L.DomUtil.addClass(this._map._container,"map-clickable"):L.DomUtil.removeClass(this._map._container,"map-clickable"),!this._pinned){var o=this._template("teaser",t.data);o?this._show(o,t):this.hide()}},_mousemove:function(t){this._pinned||this.options.follow&&this._popup.setLatLng(t.latLng)},_navigateTo:function(t){window.top.location.href=t},_click:function(t){var o=this._template("location",t.data);if(this.options.location&&o&&0===o.search(/^https?:/))return this._navigateTo(this._template("location",t.data));if(this.options.pinnable){var i=this._template("full",t.data);!i&&this.options.touchTeaser&&L.Browser.touch&&(i=this._template("teaser",t.data)),i?(L.DomUtil.addClass(this._container,"closable"),this._pinned=!0,this._show(i,t)):this._pinned&&(L.DomUtil.removeClass(this._container,"closable"),this._pinned=!1,this.hide())}},_onPopupClose:function(){this._currentContent=null,this._pinned=!1},_createClosebutton:function(t,o){var i=L.DomUtil.create("a","close",t);return i.innerHTML="close",i.href="#",i.title="close",L.DomEvent.on(i,"click",L.DomEvent.stopPropagation).on(i,"mousedown",L.DomEvent.stopPropagation).on(i,"dblclick",L.DomEvent.stopPropagation).on(i,"click",L.DomEvent.preventDefault).on(i,"click",o,this),i},onAdd:function(t){this._map=t;var o="leaflet-control-grid map-tooltip",i=L.DomUtil.create("div",o),e=L.DomUtil.create("div","map-tooltip-content");return i.style.display="none",this._createClosebutton(i,this.hide),i.appendChild(e),this._contentWrapper=e,this._popup=new L.Popup({autoPan:!1,closeOnClick:!1}),t.on("popupclose",this._onPopupClose,this),L.DomEvent.disableClickPropagation(i).addListener(i,"mousewheel",L.DomEvent.stopPropagation),this._layer.on("mouseover",this._mouseover,this).on("mousemove",this._mousemove,this).on("click",this._click,this),i},onRemove:function(t){t.off("popupclose",this._onPopupClose,this),this._layer.off("mouseover",this._mouseover,this).off("mousemove",this._mousemove,this).off("click",this._click,this)}});module.exports.GridControl=GridControl,module.exports.gridControl=function(t,o){return new GridControl(t,o)};
},{"./util":31,"mustache":4,"sanitize-caja":5}],16:[function(require,module,exports){
"use strict";var util=require("./util"),request=require("./request"),grid=require("./grid"),GridLayer=L.Class.extend({includes:[L.Mixin.Events,require("./load_tilejson")],options:{template:function(){return""}},_mouseOn:null,_tilejson:{},_cache:{},initialize:function(t,i){L.Util.setOptions(this,i),this._loadTileJSON(t)},_setTileJSON:function(t){return util.strict(t,"object"),L.extend(this.options,{grids:t.grids,minZoom:t.minzoom,maxZoom:t.maxzoom,bounds:t.bounds&&util.lbounds(t.bounds)}),this._tilejson=t,this._cache={},this._update(),this},getTileJSON:function(){return this._tilejson},active:function(){return!!(this._map&&this.options.grids&&this.options.grids.length)},addTo:function(t){return t.addLayer(this),this},onAdd:function(t){this._map=t,this._update(),this._map.on("click",this._click,this).on("mousemove",this._move,this).on("moveend",this._update,this)},onRemove:function(){this._map.off("click",this._click,this).off("mousemove",this._move,this).off("moveend",this._update,this)},getData:function(t,i){if(this.active()){var e=this._map,o=e.project(t.wrap()),s=256,n=4,a=Math.floor(o.x/s),h=Math.floor(o.y/s),r=e.options.crs.scale(e.getZoom())/s;return a=(a+r)%r,h=(h+r)%r,this._getTile(e.getZoom(),a,h,function(t){var e=Math.floor((o.x-a*s)/n),r=Math.floor((o.y-h*s)/n);i(t(e,r))}),this}},_click:function(t){this.getData(t.latlng,L.bind(function(i){this.fire("click",{latLng:t.latlng,data:i})},this))},_move:function(t){this.getData(t.latlng,L.bind(function(i){i!==this._mouseOn?(this._mouseOn&&this.fire("mouseout",{latLng:t.latlng,data:this._mouseOn}),this.fire("mouseover",{latLng:t.latlng,data:i}),this._mouseOn=i):this.fire("mousemove",{latLng:t.latlng,data:i})},this))},_getTileURL:function(t){var i=this.options.grids,e=(t.x+t.y)%i.length,o=i[e];return L.Util.template(o,t)},_update:function(){if(this.active()){var t=this._map.getPixelBounds(),i=this._map.getZoom(),e=256;if(!(i>this.options.maxZoom||i<this.options.minZoom))for(var o=L.bounds(t.min.divideBy(e)._floor(),t.max.divideBy(e)._floor()),s=this._map.options.crs.scale(i)/e,n=o.min.x;n<=o.max.x;n++)for(var a=o.min.y;a<=o.max.y;a++)this._getTile(i,(n%s+s)%s,(a%s+s)%s)}},_getTile:function(t,i,e,o){var s=t+"_"+i+"_"+e,n=L.point(i,e);if(n.z=t,this._tileShouldBeLoaded(n)){if(s in this._cache){if(!o)return;return void("function"==typeof this._cache[s]?o(this._cache[s]):this._cache[s].push(o))}this._cache[s]=[],o&&this._cache[s].push(o),request(this._getTileURL(n),L.bind(function(t,i){var e=this._cache[s];this._cache[s]=grid(i);for(var o=0;o<e.length;++o)e[o](this._cache[s])},this))}},_tileShouldBeLoaded:function(t){if(t.z>this.options.maxZoom||t.z<this.options.minZoom)return!1;if(this.options.bounds){var i=256,e=t.multiplyBy(i),o=e.add(new L.Point(i,i)),s=this._map.unproject(e),n=this._map.unproject(o),a=new L.LatLngBounds([s,n]);if(!this.options.bounds.intersects(a))return!1}return!0}});module.exports.GridLayer=GridLayer,module.exports.gridLayer=function(t,i){return new GridLayer(t,i)};
},{"./grid":14,"./load_tilejson":21,"./request":26,"./util":31}],17:[function(require,module,exports){
"use strict";var leaflet=require("./leaflet");require("./mapbox"),module.exports=leaflet;
},{"./leaflet":19,"./mapbox":23}],18:[function(require,module,exports){
"use strict";var InfoControl=L.Control.extend({options:{position:"bottomright",sanitizer:require("sanitize-caja")},initialize:function(t){L.setOptions(this,t),this._info={},console.warn("infoControl has been deprecated and will be removed in mapbox.js v3.0.0. Use the default attribution control instead, which is now responsive.")},onAdd:function(t){this._container=L.DomUtil.create("div","mapbox-control-info mapbox-small"),this._content=L.DomUtil.create("div","map-info-container",this._container);var i=L.DomUtil.create("a","mapbox-info-toggle mapbox-icon mapbox-icon-info",this._container);i.href="#",L.DomEvent.addListener(i,"click",this._showInfo,this),L.DomEvent.disableClickPropagation(this._container);for(var n in t._layers)t._layers[n].getAttribution&&this.addInfo(t._layers[n].getAttribution());return t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd,this).off("layerremove",this._onLayerRemove,this)},addInfo:function(t){return t?(this._info[t]||(this._info[t]=0),this._info[t]=!0,this._update()):this},removeInfo:function(t){return t?(this._info[t]&&(this._info[t]=!1),this._update()):this},_showInfo:function(t){return L.DomEvent.preventDefault(t),this._active===!0?this._hidecontent():(L.DomUtil.addClass(this._container,"active"),this._active=!0,void this._update())},_hidecontent:function(){this._content.innerHTML="",this._active=!1,L.DomUtil.removeClass(this._container,"active")},_update:function(){if(!this._map)return this;this._content.innerHTML="";var t="none",i=[];for(var n in this._info)this._info.hasOwnProperty(n)&&this._info[n]&&(i.push(this.options.sanitizer(n)),t="block");return this._content.innerHTML+=i.join(" | "),this._container.style.display=t,this},_onLayerAdd:function(t){t.layer.getAttribution&&t.layer.getAttribution()?this.addInfo(t.layer.getAttribution()):"on"in t.layer&&t.layer.getAttribution&&t.layer.on("ready",L.bind(function(){this.addInfo(t.layer.getAttribution())},this))},_onLayerRemove:function(t){t.layer.getAttribution&&this.removeInfo(t.layer.getAttribution())}});module.exports.InfoControl=InfoControl,module.exports.infoControl=function(t){return new InfoControl(t)};
},{"sanitize-caja":5}],19:[function(require,module,exports){
module.exports=window.L=require("leaflet/dist/leaflet-src");
},{"leaflet/dist/leaflet-src":3}],20:[function(require,module,exports){
"use strict";var LegendControl=L.Control.extend({options:{position:"bottomright",sanitizer:require("sanitize-caja")},initialize:function(e){L.setOptions(this,e),this._legends={}},onAdd:function(){return this._container=L.DomUtil.create("div","map-legends wax-legends"),L.DomEvent.disableClickPropagation(this._container),this._update(),this._container},addLegend:function(e){return e?(this._legends[e]||(this._legends[e]=0),this._legends[e]++,this._update()):this},removeLegend:function(e){return e?(this._legends[e]&&this._legends[e]--,this._update()):this},_update:function(){if(!this._map)return this;this._container.innerHTML="";var e="none";for(var t in this._legends)if(this._legends.hasOwnProperty(t)&&this._legends[t]){var n=L.DomUtil.create("div","map-legend wax-legend",this._container);n.innerHTML=this.options.sanitizer(t),e="block"}return this._container.style.display=e,this}});module.exports.LegendControl=LegendControl,module.exports.legendControl=function(e){return new LegendControl(e)};
},{"sanitize-caja":5}],21:[function(require,module,exports){
"use strict";var request=require("./request"),format_url=require("./format_url"),util=require("./util");module.exports={_loadTileJSON:function(e){"string"==typeof e?(e=format_url.tileJSON(e,this.options&&this.options.accessToken),request(e,L.bind(function(t,r){t?(util.log("could not load TileJSON at "+e),this.fire("error",{error:t})):r&&(this._setTileJSON(r),this.fire("ready"))},this))):e&&"object"==typeof e&&this._setTileJSON(e)}};
},{"./format_url":11,"./request":26,"./util":31}],22:[function(require,module,exports){
"use strict";function withAccessToken(t,o){return!o||t.accessToken?t:L.extend({accessToken:o},t)}var tileLayer=require("./tile_layer").tileLayer,featureLayer=require("./feature_layer").featureLayer,gridLayer=require("./grid_layer").gridLayer,gridControl=require("./grid_control").gridControl,infoControl=require("./info_control").infoControl,shareControl=require("./share_control").shareControl,legendControl=require("./legend_control").legendControl,mapboxLogoControl=require("./mapbox_logo").mapboxLogoControl,feedback=require("./feedback"),LMap=L.Map.extend({includes:[require("./load_tilejson")],options:{tileLayer:{},featureLayer:{},gridLayer:{},legendControl:{},gridControl:{},infoControl:!1,shareControl:!1,sanitizer:require("sanitize-caja")},_tilejson:{},initialize:function(t,o,e){if(L.Map.prototype.initialize.call(this,t,L.extend({},L.Map.prototype.options,e)),this.attributionControl){this.attributionControl.setPrefix("");var i=this.options.attributionControl.compact;(i||i!==!1&&this._container.offsetWidth<=640)&&L.DomUtil.addClass(this.attributionControl._container,"leaflet-compact-attribution"),void 0===i&&this.on("resize",function(){this._container.offsetWidth>640?L.DomUtil.removeClass(this.attributionControl._container,"leaflet-compact-attribution"):L.DomUtil.addClass(this.attributionControl._container,"leaflet-compact-attribution")})}this.options.tileLayer&&(this.tileLayer=tileLayer(void 0,withAccessToken(this.options.tileLayer,this.options.accessToken)),this.addLayer(this.tileLayer)),this.options.featureLayer&&(this.featureLayer=featureLayer(void 0,withAccessToken(this.options.featureLayer,this.options.accessToken)),this.addLayer(this.featureLayer)),this.options.gridLayer&&(this.gridLayer=gridLayer(void 0,withAccessToken(this.options.gridLayer,this.options.accessToken)),this.addLayer(this.gridLayer)),this.options.gridLayer&&this.options.gridControl&&(this.gridControl=gridControl(this.gridLayer,this.options.gridControl),this.addControl(this.gridControl)),this.options.infoControl&&(this.infoControl=infoControl(this.options.infoControl),this.addControl(this.infoControl)),this.options.legendControl&&(this.legendControl=legendControl(this.options.legendControl),this.addControl(this.legendControl)),this.options.shareControl&&(this.shareControl=shareControl(void 0,withAccessToken(this.options.shareControl,this.options.accessToken)),this.addControl(this.shareControl)),this._mapboxLogoControl=mapboxLogoControl(this.options.mapboxLogoControl),this.addControl(this._mapboxLogoControl),this._loadTileJSON(o),this.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this).on("moveend",this._updateMapFeedbackLink,this),this.whenReady(function(){feedback.on("change",this._updateMapFeedbackLink,this)}),this.on("unload",function(){feedback.off("change",this._updateMapFeedbackLink,this)})},_setTileJSON:function(t){return this._tilejson=t,this._initialize(t),this},getTileJSON:function(){return this._tilejson},_initialize:function(t){if(this.tileLayer&&(this.tileLayer._setTileJSON(t),this._updateLayer(this.tileLayer)),this.featureLayer&&!this.featureLayer.getGeoJSON()&&t.data&&t.data[0]&&this.featureLayer.loadURL(t.data[0]),this.gridLayer&&(this.gridLayer._setTileJSON(t),this._updateLayer(this.gridLayer)),this.infoControl&&t.attribution&&(this.infoControl.addInfo(this.options.sanitizer(t.attribution)),this._updateMapFeedbackLink()),this.legendControl&&t.legend&&this.legendControl.addLegend(t.legend),this.shareControl&&this.shareControl._setTileJSON(t),this._mapboxLogoControl._setTileJSON(t),!this._loaded&&t.center){var o=void 0!==this.getZoom()?this.getZoom():t.center[2],e=L.latLng(t.center[1],t.center[0]);this.setView(e,o)}},_updateMapFeedbackLink:function(){if(this._controlContainer.getElementsByClassName){var t=this._controlContainer.getElementsByClassName("mapbox-improve-map");if(t.length&&this._loaded){var o=this.getCenter().wrap(),e=this._tilejson||{},i=e.id||"",n="#"+i+"/"+o.lng.toFixed(3)+"/"+o.lat.toFixed(3)+"/"+this.getZoom();for(var r in feedback.data)n+="/"+r+"="+feedback.data[r];for(var a=0;a<t.length;a++)t[a].hash=n}}},_onLayerAdd:function(t){"on"in t.layer&&t.layer.on("ready",this._onLayerReady,this),window.setTimeout(L.bind(this._updateMapFeedbackLink,this),0)},_onLayerRemove:function(t){"on"in t.layer&&t.layer.off("ready",this._onLayerReady,this),window.setTimeout(L.bind(this._updateMapFeedbackLink,this),0)},_onLayerReady:function(t){this._updateLayer(t.target)},_updateLayer:function(t){t.options&&(this.infoControl&&this._loaded&&this.infoControl.addInfo(t.options.infoControl),this.attributionControl&&this._loaded&&t.getAttribution&&this.attributionControl.addAttribution(t.getAttribution()),L.stamp(t)in this._zoomBoundLayers||!t.options.maxZoom&&!t.options.minZoom||(this._zoomBoundLayers[L.stamp(t)]=t),this._updateMapFeedbackLink(),this._updateZoomLevels())}});module.exports.Map=LMap,module.exports.map=function(t,o,e){return new LMap(t,o,e)};
},{"./feature_layer":9,"./feedback":10,"./grid_control":15,"./grid_layer":16,"./info_control":18,"./legend_control":20,"./load_tilejson":21,"./mapbox_logo":24,"./share_control":27,"./tile_layer":30,"sanitize-caja":5}],23:[function(require,module,exports){
"use strict";var geocoderControl=require("./geocoder_control"),gridControl=require("./grid_control"),featureLayer=require("./feature_layer"),legendControl=require("./legend_control"),shareControl=require("./share_control"),tileLayer=require("./tile_layer"),infoControl=require("./info_control"),map=require("./map"),gridLayer=require("./grid_layer"),styleLayer=require("./style_layer");L.mapbox=module.exports={VERSION:require("../package.json").version,geocoder:require("./geocoder"),marker:require("./marker"),simplestyle:require("./simplestyle"),tileLayer:tileLayer.tileLayer,TileLayer:tileLayer.TileLayer,styleLayer:styleLayer.styleLayer,StyleLayer:styleLayer.StyleLayer,infoControl:infoControl.infoControl,InfoControl:infoControl.InfoControl,shareControl:shareControl.shareControl,ShareControl:shareControl.ShareControl,legendControl:legendControl.legendControl,LegendControl:legendControl.LegendControl,geocoderControl:geocoderControl.geocoderControl,GeocoderControl:geocoderControl.GeocoderControl,gridControl:gridControl.gridControl,GridControl:gridControl.GridControl,gridLayer:gridLayer.gridLayer,GridLayer:gridLayer.GridLayer,featureLayer:featureLayer.featureLayer,FeatureLayer:featureLayer.FeatureLayer,map:map.map,Map:map.Map,config:require("./config"),sanitize:require("sanitize-caja"),template:require("mustache").to_html,feedback:require("./feedback")},window.L.Icon.Default.imagePath=("https:"===document.location.protocol||"http:"===document.location.protocol?"":"https:")+"//api.tiles.mapbox.com/mapbox.js/v"+require("../package.json").version+"/images";
},{"../package.json":7,"./config":8,"./feature_layer":9,"./feedback":10,"./geocoder":12,"./geocoder_control":13,"./grid_control":15,"./grid_layer":16,"./info_control":18,"./legend_control":20,"./map":22,"./marker":25,"./share_control":27,"./simplestyle":28,"./style_layer":29,"./tile_layer":30,"mustache":4,"sanitize-caja":5}],24:[function(require,module,exports){
"use strict";var MapboxLogoControl=L.Control.extend({options:{position:"bottomleft"},initialize:function(o){L.setOptions(this,o)},onAdd:function(){return this._container=L.DomUtil.create("div","mapbox-logo"),this._container},_setTileJSON:function(o){o.mapbox_logo&&L.DomUtil.addClass(this._container,"mapbox-logo-true")}});module.exports.MapboxLogoControl=MapboxLogoControl,module.exports.mapboxLogoControl=function(o){return new MapboxLogoControl(o)};
},{}],25:[function(require,module,exports){
"use strict";function icon(r,e){r=r||{};var i={small:[20,50],medium:[30,70],large:[35,90]},t=r["marker-size"]||"medium",o="marker-symbol"in r&&""!==r["marker-symbol"]?"-"+r["marker-symbol"]:"",s=(r["marker-color"]||"7e7e7e").replace("#","");return L.icon({iconUrl:format_url("/v4/marker/pin-"+t.charAt(0)+o+"+"+s+(L.Browser.retina?"@2x":"")+".png",e&&e.accessToken),iconSize:i[t],iconAnchor:[i[t][0]/2,i[t][1]/2],popupAnchor:[0,-i[t][1]/2]})}function style(r,e,i){return L.marker(e,{icon:icon(r.properties,i),title:util.strip_tags(sanitize(r.properties&&r.properties.title||""))})}function createPopup(r,e){if(!r||!r.properties)return"";var i="";return r.properties.title&&(i+='<div class="marker-title">'+r.properties.title+"</div>"),r.properties.description&&(i+='<div class="marker-description">'+r.properties.description+"</div>"),(e||sanitize)(i)}var format_url=require("./format_url"),util=require("./util"),sanitize=require("sanitize-caja");module.exports={icon:icon,style:style,createPopup:createPopup};
},{"./format_url":11,"./util":31,"sanitize-caja":5}],26:[function(require,module,exports){
"use strict";var corslite=require("corslite"),strict=require("./util").strict,config=require("./config"),protocol=/^(https?:)?(?=\/\/(.|api)\.tiles\.mapbox\.com\/)/;module.exports=function(t,o){function r(t,r){!t&&r&&(r=JSON.parse(r.responseText)),o(t,r)}return strict(t,"string"),strict(o,"function"),t=t.replace(protocol,function(t,o){return"withCredentials"in new window.XMLHttpRequest?"https:"===o||"https:"===document.location.protocol||config.FORCE_HTTPS?"https:":"http:":document.location.protocol}),corslite(t,r)};
},{"./config":8,"./util":31,"corslite":1}],27:[function(require,module,exports){
"use strict";var format_url=require("./format_url"),ShareControl=L.Control.extend({includes:[require("./load_tilejson")],options:{position:"topleft",url:""},initialize:function(t,e){L.setOptions(this,e),this._loadTileJSON(t)},_setTileJSON:function(t){this._tilejson=t},onAdd:function(t){this._map=t;var e=L.DomUtil.create("div","leaflet-control-mapbox-share leaflet-bar"),o=L.DomUtil.create("a","mapbox-share mapbox-icon mapbox-icon-share",e);return o.href="#",this._modal=L.DomUtil.create("div","mapbox-modal",this._map._container),this._mask=L.DomUtil.create("div","mapbox-modal-mask",this._modal),this._content=L.DomUtil.create("div","mapbox-modal-content",this._modal),L.DomEvent.addListener(o,"click",this._shareClick,this),L.DomEvent.disableClickPropagation(e),this._map.on("mousedown",this._clickOut,this),e},_clickOut:function(t){return this._sharing?(L.DomEvent.preventDefault(t),L.DomUtil.removeClass(this._modal,"active"),this._content.innerHTML="",void(this._sharing=null)):void 0},_shareClick:function(t){function e(t,e,o){var i=document.createElement("a");return i.setAttribute("class",t),i.setAttribute("href",e),i.setAttribute("target","_blank"),o=document.createTextNode(o),i.appendChild(o),i}if(L.DomEvent.stop(t),this._sharing)return this._clickOut(t);var o=this._tilejson||this._map._tilejson||{},i=encodeURIComponent(this.options.url||o.webpage||window.location),a=encodeURIComponent(o.name),n=format_url("/v4/"+o.id+"/"+this._map.getCenter().lng+","+this._map.getCenter().lat+","+this._map.getZoom()+"/600x600.png",this.options.accessToken),r=format_url("/v4/"+o.id+".html",this.options.accessToken),s="//twitter.com/intent/tweet?status="+a+" "+i,l="//www.facebook.com/sharer.php?u="+i+"&t="+a,m="//www.pinterest.com/pin/create/button/?url="+i+"&media="+n+"&description="+a,c='<iframe width="100%" height="500px" frameBorder="0" src="'+r+'"></iframe>',h="Copy and paste this <strong>HTML code</strong> into documents to embed this map on web pages.";L.DomUtil.addClass(this._modal,"active"),this._sharing=L.DomUtil.create("div","mapbox-modal-body",this._content);var p=e("mapbox-button mapbox-button-icon mapbox-icon-twitter",s,"Twitter"),d=e("mapbox-button mapbox-button-icon mapbox-icon-facebook",l,"Facebook"),u=e("mapbox-button mapbox-button-icon mapbox-icon-pinterest",m,"Pinterest"),b=document.createElement("h3"),_=document.createTextNode("Share this map");b.appendChild(_);var v=document.createElement("div");v.setAttribute("class","mapbox-share-buttons"),v.appendChild(d),v.appendChild(p),v.appendChild(u),this._sharing.appendChild(b),this._sharing.appendChild(v);var x=L.DomUtil.create("input","mapbox-embed",this._sharing);x.type="text",x.value=c;var f=L.DomUtil.create("label","mapbox-embed-description",this._sharing);f.innerHTML=h;var g=L.DomUtil.create("a","leaflet-popup-close-button",this._sharing);g.href="#",L.DomEvent.disableClickPropagation(this._sharing),L.DomEvent.addListener(g,"click",this._clickOut,this),L.DomEvent.addListener(x,"click",function(t){t.target.focus(),t.target.select()})}});module.exports.ShareControl=ShareControl,module.exports.shareControl=function(t,e){return new ShareControl(t,e)};
},{"./format_url":11,"./load_tilejson":21}],28:[function(require,module,exports){
"use strict";function fallback(t,l){var i={};for(var r in l)void 0===t[r]?i[r]=l[r]:i[r]=t[r];return i}function remap(t){for(var l={},i=0;i<mapping.length;i++)l[mapping[i][1]]=t[mapping[i][0]];return l}function style(t){return remap(fallback(t.properties||{},defaults))}var defaults={stroke:"#555555","stroke-width":2,"stroke-opacity":1,fill:"#555555","fill-opacity":.5},mapping=[["stroke","color"],["stroke-width","weight"],["stroke-opacity","opacity"],["fill","fillColor"],["fill-opacity","fillOpacity"]];module.exports={style:style,defaults:defaults};
},{}],29:[function(require,module,exports){
"use strict";var util=require("./util"),format_url=require("./format_url"),request=require("./request"),StyleLayer=L.TileLayer.extend({options:{sanitizer:require("sanitize-caja")},initialize:function(t,i){L.TileLayer.prototype.initialize.call(this,void 0,i),this.options.tiles=this._formatTileURL(t),this.options.tileSize=512,this.options.zoomOffset=-1,this.options.tms=!1,this._getAttribution(t)},_getAttribution:function(t){var i=format_url.style(t,this.options&&this.options.accessToken);request(i,L.bind(function(e,r){e&&(util.log("could not load Mapbox style at "+i),this.fire("error",{error:e}));var o=[];for(var s in r.sources){var l=r.sources[s].url.split("mapbox://")[1];o.push(l)}request(format_url.tileJSON(o.join(),this.options.accessToken),L.bind(function(i,e){i?(util.log("could not load TileJSON at "+t),this.fire("error",{error:i})):e&&(util.strict(e,"object"),this.options.attribution=this.options.sanitizer(e.attribution),this._tilejson=e,this.fire("ready"))},this))},this))},setUrl:null,_formatTileURL:function(t){var i=L.Browser.retina?"@2x":"";if("string"==typeof t){-1===t.indexOf("mapbox://styles/")&&(util.log("Incorrectly formatted Mapbox style at "+t),this.fire("error"));var e=t.split("mapbox://styles/")[1];return format_url("/styles/v1/"+e+"/tiles/{z}/{x}/{y}"+i,this.options.accessToken)}return"object"==typeof t?format_url("/styles/v1/"+t.owner+"/"+t.id+"/tiles/{z}/{x}/{y}"+i,this.options.accessToken):void 0},getTileUrl:function(t){var i=L.Util.template(this.options.tiles,t);return i}});module.exports.StyleLayer=StyleLayer,module.exports.styleLayer=function(t,i){return new StyleLayer(t,i)};
},{"./format_url":11,"./request":26,"./util":31,"sanitize-caja":5}],30:[function(require,module,exports){
"use strict";var util=require("./util"),formatPattern=/\.((?:png|jpg)\d*)(?=$|\?)/,TileLayer=L.TileLayer.extend({includes:[require("./load_tilejson")],options:{sanitizer:require("sanitize-caja")},formats:["png","jpg","png32","png64","png128","png256","jpg70","jpg80","jpg90"],scalePrefix:"@2x.",initialize:function(t,i){L.TileLayer.prototype.initialize.call(this,void 0,i),this._tilejson={},i&&i.format&&util.strict_oneof(i.format,this.formats),this._loadTileJSON(t)},setFormat:function(t){return util.strict(t,"string"),this.options.format=t,this.redraw(),this},setUrl:null,_setTileJSON:function(t){return util.strict(t,"object"),this.options.format=this.options.format||t.tiles[0].match(formatPattern)[1],L.extend(this.options,{tiles:t.tiles,attribution:this.options.sanitizer(t.attribution),minZoom:t.minzoom||0,maxZoom:t.maxzoom||18,tms:"tms"===t.scheme,bounds:t.bounds&&util.lbounds(t.bounds)}),this._tilejson=t,this.redraw(),this},getTileJSON:function(){return this._tilejson},getTileUrl:function(t){var i=this.options.tiles,e=Math.floor(Math.abs(t.x+t.y)%i.length),o=i[e],r=L.Util.template(o,t);return r?r.replace(formatPattern,(L.Browser.retina?this.scalePrefix:".")+this.options.format):r},_update:function(){this.options.tiles&&L.TileLayer.prototype._update.call(this)}});module.exports.TileLayer=TileLayer,module.exports.tileLayer=function(t,i){return new TileLayer(t,i)};
},{"./load_tilejson":21,"./util":31,"sanitize-caja":5}],31:[function(require,module,exports){
"use strict";function contains(n,t){if(!t||!t.length)return!1;for(var r=0;r<t.length;r++)if(t[r]===n)return!0;return!1}module.exports={idUrl:function(n,t){-1===n.indexOf("/")?t.loadID(n):t.loadURL(n)},log:function(n){"object"==typeof console&&"function"==typeof console.error&&console.error(n)},strict:function(n,t){if(typeof n!==t)throw new Error("Invalid argument: "+t+" expected")},strict_instance:function(n,t,r){if(!(n instanceof t))throw new Error("Invalid argument: "+r+" expected")},strict_oneof:function(n,t){if(!contains(n,t))throw new Error("Invalid argument: "+n+" given, valid values are "+t.join(", "))},strip_tags:function(n){return n.replace(/<[^<]+>/g,"")},lbounds:function(n){return new L.LatLngBounds([[n[1],n[0]],[n[3],n[2]]])}};
},{}]},{},[17])


//# sourceMappingURL=mapbox.js.map




