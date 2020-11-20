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
                <el-button
                  type="primary"
                  @click="doDel"
                >批量申请下架销毁</el-button>
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
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      type="text"
                      @click="send(scope.row)"
                    >发货</el-button>
                    <el-button
                      type="text"
                      @click="doDel(scope.row)"
                    >销毁</el-button>
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
          label="待仓库下架销毁"
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
                <el-table-column label="操作">
                  <template slot-scope="scope">

                    <el-button
                      type="text"
                      @click="doDel(scope.row)"
                    >销毁</el-button>
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
          label="已下架销毁"
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
            </div>
            <!-- 下面卡片 -->
            <el-card class="box-card box-card1">
              <el-table
                border
                style="width: 100%;"
                :data="tableForm"
              >
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
          label="待仓库二次发货"
          name=4
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
            </div>
            <!-- 下面卡片 -->
            <el-card class="box-card box-card1">
              <el-table
                border
                style="width: 100%;"
                :data="tableForm"
              >
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
                >
                  <template slot-scope="scope">
                    <a @click="dialogVisible = true">查看</a>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      type="text"
                      @click="send(scope.row)"
                    >发货</el-button>
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
          label="已二次出货"
          name=5
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
            </div>
            <!-- 下面卡片 -->
            <el-card class="box-card box-card1">
              <el-table
                border
                style="width: 100%;"
                :data="tableForm"
              >
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
                  prop="orderNum"
                  label="新订单号"
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
                  label="申请二次发货时间"
                ></el-table-column>
                <el-table-column
                  prop=""
                  label="二次发货时间"
                ></el-table-column>
                <el-table-column
                  prop="charge"
                  label="收费"
                ></el-table-column>
                <el-table-column label="物流状态"></el-table-column>
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
          label="退件服务设置中心"
          name=6
        >
          <el-form
            :inline="true"
            class="demo-form-inline"
          >
            <el-card style="margin: 20px 0;">
              <el-card style="margin-top: 20px;padding: 32px 8px 16px 24px;">
                <div style="margin-bottom: 20px">Shopee店铺</div>
                <div>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                </div>
              </el-card>
              <el-card style="margin-top: 20px;padding: 32px 8px 16px 24px;">
                <div style="margin-bottom: 20px">Lazada店铺</div>
                <div>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                  <el-button
                    type="primary"
                    plain
                    round
                    @click="close"
                  >Gavied</el-button>
                </div>
              </el-card>

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
import { pageInfo } from "@/api/return.js";
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
    send(item) {
      //弹出确认框
      this.$confirm("请问是否发货？")
        .then(() => {
          this.$message.success("发货成功");
        })
        .catch(() => {
          this.$message("发货失败");
        });
    },
    doDel(item) {
      //弹出确认框
      this.$confirm("请问是否销毁？")
        .then(() => {
          this.$message.success("销毁成功");
        })
        .catch(() => {
          this.$message("销毁失败");
        });
    },
    close() {
      //弹出确认框
      this.$confirm("此操作将关闭仓库退件仓权限,是否关闭?")
        .then(() => {
          this.$message.success("关闭成功");
        })
        .catch(() => {
          this.$message("关闭失败");
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
.dialog-box {
  background-color: #f7f8fa;
  padding: 24px;
  border-radius: 8px;
}
.dialog-right {
  padding: 24px;
}
</style>
