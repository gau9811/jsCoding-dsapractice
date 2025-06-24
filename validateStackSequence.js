var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let right = 0;

  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    while (stack.length > 0 && stack[stack.length - 1] === popped[right]) {
        stack.pop();
        right++;
    }
}
  return stack.length === 0 ? true : false;
};
console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]));
