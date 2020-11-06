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
