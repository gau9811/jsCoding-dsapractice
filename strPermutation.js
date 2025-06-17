var checkInclusion = function (s1, s2) {
  let set = {};
  let k = s1.length;
  let left = 0;

  for (let i = 0; i < s1.length; i++) {
    if (!set[s1[i]]) {
      set[s1[i]] = i;
    } else {
      set[s1[i]] = 0;
    }
  }

  for (let right = 0; right < s2.length; right++) {
    if (set[s2[right]]) {
      if (right - left > k) {
        console.log(right - left);
      }
      console.log(right - left, right);
      left++;
    }
  }
};
console.log(checkInclusion("ab", "eidbaooo"));

// 567. Permutation in String
// Attempted
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
