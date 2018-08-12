/**
 * Created by hank on 2017/3/24.
 */
function Person(){
    this.name = 'hank';
}
Person.prototype.getName = function(){
    return  this.name;
};
//男人
function Man(){
    this.name = 'john';
}

Man.prototype = new Person();

var  man = new Man();
console.log(man.getName()); // john
console.log( Man.prototype.constructor instanceof  Man); // false
console.log(Man.prototype.constructor);//[Function: Person]

