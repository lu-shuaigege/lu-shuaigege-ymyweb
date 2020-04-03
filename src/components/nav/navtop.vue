<template>
    <!-- 导航 -->
    <div class="navtop">
        <div class="_containers navtop_con">
            <img class="logo" @click="selectnav(0)" src="@/assets/img/logo.png" alt />
            <div class="topright">
                <div class="navtop_con_c">
                    <div :class="isSelect == 0?'selected':''" @click="selectnav(0)">首页</div>
                    <div :class="isSelect == 1?'selected':''" @click="selectnav(1)">公司动态</div>
                </div>
                <div class="navtop_con_r">
                    <div class="one" @click="toUrl()">供应商平台</div>
                    <div class="two">优才学院</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSelect: 0
        };
    },
    created() {
        if (this.$route.query.isSelect) {
            this.isSelect = this.$route.query.isSelect;
        }
    },
    methods: {
        selectnav(x) {
            this.isSelect = x;
            if (x == 0) {
                this.$router.push({
                    path: "/home",
                    query: {
                        isSelect: x
                    }
                });
            } else {
                this.$router.push({
                    path: "/list",
                    query: {
                        isSelect: x
                    }
                });
            }
        },
        toUrl() {
            window.open("http://admin.umu888.com/agency/auth/login");
        }
    }
};
</script>
<style lang="scss" scoped>
// 导航
.navtop {
    width: 100%;
    height: 100px;
    background-color: #ffffff;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    z-index: 99;
}
.navtop_con {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navtop_con .logo {
    width: 109px;
    height: 62px;
    cursor: pointer;
}
.topright {
    display: flex;
    align-items: center;
}
.navtop_con_c {
    width: 210px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    color: #999999;
    cursor: pointer;
    margin-right: 66px;
    div {
        padding: 3px 0px;
        border-bottom: 2px solid #ffffff;
        &:hover {
            border-bottom: 2px solid #ff8737;
        }
    }
    .selected {
        // height: 36px;
        color: #999999;
        border-bottom: 2px solid #ff8737;
    }
}
.navtop_con_c div:hover {
    color: #999999;
}
.navtop_con_r {
    display: flex;
    align-items: center;
}
.navtop_con_r .one {
    width: 108px;
    height: 36px;
    line-height: 36px;
    border-radius: 8px;
    border: solid 1px #1583ff;
    font-size: 16px;
    color: #1583ff;
    text-align: center;
    margin-right: 20px;
    cursor: pointer;
}
.navtop_con_r .two {
    width: 90px;
    height: 36px;
    line-height: 36px;
    border-radius: 8px;
    border: solid 1px #ff6600;
    font-size: 16px;
    color: #ff6600;
    text-align: center;
    cursor: pointer;
}
</style>
