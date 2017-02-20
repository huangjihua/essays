/**
 * Created by hank on 2017/1/5.
 */
var foo = "11"+2-"4";
console.log(foo);
console.log(typeof foo);




var arr = [1,2,3,3,2,4,5];
var  arr2 = {x:2,y:3};
console.log(arr.reverse());
console.log(arr.concat(arr2));
 var  dsort = arr.sort(function (a,b) {
           return b-a;
 });
console.log(dsort);
var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
console.log(reg.test("huang.4@qq.com"));

function add(x) {
    return function(y) {
        return x + y;
    };
}
console.log(add(1)(3));

const add2 = a => b => a + b;
console.log(add2(1)(2));

[1, 2 ,3, 4].forEach(console.log);

//foo();
var foo = function bar(){
    console.log('test');
}

function md_1(){
    var sum=0;
   for(var i=1 ; i<=1000;i++){
       sum += i;
   }
   console.log(sum);
}
md_1();

function foo() {
    console.log("first");
    setTimeout(( function(){
        console.log( 'second' );
    }),5);
}

for (var i = 0; i < 100; i++) {
    foo();
}

function fun2(){
    var arr = arguments||[];
    console.log( arr);
}
fun2(2);

