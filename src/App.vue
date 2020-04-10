<template>
    <div id="app">
        <el-scrollbar>
            <router-view/>
        </el-scrollbar>
    </div>
</template>

<script>

    import router from './router/index.js'

    export default {
        name: 'App',
        router
    }
</script>

<style>

    * {
        /* font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
     */
        font-family: pingfang;
    }

</style>
