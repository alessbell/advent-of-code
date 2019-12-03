import day2data from './day2data.mjs';

const testcase1 = [1, 0, 0, 0, 99]; // 2,0,0,0,99
const testcase2 = [2, 3, 0, 3, 99]; // 2,3,0,6,99
const testcase3 = [2, 4, 4, 5, 99, 0]; // 2,4,4,5,99,9801
const testcase4 = [1, 1, 1, 4, 99, 5, 6, 0, 99]; // 30,1,1,4,2,5,6,0,99

const data = [...day2data];

for (let i = 0; i < data.length + 1; i += 4) {
  if (data[i] === 99) {
    break;
  } else if (data[i] === 1) {
    let int1 = data[data[i + 1]];
    let int2 = data[data[i + 2]];
    let location = data[i + 3];
    data[location] = int1 + int2;
  } else if (data[i] === 2) {
    let int1 = data[data[i + 1]];
    let int2 = data[data[i + 2]];
    let location = data[i + 3];
    data[location] = int1 * int2;
  }
}

console.log(data);
