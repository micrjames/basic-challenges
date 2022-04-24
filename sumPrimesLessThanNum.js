const sieve = require('./sieve');

// Return the sum of all prime numbers that are less than or equal to num.
const sumPrimesLessThanNum = num => {
   const primes = sieve(num);
   return primes.reduce((previous, current) => previous+current);
};

module.exports = sumPrimesLessThanNum;
