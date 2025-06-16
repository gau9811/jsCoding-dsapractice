var countGoodSubstrings = function (s) {
  let k = 3;
  let count = 0;
 

  for (let right = k; right <= s.length; right++) {
    if (
      s[right - k] !== s[right - 2] &&
      s[right - 2] !== s[right - 1] &&
      s[right - k] !== s[right - 1]
    ) {
      count++;
    }
  }
  return count;
};
console.log(countGoodSubstrings("xyzzaz"));
