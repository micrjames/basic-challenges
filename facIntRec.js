const facIntRec = num => {
   // is num a number and an integer?
   if(typeof num === 'number' && num % parseInt(num) === 0) {
		return num * facIntRec(num - 1);
   }
   if(num === 0) return 1;
   return;
};

module.exports = facIntRec;
