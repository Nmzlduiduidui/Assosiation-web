<template>
    <div class="asideBox" >
   <!-- 侧边选项栏-->
        <el-container>
                <el-container>
                    <el-aside  width="200px" >
                        <el-menu router> <!--el-menu添加router实现路由-->
                            <el-submenu index="my">
                                <template slot="title"><i class="el-icon-s-home"></i>个人中心</template>
                                <!--<el-menu-item index="/myHome">我的资料</el-menu-item>-->
                                <el-menu-item index="/Home/user/information">个人资料</el-menu-item>
                                <!--<el-menu-item index="/Home/modify">个人信息</el-menu-item>-->
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title"><i class="el-icon-menu"></i>社团中心</template>
                                <el-menu-item index="2-1">我的社团</el-menu-item>
                                <el-menu-item index="2-2">申请加入社团</el-menu-item>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title"><i class="el-icon-s-custom"></i>会员管理</template>
                                <el-menu-item index="3-1">新增会员申请</el-menu-item>
                                <el-menu-item index="3-2">会员信息修改</el-menu-item>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title"><i class="el-icon-s-grid"></i>社团管理</template>
                                <el-menu-item index="4-1">新增会员申请</el-menu-item>
                                <el-menu-item index="4-2">会员信息修改</el-menu-item>
                            </el-submenu>
                            <el-submenu index="5">
                                <template slot="title"><i class="el-icon-magic-stick"></i>活动管理</template>
                                <el-menu-item index="5-1">社团活动</el-menu-item>
                                <el-menu-item index="6-2">活动申请</el-menu-item>
                            </el-submenu>
                            <el-submenu index="6">
                                <template slot="title"><i class="el-icon-guide"></i>社团风采管理</template>
                                <el-menu-item index="6-1">社团风采</el-menu-item>
                            </el-submenu>
                            <el-submenu index="7">
                                <template slot="title"><i class="el-icon-chat-dot-round"></i>留言管理</template>
                                <el-menu-item index="7-1">留言</el-menu-item>
                            </el-submenu>
                            <el-submenu index="8">
                                <template slot="title"><i class="el-icon-chat-dot-round"></i>公告管理</template>
                                <el-menu-item index="/Home/notice">公告管理</el-menu-item>
                                <el-menu-item index="/Home/notice/noticeModify">发布公告</el-menu-item>
                                <el-menu-item index="/Home/notice/detail">公告详情</el-menu-item>

                            </el-submenu>
                        </el-menu>
                    </el-aside>

                </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>

    /*侧边栏title长度*/
    .asideBox .el-submenu__title{
        width: 50px;
    }

</style>