function selectionSort(arr) {
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        let min = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}
let arr = [5, 4, 10, 7, 8, 3, 2];
let sorted = selectionSort(arr);
console.log(sorted);


