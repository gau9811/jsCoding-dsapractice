function productSelf(nums) {
  let Maxtotal = 1;
  let arr = [];
  for (let num of nums) {
    if (num !== 0) {
      Maxtotal *= num;
    }
  }

  arr.push(Maxtotal);
  let p1 = 0;
  let p2 = nums.length - 1;
  let preffix = [];
  let suffix = [];

  for (let i = 0; i < nums.length; i++) {
    if (p2 >= 0) {
      suffix.push(nums[p2]);
      p2--;
    }

    preffix.push(nums[i]);
  }

  let set = new Set();
  for (let i = 0; i < preffix.length; i++) {
    for (let j = 0; j < suffix.length; j++) {
      let multiply = preffix[i] * suffix[j];
      if (preffix[i] !== suffix[j] ) {
        if (!set.has(multiply)) {
          set.add(multiply);
        }
      }
      if (set.has(multiply)) {
        j++;
      }
    }
  }
  console.log(set);
}
console.log(productSelf([-1,0,1,2,3]));
