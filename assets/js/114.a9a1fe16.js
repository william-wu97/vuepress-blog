(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{501:function(o,t,_){"use strict";_.r(t);var v=_(1),i=Object(v.a)({},(function(){var o=this,t=o.$createElement,_=o._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[_("h2",{attrs:{id:"重刷面具步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重刷面具步骤"}},[o._v("#")]),o._v(" 重刷面具步骤")]),o._v(" "),_("ol",[_("li",[o._v("准备好当前系统版本的卡刷包，注意系统版本一定要一致")]),o._v(" "),_("li",[o._v("解压提取"),_("code",[o._v("payload.bin")]),o._v("文件")]),o._v(" "),_("li",[o._v("使用"),_("code",[o._v("payload_dumper")]),o._v("解包"),_("code",[o._v("payload.bin")]),o._v("得到boot.img或者init_boot.img")]),o._v(" "),_("li",[o._v("打开面具App，点击安装，安装方式使用"),_("code",[o._v("选择并修补一个文件")]),o._v("，修补上一步拿到的boot.img或者init_boot.img文件")]),o._v(" "),_("li",[o._v("将修补后得到的"),_("code",[o._v("magisk_patched-xxx.img")]),o._v("传到电脑上备用")]),o._v(" "),_("li",[o._v("使用数据线连接电脑和手机，使用"),_("code",[o._v("adb reboot fastboot")]),o._v("进入"),_("code",[o._v("fastboot")]),o._v("模式")]),o._v(" "),_("li",[_("code",[o._v("fastboot")]),o._v("模式下，使用"),_("code",[o._v("fastboot flash 分区名 镜像名")]),o._v("命令刷入镜像，即"),_("code",[o._v("fastboot flash boot magisk_patched-xxx.img")]),o._v("或者"),_("code",[o._v("fastboot flash init_boot magisk_patched-xxx.img")]),o._v("刷入镜像")]),o._v(" "),_("li",[o._v("刷入成功之后，"),_("code",[o._v("fastboot reboot")]),o._v("即可重启进入系统")])]),o._v(" "),_("h2",{attrs:{id:"boot和init-boot有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#boot和init-boot有什么区别"}},[o._v("#")]),o._v(" boot和init_boot有什么区别")]),o._v(" "),_("ul",[_("li",[o._v("boot分区：通常包含Android系统的引导程序（bootloader）和内核（kernel）。它负责在设备启动时加载内核和初始的ramdisk，是系统启动的第一阶段。")]),o._v(" "),_("li",[o._v("init_boot分区：从Android 13开始，为了优化启动速度和安全性，通用ramdisk被从boot映像中移除，并单独放置在init_boot映像中。这意味着init_boot分区包含了系统启动初期所需的关键服务和脚本，用于初始化系统的关键组件。")])]),o._v(" "),_("p",[_("strong",[o._v("需要注意的是，前面提到Android 13版本是指内核的安卓版本，而不是指系统的安卓版本")])]),o._v(" "),_("p",[_("strong",[o._v("如果不小心将"),_("code",[o._v("init_boot.img")]),o._v("或者修补过的"),_("code",[o._v("magisk_patched-xxx.img")]),o._v("刷入了"),_("code",[o._v("boot")]),o._v("分区导致一直卡在"),_("code",[o._v("fastboot")]),o._v("模式，将第三步解包得到的原版"),_("code",[o._v("boot.img")]),o._v("重新刷入"),_("code",[o._v("boot")]),o._v("分区即可")])])])}),[],!1,null,null,null);t.default=i.exports}}]);