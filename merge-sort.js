function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  //divide the array in half
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  //recurse left
  const sortedLeft = mergeSort(left);

  //recurse right
  const sortedRight = mergeSort(right);

  //merge
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
