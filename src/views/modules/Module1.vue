<template>
  <div>
    <wy-table ref="table" height="500px">
      <wy-table-column label="姓名" prop="name"></wy-table-column>
    </wy-table>
  </div>
</template>

<script>
import wy from '@src/library'

export default {
  name: 'ModuleA',

  mounted() {
    this.$nextTick().then(() => {
      this.get()
    })
  },

  methods: {
    get() {
      const fetch = wy.service.moduleA.get
      const params = {}

      this.$refs.table.loadData({ fetch, params })
    }
  }
}
</script>

<style>
</style>