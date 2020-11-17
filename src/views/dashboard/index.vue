<template>
  <div class="dashboard-container">
    <el-container>
      <el-container>
          <div class="row-bg">
            <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :span="8" style="display: flex;align-items: center">
                <i class="el-icon-picture-outline-round"
                   style="font-size: 60px;border-radius: 50%;margin-right: 10px"></i>
                <div class="grid-content bg-purple">
                  <div>上午好，{{user.userName}}</div>
                  <div class="">
                    <div style="line-height: 30px">欢迎登入商家客户端</div>
                    <div class="textTime">上次登录时间：{{user.loginTime}}</div>
                  </div>
                </div>
              </el-col>
<!--              <el-col :span="8">-->
<!--                充值金额：-->
<!--                <el-input v-model="money" placeholder="充值金额"></el-input>-->
<!--              </el-col>-->
              <el-col :span="10">
                <div class="grid-content bg-purple-light">
                  <div style="text-align: left">
                    <i class="el-icon-wallet" style="font-size: 20px;"></i>
                    钱包余额</div>
                  <div class="textDiv">
                    <div>¥{{user.surplus}}</div>
                    <div @click="addPayMoney()" style="margin: 0 20px;">
                      <el-button type="primary" size="mini">确定充值</el-button>
                    </div>
                    <div><el-button type="warning" size="mini">充值历史</el-button></div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light">
                  <div style="text-align: left;">
                    <i class="el-icon-tickets" style="font-size: 20px;"></i>
                    历史账单
                  </div>
                  <div class="textDiv">
                    <div>¥{{user.bill}}</div>
                    <div style="margin-left: 10px">
                      <el-button type="warning" size="mini">历史账单</el-button>
                    </div>
                  </div>
                </div>
              </el-col>

            </el-row>
          </div>


        <div class="two row-bg">
          <div><i class="el-icon-time" />营销统计</div>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple yingxiao">
                <div class="yingxiao1">
                  <img src="../../assets/images/mainBottom.png" alt="">
                  <div>
                    <div>8970</div>
                    <div>今日销售额</div>
                  </div>
                </div>
                <div class="yingxiao3" style="border-right: 2px solid #EEE;padding-right: 40px;">
                  <div>昨日：8790</div>
                  <div>前日：8790</div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple yingxiao">
                <div class="yingxiao1" style="margin-left: 20px;">
                  <img src="../../assets/images/mainBottom.png" alt="">
                  <div>
                    <div>8970</div>
                    <div>今日订单数</div>
                  </div>
                </div>
                <div class="yingxiao3" style="padding-right: 40px;">
                  <div>昨日：8790</div>
                  <div>前日：8790</div>
                </div>
              </div>
            </el-col>

          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple yingxiao">
                <div class="yingxiao1">
                  <img src="../../assets/images/mainBottom.png" alt="">
                  <div>
                    <div>8970</div>
                    <div>历史妥投率</div>
                  </div>
                </div>

                <div class="yingxiao3"  style="border-right: 2px solid #EEE;padding-right: 40px;">
                  <div>昨日：8790</div>
                  <div>前日：8790</div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple yingxiao">
                <div class="yingxiao1" style="margin-left: 20px;">
                  <img src="../../assets/images/mainBottom.png" alt="">
                  <div>
                    <div>8970</div>
                    <div>今日退件数</div>
                  </div>
                </div>

                <div class="yingxiao3" style="padding-right: 40px">
                  <div>昨日：8790</div>
                  <div>前日：8790</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="two row-bg">
          <el-row type="flex" justify="space-between">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div id="myChartLeft" :style="{width: '400px', height: '300px',marginTop: '20px'}"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div id="myChart" :style="{width: '400px', height: '300px',marginTop: '20px'}"></div>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div id="myChartBottomLeft" :style="{width: '400px', height: '300px'}"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div id="myChartBottomRight" :style="{width: '400px', height: '300px'}"></div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="two row-bg">
          <h3>销量最高产品</h3>
          <el-card>
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="headPic"
                label="产品图"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sku"
                label="SKU"
                width="180">
              </el-table-column>
              <el-table-column
                prop="num"
                label="总销量">
              </el-table-column>
              <el-table-column
                prop="price"
                label="销售额">
              </el-table-column>
              <el-table-column
                prop="address"
                label="渠道">
              </el-table-column>
            </el-table>
          </el-card>
        </div>
        <el-footer>

        </el-footer>
      </el-container>
      <el-aside width="400px">
        <div class="bg-right-1">
          <div class="bg-index">
            <div class="bg-title" style="margin-bottom:20px">
              <i class="el-icon-s-order"  style="font-size: 20px"/>
              <span>最新公告</span>
            </div>
            <div v-for="(item,index) in AnnouncementNew">{{item.title}}</div>
          </div>

        </div>
        <div class="bg-right-2">
          <div class="bg-index">
            <div class="bg-title">
              <i class="el-icon-question" style="font-size: 20px"/>
              <span>使用教程&常见问题</span>
            </div>
            <div class="index" style="margin-top: 20px">
              <div v-for="(item,index) in tutorial" style="line-height: 20px">
                {{item.title}}
              </div>
            </div>
          </div>

        </div>
        <div class="bg-right-2">
          <div class="bg-index">
            <div class="bg-title">
              <i class="el-icon-download" style="font-size: 20px"/>
              <span>附件下载</span>
            </div>
            <div class="index" style="margin-top: 20px">
              <div v-for="(item,index) in tutorial" style="line-height: 20px">
                {{item.title}}
              </div>
            </div>
          </div>

        </div>
        <div class="bg-right-2">
          <div class="bg-index">
            <div class="bg-title">
              <i class="el-icon-price-tag" style="font-size: 20px"/>
              <span>物流费用报价</span>
            </div>
            <div class="index" style="margin-top: 20px">
              <div v-for="(item,index) in tutorial" style="line-height: 20px">
                {{item.title}}
              </div>
            </div>
          </div>

        </div>

      </el-aside>

    </el-container>

    <div class="dashboard-text">
    </div>
  </div>
