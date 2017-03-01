/**
 * Created by hank on 2017/2/20.
 */
function fun(n,o) {
    console.log(o);
    return {
        fun:function(m){
            return fun(m,n);
        }
    };
}

var a = fun(0);  console.log(); a.fun(1);  a.fun(2);  a.fun(3);//undefined,?,?,?
//fun(0) =>开始 n=0 , o=undefine  返回调用后 o = 0 => n=0， 其实只执行了一次fun(n,o)
// 每一次执行fun都给n传了值，但后调用都是用的第一次返回fun
// 只有连续调用才能保证闭包值的连贯
var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
var c = fun(0).fun(1); /* 这里*/  c.fun(2);  c.fun(3);//undefined,?,?,?

// 0,0,0
// 0,1,2
// 0,1,1