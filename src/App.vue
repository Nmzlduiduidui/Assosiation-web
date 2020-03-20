<template>
    <div id="app">
        <el-scrollbar>
            <div :style="bgimg"/>
            <Header/>
            <el-main>
                <router-view/>
            </el-main>
            <Footer/>
        </el-scrollbar>
    </div>
</template>

<script>
    import router from './router/index.js'
    import Header from "./components/common/Header";
    import Footer from "./components/common/Footer";

    export default {
        name: 'App',
        data: function () {
            return {
                bgimg: {
                    backgroundImage: 'url(' + require('./assets/backgroud.jpg') + ')',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%', /**宽高100%是为了图片铺满屏幕 */
                    position: 'absolute',
                    opacity: '20%'
                },
            }
        },
        watch: {},
        components: {
            Footer,
            Header
            // Index
        },
        methods: {},
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

<style>


*{
   /* font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
*/
    font-family:pingfang;
}

</style>
