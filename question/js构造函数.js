/**
 * 构造函数的实例
 * 作用：使自己的对象多次复制，同时实例根据设置的访问等级可以访问其内部的属性和方法
        当对象被实例化后，构造函数会立即执行它所包含的任何代码
 * Created by hank on 2017/3/1.
 */

function Person(msg){
    //公有属性和方法（特权属性和方法）---只在被实例化后的实例中方可调用
    this.message  =  msg ;
    this.address = '北京';
    console.log(typeof this); //object ,这里的this不是指向Person本身
    //公有方法能被外部公开访问
    //这个方法每次实例化都要重新构造而prototype是原型共享，所有实例化后，都共同引用同一个
    this.sayAge = function () {
        console.log(age); //在公有方法中可以访问私有成员
    };
    // 私有属性和方法 ----
    var name = 'hank';
    var age = 30;
    var self = this;
    function sayName() {
        console.log(self.name);
    }
    //私有和特权成员在函数的内部，在构造函数创建的每个实例中都会包含同样的私有和特权成员的副本，
    //因而实例越多占用的内存越多
}

//公有方法----适用于通过new关键字实例化的该对象的每个实例,
//           向prototype中添加成员将会把新方法添加到构造函数的底层中去
Person.prototype.sayHello = function () {
    console.log('Hello World!');
};
//静态属性和方法-----适用于对象的特殊实例，就是作为Function对象实例的构造函数本身
Person.realName = '黄继华';
Person.printOut = function () {
    console.log(this.realName);
};

//实例化
var p = new Person('你好！');
//-----测试属性-----//
console.log(Person.realName); // 黄继华
console.log(p.realName); // undefined, 静态属性不适用于一般实例
console.log(p.constructor.realName);// 黄继华, 想访问类的静态属性，先访问该实例的构造函数，然后再访问该类静态属性
console.log(Person.address); //undefined, Person中的this指的不是函数本身，而是调用address的对象，而且只能是对象。
console.log(p.address); //北京 , 此时this指的是实例化后的p

console.log('----------------Method----------------');
// ----- 测试方法 ----- //
Person.printOut(); //黄继华,  直接调用函数的类方法
//p.printOut(); //TypeError: p.printOut is not a function. => printOut是Person类的方法，和实例对象没有直接关系
p.constructor.printOut(); //黄继华 => 调用该对象构造函数（类函数）的方法（函数）
p.sayHello(); //Hello World! => Person类的prototype原型下的方法将会被实例继承
//Person.sayHello(); //TypeError:Person.sayHello is not a function. => sayHello是原型方法，不是类的方法


console.log('----------------prototype----------------');
//-------测试prototype ----//
console.log(p.prototype); //undefined, 实例对象没有prototype
console.log(Person.prototype); //Object  => Person { sayHello: [Function] }
console.log(typeof Person.prototype); // object
console.log(Person.prototype.constructor); //console.log返回Person(msg)，此时要用alert()更清楚，相当于Person
console.log(Person.prototype.constructor === Person); //true
console.log(Person.prototype.constructor.realName); //黄继华, 相当于Person.realName;

//----- 测试 原型链 ---- //
console.log(p.__proto__  === Person.prototype); // true
console.log(p.constructor.prototype === Person.prototype); //true
console.log( p.constructor === Person); // true