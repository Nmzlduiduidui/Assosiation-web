<template>
    <div class="swiperBox">
    <!--轮播图-->
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "swiper"
    }
</script>


<style>

</style>