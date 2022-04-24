// Given a number n, print all primes smaller than or equal to n.

// Method:	O(N log(log N)).
// When the algorithm terminates, all of the numbers in the list that are not marked are prime.

// mark all numbers which are multiples of the first unmarked numbers and are greater than or equal to the square of it.

const sieveOfEratosthenes = n => {
    // create an array of boolean primes[0..n]
	// initialize all entires in it as true
	let primes = Array.from({length: n+1}, (_, i) => true);
   
    // A value in prime[i] will finally be false if i is Not a prime, else true. */
	for(let p = 2; p * p <= n; p++) {
		// If prime[p] is not changed, then it is a prime
		if(primes[p] === true) {
			// Update all multiples of p
			for(let i = p * p; i <= n; i += p) {
				primes[i] = false;
			}
		}
	}

    // return the primes set to an array
    let primesArr = [];
	for(i = 2; i <= n; i++) {
	   if(primes[i] === true)
		   primesArr.push(i);
    }
    return primesArr;
};

module.exports = sieveOfEratosthenes;
