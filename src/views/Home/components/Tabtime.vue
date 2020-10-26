<!-- Tab切换 -->
<template>
  <div class="tab-time">
    <div class="shang">
      <div class="shi">
        <div
          class="shi1"
          v-for="(v, index) in lists"
          :key="v.id"
          @click="changeTab(index)"
          :class="now == index ? 'active' : ''"
        >
          <strong>{{ v.shi }}</strong
          ><br />
          <span>{{ v.gou }}</span>
        </div>
      </div>
    </div>
    <div class="zhong">
      <ul
        class="zhong1"
        v-for="(list, index) in lists"
        :key="list.id"
        :class="now == index ? 'show' : ''"
      >
        <li v-for="a in lists" :key="a.id">
          <img :src="a.img" alt="" />
          <div class="zhong2">
            <p></p>
            <span>{{ a.price }}</span
            ><br />
            <del>{{ a.del }}</del>
          </div>
        </li>
      </ul>
    </div>
    <div class="xia">
      <strong>查看更多秒杀商品</strong>
      <i class="iconfont icon-jiantou2"></i>
    </div>
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
      now: 0,
      lists: [
        {
          id: 1,
          shi: "24:00",
          gou: "抢购中",
          img:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489099437211.jpg",
          price: "￥7700.00",
          del: "144.80",
        },

        {
          id: 2,
          shi: "8:00",
          gou: "即将开始",
          img:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          price: "￥7700.00",
          del: "454.80",
        },
        {
          id: 3,
          shi: "12:00",
          gou: "即将开始",
          img:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg",
          price: "￥6590.00",
          del: "9360.80",
        },
        {
          id: 4,
          shi: "16:00",
          gou: "即将开始",
          img:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489098157662.jpg",
          price: "￥7700.00",
          del: "24.80",
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
    changeTab(index) {
      console.log(index);
      this.now = index;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.tab-time {
  width: 95%;
  margin: 0 auto;
  background: #fff;
  margin-bottom: 6rem;

  .shang {
    width: 100%;
    display: flex;
    .shi {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f1f1f1;
      margin-bottom: 2rem;
      .shi1 {
        width: 9rem;
        height: 5rem;
        text-align: center;
        margin-top: 0.9rem;
        // border-bottom: #f20d28 solid 2px;
        strong,
        span {
          font-size: 1.4rem;
          // font-weight: 600;
          color: #555;
        }
      }
      .active {
        width: 9rem;
        height: 5rem;
        text-align: center;
        margin-top: 0.9rem;
        border-bottom: #f20d28 solid 2px;
        strong,
        span {
          font-size: 1.6rem;
          // font-weight: 600;
          color: #f20d28;
        }
      }
    }
  }
  .zhong {
    width: 36rem;
    height: 15rem;
    position: relative;
    // overflow: hidden;
    overflow-x: scroll;
    overflow-y: hidden;
    .zhong1 {
      // width: 366rem;
      height: 20rem;
      display: flex;
      white-space: nowrap;
      display: none;

      li {
        display: inline-block;
        width: 11.5rem;
        height: 19rem;
        img {
          width: 10.2rem;
          height: 10.2rem;
        }
        .zhong2 {
          width: 11.5rem;
          text-align: center;

          p {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
          span {
            width: 9.2rem;
            color: #f20d28;
            font-weight: 900;
          }
          del {
            color: #555;
          }
        }
      }
    }
    .show {
      display: block;
    }
  }
  .zhong::-webkit-scrollbar {
    display: none;
  }
  .xia {
    text-align: center;
    margin-top: 1rem;
    strong {
      font-size: 2rem;
    }
    i {
      font-size: 2rem;
      color: red;
      font-weight: 900;
    }
  }
}
</style>