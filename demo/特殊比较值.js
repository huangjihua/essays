/**
 * Created by hank on 2016/12/26.
 */
// 看看他们的值，并说明原因
console.log(1==true); //true
console.log(0==false); //true
console.log(!0==false); //false
console.log('---[]-----');
console.log([]==[]); //false
console.log([]==![]); //true
console.log([]==''); //true =>[]等于空
console.log(![]);//false
console.log('----[]----');
console.log(1==''); //false
console.log(0=='');//true

console.log(undefined==null); //true
console.log(''=='');//true
console.log('-----NaN----');
console.log(!NaN); //true
console.log(NaN == null); //false
console.log(NaN==undefined);//false
console.log(NaN=='');//false
console.log(NaN == 0);//false
