(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{440:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("本文转载自："),e("a",{attrs:{href:"https://blog.csdn.net/Jo_Andy/article/details/104218652",target:"_blank",rel:"noopener noreferrer"}},[t._v("git在指定分支还原到某次提交的版本"),e("OutboundLink")],1)])]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#适用场景：在某个分支上想恢复到之前某个提交的版本，且那个版本之后提交的版本都不要了"}},[t._v("适用场景：在某个分支上想恢复到之前某个提交的版本，且那个版本之后提交的版本都不要了")])]),e("li",[e("a",{attrs:{href:"#操作步骤"}},[t._v("操作步骤:")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-切换到指定分支"}},[t._v("1. 切换到指定分支")])]),e("li",[e("a",{attrs:{href:"#_2-git-log-查看提交版本号信息"}},[t._v("2. git log 查看提交版本号信息")])]),e("li",[e("a",{attrs:{href:"#_3-git-reset-hard-版本号"}},[t._v("3. git reset --hard 版本号")])]),e("li",[e("a",{attrs:{href:"#_4-git-push-f-强制提交"}},[t._v("4. git push -f 强制提交")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"适用场景：在某个分支上想恢复到之前某个提交的版本，且那个版本之后提交的版本都不要了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适用场景：在某个分支上想恢复到之前某个提交的版本，且那个版本之后提交的版本都不要了"}},[t._v("#")]),t._v(" 适用场景：在某个分支上想恢复到之前某个提交的版本，且那个版本之后提交的版本都不要了")]),t._v(" "),e("h2",{attrs:{id:"操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤:")]),t._v(" "),e("h3",{attrs:{id:"_1-切换到指定分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-切换到指定分支"}},[t._v("#")]),t._v(" 1. 切换到指定分支")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout 分支名\n")])])]),e("h3",{attrs:{id:"_2-git-log-查看提交版本号信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-log-查看提交版本号信息"}},[t._v("#")]),t._v(" 2. git log 查看提交版本号信息")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git log \n")])])]),e("p",[t._v("像下面的 commit 后面的那一串就是版本号")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("commit a550c5581814206a2096c1a5fee1caeed01d6a30\nAuthor: test <test@sina.com>\nDate:   Tue Feb 4 00:38:15 2020 +0800\n\n    StringBuffer直接改变原字符串,char数组和字符串的转换\n\ncommit a2456b6825a4cab009d53ba8bb2cd8a4eb425f6b\nAuthor: test <test@sina.com>\nDate:   Tue Feb 4 00:23:53 2020 +0800\n")])])]),e("h3",{attrs:{id:"_3-git-reset-hard-版本号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-git-reset-hard-版本号"}},[t._v("#")]),t._v(" 3. git reset --hard 版本号")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git reset --hard 版本号\n")])])]),e("p",[t._v("比如")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git reset --hard a2456b6825a4cab009d53ba8bb2cd8a4eb425f6b\n")])])]),e("h3",{attrs:{id:"_4-git-push-f-强制提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-git-push-f-强制提交"}},[t._v("#")]),t._v(" 4. git push -f 强制提交")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git push -f\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);