/**
 * Created by hank on 2017/2/17.
 */
var a = new Object();
a.value = 1;
//最简单的解决引用类型深拷贝问题
b = JSON.parse(JSON.stringify(a));
b.value = 2;

//
Object.prototype.clone = function () {
    var Constructor = this.constructor;
    var obj = new Constructor();
    for (var attr in this) {
        if (this.hasOwnProperty(attr)) {
            if (typeof(this[attr]) !== "function") {
                if (this[attr] === null) {
                    obj[attr] = null;
                } else {
                    obj[attr] = this[attr];// this[attr].clone(); 这么写不复制对象属性值
                }
            }
        }
    }
    return obj;
};

var  c = a.clone();
c.value = 231;
console.log(a.value);
console.log(b.value);
console.log(c.value);