<template>
    <div class="invest">
      <headTopCompent></headTopCompent>
      <headBottomCompent></headBottomCompent>
      <div class="container">
        <div class="investTop">
          <div class="condition">
            <div class="arrt-list">
              <ul>
                <li>项目期限:</li>
                <li>不限</li>
                <li>3个月以下</li>
                <li>3-6个月</li>
                <li>6-9个月</li>
                <li>9-12个月</li>
                <li>12个月以上</li>
              </ul>
            </div>
            <div class="arrt-list">
              <ul>
                <li>项目期限:</li>
                <li>不限</li>
                <li>3个月以下</li>
                <li>3-6个月</li>
                <li>6-9个月</li>
                <li>9-12个月</li>
                <li>12个月以上</li>
              </ul>
            </div>
            <div class="arrt-list">
              <ul>
                <li>项目期限:</li>
                <li>不限</li>
                <li>3个月以下</li>
                <li>3-6个月</li>
                <li>6-9个月</li>
                <li>9-12个月</li>
                <li>12个月以上</li>
              </ul>
            </div>
            <div class="arrt-list">
              <ul>
                <li>项目期限:</li>
                <li>不限</li>
                <li>3个月以下</li>
                <li>3-6个月</li>
                <li>6-9个月</li>
                <li>9-12个月</li>
                <li>12个月以上</li>
              </ul>
            </div>
            <div class="arrt-list">
              <ul>
                <li>项目期限:</li>
                <li>不限</li>
                <li>3个月以下</li>
                <li>3-6个月</li>
                <li>6-9个月</li>
                <li>9-12个月</li>
                <li>12个月以上</li>
              </ul>
            </div>
            <div class="investCount">
              <div class="countItem">
                <span>项目数</span>
                <span>1402</span>
              </div>
              <div class="countItem">
                <span>投标中</span>
                <span>1</span>
              </div>
              <div class="countItem">
                <span>满标</span>
                <span>10</span>
              </div>
              <div class="countItem">
                <span>还款中</span>
                <span>358</span>
              </div>
              <div class="countItem">
                <span>已完成</span>
                <span>1028</span>
              </div>
            </div>
          </div>
          <div class="textInfo">
            <div>
              <div>信贷学堂</div>
              <div>什么是互联网金融</div>
              <div>是传统金融机构与互联网企业利用互联网技术和信息通信技术实现资金融通、支付、投资和信息中介服务的新型金融业务模式。是在实现安全、移动等网络技术水平上，被用户熟悉接受后（尤其是对电子商务的接受），自然而然为适应新的需求而产生的新模式及新业务。</div>
              <div>什么是信用标</div>
              <div>所谓信用标是指借款人无需抵押而凭借自己的信用向平台借款。由于无抵押，平台出借的资金比较少，但收取的利息较高。</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style="height: 500px">
        <div class="investInfo">
          <div class="topDiv">
            <div class="redDiv"></div><div>某商贸企业资金周转1357号</div>
          </div>
          <div class="bottomDiv">
            <table>
              <tr>
                <td>9&nbsp;<span>%</span></td>
                <td>6&nbsp;<span>个月</span></td>
                <td>￥50&nbsp;<span>万</span></td>
                <td>付息还本</td>
                <td>
                  <div>
                    <div :style="{width: schedule + '%'}"></div>
                  </div>
                  <span>90%</span>
                </td>
                <td><div>还款中</div></td>
              </tr>
              <tr>
                <td>年化收益率</td>
                <td>项目期限</td>
                <td>募集金额</td>
                <td>还款方式</td>
                <td>剩余金额:50,000.00元</td>
                <td>到期时间:2018-07-18</td>
              </tr>
            </table>
          </div>
        </div>
        <pageCompent v-bind:page="1000" @change="pageChange"></pageCompent>
      </div>
    </div>
</template>

