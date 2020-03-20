var checkAge = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('年龄不能为空'));
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
        } else {
            if (value < 18) {
                callback(new Error('必须年满18岁'));
            } else {
                callback();
            }
        }
    }, 1000);
};


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


// 验证注册密码
var validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        if (this.regForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
    }
};

//再次输入密码
var validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== this.regForm.pass) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
};



//抛出到页面
export default {
    checkAge,
    validatePass,
    validateLoginPass,
    validatePass2,
    validateuserName

}