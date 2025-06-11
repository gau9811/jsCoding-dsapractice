function NiceSubstring(strs) {
  function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
  }

  let str = [];
  let left = 0;
  for (let right = 1; right < strs.length; right++) {
    console.log(isUpperCase(strs[left]) && !isUpperCase(strs[right]))
    while (isUpperCase(strs[left]) && !isUpperCase(strs[right]) && isUpperCase(strs[left])  === isUpperCase(strs[right]) ) {
      str.push(strs[right]);
      str.push(strs[left]);
      left = right
    }
    console.log(left,right)
    left++;
  }

  console.log(str)
}
console.log(NiceSubstring("YazaAay"));
