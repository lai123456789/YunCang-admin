import request from '@/utils/request'

// const ceshi = () => {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }
// export {ceshi}

// export function ceshi(data) {
//   return request({
//     url: '/ceshi/api',
//     method: 'post',
//     data
//   })
// }

export function payMoney(data) {  //支付宝充值
  return request({
    url: `/tlRechargeBill/rechargePay?id=${data.id}&payMoney=${data.payMoney}`,
    method: 'get'
  })
}

export function registed(data) {  //注册
  return request({
    url: `/tlUser/register`,
    method: 'post',
    data
  })
}
export function getCodeApi(data) { //获取验证码
  return request({
    url: `/tlPublicInterface/getSend`,
    method: 'post',
    type: 'applicationForm',
    data
  })
}
export function verifiCode(data) { //验证 验证码
  return request({
    url: `/tlPublicInterface/verificationCode`,
    method: 'post',
    data
  })
}
