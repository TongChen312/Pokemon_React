import axios from 'axios';
import Qs from 'qs';
import { message } from 'antd';
import MapApi from './apiconfig';

function resertData(data) {
  return Qs.stringify(data);
}

const Ajax = (data) => {
  // 默认的设置的请求头
  const ajaxHeader = {};
  const apiParams = MapApi[data.url];
  if (!apiParams) {
    return { errcode: 0, data: {}, message: `无效的接口地址(${data.url})` };
  }
  // 默认显示错误提示信息
  apiParams.closetip = true;

  const optData = {
    url: apiParams.url,
    method: apiParams.method || 'POST',
    data: data.data ? data.data : {},
    headers: data.headers ? Object.assign(ajaxHeader, data.headers) : ajaxHeader,
  };

  let getParams = '';

  // 转化为url参数
  if ((optData.method === 'GET' || optData.method === 'get') && optData.data) {
    getParams = '?';
    for (const key in optData.data) {
      if (!optData.data.hasOwnProperty(key)) continue;
      getParams += key + '=' + optData.data[key] + '&';
    }
    getParams = getParams.slice(0, -1)//删除最后一个字符串
  }

  return new Promise((resolve, reject) => {
    axios({
      method: optData.method,
      url: optData.url + getParams,
      headers: ajaxHeader,
      data: resertData(optData.data),
    }).then((response) => {
      response.data.code = parseInt(response.data.code, 10) || 0;
      resolve(response.data);
    }).catch((err) => {
      message.error('获取数据异常，请重试');
      resolve(err.response || err);
    });
  });
};

export default Ajax;
