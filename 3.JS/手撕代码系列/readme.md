先列一个目标吧：
手写倒计时
手写ajax
手写new
手写promise
手写节流、防抖
手写bind
手写redux


手写new  先要明白new的原理

new 的作用
// 创建一个新对象obj
// 把obj的__proto__指向Dog.prototype 实现继承
// 执行构造函数，传递参数，改变this指向 Dog.call(obj, ...args)
// 最后把obj赋值给sanmao

function _new(fn, ...arg) {
    var obj = Object.create(fn.prototype);
    fn.call(obj, ...arg);
    return obj;
}

