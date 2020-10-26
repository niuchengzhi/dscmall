<!--  -->
<template>
  <div class="category-wrap2">
    <div class="category-right">
      <img
        src="../../../assets/images/14a7079156cc28e92f0883237b705d39.gif"
        alt=""
        class="img2"
        v-if="categoryRightDatas == ''"
      />
      <div class="category-ad">
        <a href>
          <img :src="ad" alt />
        </a>
      </div>
      <div class="category-content2">
        <div v-for="lists in categoryRightDatas" :key="lists.cat_id">
          <h3>
            -
            <span>{{ lists.cat_name }}</span>
            -
          </h3>
          <ul>
            <li v-for="list in lists.child" :key="list.cat_id">
              <router-link :to="'/listdetail?cat_id=' + list.cat_id">
                <img :src="list.touch_icon" alt />
                <h4>{{ list.cat_name }}</h4>
              </router-link>
              <!-- <a href>
                <img :src="list.touch_icon" alt />
                <h4>{{ list.cat_name }}</h4>
              </a> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      categoryRightDatas: [],
      ad: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化

  //方法集合
  methods: {
    getCategoryRightDatas(cid) {
      Axios.get(`/api/catalog/list/${cid}`).then((res) => {
        console.log(res.data);
        if (res.status == 200) {
          this.categoryRightDatas = res.data.data;
          var arr = this.$store.state.categoryDatas.filter((item) => {
            return item.cat_id == cid;
          });
          console.log(arr);
          this.ad = arr[0].touch_catads;
        }
      });
    },
  },
  watch: {
    $route(to) {
      console.log(to);
      let cid = to.params.cid;
      console.log(cid);
      this.getCategoryRightDatas(cid);
      var arr = this.$store.state.categoryDatas.filter((item) => {
        return item.cat_id == cid;
      });
      console.log(arr);
      // this.ad = arr[0].touch_catads;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.$route);
    this.getCategoryRightDatas("858");
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.category-right {
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  .category-ad {
    width: 100%;
    img {
      width: 90%;
      margin-left: 5%;
    }
  }
  .category-content2 {
    h3 {
      font-size: 1.4rem;
      text-align: center;
      height: 4.4rem;
      line-height: 4.4rem;
      color: #666;
      font-weight: normal;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      li {
        width: 33%;
        height: 8.2rem;
        margin-bottom: 1rem;
        img {
          width: 5.2rem;
          height: 5.2rem;
        }
        h4 {
          color: #666;
          font-weight: normal;
          height: 3rem;
          line-height: 3rem;
        }
      }
    }
  }
}
.img2 {
  width: 15rem;
  height: 15rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -5rem;
  margin-left: -3rem;
}
</style>