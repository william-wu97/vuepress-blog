(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{484:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("本文转载自："),a("a",{attrs:{href:"https://blog.csdn.net/qq_38998250/article/details/108663438",target:"_blank",rel:"noopener noreferrer"}},[t._v("uniapp scroll-view 回到顶部"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("点击tab切换时，我们希望列表从顶部开始"),a("a",{attrs:{href:"https://uniapp.dcloud.io/component/scroll-view?id=scroll-view",target:"_blank",rel:"noopener noreferrer"}},[t._v("scroll-view"),a("OutboundLink")],1),t._v(" 提供了scroll-top属性")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"1","data-src":"/vuepress-blog/img/post/2023-09-05-01/1.webp",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"scroll-top设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scroll-top设置"}},[t._v("#")]),t._v(" scroll-top设置")]),t._v(" "),a("p",[t._v("只是设置scroll-top时不好使的，这里需要注意@scroll 方法")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("//template\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scroll-view")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":scroll-top")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scroll-y")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scroll-Y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@scroll")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scroll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("滚动区域"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("     \n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scroll-view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n\n// script\n\nexport default {\n    data() {\n        return {\n            scrollTop: 0,\n            oldScrollTop:0\n        }\n    },\n    methods: {\n        scroll (e) {\n            //记录scroll  位置\n            this.oldScrollTop = e.detail.scrollTop\n        },\n        goTop (e) {\n            //视图会发生重新渲染\n            this.scrollTop = this.oldScrollTop\n            //当视图渲染结束 重新设置为0\n            this.$nextTick(() =>{\n                this.scrollTop = 0\n            });\n            uni.showToast({\n                icon:"none",\n                title:"纵向滚动 scrollTop 值已被修改为 0"\n            })\n        }\n    }\n}\n\n```')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);