/**
 * 实现bind函数
 * Created by hank on 2017/2/25.
 */

// Function.prototype.bind = Function.prototype.bind || function (context) {
//     var me = this;
//     var argArray = Array.prototype.slice.call(arguments);
//     return function () {
//         return me.apply(context,argArray.slice(1));
//     }
// };

//构造函数场景下的兼容
Function.prototype.bind = Function.prototype.bind || function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments,1);
    var F  = function () {};
    F.prototype =this.prototype;
    var bound =  function () {
        var innerArgs = Array.prototype.slice.call(arguments);// toArray -> slice
        var finalArgs = args.concat(innerArgs); //合并
        return self.apply(this instanceof  F ? this :context || this, finalArgs);
    };
    bound.prototype = new F();
    return bound;
};