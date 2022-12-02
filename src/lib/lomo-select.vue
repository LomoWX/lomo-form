<template>
  <el-select class="lomo-select" v-loading="optionsLoading" ref="ref" v-bind="$attrs" v-on="$listeners" :value="proxyValue" :multiple="multiple" :loading="isLoading" :loading-text="loadingText" :popperClass="popperClass">
    <template v-slot:prefix>
      <slot name="prefix"></slot>
    </template>
    <template v-slot:empty>
      <slot name="empty"></slot>
    </template>
    <template v-slot:default>
      <slot name="default">
        <div class="filter-item" v-if="filter">
          <el-input v-model="filterText" placeholder="输入关键字进行过滤" size="mini" clearable></el-input>
        </div>
        <el-option class="empty-option" v-if="filter && filterOptions.length==0" :label="filterEmptyText" :value="filterEmptyText" disabled>
        </el-option>
        <template v-if="isGroup">
          <el-option-group v-for="group in filterOptions" :key="group.label" v-bind="getGroupProps(group)">
            <el-option v-for="(option,index) of group.options || [] " :key="option.value" v-bind="getOptionProps(option)">
              <slot name="option" :option="option" :index="index" :group="group"></slot>
            </el-option>
          </el-option-group>
        </template>
        <template v-else>
          <el-option v-for="(option,index) of filterOptions" :key="option.value" v-bind="getOptionProps(option)">
            <slot name="option" :option="option" :index="index"></slot>
          </el-option>
        </template>
      </slot>
    </template>
  </el-select>
</template>
<script>
import optionsMinxin from "../utils/optionsMinxin";
import { getProp, getIncludeAttrs } from "../utils/utils";

const optionPropsKeys = ["value", "label", "disabled", "style", "class"];
const groupPropsKyes = ["label", "disabled", "style", "class"];

/**
 *
 **/
export default {
  name: "lomo-select",
  // 注册
  components: {},
  // 定义变量
  data() {
    return {}
  },
  // 计算属性 当里面的数据发生变化时，会自动触发重新计算
  computed: {},
  // 方法集合
  methods: {},
  // 挂载完成（可以访问DOM元素）
  mounted() {
  },
}
</script>

<style lang='scss' scoped>

</style>
