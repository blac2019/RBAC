/*
 * @Author: wy
 * @Description: 扩展 date 原型常用方法
 * @Date: 2018-07-06 11:24:10
 * @Last Modified by: bl
 * @Last Modified time: 2019-04-10 09:39:58
 */

/* eslint-disable no-extend-native */

/**
 * 日期格式化
 * @formatStr: 格式化参数, 默认yyyy-MM-dd
 * @return:    Date
 * e.g.         new Date().formatDate('yyyy-MM-dd')  =>  '2016-12-12'
 */

Date.prototype.formatDate = function(formatStr) {
  if (!formatStr) {
    formatStr = "yyyy-MM-dd";
  }

  var dict = {
    yyyy: this.getFullYear(),
    M: this.getMonth() + 1,
    d: this.getDate(),
    H: this.getHours(),
    m: this.getMinutes(),
    s: this.getSeconds(),
    MM: ("" + (this.getMonth() + 101)).substr(1),
    dd: ("" + (this.getDate() + 100)).substr(1),
    HH: ("" + (this.getHours() + 100)).substr(1),
    mm: ("" + (this.getMinutes() + 100)).substr(1),
    ss: ("" + (this.getSeconds() + 100)).substr(1)
  };
  return formatStr.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {
    return dict[arguments[0]];
  });
};

/**
 * 日期格式化
 * @formatStr: 格式化参数, 默认yyyy-MM-dd HH:mm
 * @return:    Date
 * e.g.         new Date().formatTime('yyyy-MM-dd HH:mm:ss')  =>  '2016-12-12 12:00:00'
 */
Date.prototype.formatTime = function(formatStr) {
  if (!formatStr) {
    formatStr = "yyyy-MM-dd HH:mm:ss";
  }

  return this.formatDate(formatStr);
};

Date.prototype.formatWXDate = function() {
  const isThisYear = (date, now) => {
    return date.getFullYear() == now.getFullYear();
  };

  const isThisWeek = (date, now) => {
    if (date.getFullYear() == now.getFullYear() && date.getMonth() == now.getMonth()) {
      if (
        now.getDay() - date.getDay() < now.getDay() &&
        now.getDate() - date.getDate() > 0 &&
        now.getDate() - date.getDate() < 7
      ) {
        return true;
      }
    }
    return false;
  };

  const isYesterday = (date, now) => {
    return (
      date.getFullYear() == now.getFullYear() &&
      date.getMonth() == now.getMonth() &&
      date.getDate() + 1 == now.getDate()
    );
  };

  const isToday = (date, now) => {
    return date.getYear() == now.getYear() && date.getMonth() == now.getMonth() && date.getDate() == now.getDate();
  };

  const date = this;
  const now = new Date();

  if (isThisYear(date, now)) {
    if (isToday(date, now)) {
      return date.formatTime("HH:mm");
    }

    if (isYesterday(date, now)) {
      return "昨天 " + date.formatTime("HH:mm");
    }

    if (isThisWeek(date, now)) {
      const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      return weekday[date.getDay()] + " " + date.formatTime("HH:mm");
    }

    return date.formatTime("MM-dd HH:mm");
  } else {
    return date.formatTime("yyyy-MM-dd HH:mm");
  }
};

/**
 * des:        日期操作
 * @proStr:    格式化参数
 * @return:    Date
 * e.g.         new Date().proDate('{%y+1}-{%M+2}-{%d+1}-{%H+1}-{%m+1}-{%s+1}') //年月日时分秒全部加1
 */
Date.prototype.proDate = function(proStr) {
  var dealWith = function(str, date) {
    let t = str.substr(0, 1);
    let num = 0;
    if (str.indexOf("+") > -1) {
      num = str.substr(str.indexOf("+"));
    } else if (str.indexOf("-") > -1) {
      num = str.substr(str.indexOf("-"));
    }
    switch (t) {
      case "y":
        date.setFullYear(date.getFullYear() + parseInt(num));
        break;
      case "M":
        date.setMonth(date.getMonth() + parseInt(num));
        break;
      case "d":
        date.setDate(date.getDate() + parseInt(num));
        break;
      case "H":
        date.setHours(date.getHours() + parseInt(num));
        break;
      case "m":
        date.setMinutes(date.getMinutes() + parseInt(num));
        break;
      case "s":
        date.setSeconds(date.getSeconds() + parseInt(num));
        break;
    }
    return date;
  };

  let arr = [];
  let date;
  arr = proStr.split("{%");
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].replace("}-", "");
    arr[i] = arr[i].replace("}", "");
    date = dealWith(arr[i], this);
  }
  return date;
};

/*
 * 为了避免日期类型没有原型方法而扩展, 无实际意义
 */
Date.prototype.toDate = function() {
  return this;
};
