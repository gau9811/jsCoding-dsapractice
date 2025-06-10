function dailyTemperatures(temperatures) {
  let stack = [];
  let count = 0;
  let i = 0;
  let j = 1;
  while (i <= temperatures.length) {
    while (j <= temperatures.length) {
        if(temperatures[j] > temperatures[i]){
            i++
            j = i
            break
        }else{
            stack.push(temperatures[j])
        }
      j++ 
    }
  }
}
console.log(dailyTemperatures([30, 38, 30, 36, 35, 40, 28]));
