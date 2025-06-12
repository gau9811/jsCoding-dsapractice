var minimumRecolors = function (blocks, k) {
  let total = 0;
  let count = Infinity;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") {
      total++;
    }
  }

  count = total

  // console.log(total)
  for (let i = k; i < blocks.length; i++) {
    if(blocks[i - k] == "W") total--
    if(blocks[i] == "W") total++
    total = Math.min(total,count)
  }
  return total
};

console.log(minimumRecolors("WBBWWBBWBW", 7));
