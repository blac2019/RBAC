<template>
  <el-container class="layout">
    <el-aside :width="$wy.$store.state.layout.collapse ? '60px' : '260px'">
      <LayoutLogo class="layout-logo"></LayoutLogo>
      <LayoutNav class="layout-nav"></LayoutNav>
    </el-aside>
    <el-container class="layout-container">
      <el-header height="64px">
        <LayoutHeader class="layout-container-header"></LayoutHeader>
      </el-header>
      <el-main>
        <LayoutBreadcrumb class="layout-container-breadcrumb"></LayoutBreadcrumb>
        <LayoutContent class="layout-container-main"></LayoutContent>
        <el-footer height="110px">
          <LayoutFooter class="layout-container-footer"></LayoutFooter>
        </el-footer>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutNav from "./LayoutNav";
import LayoutHeader from "./LayoutHeader";
import LayoutLogo from "./LayoutLogo";
import LayoutBreadcrumb from "./LayoutBreadcrumb";
import LayoutContent from "./LayoutContent";
import LayoutFooter from "./LayoutFooter";

export default {
  name: "Layout",

  components: {
    LayoutNav,
    LayoutLogo,
    LayoutHeader,
    LayoutBreadcrumb,
    LayoutContent,
    LayoutFooter
  }
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  background: #f0f2f5;

  .el-header,
  .el-container,
  .el-aside,
  .el-main,
  .el-footer {
    padding: 0;
    margin: 0;
  }

  .el-aside {
    display: flex;
    flex-direction: column;

    .layout-logo {
      position: relative;
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

      height: 64px;
      background: #002140;
    }
    .layout-nav {
      position: relative;
      flex: 1;
      background: #001529;
    }
  }

  .el-main {
    display: flex;
    flex-direction: column;
  }

  .layout-container {
    .layout-container-header {
      position: relative;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

      height: 64px;
    }

    .layout-container-breadcrumb {
      height: 140px;
      min-height: 140px;
      padding: 16px 32px 0;
    }

    .layout-container-main {
      flex: 1;
      padding: 24px 24px 0 24px;
      border-radius: 5px 5px 0 0;
    }
  }

  .layout-content-body-app {
    height: 100%;
  }

  .layout-content-body {
    padding: 20px 0 0 20px;
  }
}
</style>