/**
 * description: scoping
 * author: huangjihua
 * email: hank.online@foxmail.com
 * date: 18/8/4  上午10:46
 */

/*
var str= typeof new String('abc');
console.log(Object.prototype.toString.call(str));
function foo() {
    return [1,2,3]
}

var [a,b,c] = foo();
console.log(a,b,c);

function bar() {
    return {
        x:2,
        y:3,
        z:4
    }
}
var which ="x",o={};
({[which]:o[which]}=bar());
console.log(o.x);


var app={
    model:{
        User:function () {
           return 'user';
        }
    }
};

var {model:{User}} =app;
console.log(User());

function f6({x=10}={},{y}={y:10}) {
    console.log(x,y);
}
f6();
f6({x:2},{y:3});

var  a1={
    foo1(){
        console.log('a1');
    }
};
var a2={
    foo2(){
        super.foo1();
        console.log('a2');
    }
};
Object.setPrototypeOf(a2,a1);
a2.foo2();
console.log(Object.getPrototypeOf(a2));
*/
var o={
    _id:10,
    get id(){
        return this._id;
    },
    set id(args){
        this._id=args;
    }
};

o.id = 22;
console.log(o._id);
var name ="Hank";
var str = `Hello ${name}!`;

console.log(str);

function foo(strings,...values) {
    console.log(strings);
    console.log(strings.raw);
    console.log(values);
}
var des ="test";
foo`Everything is ${des}!`;

var con ={
    foo:function(x){
        console.log(this);
        if(x===1){
            x++;
            this.help(x);
        }
    },
    help:(x)=>{
        console.log(x);
    }
};

// con.foo(1);


function *test() {
    var a=0;
    var y=1;
    console.log('y',y);
    yield ;
    var z=a+y;
    console.log('z',z);
    return z;
}
for(var v of test()) {
   console.log('v',v);
}

 function *foo2() {
     var x =yield 10;
     console.log(x);
     return x;
 }

for(var v of foo2()){
     console.log('vv',v);
}