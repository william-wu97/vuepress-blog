(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{505:function(a,t,e){"use strict";e.r(t);var s=e(1),v=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"首先，说明一下本机配置："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首先，说明一下本机配置："}},[a._v("#")]),a._v(" 首先，说明一下本机配置：")]),a._v(" "),e("blockquote",[e("p",[a._v("CPU：i7-4720hq")]),a._v(" "),e("p",[a._v("显卡：GTX960m+intel 4600")]),a._v(" "),e("p",[a._v("声卡：alc255")]),a._v(" "),e("p",[a._v("无线网卡：博通BCM94352z(原装intel网卡无解，已拆)")])]),a._v(" "),e("h2",{attrs:{id:"镜像及efi链接地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像及efi链接地址"}},[a._v("#")]),a._v(" 镜像及EFI链接地址")]),a._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"http://bbs.pcbeta.com/viewthread-1774123-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装所用镜像原帖"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://pan.baidu.com/s/1kWZ1iXD",target:"_blank",rel:"noopener noreferrer"}},[a._v("本人的EFI分享"),e("OutboundLink")],1),a._v(" 密码：wxpv")])]),a._v(" "),e("p",[a._v("声明：本人并不是什么大神，以下所用的驱动硬件的方法全部来自别人分享的，在此向热心分享的网友表示感谢。后面具体的各硬件驱动的教程，我只贴原帖地址，然后可能只会粗略地讲一下。。。（其实只是因为我懒）")]),a._v(" "),e("p",[a._v("(PS:本人未对用不上的kext做精简，如果有强迫症受不了，请自行精简！)")]),a._v(" "),e("p",[a._v("除了要下载镜像外，还要下载帖子里的屏蔽独显的补丁（安装的时候要用到，否则会卡代码，无法进入安装界面）")]),a._v(" "),e("h2",{attrs:{id:"安装大致过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装大致过程"}},[a._v("#")]),a._v(" 安装大致过程")]),a._v(" "),e("p",[a._v("安装过程我大概讲一下，在Win下用transmac软件将镜像文件写入U盘，用分区软件如DG，打开U盘的EFI（ESP）分区下的Clover文件夹，除了带4600的config.plist文件外，全部删除，然后重命名为:"),e("code",[a._v("config.plist")]),a._v("（这些这么简单我就不多说，具体教程百度一大把）。\n然后我们进入Clover/kext/other目录下，如下图所示：")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"1","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/1.webp",loading:"lazy"}})]),a._v(" "),e("p",[a._v("删除几个kext，具体为：\n"),e("code",[a._v("CodecCommander.kext")]),a._v("      ——解决睡眠后唤醒无声问题，但不是必需的，留着反而会造成睡眠唤醒无声（详情请往下看）\n"),e("code",[a._v("VoodooHDA.kext")]),a._v("      ——万能声卡驱动，声卡我们使用alc加载原生驱动，所以不需要这个")]),a._v(" "),e("p",[a._v("OK，我们可以重启电脑，选择U盘启动，然后就能成功进入安装界面......（到这里没继续往下看的人，不要怪我，哈哈）")]),a._v(" "),e("p",[a._v("啊呸，不对，是成功卡在了"),e("code",[a._v("Service only ran for 0 seconds. Pushing respawn out by 10 second")])]),a._v(" "),e("p",[a._v("原因嘛，木有屏蔽独显，我们将前面下载的屏蔽独显的补丁解压，然后丢进Clover/ACPI/patched目录下，重启，U盘启动，跑完-v,应该就能看到安装界面了。（到这里，如果还是卡代码的话，请自行解决，本人爱莫能助）")]),a._v(" "),e("p",[a._v("注意，如果你跟我一样，用的是博通的无线网卡的话，你可能需要将  EFI/Clover/kexts/other/目录下的 "),e("code",[a._v("BrcmFirmwareData.kext")]),a._v("备份之后删除，安装完Mac再拷贝回去，否则可能会像我一样无限卡在如下图所示：")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"2","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/2.webp",loading:"lazy"}})]),a._v(" "),e("p",[a._v("怎么抹盘安装Mac，这些我不讲，装完Mac，进入桌面后，我们点击左上角的苹果标志，可以看到核显成功识别，如下图：")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"3","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/3.webp",loading:"lazy"}})]),a._v(" "),e("h2",{attrs:{id:"到此，说明一下各个硬件驱动情况："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#到此，说明一下各个硬件驱动情况："}},[a._v("#")]),a._v(" 到此，说明一下各个硬件驱动情况：")]),a._v(" "),e("blockquote",[e("p",[a._v("核显正常")]),a._v(" "),e("p",[a._v("有线网卡正常")]),a._v(" "),e("p",[a._v("博通无线网卡wifi正常，蓝牙正常")])]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"4","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/4.webp",loading:"lazy"}})]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"5","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/5.webp",loading:"lazy"}})]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"6","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/6.webp",loading:"lazy"}})]),a._v(" "),e("h3",{attrs:{id:"clover注入id驱动声卡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clover注入id驱动声卡"}},[a._v("#")]),a._v(" Clover注入id驱动声卡")]),a._v(" "),e("p",[a._v("现在，还差三卡之一的声卡，通过AppleALC+Lilu驱动原生AppleHDA来驱动它。由于EFI里已经有ApplALC.kext和Lilu.kext了，我们要做的就是\n在Clover的Device注入"),e("code",[a._v("id:3")]),a._v("，并勾上ACPI的"),e("code",[a._v("FixIPIC")]),a._v("和"),e("code",[a._v("FixHPET")]),a._v("，如下图：\n"),e("img",{staticClass:"lazy",attrs:{alt:"7","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/7.webp",loading:"lazy"}})]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"8","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/8.webp",loading:"lazy"}})]),a._v(" "),e("p",[a._v("接着我们重启电脑，可以看到状态栏的声音不再是灰色了，我们点击左上角的苹果，点击关于本机，打开系统报告选择功能拓展，可以看到AppleHDA已成功加载，如下图：\n"),e("img",{staticClass:"lazy",attrs:{alt:"9","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/9.webp",loading:"lazy"}})]),a._v(" "),e("p",[a._v("输入输出：均为内建，外放声音正常")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"10","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/10.webp",loading:"lazy"}})]),a._v(" "),e("p",[a._v("插入耳机可以自动切换~~（就是3.5mm耳机孔的音质很渣）~~\n注：后来我发现耳机孔声音渣的原因了，只需将系统偏好设置——声音里面的平衡改为左或者右就行(调到中间声音效果会不正常，莫名其妙啊。。。)")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"11","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/11.webp",loading:"lazy"}}),a._v(" "),e("s",[a._v("唯一的问题就是：睡眠唤醒后声卡无声。。。待解决")]),a._v("（删除"),e("code",[a._v("CodecCommander.kext")]),a._v("后解决）\n这里我详细说明一下，由于本人的疏忽，竟然没注意到这么简单的问题，由于本人之前安装时，只是将会影响Mac安装的kext删除了，并未对"),e("code",[a._v("Clover/kext/other")]),a._v("目录下的kext做精简，本来CodecCommander.kext是为了解决睡眠后唤醒无声问题，但是如果本来就没有这个问题，加入了反而会造成睡眠后唤醒无声这一幕。。。本人因为问题冥思苦想了很久，真是汗颜。。。")]),a._v(" "),e("p",[e("s",[a._v("至此，三卡驱动已经正常了，剩下的CPU变频、电源管理、电池电量显示，以后再补上吧（懒癌又发作了）。。。")])]),a._v(" "),e("h2",{attrs:{id:"未解决问题："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#未解决问题："}},[a._v("#")]),a._v(" 未解决问题：")]),a._v(" "),e("p",[e("strong",[a._v("注：以下使用DSDT、ssdt的来驱动的教程可能只适用于与本人相同的机型！！！")])]),a._v(" "),e("p",[a._v("亮度无法调节、保存，电池电量未显示，休眠未正常，独显未屏蔽，电源管理AppleLPC、X86PlatformPlugin、X86PlatformShim内核未加载")]),a._v(" "),e("p",[a._v("解决办法：")]),a._v(" "),e("blockquote",[e("ol",[e("li",[e("p",[a._v("将本人提供的EFI\\Clover\\ACPI\\patch文件夹下的DSDT、ssdt-9、ssdt-10、ssdt-11拷贝到你自己相应的文件夹里")])]),a._v(" "),e("li",[e("p",[a._v("然后将"),e("code",[a._v("ACPIBatteryManager.kext")]),a._v("（Clover\\kext\\other目录下）放到clover中相应的文件夹中，重启电脑后")])])])]),a._v(" "),e("p",[a._v("问题解决情况如下：")]),a._v(" "),e("blockquote",[e("p",[a._v("亮度调节正常(有小太阳)、正常睡眠状态，风扇不转，硬盘不转，开关机按钮开始呼吸灯，合盖可以关闭屏幕睡眠、电池电量显示正常、")]),a._v(" "),e("p",[a._v("AppleLPC内核成功加载，如下图：")])]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"12","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/12.webp",loading:"lazy"}})]),a._v(" "),e("p",[e("em",[e("strong",[a._v("加载X86PlatformPlugin、X86PlatformShim内核方法：")])])]),a._v(" "),e("blockquote",[e("ol",[e("li",[e("p",[a._v("将本人提供的EFI里相应目录下的"),e("code",[a._v("SSDT-xcpm.aml")]),a._v("拷贝你自己的/EFI/Clover/ACPI/patched")])]),a._v(" "),e("li",[e("p",[a._v("在config.plist下的"),e("code",[a._v("SortedOrder")]),a._v("加入SSDT-xcpm.aml即可")])])])]),a._v(" "),e("p",[e("a",{attrs:{href:"http://bbs.pcbeta.com/viewthread-1766680-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("详细情况请看原帖"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("弄完以上步骤，两个x86内核应该就能加载了，并且在电源菜单会多一项"),e("code",[a._v("接上电源适配器时启用电能小憩")]),a._v("，如下图：")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"13","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/13.webp",loading:"lazy"}}),a._v(" "),e("img",{staticClass:"lazy",attrs:{alt:"14","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/14.webp",loading:"lazy"}})]),a._v(" "),e("p",[e("strong",[a._v("现在使用软件CPU-S查看已睿频")]),a._v("，如下图：")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"15","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/15.webp",loading:"lazy"}})]),a._v(" "),e("p",[e("strong",[a._v("亮度自动保存方法：")])]),a._v(" "),e("blockquote",[e("ol",[e("li",[a._v("将SSDT-ALS0.aml拷贝到/EFI/Clover/ACPI/patched")]),a._v(" "),e("li",[a._v("在config.plist下的SortedOrder加入SSDT-ALS0.aml")])])]),a._v(" "),e("p",[a._v("[详细情况请看原帖]9http://bbs.pcbeta.com/forum.php?mod=viewthread&tid=1766672&highlight=%C1%C1%B6%C8)")]),a._v(" "),e("p",[a._v("好了，以上就是本人目前所能完善的程度，感谢阅读！")]),a._v(" "),e("p",[e("strong",[a._v("题外话：关于用HDMI外接戴尔某些显示器（如本人的Dell U2417h显示器，PS：由于楼主的显示器只是全高清的，当时没钱上2K屏，现在好后悔）出现的屏幕变色、字体显示发虚、默认颜色描述文件不正确等问题的解决办法：")])]),a._v(" "),e("blockquote",[e("p",[a._v("首先我们分析一下原因：Mac把显示器识别为电视，打开显示器的颜色菜单，我们可以看到输入颜色格式为YPbPr模式，这个是电视信号来的。如下图的显示效果：")])]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"16","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/16.webp",loading:"lazy"}})]),a._v(" "),e("p",[a._v("直接在显示器选项里更改为RGB模式会变成以下这个鸟样")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"17","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/17.webp",loading:"lazy"}})]),a._v(" "),e("p",[e("strong",[a._v("解决办法：修改显示器描述文件，强制RGB渲染。")]),a._v("\n修改后，显示器输入颜色模式为RGB时，不会出现偏色，如下图：")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"18","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/18.webp",loading:"lazy"}})]),a._v(" "),e("p",[a._v("查看硬件信息的图形/显示器选项时，可以看到显示器已强制使用RGB模式渲染\n"),e("img",{staticClass:"lazy",attrs:{alt:"19","data-src":"/vuepress-blog/img/post/Mac10-13-3-clover4391/19.webp",loading:"lazy"}})]),a._v(" "),e("p",[a._v("参考了两个帖子：")]),a._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"http://bbs.feng.com/read-htm-tid-10875744.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("外接HDMI显示器色彩空间不正确的解决方法（偏色，发虚，默认颜色描述文件不正确）"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"http://www.jianshu.com/p/6274253b78d8",target:"_blank",rel:"noopener noreferrer"}},[a._v("可能是目前解决Mac外接显示器字体发虚的最好方法"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("额，具体怎么弄，请看上面的帖子(因为我也忘了怎么弄，尴尬。。。以前弄好的有备份，我是直接拷贝进去就行)。")])])}),[],!1,null,null,null);t.default=v.exports}}]);