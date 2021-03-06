/**
 * Created by hank on 2017/2/24.
 */
// var name = "Bob";
// var nameObj ={
//     name : "Tom",
//     showName : function(){
//         console.log(this.name);
//         console.log(this);
//     },
//     waitShowName : function(){
//         setTimeout(this.showName, 1000);
//         console.log(this);
//     }
// };

//nameObj.waitShowName();


class A{
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    say(){
          console.log( 'hello');
    }
}

class B extends A {
    constructor(name,age){
        super(name);
        console.log(super.constructor === A);
        this.age = age;

    }
    getAge() {
        return this.age;
    }
}

var b = new B('hank',50);
console.log(b.constructor === B) ;  //true
console.log(b.getName());  // hank
console.log(b.getAge());   // 50


class C extends A {
    static foo() {
        super.prototype.say();
        console.log('say:', super.constructor === A );
        console.log(super.say === A.say);
    }
}

var c = new C();
c.constructor.foo();
//C.foo();


//
console.log(['1','2','3'].map(parseInt));

var a=1,
    bb= function a(x) {
        x&&a(--x);

    };
   console.log(a);
console.log(typeof a);

// this作用域统一
vue = {
    data: ['girl', 'boy'],
    init: function() {
         setTimeout(e => {
             console.log(this.data) // ['girl', 'boy']
         });
    }
};
vue.init();