const { createProxyMiddleware, responseInterceptor} = require("http-proxy-middleware");
var target = "https://www.google.com/";
var head={
    "LOCALHOST_IP":"172.200.163.35",
    "Proxy-Client-IP":"172.200.163.35",
    "X-Original-Forwarded-For":"172.200.163.35",
    "X-Forwarded-For":"172.200.163.35",
    "x-forwarded-for":"172.200.163.35",
    "Referer":"https://www.google.com/",
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods":"PUT, POST, GET, DELETE, OPTIONS",
    "Cookie":"SID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLSzxyyu7pLXR-8pddY1roIyA.; __Secure-1PSID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLSkalRVOAxJ3LNpipAtZoJ4A.; __Secure-3PSID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLS-S2kauhJjYhHBbnEOujiYg.; HSID=A3il0W_Y9flcu1gRp; SSID=AH4Jvf9KUMcFHRn3b; APISID=A-cKOI4kueg9dBYu/AXjmIVGrmkzWasInY; SAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; __Secure-1PAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; __Secure-3PAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; SEARCH_SAMESITE=CgQIx5gB; OTZ=7080896_24_24__24_; 1P_JAR=2023-06-29-07; AEC=AUEFqZcTFQSD3crnwdLBn5-G95l2n-wtaPuVKW17YIYBxiL7VkSesptukAc; __Secure-1PSIDTS=sidts-CjIBLFra0p7rX2sB1puQPYNT72LTkMW-KiAbaeKZNXU73nWr5y5iZidhL8Ho4pudVEDg6BAA; __Secure-3PSIDTS=sidts-CjIBLFra0p7rX2sB1puQPYNT72LTkMW-KiAbaeKZNXU73nWr5y5iZidhL8Ho4pudVEDg6BAA; NID=511=RftZ694EheiAMSrpCp9kjtITXoE070Hy8mYXHwdyHynwoaTrifphzw8jG4neGVepFvlO3NQCLB1r7DKjDxokSEgJPcQF0ofil3y9jKmfBRS35e4OkKhFN4QO9wSGNC0Purf2dv17wJWbBzybFdOTDA-vcxph1ZOjMHFmAm4j76QUoLB62cfz5S--NiKm3gyz2ZZe5YLo8uauAETHZ6gbiH_71EKiVCSqQV4wRPkSeAC2LtloXEbYJxB72fBml43YNcIZLMIqJ5KRS-zJiTlI5OvxT0W10Tf-VFxtY8hs2mSTSGIcSOZ8iaEaw1WOvthVfWubBVbBOoAlaeIzhME6b6MlOOcsag; SIDCC=AP8dLtyJsV8IAk-TfzErI7vQJSBm6C2kdWerLRQFUbVG_24-fj7bTPj0M_0gxISboKh_dJr0cQ; __Secure-1PSIDCC=AP8dLtyTXWRVFVk4GKGL9ZlcTWrLyycTsCaTEIigEFoYi7vy7yaBD3Hs-HfTzynwO1r4qIwBHjc; __Secure-3PSIDCC=AP8dLtyZgH0khf2QdZtIgYuKmKFYLVqoUuoa9nGjAGkSyt0q02-Txo7_3-xwZft-nN0yn3A8Szk"
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
