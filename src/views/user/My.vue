<template>
    <!--个人中心主页-->
    <div class="myBox">
        <el-container>
            <Aside/>
            <el-container>
                <el-main>
                <Index/>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<style>


</style>

<script>
    import '@/assets/css/index.css'
    import Aside from "../../layout/Aside";
    import MyHome from "../Home";
    import Detail from "../notice/Detail";
    import Notice from "../notice/Index";
    import Index from "./Index";

    export default {
        name: 'My',
        components: {Index,Notice, Detail,  MyHome, Aside},
        data() {
            return {}
        }
    }
</script>