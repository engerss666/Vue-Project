<template>
  <div class="v-header">
    <ul class="nav-container">
      <li class="nav-items">首页</li>
      <li class="nav-items">安全监控</li>
      <li class="nav-items">订单管理</li>
      <li class="nav-items">用户管理</li>
      <li class="nav-items">安全审计</li>
      <li class="nav-items">用户配置</li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" rel="stylesheet/less">
  .v-header{
    position: absolute;
    left: 263px;
    top: 0;
    .nav-container{
      height: 100%;
      .nav-items{
        box-sizing: border-box;
        float:left;
        height: 100%;
        font-size: 12px;
        padding:0 15px;
        cursor: pointer;
        &:hover{
          color:#000;
          background-color: skyblue;
          border-bottom: 3px solid blue;
        }
      }
    }
  }
</style>

