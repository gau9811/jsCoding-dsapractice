function twoSum(numbers, target) {
  let num = numbers.sort((a, b) => a - b);
  let i = 0;
  let j = num.length - 1;
  let sum = 0;
  while (i < j) {
    sum = num[i] + num[j];
    if (sum === target) {
      return [i++, j++];
    }
    if (sum > target) {
      j--;
    }
    if (sum < target) {
      i++;
    }
  }
}
console.log(twoSum([3, 2, 4], 6));
