<template>
    <div class="informationBox">
        <el-row :gutter="1">
            <el-container>
                <el-main>
                    <el-col :span="6" :xs="24">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>个人信息</span>
                            </div>
                            <div>
                                <div class="text-center">
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
                                    <li class="list-group-item">
                                        <div class="pull-left">
                                            <i class="el-icon-notebook-1"></i>&nbsp;&nbsp;邮箱
                                        </div>
                                        <div class="pull-right">{{myInformation.email}}</div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="pull-left">
                                            <i class="el-icon-chat-line-round"></i>&nbsp;&nbsp;QQ
                                        </div>
                                        <div class="pull-right">{{myInformation.QQ}}</div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="pull-left">
                                            <i class="el-icon-school"></i>&nbsp;&nbsp;学院
                                        </div>
                                        <div class="pull-right">{{myInformation.major}}</div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="pull-left">
                                            <i class="el-icon-reading"></i>&nbsp;&nbsp;班级
                                        </div>
                                        <div class="pull-right">{{myInformation.grade}}</div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="pull-left">
                                            <i class="el-icon-sugar"></i>&nbsp;&nbsp;生日
                                        </div>


                                        <div class="pull-right">{{myInformation.birthday}}</div>
                                    </li>
                                </ul>
                            </div>
                        </el-card>

                    </el-col>
                    <el-col :span="18" :xs="24">
                        <el-card style="background-color:rgba(211,212,213,0.7);">
                            <div slot="header" class="clearfix">
                                <span>基本资料</span>
                            </div>
                            <div class="myInformation">

                                <el-tabs v-model="activeName" @tab-click="handleClick">
                                    <el-tab-pane label="修改资料" name="first">
                                        <el-form :label-position="labelPosition" label-width="70px"
                                                 :model="myInformation"
                                                 style="float: left">
                                            <el-form-item label="用户名">
                                                <el-input v-model="myInformation.name"></el-input>
                                            </el-form-item>
                                            <el-form-item label="用户昵称">
                                                <el-input v-model="myInformation.nickName"></el-input>
                                            </el-form-item>
                                            <el-form-item label="生日">
                                                    <el-date-picker
                                                            v-model="myInformation.birthday"
                                                            type="date"
                                                            placeholder="选择日期"
                                                            style="float: left"
                                                    >
                                                    </el-date-picker>
                                            </el-form-item>
                                            <el-form-item label="邮箱">
                                                <el-input v-model="myInformation.email"></el-input>
                                            </el-form-item>
                                            <el-form-item label="QQ">
                                                <el-input v-model="myInformation.qq"></el-input>
                                            </el-form-item>
                                            <el-form-item label="学院">

                                                <el-select v-model="major" clearable placeholder="选择学院"
                                                           style="float: left">
                                                    <el-option
                                                            v-for="item in options"
                                                            :key="item.value"
                                                            :label="item.label"
                                                            :value="item.value">
                                                    </el-option>
                                                </el-select>

                                            </el-form-item>

                                            <el-form-item label="班级">
                                                <el-input v-model="myInformation.grade"></el-input>
                                            </el-form-item>
                                            <el-form-item label="手机号">
                                                <el-input v-model="myInformation.phone"></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="primary" @click="onSubmit">保存</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </el-tab-pane>
                                    <el-tab-pane label="修改密码" name="second">

                                        <el-form :label-position="labelPosition" label-width="70px"
                                                 :model="changePassword"
                                                 style="text-align: center">

                                            <el-form-item label="旧密码">
                                                <el-input v-model="changePassword.oldPassword"></el-input>
                                            </el-form-item>

                                            <el-form-item label="新密码">
                                                <el-input v-model="changePassword.password"></el-input>
                                            </el-form-item>

                                            <el-form-item label="确认密码">
                                                <el-input v-model="changePassword.checkPassword"></el-input>
                                            </el-form-item>

                                            <el-form-item>
                                                <el-button type="primary" @click="onSubmit">保存</el-button>
                                            </el-form-item>

                                        </el-form>

                                    </el-tab-pane>
                                </el-tabs>

                            </div>
                        </el-card>
                    </el-col>
                </el-main>
            </el-container>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Information",
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                labelPosition: 'right',
                myInformation: {},
                major: [],
                options: [{
                    value: '选项1',
                    label: '信工学院'
                }, {
                    value: '选项2',
                    label: '高博学院'
                }],
                changePassword: {
                    oldPassword: '',
                    password: '',
                    checkPassword: ''
                },
                activeName: 'first'
            }
        },
        methods: {
            onSubmit() {
                alert('保存成功!');
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>


    .el-input{
        width:200px;
    }

</style>