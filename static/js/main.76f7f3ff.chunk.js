(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=(a(11),a(12),a(1)),s=a.n(o),i=a(5),m=a(2),u=function(e){return r.a.createElement("div",{className:"card-list"},e.movies.filter((function(e){return e.poster_path&&e.overview})).map((function(e){return r.a.createElement("div",{className:"card",key:e.id},r.a.createElement("img",{className:"card__image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:e.title+"poster"}),r.a.createElement("div",{className:"card__content"},r.a.createElement("h2",{className:"movie-title"},e.title),r.a.createElement("p",null,r.a.createElement("small",null,e.release_date)),r.a.createElement("p",null,r.a.createElement("small",null,"Rating: ",e.vote_average))),r.a.createElement("div",{className:"card__desc"},r.a.createElement("p",null,e.overview)))})))},p=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),p=o[0],v=o[1],d=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=bcc9da9e9d42bc258ad578ae21559efd&language=en-US&query=".concat(a,"&page=1"),e.prev=3,console.log(a),e.next=7,fetch(n);case 7:return r=e.sent,e.next=10,r.json();case 10:c=e.sent,v(c.results),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:console.log(p[0]);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("form",{className:"form",onSubmit:d},r.a.createElement("label",{htmlFor:"query",className:"label"},"Movie Name"),r.a.createElement("input",{className:"input",value:a,type:"text",name:"query",placeholder:"movie name",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"button"},"SUBMIT"))),r.a.createElement(u,{movies:p}))},v=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Movie Search App"),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.76f7f3ff.chunk.js.map