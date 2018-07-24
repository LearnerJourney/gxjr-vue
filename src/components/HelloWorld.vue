<template>
  <div class="hello">
    <headCompent></headCompent>
    <headerCompent></headerCompent>
    <swiperCompent></swiperCompent>
    <div class=" noticeInfo">
      <div class="leftImg"></div>
      <ul style="display: inline-block">
        <li></li>
      </ul>
      <div class="lookInfo">查看更多 >></div>
    </div>
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>Essential Links</h2>-->
    <!--<ul>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://vuejs.org"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Core Docs-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://forum.vuejs.org"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Forum-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://chat.vuejs.org"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Community Chat-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://twitter.com/vuejs"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Twitter-->
        <!--</a>-->
      <!--</li>-->
      <!--<br>-->
      <!--<li>-->
        <!--<a-->
          <!--href="http://vuejs-templates.github.io/webpack/"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Docs for This Template-->
        <!--</a>-->
      <!--</li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
      <!--<li>-->
        <!--<a-->
          <!--href="http://router.vuejs.org/"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--vue-router-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="http://vuex.vuejs.org/"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--vuex-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="http://vue-loader.vuejs.org/"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--vue-loader-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://github.com/vuejs/awesome-vue"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--awesome-vue-->
        <!--</a>-->
      <!--</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
  import headCompent from './head/head.vue'
  import headerCompent from './header/header.vue'
  import swiperCompent from './common/swiper.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
    headCompent,
    headerCompent,
    swiperCompent
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
  .noticeInfo{
    width: 1200px !important;
    height: 50px;
    margin: 0 auto;
    >div{
     display:  inline-block;
    }
    .leftImg{
      width: 20px;
      height: 20px;
      background: url('https://oss.wlgyjr.cn/web/images/index/notice.png') no-repeat 0 -1px;
      margin-right: 10px;
    }
    .lookInfo{
      float: right;
      font-size: 16px;
      color: grey;
      line-height: 16px;
    }
  }
</style>
