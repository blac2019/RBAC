<template>
  <div class="login">
    <h4>LOGIN PAGE</h4>

    <el-button type="primary"
               @click="login">Login</el-button>
  </div>
</template>

<script>
import wy from "@src/library";

export default {
  name: "Login",

  methods: {
    login() {
      const mockToken = "mock user token";

      wy.cache.set(wy.type.USER.TOKEN, mockToken, wy.type.CACHE.LOCAL);

      this.$router.push(wy.config.SYSTEM.MAIN_PAGE);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>