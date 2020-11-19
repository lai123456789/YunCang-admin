<template>
  <div class="app-container">
    <div class="top">
      <h2>店铺授权</h2>
      <el-card style="margin: 20px 0;height: 600px;">
        <div style="margin-bottom: 20px;">
          <el-button type="primary" round>添加shopee授权</el-button>
          <el-button type="primary" round>添加Lazada授权</el-button>
          <el-button type="danger" round class="jiebang"> 解绑店铺</el-button>
        </div>
        <el-card style="margin-top: 20px;padding: 32px 8px 16px 24px;">
          <div style="margin-bottom: 20px">Shopee店铺</div>
          <div>
            <el-button type="primary" plain round>elemore</el-button>
            <el-button type="primary" plain round>let add</el-button>
            <el-button type="primary" plain round>ceshi12</el-button>
          </div>
        </el-card>
        <el-card style="margin-top: 20px;padding: 32px 8px 16px 24px;">
          <div style="margin-bottom: 20px">Lazada店铺</div>
          <div>
            <el-button type="primary" plain round>Gavied</el-button>
            <el-button type="info" plain round>thor(授权过期)</el-button>
            <el-button type="info" plain round>hor(授权过期)</el-button>
          </div>
        </el-card>

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
                    rid: "",
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

