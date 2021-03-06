// b015 -> Challenge failure
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
        INPUT_A_ARR = INPUTS[0].split(/\s/).map(String),
        INPUT_B_ARR = INPUTS[1].split(/\s/).map(String);
        
  const NUMBER_LIST = {
    0: [1, 1, 1, 1, 1, 1, 0],
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 1, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1]
  }
  
  const compareNormalArray = (array) => {
    let flag = false;
    for (let i = 0; i < Object.keys(NUMBER_LIST).length; i += 1) {
      if (array.join('') === NUMBER_LIST[i].join('')) {
        flag = true;
        break;
      }
    }
    return flag;
  }
  compareNormalArray(INPUT_A_ARR) === true && compareNormalArray(INPUT_B_ARR) === true ? console.log('Yes') : console.log('No');

  const compareSymmetryArray = (array) => {
    let flag = false;
    [array[1], array[5]] = [array[5], array[1]];
    [array[2], array[4]] = [array[4], array[2]];
    for (let i = 0; i < Object.keys(NUMBER_LIST).length; i += 1) {
      if (array.join('') === NUMBER_LIST[i].join('')) {
        flag = true;
        break;
      }
    }
    return flag;
  }
  compareSymmetryArray(INPUT_A_ARR) === true && compareSymmetryArray(INPUT_B_ARR) === true ? console.log('Yes') : console.log('No');

  const compareLotationArray = (array) => {
    let flag = false;
    [array[3], array[0]] = [array[0], array[3]];
    [array[4], array[1]] = [array[1], array[4]];
    [array[5], array[2]] = [array[2], array[5]];
    for (let i = 0; i < Object.keys(NUMBER_LIST).length; i += 1) {
      if (array.join('') === NUMBER_LIST[i].join('')) {
        flag = true;
        break;
      }
    }
    return flag;
  }
  compareLotationArray(INPUT_A_ARR) === true && compareLotationArray(INPUT_B_ARR) === true ? console.log('Yes') : console.log('No');

});