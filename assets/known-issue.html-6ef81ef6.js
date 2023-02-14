import{ac as d,H as u,I as a,F as l,V as o,O as e,ae as t,ad as c,Y as i}from"./framework-3390b3d8.js";const r={},_=l("h1",{id:"已知问题",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#已知问题","aria-hidden":"true"},"#"),o(" 已知问题")],-1),h=l("h2",{id:"_1-微软商店下载应用程序",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_1-微软商店下载应用程序","aria-hidden":"true"},"#"),o(" #1 微软商店下载应用程序")],-1),m=l("blockquote",null,[l("p",null,"该问题来源并非胡桃工具箱，属于外部问题")],-1),p=l("li",null,"发现于 2023/02/07",-1),f=l("li",null,[o("无法从微软商店下载的原因在于微软在东亚的授权服务器 "),l("code",null,"licensing.mp.microsoft.com"),o(" 掉线。当你在商店上下载一个新应用时，这实际上是一个授权/购买的过程。 当授权服务出现问题时，自然不会再进入到下一步下载环节，这就导致了用户无法安装 "),l("ul",null,[l("li",null,[o("目前仅发现于微软商店新加坡授权服务器 "),l("code",null,"52.137.108.250"),o(" 出现了问题，所以你可以使用代理，切换到其它授权服务器，来实现下载。")])])],-1),k=l("li",null,"授权服务器问题 DGP-Studio已反馈给微软，等待解决。",-1),x=l("strong",null,"方法1",-1),b={href:"https://www.dogfight360.com/blog/475/",target:"_blank",rel:"noopener noreferrer"},g=c("<ul><li>在该工具箱内选择 <code>Microsoft Store - 微软商店</code> 中的 <code>微软授权验证</code></li><li>点击<code>检测延迟</code></li><li>选择一个对你而言延迟最低的服务器，选中后点击<code>应用选中</code></li><li>此时重启微软商店后，你应当可以下载应用了</li><li>下载完成后，建议点击<code>清除当前</code>以删除对 <code>Hosts</code> 文件的修改</li></ul>",1),E=c("<li>如果你懒得下载，可以尝试将 <code>licensing.mp.microsoft.com</code> 通过修改 <code>Hosts</code>文件解析到以下 IP 地址之一 （收集于 UsbEAm Hosts Editor） <ul><li><code>124.108.22.138</code></li><li><code>92.38.149.175</code></li><li><code>141.147.180.87</code></li><li><code>103.151.179.4</code></li></ul></li>",1),w=l("li",null,[l("strong",null,"方法2"),o("： "),l("ul",null,[l("li",null,"将系统的DNS服务器设置为4.2.2.1和4.2.2.2（完事后记得改回原本的设置）")])],-1),H=l("strong",null,"方法3",-1),I=l("li",null,"使用北美地区的网络代理",-1),L=l("h2",{id:"_2-服务器切换导致31-4302报错",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_2-服务器切换导致31-4302报错","aria-hidden":"true"},"#"),o(" #2 服务器切换导致31-4302报错")],-1),N=l("ul",null,[l("li",null,[o("使用高级启动器中的服务器切换功能时，可能会出现"),l("code",null,"31-4302"),o("相关错误")]),l("li",null,[o("目前的临时解决方案： "),l("ul",null,[l("li",null,"将原神截图目录中的服务器切换缓存目录删除")])])],-1);function V(A,S){const s=i("ExternalLinkIcon"),n=i("RouterLink");return u(),a("div",null,[_,h,m,l("ul",null,[p,f,k,l("li",null,[o("临时的解决方案： "),l("ul",null,[l("li",null,[x,o("： "),l("ul",null,[l("li",null,[o("使用"),l("a",b,[o("UsbEAm Hosts Editor"),e(s)]),g]),E])]),w,l("li",null,[H,o("： "),l("ul",null,[I,l("li",null,[o("如果使用加速器或网络代理，你需要"),e(n,{to:"/FAQ/HttpRequestException.html"},{default:t(()=>[o("解除微软商店的 Windows App Container Loopback 限制")]),_:1})])])])])])]),L,l("blockquote",null,[l("p",null,[o("该问题已于 "),e(n,{to:"/statements/update-log.html#1-4-15"},{default:t(()=>[o("1.4.15")]),_:1}),o(" 版本修复，请及时更新")])]),N])}const v=d(r,[["render",V],["__file","known-issue.html.vue"]]);export{v as default};