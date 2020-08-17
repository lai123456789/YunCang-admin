<template>
  <div class="dashboard-container">
    <el-container>
      <el-container>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <div>上午好，某某某</div>
              <div>欢迎登入商家客户端</div>
              <div class="textTime">上次登录时间：2020年09月23日 10:28:00</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <div>钱包余额</div>
              <div class="textDiv">
                <div>Y3456.09</div>
                <div>我要充值</div>
                <div>充值历史</div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <div>我的账单</div>
              <div class="textDiv">
                <div>Y3456.09</div>
                <div>历史账单</div>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="two row-bg">
          <div><i class="el-icon-time" />待办事项提醒</div>
          <el-row type="flex"  justify="space-around">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div>海外仓待拣货订单：8</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <div>中国仓待接收订单：8</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <div>虚拟仓待处理订单：8</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <div>退件仓待处理订单：8</div>
              </div>
            </el-col>
          </el-row>

        </div>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div>上午好，某某某</div>
              <div>欢迎登入商家客户端</div>
              <div class="textTime">上次登录时间：2020年09月23日 10:28:00</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <div>钱包余额</div>
              <div class="textDiv">
                <div>Y3456.09</div>
                <div>我要充值</div>
                <div>充值历史</div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <div>我的账单</div>
              <div class="textDiv">
                <div>Y3456.09</div>
                <div>历史账单</div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <div>我的账单</div>
              <div class="textDiv">
                <div>Y3456.09</div>
                <div>历史账单</div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-footer>Footer</el-footer>
      </el-container>
      <el-aside width="200px">Aside</el-aside>

    </el-container>

    <div class="dashboard-text">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
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
      justify-content: space-around;
      align-items: center;
      div:nth-child(1){
        font-size: 28px;
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
  }
</style>
