<template>

    <!--登录页-->
    <div class="loginBox">

        <div :style="bgimg"/>

        <el-container direction="vertical">
            <div style="height: 100%">
                <el-header>
                    <Header/>
                </el-header>
                <div style="height: 100vh;width: 100%">
                    <el-main>
                        <div class="login-form">
                            <el-card style="margin-top: 10px">
                                <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm"
                                           label-width="70px"
                                           class="demo-ruleForm">
                                    <h2>校园社团管理系统</h2>
                                    <div style="margin: 30px; ">
                                        
                                        <el-form-item label="用户名" prop="username">
                                            <el-input v-model="loginForm.username"></el-input>
                                        </el-form-item>
                                        <el-form-item label="密码" prop="password">
                                            <el-input type="password" v-model="loginForm.password"
                                                      autocomplete="off"></el-input>
                                        </el-form-item>

                                        <el-form-item prop="code" label="验证码" style="margin-top: 10px">
                                            <el-input
                                                    v-model="loginForm.code"
                                                    auto-complete="off"
                                                    placeholder="请输入验证码"
                                                    style="width: 60%"
                                                    @keyup.enter.native="handleLogin"
                                            >
                                                <svg-icon slot="prefix" icon-class="validCode"
                                                          class="el-input__icon input-icon"/>
                                            </el-input>
                                            <div class="login-code">
                                                <img :src="codeUrl" @click="getCode"/>
                                            </div>
                                        </el-form-item>

                                        <el-form-item>
                                            <div style="float: left;margin-right:10px">
                                                <el-checkbox v-model="loginForm.rememberMe">
                                                    记住密码
                                                </el-checkbox>
                                            </div>


                                            <div style="float: right">
                                                <el-link type="danger" :underline="false" style="margin-left: 10px">忘记密码？</el-link>
                                            </div>

                                            <div style="float: right">
                                                <el-link type="warning" :underline="false">
                                                    <el-button type="text" @click="dialogRegisterVisible=true">注册</el-button>
                                                </el-link>
                                            </div>

                                        </el-form-item>

                                        <!-- <el-link type="primary" :underline="false">还没账号？快来注册吧</el-link>-->
                                        <el-form-item>

                                            <el-button
                                                    :loading="loading"
                                                    size="medium"
                                                    type="primary"
                                                    @click.native.prevent="handleLogin"
                                            >
                                                <span v-if="!loading">登 录</span>
                                                <span v-else>登 录 中...</span>
                                            </el-button>

                                            <el-button @click="resetForm('loginForm')">重置</el-button>
                                        </el-form-item>
                                    </div>
                                    </el-form>
                            </el-card>
                        </div>

                    </el-main>
                </div>

                <Footer/>
            </div>
        </el-container>
        <!--弹出用户注册页面-->
        <el-dialog
                title="用户注册"
                :visible.sync="dialogRegisterVisible"
                width="30%"
                :before-close="handleClose">
            <Register/>

        </el-dialog>
    </div>


</template>

<script>
    import {getCodeImg} from "@/api/login";  //获取验证码
    // import {mapMutations} from 'vuex';   //引入vuex并解构赋值
    import Cookies from "js-cookie";
    import {encrypt, decrypt} from '../utils/jsencrypt'
    import Header from "../layout/Header";
    import Footer from "../layout/Footer";
    import Register from "./user/Register";

    export default {
        name: 'Login',
        components: {Register, Footer, Header},
        data() {
            return {
                codeUrl: "",
                cookiePassword: "",
                bgimg: {
                    backgroundImage: 'url(' + require('../assets/backgroud.jpg') + ')',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%', /**宽高100%是为了图片铺满屏幕 */
                    position: 'absolute',
                    opacity: '20%',

                },
                //用户名与输入框绑定的值
                loginForm: {
                    username: '',
                    password: '',
                    checkPass: '',
                    code: "",
                    uuid: ""
                },
                //验证器验证规则
                loginRules: {
                    password: [
                        {required: true, validator: this.validators.validateLoginPass, trigger: 'blur'}
                    ],
                    username: [
                        {required: true, validator: this.validators.validateuserName, trigger: 'blur'}
                    ],
                    // code: [{required: true, trigger: "change", message: "验证码不能为空"}]
                },
                loading: false,
                redirect: undefined,
                dialogRegisterVisible: false,
            };
        },
        /*  watch: {
              $route: {
                  handler: function(route) {
                      this.redirect = route.query && route.query.redirect;
                  },
                  immediate: true
              }
          },*/
        created() {
            this.getCode();
            this.getCookie();
        },
        methods: {
            //在事件中使用...引入vuex中setToken存储token的方法，
            // ...mapMutations(['$_setToken']),

            getCode() {
                getCodeImg().then(res => {
                    console.log(res.data.uuid)
                    this.codeUrl = "data:image/gif;base64," + res.data.img;
                    this.loginForm.uuid = res.data.uuid;
                });
            },
            getCookie() {
                const username = Cookies.get("username");
                const password = Cookies.get("password");
                const rememberMe = Cookies.get('rememberMe')
                this.loginForm = {
                    username: username === undefined ? this.loginForm.username : username,
                    password: password === undefined ? this.loginForm.password : decrypt(password),
                    rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
                };
            },
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true;
                        if (this.loginForm.rememberMe) {
                            Cookies.set("username", this.loginForm.username, {expires: 30});
                            Cookies.set("password", encrypt(this.loginForm.password), {expires: 30});
                            Cookies.set('rememberMe', this.loginForm.rememberMe, {expires: 30});
                        } else {
                            Cookies.remove("username");
                            Cookies.remove("password");
                            Cookies.remove('rememberMe');
                        }

                        this.$store
                            .dispatch("Login", this.loginForm)
                            .then(() => {
                                this.$router.push({path: this.redirect || "/"});
                            })
                            .catch(() => {
                                this.loading = false;
                                this.getCode();
                            });
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleClose(done) {
                done()
            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss">
    .loginBox {
        width: 100%;
        height: 100%;
    }

    .login-form {
        /*width: 60%;*/
        height: 100%;
        margin: 0 auto;
        /*text-align: center;*/

    }

    .loginBox .el-card {
        width: 400px;
        height: 100%;
        margin: 0 auto;
        line-height: 60px;
    }

    .login-code {
        width: 36%;
        height: 38px;
        float: right;

        img {
            cursor: pointer;
            vertical-align: middle;
        }
    }

</style>