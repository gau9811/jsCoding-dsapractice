function constructNote(s1, s2) {
  let obj = {};
  let obj2 = {};
  for (let i = 0; i < s1.length; i++) {
    obj[s1[i]] = (obj[s1[i]] || 0) + 1;
  }
  for (let i = 0; i < s2.length; i++) {
    obj2[s2[i]] = (obj2[s2[i]] || 0) + 1;
  }

  for (const key in obj) {
    if (obj[key] > obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(constructNote("aabbcc", "dcbcabcaddffba"));
