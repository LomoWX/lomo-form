<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div className="lomo-form-inline">
    <template v-for="(row,rowIndex) in dynamicData">
      <slot name="prepend" v-bind="{row,rowIndex}"></slot>
      <lomo-form-item v-for="(item,colIndex) in lmItems" :key="row._key_+item.prop"
                      v-if="getVif({item,colIndex,row,rowIndex})"
                      v-show="getVshow({item,colIndex,row,rowIndex})"
                      v-bind="getFormItemAttrs({item,colIndex,row,rowIndex})"
                      :component="getComponentAttrs({item,colIndex,row,rowIndex})"/>
      <slot name="append" v-bind="{row,rowIndex}"></slot>
    </template>
  </div>
</template>

<script>
import itemsMinxin from "../utils/itemsMixin";

export default {
  name: "lomo-form-inline",
  mixins: [itemsMinxin],
  inheritAttrs: false,
};
</script>

<style  lang='scss' scoped>
.lomo-form-inline {
  display: inline-block;
  .el-form-item {
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
  }
  .el-form-item__label-wrap {
    margin-left: 0px !important;
  }
  .el-form-item__content {
    display: inline-block;
    margin-left: 0px !important;
  }

}
</style>
