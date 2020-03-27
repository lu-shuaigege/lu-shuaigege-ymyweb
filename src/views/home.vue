<template>
    <div class="home">
        <!-- 导航 -->
        <navtop></navtop>
        <!-- 轮播图 -->
        <div class="home_banner">
            <el-carousel width="100%" height="31.25vw">
                <el-carousel-item class="banner" v-for="(item,index) in banners" :key="index">
                    <a href>
                        <img :src="item.pic" alt />
                    </a>
                </el-carousel-item>
                <!-- <el-carousel-item class="banner">
          <a href=""><img src="@/assets/img/banner2.png" alt=""></a>
                </el-carousel-item>-->
            </el-carousel>
        </div>
        <!-- 优秀定制师推荐 -->
        <div class="designer">
            <div class="title_p _containers">优秀定制师推荐</div>
            <div class="designer_lunbo _containers">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <!-- <div class="swiper-slide">
              <div class="listone">
                <div class="slide_img"><img src="@/assets/img/img1.png" alt=""></div>
                <div class="slide_title">
                  <div class="title">飞途旅游小路1</div>
                  <img src="@/assets/img/man.png" alt="">
                </div>
                <div class="slide_con">
                  <div class="con">爱好旅游的萌妹子、
                    摄影达人、旅游达人、
                    自由职业者</div>
                    <div class="img"><img src="@/assets/img/APPcode.png" alt=""></div>
                </div>
              </div>
                        </div>-->
                        <div class="swiper-slide" v-for="(item,index) in designerList" :key="index">
                            <div class="listone">
                                <img class="designerimg" :src="item.pic" alt />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>

        <!--  -->
        <div class="product">
            <div class="title_p _containers">游米游产品介绍</div>
            <div class="product_con _containers">
                <div v-for="(item,index) in proList" :key="index">
                    <div class="product_con_Odd" v-if="index%2 == 0">
                        <div class="product_con_Odd_l">
                            <video :src="item.video" controls ref="video" @play="isPlay(index)"></video>
                        </div>
                        <div class="product_con_Odd_r">
                            <div class="product_con_Odd_r_con">
                                <div class="title">{{item.name}}</div>
                                <div class="con">{{item.profile}}</div>
                                <div class="toplay" @click="toplay(index)">视频讲解</div>
                            </div>
                        </div>
                    </div>
                    <div class="product_con_Even" v-if="index%2 !== 0">
                        <div class="product_con_Even_l">
                            <div class="product_con_Odd_r_con">
                                <div class="title">{{item.name}}</div>
                                <div class="con">{{item.profile}}</div>
                                <div class="toplay" @click="toplay(index)">视频讲解</div>
                            </div>
                        </div>
                        <div class="product_con_Even_r">
                            <video :src="item.video" controls ref="video" @play="isPlay(index)"></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <bottom></bottom>
    </div>
</template>

<script>
import navtop from "@/components/nav/navtop.vue";
import bottom from "@/components/bottom/bottom.vue";
import { banner, designers, products } from "@/api/api.js";

