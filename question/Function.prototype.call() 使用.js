/**
 * 1.使用call方法调用父构造函数
 * 2.使用call方法调用匿名函数
 * 3.使用call方法调用函数并且指定上下文的'this'
 * Created by hank on 2017/3/1.
 */

//1.使用call方法调用父构造函数
/*
* 在一个子构造函数中，你可以通过调用 父构造函数的 call 方法来实现继承,类似于Java中的写法。
* 下例中，使用 Food 和 Toy 构造函数创建的对象实例都会拥有在 Product 构造函数中添加的 name
* 属性和 price 属性,但 category 属性是在各自的构造函数中定义的。
* */
function Product(name, price) {
    this.name = name;
    this.price = price;
    if (price < 0) {
        throw RangeError('Cannot create product ' +
            this.name + ' with a negative price');
    }
}
function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}
//等同于
function Food(name, price) {
    this.name = name;
    this.price = price;
    if (price < 0) {
        throw RangeError('Cannot create product ' +
            this.name + ' with a negative price');
    }
    this.category = 'food';
}
//function Toy 同上
function Toy(name, price) {
    Product.call(this, name, price); //Product
    this.category = 'toy';
}
var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
console.log(cheese);
console.log(fun);
console.log('64'-3);