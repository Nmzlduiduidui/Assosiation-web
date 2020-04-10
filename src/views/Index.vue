<template >
    <!--首页-->
    <div class="indexBox" >
        <Header/>
          <el-container>
            <!--主体-->
                <el-main>
                    <Main/>
                </el-main>
        </el-container>
        <Footer/>
        </div>

</template>
<script>

    import Router from 'vue-router'
    import '@/assets/css/index.css'
    import 'element-ui/lib/theme-chalk/index.css'
    import Main from '@/components/common/Main.vue'
    import Header from "../layout/Header";
    import Footer from "../layout/Footer";

    export default {
        name: 'Index',
        //Main组件给申明到components里面然后在template里面使用

        components: {Footer, Header, Main},

        data() {
            return {

            }
        },Router
    }
</script>
