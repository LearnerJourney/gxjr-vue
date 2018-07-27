<template>
  <div class="swiperImg">
    <!--轮播图-->
    <img :src="imgUrl"></img>
    <!--pagination-->
    <ul class="pagination">
      <li v-for="solid in solidList" v-on:mouseleave="createTimeOut" v-on:mouseenter="clearTimeOut(solid.index)"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "swiperComponents",
    data() {
      return {
        imgIndex: 0,
        imgUrl: 'https://www.wlgyjr.com/public/attachment/201804/25/14/5ae026e98332c.jpg',
        solidList: [
          {url: 'https://www.wlgyjr.com/public/attachment/201804/25/14/5ae026e98332c.jpg', index: 0},
          {url: 'https://www.wlgyjr.com/public/attachment/201805/22/11/5b038f4998733.jpg', index: 1}]
      }
    },
    //计算属性
    computed: {
      timeOut: {
        set (val) {
          this.$store.state.timeout.compileTimeout = val;
        },
        get() {
          return this.$store.state.timeout.compileTimeout;
        }
      },
    },
    methods: {
      //创建定时器
      createTimeOut() {
        let _this = this;
        this.timeout = setTimeout(() => {
          _this.imgIndex ++;
          if (_this.imgIndex == _this.solidList.length) {
            _this.imgIndex = 0;
          }
          _this.imgUrl = _this.solidList[_this.imgIndex].url;
          _this.createTimeOut();
        },3000)
      },
      //销毁定时器
      clearTimeOut(index) {
        this.imgIndex = index;
        this.imgUrl = this.solidList[this.imgIndex].url;
        clearTimeout(this.timeout);
      }
    },
    //页面渲染后执行
    mounted() {
      this.createTimeOut();
    }
  }
</script>

<style lang="scss">
  .swiperImg {
    clear: both;
    width: 100%;
    height: 400px;
    position: relative;
    min-width: 1200px;
    >img {
      width: 100%;
      height: 100%;
      display: inline-block;
    }
    >ul {
      display: inline-block;
      width: 300px;
      position: absolute;
      bottom: 10px;
      list-style: none;
      left: 50%;
      margin-left: -150px;
      text-align:center;
      >li {
        display: inline-block;
        margin-left: 10px;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: #fff;
        opacity: .5;
        cursor: pointer;
      }
      >li:hover {
        width: 20px;
      }
    }

  }
</style>
