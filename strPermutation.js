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
