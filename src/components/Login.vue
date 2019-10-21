<template>
  <div class="login">
    <h4 class="login-title">LOGIN PAGE</h4>

    <el-form class="login-form" :model="model">
      <el-form-item label=" ">
        <el-input class="login-form-input" v-model="model.userName" placeholder="user name"></el-input>
      </el-form-item>
      <el-form-item label=" ">
        <el-input class="login-form-input" v-model="model.password" type="password" placeholder="password"></el-input>
      </el-form-item>

      <el-form-item label=" ">
        <el-button class="login-form-submit" type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import wy from "@src/library";
import routeUtil from "@src/router/util";

export default {
  name: "Login",

  data() {
    return {
      model: {
        userName: "",
        password: ""
      }
    };
  },

  methods: {
    login() {
      // Login and get user token
      const mockUserToken = "mock user token";

      // Save
      wy.cache.set(wy.type.USER.TOKEN, mockUserToken, wy.type.CACHE.LOCAL);

      // Render route
      routeUtil.renderRoutes(this.$router);

      // Redirect
      this.$router.push(wy.config.SYSTEM.MAIN_PAGE);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url("~@/assets/images/bg.png");
  background-repeat: no-repeat;
  background-size: 100%;

  .login-title {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 32px;
    margin: 0 0 16px 0;
  }

  .login-form {
    .login-form-input {
      width: 350px;
      height: 40px;

      /deep/ .el-input__inner {
        height: 40px;
        line-height: 40px;
      }
    }

    .login-form-submit {
      height: 40px;
      width: 100%;
    }
  }
}
</style>