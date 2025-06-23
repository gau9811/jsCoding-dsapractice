function dailyTemperatures(temperatures) {
  let stack = [];
  let res = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let resP = stack.pop();
      res[resP] = i - resP;
    }

    stack.push(i);
  }
  console.log(res);
}
console.log(dailyTemperatures([30, 38, 30, 36, 35, 40, 28]));
