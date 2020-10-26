import { MessageBox } from 'mint-ui';
const mutations = {
    addNum(state) {
        console.log(state);
        ++state.num
    },
    getCategoryDatas(state, data) {
        state.categoryDatas = data
    },
    getSwipeDatas(state, data) {
        state.swipeDatas = data
    },
    getUserInfo(state, data) {
        state.getUserInfo = data
    },
    getGoodsList(state, data) {
        state.goodsLists = data
    },
    getGoodsDetails(state, data) {
        state.goodsDetails = data
    },
    setCartDatas(state, data) {
        console.log(data);
        if (data) {
            state.carts.push(data)
        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    searchKeywords(state, data) {
        state.searchList = data
        console.log(data);
        if (data[data.length - 1].keywords == "") {
            return;
        } else {
            state.webHistory.push(data[data.length - 1].keywords);
            let arr = state.webHistory.filter((item, index) => {
                return state.webHistory.indexOf(item, 0) == index
            })
            state.webHistory = arr;
            localStorage.setItem("webHistory", JSON.stringify(state.webHistory));

        }
    },
    // 全选按钮
    selectAllFn(state) {
        state.checkAll = !state.checkAll
        state.carts.forEach(item => {
            item.isSelect = state.checkAll
        })
        localStorage.setItem("carts", JSON.stringify(state.carts))
        localStorage.setItem("checkAll", state.checkAll)
    },
    // 商品选中状态
    changeSelect(state, isSelect) {
        console.log(state);
        console.log(isSelect);
        state.carts[isSelect.index] = isSelect.cart
        let isCheck = state.carts.every((item) => {
            return item.isSelect == true
        })
        console.log(isCheck);

        state.checkAll = isCheck
        localStorage.setItem("checkAll", state.checkAll)

        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    addCart(state, index) {
        console.log(state.carts[index]);
        state.carts[index].value++
            localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    jianCart(state, index) {
        if (state.carts[index].value == 1) {
            state.carts[index].value = 1
            MessageBox({
                title: '提示',
                message: '亲，至少要购买一个哦！'
            });
        } else {
            state.carts[index].value--
                localStorage.setItem("carts", JSON.stringify(state.carts))
        }
    },
    changeValue(state, data) {
        console.log(state);
        console.log(data);
        if (data.val <= 1) {
            data.val <= 1
            MessageBox({
                title: '提示',
                message: '亲，至少要购买一个哦！'
            });
        }
        state.carts[data.index].value = data.val
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    dele(state, index) {
        MessageBox.confirm('亲,您确定要放弃该宝贝吗？').then(() => {
            console.log("确定");
            state.carts.splice(index, 1)
            localStorage.setItem("carts", JSON.stringify(state.carts)) //重新设置本地存储数据
        }, () => {
            console.log("点击了取消");
        });
    },
    // searchList(state, data) {
    //     state.searchKeywords = data;
    //     state.webHistory.push(data[data.length - 1].keywords)
    //     localStorage.setItem("webHistory", JSON.stringify(state.webHistory));
    // },
    //删除数据
    delwebH(state) {
        state.webHistory = [];
        localStorage.setItem("webHistory", []);
    }
}
export default mutations