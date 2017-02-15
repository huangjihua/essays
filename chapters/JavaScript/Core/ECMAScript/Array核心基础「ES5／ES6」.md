# Array核心基础「ES5／ES6」

数组是值的有序集合。每个值叫做一个元素，而每个元素在数组中有一个位置，以数字表示，称为`索引`。javascript数组是==无类型的==： 数组元素可以是任意类型`，并且同一个数组中的不同元素也可能有不同类型。数组元素也可能是==对象==或==其他数组==,这允许创建复杂的数据结构。


###创建数组

数组字面量 var arr = [1, 2, 3];
使用构造函数 var arr = new Array();
数组本质上是object(type of [ ] == ‘object’);
数组字面量的语法允许有可选的结尾的逗号，故```[,,]```直有2个元素而非3个。
	
	var a =[1,,3]; //3个元素，中间的=undefined
	var b = [,,2];  //3个元素,前2个=undefined
	var c = [,,]; // 2个元素

==所以要判断是不是数组，需要通过判断constructor。==

	[].constructor
	 
	console.log([].constructor); // [Function: Array]
	console.log([].constructor == Array); // true
	
	

### 数组长度

使用length属性获取元素的个数。
数组的length属性是可写的。当length属性小于元素个数时，数组中索引值大于length属性的元素会被删掉。

### 数组元素的添加和删除
注意： 如果你试图向数组添加一个属性，但属性名”看起来“像一个数字，那它会变成一个数值==下标==（会修改数组的内容而不是添加一个属性）。
	
	var arr = ['bar',23,'object'];
	arr["1"] = "name";
	console.log(arr.length); // 3 
	console.log(arr); //'=> ['bar',23, 'test']
	arr["3"] = "hank";
	console.log(arr.length); // 4
	console.log(arr); //[ 'bar', 23, 'test', 'object' ]
  

* **push** 从数组尾部添加,并返回数组新的长度  `array.push(element1,....elementN)`
* **unshift** 从数组头部添加，,并返回数组新的长度 `array.unsift(element1,....elementN)`
* **pop** 从尾部弹出 
* **shift** 从头部弹出

```		 
	var arr = [1,2];
	arr.push(3);//在末尾添加一个元素 =>[1,2,3]
	arr.push(4,5);//末尾添加2个元素 =>[1,2,4,5]
	console.log(arr.pop());// 从尾部弹出=> 5
```
### 数组方法
* **join** 将数组中所有元素转换成字符串并连接在一起
* **reverse** 将数组中成员颠倒排序,==原数组上重新排列，所以数组原来的值改变了==

		var a = [1, 2, 3, 4];
		console.log(a.reverse()); //[ 4, 3, 2, 1 ]
		console.log(a); //[ 4, 3, 2, 1 ]
* **sort** 对数组的元素做原地的排序，并返回这个数组，sort可能不稳定，默认按照字符串的unicode码位点排序 	`array.sort([function(a,b)])`
<span style='color:#e78170'> a和b是两个将要比较的元素</span>
		* 如果函数function（a， b）返回值小于0， 则a会排在b之前
		* 如何函数返回值等于0， 则a和b的相对位置不变（并不被保证）
		* 如果函数返回值大于0，则a会排在b之后
		* 比较函数输出结果必须稳定，否则排序的结果将是不确定的
							
			 var d = ['last','first','next'];
			 var dd = d.sort();
			 console.log(dd);//" [ 'first', 'last', 'next' ]
			 console.log(d); // [ 'first', 'last', 'next' ]
			 
* **contact** 将数组连接起来,创建并返回一个新数组（==深拷贝，但对象引用不能深拷贝==）
			  
	  * 对象引用 （非对象直接量）：contact方法会复制对象引用放到组合的新数组里，**原数组和新数组中的对象引用都指向同一个实际的对象**，所以，当实际的对象被修改时,两个数组也同时被修改。
	  * 字符串和数字（是原始值，而不是包装原始值的string和number对象）：contact方法会复制字符串和数字的值放到新的数组里。

			var m = [1,3,{a:4}],n=[].contact(m);//n = [1,3,{a:4}]注意：数组里的对象引用
			n[2]['a'] = 10;
			console.log(m)； //[1,3,{a:10}] 对象引用没有深层拷贝，所以原数组里对象里的属性值也变了
* slice 返回指定数组的一个片段或子数组, 如果参数是==负数==（-1表示倒数第一个元素，依此类推，`不会修改原数组长度`

			var k = [1,3,5,6]	;
			console.log(k.slice(1)); //[ 3, 5, 6 ]
			console.log(k.length); //4
			console.log(k); //[ 1,3, 5, 6 ]
			console.log(k.slice(1,-1)); // [3,5,6]
			console.log(k.slice(-3,-1)); // [3,5] =>负数从后往前取
* **splice** 从数组中插入或删除元素 ==删除元素会改变数组length==
		`array.splice(start,delectCount[, item1[,item2 ...]])`
		 *start* ：开始操作的索引
		 *delectCount*:要移除的数组元素的个数
		 *ItemN*：要添加进数组的元素，如果不指定，这splice指删除数组元素

```
		var b = [1,2,3,4];
		var c = b.splice(1,2); 
		console.log(b.length);  //2
	  	console.log(b); //[ 1, 4 ]
	 	console.log(c); //[ 2, 3 ]
	 	
	 	var x = [1,2,3,4];
		console.log(x.splice(1)); // [2,3,4]  此时x.length = 1
		
		var y = [1,2,3]; 
		console.log(y.splice(1,2,88)); // [2,3]删除的元素, 88增加的元素
		console.log(y);//[1,88]  
 		
