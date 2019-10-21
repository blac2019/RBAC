<template>
  <div>
    <wy-table ref="table"
              height="500px">
      <wy-table-column label="性别"
                       prop="name"></wy-table-column>
    </wy-table>
  </div>
</template>

<script>
import wy from "@src/library";

export default {
  name: "ModuleB",

  mounted() {
    this.$nextTick().then(() => {
      this.get();
    });
  },

  methods: {
    get() {
      const fetch = wy.service.moduleA.get;
      const params = {};

      this.$refs.table.loadData({ fetch, params });
    }
  }
};
</script>

<style>
</style>