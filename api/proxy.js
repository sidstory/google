const { createProxyMiddleware, responseInterceptor} = require("http-proxy-middleware");
var target = "https://www.google.com/";
var mysecure="default-src * blob: data: 'self';script-src * 'unsafe-inline' 'unsafe-eval' blob:;style-src * 'unsafe-inline' 'unsafe-eval' blob: data:;style-src-elem * 'unsafe-inline' data: blob:;img-src * data: blob:;font-src * data: blob:;connect-src *;manifest-src * data: blob:;";
var head={
    "LOCALHOST_IP":"172.200.163.35",
    "Proxy-Client-IP":"172.200.163.35",
    "X-Original-Forwarded-For":"172.200.163.35",
    "X-Forwarded-For":"172.200.163.35",
    "x-forwarded-for":"172.200.163.35",
    "Referer":"https://www.google.com/",
    "Cookie":"SID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLSzxyyu7pLXR-8pddY1roIyA.; __Secure-1PSID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLSkalRVOAxJ3LNpipAtZoJ4A.; __Secure-3PSID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLS-S2kauhJjYhHBbnEOujiYg.; HSID=A3il0W_Y9flcu1gRp; SSID=AH4Jvf9KUMcFHRn3b; APISID=A-cKOI4kueg9dBYu/AXjmIVGrmkzWasInY; SAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; __Secure-1PAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; __Secure-3PAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; AEC=AUEFqZd4viyF3s3Ub8ySLn5wIW4a2z0YEV7sQt4TcN6zMyMQQmio5LOITOQ; SEARCH_SAMESITE=CgQIx5gB; OTZ=7080896_24_24__24_; __Secure-1PSIDTS=sidts-CjIBLFra0vtePA9EfsFb8aUb9KB2rnQqORzrQMQTZQRGsBwxcdpCsTXOQZKF0-jKAidE9RAA; __Secure-3PSIDTS=sidts-CjIBLFra0vtePA9EfsFb8aUb9KB2rnQqORzrQMQTZQRGsBwxcdpCsTXOQZKF0-jKAidE9RAA; NID=511=R_WB2QuIVegUxZ0j6IPkmJ0Axl0TuqHhMkj_6Y_UrbvY8yo1IZNYxLcrDQlx8FtQs96ahZ77ki4kyTh6v4Hkq5_xTwaLWLGgXUB5WynmwKv1YQ9by_ziWpkFcBBPYom1kOC9J7dJIIzmUCyD-FFJa_XhVQvjWq6M-CCSli1VR-EaPk1Pox5z35oFYQTV0C2yxLC9Wt6b7vhdRCEa13FlGIOxX4oge2hv-_Rv3pxhbOtErhn1hpTrlatJZlPSDThIRrOZ1y3XApb09f_A-y9SpjmrDirQj5fDXKvuH1rO0ZxjYWKYz2dLqb04RgdryCKGADZE7enfwARXhIPcXf_iUj8QLdo; DV=wyupxYUDN99eUHFnxQKTMX_fBXgnjVj4WvFgpuJ_GgAAAICGSTB--aTyQM2cAASIm0L1K13fcTMnAO4BBgAhOxlR58wJAA; 1P_JAR=2023-06-19-07; SIDCC=AP8dLtz7-VKI4bbe1b5B3n0uJKqTYKi6IKWmWmuvt4uYK8j9yaH5dpiHnrd4Ef_tUfkhYSv8Nw; __Secure-1PSIDCC=AP8dLtwGcmS4BNvYwlqVnRIGpxj0A0__wqminrLmucXC1F1wPVY-8muCdA8He4t7VCdgmGQ9BWw; __Secure-3PSIDCC=AP8dLtxuZprQ3HgCAJRBW1lUtGXIlDzKxOTrEaNuVXG7OAskT4lXTK8OqA7e7Rjw-YwlcIPBals"
};
module.exports = (req, res) => {
    // 创建代理对象并转发请求
    createProxyMiddleware({
        target,
        selfHandleResponse : false,
        changeOrigin: true,
        headers:head,
    })(req, res);
};
