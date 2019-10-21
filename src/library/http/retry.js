/*
 * @Author: wy
 * @Date: 2018-12-21
 * @Description: Retry for axios
 */

 /* eslint-disable */

import axios from './index'

export default error => {
  const config = error.config

  // 验证是否允许超时重试
  if (!config || !config.retry) {
    return Promise.reject(error)
  }

  // 设置变量用以记录重试次数
  config.__retryCount = config.__retryCount || 0

  // 检查是否达到了最大的重试次数
  // 达到了最大充实次数后，依然未能正确请求到数据，抛出错误
  if (config.__retryCount >= config.retry) {
    return Promise.reject(error)
  }
  // 未达到最大充实次数，重试次数 + 1
  else {
    config.__retryCount += 1
  }

  // 控制台警告重试相关信息
  console.warn(`请求超时，正在进行第 ${config.__retryCount} 次重试。错误原因： ${error}`)

  // 记录本次重试后，是否已经达到最大重试次数
  config.__isRetryComplete = config.__retryCount === config.retry

  // 创建一个新的 promise， 用于处理重试延迟
  var backoff = new Promise(function(resolve) {
    setTimeout(function() {
      resolve()
    }, config.retryDelay || 1)
  })

  // 在重试延迟基础上，再次重试请求，并返回 promise
  return backoff.then(function() {
    return axios(config)
  })
}
