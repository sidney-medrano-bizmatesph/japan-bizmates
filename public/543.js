(self.webpackChunk=self.webpackChunk||[]).push([[543],{2711:function(t,e,i){t.exports=function(){"use strict";var t="undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{},e="Expected a function",n=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,d=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,p=l||u||Function("return this")(),m=Object.prototype.toString,f=Math.max,v=Math.min,b=function(){return p.Date.now()};function g(t,i,n){var o,a,r,s,d,c,l=0,u=!1,p=!1,m=!0;if("function"!=typeof t)throw new TypeError(e);function g(e){var i=o,n=a;return o=a=void 0,l=e,s=t.apply(n,i)}function y(t){var e=t-c;return void 0===c||e>=i||e<0||p&&t-l>=r}function x(){var t=b();if(y(t))return _(t);d=setTimeout(x,function(t){var e=i-(t-c);return p?v(e,r-(t-l)):e}(t))}function _(t){return d=void 0,m&&o?g(t):(o=a=void 0,s)}function k(){var t=b(),e=y(t);if(o=arguments,a=this,c=t,e){if(void 0===d)return function(t){return l=t,d=setTimeout(x,i),u?g(t):s}(c);if(p)return d=setTimeout(x,i),g(c)}return void 0===d&&(d=setTimeout(x,i)),s}return i=w(i)||0,h(n)&&(u=!!n.leading,r=(p="maxWait"in n)?f(w(n.maxWait)||0,i):r,m="trailing"in n?!!n.trailing:m),k.cancel=function(){void 0!==d&&clearTimeout(d),l=0,o=c=a=d=void 0},k.flush=function(){return void 0===d?s:_(b())},k}function h(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&m.call(t)==o}(t))return n;if(h(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=h(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=s.test(t);return i||d.test(t)?c(t.slice(2),i?2:8):r.test(t)?n:+t}var y=function(t,i,n){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError(e);return h(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),g(t,i,{leading:o,maxWait:i,trailing:a})},x="Expected a function",_=NaN,k="[object Symbol]",C=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,E=/^0o[0-7]+$/i,P=parseInt,z="object"==typeof t&&t&&t.Object===Object&&t,T="object"==typeof self&&self&&self.Object===Object&&self,M=z||T||Function("return this")(),L=Object.prototype.toString,S=Math.max,N=Math.min,A=function(){return M.Date.now()};function H(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function q(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&L.call(t)==k}(t))return _;if(H(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=H(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(C,"");var i=j.test(t);return i||E.test(t)?P(t.slice(2),i?2:8):O.test(t)?_:+t}var D=function(t,e,i){var n,o,a,r,s,d,c=0,l=!1,u=!1,p=!0;if("function"!=typeof t)throw new TypeError(x);function m(e){var i=n,a=o;return n=o=void 0,c=e,r=t.apply(a,i)}function f(t){var i=t-d;return void 0===d||i>=e||i<0||u&&t-c>=a}function v(){var t=A();if(f(t))return b(t);s=setTimeout(v,function(t){var i=e-(t-d);return u?N(i,a-(t-c)):i}(t))}function b(t){return s=void 0,p&&n?m(t):(n=o=void 0,r)}function g(){var t=A(),i=f(t);if(n=arguments,o=this,d=t,i){if(void 0===s)return function(t){return c=t,s=setTimeout(v,e),l?m(t):r}(d);if(u)return s=setTimeout(v,e),m(d)}return void 0===s&&(s=setTimeout(v,e)),r}return e=q(e)||0,H(i)&&(l=!!i.leading,a=(u="maxWait"in i)?S(q(i.maxWait)||0,e):a,p="trailing"in i?!!i.trailing:p),g.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=d=o=s=void 0},g.flush=function(){return void 0===s?r:b(A())},g},$=function(){};function W(t){t&&t.forEach((function(t){var e=Array.prototype.slice.call(t.addedNodes),i=Array.prototype.slice.call(t.removedNodes);if(function t(e){var i=void 0,n=void 0;for(i=0;i<e.length;i+=1){if((n=e[i]).dataset&&n.dataset.aos)return!0;if(n.children&&t(n.children))return!0}return!1}(e.concat(i)))return $()}))}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var R={isSupported:function(){return!!Y()},ready:function(t,e){var i=window.document,n=new(Y())(W);$=e,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Z=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},F=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,K=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,U=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function J(){return navigator.userAgent||navigator.vendor||window.opera||""}var Q=new(function(){function t(){B(this,t)}return Z(t,[{key:"phone",value:function(){var t=J();return!(!F.test(t)&&!K.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=J();return!(!U.test(t)&&!G.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}()),V=function(t,e){var i=void 0;return Q.ie11()?(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,{detail:e}):i=new CustomEvent(t,{detail:e}),document.dispatchEvent(i)},X=function(t){return t.forEach((function(t,e){return function(t,e){var i=t.options,n=t.position,o=t.node,a=(t.data,function(){t.animated&&(function(t,e){e&&e.forEach((function(e){return t.classList.remove(e)}))}(o,i.animatedClassNames),V("aos:out",o),t.options.id&&V("aos:in:"+t.options.id,o),t.animated=!1)});i.mirror&&e>=n.out&&!i.once?a():e>=n.in?t.animated||(function(t,e){e&&e.forEach((function(e){return t.classList.add(e)}))}(o,i.animatedClassNames),V("aos:in",o),t.options.id&&V("aos:in:"+t.options.id,o),t.animated=!0):t.animated&&!i.once&&a()}(t,window.pageYOffset)}))},tt=function(t){for(var e=0,i=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),i+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:i,left:e}},et=function(t,e,i){var n=t.getAttribute("data-aos-"+e);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||i},it=function(t,e){return t.forEach((function(t,i){var n=et(t.node,"mirror",e.mirror),o=et(t.node,"once",e.once),a=et(t.node,"id"),r=e.useClassNames&&t.node.getAttribute("data-aos"),s=[e.animatedClassName].concat(r?r.split(" "):[]).filter((function(t){return"string"==typeof t}));e.initClassName&&t.node.classList.add(e.initClassName),t.position={in:function(t,e,i){var n=window.innerHeight,o=et(t,"anchor"),a=et(t,"anchor-placement"),r=Number(et(t,"offset",a?0:e)),s=a||i,d=t;o&&document.querySelectorAll(o)&&(d=document.querySelectorAll(o)[0]);var c=tt(d).top-n;switch(s){case"top-bottom":break;case"center-bottom":c+=d.offsetHeight/2;break;case"bottom-bottom":c+=d.offsetHeight;break;case"top-center":c+=n/2;break;case"center-center":c+=n/2+d.offsetHeight/2;break;case"bottom-center":c+=n/2+d.offsetHeight;break;case"top-top":c+=n;break;case"bottom-top":c+=n+d.offsetHeight;break;case"center-top":c+=n+d.offsetHeight/2}return c+r}(t.node,e.offset,e.anchorPlacement),out:n&&function(t,e){window.innerHeight;var i=et(t,"anchor"),n=et(t,"offset",e),o=t;return i&&document.querySelectorAll(i)&&(o=document.querySelectorAll(i)[0]),tt(o).top+o.offsetHeight-n}(t.node,e.offset)},t.options={once:o,mirror:n,animatedClassNames:s,id:a}})),t},nt=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,(function(t){return{node:t}}))},ot=[],at=!1,rt={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},st=function(){return document.all&&!window.atob},dt=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(at=!0),at&&(ot=it(ot,rt),X(ot),window.addEventListener("scroll",y((function(){X(ot,rt.once)}),rt.throttleDelay)))},ct=function(){if(ot=nt(),ut(rt.disable)||st())return lt();dt()},lt=function(){ot.forEach((function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),rt.initClassName&&t.node.classList.remove(rt.initClassName),rt.animatedClassName&&t.node.classList.remove(rt.animatedClassName)}))},ut=function(t){return!0===t||"mobile"===t&&Q.mobile()||"phone"===t&&Q.phone()||"tablet"===t&&Q.tablet()||"function"==typeof t&&!0===t()};return{init:function(t){return rt=I(rt,t),ot=nt(),rt.disableMutationObserver||R.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),rt.disableMutationObserver=!0),rt.disableMutationObserver||R.ready("[data-aos]",ct),ut(rt.disable)||st()?lt():(document.querySelector("body").setAttribute("data-aos-easing",rt.easing),document.querySelector("body").setAttribute("data-aos-duration",rt.duration),document.querySelector("body").setAttribute("data-aos-delay",rt.delay),-1===["DOMContentLoaded","load"].indexOf(rt.startEvent)?document.addEventListener(rt.startEvent,(function(){dt(!0)})):window.addEventListener("load",(function(){dt(!0)})),"DOMContentLoaded"===rt.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&dt(!0),window.addEventListener("resize",D(dt,rt.debounceDelay,!0)),window.addEventListener("orientationchange",D(dt,rt.debounceDelay,!0)),ot)},refresh:dt,refreshHard:ct}}()},8006:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var n=i(3645),o=i.n(n)()((function(t){return t[1]}));o.push([t.id,"@media only screen and (min-width:1281px){.program-grid:nth-child(2n) .program-picture{grid-column:2;grid-row:1}.program-grid:nth-child(2n) .program-description{grid-column:1;grid-row:1}}@media only screen and (max-width:1280px){.program-picture,.video-div{grid-row:1}}",""]);const a=o},2088:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var n=i(3645),o=i.n(n)()((function(t){return t[1]}));o.push([t.id,".application-features-text[data-v-1cc9e2c9]{background-color:#3f3f3f;color:#fff;font-size:1.25rem;line-height:1.75rem;min-height:60px;padding-top:10px;text-align:center;vertical-align:middle}.events[data-v-1cc9e2c9]{background-position:top;background-repeat:no-repeat;background-size:100%;margin-top:-8px;padding-top:50px}.application-features[data-v-1cc9e2c9]{background-color:#13254a}.mission[data-v-1cc9e2c9],.program-information[data-v-1cc9e2c9]{background-image:url(/img/program-information\\ background.png);background-position-x:center;background-position-y:top;margin-top:-2px}.mission[data-v-1cc9e2c9],.program-information[data-v-1cc9e2c9],.study-guide[data-v-1cc9e2c9]{background-repeat:no-repeat;background-size:100%}.study-guide[data-v-1cc9e2c9]{background-image:url(/img/vision\\ background.png);background-position:top;margin-top:-8px;padding-top:100px}.event-pill-l[data-v-1cc9e2c9]{border-bottom-left-radius:30px;border-top-left-radius:30px}.event-pill-r[data-v-1cc9e2c9]{border-bottom-right-radius:30px;border-top-right-radius:30px}@media only screen and (min-width:1281px){.home-page[data-v-1cc9e2c9]{background-image:url(/img/Curves-TOP-NEW.png);background-position-x:center;background-position-y:top;background-repeat:no-repeat;background-size:cover}.logo-blue[data-v-1cc9e2c9],.logo-red[data-v-1cc9e2c9]{color:#fff}}",""]);const a=o},8543:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>b});var n=i(2711),o=i.n(n),a=(i(8595),i(3401)),r=i(5273);function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const c={data:function(){return{that:this,successes:{},errors:{},area_id:"",passed:!1,home:{},features:{},study_guide:{},study_guide_videos:[],showOverlay:!1,inspiration:{},inspiration_videos:[],event:{},event_videos:[],payment:{}}},mounted:function(){var t=this,e=this;if(this.showModal=!0,axios.post("/web/home-initialize").then((function(e){t.payment=e.data.payment,t.showModal=!1,t.home=e.data.home,t.features=e.data.features,t.study_guide=e.data.study_guide,t.study_guide_videos=e.data.study_guide_videos,t.inspiration=e.data.inspiration,t.inspiration_videos=e.data.inspiration_videos,t.event=e.data.event,t.event_videos=e.data.event_videos,t.data=e.data})).catch((function(e){t.showModal=!1,(0,r.gP)(t,e)})),window.addEventListener("scroll",(function(){var t=document.getElementById("register-button");document.getElementById("footer");null!=t&&(!e.passed&&window.scrollY>t.offsetTop+t.offsetHeight?e.passed=!0:e.passed&&window.scrollY<t.offsetTop+t.offsetHeight&&(e.passed=!1))})),this.$route.hash){var i=document.getElementById(this.$route.hash.substr(1)).offsetTop;window.scrollTo(0,i)}o().init()},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){d(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},(0,i(629).rn)(["general"])),methods:{redirectToRegister:function(){window.open("https://med.ple-reap.com/login")},onClick:function(){(0,a.Kf)([{name:"area_id",placeholder:"Area",labelText:"Area",type:"select2Sync",wrapperClassName:"col-lg-6",validation:["required"],hidden:!0,filterable:!1}],this)}},watch:{study_guide_videos:function(t){}},components:{CustomButton:function(){return i.e(705).then(i.bind(i,1891))},CustomInput:function(){return i.e(649).then(i.bind(i,1649))},Footer:function(){return i.e(369).then(i.bind(i,7369))}}};var l=i(3379),u=i.n(l),p=i(8006),m={insert:"head",singleton:!1};u()(p.Z,m);p.Z.locals;var f=i(2088),v={insert:"head",singleton:!1};u()(f.Z,v);f.Z.locals;const b=(0,i(1900).Z)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-div"},[t.showOverlay?i("div",{staticClass:"overlay"},[t._m(0)]):t._e(),t._v(" "),i("div",{staticClass:"block"},[i("div",{staticClass:"\n                full-page\n                flex flex-wrap\n                content-end\n                pb-8\n                section\n                home-page\n            "},[i("div",{staticClass:"flex flex-wrap w-full h-full"},[i("div",{staticClass:"\n                        flex flex-col\n                        justify-end\n                        mb-4\n                        w-full\n                        text-black\n                        min-xl:text-white\n                        lg:mt-8\n                    "},[i("div",{staticClass:"\n                            w-full\n                            min-xl:w-1/2\n                            ml-auto\n                            min-xl:text-right\n                        "},[i("p",{staticClass:"home-title m-0",domProps:{innerHTML:t._s(t.home.title?t.home.title:"")}},[t._v("\n                            PLE-REAP "),i("em",[t._v("Medicine")])]),t._v(" "),i("p",{staticClass:"home-sub-title m-0 mb-8",domProps:{innerHTML:t._s(t.home.subtitle?t.home.subtitle:"")}},[t._v("\n                            Philippine Licensure Examination: Read, Explore,\n                            and Assess Program\n                        ")]),t._v(" "),i("div",{staticClass:"text-black min-xl:text-yellow-200"},[i("p",{staticClass:"text-3xl font-bold mb-2",domProps:{innerHTML:t._s(t.home.heading?t.home.heading:"")}},[t._v("\n                                Bringing out the best version of YOU\n                            ")]),t._v(" "),i("p",{staticClass:"text-2xl",domProps:{innerHTML:t._s(t.home.description?t.home.description:"")}},[t._v("\n                                PLE-REAP Medicine is a high-yielding digital\n                                platform that empowers Philippine medical\n                                students and graduates for the grueling\n                                Physician Licensure Examination.\n                            ")])])])])]),t._v(" "),i("button",{class:{"btn-own btn-danger w-full p-2 rounded-full primary-red":!0},attrs:{id:"register-button"},on:{click:t.redirectToRegister}},[i("span",{staticClass:"flex justify-center items-center"},[i("img",{staticStyle:{height:"40px",margin:"0",padding:"0"},attrs:{src:"/storage/webCMS/images/"+t.general.round_logo,alt:""}}),t._v(" "),i("span",{staticClass:"font-bold mr-3"},[t._v("PLE-REAP Application")]),t._v(" "),i("span",{staticClass:"\n                            p-3\n                            rounded-full\n                            bg-white\n                            text-black\n                            font-bold\n                        "},[t._v(t._s(t.payment.button))])])]),t._v(" "),i("button",{class:{"btn-own btn-danger w-full p-2 rounded-full primary-red":!0,hidden:!t.passed,fixed:t.passed},staticStyle:{width:"91.4vw","z-index":"998",bottom:"20px"},on:{click:t.redirectToRegister}},[i("span",{staticClass:"flex justify-center items-center"},[i("img",{staticClass:"mr-3",staticStyle:{height:"40px",margin:"0",padding:"0"},attrs:{src:"/storage/webCMS/images/"+t.general.round_logo,alt:""}}),t._v(" "),i("span",{staticClass:"font-bold mr-3"},[t._v("PLE-REAP Application")]),t._v(" "),i("span",{staticClass:"\n                            p-3\n                            rounded-full\n                            bg-white\n                            text-black\n                            font-bold\n                        "},[t._v(t._s(t.payment.button))])])])])]),t._v(" "),i("div",{staticClass:"section application-features py-20",attrs:{id:"application-features"}},[i("div",{staticClass:"flex items-center mb-4 w-full",attrs:{"data-aos":"zoom-in"}},[i("p",{staticClass:"text-white w-full",attrs:{"data-aos":"zoom-in"}},[i("span",{staticClass:"text-4xl font-bold",domProps:{innerHTML:t._s(t.features.title?t.features.title:"")}},[t._v("Application Features: "),i("i",[t._v("Study Framework")])])])]),t._v(" "),i("div",{staticClass:"grid grid-cols-1 min-xl:grid-cols-2 min-xl:gap-10"},[i("div",{staticClass:"flex flex-wrap content-center program-picture",attrs:{"data-aos":"zoom-in"}},[i("img",{staticClass:"rounded-full lg:mb-4 ml-auto mr-auto",staticStyle:{"max-height":"90%"},attrs:{src:"/storage/webCMS/images/"+t.features.name_on_disk,alt:"",srcset:""}})]),t._v(" "),i("div",{staticClass:"\n                    flex flex-wrap\n                    content-center\n                    program-description\n                    mt-5\n                "},[i("div",{staticClass:"text-2xl text-white from-cms",attrs:{"data-aos":"zoom-in"},domProps:{innerHTML:t._s(t.features.description?t.features.description:"")}})])])]),t._v(" "),i("div",{staticClass:"section study-guide lg:pb-20",attrs:{id:"study-guide"}},[i("div",{staticClass:"flex flex-wrap content-center pt-10"},[i("div",{staticClass:"mb-10 w-full",attrs:{"data-aos":"zoom-in"}},[i("p",{staticClass:"mb-4 border-bottom-blue text-blue w-full",attrs:{"data-aos":"zoom-in"}},[i("span",{staticClass:"text-4xl font-bold",domProps:{innerHTML:t._s(t.study_guide.title)}})]),t._v(" "),i("p",{staticClass:"text-xl",domProps:{innerHTML:t._s(t.study_guide.description)}})]),t._v(" "),i("div",{staticClass:"flex justify-center w-full",attrs:{"data-aos":"zoom-in"}},[i("splide",{attrs:{slides:t.study_guide_videos,options:{classes:{pagination:"splide__pagination hidden"},width:"100%",perPage:3,autoWidth:!0,rewind:!0,gap:"50px",padding:{left:"75px",right:"75px"},breakpoints:{768:{perPage:1}}}}},t._l(t.study_guide_videos,(function(e,n){return i("splide-slide",{key:"study-guide-video-"+n},[i("div",{staticStyle:{"min-width":"25vw"}},[i("iframe",{attrs:{width:"100%",height:"300",src:"https://www.youtube.com/embed/"+e.code,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),i("p",{staticClass:"text-lg font-bold"},[t._v("\n                                "+t._s(e.title)+"\n                            ")])])])})),1)],1)])]),t._v(" "),i("div",{staticClass:"section inspiration lg:pb-20",attrs:{id:"inspiration"}},[i("div",{staticClass:"flex flex-wrap content-center"},[i("div",{staticClass:"mb-8 w-full",attrs:{"data-aos":"zoom-in"}},[i("p",{staticClass:"\n                        mb-4\n                        border-bottom-blue\n                        text-blue\n                        w-full\n                        text-4xl\n                        font-bold\n                    ",attrs:{"data-aos":"zoom-in"},domProps:{innerHTML:t._s(t.inspiration.title)}}),t._v(" "),i("p",{staticClass:"text-xl",domProps:{innerHTML:t._s(t.inspiration.description)}})]),t._v(" "),i("div",{staticClass:"flex justify-center w-full",attrs:{"data-aos":"zoom-in"}},[i("splide",{attrs:{slides:t.inspiration_videos,options:{classes:{pagination:"splide__pagination hidden"},width:"100%",autoWidth:!0,perPage:3,rewind:!0,gap:"50px",padding:{left:"75px",right:"75px"},breakpoints:{768:{perPage:1}},trimSpace:!0}}},t._l(t.inspiration_videos,(function(e,n){return i("splide-slide",{key:"inspiration-video-"+n},[i("div",{staticStyle:{"min-width":"25vw"}},[i("iframe",{attrs:{width:"100%",height:"300",src:"https://www.youtube.com/embed/"+e.code,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),i("p",{staticClass:"text-lg font-bold"},[t._v("\n                            "+t._s(e.title)+"\n                        ")])])})),1)],1)])]),t._v(" "),i("div",{staticClass:"section events lg:pb-20",attrs:{id:"events","data-aos":"zoom-in"}},[i("div",{staticClass:"mb-2 w-full"},[i("p",{staticClass:"\n                    mb-4\n                    border-bottom-blue\n                    text-blue\n                    w-full\n                    text-4xl\n                    font-bold\n                ",domProps:{innerHTML:t._s(t.event.title)}})]),t._v(" "),i("splide",{attrs:{slides:t.inspiration_videos,options:{classes:{pagination:"splide__pagination hidden"},width:"100%",autoWidth:!0,perPage:3,rewind:!0,gap:"50px",padding:{left:"75px",right:"75px"},breakpoints:{768:{perPage:1}},trimSpace:!0}}},t._l(t.event_videos,(function(t,e){return i("splide-slide",{key:"event-video-"+e},[i("div",{staticStyle:{"max-width":"25vw"}},[i("video",{staticClass:"banner-video",attrs:{width:"100%",muted:"muted",preload:"metadata","data-src":"/storage/webCMS/videos/"+t.name_on_disk,src:"/storage/webCMS/videos/"+t.name_on_disk,controls:""},domProps:{muted:!0}})])])})),1)],1)])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overlay__inner"},[i("div",{staticClass:"overlay__content"},[i("div",{staticClass:"lds-roller"},[i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div")])])])}],!1,null,"1cc9e2c9",null).exports}}]);