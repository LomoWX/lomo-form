<template>
  <div class="demo border">
    <lomo-checkbox v-model="value">选择框</lomo-checkbox>
    <lomo-checkbox v-model="checkbox" :options="options">
      <template v-slot:option="{option}">
        <el-tag>{{option.label}}</el-tag>
      </template>
    </lomo-checkbox>
    <lomo-radio v-model="radio" :options="options"></lomo-radio>

  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      checkbox: "1,2",
      radio: "2",
      options: [
        { label: "多选框", value: "1" },
        { label: "单选框", value: "2" },
      ],
    };
  },
};
</script>
