// function checkInclusion(s1, s2) {
//   if (s1.length > s2.length) return false;

//   const need = {};
//   const window = {};
//   let valid = 0;

//   for (let c of s1) {
//     need[c] = (need[c] || 0) + 1;
//   }

//   let left = 0, right = 0;
//   const k = s1.length;

//   while (right < s2.length) {
//     let c = s2[right];

//     if (need[c] !== undefined) {
//       window[c] = (window[c] || 0) + 1;
//       if (window[c] === need[c]) valid++;
//     }

//     while (right - left >= k) {
//       if (valid === Object.keys(need).length) return true;
//       let d = s2[left];
//       left++;

//       if (need[d] !== undefined) {
//         if (window[d] === need[d]) valid--;
//         window[d]--;
//       }
//     }
//     right++;
//   }

//   return false;
// }
// console.log(checkInclusion("a", "ab"));

function minSubs(s1, s2) {
  let obj = {};
  let obj2 = {};
  let left = 0;
  let match = 0;

  for (let i = 0; i < s2.length; i++) {
    if (!obj[s2[i]]) {
      obj[s2[i]] = 1;
    } else {
      obj[s2[i]]++;
    }
  }

  for (let right = 0; right < s1.length; right++) {
    let char = s1[right];
    if (!obj2[s1[i]]) {
      obj2[s[i]] = 1;
    } else {
      ob2[s1[i]]++;
    }

    if (obj[char] && obj[char] === obj2[char]) {
      match++;
    }

    while (right - left + 1 > s2.length) {
      let w = obj2[s1[left]];
      w--;
    }
  }
}
console.log(minSubs("cbaebabacd", "abc"));
