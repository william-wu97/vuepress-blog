(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{487:function(t,r,e){"use strict";e.r(r);var s=e(1),o=Object(s.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("本文转载自："),e("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1580562",target:"_blank",rel:"noopener noreferrer"}},[t._v("将 svn 仓库迁移到 git 仓库"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("我找到了一个很久很久以前编写的项目，然而当时是使用 svn 进行版本管理的。然而现在的版本管理全部是 git，不愿意再装一个 svn 工具来管理这些古老的项目，于是打算将其迁移到 git 中。")]),t._v(" "),e("p",[t._v("本文介绍如何将古老的 svn 项目迁移到 git。")]),t._v(" "),e("h2",{attrs:{id:"找回-svn-仓库的-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#找回-svn-仓库的-url"}},[t._v("#")]),t._v(" 找回 svn 仓库的 url")]),t._v(" "),e("p",[t._v("如果你能记得你 svn 仓库的 url，或者这个仓库是一个纯本地仓库，那么你直接复制这个 url 就好了。")]),t._v(" "),e("p",[t._v("然而如果这是一个有 svn 远程服务器的仓库，那么你可能依然需要临时安装一下 svn 工具。我们只是为了拿回 url 而已。")]),t._v(" "),e("p",[t._v("这里我使用当时使用的小乌龟 "),e("a",{attrs:{href:"https://tortoisesvn.net/index.zh.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TortoiseSVN"),e("OutboundLink")],1),t._v("。在 svn 仓库空白处右击选择版本库浏览器（Repo-browser），小乌龟会自动定位到当前仓库所在的远程 svn 服务器的对应文件夹。")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"版本库浏览器","data-src":"/vuepress-blog/img/post/2023-09-29-01/1.webp",loading:"lazy"}})]),t._v(" "),e("p",[t._v("我们所要做的只有一件事——复制顶部那个 url。")]),t._v(" "),e("p",[t._v("得到了这个 url 后，像我这种洁癖就卸载 TortoiseSVN 了。")]),t._v(" "),e("h2",{attrs:{id:"将-svn-仓库迁移到-git-仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将-svn-仓库迁移到-git-仓库"}},[t._v("#")]),t._v(" 将 svn 仓库迁移到 git 仓库")]),t._v(" "),e("h3",{attrs:{id:"命令行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[t._v("#")]),t._v(" 命令行")]),t._v(" "),e("p",[t._v("在一个新的文件夹中，我们输入如下命令：")]),t._v(" "),e("div",{staticClass:"language-git extra-class"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("git.exe svn clone "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://svn.walterlv.com/LvYi/Timer"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".\\Walterlv.RepoFromSvn"')]),t._v("\n")])])]),e("p",[t._v("如果那个 svn 目录中包含 "),e("code",[t._v("trunk")]),t._v("、"),e("code",[t._v("branches")]),t._v(" 和 "),e("code",[t._v("tags")]),t._v(" 结构，那么可以在后面添加相应的参数以便在 clone 完成后保留分支和标签信息。")]),t._v(" "),e("div",{staticClass:"language-git extra-class"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("git.exe svn clone "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://svn.walterlv.com/LvYi/Timer"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".\\Walterlv.RepoFromSvn"')]),t._v(" -T trunk -b branches -t tags\n")])])]),e("p",[t._v("需要注意的是，上面的 "),e("code",[t._v("Walterlv.RepoFromSvn")]),t._v(" 文件夹是不允许提前存在的，如果存在将无法迁移成功。")]),t._v(" "),e("h3",{attrs:{id:"tortoisegit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tortoisegit"}},[t._v("#")]),t._v(" TortoiseGit")]),t._v(" "),e("p",[t._v("这里特地照顾一下从 "),e("a",{attrs:{href:"https://tortoisegit.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TortoiseSVN"),e("OutboundLink")],1),t._v(" 迁移来继续考虑 TortoiseGit 的小伙伴。在 TortoiseGit 中的操作是：")]),t._v(" "),e("ol",[e("li",[t._v("在某个文件夹中右键（或者 Shift+右键）")]),t._v(" "),e("li",[t._v("选择克隆")]),t._v(" "),e("li",[t._v("按照下图填写来自 url 的远程服务器 url 和本地文件夹，并打勾“从SVN版本库”")])]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"TortoiseGit 上的迁移 SVN 操作","data-src":"/vuepress-blog/img/post/2023-09-29-01/2.webp",loading:"lazy"}})]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-and-Other-Systems-Migrating-to-Git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git - Migrating to Git"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://stackoverflow.com/questions/9128344/how-to-get-svn-remote-repository-url",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to get svn remote repository URL? - Stack Overflow"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/devops/articles/perform-migration-from-svn-to-git?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[t._v("Migrate from Subversion (SVN) to Git - Microsoft Docs"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("本文会经常更新，请阅读原文： "),e("a",{attrs:{href:"https://blog.walterlv.com/post/migrating-svn-to-git.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.walterlv.com/post/migrating-svn-to-git.html"),e("OutboundLink")],1),t._v(" ，以避免陈旧错误知识的误导，同时有更好的阅读体验。")])])}),[],!1,null,null,null);r.default=o.exports}}]);