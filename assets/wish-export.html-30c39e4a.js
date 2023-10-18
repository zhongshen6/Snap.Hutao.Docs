import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as h,c as r,a as e,b as o,d as i,w as s,e as n}from"./app-77df1e3e.js";const _={},p=e("h1",{id:"祈愿记录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#祈愿记录","aria-hidden":"true"},"#"),o(" 祈愿记录")],-1),u=e("p",null,[o("抽卡是原神的核心玩法之一，无论是出于纪念、炫耀的目的还是认真规划抽取计划，对历史抽卡进行统计分析都是非常重要的。 但是原神官方只为玩家提供了半年的抽卡记录，这是很不友好的（"),e("s",null,"但是他们还是统计了你一整年杀了多少提米的鸽子"),o("）。")],-1),f=e("p",null,"因此，我们需要利用这半年的抽卡记录调取窗口，将抽卡记录转移到我们自己手中，这就是胡桃工具箱中祈愿记录导出功能的目的所在。",-1),x=e("strong",null,"祈愿系统与导出原理",-1),g=n('<p><img src="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01kxgPxR1g6dyCSMPYb_!!1797064093.png_.webp" alt="祈愿导出" loading="lazy"></p><p><strong>如上图所示，从胡桃工具箱的祈愿导出功能，你可以清晰地获取到包括：抽卡总数、当前已垫抽数、不同稀有度获取的数量和百分比、 每次五星稀有度获取的抽数以及保底情况。胡桃云用户可以额外地获取由云端服务器计算的抽卡预测数据。</strong></p><div class="hint-container note"><p class="hint-container-title">原神抽卡记录的延迟性</p><p>胡桃工具箱获取抽卡记录的来源也为米哈游服务器，因此短时间内刚刚结束的抽卡无法被获取。 当你在游戏内抽卡历史记录中看到了最新的一批抽卡记录，则可以在胡桃中获取统计数据。</p></div><h2 id="获取祈愿数据" tabindex="-1"><a class="header-anchor" href="#获取祈愿数据" aria-hidden="true">#</a> 获取祈愿数据</h2>',4),b={id:"利用-stoken-从服务器获取最新的祈愿记录",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#利用-stoken-从服务器获取最新的祈愿记录","aria-hidden":"true"},"#",-1),k={class:"hint-container info"},G=e("p",{class:"hint-container-title"},"提示",-1),U=e("li",null,"SToken 刷新方法暂不支持国际服",-1),I=e("ul",null,[e("li",null,"在胡桃工具箱中确保你需要获取记录的米游社帐号已登录"),e("li",null,[o("从左侧菜单栏进入"),e("code",null,"祈愿记录")]),e("li",null,[o("点击右上角的"),e("code",null,"刷新"),o("，并点击"),e("code",null,"SToken刷新")]),e("li",null,"等待读取完毕，即可查看最新的祈愿记录")],-1),S={id:"从网页缓存获取最新的祈愿记录",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#从网页缓存获取最新的祈愿记录","aria-hidden":"true"},"#",-1),v=n('<ul><li>从左侧菜单栏进入<code>祈愿记录</code></li><li>启动游戏并登入游戏，打开游戏内的祈愿历史记录</li><li>回到胡桃工具箱，点击<code>刷新</code>按钮，在刷新菜单中点击<code>网页缓存刷新</code></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>若出现<code>网页缓存刷新</code>功能异常的情况：</p><ul><li>从胡桃工具箱的<code>设置</code></li><li>在<code>删除游戏内网页缓存</code>功能中执行删除操作</li></ul></div>',2),E={id:"通过输入-url-获取祈愿记录",tabindex:"-1"},F=e("a",{class:"header-anchor",href:"#通过输入-url-获取祈愿记录","aria-hidden":"true"},"#",-1),B=n('<ul><li>如果你通过其它工具获取到了你祈愿历史记录的 Url，可以选择<code>手动输入Url</code>并根据提示操作</li><li>但应注意此类 Url <strong>具有时效性</strong></li></ul><h3 id="对于全量刷新选项的补充说明" tabindex="-1"><a class="header-anchor" href="#对于全量刷新选项的补充说明" aria-hidden="true">#</a> 对于全量刷新选项的补充说明</h3><p>在默认情况下，胡桃工具箱会在匹配到本地已有记录的祈愿 ID 后停止导入。 但如果你希望完整地获取原神服务器中所有的历史记录（即使它已经存在于你的本地祈愿记录中），你可以勾选<code>全量刷新</code>。</p><p><strong>不勾选<code>全量刷新</code>不会使你丢失祈愿数据，勾选<code>全量刷新</code>也不会让你的本地记录错误地额外记录一次相同的祈愿数据。</strong></p>',4),w={id:"从其它祈愿导出程序导入祈愿数据",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#从其它祈愿导出程序导入祈愿数据","aria-hidden":"true"},"#",-1),N=n('<p>胡桃工具箱支持导入 <code>UIGF 数据格式</code> 的祈愿记录数据<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>如果你希望导入这一类数据，可以：</p><ul><li>启动胡桃工具箱，从左侧菜单栏进入<code>祈愿记录</code></li><li>点击右上角的<code>导入</code></li><li>选择你的 UIGF Json 数据文件</li><li>根据界面确认导入数据</li></ul><h3 id="从-snap-genshin-转移祈愿记录数据" tabindex="-1"><a class="header-anchor" href="#从-snap-genshin-转移祈愿记录数据" aria-hidden="true">#</a> 从 Snap Genshin 转移祈愿记录数据</h3><p>如果你希望从 Snap Genshin 中转移祈愿数据至胡桃工具箱，你可以：</p><ul><li>升级 Snap Genshin 到最新版本</li><li>进入<code>祈愿记录</code>功能 <ul><li>如果你由于无法登录米游社而无法进入 Snap Genshin，可以在胡桃工具箱中登录米游社帐号并复制 Cookie 到 Snap Genshin</li></ul></li><li>点击右上角的功能菜单</li><li>通过<code>导出 UIGF Json 文件</code>导出 Json 格式的祈愿记录</li><li>在胡桃工具箱中导入该文件</li></ul>',6),T={id:"导出祈愿数据",tabindex:"-1"},J=e("a",{class:"header-anchor",href:"#导出祈愿数据","aria-hidden":"true"},"#",-1),L=n("<p>胡桃工具箱支持导出 <code>UIGF数据格式</code> 的 Json 文件格式的祈愿记录数据</p><p>如果你希望导出祈愿数据，可以：</p><ul><li>启动胡桃工具箱，从左侧菜单栏进入<code>祈愿记录</code></li><li>选择您要导出的祈愿记录存档</li><li>点击<code>导出</code>按钮 <ul><li>在弹出的界面选择您需要将此导出的祈愿记录数据文件存放的位置，并点击<code>导出</code></li></ul></li><li>导出完成</li></ul>",3),V={id:"祈愿记录云同步",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#祈愿记录云同步","aria-hidden":"true"},"#",-1),D=n('<blockquote><p>祈愿记录云同步功能基于胡桃云帐号，你需要<a href="hutao-settings#%E8%83%A1%E6%A1%83%E5%B8%90%E5%8F%B7">在设置中注册并登录胡桃帐号</a>以使用该功能</p></blockquote><p>用户可以使用该功能，将本地的祈愿记录上传到胡桃云，避免珍贵的祈愿记录丢失，方便数据在多设备之间转移。</p><h3 id="云同步权限" tabindex="-1"><a class="header-anchor" href="#云同步权限" aria-hidden="true">#</a> 云同步权限</h3><p>由于云同步是一个消耗胡桃服务器资源的功能，故该功能有时间限制。目前，胡桃提供以下几种启用云同步功能的方法：</p><ol><li>在爱发电上打赏胡桃的用户，我们会向与爱发电邮箱帐号相匹配的胡桃帐号自动增加使用时间作为胡桃工具箱开发团队对打赏用户的感谢</li><li>对于所有注册用户，在每一期深渊第一次成功向胡桃数据库上传深境螺旋挑战记录后，会获得 3 天的同步功能使用时间 <ul><li>你可以通过该方法长期地免费使用胡桃云</li></ul></li><li>为胡桃工具箱开源社区贡献（包括但不限于代码开发、程序设计、本地化翻译）的用户，可以直接联系开发团队添加时长 <ul><li>我们目前正在设计一个完善而自动化的开发者许可证颁发流程，它将会随着胡桃帐号系统的完善而推出</li></ul></li></ol><p>当你的胡桃帐号云同步权限过期后，你将无法上传、下载和删除数据，但你的数据不会被删除。你可以在恢复权限后重新操作你的云备份数据。</p><h3 id="上传" tabindex="-1"><a class="header-anchor" href="#上传" aria-hidden="true">#</a> 上传</h3><ul><li>在祈愿导出界面，选择你需要同步的祈愿存档</li><li>点击右上角的<code>胡桃云</code>按钮</li><li>点击<code>上传当前的祈愿存档</code>即可备份当前的存档数据至云端</li></ul><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3><ul><li>在祈愿导出界面，点击右上角的<code>胡桃云</code>按钮</li><li>在对应 UID 的帐号右侧点击下载按钮即可下载目标存档的云端数据</li></ul><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><ul><li>在祈愿导出界面，点击右上角的<code>胡桃云</code>按钮</li><li>在对应 UID 的帐号右侧点击删除按钮即可删除目标存档的云端数据</li></ul><hr class="footnotes-sep">',13),R={class:"footnotes"},q={class:"footnotes-list"},A={id:"footnote1",class:"footnote-item"},O={href:"https://uigf.org/",target:"_blank",rel:"noopener noreferrer"},P=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function M(Y,j){const a=l("RouterLink"),t=l("Badge"),d=l("ExternalLinkIcon");return h(),r("div",null,[p,u,f,e("p",null,[o("有关原神祈愿记录导出的技术原理，你可以参阅我们的"),i(a,{to:"/zh/advanced/Gacha-system-and-export-principal.html"},{default:s(()=>[x]),_:1}),o("一文。")]),g,e("h3",b,[m,o(" 利用 SToken 从服务器获取最新的祈愿记录 "),i(t,{text:"推荐",type:"tip"})]),e("div",k,[G,e("ul",null,[e("li",null,[o("已登录的米游社帐号是使用 SToken 刷新方法的前提，你可以参考"),i(a,{to:"/zh/features/mhy-account-switch.html"},{default:s(()=>[o("米游社多帐号切换")]),_:1}),o("一文在胡桃工具箱中登录你的帐号")]),U])]),I,e("h3",S,[y,o(" 从网页缓存获取最新的祈愿记录 "),i(t,{text:"支持国际服",type:"tip"})]),v,e("h3",E,[F,o(" 通过输入 Url 获取祈愿记录 "),i(t,{text:"支持国际服",type:"tip"})]),B,e("h3",w,[C,o(" 从其它祈愿导出程序导入祈愿数据 "),i(t,{text:"UIGF",type:"info"})]),N,e("h2",T,[J,o(" 导出祈愿数据 "),i(t,{text:"UIGF",type:"info"})]),L,e("h2",V,[z,o(" 祈愿记录云同步 "),i(t,{text:"测试功能",type:"info"})]),D,e("section",R,[e("ol",q,[e("li",A,[e("p",null,[o("统一标准化的原神数据格式由 "),e("a",O,[o("UIGF-Org"),i(d)]),o(" 提供 "),P])])])])])}const Q=c(_,[["render",M],["__file","wish-export.html.vue"]]);export{Q as default};