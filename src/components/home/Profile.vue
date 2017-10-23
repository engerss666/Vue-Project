<template>
    <div class="v-profile">
        <ul class="profile">
            <li class="profile-items role">角色</li>
            <li class="profile-items username">用户名</li>
            <li class="profile-items quit">退出</li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" rel="stylesheet/less">
.v-profile {
    position: absolute;
    top: 0;
    right: 60px;
    .profile {
        height: 100%;
        .profile-items {
            height: 100%;
            float: left;
            font-size: 12px;
            padding:0 10px;
            cursor: pointer;
        }
    }
}
</style>

