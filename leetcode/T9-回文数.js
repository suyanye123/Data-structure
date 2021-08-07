/**给定一个整数x，判断是否为回文数
 * param {number} x
 * return {boolean}
 */
//1.转字符串
let x = prompt("");
var isPalindrome = function (x) {
  x = x + "";
  return x.split("").reverse().join() == x.split("").join();
};
//2.双指针
var isPalindrome = function (x) {
  x = x + "";
  let i = 0;
  let j = x.length - 1;
  for (let i = 0; i < parseInt(x.length / 2); i++) {
    if (x[i] !== x[j - i]) {
      return false;
    }
  }
  return true;
};
