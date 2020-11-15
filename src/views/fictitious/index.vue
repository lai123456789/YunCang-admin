<template>
  <div class="returning">
    <el-card class="box-card">
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="待创建"
          name=0
        >
          <el-form
            :inline="true"
            class="demo-form-inline"
          >
            <el-form-item>
              <el-input
                v-model="keyword"
                style="width:200px;"
                suffix-icon="el-icon-search"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="search">搜索</el-button>
              <el-button type="primary">创建订单</el-button>
            </el-form-item>
            <!-- 下面卡片 -->
            <el-card class="box-card box-card1">
              <el-table
                border
                style="width: 100%;"
                :data="tableForm"
              >
                <el-table-column
                  prop="orderItemId"
                  label="系统订单ID"
                ></el-table-column>
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
                  width="300"
                >
                  <template slot-scope="scope">

                    <div
                      class="clearfix box"
                      v-for="(item,index) in scope.row.products"
                      :key="index"
                    >
                      <div class="f-left img-box">
                        <img
                          :src="item.headPic"
                          alt=""
                        >
                      </div>
                      <div class="text">
                        <div class="textMain">{{item.name}}</div>
                        <div class="textMain">SKU:{{item.sku}}</div>
                        <div class="clearfix textMain">
                          <span class="f-left">单价：${{item.price}}</span>
                          <span class="f-right">数量：{{item.num}}</span>
                        </div>
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="orderNum"
                  label="订单号"
                ></el-table-column>
                <el-table-column
                  prop="orderPushTime"
                  label="订单推送时间"
                ></el-table-column>
                <el-table-column
                  prop="transportNum"
                  label="运单号"
                ></el-table-column>
                <el-table-column label="面单">
                  <template slot-scope="scope">
                    <a
                      :href="scope.row.faceOrder"
                      target="_blank"
                    >查看面单</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="sendLastDate"
                  label="发货剩余"
                ></el-table-column>
                <el-table-column
                  prop=""
                  label="详情"
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
          label="待处理"
          name=2
        >
          <el-form
            :inline="true"
            class="demo-form-inline"
          >
            <el-form-item>
              <el-input
                v-model="keyword"
                style="width:200px;"
                suffix-icon="el-icon-search"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="search">搜索</el-button>
            </el-form-item>
            <!-- 下面卡片 -->
            <el-card class="box-card box-card1">
              <el-table
                border
                style="width: 100%;"
                :data="tableForm"
              >
                <el-table-column
                  prop="orderItemId"
                  label="系统订单ID"
                ></el-table-column>
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
                  width="300"
                >
                  <template slot-scope="scope">

                    <div
                      class="clearfix box"
                      v-for="(item,index) in scope.row.products"
                      :key="index"
                    >
                      <div class="f-left img-box">
                        <img
                          :src="item.headPic"
                          alt=""
                        >
                      </div>
                      <div class="text">
                        <div class="textMain">{{item.name}}</div>
                        <div class="textMain">SKU:{{item.sku}}</div>
                        <div class="clearfix textMain">
                          <span class="f-left">单价：${{item.price}}</span>
                          <span class="f-right">数量：{{item.num}}</span>
                        </div>
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="orderNum"
                  label="订单号"
                ></el-table-column>
                <el-table-column
                  prop="orderPushTime"
                  label="订单推送时间"
                ></el-table-column>
                <el-table-column
                  prop="transportNum"
                  label="运单号"
                ></el-table-column>
                <el-table-column
                  prop="countryFlowNum"
                  label="国内物流单号"
                ></el-table-column>
                <el-table-column label="面单">
                  <template slot-scope="scope">
                    <a
                      :href="scope.row.faceOrder"
                      target="_blank"
                    >查看面单</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="remark"
                  label="备注"
                ></el-table-column>
                <el-table-column
                  prop=""
                  label="详情"
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
          label="已完成"
          name=3
        >
          <el-form
            :inline="true"
            class="demo-form-inline"
          >
            <el-form-item>
              <el-input
                v-model="keyword"
                style="width:200px;"
                suffix-icon="el-icon-search"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="search">搜索</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">导出表格</el-button>
            </el-form-item>
            <!-- 下面卡片 -->
            <el-card class="box-card box-card1">
              <el-table
                border
                style="width: 100%;"
                :data="tableForm"
              >
                <el-table-column
                  prop="orderItemId"
                  label="系统订单ID"
                ></el-table-column>
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
                  width="300"
                >
                  <template slot-scope="scope">

                    <div
                      class="clearfix box"
                      v-for="(item,index) in scope.row.products"
                      :key="index"
                    >
                      <div class="f-left img-box">
                        <img
                          :src="item.headPic"
                          alt=""
                        >
                      </div>
                      <div class="text">
                        <div class="textMain">{{item.name}}</div>
                        <div class="textMain">SKU:{{item.sku}}</div>
                        <div class="clearfix textMain">
                          <span class="f-left">单价：${{item.price}}</span>
                          <span class="f-right">数量：{{item.num}}</span>
                        </div>
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="orderNum"
                  label="订单号"
                ></el-table-column>
                <el-table-column
                  prop="createdTime"
                  label="虚拟仓订单创建时间"
                ></el-table-column>
                <el-table-column
                  prop="finishTime"
                  label="处理完成时间"
                ></el-table-column>
                <el-table-column
                  prop="transportNum"
                  label="运单号"
                ></el-table-column>
                <el-table-column
                  prop="countryFlowNum"
                  label="国内物流单号"
                ></el-table-column>
                <el-table-column label="面单">
                  <template slot-scope="scope">
                    <a
                      :href="scope.row.faceOrder"
                      target="_blank"
                    >查看面单</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="remark"
                  label="备注"
                ></el-table-column>
                <el-table-column
                  prop="charge"
                  label="收费"
                ></el-table-column>
                <el-table-column
                  prop="switchOrderStatus"
                  label="状态"
                >
                <template slot-scope="scope">
                  <span v-if="scope.row.orderStatus === 1">虚拟仓创建</span>
                  <span v-if="scope.row.orderStatus === 2">虚拟仓处理</span>
                  <span v-if="scope.row.orderStatus === 3">中国仓出货已完成</span>
                  <span v-if="scope.row.orderStatus === 4">退件仓存储</span>
                  <span v-if="scope.row.orderStatus === 5">退件仓待二次发货</span>
                  <span v-if="scope.row.orderStatus === 6">退件仓二次发货</span>
                  <span v-if="scope.row.orderStatus === 7">退件仓待销毁</span>
                  <span v-if="scope.row.orderStatus === 8">退件仓销毁</span>
                  <span v-if="scope.row.orderStatus === 9">退件仓出货</span>
                  <span v-if="scope.row.orderStatus === 10">泰国扫描</span>

                </template>
                </el-table-column>
                <el-table-column
                  prop=""
                  label="详情"
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
import { pageInfo } from "@/api/fictitious.js";
export default {
  data() {
    return {
      activeName: 0,
      // 上面行内表单绑定的对象
      keyword:'',
      tableForm: [],
      page: 1,
      limit: 10,
      count: 0
    };
  },
  created() {
    this.pageInfo();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab);
      console.log(event);
      this.keyword='';
      this.pageInfo();
    },
    search(){
      this.pageInfo(this.keyword)
    },
    sizeChanged(limit) {
      this.limit = limit;
      this.page = 1;
      this.pageInfo();
    },

    pageChange(page) {
      this.page = page;
      this.pageInfo();
    },
    //获取分页
    pageInfo(keyword) {
      this.tableForm=[]
      let params = {
        page: this.page,
        limit: this.limit,
        type: this.activeName,
        userId: this.$StorageUserId,
        search:keyword
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
.text {
  text-align: left;

  div {
    line-height: 30px;
    padding: 0 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.box {
  margin-bottom: 8px;
}
.img-box {
  width: 90px;
  height: 90px;
  img {
    width: 100%;
    height: 100%;
  }
}
.f-left {
  float: left;
}
.f-right {
  float: right;
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
.el-table .cell,
.el-table th > .cell {
  text-align: center;
}
.el-pagination {
  text-align: right;
  margin-top: 16px;
}
</style>
