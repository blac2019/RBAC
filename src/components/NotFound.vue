<template>
  <div class="not-found">
    <p>Welcome to wy</p>
    <el-button type="primary"
               @click="goHome()">go home</el-button>
    <br />
    <el-button type="primary"
               @click="goBack()">go back</el-button>
    <br />
    <el-button type="primary"
               @click="goLogin()">go login</el-button>
  </div>
</template>

<script>
import wy from "@src/library";

export default {
  name: "NotFound",

  methods: {
    goLogin() {
      this.$router.push(wy.config.SYSTEM.LOGIN_PAGE);
    },

    goBack() {
      this.$router.go(-1);
    },

    goHome() {
      this.$router.go(wy.config.SYSTEM.MAIN_PAGE);
    }
  }
};
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>