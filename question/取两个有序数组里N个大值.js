/**
 * Created by hank on 2017/2/22.
 * 两个有序数组，用（On）方法写出原生的方法
 */

function getMoreArrayMaxValue(arr1,arr2,num){
    let arr=[],len1 = arr1.length-1,len2=arr2.length-1;
    for(let i=0;i<num;i++){
        if(arr1[len1]>arr2[len2]){
            arr.push(arr1[len1]);
            len1--;
        }else{
            arr.push(arr2[len2]);
            len2--;
        }
    }
    return arr;
}
console.log(getMoreArrayMaxValue([1,6,20],[8,15,19],3));

