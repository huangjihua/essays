/**
 * Created by hank on 2017/1/6.
 */
var currying = function(fn) {
    // fn 指官员消化老婆的手段
    var args = [].slice.call(arguments, 1);
    // args 指的是那个合法老婆
    return function() {
        // 已经有的老婆和新搞定的老婆们合成一体，方便控制
        var newArgs = args.concat([].slice.call(arguments));
        // 这些老婆们用 fn 这个手段消化利用，完成韦小宝前辈的壮举并返回
        return fn.apply(null, newArgs);
    };
};

// 下为官员如何搞定7个老婆的测试
// 获得合法老婆
var getWife = currying(function() {
    var allWife = [].slice.call(arguments);
    // allwife 就是所有的老婆的，包括暗渡陈仓进来的老婆
    // console.log(allWife.join(";"));
    var sum=0;
    for(var i=0;i<allWife.length;i++){
        //sum+=parseInt(allWife[i]) ;
        sum =allWife[i];
        sum += sum;

    }
   console.log(sum);
}, "合法老婆");

// 获得其他6个老婆
//getWife("大老婆","小老婆","俏老婆","刁蛮老婆","乖老婆","送上门老婆");

// 换一批老婆
//getWife("超越韦小宝的老婆");
getWife(1,2,3,4,5,6);