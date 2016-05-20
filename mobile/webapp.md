<meta name = "apple-mobile-web-app-capable" content = "yes" />
<meta content="black" name="apple-mobile-web-app-status-bar-style">顶部的状态条的样式。
<meta content="telephone=no" name="format-detection">
这是web模仿本地app的样式，允许全屏浏览。

#移动开发规范概述：
1.字体 
<pre>
  body {
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
}
</pre>
2."基础交互"
    设置全局样式
<pre>
a, img {
    -webkit-touch-callout: none; /* 禁止长按链接与图片弹出菜单 */
}
html, body {
    -webkit-user-select: none;   /* 禁止选中文本（如无文本选中需求，此为必选项） */
    user-select: none;
}
</pre>