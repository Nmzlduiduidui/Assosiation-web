<template>
    <div class="informationBox">

        <el-row :gutter="10">
            <!--Modify个人信息-->
            <div class="information-operate">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="height:100%;">
                    <div style="background-color:rgba(211,212,214,0.8);height: 100%">
                            <div class="block" style="height: 100px ">
                                <el-avatar :size="50" :src="circleUrl" style="margin-top: 20px"></el-avatar>
                            </div>

                        <el-scrollbar>
                            <div class="myInformation" style="width: 50%;">

                                <el-form :label-position="labelPosition" label-width="80px" :model="myInformation"
                                         style="text-align: center">

                                    <div style="text-align: right">
                                        <router-link to='/Home/user/userModify'>
                                            <el-button type="text" @click="" style="font-size: 15px">修改资料</el-button>
                                        </router-link>
                                      </div>

                                    <el-form-item label="用户名">
                                        <el-input v-model="myInformation.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="用户昵称">
                                        <el-input v-model="myInformation.nickName"></el-input>
                                    </el-form-item>
                                    <el-form-item label="生日">
                                        <el-input v-model="myInformation.birthday"></el-input>
                                    </el-form-item>
                                    <el-form-item label="邮箱">
                                        <el-input v-model="myInformation.email"></el-input>
                                    </el-form-item>
                                    <el-form-item label="QQ">
                                        <el-input v-model="myInformation.qq"></el-input>
                                    </el-form-item>
                                    <el-form-item label="学院">

                                        <el-select v-model="major" clearable placeholder="选择学院" style="float: left">
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
                            </div>
                        </el-scrollbar>
                    </div>
                </el-col>
            </div>

        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Information" ,
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
                options: [{
                    value: '选项1',
                    label: '信工学院'
                }, {
                    value: '选项2',
                    label: '高博学院'
                }]
            }
        },
        methods: {
            onSubmit() {
                alert('保存成功!');
            }
        }

    }
</script>

<style scoped>
    body {
        text-align: center
    }

    .myInformation {
        margin: 0 auto
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }


</style>