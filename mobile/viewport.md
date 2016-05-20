差不多这样子 ：<meta name = "viewport" content = "..." />
meta = name + http-equiv
mobile device 通常在一个很宽的虚拟"窗口"(视口)中渲染页面，可通过平移缩放浏览不同的区域。

视口
eg : <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

可指定宽高，device-width/height 表示比例为100%时的屏幕宽/高度。
initial-scale, maximum-scale, minimum-scale 缩放 。
1.5个硬件像素显示每一个css像素。
默认比例依赖于显示密度。