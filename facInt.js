const facInt = num => {
   // is num a number and an integer?
   if(typeof num === 'number' && num % parseInt(num) === 0) {
	  let facResult = 1;
	  while(num > 1) {
		 facResult *= num;
		 num--;
	  }
	  return facResult;
   }
   if(num === 0) return 1;
   return;
};

module.exports = facInt;
