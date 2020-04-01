<template>
    <!-- 底部 -->
    <div class="navbottom">
        <div class="navbottom_up">
            <div class="_containers navbottom_up_c">
                <div class="l">
                    <div class="title">游米游</div>
                    <p>公司地址：海南省海口市海甸六东路华凯江海庭商业楼3楼</p>
                    <p>联系电话：0898-66724626</p>
                </div>
                <div class="navbottom_right">
                    <div class="r">
                        <img src="@/assets/img/APPcode.png" alt />
                        <p>APP扫码下载</p>
                    </div>
                    <div class="r">
                        <img src="@/assets/img/code.png" alt />
                        <p>关注公众号</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbottom_ud">
            <a href="http://www.beian.miit.gov.cn">
                <p>Copyright © 2019-2022游米游信息科技有限公司 版权所有Powered by EyouCms 琼ICP备19004853号</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {},
    methods: {}
};
</script>
<style lang="scss" scoped>
.navbottom {
    width: 100%;
    height: 241px;
    background-color: #f5f2f5;
}
.navbottom_up {
    width: 100%;
    height: 160px;
    border-bottom: 1px solid #d9d7d9;
}
.navbottom_up_c {
    height: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbottom_up .l {
}
.navbottom_up .l p {
    font-size: 14px;
    color: #666666;
    // opacity: 0.5;
    margin-top: 4px;
}
.navbottom_up .l .title {
    font-size: 18px;
    color: #333333;
    margin-bottom: 10px;
}
.navbottom_right {
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbottom_up .r {
    text-align: center;
    width: 80px;
}
.navbottom_up .r img {
    width: 80px;
    height: 80px;
}
.navbottom_up .r p {
    width: 80px;
    font-size: 12px;
    color: #666666;
    text-align: center;
}

.navbottom_ud {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.navbottom_ud a {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 48px;
    letter-spacing: 0px;
    color: #666666;
}
</style>
