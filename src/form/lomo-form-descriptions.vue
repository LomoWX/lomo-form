<template>
  <div  class="lomo-form-descriptions">
    <el-descriptions ref="ElDescriptions" v-bind="$attrs" :value="undefined" :border="border" v-for="(row,rowIndex) in dynamicData" :key="row._key_">
      <slot name="title" slot="title" v-bind="{row,rowIndex}"></slot>
      <slot name="extra" slot="extra" v-bind="{row,rowIndex}"></slot>
      <slot name="prepend" v-bind="{row,rowIndex}"></slot>
      <el-descriptions-item v-for="(item,colIndex) in lmItems"
                            v-if="getVif({item,colIndex,row,rowIndex})" v-bind="getLayoutItemAttrs(item)" label="" :key="item.prop">
        <render-component v-if="item.label" :render="item.label" :class="getRequiredAsteriskClass(item,rowIndex)" slot="label" />
        <lomo-form-item v-show="getVshow({item,colIndex,row,rowIndex})" label="" label-width="0px" v-bind="getFormItemAttrs({item,colIndex,row,rowIndex})" :component="getComponentAttrs({item,colIndex,row,rowIndex})" />
      </el-descriptions-item>
      <slot name="append" v-bind="{row,rowIndex}"></slot>
    </el-descriptions>
  </div>
</template>
<script>
import itemsMinxin from "../utils/itemsMixin";
import renderComponent from "./render-component";
import { descriptionsItemPropkeys } from "../utils/const";

/**
 *
 **/
export default {
  name: "lomo-form-descriptions",
  mixins: [itemsMinxin],
  inheritAttrs: false,
  // 注册
  components: {
    renderComponent
  },
  props: {
    border: {
      type: Boolean,
      default: true,
    },
  },
  // 定义变量
  data() {
    return {
      layoutItemKeys: descriptionsItemPropkeys,
    }
  },
  // 计算属性 当里面的数据发生变化时，会自动触发重新计算
  computed: {},
  // 方法集合
  methods: {},
  // 挂载完成（可以访问DOM元素）
  mounted() {
  },
  install(vue) {
    vue.component(this.name, this);
  },
}
</script>

<style lang='scss' scoped>
.lomo-form-descriptions {
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
