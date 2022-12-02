# 如何二次封装组件

:::tip
 `lomo-form` 组件可以灵活搭配第三方或者自定义的组件进行使用，很棒的一点是它不会对你自定义组件产生额外的负担和规则，下面是一个自定义二次封装组件的简单教程。
:::

例子以简单二次封装 `el-select` 组件为例子：

1. 第一步：创建 .vue 文件，设置一个基础模板，定义好 `props`，建议 `inheritAttrs` 设置为 `false`。

```html
<template>
</template>

<script>
export default {
  name: "custom-select",
  inheritAttrs: false,
  props: {
    value: [String, Number, Array],
    options: Array,
  },
  install(vue) {
    vue.component(this.name, this);
  },
};
</script>

```

2. 第二步：绑定 `value`，挂载动态属性 [$attrs](https://cn.vuejs.org/v2/api/#vm-attrs), 绑定动态事件 [$listeners](https://cn.vuejs.org/v2/api/#vm-listeners)，写自定义模板逻辑。

```html{2-5}
<template>
  <el-select :value="value" v-bind="$attrs" v-on="$listeners">
    <el-option v-for="option of options" :key="option.label" :label="option.label" :value="option.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "custom-select",
  inheritAttrs: false,
  props: {
    value: [String, Number, Array],
    options: Array,
  },
  install(vue) {
    vue.component(this.name, this);
  },
};
</script>
```

3. 第三步：根据需要，添加插槽，一个简单的二次封装组件就大功告成了！

<<< @/docs/.vuepress/components/custom-select.vue{5-7}

4. 第四步：注册到全局，配合 `lomo-form` 使用。


```js
import Vue from 'vue';
import customSelect from "@/components/customSelect"

Vue.use(customSelect);
```

<<< @/docs/.vuepress/components/custom-select-form.vue


<ClientOnly><custom-select-form/></ClientOnly>



感谢看到这里，这里有所有演示用的[源码](https://github.com/agrass-GitHub/lomo-form/tree/master/docs/.vuepress/components)。
