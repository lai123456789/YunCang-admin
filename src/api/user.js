import request from '@/utils/request'

export function login(data) {
  let url;
  if(data.Type == 'phoneLogin'){
    url = '/tlUser/phoneLogin' //手机号登录
  }else{
    url = '/tlUser/passWordLogin' //密码登录
  }
  return request({
    url: url, //
    method: 'post',
    type: 'applicationForm',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout(data) {
  return request({
    url: '/tlUser/exitLogin', ///vue-admin-template/user/logout
    method: 'post',
    type: 'applicationForm',
    data
  })
}
