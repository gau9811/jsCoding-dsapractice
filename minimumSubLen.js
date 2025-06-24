var minLength = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    let a = stack[stack.length - 2]
    if (s[i] == "B" && a === "A" &&  stack.length>1) {
      stack.pop();
      stack.pop();
    }

    if (s[i] == "D" && a === "C" &&  stack.length>1) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.join("").length;
};
console.log(minLength("ACBBD"));
