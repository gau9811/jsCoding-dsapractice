function countZeroes(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count++;
    }
  }
  return count;
}
console.log(countZeroes([1, 2, 3, 0, 0, 0, 0, 4, 5])); // 4
