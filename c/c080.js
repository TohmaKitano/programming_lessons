// c080
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
        [BTN_COUNT, JUDGE_COUNT] = INPUTS[0].split(/\s/).map(Number),
        GAME_COUNT = Number(INPUTS[1]),
        PUSH_BTNS = INPUTS[2].split(/\s/).map(Number);
  let goodCount = 0,
      badCount  = 0;
  for (let i = 0; i < GAME_COUNT; i += 1) {
    let correctBtnNumber = (i + 1) % BTN_COUNT;
    if (correctBtnNumber === 0) correctBtnNumber = BTN_COUNT;
    PUSH_BTNS[i] === correctBtnNumber ? goodCount += 1 : badCount += 1;
  }
  badCount >= JUDGE_COUNT ? console.log('-1') : console.log(goodCount * 1000);
});