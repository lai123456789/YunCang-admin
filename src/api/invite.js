import request from '@/utils/request'

//账户信息
export function accountInfo(data) {
  return request({
    url: '/tlApplyReturnMoney/accountInfo',
    method: 'post',
    type:'applicationForm',
    data
  })
}

//申请返现
export function applyReturnMoney(data) {
    return request({
      url: '/tlApplyReturnMoney/applyReturnMoney',
      method: 'post',
      type:'applicationForm',
      data
    })
  }

//获取分页
export function pageInfo(data) {
    return request({
      url: '/tlApplyReturnMoney/pageInfo',
      method: 'post',
      data
    })
  }
  
//分佣记录
export function CommissionAmount(data) {
  return request({
    url: '/tlCommissionAmount/pageInfo',
    method: 'post',
    data
  })
}