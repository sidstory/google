const { createProxyMiddleware, responseInterceptor} = require("http-proxy-middleware");
var target = "https://duckduckgo.com/";
var mysecure="default-src * blob: data: 'self';script-src * 'unsafe-inline' 'unsafe-eval' blob:;style-src * 'unsafe-inline' 'unsafe-eval' blob: data:;style-src-elem * 'unsafe-inline' data: blob:;img-src * data: blob:;font-src * data: blob:;connect-src *;manifest-src * data: blob:;";
var head={
    "LOCALHOST_IP":"66.107.30.220",
    "Proxy-Client-IP":"66.107.30.220",
    "X-Original-Forwarded-For":"66.107.30.220",
    "X-Forwarded-For":"66.107.30.220",
    "x-forwarded-for":"66.107.30.220",
    "Referer":"66.107.30.220",
};
module.exports = (req, res) => {
    // 创建代理对象并转发请求
    createProxyMiddleware({
        target,
        selfHandleResponse : true,
        changeOrigin: true,
        headers:head,
        onProxyRes: responseInterceptor(async (buffer, proxyRes, req, res) => {
            res.setHeader('Content-Security-Policy', mysecure);
            let body = {}
            const responseBody = await getBody(proxyRes);
            if (responseBody) body = responseBody;
            res.end(body);
        }),
    })(req, res);
};
function getBody(proxyRes) {
    return new Promise((resolve, reject) => {
        let body = []
        proxyRes.on('data', function (chunk) {
            body.push(chunk)
        })
        proxyRes.on('end', function () {
            body = Buffer.concat(body).toString()
            // console.log('getBody ======', body)
            resolve(JSON.parse(body))
        })
    })
}
