import Net from '../util/request';

// App菜单列表
export function getMenuByAppId() {
  return Net({
    url: '/frontMachine/all',
    method: 'post',
    data:{}
  })
}

//上传
export function ossUpload(data) {
  return request({
    url: '/oss/upload',
    method: "post",
    headers:{
      'Content-Type':'multipart/form-data'
    },
    data
  });
}
// 用户列表

export function userQuery(data) {
  return request({
    url: `/user/query`,
    method: "post",
    data
  });
}
// 新增编辑用户
export function userSave(data) {
  return request({
    url: `/user/save`,
    method: "post",
    data
  });
}
// 删除用户
export function userDelete(data) {
  return request({
    url: `/user/delete`,
    method: "post",
    data
  });
}
// 新增广告位

export function advertiseSave(data) {
  return request({
    url: `/advertise/save`,
    method: "post",
    data
  });
}
// 查询广告位
export function advertiseQuery(data) {
  return request({
    url: `/advertise/query`,
    method: "post",
    data
  });
}
// 广告位详情
export function advertiseInfo(dataId) {
  return request({
    url: `/advertise/info/${dataId}`,
    method: "get",
  });
}
// 删除广告位
export function advertiseDelete(data) {
  return request({
    url: `/advertise/delete`,
    method: "post",
    data
  });
}
