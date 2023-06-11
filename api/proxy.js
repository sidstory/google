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
    "Cookie":"AEC=AUEFqZfPxLUxZBIcgvjTwKGRyjGd3AmshazV1Ufp_RqNgiCK6wLeek-53z0; 1P_JAR=2023-06-11-08; SID=XQgpEu6Shb_9sWnZte4i3LHcApK6waPXy10VXG1bMip81mND-gIFNWOV5VbYY5yJFE6Muw.; __Secure-1PSID=XQgpEu6Shb_9sWnZte4i3LHcApK6waPXy10VXG1bMip81mNDCtZ9quVo73ianLhX7TK8Cw.; __Secure-3PSID=XQgpEu6Shb_9sWnZte4i3LHcApK6waPXy10VXG1bMip81mND1Xt6uadQqn8RBRHNKQSrxg.; HSID=AIvGhhSAb0iY2MzYe; SSID=AvejhuhpY4-PMp-PX; APISID=8fodKf5Jte3K74vO/ADmn2NSDGYPN-yVz8; SAPISID=Bwa45OFagoaMIHll/AjH_9S-vtLBjxE-YB; __Secure-1PAPISID=Bwa45OFagoaMIHll/AjH_9S-vtLBjxE-YB; __Secure-3PAPISID=Bwa45OFagoaMIHll/AjH_9S-vtLBjxE-YB; NID=511=JlbnkNmFPni5m_JhySXjKnyGTD7fCm3AzT_vE6p-ETaZtM9Mg6CtOgJjdyLb5itARXP6XuhdztgXBFThHzKYDfrYvz4L-BVY1RbVxAOeuR19V9Hcmt7psOxlWEL0QKsXNnJIPG-Dra2OepYAZtKWD3392c6vhJbxbbcedyc9d4b6Zw-kSki2jCONMMdfjxyS97BV0XCy67cDf8tu2PIfucbPJY_D3Vizf4bdq5TcPbyt3r791ZEtNmap2Xdk9B46f_PgZfNf2jYmYPjBcOeIFl9vVaFfYijompCFw-TWCNOHKtHRklXew49bQuYi1uv6vzEOPuy3IFiEMjA; __Secure-1PSIDTS=sidts-CjEBLFra0kICDY-SUNPtuj4oQTpuhUlsPL5GQXW6w38VP_Xi0WONAIjueZtl9nIODPrWEAA; __Secure-3PSIDTS=sidts-CjEBLFra0kICDY-SUNPtuj4oQTpuhUlsPL5GQXW6w38VP_Xi0WONAIjueZtl9nIODPrWEAA; SIDCC=AP8dLtxbfaNLDwtaRQwV43xjskdUpZg2YQzyHNcl7rRFf2lEJqLbZV79moxiCN-vTtpmnIRP; __Secure-1PSIDCC=AP8dLtztfVtGkIXl--dqmGKRuoTLcuJ8sGlJYSMKMbIdw3We5LkscX0AzOeeEtmKCS5MiMY8Vw; __Secure-3PSIDCC=AP8dLtxq7rKfcwDk8s-ZOk3U0XgFR27CpgU6iAaLSsHip8MY2ke3V-9CdUChYBGyAo8vtAYSEg"
    
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
