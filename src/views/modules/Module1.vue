<template>
  <div class="module-1">
    <el-form :model="model" label-width="100px" inline @keyup.enter.native.prevent="get">
      <el-form-item label="姓名">
        <el-input v-model="model.name" placeholder></el-input>
      </el-form-item>

      <el-form-item label="性别">
        <el-select v-model="model.gender" placeholder>
          <el-option v-for="item in source.gender" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label=" ">
        <el-button type="primary" icon="el-icon-search" @click="get">Search</el-button>
      </el-form-item>
    </el-form>

    <wy-table ref="table">
      <wy-table-column label="用户姓名" prop="name"></wy-table-column>
      <wy-table-column label="手机号码" prop="telphone"></wy-table-column>
      <wy-table-column label="科室名称" prop="departmentName"></wy-table-column>
      <wy-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-view" @click="showDetail(scope.row)">Detail</el-button>
          <el-button type="text" icon="el-icon-edit" @click="showEdit(scope.row)">Edit</el-button>
          <el-button type="text" icon="el-icon-edit" @click="showDelete(scope.row)">Delete</el-button>
        </template>
      </wy-table-column>
    </wy-table>

    <wy-dialog :title="dialog.title" :visible.sync="dialog.visible" v-drag width="400px">
      <template v-if="dialog.action === '详情'">
        <el-form :model="dialog.data" label-width="100px">
          <el-form-item label="用户姓名">{{ dialog.data.name }}</el-form-item>
          <el-form-item label="性别">{{ dialog.data.gender }}</el-form-item>
          <el-form-item label="手机号码">{{ dialog.data.telphone }}</el-form-item>
          <el-form-item label="科室名称">{{ dialog.data.departmentName }}</el-form-item>
        </el-form>
      </template>

      <template v-else>
        <el-form :model="dialog.data" label-width="100px">
          <el-form-item label="用户姓名">
            <el-input v-model="dialog.data.name" placeholder></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="dialog.data.gender" placeholder>
              <el-option v-for="item in source.gender" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label=" ">
            <el-button icon="el-icon-refresh-right" @click="closeDialog">取消</el-button>
            <el-button type="primary" icon="el-icon-check" @click="save">保存</el-button>
          </el-form-item>
        </el-form>
      </template>
    </wy-dialog>
  </div>
</template>

<script>
import wy from "@src/library";

export default {
  name: "ModuleA",

  data() {
    return {
      model: {
        name: "",
        gender: ""
      },

      dialog: {
        action: "",
        visible: false,
        title: "",
        data: {
          name: "",
          gender: ""
        }
      },

      source: {
        gender: [
          { label: "全部", value: "" },
          { label: "男", value: 0 },
          { label: "女", value: 1 },
          { label: "未说明", value: 99 }
        ]
      }
    };
  },

  mounted() {
    this.$nextTick().then(() => {
      this.get();
    });
  },

  methods: {
    get() {
      const fetch = wy.service.moduleA.get;
      const params = {};

      this.$refs.table.loadData({
        fetch,
        params
      });
    },

    showEdit(row) {
      this.dialog.action = "编辑";
      this.dialog.title = `${row.name} - 编辑`;
      this.dialog.visible = true;

      this.$nextTick().then(() => {
        this.dialog.data = row;
      });
    },

    showDetail(row) {
      this.dialog.action = "详情";
      this.dialog.title = `${row.name} - 详情`;
      this.dialog.visible = true;

      this.$nextTick().then(() => {
        this.dialog.data = row;
      });
    },

    closeDialog() {
      this.dialog.visible = false;
      this.dialog.action = "";
      this.dialog.title = "";
      this.dialog.data = {};
    },

    showDelete(row) {
      wy.util.confirm({
        message: `确定删除${row.name}吗 ？`,
        type: "warning",
        confirmCallBack() {
          wy.util.alert("删除成功");
        }
      });
    },

    save(row) {
      wy.service.moduleA.put(row).then(() => {
        wy.util.alert("修改成功");

        this.closeDialog();
        this.get();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.module-1 {
}
</style>