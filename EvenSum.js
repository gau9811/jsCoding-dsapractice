function evenSumWindow(arr, k) {
  let maxCount = 0;
  let total = 0;

  for (let i = 0; i < k; i++) {
    total += arr[i];
  }

  if (total % 2 == 0) {
    maxCount++;
  }

  for (let i = k; i < arr.length; i++) {
    total = total - arr[i - k] + arr[i];
    if (total % 2 == 0) {
      maxCount++;
    }
  }

  //   console.log(maxCount);
  return maxCount;
}
console.log(evenSumWindow([2, 4, 6, 1, 3], 2));
