<template>
  <div class="headBottom">
    <!--<router-link to="/">1111</router-link>-->
    <div style="float: left">
      <router-link to="/">
        <img class="leftImg" src="https://oss.wlgyjr.cn/web/images/logo.png">
      </router-link>
    </div>
    <div style="float: left">
      <img class="rightImg" src="https://oss.wlgyjr.cn/web/images/index/logo_attach.png">
    </div>
    <ul class="main_nav">
      <li v-bind:class="{'current': clickOption == 0}" @click="clickOption = 0">
        <router-link to="">首页</router-link>
      </li>
      <li v-bind:class="{'current': clickOption == 1}" @click="clickOption = 1">
        <router-link to="">我要投资</router-link>
      </li>
      <li v-bind:class="{'current': clickOption == 2}" @click="clickOption = 2">
        <router-link to="">投资保障</router-link>
      </li>
      <li v-bind:class="{'current': clickOption == 3}" @click="clickOption = 3">
        <router-link to="">新手指引</router-link>
      </li>
      <li v-bind:class="{'current': clickOption == 4}" @click="clickOption = 4">
        <router-link to="">关于我们</router-link>
      </li>
      <li @click="clickOption = 5">
        <router-link to="">
          <span class="myAccount">我的账户</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'headBottom',
    data() {
      return {
        clickOption: 0
      }
    },
    methods: {
      //QQ联系方式
      openQQ() {
        window.open('//shang.qq.com/wpa/qunwpa?idkey=d552ccad0398fafd88192ca1220b3a8a3bdb0708eb29cac11ef1f6c00b369641');
      },
      skip(routerUrl) {
        this.$router.push({path: routerUrl });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .headBottom {
    line-height: 78px;
    height: 78px;
    font-size: 12px;
    color: #ccc;
    margin: 0 auto;
    width: 1200px !important;
    >div {
      display: inline-block;
    }
    .leftImg {
      margin-top: 10px;
    }
    .rightImg {
      margin-top: 8px;
      margin-left: 20px;
      height: 60px;
      width: 230px;
    }
    .current {
      border-bottom: 4px solid #ff5b5b;
      >a {
        color: #ff5c5c !important;
      }
    }
    .myAccount{
      display: inline-block;
      height: 28px;
      width: 100px;
      line-height: 28px;
      font-size: 14px;
      border: 1px solid #e6e6e6;
      background: url(https://oss.wlgyjr.cn/web/images/header/zhanghu.png) no-repeat 5px 7px;
      text-indent: 24px;
      color: #666;
      margin-top: 25px;
    }
    .main_nav {
      float: right;
      height: 78px;
      line-height: 78px;
      margin: 0;
      overflow: visible;
      z-index: 99;
      list-style-type: none;
      padding-left: 0;
      padding-right: 0;
      li {
        height: 78px;
        width: 108px;
        display: inline-block;
        float: left;
        z-index: 1;
        text-align: center;
        color: #333;
        font-size: 16px;
        overflow: hidden;
        padding: 0 auto;
        line-height: 78px;
        cursor: pointer;
        >a{
          color: #000;
          text-decoration:none
        }
      }
      li:hover {
        >a ,>a >span{
          color: #ff5c5c !important;
        }
      }
      li:first-child {
        width: 70px;
      }
    }
  }
</style>
