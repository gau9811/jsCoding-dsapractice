function containDups(nums, k) {

  let set = new Map();
  for (let right = 0; right < nums.length; right++) {
    while (set.has(nums[right]) && right - set.get(nums[right]) <= k) {
      return true;
    }
    set.set(nums[right], right);
  }

  return false;
}

console.log(containDups([1, 1], 1));
