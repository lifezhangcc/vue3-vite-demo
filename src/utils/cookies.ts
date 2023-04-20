import Cookies from 'js-cookie';

export default {
  // 获取cookie
  getItem: (key:string) => {
    return Cookies.get(key);
  },

  // 存储cookie
  saveItem: (key:string, value:any, opts?:Object) => {
    Cookies.set(key, value, { ...opts });
  },

  // 删除cookie
  removeItem: (key:string, opts?:Object) => {
    Cookies.remove(key, { ...opts });
  }
}
