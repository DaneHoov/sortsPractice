function bubbleSort(arr) {
    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                swap(i - 1, i);
                swapped = true;
            }
        }
    } while (swapped);
}
