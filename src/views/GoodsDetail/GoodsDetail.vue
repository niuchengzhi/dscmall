<!-- 商品详情页 -->
<template>
  <div>
    <Head title="商品详情" :left="left" :right="right" />
    <div class="detail-container">
      <mt-swipe
        :auto="2000"
        :show-indicators="true"
        :default-index="1"
        :continuous="true"
      >
        <mt-swipe-item>
          <img :src="goodsdetail.goods_img" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img :src="goodsdetail.goods_img" alt />
        </mt-swipe-item>
      </mt-swipe>
      <!-- <div class="detail-swiper">
      <div class="swiper-container">
        <div class="swipe-wrapper">
          <div class="swipe-slide">
            <img :src="goodsdetail.goods_img" alt="" />
          </div>
          <div class="swipe-slide">
            <img :src="goodsdetail.goods_img" alt="" />
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div> -->
      <div class="detail-content">
        <div class="detail-price">
          {{ goodsdetail.shop_price }}
        </div>
        <div class="detail-title">
          {{ goodsdetail.goods_name }}
        </div>
      </div>
      <div class="datail-img" v-html="goodsdetail.goods_desc"></div>
      <div class="detail-footer">
        <div class="kefu">
          <i class="iconfont icon-kefu"></i>
          <span>客服</span>
        </div>
        <div class="shoucang">
          <i class="iconfont icon-shoucang"></i>
          <span>收藏</span>
        </div>
        <div class="cart">
          <router-link to="/cart">
            <i class="iconfont icon-gouwuche"></i>
            <div :class="{ addNum: flag }" v-show="flag">+1</div>
            <em>{{ count }}</em>
            <span>购物车</span>
          </router-link>
        </div>
        <div class="addcart" @click="addCartFn(goodsdetail)">加入购物车</div>
        <div class="buy">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper from "swiper";
// import "swiper/dist/css/swiper.css";
import Head from "@/components/Head.vue";
// import "swiper/dist/css/swiper.css";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Head,
  },
  data() {
    //这里存放数据
    return {
      left: true,
      flag: false,
      right: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    goodsdetail() {
      return this.$store.state.goodsDetails;
    },
    count() {
      let count = 0;
      this.$store.state.carts.map((item) => {
        count += item.value;
      });
      return count;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    addCartFn(data) {
      console.log(data);
      console.log(this.$store.state.carts);
      var isCart = this.$store.state.carts.find((item) => {
        if (item.goods_id == data.goods_id) {
          item.value++;
        }
        return item.goods_id == data.goods_id;
      });
      if (!isCart) {
        var cartData = {
          goods_id: data.goods_id,
          goods_name: data.goods_name,
          shop_price: data.shop_price,
          goods_img: data.goods_img,
          value: 1,
          isSelect: false,
        };
      }
      this.$store.commit("setCartDatas", cartData);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("getGoodsDetails", this.$route.query.goods_id);
    console.log(this.$route.query.goods_id);
    // new Swiper(".swiper-container", {
    //   autoplay: true,
    //   loop: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    // });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.detail-container {
  width: 100%;
  .mint-swipe {
    margin-top: 5rem;
    width: 100%;
    height: 37.5rem;
    .mint-swipe-items-wrap {
      width: 100%;
      img {
        width: 100%;
        height: 37.5rem;
      }
    }
  }
  img {
    width: 100% !important;
  }
  .detail-content {
    width: 100%;
    border: 10px solid #fff;
    // box-sizing: border-box;
    width: calc(100% - 20px);
    img {
      width: 100%;
      margin-left: 5%;
    }
    .detail-price {
      width: 100%;
      font-size: 1.8rem;
      color: #f00;
      &::before {
        font-size: 1.2rem;
        content: "￥";
      }
    }
    .detail-title {
      width: 100%;
      margin: 2rem 0;
      font-size: 1.4rem;
      line-height: 2rem;
      color: #333;
    }
  }
  .datail-img {
    text-align: center;
    width: 100%;
    .s-img {
      .img {
        img {
          width: 100%;
        }
      }
    }
  }
  .detail-footer {
    width: 100%;
    height: 4.9rem;
    border-top: 1px solid #efefef;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    > div {
      width: 100%;
      font-size: 1.2rem;
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #666;
      i {
        font-size: 2rem;
      }
    }
    .buy {
      width: 100%;
      flex: 2;
      background: #ff976a;
      color: #fff;
      font-size: 1.4rem;
    }
    .addcart {
      width: 100%;
      background-color: #f44;
      color: #fff;
    }
    .shoucang {
      width: 100%;
      border-left: 1px solid #efefef;
      border-right: 1px solid #efefef;
    }
    .cart {
      width: 100%;
      position: relative;
      a {
        display: block;
        display: flex;
        flex-direction: column;
        text-align: center;
      }
      em {
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        min-width: 1.4rem;
        height: 1.4rem;
        border-radius: 0.8rem;
        background: red;
        color: #fff;
        text-align: center;
        line-height: 1.4rem;
        font-style: normal;
        padding: 0.2rem;
      }
      .addNum {
        width: 100%;
        color: #f00;
        position: absolute;
        font-size: 2rem;
        width: 100%;
        top: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        opacity: 0;
        text-align: center;
        animation: moveup 1s linear;
      }
      @keyframes moveup {
        0% {
          top: 1rem;
          opacity: 0;
        }
        50% {
          top: -2rem;
          opacity: 1;
        }
        100% {
          top: -2rem;
          opacity: 0;
        }
      }
    }
  }
  .mint-swipe {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 37.5rem;
  }
}
</style>

