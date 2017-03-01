/**
 * Created by hank on 2017/1/22.
 */
//本题归根结底，还是this作用域的执向问题
var length = 10;
function fn() {
    //console.log(Object.getOwnPropertyNames(this));
    console.log(this === global); //第一次为true
    console.log(this.length)
}
var obj = {
    length: 5,
    method: function (fn) {
        fn();// fn 函数this指向 global, 没有length,所以结果是undefine
        //console.log(arguments[0]); //[Function: fn]
        arguments[0](); // 这里执行了fn，结果比较有趣，输出了2，这是怎么回事呢？
        // arguments[0]执行method第一个参数：fn ,所以arguments[0]()的意思就是：fn()。
        //此时,this执向arguments,当前method调用传人了2个参数,arguments =>包括 [0：fn,1：1，callee:fn,length:2]
        fn.call(obj, 12); //fn 函数this指向obj对象，所以this.length =>5
    }
};
obj.method(fn, 1);
// undefine , 2 ,5