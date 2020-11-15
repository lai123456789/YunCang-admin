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
            class="demo-form-inline"
          >
            <el-form-item>
              <el-input
                placeholder="请输入运单号或订单号"
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
                  type="selection"
                  width="55"
                >
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
                  label="原订单号"
                ></el-table-column>
                <el-table-column
                  prop="transportNum"
                  label="原运单号"
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
          label="待销毁"
          name=2
        >
          <el-form
            :inline="true"
            class="demo-form-inline"
          >
            <el-form-item>
              <el-input
                placeholder="请输入运单号或订单号"
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
                  label="原订单号"
                ></el-table-column>
                <el-table-column
                  prop="transportNum"
                  label="原运单号"
                ></el-table-column>
                <el-table-column label="面单">
                  <template slot-scope="scope">
                    <a :href="scope.row.faceOrder">查看面单</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="applyDestroyTime"
                  label="申请下架销毁时间"
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
          label="已销毁"
          name=3
        >
          <el-form
            :inline="true"
            class="demo-form-inline"
          >
            <el-form-item>
              <el-input
                placeholder="请输入运单号或订单号"
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
                  type="selection"
                  width="55"
                >
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
                  label="原订单号"
                ></el-table-column>
                <el-table-column
                  prop="transportNum"
                  label="原运单号"
                ></el-table-column>
                <el-table-column label="面单">
                  <template slot-scope="scope">
                    <a :href="scope.row.faceOrder">查看面单</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="applyDestroyTime"
                  label="申请下架销毁时间"
                ></el-table-column>
                <el-table-column
                  prop="destroyTime"
                  label="下架销毁时间"
                ></el-table-column>
                <el-table-column
                  prop="storagePlace"
                  label="退件存储位置"
                ></el-table-column>
                <el-table-column
                  prop="charge"
                  label="收费"
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
          label="待出货"
          name=4
        >
          <el-form
            :inline="true"
            class="demo-form-inline"
          >
            <el-form-item>
              <el-input
                placeholder="请输入运单号或订单号"
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
                  type="selection"
                  width="55"
                >
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
                  prop="newOrderNum"
                  label="订单号"
                ></el-table-column>
                <el-table-column
                  prop="newTransportNum"
                  label="新运单号"
                ></el-table-column>
                <el-table-column
                  prop="transportNum"
                  label="原运单号"
                ></el-table-column>
                <el-table-column label="面单">
                  <template slot-scope="scope">
                    <a :href="scope.row.faceOrder">查看面单</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="finishTime"
                  label="是否代打单"
                ></el-table-column>
                <el-table-column
                  prop="sendLastDate"
                  label="发货剩余"
                ></el-table-column>
                <el-table-column
                  prop="remark"
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
          label="已出货"
          name=5
        >
          <el-form
            :inline="true"
            class="demo-form-inline"
          >
            <el-form-item>
              <el-input
                placeholder="请输入运单号或订单号"
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
                  type="selection"
                  width="55"
                >
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
                  label="原订单号"
                ></el-table-column>
                <el-table-column
                  prop="transportNum"
                  label="原运单号"
                ></el-table-column>
                <el-table-column label="面单">
                  <template slot-scope="scope">
                    <a :href="scope.row.faceOrder">查看面单</a>
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
      this.getList();
    },

    pageChange(page) {
      this.page = page;
      this.getList();
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
