<!-- 首页-首页 -->
<template>
  <div class="home-index">
    <div class="swipe-wrap">
      <Swipe />
    </div>
    <QuickNav />
    <SwipeNews />
    <img
      class="img1"
      src="https://x.dscmall.cn/storage/data/gallery_album/original_img/CPvH5WHHbF0EoG9XjRQbbT3knMVCeEt9DlYGQhJM.png"
      alt=""
    />
    <SwipeList :swipeListDatas="swipeListDatas" />
    <div style="height: 1rem"></div>
    <Miaosha />
    <Tabtime />
    <!-- <div>首页-首页组件</div> -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// 引入轮播图组件
import Swipe from "@/components/Swipe.vue";
import QuickNav from "../components/QuickNav";
import SwipeNews from "../components/SwipeNews";
import SwipeList from "../components/SwipeList";
import Miaosha from "../components/Miaosha";
import Tabtime from "../components/Tabtime";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    QuickNav,
    SwipeNews,
    SwipeList,
    Miaosha,
    Tabtime,
  },
  data() {
    //这里存放数据
    return {
      //Index.vue这个组件是SwipeList.vue组件的父组件，在父组件中定义数据通过父传子，将数据传递给子组件
      swipeListDatas: [
        {
          id: 1,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅1",
        },
        {
          id: 2,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅2",
        },
        {
          id: 3,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅3",
        },
        {
          id: 4,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅4",
        },
        {
          id: 5,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅5",
        },
        {
          id: 6,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅6",
        },
        {
          id: 7,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅7",
        },
        {
          id: 8,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅8",
        },
        {
          id: 9,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅9",
        },
        {
          id: 10,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅10",
        },
      ],
    };
  },
};
</script>
<style lang="less">
.swipe-wrap {
  margin: 0px 10px;
  div {
    border-radius: 10px !important;
  }
}
.img1 {
  width: 36rem;
  height: 18rem;
  position: relative;
  left: 50%;
  margin-left: -18rem;
}
</style>