<template>
  <div class="layout-header">
    <div class="layout-header-control"></div>
    <div class="layout-header-user">
      <span>User</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader'
}
</script>

<style lang="scss" scoped>
.layout-header {
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  display: flex;
  justify-content: space-between;

  .layout-header-user {
    height: 100%;

    display: flex;
    align-items: center;
    margin: 0 20px;
  }
}
</style>