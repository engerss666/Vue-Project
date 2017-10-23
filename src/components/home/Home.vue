<template>
  <div id="home">
    <div class="navbar clearfix">安全服务-管理后台
      <safeHeader></safeHeader>
      <Profile></Profile>
    </div>
    <div class="product-nav clearfix">nav-left

    </div>
    <div class="safe-views">container
    </div>
  </div>
</template>
<script>
import safeHeader from './safeHeader'
import Profile from './Profile'
// import OrderManagement from '../OrderManagement/OrderManagement'
export default {
  name: 'home',
  components: {
    safeHeader,
    Profile
  },
  methods: {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
@import '../../common/style/mixin';
#home {
  width: 100%;
  height: 100%;
  .navbar {
    width: 100%;
    height: 60px;
    background-color: #3076DA;
    position: fixed;
    top: 0;
    z-index: 1000;
    color: #fff;
    font-size: 18px;
    line-height: 60px;
    padding-left: 10px;
  }
  .product-nav {
    box-sizing: border-box;
    padding-top: 10px;
    height: 100%;
    width: 248px;
    background-color: #F5F5F5;
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    border-right: 1px solid #ddd;
    word-break: keep-all;
    z-index: 999;
    text-align: center;
    cursor: pointer;
    overflow: auto;
  }
  .safe-views {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 60px;
    left: 248px;
    background-color: #fff;
    padding: 24px;
  }
}
</style>
