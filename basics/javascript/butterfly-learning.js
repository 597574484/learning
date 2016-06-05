/**
 * Object.hasOwnProperty(obj) :
 * 对象是否有自己的属性，区分自身和继承来的
 */

/**
 * delete : 
 * delete 可以删除对象自身属性，却无法删除原型链上的属性和普通变量。
 * 由此可以判断出是否是原型链上的属性
 * eg : var obj =  {a : 1}; delete obj.a;
 * 
 */

/**
 * Function
 * 函数创建的时候附有两个附加属性 : 函数上下文和实现函数行为的代码(compared with pure object);
 * Function.prototype.constructor === Function ///true
 * 
 *-------------------------------------------------------------------------------------------------
 * 四种 函数调用模式 : 方法调用模式、函数调用模式、构造器调用模式、apply调用模式。(初始化this值存在差异)
 * this绑定发生在函数调用的时候。(very late binding)
 * 
 * 方法调用模式   ： 函数作为对象的方法时，this被绑定到对象上。
 * 函数调用模式   ： 函数不是对象的属性时，this被绑定到全局对象上。(嵌套函数可通过var that = this 访问外部this)
 * 构造器调用模式 ： new Fucntion()生成对象 时，this绑定到新生成的对象上，并隐藏[[proto]]连接到Function.prototype。
 *                   new 前缀会改变 return 的行为。var Q = function(){this.a=1;return this.b=2;}; new Q();
 * Apply调用模式  ： 改变this的指向并可以传入参数数组。
 * 
 * -------------------------------------------------------------------------------------------------
 * 作用域 ： 
 * 控制变量参数的可见范围和生命周期，它影响着命名冲突和自动垃圾清理。
 * 
 * 
 */

/**
 * RegExp :
 * 
 * RegExp的三种方法 : RegExp.exec(), RegExp.test();
 * RegExp.exec() : 最强大和最慢的 ---> var tag =  /[0-9]/g , loop tag.exec("123") ["1"],["2"],["3"],null
 * RegExp.test() ：最简单和最快的 ---> true or false
 * -------------------------------------------------------------------------------------------------
 * String 中的方法 : String.match(), String.replace(), String.search(), String.split();
 * String.match() :   无g和exec相同, 有g则返回所有匹配的字符串数组
 * String.replace(oldValue,replaceValue) : 替换掉原来的value。
 * String.search(RegExp) : 找到出现的首次出现的位置否则返回-1，自动忽略g。
 * String.split(separator, limit) : 分割为数组，limit控制分割数量。
 */


