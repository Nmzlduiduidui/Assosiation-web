<template>
    <!--个人中心主页-->
    <div class="myBox">
        <el-container>
            <Aside/>
            <el-container>
                <el-main>
                <Information/>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<style>


</style>

<script>
    import '@/assets/css/index.css'
    import Aside from "../common/Aside";
    import MyHome from "../common/Home";
    import Modify from "./userModify";
    import Detail from "../common/Notice/Detail";
    import Notice from "../common/Notice/Notice";
    import Information from "./Information";

    export default {
        name: 'My',
        components: {Information, Notice, Detail, Modify,  MyHome, Aside},
        data() {
            return {}
        }
    }
</script>