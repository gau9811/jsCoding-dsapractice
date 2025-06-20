var findAnagrams = function (s, p) {
  let len = p.length;
  let set = {};
  let count = 0;
  let left = 0;

  for (let i = 0; i < p.length; i++) {
    if (!set[p[i]]) {
      set[p[i]] = 1;
    } else {
      set[p[i]]++;
    }
  }

  for (let right = 0; right < s.length; right++) {
    while (Object.keys(set).length) {
      if (set[s[left]]) {
        set[s[left]]--;
      }
      left++;
      if (set[s[left]] === 0) delete set[s[left]];
    }

    if (!set[p[right]]) {
      set[p[right]] = 1;
    } else {
      set[p[right]]++;
    }
    // console.log(set)
  }
  console.log(count);
};

console.log(findAnagrams("cbaebabacd", "abc"));
