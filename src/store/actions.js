import { getHomeSwipe } from "@/api/index"
import { getGoodsList, getGoodsDetail } from "@/api/list.js";
import { searchFn } from "@/api/search.js"
const actions = {
    actAddNum(context) {
        context.commit("addNum")
    },
    actgetCategoryDatas(context, data) {
        context.commit("getCategoryDatas", data)
    },
    async actGetSwipeDatas(context) {
        const result = await getHomeSwipe()
        console.log(result);
        context.commit("getSwipeDatas", result.data)
    },
    getUserInfo(context, data) {
        context.commit("getUserInfo", data)
    },
    async getGoodsList(context, data) {
        const result = await getGoodsList(data)
        console.log(result);
        context.commit("getGoodsList", result.data)
    },
    async getGoodsDetails(context, data) {
        const result = await getGoodsDetail(data)
        console.log(result.data);
        context.commit("getGoodsDetails", result.data)
    },
    async searchKeywords(context, params) {
        const result = await searchFn(params);
        console.log(params);
        let title = { keywords: params.keywords }
        console.log(title);
        result.data.push(title)
        context.commit("searchKeywords", result.data)
        console.log(result.data);
    }

}
export default actions