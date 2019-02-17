// var module = require('./a.js')   // 这里的  module 不能用let
// let A = require('./a.js');
// let b = A.a
// b()
// console.log(b)

// module 是 Node 独有的一个变量
// 其实就是封装了一层立即执行函数

//静态打包 


// ES Module
// CommonJS 支持动态导入，也就是 require(${path}/xx.js)  ES不支持
// CommonJs 同步导入
// Es       异步导入

// CommonJS 都是值拷贝，导出的值变了  不会影响到原来的
// 而 ESjs  ES Module 采用实时绑定的方式， 会影响到原来的 都是指向同一个地址

// console.log(1&&2);   // 2   
// console.log(1 || 3)  // 1

// let period = 60 * 1000 * 60 * 2
// let startTime = new Date().getTime()
// let startTime2 = +new Date()    //效果和上面的一样
// let startTime3 = new Date()
// console.log(typeof(Date.now()))   //number
// let count = 0
// let end = new Date().getTime() + period
// let interval = 1000
// let currentInterval = interval

// function loop() {
//   count++
//   // 代码执行所消耗的时间
//   let offset = new Date().getTime() - (startTime + count * interval);
//   let diff = end - new Date().getTime()
//   let h = Math.floor(diff / (60 * 1000 * 60))
//   let hdiff = diff % (60 * 1000 * 60)
//   let m = Math.floor(hdiff / (60 * 1000))
//   let mdiff = hdiff % (60 * 1000)
//   let s = mdiff / (1000)
//   let sCeil = Math.ceil(s)
//   let sFloor = Math.floor(s)
//   // 得到下一次循环所消耗的时间
//   currentInterval = interval - offset 
//   console.log('时：'+h, '分：'+m, '毫秒：'+s, '秒向上取整：'+sCeil, '代码执行时间：'+offset, '下次循环间隔'+currentInterval) 

//   setTimeout(loop, currentInterval)
// }

// setTimeout(loop, currentInterval)

// let reg = /(1[1-2]\w[\d]{8}) | (1(\w){3}[\d]{7})/;
let reg = /1[1-2]\w[\d]{8} | 1(\w){3}[\d]{7}/
let a ='798411778945235 8745125321331 5123161877894523551325 451265132' 
let res = reg.exec(a);
a.split(reg)
console.log(a)
console.log(res)