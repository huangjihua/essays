/**
 * Created by hank on 2017/3/6.
 */
/*
Node.js 中的全局对象是 global，在Node.js中定义一个全局变量 ,
所有全局变量（除了global本身以外）都是 global 对象的属性。

 node加载文件后会把文件中的代码封装到(funtion(exports,module){
    //自己的文件代码
 })();

 如果单单写 name = 'hank' 可以挂到全局，查看全局 global.name 输出是hank

 node 中文件是模块化的，每个文件内定义的变量可以说是局部变量（只在该文件中能访问到）。
 若要定义全局变量：GLOBAL.age = 10 ;若要其它文件能访问则导出模块中 exports.age = 10.
 */
name = 'hank';
var age =10;
global.sex = 'man';
function foo(){
    console.log(this===global); //true
    console.log(this===module);  //false
    console.log(this.name);  //hank
    console.log(this.age); // undefined
    console.log(this.sex) ;  //man
}
foo();
console.log('---------------------------');
console.log(this===exports); //true
console.log(this===global); //false
console.log(this.name) ;// undefined
console.log(global.name); // hank
console.log(this.age); // undefine
console.log(this.sex) ;  //undefine