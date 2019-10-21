<template>
  <div class="layout-breadcrumb">
    <div class="layout-breadcrumb-header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="layout-breadcrumb-content">
      <div class="layout-breadcrumb-content-left">
        <el-image
          style="width: 60px; height: 60px; margin: 0 16px 0 0; border-radius: 50%;"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        ></el-image>

        <div>
          <h4>晚上好，天野远子，我猜你可能累了</h4>
          <h4>前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台</h4>
        </div>
      </div>
      <div class="layout-breadcrumb-content-right">
        <div>
          <p>Total</p>
          <p>123</p>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div>
          <p>Total</p>
          <p>123</p>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div>
          <p>Total</p>
          <p>123</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.layout-breadcrumb {
  display: flex;
  flex-direction: column;

  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  padding: 10px;

  .layout-breadcrumb-header {
    margin: 0 0 8px 0;
  }

  .layout-breadcrumb-content {
    flex: 1;
    display: flex;

    justify-content: space-between;
    align-items: center;

    .layout-breadcrumb-content-left {
      display: flex;
      align-items: center;

      img {
        border-radius: 50%;
      }
    }

    .layout-breadcrumb-content-right {
      display: flex;
    }
  }
}
</style>