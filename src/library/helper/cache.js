/*
 * @Author: wy
 * @Description: 缓存类
 * @Date: 2018-07-06
 */

import { encode, decode } from './common'

/**
 * set cache
 *
 * @export
 * @param {string} [key=''] 需要设置的缓存键
 * @param {*} value 需要设置的缓存值
 * @param {string} [type='localStorage'] 需要设置的存储类型，可选 localStorage / sessionStorage，默认 'localStorage'
 * @returns {*}
 */
export function set(key = '', value, type = 'localStorage') {
  const encodeKey = encode(key)

  if (value !== null) {
    const encodeValue = encode(window.unescape(window.encodeURIComponent(JSON.stringify(value))))

    window[type].setItem(encodeKey, encodeValue)
  }

  return value
}

/**
 *
 * 获取存储值
 *
 * @export
 * @param {string} [key=''] 需要获取的缓存键
 * @param {string} [type='localStorage'] 需要获取的存储类型，可选 localStorage / sessionStorage，默认 'localStorage'
 * @returns {*}
 */
export function get(key = '', type = 'localStorage') {
  const encodeKey = encode(key)
  const value = window[type].getItem(encodeKey)

  if (value !== null) {
    return JSON.parse(window.decodeURIComponent(window.escape(decode(value))))
  }

  return value
}

/**
 * remove cache by key
 *
 * @export
 * @param {string} [key=''] 需要移除的缓存键
 * @param {string} [type='localStorage'] 需要移除的缓存类型，可选 localStorage / sessionStorage，默认 'localStorage'
 * @returns {*}
 */
export function remove(key = '', type = 'localStorage') {
  window[type].removeItem(encode(key))
}

/**
 * clear cache
 *
 * @export
 */
export function clear() {
  window.localStorage.clear()
  window.sessionStorage.clear()
}

export default {
  set,
  get,
  remove,
  clear
}
