import { message } from 'antd';


/**
 * 请求接口时对请求状态后，显示消息的处理
 */
function AjaxMessage({ msg = '获取信息中...', res, delayTime = 1, leaveTime = 2 }) {
  const { code } = res || 0;                      //默认信息的code为0

  const info = typeof (res) === 'string' ? res    //如果返回的是字符串，显示信息为res
    : Array.isArray(res) || Object.prototype.toString.call(res.result) === '[object Object]' ? '数据获取成功'          //如果返回的是数组，显示信息为获取数据获取成功
      : res.msg || '网络异常'

  console.log(
    `
      执行接口的msg：${msg},
      执行返回参数：${JSON.stringify(res)},
      初始信息提示时长loading：${delayTime}秒,
      最终信息提示时长(info,error,success)：${leaveTime}秒,
      信息状态：${code <= -1 ? '错误提示' : code === 1 ? '成功提示' : '普通提示'}
    `
  )
  return message.loading(msg, delayTime).then(() => {
    switch (code) {
      case -1:
        message.error(info, leaveTime)
        break;
      case 1:
        message.success(info, leaveTime)
        break;
      default:
        message.info(info, leaveTime)
    }
  })
}

export { AjaxMessage }