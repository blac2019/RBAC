<template>
  <div class="layout-header">
    <div class="layout-header-control"
         @click="collapse">
      <i class="el-icon-s-operation"></i>
    </div>
    <div class="layout-header-user">
      <span>User</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutHeader",

  methods: {
    collapse() {
      this.$store.commit("layout/setCollapse", !this.$store.state.layout.collapse);
    }
  }
};
</script>

<style lang="scss" scoped>
.layout-header {
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  display: flex;
  justify-content: space-between;

  .layout-header-control {
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      background: $--border-color-base;
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    i {
      font-size: 24px;
      margin: 0 20px;
    }
  }

  .layout-header-user {
    height: 100%;

    display: flex;
    align-items: center;
    margin: 0 20px;
  }
}
</style>