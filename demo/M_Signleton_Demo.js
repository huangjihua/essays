/**
 * Created by hank on 2017/2/24.
 * 设计模式之单例模式
 */
//
var SingletonTester = (function () {
    //参数:传递给单例的一个集合
    function Singleton (args) {
        //设置args变量为接收的参数或者为空（如果没有提供的话）
        var args = args||{};
        //设置name参数
        this.name="SingletonTester";
        this.pointX = args.pointX || 6 ; //从接收的参数里获取，或者设置为默认值
        this.pointY = args.pointY || 8;
    }
    //实例容器
    var instance;
    var _static = {
        name:'SingletonTester',
        //获取实例的方法
        //返回Singleton的实例
        getInstance:function (args) {
            if(instance === undefined){
                instance = new Singleton(args);
            }
            return instance;
        }
    };
    return _static;
})();
var st = SingletonTester.getInstance({pointX:23,pointY:89});
console.log(st.pointX); //23

//实现方法一
function Universe() {
    // 缓存实例
    var instance;
    // 重新构造函数
    Universe = function Universe() {
        return instance;
    };
    // 后期处理原型属性
    Universe.prototype = this;
    // 实例
    instance = new Universe();
    // 重设构造函数指针
    instance.constructor = Universe;
    // 其它功能
    instance.start_time = 0;
    instance.bang = "Big";
    return instance;
}
// 测试
var uni = new Universe();
var uni2 = new Universe();
console.log(uni === uni2); // true
// 添加原型属性
Universe.prototype.nothing = true;
var uni = new Universe();
Universe.prototype.everything = true;
var uni2 = new Universe();
console.log(uni.nothing); // true
console.log(uni2.nothing); // true
console.log(uni.everything); // true
console.log(uni2.everything); // true
console.log(uni.constructor === Universe); // true