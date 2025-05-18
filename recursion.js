// function sumRange(num) {
//   console.log(num + num - 1);
//   if (num === 1) {
//     return 1;
//   }
//   return num + sumRange(num - 1);
// }
// console.log(sumRange(4)); // 10

function someofDigits(...num) {
  let t = 0;

  function helperMethod(t, nums) {
    if (nums.length === 0) {
      return t;
    }
    t += nums.shift();
    return helperMethod(t, nums);
  }

  return helperMethod(t, num.join("").split("").map(Number));
}
console.log(someofDigits(123456789)); //
