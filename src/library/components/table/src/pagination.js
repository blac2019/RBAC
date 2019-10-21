import { Pagination } from "element-ui";

const ExtendPaginationProps = {
  background: {
    type: Boolean,
    default() {
      return true;
    }
  }
};

export default {
  name: "wy-pagination",

  props: {
    ...Pagination.props,

    ...ExtendPaginationProps
  },

  data() {
    return {
      internalPageSize: this.pageSize,
      internalCurrentPage: this.currentPage,
      internalPageSizes: this.pageSizes,
      internalTotal: this.total,
      internalLayout: this.layout
    };
  },

  methods: {
    internalSizeChange(currentPageSize) {
      this.internalPageSize = currentPageSize;

      return this.$parent.loadData();
    },

    internalCurrentChange(currentPage) {
      this.internalCurrentPage = currentPage;

      return this.$parent.loadData();
    }
  },

  render(h) {
    return h(Pagination, {
      // 扩展 props
      props: Object.assign({}, this.$props, {
        currentPage: this.internalCurrentPage,
        pageSize: this.internalPageSize,
        pageSizes: this.internalPageSizes,
        total: this.internalTotal,
        layout: this.internalLayout
      }),

      // 扩展 attrs
      attrs: this.$attrs,

      // 扩展 listeners
      on: Object.assign(
        {},
        {
          "size-change": this.internalSizeChange,
          "current-change": this.internalCurrentChange
        },
        this.$listeners
      ),

      // 扩展 slots
      scopedSlots: this.$scopedSlots
    });
  }
};
