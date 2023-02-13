const { createProxyMiddleware } = require("http-proxy-middleware");
var security="connect-src *; default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;";
var target = "https://duckduckgo.com/";
module.exports = (req, res) => {
res.contentSecurityPolicy=security;
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    headers:{"LOCALHOST_IP":"66.107.30.220","Proxy-Client-IP":"66.107.30.220","X-Original-Forwarded-For":"66.107.30.220","X-Forwarded-For":"66.107.30.220","x-forwarded-for":"66.107.30.220","Referer":"66.107.30.220"},
  })(req, res);
};
