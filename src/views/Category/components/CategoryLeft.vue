<!--  -->
<template>
  <div class="category-wrap">
    <div class="category-left">
      <ul class="category-nav">
        <li v-for="list in this.$store.state.categoryDatas" :key="list.cat_id">
          <router-link :to="'/category/' + list.cat_id">
            {{ list.cat_name }}
          </router-link>
        </li>
      </ul>
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
      is_active: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getCategoryDatas() {
      Axios.get("/api/catalog/list").then((res) => {
        console.log(res);
        if (res.status == 200) {
          console.log(res.data.data);
          this.$store.dispatch("actgetCategoryDatas", res.data.data);
        }
      });
    },
    changeTab(index) {
      this.is_active = index;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getCategoryDatas();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.category-wrap {
  height: 100%;
  .category-left {
    height: 100%;
    width: 8.4rem;
    overflow-y: scroll;
    background: #efefef;
    ul {
      width: 100%;
      height: 100%;
      li {
        height: 3.8rem;
        font-size: 1.4rem;
        line-height: 3.8rem;
        text-align: center;
      }
      .router-link-active {
        display: block;
        background: #fff;
        color: red;
      }
    }
  }
}
</style>