/**
 * api接口统一管理
 */
import {
    get,
    post
} from './http'
//获取轮播图
export const banner = banner => get('/Api/banners', banner);
//获取定制师
export const designers = designers => get('/Api/designers', designers);
//获取//产品
export const products = products => get('/Api/products', products);
//获取列表
export const news = news => get('/Api/news', news);
//获取详情数据
export const newsinfo = news => get('/Api/newsinfo', news);