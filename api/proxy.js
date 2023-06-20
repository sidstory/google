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
    "Cookie":"SID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLSzxyyu7pLXR-8pddY1roIyA.; __Secure-1PSID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLSkalRVOAxJ3LNpipAtZoJ4A.; __Secure-3PSID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLS-S2kauhJjYhHBbnEOujiYg.; HSID=A3il0W_Y9flcu1gRp; SSID=AH4Jvf9KUMcFHRn3b; APISID=A-cKOI4kueg9dBYu/AXjmIVGrmkzWasInY; SAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; __Secure-1PAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; __Secure-3PAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; SEARCH_SAMESITE=CgQIx5gB; OTZ=7080896_24_24__24_; AEC=AUEFqZe9XunUwIovYQPLp0D6_Z3uG4HbuNkR-3CK02JTSbFKCnJgiu3PsH8; __Secure-1PSIDTS=sidts-CjIBLFra0lA0GnGs50zecDrcTU1BoLDsZ8yDMrxg2pExkIqc_GpCgmiu3AlDhhryhmkWxxAA; __Secure-3PSIDTS=sidts-CjIBLFra0lA0GnGs50zecDrcTU1BoLDsZ8yDMrxg2pExkIqc_GpCgmiu3AlDhhryhmkWxxAA; DV=wyupxYUDN98uEL5WPJip-J9mA65pjVjFnRULTMb8fQAAAAA; 1P_JAR=2023-06-20-02; NID=511=Qg377ndAkYhuzgFJjK-YC7gdZOqpS0gfnAzaC9Mcl2L9u4ieRzeBTrNkCbEqeFYgH9X6fJlfLmDnUEPvKDqHrorE3rxyt_PN9t6B344tK7JkyJra1vxnzmdwprkI5ywzC0Xmh8G97_Vx75nNa7WsOIiTAlaKsYnAGkv9SlwjjMIi_q2zA-8dXq1g__gweUYLi7rOuMeTYLaiAb16RHESpnS4m7X8SLYIcCBc_mzYbU7FZRCzeVeZSUAQvmeH6znaXWgXtOJQd-mMiAA5iTJ_Fg_5vnB8Ads879WdRmMe3Mk7dm_j9iiXMZuHjW7csxYOPW9wW82GSvUQrBx_VAbOemjuPfqz5Q; SIDCC=AP8dLtz7HXGRQT5EY0a8S-0b6JCOyxr0MooOEewCA6OJuujmep8nWiDKqYKB8zjXnFRNxItIbg; __Secure-1PSIDCC=AP8dLtyagVAC4ajyI04UdZUI1QNoqK-3B6KbakHPstYMjQZgb4zk13FMeKiqhbBgcioczmCMydI; __Secure-3PSIDCC=AP8dLtxO1J-xqzHW2Awr3Ri_wAJEU-ZPwpvGhtKcxfRG6Fx4KRSX091SSkfU3Cd693EDSfXwKk8"};
module.exports = (req, res) => {
    // 创建代理对象并转发请求
    createProxyMiddleware({
        target,
        selfHandleResponse : false,
        changeOrigin: true,
        headers:head,
    })(req, res);
};
