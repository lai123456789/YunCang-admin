<template>
  <div class="app-container">
    <h2>订单推送</h2>
    <div class="center">
      <el-card class="box-card">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item :inline="true" :model="formInline" class="demo-form-inline">
            平台订单号
            <el-input
              placeholder="请输入订单号"
              v-model="formInline.orderNum"
              style="width:200px;"
              suffix-icon="el-icon-search"
            ></el-input>
          </el-form-item>
          <el-form-item :inline="true" :model="formInline" class="demo-form-inline">
            平台订单号
            <el-input
              placeholder="请输入运单号"
              v-model="formInline.transportNum"
              style="width:200px;"
              suffix-icon="el-icon-search"
            ></el-input>
          </el-form-item>
          <el-form-item :inline="true" :model="formInline" class="demo-form-inline">
            店铺名称
            <el-input
              placeholder="请输入店铺名"
              v-model="formInline.shopName"
              style="width:200px;"
              suffix-icon="el-icon-search"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">搜索</el-button>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="item.title" :name="item.name" v-for="(item,index) in tabList">
            <div style="padding:20px 0;" v-if="item.name == 'first'">
              <div>
                <el-button type="primary" round @click="allOrderDiolog = true">同步全部订单</el-button>
                <el-button type="primary" round @click="daoruDiolog = true">从表格导入thisshop订单</el-button>
                <el-button type="success" round>同步指定订单</el-button>
                <el-button type="success" round>批量生成拣货单</el-button>
                <span style="margin:0 20px"><i class="el-icon-question"></i>自动发货</span>
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
                <el-button style="margin-left:20px" type="info" round><i class="el-icon-s-fold"></i> 批量申请发货</el-button>
              </div>
            </div>
            <div style="padding:20px 0;" v-if="item.name == 'second'">
              <div>
                <el-button type="primary" round>批量打印</el-button>
                <el-button type="primary" round>批量生成拣货单</el-button>
              </div>
            </div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <!-- 下面卡片 -->
              <el-card class="box-card box-card1">
                <el-table style="width: 100%;margin-bottom: 20px" :data="tableForm">
                  <el-table-column v-if="item.name == 'first' || item.name == 'second'"
                                   type="selection"
                                   width="55">
                  </el-table-column>
                  <el-table-column prop="platformName" label="平台"></el-table-column>
                  <el-table-column prop="shopName" label="店铺名"></el-table-column>
                  <el-table-column label="订单商品信息" width="300px">
                    <template slot-scope="scope">
                      <div v-for="item in scope.row.products" :key="item.id" style="display: flex;align-items: center">
                        <div><img :src="item.headPic" alt="" style="width: 80px;height: 80px;"></div>
                        <div style="margin-left: 10px">
                          <el-tooltip class="item" effect="dark" :content="item.name" placement="top">
                            <p style="line-height: 15px;white-space: nowrap;overflow: hidden;
                          text-overflow: ellipsis;width: 180px">{{item.name}}</p>
                          </el-tooltip>
                          <p style="line-height: 15px" v-if="item.sku">SKU：{{item.sku}}</p>
                          <p style="line-height: 15px;text-align: left" v-else>SKU：_</p>
                          <p style="line-height:15px;display: flex;justify-content: space-between">
                            <span>单价：{{item.price}}</span>
                            <span>数量：{{item.num}}</span>
                          </p>
                        </div>
                      </div>
                    </template>
                  </el-table-column>

                  <el-table-column prop="orderNum" label="平台订单号"></el-table-column>
                  <el-table-column prop="placeTime" label="下单时间"></el-table-column>
                  <el-table-column prop="createdTime" label="订单创建时间"></el-table-column>
                  <el-table-column prop="transportNum" label="运单号"></el-table-column>
                  <el-table-column prop="status" label="物流状态"></el-table-column>
                  <el-table-column prop="channel" label="渠道"></el-table-column>
                  <el-table-column label="面单">
                    <template slot-scope="scope">
                      <a :href="scope.row.faceOrder" style="color: #333333" target="_blank"
                         v-if="scope.row.faceOrder">查看面单</a>
                    </template>
                  </el-table-column>
                  <el-table-column prop="anticipatedProfit" label="预期利润"></el-table-column>
                  <el-table-column prop="charge" label="收费"></el-table-column>
                </el-table>

                <el-pagination
                  background
                  @size-change="sizeChanged"
                  @current-change="pageChange"
                  :current-page="apiParam.page"
                  :page-sizes="[ 10, 20, 30, 40,50]"
                  :page-size="apiParam.limit"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="apiParam.count"
                ></el-pagination>
              </el-card>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>

