    像素 ： 物理像素，css像素
    PPI pixel per inch 像素密度，值越高，图像越清晰，点阵显示器
    每个像素包括3个子像素(r,g,b)
    当页面放大的时候，device-width没变，css width值没变 : 是css的像素值变了，即css像素和device像素之间的对应关系扩大了。(fn关系)
    CSS 像素值永远是一个相对值 。

    PPI的像素值 指的是device像素(物理像素)
    计算PPI : 总像素数/总面积 = 长像素数/长 = 宽像素数/宽 (长和宽方向的分量都一样)
    如何表达和判断物理像素和CSS像素不平等：
    window.devicePiexelRatio = physical pixels / dips
    (dips = device-independent pixels ：CSS像素) 放大时ratio会随之 改变
    dppx = dots per pixel 微观描述每个像素的点阵数
    dpi 当讨论一台设备的像素密度的时候，dpi和ppi所形容的是同一个意思。都是像素密度(每英寸的像素数)。但是当媒体查询的时候则应该使用dppx 。但是当媒体查询的时候则应该使用dppx。

    默认，body的宽度是html的100% ，而html的宽度是浏览器的100%
    但是实际上，默认html的宽度是视口的100% ：viewport。 在desktop上viewport = 浏览器宽度。

    但是在移动端不成立，因为大部分手机的分辨率差不多400px。
    例如IPhone的safari上以980px绘制页面。
    此时可以通过<meta name = "viewport"> 修改 而content 以‘,’分割属性。
    其中device-width不代表物理像素值而是CSS分辨率数值。

    viewport = layout viewport + visualport ;

    DPI PPI 意味什么？如果不被打印出来，形成图片的话什么都不意味着。

    印刷的原理是通过半色调技术CMYK.


