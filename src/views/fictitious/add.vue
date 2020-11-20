<template>
    <div class="add">
        <h2>订单管理</h2>
        <div class="main">
            <h3>创建订单</h3>
            <el-card class="box-card">
      <div class="main">
        <el-form ref="regForm" label-width="200px" :model="form" :rules="rules">

          <el-form-item label="国内物流单号" prop="AliNum">
            <el-input
              v-model="form.AliNumber"
              placeholder="请输入国内物流单号"
              style="width:300px"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="AliNum">
            <el-input
              v-model="form.AliNumber"
              placeholder="复杂贴单包裹记得备注...（选填）"
              style="width:300px"
              type="textarea"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="是否代打单" prop="AliNum">
            <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="选择需要代打单的订单" prop="AliNum">
            <el-input
              v-model="form.AliNumber"
              placeholder="请选择需要待打单的订单"
              style="width:300px"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <!-- 提交按钮  -->
          <el-form-item>
            <el-button type="primary" @click="submit">确认提交</el-button>
            <el-button>取消返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form:{},
            rules:[],
            value:true
        }
    },
};
</script>

<style lang="scss">
.add {
  margin: 30px 30px 0;
  .main {
    background-color: #fff;
    padding: 8px 20px 20px;
  }
}
</style>
