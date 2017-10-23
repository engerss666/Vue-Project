<template>
  <div id="home">
    <div class="left">
      <div class="logo">安全中心</div>
      <el-row style="height: 100%;width: 100%">
        <el-col :span="4" style="width: 100%; min-height: 100%; background-color: #F5F5F5;">
          <el-menu :default-active="defaultActive" style="min-height: 100%; background-color: #F5F5F5;" theme="none" router>
            <el-menu-item style="width: 100%" index="manage">
              <i class="el-icon-menu"></i>首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-document"></i>数据管理</template>
              <el-menu-item index="userList">用户列表</el-menu-item>
              <el-menu-item index="shopList">商家列表</el-menu-item>
              <el-menu-item index="foodList">食品列表</el-menu-item>
              <el-menu-item index="orderList">订单列表</el-menu-item>
              <el-menu-item index="adminList">管理员列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-plus"></i>添加数据</template>
              <el-menu-item index="addShop">添加商铺</el-menu-item>
              <el-menu-item index="addGoods">添加商品</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-star-on"></i>图表</template>
              <el-menu-item index="visitor">用户分布</el-menu-item>
              <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-edit"></i>编辑</template>
              <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
              <el-menu-item index="vueEdit">文本编辑</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-setting"></i>设置</template>
              <el-menu-item index="adminSet">管理员设置</el-menu-item>
              <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-warning"></i>说明</template>
              <el-menu-item index="explain">说明</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="20" style="height: 100%;overflow: auto;">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-col>
      </el-row>

    </div>
    <div class="right">
      <div class="v-header">
        <el-menu default-active=1 class="el-menu-demo" style="background-color: #3076DA;" mode="horizontal">
          <el-menu-item class="hover-style" index="1" style="color: #fff;">处理中心</el-menu-item>
          <el-menu-item class="hover-style" index="2" style="color: #fff;">
            <a href="https://www.ele.me" target="_blank">订单管理</a>
          </el-menu-item>
        </el-menu>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
@import '../../common/style/mixin';
#home {
  width: 100%;
  display: flex;
  .left {
    width: 15%;
    min-height: 768px;
    background-color: #F5F5F5;
    .logo {
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      width: 100%;
      font-family: 'Microsoft YaHei';
      font-style: 16px;
      background-color: #175ABA;
    }
  }
  .right {
    flex: 1;
  }
}
</style>
