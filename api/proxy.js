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
    "Cookie":"SID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLSzxyyu7pLXR-8pddY1roIyA.; __Secure-1PSID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLSkalRVOAxJ3LNpipAtZoJ4A.; __Secure-3PSID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLS-S2kauhJjYhHBbnEOujiYg.; HSID=A3il0W_Y9flcu1gRp; SSID=AH4Jvf9KUMcFHRn3b; APISID=A-cKOI4kueg9dBYu/AXjmIVGrmkzWasInY; SAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; __Secure-1PAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; __Secure-3PAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; AEC=AUEFqZd4viyF3s3Ub8ySLn5wIW4a2z0YEV7sQt4TcN6zMyMQQmio5LOITOQ; SEARCH_SAMESITE=CgQIx5gB; OTZ=7080896_24_24__24_; 1P_JAR=2023-06-19-07; __Secure-1PSIDTS=sidts-CjIBLFra0iDawVJkYHW2f6yG5FvbKs9JxYEFyazzOPMDFthLXOV91i6rjVMB0zL5kxoe2hAA; __Secure-3PSIDTS=sidts-CjIBLFra0iDawVJkYHW2f6yG5FvbKs9JxYEFyazzOPMDFthLXOV91i6rjVMB0zL5kxoe2hAA; NID=511=AZDVSeNz1dFM14uwXi7zNGWZU6odWj2NqvDMRdfhe9RTXFVitC35lv_xKnZuNdElebvowPjWNopyzthcNjyWpgp-ASs6Gn3tFQMeC_Hk-Lc-D6jkbRES7m6kBcITTS1D8BH5VB8UztgD5FSS8A5IupjRXzYUdoMiYa_Y4BsyUooXAvadTtgUxyVdv2OnZHj15n63_mlKkE2vPbbm4iX_i00x1XXYlnTlK9CUnuH9vrCX9JE9hFo_2rCmX-_dWxsMIOk21sIN0Gw25ush5TIlHeVIRep2FDUyN0Um7hPl-q_SE2iCYNgIYe2s2jhJTyyKrPhhNLEtqsu6DmRTvRgmCrKfumc; DV=wyupxYUDN98uUHFnxQKTMX8vPboojVj4WvFgpuJ_2gAAAAA; SIDCC=AP8dLtzC4oqXOE1fFvbpsHC1fkbw75jwyA5Y91pTU1cVziE68i8wqZpVNpXfxIfMPK2DLz850Q; __Secure-1PSIDCC=AP8dLtxOrrMPKIdjSHB7TR72DghxYmWm7qqFd-HOFpfYPljic1FTVi7IkkJg9V-jq1uBwfO2qus; __Secure-3PSIDCC=AP8dLtwXDzVGUJYLmXqDOGEli4fz_ASNpo3w7K1rOMDMqqFDi8NoBKbhT6Es1pfJQ-yquo5A8Rw"
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
