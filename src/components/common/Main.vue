<template>
    <!--首页主要区域Main-->
    <div class="main-show">
        <el-row :gutter="10">
            <!--Main轮播图部分-->
            <div class="main-show-swipe">
                <div class="grid-content bg-purple-light">
                    <div style="height: 300px">
                        <Swiper/>
                    </div>
                </div>
            </div>

            <!--Main通知公告部分-->
            <div class="main-notice">
                <el-row :gutter="10">
                    <div class="main-notice-activity">
                        <!--Main-公告栏部分-->
                        <el-col :xs="14" :sm="12" :md="8" :lg="12" :xl="12">
                            <div class="grid-content bg-purple-light">
                                <index-notice/>
                            </div>
                        </el-col>

                        <!--Main-社团活动-->
                        <el-col :xs="14" :sm="12" :md="8" :lg="12" :xl="12">
                            <div class="grid-content bg-purple">
                                <div>
                                    <index-notice/>
                                </div>
                            </div>
                        </el-col>
                    </div>

                    <!--Main其他部分-->
                    <div class="main-other">

                        <!--Main-友情链接-->
                        <div class="main-other-link">
                            <el-col :xs="14" :sm="15" :md="16" :lg="16" :xl="17">
                                <div class="grid-content bg-purple"></div>
                            </el-col>
                        </div>

                        <!--Main-联系我们-->
                        <div class="main-other-we">
                            <el-col :xs="10" :sm="9" :md="8" :lg="8" :xl="7">
                                <div class="grid-content bg-purple-light"></div>
                            </el-col>
                        </div>

                    </div>
                </el-row>
            </div>
        </el-row>
    </div>
</template>

<style>

</style>

<script>

    import Swiper from "./Swiper";
    import Notice from "../../views/notice/Index";
    import '@/assets/css/main.css'
    import IndexNotice from "../../views/notice/IndexNotice";

    export default {
        name: "Main",
        data: function () {
            return {
                tabPosition: 'left',

            }
        },
        components: {IndexNotice, Notice, Swiper}
    }

</script>

