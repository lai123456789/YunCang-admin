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
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column
          prop="rechargeUserName"
          label="充值用户"
        ></el-table-column>
        <el-table-column
          prop="money"
          label="充值金额"
        ></el-table-column>
        <el-table-column
          prop="orderNumber"
          label="充值订单号"
        ></el-table-column>
        <el-table-column
          prop="payTime"
          label="充值时间"
        ></el-table-column>
        <el-table-column
          prop="commissionPercentage"
          label="分佣比例"
        ></el-table-column>
        <el-table-column
          prop="commissionMoney"
          label="获得返现金额"
        ></el-table-column>
      </el-table>

      <el-pagination
        background
        @size-change="sizeChanged"
        @current-change="pageChange"
        :current-page="page"
        :page-sizes="[ 10, 20, 30, 40,50]"
        :page-size="limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count"
      ></el-pagination>
    </el-card>
  </div>
</template>
<script>

import { CommissionAmount } from '@/api/invite.js'
export default {
  data() {
    return {
      tableForm: [],
      page: 1,
      limit: 10,
      count: 0,
    };
  },
  created(){
    this.CommissionAmount()
  },
  methods:{
    sizeChanged(limit) {
      this.limit = limit;
      this.page = 1;
      this.getList();
    },

    pageChange(page) {
      this.page = page;
      this.getList();
    },
    //获取分页
    CommissionAmount(){
      let params = {
        page:this.page,
        limit:this.limit,
        userId:this.$StorageUserId,
      }
      CommissionAmount(params).then(res=>{
        if(res.code==1){
          console.log(res)
          this.tableForm = res.data;
          this.count = res.count
        }
      })
    }
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
.el-pagination{
  text-align: right;
  margin-top: 16px;
}
</style>