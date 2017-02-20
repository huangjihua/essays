/**
 * Created by hank on 2017/2/19.
 */

// //总是在任务队列开始前执行
// process.nextTick(function A() {
//     setTimeout(function () {
//         console.log('timeout Fired');
//     });
//     console.log("nextTick A");
//     process.nextTick(function B() {
//         console.log("nextTick B");
//     });
// });
// // 一般情况下总是在当前任务队列的尾部添加，一下情况的执行结果不确定
// setImmediate(function A() {
//     console.log("setImmediate A");
//     setImmediate(function B() {
//         console.log("setImmediate B");
//     });
//     setTimeout(function timeout() {
//         console.log('timeout Fired');
//     },0);
// });
//setImmediate指定的回调函数总是排在setTimeout前面，
// 这种情况只发生在递归调用。

setImmediate(function (){
    setImmediate(function A() {
        console.log(1);
        setImmediate(function B(){console.log(2);});
    });
    setTimeout(function timeout() {
        console.log('TIMEOUT FIRED');
    }, 0);
});


