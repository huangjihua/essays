/**
 * Created by hank on 2017/1/21.
 * 实现js引擎如何查找属性
 */
function getProperty(obj,prop) {
    if(obj.hasOwnProperty(prop)){
        return obj[prop];
    }else if(obj.__proto__ !== null){
        //递归调用
        return getProperty(obj.__proto__,prop);
    }else{
        return undefined;
    }
}