// function characterReplacement(s, k) {
//   let set = {};
//   let left = 0;
//   let maxL = 0;

//   for (let right = 0; right < s.length; right++) {
//     if (!set[s[right]]) {
//       set[s[right]] = 0;
//     }

//     set[s[right]]++;
//     while (right - left + 1  > k) {
//       set[s[left]]--;
//       left++;
//     }

//     maxL = Math.max(maxL, right - left + 1);
//   }
//   return maxL
// }

// console.log(characterReplacement("eceba", 2));

function maxSubs(str, k) {
  let set = {};
  let left = 0;
  let maxL = 0;

  for (let right = 0; right < str.length; right++) {
    let char = str[right];
    //  set[char] = (set[char] || 0) + 1;
    while (set[char]) {
      set[str[left]]--;
      if (set[str[left]] === 0) delete set[str[left]];
      left++;
    }

    set[char] = 1;

    maxL = Math.max(maxL, right - left + 1);
  }
  return maxL
}
console.log(maxSubs("abcdabcdbb", 3));
