import request from "@/utils/request";
//首页api

export function getNewAnnouncementApi(data) {
  return request({
    url: `/tlAnnouncements/selectFive`,
    method: 'POST'
  })
}
export function getStatementOrderApi(data) {
  return request({
    url: `/tlStatement/getStatementOrder`,
    method: 'POST',
    type:'applicationForm',
    data
  })
}
