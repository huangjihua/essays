/**
 *  现代的模块机制----实现模块加载器
 * Created by hank on 2017/2/25.
 */

//定义实现一个模块定义／模块加载器
var MyModule = (function Manger(){
        var module = {};
        function  define(name,deps,impl) {
            for(var i=0;i< deps.length;i++){
                deps[i] = module[deps[i]];
            }
            module[name] = impl.apply(impl,deps);
        }
        function get(name) {
            return module[name];
        }
        return {
            define:define,
            get:get
        }
    })();

//定义模块bar
MyModule.define('bar',[],function () {
   function hello(msg) {
       return  msg;
   }
   return {
       hello:hello
   };
});
//定义模块foo,并且该模块又依赖bar模块
MyModule.define('foo',['bar'],function (bar) {
    var msg = 'Hello foo';
    function awesome() {
        console.log(bar.hello("Hello Bar!"));
    }
    return {
        awesome:awesome
    };
});

var bar = MyModule.get('bar');
var foo = MyModule.get('foo');
console.log(
bar.hello('Hello World!')
);
foo.awesome();
