function sumTarget(array, k) {
  let count = Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < array.length; right++) {
    sum += array[right];
    while (sum >= k) {
      count = Math.min(count, right - left + 1);
      sum = sum - array[left];
      left++;
    }
  }
  return count === 0 ? 0 : count;
}
console.log(sumTarget([1, 2, 3, 4, 5], 15));
