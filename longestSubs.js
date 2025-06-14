function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxCount = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxCount = Math.max(maxCount, right - left + 1);
  }

  return maxCount;
}

console.log(lengthOfLongestSubstring("zxyzxyz"));
