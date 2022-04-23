const facIntRec = num => {
   if(typeof num === 'number' && num % parseInt(num) === 0) {
		return num * facIntRec(num - 1);
   }
   if(num === 0) return 1;
   return;
};

module.exports = facIntRec;
