import request from '@/utils/request'
// 例子
// export function functionName(data = {}) {
//   return request('apiUrl', data);
// }
// 申请使用
export function postUse(data) {
  return request("common/submit/saas-consult", data);
}