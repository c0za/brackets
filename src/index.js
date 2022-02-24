module.exports = function check(str, bracketsConfig) {
  // your solution
  const BRACKETS_PAIR = {
    [')']: '(',
    ['}']: '{',
  };

    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      
      if (bracketsConfig.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let topElement = stack[stack.length - 1];

        if (BRACKETS_PAIR[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
