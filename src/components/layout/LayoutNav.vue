<template>
  <div class="layout-nav">
    <el-menu
      unique-opened
      :default-active="$route.path.replace('/app/', '')"
      :collapse="$wy.$store.state.layout.collapse"
      background-color="#001529"
      text-color="#fff"
      @select="menuSelect"
    >
      <template v-for="menu in menuTree">
        <el-submenu :key="menu.id" v-if="menu.children" :index="menu.id.toString()">
          <template slot="title">
            <i class="el-icon-s-home"></i>
            <span slot="title">{{ menu.name }}</span>
          </template>

          <el-menu-item
            :index="menuChildren.path"
            :key="menuChildren.id"
            v-for="menuChildren in menu.children"
          >{{ menuChildren.name }}</el-menu-item>
        </el-submenu>

        <el-menu-item v-else :key="menu.id" :index="menu.path">
          <i class="el-icon-s-home"></i>
          <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import wy from "@src/library";

export default {
  name: "LayoutNav",

  data() {
    return {
      menuTree: []
    };
  },

  created() {
    this.renderMenus();
  },

  methods: {
    renderMenus() {
      // Get server data
      const menus = wy.cache.get(wy.type.USER.INFO).menus;
      const menuTree = wy.util.toTree(menus, "id", "parentId", "children");

      this.menuTree = menuTree;
    },

    menuSelect(path) {
      this.$router.push("/app/" + path);
      console.log(arguments);
    }
  }
};
</script>

<style lang="scss" scoped>
.layout-nav {
  background-color: #fff;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

  /deep/ .el-menu {
    border: 0;
  }
}
</style>