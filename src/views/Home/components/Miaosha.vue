<!-- 秒杀 -->
<template>
  <div class="miaosha">
    <div>
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png"
        alt=""
      />
    </div>
    <p>
      <span class="ju">距结束还剩</span>
      <span>{{ hh }}</span>
      <i>:</i>
      <span>{{ mm }}</span>
      <i>:</i>
      <span>{{ ss }}</span>
    </p>
    <!-- <div class="miao1"></div> -->
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
      dd: "00",
      hh: "00",
      mm: "00",
      ss: "00",
      timer: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    timeFn() {
      var date = new Date();
      var nowTime = date.getTime();
      var endDate = new Date("2021-10-11 00:00:00");
      var endTime = endDate.getTime();
      var oTime = endTime - nowTime;
      if (oTime > 0) {
        this.dd = Math.floor(oTime / 1000 / 60 / 60 / 24);
        this.dd = this.dd < 10 ? "0" + this.dd : this.dd;
        this.hh = Math.floor((oTime / 1000 / 60 / 60) % 24); //时
        this.hh = this.hh < 10 ? "0" + this.hh : this.hh;
        this.mm = Math.floor((oTime / 1000 / 60) % 60); //分
        this.mm = this.mm < 10 ? "0" + this.mm : this.mm;
        this.ss = Math.floor((oTime / 1000) % 60);
        this.ss = this.ss < 10 ? "0" + this.ss : this.ss;
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timer = setInterval(this.timeFn, 1000);
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
.miaosha {
  width: 100%;
  height: 6rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  // margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 10rem;
    height: 2rem;
  }
  p {
    display: flex;
    span {
      display: block;
      width: 2.4rem;
      height: 2rem;
      background-color: red;
      color: #fff;
      margin: 0 0.5rem;
      border-radius: 0.5rem;
      line-height: 2rem;
      text-align: center;
    }
    .ju {
      font-size: 1.3rem;
      color: #333;
      margin-right: 1rem;
      background-color: #fff;
      width: 7rem;
      height: 1rem;
    }
    i {
      font-style: normal;
      color: red;
      margin: 0 0.5rem;
      font-weight: 900;
    }
  }
}
</style>