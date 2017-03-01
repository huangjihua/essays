/**
 * 利用setTimeout代替setInterval的实现
 * Created by hank on 2017/2/25.
 */
// 为什么要用setTimeout来代替setInterval呢？这样作的好处又是啥？
// 因为，setInterval会带来一些问题，
// =>（1）某些间隔会被跳过（2）多个定时器代码之间的间隔可能会比预期的小
// 好处： 在前一个定时器执行完毕之前，不会想任务列表中插入新的定时器代码，
// 因此确保不会有任何缺失的间隔。而且，它可以保证在下一次定时器代码执行之前，
//至少需要等待指定的间隔，避免了连续执行。

setTimeout(function timer() {
    //需要执行的代码
    //setTimeout会等到定时器代码执行完毕之后才会重新调用自身(递归)，
    //要住注意的是要给匿名函数添加一个函数名，以便调用自身。
    // console.log(Math.random()*10);
    setTimeout(timer,1000);
},1000);

//一般面试中，主要是循环中使用定时器以及定时器中的this的指向问题。
//在setTimeout内部，this绑定采用默认绑定规则，就是说，在非严格模式下，this指向window;
//严格模式下，this指向undefined。