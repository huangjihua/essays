# ES5的新特性

好久没有写些东西了，今天有空对一些知识做一些梳理。本文将简单列举ES5的核心特性。ES5多半是扩展原生对象的功能，让Object、Array、String、Function更加强大。其他的特性包括strict mode和一下期待已久的工具方法（例如JSON.parse等）。

ES5的大部分特性都在主流浏览器（IE9+）中支持了。而且大部分特性，都可以通过JavaScript垫片(pollyfill)在运行时环境实现。

一些我梳理了ES5新增的新特性的导图：
<iframe id=\'embed_dom\' name=\'embed_dom\' frameborder=\'0\' style=\'display:block\;width:100%\; height:600px\;\' src=\"https://www.processon.com/embed/mind/5852a97ae4b05a02847b559e\"></iframe>

接下来我们一个一个的来看吧...
## Object 新特性
所有对象的操作中，如果o不是Object类型，将会抛出TypeError异常。
### Object.getPrototypeOf(o) [$1](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf)
返回给定对象的原型对象，等价于以前的`o.__proto__`
`参数: o 是一个对象;     返回: o的原型对象`
`描述： Object.getPrototypeOf()返回它的参数的原型。注意这是一个全局函数，必须传入一个对象。它不是在对象上调用的方法。`
例：
```
var p = {name:'hank'};
console.log(Object.getPrototypeOf(p)); // {}   => Object.prototype
var o = Object.create(p);
console.log(Object.getPrototypeOf(o)); // {name:'hank'}  => p
```

### Object.getOwnPropertyDescriptor(o,name)
查询一个属性的特性
`参数：
  o 待查询其属性特性的对象； 
  name： 待查询的属性名（或数组元素的索引）
返回
  指定对象指定属性的一个属性描述符对象，如果不存在指定属性则返回undefined`





