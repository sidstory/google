const { createProxyMiddleware, responseInterceptor} = require("http-proxy-middleware");
var target = "https://www.google.com/";
var head={
    "LOCALHOST_IP":"172.200.163.35",
    "Proxy-Client-IP":"172.200.163.35",
    "X-Original-Forwarded-For":"172.200.163.35",
    "X-Forwarded-For":"172.200.163.35",
    "x-forwarded-for":"172.200.163.35",
    "Referer":"https://www.google.com/",
    "Cookie":"HSID=A3il0W_Y9flcu1gRp; SSID=AH4Jvf9KUMcFHRn3b; APISID=A-cKOI4kueg9dBYu/AXjmIVGrmkzWasInY; SAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; __Secure-1PAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; __Secure-3PAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; SEARCH_SAMESITE=CgQIx5gB; OTZ=7080896_24_24__24_; SID=YggpEquifhWa7TVsZpzcSOV3omCCjZLSjpbhjnLW_FnSzt4jjCoTwuycxhgz4yANixXH-g.; __Secure-1PSID=YggpEquifhWa7TVsZpzcSOV3omCCjZLSjpbhjnLW_FnSzt4j2C4gsLhTPcPix-X2IjL8vQ.; __Secure-3PSID=YggpEquifhWa7TVsZpzcSOV3omCCjZLSjpbhjnLW_FnSzt4jjseG7RQm7QUHHisouENeVQ.; AEC=Ad49MVETJpoWXntWIaReGBsrvp_6xEHhBKtXcvVMdBsimXpWw8f9CcBrpwM; NID=511=hn3gOQt62etcSy2ozwspbrAwOB5-8fQbuZt6mkeh18n89HNzjVCYuvbX3cW50uv5msUUeMzSCpEl0jCfNRvFb7Rug9cT13YbOa6OoD0v7zRphlQVSk5PpAaI1IU1DULloZSvy4DkIJ2_zVPKcr9p8hTKAv0_nHJZtjGJ2aXdo6K5DmhZqf6KDbgK8PjMpQLnWS3Q4vTUBSjK_ba4Or_MykCrXaMXDYPoOUx8G-CvAZRKqOWEKYvaJCntGByX5XC5AHoykGWCqToEX0T0Yw99mdDDPgVhVvGrWzt8y4tcx3ub9gtS9EAR8HiPUwNfUUOiYBwK9i1DSx4v9wstJFT8FOlZMyCqFZIH_g; __Secure-1PSIDTS=sidts-CjIBPu3jId5w7bJID-B1AVqyb1kMXDDolKoc0-SWEmw2vUabcf2aTEXoT8Dq7CoROlkiKRAA; __Secure-3PSIDTS=sidts-CjIBPu3jId5w7bJID-B1AVqyb1kMXDDolKoc0-SWEmw2vUabcf2aTEXoT8Dq7CoROlkiKRAA; DV=wyupxYUDN98uEL5WPJip-J-WCw3glFjFnRULTMb8vQIAAAA; 1P_JAR=2023-07-13-06; SIDCC=APoG2W9AfyHV3z9S7TwQQtUxIboZ2BAXC9q_usbDeezwhT8rVKdT_Dar1eNUvPkQ1_GnfpZZAg; __Secure-1PSIDCC=APoG2W8WZH_x7GwX0GpubfwDOXqrVCQkN-REHFTDirIdtZu8fH0MDm00smYgh8pJv8R9QBFSbB8; __Secure-3PSIDCC=APoG2W9RDIsa8q_hdPapFtBNvNPoBPliNZFwuCT2jIZUMXVPDx-9XIPKlCaR0yFzrfjsK26rMV0"
}
module.exports = (req, res) => {
    // 创建代理对象并转发请求
    createProxyMiddleware({
        target,
        selfHandleResponse : false,
        changeOrigin: true,
        headers:head,
    })(req, res);
};
