function evalRPN(tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    let nums = parseInt(tokens[i]);

    if (!isNaN(nums)) {
      stack.push(nums);
    }

    if (isNaN(nums)) {
      let s1 = stack.pop();
      let s2 = stack.pop();

      if (tokens[i] === "+") {
        stack.push(s2 + s1);
      }
      if (tokens[i] === "*") {
        stack.push(s2 * s1);
      }
      if (tokens[i] === "-") {
        stack.push(s2 - s1);
      }
      if (tokens[i] === "/") {
        stack.push(s2 / s1);
      }
    }
  }

  return stack[0]
}

evalRPN(["1", "2", "+", "3", "*", "4", "-"]);
