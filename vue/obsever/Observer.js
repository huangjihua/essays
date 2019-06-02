/**
 * description: Observer
 * author: huangjihua
 * email: hank.online@foxmail.com
 * date: 2019-06-02  19:27
 */
import Dep from "./Dep";

export class Observer {
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
        },
        set:newVal=> {
            /*只有之前addSub中的函数才会触发*/
            dep.notify();
        }
    })
}
Dep.target = null;