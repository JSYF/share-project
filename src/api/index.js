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

// 分享表单选项
export function getPosterForm(data={}) {
  return request("poster/form/get-form-info", data)
}

// 上传表单
export function submitPosterForm(data={}) {
  return request("poster/form-submit/submit", data)
}