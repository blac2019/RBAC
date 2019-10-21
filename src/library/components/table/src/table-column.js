import { TableColumn } from 'element-ui'

const ExtendTableColumnProps = {
  align: {
    type: String,
    default() {
      return 'center'
    }
  },

  'show-overflow-tooltip': {
    type: Boolean,
    default() {
      return false
    }
  }
}

export default {
  name: 'wy-table-column',

  props: {
    ...TableColumn.props,

    ...ExtendTableColumnProps
  },

  render(h) {
    return h(TableColumn, {
      // 扩展 props
      props: this.$props,

      // 扩展 attrs
      attrs: this.$attrs,

      // 扩展 listeners
      on: this.$listeners,

      // 扩展 slots
      scopedSlots: this.$scopedSlots
    })
  }
}
