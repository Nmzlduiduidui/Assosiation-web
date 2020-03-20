<template>
    <el-row>
        <el-col :span="12" style="float:left;">
            <!--面包屑-->
            <el-breadcrumb class="breadcrumb" separator=">" style="margin-top:23px">
                <!--默认给一个首页的跳转，如果不需要可以去掉-->
                <!--<el-breadcrumb-item :to="{path:'/index'}">首页</el-breadcrumb-item>-->
                <!--面包屑列表-->
                <el-breadcrumb-item
                        v-for='(item,index) in breadList'
                        :key='index'
                        @click.native="breadcrumbClick(item)"
                        v-if='item.name' style="cursor: pointer">
                    {{item.name}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="12" style="float:left;">

            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px">我的</i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <el-link>修改资料</el-link>
                    </el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Breadcrumb",
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