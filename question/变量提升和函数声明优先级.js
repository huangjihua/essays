/**
 * description: 变量提升和函数声明优先级
 * author: huangjihua
 * email: hank.online@foxmail.com
 * date: 18/8/12  下午9:42
 */

//首先JS引擎在正式执行代码之前进行一次"预编译"，预编译其实很简单理解就是在内存里开辟一块空间，
// 存放变量和函数。步骤如下：
// 页面创建GO全局对象（Global Object）对象（window 对象）
function  a(a) {
    console.log(a);
}
console.log(a);  //=> 上面的a函数
var a=1;
console.log(a); //=>1
function b() {
    console.log(a);
}
var a = function () {
    b();
};
b(); // => a变量重新复制的 匿名函数带调用b函数
a(); // 同上