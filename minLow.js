function minLow(nums, k) {
     if (nums.length < k) return null;
  let total = 0;
  let max = 0;
  for (let i = 0; i < k; i++) {
    total += nums[i];
  }

  max = total;
  for (let i = k; i < nums.length; i++) {
    total = total - nums[i - k] + nums[i];
    max = Math.min(max, total);
  }

 return max
}
console.log(minLow([9, 4, 1, 7], 2));
