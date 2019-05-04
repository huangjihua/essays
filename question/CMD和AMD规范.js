/**
 * description: CMD和AMD规范
 * author: huangjihua
 * email: hank.online@foxmail.com
 * date: 2019-05-01  17:14
 */

// CMD和AMD的区别有以下几点:
// 对于依赖的模块AMD是提前执行，CMD是延迟执行。不过RequireJS从2.0开始，也改成可以延迟执行(根据写法不同，处理方式不通过)
// CMD推崇依赖就近，AMD推崇依赖前置

//AMD写法
define(['./a','./b'], function (a, b) {
    //依赖一开始就写好
    a.mix();
    b.show();
});

//CMD写法
define(function (requie, exports, module) {
    //依赖可以就近书写
    var a = require('./a');
    a.mix();

    if (...) {
        var b = requie('./b');
        b.show();
    }
});