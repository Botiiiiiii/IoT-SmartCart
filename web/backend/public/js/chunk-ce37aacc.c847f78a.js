(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce37aacc"],{2038:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-content",[e("router-view")],1)},i=[],o=e("2877"),c=e("6544"),r=e.n(c),s=(e("bd0c"),e("d10f")),d=s["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,e=t.top,a=t.right,i=t.footer,o=t.insetFooter,c=t.bottom,r=t.left;return{paddingTop:"".concat(e+n,"px"),paddingRight:"".concat(a,"px"),paddingBottom:"".concat(i+o+c,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var n={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,n,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}}),u=e("d9bd"),l=d.extend({name:"v-main",created:function(){Object(u["d"])("v-content","v-main",this)},render:function(t){var n=d.options.render.call(this,t);return n.data.staticClass+=" v-content",n.children[0].data.staticClass+=" v-content__wrap",t(n.tag,n.data,n.children)}}),p={},f=Object(o["a"])(p,a,i,!1,null,null,null);n["default"]=f.exports;r()(f,{VContent:l})},bd0c:function(t,n,e){},d10f:function(t,n,e){"use strict";var a=e("2b0e");n["a"]=a["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})}}]);
//# sourceMappingURL=chunk-ce37aacc.c847f78a.js.map