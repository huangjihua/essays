/**
 * Created by hank on 2017/1/6.
 */
// 结果，为什么
for(var i=0;i<3;i++){
    console.log('c:'+i);
    // 循环执行完 i=4,接着setTimeout执行结果时间100ms
    setTimeout(function (){
        console.log(i--);//3,2,1
    },100);
}
//比如
for (var i = 0; i <= 3; i++) {
    setTimeout(function  () {
        console.log(i); //4,4,4,4
    },0);
}

console.log('-------');
//第三题
var a=b=1;
(function () {
    var a=b=3;
})();

function test() {
    console.log(a);
    b=2;
    console.log(this.b);
    var a,b;
}
console.log(a);
console.log(b);
var b = new test();
test();
// function test() {
//     uname:"hank",
//     sp:function () {
//         this.uname + ' Hello World';
//     }
// }
// test().sp();

console.log('-------');
// 第四题，函数add(1) //=>1
//  add(1)(2) //=>3
// add(1)(2)(3) //=>6
//实现该函数 (柯里化)
function currying(fn){
    var args = [].slice.call(arguments,1);
    return function() {
        var newArgs = args.concat([].slice.call(arguments));
        console.log(newArgs);
        return fn.apply(null, newArgs);
    }
}
var add = currying(function () {
    var allArgs = [].slice.call(arguments,1);

    console.log(allArgs);

},'');
add(1,2,3,4);
console.log('----klh---');



