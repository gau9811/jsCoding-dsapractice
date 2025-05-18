// this function checks if two strings are anagrams of each other and time complexity is O(n)
function ana(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  let obj = {};
  for (let i = 0; i < s1.length; i++) {
    let char = s1[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    let char = s2[i];
    if (!obj[char]) {
      return false;
    } else {
      obj[char] -= 1;
    }
  }
  return true;
}
console.log(ana("amanaplanacanalpanama", "acanalmanplanpamana")); // true
