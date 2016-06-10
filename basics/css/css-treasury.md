#图解CSS3核心技术与实战

## Selector

* 基本选择器
* 层次选择器
* 伪类选择器
* 伪元素选择器
* 属性选择器

```
	-基本选择器    ==> ["ID","通配","元素","类"].map((str)=>str+"选择器");

	-层次选择器    ==> {
						  "E   F" : "匹配位于E中的F",
						  "E > F" : "匹配是父元素是E的F",
						  "E + F" : "匹配在E后的第一个同胞F",
						  "E ~ F" : "匹配位于E后的所有F"
    }

	-伪类选择器    ==>  {
						  "动态伪类" : [":link",":visited",":active",":hover",":focus"]
						  "目标伪类" : [":target"]
						  "语言伪类" : [":lang"]
						  "UI  伪类" : [":checked",":checked",":disabled"]
						  "结构伪类" : [":nth-child(n)",":nth-of-type(n)",":root",":empty"]
						  "否定伪类" : [":not([type=submit])"]
	}

	-伪元素选择器  ==> ["::first-letter","::before","::selection"]

	-属性选择器    ==> {
							"E[attr]"     : "匹配具有attr属性的E"，
							"E[attr=val]" : "匹配attr属性值为val的E",
							"E[attr|^~*&=val]" : "正则表达式"
	}
```

## Border

	-border-color
	-border-image
	-border-radius
	-box-shadow

```
	-border-image  ==>
		border-image  : none | <image> [<number>|<percentage>]{1,4} [/
					   <border-width>{1,4}] ?[stretch|repeat |round]{0,2} 
	-border-radius ==>			
		border-radius : none | 	<length> {1,4} [/<length> {1,4}]
	-box-shadow    ==> 
		box-shadow : none | [<length><length><length>?<length>? ||<color>] [,<length><length><length>?<				 length>? ||<color>]+
		`or`
		box-shadow : none | [inset x-offset y-offset blur-radius spread-radius color],[inset x-offset 				 y-offset blur-radius spread-radius color]+
```

##Background 

###CSS2.1
* background-color
* background-image 
* background-repeat 
* background-attachment   //背景是否随页面滚动
* background-position     //背景位置

###CSS3
* background-origin  //指定背景图片起点(-position起始参照点)
* background-clip    //从...裁剪背景图片
* background-size    //背景图片尺寸大小
* background-break   //内联元素背景图平铺的循环方式(不常有)

```
	-color : ["#fff","red","rgba()","hls()"]
	-image : ["ulr()"]
	-repeat : ["repeat","x/y-repeat","no-repeat"]
	-attachment : ["scroll","fixed"]
	-position : ["(50% 50%)","(center center)"]

	-origin : ["padding-box","border-box","content-box"]
	-clip : ["padding-box","border-box","content-box","text"]
	-size : ["cover","contain","auto","100%","20px"]
	-break : ["bounding-box","each-box","continuous"]

```

```
 background : [<background-color>] [,<background-image>][,<background-repeat>] [,background-attachment][,background-position]

 background-position : <percentage>||<length>||[left|center|right] [,top|center|bottom]

 background-size : auto || <length> || <percentage> ||cover ||contain
```

##Text




[正则表达式](http://www.cnblogs.com/deerchao/archive/2006/08/24/zhengzhe30fengzhongjiaocheng.html)