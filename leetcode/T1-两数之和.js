/**
 * 给定一个整数数组 nums 和一个整数目标值 target，在该数组中找出和为目标值target的那两个整数，并返回它们的数组下标。每种输入只会对应一个答案。数组中同一个元素在答案里不能重复出现。
 * @param {number} target
 * @param {number[]} nums
 * @returns {number[]}
 */

//哈希表
var twosum = function (target, nums) {
  let tmp = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (tmp.has(nums[i])) {
      return [tmp.get(nums[i]), i];
    } else {
      tmp.set(target - nums[i], i);
    }
  }
};

//暴力破解
