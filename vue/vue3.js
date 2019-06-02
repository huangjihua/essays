
/**
 * description: vue3
 * author: huangjihua
 * email: hank.online@foxmail.com
 * date: 2019-06-02  21:49
 */
class Dep {
    constructor () {
        this.subs = [];
    }

    addSub (sub) {
        this.subs.push(sub);
    }

    removeSub (sub) {
        remove(this.subs, sub);
    }
    notify () {
        // stabilize the subscriber list first
        const subs = this.subs.slice();
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    }
}
function  remove(arr,item){
    if(arr.length){
        const index = arr.indexOf(item);
        if(index >-1){
            return arr.splice(index,1);
        }
    }
}

class Watcher {
    constructor (vm, expOrFn, cb) {
        this.vm = vm;
        // 在这里将观察者本身赋值给全局的target，只有被target标记过的才会进行依赖收集
        Dep.target = this;
        this.cb = cb;
        /*触发渲染操作进行依赖收集*/
        this.cb.call(this.vm);
    }

    update () {
        // const oldVvalue =this.value;
        this.cb.call(this.vm);
    }
}

class Observer {
    constructor(value,cb){
        this.value= value;
        if(!Array.isArray(value)){
            this.walk(value,cb);
        }
    }

    /**
     *walk 会将每一个属性都转成getter/setter的形式来侦测变化
     * 该方法只有在数据类型是object时被调用
     * @param obj
     */
    walk(obj,cb){
        const keys = Object.keys(obj);
        for(let i=0; i < keys.length; i++){
            defineReactive(obj,keys[i],obj[keys[i]]);
        }
    }
}

function defineReactive (obj, key, val, cb) {
    /*在闭包内存储一个Dep对象*/
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: ()=>{
            if (Dep.target) {
                /*Watcher对象存在全局的Dep.target中*/
                dep.addSub(Dep.target);
            }
            console.log('val:',val);
            return val;
        },
        set:newVal=> {
            /*只有之前addSub中的函数才会触发*/
            if(val === newVal) return;
            console.log('newval:',newVal);
            val = newVal; // 更新原对象属性
            dep.notify();
        }
    })
}
Dep.target = null;

class Vue {
    constructor(options) {
        this._data = options.data;
         new Observer(this._data,options.render,);
        let watcher = new Watcher(this._data, this._data ,options.render,options);
    }
}