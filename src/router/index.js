import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)
import Home from "../views/Home/Home.vue"
import Category from "../views/Category/Category.vue"
import Search from "../views/Search/Search.vue"
import Cart from "../views/Cart/Cart.vue"
import Mine from "../views/Mine/Mine.vue"
//配置首页的子组件
import Index from "../views/Home/children/Index.vue"
import Ele from "../views/Home/children/Ele.vue"
import Person from "../views/Home/children/Person.vue"
import Box from "../views/Home/children/Box.vue"
import Phone from "../views/Home/children/Phone.vue"
import Computer from "../views/Home/children/Computer.vue"
import House from "../views/Home/children/House.vue"
import Face from "../views/Home/children/Face.vue"
import Demo from "../views/DemoVuex/Demo.vue"
import Register from "../views/Register/Register.vue"
import Login from "../views/Login/Login.vue"
import ListDetail from "../views/Category/components/ListDetail.vue"
import GoodsDetail from "../views/GoodsDetail/GoodsDetail"
import SearchList from "../views/Search/SearchList.vue"
const routes = [{
    path: "/home",
    name: "home",
    component: Home,
    children: [{
        path: "index",
        component: Index
    }, {
        path: "ele",
        component: Ele
    }, {
        path: "person",
        component: Person
    }, {
        path: "box",
        component: Box
    }, {
        path: "phone",
        component: Phone
    }, {
        path: "computer",
        component: Computer
    }, {
        path: "house",
        component: House
    }, {
        path: "face",
        component: Face
    }, {
        path: "/home",
        redirect: "/home/index"
    }]
}, {
    path: "/category/:cid",
    name: "category",
    component: Category
}, {
    path: "/search",
    name: "search",
    component: Search
}, {
    path: "/cart",
    name: "cart",
    component: Cart
}, {
    path: "/mine",
    name: "mine",
    component: Mine
}, {
    path: "/demovuex",
    name: "demovuex",
    component: Demo
}, {
    path: "/register",
    name: "register",
    component: Register
}, {
    path: "/",
    redirect: "home"
}, {
    path: "/login",
    name: "login",
    component: Login
}, {
    path: "/listdetail",
    name: "listdetail",
    component: ListDetail
}, {
    path: "/goodsdetail",
    name: "goodsdetail",
    component: GoodsDetail
}, {
    path: "/searchlist",
    name: "searchlist",
    component: SearchList
}]

const router = new VueRouter({
    routes
})

export default router