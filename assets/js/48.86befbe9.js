(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{438:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("本文转载自："),s("a",{attrs:{href:"https://blog.csdn.net/Yukinoshita_kino/article/details/117259198",target:"_blank",rel:"noopener noreferrer"}},[t._v("the ＞＞＞ and /deep/ combinators have been deprecated. Use :deep() instead终端报该警告的解决办法"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"一-项目环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-项目环境"}},[t._v("#")]),t._v(" 一. 项目环境")]),t._v(" "),s("p",[t._v("项目版本是vue3.0")]),t._v(" "),s("h2",{attrs:{id:"二-报出的警告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-报出的警告"}},[t._v("#")]),t._v(" 二. 报出的警告")]),t._v(" "),s("ol",[s("li",[t._v("当css样式为这样写时")])]),t._v(" "),s("div",{staticClass:"language-less extra-class"},[s("pre",{pre:!0,attrs:{class:"language-less"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('<style lang="less" scoped>\n/deep/ .ant-table-tbody > tr > td,\n/deep/ .ant-table-thead > tr > th')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n<"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style>\n")])])]),s("p",[t._v("终端报以下警告：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"1","data-src":"/vuepress-blog/img/post/2021-10-17-02/1.webp",loading:"lazy"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("当css样式为这样写时:")])]),t._v(" "),s("div",{staticClass:"language-less extra-class"},[s("pre",{pre:!0,attrs:{class:"language-less"}},[s("code",[t._v("<style lang="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"less"')]),t._v(" scoped>\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一种")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("::v-deep .ant-table-tbody > tr > td,\n::v-deep .ant-table-thead > tr > th")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二种")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":deep .ant-table-tbody > tr > td,\n:deep .ant-table-thead > tr > th")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n<"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style>\n")])])]),s("p",[t._v("终端均会报以下警告：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"2","data-src":"/vuepress-blog/img/post/2021-10-17-02/2.webp",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"二-解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-解决办法"}},[t._v("#")]),t._v(" 二. 解决办法")]),t._v(" "),s("p",[t._v("以下四种写法均不会报出警告。")]),t._v(" "),s("div",{staticClass:"language-less extra-class"},[s("pre",{pre:!0,attrs:{class:"language-less"}},[s("code",[t._v("<style lang="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"less"')]),t._v(" scoped>\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一种")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":v-deep .ant-table-tbody > tr > td,\n:v-deep .ant-table-thead > tr > th")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二种")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("::v-deep(.ant-table-tbody > tr > td),\n::v-deep(.ant-table-thead > tr > th)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三种")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":v-deep(.ant-table-tbody > tr > td),\n:v-deep(.ant-table-thead > tr > th)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第四种")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":deep(.ant-table-tbody > tr > td),\n:deep(.ant-table-thead > tr > th)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n<"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style>\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);