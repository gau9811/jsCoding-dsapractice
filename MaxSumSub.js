function maxSubSub(nums, k) {
  let total = 0;
  let currentMax = 0;
  for (let i = 0; i < k; i++) {
    total += nums[i];
  }

  for (let i = k; i < nums.length; i++) {
    total = total - nums[i - k] + nums[i];
    currentMax = Math.min(total, currentMax);
  }
return currentMax
}
console.log(maxSubSub([2, 1, 5, 1, 3, 2], 3));
