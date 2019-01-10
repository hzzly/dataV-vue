import axios from 'axios'

const ERR_OK = 0

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:8080'

axios.interceptors.response.use((res) => {
  if (res.data.errno !== ERR_OK) {
    // return Promise.reject(res);
  }
  return res
}, (error) => {
  // _.toast("网络异常", 'fail');
  return Promise.reject(error)
})

export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then(response => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export default {
  /**
   * 用户信息
   */
  getUserInfo (params) {
    return fetchGet('/api/users/hzzly', params)
  }
}
