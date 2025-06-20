function vowels(s, k) {
  let set = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  // Count vowels in the first window
  for (let i = 0; i < k; i++) {
    if (set.has(s[i])) count++;
  }

  let total = count;

  // Slide the window
  for (let right = k; right < s.length; right++) {
    if (set.has(s[right - k])) count--; // remove leftmost
    if (set.has(s[right])) count++; // add new right
    total = Math.max(total, count);
  }

  return total;
}
console.log(vowels("abciiidef", 3));
