  //***reduce测试**
//   const arr = [1, 2, 3,4,5]
//   const sum = arr.reduce((current, item)=> {
//     return current+item
//   }, 0)
//   console.log(sum)

// 高级用法  
// 二维数组转为一维数组
// let arr = [[1, 2], [3, 4], [5, 6]].reduce((acc, item)=>{
//     return acc.concat(item)
// }, [])
// console.log(arr)

//计算数组中每个元素出现的次数
// let names = ['tom', 'jim', 'jack', 'tom', 'jack'];
// const countNames = names.reduce((allNames, name) => {
//   if (name in allNames) {
//     allNames[name] ++;
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});

// console.log(countNames)  // { tom: 2, jim: 1, jack: 2 }

// let a = Object.prototype.toString.call(null)
// let b = Object.prototype.toString.call([])

// let a = + '1'

// + '1' = 1
//  + 'b' = Nan
// console.log(a)
// console.log(b)

// let a = 3 + '2019/1/1'

// // 加号规则 当一个
// console.log(a)

// 来测试数组的方法：

// 数组的所有方法： 


// let testArr = [0,1,2,3,4,5,6,7,8,9];
// // slice()  切片
// // let a = testArr.slice(0 , 3);   // 0 1 2    从当前索引到不包括 包括3这个后面这个元素；
// // console.log(a)
// // console.log(testArr.unshift());   // 10   是给当前数组前面增加一项 返回值是数组的新长度
// // push() 和unshift相反
// // testArr.unshift(10)
// console.log(testArr)

// // pop  shift 与上面相反 就是删除；

// // testArr.splice(0,3);   切割原数组  slice是复制
// console.log(testArr)
// // console.log(testArr.join('-'))    //按照指定的分隔符连接成字符串

// console.log(testArr.reverse());
// // 兼容性不好：
// // indexOf:返回获取项在数组中的索引
// // lastIndexOf:返回获取项在数组中出现的最后一次索引
// // forEach: 循环遍历数组 参数是一个匿名函数 默认返回为undefined
// // map：循环遍历数组 参数是一个匿名函数

// console.log(testArr.indexOf(6));  //'6'是不行的  返回索引
// console.log(testArr.lastIndexOf(6))    //最后一次出现的索引  也就是索引位置更大的


// let a = [1,2,3,4,5]
// let b = a.filter(item => {
//   return item % 2==0;
// })
// console.log(b)

// let sum = a.reduce((acc, item) => {
//   return acc + item     //返回的值会覆盖掉初始值，最终
// }, 0)   
// console.log(sum)    //

// map、fliter\ reduce
// 三个常常一起考 
// map遍历数组每一项，通过回调函数返回的值组成一个新数组
// fliter 便利数组每一项， 通过回调函数返回的值组成一个新数组
// reduce也是类似 ，不过 他可以多传一个参数，作为初始值。  回调函数接受的值（初始值，当前元素，当前元素索引，原数组）
// 返回的值会覆盖掉初始值，每一次这个值都会作为参数被传入回调函数，作为回调函数的第一个参数使用。