export default {
    data() {
        return {
            proList: [],
            banners: [],
            designerList: [
                {
                    pic:
                        "http://umuweb.dev.zhangxinkeji.com/Upload/admin/2020-03-20/5e741fd6bd804.jpeg"
                },
                {
                    pic:
                        "http://umuweb.dev.zhangxinkeji.com/Upload/admin/2020-03-20/5e741fd6bd804.jpeg"
                },
                {
                    pic:
                        "http://umuweb.dev.zhangxinkeji.com/Upload/admin/2020-03-20/5e741fd6bd804.jpeg"
                },
                {
                    pic:
                        "http://umuweb.dev.zhangxinkeji.com/Upload/admin/2020-03-20/5e741fd6bd804.jpeg"
                },
                {
                    pic:
                        "http://umuweb.dev.zhangxinkeji.com/Upload/admin/2020-03-20/5e741fd6bd804.jpeg"
                }
            ]
        };
    },
    components: {
        navtop,
        bottom
    },
    created() {
        this.getBanners();
        this.getDesigner();
        this.getProduct();
    },
    mounted() {
        new Swiper(".swiper-container", {
            slidesPerView: 4,
            loopedSlides: 4,
            loop: false,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
    },
    methods: {
        isPlay(index) {
            let allvideo = this.$refs.video;
            for (let i = 0; i < allvideo.length; i++) {
                if (i == index) {
                    allvideo[i].play();
                } else {
                    allvideo[i].pause();
                }
            }
        },
        //首页轮播图
        getBanners() {
            banner().then(res => {
                if (res.status == 1) {
                    this.banners = res.data;
                }
            });
        },
        //定制师列表
        getDesigner() {
            designers().then(res => {
                if (res.status == 1) {
                    this.designerList = res.data;
                }
            });
        },
        //产品
        getProduct() {
            products().then(res => {
                if (res.status == 1) {
                    this.proList = res.data;
                }
            });
        },
        toplay(index) {
            let allvideo = this.$refs.video;
            for (let i = 0; i < allvideo.length; i++) {
                if (i == index) {
                    allvideo[i].play();
                } else {
                    allvideo[i].pause();
                }
            }
        }
    }
};
</script>

<style >
.home {
    margin-top: 100px;
}
.home_banner img {
    width: 100%;
    height: 100%;
}
.designer {
    width: 100%;
    height: 620px;
    background: #f8f8f8;
}
.product {
}
.title_p {
    font-size: 20px;
    font-weight: bold;
    color: #28282c;
    text-align: center;
    padding-top: 50px;
}
.product_con {
    margin-top: 25px;
}
.product_con_Odd {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
}
.product_con_Odd_l {
    width: 590px;
    height: 443px;
    background-color: #666666;
}
.product_con_Odd_l video {
    width: 100%;
    height: 100%;
    outline-style: none;
}
.product_con_Odd_r {
    width: 574px;
    height: 427px;
    background-color: #ffffff;
    border: solid 8px #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: center;
}
.product_con_Odd_r_con {
    width: 410px;
    text-align: center;
}
.product_con_Odd_r_con .title {
    font-size: 18px;
    font-weight: bold;
    color: #28282c;
}
.product_con_Odd_r_con .con {
    margin-top: 30px;
    font-size: 14px;
    color: #666666;
}
.toplay {
    width: 100px;
    height: 36px;
    border-radius: 18px;
    border: solid 1px #e1e1e1;
    font-size: 14px;
    color: #a1a1a1;
    line-height: 36px;
    margin: 0 auto;
    margin-top: 56px;
    cursor: pointer;
    background: url(../assets/img/play-grey.png) no-repeat;
    background-position: 20px 11px;
    padding-left: 20px;
}
.toplay:hover {
    border: solid 1px #ff6600;
    color: #ff6600;
    background: url(../assets/img/play-orange.png) no-repeat;
    background-position: 20px 11px;
}
.product_con_Even {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
}
.product_con_Even_l {
    width: 598px;
    height: 538px;
    background-color: #ffffff;
    border: solid 1px #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.product_con_Even_r {
    width: 600px;
    height: 540px;
    background-color: #000;
}
.product_con_Even_r video {
    width: 100%;
    height: 100%;
    outline-style: none;
}
.designer_lunbo {
    margin-top: 30px;
    height: 430px;
    position: relative;
}
.swiper-container {
    height: 430px;
    overflow: auto;
}
.swiper-wrapper {
    width: 1200px;
    height: 430px;
    /* margin-left: -20px; */
}
.swiper-container::-webkit-scrollbar {
    display: none;
}
.swiper-button-next {
    right: -40px;
    width: 17px;
    height: 30px;
    color: #999;
    font-size: 14px;
    outline-style: none;
}
.swiper-button-prev {
    left: -40px;
    width: 17px;
    height: 30px;
    color: #999;
    outline-style: none;
}
.swiper-button-next:after,
.swiper-button-prev:after {
    font-size: 32px;
    outline-style: none;
}
.swiper-slide {
    padding: 0 10px;
    width: 280px !important;
}
.swiper-slide .listone {
    width: 280px !important;
    height: 430px;
    background-color: #ffffff;
    border-radius: 10px;
    /* margin-right: 23px; */
}
.designerimg {
    width: 280px;
    height: 430px;
}
.slide_img {
    width: 280px;
    height: 180px;
    background-color: #666666;
    border-radius: 10px 10px 0px 0px;
}
.slide_img img {
    width: 280px;
    height: 180px;
    background-color: #666666;
    border-radius: 10px 10px 0px 0px;
}
.slide_title {
    display: flex;
    align-items: center;
    margin: 15px;
}
.slide_title .title {
}
.slide_title img {
    width: 14px;
    height: 14px;
    margin-left: 5px;
}
.slide_con {
    display: flex;
    justify-content: space-between;
    margin: 15px;
}
.slide_con .con {
    width: 160px;
    font-size: 16px;
    line-height: 24px;
    color: #999999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
.slide_con .img {
    width: 80px;
    height: 80px;
    background-color: #ffffff;
    border-radius: 10px;
    border: solid 1px #e1e1e1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.slide_con .img img {
    width: 70px;
    height: 70px;
}
</style>
