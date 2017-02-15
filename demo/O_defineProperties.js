/**
 * Created by hank on 2016/12/26.
 */
var obj	= {};
Object.defineProperties(obj,{
    "propertyOne":{
        value: true,
        writable:true
    },
    "propertyTwo":{
        value: "Hello",
        writable: false
    }
});
console.log(obj.propertyTwo); // Hello
console.log(obj.propertyOne); // true
console.log(Object.prototype.hasOwnProperty.call(obj,"propertyOne")); //true
console.log(Object.prototype.hasOwnProperty.call(obj,"propertyThree")); //false
console.log('--------');

