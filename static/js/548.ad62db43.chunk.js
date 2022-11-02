"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[548],{4548:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(1413),a=r(5861),c=r(885),s=r(7757),i=r.n(s),u=r(2791),o=r(6731),p=r(7689),l={},f=r(184),d=function(e){var t=e.item,r=t.poster_path,n=t.overview,a=t.title,c=t.vote_average,s=t.release_date,i=t.genres.map((function(e){return(0,f.jsx)("li",{children:e.name},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}())})),u=s.slice(0,4),o=(10*c).toFixed(0);return(0,f.jsxs)("div",{className:l.container,children:[(0,f.jsx)("img",{className:l.img,src:"https://image.tmdb.org/t/p/original".concat(r),alt:a,width:"300",height:"400"}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"".concat(a," (").concat(u,")")}),(0,f.jsxs)("p",{children:["USER SCORE: ",(0,f.jsxs)("span",{className:l.text,children:[o,"%"]})]}),(0,f.jsxs)("p",{children:["OVERVIEW: ",(0,f.jsx)("span",{className:l.text,children:n})]}),(0,f.jsx)("p",{children:"GENRES:"}),(0,f.jsx)("ul",{className:l.list,children:i})]})]})};d.defaultProps={item:[]};var v=d,m=r(3643),h={},x=function(){var e,t,r=(0,u.useState)({movie:{},loading:!1,error:null}),s=(0,c.Z)(r,2),l=s[0],d=s[1],x=l.movie,g=l.loading,j=l.error,w=(0,p.UO)().id,k=Number(w),b=(0,p.TH)(),y=null!==(e=null===b||void 0===b||null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!0})})),e.prev=1,e.next=4,(0,m.Pg)(k);case 4:t=e.sent,d((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!1,movie:(0,n.Z)({},t)})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d((function(t){return(0,n.Z)((0,n.Z)({},t),{},{loading:!1,error:e.t0})}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();k&&e()}),[k]);var Z=function(e){return e.isActive?h.itemActive:h.item},_=Object.keys(x).length>0;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:h.container,children:[(0,f.jsx)(o.rU,{className:h.button,to:y,children:"Go back"}),g&&(0,f.jsx)("p",{children:"...Loading"}),j&&(0,f.jsx)("p",{children:"Movie not found"}),_&&(0,f.jsx)(v,{item:x}),_&&(0,f.jsx)(o.OL,{className:Z,to:"cast",state:{from:y},children:"Cast"}),_&&(0,f.jsx)(o.OL,{className:Z,to:"reviews",state:{from:y},children:"Reviews"})]}),(0,f.jsx)(p.j3,{})]})}},3643:function(e,t,r){r.d(t,{Df:function(){return o},Pg:function(){return p},tx:function(){return d},z1:function(){return l},zv:function(){return f}});var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),i=r.n(s)().create({baseURL:"https://api.themoviedb.org/3/"}),u="1f739ee3b0896acaf022f176c2ecab80",o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,i.get("trending/movie/day",{params:{api_key:u,page:t}});case 3:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t),{params:{api_key:u}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,i.get("search/movie",{params:{api_key:u,page:r,query:t}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/credits"),{params:{api_key:u}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/reviews"),{params:{api_key:u}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=548.ad62db43.chunk.js.map