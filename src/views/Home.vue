<template>
  <div id="home">
    <img class="homePic" src="@/assets/logo.png" alt="">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- 校园友介绍 设计背景 设计目的 注册登陆 -->
      <el-menu-item index="1">校园友介绍</el-menu-item>
      <el-menu-item index="2">设计背景</el-menu-item>
      <el-menu-item index="3">设计目的</el-menu-item>
      <el-menu-item index="4">注册登陆</el-menu-item>
    </el-menu>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key)
      switch(key) {
        case '1': this.$router.push('/home/introduce');break;
        case '2': this.$router.push('/home/designBackground');break;
        case '3': this.$router.push('/home/designAim');break;
        case '4': this.$router.push('/login');break;
      }
    }
  }
};
</script>
<style lang="less" scoped>
  .el-menu {
    display: flex;
    justify-content: center;
    .el-menu-item{
      height: 120px;
      line-height: 120px;
      font-size: 24px;
    }
  }
  .homePic {
    position: absolute;
    left: 200px;
    top: 10px;
    width: 100px;
    height: 100px;
    z-index: 999;
  }
</style>