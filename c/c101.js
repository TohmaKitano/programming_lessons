// c101
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
  const LUCKY_NUMBER = String(lines[0]);
        YEAR_ARR = [...Array(365)].map((_, i) => String(i));
  let counter = 0;
  for (let i = 0; i < YEAR_ARR.length; i += 1) {
    if (YEAR_ARR[i].includes(LUCKY_NUMBER) === true) counter += 1;
    if (LUCKY_NUMBER === '365') counter += 1;
  }
  console.log(counter);
});