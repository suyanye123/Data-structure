/**回溯法
 * 主要思路:遍历，剪枝，到达最远节点后回退一个节点
 */

/**1. 全排列(leetcode T46)
 * 给定一个不含重复数字的数组nums ，返回其所有可能的全排列。你可以 按任意顺序 返回答案。
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  /**  解题思路
  可以使用回溯算法，将不符合要求的排除掉，套用代码模版
  result = [];
  function backtrack (path, list) {
      if (满足条件) {
          result.push(path);
          return
      }
      
      for () {
          // 做选择(前序遍历)
          backtrack (path, list)
          // 撤销选择(后续遍历)
      }
  }
  其实也可以理解为DFS。也可以理解为先序和后序遍历，在先序遍历时做选择，后序遍历撤销选择。
  
  解题步骤：
  
  用递归模拟出所有情况。
  遇到包含重复元素的情况，就回溯。
  收集所有到达递归终点的情况，并返回。
  2. 代码实现
  var permute = function(nums) {
      const res = [];
      backtrack(nums, []);
      return res;
      function backtrack(nums, track) {
          if (track.length === nums.length) {
              res.push(track);
              return;
          }
          for (let i = 0; i < nums.length; i++) {
              if (track.includes(nums[i])) { continue; };
              track.push(nums[i]);
              // 这里我们拷贝一份，因为后续操作会修改原数组。
              const newTrack = [...track];
              backtrack(nums, newTrack);
              // 递归到该层时将元素还原。
              track.pop();
          }
      }
  };
  优化下：
  var permute = function(nums) {
      const res = [];
      backtrack([]);
      return res;
      function backtrack(path) {
          if(path.length === nums.length) {
              res.push(path);
              return;
          }
          for (let i = 0; i < nums.length; i++) {
              if (path.includes(nums[i])) { continue; }
              backtrack(path.concat(nums[i]));
          }
      }
  };
  3. 复杂度分析
  时间复杂度O(n!) n!=1234...(n-1)*n
  空间复杂度o(n)(递归深度)
  */

  // 利用hash表记录是否使用过，然后回溯时回退一步，并将hash表对应该值改为false。
  let result = [];
  let visited = new Map();
  for (let num of nums) {
    visited.set(num, false);
  }
  function backTacking(nums, result, visited, list) {
    if (nums.length == list.length) {
      result.push([...list]);
      return;
    }
    for (let num of nums) {
      if (!visited.get(num)) {
        list.push(num);
        visited.set(num, true);
        backTacking(nums, result, visited, list);
        list.pop();
        visited.set(num, false);
      }
    }
  }
  backTacking(nums, result, visited, []);
  return result;

  //利用set结构回溯
  let result = [];
  let set = new Set();
  function backTack() {
    if (set.size == nums.length) {
      result.push(Array.from(set));
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        continue;
      }
      set.add(nums[i]);
      backTack();
      set.delete(nums[i]);
    }
  }
  backTack();
  return result;
};

/**2. N皇后
 *n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * @param {number} n
 * @return {string[][]}
 */
