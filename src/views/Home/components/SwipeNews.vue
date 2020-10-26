<!--  -->
<template>
  <div class="swipe-news">
    <div class="news-title">
      <img :src="imgTitle" alt="" />
    </div>
    <ul :class="{ 'news-list': true, trans: flag == true }" ref="news">
      <li v-for="list in newsListDatas" :key="list.id">{{ list.title }}</li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      imgTitle: require("@/assets/images/news-title.png"),
      flag: false,
      timer: "",
      newsListDatas: [
        {
          id: "1",
          title: "服务店突破2000多家",
        },
        {
          id: "2",
          title: "三大国际腕表品牌签约",
        },
        {
          id: "3",
          title: "服务店突破2000多家",
        },
        {
          id: "4",
          title: "三大国际腕表品牌签约",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scrollnews() {
      var oUl = this.$refs.news;
      oUl.style.marginTop = "-5rem";
      var that = this;
      that.flag = !that.flag;
      setTimeout(function () {
        that.newsListDatas.push(that.newsListDatas[0]);
        that.newsListDatas.shift();
        oUl.style.marginTop = "0";
        that.flag = !that.flag;
      }, 500);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timer = setInterval(this.scrollnews, 2000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.timer);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.swipe-news {
  display: flex;
  height: 5rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 0 10px;
  overflow: hidden;
  .news-title {
    img {
      height: 3rem;
      margin-top: 1rem;
    }
  }
  .trans {
    transition: all 0.5s;
  }
  .news-list {
    margin-left: 2rem;
    li {
      height: 5rem;
      line-height: 5rem;
      font-size: 1.4rem;
    }
  }
}
</style>