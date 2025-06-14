// function MostDistinctKChar(s, k) {
//   let need = {};
//   let left = 0;
//   let total = 0;

//   for (let right = 0; right < s.length; right++) {
//     let r = s[right];

//     if (!need[r]) {
//       need[r] = 1;
//     } else {
//       need[r]++;
//     }

//     while (Object.keys(need).length > k) {
//       let l = s[right];
//       need[l]--;
//       if (need[l] === 0) delete need[l];
//       left++;
//     }
//     total = Math.max(total, right - left + 1);
//   }
//   return total;
// }
// console.log(MostDistinctKChar("eceba", 2));

function permutation(s, k) {
  let set = new Set(["a", "e", "i", "o", "u"]);
  let max = 0;
  let count = 0;

  for (let i = 0; i < k; i++) {
    if (set.has(s[i])) {
      count++;
    }
  }

  max = count;

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i - k])) count--;
    if (set.has(s[i])) count++;
    max = Math.max(count, max);
  }
  console.log(max);
}
console.log(permutation("abciiidef", 3));
