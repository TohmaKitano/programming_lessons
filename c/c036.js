// c036
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
  const INPUTS  = lines,
        ENTRY_A = INPUTS[0].split(/\s/).map(Number),
        ENTRY_B = INPUTS[1].split(/\s/).map(Number),
        ROUND1  = INPUTS[2].split(/\s/).map(Number),
        ROUND2  = INPUTS[3].split(/\s/).map(Number);
  let roundAWinner, roundBWinner;
  let entryA1 = ENTRY_A[0] - 1,
      entryA2 = ENTRY_A[1] - 1,
      entryB1 = ENTRY_B[0] - 1,
      entryB2 = ENTRY_B[1] - 1;
  let entryA1Value = ROUND1[entryA1],
      entryA2Value = ROUND1[entryA2],
      entryB1Value = ROUND1[entryB1],
      entryB2Value = ROUND1[entryB2];
  entryA1Value < entryA2Value ? roundAWinner = ENTRY_A[0] : roundAWinner = ENTRY_A[1];
  entryB1Value < entryB2Value ? roundBWinner = ENTRY_B[0] : roundBWinner = ENTRY_B[1];
  let entryF1Value, entryF2Value;
  if (roundAWinner < roundBWinner) {
    entryF1Value = ROUND2[0];
    entryF2Value = ROUND2[1];
  } else {
    entryF1Value = ROUND2[1];
    entryF2Value = ROUND2[0];
  }
  let winner, subWinner;
  if (entryF1Value < entryF2Value) {
    winner = roundAWinner;
    subWinner = roundBWinner;
  } else {
    winner = roundBWinner;
    subWinner = roundAWinner;
  }
  console.log(winner);
  console.log(subWinner);
});