import request from '@/utils/request'
// 例子
// export function functionName(data = {}) {
//   return request('apiUrl', data);
// }
// 申请使用
export function postUse(data={}) {
  return request("common/submit/saas-consult", data);
}

//申请使用次数
export function postUseCount(data={}){
  return request("common/submit/add-html-view-count", data);
}

// 分享配置
export function getWxConfig(data={}) {
  return request("common/group-course/get-student-card-js-sign-package",data);
}

//点赞
export function toLike(data={}) {
  return request("common/submit/create-extend-record",data);
}

//H5 季度报告
export function getReport(data={}){
  return request("common/quarter-report/detail",data)
}

//H5 选择机构
export function getOrgList(data={}){
  return request("common/quarter-report/org-list",data)
}
