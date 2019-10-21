<template>
  <div class="not-found">
    <h1>404 ， 暂无权限访问</h1>

    <br />
    <el-button type="primary" @click="goLogin()">go login</el-button>
  </div>
</template>

<script>
import wy from "@src/library";

export default {
  name: "NotFound",

  methods: {
    goLogin() {
      this.$router.push(wy.config.SYSTEM.LOGIN_PAGE);
    }
  }
};
</script>

<style lang="scss" scoped>
.not-found {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>