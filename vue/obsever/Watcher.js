/**
 * description: Watcher
 * author: huangjihua
 * email: hank.online@foxmail.com
 * date: 2019-06-02  18:09
 */

class Watcher {
    constructor (vm, expOrFn, cb, options) {
        this.cb = cb;
        this.vm = vm;

        /*在这里将观察者本身赋值给全局的target，只有被target标记过的才会进行依赖收集*/
        Dep.target = this;
        /*触发渲染操作进行依赖收集*/
        this.cb.call(this.vm);
    }

    update () {
        this.cb.call(this.vm);
    }
}

/*

export default class Watcher{
    constructor(vm,expOrFn,cb){
        this.vm = vm;
        this.getter = parsePath(expOrFn);
        this.cb = cb;
        this.value = this.get();
    }
    get(){
        window.target = this;
        let  value = this.getter.call(this.vm,this.vm);
        window.target = undefined;
        return value;
    }
    update(){
        const oldValue = this.value;
        this.value = this.get();
        this.cb.call(this.vm, this.value,oldValue);
    }
}

// 读取字符串的keypath
const  bailRE = /[^\w.$]/;
function parsePath(path) {
    if(bailRE.test(path)){
        return;
    }
    const setments = path.split('.');
    return function (obj){
        for(let i=0;i<setments,length;i++){
            if(obj) return;
            obj = obj[setments[i]];
        }
        return obj;
    }
}
*/