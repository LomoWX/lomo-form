<template>
  <el-table class="lomo-form-tableditor" ref="elTable" :value="undefined" :data="dynamicData" v-bind="$attrs" :border="border" v-on="$listeners">
    <slot name="prepend"></slot>
    <el-table-column v-for="(item,colIndex) in lmItems" v-if="getVif({item,colIndex})" v-bind="getLayoutItemAttrs(item)" label="" :key="item.prop">
      <template v-slot:header="scope">
        <render-component v-if="item.label" :render="item.label" :class="getRequiredAsteriskClass(item,scope.$index)" slot="header" />
      </template>
      <template v-slot:default="scope">
        <lomo-form-item  v-show="getVshow({item,colIndex,row:scope.row,rowIndex:scope.$index})" label="" label-width="0px" :key="scope.row._key_" v-bind="getFormItemAttrs({item,colIndex,row:scope.row,rowIndex:scope.$index})" :component="getComponentAttrs({item,colIndex,row:scope.row,rowIndex:scope.$index})" />
      </template>
    </el-table-column>
    <slot name="append"></slot>
  </el-table>
</template>
<script>
import itemsMinxin from "../utils/itemsMixin";
import renderComponent from "./render-component";
import { tableColumnPropKeys } from "../utils/const";

/**
 *
 **/
export default {
  name: "lomo-form-tableditor",
  mixins: [itemsMinxin],
  inheritAttrs: false,
  components: {
    renderComponent,
  },
  props: {
    border: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      tableditor: this,
    };
  },
  // 定义变量
  data() {
    return {
      layoutItemKeys: tableColumnPropKeys,
    }
  },
  // 计算属性 当里面的数据发生变化时，会自动触发重新计算
  computed: {},
  // 方法集合
  methods: {
    validateRow(index, callback) {
      let props = this.lmItems.map((v) => this.getFormItemProp(v, index));
      let ok = true;
      this.elForm.validateField(props, (errMsg) => {
        if (errMsg) ok = false;
      });
      ok && callback && callback();
    },
  },
  install(vue) {
    vue.component(this.name, this);
  },
  // 挂载完成（可以访问DOM元素）
  mounted() {
  },
}
</script>

<style lang='scss' scoped>
.lomo-form-tableditor {
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner,
  .el-select,
  .el-cascader,
  .el-input-number,
  .el-autocomplete {
    width: 100%;
  }
  .el-form-item__content {
    line-height: inherit;
    font-size: inherit;
  }
  .el-form-item {
    margin-bottom: 0px;
  }
  .el-form-item__error {
    position: inherit;
  }
  .lomo-required-label:before {
    content: "*";
    color: #f56c6c;
    margin-right: 4px;
  }
}

</style>
