/**
 * description: this指向
 * author: huangjihua
 * email: hank.online@foxmail.com
 * date: 18/8/12  下午10:51
 */

function  fn() {
    console.log(this.toString());
}

function bn(fn) {
    arguments[0](); //Arguments
    fn();
}
bn(fn);
var obj ={
    foo:fn
};

obj.foo();
var obb = obj.foo;
obb();
fn();



//
function test(...args) {
    console.log( args.splice(0,args.length,6).length);
}

test(63434323636343);
