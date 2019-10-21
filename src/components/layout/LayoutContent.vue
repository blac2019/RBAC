<template>
  <div class="layout-content">
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
export default {
  name: "layout-content"
};
</script>

<style lang="scss" scoped>
.layout-content {
  .router-view {
    border-radius: 8px;
    background: #fff;
    padding: 16px;
  }
}
</style>