(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{484:function(e,t,o){"use strict";o.r(t);var n=o(143),l={data:function(){var e,t=this.$createElement,o=function(e){return{component:"el-divider",labelWidth:"0px",contentPosition:"left",slots:e}};return{form:{labelWidth:"100px",span:15,data:{},items:[o("label 属性使用演示，自定义 Item Label 的插槽"),{prop:"x1",label:function(){return t("el-button",["自定义label"])},labelWidth:"100px"},o("slot 属性使用演示，自定义 Form Item 的插槽"),{prop:"x2",label:"Function 插槽",slot:function(){return t("el-tag",["这是一段 render 函数类型自定义插槽"])}},{prop:"x3",label:"String 插槽",slot:"这是一段 string 类型自定义插槽"},{prop:"x4",label:"VNode 插槽",slot:this.$createElement("el-tag",{},"这是一段 vnode 对象类型自定义插槽")},(e={prop:"x5"},Object(n.a)(e,"prop","name"),Object(n.a)(e,"label","Template 插槽"),Object(n.a)(e,"slot",!0),e),o("slots 属性使用演示 ，自定义组件 Component 的插槽"),{prop:"x6",component:"el-input",label:"子插槽",slots:{prepend:"Http://",append:function(){return t("el-tag",[".com"])}}},{prop:"x7",label:"参数子插槽",component:"el-checkbox",options:["带有","参数","插槽"],slots:{option:function(e){var o=e.option,n=e.index;return t("el-tag",[n,"：",o.label])}}},{component:"el-button",label:"文字插槽",type:"primary",icon:"el-icon-search",slots:"查询"}]}}}},r=o(16),a=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("lomo-form",{staticClass:"demo border",scopedSlots:e._u([{key:"name",fn:function(){return[t("el-tag",[e._v("这是一段 template 类型自定义插槽")])]},proxy:!0}]),model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})}),[],!1,null,null,null);t.default=a.exports}}]);