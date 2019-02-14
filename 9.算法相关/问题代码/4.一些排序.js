//冒泡排序
//简述一下他的思想：对数组元素每一项与数组里面的剩余项进行比较，如果大就交换，这样大的就被冒泡到右边。

let boboSort = (array) => {
    let length = array.length
    for(let i = 0; i< length; i++) {
        for(let j=0; j< length -i; j++) {
            if(array[j] > array[j+1]) {
                // [array[i], array[j]] = [array[j], array[i]]
                let temp =array[j+1];
                array[j+1] = array[j];
                array[j] =temp;
            }
        }
    }
}
let testAarr = [1,5,7,1,56,1,3,5,4,6]
boboSort(testAarr);
console.log(testAarr);