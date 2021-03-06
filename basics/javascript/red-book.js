/**
 * 值与引用
 *
 * 变量间复制时，复制基本类型值和引用类型值存在不同。
 * 基本类型 (Null, Undefined, Number, Boolean, String)，复制时开辟新空间储存值复制源的值。
 *         两者独立。更改一个，另一个不受影响。
 * 复杂类型(Object, Map, Set) 赋值时传递引用(指向目标的指针)。所以两者都是引用。指向同一个地方。
 *         所以改变一个，另一个 必然改变。 
 *-------------------------------------------------------------------------------------------------
 *
 * 当被当做函数参数传递时，只有值传递，即将源内容拷贝一份(基本类型拷贝值，复杂类型拷贝引用)，传递给形参。
 * 
 * ！！！！只有值传递！！！！
 * 
 * 而当复杂类型被传递进函数，因为内部改变而导致外部改变，所以被#错误#的认为是引用传递，并不是。
 * 
 * 解释 :   1.若#基本类型#传递进函数，内部修改而导致外部变化的话，才是引用传递。
 * 			2.#复杂类型#传递进函数，内部修改而导致外部变化，不能用来判断值传递还是引用传递。
 * 			3.	function setName(obj){
 * 					obj.name = 'old name';     Ⅰ
 * 				 	obj = new Object();		   Ⅱ	
 * 				  	obj.name = 'new name';     Ⅲ
 * 			    }
 * 			    var person = {};
 * 		 	   setName(person); //person.name === 'old name'; √
 *
 * 				//值传递结果 : 'old name'，因为 Ⅱ中，obj被赋为新对象，obj为引用，
 * 				//             此时则被指向另一个对象，对新对象的操作对原对象没卵用。 
 * 				//引用传递  : 如果是引用传递的话，obj所代表的原对象的地址当内部内容被 'new Object' 代替时.
 * 				//            对obj的操作则应该等同于对外部的person操作。
 *
 * 结论 ：传参只有值传递，而对于复杂类型的值传递和引用传递，很明显的区别就是对 '=' (赋值号)的处理。
 * -------------------------------------------------------------------------------------------------
 * -------------------------------------------------------------------------------------------------
 * 
 * 每个执行环境都有一个变量对象与之对应，变量对象储存执行环境的所有变量
 * 当执行环境是function时，则将其活动对象当做变量对象作为变量对象。刚开始活动对象只有一个变量 (arguments)
 * 
 * call, apply, bind : 
 * call,apply 调用完立刻执行。
 * bind : 返回一个绑定了obj的新函数，而不会立刻调用。
 * -------------------------------------------------------------------------------------------------
 * -------------------------------------------------------------------------------------------------
 *
 * Object : 数据属性和访问器属性
 * 数据属性   : [[Configurable]], [[Enumerable]], [[Writable]], [[Value]]
 * 访问器属性 : [[Configurable]], [[Enumerable]], [[Get]], [[Set]]
 *
 * [[Configurable]] : 能否通过delete删除属性并重新定义。或者能否将对象在数据属性和访问器属性间互换。默认true。
 * [[Enumerable]]   : 能否通过 for-in 循环访问到该属性。默认true。
 * [[Writable]]     : 能否修改这个值的属性。默认true。
 * [[Value]]        : 访问和修改值的位置 //如果 Writable = false 时，它的值不论怎么修改，都不会变。默认undefined
 * [[Get]]          : 读取调用的函数 默认undefined
 * [[Set]]          : 写入调用的函数 默认undefined
 * 
 *-------------------------------------------------------------------------------------------------
 *
 * 修改属性的默认特性是用Object.defineProperty(obj, 'name',{writable : false,....});
 * 读取属性的特性用Object.getOwnPropertyDescriptor(obj,'name');
 * -------------------------------------------------------------------------------------------------
 *
 * 创建对象的方法 : 
 * --1.工厂模式          : 只用工厂模式
 * --2.构造函数模式      : 只用构造模式
 * --3.原型模式          : 只用原型模式
 * --4.组合构造函数和原型模式  : 2 + 3 组合
 * --5.动态原型模式      : function(name,age){this.name=name;this.age=age;if(!this.sayName){Person.prototype.sayName = ()=>{}}}
 * --6.寄生构造函数模式  : function(name, id){var o = {};o.name=name;o.id=id; return o;}
 * --7.稳妥构造函数模式  : function(name){var o = {};o.id = 1; o.sayName = function(){alert(name)} return o;}
 *
 * -------------------------------------------------------------------------------------------------
 *
 * 继承 :
 * --1.原型链继承方法 : 缺点 ==> ①原型属性会被共享。②子类实例化的时候不能向父类的构造传递参数。
 * --2.借用构造函数 :   基本思想 ==> 子类的构造内部调用超类型的构造，function Sub(n1, n2){Super.call(n1, n2);}
 * 					    缺点 ==> 无法避免构造函数模式。
 * --3.组合继承     :   基本思想 ==> 借用构造函数 + 原型链 ==> ①借用构造 : Super.call 如 ↑ ②原型链sub.prototype = new Super();
 * --4.原型式继承   :   function(o){function F(){}; F.prototype = o; return new F();}
 * --5.寄生式继承   :   function(o){var clone = Object(origin); clone.sayName = ()=>{}; return clone;}
 * --6.寄生组合继承 :   基本思想 ==> (与组合不同点) 不必为了子类型的原型而调用父的构造。
 *                      function(sub,sup){var prototype = Object(sup.prototype); prototype.constructor = sub; sub.prototype = prototype;}
 *
 *-------------------------------------------------------------------------------------------------
 *
 * 样式表 :
 * CSSSyleSheet : 
 * <link>  是 HTMLLinkElement 的实例
 * <style> 是 HTMLStyleElement 的实例  
 * 但是CSSStyleSheet(只读) 是表示样式表的类，而不会管这些样式表在文档中是如何定义的。
 * 判断浏览器是否支持DOM2 : document.implementation.hasFeature("StyleSheets","2.0");
 * -------------------------------------------------------------------------------------------------
 *
 * 元素大小 :
 * 
 * --1.偏移量:  offsetLeft, offsetTop     元素的左(上)外边框到 包含元素的左(上)内边框之间的像素距离。
 * 				offsetHeight, offsetWidth 元素在竖直(水平)方向上占用的空间大小)，包括:高度，滚动条高度和边框
 * 
 * --2.客户区大小 : clientWidth, clientHeight : 内容 + 内边距
 * --3.滚动大小   : scrollWidth, scrollHeight : 没滚动条 this==clientWidth，有滚动条则包括呗。:实际大小
 * 					scrollLeft, scrollTop     : 被隐藏在内容区域左(上)方的像素数。
 *
 * -------------------------------------------------------------------------------------------------
 *
 * 事件类型 :
 *
 * --1.UI事件    ==> load(包括img > load)，resize、scroll 
 * --2.焦点事件  ==> focus、blur、focusin、focusout
 * --3.鼠标事件  ==> click、dbclick、mousedown、mouseup、mouseover、mousemove(click前提是连续触发mousedown、mouseup)
 * --4.滚轮事件  ==> mousewheel
 * --5.文本事件  ==> textInput(编辑区的输入按键才触发 ，data属性，inputMethod属性)
 * --6.键盘事件  ==> keydown(任意键)、keypress(字符键)、keyup
 * --7.合成事件  ==> IME输入，通常按住多个键，最终只会生成一个字符 compositionstart/update/end
 * --8.变动事件  ==> DOM for XML
 *
 * --0.事件event 
 * 		(1).位置 : clientX/Y、pageX/Y、screenX/Y
 * 		(2).修改键 : keys : altKey、shiftKey、ctrlKey、metaKey...
 * 		(3).键码 : keyCode : ←↑→↓(37-40) enter(13) shift-ctrl-alt(16-18) ESC(27)
 *
 * --0.0.mobileDevice
 *
 *  -------------------------------------------------------------------------------------------------
 *  
 *  表单 :
 *
 * --0.form ==>HTMLFormElement，包括自身特性 = submit(true?) + method(get/post) + action(url)
 * --1.取得表单 ==> document.forms['name'];(表单及表单项通过name引用)
 * --2.提交表单 ==> 条件 = <input type = 'submit/image'> or <button>通过点击或聚焦时回车之后，触发submit事件，true?提交:不提
 * --3.重复提交 ==> 解决 = 提交完之后禁用按钮 or onsubmit事件处理程序后续的表单操作。
 * --4.重置表单 ==> 不要轻易重置表单   <input/button type = "reset"> 期间触发reset事件
 * --5.表单字段 ==> 首选 : form.elements['name'] 访问element。获取值的话 :value，type，disabled....
 * --6.共有属性 ==> 属性 : value,form(指向所属表单),disabled(禁用)，multiple,autofocus
 * 					方法 : .focus(), .blur() 默认只有表单字段可以获得焦点，而其他元素可以通过tabIndex = -1 然后focus()
 * 					事件 : blur,change(当input或textarea失去焦点且 内容改变的时候触发),focus
 * --7.表序列化 ==> 表单字段名值对进行URL编码使用&分隔，不发送禁用的字段，只发送勾选的单选复选，不发送[type='reset']，
 * 					多选为每个选中的值单独做个条目，提交按钮提交时，也发送提交按钮，<select>中option中有value发value，没它发innerText。
 *
 * -------------------------------------------------------------------------------------------------
 *
 *  AJAX 和 Comet :
 *  
 *  --1.XHR请求头 ==> Accept系
 *                    Accept(浏览器能够处理的内容)、Accept-Charset/Encoding/Language (能显示的字符集、压缩编码、当前语言)
 *                    Connection : 浏览器和服务器间的连接类型。
 *                    Cookie     : 当前页面设置的任何cookie
 *                    Host       : 发出请求的页面 所在的域
 *                    Referer    : 发送请求的URI (HTTP规范的拼写错误)
 *                    User-agent : 浏览器代理的字符串
 *  --2.读取头 : setRequestHeader(), getResponseHeader()  PS : get中的名值对应该用encodeURIComponent编码再发送。
 *
 *
 *  --3.跨域   : (1).自定义请求头 : 添加(Origin : url)属性，然后服务器通过设置(Access-Control-Allow-Origin : url) 表示允许。不会包含cookie。
 *  			 (2).XDR 和 XHR : IE8通过XDR，其他通过原生XHR(绝对路径即可)(不能设置自定义头部，不能接发cookie，调用getAllReponseHeaders()总返回null).
 *  			 (3).preflighted requests : 更多的自定义头部信息 浏览器:Origin + Access-Control-Request-Methods/Headers 服务器Access-Control-Allow-Origin/Methods/Headers
 *  		  	 (4).带凭据的请求 : 设置Access-Control-Allow-Credentials : true
 *  		  	 (5).图像ping : 动态创建图像(<img src= "url">) 得不到信息，但是可以通过load和error事件判断
 *  		  	 (6).JSONP   :(JSON with padding),动态创建<script> 返回函数执行语句，须在环境中命名同名函数。
 *  		  	 
 */ 	