function sumTarget(array, k, threshold) {
  let count = 0;
  let total = 0;

  for (let i = 0; i < k; i++) {
    total += array[i];
  }

   if (total /  k >= threshold) {
      count++;
    }
  for (let i = k; i < array.length; i++) {
    total = total - array[i-k] + array[i] 
    if (total /  k >= threshold) {
      count++;
    }
  }
  return count
}
console.log(sumTarget([11,13,17,23,29,31,7,5,2,3], 3, 5));
