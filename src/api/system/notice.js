import request from '@/utils/request'

// 新增公告
export function addNotice(data) {
    return request({
        url:'/notice',
        method:'post',
        data:datalistNotice
    })
}

//删除公告
export function updateNotice(data) {
    return request({
        url:'/notice',
        method:'put',
        data:data
    })
}


//查询公告列表
export function listNotice(query) {

    return request({
        url:'/notice/list',
        method:'get',
        params:query
    })
}

//查询公告详情
export function getNotice(noticeId) {
    return request({
        url:'/notice/'+noticeId,
        method: 'get'
    })
}