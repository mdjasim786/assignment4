function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      let temp = arr[i];
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j+1] = temp;
    }
    return arr;;
  }
  let arr = [5, 4, 10, 7, 8, 3, 2];
  let sorted = insertionSort(arr);
  console.log(sorted);
