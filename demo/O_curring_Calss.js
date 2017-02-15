/**
 * 柯里化实现计算
 * Created by hank on 2017/2/9.
 */

var cuuring = function (func,args) {
    var args = args||[];
    return function(){
        if(arguments.length == 0){ return func.apply(null,args);  console.log(this);}
        var i = 0;
        while ()
    }
}