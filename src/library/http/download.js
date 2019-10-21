/*
 * @Author: wy
 * @Date: 2018-12-21
 * @Description: Download for axios
 */

import axios from "axios";

const MSG_NOT_ALLOW_CONTENT_DISPOSITION =
  "无法获取 content-disposition, 请确保后端 CORS 的配置,允许访问该 content-disposition ";

export default (url, param, method = "get") => {
  const downloadFile = response => {
    if (!response.headers.hasOwnProperty("content-disposition")) {
      throw new Error(MSG_NOT_ALLOW_CONTENT_DISPOSITION);
    }

    const contentDisposition = response.headers["content-disposition"];
    if (contentDisposition.indexOf("fileName") !== -1) {
      // 获取文件名
      const fileName = decodeURIComponent(contentDisposition.split("fileName=")[1]);

      // 根据 blob 创建 object url
      const blobURL = window.URL.createObjectURL(new Blob([response.data]));

      // 生成临时 a 标签，进行下载
      const link = document.createElement("a");
      link.href = blobURL;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();

      // 删除临时 a 标签
      document.body.removeChild(link);
      // 释放 object url
      window.URL.revokeObjectURL(blobURL);
    }
  };

  // GET 请求，参数处理
  if (method.toLocaleLowerCase() === "get") {
    const qs = require("qs");
    axios({
      url: `${url}?${qs.stringify(param, { arrayFormat: "repeat" })}`,
      method: "GET",
      responseType: "blob",
      isDownload: true
    }).then(downloadFile);
  }

  // POST 请求，参数处理
  else if (method.toLocaleLowerCase() === "post") {
    axios({
      url,
      method: "POST",
      data: param,
      responseType: "blob"
    }).then(downloadFile);
  }
};
