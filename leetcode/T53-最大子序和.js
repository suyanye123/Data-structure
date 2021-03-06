/**
 * 给定一个整数数组 nums，找到一个具有最大和的连续子数组(子数组最少包含一个元素),返回其最大和。
 * nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * @param {number[]} nums
 * @return {number}
 */

//1.暴力破解
var maxSubArray = function (nums) {
  let result = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      result = Math.max(result, sum);
    }
  }
  return result;
};

//2.分治法


//3.动态规划(找出第一个元素结尾的最大子序和，接着后面的元素可以选择加上或者不加，继续得到当前元素结尾的最大子序和。最后比较所以子序和)
//又称滑动窗口
var maxSubArray = function (nums) {
  let dp = [];
  dp[0] = nums[0];
  result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    result = Math.max(result, dp[i]);
  }
  return result;
};
