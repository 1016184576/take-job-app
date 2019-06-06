import axios from 'axios';
import { Toast } from 'antd-mobile';
export default function fetch(options) {
  const baseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:' : '';
  return new Promise((resolve, reject) => {
    options.isShowLoading !== false && Toast.loading('加载中', 6000);
    axios({
      method: options.method || 'get',
      url: options.url,
      baseURL,
      timeout: 6000,
      data: options.data || '',
      params: options.params || '',
    }).then(res => {
      options.isShowLoading !== false && Toast.hide();
      let { data } = res;
      if (res.status === 200) {
        resolve(data);
      } else {
        reject(data)
      }
    }).catch(err => {
      console.log(err)
      handleError(err)
    })
  })
}

function handleError(err) {
  if (err && err.response) {
    let {
      response: {
        status,
        headers
      }
    } = err;
    let msg = decodeURI(headers['description']) || null;
    switch (status) {
      case 403:
        msg = msg ? msg : "拒绝访问！";
        Toast.fail('操作失败！错误原因 ' + msg)
        break;
      case 401:
        msg = msg ? msg : "未授权！";
        Toast.fail('操作失败！错误原因 ' + msg);
        break;
      case 404:
        Toast.fail('访问的接口地址未找到！')
        break;
      case 408:
        Toast.fail('网络请求超时！')
        break;
      case 500:
        Toast.fail('系统错误！')
        break;
      default:
        Toast.fail('系统错误！')
        break;
    }
  }
}
