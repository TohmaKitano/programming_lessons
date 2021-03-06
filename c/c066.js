// c066
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const INPUTS = lines,
        [FISH_COUNT, POY_COUNT, POY_WEIGHT] = INPUTS[0].split(/\s/).map(Number);
  let totalPoyWeight = [...Array(POY_COUNT).keys()].map(_ => POY_WEIGHT);
  let result  = 0,
      counter = 0;
  for (let i = 0; i < FISH_COUNT; i += 1) {
    let tmpFishWeight = Number(INPUTS[i + 1]);
    totalPoyWeight[counter] -= tmpFishWeight;
    if (totalPoyWeight[counter] > 0) {
      result += 1;
    } else {
      counter += (totalPoyWeight[counter] <= 0) * (counter < POY_COUNT - 1);
      totalPoyWeight[counter] -= tmpFishWeight;
      if (totalPoyWeight[counter] > 0) result += 1;
    }
  }
  console.log(result);
});