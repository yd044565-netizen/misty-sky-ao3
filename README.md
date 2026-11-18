# Misty Sky 3.0 · Aqua Glass Edition

一套适合手机阅读的 AO3 站点皮肤。晴空蓝水波纹页眉搭配雾白半透明面板、交错波点和玻璃按钮，作品信息使用横线纸排版。

## 安装皮肤

登录 AO3，打开 Dashboard → Skins → Create Site Skin，类型选 Site Skin。填好标题，将 `Misty-Sky-3-Aqua-Glass.css` 全文粘到 CSS 栏，提交后点 Use。切回旧皮肤时，在旧皮肤详情页点 Use。

页眉默认使用已配置的图片直链。仓库附有水波纹原图 `Aqua-Ripples.jpg`。自行托管时，将 CSS 中指向 Aqua-Ripples.jpg 的地址换为可公开访问的 HTTPS 图片直链。

## 可选中文字体

- iPhone Safari：安装 Userscripts，将 `AO3-Songti.user.js` 放进扩展使用的脚本文件夹，启用扩展并允许其访问 archiveofourown.org，然后刷新作品页。
- Alook：设置 → 自定义设置 → JavaScript 扩展 → 被动扩展。匹配类型选域名，匹配值填 `archiveofourown.org`，运行时间选 DOMContentLoaded，将 `AO3-Songti.js` 粘进代码框，保存并启用。

脚本在作品页和列表请求 Google Fonts 的 Noto Serif SC，英文优先使用 Georgia。字体显示取决于网络和浏览器。

## 来源与许可

本项目的 CSS 和脚本使用 MIT 许可证，见 LICENSE。按钮内侧泛光参考 [waldbach/liquid-glass-css](https://github.com/waldbach/liquid-glass-css)，其 MIT 许可见 THIRD-PARTY-LICENSE.txt。字体由 [Google Fonts](https://fonts.google.com/noto/specimen/Noto+Serif+SC) 在线提供。页面上的 AO3 标识和图标来自 AO3。本项目为非官方用户皮肤。
