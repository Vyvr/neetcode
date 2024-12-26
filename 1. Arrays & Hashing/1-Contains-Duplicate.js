class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
      if (!hashMap[nums[i]]) {
        hashMap[nums[i]] = 1;
        continue;
      }
      return true;
    }

    return false;
  }
}

const solution = new Solution();

console.log(solution.hasDuplicate([1, 2, 3, 1])); // true
