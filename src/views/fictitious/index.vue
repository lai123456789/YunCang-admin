<template>
  <div class="returning">
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="待创建订单" name="first">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
            <el-button type="primary" @click="btn_created">创建订单</el-button>
            </el-form-item>
            <el-form-item :inline="true" :model="formInline" class="demo-form-inline">
                <el-input
                placeholder="请输入运单号或订单号"
                v-model="formInline.rid"
                style="width:200px;"
                suffix-icon="el-icon-search"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">搜索</el-button>
          </el-form-item>
            <!-- 下面卡片 -->
            <el-card class="box-card box-card1">
              <el-table border style="width: 100%;" :data="tableForm">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="shop_name" label="平台和店铺"></el-table-column>
                <el-table-column prop="order_text" label="订单详情"></el-table-column>
                <el-table-column prop="order_id" label="系统订单ID号"></el-table-column>
                <el-table-column prop="order_Num" label="订单号"></el-table-column>
                <el-table-column prop="Waybill_Num" label="运单号"></el-table-column>
                <el-table-column prop="push_time" label="推送时间"></el-table-column>
                <el-table-column prop="sheet" label="面单"></el-table-column>
                <el-table-column prop="surplus" label="发货剩余"></el-table-column>
                <el-table-column label="操作"></el-table-column>
                </el-table>
            </el-card>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="待处理订单" name="second">
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
              <el-button type="primary">搜索</el-button>
            </el-form-item>
          </el-form>
                    <!-- 下面卡片 -->
                    <el-card class="box-card box-card1">
                    <el-table border style="width: 100%;" :data="tableForm">
        <el-table-column  prop="create_time" label="虚拟仓订单创建时间"></el-table-column>
        <el-table-column  prop="shop_name" label="平台和店铺"></el-table-column>
        <el-table-column  prop="order_text" label="订单详情"></el-table-column>
        <el-table-column  prop="email_Num" label="国内物流单号"></el-table-column>
        <el-table-column  prop="order_Num" label="订单号"></el-table-column>
        <el-table-column  prop="Waybill_Num" label="运单号"></el-table-column>
        <el-table-column  prop="sheet" label="面单"></el-table-column>
        <el-table-column  prop="ifsheet" label="是否代打单"></el-table-column>
        <el-table-column  prop="remarks" label="备注"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
                    </el-card>
        </el-tab-pane>
        <el-tab-pane label="已完成订单" name="third">
            <el-form :inline="true" class="demo-form-inline" :model="formInline">
            <el-form-item label="开始日期" >
                <el-date-picker v-model="formInline.create_date" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="结束日期" prop="create_date">
                <el-date-picker v-model="formInline.end_date" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select placeholder="请选择" v-model="formInline.type">
                    <el-option label="不限" value="1"></el-option>
                    <el-option label="中国" value="2"></el-option>
                    <el-option label="泰国" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
            <el-form-item :inline="true" class="demo-form-inline">
              <el-input placeholder="请输入国内物流单号" v-model="formInline.emailID" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
            <el-form-item :inline="true" class="demo-form-inline">
              <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
          </el-form>
                <!-- 下面卡片 -->
                <el-card class="box-card  box-card1">
                <el-table border style="width: 100%;" :data="tableForm">
        <el-table-column prop="create_time" label="虚拟仓订单创建时间"></el-table-column>
        <el-table-column prop="pending_time" label="处理时间"></el-table-column>
        <el-table-column prop="shop_name" label="平台和店铺"></el-table-column>
        <el-table-column prop="order_text" label="订单详情"></el-table-column>
        <el-table-column prop="order_Num" label="订单号"></el-table-column>
        <el-table-column prop="Waybill_Num" label="运单号"></el-table-column>
        <el-table-column prop="email_Num" label="国内物流单号"></el-table-column>
        <el-table-column prop="sheet" label="面单"></el-table-column>
        <el-table-column prop="money" label="收费"></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column prop="intimidate" label="是否代打单"></el-table-column>
      </el-table>
                </el-card>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <el-card v-if="!created_order" class="box-card">
      <el-form ref="createdForm" label-width="200px" :model="createdForm" :rules="rules">
        <!-- 国内物流单号  -->
        <el-form-item label="国内物流单号" prop="emailID">
          <el-input placeholder="请输入国内物流单" v-model="createdForm.emailID" style="width:50%" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 备注  -->
        <el-form-item label="备注">
          <el-input placeholder="复杂贴单包裹记得备注" v-model="createdForm.remark" style="width:50%;" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 是否代打单  -->
        <el-form-item label="是否代打单">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>

        <el-form-item style="text-align: center;">
        <el-button type="primary">立即提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      created_order: true,
      value: true,
      activeName: "first",
      // 上面行内表单绑定的对象
      formInline: {
        emailID:"",
        rid:"",
        create_date:"",
        end_date:"",
        type:"",
      },
      createdForm:{
        emailID:"",
        remark:""
      },
      // 规则对象
      rules:{
        emailID:[{required: true, message: "物流单不能为空", trigger: "blur"}]
      },
      tableForm:[
        {
        create_time:'2020/08/16',
          end_time:'2020/08/16',
          pending_time:'2020/08/16',
          shop_name:'云仓一号',
          order_text:'XXXX',
          Waybill_Num:'20200816001',
          New_Num:'20200817005',
          money:'20',
          ending_time:'2020/08/17',
          send_time:'2020/08/16',
          email_Num:'20200816000001',
          sheet:'面单',
          ifsheet:'是',
          remarks:'已完成',
        },
        {
        create_time:'2020/08/16',
          end_time:'2020/08/16',
          pending_time:'2020/08/16',
          shop_name:'云仓一号',
          order_text:'XXXX',
          Waybill_Num:'20200816001',
          New_Num:'20200817005',
          money:'20',
          ending_time:'2020/08/17',
          send_time:'2020/08/16',
          email_Num:'20200816000001',
          sheet:'面单',
          ifsheet:'是',
          remarks:'已完成',
        },
        {
        create_time:'2020/08/16',
          end_time:'2020/08/16',
          pending_time:'2020/08/16',
          shop_name:'云仓一号',
          order_text:'XXXX',
          Waybill_Num:'20200816001',
          New_Num:'20200817005',
          money:'20',
          ending_time:'2020/08/17',
          send_time:'2020/08/16',
          email_Num:'20200816000001',
          sheet:'面单',
          ifsheet:'是',
          remarks:'已完成',
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab)
        console.log(event)
      // console.log(tab, event);
    },
    btn_created(){
      this.created_order = !this.created_order
    },
  },
};
</script>

<style lang="scss">
.returning {
  margin: 10px 10px 0;

  .box-card {
    margin: 30px;
    .box-card1{
        margin: 0;
    }
  }
}
.el-table .cell,
.el-table th>.cell{
    text-align: center;
}
</style>
