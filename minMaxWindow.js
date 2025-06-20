// var minimumDifference = function (nums, k) {
//   if (k === 1) return 0;
//   let sortedNums = nums.sort((a, b) => a - b);
//   let max = Infinity;

//   for (let right = 0; right <= sortedNums.length - k; right++) {
//     let total = sortedNums[right + k - 1] - sortedNums[right];
//     max = Math.min(max, total);
//   }
//   return max;
// };
// console.log(minimumDifference([9, 4, 1, 7], 2));
