// A JavaScript function that checks whether a number is perfect.

//  Cond1: A perfect number is a positive integer that is equal to the sum of its proper positive divisors, excluding the number itself
//  cond 2: Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

// 1: Collect an input no from user
function perfect_number(number) {
  // 2. Initialize a variable to store the total of the correct positive divisors to be 0
  let sum = 0;
  // Search all divisors from 1 to number/2
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  //   If number is sum of all divisors.
  if (sum === number && sum !== 0) {
    return `${number} is a perfect number`;
  } else {
    return`${number} is not a perfect number`;
  }
}

console.log(perfect_number(20));
console.log(perfect_number(144));
console.log(perfect_number(28));
