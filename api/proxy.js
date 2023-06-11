const { createProxyMiddleware, responseInterceptor} = require("http-proxy-middleware");
var target = "https://www.google.com/";
var mysecure="default-src * blob: data: 'self';script-src * 'unsafe-inline' 'unsafe-eval' blob:;style-src * 'unsafe-inline' 'unsafe-eval' blob: data:;style-src-elem * 'unsafe-inline' data: blob:;img-src * data: blob:;font-src * data: blob:;connect-src *;manifest-src * data: blob:;";
var head={
    "LOCALHOST_IP":"172.200.163.35",
    "Proxy-Client-IP":"172.200.163.35",
    "X-Original-Forwarded-For":"172.200.163.35",
    "X-Forwarded-For":"172.200.163.35",
    "x-forwarded-for":"172.200.163.35",
    "Referer":"https://accounts.google.com/",
    "Cookie":"AEC=AUEFqZfPxLUxZBIcgvjTwKGRyjGd3AmshazV1Ufp_RqNgiCK6wLeek-53z0; SID=XQgpEu6Shb_9sWnZte4i3LHcApK6waPXy10VXG1bMip81mND-gIFNWOV5VbYY5yJFE6Muw.; __Secure-1PSID=XQgpEu6Shb_9sWnZte4i3LHcApK6waPXy10VXG1bMip81mNDCtZ9quVo73ianLhX7TK8Cw.; __Secure-3PSID=XQgpEu6Shb_9sWnZte4i3LHcApK6waPXy10VXG1bMip81mND1Xt6uadQqn8RBRHNKQSrxg.; HSID=AIvGhhSAb0iY2MzYe; SSID=AvejhuhpY4-PMp-PX; APISID=8fodKf5Jte3K74vO/ADmn2NSDGYPN-yVz8; SAPISID=Bwa45OFagoaMIHll/AjH_9S-vtLBjxE-YB; __Secure-1PAPISID=Bwa45OFagoaMIHll/AjH_9S-vtLBjxE-YB; __Secure-3PAPISID=Bwa45OFagoaMIHll/AjH_9S-vtLBjxE-YB; 1P_JAR=2023-06-11-11; NID=511=O62C38AmdtyHVC4YjoQnl3T4XY1JOxDk07JCzxDI2GDHbYR9o1cL02tGDdhwxlc36PJ1YGOHHQMWYfVxjYkPnq0LCNIJYwGDNbmNzCoFN68F2Bw-tmbQnznaKmKb1Okta1iTerXBnFfjhiTlErxUT_Kx02UOFAZZy3KNcsK5s9QpTQfB4kSJ8wMA2H-kSOmgqSugDCpGZOXuAoQAVlp_Fawxk9vBPRb0LFKF6OZNd1ejGgfCvcSfj6MQFcup2UO7EwRDE7sa0A5ZJDeGitNMdpYPaXyUtlh0_D-C8jFc7ZOUteZ2n7eHizJEMc-c49O2J-2CFOj0Io30XAQ; __Secure-1PSIDTS=sidts-CjEBLFra0q9Z2gy5SUJjPunE0kt-7rl-pzxPQgU51rFxte57NhbL4VY3bgzdjM5Rccx9EAA; __Secure-3PSIDTS=sidts-CjEBLFra0q9Z2gy5SUJjPunE0kt-7rl-pzxPQgU51rFxte57NhbL4VY3bgzdjM5Rccx9EAA; SIDCC=AP8dLtzFVr2nZEoCecoKp5GGZJPXHlABxAUbBNiHcFv4qKn22jIvqNOURuCmjOb39lYxZ-1v; __Secure-1PSIDCC=AP8dLtzG_Ni2bvbmvAghs8nyBIPM9hQPP1qKu89cNy62AKazUWsC_u537j8xh92RQtlyS-pjFw; __Secure-3PSIDCC=AP8dLtxYa5NirQG6rDJ45lgBVnXFmLbHtnpjngjJywKzLu7lIxHF62Gg7OJagoWbOM2sfziR9A"
    
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
