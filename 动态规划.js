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
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];

  //法2，滚动数组（滚动窗口） 空间复杂度O(1)
  let p = 0;
  let q = 0;
  let r = 1;
  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
};

/**1.第 N 个泰波那契数
 *泰波那契序列 Tn 定义如下： 
  T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
  给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let a = 0;
  let p = 0;
  let q = 1;
  let r = 1;
  if (n < 0) {
    return;
  }
  if (n <= 1) {
    return n;
  }
  if (n == 2) {
    return 1;
  }
  for (let i = 3; i <= n; i++) {
    a = p;
    p = q;
    q = r;
    r = a + p + q;
  }
  return r;
};

/**2.爬楼梯
 *假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  if (n <= 2) {
    return n;
  }
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

/**2.使用最小花费爬楼梯
 *数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。
每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。
请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。
输入：cost = [10, 15, 20]
输出：15
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = [];
  let n = cost.length;
  dp[0] = 0;
  dp[1] = cost[0];
  dp[2] = Math.min(cost[0], cost[1]);
  for (let i = 3; i <= n; i++) {
    let tmp = Math.min(dp[i - 1], dp[i - 2]);
    dp[i] += tmp;
  }
  return dp[n];
};
