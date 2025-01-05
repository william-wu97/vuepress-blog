(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{477:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("本文转载自："),n("a",{attrs:{href:"https://blog.csdn.net/baobao_123456789/article/details/116047109",target:"_blank",rel:"noopener noreferrer"}},[s._v("项目执行 npm install （yarn）的时候报 node-sass 错误、python 错误？彻底搞清楚原因，让你百试不爽，完全不用那么麻烦。"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("项目执行 npm install （yarn）的时候经常遇到 node-sass下载错误，sass_binary 无法下载，或者让你安装 python （ "),n("strong",[s._v("安装 python 这个提示严重误导人")]),s._v("， 其实根本不是这个原因，后面详述）的提示。")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"1","data-src":"/vuepress-blog/img/post/2023-06-15-03/1.webp",loading:"lazy"}})]),s._v(" "),n("p",[s._v("网上教你怎么做的文章不计其数，然而照着操作了半天发现一点用都没有。")]),s._v(" "),n("p",[s._v("对于node-sass，如果通过以下方式手动指定国内npm镜像设置后能够解决问题，那基本可以断定是你网络的原因。 但本文的目的旨在尝试解释清楚 "),n("strong",[s._v("为什么会产生以上错误")]),s._v(" ，题主认为仍然值得一看。")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SASS_BINARY_SITE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://npm.taobao.org/mirrors/node-sass/ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" node-sass\n")])])]),n("p",[s._v("☝ 如果指定国内 npm 镜像尝试几次后还是不行，不要继续纠结， "),n("strong",[s._v("大概率原因是你项目中引用的 node-sass 依赖的版本跟电脑上安装的 node.js 版本不对应")]),s._v("。")]),s._v(" "),n("p",[n("strong",[s._v("因为项目所需要的一个文件 sass_binary 的版本是由本机已安装 node 的版本号和项目引入的 node-sass 版本号共同决定的，在 windows-x64 位平台系统中这个文件的名称为 win32-x64-??_binding.node，?? 是后文中提到的 NODE_MODULE_VERSION。然而有时候错误的 node-sass 版本并没有与之对应的 sass_binary 文件，那么解决问题的关键就在于选对 node 和 node-sass 的版本")]),s._v(" 。")]),s._v(" "),n("h2",{attrs:{id:"怎么确定项目所需的-sass-binary-的版本呢？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#怎么确定项目所需的-sass-binary-的版本呢？"}},[s._v("#")]),s._v(" 怎么确定项目所需的 sass_binary 的版本呢？")]),s._v(" "),n("p",[s._v("首先通过 "),n("code",[s._v("node -v")]),s._v(" 命令查看电脑中已安装 node 的版本，然后打开 "),n("a",{attrs:{href:"https://nodejs.org/zh-cn/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[s._v("以往的版本 | Node.js"),n("OutboundLink")],1),s._v(" 页面，在表格中找到对应的 node 版本，在 NODE_MODULE_VERSION 这一列中指定了此版本 node 对应的 node-sass 的 SASS_BINARY 版本。")]),s._v(" "),n("p",[s._v("举个🌰，我电脑中安装的 nodejs 是 v14.15.4，它对应的 NODE_MODULE_VERSION 是 83，")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"2","data-src":"/vuepress-blog/img/post/2023-06-15-03/2.webp",loading:"lazy"}})]),s._v(" "),n("p",[s._v("接着查看项目中的 package.js 和 yarn.lock （如果有）找到所引用 node-sass 的版本，我的项目中使用的 node-sass 版本是 v4.13.0，")]),s._v(" "),n("p",[s._v("至此我们就能得出此项目所需要的 sass_binary 文件是 node-sass@v4.13.0 版本（注意此处，不是任意版本哟）中的 win32-x64-"),n("strong",[s._v("83")]),s._v("_binding.node（其它平台电脑系统同理）。")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"3","data-src":"/vuepress-blog/img/post/2023-06-15-03/3.webp",loading:"lazy"}})]),s._v(" "),n("p",[s._v("然后通过 "),n("a",{attrs:{href:"https://github.com/sass/node-sass/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Releases · sass/node-sass · GitHub"),n("OutboundLink")],1),s._v(" 页面（政策所限，可能需要梯子）找到对应的 node-sass 版本，展开 Assets 列表，在列表中查找 win32-x64-83_binding.node，发现此文件并不存在，我们看到在 node-sass@v4.13.0 中按顺序排下来最大的 binding 文件版本才到 79，这就已经破案了，这才是在执行 npm Install 时报错的根本原因： "),n("strong",[s._v("项目试图使用一个不存在的文件")]),s._v(" 。")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"4","data-src":"/vuepress-blog/img/post/2023-06-15-03/4.webp",loading:"lazy"}})]),s._v(" "),n("h2",{attrs:{id:"那如何解决呢？其实前文已经讲的很清楚了，按照原理倒推回去即可！"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#那如何解决呢？其实前文已经讲的很清楚了，按照原理倒推回去即可！"}},[s._v("#")]),s._v(" 那如何解决呢？其实前文已经讲的很清楚了，按照原理倒推回去即可！")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"5","data-src":"/vuepress-blog/img/post/2023-06-15-03/5.webp",loading:"lazy"}})]),s._v(" "),n("p",[s._v("这时候就需要修改 node-sass 依赖的版本号了，原则是在不跨越大版本的前提下，我们优先在最接近当前所使用的 node-sass 更新的版本中查找有没有这个 binding 文件，如果有，那么就优先使用这个版本即可 ( 步子迈太大怕扯到蛋 ) ，如果还没有，那就继续往后找。比如我一直到 node-sass@v4.14.0 才找到有对应的 win32-x64-83_binding.node 文件，那么我们就在项目中重新安装使用这个版本的 node-sass 即可。")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"6","data-src":"/vuepress-blog/img/post/2023-06-15-03/6.webp",loading:"lazy"}})]),s._v(" "),n("p",[s._v("需要注意的是项目移除旧版本依赖和安装新版本依赖最好是通过命令操作，否则在使用 yarn.lock 锁定了项目依赖版本的情况下可能无法正常更新版本。如果在安装过程中仍然报错，那就先把之前的 node_modules 文件夹整个删掉再重新安装一次。至此，我们的项目应该就可以正常安装依赖并启动了。")]),s._v(" "),n("h2",{attrs:{id:"补充"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" 补充:")]),s._v(" "),n("p",[s._v('截止发文时我们看到官网中公布的 "当前发布版" nodejs 是 v16.0.0，再通过之前的链接查询发现，此版本 nodejs 对应的 NODE_MODULE_VERSION 版本都™到 '),n("strong",[s._v("93")]),s._v(" 了")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"7","data-src":"/vuepress-blog/img/post/2023-06-15-03/7.webp",loading:"lazy"}})]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"8","data-src":"/vuepress-blog/img/post/2023-06-15-03/8.webp",loading:"lazy"}})]),s._v(" "),n("p",[s._v("我们再到 GayHub 看看，此时 node-sass 最后一个 release 版本是 5.0.0，下方的版本日志清楚地写着支持的 node 版本为 10、12、14、15，nodejs v16 并未在列，而且在 Assets 中也没有找到有对应的 win32-x64-"),n("strong",[s._v("93")]),s._v("_binding.node 文件（这就是你使用 node 当前发布版的后果，所以非必要情况下不要随意升级电脑中的 nodejs，也不建议使用当前发布版，因为版本太新很多东西暂未适配。 就算升级也要使用长期支持版)（至此我们也可以猜测一下为什么提示让安装 python？ 莫非是想要让我们自己来编译生成所需要的 binding.node 文件？ 未作相关了解，有兴趣的可以在评论区交流）")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"9","data-src":"/vuepress-blog/img/post/2023-06-15-03/9.webp",loading:"lazy"}})]),s._v(" "),n("p",[s._v("现在我们知道了，更高版本的 nodejs 需要更高版本的 node-sass，因此更新了 nodejs 之后可能不再与项目中的旧版本的 node-sass 兼容，这时候还要升级所有不兼容的 node-sass，要么就尽量不要手欠随意升级电脑上的 nodejs 的版本，以免导致不必要的麻烦。以前我就是这样，每次闲的蛋疼的时候就去 nodejs 官网升级版本，升级的还是最新发布版 (以前的自己是多么的无知)。如此导致的问题就是启动项目时报一大堆错误然后启动失败，而且网上还找不到靠谱的解决方法。后来痛定思痛，遂下定决心一探究竟，百度不行就 google，并经过多次验证可行后，最终总结出这篇文章，以便之后查阅，同时分享出来，希望对他人有所帮助。")]),s._v(" "),n("p",[s._v("至于 python 的提示，其实都是同一个问题，只要找到了有效的 binding 文件，这个问题也就随之解决了。很多人看见 python 的提示就去下载 python，然后配置环境变量，往往按照步骤操作到一半时忍无可忍最终放弃，继而再去找别的方法。我们只是在开发一个 web 项目，怎么还跟 python 扯上关系了，每次看到这种回答我就一阵狐疑。回想一下之前在开发时我的电脑上从来没安装过python，更没有配置 python 环境的过程，且我的项目也顺利开发结束了，这根本就说不通啊。可能这也是我存疑的原因吧。说到底，要多思考，善于从诸多“教程”中过滤出有效信息，不要人云亦云，要搞清楚问题的根源，这样才能避免浪费时间。")])])}),[],!1,null,null,null);a.default=e.exports}}]);