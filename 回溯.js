/**回溯法
 * 主要思路:利用hash表记录是否使用过，然后回溯时回退一步，并将hash表对应该值改为false
 */

/**1. 全排列(leetcode T46)
 * 给定一个不含重复数字的数组nums ，返回其所有可能的全排列。你可以 按任意顺序 返回答案。
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let visited = new Map();
  for (let num of nums) {
    visited.set(num, false);
  }
  function backTacking(nums, result, visited, list) {
      if(nums.length==list.length){
          result.push(...list)
      }
      for(let num of nums){
        if(!visited.get(num)){
            list.push(num)
            visited.set(num,true)
            backTacking(nums,result,visited,list)
            list.pop()
            visited.set(num,false)
        }
    }
  }
  backTacking(nums,result,visited,[])
  return result;
};
