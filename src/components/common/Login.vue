<template>
    <el-container>
        <el-form :model="loginForm" status-icon :rules="log" ref="loginForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="loginForm.userName"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
            </el-form-item>

            <el-link type="warning" :underline="false">忘记密码？</el-link>
            <el-link type="primary" :underline="false">还没账号？快来注册吧</el-link>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-container>
</template>

<script>

    export default {
        name: 'Login',
        data() {
            return {
                loginForm: {
                    pass: '',
                    checkPass: '',
                    age: '',
                    userName:'',
                    checkuserName:''
                },
                log: {
                    pass: [
                        { required:true, validator: this.validators.validateLoginPass, trigger: 'blur'}
                    ],
                    userName: [
                        { required:true, validator: this.validators.validateuserName, trigger: 'blur'}
                    ],
                    age: [
                        { required:true, validator:  this.validators.checkAge, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }

</script>