<template>
  <div class="layout-header">
    <div class="layout-header-control" @click="collapse">
      <i class="el-icon-s-operation"></i>
    </div>
    <div class="layout-header-user">
      <span>{{ user.name }}</span>
      <el-button type="text" @click="signOut">Sign Out</el-button>
    </div>
  </div>
</template>

<script>
import wy from "@src/library";

export default {
  name: "LayoutHeader",

  data() {
    return {
      user: wy.cache.get(wy.type.USER.INFO)
    };
  },

  methods: {
    collapse() {
      this.$store.commit("layout/setCollapse", !this.$store.state.layout.collapse);
    },

    signOut() {
      // 移除登录信息
      wy.cache.remove(wy.type.USER.TOKEN);
      wy.cache.remove(wy.type.USER.INFO);

      window.location.href = "/";
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