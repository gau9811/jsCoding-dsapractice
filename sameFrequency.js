function sameFrequency(n1, n2) {
  if (`${n1}`.length !== `${n2}`.length) return false;
  let joined = `${n1}` + `${n2}`;
  const count = {};
  for (let i = 0; i < joined.length; i++) {
    count[joined[i]] = (count[joined[i]] || 0) + 1;
  }

  for (const element in count) {
    if (count[element] % 2 !== 0) {
      return false;
    }
  }
  return true;
}
console.log(sameFrequency(22, 222)); // true
