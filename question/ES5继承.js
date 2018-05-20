/**
 * description: 继承
 * author: huang ji hua
 * email: hank.online@foxmail.com
 * date:  下午5:38
 */

/**
 *
 * 父类，带属性
 * @constructor
 * @param name 名字
 * @param type  动物分类
 * @constructor
 */
function Animal(name,type) {
  this.name = name || 'your name';
  this.type= type || 0;
  this.coatColor= ['white','block','yellow','brown']; //引用类型
    //函数也是引用类型
  this.speak = function () {
      console.log(this.name+' speaking .');
  }
}

/**
 * 为父类新增一个方法
 * @returns {boolean}
 */
Animal.prototype.say= function () {
     console.log('my name  is '+this.name);
};

/**
 * 子类
 * @constructor
 */
function Dog(name) {
     this.name = name;
     this.foot= 4;
}

//实现继承-原型链继承 => (子类 -> 子类原型->父类) ;继承 注意,继承必须要写在子类方法定义的前面
Dog.prototype = new Animal();

/**
 * 子类方法
 *  为子类新增一个方法(在继承之后,否则会被覆盖),否则报错（ dog.run is not a function）
 */
Dog.prototype.run = function () {
    console.log('The '+ this.name +' was runing.');
};

var dog = new Dog('taiSen');
console.log(dog.name); //dog    --子类覆盖父类的属性
console.log(dog.type); // 0     --父类的属性
console.log(dog.foot); //4      --子类自己的属性
dog.say(); //my name  is taiSen    --继承自父类的方法
dog.run(); //The taiSen was runing. --子类自己的方法

//以上,看起来我们好像已经完成了一个完整的继承了,这个就是原型链继承
//但是，原型链继承有一个缺点，就是属性如果是引用类型的话，会共享引用类型 ，
// 接下来我个Animal增加引用类型属性  this.coatColor
//测试下
var dog1= new Dog();
var dog2 = new Dog();
dog1.coatColor.push('blue');
console.log(dog1.coatColor); // [ 'white', 'block', 'yellow', 'brown', 'blue' ]
console.log(dog2.coatColor); // [ 'white', 'block', 'yellow', 'brown', 'blue' ]
// dog1,dog2 输出的coatColor一样，说明引用类型属性会被所有实例共享--- 这就是原型链继承的缺点

//那么我们如果解决这个问题呢？ 接下来我们就要借用————构造函数继承

//子类
function Cat() {
    Animal.call(this)  // 构造函数继承(继承属性)
}

//测试下
var cat1= new Cat();
var cat2 = new Cat();
cat1.coatColor.push('red');
console.log(cat1.coatColor); // [ 'white', 'block', 'yellow', 'brown', 'red' ]
console.log(cat2.coatColor); // [ 'white', 'block', 'yellow', 'brown']
//从结果看，我们就解决了引用类型被所有实例共享的问题了。

// 注意：这里跟 原型链继承 有个比较明显的区别是并没有使用prototype继承,而是在子类里面执行父类的构造函数,
// 相当于把父类的代码复制到子类里面执行一遍,这样做的另一个好处就是可以给父类传参
//比如:
function Pig(name) {
    Animal.call(this,name);
}
var pig1= new Animal('big Pig');
var pig2 = new Animal('small Pig');
console.log(pig1.name); // big Pig
console.log(pig2.name); //small Pig
//看起来是不是很像java,C#语言啊


// 但是,构造函数解决了引用类型被所有实例共享的问题,但正是因为解决了这个问题,导致一个很矛盾的问题出现了,——————函数也是引用类型,
//  也没办法共享了.也就是说,每个实例里面的函数,虽然功能一样,但是却不是同一个函数,就相当于我们每实例化一个子类,就复制了一遍的函数代码

console.log(pig1.speak===pig2.speak); // false

// 以上代码可以证明,父类的函数,在子类的实例下是不共享的
