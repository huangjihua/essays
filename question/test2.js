/**
 * Created by hank on 2017/3/12.
 */
class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Lion extends Cat {
    constructor(name, color) {
        super(name); // 这个super指向什么呢？=>super=>指向Cat实例对象
        console.log("con-super:",super.constructor === Cat ); // true
        console.log('s_p:',super.__proto__ === Lion.prototype); //true
        console.log("L-p",Lion.__proto__  === Cat); // true
        console.log("this: ",Cat.prototype.isPrototypeOf(this));
        this.color = color;
    }

    speak() {
        super.speak(); // 这个super又指向什么？=> super=>指向父类Cat
        console.log('-----');
        console.log('pp:',super.prototype);
        console.log("fun-super:",super.constructor === Cat );// true
        console.log('s_p:',super.__proto__ === Lion.prototype ); //true 子类的
        console.log("L-p",Lion.__proto__  === Cat); // true
        console.log('-----');
        console.log(this.name + ' roars.');
    }
}
var l  = new Lion('hank','yellow');
l.speak();
console.log("l?:", l.constructor === Lion );//true

let a = {
    toString(){
        console.log(this === a); //true
        console.log("super:",super.constructor === Object); // true
        console.log("a:", a.constructor === Object); //true
        return 'My little pony' + super.toString(); //这里的super又指向什么
    }
};
console.log(a.toString());

console.log('*************');
function Foo() {
    getName = function(){ console.log(1); };
    //console.log(this===global);
    return this;
}
Foo.getName = function(){ console.log (2);};
Foo.prototype.getName = function () { console.log (3);};
var getName = function () { console.log (4);};
function getName() { console.log (5);}

//请写出以下输出结果：
Foo.getName(); //2
getName();//4
Foo().getName; //1
getName(); // 2
new Foo.getName(); // 2
new Foo().getName(); //3
new new Foo().getName();//3
console.log('*************');
var z = 10;
function foo2(){
    console.log(this===global);
    console.log(z);
}
(function(funArg){
    var z = 20;
    console.log(z);
    funArg();
})(foo2);

