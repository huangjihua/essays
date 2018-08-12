/**
 * Description: 工厂模式
 * User: hank.online@foxmail.com
 * Date: 2018/8/6
 * Time: 下午1:41
 *
 */

/*
工厂模式 设计工厂模式的目的是为了创建对象。  ES6重写抽象工厂模式

抽象工厂模式并不直接生成实例， 而是用于对产品类簇的创建。
我们同样使用new.target语法来模拟抽象类，并通过继承的方式创建出
UserOfWechat, UserOfQq, UserOfWeibo这一系列子类类簇。使用getAbstractUserFactor来返回指定的类簇。
*/

class User {
    constructor(type) {
        if (new.target === User) {
            throw new Error('抽象类不能实例化!')
        }
        this.type = type;
    }
}

class UserOfWechat extends User {
    constructor(name) {
        super('wechat');
        this.name = name;
        this.viewPage = ['首页', '通讯录', '发现页']
    }
}

class UserOfQq extends User {
    constructor(name) {
        super('qq');
        this.name = name;
        this.viewPage = ['首页', '通讯录', '发现页']
    }
}

class UserOfWeibo extends User {
    constructor(name) {
        super('weibo');
        this.name = name;
        this.viewPage = ['首页', '通讯录', '发现页']
    }
}

function getAbstractUserFactory(type) {
    switch (type) {
        case 'wechat':
            return UserOfWechat;
            break;
        case 'qq':
            return UserOfQq;
            break;
        case 'weibo':
            return UserOfWeibo;
            break;
        default:
            throw new Error('参数错误, 可选参数:superAdmin、admin、user')
    }
}

let WechatUserClass = getAbstractUserFactory('wechat');
let QqUserClass = getAbstractUserFactory('qq');
let WeiboUserClass = getAbstractUserFactory('weibo');
console.log(WechatUserClass);

let wechatUser = new WechatUserClass('微信小李');
let qqUser = new QqUserClass('QQ小李');
let weiboUser = new WeiboUserClass('微博小李');

console.log(wechatUser);