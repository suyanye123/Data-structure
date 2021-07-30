/**
 * 一些个人的理解:二分查找的关键在于,部分有序,所以可以跳过部分查找
 */
/**1. 二维数组中的查找
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  //判断数组是否为空
  if (!matrix.length) {
    return false;
  }
  //设置右上角为中间值
  let x = matrix[0].length - 1;
  let y = 0;

  let mid = matrix[y][x];
  while (x >= 0 && y <= matrix.length - 1) {
    if (target == mid) {
      return true;
    } else if (target > mid) {
      ++y;
    } else {
      --x;
    }
    return false;
  }
};

/**2. 寻找旋转排序数组中的最小值 [4,5,6,7,0,1,4]
 * @param {number[]} numbers
 * @return {number}
 */
var findMin = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (numbers[mid] > numbers[right]) {
      // mid 一定在第 1 个排序数组中，min 一定满足 mid < min <= right，因此执行 left = mid + 1；
      left = mid + 1;
    } else if (numbers[mid] < numbers[right]) {
      //mid 一定在第 2 个排序数组中，min 一定满足 left < min <= mid，因此执行 right = mid
      right = mid;
    }
    // mid == right
    else if (numbers[mid] == numbers[right]) {
      right = right - 1;
    }
  }
  return numbers[left]
};

/**3. 数字序列中某一位的数字 01234567891011121314…的格式序列化到一个字符序列
 * @param {number} n
 * @return {number}
 */
 var findNthDigit = function(n) {
//todo
};

/**4. 统计一个数字在有序数组中出现的次数。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {

};