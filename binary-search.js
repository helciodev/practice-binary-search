function linearSearch(arr, target) {
  // Can you solve this in one line?
  return arr.includes(target) ? arr.indexOf(target) : -1;
}

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;

  // While high and low indices do not overlap...
  while (high >= low) {
    // Find the midpoint between high and low indices
    let midpoint = Math.floor((high + low) / 2);

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
    // Return the midpoint index
    if (target === arr[midpoint]) return midpoint;

    if (target > arr[midpoint]) {
      // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      low = midpoint + 1;
    } else {
      // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      high = midpoint - 1;
    }
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}

const arr = [
  1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52, 53, 57, 63, 66, 67, 68, 69, 74, 76,
  79, 82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100,
];
const target = 89;

console.log(binarySearch(arr, 89));
console.log(arr[26]);
module.exports = [linearSearch, binarySearch];
