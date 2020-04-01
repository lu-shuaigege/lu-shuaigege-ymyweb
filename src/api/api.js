/**
 * api接口统一管理
 */
import {
    get,
    post
} from './http'
//获取轮播图
export const banner = banner => post('/Api/banners', banner);
//获取定制师
export const designers = designers => post('/Api/designers', designers);
//获取五大产品
export const product_ads = product_ads => post('/Api/product_ads', product_ads);
//获取//产品
export const products = products => post('/Api/products', products);
//获取列表
export const news = news => post('/Api/news', news);
//获取详情数据
export const newsinfo = news => post('/Api/newsinfo', news);