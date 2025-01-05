(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{465:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("本文转载自："),s("a",{attrs:{href:"https://blog.csdn.net/qq_43476485/article/details/126343439",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决从OpenCore引导的Mac OS Monterey 12.5 系统SIP禁用问题"),s("OutboundLink")],1)])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#写在开头"}},[t._v("写在开头")])]),s("li",[s("a",{attrs:{href:"#mac-os-sip"}},[t._v("Mac OS SIP")]),s("ul",[s("li",[s("a",{attrs:{href:"#查看sip状态"}},[t._v("查看SIP状态")])])])]),s("li",[s("a",{attrs:{href:"#通过opencore引导的-macos-关闭sip的一般操作"}},[t._v("通过OpenCore引导的MacOS关闭SIP的一般操作")]),s("ul",[s("li",[s("a",{attrs:{href:"#通用方法-任何系统下都可操作-："}},[t._v("通用方法(任何系统下都可操作)：")])])])]),s("li",[s("a",{attrs:{href:"#相关问题及其解决方案"}},[t._v("相关问题及其解决方案")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-opencore中没有allowtogglesip关键字或重启之后sip还是enabled"}},[t._v("1. OpenCore中没有AllowToggleSip关键字或重启之后SIP还是enabled")])]),s("li",[s("a",{attrs:{href:"#_2-重启后sip又变为enabled或每次开机都需要在引导界面选择禁用sip"}},[t._v("2. 重启后SIP又变为enabled或每次开机都需要在引导界面选择禁用SIP")])]),s("li",[s("a",{attrs:{href:"#_3-一通操作后sip状态显示为-unknown"}},[t._v("3. 一通操作后SIP状态显示为“Unknown”")])])])]),s("li",[s("a",{attrs:{href:"#写在最后"}},[t._v("写在最后")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"写在开头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在开头"}},[t._v("#")]),t._v(" 写在开头")]),t._v(" "),s("p",[t._v("Mac OS无论是外观、功能以及稳定性上都较为出色，However，由于Mac OS仅搭载于Apple自家的设备，便诞生了黑苹果，在非Apple家的设备上运行Mac OS，由于黑苹果一般使用OpenCore和Clover进行引导，因此一些操作例如"),s("code",[t._v("SIP")]),t._v("的禁用与原生的Mac设备有所区别。")]),t._v(" "),s("p",[t._v("本文方法适用于使用OpenCore引导的Mac系统，列出了本人实际调整黑苹果的过程中遇到的关于"),s("strong",[t._v("禁用SIP")]),t._v("的相关问题，并就这些问题提出一些解决办法，希望对一些没有Apple设备但希望体验到Mac OS系统的朋友有一定帮助。")]),t._v(" "),s("h2",{attrs:{id:"mac-os-sip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac-os-sip"}},[t._v("#")]),t._v(" Mac OS SIP")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"1","data-src":"/vuepress-blog/img/post/2023-03-04-01/1.webp",loading:"lazy"}})]),t._v(" "),s("p",[t._v("Mac OS系统的SIP（System Integrity Protection）即（系统完整性保护）是OS X El Capitan及更高版本所采用的一项安全技术，这项技术能够帮助用户防止潜在的恶意软件修改Mac上受保护的文件和文件夹。SIP系统完整性保护可以限制root用户帐户，以及root用户能够在Mac系统的受保护部分完成的操作。")]),t._v(" "),s("p",[t._v("有时候，在Mac安装的软件打开后会遇到提示 “xxxx”因为出现问题而无法打开……，特别是一些破解过的软件。那么这个时候就需关闭SIP再来运行软件。")]),t._v(" "),s("h3",{attrs:{id:"查看sip状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看sip状态"}},[t._v("#")]),t._v(" 查看SIP状态")]),t._v(" "),s("h4",{attrs:{id:"方法一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[t._v("#")]),t._v(" 方法一")]),t._v(" "),s("p",[t._v("在终端输入:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("csrutil status\n")])])]),s("p",[t._v("终端会输出相关信息，其中，“System Integrity Protection status:”便是SIP的状态：")]),t._v(" "),s("p",[s("strong",[t._v("SIP启用")]),t._v("： System Integrity Protection status: "),s("strong",[t._v("enabled")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("SIP已禁用")]),t._v("：System Integrity Protection status: "),s("strong",[t._v("disabled")]),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"方法二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[t._v("#")]),t._v(" 方法二")]),t._v(" "),s("p",[t._v("打开“系统信息”应用程序（单击左上角的选择“关于Mac电脑”再点击“系统信息”或按住Option键并单击选择“系统信息”）")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"2","data-src":"/vuepress-blog/img/post/2023-03-04-01/2.webp",loading:"lazy"}})]),t._v(" "),s("p",[t._v("左侧列表点击“软件”之后，就可在右侧看到“系统完整性保护”信息显示“已启用”或“已禁用”。")]),t._v(" "),s("h2",{attrs:{id:"通过opencore引导的macos关闭sip的一般操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过opencore引导的macos关闭sip的一般操作"}},[t._v("#")]),t._v(" 通过OpenCore引导的"),s("code",[t._v("MacOS")]),t._v("关闭SIP的一般操作")]),t._v(" "),s("p",[s("strong",[t._v("注：")])]),t._v(" "),s("p",[s("strong",[t._v("1. 本人OpenCore使用版本为0.7.8，之后版本不保证相关的关键字（key）一致，若出现新版本无兼容问题，本人会在下一个大标题对注意到的问题提出解决方法")])]),t._v(" "),s("p",[s("strong",[t._v("2. 此处直接在EFI引导分区中进行操作，建议先备份需要修改的文件，若出现MacOS无法开机的情况请使用windows（如果有双系统）、winpe 或mac os recovery 挂载EFI分区并恢复相关文件")])]),t._v(" "),s("h3",{attrs:{id:"通用方法-任何系统下都可操作-："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用方法-任何系统下都可操作-："}},[t._v("#")]),t._v(" 通用方法(任何系统下都可操作)：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在引导分区按以下次序进入目录："),s("strong",[t._v("EFI引导分区 >> EFI文件夹 >> OC文件夹")])])]),t._v(" "),s("li",[s("p",[t._v("在OC文件夹中找到 "),s("strong",[t._v("config.plist")]),t._v(" 文件，用文本编辑器打开（先备份！！！）")])]),t._v(" "),s("li",[s("p",[t._v("搜索字符串 "),s("strong",[t._v("sip")]),t._v(" 或 "),s("strong",[t._v("AllowToggleSip")]),t._v(" 并将其值设置为 "),s("strong",[t._v("true")]),t._v(" ：")])])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"3","data-src":"/vuepress-blog/img/post/2023-03-04-01/3.webp",loading:"lazy"}})]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[t._v("重启进入OpenCore引导界面按 "),s("strong",[t._v("空格键")]),t._v(" ，可以看到启用或禁用SIP的选项，此时选中这个选项按Enter(回车键)让下面的文字变为"),s("strong",[t._v("disable")]),t._v("，再选择Mac正常重启")])]),t._v(" "),s("li",[s("p",[t._v("重启后理论上SIP会被禁用掉")])])]),t._v(" "),s("h2",{attrs:{id:"相关问题及其解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关问题及其解决方案"}},[t._v("#")]),t._v(" 相关问题及其解决方案")]),t._v(" "),s("h3",{attrs:{id:"_1-opencore中没有allowtogglesip关键字或重启之后sip还是enabled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-opencore中没有allowtogglesip关键字或重启之后sip还是enabled"}},[t._v("#")]),t._v(" 1. OpenCore中没有AllowToggleSip关键字或重启之后SIP还是enabled")]),t._v(" "),s("p",[t._v("首先，本人注意到高版本的openCore可能没有AllowToggleSip了，其次，按上述操作仍可能出现没有禁用SIP的情况，这个时候可以试试进入recovery进行操作：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("首先在开机OpenCore的引导界面按 "),s("strong",[t._v("空格键")]),t._v(" ，选中 "),s("strong",[t._v("recovery")]),t._v(" 按回车进入recovery，")])]),t._v(" "),s("li",[s("p",[t._v("在上方状态栏上点击 "),s("strong",[t._v("实用工具")]),t._v(" 再点击 "),s("strong",[t._v("终端")]),t._v("，在终端中输入：")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("csrutil authenticated-root disable\ncsrutil disable\nreboot\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("重启后进入Mac系统")])]),t._v(" "),s("h3",{attrs:{id:"_2-重启后sip又变为enabled或每次开机都需要在引导界面选择禁用sip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-重启后sip又变为enabled或每次开机都需要在引导界面选择禁用sip"}},[t._v("#")]),t._v(" 2. 重启后SIP又变为enabled或每次开机都需要在引导界面选择禁用SIP")]),t._v(" "),s("p",[t._v("在一次正常进入MacOS且SIP禁用成功时，进行如下操作：")]),t._v(" "),s("ol",[s("li",[t._v("在终端输入")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("nvram -xp\n")])])]),s("p",[t._v("会输出一大堆参数，在其中找到 "),s("strong",[t._v("csr-active-config")]),t._v(" 如下：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"4","data-src":"/vuepress-blog/img/post/2023-03-04-01/4.webp",loading:"lazy"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("将其value（及与之间到内容，比如上图代表我的是fwIAA==） 复制下来。")])]),t._v(" "),s("li",[s("p",[t._v("按上一个标题的操作方法打开 "),s("strong",[t._v("config.plist")]),t._v(" 文件，找到关键词 "),s("strong",[t._v("csr-active-config")]),t._v(" ，可能有多个匹配结果，选择下一行带标签的，将步骤2复制的值粘贴进去覆盖掉原值，如图：")])])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"5","data-src":"/vuepress-blog/img/post/2023-03-04-01/5.webp",loading:"lazy"}})]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("保存重启后，即使开机引导界面不进行SIP禁用操作，SIP仍为 "),s("strong",[t._v("disabled")]),t._v(" 状态。")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"6","data-src":"/vuepress-blog/img/post/2023-03-04-01/6.webp",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"_3-一通操作后sip状态显示为-unknown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-一通操作后sip状态显示为-unknown"}},[t._v("#")]),t._v(" 3. 一通操作后SIP状态显示为“Unknown”")]),t._v(" "),s("p",[s("strong",[t._v("操作方法：先将csr-active-config设置为AAAAAA==（专用工具内设为00000000），再按上面流程来")])]),t._v(" "),s("p",[s("strong",[t._v("请注意：")])]),t._v(" "),s("p",[t._v("不同Mac系统版本的 "),s("strong",[t._v("csr-active-config")]),t._v(" 值可能不同，所以，"),s("strong",[t._v("不要盲目去抄网络上的值，特别的较高版本的系统")]),t._v("，老版本的对应值请参考(英文网页)："),s("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/troubleshooting/extended/post-issues.html#disabling-sip",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dortania.github.io/OpenCore-Install-Guide/troubleshooting/extended/post-issues.html#disabling-sip"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("本人认为，最保险的做法是按上述流程走，先禁用自己电脑的SIP，再查询自己电脑的SIP禁用状态下的 "),s("strong",[t._v("csr-active-config")]),t._v(" 值，最后填进OpenCore引导的配置文件，以保证开机可以自动禁用。")]),t._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),s("p",[t._v("最后，我谨申明一点，破解软件行为是对软件开发者及其劳动的极其不尊重，因此，本博客仅就SIP禁用及其相关的技术内容进行了讨论，对于SIP禁用引起的系统故障或借此进行的任何行为所引发的后果，本人不会对此承担任何责任，并在此提倡有条件的用户使用正版软件。")])])}),[],!1,null,null,null);a.default=r.exports}}]);