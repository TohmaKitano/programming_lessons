// c065
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
        COUNT  = Number(INPUTS[0]);
  let result = [...Array(100).keys()].map(i => ++i);
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = INPUTS[i + 1].split(/\s/);
    let tmpResult,
        tmpString = String(tmp[0]),
        tmpNumber = Number(tmp[1]);
    if (tmpString === '>') tmpResult = result.filter((value) => { return value > tmpNumber; });
    else if (tmpString === '<') tmpResult = result.filter((value) => { return value < tmpNumber; });
    else if (tmpString === '/') tmpResult = result.filter((value) => { return value % tmpNumber === 0; });
    result = tmpResult;
  }
  console.log(Number(result));
});