// Given an array of integers and a number n, find the maximum sum of n consecutive elements in the array.

// For example, if the input array is [1, 4, 2, 10, 23, 3, 1, 0, 20] and n is 4,

// this is sliding window problem.

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
