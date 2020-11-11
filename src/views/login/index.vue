<template>
  <div class="login-wrap">
    <!-- 登录模块盒子 -->
    <div class="login-box">
      <!-- 标题文字盒子 -->
      <div class="title-box">
        <h3>ERP</h3>
      </div>

      <!-- 登录验证表单 -->
      <el-form v-if="register"  ref="loginForm" :model="form"  :rules="rules">
        <!-- 电话输入框 -->
        <el-form-item v-if="loginType" prop="phone">
          <el-input v-model="form.phone" placeholder="电话" prefix-icon="el-icon-phone"></el-input>
        </el-form-item>
        <!-- 用户名输入框 -->
        <el-form-item v-if="!loginType" prop="userName">
          <el-input v-model="form.userName" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 电话验证码输入框 -->
        <el-form-item v-if="loginType" prop="rcode"> <!---->
          <el-row>
            <el-col :span="17">
              <el-input v-model="form.rcode" placeholder="短信验证码" prefix-icon="el-icon-lock"></el-input>
            </el-col>
            <el-col :span="6" :offset="1">
              <el-button class="box-btn" :disabled="disabled" type="primary"  @click="getCode('login')">获取验证码</el-button> <!--登录-->
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 密码输入框 -->
        <el-form-item v-if="!loginType"  prop="passWord">
          <el-input v-model="form.passWord" placeholder="密码" show-passWord prefix-icon="el-icon-lock" ></el-input>
        </el-form-item>

        <!-- 图形验证码输入框 -->
        <el-form-item prop="imgCode">
          <el-row>
            <el-col :span="17">
              <el-input v-model="form.imgCode" placeholder="图形验证码" prefix-icon="el-icon-key"></el-input>
            </el-col>
            <el-col :span="6" :offset="1">
              <img class="code" src="./img/login_code.png" alt="">
            </el-col>
          </el-row>
        </el-form-item>


        <!-- 登录按钮 -->
        <el-form-item>
          <el-button class="box-btn" type="primary" @click="doLogin">登录</el-button>
        </el-form-item>

        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" @click="changeRegister">注册</el-button>
          <el-button type="danger" @click="changeLogin">点击切换密码登录</el-button>
        </el-form-item>

      </el-form>

      <!-- 注册表单 -->
      <el-form v-if="!register" ref="regForm" :model="registerform"  :rules="rules">
        <!-- 用户名输入框 -->
        <el-form-item  prop="userName">
          <el-input v-model="registerform.userName" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>

        <!-- 手机号输入框 -->
        <el-form-item  prop="phone">
          <el-input v-model="registerform.phone" placeholder="手机号" prefix-icon="el-icon-phone"></el-input>
        </el-form-item>
        <!-- 短信验证码输入框 -->
        <el-form-item > <!---->
          <el-row>
            <el-col :span="17">
              <el-input v-model="registerform.rcode" placeholder="短信验证码" prefix-icon="el-icon-lock"></el-input>
            </el-col>
            <el-col :span="6" :offset="1">
              <el-button class="box-btn" type="primary" @click="getCode('registered')">{{valiBtn}}</el-button> <!--注册-->
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 微信号输入框 -->
        <el-form-item  prop="wxUserId">
          <el-input v-model="registerform.wxUserId" placeholder="微信号" prefix-icon="el-icon-chat-dot-round"></el-input>
        </el-form-item>


        <!-- 密码输入框 -->
        <el-form-item  prop="passWord">
          <el-input v-model="registerform.passWord" placeholder="请输入密码" show-passWord prefix-icon="el-icon-lock" ></el-input>
        </el-form-item>

        <!-- 密码输入框 -->
        <el-form-item  prop="passWord">
          <el-input v-model="registerform.RepeatpassWord" placeholder="请再次输入密码" show-passWord prefix-icon="el-icon-lock" ></el-input>
        </el-form-item>

        <!-- 图形验证码输入框 -->
        <el-form-item prop="imgCode">
          <el-row>
            <el-col :span="17">
              <el-input v-model="registerform.imgCode" placeholder="图形验证码" prefix-icon="el-icon-key"></el-input>
            </el-col>
            <el-col :span="6" :offset="1">
             <img class="code" src="./img/login_code.png" alt="">
            </el-col>
          </el-row>
        </el-form-item>


        <!-- 登录按钮 -->
        <el-form-item>
          <el-button class="box-btn" type="primary" @click="doRegister">注册</el-button>
        </el-form-item>

        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="danger" @click="changeRegister1">登录</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>

</template>

