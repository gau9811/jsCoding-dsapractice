function averagePair(arr, num) {
  if (arr.length === 0) return false;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const average = (arr[left] + arr[right]) / 2;
    if (average === num) {
      return true;
    } else if (average < num) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // true
