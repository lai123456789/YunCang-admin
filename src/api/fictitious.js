import request from '@/utils/request'

//获取分页
export function pageInfo(data) {
  return request({
    url: '/tlOrderVirtua/select',
    method: 'post',
    data
  })
}