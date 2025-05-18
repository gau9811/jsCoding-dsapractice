function areThereDuplicates(...args) {
  let arr = args.sort();
  let p1 = 0;
  let p2 = 1;
  while (p2 < arr.length) {
    if (arr[p1] === arr[p2]) {
      return true;
    }
    p1++;
    p2++;
  }
  return false;
}
// Test cases
// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates("a", "b", "c", "a")); // true
