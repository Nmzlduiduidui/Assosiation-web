<template>
    <div>
        <div :style="bgimg"/>
        <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
        <Header/>
        <div :class="classObj" class="app-wrapper">

            <el-main>
                <div class="layout-main">
                    <div style="float:left;height:100%;">
                        <SideBar class="sidebar-container"/>
                    </div>
                    <div class="layout-main-right">
                        <div :class="{hasTagsView:needTagsView}" class="main-container">
                            <div :class="{'fixed-header':fixedHeader}">
                                <Navbar/>
                                <!--<tags-view v-if="needTagsView" />-->
                            </div>
                            <AppMain/>
                        </div>
                    </div>
                </div>
            </el-main>

        </div>
        <Footer/>
    </div>
</template>

<script>
    import router from '../router/index.js'
    import Header from "../layout/Header";
    import Footer from "../layout/Footer";
    import Aside from "./Aside";
    import SideBar from "./compnents/SindeBar/Index";
    import {mapState} from 'vuex'
    import AppMain from "./compnents/AppMain";
    import Breadcrumb from "../components/Breadrumb/Breadcrumb";
    import Navbar from "./compnents/Navbar";

    export default {
        name: "Layout",
        data: function () {
            return {
                bgimg: {
                    backgroundImage: 'url(' + require('../assets/backgroud.jpg') + ')',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%', /**宽高100%是为了图片铺满屏幕 */
                    position: 'absolute',
                    opacity: '20%',

                },
                isCollapse: true,
            }
        },
        watch: {},
        components: {
            Navbar,
            Breadcrumb,
            AppMain,
            SideBar,
            Aside,
            Footer,
            Header
            // Index
        },
        methods: {
            handleClickOutside() {
                this.$store.dispatch('app/closeSideBar', {withoutAnimation: false})
            }
        },
        computed: {
            ...mapState({
                sidebar: state => state.app.sidebar,
                device: state => state.app.device,
                showSettings: state => state.settings.showSettings,
                needTagsView: state => state.settings.tagsView,
                fixedHeader: state => state.settings.fixedHeader
            }),
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            }
        },
        created: function () {
            // 在页面加载时读取sessionStorage里的状态信息
            sessionStorage.getItem('umeetCloudVuex') && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(sessionStorage.getItem('umeetCloudVuex'))));
            // 在页面刷新时将vuex里的信息保存到sessionStorage里
            window.addEventListener('beforeunload', () => {
                sessionStorage.setItem('umeetCloudVuex', JSON.stringify(this.$store.state))
            })
        },
        router
    }
</script>

<style lang="scss" scoped>

    @import "../assets/styles/mixin";
    @import "../assets/styles/variables";

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;

        &.mobile.openSidebar {
            position: fixed;
            top: 0;
        }
    }

    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }

    .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - #{$sideBarWidth});
        transition: width 0.28s;
    }

    .hideSidebar .fixed-header {
        width: calc(100% - 54px)
    }

    .mobile .fixed-header {
        width: 100%;
    }
</style>
