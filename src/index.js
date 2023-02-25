// 表单以及布局组件
import lomoForm from "./form/lomo-form.js";
import lomoFormItem from "./form/lomo-form-item.vue";
import lomoFormGrid from "./form/lomo-form-grid.vue";
import lomoFormInline from "./form/lomo-form-inline.vue";
import lomoFormDescriptions from "./form/lomo-form-descriptions.vue";
import lomoFormTableditor from "./form/lomo-form-tableditor.vue";
import tableditorMenuColumn from "./form/tableditor-menu-column.vue"

// 其他组件
// import lomoSearchPanel from "./form/lomo-search-panel.vue";
// import lomoFormDialog from "./form/lomo-form-dialog.vue";
// 表单子组件
import lomoRadio from "./lib/lomo-radio.vue";
import lomoCheckbox from "./lib/lomo-checkbox.vue";
import lomoSelect from "./lib/lomo-select.vue";
import lomoUpload from "./lib/lomo-upload.vue";
import lomoTreeSelect from "./lib/lomo-tree-select.vue";
import lomoText from "./lib/lomo-text.js";
// import lomoMapInput from "./lib/lomo-map-input.vue";
// import lomoDynamicTags from "./lib/lomo-dynamic-tags.vue";


// 核心组件
const coreComponents = [
  lomoForm,
  lomoFormItem,
  lomoFormInline,
  lomoFormGrid,
  lomoFormTableditor,
  lomoFormDescriptions,
  lomoRadio,
  lomoCheckbox,
  lomoSelect,
  lomoTreeSelect,
  lomoUpload,
  lomoText,
]

lomoForm.install = function (vue, opts = {}) {
  vue.prototype.$lomoFormConfig = opts;
  coreComponents.forEach(component => {
    vue.component(component.name, component);
  })
}

export default lomoForm;

export {
//   // 核心组件
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
  lomoText,
  // 其他组件按需引入
  // lomoDynamicTags,
  // lomoMapInput,
  // lomoSearchPanel,
  // lomoFormDialog,
  tableditorMenuColumn,
}
