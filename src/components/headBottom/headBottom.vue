<template>
  <div class="headBottom">
    <div class="condition">
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
        <router-link to="/">
          <li v-bind:class="{'current': this.clickOption == 0 && this.$route.path == '/' }" @click="commitOption(0)">
            首页
          </li>
        </router-link>
        <router-link to="/invest">
          <li v-bind:class="{'current': this.clickOption == 1 || this.$route.path == '/invest'}" @click="commitOption(1)">
           我要投资
          </li>
        </router-link>
        <router-link to="">
          <li v-bind:class="{'current': this.clickOption == 2}" @click="commitOption(2)">
           投资保障
          </li>
        </router-link>
        <router-link to="">
          <li v-bind:class="{'current': this.clickOption == 3}" @click="commitOption(3)">
            新手指引
          </li>
        </router-link>
        <router-link to="">
          <li v-bind:class="{'current': this.clickOption == 4}" @click="commitOption(4)">
            关于我们
          </li>
        </router-link>
        <router-link to="">
          <li @click="clickOption = 5">
              <span class="myAccount">我的账户</span>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'headBottom',
    data() {
      return {
      }
    },
    computed: mapState([
      // 映射 this.clickOption 为 store.state.clickOption
      'clickOption'
    ]),
    methods: {
    //  菜单栏选择值变化
      commitOption(option) {
        console.log(this.clickOption == 0 && this.$route.path == '/');
        this.$store.commit('changeClickOption',option)
      }
    },
    mounted: function () {
      console.log();
    }
  }
</script>

<style lang="scss" scoped>
  .headBottom {
    background: #fff;
    margin-bottom: 10px;
    /*line-height: 78px;*/
    height: 78px;
    font-size: 12px;
    color: #ccc;
    .condition {
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
        >a {
          color: #000;
          text-decoration:none;
          >li {
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
          }
          >li:hover,>li>span:hover {
            color: #ff5c5c !important;
          }
        }

        >a:first-child>li{
          width: 70px;
        }
      }
    }
  }
</style>
