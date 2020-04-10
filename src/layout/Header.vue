<template>

    <!--页面头部-->
    <div class="headerBox">
        <div class="nav">
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router

            >
                <!--校徽放置-->
                <div class="ico" style="text-align: center">
                    <!--<div :style="navimg"/>-->
                </div>

                <!--导航-->
                <el-menu-item index="/index">首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">南院社团</template>
                    <el-submenu index="2-1">
                        <template slot="title">科技学术类</template>
                        <el-menu-item index="2-1-1">选项1</el-menu-item>
                        <el-menu-item index="2-1-2">选项2</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2-2">
                        <template slot="title">文艺体育类</template>
                        <el-menu-item index="2-2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2-2">选项2</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2-3">
                        <template slot="title">理论学习类</template>
                        <el-menu-item index="2-3-1">选项1</el-menu-item>
                        <el-menu-item index="2-3-2">选项2</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2-4">
                        <template slot="title">公益服务类</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item>-->
                <el-menu-item index="/association">多彩社团</el-menu-item>
                <el-menu-item index="/notice/index">公告</el-menu-item>

                <el-menu-item index="/user/index">我的</el-menu-item>


                <el-menu-item style="float: right">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <router-link to="/user/profile">
                                <el-dropdown-item>个人中心</el-dropdown-item>
                            </router-link>
                            <router-link to="/login">
                                <el-dropdown-item>登录</el-dropdown-item>
                            </router-link>
<!--                            <router-link to="/user/register">
                                <el-dropdown-item>注册</el-dropdown-item>
                            </router-link>-->
                            <el-dropdown-item divided @click.native="logout">
                                <span>退出登录</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu-item>

                                <!--用户注册模块-->
                                <el-menu-item style="float: right">

                                    <el-button type="text" @click="dialogRegisterVisible=true">注册</el-button>
                                    <!--弹出用户注册页面-->
                                    <el-dialog
                                            title="用户注册"
                                            :visible.sync="dialogRegisterVisible"
                                            width="30%"
                                            :before-close="handleClose">
                                        <register/>

                                    </el-dialog>
                                </el-menu-item>

                <!--用户登录-->
                <!--  <el-menu-item style="float: right">
                      &lt;!&ndash;用户登录链接&ndash;&gt;
                      <el-button type="text" @click="dialogLoginVisible=true">登录</el-button>
                     &lt;!&ndash;弹出用户登录页面&ndash;&gt;
                      <el-dialog
                              title="用户登录"
                              :visible.sync="dialogLoginVisible"
                              width="30%"
                              :before-close="handleClose">
                          <Login/>
                      </el-dialog>
                  </el-menu-item>
  -->

            </el-menu>
        </div>

    </div>
</template>

<script>

    import Vue from 'vue'
    import router from '@/router/index.js'
    import VueRouter from 'vue-router'
    import Login from "../views/Login";
    import Register from "../views/user/Register";

    Vue.use(VueRouter)

    export default {
        name: 'Header',
        components: {Register, Login},
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                navimg: {
                    backgroundImage: 'url(' + require('../assets/navImg.png') + ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    width: '150px',
                    height: '60px', /**宽高100%是为了图片铺满屏幕 */
                    position: 'absolute',
                },
                dialogLoginVisible: false,
                dialogRegisterVisible: false,
            };
        },
        methods: {
            handleClose(done) {
                done()
            }
        },
        router,
        Login
    }
</script>

<style>
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>