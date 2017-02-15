/**
 * Created by hank on 2017/1/8.
 */
function curryingHelper(fn) {
    var _args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var _newArgs = Array.prototype.slice.call(arguments);
        var _totalArgs = _args.concat(_newArgs);
        return fn.apply(this, _totalArgs);
    }
}
function betterCurryingHelper(fn, len) {
    var length = len || fn.length;
    return function () {
        var allArgsFulfilled = (arguments.length >= length);

        // 如果参数全部满足,就可以终止递归调用
        if (allArgsFulfilled) {
            return fn.apply(this, arguments);
        }
        else {
            var argsNeedFulfilled = [fn].concat(Array.prototype.slice.call(arguments));
            return betterCurryingHelper(curryingHelper.apply(this, argsNeedFulfilled), length - arguments.length);
        }
    };
}

function showLog(a,b,c,d) {
    console.log(a+b+c+d);
}
function showLog1(a,b,c,d,e) {
    console.log(a+b+c+d+e);
}

var add = betterCurryingHelper(showLog);
add(1)(2)(3)(4);
