function maxProfit(prices) {
  let right = 1;
  let left = 0;
  let profit = 0;
  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      let maxProfit = prices[right] - prices[left];
      profit = Math.max(profit, maxProfit);
    } else {
      left = right;
    }
    right++;
  }
  return profit;
}
console.log(maxProfit([5, 1, 5, 6, 7, 1, 10]));
