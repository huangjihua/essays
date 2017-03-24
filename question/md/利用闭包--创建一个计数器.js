/**
 * 然不是！闭包有非常强大的功能。举个栗子：
 在面向对象的程序设计语言里，比如Java和C++，要在对象内部封装一个私有变量，可以用private修饰一个成员变量。
 在没有class机制，只有函数的语言里，借助闭包，同样可以封装一个私有变量。我们用JavaScript创建一个计数器：
 * Created by hank on 2017/3/13.
 */
"use strict";

function  create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            return ++x;
        }
    }
}

var  count = create_counter();
console.log(count.inc()); //1
console.log(count.inc()); //2
console.log(count.inc()); //3
var  c2 = create_counter(10);
console.log(c2.inc()); //11
console.log(c2.inc()); //12