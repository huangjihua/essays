/**
 * Created by hank on 2017/1/17.
 */

function _LazyMan(name) {
    this.tasks = [];
    var self = this;

    var fn =(function(n){
        var name = n;
        return function(){
            console.log("Hi! This is " + name + "!");
            self.next();
            console.log(1,self.tasks);
        }
    })(name);
    this.tasks.push(fn);
    setTimeout(function(){
        self.next();
        console.log(2,self.tasks.length);
        console.log(' 在下一个事件循环启动任务');
    }, 0); // 在下一个事件循环启动任务
}

/* 事件调度函数 */
_LazyMan.prototype.next = function() {
    var fn = this.tasks.shift();
    console.log(fn);
    fn && fn();
}

_LazyMan.prototype.eat = function(name) {
    var self = this;
    var fn =(function(name){
        return function(){
            console.log("Eat " + name + "~");
            self.next()
        }
    })(name);
    this.tasks.push(fn);
    return this; // 实现链式调用
}

_LazyMan.prototype.sleep = function(time) {
    var self = this;
    var fn = (function(time){
        return function() {
            setTimeout(function(){
                console.log("Wake up after " + time + "s!");
                self.next();
            }, time * 1000);
        }
    })(time);
    this.tasks.push(fn);
    return this;
}

_LazyMan.prototype.sleepFirst = function(time) {
    var self = this;
    var fn = (function(time) {
        return function() {
            setTimeout(function() {
                console.log("Wake up after " + time + "s!");
                self.next();
            }, time * 1000);
        }
    })(time);
    //方法在数组的开头添加一个或者多个元素，并返回数组新的 length 值
    this.tasks.unshift(fn);
    return this;
}

/* 封装 */
function LazyMan(name){
    return new _LazyMan(name);
}

// LazyMan('Hank');
// LazyMan('Hank1').sleep(10);

