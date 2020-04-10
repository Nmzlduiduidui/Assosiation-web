<template>
    <div class="swiperBox">
    <!--轮播图-->
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in imgList" :key="item.id">
            <!--<h3>{{ item.imgurl }}</h3>-->
            <img :src="item.imgurl" class="image">
        </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "swiper",
        data(){
            return{
                imgList:[
                    {id:0,imgurl:require("../../assets/backgroud.jpg")},
                    {id:1,imgurl:require("../../assets/navImg.png")}
                ]
            }
        }
    }
</script>


<style>

</style>