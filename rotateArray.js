function findRotatedIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
      return mid;
    }

    // Determine which side is sorted
    if (arr[left] <= arr[mid]) {
      // Left side is sorted
      if (target >= arr[left] && target < arr[mid]) {
        right = mid - 1; // Target is in the left sorted portion
      } else {
        left = mid + 1; // Target is in the right portion
      }
    } else {
      // Right side is sorted
      if (target > arr[mid] && target <= arr[right]) {
        left = mid + 1; // Target is in the right sorted portion
      } else {
        right = mid - 1; // Target is in the left portion
      }
    }
  }

  // If the target is not found, return -1
  return -1;
}

console.log(findRotatedIndex([15, 16, 19, 20, 25, 1, 3, 4], 1)); // 5
console.log(findRotatedIndex([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(findRotatedIndex([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(findRotatedIndex([1], 1)); // 0
console.log(findRotatedIndex([1], 2)); // -1
