<template>
  <div class="returning">
    <el-card class="box-card">
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="待创建订单"
          name=0
        >
          <el-form
            :inline="true"
            class="demo-form-inline"
          >
            <div class="flex clearfix">
              <el-form-item
                class="flex-1"
                label="平台订单号"
              >
                <el-input
                  v-model="keyword"
                  style="width:200px;"
                  placeholder="请输入平台订单号"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="flex-1"
                label="平台运单号"
              >
                <el-input
                  v-model="keyword"
                  style="width:200px;"
                  placeholder="请输入平台运单号"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="flex-1"
                label="店铺名称"
              >
                <el-input
                  v-model="keyword"
                  style="width:200px;"
                  placeholder="请输入店铺名称"
                ></el-input>
              </el-form-item>
              <el-form-item class="flex-1">
                <el-button
                  type="primary"
                  @click="search"
                >搜索</el-button>
                <el-button>重置</el-button>
              </el-form-item>
              <el-form-item class="f-right">
                <el-button type="primary" @click="add">创建订单</el-button>
              </el-form-item>
            </div>
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
                >
                  <template slot-scope="scope">
                    <a @click="dialogVisible = true">查看</a>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      type="text"
                      @click="doDel(scope.row)"
                    >回滚</el-button>
                  </template>
                </el-table-column>
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
          label="待处理订单"
          name=2
        >
          <el-form
            :inline="true"
            class="demo-form-inline"
          >
            <div class="flex clearfix">
              <el-form-item
                class="flex-1"
                label="平台订单号"
              >
                <el-input
                  v-model="keyword"
                  style="width:200px;"
                  placeholder="请输入平台订单号"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="flex-1"
                label="平台运单号"
              >
                <el-input
                  v-model="keyword"
                  style="width:200px;"
                  placeholder="请输入平台运单号"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="flex-1"
                label="国内物流单号"
              >
                <el-input
                  v-model="keyword"
                  style="width:200px;"
                  placeholder="请输入国内物流单号"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="flex-1"
                label="店铺名称"
              >
                <el-input
                  v-model="keyword"
                  style="width:200px;"
                  placeholder="请输入店铺名称"
                ></el-input>
              </el-form-item>
              <el-form-item class="flex-1">
                <el-button
                  type="primary"
                  @click="search"
                >搜索</el-button>
                <el-button>重置</el-button>
              </el-form-item>
            </div>
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
                ><template slot-scope="scope">
                    <a @click="dialogVisible = true">查看</a>
                  </template></el-table-column>
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
          label="已完成订单"
          name=3
        >
          <el-form
            :inline="true"
            class="demo-form-inline"
          >
            <div class="flex clearfix">
              <el-form-item
                class="flex-1"
                label="平台订单号"
              >
                <el-input
                  v-model="keyword"
                  placeholder="请输入平台订单号"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="flex-1"
                label="平台运单号"
              >
                <el-input
                  v-model="keyword"
                  placeholder="请输入平台运单号"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="flex-1"
                label="国内物流号"
              >
                <el-input
                  v-model="keyword"
                  placeholder="请输入国内物流单号"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="flex-1"
                label="店铺名称"
              >
                <el-input
                  v-model="keyword"
                  placeholder="请输入店铺名称"
                ></el-input>
              </el-form-item>
              <el-form-item class="flex-1">
                <el-button
                  type="primary"
                  @click="search"
                >搜索</el-button>
                <el-button>重置</el-button>
              </el-form-item>
              <el-form-item class="f-right">
                <el-button type="primary">导出表格</el-button>
              </el-form-item>
            </div>
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
                ><template slot-scope="scope">
                    <a @click="dialogVisible = true">查看</a>
                  </template></el-table-column>
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
    <el-dialog
      title="订单详情"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <div class="flex">
        <div class="flex flex-1 dialog-box">
          <div class="flex-1">
            <p>平台订单号</p>
            <p>平台运单号</p>
            <p>平台名称</p>
            <p>店铺名称</p>
            <p>订单状态</p>
            <p>物流状态</p>
            <p>买家下单时间</p>
            <p>订单创建时间</p>
            <p>预期利润（￥）</p>
          </div>
          <div class="flex-2">
            <p>340165438066223</p>
            <p>KERDO0008903669</p>
            <p>lazada</p>
            <p>Advil</p>
            <p>待创建（虚拟仓）</p>
            <p>/</p>
            <p>2020-11-20 14:02:24</p>
            <p>2020-11-20 14:02:24</p>
            <p>0</p>
          </div>
        </div>
        <div class="flex-1  dialog-right">
          <h2>订单商品信息</h2>
          <div class="clearfix">
            <div class="f-left img-box">
              <img
                src="@/assets/images/mainBottom.png"
                alt=""
              >
            </div>
            <div class="text">
              <div class="textMain row-ellipsis">การ์ตูน คนรัก เคส Huawei FreeBuds 3</div>
              <div class="textMain">SKU:A0170-（B）-FreeBuds 3</div>
              <div class="clearfix textMain">
                <span class="f-left">单价：฿146</span>
                <span class="f-right">数量：1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { pageInfo } from "@/api/fictitious.js";
export default {
  data() {
    return {
      activeName: 0,
      // 上面行内表单绑定的对象
      keyword: "",
      tableForm: [],
      page: 1,
      limit: 10,
      count: 0,
      dialogVisible: false
    };
  },
  created() {
    this.pageInfo();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab);
      console.log(event);
      this.keyword = "";
      this.page = 1;
      this.limit = 10;
      this.count = 0;
      this.pageInfo();
    },
    search() {
      this.pageInfo(this.keyword);
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
      this.tableForm = [];
      let params = {
        page: this.page,
        limit: this.limit,
        type: this.activeName,
        userId: this.$StorageUserId,
        search: keyword
      };
      pageInfo(params).then(res => {
        console.log(res);
        if (res.code == 1) {
          this.tableForm = res.data;
          this.count = res.count;
        }
      });
    },
    doDel(item) {
      //弹出确认框
      this.$confirm("请问是否需要回滚？")
        .then(() => {
          this.$message.success("回滚成功");
        })
        .catch(() => {
          this.$message("回滚失败");
        });
    },
    add(){
      this.$router.push({path: '/addfictitious/index'});
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
.dialog-box {
  background-color: #f7f8fa;
  padding: 24px;
  border-radius: 8px;
}
.dialog-right {
  padding: 24px;
}
</style>
