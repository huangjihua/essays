/**
 * Description: ES6箭头函数
 * User: hank.online@foxmail.com
 * Date: 2018/8/6
 * Time: 下午4:58
 *
 */

//没有参数要有小括号
let show = () => {

}

//只有一个参数则可以省略小括号
let go = url => {
    location.href = url
}

// 多个参数
let add = (x, y) => {
    return x + y
}

// 事件
document.addEventListener('click', e => {
    console.log(e)
})

// this作用域统一
vue = {
    data: ['girl', 'boy'],
    init: function() {
        setTimeout(e => {
            //this=>vue
            console.log(this.data); // ['girl', 'boy']
        });
    }
};
vue.init();

// 不能使用argument
var func = () => {
    console.log(arguments);
};
func(55);

// 箭头函数不能用new
var Person = (name, age) => {
    this.name = name;
    this.age = age;
};
var p = new Func('John', 33); // error