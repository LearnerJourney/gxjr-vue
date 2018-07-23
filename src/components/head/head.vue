<template>
  <div class="head">
    <div class="topDiv">
      <div class="head-left">
        <span></span>
        <span>财富热线：0871-64118867 0871-64111856  </span>
        <span @click="openQQ()"></span>
        <span>
            <span></span>
          </span>
      </div>
      <div class="head-right">
        <span @click = "skip('/')">免费注册<div></div></span>
        <span @click = "skip('/')">立即登陆<div></div></span>
        <span @click = "skip('/')">帮助中心<div></div></span>
        <span @click = "skip('/')">信息披露<div></div></span>
        <span @click = "skip('/')">手机投资<div></div></span>
        <span @click = "skip('/')">我要借款</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'head',
    data() {
      return {
        titleName: 'head'
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
  .head {
    /*margin-top: 0;*/
    background: #3d3d3e;
    line-height: 30px;
    height: 30px;
    font-size: 12px;
    color: #ccc;
    .topDiv {
      margin: 0 auto;
      width: 1200px !important;
      .head-left {
        width: 50%;
        display: inline-block;
        > span:first-child {
          position: relative;
          top: 5px;
          background: url("https://oss.wlgyjr.cn/web/images/header/phone.png") 0 0 no-repeat;
          height: 30px;
          width: 25px;
          vertical-align: middle;
        }
        span:nth-of-type(2) {
          vertical-align: middle;
        }
        span:nth-of-type(3) {
          background: url("https://oss.wlgyjr.cn/web/images/header/h_qq.png") 0 0 no-repeat;
          width: 20px;
          height: 20px;
          margin-left: 6px;
          position: relative;
          top: 5px;
        }
        span:nth-of-type(3):hover {
          background-image: url("https://oss.wlgyjr.cn/web/images/header/h_qq.png");
          background-repeat: no-repeat;
          background-position: 0 -20px;
          cursor: pointer;
        }
        span:nth-of-type(4) {
          background: url("https://oss.wlgyjr.cn/web/images/header/h_weixin.png") 0 0 no-repeat;
          cursor: pointer;
          width: 20px;
          height: 20px;
          margin-left: 6px;
          position: relative;
          top: 5px;
          > span {
            display: none;
          }
        }
        span:nth-of-type(4):hover {
          background-image: url("https://oss.wlgyjr.cn/web/images/header/h_weixin.png");
          background-repeat: no-repeat;
          background-position: 0 -20px;
          > span {
            display: block;
            background: url("https://oss.wlgyjr.cn/web/images/index/weixin_h.png") 0 0 no-repeat;
            position: absolute;
            z-index: 999;
            width: 120px;
            height: 120px;
            top: 38px;
            margin-left: -40px;
          }
        }
        span {
          display: inline-block;
        }
      }
      .head-right {
        float: right;
        display: inline-block;
        >span {
          display: inline-block;
          line-height: 30px;
          margin-left: 10px;
          >div{
            display: inline-block;
            vertical-align: middle;
            background: #fff;
            width: 1px;
            height: 15px;
            margin-left: 10px;
          }
        }
        >span:first-child {
          color: #ff5c5c;
        }
        >span:hover {
          cursor: pointer;
          color: #ff5c5c;
        }

      }
    }
  }
</style>
