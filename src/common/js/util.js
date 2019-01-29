/**
 * Created by 陈声钰 on 2018/5/8
 */
import env from './env';
import Vue from 'vue';
let util = {
  // ajax 请求
  ajax(options)
  {
    /*
     *
     测试环境：https://
     生产环境：https://
     * */
    // console.log('env : ', env);
    let str_env = env.ENVIRONMENT;
    let root_url = '';
    switch (str_env)
    {
      case 'test':
        root_url = 'http://test.xiaomingkeji.com';
        break;
      case 'production':
        root_url = 'http://api.haoxuezhuli.com';
        break;
      default:
        root_url = 'http://test.xiaomingkeji.com';
    }
    let defaultOptions = {
      type: 'post',
      root: root_url,
      url: '',
      timeout: 30000, // 请求超时的时间
      params: {},
      headers: {
        // Authorization: 'application/json'
      },
      success(result_data, response) {
        console.log('success');
      },
      error(result_data, response) {
        console.log('error');
      },
    };
    let _options = Object.assign(defaultOptions, options);
    console.log('_options : ', _options);
    Vue.http[_options.type](_options.root+_options.url, _options.params).then(response => {
      let result_data = response.body;
      if (typeof result_data == 'string')
      {
        let data = JSON.parse(response.body);
        if (data.error_code == -300)
        {
          //alert('未登录');
          //return;
        }
      }

      !!_options.success && _options.success(result_data, response);
    }, response => {
      let result_data = response.body;
      !!_options.error && _options.error(result_data, response);
    });
  },
  /**
   * 存储localStorage
   */
  setStore(name, content)
  {
    if (!name) return;
    if (typeof content !== 'string')
    {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  },

  /**
   * 获取localStorage
   */
  getStore(name )
  {
    if (!name)
    {
      return;
    }
    return window.localStorage.getItem(name);
  },

  /**
   * 删除localStorage
   */
  removeStore(name)
  {
    if (!name) return;
    window.localStorage.removeItem(name);
  },
  /**
   * 深拷贝一个对象
   * 注意：此方法只能 深拷贝 那些能够被 json 直接表示的数据结构
   * */
  jsonClone(obj)
  {
    return JSON.parse(JSON.stringify(obj));
  },

  /**
   *  用于接口请求，判断返回来的 error_code 的值是否相等
   * */
  ERROR_CODE: 0,

  /**
   *  判断一个对象是否是数组
   * */
  isArray(obj)
  {
    return Object.prototype.toString.call(obj) === '[object Array]';
  },

  /**
   *  判断一个对象是否是为空
   * */
  isEmptyObject(obj)
  {
    for (let t in obj)
      return !1;
    return !0
  },

  /**
   *  判断是否是微信浏览器打开
   * */
  isWeiXin()
  {
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger')
    {
      return true;
    }
    else
    {
      return false;
    }
  },

  /**
   * 判断是否是支付宝浏览器
   * */
  isAplipay()
  {
    var ua = window.navigator.userAgent.toLowerCase();
    if(/AlipayClient/.test(window.navigator.userAgent))
    {
      return true;
    }
    else
    {
      return false;
    }
  },
  isIosChat()
  {
    var ua = window.navigator.userAgent;
    /*
     const userAgent = global.navigator.userAgent
     1
     然后用简单的正则去判断是否含有某些特殊字段：

     const inAndroid = /Android/i.test(userAgent)
     const inIOS = /iPhone|iPad|iPod/i.test(userAgent)
     const inMicroMessenger = /MicroMessenger/i.test(userAgent)
     const inWindowsWechat = /WindowsWechat/i.test(userAgent)
     * */
  },

  /**
   * 判断浏览器的类型
   * */
  versions()
  {
    let u = navigator.userAgent;
    let app = navigator.appVersion;
    return {         //移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    };
  },
  /**
   *  判断一个目标对象是否为数组
   * */
  isArray(o)
  {
    return Object.prototype.toString.call(o) == '[object Array]';
  },

  /**
   *  判断一个目标对象是否为对象 => {}
   * */
  isObject(o)
  {
    return Object.prototype.toString.call(o) == '[object object]';
  },

    sharePage(title,imgUrl,desc){
        wx.ready( ()=>{
            console.log('ready')
            // let URL = location.protocol + '//' + location.hostname + ':' +window.location.port ;  //协议+域名+端口;
            let img = 'https://image.haoxuezhuli.com/saas-dir/20181019_0410_683yunhan.png'
            wx.onMenuShareTimeline({
                title: title || document.title, // 分享标题
                link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl || img, // 分享图标
                success: function () {
                    // 用户点击了分享后执行的回调函数
                }
            });

            wx.onMenuShareAppMessage({
                title: title || document.title, // 分享标题
                desc, // 分享描述
                link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl || img, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户点击了分享后执行的回调函数
                }
            });

        } )
    }
};

export default util;
