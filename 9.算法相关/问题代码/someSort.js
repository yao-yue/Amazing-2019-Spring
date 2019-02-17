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
// let testAarr = [1,5,7,1,56,1,3,5,4,6]
// boboSort(testAarr);
// console.log(testAarr);

// 选择排序  
// 简述一下他的思想： 找到数组的最小值放在第一位，再是找到数组的第二小值放在第二位

// let  selectSort = (array) => {
//     let minIndex = 0,length = array.length;
//     for(let i = 0; i < length -1; i++ ) {    // 最后一个不用遍历，因为最后一个不用比较了
//         minIndex = i;
//         for(let j = i; j < length; j++) {    // 把当前最小索引的元素与他后面的每个元素进行比较，找到最小元素的索引
//             if(array[minIndex] > array[j]) {
//                 minIndex = j;
//             }
//         }
//         if(i !== minIndex) {                // 如果当前索引不是最小元素的索引，交换他们
//             [array[i],array[minIndex]] = [array[minIndex],array[i]]
//         }
//     }
// }
// selectSort(testAarr)
//  console.log(testAarr)


//插入排序：   先排前面的，后面的如果比前面的小就往前挪。
// let insertSort = (array) => {
//     let length = array.length, j, temp;
//     for(let i = 1; i < length ; i++) {
//         j = i;
//         temp = array[i];
//         while(j>0 && array[j-1] > temp) {
//             array[j] = array[j-1];   //把大的往后挪
//             j--;
//         }
//         array[j] = temp;
//     }
// }


// 写一个快排：   思路也就是：  找到一个主元，找到主元左边的大的，找到主元右边小的，然后交换他们，实现主元左边的都比主元小，主元右边的都比主元大
// function quickSort(array, left, right) {
//     let index;    //先声明辅助变量index 这个变量有助于让我们将子数组分离为较小值数组和较大值数组。
//     if(array.length > 0) {
//         index = partion(array, left, right);
//     }
//     if(left < index -1) {                   //如果子数组存在较小值的元素，对该数组重复这个过程
//         quickSort(array, left, index-1);
//     }
//     if(right > index) {                     //
//         quickSort(array, index, right);
//     }
// }
// function partion(array, left, right) {
//     let pivot = array[Math.floor((right + left) / 2)],
//      i = left, j = right;

//     while(i <= j) { //如果右侧的索引大于左侧
//         while( array[i] < pivot) {             //找到左侧比主元大的索引
//             i++;
//         }
//         while(array[j] > pivot) {              //找到右侧壁主元小的索引
//             j--;
//         }
//         if( i <= j) {                           //如果此时的索引符合规则就交换他们 
//             [array[i], array[j]] = [array[j], array[i]];
//             i++;
//             j--;
//         }
//     }   
//     return i;
// }


let a = [21, 121, 1, 9, 12, 1321, 7, 13, 6, 151, 11, 21, 121]
// // insertSort(a);
// quickSort(a,0,a.length-1)



// console.log(a);

//选择排序  找到最小值放在第一位，找到第二小值放在第二位
// function selectSort(array) {
//     let length = array.length, minIndex = 0;
//     for (let i = 0; i < length - 1; i++) {
//         minIndex = i;       //最小值的索引辅助变量
//         for (let j = i; j < length; j++) {  //找到最小值的索引
//             if (array[minIndex] > array[j]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i) {
//             [array[minIndex], array[i]] = [array[i], array[minIndex]]
//         }
//     }
// }
// selectSort(a);


// //插入排序  
// function insertSort(array) {
//     let length = array.length, temp, j;
//     for(let i =1; i< length; i++)  {
//         j = i;   //辅助变量 
//         temp = array[i];
//         while(j > 0 && array[j-1] > temp) {
//             array[j] = array[j-1]
//             j--;
//         }
//         array[j] = temp;
//     }
// }
// insertSort(a)
// console.log(a)

// 冒泡排序、选择排序、插入排序 的复杂度都是  O n2;
// 不过数据小的时候  插入排序性能好些

// 堆排序  you are so good!!!
function heapSort(array) {
    let heapSize = array.length;
    buildHeap(array);

    while(heapSize > 1) {
        heapSize --;
        [array[0], array[heapSize]] = [array[heapSize],array[0]];
        heapify(array, heapSize, 0);
    }
}
function buildHeap(array) {
    let heapSize = array.length;
    for(let i = Math.floor(heapSize / 2); i >= 0; i--) {
        heapify(array, heapSize, i);
    }
}
function heapify(array , heapSize, i) {
    let left = i*2 +1;
    let right = i *2 +2;
    let larget = i;
    if(left < heapSize && array[left] > array[larget]){
        larget = left;
    }
    if(right < heapSize && array[right] > array[larget]){
        larget = right;
    }
    if(larget !== i) {
        [array[larget], array[i]] = [array[i],array[larget]];
        heapify(array, heapSize, larget);   //因为只比较了子与父的  再次调用相当于比较了兄弟之间的;
    }
}
heapSort(a)
console.log(a)