let twoSum = (nums, target) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (obj.hasOwnProperty(diff)) {
      return [obj[diff], i]; // return indices
    }
    obj[nums[i]] = i;
  }
};
console.log(twoSum([3, 2, 4], 6));
