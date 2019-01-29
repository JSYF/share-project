import axios from 'axios'
import qs from "qs";
import jsSha1 from 'js-sha1'
import Fingerprint from 'fingerprintjs'
axios.defaults.baseURL = process.env.baseURL;
function strSha(arys) {
  let sign = qs.stringify(arys) + '&appkey=hoo.ai.edu'
  arys.signature = jsSha1.hex(sign)
  return arys
}
// 获取Guid
export const getGuid = () => {
  let guid = localStorage.getItem("sdguid");
  if (!guid) {
    guid = new Fingerprint().get()
    localStorage.setItem("sdguid",guid);
  }
  return guid
}
const service = function (url, params) {
  params.guid = getGuid();
  params = strSha(params)
  params = qs.stringify(params)
  return axios.post(url, params).then(function (res) {
    if (res.data.errorcode === 0) {
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res.data.msgs)
    }
  }).catch(function (err) {
    return Promise.reject(err)
  })
}

export default service
