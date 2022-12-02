<template>
  <div class="lomo-form-grid">
    <el-row ref="elRow" v-bind="rowProps" style="flex-wrap: wrap" v-for="(row,rowIndex) in dynamicData" :key="row._key_">
      <slot name="prepend" v-bind="{row,rowIndex}"></slot>
      <el-col v-for="(item,colIndex) in lmItems"
              v-bind="getLayoutItemAttrs(item)" :key="item.prop"
              v-if="getVif({item,colIndex,row,rowIndex})"
              v-show="getVshow({item,colIndex,row,rowIndex})">
        <lomo-form-item v-bind="getFormItemAttrs({item,colIndex,row,rowIndex})"
                        :component="getComponentAttrs({item,colIndex,row,rowIndex})" />
      </el-col>
      <slot name="append" v-bind="{row,rowIndex}"></slot>
    </el-row>
  </div>
</template>
<script>
import {
  addResizeListener,
  removeResizeListener,
} from "element-ui/src/utils/resize-event";
import itemsMinxin from "../utils/itemsMixin";
import { getIncludeAttrs } from "../utils/utils";
import { rowPropKeys, colPropKeys } from "../utils/const";

/**
 *
 **/
export default {
  name: "lomo-form-grid",
  mixins: [itemsMinxin],
  inheritAttrs: false,
  props: {
    responsive: {
      type: Boolean,
      default: false,
    },
    responsiveMethod: Function,
    type: {
      type: String,
      default: "flex",
    },
    gutter: {
      type: Number,
      default: 15,
    },
    justify: String,
    align: String,
    span: Number,
    offset: Number,
    push: Number,
    pull: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    tag: String,
  },
  // 注册
  components: {},
  // 定义变量
  data() {
    return {
      layoutItemKeys: colPropKeys,
      resizeLayoutProps: {},
    }
  },
  // 计算属性 当里面的数据发生变化时，会自动触发重新计算
  computed: {
    rowProps() {
      return getIncludeAttrs(rowPropKeys, this.$props);
    },
  },
  // 方法集合
  methods: {

    getLayoutItemAttrs(item) {
      const colBaseKeys = ["span", "offset", "push", "pull"];
      const colResponsiveKeys = ["xs", "sm", "md", "lg", "xl"];
      return getIncludeAttrs(
        colBaseKeys.concat(this.responsive ? [] : colResponsiveKeys),
        Object.assign({}, this.$props, this.resizeLayoutProps, item)
      );
    },
    resize() {
      let width = this.getRef("elRow").$el.clientWidth;
      if (!this.responsive || width == 0) return;
      if (this.responsiveMethod) {
        this.resizeLayoutProps = this.responsiveMethod(width);
      } else {
        let span = 24;
        if (width >= 500 && width < 900) span = 12;
        if (width >= 900 && width < 1200) span = 8;
        if (width >= 1200 && width < 1600) span = 6;
        if (width >= 1600) span = 4;
        this.resizeLayoutProps = { span };
      }
      this.$emit("resize", width);
    },

  },
  // 挂载完成（可以访问DOM元素）
  mounted() {
    if (this.responsive) {
      addResizeListener(this.elForm.$el, this.resize);
    }

  },
  beforeDestroy() {
    removeResizeListener(this.elForm.$el, this.resize);
  },
  install(vue) {
    vue.component(this.name, this);
  },

}
</script>

<style lang='scss' scoped>
.lomo-form-grid {
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner,
  .el-select,
  .el-cascader,
  .el-input-number,
  .el-autocomplete {
    width: 100%;
  }
}
</style>
