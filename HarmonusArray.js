var findLHS = function (nums) {
  let sort = nums;
  console.log(sort);
  let map = new Set();
  let count = 1;
  for (let right = 0; right < sort.length; right++) {
    while (
      map.has(sort[right]) &&
      Math.abs(sort[right + 1] - sort[right]) == 1
    ) {
      console.log(map);
      map.delete(sort[right]);
      console.log((count = count + 2));
    }
    map.add(sort[right]);
  }
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
