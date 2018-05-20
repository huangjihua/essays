/**
 * Created by hank on 2017/3/24.
 */
var arr = [1,3,7,9];    // 实现组成3位数字， 每个位上数字都只出现一次

var  group  =function(){
     let  sw = [],tt=[],temp=[],gw=[];
    for(let i=arr.length-1;i>=0;i--){
        sw.push(arr[i]);
        tt.push(arr[i]);
    }
   for(let i=arr.length-1;i>=0;i--){
       temp.push(arr[i]+''+sw[i]);
   }
    console.log(temp);
};
group();

function getRandom(count,len) {
    let arr = [];
    let obj = {};
    for(let i=0;i<count;i++){
        let rm=  Math.floor(Math.random()* len);
        if(!obj[rm]){

        }
    }
}


//
let hasMap = {};
let test = [[1, 2, 2, 6], [6, 6, 5, 6], [66, 44, 66]];

const loop = (list) => {
    list.forEach((item, index) => {
        if (item instanceof Array) {
            loop(item)
        } else {
            if (!hasMap[item]) {
                hasMap[item] = 1
            } else {
                list.splice(index, 1)
            }
        }
    })
};
loop(test);
console.log(JSON.stringify(test));