import axios from 'axios'
import config from './config'

console.log('service process =', process)

// 判断是路由跳转还是 axios 请求
if (process.server) {
  config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

console.log('service config =', config)

const service = axios.create(config)
// console.log('service =', service)

// service.interceptors.request.use(function(config) {
//   // 比如是否需要设置 token
//   config.headers.token = 'wwwwwsdsdf'
//   return config
// })

// 返回结果处理
service.interceptors.response.use(
  (res) => {
    const x = {}
    x.data = res.data
    x.status = res.status
    x.statusText = res.statusText
    return x
  },
  (error) => { Promise.reject(error) }
)

export default {
  // post 方法
  post(url, data) {
    return service({
      method: 'post',
      url,
      data
    })
  },
  // put 方法
  put(url, data) {
    return service({
      method: 'put',
      url,
      data
    })
  },
  // get 方法
  get(url, data) {
    // console.log('get url =', url)
    return service({
      method: 'get',
      url,
      params: data
    })
  },
  // delete 方法
  delete(url, data) {
    return service({
      method: 'delete',
      url,
      ...data
    })
  }
}
