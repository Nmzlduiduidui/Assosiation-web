<template>
    <!--个人中心展示页-->
    <div class="userIndexBox">
        <el-row :gutter="10">
            <el-container>
                <el-main>
                    <div class="cardBox">
                        <div class="box">
                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <div class="userIndexCard">
                                    <el-card class="userCard">
                                        <div class="clearfix">
                                            <i class="el-icon-user"></i>
                                            <span>个人信息</span>
                                        </div>
                                        <div>
                                            <div>
                                                <div class="block">
                                                    <el-avatar :size="65" :src="circleUrl"></el-avatar>
                                                </div>
                                            </div>
                                            <ul class="list-group list-group-striped">
                                                <li class="list-group-item">
                                                    <div class="pull-left">
                                                        <i class="el-icon-user-solid"></i>&nbsp;&nbsp;用户名
                                                    </div>
                                                    <div class="pull-right">{{myInformation.name}}</div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="pull-left">
                                                        <i class="el-icon-mobile-phone"></i>&nbsp;&nbsp;手机号
                                                    </div>
                                                    <div class="pull-right">{{myInformation.phone}}</div>
                                                </li>

                                                <router-link to='/user/information'>
                                                    <el-button type="text" @click="" style="font-size: 15px">查看详情
                                                    </el-button>
                                                </router-link>
                                            </ul>
                                        </div>
                                    </el-card>
                                </div>
                            </el-col>
                        </div>
                        <div class="box">
                            <el-col>
                                <div class="userIndexCard">
                                    <el-card class="associationCard">
                                        <div class="cardBody">
                                            <div class="clearfix">
                                                <span>我的社团</span>
                                            </div>
                                            <div class="text-center">
                                                <ul class="list-group list-group-striped">
                                                    <li class="list-group-item">
                                                        <div class="pull-left">
                                                            <i class="el-icon-mobile-phone"></i>&nbsp;&nbsp;手机号
                                                        </div>
                                                        <div class="pull-right">{{myInformation.phone}}</div>
                                                    </li>

                                                    <router-link to='/Home/user/information'>
                                                        <el-button type="text" @click="" style="font-size: 15px">查看详情
                                                        </el-button>
                                                    </router-link>
                                                </ul>
                                            </div>

                                        </div>
                                    </el-card>
                                </div>
                            </el-col>
                        </div>
                        <div class="box">
                            <el-col>
                                <div class="userIndexCard">
                                    <el-card class="messageCard">
                                        <div>
                                            <div class="clearfix">
                                                <span>消息公告</span>
                                            </div>
                                            <div class="text-center">
                                                <ul class="list-group list-group-striped">
                                                    <li class="list-group-item">
                                                        <div class="pull-left">
                                                            <i class="el-icon-user-solid"></i>&nbsp;&nbsp;用户名
                                                        </div>
                                                        <div class="pull-right">{{myInformation.name}}</div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="pull-left">
                                                            <i class="el-icon-user"></i>&nbsp;&nbsp;用户昵称
                                                        </div>
                                                        <div class="pull-right">{{myInformation.nickName}}</div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="pull-left">
                                                            <i class="el-icon-mobile-phone"></i>&nbsp;&nbsp;手机号
                                                        </div>
                                                        <div class="pull-right">{{myInformation.phone}}</div>
                                                    </li>

                                                    <router-link to='/Home/user/information'>
                                                        <el-button type="text" @click="" style="font-size: 15px">查看详情
                                                        </el-button>
                                                    </router-link>
                                                </ul>
                                            </div>
                                        </div>
                                    </el-card>
                                </div>
                            </el-col>
                        </div>
                        <div class="box">
                            <el-col>
                                <div class="userIndexCard">
                                    <el-card class="activeCard">
                                        <div class="clearfix">
                                            <span>社团活动</span>
                                        </div>
                                        <div class="text-center">

                                            <ul class="list-group list-group-striped">
                                                <li class="list-group-item">
                                                    <div class="pull-left">
                                                        <i class="el-icon-user-solid"></i>&nbsp;&nbsp;用户名
                                                    </div>
                                                    <div class="pull-right">{{myInformation.name}}</div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="pull-left">
                                                        <i class="el-icon-user"></i>&nbsp;&nbsp;用户昵称
                                                    </div>
                                                    <div class="pull-right">{{myInformation.nickName}}</div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="pull-left">
                                                        <i class="el-icon-mobile-phone"></i>&nbsp;&nbsp;手机号
                                                    </div>
                                                    <div class="pull-right">{{myInformation.phone}}</div>
                                                </li>

                                                <router-link to='/Home/user/information'>
                                                    <el-button type="text" @click="" style="font-size: 15px">查看详情
                                                    </el-button>
                                                </router-link>
                                            </ul>
                                        </div>
                                    </el-card>
                                </div>
                            </el-col>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                labelPosition: 'right',
                myInformation: {
                    name: 'baozi',
                    nickName: 'Nmzl怼怼怼',
                    phone: '18756589658'
                },
                major: [],
            }
        }
    }
</script>

<style scoped>

    .userIndexBox {
        font-size: 25px;
    }

    .userCard, .associationCard, .messageCard, .activeCard {
        width: 100%;
        height: 280px;
        margin: 0 auto;
    }

    .userIndexBox .clearfix {
        margin: 10px;
        color: #999999;
        font-weight: normal;
    }

    .cardBox {
        margin: 5px;
        width: 100%;
        display: flex;
        flex-flow: wrap;
    }

    .box {
        width: 260px;
    }

    .text-center {
        padding: 20px 0;
        height: 100%;
        line-height: 100%;
        width: 100%;
    }

    .cardBody {
        margin: 0 auto;
    }

</style>