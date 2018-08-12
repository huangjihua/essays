/**
 * Description: 观察者模式
 * User: hank.online@foxmail.com
 * Date: 2018/8/6
 * Time: 下午1:44
 *
 */

/*
观察者模式 这种模式背后的主要动机是促进形成松散耦合。
在这种模式中，并不是一个对象调用另一个对象的方法，
而是一个对象订阅另一个对象的特性活动并在状态改变后获得通知。
*/

var publisher = {
    subscribers: {
        any: []
    },
    //订阅
    subscribe: function (fn, type) {
        var type = type || 'any';
        if (typeof this.subscribers[type] === 'undefined') {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push(fn);
    },
    //取消订阅
    unsubscribe: function (fn, type) {
        this.visitSubscribers('unsubscribe', fn, type);
    },
    //发布
    publish: function (publication, type) {
        this.visitSubscribers('publish', publication, type);
    },
    //访问订阅者
    visitSubscribers: function (action, arg, type) {
        var pubtype = type || 'any',
            subscribers = this.subscribers[pubtype];
        for (var i = 0; i < subscribers.length; i++) {
            if (action === 'publish') {
                subscribers[i](arg);
            } else {
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

function makePulisher(o) {
    for (var i in publisher) {
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
            o[i] = publisher[i];
        }
    }
    o.subscribers = {
        any: []
    };
}

var paper = {
    daily: function () {
        this.publish('big news today');
    },
    monthly: function () {
        this.publish('interesting analysis', 'monthly');
    }
};
makePulisher(paper);
// console.log(paper);

var joe = {
    drinkCoffee: function (paper) {
        console.log('Just read ' + paper);
    },
    sundayPreNap: function (monthly) {
        console.log('About to fall asleep reading this' + monthly);
    }
};

// paper.subscribe(joe.drinkCoffee);
// paper.subscribe(joe.sundayPreNap, 'monthly');
//
// paper.daily();
// paper.daily();
//
// paper.daily();
// paper.monthly();

paper.subscribe(function (arg) {
    console.log('hank'+ arg);
}, 'hank').subscribers.hank[0]();
console.log(publisher);