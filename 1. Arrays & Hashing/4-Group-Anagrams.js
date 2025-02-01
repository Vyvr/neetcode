class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const key = ["a" - "z"];
    console.log(key);
  }

  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    return s.split("").sort().join("") === t.split("").sort().join("");
  }
}

const solution = new Solution();

//---------------Example 1---------------
console.log(solution.groupAnagrams(["anagram", "nagaram"]));
//---------------Example 2---------------
console.log(solution.groupAnagrams(["rat", "car"]));
//---------------Example 4---------------
console.log(solution.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])); // [["hat"],["act", "cat"],["stop", "pots", "tops"]]
//---------------Example 5---------------

//---------------Example 6---------------
