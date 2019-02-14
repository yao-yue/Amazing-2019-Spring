//冒泡排序
//简述一下他的思想：对数组元素每一项与数组里面的剩余项进行比较，如果大就交换，这样大的就被冒泡到右边。

let boboSort = (array) => {
    for(let i = 0; i< array; i++) {
        for(let j=1; j< array-1 -i; j++) {
            if(array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]]
            }
        }
    }
}
let testAarr