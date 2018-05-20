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
    var args = [].slice.call(arguments);
    var fn  = function () {
        var arg_fn = [].slice.call(arguments);
        return add2.apply(null,args.concat(arg_fn));
    };
    fn.valueOf  = function () {
        return args.reduce(function (a,b) {
            return   a+b;
        });
    };
    return fn;
}
console.log(add2(1)(2)(3).valueOf());

//第三种
function  curry(fn) {
    var args = [];
    return  function curring() {
        console.log(arguments instanceof Array);
        // arguments并不是数组,只是访问单个参数的方式与访问数组元素的方式相同.
        // 因此在使用slice方法的时候,需要用类似[].slice.call(arguments)的方式去调用
        args = args.concat([].slice.call(arguments));
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            console.log(args);
            return curring; //递归
        }
    }
}
let ss =[];
console.log([].slice.call(ss, [99, 56, 89]));
console.log(Object.getOwnPropertyNames(ss));
