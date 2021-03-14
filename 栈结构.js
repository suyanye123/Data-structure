//用数组封装栈结构 3.14
function Stack() {
  // 栈的属性
  this.items = [];
  // 栈的相关操作
  Stack.prototype.push = function (element) {
    this.items.push(element);
  };
  Stack.prototype.pop = function () {
    return this.items.pop();
  };
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };
  Stack.prototype.isempty = function () {
    return this.items.length == 0;
  };
  Stack.prototype.size = function () {
    return this.items.length;
  };
  Stack.prototype.tostring = function () {
    var result = "";
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i] + "";
      // return this.items.join('')
    }
  };
}
// 栈的使用
var s = new Stack();
