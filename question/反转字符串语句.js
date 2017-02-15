/**
 * Created by hank on 2017/1/16.
 */
function  revese(str) {
    var arr = str.split(' ');
    var temp = [];
    for(var i=arr.length-1;i>=0;i--){
        temp.push(arr[i]);
    }
    return temp;
}

console.log(revese('Hello World !').join(' '));