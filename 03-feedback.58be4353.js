function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,g=Math.min,p=function(){return s.Date.now()};function v(e,t,n){var i,o,a,u,f,l,c=0,s=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,f=setTimeout(h,t),s?S(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function h(){var e=p();if(j(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&i?S(e):(i=o=void 0,u)}function N(){var e=p(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(m)return f=setTimeout(h,t),S(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?d(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),N.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},N.flush=function(){return void 0===f?u:w(p())},N}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const S=document.querySelector(".feedback-form"),O=document.querySelector("input"),j=document.querySelector("textarea");let h={email:" ",message:" "};S.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),console.log(h),h={email:"",message:""},localStorage.removeItem("feedback-form-state")})),S.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500));const w=localStorage.getItem("feedback-form-state");var N;(N=w)&&"email"===O.name&&(O.value=JSON.parse(N).email,h.email=JSON.parse(N).email),N&&"message"===j.name&&(j.value=JSON.parse(N).message,h.message=JSON.parse(N).message);
//# sourceMappingURL=03-feedback.58be4353.js.map
