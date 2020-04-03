<template>
    <div class="home">
        <!-- 导航 -->
        <navtop></navtop>
        <!-- 轮播图 -->
        <div class="home_banner">
            <el-carousel width="100%" height="41.65vw">
                <el-carousel-item class="banner" v-for="(item,index) in banners" :key="index">
                    <a href>
                        <img :src="item.pic" alt />
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 中间内容 -->
        <div class="contop">
            <!-- 优秀定制师推荐 -->
            <div class="designer">
                <div class="title_p _containers">优秀主播推荐</div>
                <div class="designer_lunbo _containers">
                    <div class="swiper-container" id="swipera">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(item,index) in designerLista"
                                :key="index"
                            >
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
            <div class="contop_bottomImg">
                <img :src="pica" />
            </div>
        </div>
        <!-- 中间内容 -->
        <div class="contop">
            <!-- 优秀定制师推荐 -->
            <div class="designer">
                <div class="title_p _containers">五大品类</div>
                <div class="designer_lunbo _containers _containersb">
                    <div class="swiper-container swiper-containerb" id="swiperb">
                        <div class="swiper-wrapper swiper-wrapperb">
                            <div
                                class="swiper-slide swiper-slideb"
                                v-for="(item,index) in designerListb"
                                :key="index"
                            >
                                <div class="listone listoneb">
                                    <img class="designerimg designerimgb" :src="item.pic" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
            <div class="contop_bottomImg">
                <img :src="picb" />
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
import { banner, designers, product_ads, products } from "@/api/api.js";

export default {
    data() {
        return {
            proList: [],
            banners: [],
            designerLista: [
                {
                    pic: ""
                },
                {
                    pic: ""
                },
                {
                    pic: ""
                },
                {
                    pic: ""
                },
                {
                    pic: ""
                }
            ],
            designerListb: [
                {
                    pic: ""
                },
                {
                    pic: ""
                },
                {
                    pic: ""
                },
                {
                    pic: ""
                },
                {
                    pic: ""
                }
            ],
            // pica: require("../assets/img/contenttop.png"),
            pica: "",
            picb: ""
        };
    },
    components: {
        navtop,
        bottom
    },
    created() {
        this.getBanners();
        this.getBannersa();
        this.getBannersb();
        this.getDesigner();
        this.product_ads();
        this.getProduct();
    },
    mounted() {},
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
            banner({ type: "1" }).then(res => {
                if (res.status == 1) {
                    this.banners = res.data;
                }
            });
        },
        //首页轮播图
        getBannersa() {
            banner({ type: "2" }).then(res => {
                if (res.status == 1) {
                    this.pica = res.data[0].pic;
                }
            });
        },
        //首页轮播图
        getBannersb() {
            banner({ type: "3" }).then(res => {
                if (res.status == 1) {
                    this.picb = res.data[0].pic;
                }
            });
        },

        //定制师列表
        getDesigner() {
            designers().then(res => {
                if (res.status == 1) {
                    this.designerLista = res.data;
                    if (res.data.length > 4) {
                        new Swiper("#swipera", {
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
                    }
                }
            });
        },
        //五大产品
        product_ads() {
            product_ads().then(res => {
                if (res.status == 1) {
                    this.designerListb = res.data;
                    if (res.data.length > 4) {
                        new Swiper("#swiperb", {
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
                    }
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
.contop {
    /* height: 1183px; */
}
.contop_bottomImg {
    width: 100%;
    height: 25vw;
    min-width: 1220px;
    min-height: 325px;
}
.contop_bottomImg img {
    width: 100%;
    height: 100%;
}
.designer {
    width: 100%;
    /* height: 620px; */
    background: #f8f8f8;
    padding-bottom: 150px;
}
.title_p {
    font-size: 36px;
    /* font-weight: bold; */
    color: #28282c;
    text-align: center;
    padding-top: 105px;
}
.product {
    margin-bottom: 156px;
}
.product_con {
    margin-top: 70px;
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
    margin-top: 70px;
    height: 430px;
    position: relative;
}

.swiper-container {
    height: 430px;
    overflow: auto;
}
._containersb {
    height: 337px;
}
.swiper-containerb {
    height: 337px;
    overflow: auto;
}
.swiper-wrapper {
    width: 1200px;
    height: 430px;
    /* margin-left: -20px; */
}
.swiper-wrapperb {
    width: 1200px;
    height: 337px;
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
    border-radius: 10px;
    overflow: hidden;
    padding: 0 10px;
    width: 280px !important;
}
.swiper-slideb {
    border-radius: 10px;
    overflow: hidden;
    padding: 0 10px;
    width: 280px !important;
    height: 337px;
}
.swiper-slide .listone {
    width: 280px !important;
    height: 430px;
    background-color: #ffffff;
    border-radius: 10px !important;
    overflow: hidden;
    /* margin-right: 23px; */
}
.designerimg {
    width: 280px;
    height: 430px;
}
.swiper-slide .listoneb {
    width: 280px !important;
    height: 337px;
    background-color: #ffffff;
    border-radius: 10px !important;
    overflow: hidden;
}
.designerimgb {
    width: 280px;
    height: 337px;
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
