(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,5],{320:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("4c61b0a6",content,!0,{sourceMap:!1})},322:function(t,e,n){"use strict";n.r(e);n(21);var r={props:{author:{type:Object,required:!0}}},l=n(53),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full px-2 xs:mb-6 md:mb-12 article-card"},[e("div",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"},[t.author.img?e("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:t.author.img}}):t._e(),t._v(" "),e("div",{staticClass:"flex flex-col m-4"},[e("h4",{staticClass:"font-semibold"},[t._v("Author")]),t._v(" "),e("p",[t._v(t._s(t.author.name))]),t._v(" "),e("p",[t._v(t._s(t.author.bio))])])])])}),[],!1,null,null,null);e.default=component.exports},323:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},l=n(53),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between"},[t.prev?e("NuxtLink",{staticClass:"text-primary font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v("\n    "+t._s(t.prev.title)+"\n  ")]):e("span",[t._v(" ")]),t._v(" "),t.next?e("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)+"\n  ")]):e("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,n){"use strict";n(320)},325:function(t,e,n){var r=n(88),l=n(326),o=n(327),c=r((function(i){return i[1]})),x=l(o);c.push([t.i,".nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.nuxt-content p{margin-bottom:20px}.icon.icon-link{background-image:url("+x+");display:inline-block;width:20px;height:20px;background-size:20px 20px}",""]),c.locals={},t.exports=c},326:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},327:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0yMCA5djEwYTIgMiAwIDAgMS0yIDJINmEyIDIgMCAwIDEtMi0yVjlhMiAyIDAgMCAxLTItMlY1YzAtMS4xLjktMiAyLTJoMTZhMiAyIDAgMCAxIDIgMnYyYTIgMiAwIDAgMS0yIDJ6bTAtMlY1SDR2MmgxNnpNNiA5djEwaDEyVjlINnptNCAyaDRhMSAxIDAgMCAxIDAgMmgtNGExIDEgMCAwIDEgMC0yeiIvPjwvc3ZnPg=="},340:function(t,e,n){"use strict";n.r(e);var r=n(29),l=n(9),o=(n(35),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,article,o,c,x,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,l=t.params,e.next=3,n("articles",l.slug).fetch();case 3:return article=e.sent,e.next=6,n("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(l.slug).fetch();case 6:return o=e.sent,c=Object(r.a)(o,2),x=c[0],d=c[1],e.abrupt("return",{article:article,prev:x,next:d});case 11:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=(n(324),n(53)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("article",[e("nav",[e("ul",t._l(t.article.toc,(function(link){return e("li",{key:link.id},[e("NuxtLink",{attrs:{to:"#".concat(link.id)}},[t._v(t._s(link.text))])],1)})),0)]),t._v(" "),e("nuxt-content",{attrs:{document:t.article}}),t._v(" "),e("author",{attrs:{author:t.article.author}}),t._v(" "),e("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Author:n(322).default,PrevNext:n(323).default})}}]);