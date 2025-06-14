function checkInclusion(s1, s2) {
  let set = {};
  let left = 0;

  for (let i = 0; i < s1.length; i++) {
    if (!set[s1[i]]) {
      set[s1[i]] = 1;
    } else {
      set[s1[i]]++;
    }
  }

  for (let right = 0; right < s2.length; right++) {
    while (Object.keys(set).length) {
      set[s2[left]]--;
      if (set[s2[left]] === 0) delete set[s2[left]];
    }
    left++;
  }
  console.log(set);
}

console.log(checkInclusion("abc", "lecaabee"));
// Max Consecutive Ones III
