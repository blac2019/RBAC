<template>
  <div class="layout-footer">
    <div class="layout-description">
      <a>关于我们</a>
    </div>
    <div class="layout-copyright">
      <span>Copyright</span>
      <span>@</span>
      <span>{{ new Date().getFullYear() }} Design & Color</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutFooter'
}
</script>

<style lang="scss" scoped>
.layout-footer {
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .layout-description {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    margin: 0 0 10px 0;
  }

  .layout-copyright {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    margin: 0 0 10px 0;
  }
}
</style>