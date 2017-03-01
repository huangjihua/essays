/**
 * Created by hank on 2017/1/11.
 */
var b = [2,3,8,3,1,5];
// Array.prototype.sort1 = function () {
//     var newArr = [];
//     var arr =this;
//     var  min;
//     // if(typeof  arr == 'array'){
//     //
//     // }
//     for(var i=0;i<arr.length;i++) {
//         min = Math.min.apply(null, arr);
//         newArr.push(min);
//     // console.log(this);
//    // console.log(min);
//         arr.slice(r(arr,min),1);
//     }
//     function r(arr,m) {
//         for(var k in arr ){
//             if(arr[k] == m){
//                 return k;
//             }
//         }
//         console.log(newArr.join(''));
//     }
// };
// b.sort1() ;

//方法二

function sort(arr) {
    var i,j;
    for(i=0;i<arr.length;i++){
        var temp;
        var flag =0;
        for (j=0;j<arr.length;j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j+1];
                arr[j+1] =arr[j];
                arr[j] = temp;
                flag =1;
            }
        }
        if(flag  == 0) break;
    }
    return arr;
}
console.log(sort(b));

//另一种实现
const sort3 = (arr, fn)=> {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (fn(arr[i], arr[j]) > 0) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
};

const a = [3, 2, 1];
sort3(a, (a, b)=>a - b);
console.log(a);// [1, 2, 3]


//es6自身实现的sort
console.log([88,22,99,4,2].sort(function (a,b) {
    return b-a;
}));

var arr1 =[1,3,4,6];
console.log(arr1.reduce((a,b) => a+b));

console.log(arr1.slice(1));
console.log(arr1.slice(-2));//
console.log(arr1.slice(1,3)); //不包括第3个