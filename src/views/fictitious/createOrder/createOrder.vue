<template>
  <div class="order">
    <el-card class="box-card">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <el-button type="warning">创建订单</el-button>
            </el-form-item>
            <el-form-item :inline="true" :model="formInline" class="demo-form-inline">
              <el-input placeholder="请输入运单号或订单号"  v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="warning">搜索</el-button>
            </el-form-item>
          </el-form>
    </el-card>
    <!-- 下面卡片 -->
    <el-card class="box-card">
      <el-table border style="width: 100%;" :data="tableForm">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="shop_name" label="平台和店铺"></el-table-column>
        <el-table-column prop="order_text" label="订单详情"></el-table-column>
        <el-table-column prop="order_id" label="系统订单ID号"></el-table-column>
        <el-table-column prop="order_Num" label="订单号"></el-table-column>
        <el-table-column prop="Waybill_Num" label="运单号"></el-table-column>
        <el-table-column prop="push_time" label="推送时间"></el-table-column>
        <el-table-column prop="sheet" label="面单"></el-table-column>
        <el-table-column prop="surplus" label="发货剩余"></el-table-column>
        <el-table-column  label="操作"></el-table-column>
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
        rid:""
      },
      tableForm:[
        {
          shop_name:'云仓一号',
          order_text:'XXXX',
          order_id:'001',
          order_Num:'001',
          Waybill_Num:'20200816001',
          email_Num:'20200816000001',
          push_time:'2020/08/15',
          sheet:'面单',
          surplus:'24',
        },
        {
          shop_name:'云仓一号',
          order_text:'XXXX',
          order_id:'001',
          order_Num:'001',
          Waybill_Num:'20200816001',
          email_Num:'20200816000001',
          push_time:'2020/08/15',
          sheet:'面单',
          surplus:'24',
        },
        {
          shop_name:'云仓一号',
          order_text:'XXXX',
          order_id:'001',
          order_Num:'001',
          Waybill_Num:'20200816001',
          email_Num:'20200816000001',
          push_time:'2020/08/15',
          sheet:'面单',
          surplus:'24',
        }
      ]
    }
  },
};
</script>

<style lang="scss">
.order {
  margin: 10px 10px 0;

  .box-card {
    margin: 10px 30px;
    
  }
}
.el-table .cell,
.el-table th>.cell{
    text-align: center;
}
</style>