/**
 * description: 实现call-apply-bind
 * author: huangjihua
 * email: hank.online@foxmail.com
 * date: 2019-05-01  15:42
 */

//首先我们来实现call
Function.prototype.myCall = function (context) {
    if(typeof this !== 'function'){
        throw new TypeError('this is not  a function');
    }
    //首先 context 为可选参数，如果不传的话默认上下文为 window
    context = context || global;
    //创建一个 fn 属性，并将值设置为需要调用的函数
    context.fn = this;

    // call 可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来
    const args = [...arguments].splice(1);
    let result = context.fn(...args);
    delete  context.fn;// 删除零时属性
    return result;
};
function a(){
    this.test = "huangjihua";
    console.log('a');
}
a.prototype.test ="aaa";
function b(){
    console.log('b:',this);
;    console.log(this === a); // this指向了a 函数对象
    // console.log([...arguments]);
    // console.log(this.prototype.test); // 'aaa'
    // return 1;
}
// b.prototype.test ="aaa";
// console.log(b.myCall(a,23,2,3));
// console.log(Math.max.myCall(null, 2,3,4,8));
console.log(b.myCall( 1)); // node 不能自动包装


Function.prototype.myApply = function (context){
    if(typeof this !== 'function') {
        throw new TypeError('this is not a function');
    }
    if(arguments[1]){
        if(!(arguments[1] instanceof  Array)){
            throw new TypeError('the second params is not array');
        }
    }
    context = context || global;
    context.fn = this;
    let result;
    // 处理参数和 call 有区别
    if( arguments[1]){
        result= context.fn(...arguments[1]);
    }else{
        result = context.fn();
    }
    delete  context.fn;
    return result;
};
function aaa(){
    return 'aaa';
}
function bbb(){
    console.log('this:',this);
    // console.log(...arguments); // 输数组值
    return 'bbb'
}
// console.log('aa:',bbb.myApply(aaa)) ;
// console.log('aa:',bbb.myApply(null)) ;// global
// console.log('bb:',bbb.myApply(aaa,[12,14,23]));

// console.log('arr:',Math.max.myApply(null, [2,3,4,8]));


/* ----------------------*/

Function.prototype.myBind = function (context){
    if(typeof this !== 'function'){
        throw new TypeError('context is not function');
    }
    const _this = this;
    const args = [...arguments].slice(1);
    // 返回一个函数
    return  function F(){
        // 对于直接调用来说，这里选择了 apply 的方式实现，但是对于参数需要注意以下情况：
        // 因为 bind 可以实现类似这样的代码 f.bind(obj, 1)(2)，
        // 所以我们需要将两边的参数拼接起来，于是就有了这样的实现 args.concat(...arguments)
        if(this instanceof F){
            console.log('F');
            return new _this(...args,...arguments);
        }else{
            console.log('apply');
            return _this.apply(context,args.concat(...arguments));
        }
    }
};

// console.log('----------');
function fn1() {
    this.age = 23;
}
fn1.prototype.name = 'fn1--fn1';
function fn2() {
    console.log('fn2:',this); //
    console.log(arguments);
    // console.log(this.prototype.name);
    return 'fn222'
}
let f2 =  fn2.bind(fn1,223);
console.log('f2',f2()); //
console.log('new:',new f2(123));
console.log(fn2.myBind(null)); //[Function: F]