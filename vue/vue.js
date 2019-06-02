/**
 * description: defineReactive-test
 * author: huangjihua
 * email: hank.online@foxmail.com
 * date: 2019-06-01  16:48
 */
function observe(value, cb) {
    Object.keys(value).forEach((key) => defineReactive(value, key, value[key] , cb))
}
function defineReactive(data,key,val,cb) {
    let dep = [];
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function () {
            dep.push(window.target);
            return val;
        },
        set:function (newVal) {
            if(val === newVal) {return ;}
            //新增
            for(let i=0;i<dep.length;i++){
               if(dep[i]) dep[i](newVal,val);
            }
            val = newVal;
            cb.call(this,val,newVal); // render渲染
        }
    });
}

class Vue {
    constructor(options) {
        this._data = options.data;
        observe(this._data, options.render)
    }
}