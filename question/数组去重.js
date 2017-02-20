/**
 * Created by hank on 2017/2/19.
 */

var  arr  = [1,2,1,'2',3,4,1,4,'2',{a:1},{b:1,c:2},{a:1}];

/* --------------------------------使用Set--------------------- */

// Set和Map是ES6中新增的数据结构
// Set直接可以存储不重复的一组key,这个key也可以是对象,字符串等
Array.prototype.unique_set =function () {
    return Array.from(new Set(this));
};
console.log('-----利用ES6中的Set  输出结果-----');
console.log(arr.unique_set());
Array.prototype.unique_map =function () {
    const seen = new map();
    return this.filter(a > seen.hasOwnProperty(a) && seen.set(a,1));
};
console.log('-----利用ES6中的Map  输出结果-----');
console.log(arr.unique_set());
/* ------------------------------------三种方法 ------------------------- */
 //1.利用indexOf判断新数组
   //underscore.js中实际上也是使用的类似的indexOf
  //传入数组
  function unique1(arr){
    var tmpArr = [];
    for(var i=0; i<arr.length; i++){
      //如果当前数组的第i已经保存进了临时数组，那么跳过，
      //否则把当前项push到临时数组里面
      if(tmpArr.indexOf(arr[i]) == -1){
        tmpArr.push(arr[i]);
      }
    }
    return tmpArr;
  }
console.log('-----利用indexOf判断新数组  输出结果-----');
console.log(unique1(arr));

//2.利用indexOf判断旧数组
function unique2(arr){
  var tmpArr = []; //结果数组
  for(var i=0; i<arr.length; i++){
    //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
    //那么表示第i项是重复的，忽略掉。否则存入结果数组
    if(arr.indexOf(arr[i]) == i){
      tmpArr.push(arr[i]);
    }
  }
  return tmpArr;
}
console.log('-----利用indexOf判断旧数组  输出结果-----');
console.log(unique2(arr));
// 利用hash查找
// 这里利用了JS对象的实现就是hash表的特性
  function unique3(arr){
    var tmpArr = [], hash = {};//hash为hash表
    for(var i=0;i<arr.length;i++){
      if(!hash[typeof arr[i] + arr[i]]){//如果hash表中没有当前项
        hash[typeof arr[i] +  arr[i]] = true;//存入hash表
        tmpArr.push(arr[i]);//存入临时数组
      }
    }
    return tmpArr;
  }
console.log('-----利用hash查找  输出结果-----');
console.log(unique3(arr));

  /* ------------------------------------数组方法 ----------------------------- */
  console.log('-----数组扩展上面： unique1,2,3中方法--');

  Array.prototype.unique1 =  function () {
      var newArray = [];
      for (var i = 0; i < this.length; i++) {
          //判断当前数组的第i项在当前数组中值第一次出现的位置是不是=i，如果!=i,表示有重复，忽略掉。
          if (this.indexOf(this[i]) == i) {
              newArray.push(this[i]);
          }
      }
      return newArray;
  };

  Array.prototype.unique2 = function () {
      var newArray = [];
      for(var i=0 ;i < this.length;i++){
          //判断新数组里的是否存在该值
          if(newArray.indexOf(this[i]) == -1){
              newArray.push(this[i]);
          }
      }
      return newArray;
  };
  console.log(arr.unique2());
 Array.prototype.unique3 = function () {
     var newArray = [], hash = {};
     // for循环时，每次取出一个元素与对象进行对比
     // 如果这个元素不重复，则将它存放到newArray数组中
     // 同时把这个元素的内容作为对象的一个属性，并赋值为1,
     // 存入到第2步建立的对象中
     for(var i =0 ;i<this.length;i++){
         // 检测在hash对象中是否包含遍历到的元素的值
         //(typeof this[i])+this[i] 为了处理number与string类型，
         // 但是如果数组里包含object类型的对象（如：{a:1}）此方法不可行
         if(!hash[(typeof this[i])+this[i]]){
             // 如果不包含，存入object对象中该属性名的值设置为1
             hash[(typeof this[i])+this[i]] = true;
             // 如果不包含，将存入对象的元素的值推入到newArray数组中
             newArray.push(this[i]);
         }
     }
     return newArray;
 };
console.log(arr.unique3());

