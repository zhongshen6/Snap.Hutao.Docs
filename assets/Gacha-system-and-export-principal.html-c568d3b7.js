import{_ as a,Y as e,Z as i,a3 as r}from"./framework-8be3ab77.js";const l={},n=r('<h1 id="祈愿系统与导出原理" tabindex="-1"><a class="header-anchor" href="#祈愿系统与导出原理" aria-hidden="true">#</a> 祈愿系统与导出原理</h1><blockquote><p>Gacha System and Principal</p></blockquote><p>胡桃的祈愿系统相较 Snap Genshin 进行了整体架构上的重新设计。</p><p>本文将解释原神的祈愿记录机制和胡桃工具箱中祈愿导出功能的技术原理。</p><h2 id="祈愿的获取" tabindex="-1"><a class="header-anchor" href="#祈愿的获取" aria-hidden="true">#</a> 祈愿的获取</h2><p>获取祈愿记录需要请求米哈游的 API</p><p>关于此 API, 有下列几个注意点</p><ul><li>通过米哈游服务器的 API，只能查询到过去 6 个月内的祈愿记录 <ul><li>这也是原神客户端中祈愿记录的来源</li></ul></li><li>API 存在请求速率限制，过快的请求会导致后续的请求失败，无法正常获取数据</li></ul><p>为了请求此 API，我们需要四个关键参数</p><ul><li>目前有下列几种方法可以获取这些参数 <ul><li>遍历 Unity 的日志文件，查找用户打开的祈愿记录 URL</li><li>代理本机流量，筛选祈愿记录 URL</li><li>查找 CefBrowser 的浏览器缓存，找到祈愿记录 URL</li><li>对于包含了 Stoken 的 Cookie，调用 genAuthKey API,获取参数</li><li>高级用户手动输入相关 URL</li></ul></li></ul><p>在请求 API 后可以获取到零散的祈愿记录，在对其进行拼接后即可获得一份完整的祈愿记录列表</p><h2 id="祈愿的存储" tabindex="-1"><a class="header-anchor" href="#祈愿的存储" aria-hidden="true">#</a> 祈愿的存储</h2><p>获得完整的祈愿记录列表后即可将其简单的序列化入本地数据库内，在需要时可从数据库中反序列化出来呈现给用户。</p><p>后续的对服务器的请求只需要对比数据库中的数据请求新增的部分即可。</p><p>这样，用户即可长期地保存帐号的完整祈愿记录</p><h2 id="uigf-格式" tabindex="-1"><a class="header-anchor" href="#uigf-格式" aria-hidden="true">#</a> UIGF 格式</h2><blockquote><p>统一可交换祈愿记录标准</p><p>Uniformed Interchangeable GachaLog Format standard</p></blockquote><p>UIGF 是由我们联合其他祈愿记录应用倡导、推出并<strong>持久维护</strong>的一个统一的祈愿记录数据交换标准</p><p>标准化的数据格式将允许用户将祈愿记录在不同的转移数据，以使用到不同原神工具中各自的特色功能</p><h3 id="祈愿的导入" tabindex="-1"><a class="header-anchor" href="#祈愿的导入" aria-hidden="true">#</a> 祈愿的导入</h3><p>在使用 UIGF 数据格式的前提下，可以导入曾在其他应用中储存的数据</p><p>胡桃在处理导入时，会对比本地储存中存在的最早的索引（ID）并仅导入较老的数据</p><p>（因为始终可以从米哈游的服务器获取较新的数据，这种原始数据有更高的精确度）</p><h3 id="祈愿的导出" tabindex="-1"><a class="header-anchor" href="#祈愿的导出" aria-hidden="true">#</a> 祈愿的导出</h3><p><s>尚未实现，正在设计</s> 已实装</p>',25),t=[n];function h(p,d){return e(),i("div",null,t)}const o=a(l,[["render",h],["__file","Gacha-system-and-export-principal.html.vue"]]);export{o as default};