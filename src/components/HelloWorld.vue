<template>
  <div class="hello">
    <!--顶部导航-->
    <headTopCompent></headTopCompent>
    <!--菜单导航栏-->
    <headBottomCompent></headBottomCompent>
    <!--轮播-->
    <swiperCompent></swiperCompent>
    <!--公告-->
    <div class="noticeInfo">
      <div class="leftImg"></div>
      <ul>
        <li v-on:mouseleave="createTimeOut" v-on:mouseenter="clearTimeOut">{{noticeText}}</li>
      </ul>
      <div class="lookInfo">查看更多 >></div>
    </div>
    <!-- 分割线 -->
    <div class="borderBtm"></div>
    <!-- 平台项目优势 -->
    <div class="container">
      <div class="gridUl">
        <div class="grid1">
          <router-link to="" target="_blank" style="text-decoration: none;">
            <div class="t1"><h4>律所法务监控</h4></div>
            <div class="t2">博政律师事务所<br>全程法务监控</div>
          </router-link>
        </div>

        <div class="grid2">
          <router-link to="" target="_blank" style="text-decoration: none;">
            <div class="t1"><h4>合规透明</h4></div>
            <div class="t2">信息披露严格规范<br>大数据场景化风控模式</div>
          </router-link>
        </div>

        <div class="grid3">
          <router-link to="" target="_blank" style="text-decoration: none;">
            <div class="t1"><h4>保险保驾护航</h4></div>
            <div class="t2">太平洋保险公司<br>全程保驾护航</div>
          </router-link>
        </div>

        <div class="grid4">
          <router-link to="" target="_blank" style="text-decoration: none;">
            <div class="t1"><h4>全额本息担保</h4></div>
            <div class="t2">第三方担保机构<br>本息全额担保</div>
          </router-link>
        </div>

        <div class="grid5">
          <router-link to="" target="_blank" style="text-decoration: none;">
            <div class="t1"><h4>资金存管对接中</h4></div>
            <div class="t2">银行资金<br>第三方存管对接中</div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 统计数据展示 -->
    <div class="index_data">
      <div class="container">
        <table class="dataUI">
          <tbody>
          <tr class="value">
            <td id="data_user_count">
              <span id="user_count_w">
                <v-countup :start-value="0" :end-value="100"></v-countup>
              </span>
              <span style="font-size: 12px;color: #666;">万</span>
              <span id="user_count_q">
                <v-countup :start-value="0" :end-value="100"></v-countup>
              </span>
              <span style="font-size: 12px;color: #666;">人</span></td>
            <td rowspan="2" id="data_split"></td>
            <td id="data_total_load">
              <span id="total_load_y">
                <v-countup :start-value="0" :end-value="100"></v-countup>
              </span>
              <span style="font-size: 12px;color: #666;">亿</span>
              <span id="total_load_w">
                <v-countup :start-value="0" :end-value="100"></v-countup>
              </span>
              <span style="font-size: 12px;color: #666;">万</span>
              <span id="total_load_q">
              <v-countup :start-value="0" :end-value="100"></v-countup>
              </span>
              <span style="font-size: 12px;color: #666;">元</span></td>
            <td id="data_total_repay_money">
              <span id="repay_money_y">
                <v-countup :start-value="0" :end-value="100"></v-countup>
              </span>
              <span style="font-size: 12px;color: #666;">亿</span>
              <span id="repay_money_w">
                <v-countup :start-value="0" :end-value="100"></v-countup>
              </span>
              <span style="font-size: 12px;color: #666;">万</span>
              <span id="repay_money_q">
                <v-countup :start-value="0" :end-value="100"></v-countup>
              </span>
              <span style="font-size: 12px;color: #666;">元</span></td>
            <td id="data_total_interest_money">
              <span id="interest_money_w">
                <v-countup :start-value="0" :end-value="100"></v-countup>
              </span>
              <span style="font-size: 12px;color: #666;">万</span>
              <span id="interest_money_q">
                <v-countup :start-value="0" :end-value="100"></v-countup>
              </span>
              <span style="font-size: 12px;color: #666;">元</span></td>
            <td rowspan="2" id="view_more">
              <div class="pull-right" style="cursor:pointer;display:none;">查看更多详细数据 &gt;&nbsp;</div>
            </td>
          </tr>
          <tr class="title">
            <td>累计注册用户（人）</td>
            <td>累计成交金额（元）</td>
            <td>已还本金总额（元）</td>
            <td>用户赚取利益（元）</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 标的 数据-->
    <div class="container">
      <!-- 新手专享标的 -->
      <div class="newHand">
        <div class="newHandImg"></div>
        <div class="newHandInfo">
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <!-- 企业标的 -->
      <div class="business">
        <div class="businessImg"></div>
        <div class="businessInfo">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headTopCompent from './headTop/headTop.vue'
  import headBottomCompent from './headBottom/headBottom.vue'
  import swiperCompent from './common/swiper.vue'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        noticeIndex: 0,//公告Index
        noticeText: '',//公告内容
        noticeList: [ //公告数据
          {
            index: 0,
            value: '测试测试测试0'
          }, {
            index: 1,
            value: '测试测试测试1'
          }, {
            index: 2,
            value: '测试测试测试2'
          }, {
            index: 3,
            value: '测试测试测试3'
          }
        ]
      }
    },
    components: {
      headTopCompent,
      headBottomCompent,
      swiperCompent
    },
    //计算属性
    computed: {
      timeOut: {
        set(val) {
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
        if (!this.noticeText) {
          this.noticeText = this.noticeList[0].value;
        }
        this.timeout = setTimeout(() => {
          _this.noticeIndex++;
          if (_this.noticeIndex == _this.noticeList.length) {
            _this.noticeIndex = 0;
          }
          _this.noticeText = _this.noticeList[_this.noticeIndex].value;
          _this.createTimeOut();
        }, 3000)
      },
      //消除定时器
      clearTimeOut() {
        clearTimeout(this.timeout);
      }
    },
    //页面渲染后执行
    mounted() {
      this.createTimeOut();
      var money = 36000;
      for (var i=0 ; i < 30 ; i++) {
        money = ((money*0.1) + money) + 36000;
      }
      console.log(money);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .noticeInfo {
    width: 1200px !important;
    height: 50px;
    margin: 0 auto;
    > div {
      display: inline-block;
    }
    > ul {
      margin: 0px;
      display: inline-block;
      height: 50px;
      overflow: hidden;
      vertical-align: middle;
      > li {
        display: block;
        line-height: 50px;
        margin-bottom: 14px;
        color: grey !important;
        position: relative;
      }
      > li:hover {
        color: #ff5c5c !important;
        cursor: pointer;
      }
      .checkAnm {
        animation: mymove 2s;
        -webkit-animation: mymove 2s; /*Safari and Chrome*/
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear; /* Safari 和 Chrome */
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
      }
      @keyframes mymove {
        from {
          top: 0px;
        }
        to {
          top: -32.5px
        }
      }

      @-webkit-keyframes mymove /*Safari and Chrome*/
      {
        from {
          top: 0px;
        }
        to {
          top: -32.5px;
        }
      }
    }
    .leftImg {
      width: 20px;
      height: 20px;
      background: url('https://oss.wlgyjr.cn/web/images/index/notice.png') no-repeat 0 -1px;
      margin-right: 10px;
      vertical-align: middle;
    }
    .lookInfo {
      float: right;
      font-size: 16px;
      color: grey;
      line-height: 50px;
      vertical-align: middle;
    }
  }

  .borderBtm {
    border-bottom: 1px solid #ececec;
    height: 1px;
    width: 100%;
  }

  .container {
    padding: 0;
    margin: 0 auto;
    width: 1200px !important;
    .gridUl {
      width: 100%;
      height: 190px;
      .grid1 {
        margin-right: 135px;
        .t1 {
          background-image: url(https://oss.wlgyjr.cn/web/images/index/grid1_b.png);
        }
      }
      .grid2 {
        .t1 {
          background-image: url(https://oss.wlgyjr.cn/web/images/index/grid2_b.png);
        }
      }
      .grid3 {
        margin: 0 135px;
        .t1 {
          background-image: url(https://oss.wlgyjr.cn/web/images/index/grid3_b.png)
        }
      }
      .grid4 {
        .t1 {
          background-image: url(https://oss.wlgyjr.cn/web/images/index/grid4_b.png)
        }
      }
      .grid5 {
        float: right;
        .t1 {
          background-image: url(https://oss.wlgyjr.cn/web/images/index/grid5_b.png)
        }
      }
      > div {
        width: 130px;
        height: 100%;
        float: left;
        text-align: center;
        .t1 {
          width: 100%;
          height: 90px;
          margin-top: 10px;
          background-repeat: no-repeat;
          background-size: 80px;
          background-position: center center;
          border: none;
          color: grey;
          h4 {
            position: absolute;
            width: 130px;
            margin-top: 96px;
            font-weight: 700;
            font-size: 14px;
          }
        }
        .t2 {
          margin-top: 30px;
          line-height: 16px;
          color: #999;
          font-size: 12px;
        }
      }
    }
    .newHand {
      height: 325px;
      margin-top: 20px;
      position: relative;
      .newHandImg {
        display: inline-block;
        height: 325px;
        width: 250px;
        background:url('https://oss.wlgyjr.cn/web/images/index/deal_new.png') no-repeat;
        cursor: pointer;
      }
      .newHandInfo {
        position: absolute;
        display: inline-block;
        border: 1px solid #ddd;
        height: 325px;
        >div {
          height: 107px;
        }
        >div >div {
          height: 107px;
          width: 453px;
          display: inline-block;
          border: 1px solid #000000;
        }
      }
    }
    .business {
      height: 800px;
      margin-top: 20px;
      position: relative;
      .businessImg {
        display: inline-block;
        height: 800px;
        width: 250px;
        background:url('https://oss.wlgyjr.cn/web/images/index/deal6.png') no-repeat;
        background-size: 250px 800px;
        cursor: pointer;
      }
      .businessInfo {
        position: absolute;
        display: inline-block;
        border: 1px solid #ddd;
        border-left: 0;
        height: 800px;
        width: 910px;
        >div {
          margin: 0 5px;
          height: 131px;
          border-bottom: 2px solid #e6e6e6;
        }
        >div:hover {
          box-shadow: 0 0 0 #e6e6e6,
          0 -2px 1px #e6e6e6,
          0 2px 1px #e6e6e6,
          2px 0 1px #e6e6e6;
        }
      }
    }
  }

  .index_data {
    height: 80px;
    background: #f5f5f5
  }

  .index_data .container {
    padding-top: 15px
  }

  .index_data .dataUI {
    width: 100%;
    text-align: center
  }

  .index_data .dataUI .title {
    font-size: 14px;
    font-weight: 700;
    color: #666
  }

  .index_data .dataUI .value {
    font-size: 18px;
    color: #ff5c5c
  }

  .index_data #data_user_count {
    width: 180px
  }

  .index_data #data_split {
    width: 60px
  }

  .index_data #view_more {
    width: 155px;
    vertical-align: middle
  }

  .index_data #view_more div {
    width: 140px;
    height: 26px;
    font-size: 14px;
    color: #ff5c5c;
    border: 1px solid #ff5c5c
  }
</style>
