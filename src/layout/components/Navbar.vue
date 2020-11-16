<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
<!--      <el-dropdown class="avatar-container">-->
<!--        <div class="avatar-wrapper">-->
<!--          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">-->
<!--          <i class="el-icon-caret-bottom" />-->
<!--        </div>-->
<!--        <el-dropdown-menu slot="dropdown" class="user-dropdown">-->
<!--          <router-link to="/">-->
<!--            <el-dropdown-item>-->
<!--              Home-->
<!--            </el-dropdown-item>-->
<!--          </router-link>-->
<!--          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">-->
<!--            <el-dropdown-item>Github</el-dropdown-item>-->
<!--          </a>-->
<!--          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">-->
<!--            <el-dropdown-item>Docs</el-dropdown-item>-->
<!--          </a>-->
<!--          <el-dropdown-item divided @click.native="logout">-->
<!--            <span style="display:block;">Log Out</span>-->
<!--          </el-dropdown-item>-->
<!--        </el-dropdown-menu>-->
<!--      </el-dropdown>-->
      <el-dropdown  class="avatar-container">
        <div class="avatar-wrapper">
          <div>
            <i class="el-icon-document" style="font-size: 23px"></i>
            <i class="el-icon-bell" style="font-size: 23px;margin: 0 20px"></i>
            <i class="el-icon-s-finance" style="font-size: 23px"></i>
          </div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-tabs v-model="activeName" style="padding: 20px;width: 400px">
            <el-tab-pane label="公告通知" name="first">公告通知11公告通知11公告通知11公告通知11</el-tab-pane>
            <el-tab-pane label="系统消息" name="second">系统消息222</el-tab-pane>
          </el-tabs>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown  class="avatar-container">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar" style="margin: 0 10px">
          <span>用户名：</span>
          <span style="margin-right: 20px;">{{username}}</span>
          <i class="el-icon-user"></i>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user-solid" @click.native="user">个人中心</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>

      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
    data(){
        return {
            activeName:'first',
            getUserNumber: this.$store.state.user.userNumber,
            username : this.$StorageUserInfo.userName, //
        }
    },
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
      // getusername(){ //获取vuex用户名
      //   return this.$store.state.user.name
      // },
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
        console.log("发违法违规为")
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
        localStorage.clear(); //清空缓存
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    user(){
        this.$router.push(`/personCenter/index`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    display: flex;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        display: flex;
        align-items: center;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
