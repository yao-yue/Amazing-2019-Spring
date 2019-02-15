//冒泡排序
//简述一下他的思想：对数组元素每一项与数组里面的剩余项进行比较，如果大就交换，这样大的就被冒泡到右边。

// let boboSort = (array) => {
//     let length = array.length
//     for(let i = 0; i< length; i++) {
//         for(let j=0; j< length -i; j++) {
//             if(array[j] > array[j+1]) {
//                 // [array[i], array[j]] = [array[j], array[i]]
//                 let temp =array[j+1];
//                 array[j+1] = array[j];
//                 array[j] =temp;
//             }
//         }
//     }
// }
let testAarr = [1,5,7,1,56,1,3,5,4,6]
// boboSort(testAarr);
// console.log(testAarr);

// 选择排序  
// 简述一下他的思想： 找到数组的最小值放在第一位，再是找到数组的第二小值放在第二位

let  selectSort = (array) => {
    let minIndex = 0,length = array.length;
    for(let i = 0; i < length -1; i++ ) {    // 最后一个不用遍历，因为最后一个不用比较了
        minIndex = i;
        for(let j = i; j < length; j++) {    // 把当前最小索引的元素与他后面的每个元素进行比较，找到最小元素的索引
            if(array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        if(i !== minIndex) {                // 如果当前索引不是最小元素的索引，交换他们
            [array[i],array[minIndex]] = [array[minIndex],array[i]]
        }
    }
}
selectSort(testAarr)
//  console.log(testAarr)