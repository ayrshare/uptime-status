function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t,e,n,s,r,o,a){const i=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(i){const r=l(e,n,s,a);t.p(r,i)}}function d(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function h(t){return null==t?"":t}let f,p,m=!1;function g(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function b(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:g(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[a]+1;const i=a+1;n[i]=t,r=Math.max(i,r)}const o=[],a=[];let i=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);i>=t;i--)a.push(e[i]);i--}for(;i>=0;i--)a.push(e[i]);o.reverse(),a.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<a.length;e++){for(;n<o.length&&a[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(a[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode!==t&&t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){m&&!n?b(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function S(){return A(" ")}function T(){return A("")}function x(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function P(t){return function(e){return e.preventDefault(),t.call(this,e)}}function I(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:I(t,s,e[s])}function L(t){return Array.from(t.childNodes)}function R(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function k(t,e,n,s,r=!1){R(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function O(t,e,n,s){return k(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s?E(e):w(e)))}function C(t,e){return k(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>A(e)),!0)}function H(t){return C(t," ")}function j(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function U(t){const e=j(t,"HTML_TAG_START",0),n=j(t,"HTML_TAG_END",e);if(e===n)return new z;R(t);const s=t.splice(e,n+1);$(s[0]),$(s[s.length-1]);const r=s.slice(1,s.length-1);for(const e of r)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new z(r)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e){t.value=null==e?"":e}function B(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function G(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=B();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=x(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=x(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),$(n)}}function q(t,e=document.body){return Array.from(e.querySelectorAll(t))}class z extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=w(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)y(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach($)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function K(t){p=t}function Y(){if(!p)throw new Error("Function called outside component initialization");return p}function J(t){Y().$$.on_mount.push(t)}function V(t){Y().$$.after_update.push(t)}function W(t){Y().$$.on_destroy.push(t)}const F=[],X=[],Q=[],Z=[],tt=Promise.resolve();let et=!1;function nt(t){Q.push(t)}let st=!1;const rt=new Set;function ot(){if(!st){st=!0;do{for(let t=0;t<F.length;t+=1){const e=F[t];K(e),at(e.$$)}for(K(null),F.length=0;X.length;)X.pop()();for(let t=0;t<Q.length;t+=1){const e=Q[t];rt.has(e)||(rt.add(e),e())}Q.length=0}while(F.length);for(;Z.length;)Z.pop()();et=!1,st=!1,rt.clear()}}function at(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(nt)}}const it=new Set;let ct;function lt(){ct={r:0,c:[],p:ct}}function ut(){ct.r||r(ct.c),ct=ct.p}function dt(t,e){t&&t.i&&(it.delete(t),t.i(e))}function ht(t,e,n,s){if(t&&t.o){if(it.has(t))return;it.add(t),ct.c.push((()=>{it.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function ft(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function mt(t){t&&t.c()}function gt(t,e){t&&t.l(e)}function bt(t,e,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,s),a||nt((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(nt)}function yt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){-1===t.$$.dirty[0]&&(F.push(t),et||(et=!0,tt.then(ot)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $t(e,n,o,a,i,c,l,u=[-1]){const d=p;K(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(h.root);let f=!1;if(h.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return h.ctx&&i(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),f&&vt(e,t)),n})):[],h.update(),f=!0,r(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){m=!0;const t=L(n.target);h.fragment&&h.fragment.l(t),t.forEach($)}else h.fragment&&h.fragment.c();n.intro&&dt(e.$$.fragment),bt(e,n.target,n.anchor,n.customElement),m=!1,ot()}K(d)}class _t{$destroy(){yt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const wt=[];function Et(e,n=t){let s;const r=[];function o(t){if(a(e,t)&&(e=t,s)){const t=!wt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),wt.push(n,e)}if(t){for(let t=0;t<wt.length;t+=2)wt[t][0](wt[t+1]);wt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.push(c),1===r.length&&(s=n(o)||t),a(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const At={};var St={owner:"ayrshare",repo:"uptime-status",sites:[{name:"Ayrshare Dashboard",url:"https://app.ayrshare.com",icon:"https://app.ayrshare.com/icon.png"},{name:"/user API endpoint",url:"https://app.ayrshare.com/api/user",icon:"https://app.ayrshare.com/api-rest-blue.png",headers:["Authorization: Bearer $API_KEY","Content-Type: application/json"]},{name:"/post Twitter API Post",url:"https://app.ayrshare.com/api/post/random",icon:"https://app.ayrshare.com/api-rest-blue.png",method:"POST",headers:["Authorization: Bearer $API_KEY","Content-Type: application/json"],body:'{ "post": "Check on me.", "platforms": ["twitter"] }'},{name:"/post Facebook API Post",url:"https://app.ayrshare.com/api/post/random",icon:"https://app.ayrshare.com/api-rest-blue.png",method:"POST",headers:["Authorization: Bearer $API_KEY","Content-Type: application/json"],body:'{ "post": "Check on me.", "platforms": ["facebook"] }'},{name:"/post LinkedIn API Post",url:"https://app.ayrshare.com/api/post/random",icon:"https://app.ayrshare.com/api-rest-blue.png",method:"POST",headers:["Authorization: Bearer $API_KEY","Content-Type: application/json"],body:'{ "post": "Check on me.", "platforms": ["linkedin"] }'},{name:"/post Telegram API Post",url:"https://app.ayrshare.com/api/post/random",icon:"https://app.ayrshare.com/api-rest-blue.png",method:"POST",headers:["Authorization: Bearer $API_KEY","Content-Type: application/json"],body:'{ "post": "Check on me.", "platforms": ["telegram"] }'}],"status-website":{name:"Ayrshare Status",logoUrl:"https://app.ayrshare.com/ayrshare-purple-icon.jpg",favicon:"https://app.ayrshare.com/icon.png",cname:"status.ayrshare.com",introTitle:"**Ayrshare** - an API for social posting and management.",introMessage:"The uptime status of [Ayrshare's](https://www.ayrshare.com) website, app, and APIs. Login to the [Ayrshare Dashboard](https://app.ayrshare.com).",scripts:[{src:"https://plausible.io/js/plausible.js",defer:!0,async:!0,"data-domain":"status.ayrshare.com"}],navbar:[{title:"Ayrshare Home",href:"https://www.ayrshare.com"},{title:"API Docs",href:"https://docs.ayrshare.com"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},workflowSchedule:{graphs:"0 0 * * *",responseTime:"0 23 * * *",staticSite:"0 1 * * *",summary:"0 0 * * *",updateTemplate:"0 0 * * *",updates:"0 3 * * *",uptime:"0 */2 * * *"},path:"https://status.ayrshare.com",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Tt(t,e,n){const s=t.slice();return s[1]=e[n],s}function xt(e){let n,s,r,o=St["status-website"]&&!St["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=w("img"),this.h()},l(t){n=O(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){I(n,"alt",""),c(n.src,s=St["status-website"].logoUrl)||I(n,"src",s),I(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}(),a=St["status-website"]&&!St["status-website"].hideNavTitle&&function(e){let n,s,r=St["status-website"].name+"";return{c(){n=w("div"),s=A(r)},l(t){n=O(t,"DIV",{});var e=L(n);s=C(e,r),e.forEach($)},m(t,e){v(t,n,e),b(n,s)},p:t,d(t){t&&$(n)}}}();return{c(){n=w("div"),s=w("a"),o&&o.c(),r=S(),a&&a.c(),this.h()},l(t){n=O(t,"DIV",{});var e=L(n);s=O(e,"A",{href:!0,class:!0});var i=L(s);o&&o.l(i),r=H(i),a&&a.l(i),i.forEach($),e.forEach($),this.h()},h(){I(s,"href",St["status-website"].logoHref||St.path),I(s,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),b(n,s),o&&o.m(s,null),b(s,r),a&&a.m(s,null)},p(t,e){St["status-website"]&&!St["status-website"].hideNavLogo&&o.p(t,e),St["status-website"]&&!St["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&$(n),o&&o.d(),a&&a.d()}}}function Pt(t){let e,n,s,r,o,a,i=t[1].title+"";return{c(){e=w("li"),n=w("a"),s=A(i),a=S(),this.h()},l(t){e=O(t,"LI",{});var r=L(e);n=O(r,"A",{"aria-current":!0,href:!0,class:!0});var o=L(n);s=C(o,i),o.forEach($),a=H(r),r.forEach($),this.h()},h(){I(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),I(n,"href",o=t[1].href.replace("$OWNER",St.owner).replace("$REPO",St.repo)),I(n,"class","svelte-a08hsz")},m(t,r){v(t,e,r),b(e,n),b(n,s),b(e,a)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&I(n,"aria-current",r)},d(t){t&&$(e)}}}function It(e){let n,s,r,o,a,i=St["status-website"]&&St["status-website"].logoUrl&&xt(),c=St["status-website"]&&St["status-website"].navbar&&function(t){let e,n=St["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Pt(Tt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=T()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=T()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(1&r){let o;for(n=St["status-website"].navbar,o=0;o<n.length;o+=1){const a=Tt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Pt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&$(e)}}}(e),l=St["status-website"]&&St["status-website"].navbarGitHub&&!St["status-website"].navbar&&function(e){let n,s,r,o=St.i18n.navGitHub+"";return{c(){n=w("li"),s=w("a"),r=A(o),this.h()},l(t){n=O(t,"LI",{});var e=L(n);s=O(e,"A",{href:!0,class:!0});var a=L(s);r=C(a,o),a.forEach($),e.forEach($),this.h()},h(){I(s,"href",`https://github.com/${St.owner}/${St.repo}`),I(s,"class","svelte-a08hsz")},m(t,e){v(t,n,e),b(n,s),b(s,r)},p:t,d(t){t&&$(n)}}}();return{c(){n=w("nav"),s=w("div"),i&&i.c(),r=S(),o=w("ul"),c&&c.c(),a=S(),l&&l.c(),this.h()},l(t){n=O(t,"NAV",{class:!0});var e=L(n);s=O(e,"DIV",{class:!0});var u=L(s);i&&i.l(u),r=H(u),o=O(u,"UL",{class:!0});var d=L(o);c&&c.l(d),a=H(d),l&&l.l(d),d.forEach($),u.forEach($),e.forEach($),this.h()},h(){I(o,"class","svelte-a08hsz"),I(s,"class","container svelte-a08hsz"),I(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),b(n,s),i&&i.m(s,null),b(s,r),b(s,o),c&&c.m(o,null),b(o,a),l&&l.m(o,null)},p(t,[e]){St["status-website"]&&St["status-website"].logoUrl&&i.p(t,e),St["status-website"]&&St["status-website"].navbar&&c.p(t,e),St["status-website"]&&St["status-website"].navbarGitHub&&!St["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&$(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function Nt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Lt extends _t{constructor(t){super(),$t(this,t,Nt,It,a,{segment:0})}}var Rt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function kt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ot(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ct(t,e){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function h(t){var e=Rt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function f(){for(var t="";c.length;)t+=h(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(t);)s=t.substring(d,r.index),d=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+kt(Ot(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Ct(kt(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Ot(r[8])+'" alt="'+Ot(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ot(r[11]||u[s.toLowerCase()])+'">'),n=f()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ct(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Ot(r[16])+"</code>":(r[17]||r[1])&&(n=h(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(d)+f()).replace(/^\n+|\n+$/g,"")}function Ht(t,e,n){const s=t.slice();return s[3]=e[n],s}function jt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Ut(t,e,n){const s=t.slice();return s[8]=e[n],s}function Mt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){I(n,"rel","stylesheet"),I(n,"href",`${St.path}/themes/${(St["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function Dt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){I(n,"rel","stylesheet"),I(n,"href",(St["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function Bt(e){let n,s;return{c(){n=w("script"),this.h()},l(t){n=O(t,"SCRIPT",{src:!0}),L(n).forEach($),this.h()},h(){c(n.src,s=e[8].src)||I(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function Gt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){I(n,"rel",e[3].rel),I(n,"href",e[3].href),I(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function qt(e){let n;return{c(){n=w("meta"),this.h()},l(t){n=O(t,"META",{name:!0,content:!0}),this.h()},h(){I(n,"name",e[3].name),I(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function zt(e){let n,s,r,o,a,i,c,d,h,f,p,m,g,y,E,A,x,P,N=Ct(St.i18n.footer.replace(/\$REPO/,`https://github.com/${St.owner}/${St.repo}`))+"",R=(St["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(St["status-website"]||{}).customHeadHtml+"";return{c(){n=new z,s=T(),this.h()},l(t){n=U(t),s=T(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&$(s),t&&n.d()}}}();let k=((St["status-website"]||{}).themeUrl?Dt:Mt)(e),C=(St["status-website"]||{}).scripts&&function(t){let e,n=(St["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Bt(Ut(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=T()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=T()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(St["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Ut(t,n,o);s[o]?s[o].p(a,r):(s[o]=Bt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&$(e)}}}(e),j=(St["status-website"]||{}).links&&function(t){let e,n=(St["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Gt(jt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=T()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=T()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(St["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=jt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Gt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&$(e)}}}(e),M=(St["status-website"]||{}).metaTags&&function(t){let e,n=(St["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=qt(Ht(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=T()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=T()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(St["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Ht(t,n,o);s[o]?s[o].p(a,r):(s[o]=qt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&$(e)}}}(e),D=St["status-website"].css&&function(e){let n,s,r=`<style>${St["status-website"].css}</style>`;return{c(){n=new z,s=T(),this.h()},l(t){n=U(t),s=T(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&$(s),t&&n.d()}}}(),B=St["status-website"].js&&function(e){let n,s,r=`<script>${St["status-website"].js}<\/script>`;return{c(){n=new z,s=T(),this.h()},l(t){n=U(t),s=T(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&$(s),t&&n.d()}}}(),G=(St["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(St["status-website"]||{}).customBodyHtml+"";return{c(){n=new z,s=T(),this.h()},l(t){n=U(t),s=T(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&$(s),t&&n.d()}}}();m=new Lt({props:{segment:e[0]}});const K=e[2].default,Y=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(K,e,e[1],null);return{c(){R&&R.c(),n=T(),k.c(),s=w("link"),r=w("link"),o=w("link"),C&&C.c(),a=T(),j&&j.c(),i=T(),M&&M.c(),c=T(),D&&D.c(),d=T(),B&&B.c(),h=T(),f=S(),G&&G.c(),p=S(),mt(m.$$.fragment),g=S(),y=w("main"),Y&&Y.c(),E=S(),A=w("footer"),x=w("p"),this.h()},l(t){const e=q('[data-svelte="svelte-ri9y7q"]',document.head);R&&R.l(e),n=T(),k.l(e),s=O(e,"LINK",{rel:!0,href:!0}),r=O(e,"LINK",{rel:!0,type:!0,href:!0}),o=O(e,"LINK",{rel:!0,type:!0,href:!0}),C&&C.l(e),a=T(),j&&j.l(e),i=T(),M&&M.l(e),c=T(),D&&D.l(e),d=T(),B&&B.l(e),h=T(),e.forEach($),f=H(t),G&&G.l(t),p=H(t),gt(m.$$.fragment,t),g=H(t),y=O(t,"MAIN",{class:!0});var l=L(y);Y&&Y.l(l),l.forEach($),E=H(t),A=O(t,"FOOTER",{class:!0});var u=L(A);x=O(u,"P",{}),L(x).forEach($),u.forEach($),this.h()},h(){I(s,"rel","stylesheet"),I(s,"href",`${St.path}/global.css`),I(r,"rel","icon"),I(r,"type","image/svg"),I(r,"href",(St["status-website"]||{}).faviconSvg||(St["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),I(o,"rel","icon"),I(o,"type","image/png"),I(o,"href",(St["status-website"]||{}).favicon||"/logo-192.png"),I(y,"class","container"),I(A,"class","svelte-jbr799")},m(t,e){R&&R.m(document.head,null),b(document.head,n),k.m(document.head,null),b(document.head,s),b(document.head,r),b(document.head,o),C&&C.m(document.head,null),b(document.head,a),j&&j.m(document.head,null),b(document.head,i),M&&M.m(document.head,null),b(document.head,c),D&&D.m(document.head,null),b(document.head,d),B&&B.m(document.head,null),b(document.head,h),v(t,f,e),G&&G.m(t,e),v(t,p,e),bt(m,t,e),v(t,g,e),v(t,y,e),Y&&Y.m(y,null),v(t,E,e),v(t,A,e),b(A,x),x.innerHTML=N,P=!0},p(t,[e]){(St["status-website"]||{}).customHeadHtml&&R.p(t,e),k.p(t,e),(St["status-website"]||{}).scripts&&C.p(t,e),(St["status-website"]||{}).links&&j.p(t,e),(St["status-website"]||{}).metaTags&&M.p(t,e),St["status-website"].css&&D.p(t,e),St["status-website"].js&&B.p(t,e),(St["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),Y&&Y.p&&(!P||2&e)&&u(Y,K,t,t[1],P?e:-1,null,null)},i(t){P||(dt(m.$$.fragment,t),dt(Y,t),P=!0)},o(t){ht(m.$$.fragment,t),ht(Y,t),P=!1},d(t){R&&R.d(t),$(n),k.d(t),$(s),$(r),$(o),C&&C.d(t),$(a),j&&j.d(t),$(i),M&&M.d(t),$(c),D&&D.d(t),$(d),B&&B.d(t),$(h),t&&$(f),G&&G.d(t),t&&$(p),yt(m,t),t&&$(g),t&&$(y),Y&&Y.d(t),t&&$(E),t&&$(A)}}}function Kt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Yt extends _t{constructor(t){super(),$t(this,t,Kt,zt,a,{segment:0})}}function Jt(t){let e,n,s=t[1].stack+"";return{c(){e=w("pre"),n=A(s)},l(t){e=O(t,"PRE",{});var r=L(e);n=C(r,s),r.forEach($)},m(t,s){v(t,e,s),b(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&M(n,s)},d(t){t&&$(e)}}}function Vt(e){let n,s,r,o,a,i,c,l,u,d=e[1].message+"";document.title=n=e[0];let h=e[2]&&e[1].stack&&Jt(e);return{c(){s=S(),r=w("h1"),o=A(e[0]),a=S(),i=w("p"),c=A(d),l=S(),h&&h.c(),u=T(),this.h()},l(t){q('[data-svelte="svelte-1moakz"]',document.head).forEach($),s=H(t),r=O(t,"H1",{class:!0});var n=L(r);o=C(n,e[0]),n.forEach($),a=H(t),i=O(t,"P",{class:!0});var f=L(i);c=C(f,d),f.forEach($),l=H(t),h&&h.l(t),u=T(),this.h()},h(){I(r,"class","svelte-17w3omn"),I(i,"class","svelte-17w3omn")},m(t,e){v(t,s,e),v(t,r,e),b(r,o),v(t,a,e),v(t,i,e),b(i,c),v(t,l,e),h&&h.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&M(o,t[0]),2&e&&d!==(d=t[1].message+"")&&M(c,d),t[2]&&t[1].stack?h?h.p(t,e):(h=Jt(t),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&$(s),t&&$(r),t&&$(a),t&&$(i),t&&$(l),h&&h.d(t),t&&$(u)}}}function Wt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Ft extends _t{constructor(t){super(),$t(this,t,Wt,Vt,a,{status:0,error:1})}}function Xt(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&mt(n.$$.fragment),s=T()},l(t){n&&gt(n.$$.fragment,t),s=T()},m(t,e){n&&bt(n,t,e),v(t,s,e),r=!0},p(t,e){const r=16&e?ft(o,[pt(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){lt();const t=n;ht(t.$$.fragment,1,0,(()=>{yt(t,1)})),ut()}a?(n=new a(i()),mt(n.$$.fragment),dt(n.$$.fragment,1),bt(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&dt(n.$$.fragment,t),r=!0)},o(t){n&&ht(n.$$.fragment,t),r=!1},d(t){t&&$(s),n&&yt(n,t)}}}function Qt(t){let e,n;return e=new Ft({props:{error:t[0],status:t[1]}}),{c(){mt(e.$$.fragment)},l(t){gt(e.$$.fragment,t)},m(t,s){bt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(dt(e.$$.fragment,t),n=!0)},o(t){ht(e.$$.fragment,t),n=!1},d(t){yt(e,t)}}}function Zt(t){let e,n,s,r;const o=[Qt,Xt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=T()},l(t){n.l(t),s=T()},m(t,n){a[e].m(t,n),v(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(lt(),ht(a[c],1,1,(()=>{a[c]=null})),ut(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),dt(n,1),n.m(s.parentNode,s))},i(t){r||(dt(n),r=!0)},o(t){ht(n),r=!1},d(t){a[e].d(t),t&&$(s)}}}function te(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Zt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Yt({props:o}),{c(){mt(n.$$.fragment)},l(t){gt(n.$$.fragment,t)},m(t,e){bt(n,t,e),s=!0},p(t,[e]){const s=12&e?ft(r,[4&e&&{segment:t[2][0]},8&e&&pt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(dt(n.$$.fragment,t),s=!0)},o(t){ht(n.$$.fragment,t),s=!1},d(t){yt(n,t)}}}function ee(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return V(l),u=At,d=s,Y().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,a,i,c,s,l]}class ne extends _t{constructor(t){super(),$t(this,t,ee,te,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const se=[],re=[{js:()=>Promise.all([import("./index.a8306525.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.c798d3db.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].5bc457b1.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].4b4ac19f.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.c9870db4.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],oe=(ae=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ae(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ae(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ae;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ie(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function i(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((s=s.apply(t,e||[])).next())}))}function ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let le,ue=1;const de="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},he={};let fe,pe;function me(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ge(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(fe))return null;let e=t.pathname.slice(fe.length);if(""===e&&(e="/"),!se.some((t=>t.test(e))))for(let n=0;n<oe.length;n+=1){const s=oe[n],r=s.pattern.exec(e);if(r){const n=me(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function be(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=ge(r);if(o){$e(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),de.pushState({id:le},"",r.href)}}function ye(){return{x:pageXOffset,y:pageYOffset}}function ve(t){if(he[le]=ye(),t.state){const e=ge(new URL(location.href));e?$e(e,t.state.id):location.href=location.href}else!function(t){ue=t}(ue+1),function(t){le=t}(ue),de.replaceState({id:le},"",location.href)}function $e(t,e,n,s){return ie(this,void 0,void 0,(function*(){const r=!!e;if(r)le=e;else{const t=ye();he[le]=t,le=e=++ue,he[le]=n?t:{x:0,y:0}}if(yield pe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=he[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),he[le]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function _e(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let we,Ee=null;function Ae(t){const e=ce(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ge(new URL(t,_e(document)));if(e)Ee&&t===Ee.href||(Ee={href:t,promise:Be(e)}),Ee.promise}(e.href)}function Se(t){clearTimeout(we),we=setTimeout((()=>{Ae(t)}),20)}function Te(t,e={noscroll:!1,replaceState:!1}){const n=ge(new URL(t,_e(document)));if(n){const s=$e(n,null,e.noscroll);return de[e.replaceState?"replaceState":"pushState"]({id:le},"",t),s}return location.href=t,new Promise((()=>{}))}const xe="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pe,Ie,Ne,Le=!1,Re=[],ke="{}";const Oe={page:function(t){const e=Et(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:Et(null),session:Et(xe&&xe.session)};let Ce,He,je;function Ue(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Me(t){return ie(this,void 0,void 0,(function*(){Pe&&Oe.preloading.set(!0);const e=function(t){return Ee&&Ee.href===t.href?Ee.promise:Be(t)}(t),n=Ie={},s=yield e,{redirect:r}=s;if(n===Ie)if(r)yield Te(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield De(n,e,Ue(e,t.page))}}))}function De(t,e,n){return ie(this,void 0,void 0,(function*(){Oe.page.set(n),Oe.preloading.set(!1),Pe?Pe.$set(e):(e.stores={page:{subscribe:Oe.page.subscribe},preloading:{subscribe:Oe.preloading.subscribe},session:Oe.session},e.level0={props:yield Ne},e.notify=Oe.page.notify,Pe=new ne({target:je,props:e,hydrate:!0})),Re=t,ke=JSON.stringify(n.query),Le=!0,He=!1}))}function Be(t){return ie(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ne){const t=()=>({});Ne=xe.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ce)}let i,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>ie(this,void 0,void 0,(function*(){const d=s[i];if(function(t,e,n,s){if(s!==ke)return!0;const r=Re[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,d,l,r)&&(u=!0),o.segments[c]=s[i+1],!e)return{segment:d};const h=c++;let f;if(He||u||!Re[i]||Re[i].part!==e.i){u=!1;const{default:s,preload:r}=yield re[e.i].js();let o;o=Le||!xe.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ce):{}:xe.preloaded[i+1],f={component:s,props:o,segment:d,match:l,part:e.i}}else f=Re[i];return o[`level${h}`]=f})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Ge,qe,ze;Oe.session.subscribe((t=>ie(void 0,void 0,void 0,(function*(){if(Ce=t,!Le)return;He=!0;const e=ge(new URL(location.href)),n=Ie={},{redirect:s,props:r,branch:o}=yield Be(e);n===Ie&&(s?yield Te(s.location,{replaceState:!0}):yield De(o,r,Ue(r,e.page)))})))),Ge={target:document.querySelector("#sapper")},qe=Ge.target,je=qe,ze=xe.baseUrl,fe=ze,pe=Me,"scrollRestoration"in de&&(de.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{de.scrollRestoration="auto"})),addEventListener("load",(()=>{de.scrollRestoration="manual"})),addEventListener("click",be),addEventListener("popstate",ve),addEventListener("touchstart",Ae),addEventListener("mousemove",Se),xe.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=xe;Ne||(Ne=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Ne},level1:{props:{status:o,error:a},component:Ft},segments:r},c=me(n);De([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;de.replaceState({id:ue},"",e);const n=ge(new URL(location.href));if(n)return $e(n,ue,!0,t)}));export{yt as A,x as B,r as C,X as D,U as E,c as F,h as G,z as H,q as I,Ct as J,E as K,Te as L,D as M,P as N,e as O,N as P,ft as Q,V as R,_t as S,W as T,d as U,pt as V,nt as W,G as X,L as a,C as b,O as c,$ as d,w as e,I as f,v as g,b as h,$t as i,S as j,H as k,lt as l,ht as m,t as n,ut as o,dt as p,J as q,St as r,a as s,A as t,M as u,T as v,_ as w,mt as x,gt as y,bt as z};

import __inject_styles from './inject_styles.803b7e80.js';