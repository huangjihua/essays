/**
 * Description: 装饰者模式
 * User: hank.online@foxmail.com
 * Date: 2018/8/6
 * Time: 下午1:28
 *
 */

/*
* 装饰者模式 在装饰者模式中，可以在运行时动态添加附加功能到对象中。
实现装饰者模式的其中一种方法是使得每个装饰者成为一个对象，并且该对象包含了应该被重载的方法。
每个装饰者实际上集成了目前已经被前一个装饰者进行增强后的对象。
* */

function Sale(price) {
    this.price = price || 100;
}
Sale.prototype.getPrice = function () {
    return this.price;
};
Sale.decorators = {};
Sale.decorators.fedtax = {
    getPrice: function() {
        var price = this.uber.getPrice();
        price += price * 5/100;
        return price;
    }
};
Sale.decorators.quebec = {
    getPrice: function() {
        var price = this.uber.getPrice();
        price += price * 7.5/100;
        return price;
    }
};
Sale.decorators.money = {
    getPrice: function() {
        return "$" + this.uber.getPrice().toFixed(2);
    }
};
Sale.decorators.cdn = {
    getPrice: function () {
        return "CDN$" + this.uber.getPrice().toFixed(2);
    }
};
Sale.prototype.decorate = function (decorator) {
    var F = function() {},
        overrides = this.constructor.decorators[decorator],
        i, newobj;
    F.prototype = this;
    newobj = new F();
    newobj.uber = F.prototype;
    console.log(this.constructor.decorators);
    for (i in overrides) {
        if(overrides.hasOwnProperty(i)) {
            newobj[i] = overrides[i];
        }
    }
    // console.log(newobj);

    return newobj;
};

var sale = new Sale(100);
sale = sale.decorate('fedtax');
sale = sale.decorate('quebec');
sale = sale.decorate('money');
console.log(sale.getPrice());