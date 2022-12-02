# lomo-form | 使 element-ui form 组件更简单





## 安装使用

`npm install lomo-form --save 

## 介绍

[//]: # ([lomo-form]&#40;https://agrass.gitee.io/lomo-form/&#41; 是基于 [element-ui form]&#40;https://element.eleme.cn/#/zh-CN/component/form&#41; 的二次封装，极简的思想，完全的数据驱动，拥有绝对的灵活性，可以帮助你更快速的开发！up! up! up!)


## 特性

该组件的思想就是以一个 form 对象来做所有的操作，它做了如下事情：

- 支持 element-ui 所有表单组件 attributes 配置
- 支持 element-ui 所有表单组件 events 事件
- 支持 element-ui 所有表单组件 slots 插槽
- 支持 element-ui Row Col 组件布局
- 支持 element-ui Descriptions 组件布局
- 支持 element-ui Table 表单编辑器
- 表单视图查看模式
- 动态增减表单
- 容器宽度自适应布局

[//]: # (- 联动显示隐藏禁用)
- 智能回填 form.data，placeholder，rules
- 全局配置
- 数据化的基础组件
- 灵活自定义组件 / 搭配第三方组件


#### 表单布局组件

[//]: # (- [lomo-form-inline]&#40;https://agrass.gitee.io/lomo-form/component/lomo-form-layout.html&#41; )

[//]: # (- [lomo-form-grid]&#40;https://agrass.gitee.io/lomo-form/component/lomo-form-layout.html&#41; )

[//]: # (- [lomo-form-descriptions]&#40;https://agrass.gitee.io/lomo-form/component/lomo-form-layout.html&#41; )

[//]: # (- [lomo-form-tableditor]&#40;https://agrass.gitee.io/lomo-form/component/lomo-form-layout.html&#41;)

#### 表单子组件

[//]: # (- [lomo-checkbox]&#40;https://agrass.gitee.io/lomo-form/component/lomo-checkbox-radio.html&#41; )

[//]: # (- [lomo-radio]&#40;https://agrass.gitee.io/lomo-form/component/lomo-checkbox-radio.html&#41; )

[//]: # (- [lomo-select]&#40;https://agrass.gitee.io/lomo-form/component/lomo-select.html&#41; )

[//]: # (- [lomo-tree-select]&#40;https://agrass.gitee.io/lomo-form/component/lomo-tree-select.html&#41; )

[//]: # (- [lomo-upload]&#40;https://agrass.gitee.io/lomo-form/component/lomo-upload.html&#41; )

[//]: # (- [lomo-map-input]&#40;https://agrass.gitee.io/lomo-form/component/lomo-map-input.html&#41;)

[//]: # (- [lomo-dynamic-tags]&#40;https://agrass.gitee.io/lomo-form/component/lomo-dynamic-tags.html&#41;  )

#### 其他



## 如此简单

```html
<template>
  <lomo-form v-model="form"></lomo-form>
</template>
 
<script>
export default {
  data() {
    return {
      form: {},
    };
  },
};
</script>
```
