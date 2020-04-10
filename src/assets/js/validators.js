//验证器：自定义验证方法

// 验证用户名
var validateuserName = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('用户名不能为空'));
    } else {
        callback();
    }
};

// 验证登录密码
var validateLoginPass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        callback();
    }
};


// 验证手机号
var validatePhone = (rule, value, callback) => {
    var myreg=/^[1][3,4,5,6,7,8][0-9]{9}$/;
    if (value === '') {
        callback(new Error('请输入手机号'));
    } else if (value.length !== 11) {
        callback(new Error('请输入正确手机号!'));
    } else if (!myreg.test(value)){
        callback(new Error('请输入有效的手机号!'));
    }
    else {
        callback();

    }
};


// 验证邮箱
var validateEmail = (rule, value, callback) => {
    const email = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
    if (value === '') {
        callback(new Error('请输入邮箱'));
    } else if (!email.test(value)){
        callback(new Error('请输入有效的邮箱!'));
    }
    else {
        callback();
    }
};



//抛出到页面
    export default {
        validateLoginPass,
        validateuserName,
        validatePhone,
        validateEmail
    }