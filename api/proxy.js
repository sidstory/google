const { createProxyMiddleware } = require("http-proxy-middleware");
var target = "https://duckduckgo.com/";
var security="connect-src *; default-src '*' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src '*' 'unsafe-inline'; media-src *; img-src '*' data: content:'*';";
module.exports = (req, res) => {
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    headers:{"LOCALHOST_IP":"66.107.30.220","Proxy-Client-IP":"66.107.30.220","X-Original-Forwarded-For":"66.107.30.220","X-Forwarded-For":"66.107.30.220","x-forwarded-for":"66.107.30.220","Referer":"66.107.30.220","content-security-policy":security},
  })(req, res);
};
