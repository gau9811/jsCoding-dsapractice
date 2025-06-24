var finalPrices = function (prices) {
  let stack = [];
  let res = [...prices];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
      let popped = stack.pop();
      res[popped] = prices[popped] - prices[i];
    }

    stack.push(i);
  }
  return res;
};
console.log(finalPrices([10, 1, 1, 6]));
