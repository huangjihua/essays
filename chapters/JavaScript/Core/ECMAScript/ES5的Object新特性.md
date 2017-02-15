# ES5的Object新特性

好久没有写些东西了，今天有空对一些知识做一些梳理。本文将简单列举ES5的核心特性。ES5多半是扩展原生对象的功能，让Object、Array、String、Function更加强大。其他的特性包括strict mode和一下期待已久的工具方法（例如JSON.parse等）。

ES5的大部分特性都在主流浏览器（IE9+）中支持了。而且大部分特性，都可以通过JavaScript垫片(pollyfill)在运行时环境实现。

一些我梳理了ES5新增的新特性的导图：
<iframe id="embed_dom" name="embed_dom" frameborder="0" style="display:block;width:100%; height:600px;" src="https://www.processon.com/embed/mind/5852a97ae4b05a02847b559e"></iframe><br/>

接下来我们一个一个的来看吧...
## Object 新特性
`所有对象的操作中，如果o|obj不是Object类型，将会抛出TypeError异常。`
### Object.getPrototypeOf(o) [$1](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf)
	返回给定对象的原型对象，等价于以前的`o.__proto__`
**参数**

	o 是一个对象;     
**返回**
	 
	o的原型对象`
**描述**

	Object.getPrototypeOf()返回它的参数的原型。注意这是一个全局函数，必须传入一个对象。
	它不是在对象上调用的方法。
**实例**

	var p = {name:'hank'};
	console.log(Object.getPrototypeOf(p)); // {}   => Object.prototype
	var o = Object.create(p);
	console.log(Object.getPrototypeOf(o)); // {name:'hank'}  => p


### Object.getOwnPropertyDescriptor(o,name)
	查询一个属性的特性

**参数**

	o : 待查询其属性特性的对象； 
	name : 待查询的属性名（或数组元素的索引）
  
**返回**
	
	指定对象指定属性的一个属性描述符对象，如果不存在指定属性则返回undefined
**描述**
	
	属性描述符是一个普通的javascript对象，描述某个属性的特性（有时候也包括值）。
	有两种javascript属性，数据属性有一个值以及三个性质： 
	enumerable :可枚举性 ; writable :可写性 ;  configurable :可配置性  
	访问器属性（accessor property）有一个getter 和setter方法，以及可枚举和
	可配置性。
**实例**

	var o = {age:10};
	console.log(Object.getOwnPropertyDescriptor(o,'age')); 
	//输出结果：
	 
	 { value: 10, /*任意 javascript 值*/
  		writable: true,  
  		enumerable: true, 
  		configurable: true  
  	 } 
### Object.defineProperties()
	 方法在一个对象上添加或修改一个或这多个自由属性，并返回对象。
 **语法**
 
    Object.defineProperties(obj, props)
 **参数**
	 
	 obj : 将要被添加属性或修改属性的对象
	 props : 该对象的一个或多个键值对定义了将要为对象添加或修改的属性的具体配置
 **返回**
  
	 对象 obj
 **实例**
		
		var obj	= {};
		Object.defineProperties(obj,{
			"propertyOne":{
				value: true,
				writable:true
			},
			"propertyTwo":{
				value: "Hello",
				writable: false
			}
			// .....
		});
		console.log(obj.propertyTwo); // Hello
		console.log(Object.prototype.hasOwnProperty.call(obj,"propertyOne")); //true
        console.log(Object.prototype.hasOwnProperty.call(obj,"propertyThree")); //false
### Object.seal()
		蜜蜂对象以防删除
**语法**

    Object.seal(obj)
 **参数**

     obj: 将要被秘密的对象
 **描述**
    密封一个对象会让一个对象变的不能添加新属性，且所有属性会变的不可配置。属性不可配置的效果就是属性变的不可删除。以及一个数据属性不能被重新定义为
    访问器属性，或反之。但属性的值仍然可以修改。
    不会影响从原型链上继承的属性。但*`__proto__`属性的值也会不能修改。

  **例子**

        var obj  = {
            prop: function () {},
            foo: "hank"
        };
        // 可以添加新的属性，已有属性的值可以修改，可以删除
        obj.foo = "steven";
        obj.look = "boy";
        console.log(obj); //{ prop: [Function], foo: 'steven', look: 'boy' }
        delete obj.prop;
        console.log(obj); //{ foo: 'steven', look: 'boy' }
        //开始蜜封了
        var o = Object.seal(obj);
        console.log(o===obj); //true
        console.log(Object.isSealed(obj) === true); //true
        //仍然可以修改密封对象上的属性的值
        obj.foo = "Hello seal";
        console.log(obj); //{ foo: 'Hello seal', look: 'boy' }
        //但不能把一个数据属性重定义成访问器属性
        // Object.defineProperty(obj,"foo",{get:function () {
        //     return 'test';
        // }}); //抛出TypeError异常 TypeError: Cannot redefine property: foo
        // 任何属性值以为的修改操作都会失败,严格模式下会抛出异常
            obj.age  = 10;
            delete obj.foo;
        console.log(obj); //{ foo: 'Hello seal', look: 'boy' }

 


