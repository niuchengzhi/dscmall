<!-- 登录注册 -->
<template>
  <div class="login-wrap">
    <i class="iconfont icon-kefu1" onclick="window.history.back()"></i>
    <div class="login-inner">
      <div class="logo">
        <img src="../../assets/1791ace91b17c6e5a43a86a755259a6e.jpg" alt />
      </div>
      <div class="login-tab">
        <a
          href="javascript:;"
          :class="{ active: loginFlag }"
          @click="changeTab1"
          >短信登录</a
        >
        <a
          href="javascript:;"
          :class="{ active: !loginFlag }"
          @click="changeTab2"
          >账号登录</a
        >
      </div>
      <div class="login-content">
        <!-- 短信登录 -->
        <div v-if="loginFlag">
          <section>
            <input
              type="tel"
              placeholder="手机号"
              maxlength="11"
              v-model="phone"
            />
            <button class="getcode" v-if="!num" @click="getcodeFn">
              获取验证码
            </button>
            <button disabled v-else class="getcode">已发送{{ num }}s</button>
          </section>
          <section>
            <input type="tel" placeholder="验证码" maxlength="11" />
          </section>
        </div>
        <!-- 账号登录 -->
        <div v-else>
          <section>
            <input
              type="tel"
              placeholder="用户名/邮箱/手机号"
              v-model="user_name"
            />
          </section>
          <section>
            <input
              type="password"
              placeholder="密码"
              v-if="hidePass"
              v-model="pass"
            />
            <input type="text" placeholder="密码" v-else v-model="pass" />
            <button
              class="getcode iconfont icon-yincang"
              @click="showHidePass"
              v-if="hidePass"
            ></button>
            <button
              class="getcode iconfont icon-xianshi"
              v-else
              @click="showHidePass"
            ></button>
          </section>
          <section>
            <input
              type="tel"
              placeholder="验证码"
              maxlength="11"
              v-model="captcha"
            />
            <img
              ref="captcha"
              src="http://39.101.210.136:3000/api/v1/users/captcha"
              alt=""
              @click="getCaptcha"
            />
          </section>
        </div>
        <button class="login-btn" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
import { loginuser } from "@/api/login.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loginFlag: true,
      phone: "",
      pass: "",
      num: "",
      timer: "",
      hidePass: true,
      user_name: "",
      captcha: "",
      userinfo: {},
    };
  },
  //监听属性 类似于data概念
  computed: {
    indentifyPhone() {
      return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone);
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeTab1() {
      this.loginFlag = true;
    },
    changeTab2() {
      this.loginFlag = false;
    },
    getcodeFn() {
      if (this.indentifyPhone) {
        this.num = 10;
        this.timer = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        Toast({
          message: "手机号格式不正确",
          position: "center",
          duration: 3000,
        });
      }
    },
    showHidePass() {
      this.hidePass = !this.hidePass;
    },
    getCaptcha() {
      this.$refs.captcha.src =
        "http://39.101.210.136:3000/api/v1/users/captcha?t=" +
        new Date().getTime();
    },
    async login() {
      //登录方法
      if (!this.user_name) {
        Toast("用户名/邮箱/手机号！");
        return;
      } else if (!this.pass) {
        Toast("请输入密码！");
        return;
      } else if (!this.captcha) {
        Toast("请输入验证码！");
        return;
      }

      //请求数据
      const result = await loginuser(this.user_name, this.pass, this.captcha);
      console.log(result.data[0]);
      if (result.err_code == 0) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      if (result.status == 500) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      if (result.status == 500) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      if (result.status == 200) {
        this.$store.dispatch("getUserInfo", result.data[0]);
        this.$router.push("/home");
      }
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
.login-wrap {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  i {
    position: absolute;
    left: 17px;
    top: 20px;
    font-size: 3rem;
    color: blueviolet;
  }
  .login-inner {
    width: 85%;
    margin: 0 auto;
    .logo {
      width: 10rem;
      height: 10rem;
      border: 6px solid #ccc;
      border-radius: 50%;
      overflow: hidden;
      margin: 0px auto;
      img {
        width: 100%;
      }
    }
    .login-tab {
      width: 100%;
      height: 4.4rem;
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      a {
        display: block;
        width: 45%;
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        background: #ccc;
        font-size: 1.4rem;
      }
      .active {
        background: red;
        color: #fff;
      }
    }
    .login-content {
      section {
        margin-top: 1rem;
        position: relative;
        input {
          width: 100%;
          height: 4.4rem;
          border: 1px solid #ccc;
          box-sizing: border-box;
          border-radius: 5px;
          text-indent: 10px;
          &:focus {
            border: 1px solid #f00;
          }
        }
        button {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          font-size: 1.4rem;
          color: #666;
        }
        img {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          font-size: 1.4rem;
          color: #666;
        }
      }
      .login-btn {
        display: block;
        width: 100%;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
        background: red;
        color: #fff;
        font-size: 1.4rem;
        border-radius: 5px;
        margin-top: 10px;
      }
    }
  }
}
</style>