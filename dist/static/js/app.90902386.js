(function(t){function e(e){for(var r,i,c=e[0],u=e[1],s=e[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return c.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"c0b8fe24"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var s=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d44":function(t,e,n){"use strict";n("ed3f")},2395:function(t,e,n){},"3fbf":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("7c55"),n("2877")),c={},u=Object(i["a"])(c,o,a,!1,null,null,null),s=u.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-row",{staticClass:"home"},[n("van-nav-bar",{attrs:{title:"详情","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("van-row",[n("van-image",{attrs:{width:"100%",height:"100%",src:"https://img01.yzcdn.cn/vant/cat.jpeg"}})],1),n("van-row",{attrs:{gutter:"20"}},[n("van-col",{staticClass:"text-left ptb-8",attrs:{span:"22",offset:"1"}},[t._v("MBTI职业性格测试")]),n("van-col",{staticClass:"text-left ptb-8 fonts-12 color-gary",attrs:{span:"22",offset:"1"}},[t._v(" 你的性格，适合什么样的工作？ ")])],1),n("van-row",[n("van-col",{staticClass:"text-left ptb-8",attrs:{span:"22",offset:"1"}},[t._v(t._s(t.dataMsg))])],1)],1),n("van-row",{staticClass:"fixedb-20 bg-white site"},[n("van-col",{staticClass:"ptb-8",attrs:{span:"22",offset:"1"}},[n("van-button",{attrs:{type:"info",block:""},on:{click:t.btnEnterT}},[t._v("进入测试")])],1)],1)],1)},d=[],p=(n("ac1f"),n("466d"),n("d399")),b={name:"Home",data:function(){return{dataMsg:""}},beforeMount:function(){},mounted:function(){},methods:{evaIntroduceHMethods:function(){var t=this;this.$bridge.registermethod("evaIntroduceHMethods",(function(e){return t.dataMsg=e,Object(p["a"])(e),{a:"1212"}}))},onClickLeft:function(){Object(p["a"])("返回"),this.backforward()},backforward:function(){var t=this,e=navigator.userAgent,n=e.indexOf("Android")>-1||e.indexOf("Adr")>-1,r=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);n?window.quotationSystem.htmlBack():r?t.$bridge.callmethod("htmlBack","",(function(t){console.log(t)})):Object(p["a"])("返回操作失败")},btnEnterT:function(){this.$router.push({path:"/about",query:{id:"sfdgdf202204255544144"}})}}},v=b,h=(n("0d44"),Object(i["a"])(v,l,d,!1,null,"49add0b2",null)),m=h.exports;r["a"].use(f["a"]);var g=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"8ab4"))}}],w=new f["a"]({routes:g}),y=w,O=n("2f62");r["a"].use(O["a"]);var j=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}}),x=n("b970"),_=(n("157a"),n("7520")),k={callmethod:function(t,e,n){n(_.call(t,e,n))},registermethod:function(t,e){_.register(t,e)}};n("3fbf");r["a"].config.productionTip=!1,r["a"].prototype.$bridge=k,r["a"].use(x["a"]),new r["a"]({router:y,store:j,render:function(t){return t(s)}}).$mount("#app")},"7c55":function(t,e,n){"use strict";n("2395")},ed3f:function(t,e,n){}});