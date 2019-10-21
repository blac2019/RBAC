<template>
  <div class="home">
    <p>Welcome to wy</p>
    <el-button type="primary" @click="goLogin()">go login</el-button>
  </div>
</template>

<script>
import wy from '@src/library'

export default {
  name: 'Home',

  methods: {
    goLogin() {
      this.$router.push(wy.config.SYSTEM.LOGIN_PAGE)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>