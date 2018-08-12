/**
 * description: 云鸟面基题
 * author: huangjihua
 * email: hank.online@foxmail.com
 * date: 18/8/11  下午10:26
 */
// Promise 实现里最重要的部分 =>then回调的处理
// new Promise().then(function () {
//     console.log(this);
// });

console.log(new Promise((resolve,reject)=>{
    resolve();
}).then(function (value) {
    console.log('state：',this.state);
    console.log('new-value:',1)
},function (errors) {
    console.log('new-errors:',errors)
}).then(function (value) {
    console.log(3)
},function (errors) {
    console.log(4)
}));
var p= new Promise( (resolve,reject)=>{
    resolve();
});

p.then(function (value) {
    console.log('p：',p);
},function(error){

});
console.log(p);
