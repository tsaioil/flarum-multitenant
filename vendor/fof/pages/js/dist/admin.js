module.exports=function(t){var e={};function a(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=22)}([function(t,e){t.exports=flarum.core.compat.Model},function(t,e,a){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}a.d(e,"a",function(){return n})},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["utils/string"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e,a){"use strict";a.d(e,"a",function(){return u});var n=a(1),o=a(0),s=a.n(o),i=a(8),r=a.n(i),p=a(9),l=a.n(p),c=a(4),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e}(r()(s.a,{title:s.a.attribute("title"),time:s.a.attribute("time",s.a.transformDate),editTime:s.a.attribute("editTime",s.a.transformDate),content:s.a.attribute("content"),contentHtml:s.a.attribute("contentHtml"),contentPlain:l()("contentHtml",c.getPlainContent),slug:s.a.attribute("slug"),isHidden:s.a.attribute("isHidden"),isHtml:s.a.attribute("isHtml")}))},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat.extend},,,,,function(t,e){t.exports=flarum.core.compat["components/AdminNav"]},function(t,e){t.exports=flarum.core.compat["components/AdminLinkButton"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["components/Placeholder"]},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e){t.exports=flarum.core.compat["utils/saveSettings"]},function(t,e){t.exports=flarum.core.compat["components/BasicsPage"]},function(t,e,a){"use strict";a.r(e);var n=a(7),o=a(10),s=a(15),i=a.n(s),r=a(16),p=a.n(r),l=a(1),c=a(5),u=a.n(c),d=a(2),f=a.n(d),g=a(17),h=a.n(g),b=a(4),v=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t);var a=e.prototype;return a.init=function(){t.prototype.init.call(this),this.page=this.props.page||app.store.createRecord("pages"),this.pageTitle=m.prop(this.page.title()||""),this.slug=m.prop(this.page.slug()||""),this.pageContent=m.prop(this.page.content()||""),this.isHidden=m.prop(this.page.isHidden()&&!0),this.isHtml=m.prop(this.page.isHtml()&&!0)},a.className=function(){return"EditPageModal Modal--large"},a.title=function(){var t=this.pageTitle();return t||app.translator.trans("fof-pages.admin.edit_page.title")},a.content=function(){var t=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-pages.admin.edit_page.title_label")),m("input",{className:"FormControl",placeholder:app.translator.trans("fof-pages.admin.edit_page.title_placeholder"),value:this.pageTitle(),oninput:function(e){t.pageTitle(e.target.value),t.slug(Object(b.slug)(e.target.value))}})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-pages.admin.edit_page.slug_label")),m("input",{className:"FormControl",placeholder:app.translator.trans("fof-pages.admin.edit_page.slug_placeholder"),value:this.slug(),oninput:function(e){t.slug(e.target.value)}})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-pages.admin.edit_page.content_label")),m("textarea",{className:"FormControl",rows:"5",value:this.pageContent(),onchange:m.withAttr("value",this.pageContent),placeholder:app.translator.trans("fof-pages.admin.edit_page.content_placeholder")})),m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",value:"1",checked:this.isHidden(),onchange:m.withAttr("checked",this.isHidden)}),app.translator.trans("fof-pages.admin.edit_page.hidden_label")))),m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",value:"1",checked:this.isHtml(),onchange:m.withAttr("checked",this.isHtml)}),app.translator.trans("fof-pages.admin.edit_page.html_label")))),m("div",{className:"Form-group"},f.a.component({type:"submit",className:"Button Button--primary EditPageModal-save",loading:this.loading,children:app.translator.trans("fof-pages.admin.edit_page.submit_button")}),this.page.exists?m("button",{type:"button",className:"Button EditPageModal-delete",onclick:this.delete.bind(this)},app.translator.trans("fof-pages.admin.edit_page.delete_page_button")):"")))},a.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.page.save({title:this.pageTitle(),slug:this.slug(),content:this.pageContent(),isHidden:this.isHidden(),isHtml:this.isHtml()},{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).catch(function(){e.loading=!1,m.redraw()})},a.onhide=function(){m.route(app.route("pages"))},a.delete=function(){confirm(app.translator.trans("fof-pages.admin.edit_page.delete_page_confirmation"))&&(this.page.delete().then(function(){return m.redraw()}),this.hide())},e}(h.a),_=a(3),x=a.n(_),y=a(6),N=a.n(y),P=a(18),w=a.n(P),B=a(19),H=a.n(B),k=a(20),O=a.n(k),j=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t);var a=e.prototype;return a.view=function(){var t=this.props.page,e=app.forum.attribute("baseUrl")+"/p/"+t.id()+"-"+t.slug();return m("tr",{key:t.id()},m("th",null,t.title()),m("td",{className:"Pages-actions"},m("div",{className:"ButtonGroup"},f.a.component({className:"Button Button--page-edit",icon:"fas fa-pencil-alt",onclick:function(){return app.modal.show(new v({page:t}))}}),f.a.component({className:"Button Button--page-edit",icon:"fas fa-home",onclick:this.setAsHomePage.bind(this),disabled:app.data.settings.pages_home===t.id()&&"/pages/home"===app.data.settings.default_route}),f.a.component({className:"Button Button--page-view",icon:"fas fa-eye fa-sm",onclick:function(){return window.open(e,"_blank")}}),f.a.component({className:"Button Button--danger Button--page-delete",icon:"fas fa-times",onclick:this.delete.bind(this)}))))},a.setAsHomePage=function(){var t=this;if(app.alerts.dismiss(this.successAlert),confirm(app.translator.trans("fof-pages.admin.edit_page.set_as_home_page_confirmation"))){var e=this.props.page;O()({default_route:"/pages/home",pages_home:e.id()}).then(function(){app.alerts.show(t.successAlert=new H.a({type:"success",children:app.translator.trans("core.admin.basics.saved_message")}))}).catch(function(){}).then(function(){t.loading=!1,m.redraw()})}},a.delete=function(){confirm(app.translator.trans("fof-pages.admin.edit_page.delete_page_confirmation"))&&this.props.page.delete().then(function(){return m.redraw()})},e}(x.a),F=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t);var a=e.prototype;return a.init=function(){this.loading=!0,this.pages=[],this.page=0,this.loadLimit=20,this.refresh()},a.view=function(){if(this.loading)return m("div",{className:"PageList-loading"},N.a.component());if(0===this.pages.length){var t=app.translator.trans("fof-pages.admin.pages_list.empty_text");return w.a.component({text:t})}var e,a;return!0===this.nextResults&&(e=f.a.component({className:"Button Button--PageList-next",icon:"fas fa-angle-right",onclick:this.loadNext.bind(this)})),!0===this.prevResults&&(a=f.a.component({className:"Button Button--PageList-prev",icon:"fas fa-angle-left",onclick:this.loadPrev.bind(this)})),m("div",{className:"PageList"},m("table",{className:"PageList-results"},m("thead",null,m("tr",null,m("th",null,app.translator.trans("fof-pages.admin.pages_list.title")),m("th",null))),m("tbody",null,this.pages.map(function(t){return j.component({page:t})}))),m("div",{className:"PageList-pagination"},e,a))},a.refresh=function(t){return void 0===t&&(t=!0),t&&(this.loading=!0,this.pages=[]),this.loadResults().then(this.parseResults.bind(this))},a.loadResults=function(){var t=this.page*this.loadLimit;return app.store.find("pages",{page:{offset:t,limit:this.loadLimit},sort:"-time"})},a.loadNext=function(){!0===this.nextResults&&(this.page++,this.refresh())},a.loadPrev=function(){!0===this.prevResults&&(this.page--,this.refresh())},a.parseResults=function(t){return[].push.apply(this.pages,t),this.loading=!1,this.nextResults=!!t.payload.links.next,this.prevResults=!!t.payload.links.prev,m.lazyRedraw(),t},e}(x.a),R=function(t){function e(){return t.apply(this,arguments)||this}return Object(l.a)(e,t),e.prototype.view=function(){return m("div",{className:"PagesPage"},m("div",{className:"PagesPage-header"},m("div",{className:"container"},m("p",null,app.translator.trans("fof-pages.admin.pages.about_text")),f.a.component({className:"Button Button--primary",icon:"fas fa-plus",children:app.translator.trans("fof-pages.admin.pages.create_button"),onclick:function(){return app.modal.show(new v)}}))),m("div",{className:"PagesPage-list"},m("div",{className:"container"},F.component())))},e}(u.a),L=function(){app.routes.pages={path:"pages",component:R.component()},app.extensionSettings["fof-pages"]=function(){return m.route(app.route("pages"))},Object(o.extend)(i.a.prototype,"items",function(t){t.add("pages",p.a.component({href:app.route("pages"),icon:"fas fa-file-alt",children:app.translator.trans("fof-pages.admin.nav.pages_button"),description:app.translator.trans("fof-pages.admin.nav.pages_text")}))})},M=a(21),A=a.n(M);app.initializers.add("fof-pages",function(t){t.store.models.pages=n.a,L(),Object(o.extend)(A.a.prototype,"homePageItems",function(t){t.add("fof-pages",{path:"/pages/home",label:"FriendsOfFlarum Pages"})})})}]);
//# sourceMappingURL=admin.js.map