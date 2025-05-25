function maxArea(height) {
  let i = 0;
  let j = height.length - 1;
  let maxCal = 0;
  while (i < j) {
    let minHeight = Math.min(height[i], height[j]);
    let width = j - i;
    let area = minHeight * width;
    maxCal = Math.max(maxCal, area);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxCal;
}
console.log(maxArea([1, 7, 2, 5, 12, 3, 500, 500, 7, 8, 4, 7, 3, 6]));
