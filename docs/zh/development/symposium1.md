---
headerDepth: 0
comment: false
index: false
---

# 第一期开发组座谈会

复制自 [GitHub 讨论帖](https://github.com/DGP-Studio/Snap.Hutao/discussions/46)，总结于群讨论

## 为啥胡桃在电脑上要做成类似 uwp 格式的应用？

开发 MSIX 封装的应用是桌面端的开发趋势，开发体验更佳，用户体验也能提升。

## 胡桃的作用是啥，和 SG 有什么区别？

胡桃是 SG 的次世代版本，更新/更快/更强。

## 胡桃会全面继承 SG 的功能吗？SG 的一些功能会在 hutao 里被弃用吗？

多数功能会完全继承与升级。少数功能会以整合功能的形式出现在胡桃中。

## 为啥不把胡桃和 SG 集合到一起，而是要分开呢？和 sg 有什么侧重上的不同？

Snap Genshin 采用 WPF 技术开发，该技术基于 DirectX 9，而 胡桃 采用 WinUI 3 开发，该新技术基于 DirectX 12 与其他较新的显示技术，呈现的效果更好，同时也更易于开发，胡桃 与 Snap Genshin 类似，但侧重于流畅、简单的用户体验，同时也更注重程序架构的可维护性，更关注性能表现。

## 除了 SG 的旧功能迁移，还会有新功能开发吗？

随着原神的发展，我们也会推出更多的功能。

## SG 永远不会更新了吗？SG 是快不能用了吗？

~~没有严重的数据异常问题不会再更新。由于缺乏维护，不保证在何时由于某些不确定的原因会导致 SG 的部分功能失效（如先去的签到功能）。~~
Snap.Genshin 已停止更新，项目已归档

## 胡桃的使用文档秋梨膏？

~~使用文档 @Masterain98 正在制作中，很快就会和大家见面。~~ 你现在看到的就是

## 胡桃图标还会更新嘛？

不会，我们持有胡桃图标的版权。

## 什么时候上微软商店？上微软商店是否不需要自己信任证书了？胡桃以后会在线更新嘛？

会在所有功能完善后上架。不需要证书。上架后就可以支持在线更新了。

## 有考虑增加根据角色展示面板来计算伤害的功能吗？什么时候胡桃能当启动器，解锁帧率？这个无边框全屏的功能以后会不会支持？

面板功能会在用户系统重构后进行开发，并且会在完成面板查询功能后实现启动游戏相关功能。启动参数包括在内。

## 胡桃数据库 和 Hutao 是否有关系？什么时候上胡桃数据库？

~~胡桃数据库是 HutaoAPI 的一部分，包含了深渊相关的数据，HutaoAPI 是胡桃使用的 RESTful API，同时面向其他应用的开发者开放，接入成本低，接入收益高。胡桃数据库将会在后续版本实装。~~ 已经实装

## 会把胡桃放到右下角任务栏吗？会考虑在角色里添加立绘吗？

~~基本不会考虑~~。后续可能会考虑。

你可以通过快速启动栏来快速启动游戏，具体方法可见[此文档](/advanced/FAQ#如何通过胡桃工具箱快速地启动游戏)

## 将来会有移动端吗？有考虑根据胡桃做个手机桌面小组件吗？胡桃以后支持插件吗？胡桃会有插件开发文档吗？

短时间内不会考虑移动端。手机桌面小组件也基本不会考虑。不会再支持插件。同样也不会有插件文档。

## 离支持外服账号还有多远？会整合其他插件比如空荧酒馆这种嘛？

~~Hoyolab 的相关支持需要其他开发者的帮助。由于技术栈的不同，很难整合。~~

受益于开源社区力量，目前高级启动器、祈愿记录导出和成就管理功能已支持国际服。

## 有没有打算添加收费功能，还是说只靠捐助？

~~由于服务器需要资费，与服务器存储相关的功能可能会进行收费。~~ Snap.Hutao 等有关项目均为公益项目

## 是用爱发电吗？开发胡桃，是业余时间开发的吗？

显然是。