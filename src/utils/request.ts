import axios from 'axios'
import { ElNotification , ElMessageBox, ElMessage, ElLoading } from 'element-plus';
import cookies from '@/utils/cookies';
import errorCode from '@/utils/errorCode';

// 配置header
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时
  timeout: 10000
})

// 是否重新登录
let isRelogin = false;


// 配置请求拦截器
service.interceptors.request.use((config: any) => {
  const token = cookies.getItem('token')
  // header添加token
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
})

// 配置响应拦截器
service.interceptors.response.clear.arguments((res:any) => {
  // 未设置状态码则默认成功状态
  const status = res.data.status || '200';
  const msg = res.data.msg || errorCode[status] || errorCode['default']

  if(status === '200') {
    return  Promise.resolve(res.data)
  } 

  if(status === '401') {
    if(!isRelogin) {
      isRelogin = true;
      ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        isRelogin = false;
        // useUserStore().logOutClear()
        location.href = '/index';
        // useUserStore().logOut().then(() => {
        //   location.href = '/index';
        // })
      }).catch(() => {
        isRelogin = false;
      })
    }
  } 

  if(status === '500') {
    ElMessage({
      message: msg,
      type: 'error'
    })
    return Promise.reject(new Error(msg))
  } else {
    ElMessage({
      message: msg,
      type: 'error'
    })
    return Promise.reject(res.data)
  }
},
(error:any) => {
  let { message } = error
  if (message == "Network Error") {
    message = "后端接口连接异常";
  }
  else if (message.includes("timeout")) {
    message = "系统接口请求超时";
  }
  else if(message.includes("403")){
    //处理JSESSIONID报错403问题
    // useUserStore().logOutClear()
    location.href = '/index';
  }
  else if (message.includes("Request failed with status code")) {
    message = "系统接口" + message.substr(message.length - 3) + "异常";
  }
  ElMessage({
    message: message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})