<template>
  <div class="pengding">
    <el-card class="box-card">
          <el-form :inline="true" class="demo-form-inline"  :model="formInline">
            <el-form-item>
              <el-input placeholder="请输入国内物流单号搜索" v-model="formInline.emailID" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="warning">搜索</el-button>
            </el-form-item>
          </el-form>
    </el-card>
    <!-- 下面卡片 -->
    <el-card class="box-card">
      <el-table border style="width: 100%;">
        <el-table-column label="虚拟仓订单创建时间"></el-table-column>
        <el-table-column label="平台和店铺"></el-table-column>
        <el-table-column label="订单详情"></el-table-column>
        <el-table-column label="国内物流单号"></el-table-column>
        <el-table-column label="订单号"></el-table-column>
        <el-table-column label="运单号"></el-table-column>
        <el-table-column label="面单"></el-table-column>
        <el-table-column label="是否代打单"></el-table-column>
        <el-table-column label="备注"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
 data() {
    return {
      // 上面行内表单绑定的对象
      formInline: {
        emailID:"",
        rid:""
      },
    }
  },
};
</script>

<style lang="scss">
.pengding {
  margin: 10px 10px 0;

  .box-card {
    margin: 30px;
    
  }
}
.el-table th > .cell {
  text-align: center;
}
</style>