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