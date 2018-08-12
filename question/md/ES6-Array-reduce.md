# Array 方法 reduce

 ## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
   
   ```js
    arr.reduce(callback[, initialValue])
   ```
   ## 参数 
  * callback 执行数组中每个值的函数，包括四个参数：
    - previousValue()  累加器累加的返回值，它是上一次调用时返回的累计值，或initialValue
    - currentValue 数组中正在处理的元素
    - currentIndex `可选` 数组中正在处理的当前元素的下标。如果提供了initialValue，则下标为0，否则下标为1。
    - array `可选` 调用reduce的数组
    - initialValue `可选` 用作第一个参数的值，如果没有提供初始值，则将使用数组中的第一个元素。在没有初始值的空数组上调用reduce将报错。
 ## 返回值
   函数累计处理的结果
   
 ## 图解参数
  