/**
 * description: Vue2
 * author: huangjihua
 * email: hank.online@foxmail.com
 * date: 2019-06-02  19:51
 */


// import {Watcher} from "./Watcher";
// import {Observer} from './Observer';

 class Vue {
    constructor(options) {
        this._data = options.data;
        new Observer(this._data);
        let watcher = new Watcher(this,);
    }
}