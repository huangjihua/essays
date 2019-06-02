/**
 * description: Dep
 * author: huangjihua
 * email: hank.online@foxmail.com
 * date: 2019-06-01  17:31
 */

import Watcher from './Watcher';

export default class Dep {
    constructor () {
        this.subs = [];
    }

    addSub (sub: Watcher) {
        this.subs.push(sub);
    }

    removeSub (sub: Watcher) {
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
