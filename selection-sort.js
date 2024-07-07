function selectionSort(arr) {
  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  const n = arr.length;

  for (let min = 0; min < n - 1; min++) {
    let minIndex = min;
    for (let j = min + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== min) {
      swap(min, minIndex);
    }
  }
}
