<template>
  <div id="app">
    <!-- 左边菜单 -->
    <section class='left'>
      <div class="logo">安全中心</div>
      <menuItem></menuItem>
    </section>
    <div class="right">
      <!-- 顶部状态栏 -->
      <vheader></vheader>
      <!-- 右边内容部分 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vHeader from './components/home/Home.vue'
export default {
  name: 'app',
  components: {
    vHeader
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import "common/style/index.less";
#app {
  width: 100%;
  display: flex;
  .left {
    width: 15%;
    min-height: 768px;
    background-color: #F5F5F5;
    font-family: 'Microsoft YaHei';
    font-style: 16px;
    color: #fff;
    line-height: 60px;
    text-align: center;

    .logo{
      height: 60px;
      width: 100%;
      background-color: #175ABA;
    }
  }
  .right{
    flex:1;
  }
}
</style>
