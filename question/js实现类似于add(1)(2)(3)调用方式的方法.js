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