(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{516:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("本文转载自："),s("a",{attrs:{href:"https://blog.csdn.net/weixin_34242698/article/details/113077881",target:"_blank",rel:"noopener noreferrer"}},[t._v("html接收model值_Vue3中v-model的使用"),s("OutboundLink")],1)])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#vue2-x中v-model的使用以及问题"}},[t._v("Vue2.x中v-model的使用以及问题")]),s("ul",[s("li",[s("a",{attrs:{href:"#v-model在vue2-x中的使用方式"}},[t._v("v-model在vue2.x中的使用方式")])]),s("li",[s("a",{attrs:{href:"#vue2-x中v-model的问题"}},[t._v("vue2.x中v-model的问题")])])])]),s("li",[s("a",{attrs:{href:"#vu3中v-model的使用"}},[t._v("Vu3中v-model的使用")]),s("ul",[s("li",[s("a",{attrs:{href:"#vue3中v-model的基础使用"}},[t._v("Vue3中v-model的基础使用")])]),s("li",[s("a",{attrs:{href:"#更换v-model的参数"}},[t._v("更换v-model的参数")])])])])])]),s("p"),t._v(" "),s("p",[t._v("使用Vue的开发人员肯定对Vue2中的v-model非常熟悉，大家平常写起来也非常顺手，但是v-model在vue3中发生了较大的变化。这里简单阐述一下Vue3中v-model新语法的使用以及为什么有新的语法。")]),t._v(" "),s("h2",{attrs:{id:"vue2-x中v-model的使用以及问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x中v-model的使用以及问题"}},[t._v("#")]),t._v(" Vue2.x中v-model的使用以及问题")]),t._v(" "),s("h3",{attrs:{id:"v-model在vue2-x中的使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-model在vue2-x中的使用方式"}},[t._v("#")]),t._v(" v-model在vue2.x中的使用方式")]),t._v(" "),s("p",[t._v("我们首先看一下vue2.x中"),s("code",[t._v("v-model")]),t._v("的使用。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v('<ChildComponent v-model = "title />\n')])])]),s("p",[t._v("它实际上是下面这种写法的简写：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ChildComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title = $event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("也就是说，它实际上是传递一个属性"),s("code",[t._v("value")]),t._v("，然后接收一个"),s("code",[t._v("input")]),t._v("事件。")]),t._v(" "),s("h3",{attrs:{id:"vue2-x中v-model的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x中v-model的问题"}},[t._v("#")]),t._v(" vue2.x中v-model的问题")]),t._v(" "),s("p",[t._v("虽然"),s("code",[t._v("v-model")]),t._v("在vue2.x中使用起来很方便，也很简单，但是它存在一个问题：那就是**传递下去的必须是value值，接收的也必须是input事件。**事实上，并不是所有的元素都适合传递"),s("code",[t._v("value")]),t._v("，比如"),s("code",[t._v('<input type="checkbox">')]),t._v("，当type属性的值为"),s("code",[t._v("checkbox")]),t._v("是，实际上是"),s("code",[t._v("checked")]),t._v("这个属性的存在用来表示是否被选中，而value值是另外的含义。而且有些时候，一些组件并不是通过input来进行触发事件。也就是说"),s("code",[t._v("value")]),t._v("和"),s("code",[t._v("input")]),t._v("事件在大多数情况下能够适用，但是存在"),s("code",[t._v("value")]),t._v("另有含义，或者不能使用"),s("code",[t._v("input")]),t._v("触发的情况，这时候我们就不能使用"),s("code",[t._v("v-model")]),t._v("进行简写了。为了解决这个问题，尤雨溪在Vue2.2中，引入了model组件选项，也即是说你可以通过model来指定"),s("code",[t._v("v-model")]),t._v("绑定的值和属性.如下所示：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ChildComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("在子组件中这样设置：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    prop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// v-model绑定的属性名称")]),t._v("\n    event"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// v-model绑定的事件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n    value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value跟v-model无关")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// title是跟v-model绑定的属性")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Default title'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("通过上面的代码，我们可以看到通过设置model选项，我们就可以直接使用指定的属性和事件，而不需要必须使用"),s("code",[t._v("value")]),t._v("和"),s("code",[t._v("input")]),t._v("了，"),s("code",[t._v("value")]),t._v("和"),s("code",[t._v("input")]),t._v("可以另外它用了。")]),t._v(" "),s("h2",{attrs:{id:"vu3中v-model的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vu3中v-model的使用"}},[t._v("#")]),t._v(" Vu3中v-model的使用")]),t._v(" "),s("h3",{attrs:{id:"vue3中v-model的基础使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue3中v-model的基础使用"}},[t._v("#")]),t._v(" Vue3中v-model的基础使用")]),t._v(" "),s("p",[t._v("我们通过上面知道vue2.x中既然"),s("code",[t._v("v-model")]),t._v("的主要原因是由于"),s("code",[t._v("value")]),t._v("和"),s("code",[t._v("input")]),t._v("事件可能另有它用，那么我们可不可以直接使用另外的属性和方法，而不需要去通过"),s("code",[t._v("model")]),t._v("进行定义。vue3中就实现了这个功能，"),s("code",[t._v("v-model")]),t._v("绑定的不再是"),s("code",[t._v("value")]),t._v("，而是"),s("code",[t._v("modelValue")]),t._v("，接收的方法也不再是"),s("code",[t._v("input")]),t._v("，而是"),s("code",[t._v("update:modelValue")]),t._v("。使用方法如下：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ChildComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("它是下面这种写法的简写：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ChildComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":modelValue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("@update:")]),t._v("modelValue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title = $event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在子组件中写法是：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ValidateInput"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        modelValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// v-model绑定的属性值")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updateValue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" KeyboardEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update:modelValue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("targetValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递的方法")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("也就是说vue3中，"),s("code",[t._v("value")]),t._v("改成了"),s("code",[t._v("modelValue")]),t._v("，"),s("code",[t._v("input")]),t._v("方法了改成"),s("code",[t._v("update:modelValue")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"更换v-model的参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更换v-model的参数"}},[t._v("#")]),t._v(" 更换v-model的参数")]),t._v(" "),s("p",[t._v("vue3中使用了"),s("code",[t._v("modelValue")]),t._v("来替代"),s("code",[t._v("value")]),t._v("，但是"),s("code",[t._v("modelValue")]),t._v("不太具备可读性，在子组件的"),s("code",[t._v("props")]),t._v("中看到这个都不知道是什么。 因此，我们希望能够更加见名知意。可以通过:xxx传递参数xxx，更改名称，而不是像vue2中使用"),s("code",[t._v("model")]),t._v("选项。使用方式如下：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ChildComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-model:")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("那么在子组件中，就可以使用title代替"),s("code",[t._v("modelValue")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ValidateInput"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// modelValue:String,")]),t._v("\n        title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// title替代了modelValue")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updateValue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" KeyboardEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//   context.emit("update:modelValue",targetValue);   // 传递的方法')]),t._v("\n          context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update:title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("targetValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递的方法")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("也就是说，我们最终的使用方法是：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ChildComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-model:")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n// 或者\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ChildComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("@update:")]),t._v("title")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title = $event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("好了，到目前为止，我们介绍了vue2中的v-model的使用以及问题，vue3中v-model的新的使用语法。赶快去体验vue3的使用吧。")])])}),[],!1,null,null,null);a.default=n.exports}}]);