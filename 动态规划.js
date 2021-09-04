//leetcode动态规划入门21天学习计划
/**1.斐波那契数
 *通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1 。给你 n ，请计算 F(n) 。
* @param {number} n
 * @return {number}
 */
var fib = function (n) {
  //法1.递归 空间复杂度O(n) 时间复杂度O(n)
  var dp = [];
  dp[0] = 0;
  dp[1] = 1;
  for (i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];

  //法2，滚动数组（滚动窗口） 空间复杂度O(1)
};

/**1.第 N 个泰波那契数
 *泰波那契序列 Tn 定义如下： 
  T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
  给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {};
