<template>
  <div class="layout-nav">
    <el-menu unique-opened
             default-active="2"
             background-color="#000c17"
             text-color="#fff"
             active-text-color="#fff">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-4">选项4</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航三</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-4">选项4</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "LayoutNav"
};
</script>

<style lang="scss" scoped>
.layout-nav {
  background-color: #fff;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

  /deep/ .el-menu {
    border: 0;

    .el-submenu__title,
    .el-menu-item {
      background: #001529 !important;
    }

    .el-submenu {
      .el-menu-item {
        background: #000c17 !important;
      }
    }

    .el-menu-item {
      &.is-active {
        background: #2f54eb !important;
      }
    }
  }
}
</style>