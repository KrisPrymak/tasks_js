const getMaxSubSum = (arr) => {
  let maxSum = 0;
  let curSum = 0;

  for (let item of arr) {
    curSum += item;
    maxSum = Math.max(maxSum, curSum);
    if (curSum < 0) {
      curSum = 0;
    }
  }

  return maxSum;
};
