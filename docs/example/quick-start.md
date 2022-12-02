# 快速开始

## 安装

`npm install lomo-form --save # yarn add lomo-form` 

## 引用

若是完整引入 `Element-UI`，可直接导入组件进行开发使用；

若是按需引入 `Element-UI`，至少需要全局引入 `Form, FormItem, Row, Col, Input` 五个表单组件。

```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lomoForm from 'lomo-form';

const formConfig = {};

Vue.use(ElementUI);
Vue.use(lomoForm,formConfig);
```

`Vue.use(lomoForm)` 默认会注册所有核心组件到全局，无需再单独引入，组件列表如下：

```js
const coreComponents = [
  lomoForm, 
  lomoFormItem,
  lomoFormGrid, 
  lomoFormInline,
  lomoFormTableditor,
  lomoFormDescriptions,
  lomoRadio,
  lomoCheckbox, 
  lomoSelect,
  lomoTreeSelect,
  lomoUpload,
  lomoText
]
```


### 引用其他单组件

你也可以根据需求，按需引入其他单组件到项目进行开发使用。

```js
import {
  // 核心组件
  lomoForm,
  // 其他组件按需引入
  lomoMapInput,
  lomoDynamicTags,
  lomoSearchPanel,
  lomoFormDialog,
  tableditorMenuColumn,
} from "lomo-form";
```

## 全局配置

支持全局属性，配置将被继承到每个表单上和子组件上，子组件配置需函数返回; `defaultValue` 只有在全局配置生效。


```js
import lomoForm from "lomo-form";

const formConfig = {
  // 设置所有表单
  form:{
    labelWidth:"auto",
  },
  // 设置日期组件的格式化  
  "el-date-picker": function (item) {
    if (item.type == undefined || item.type == 'date' || item.type == "daterange") {
      return { valueFormat: "yyyy-MM-dd" }
    }
    if (item.type == "datetime" || item.type == "datetimerange") {
      return { valueFormat: "yyyy-MM-dd HH:mm:ss" }
    }
    if (item.type == "month" || item.type == "monthrange") {
      return { valueFormat: "yyyy-MM" }
    }
    if (item.type == "year") {
      return { valueFormat: "yyyy" }
    }
  },
  // 为第三方/自定义组件设置组件默认回填初始值
  "xx-array-input": function () {
    return { defaultValue: [] }
  },
}

Vue.use(lomoForm, formConfig);

// use 注册组件 OR component 注册组件

Vue.prototype.$lomoFormConfig = formConfig;
Vue.component('lomo-form', lomoForm);
```
