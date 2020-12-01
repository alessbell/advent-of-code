import { puzzleInput } from "./data.js";

let answer;
for (let firstNumIdx = 0; firstNumIdx < puzzleInput.length; firstNumIdx++) {
  if (answer) {
    console.log(answer);
    break;
  }
  for (
    let secondNumIdx = firstNumIdx + 1;
    secondNumIdx < puzzleInput.length;
    secondNumIdx++
  ) {
    // Part 1:
    // if (puzzleInput[firstNumIdx] + puzzleInput[secondNumIdx] === 2020) {
    //   answer = puzzleInput[firstNumIdx] * puzzleInput[secondNumIdx];
    //   break;
    // }

    // Part 2:
    for (
      let thirdNumIdx = secondNumIdx + 1;
      thirdNumIdx < puzzleInput.length;
      thirdNumIdx++
    ) {
      if (
        puzzleInput[firstNumIdx] +
          puzzleInput[secondNumIdx] +
          puzzleInput[thirdNumIdx] ===
        2020
      ) {
        answer =
          puzzleInput[firstNumIdx] *
          puzzleInput[secondNumIdx] *
          puzzleInput[thirdNumIdx];
        break;
      }
    }
  }
}