</template>

<script>
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/bar');
    require("echarts/lib/chart/line");
    require("echarts/lib/chart/pie");
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    require("echarts/lib/component/legend")
import { mapGetters } from 'vuex'
    import { ceshi,payMoney } from '../../api/LLKapi'
    import { getNewAnnouncementApi,getStatementOrderApi } from '../../api/index'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
    data() {
        return {
            money:"",
            msg: 'Welcome to Your Vue.js App',
            tableData: [], //销量排行表格
            AnnouncementNew:[],
            StatementOrderList:[], //订单图表数据echart
            user:{}, //用户信息
            tutorial:[], //使用教程
        }
    },
    mounted() {
        this.getList();
        this.getNewAnnouncement();//最新5条公告
        this.getStatementOrder();
    },
    methods: {
      getNewAnnouncement(){
          getNewAnnouncementApi().then(res => {  //获取最新5条公告
              this.AnnouncementNew = res.data
          }).catch(error => {
              console.log(error)
          })
      },
        getStatementOrder(){
          let t = this
            getStatementOrderApi({userId:this.$StorageUserId}).then(res => {  //获取首页报表
                t.StatementOrderList = res.data
                t.tableData = res.data.product
                t.user = res.data.user
                t.tutorial = res.data.tutorial
                t.drawLine();

            }).catch(error => {
                console.log(error)
            })
        },
        addPayMoney(){
            let par = {
                id:2,
                payMoney:money
            }
            payMoney(par).then(response => {  //支付调用接口
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        },
      getList(){
          // let par = {
          //     id:1
          // }
          // ceshi(par).then(response => {  //调用接口
          //   console.log(response)
          // }).catch(error => {
          //    console.log(error)
          // })
      },
        drawLine() {
           let StatementOrderList = this.StatementOrderList
            let orderCount = StatementOrderList.orderCount //平台订单数
            let orderMoney= StatementOrderList.orderMoney //平台销售额
            //平台订单数
            let orderCountDate = [];//日期
            let userLazadaCount = [];// Lazada
            let userShoppeeCount = [];// Shoppee
            let userCount = []; //总订单
            let userVirtualCount = []; //虚拟仓订单
            for(let x in orderCount){
                orderCountDate.push(orderCount[x].date)
                userLazadaCount.push(orderCount[x].userLazadaCount)
                userShoppeeCount.push(orderCount[x].userShoppeeCount)
                userCount.push(orderCount[x].userCount)
                userVirtualCount.push(orderCount[x].userVirtualCount)
            }
            //平台销售额
            let orderMoneyDate = [];//日期
            let userLazadaMoney = [];// Lazada
            let userShoppeeMoney = [];// Shoppee
            let userMoney = []; //总订单
            let userVirtualMoney = []; //虚拟仓订单
            for(let x in orderCount){
                orderMoneyDate.push(orderMoney[x].date)
                userLazadaMoney.push(orderMoney[x].userLazadaMoney)
                userShoppeeMoney.push(orderMoney[x].userShoppeeMoney)
                userMoney.push(orderMoney[x].userMoney)
                userVirtualMoney.push(orderMoney[x].userVirtualMoney)
            }
            // 基于准备好的dom，初始化echarts实例
            let myChartLeft = echarts.init(document.getElementById('myChartLeft')) //近期订单数
            let myChart = echarts.init(document.getElementById('myChart')) //平台订单数对比
            let myChartBottomLeft = echarts.init(document.getElementById('myChartBottomLeft')) //近期销售额
            let myChartBottomRight = echarts.init(document.getElementById('myChartBottomRight'))  //平台销售额对比
            // 绘制图表
            myChartLeft.setOption({
                title: { text: '近期订单数' },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['总订单', '虚拟仓']
                },
                xAxis: {
                    type: 'category',
                    data: orderCountDate,
                    boundaryGap: false
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '总订单',
                        type: 'line',
                        stack: '总量',
                        data: userCount
                    },
                    {
                        name: '虚拟仓',
                        type: 'line',
                        stack: '总量',
                        data: userVirtualCount
                    }
                ]
            });
            myChart.setOption({
                    title: { text: '平台订单数对比' },
                    color: ["#003366", "#006699"],
                    legend: {
                        left:'150'
                    },
                    xAxis:  {
                        type: 'category',
                        axisTick: {show: false},
                        data: orderCountDate
                    },
                    yAxis: {},
                    series: [ {
                        name: 'Lazada',
                        type: 'bar',
                        barGap: 0,
                        data: userLazadaCount
                    },
                        {
                            name: 'shoppee',
                            type: 'bar',
                            data: userShoppeeCount
                        }]
                });
            myChartBottomLeft.setOption({
                title: { text: '近期销售额' },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['总订单', '虚拟仓']
                },
                xAxis: {
                    type: 'category',
                    data: orderMoneyDate,
                    boundaryGap: false
                },
                yAxis:  [{
                        axisLabel:{
                            show:false //是否显示刻度
                        },
                        axisLine:{
                            show:true //线段加深
                        },
                        axisTick:{
                            show:false //是否显示刻度小标线
                        },
                        splitLine:{
                            show:true //分割线
                        }
                    }],
                series: [{
                    name: '总订单',
                    data: userMoney,
                    type: 'line',
                    stack: '总量'
                },{
                    name: '虚拟仓',
                    data: userVirtualMoney,
                    type: 'line',
                    stack: '总量'
                }]
            });
            myChartBottomRight.setOption({
                title: { text: '平台销售额对比' },
                color: ["#4cabce", "#e5323e"],
                legend: {
                    left:'150'
                },
                xAxis:  {
                    type: 'category',
                    axisTick: {show: false},
                    data: orderMoneyDate
                },
                yAxis: {},
                series: [ {
                    name: 'Lazada',
                    type: 'bar',
                    barGap: 0,
                    data: userLazadaMoney
                },
                    {
                        name: 'shoppee',
                        type: 'bar',
                        data: userShoppeeMoney
                    }]
            });



        }
    }
}
</script>

