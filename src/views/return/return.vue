<template>
  <div class="returning">
    <el-card class="box-card">
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="当前退件仓库存"
          name=0
        >
          <el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
          >
            <el-form-item>
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
              <el-table
                border
                style="width: 100%;"
                :data="tableForm"
              >
              <el-table-column
      type="selection"
      width="55">
    </el-table-column>
                <el-table-column
                  prop="platformName"
                  label="平台"
                ></el-table-column>
                <el-table-column
                  prop="shopName"
                  label="店铺名"
                ></el-table-column>
                <el-table-column
                  prop="order_text"
                  label="订单商品信息"
                >
                <template slot-scope="scope">
                  <el-button size="small" type="primary">查看详情</el-button>
                </template>
                </el-table-column>
                <el-table-column
                  prop="orderNum"
                  label="原订单号"
                ></el-table-column>
                <el-table-column
                  prop="transportNum"
                  label="原运单号"
                ></el-table-column>
                <el-table-column
                  label="面单"
                >
                <template slot-scope="scope">
                  <el-button size="small" type="primary">查看面单</el-button>
                </template>
                </el-table-column>
                <el-table-column
                  prop="finishTime"
                  label="退件到仓时间"
                ></el-table-column>
                <el-table-column
                  prop="storagePlace"
                  label="退件存储位置"
                ></el-table-column>
                <el-table-column
                  prop="charge"
                  label="收费"
                ></el-table-column>
                <el-table-column label="操作"></el-table-column>
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
          </el-form>
        </el-tab-pane>
        <el-tab-pane
          label="待仓库处理订单"
          name=2
        >
          <el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
          >
            <el-form-item>
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
              <el-table
                border
                style="width: 100%;"
                :data="tableForm"
              >
                <el-table-column
                  prop="shop_name"
                  label="平台和店铺"
                ></el-table-column>
                <el-table-column
                  prop="order_text"
                  label="订单详情"
                ></el-table-column>
                <el-table-column
                  prop="Waybill_Num"
                  label="原运单号"
                ></el-table-column>
                <el-table-column
                  prop="New_Num"
                  label="新运单号"
                ></el-table-column>
                <el-table-column
                  prop="money"
                  label="收费"
                ></el-table-column>
                <el-table-column label="存储位置"></el-table-column>
                <el-table-column label="状态"></el-table-column>
                <el-table-column label="操作"></el-table-column>
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
          </el-form>
        </el-tab-pane>
        <el-tab-pane
          label="已发货"
          name=3
        >
          <el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
          >
            <el-form-item>
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
            <el-card class="box-card  box-card1">
              <el-table
                border
                style="width: 100%;"
                :data="tableForm"
              >
                <el-table-column
                  prop="end_time"
                  label="退件到仓时间"
                ></el-table-column>
                <el-table-column
                  prop="shop_name"
                  label="平台和店铺"
                ></el-table-column>
                <el-table-column
                  prop="order_text"
                  label="订单详情"
                ></el-table-column>
                <el-table-column
                  prop="Waybill_Num"
                  label="原运单号"
                ></el-table-column>
                <el-table-column
                  prop="New_Num"
                  label="新运单号"
                ></el-table-column>
                <el-table-column
                  prop="money"
                  label="收费"
                ></el-table-column>
                <el-table-column
                  prop="send_time"
                  label="发货时间"
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
          </el-form>
        </el-tab-pane>
        <el-tab-pane
          label="已销毁"
          name=4
        >
          <el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
          >
            <el-form-item>
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
              <el-table
                border
                style="width: 100%;"
                :data="tableForm"
              >
                <el-table-column
                  prop="end_time"
                  label="退件到仓时间"
                ></el-table-column>
                <el-table-column
                  prop="shop_name"
                  label="平台和店铺"
                ></el-table-column>
                <el-table-column
                  prop="order_text"
                  label="订单详情"
                ></el-table-column>
                <el-table-column
                  prop="Waybill_Num"
                  label="原运单号"
                ></el-table-column>
                <el-table-column
                  prop="money"
                  label="收费"
                ></el-table-column>
                <el-table-column
                  prop="ending_time"
                  label="销毁时间"
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
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import { pageInfo } from "@/api/return.js";
export default {
  data() {
    return {
      activeName: 0,
      // 上面行内表单绑定的对象
      formInline: {
        rid: ""
      },
      tableForm: [],
      page: 1,
      limit: 10,
      count: 0
    };
  },
  created(){
    this.pageInfo()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab);
      console.log(event);
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
    pageInfo() {
      let params = {
        page: this.page,
        limit: this.limit,
        type:this.activeName,
        userId: this.$StorageUserId
      };
      pageInfo(params).then(res => {
        console.log(res);
        if (res.code == 1) {
          this.tableForm = res.data;
          this.count = res.count;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.returning {
  margin: 10px 10px 0;

  .box-card {
    margin: 30px;
    .box-card1 {
      margin: 0;
    }
  }
}
.el-table .cell,
.el-table th > .cell {
  text-align: center;
}
.el-pagination {
  text-align: right;
  margin-top: 16px;
}
</style>
