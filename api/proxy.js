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
    "Cookie":"SID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLSzxyyu7pLXR-8pddY1roIyA.; __Secure-1PSID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLSkalRVOAxJ3LNpipAtZoJ4A.; __Secure-3PSID=XQgpEj5ps5hXC5DsaM7CSFEziJle0dYHEIXoWO3-FLTNbsLS-S2kauhJjYhHBbnEOujiYg.; HSID=A3il0W_Y9flcu1gRp; SSID=AH4Jvf9KUMcFHRn3b; APISID=A-cKOI4kueg9dBYu/AXjmIVGrmkzWasInY; SAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; __Secure-1PAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; __Secure-3PAPISID=DpS97itoV6-FohXn/A-xqMc3rgDyy1PFNM; AEC=AUEFqZd4viyF3s3Ub8ySLn5wIW4a2z0YEV7sQt4TcN6zMyMQQmio5LOITOQ; SEARCH_SAMESITE=CgQIx5gB; __Secure-1PSIDTS=sidts-CjIBLFra0igQl9vqS0X3BQwPVqssOl19cB0RN7NGlQ1KWoEH8V2Uwa8fJJoqT-OpoaK-SRAA; __Secure-3PSIDTS=sidts-CjIBLFra0igQl9vqS0X3BQwPVqssOl19cB0RN7NGlQ1KWoEH8V2Uwa8fJJoqT-OpoaK-SRAA; CONSISTENCY=AKJVzco-Yys_m2YxBtOJMG9JkVA94ZIPDUgEJVW96z5phuNSgcO8HhY83qENoxm4NnCFMt2Tozerss7zyCWtR-8UjSTpzMH71Vuoxza_EKEgQq2tGbO7AUNKfgVFzsXmt_XTVdFLn_iBBgjq5J2PQp_TW5gujoRGsiCQmR8CYsj_8uw1anZMci-3xTXvoj7PPIxAjw9HoI3-AnBBkhGMaD__AiF5rfzGahWNaCkr9YT3ZtpbiPN03igb98f1vdWQPm6DdeCbtBSVYGNqql_R5xTTvYVPitWs54AOgzF34pz-_ZNOkfL5mNb_Q-qXpnUSyjbtOdDJb2siHL1jjDZBesBSf9f_30mFW0Rq194KGEonpifikSue4bN_GXyQS-biERaCc_ifQtVCzneIs62BwnQ_wSIslooxosjOD9Lqgl6d5W7dxzYi_ONJj1eosUxXXOsd8FcRJC1ZbiFnWCMOJt7w3aidlQP2AidclE3kYEEX8CSU9lkoawb8x03FK-cu0TMTeIPeBwcrSX71L3SbexFrtq0I8KdluRXaHXdkDB1qwF5KEe8umxvOQyTcerB8LTnkKZQVWeuA03u0eJCXi6vbeiHcP0pob0HIG-p5NO8LoHdvvkIJAI_cNvpf3NNcU8jfBXLWVY9Wnx3VKOqv1dP7CGDihPpSRg7EbGjFMGMCmpjbV4DadEn9wvVfPStdlNSygLGF5QCsdE4-fmWR_KQwyB53KARMZ5Mf7xBCy5vCZzvcL5LN35TbE5G0aUo74xTonfy9ssTBsC_GD7B4s0P_A03KAErLl3-JXJu1f5pQkvcJrQrcG2_vNaUmxz7WX58jLbBqLQfMNQ9NTjxgy1mh4cThLO0vanKT-aF7lr3Ct10rAdn78rdcv4RfdLuSma64tp-UwocADjCqzUnQzd0GG9docY8apytQzAQU372WvcMOdg6R2yy5WpQ-jbenYVnNwyUBAySTht3aeCfBARGCkY_H7gTEif6teuKFaokMzZdkYhzx9jd5vxrCA_Vy76ou-1kT2MeT85AhFqAP7b6YqYq-TqWCuoR3hcjU_8gu6NXLxSMW19GUfByPqM3mB-xdXShRS-GGvSnBXmSH6QKqWoNuRDH9lOGO8RNwvTvtaTe4aiLlP9vwSRYnCWoQRD1qE-KDTLfHfZvGC4dX37uRfBYDRewyrUllsqaWh3JBqTplky-OM_dFQhA2Ojw8vat0DrDq12al2JRrH08opUutW1DB48mwbNsyL9nBZ31jmWJCKsqUgbku8eSG4vaOd0pR8GUkWIkfYCGGtsdiqWxrZTo00cs5IRnTYhDm0ts93y5y-XR17VmVDMbEw72xYpI-d5pKuKlRTM6EMaPhEx9VxnWfCqunYNqBSZLQnU0RZEAT06bpc5FdXdfR_FF72_-sSbw3poXjWdP4LV1OPj4NNPOGoEL8kpJf4q3w3g5-rLo3S25Ed34=; OTZ=7080896_24_24__24_; NID=511=FLgeiUpKJdxvXNLW2TgyVZOa3SV5efktvTHeKgZNOKiw25qm8LE1pWwc0oJ2LFy5ByeobauiqzslHyj5gO-rreByPoq6HImpYojTtYPltBrmxXqjJN4kIvfTpRVh2iLBqNChbmso00WE9xJUbn7i-OJio6JGeU1g9C7HpsXfYG2eVk62NiwXWRSe4a4BOGasseA-34OnS5qq9Ll5cuh2Gj9wa2xZjaLmOezWHuYUJRaSaO0d07tv4DTMkiO9p_LeVtzK9K0zfkPAqUu3DznrJLZJDZQDG3AryGPhnby4nKNEb6B5ZMZphCfnPLiu9MTyTuvTiC8f_lyH_xxa3uIfVcWLAWU; DV=wyupxYUDN99eEL5WPJip-J_WTAgnjVjFnRULTMb8PQAAAICGSTB--aTyQBQtAASIm0L1K13fMUULAO4BBgAhOxlRV9ECAA; 1P_JAR=2023-06-19-06; SIDCC=AP8dLtwpN9sRFCV-oB0FYDQzHbMdaHDwCHlzgLHyke8-gdGVzt6mwWK2xe-FmGXuzge4jv0IMg; __Secure-1PSIDCC=AP8dLtxFNK_cnmtjcz9KX97GOL6ThzOcO9hnh_ItcZ7OaqXr-kvh2wnJhDD4sy5DLDwBaDteZ5E; __Secure-3PSIDCC=AP8dLty1IV0zebAr_5W8L7ZdxLoVra2XPQmOl_qsis0LeVLte5BuNBl55TGVUmTfyvzgXLnCY8Q"
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
