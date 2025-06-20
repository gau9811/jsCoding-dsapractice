var findMaxAverage = function (nums, k) {
  let total = 0;
  let maxCount = 0;

  for (let i = 0; i < k; i++) {
    total += nums[i];
  }

  maxCount = total;

  for (let right = k; right < nums.length; right++) {
      total +=  nums[right] - nums[right - k] ;
      maxCount = Math.max(maxCount, total / k);
  }
  return maxCount
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
