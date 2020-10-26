<!-- 注册组件 -->
<template>
  <div class="register">
    <div class="box">
      <i class="iconfont icon-jiantou3"></i>
      <h1>新用户注册</h1>
      <div>
        <i class="iconfont con-icon4"></i>
        <input type="text" name="" id="" placeholder="请输入图片验证码" />
      </div>
      <div>
        <i class="iconfont con-icon4"></i>
        <input type="text" name="" id="" placeholder="请输入手机号" />
        <span>获取验证码</span>
      </div>
      <div>
        <i class="iconfont con-icon4"></i>
      </div>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
.box {
  padding: 1.5rem;
  width: 92%;
  height: 47rem;
  i {
    font-size: 16px;
    font-style: normal;
    color: #bdbdbd;
  }
  h1 {
    margin-top: 5rem;
  }
}
</style>