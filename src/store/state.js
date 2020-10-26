const state = {
    num: 1,
    categoryDatas: [],
    swipeDatas: [],
    userInfo: {},
    goodsLists: [],
    goodsDetails: [],
    carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    checkAll: localStorage["checkAll"] ? JSON.parse(localStorage["checkAll"]) : false,
    searchList: [],
    webHistory: localStorage["webHistory"] ? JSON.parse(localStorage["webHistory"]) : [],
}
export default state