```

### ECMAScript 5中的数组新方法
* **forEach** 从头到尾遍历数组，为每个元素调用制定的函数
	   **array.forEach(callback,[thisObject])**
	  * 参数
	     * callback ：必须的回调函数参数（函数为每个元素执行，接受3个参数）
		     * value(当前值) ： 数组中正在处理的当前元素。
		     * index(索引)：数组中正在处理的当前元素的索引。
		     * array ：正在应用forEach()数组
	     * thisObject ：可选参数。改变回调函数里的`this`指向（参考对象）
	  * 描述：forEach 方法按升序为数组中含有效值的每一项执行一次callback函数，那些已删除（使用delete方法等情况）或者从未赋值的项将跳过(但不包括那些值为undefined的项)。
	  * 如果给forEach传递了thisObject参数，它将作为callback函数的执行上下文，类似执行如下函数callback.call(thisArg,element,index,array)。如果thisObject值为undefined或null,函数的this值取决于当前执行环境是否为`严格模式`（严格模式下为undefined,非严格模式下为`全局对象`[浏览器为window]）。
		
			var arr = [1,3,5,6]	;
			arr.forEach(console.log); 
			/* 结果：value index array
						1 0 [ 1, 3, 5, 6 ]
						3 1 [ 1, 3, 5, 6 ]
						5 2 [ 1, 3, 5, 6 ]
						6 3 [ 1, 3, 5, 6 ]
			*/
			var thisObject = undefined ; 
			arr.forEach(function(value,index,array) { 
			    console.log(this); //undefined 当为严格模式下为传入的对象 ,否则为全局对象                       
			},thisObject);                                           
			//例如：数组求和
			var sum=0;
			arr.forEach(function(value,index,array) { 
			    sum +=value;
			});
			console.log(sum);//15
		 对比jQuery中的 `$.each`方法：参数value和index刚好相反
		 	
		 	$.each(arr,function(value,index,array) { ...});
		  
					
* **map** 把数组的每个元素`传给指定的函数`，并返回一个数组，它包含该数组的返回值。

			var a = [1, 2, 3];
			var b = a.map(function(x) {
			    return x*x;
			});    //b = [1,4,9]
* **filter** 把数组的每个元素`传给指定的函数`，通过函数返回的`布尔值`决定是否在返回数组中添加该元素

		 var a = [1, 2, 3];
		 var b = a.filter(function(x){
		    return x % 2 !== 0;
		 });//b = [1, 3]
* **every** 把数组的每个元素传给指定的函数，如果全部调用返回true则every函数返回true
* **some** 把数组的每个元素传给指定的函数，如果有调用返回true则every函数返回true
* **reduce** 用指定的函数对数组进行组合，生成单个值

		var a = [1, 2, 3];
		var b = a.reduce(function(x, y){
		    return x + y;
		}, 0); //b = 6;
* **indexOf/lastIndexOf** 在整个数组中搜索制定的元素

### 类数组对象
通过为对象增加length自增的特性或者其他特性，可以生成一个‘类数组对象’，可以通过length进行遍历。例如函数的Arguments对象就是这样

### ES6数组的扩展
* Array.from()
* Array.of()






