import Table from "./src/table";
import TableColumn from "./src/table-column";
import Pagination from "./src/pagination";

Table.install = function(Vue) {
  Vue.component(Table.name, Table);
  Vue.component(TableColumn.name, TableColumn);
  Vue.component(Pagination.name, Pagination);
};

export default Table;
