function threeSum(nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  let k = sortedNums.length - 1;
  let result = [];
  while (i < sortedNums.length - 2) {
    j = i + 1;
    k = sortedNums.length - 1;
    while (j < k) {
      let sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
    i++;
  }
  console.log(result);
}
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
