<template>
  <div class="page" @change="pageChange()">
    <div class="condition">
      <ul>
        <li :class="{'prev': nowPage > 6}" v-if="nowPage > 6" @click="pageClick(1)" >1</li>
        <li :class="{'prev': nowPage < 6}" v-if="nowPage > 0" @click="prevClick()">上一页</li>
        <li v-for="pageValue in pageList"  :class="{'clickSty': nowPage == pageValue, 'prev': nowPage-5 > 0?pageValue == nowPage-5:pageValue == 0,'last': nowPage == pageNumber}" @click="pageClick(pageValue)">{{pageValue}}</li>
        <li class="next" v-if="nowPage <  pageNumber" :class="{'last': pageNumber != nowPage && !(pageNumber>11 && nowPage < pageNumber-5)}" @click="nextClick()">下一页</li>
        <li class="last" v-if="pageNumber>11 && nowPage < pageNumber-5" @click="pageClick(pageNumber)">{{pageNumber}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "page",
      data() {
        return {
          nowPage: 0,
          pageNumber: 0,
          pageList: []
        }
      },
      props: {
        'page' : Number
      },
      mounted: function () {
        this.$nextTick(function () {
          this.pageNumber = Math.ceil(this.page/10);
          console.log(this.page);
          for (let i = 1; i < this.pageNumber+1; i++) {
            if (i > 11){
              return;
            }
            this.pageList.push(i);
          }
          console.log(this.pageList);
        })
      },
      methods: {
        //改变页码
        pageClick: function (pageValue) {
          let vm = this;
          this.nowPage = pageValue;
          var maxNumber = this.pageList[0] + 5 > this.nowPage ? this.pageList[0] > 1 ? (this.pageList[0] > 5 ?this.nowPage + 5 :this.pageList[10] -(this.pageList[0]-1)) : this.pageList[10]:(this.nowPage + 5 > this.pageNumber ? (this.pageNumber - this.nowPage) + this.nowPage : this.nowPage + 5);
          if (pageValue == 1) {
            maxNumber = 11;
          }
          var minNumber = maxNumber - 10;
          // this.$forceUpdate();
          var x = 0;
          for (let i = minNumber ; i < maxNumber+1 ; i++) {
            vm.$set(this.pageList,x,i);
            x ++ ;
          }
          console.log(this.pageList);
        },
        //上一页
        prevClick: function() {
          this.nowPage = this.nowPage == 1 ? 1 : this.nowPage -- ;
          this.pageClick(this.nowPage);
        },
        //下一页
        nextClick: function() {
          this.nowPage = this.nowPage == this.pageNumber ? 1 : this.nowPage ++ ;
          this.pageClick(this.nowPage)
        }
      }
    }
</script>

<style lang="scss" scoped>
  .page {
    background: #f5f5f5;
    .condition{
      width: 1200px;
      min-width: 1200px;
      margin: 0 auto;
      ul {
        border-radius: 4px;
        list-style-type: none;
        color: #337ab7;
        width: 700px;
        position: absolute;
        left: 50%;
        margin-left: -300px;
        padding-left: 0px;
        li {
          float: left;
          padding: 6px 12px;
          margin-left: -1px;
          line-height: 1.42857143;
          color: #337ab7;
          text-decoration: none;
          background-color: #fff;
          border: 1px solid #ddd;
          cursor: pointer;
        }
        .clickSty {
          color: #fff;
          cursor: default;
          background-color: #337ab7;
          border-color: #337ab7;
        }
        .prev {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        .last {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }
  }
</style>
