<!-- 公共的轮播图组件 -->
<template>
  <div class="swipe">
    <!-- :auto="2000" 间隔时间 :show-indicators="true" 是否显示指示点
    :default-index="1" 初始化索引 :continuous="true" 是否循环播放
    @change="handleChange" 绑定一个事件，参数index可以获取索引 -->

    <mt-swipe
      :auto="2000"
      :show-indicators="true"
      :default-index="1"
      :continuous="true"
    >
      <mt-swipe-item>
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978394783.jpg"
          alt
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978396430.jpg"
          alt
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978395241.jpg"
          alt
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978395260.jpg"
          alt
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978397105.jpg"
          alt
        />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
// 按需引入
// import { getHomeSwipe } from "@/api/index";

export default {
  data() {
    return {};
  },
  methods: {
    // handleChange(index) {
    //   // console.log(index);
    // },
  },
  computed: {},
  mounted() {
    // getHomeSwipe().then((res) => {
    //   if (res.status == 200) {
    //     this.swipeDatas = res.data;
    //   }
    // });
  },
};
</script>
<style lang="less" scoped>
.swipe {
  width: 100%;
  height: 12rem;
  img {
    width: 100%;
    height: 12rem;
  }
}
</style>