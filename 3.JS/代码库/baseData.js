// 玩玩基础类型：

// let date = new Date()
// // let a= date.toString()
// console.log(date)

// function throtte(fun, delay) {
//     let 
// }

// let array = [1,2,3]
// let a = array.toString()

// 对象转换为原始类型
// let a = {
//     // valueOf() {
//     //     return 0
//     // },
//     toString() {
//         return 1
//     },
//     // [Symbol.toPrimitive]() {   //在原始类型转换中 优先级最高
//     //     return 2
//     // }
// }
// console.log(a)
// console.log(a +1 )

// 优先级 toPrimitive 》 valueOf > toString;


// fn.bind().bind(a) 等于
// let fn2 = function fn1() {
//     return function() {
//       return fn.apply()
//     }.apply(a)
//   }
//   fn2()
// 可以从上述代码中发现，不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定，所以结果永远是 window。


// 类型转换总结 
// 如果类型不同的话就是
// + 号  有字符串 转换成字符串
// 有数字 转换为数字

// 原始类型存储的是一个值  对象类型存储的是地址

// let b = 'a' + 1    //a1
// let a = '5' + 1    // 51
// console.log(a)


// function test(person) {    //函数传参是传递对象指针的副本
//     let person ;
//     person.age = 26           //当前 p1 的值也被修改了
//     person = {                //将重新为person分配对象
//       name: 'yyy',
//       age: 30
//     }
//     return person
//   }
//   const p1 = {
//     name: 'yck',
//     age: 25
//   }
//   const p2 = test(p1)
//   console.log(p1) // -> ?     { name: 'yck', age: 26 }
//   console.log(p2) // -> ?     { name: 'yyy', age: 30 } 


// 类型转换
// 转换为布尔值    undefined \ null
// 转换为数字
// 转换为字符串

// console.log(typeof(NaN))
// let a = Boolean(NaN)
// console.log(a)
// Nan  居然是number类型


// 转Boolean
// 在条件判断时，除了 undefined， null， false， NaN， ''， 0， -0，其他所有值都转为 true，包括所有对象。
// let a = 4 * 'b'   
// let a = 4 * []        
// console.log(Number([]))   //0
// + 'b'  是NaN 

// 四则运算符
// 加法运算符不同于其他几个运算符，它有以下几个特点：

// 运算中其中一方为字符串，那么就会把另一方也转换为字符串
// 如果一方不是字符串或者数字，那么会将它转换为数字或者字符串
// 那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字

// 有字符串  -》  转字符串


// ==  ===  
// 类型比较  
// 两者类型是否为string 和 number
// console.log(null == undefined)   //true
// console.log('1' == {})    // false
// console.log([] == ![])    //true
// console.log(typeof(![]))   // boolean
// console.log(Number(![]))    //0
// console.log(typeof([]))   // boolean
// console.log([].toPrimitive)

// 闭包：  函数A里面有一个函数B，函数B里面可以访问到函数A里面的变量，那么函数B就是闭包

// 对象类型在赋值的过程中其实是复制了地址,如果改变了一方，其他的将会被影响而被改变
// Object.assign() 浅拷贝  只是拷贝对象a的属性值，到对象b
// let a= {
//    x:1
// }
// // let b = Object.assign({}, a);
// // a.x = 2;   //这里对其的修改不会影响到a
// let b = {...a}
// console.log(a);
// console.log(b)

// 深拷贝
// let obj = {
//     a: 1,
//     b: {
//       c: 2,
//       d: 3,
//     },
//   }
//   obj.c = obj.b
//   obj.e = obj.a
//   obj.b.c = obj.c    
//   obj.b.d = obj.b
//   obj.b.e = obj.b.c
//   let newObj = JSON.parse(JSON.stringify(obj))
//   console.log(newObj)

//   不能解决循环嵌套的对象
//  会忽略 undifined 和Symbol
// 函数处理也有些问题

// let a = {
//     age: undefined,
//     sex: Symbol('male'),
//     // jobs: function() {},
//     // a :() =>{},  //也不行
//     name: 'yck'
//   }
//   let b = JSON.parse(JSON.stringify(a))
//   console.log(b) // {name: "yck"}

// function deepclone(obj) {
//     function isObj(o) {
//         return ((typeof o === 'function' || typeof o === 'object') && o !== null)
//     }
//     if(!isObj(obj)) {
//         throw new Error('非对象');
        
//     }
//     let newObj = Array.isArray(obj)? [...obj] : {...obj};
//     Reflect.ownKeys(newObj).forEach(key => {
//         newObj[key] = isObj(obj[key]) ? deepclone(obj[key]): obj[key]
//     })
//     return newObj;
// }

// Reflect.ownKeys(newObj)  //这个属性是干嘛的
// 他的作用是返回对象的keys;
// 相当于Object.getOwnPropertyNames(target) concat(Object.getOwnPropertySymbols(target)
// Object.keys()返回属性key，但不包括方法属性
// Reflect.ownKeys()返回所有属性key
// var obj = {}
// 	Object.defineProperty(obj, 'method1', {
// 		value: function () {
// 	        alert("Non enumerable property");
// 	    },
// 	    enumerable: false
// 	})

// console.log(Object.keys(obj))
// // []
// console.log(Reflect.ownKeys(obj))
// // ["myMethod"]
