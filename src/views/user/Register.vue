<template>
    <el-container>
        <div style=" width:100% ;margin: 0;padding: 0">
            <div style="text-align: center;margin: 0 auto">
                <!-- model:表单数据对象 status-icon：是否在显示校验结果反馈图标 rules：表单验证规则-->
                <el-form :model="regForm" status-icon :rules="rules" ref="regForm" label-width="80px"
                         class="demo-ruleForm">

                    <el-form-item label="用户名" prop="userName">
                        <el-input v-model="regForm.userName"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="regForm.password" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="regForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="手机" prop="phone">
                        <el-input type="phone" v-model="regForm.phone" maxlength="11" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱" prop="email">
                        <el-input type="email" v-model="regForm.email" autocomplete="off" maxlength="50"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary"   @click.native.prevent="handleRegister">保存</el-button>
                        <el-button @click="resetForm('regForm')">重置</el-button>
                    </el-form-item>

                </el-form>
            </div>
        </div>
    </el-container>
</template>

<script>


    import {addUser} from "../../api/system/user";

    export default {
        name: 'Register',
        data() {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.regForm.checkPass !== '') {
                        this.$refs.regForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            const validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.regForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };

            return {

                regForm: {
                    userName: 'qwer',
                    password: '123456',
                    checkPass: '123456',
                    phone: '18659568569',
                    email: '276695689@qq.com'
                },
                rules: {
                    userName: [
                        {required: true, validator: this.validators.validateuserName, trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, validator: this.validators.validatePhone, trigger: 'blur'}
                    ],
                    email: [
                        {required: true, validator: this.validators.validateEmail, trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            handleRegister() {
                this.$refs.regForm.validate(valid => {
                    if (valid) {
                            addUser(this.regForm).then(response => {
                                console.log(response.data)
                                if (response.data.code === 200) {
                                    this.msgSuccess(response.data.msg);
                                    this.open = false;
                                    this.getList();
                                } else {
                                    this.msgError(response.data.msg);
                                }
                            });
                        // }
                    }

                });
            },
            resetForm(regform) {
                this.$refs[regform].resetFields();
            },
            // 表单重置
            reset() {
                this.regform = {
                    pass: undefined,
                    checkPass: undefined,
                    userName: undefined,
                    phone: undefined,
                    email: undefined
                };
                this.resetForm("regform");
            }
        }
    }

</script>