/**
 * Created by hank on 2016/12/27.
 */
var obj  = {
    prop: function () {},
    foo: "hank"
};
// 可以添加新的属性，已有属性的值可以修改，可以删除
obj.foo = "steven";
obj.look = "boy";
console.log(obj); //{ prop: [Function], foo: 'steven', look: 'boy' }
delete obj.prop;
console.log(obj); //{ foo: 'steven', look: 'boy' }
//开始密封了
var o = Object.seal(obj);
console.log(o===obj); //true
console.log(Object.isSealed(obj) === true); //true
//仍然可以修改密封对象上的属性的值
obj.foo = "Hello seal";
console.log(obj); //{ foo: 'Hello seal', look: 'boy' }
//但不能把一个数据属性重定义成访问器属性
// Object.defineProperty(obj,"foo",{get:function () {
//     return 'test';
// }}); //抛出TypeError异常 TypeError: Cannot redefine property: foo
// 任何属性值以为的修改操作都会失败,严格模式下会抛出异常
    obj.age  = 10;
    delete obj.foo;
console.log(obj);
