const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://petalsearch.com/";
  // 代理目标地址
  // 这里使用 backend 主要用于区分 vercel serverless 的 api 路径
  //   if (
  //     req.url.startsWith("/api") ||
  //     req.url.startsWith("/auth") ||
  //     req.url.startsWith("/banner") ||
  //     req.url.startsWith("/CollegeTask")
  //   ) {
  //     target = "http://106.15.2.32:6969";
  //   }
  req.removeHeader("LOCALHOST_IP");
  req.removeHeader("X-Forwarded-For");
  req.removeHeader("X-Original-Forwarded-For");
  req.removeHeader("Proxy-Client-IP");
  req.setHeader("LOCALHOST_IP","66.107.31.223");
  req.setHeader("X-Forwarded-For","66.107.31.223");
  req.setHeader("X-Original-Forwarded-For","66.107.31.223");
  req.setHeader("Proxy-Client-IP","66.107.31.223");


  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 `/backend`
      // 例如 /backend/user/login 将被转发到 http://backend-api.com/user/login
      //   "^/backend/": "/",
    },
  })(req, res);
};
