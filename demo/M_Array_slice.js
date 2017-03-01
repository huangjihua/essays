/**
 * 数组的slice 实现
 * Created by hank on 2017/2/25.
 */

//Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组，
// 除了IE下的节点集合（因为ie下的dom对象是以com对象的形式实现的，js对象与com对象不能进行转换）
var a={length:2,0:'first',1:'second'};
var m = Array.prototype.slice.call(a);//  ["first", "second"]
var b={length:2};
var n=Array.prototype.slice.call(b);//  [undefined, undefined]
console.log(m);
console.log(n);

/*
* 再看call的用法，如下例子
* 可以看出，call了后，就把当前函数推入所传参数的作用域中去了，
* 不知道这样说对不对，但反正this就指向了所传进去的对象就肯定的了
* */
var foo = function(){
    console.log(this);    // 'littledu'
    console.log(typeof this);      //  Object
    console.log(this instanceof String);    // true
};
foo.call('littledu');


//基本就差不多了，我们可以大胆猜一下slice的内部实现，如下
Array.prototype.slice2 =function (start,end) {
    var result = new Array();
    start = start || 0;
    end  = end || this.length; //this指向调用的对象，当用了call后，能够改变this的指向，也就是指向传进来的对象，这是关键
    for(var i=start;i<end;i++){
        result.push(this[i]);
    }
    return result;
};
console.log([2,5,6,9,3].slice2(2,5));

//
var toArray = function(s){
    try{
        return Array.prototype.slice2.call(s);
    }catch(e) {
        var arr = [];
        for (var i = 0, len = s.length; i < len; i++) {
            // arr.push(s[i]);
            arr[i] = s[i]; //据说这样比push快
        }
        return arr;
    }
};
console.log(
    toArray('my name  is hank')
);


