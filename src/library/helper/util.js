/*
 * @Author: wy
 * @Description: 工具类
 * @Date: 2018-07-06
 */

import { Message } from 'element-ui'

/**
 * $wy
 *
 * 获取 url 参数
 *
 * @export
 * @param {any} name 需要解析参数的 key
 * @param {any} url 需要解析参数的 url
 * @returns 需要解析参数的参数值
 */
export function queryUrlParam(name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[[\]]/g, '\\$&')
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  let results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

/**
 * $wy
 *
 * rest format
 *
 * @export
 * @param {any} restAPI 需要解析参数的 API
 * @param {any} params 需要解析参数的 params
 * @returns 解析后的 API
 */
export function restAPIAdpater(restAPI, params) {
  return restAPI.replace(/\/\{\{([^\\}]+)\}\}/g, (match, key) => {
    return params && params[key] ? '/' + params[key] : ''
  })
}

/**
 * $wy
 *
 * array to tree
 *
 * @export
 * @param {any} nodes
 * @param {string} [idKey='id']
 * @param {string} [pIdKey='pId']
 * @param {string} [childrenKey='children']
 * @returns
 */
export function toTree(nodes, idKey = 'id', pIdKey = 'pId', childrenKey = 'children') {
  let map = {}
  let node
  let roots = []

  nodes.forEach((item, index) => {
    map[item[idKey]] = index
  })
  for (let i = 0; i < nodes.length; i += 1) {
    node = nodes[i]
    if (node[pIdKey] !== '-1' && node[pIdKey] !== '' && nodes[map[node[pIdKey]]]) {
      if (!nodes[map[node[pIdKey]]][childrenKey]) {
        nodes[map[node[pIdKey]]][childrenKey] = []
        nodes[map[node[pIdKey]]][childrenKey].push(node)
      } else {
        nodes[map[node[pIdKey]]][childrenKey].push(node)
      }
    } else {
      roots.push(node)
    }
  }

  return roots
}

/**
 * $wy
 *
 * 深拷贝
 *
 * @export
 * @param {*} item
 * @returns
 */
export function deepClone(item) {
  if (!item) {
    return item
  } // null, undefined values check

  let types = [Number, String, Boolean]
  let result

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  types.forEach(function(type) {
    if (item instanceof type) {
      result = type(item)
    }
  })

  if (typeof result == 'undefined') {
    if (Object.prototype.toString.call(item) === '[object Array]') {
      result = []
      item.forEach(function(child, index) {
        result[index] = deepClone(child)
      })
    } else if (typeof item == 'object') {
      // testing that this is DOM
      if (item.nodeType && typeof item.cloneNode == 'function') {
        result = item.cloneNode(true)
      } else if (!item.prototype) {
        // check that this is a literal
        if (item instanceof Date) {
          result = new Date(item)
        } else {
          // it is an object literal
          result = {}
          for (let i in item) {
            result[i] = deepClone(item[i])
          }
        }
      } else {
        // depending what you would like here,
        // just keep the reference, or create new object
        if (item.constructor) {
          // would not advice to do that, reason? Read below
          result = new item.constructor()
        } else {
          result = item
        }
      }
    } else {
      result = item
    }
  }

  return result
}

/**
 * 弹出提示消息
 *
 * @export
 * @param {string} [message=''] 提示内容，默认''
 * @param {string} [title='温馨提示'] 提示标题，默认'温馨提示'
 * @param {string} [type='success'] 提示类型，默认'success'
 * @returns
 */
export function alert(message = '温馨提示', title = '温馨提示', type = 'success') {
  return Message({ message, title, type })
}
export function info(msg = '温馨提示', title = '温馨提示', type = 'info') {
  return Message({ message: msg, title, type })
}
export function warning(msg = '温馨提示', title = '温馨提示', type = 'warning') {
  return Message({ message: msg, title, type })
}
export function error(msg = '温馨提示', title = '温馨提示', type = 'error') {
  return Message({ message: msg, title, type })
}
export function success(msg = '温馨提示', title = '温馨提示', type = 'success') {
  return Message({ message: msg, title, type })
}

/**
 * confirm 弹出提示
 *
 * @export
 * @param {string} [msg='温馨提示']
 * @param {string} [title='温馨提示']
 * @param {string} [options={ type: 'info', confirmButtonText: '确定', cancelButtonText: '取消' }]
 * @param {*} [confirmCallBack=() => {}]
 * @param {*} [cancelCallBack=() => {}]
 */
export function confirm(
  msg = '温馨提示',
  title = '温馨提示',
  options = { type: 'info', confirmButtonText: '确定', cancelButtonText: '取消' },
  confirmCallBack,
  cancelCallBack
) {
  $wy.$confirm(msg, title, {
    confirmButtonText: options.confirmButtonText,
    cancelButtonText: options.cancelButtonText,
    type: options.type,
    callback: action => {
      if (action === 'confirm') {
        confirmCallBack && confirmCallBack()
      } else {
        cancelCallBack && cancelCallBack()
      }
    }
  })
}

/**
 * 格式化时间间隔
 *
 * @param {*} date
 * @param {int} time 毫秒数
 * @returns
 */
export function formatDuration(bgTime, endTime) {
  if (bgTime > endTime) {
    console.warn('【 wy 】【 util 】【 formatDuration 】格式化时间间隔出错，开始时间不能大于结束时间。', new Date())

    return ''
  }

  const duration = this.getDuration(bgTime, endTime)

  duration.HH = duration.HH + duration.dd * 24

  if (duration.HH < 10) {
    duration.HH = '0' + duration.HH
  }
  if (duration.mm < 10) {
    duration.mm = '0' + duration.mm
  }
  if (duration.ss < 10) {
    duration.ss = '0' + duration.ss
  }
  return duration.HH + ':' + duration.mm + ':' + duration.ss
}

/**
 * 获取时间间隔
 *
 * @export
 * @param {*} bgTime
 * @param {*} endTime
 * @returns
 */
export function getDuration(bgTime, endTime) {
  const totalSecs = (endTime - bgTime) / 1000

  const dd = Math.floor(totalSecs / 3600 / 24)
  const HH = Math.floor((totalSecs - dd * 24 * 3600) / 3600)
  const mm = Math.floor((totalSecs - dd * 24 * 3600 - HH * 3600) / 60)
  const ss = Math.floor(totalSecs - dd * 24 * 3600 - HH * 3600 - mm * 60)

  return {
    dd,
    HH,
    mm,
    ss
  }
}

/**
 * 常用工具类
 */
export default {
  restAPIAdpater,
  queryUrlParam,
  toTree,
  deepClone,

  alert,
  info,
  warning,
  error,
  success,
  confirm,

  formatDuration,
  getDuration
}
