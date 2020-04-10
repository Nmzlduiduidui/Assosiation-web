<template>
    <div class="HomeBox">
        <el-container>
            <Aside/>
            <el-container>
                <el-header>
                   <Breadcrumb/>
                </el-header>
                    <router-view/>
            </el-container>
        </el-container>
    </div>
</template>

<style>

</style>

<script>
    import '@/assets/css/index.css'
    import Aside from "../layout/Aside";
    import Breadcrumb from "../components/Breadrumb/Breadcrumb";

    export default {
        name: 'Home',
        components: {Breadcrumb, Aside},
        data() {
            return {
                breadList: []
            }
        },
        watch: {

            //监听路由的变化
            $route() {
                this.getBreadcrumb();
            }
        },
        methods: {

            // 面包屑数据处理
            getBreadcrumb() {
                let that = this;

                //一级页面设置为1，二级页面设置为2
                let breadNumber = typeof (this.$route.meta.breadNumber) !== 'undefined' ?
                    this.$route.meta.breadNumber : 1;

                //获取当前页面的名字和路由
                let newBread = {name: this.$route.name, path: this.$route.fullPath};

                //默认初始化面包屑数据
                let vuexBreadList = [];

                //当前面包屑Number大于1时才会从vuex中取值
                if (breadNumber !== 1) {

                    // 获取breadlist数组
                    vuexBreadList = that.$store.state.breadListState;
                }

                if (breadNumber < vuexBreadList.length) {

                    //回退面包屑      判断条件：当前路由的breadNumber小于vuexBreadList的长度
                    vuexBreadList.splice(breadNumber - vuexBreadList.length, vuexBreadList.length - breadNumber);
                }

                if (breadNumber > vuexBreadList.length) {

                    //添加面包屑      判断条件：当前路由的breadNumber大于vuexBreadList的长度
                    vuexBreadList.push(newBread);
                }

                //处理数据后，将最终的数据更新搭到vuex（用于页面刷新）
                that.$store.commit('breadListMutations', vuexBreadList);

                //处理完数据后，将最终数据更新为新的面包屑数组
                that.breadList = vuexBreadList;
            },
            breadcrumbClick(item) {
                this.$router.push({
                    path: item.path
                })
            }
        }

    };
</script>