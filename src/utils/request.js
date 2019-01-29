import Vue from 'vue';
import jsSha1 from 'js-sha1'
import Fingerprint from 'fingerprintjs'
import qs from 'qs'
import { Toast } from 'vant';
import { getStorage, setStorage , getSession, setSession } from './storage'
const oApi = {
    // setStuRegister: 'r=education/student/register', // 手机验证
    getJsSign: 'r=grape/default/get-js-sign-package',//获取js签名
    getQuarterReport: 'r=common/quarter-report/detail',//H5 季度报告
    getOrgList: 'r=common/quarter-report/org-list',//H5 选择机构
}

var env = require('../common/js/env.js');
let str_env = env.ENVIRONMENT; // 程序运行环境

// 判断元素类型
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 参数过滤
function filterNull(o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}

// 排列参数
function objKeySort(arys) {
    arys = filterNull(arys)
    let newkey = Object.keys(arys).sort()
    let newObj = {}
    for (let i = 0; i < newkey.length; i++) {
        newObj[newkey[i]] = arys[newkey[i]]
        // console.log('newObj[newkey[i]',newObj[newkey[i]])
    }
    return newObj
}

// 加密sha1
function strSha(arys) {
    let sign = qs.stringify(arys) + '&appkey=hoo.ai.edu'
    arys.signature = jsSha1.hex(sign)
    return arys
}

// 获取Guid
export const getGuid = () => {
    let guid
    if (!getSession('sdguid')) {
        guid = new Fingerprint().get()
        setSession('sdguid', guid)
    } else {
        guid = getSession('sdguid')
    }
    return guid
}

// 验证参数
function authArys(arys) {
    let userid = getSession('user_id')
    // let orgid = Store.state.user.org_id;
    let token = getSession('access_token')
    if (userid !== '' && userid !== null) {
        arys.user_id = userid
    }
    // if(!arys.org_id){
    //     if (orgid !== '' && orgid !== null) {
    //         arys.org_id = orgid
    //         // console.log('ord_id重复',arys)
    //     }
    // }

    if (token !== '' && token !== null) {
        arys.access_token = token
    }
    arys.guid = getGuid()
    return arys
}

const service = {
    fetchAllList: function ({ api, data }, cb, errcb) {
        // data.user_id = sessionStorage.getItem("user_id");
        data = authArys(data)
        data = objKeySort(data)
        data = strSha(data)
        // data = qs.stringify(data)
        console.log("res", process.env.BASE_API + oApi[api], data)

        let root_url = '';
        switch (str_env)
        {
            case 'test':
                root_url = 'http://test.xiaomingkeji.com/api/index.php?';
                break;
            case 'production':
                root_url = 'http://api.haoxuezhuli.com/api/index.php?';
                break;
            default:
                root_url = 'http://test.xiaomingkeji.com/api/index.php?';
        }

        Vue.http.post( root_url + oApi[api], data).then(
            (res) => {
                if (cb) {
                    if( res.body.errorcode == 0 ){
                        cb(res.body.data);
                    }else{
                        //cb(res.body);
                        Toast.fail( res.body.msgs );
                    }
                } else {
                    errcb(res)
                }
            }
        ).catch(e => {
            if (errcb) {
                errcb(e)
            } else {
                console.log(e);
            }
        })
    }
}
export default service
