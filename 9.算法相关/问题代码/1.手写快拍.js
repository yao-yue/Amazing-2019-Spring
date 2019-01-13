let a = [1, 8, 8, 45, 4, 12, 121, 9, 312, 5]

let quickSort = (array, left, right) => {
    let index;
    if (array.length > 1) {
        index = partation(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1)
        } 
        if (index < right) {
            quickSort(array, index, right)
        }
    }
}

let partation = (array, left, right) => {
    let pivot = array[Math.floor((right + left) / 2)], i = left, j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [array[i], array[j]] = [array[j], array[i]];
            // swarp(array, i , j)
            i++;
            j--;
        }
    }
    return i;
}

let swarp = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

quickSort(a, 0, a.length -1 );
console.log(a);

