<template>
  <div class="returning">
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="当前退件仓库存" name="first">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
              <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
            <!-- 下面卡片 -->
            <el-card class="box-card box-card1">
              <el-table border style="width: 100%;">
                <el-table-column  label="退件到仓时间"></el-table-column>
                <el-table-column  label="平台和店铺"></el-table-column>
                <el-table-column  label="订单详情"></el-table-column>
                <el-table-column  label="原运单号"></el-table-column>
                <el-table-column  label="收费"></el-table-column>
                <el-table-column  label="存储位置"></el-table-column>
                <el-table-column  label="操作"></el-table-column>
              </el-table>    
            </el-card>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="待仓库处理订单" name="second">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item>
                    <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
                    </el-form-item>
                    <el-form-item>
                    <el-button type="primary">搜索</el-button>
                    </el-form-item>
                    <!-- 下面卡片 -->
                    <el-card class="box-card box-card1">
                    <el-table border style="width: 100%;">
                        <el-table-column  label="平台和店铺"></el-table-column>
                        <el-table-column  label="订单详情"></el-table-column>
                        <el-table-column  label="原运单号"></el-table-column>
                        <el-table-column  label="新运单号"></el-table-column>
                        <el-table-column  label="收费"></el-table-column>
                        <el-table-column  label="存储位置"></el-table-column>
                        <el-table-column  label="状态"></el-table-column>
                        <el-table-column  label="操作"></el-table-column>
                    </el-table>    
                    </el-card>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="已发货" name="third">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item>
                <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
                </el-form-item>
                <el-form-item>
                <el-button type="primary">搜索</el-button>
                </el-form-item>
                <!-- 下面卡片 -->
                <el-card class="box-card  box-card1">
                <el-table border style="width: 100%;">
                    <el-table-column  label="退件到仓时间"></el-table-column>
                    <el-table-column  label="平台和店铺"></el-table-column>
                    <el-table-column  label="订单详情"></el-table-column>
                    <el-table-column  label="原运单号"></el-table-column>
                    <el-table-column  label="新运单号"></el-table-column>
                    <el-table-column  label="收费"></el-table-column>
                    <el-table-column  label="发货时间"></el-table-column>
                </el-table>    
                </el-card>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="已销毁" name="fourth">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item>
                    <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
                    </el-form-item>
                    <el-form-item>
                    <el-button type="primary">搜索</el-button>
                    </el-form-item>
                    <!-- 下面卡片 -->
                    <el-card class="box-card box-card1">
                    <el-table border style="width: 100%;">
                        <el-table-column  label="退件到仓时间"></el-table-column>
                        <el-table-column  label="平台和店铺"></el-table-column>
                        <el-table-column  label="订单详情"></el-table-column>
                        <el-table-column  label="原运单号"></el-table-column>
                        <el-table-column  label="收费"></el-table-column>
                        <el-table-column  label="销毁时间"></el-table-column>
                    </el-table>    
                    </el-card>
            </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      // 上面行内表单绑定的对象
      formInline: {
        rid:"",
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
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
.el-table th>.cell{
    text-align: center;
}
</style>