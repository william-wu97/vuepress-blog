(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{462:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("本文转载自："),s("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/article/doc/000680d8e507e84a1729f20c956413",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何使用第三方 npm 扩展包"),s("OutboundLink")],1)])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#npm-支持的要求"}},[t._v("npm 支持的要求")])]),s("li",[s("a",{attrs:{href:"#安装-dayjs"}},[t._v("安装 dayjs")])]),s("li",[s("a",{attrs:{href:"#目录变化"}},[t._v("目录变化")])]),s("li",[s("a",{attrs:{href:"#页面改写"}},[t._v("页面改写")])]),s("li",[s("a",{attrs:{href:"#引入-dayjs-初始化数据"}},[t._v("引入 dayjs 初始化数据")])]),s("li",[s("a",{attrs:{href:"#总结"}},[t._v("总结")])])])]),s("p"),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/article/doc/00022e7b67ce388ac2198d11f5bc13",target:"_blank",rel:"noopener noreferrer"}},[t._v("上一篇"),s("OutboundLink")],1),t._v("传参的示例中，不知道你是否注意到，像 "),s("code",[t._v("isPast")]),t._v("（判断日期是否为过去） 或者 "),s("code",[t._v("number")]),t._v("（距离当前的天数） 参数，根本就不需要传输嘛，这些应该是计算出来的。")]),t._v(" "),s("p",[t._v("然而，如果让你来写日期计算的 API，我相信绝大多数开发者，都不一定能够写出来，好在，这块有成熟的库可以使用，例如："),s("code",[t._v("moment.js")]),t._v("，还有 "),s("code",[t._v("dayjs")]),t._v("，这篇文章就来介绍一下，如何在小程序中使用第三方 npm 扩展？")]),t._v(" "),s("p",[t._v("这块内容，官方文档已经写得比较清楚了，在"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("工具 — 开发辅助 — npm 支持"),s("OutboundLink")],1),t._v("下，目录层次比较深，所以，在最开始的时候，建议通读一遍文档，还是非常有必要的。")]),t._v(" "),s("h2",{attrs:{id:"npm-支持的要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-支持的要求"}},[t._v("#")]),t._v(" npm 支持的要求")]),t._v(" "),s("p",[t._v("小程序并非从一开始就支持 npm，而是在"),s("strong",[t._v("基础库版本 2.2.1 或以上")]),t._v("、及"),s("strong",[t._v("开发者工具 1.02.1808300 或以上")]),t._v("的时候，才开始支持。")]),t._v(" "),s("p",[t._v("所以，这两个条件一定要注意，当然，如果才开始学习小程序开发，用最新版的就可以了。")]),t._v(" "),s("h2",{attrs:{id:"安装-dayjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-dayjs"}},[t._v("#")]),t._v(" 安装 dayjs")]),t._v(" "),s("p",[t._v("用命令行进入项目目录，使用下面命令安装 dayjs")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm init\nnpm i dayjs --production\n")])])]),s("p",[t._v("第一条命令是初始化 npm，第二条命令是安装 dayjs 包。")]),t._v(" "),s("p",[t._v("然后打开开发者工具，在本地设置中，勾选使用 npm 模块，如下图：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"1","data-src":"/vuepress-blog/img/post/2022-11-22-01/1.webp",loading:"lazy"}})]),t._v(" "),s("p",[t._v("最后，打开工具菜单，点击构建 npm 即可。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"2","data-src":"/vuepress-blog/img/post/2022-11-22-01/2.webp",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"目录变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录变化"}},[t._v("#")]),t._v(" 目录变化")]),t._v(" "),s("p",[t._v("构建完成后，项目目录中会多出几个文件：")]),t._v(" "),s("ul",[s("li",[t._v("package.json")]),t._v(" "),s("li",[t._v("package-lock.json")]),t._v(" "),s("li",[t._v("node_modules")]),t._v(" "),s("li",[t._v("miniprogram_npm")])]),t._v(" "),s("p",[t._v("前面三个是 npm 初始化时，默认生成的，最后一个目录是开发者工具构建 npm 时生成的，可以理解为小程序版的 npm 包。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"3","data-src":"/vuepress-blog/img/post/2022-11-22-01/3.webp",loading:"lazy"}})]),t._v(" "),s("p",[t._v("使用方法与 node.js 开发一致，下面就来完善"),s("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/article/doc/00022e7b67ce388ac2198d11f5bc13!%5B%5D(https://mmbiz.qpic.cn/mmbiz_jpg/7DOCHiaXtYX38oxF6V1dLLeqpRn0d1OSjDYJqpuIJkS0grlXBgjI9MCODssyB7IBlSXibbPvce23qSCkAw3GayqA/0?wx_fmt=jpeg)",target:"_blank",rel:"noopener noreferrer"}},[t._v("上一篇"),s("OutboundLink")],1),t._v("中的例子。")]),t._v(" "),s("h2",{attrs:{id:"页面改写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面改写"}},[t._v("#")]),t._v(" 页面改写")]),t._v(" "),s("p",[t._v("打开 days 的 index.wxml 文件，将页面静态内容替换成变量，代码如下：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("goto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ day.title }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-date")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ day.date }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-isPast")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ day.isPast }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-number")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ day.number }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ day.title }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("date-number {{ day.isPast?'primary':'danger' }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ day.number }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("date-desc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('{{ day.isPast?"已过天数":"还剩天数" }}'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("desc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ day.date }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("可以看出，从逻辑层传过来一个 day 的对象。")]),t._v(" "),s("p",[t._v("逻辑层添加 day 对象数据，打开 days 目录的 index.js 文件，编写代码如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  day"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    date"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-10-01'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'新中国成立 70 周年'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("这里只有 date 和 title 属性值，并没有 isPast 和 number，因为 isPast 和 number 值应该是实时计算出来的，而无需储存。")]),t._v(" "),s("p",[t._v("当前的页面是不完整的，接下来就是 "),s("code",[t._v("dayjs")]),t._v(" 上场的时候了。")]),t._v(" "),s("h2",{attrs:{id:"引入-dayjs-初始化数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入-dayjs-初始化数据"}},[t._v("#")]),t._v(" 引入 dayjs 初始化数据")]),t._v(" "),s("p",[t._v("接着编辑 js 代码，引入 dayjs 模块，编写初始化数据函数，如下代码所示：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入 dayjs")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dayjs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dayjs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当天日期")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" today "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dayjs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("init_data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("day")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isPast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" today "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dayjs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dayjs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("today"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("dayjs 的用法不多介绍了，可自行查看文档，init_data 函数在初始数据上，添加了两个参数 isPast 和 number，使用 dayjs 模块提供的 API 可以快速计算它们的值。")]),t._v(" "),s("p",[t._v("最后，在页面事件函数 "),s("code",[t._v("onShow")]),t._v(" 中，调用初始化函数，代码如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onShow")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    day"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init_data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("这样，整体代码就写完了，只需要一个 "),s("code",[t._v("title")]),t._v(" 和 "),s("code",[t._v("date")]),t._v("，就可以实时计算出相隔的天数，引入 "),s("code",[t._v("dayjs")]),t._v(" 模块，让这个计算的过程，简单了许多。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("这篇文章介绍了 npm 包的引入，安装以及使用。并实际演示了 dayjs 日期库的使用，进而完善了上一篇中的例子。")]),t._v(" "),s("p",[t._v("这里留一个作业题，看能不能结合前面的内容，完成一个完整的「计算日子」功能。")]),t._v(" "),s("p",[t._v("PS. 目前 demo 中只缺少添加日期，显示日期列表，以及存储日期的功能了，正好这些知识点，前面已经都介绍过了。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("写完这篇文章，距离国庆节还剩下 22 天。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"4","data-src":"/vuepress-blog/img/post/2022-11-22-01/4.webp",loading:"lazy"}})]),t._v(" "),s("p",[t._v("更多文章："),s("a",{attrs:{href:"https://github.com/pengloo53/miniprogram-articles",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/pengloo53/miniprogram-articles"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("PS")]),t._v("：微信小程序打包出来的miniprogram_npm里面只包含了基础的dayjs模块，打包成一个index.js入口。可选的插件和国际化包都没有打包进来，这怎么办呢？")]),t._v(" "),s("p",[t._v("用gulp自动拷贝，在项目根目录创建 "),s("code",[t._v("gulpfile.js")]),t._v(" 文件，内容如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// gulpfile.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dest\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gulp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildPlugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按需拷贝（否则太大了）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" names "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'duration'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'isBetween'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意（'dist'路径。你的文件结构可能不同)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("node_modules/dayjs/plugin/{")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("names"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("}.js")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("miniprogram_npm/dayjs/plugin")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" buildPlugins\n")])])]),s("p",[t._v("然后命令行执行gulp，可自动复制"),s("code",[t._v("node_modules")]),t._v("->"),s("code",[t._v("dayjs")]),t._v("文件夹下的插件")])])}),[],!1,null,null,null);a.default=e.exports}}]);