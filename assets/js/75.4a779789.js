(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{463:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("本文转载自："),a("a",{attrs:{href:"https://blog.csdn.net/kukulei2211/article/details/119024345",target:"_blank",rel:"noopener noreferrer"}},[t._v("js小数运算出现的问题(精度丢失)及解决办法"),a("OutboundLink")],1)])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#以下是在项目中遇到的问题"}},[t._v("以下是在项目中遇到的问题")])]),a("li",[a("a",{attrs:{href:"#案例"}},[t._v("案例")])]),a("li",[a("a",{attrs:{href:"#解决方法"}},[t._v("解决方法")])]),a("li",[a("a",{attrs:{href:"#vue中使用mathjs"}},[t._v("vue中使用mathjs")])])])]),a("p"),t._v(" "),a("h3",{attrs:{id:"以下是在项目中遇到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以下是在项目中遇到的问题"}},[t._v("#")]),t._v(" 以下是在项目中遇到的问题")]),t._v(" "),a("p",[t._v("购物车结算时，商品价格(33.01)-优惠券价格(5)，本应该是28.01，但是实际的结果是28.009999999999998\n之前真没遇到过这种问题，查了很多资料才了解到js 小数相加减是会出现精度丢失的问题")]),t._v(" "),a("h3",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),a("p",[t._v("本案例是在浏览器控制台里打印")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"1","data-src":"/vuepress-blog/img/post/2022-12-07-01/1.webp",loading:"lazy"}})]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"2","data-src":"/vuepress-blog/img/post/2022-12-07-01/2.webp",loading:"lazy"}})]),t._v(" "),a("p",[t._v("出现这种问题的原因，"),a("a",{attrs:{href:"https://www.cnblogs.com/zm-blogs/p/12909096.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看详细原因(链接)"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("原因其实就是js number类型运算都需要先将十进制转二进制\n但小数点后的位数转二进制会出现无限循环的问题，只能舍0入1，所以会出现小数点丢失问题，感兴趣的可以自己研究，链接在上面。")]),t._v(" "),a("h3",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),a("ol",[a("li",[t._v("保留小数位数toFixed()")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"3","data-src":"/vuepress-blog/img/post/2022-12-07-01/3.webp",loading:"lazy"}})]),t._v(" "),a("p",[t._v("注意：toFixed()保留完是字符串，需要转数字类型")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"4","data-src":"/vuepress-blog/img/post/2022-12-07-01/4.webp",loading:"lazy"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("可以通过先乘10的倍数，然后再除\n比如 我要保留两位小数 那我就乘100，运算完后再除100")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"5","data-src":"/vuepress-blog/img/post/2022-12-07-01/5.webp",loading:"lazy"}})]),t._v(" "),a("p",[t._v("虽然繁琐，但是有效")]),t._v(" "),a("p",[t._v("封装成方法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//num1 num2传入两个值  symbol +-*/符号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("amend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("str2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("str1Length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("str2Length\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解决整数没有小数点方法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("str1Length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("str1Length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("str2Length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("str2Length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" step"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1Length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("str2Length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("num2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("step\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("num2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("step\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" step"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("step\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("amend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("项目中解决精度丢失问题 请使用mathjs "),a("a",{attrs:{href:"https://blog.csdn.net/qq_42099097/article/details/105849475",target:"_blank",rel:"noopener noreferrer"}},[t._v("最全的Mathjs资料，js的Math已经不够用了（大佬整理的文档）"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"vue中使用mathjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue中使用mathjs"}},[t._v("#")]),t._v(" vue中使用mathjs")]),t._v(" "),a("ol",[a("li",[t._v("安装math.js")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install mathjs\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("新建math.js配置")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const $math = require('mathjs')\nexport const math = {\n  add () {\n    return comp('add', arguments)\n  },\n  subtract () {\n    return comp('subtract', arguments)\n  },\n  multiply () {\n    return comp('multiply', arguments)\n  },\n  divide () {\n    return comp('divide', arguments)\n  }\n}\n\nfunction comp (_func, args) {\n  let t = $math.chain($math.bignumber(args[0]))\n  for (let i = 1; i < args.length; i++) {\n    t = t[_func]($math.bignumber(args[i]))\n  }\n  // 防止超过6位使用科学计数法\n  return parseFloat(t.done())\n}\n\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("引入math.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" math "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/utils/math.js'")]),t._v("\n\nmath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js使用\nmath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加")]),t._v("\nmath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subtract")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//减")]),t._v("\nmath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//乘")]),t._v("\nmath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("divide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//除")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);