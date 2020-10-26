import ajax from "./ajax"

export const getGoodsList = (gid) => ajax('/api/catalog/goodslist', { cat_id: gid }, "post")
export const getGoodsDetail = (cid) => ajax("/api/goods/show", { goods_id: cid }, "post")