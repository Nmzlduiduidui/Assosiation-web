<template>
    <el-container>
        <!--
            model:表单数据对象
            status-icon：是否在显示校验结果反馈图标
            rules：表单验证规则
            -->
        <el-form :model="regForm" status-icon :rules="reg" ref="regForm" label-width="100px" class="demo-ruleForm">

            <el-form-item label="用户名" prop="userName">
                <el-input v-model="regForm.userName"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="regForm.pass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="regForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="手机" prop="pass">
                <el-input type="phone" v-model="regForm.phone" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="邮箱" prop="pass">
                <el-input type="email" v-model="regForm.email" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('regForm')">提交</el-button>
                <el-button @click="resetForm('regForm')">重置</el-button>
            </el-form-item>

        </el-form>
    </el-container>
</template>

<script>

    export default {
        name: 'Register',
        data() {
            return {
                regForm: {
                    pass: '',
                    checkPass: '',
                    age: '',
                    userName:'',
                    phone:'',
                    email:''
                },
                reg: {
                    userName: [
                        { required:true, validator: this.validators.validateuserName, trigger: 'blur'}
                    ],
                    pass: [
                        { required:true, validator: this.validators.validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        { required:true, validator: this.validators.validatePass2, trigger: 'blur'}
                    ],
                    age: [
                        { required:true, validator:  this.validators.checkAge, trigger: 'blur'}
                    ],
                    phone: [
                        { required:true, validator:  this.validators.checkAge, trigger: 'blur'}
                    ],
                    emial: [
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