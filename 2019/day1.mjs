import modules from './day1data.mjs';

// part 1

const calculateFuel = m => Math.floor(m / 3) - 2;

const part1FuelSum = modules.reduce((acc, currModule) => {
  const fuelRequired = calculateFuel(currModule);
  return acc += fuelRequired;
}, 0);

console.log(part1FuelSum);

// part 2

const part2FuelSum = modules.reduce((acc, currModule) => {
  let fuelRequired = calculateFuel(currModule);
  let fuel = fuelRequired;
  let newFuel = fuelRequired;
  while (newFuel > 0) {
    newFuel = calculateFuel(newFuel);
    if (newFuel > 0) {
      fuel += newFuel;
    }
  }
  return acc += fuel;
}, 0);

console.log(part2FuelSum);