<script>
import { validUsername } from '@/utils/validate'
import { registed,getCodeApi,verifiCode } from '../../api/LLKapi'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatepassWord = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The passWord can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
        disabled:false,
        valiBtn:'获取验证码',
        // 登录切换形式状态
        loginType:true,
        // 注册形式状态
        register:true,
        // 跟表单双向绑定的数据
        form: {
            // 电话
            phone: "",
            // 用户名
            userName:"",
            // 手机验证码
            rcode: "",
            // 密码
            passWord:"",
            // 二次密码
            RepeatpassWord:"",
            // 图形验证码
            imgCode:"",
        },
        registerform:{
            // 用户名
            userName:"",
            // 电话
            phone: "",
            // wxUserId
            wxUserId:"",
            // 密码
            passWord:"",

            // 图形验证码
            imgCode:"",
        },
        // 规则对象
        rules: {
            // 真正的规则
            // 电话号码规则
            phone: [
                { required: true, message: "电话号码不能为空", trigger: "blur" },
                { pattern: /^1[3456789]\d{9}$/,message: "电话号码格式不正确",trigger: "blur"}
            ],

            // 用户名规则
            userName: [
                { required: true, message: "用户名不能为空", trigger: "blur" }
            ],

            // 电话验证码规则
            rcode: [
                { required: true, message: "手机验证码不能为空", trigger: "blur" }
            ],

            // wxUserId规则
            wxUserId: [
                { required: true, message: "微信不能为空", trigger: "blur" }
            ],

            // 密码规则
            passWord: [
                { required: true, message: "密码不能为空", trigger: "blur" }
            ],

            // 图片验证码规则
            imgCode: [
                { required: true, message: "图片验证码不能为空", trigger: "blur" },
                // len就是用来限制长度的
                { len: 4, message: "图片验证码只能是4位", trigger: "blur" }
            ],
        },
      loginForm: {
          username:'',
          password:''
      },
      loading: false,
      passWordType: 'passWord',
      redirect: undefined,
        clickFalt:true,
        checkCodeData:''
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
      getCode(e) {
          if(this.clickFalt){
              let phone1 = {
                  phone:this.registerform.phone
              }
              if (e == 'registered') { //注册获取验证码
                  getCodeApi(phone1).then(response => {
                      console.log(response)
                  }).catch(error => {
                      console.log(error)
                  })
              }
              let time = 60;
              let timer = setInterval(() => {
                  if(time == 0){
                      clearInterval(timer);
                      this.valiBtn = '获取验证码';
                      this.disabled = false;
                      this.clickFalt = true
                  }else{
                      this.disabled = true;
                      this.clickFalt = false
                      console.log(this.disabled,"this.disabled")
                      this.valiBtn = time + '秒后重试';
                      time--;
                  }
              }, 1000);

          }


      },
      // 登录的点击事件
      doLogin(){
          // 找到表单对象,调用validate方法
          this.$refs.loginForm.validate(valid => {
              console.log(this.form)
              // if (valid) {
              //     this.loading = true
              //     this.$store.dispatch('user/login', this.loginForm).then(() => {
              //         this.$router.push({ path: this.redirect || '/' })
              //         this.loading = false
              //     }).catch(() => {
              //         this.loading = false
              //     })
              // } else {
              //     console.log('error submit!!')
              //     return false
              // }
          })

      },
      // 改变密码登录的点击事件
      changeLogin(){
          this.loginType = !this.loginType;
          this.$refs.loginForm.clearValidate();
      },
      // 注册按钮点击事件
      doRegister(){
          let _this = this
          // 找到表单对象,调用validate方法
          this.$refs.regForm.validate(v => {
              if(v){
                  this.checkCode()

                  // let formParam = _this.registerform
                  // registed(formParam).then(response => {
                  //     this.$message.success("注册成功，赶紧去登录吧！")
                  //     setTimeout(() => {
                  //         this.register = !this.register;
                  //         this.$refs.regForm.clearValidate();
                  //     },2000)
                  // }).catch(error => {
                  //     console.log(error)
                  // })
                  // alert('全部通过')  先验证验证码接口是否正确 正确才调用注册接口

              }
          })
      },
      awaitFun(){
          setTimeout(() => {
              let code = this.checkCodeData || "默认值"
              console.log("到这里了",code)
              return code
          },500)
      },
      async checkCode(){  //校验验证码
          const data = await this.awaitFun()
          console.log(data,"data")
          let param = {
              phone:this.registerform.phone,
              code:this.registerform.rcode
          }
          verifiCode(param).then(response => {  //注册验证验证码
              this.checkCodeData = 0
              console.log(response) //验证成功
          }).catch(error => {
              this.checkCodeData = 1
              this.$message.error('请确认验证码！');
          })
      },
      // 登录页跳转注册页面事件
      changeRegister(){
          this.register = !this.register;
          this.$refs.loginForm.clearValidate();
      },
      // 注册页跳转登录页面事件
      changeRegister1(){
          this.register = !this.register;
          this.$refs.regForm.clearValidate();
      }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-wrap{
  width: 100%;
  height: 100%;
  /* 弹性布局 */
  display: flex;
  /* 主轴 */
  justify-content: space-around;
  /* 副轴 */
  align-items: center;
  background-color: #0A2F26;

  .login-box{
    width: 472px;
    max-width: 100%;
    padding: 35px;
    background-color: #fff;
    // 层阴影
    box-shadow:10px 9px 40px -5px rgba(82, 63, 105, 0.12);
    border: 2px solid #5898da;
    border-radius: 10px;

    .title-box{
      text-align: center;

      h3{
        font-size: 26px;
        color: #6c7293;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .agree{
      margin-right: 10px;
    }

    .box-btn{
      width: 100%;
    }

    .code{
      width: 100%;
      height: 40px;
    }
  }
}

</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
