import { Dialog } from 'element-ui'

const ExtendDialogProps = {
  top: {
    type: String,
    default() {
      return '10vh'
    }
  },

  'close-on-click-modal': {
    type: Boolean,
    default() {
      return false
    }
  },

  width: {
    type: String,
    default() {
      return '600px'
    }
  }
}

export default {
  name: 'wy-dialog',

  props: {
    ...Dialog.props,

    ...ExtendDialogProps
  },

  render(h) {
    return h(
      Dialog,
      {
        // 扩展 props
        props: this.$props,

        // 扩展 attrs
        attrs: this.$attrs,

        // 扩展 listeners
        on: this.$listeners,

        // 扩展 slots
        scopedSlots: this.$scopedSlots
      },
      this.$slots
    )
  }
}
