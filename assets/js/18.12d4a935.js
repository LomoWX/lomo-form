(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{471:function(a,e,t){"use strict";t.r(e);t(80);var n={name:"lomo-dynamic-tags-demo",data:function(){return{value:["不可关闭","自定义样式","标签1","标签2"]}},methods:{tagClick:function(a,e){this.$message.info("点击了".concat(e,".").concat(a))},tagPropHandle:function(a,e){return 0==e?{closable:!1}:1==e?{type:"success",effect:"plain"}:void 0}}},o=t(16),l=Object(o.a)(n,(function(){var a=this,e=a._self._c;return e("div",{staticClass:"demo border"},[e("el-row",{attrs:{type:"flex"}},[e("span",[a._v("动态标签：")]),a._v(" "),e("lomo-dynamic-tags",{attrs:{tagPropHandle:a.tagPropHandle},on:{click:a.tagClick},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}})],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);