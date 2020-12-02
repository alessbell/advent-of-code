import { puzzleInput } from "./data.js";

let numValidPasswordsPt1 = 0;

// Part 1
puzzleInput.forEach(([numTimes, letter, password]) => {
  const [min, max] = numTimes.split("-").map((i) => parseInt(i));
  const regex = new RegExp(letter, "gi");

  if (
    password.match(regex) &&
    min <= password.match(regex).length &&
    password.match(regex).length <= max
  ) {
    numValidPasswordsPt1 += 1;
  }
});

console.log(numValidPasswordsPt1);

let numValidPasswordsPt2 = 0;

// Part 2
puzzleInput.forEach(([numTimes, letter, password]) => {
  const [first, last] = numTimes.split("-").map((i) => parseInt(i));

  if (password[first - 1] === letter && password[last - 1] === letter) {
    return;
  } else if (password[first - 1] === letter || password[last - 1] === letter) {
    numValidPasswordsPt2 += 1;
  }
});

console.log(numValidPasswordsPt2);
