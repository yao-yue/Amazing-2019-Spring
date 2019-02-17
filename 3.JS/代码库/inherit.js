// 原型继承

// 在构造子类的时候,call父类
// 再把之类的原型指父类的实例
// 缺陷 : 子类因为调用了父类的构造函数,会多一些不必要的父类元素

// function Parent() {
//     this.name = '大牛';
// }
// Parent.prototype.getName = function() {
//     console.log(this.name);
// }

// function Son(value) {
//     Parent.call(this, value);
// }
// Son.prototype = new Parent();
// const son = new Son('111')
// son.getName()
// console.log(son.__proto__ === Son.prototype)  //实例对象的__proto__属性指向 构造函数的prototype

//方法二  
// Son.prototype = Object.create(Parent.prototype, {
//     constructor:　{
//         value: Son,
//         enumerable: true,
//         writable: true,
//         configurable: true
//     }
// })
// const son = new Son('111')
// son.getName()
// console.log(son.__proto__ === Son.prototype)  

// 核心就是把父类的原型赋值给子类，并且把构造函数设置为子类

// class 类
// class  是不能带（）
class Parent {  
    constructor(value) {
        this.value = value;
    }
    getValue() {
        console.log(this.value)
    }
}

class Son extends Parent {
    constructor(value) {    
        super(value);       //相当于  Parent.call(this, value)
        this.name = value;
    }
    getName() {
        console.log(this.name);
    }
}
let p = new Parent('PARENT')
let s = new Son('牛')
p.getValue()
s.getValue()
s.getName()