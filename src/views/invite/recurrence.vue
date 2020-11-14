<template>
  <div class="recurrence">
    <el-card class="box-card clearfix">
      <h2>申请返现</h2>
      <div class="info">
        <ul class="clearfix">
          <li>支付宝姓名：{{formInline.zfbName}}</li>
          <li>支付宝账号：{{formInline.zfbAccount}}</li>
          <li>手机号码：  {{formInline.phone}}</li>
          <li>未返现余额：{{formInline.commissionAmount}}</li>
          <li>已返现余额：{{formInline.returnAmount}}</li>
        </ul>
      </div>
      <div class="btn">
        <el-button type="primary">申请返现</el-button>
      </div>
    </el-card>
    <!-- 下面卡片 -->
    <el-card class="box-card">
      <el-table
        border
        style="width: 100%;"
        :data="tableForm"
      >
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column
          prop="applyNumber"
          label="申请编码"
        ></el-table-column>
        <el-table-column
          prop="applyMoney"
          label="申请返现金额"
        ></el-table-column>
        <el-table-column
          prop="createTime"
          label="申请时间"
        ></el-table-column>
        <el-table-column
          prop="status"
          label="状态"
        ></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <span v-if="scope.row.status === 0">审核中</span>
            <span v-if="scope.row.status === 1">已返现</span>
            <span v-if="scope.row.status === 2">驳回</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="note"
          label="备注"
        ></el-table-column>
        <el-table-column
          prop="payTime"
          label="返现时间"
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
// import {accountInfo,applyReturnMoney,pageInfo} from '@/api/invite.js'
import {accountInfo,pageInfo} from '@/api/invite.js'
import qs from 'qs'
export default {
  data() {
    return {
      // 上面行内表单绑定的对象
      formInline: {},
      tableForm: [],
      page: 1,
      limit: 10,
      count: 0,
    };
  },
  created(){
    this.accountInfo()
    this.pageInfo()
  },
  methods:{
    //获取账户信息
    accountInfo(){
      let params = {
        userId:this.$store.state.user.userId
      }
      accountInfo(params).then(res=>{
        console.log(res)
        if(res.code==1){
          this.formInline = res.data
        }
      })
    },
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
    pageInfo(){
      let params = {
        page:this.page,
        limit:this.limit,
        userId:this.$store.state.user.userId,
      }
      pageInfo(params).then(res=>{
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
