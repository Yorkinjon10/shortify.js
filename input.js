// find min sum
function findMinSum(arr) {
  let minSum = 0;
  let minSumIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
    }
    if (sum < minSum || i === 0) {
      minSum = sum;
      minSumIndex = i;
    }
  }
  return minSumIndex;
}