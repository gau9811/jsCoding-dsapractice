function reverse(val) {
  let stack = [...val];
  let stack2 = [];
  for (let i = 0; i < val.length; i++) {
    let v = stack.pop();
    stack2.push(v);
  }
  return stack2.join("");
}

console.log(reverse("GeeksQuiz"));
