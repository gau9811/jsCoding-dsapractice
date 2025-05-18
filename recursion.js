// function sumRange(num) {
//   console.log(num + num - 1);
//   if (num === 1) {
//     return 1;
//   }
//   return num + sumRange(num - 1);
// }
// console.log(sumRange(4)); // 10

// function someofDigits(...num) {
//   let t = 0;

//   function helperMethod(t, nums) {
//     if (nums.length === 0) {
//       return t;
//     }
//     t += nums.shift();
//     return helperMethod(t, nums);
//   }

//   return helperMethod(t, num.join("").split("").map(Number));
// }
// console.log(someofDigits(123456789)); //

function isPalindrome(str) {
  let p1 = 0;
  let p2 = str.length - 1;
  function helperMethod(p1, p2, str) {
    if (p1 >= p2) {
      return true;
    }
    if (str[p1] !== str[p2]) {
      return false;
    }
    return helperMethod((p1 = p1 + 1), (p2 = p2 - 1), str);
  }

  return helperMethod(p1, p2, str.toLowerCase());
}
console.log(isPalindrome("hello")); // true
