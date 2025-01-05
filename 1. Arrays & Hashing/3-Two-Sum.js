class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const difference = target - nums[i];
      if (map.has(difference)) {
        return [map.get(difference), i];
      }

      map.set(nums[i], i);
    }

    return [];
  }
}

const solution = new Solution();

//---------------Example 1---------------
// console.log(solution.twoSum([2, 7, 11, 15], 9)); // [0, 1]
//---------------Example 2---------------
console.log(solution.twoSum([4,5,6], 10)); // [0, 2]
//---------------Example 3---------------
