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

// function isPalindrome(str) {
//   let p1 = 0;
//   let p2 = str.length - 1;
//   function helperMethod(p1, p2, str) {
//     if (p1 >= p2) {
//       return true;
//     }
//     if (str[p1] !== str[p2]) {
//       return false;
//     }
//     return helperMethod((p1 = p1 + 1), (p2 = p2 - 1), str);
//   }

//   return helperMethod(p1, p2, str.toLowerCase());
// }
// console.log(isPalindrome("hello")); // true

// function flattenArray(arr) {
//   let result = [];

//   function helperMethod(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         helperMethod(arr[i]);
//       } else {
//         result.push(arr[i]);
//       }
//     }
//   }

//   helperMethod(arr);
//   return result;
// }

// console.log(flattenArray([1, 2, [3, 4], [5, [6, 7,[8,[9,10]]]]])); // [1, 2, 3, 4, 5, 6, 7]

// function capitalFirst(str) {
//   let newStr = "";
//   function helperMethod(str) {
//     if (str.length === 0) {
//       return newStr;
//     } else {
//       let newV = str.shift();
//       newStr += newV[0].toUpperCase() + newV.slice(1) + " ";
//       return helperMethod(str);
//     }
//   }
//   return helperMethod(str.split(" "));
// }
// console.log(capitalFirst("hello world")); // "Hello World"

function caculateNestedval(obj) {
  let sum = 0;

  function helperMethod(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        helperMethod(obj[key]);
      } else {
        sum += obj[key];
      }
    }
  }
   helperMethod(obj);
   return sum
}

console.log(
  caculateNestedval({
    a: 2,
    b: {
      b1: 3,
      b2: {
        b21: 6,
        b22: {
          b221: 4,
        },
      },
      b3: 7,
    },
    c: {
      c1: 1,
      c2: {
        c21: 8,
      },
    },
  })
);
