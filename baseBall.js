function calPoints(operations) {
  let stack = [];

  for (let i = 0; i < operations.length; i++) {
    if (!isNaN(operations[i])) {
      stack.push(parseInt(operations[i]));
    }

    if (operations[i] == "+") {
        let p = stack.pop()
      let p1 = stack[stack.length - 1];
      stack.push(p)
      stack.push(p1 + p);
    }

    if(operations[i] === "C"){
        stack.pop()
    }

    if(operations[i] === "D"){
        let p1 = stack[stack.length - 1];
      stack.push(2 * p1);
    }
  }

  return stack.reduce((a,b)=>a+b,0)
}
console.log(calPoints(["1", "2", "+", "C", "5", "D"]));
