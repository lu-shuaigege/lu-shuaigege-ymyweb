<template>
    <div class="list">
        <navtop></navtop>
        <div class="list_banner">
            <img src="@/assets/img/banner4.png" alt />
        </div>
        <div class="list_con _containers">
            <div class="title">公司最新动态</div>
            <div class="list_content">
                <div
                    class="listone"
                    @click="toDetail(item.id)"
                    v-for="(item,index) in list.data"
                    :key="index"
                >
                    <div class="listone_l">
                        <img :src="item.home_pic" alt />
                    </div>
                    <div class="listone_r">
                        <div class="listone_r_con">
                            <div class="listone_title">{{item.title}}</div>
                            <div class="info">
                                <div class="time">{{item.updated_at}}</div>
                                <span></span>
                                <div class="num">浏览次数：{{item.view_num}}</div>
                            </div>
                            <div class="con">{{item.profile}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <pagination :total="total" :current-page="current" @pagechange="pagechange"></pagination>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
import navtop from "@/components/nav/navtop.vue";
import bottom from "@/components/bottom/bottom.vue";
import pagination from "@/components/pagination/pagination.vue";
import { news } from "@/api/api.js";

export default {
    data() {
        return {
            total: 10, // 记录总条数
            display: 2, // 每页显示条数
            current: 1, // 当前的页数
            page: 1,
            list: []
        };
    },
    components: {
        navtop,
        bottom,
        pagination
    },
    created() {
        this.getList();
    },
    mounted() {},
    methods: {
        pagechange: function(currentPage) {
            this.page = currentPage;
            document.documentElement.scrollTop = 0;

            // ajax请求, 向后台发送 currentPage, 来获取对应的数据
            this.getList();
        },
        getList() {
            news({ page: this.page, pagesize: 5 }).then(res => {
                //此处假数据
                if (res.status == 1) {
                    this.list = res.data;
                    this.total = this.list.sum;
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
        }
    }
};
</script>

<style >
.list {
    margin-top: 100px;
}
.list_banner {
    width: 100%;
    height: 380px;
}
.list_banner img {
    width: 100%;
    height: 100%;
}
.list_con {
    margin-top: 65px;
    padding-bottom: 115px;
}
.list_con .title {
    font-size: 20px;
    font-weight: bold;
    color: #28282c;
}
.list_content {
    margin-top: 25px;
}
.list_content .listone {
    width: 1200px;
    height: 290px;
    border-bottom: 1px solid #e1e1e1;
    display: flex;
    margin-bottom: 50px;
    cursor: pointer;
}
.list_content .listone:last-child {
    border: none;
}
.listone_l {
    width: 400px;
    height: 240px;
}
.listone_l img {
    width: 400px;
    height: 240px;
}
.listone_r {
    margin-left: 40px;
    height: 240px;
    display: flex;
    align-items: center;
}
.listone_r .listone_title {
    font-size: 18px;
    color: #28282c;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
}
.listone_r .listone_title:hover {
    color: #ff6600;
}
.listone_r .info {
    display: flex;
    margin-top: 15px;
    align-items: center;
}
.listone_r .info .time {
    font-size: 14px;
    color: #a1a1a1;
}
.listone_r .info span {
    display: inline-block;
    width: 1px;
    height: 12px;
    background-color: #e1e1e1;
    margin: 0 15px;
}
.listone_r .info .num {
    font-size: 14px;
    color: #a1a1a1;
}
.listone_r .con {
    width: 736px;
    font-size: 16px;
    line-height: 26px;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-align: justify;
    margin-top: 30px;
}
</style>
