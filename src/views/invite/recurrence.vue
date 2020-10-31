<template>
  <div class="recurrence">
    <el-card class="box-card clearfix">
      <h2>申请返现</h2>
      <div class="info">
        <ul class="clearfix">
          <li>支付宝姓名：张三</li>
          <li>支付宝账号：15888888888</li>
          <li>手机号码：15888888888</li>
          <li>未返现余额：300</li>
          <li>已返现余额：120</li>
        </ul>
      </div>
      <div class="btn">
        <el-button type="warning">申请返现</el-button>
      </div>
    </el-card>
    <!-- 下面卡片 -->
    <el-card class="box-card">
      <el-table
        border
        style="width: 100%;"
        :data="tableForm"
      >
        <el-table-column
          prop="NUm"
          label="申请编码"
        ></el-table-column>
        <el-table-column
          prop="price"
          label="申请返现金额"
        ></el-table-column>
        <el-table-column
          prop="TimeFrom"
          label="申请时间"
        ></el-table-column>
        <el-table-column
          prop="status"
          label="状态"
        ></el-table-column>
        <el-table-column
          prop="text"
          label="备注"
        ></el-table-column>
        <el-table-column
          prop="TimeTo"
          label="返现时间"
        ></el-table-column>
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
        emailID: "",
        rid: ""
      },
      tableForm: [
        {
          NUm: "20201030001",
          price: 200,
          TimeFrom: "2020/10/22",
          TimeTo: "2020/10/30",
          status: "已返现",
          text: "已完成",
        },
      ]
    };
  }
};
</script>

<style lang="scss">
li {
  list-style: none; /*清除li自带的.*/
}
.recurrence {
  margin: 10px 10px 0;

  .box-card {
    margin: 30px;
    padding-bottom: 16px;
    .info {
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .btn {
      float: right;
    }
  }
}
.el-table .cell,
.el-table th > .cell {
  text-align: center;
}
/*清除浮动的影响*/
.clearfix::after {
  content: "";
  display: block; /*块级*/
  clear: both; /*清除浮动的影响*/
  height: 0;
  visibility: hidden;
}
.clearfix {
  *zoom: 1;
}
</style>