/**
 * 在javascript的使用过程中，constructor 和prototype这两个概念是相当重要的，
 * 深入的理解这两个概念对理解js的一些核心概念非常的重要。我们在定义函数的时候，
 * 函数定义的时候函数本身就会默认有一个prototype的属性，而我们如果用new 运算符来
 * 生成一个对象的时候就没有prototype属性。我们来看一个例子，来说明这个
 * Created by hank on 2017/2/9.
 */
function a(name) {
    this.b = name;
    this.d = function () {
        console.log(this.name);
    }
}

var obj = new a('hank');
console.log(obj.prototype); // undefined
console.log(a.prototype);  // a {}
// a.prototype 包含了2个属性，一个是constructor ，另外一个是__proto__
// 这个constructor  就是我们的构造函数a，这个也很容易理解。
// 那么__proto__ 是什么呢？
// 这个就涉及到了原型链的概念：
// 每个对象都会在其内部初始化一个属性，就是__proto__，当我们访问一个对象的属性 时，
// 如果这个对象内部不存在这个属性，那么他就会去__proto__里找这个属性，这个__proto__又会有
// 自己的__proto__，于是就这样 一直找下去。