<style lang="scss" scoped>
  .el-footer {
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px;*/
  }

  .el-aside {
    background-color: #F7F8FA;
    color: #333;
    text-align: center;
    .bg-right-1{
      width: 100%;
      background: #F7F8FA;
      padding: 20px 20px 25px 0;
      .bg-index{
        border-radius: 10px;
        height: 400px;
        background: #ffffff;
        text-align: left;
        padding: 20px;
        .bg-title{
          span{
            font-size: 20px;
          }
        }
      }

    }
    .bg-right-2{
      width: 100%;
      background: #F7F8FA;
      padding: 0 20px 30px 0;
      .bg-index{
        text-align: left;
        padding: 20px;
        height:330px;
        border-radius: 10px;
        background: #ffffff;
        .bg-title{
          span{
            font-size: 20px;
          }
        }
      }

    }
  }

  body > .el-container {
    margin-bottom: 40px;
    }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    /*background: #99a9bf;*/
  }
  .bg-purple {
    /*background: #d3dce6;*/
  }
  .bg-purple-light {
    /*background: #e5e9f2;*/
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    .textTime{
      color: #999999;
      font-size: 14px;
    }
    .textDiv{
    display: flex;
      margin-top: 20px;
      /*justify-content: space-around;*/
      align-items: center;
      div:nth-child(1){
        font-size: 28px;
      }
  }
  }
  .yingxiao{
    display: flex;
    justify-content: space-between;
    margin: 10px 20px 10px 0;
    .yingxiao1{
      display: flex;
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      div{
        margin-left: 5px;
        div:nth-child(1){
          font-size: 22px;
          font-weight: bold;
        }
        div:nth-child(2){
          color: #999999;
          font-size: 14px;
        }
      }

    }
    .yingxiao3{

      div{
        font-size: 14px;
        color: #666666;
      }
    }
  }
  .row-bg {
    padding: 10px 0;
    margin: 20px 20px 0px 20px;
    background-color: white;
    border-radius: 10px;
    flex-flow: row wrap;
  }
  .two{
    padding-left: 20px;
    div{
      line-height: 30px;
    }
    .el-row{
      flex-flow: row wrap;
      .el-col{
        .grid-content{
          /*text-align: center;*/
        }
      }
    }
  }
</style>
