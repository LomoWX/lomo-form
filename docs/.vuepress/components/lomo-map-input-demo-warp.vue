<template>
  <lomoMapInputDemo v-if="load"></lomoMapInputDemo>
</template>

<script>
import lomoMapInputDemo from "./lomo-map-input-demo.vue";
export default {
  components: {
    lomoMapInputDemo,
  },
  data() {
    return {
      load: false,
    };
  },
  mounted() {
    import("@amap/amap-jsapi-loader").then((module) => {
      const AMapLoader = module.default;
      window._AMapSecurityConfig = {
        securityJsCode: "37c6baee599002d347756e3d1277246c",
      };
      AMapLoader.load({
        key: "56f6a360f541889552ce0aea6469a3e3",
        plugins: ["AMap.PlaceSearch", "AMap.Autocomplete", "AMap.Geocoder"],
      }).then((AMap) => {
        window.AMap = AMap;
        this.load = true;
      });
    });
  },
};
</script>

<style>
</style>