<script>
  import headTopCompent from '../headTop/headTop.vue'
  import headBottomCompent from '../headBottom/headBottom.vue'
  import pageCompent from '../common/page'
    export default {
      name: "invest",
      components: {
        headTopCompent,
        headBottomCompent,
        pageCompent
      },
      data() {
        return {
          schedule: 20
        }
      },
      methods: {
        pageChange (page) {
          console.log(page);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .invest {
    background: #f5f5f5;
    .container{
      width: 1200px;
      margin: 0 auto;
      .investTop {
        padding-top:20px;
        >div {
          display: inline-block;
        }
        .condition {
          background:  #ffffff;
          width: 890px;
          vertical-align: middle;
          .arrt-list {
            line-height: 40px;
            margin-top: 10px;
            list-style: none;
            text-align: center;
            color: #666;
            font-size: 14px;
            >ul {
              padding: 0px;
              float: left;
              margin: 0;
              margin-top: 10px;
            }
            >ul:last-child {
              margin-bottom: 10px;
            }
            >ul li{
              display: inline-block;
              margin-right: 20px;
              width: 100px;
            }
            li:first-child {
              margin-right: 0;
              text-align: left;
              width: 80px;
              padding-left: 20px;
            }
            li:nth-of-type(2) {
              border: 1px solid #ff5c5c;
              color: #ff5c5c;
            }
          }
          .investCount {
            line-height: 40px;
            font-size: 14px;
            color: #666;
            border-top: 1px solid #ccc;
            clear: both;
            padding: 10px 0;
            margin: 0 20px;
            .countItem {
              display: inline-block;
              margin-right: 20px;
              span:last-child {
                display: inline-block;
                margin-left: 5px;
                color: #ff5c5c;
              }
            }
          }
        }
        .textInfo {
          width: 290px;
          height: 381px;
          vertical-align: middle;
          background: #fff;
          margin-left: 10px;
          font-size: 12px;
          color: #666;
          >div {
            margin: 20px;
            height: 340px;
            border: 1px solid #000;
            padding-left: 10px;
            >div:first-child {
              margin: 20px 0 0 10px;
              font-size: 18px;
              color: #ff5c5c;
            }
            >div:nth-of-type(2),>div:nth-of-type(4) {
              font-size: 16px;
              margin: 10px 0;
              text-indent:1.5em;
            }
            >div:nth-of-type(3),>div:nth-of-type(5) {
              text-indent: 3em;
            }
          }
        }
      }
    }
    .investInfo {
      height: 160px;
      background: #fff;
      margin-top: 30px;
      border: 0 none;
      padding: 20px 40px;
      .topDiv {
        color: #666;
        height: 25px;
        font-size: 18px;
        >div {
          display: inline-block;
          vertical-align: middle;
        }
        .redDiv {
          background: #ff5c5c;
          height: 18px;
          width: 5px;
          margin-right: 5px;
        }
      }
      .bottomDiv {
        table {
          text-align: center;
        }
        table >tr:first-child {
          margin-top: 20px;
          display: inline-block;
          >td{
            font-size: 36px;
            >span {
              font-size: 16px;
              color: #999;
            }
          }
          >td:first-child{
            color: #ff5c5c;
            width: 190px;
          }
          >td:nth-of-type(2){
            width: 120px;
          }
          >td:nth-of-type(3){
            font-size: 30px;
            width: 190px;
          }
          >td:nth-of-type(4){
            width: 160px;
            font-size: 24px;
          }
          >td:nth-of-type(5){
            text-align: left;
            width: 280px;
            >div {
              height: 2px;
              border: 0 none;
              width: 160px;
              background-color: #ccc;
              display: inline-block;
              vertical-align: middle;
              margin-right: 5px;
              >div {
                height: 2px;
                border: 0 none;
                background-color: #ff5c5c;
              }
            }
            >span {
              vertical-align: middle;
            }
          }
          >td:nth-of-type(6){
            >div {
              border:1px solid #ccc;
              border-radius: 4px;
              padding: 6px 12px;
              font-size: 14px;
              font-weight: 400;
              opacity: 0.6;
              color: #333;
            }
            width: 142px;
          }
        }
        tr:nth-of-type(2) {
          color: #999;
          font-size: 12px;
          display: inline-block;
          >td:first-child{
            width: 190px;
          }
          >td:nth-of-type(2){
            width: 120px;
          }
          >td:nth-of-type(3){
            width: 190px;
          }
          >td:nth-of-type(4){
            width: 160px;
          }
          >td:nth-of-type(5){
            text-align: left;
            width: 280px;
          }
          >td:nth-of-type(6){
            width: 142px;
          }
        }
      }
    }
  }

</style>
