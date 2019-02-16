// let x = 1;
// let bar = function() {
//     console.log(x)
// }
// let obj1 = {
//     x: 1
// }
// let obj2 = {
//     x:2
// }
// let obj3 = {
//     x:3
// }

// let a = bar.bind(obj1);
// let b = bar.bind(obj1).bind(obj2)
// let c = bar.bind(obj1).bind(obj2).bind(obj3)
// a()
// b()
// c()
// 1
// 1
// 1

// 为什么 ？
// 利用了闭包  闭包中的变量一直被引用

// bind的效果 返回一个被绑定this的函数  


手写一个bind();

Function.prototype.bind = function() {
    let self = this;
    let oldArg = Array.prototype.slice.call(arguments,1);
    return function(context) {
        let newArg = Array.prototype.slice.call(arguments);
        this.apply(self, newArg.concat(oldArg));

    }
}

