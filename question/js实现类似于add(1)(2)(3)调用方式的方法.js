/**
 * 函数自身的递归调用，也是柯里化的实现
 * Created by hank on 2017/3/1.
 */

function add(x) {
    var sum = 0;
    var temp = function (y) {
        sum += y;
        return temp;
    };
    //重写toString
    temp.toString = function () {
        return sum;
    };

    return temp;
}
var  result = add(1)(2)(3)(4);

console.log(result);
console.log(result.toString());
console.log(add(1)(2)(3)(4)(5).toString());

function  add2() {
    var args = [].slice.call(arguments);
    var fn  = function () {
        var arg_fn = [].slice.call(arguments);
        return add2.apply(null,args.concat(arg_fn));
    };
    fn.valueOf  = function () {
        console.log(args);
        return args.reduce(function (a,b) {
            return   a+b;
        });
    };
    return fn;
}
console.log(add2(1)(2)(3).valueOf());