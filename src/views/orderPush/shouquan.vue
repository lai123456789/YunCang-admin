<template>
  <div class="app-container">
    <div class="top">
      <h2>店铺授权</h2>
      <el-card style="margin: 20px 0;height: 600px;">
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <div class="grid-content  topButton">
              <el-button type="primary">添加shopee授权</el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content  topButton">
              <el-button type="primary">添加Lazada授权</el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content  topButton">
              <el-button type="danger" class="jiebang"> 解绑店铺 </el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col >
            <div class="grid-content topTable">
              <table>
                <tr>
                  <td>shopee店铺</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Lazada店铺</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </el-col>

        </el-row>
      </el-card>

    </div>
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
    }
  },
  methods: {
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
  .topButton{
    button:nth-child(1){
      margin-bottom: 10px;
    }
    .jiebang{
      width: 144px;
    }
  }
  .topTable {
    table {
      width: 100%;
      border-collapse:collapse;
      tr{
        td:nth-child(1){
          width: 20%;
        }
        td{
          height: 44px;
          text-align: center;
          border: 1px solid #999999;
        }
      }
    }

  }
  .el-tabs{
    .el-tabs__header{
      .el-tabs__nav-wrap{
        .is-active{
          /*color:#E6A23C !important;*/
        }
        .el-tabs__active-bar{
          /*background-color:#E6A23C !important;*/
        }
      }
    }
  }

</style>

