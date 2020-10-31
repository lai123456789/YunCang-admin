<template>
  <div class="recurrence">
    <!-- 下面卡片 -->
    <el-card class="box-card">
    <h2>充值分佣</h2>
      <el-table
        border
        style="width: 100%;"
        :data="tableForm"
      >
        <el-table-column
          prop="UserName"
          label="充值用户"
        ></el-table-column>
        <el-table-column
          prop="price"
          label="充值金额"
        ></el-table-column>
        <el-table-column
          prop="Num"
          label="充值订单号"
        ></el-table-column>
        <el-table-column
          prop="TimeFrom"
          label="充值时间"
        ></el-table-column>
        <el-table-column
          prop="text"
          label="分佣比例"
        ></el-table-column>
        <el-table-column
          prop="priceTo"
          label="获得返现金额"
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
          UserName:'张三',
          Num: "20201030001",
          price: 200,
          TimeFrom: "2020/10/22",
          priceTo: "120",
          status: "已返现",
          text: "3%",
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