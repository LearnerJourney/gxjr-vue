<template>
  <!-- Swiper -->
  <swiper :options="swiperOption">
    <swiper-slide v-for="solid in solidList" :key="solid"><img :src="solid"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: "swiperComponents",
    data() {
      return {
        swiperOption: {
          spaceBetween: 0,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          }
        },
        solidList: ['https://www.wlgyjr.com/public/attachment/201804/25/14/5ae026e98332c.jpg', 'https://www.wlgyjr.com/public/attachment/201804/25/14/5ae026e98332c.jpg', 'https://www.wlgyjr.com/public/attachment/201804/25/14/5ae026e98332c.jpg', 'https://www.wlgyjr.com/public/attachment/201804/25/14/5ae026e98332c.jpg', 'https://www.wlgyjr.com/public/attachment/201804/25/14/5ae026e98332c.jpg']
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
