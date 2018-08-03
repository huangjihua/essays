/**
 * Description: 20180730 马蜂窝面积题
 * User: hank.online@foxmail.com
 * Date: 2018/8/1
 * Time: 下午6:10
 *
 */

//第一题
//增加数组原形属性
Array.prototype.max =function () {
    return 1;
};
const seats=[1,2,3,4];
let total =0;
//注意这里的 for in 考点 ,会遍历出数组原型上的属性名
for(const  i in seats){
    console.log(i);
    total+= parseInt(i,10);
    // console.log(total);
}

console.log(total); // NaN

//第二题  题:新建一个长度10的数组，并向数组插入1-50的随机数并且不能重复

function creatRandomArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        add(arr);
    }
    return arr;
}
function  add(arr) {
    for(let i=0;i>-1;i++){
        let flag = true;
        let num = Math.floor(Math.random()*50)+1;
        for(let i in arr){
            if(arr[i] === num){
                flag =false;
                break;
            }
        }
        if(flag){
            arr.push(num);
            return;
        }
    }
}
console.log(creatRandomArray());


//第三题
//题:实现parseData函数，参数为不固定的多维数组，数组值组合成一维数组
function parseData(arrays) {
    let arr=[""];
    if(arrays instanceof  Array){
        //遍历二维数组 让当前数组与下一个数组继续组合
        arrays.forEach(function (value,index,array) {
            //两个数组组合 并返回组合后的数组
            arr = compose(arr,value);
        });
    }
    return arr;

}
function compose(arr1,arr2) {
    let arr =[];
    arr1.forEach(function (value,index,arr1) {
        let v1=value;
        arr2.forEach(function (value,index,arr2) {
            let v2 =value;
            arr.push(v1+''+v2);
        })
    });
    return arr;
}
const  data =[['a'],['A','B'],['0','1']];
let result = parseData(data);
console.log(result); //[ 'aA0', 'aA1', 'aB0', 'aB1' ]
let  num =[1,3,2,4].reduce(function (perv,cur,index,array) {
    console.log('perv:',perv);
    console.log('cur:',cur);
    console.log('index:',index);
    console.log('array:',array);
    return  perv+cur;
});
console.log(num);