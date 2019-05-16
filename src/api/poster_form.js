import request from '@/utils/request'
// 海报表单数据
export function getPosterForm(data={}) {
  return request("poster/form/show-form", data)
}

// 上传表单
export function submitPosterForm(data={}) {
  return request("poster/form-submit/submit", data)
} 