<!--      同步全部订单-->
      <el-dialog
        title="提示"
        :visible.sync="allOrderDiolog"
        width="30%">
        <span>同步全部订单成功！</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="allOrderDiolog = false">取 消</el-button>
    <el-button type="primary" @click="allOrderDiolog = false">确 定</el-button>
  </span>
      </el-dialog>
<!--      从表格导入thisshop订单-->
      <el-dialog
        title="从表格导入thisshop订单"
        :visible.sync="daoruDiolog"
        width="30%">
        <div>
          <el-row>
            <el-col :span="8">
              *excel表格
            </el-col>
            <el-col :span="8">
              <input style="height: 50px" type="file" autocomplete="off" accept=".xls, .xlsx" placeholder="请选择要导入的Excel表格" class="el-input__inner">
            </el-col>
          </el-row>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button @click="daoruDiolog = false">取 消</el-button>
    <el-button type="primary" @click="daoruDiolog = false">确定导入</el-button>
  </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
    import {getTableApi} from '../../api/LLKapi'

    export default {

        data() {
            return {
                allOrderDiolog: false,
                daoruDiolog:false,
                value: true,
                tabList: [
                    {name: 'first', title: '未申请发货', type: 1},
                    {name: 'second', title: '待仓库处理', type: 2},
                    {name: 'third', title: '已完成订单', type: 3},
                    {name: 'fourth', title: '全部订单', type: 4},
                ],
                activeName: "first",
                // 上面行内表单绑定的对象
                formInline: {
                    orderNum: "",
                    transportNum: "",
                    shopName: ""
                },
                apiParam: {
                    type: 1,
                    page: 1,
                    limit: 10,
                    count: 0,
                    platformName: "",
                    search: ""
                },

                tableForm: []
            }
        },
        mounted() {
            this.getTable()
        },
        methods: {
            getTable() {
                let params = {
                    type: this.apiParam.type,
                    page: this.apiParam.page,
                    limit: this.apiParam.limit,
                    userId: this.$StorageUserId,
                    platformName: this.apiParam.platformName,
                    search: this.apiParam.search
                }
                getTableApi(params).then(res => {  //获取订单推送列表
                    this.tableForm = res.data
                    this.apiParam.count = res.count
                }).catch(error => {
                    console.log(error)
                })
            },
            sizeChanged(limit) {
                this.apiParam.limit = limit;
                this.apiParam.page = 1;
                this.getTable();
            },
            pageChange(page) {
                this.apiParam.page = page;
                this.getTable();
            },
            handleClick(tab, event) {
                console.log(tab.index);//0开始
                let index = Number(tab.index) + 1
                this.apiParam.type = index
                this.tableForm = []
                this.apiParam.count = 0
                this.getTable()
            },
            search() {
                this.apiParam.search = this.formInline
                this.getTable()


            },
            reset() {

            },
            onSubmit() {
                this.$message('submit!')
            },
            onCancel() {
                this.$message({
                    message: 'cancel!',
                    type: 'warning'
                })
            }
        }
    }
</script>

<style lang="scss">
  .topButton {
    button:nth-child(1) {
      margin-bottom: 10px;
    }

    .jiebang {
      width: 144px;
    }
  }

  .topTable {
    table {
      width: 100%;
      border-collapse: collapse;

      tr {
        td:nth-child(1) {
          width: 20%;
        }

        td {
          height: 44px;
          text-align: center;
          border: 1px solid #999999;
        }
      }
    }

  }

  .el-tabs {
    .el-tabs__header {
      .el-tabs__nav-wrap {
        .is-active {
          /*color:#E6A23C !important;*/
        }

        .el-tabs__active-bar {
          /*background-color:#E6A23C !important;*/
        }
      }
    }
  }

</style>

