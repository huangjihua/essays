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
    temp.toString = function () {
        return sum;
    };
    return temp;
}
var  result = add(1)(2)(3)(4);

console.log(result);
console.log(result.toString());
console.log(add(1)(2)(3)(4)(5).toString());
//上面的还是没发满足我的需求，这样调用add(1)(2)(3)(4)(5)就直接输出结果

function  add2() {
     var args = Array.prototype.slice(arguments);
     var fn  = function () {
         var arg_fn = Array.prototype.slice(arguments);
         return add2.apply(null,args.concat(arg_fn));
     };
     fn.valueOf  = function () {
          return args.reduce(function (a,b) {
              return a+b;
          });
     };
     return fn;
}
 console.log(add2(1)(2)(3));