/**
 * Created by hank on 2017/1/11.
 */
function A(){
    this.a=null;
    this.b=null;
}

var pro = A.prototype;
console.log(pro);

//模拟重载
pro.add = function() {
    if (arguments.length == 1) {
        console.log(arguments[0]);
    }
    if (arguments.length == 2) {
        result = arguments[0] + arguments[1];
        console.log(result);
    }
};
console.log(pro);
var a = new A();
console.log(a);
a.add(1);
a.add(1,2);

function  test() {
    this.name="hank";
    console.log('test');
}



console.log(typeof test);
var tt = new test();
 console.log(tt.__proto__);
console.log(Object.getPrototypeOf(tt)== tt.__proto__);
