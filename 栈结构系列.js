//用数组封装栈结构
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

/**0. 最小栈
 * 设计一个支持 push ，pop ，top,getMin 操作的最小栈。push(x) —— 推入栈中。 pop() —— 删除栈顶。 top() ——获取栈顶。 getMin() —— 检索栈中的最小元素。
 */
var MinStack = function () {
  // 双栈法
  this.items = [];
  this.help = [];
  MinStack.prototype.push = function (val) {
    this.items.push(val);
    this.help.push([val, min]);
  };
  MinStack.prototype.pop = function () {
    if (this.items.length != 0) {
      return items.splice(items[length - 1]);
    }
  };

  MinStack.prototype.top = function () {
    if (this.items.length == 0) {
    } else {
      return items[items.length - 1];
    }
  };
  MinStack.prototype.getMin = function () {
    if (this.items.length == 0) {
    } else {
      let tmp = items[0];
      for (let i = 0; i < items.length; i++) {
        if (items[i] < tmp) {
          tmp = items[i];
        } else {
        }
        return tmp;
      }
    }
  };
};

/**1. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。需满足：左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  s = s.split("");
  if (s.length % 2 !== 0) {
    return false;
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "{":
        stack.push("{");
        break;
      case "(":
        stack.push("(");
        break;
      case "[":
        stack.push("[");
        break;
      case ")":
        if (stack.pop() == "(") {
        } else {
          return false;
        }
        break;
      case "]":
        if (stack.pop() == "[") {
        } else {
          return false;
        }
        break;
      case "}":
        if (stack.pop() == "{") {
        } else {
          return false;
        }
        break;
    }
  }
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
};
