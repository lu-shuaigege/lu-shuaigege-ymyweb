<template>
    <div class="detail">
        <navtop></navtop>
        <div class="detail_banner">
            <img src="@/assets/img/banner4.png" alt />
        </div>
        <div class="detail_con _containers">
            <div class="crumbs">
                您当前位置：公司动态>
                <span>公司动态详情</span>
            </div>
            <div class="content">
                <div class="title">{{details.title}}</div>
                <div class="info">
                    <div>{{details.updated_at}}</div>
                    <span></span>
                    <div>浏览次数：{{details.view_num}}</div>
                    <span></span>
                    <div>来源：{{details.source}}</div>
                </div>
                <div class="content_con" v-html="details.content"></div>
                <div class="content_con_bottom">
                    <div
                        v-if="details.previnfo"
                        @click="toDetail(details.previnfo.id)"
                    >上一篇：{{details.previnfo.title}}</div>
                    <div class="isnone" v-if="!details.previnfo">上一篇：无</div>

                    <div
                        v-if="details.nextinfo"
                        @click="toDetail(details.nextinfo.id)"
                    >下一篇：{{details.nextinfo.title}}</div>
                    <div class="isnone" v-if="!details.nextinfo">下一篇：无</div>
                </div>
            </div>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
import navtop from "@/components/nav/navtop.vue";
import bottom from "@/components/bottom/bottom.vue";
import { newsinfo } from "@/api/api.js";

export default {
    data() {
        return {
            isprev: false,
            isnext: true,
            id: "",
            details: []
        };
    },
    components: {
        navtop,
        bottom
    },
    created() {
        this.id = this.$route.query.id;
        this.getDetail(this.id);
    },
    mounted() {},
    methods: {
        //详情数据
        getDetail(id) {
            newsinfo({ id: id }).then(res => {
                if (res.status == 1) {
                    this.details = res.data;
                }
            });
        },
        toDetail(id) {
            this.$router.push({
                path: "/detail",
                query: {
                    id: id,
                    isSelect: 1
                }
            });
            this.getDetail(id);
        }
    }
};
</script>

<style >
.detail {
    margin-top: 100px;
}
.detail_banner {
    width: 100%;
    height: 380px;
}
.detail_banner img {
    width: 100%;
    height: 100%;
}
.detail_con {
    margin-top: 65px;
    padding-bottom: 115px;
}
.crumbs {
    font-size: 14px;
    color: #999999;
}
.crumbs span {
    color: #28282c;
}
.content {
    margin-top: 32px;
}
.content .title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #28282c;
}
.content .info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #a1a1a1;
    margin-top: 15px;
}
.content .info span {
    display: inline-block;
    width: 1px;
    height: 12px;
    background-color: #e1e1e1;
    margin: 0 15px;
}
.content_con {
    font-size: 16px;
    line-height: 28px;
    color: #666666;
    margin-top: 45px;
    text-align: justify;
    padding-bottom: 60px;
    border-bottom: 1px solid #e1e1e1;
}
.content_con img {
    margin: 0 auto;
    max-width: 100%;
    margin-top: 5px;
}
.content_con p img {
    margin: 0 auto;
    max-width: 100%;
    margin-top: 5px;
}
.content_con_bottom {
    font-size: 14px;
    color: #666666;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}
.content_con_bottom div {
    max-width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
}
.isnone {
    color: #a1a1a1;
    cursor: default !important;
}
</style>
