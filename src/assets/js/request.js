import axios from "axios";
import router from "../../router";
import Qs from 'qs'
import md5 from 'md5'
//设置拦截
// 发起普通请求，不验证token
let baseRequest = axios.create({});

// 带token的请求，可能导致跨域
let authRequest = axios.create({});

// authRequest请求拦截器
authRequest.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      return Promise.reject(err);
    }
);

// authRequest响应拦截器
authRequest.interceptors.response.use(
    function (response) {
      return responseReturn(response)
    },
    error => {
      return Promise.reject(error);
    }
);

// baseRequest响应拦截器
baseRequest.interceptors.response.use(
    function (response) {
      return responseReturn(response)
    },
    error => {
      return Promise.reject(error);
    }
);

// 处理返回
function responseReturn(response) {
  //判断不同路由显示不同的页面关键词和描述
  let res = response.data;
  if (res.code == '0') {
    return res;
  }else {
    console.log(res.msg);
    return res;
  }
}

//封装请求
export function sendHttp(obj) {
  let {url, method = 'get', data = null, auth = true, stringify = true} = obj;
  // 时间戳
  let timestamp = (new Date()).getTime();
  let app_secret = "cb933537f8191c33fccc29ffa4433eed";
  let token = window.localStorage.getItem("token");
  if (token) {
    data.token = token;
  }
  // 携带默认参数
  data.app_id = "867520190510168";
  data.timestamp = timestamp;
  data.from = "app";

  let arr = [];
  let sign = "";
  for (let i in data) {
    arr.push(i + ':' + data[i]);
  }
  sign = arr.sort().join('#');
  data.sign = md5(md5(sign) + app_secret);
  let datas = Qs.stringify(data);

  return new Promise((resolve, reject) => {
    if (method === 'get') {
      if (auth) {
        authRequest({
          url: url,
          method: method,
          data: datas
        }).then(res => {
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      } else {
        baseRequest({
          url: url,
          method: method,
          data: datas,
        }).then(res => {
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      }
    } else {
      let datas = data;
      //console.log(datas)
      if (stringify) {
        datas = Qs.stringify(data);
      }
      if (auth) {
        authRequest({
          url: url,
          method: method,
          data: datas,
        }).then(res => {
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      } else {
        baseRequest({
          url: url,
          method: method,
          data: datas,
        }).then(res => {
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      }
    }
  })
}



