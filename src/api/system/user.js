import request from '@/utils/request'
import { praseStrEmpty} from '@/utils/index'

//新增用户
export function addUser(data) {
    console.log(data.toString())
    return request({
        url:'/user/addUser',
        method:'post',
        data:data
    })
}

//删除用户
export function deleteUser(userId) {
    return request({
        url:'/user/'+userId,
        method:'delete'
    })

}

// 修改用户
export function updateUser(data) {
    return request({
        url: '/user',
        method: 'put',
        data: data
    })
}


// 查询用户列表
export function listUser(query) {
    return request({
        url: '/user/list',
        method: 'get',
        params: query
    })
}

// 查询用户详细
export function getUser(userId) {
    return request({
        url: '/user/' + praseStrEmpty(userId),
        method: 'get'
    })
}



// 用户密码重置
export function resetUserPwd(userId, password) {
    const data = {
        userId,
        password
    }
    return request({
        url: '/user/resetPwd',
        method: 'put',
        data: data
    })
}
