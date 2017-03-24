var curry = function(func,args){
    var args = args || [];
    return function(){
        if(arguments.length == 0) return func.apply(null,args);
        var i = 0;
        while(typeof arguments[i] != "undefined") args[args.length] = arguments[i++];
        return curry(func,args) ;
    };
};

var curryAdd = curry(function(){
    var sum = 0,i=0;
    while(typeof arguments[i] != "undefined") sum += arguments[i++];
    // console.log(sum);
    return sum;
});
 console.log(curryAdd(2)(3)(4)(5)()) ;

var curryMultiply = curry(function(){
    if(arguments.length == 0) return 0;
    var mul = 1,i=0;
    while(typeof arguments[i] != "undefined") mul *= arguments[i++];
    console.log(mul);
    return mul;
});
// console.log(curryMultiply(1)(2)(4)());