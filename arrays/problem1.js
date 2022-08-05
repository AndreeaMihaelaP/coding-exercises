const num = [9, 1, 2, 4, 5, 6];
const target = 8;

// Brute solution

const calculateIndicesOfAnArrayThatAddUpToATarget = (nums, target) => {
  for (let i = 0; i <= nums.length - 1; i++) {
    const numberToFind = target - nums[i];
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (numberToFind === nums[j]) {
        return [i, j];
      }
    }
  }

  return null;
};

// console.log(calculateIndicesOfAnArrayThatAddUpToATarget(num, target));

// Optimized solution
const findTwoSum = (nums, target) => {
  const numsMap = {};
  for (let i = 0; i <= nums.length - 1; i++) {
    const currentMapVal = numsMap[nums[i]];
    if (currentMapVal >= 0) {
      return [currentMapVal, i];
    } else {
      const numberToFind = target - nums[i];
      numsMap[numberToFind] = i;
    }
  }
  return null;
};

console.log(findTwoSum(num, target));
