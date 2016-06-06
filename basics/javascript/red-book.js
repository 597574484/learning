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
 */ 